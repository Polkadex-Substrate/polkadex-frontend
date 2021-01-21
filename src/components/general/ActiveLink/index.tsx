import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

function ActiveLink({ children, href, activeClassName }) {
  const { asPath } = useRouter()

  return (
    <Link href={href}>
      {React.cloneElement(children, { className: asPath === href ? activeClassName : null })}
    </Link>
  )
}

export default ActiveLink
