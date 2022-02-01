import { ReactNode } from "react"
import Header from "@components/layout/default/Header"
import Footer from "@components/layout/default/Footer"
import { LayoutStyle } from "./Layout.style"

type Props = {
  children: ReactNode
}

const isLoading = false

export default function Layout({ children }: Props): JSX.Element {
  return (
    <>
      {isLoading ? (
        "loading..."
      ) : (
        <LayoutStyle.Wrapper>
          <Header />
          <main>{children}</main>
          <Footer />
        </LayoutStyle.Wrapper>
      )}
    </>
  )
}
