import { createParamDecorator } from "@storyofams/next-api-decorators"

export const UserAgent = createParamDecorator<string | undefined>(
  (req) => req.headers["user-agent"],
)
