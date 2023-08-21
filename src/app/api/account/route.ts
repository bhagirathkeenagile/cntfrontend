import { NextResponse } from "next/server";
import Cryptr from "cryptr";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
// const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.SECRET_KEY || "myTotallySecretKey");
const baseUrl = process.env.BASE_URL || "http://localhost:5002";

/**
 * GET request to /api/account
 * @param request Request
 * @returns JSON | Redirect
 */
export async function GET(request: Request) {
  /**
   * Uncomment to run auth
   */
  // const userInfo = await getServerSession({ req: request, ...authOptions });
  // if (!userInfo || !userInfo?.user || !userInfo?.user?.name) {
  //   return NextResponse.redirect("/auth/login");
  // }
  // const referData = `${userInfo.user.name}-${process.env.API_KEY}`;
  // const apiKey = cryptr.encrypt(referData);
  const response = await fetch(`${baseUrl}/map/get-account`, {
    method: "POST",
    // headers: {
    //   "x-api-key": apiKey,
    // },
  });
  const data = await response.json();
  return NextResponse.json({
    body: data,
  });
}
