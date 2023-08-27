import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
// import CredentialsProvider from "next-auth/providers/credentials";
import SalesForceProvider from "next-auth/providers/salesforce";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 60 * 1, // 1 minutes
  },
  providers: [
    SalesForceProvider({
      name: 'Salesforce',
      clientId: process.env.SALESFORCE_CLIENT_ID || '',
      clientSecret: process.env.SALESFORCE_CLIENT_SECRET || '',
      idToken: true,
      wellKnown: process.env.SALESFORCE_URL_LOGIN || '',
      async profile(profile) {

        return {
            id: profile.sub,
            name: profile.name,
            firstname: profile.given_name,
            lastname: profile.family_name,
            email: profile.email,
            image: profile.picture,
        }
    },
  })
],
secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
