import { createParamDecorator } from "@storyofams/next-api-decorators"
import { ReqUser } from "next"

export const CurrentUser = createParamDecorator<ReqUser | undefined>(
  (req) => req.user,
)
