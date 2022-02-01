import { NextApiRequest } from "next"
import { NextRequest, NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import {
  onlyPrivatePathList,
  onlyPublicPathList,
} from "@lib/client/constant/accessList"

const redirect = (req: NextRequest, path: string) => {
  const url = req.nextUrl.clone()
  url.pathname = path
  return NextResponse.redirect(url)
}

export default async function clientAuthGuard(
  req: NextRequest & NextApiRequest,
) {
  const currentPath = req.nextUrl.pathname
  const user = await getToken({
    req,
    secret: process.env.SECRET,
    secureCookie: process.env.NEXTAUTH_URL.startsWith("https://"),
  })
  const publicAccessDenied = user && onlyPublicPathList.includes(currentPath)
  const privateAccessDenied = !user && onlyPrivatePathList.includes(currentPath)
  if (publicAccessDenied) return redirect(req, "/")
  else if (privateAccessDenied) return redirect(req, "/auth/signin")
  else return NextResponse.next()
}
