

import React from 'react'
import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

export default function Layout({
  children,
}: Props) {


  return (
    <div className={`overflow-x-hidden flex flex-grow h-[100vh] bg-black`}>

      <header className="fixed w-full h-[10%] z-[1] flex flex-row justify-between items-center px-9 border-b border-dark_grey bg-black text-4xl text-bold text-red font-bold">
          NextFlix
      </header>

      <main
        className="flex flex-col flex-grow"
      >
        {children}
      </main>
      <footer
        className={`absolute bottom-0 z-[1] w-full h-[5%]flex flex-row items-center justify-end p-6`}
      >
        <div>NextFlix</div>
        
      </footer>
    </div>
  )
}
