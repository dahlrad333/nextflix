import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

import { NextPageContext } from "next";
import { API_KEY_PARAM, BASE_URL } from '../consts';


export const getServerSideProps = async (context: NextPageContext) => { {
    const { query } = context;
    return { props: { query } };
  }
}

export default function FlickDetails() {
    const router = useRouter()
    const [data, setData] = useState(null)
    const [queryParam, setQueryParam] = useState(null)
    const [imgSrc, setImgSrc] = useState("")
    const [imgAlt, setImgAlt] = useState("")
  
  useEffect(()=>{
    if(queryParam){
      retrieveMovieData()
    } 
  },[queryParam])

  useEffect(() => {
    if(router.isReady){
        const { id } = router.query;
        setQueryParam(id)
     }
  }, [router.isReady]);

  useEffect(()=>{
    if(data?.Poster){
      setImgSrc(String(data.Poster))
      setImgAlt(String(data.Title))
    }
  }, [data])



  const retrieveMovieData = async () => {
    const constructedRequestQuery = `${BASE_URL}${API_KEY_PARAM}&i=${queryParam}`
    await axios
        .get(constructedRequestQuery, {})
        .then((res) => {
          setData(res.data)
          
          // setFlicks([{id: 1, title:"Matrix"}, {id:2, title:"Matrix 2"}, {id:3, title:"Matrix 3"},{id: 4, title:"Land Before Time"}, {id:6, title:"Spy Kids"}, {id:5, title:"Homeward Bound"}])
        })
        .catch((err) => {
          console.log('error hitting omdb api: ', err)
        })
  }




  return (
    <div className={`w-full h-full bg-dark_grey px-5 flex flex-row justify-start items-center text-black font-bold`} >
        { data && <>

            <div className={`w-[40%] h-full py-5 flex flex-col items-left justify-start text-black font-bold`} >
              {imgSrc && imgAlt && <Image src={imgSrc} alt={imgAlt} width={300} height={540} className=''/>}
              
            </div>
            <div className={`w-[60%] h-full p-7 flex flex-col items-left justify-start text-black font-bold`} >
              <div className={`text-4xl py-4 flex flex-row text-white font-bold`}>{data.Title}</div>
              <div className={`text-lg py-2 flex flex-row text-white font-semibold`}>{data.Plot}</div>
              <div> </div>
              <div className={`text-xl py-2 flex flex-col text-white font-semibold`}>{data.Ratings && data.Ratings.map(r => {
                return <div key={r.Source}>
                  {r.Source} - {r.Value}
                </div>
              })}</div>
            </div>
        </>}
        
    </div>
  )
}
