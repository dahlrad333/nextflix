
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { ReactNode, useEffect, useState } from 'react'

type Props = {
  children?: ReactNode
  maxInteractives?: number
  currInteractive?: number
  audioSrc?: string
  hideBreadcrumb?: boolean
  hideHeader?: boolean
}

export default function Layout({
  children,
}: Props) {
  const router = useRouter()


  return (
    <div className={`overflow-x-hidden flex flex-grow h-[100vh] `}>

      <header className="fixed w-full h-[20%] z-[1] flex flex-row justify-between items-center px-9">
        {/* POGS LOGO */}
        <div className="flex flex-col justify-center items-center h-[60px] w-[60px] bg-[url('/icons/badge.svg')] bg-contain bg-center bg-no-repeat"></div>

        {/* CONNECT WALLET */}
        <div className="flex flex-col justify-center items-end h-1/3 w-[200px]">
          
        </div>
      </header>

      <main
        className="flex flex-col flex-grow "
      >
        {children}
      </main>
      <footer
        className={`absolute bottom-0 z-[1] w-full h-fit justify-center bg-gradient-to-t from-black via-black`}
      >
      </footer>
    </div>
  )
}
