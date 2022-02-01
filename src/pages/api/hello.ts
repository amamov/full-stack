import { NextAuthGuard } from "@api/middleware/NextAuthGueard"
import { CurrentUser } from "@api/parameter/CurrentUser"
import { createHandler, Get } from "@storyofams/next-api-decorators"
import { IsString } from "class-validator"
import { ReqUser } from "next"

export class ResponseDataDto {
  @IsString()
  name!: string
}

class HelloHandler {
  @Get()
  @NextAuthGuard()
  helloWorld(@CurrentUser() user: ReqUser): ResponseDataDto {
    const data = { name: "hello world!", user }
    return data
  }
}

export default createHandler(HelloHandler)
