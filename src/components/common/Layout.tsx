import React from 'react'

import Menu from '../Menu'
import { useRouter } from 'next/router'

const Layout = ({ children }) => {

  const { asPath } = useRouter()

  return (
    <>
      { (asPath === '/dashboard' || asPath === '/wallet' || asPath === '/swap') && <Menu/>}
      {children}
    </>
  )
}

export default Layout
