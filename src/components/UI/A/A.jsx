import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function A({ href, children, active, noactive }) {
  const router = useRouter()

  let className = children.props.className || ''
  if (router.pathname === href) {
    className = `${className} ${active}`
  } else {
    className = `${className} ${noactive}`
  }
  return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}