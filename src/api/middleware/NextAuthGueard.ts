import {
  createMiddlewareDecorator,
  NextFunction,
  UnauthorizedException,
} from "@storyofams/next-api-decorators"
import { NextApiRequest, NextApiResponse } from "next"
import { getToken } from "next-auth/jwt"

const secret = process.env.SECRET

export const NextAuthGuard = createMiddlewareDecorator(
  async (req: NextApiRequest, _res: NextApiResponse, next: NextFunction) => {
    const token = await getToken({ req, secret })
    if (!token || !token.name) {
      throw new UnauthorizedException()
    }
    req.user = token
    next()
  },
)
