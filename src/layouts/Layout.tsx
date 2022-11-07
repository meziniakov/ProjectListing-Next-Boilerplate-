import type { ReactNode } from 'react'

import Nav from '../components/Nav/index'

type ILayout = {
  children: ReactNode
}
const Layout = (props: ILayout) => (
  <>
    <Nav />
    <div className="container mx-auto mt-7 gap-7">{props.children}</div>
  </>
)

export { Layout }
