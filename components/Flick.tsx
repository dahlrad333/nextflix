import Image from 'next/image'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

type Props = {
  data: any
}

export default function Flick({
  data,
}: Props) {

  return (
    <Link href={{pathname:'/details', query: `id=${data.imdbID}` }} className={`w-full h-full bg-dark_grey px-5 flex flex-row justify-start items-center text-black font-bold`}>
        <Image src={data.Poster} alt={data.Title} width={130} height={200} className='py-5'/>
        <div className={`h-full p-5 flex flex-row text-white font-bold`}>{data.Title}</div>
    </Link>
  )
}
