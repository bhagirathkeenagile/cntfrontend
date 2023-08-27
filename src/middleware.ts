/**
 * Uncomment to run auth
 */
 export { default } from "next-auth/middleware";
 export const config = {
   matcher: ["/", "/"],
 };

/**
 * Comment to run auth
 */
//export default function () {}
