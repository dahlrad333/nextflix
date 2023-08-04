import Image from 'next/image'
import React from 'react'

type Props = {
  data: any
}

export default function Flick({
  data,
}: Props) {


  return (
    <div className={`w-[75px] h-[75px] bg-white`}>
        movie {data.id}
    </div>
  )
}
