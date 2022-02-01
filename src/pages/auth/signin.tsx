import { GetServerSideProps } from "next"
import { BuiltInProviderType } from "next-auth/providers"
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn,
} from "next-auth/react"

type Props = {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null
}

export default function Page({ providers }: Props) {
  // console.log(providers)
  return (
    <>
      {providers &&
        Object.values(providers).map((provider) => {
          return (
            <div key={provider.name}>
              <button onClick={() => signIn(provider.id)}>
                Sign in with {provider.name}
              </button>
            </div>
          )
        })}
    </>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
