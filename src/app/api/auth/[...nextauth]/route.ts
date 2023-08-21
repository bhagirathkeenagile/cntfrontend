import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
// import CredentialsProvider from "next-auth/providers/credentials";
import SalesForceProvider from "next-auth/providers/salesforce";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    SalesForceProvider({
      clientId: process.env.SALESFORCE_CLIENT_ID || "",
      clientSecret: process.env.SALESFORCE_CLIENT_SECRET || "",
    }),
  ],
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
