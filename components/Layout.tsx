
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


  return (
    <div className={`overflow-x-hidden flex flex-grow h-[100vh] border border-red bg-black`}>

      <header className="fixed w-full h-[10%] z-[1] flex flex-row justify-between items-center px-9 border border-orange text-4xl text-bold text-red font-bold">
          NextFlix
      </header>

      <main
        className="flex flex-col flex-grow border border-yellow"
      >
        {children}
      </main>
      <footer
        className={`absolute bottom-0 z-[1] w-full h-[5%] border border-blue flex flex-row items-center justify-end p-6`}
      >
        <div>NextFlix</div>
        
      </footer>
    </div>
  )
}
