import React from 'react'

import Footer from '../footer'
import Header from '../header'

interface Props {
    children: JSX.Element
}

const Layout = ({children}: Props) => {
  return (
    <>
        <Header />
        <main>{children}</main>
        <Footer />
    </>
  )
}

export default Layout