import { signOut, useSession } from "next-auth/react"
import useSWR from "swr"
import { useForm } from "react-hook-form"
import { getFetcher } from "@lib/client/fetcher"
import Layout from "@components/layout/default/Layout"
import { ResponseDataDto } from "./api/hello"
import {
  authenticated,
  loading,
  unauthenticated,
} from "@lib/client/constant/sessionStatus"

type FormData = {
  firstName: string
  gender: string
}

export default function Page() {
  const { data: session, status } = useSession()
  const { data: helloData } = useSWR<ResponseDataDto>("/api/hello", getFetcher)
  const { register, handleSubmit } = useForm<FormData>()

  return (
    <Layout>
      <h1>Home</h1>
      <h2>{helloData?.name}</h2>

      <h2>{!loading(status) && session?.user?.name}</h2>

      <h3>{unauthenticated(status) && <a href="/auth/signin">로그인</a>}</h3>

      {authenticated(status) && (
        <a
          href={`/api/auth/signout`}
          onClick={(event) => {
            event.preventDefault()
            signOut()
          }}
        >
          로그아웃
        </a>
      )}

      <div>
        <a href={`/mobx`}>mobx (should login)</a>
      </div>

      <form onSubmit={handleSubmit((data: FormData) => console.log(data))}>
        <input {...register("firstName")} />
        <select {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <input type="submit" />
      </form>
    </Layout>
  )
}
