import React, { useEffect, useState } from 'react'
import Flick from './Flick'
import axios from 'axios'
import { API_KEY_PARAM, BASE_URL } from '../consts'

export default function FlickList() {
  const [flicks, setFlicks] = useState([])
  
  useEffect(()=>{
    retrieveMovieData()
  },[])

  const retrieveMovieData = async () => {
    const constructedRequestQuery = `${BASE_URL}${API_KEY_PARAM}&s=fast`
    await axios
        .get(constructedRequestQuery, {})
        .then((res) => {
          setFlicks(res.data.Search)
        })
        .catch((err) => {
          console.log('error hitting omdb api: ', err)
        })
  }


  return (
    <div className={`w-11/12 h-[94%] flex flex-col overflow-y-scroll`}>
        {flicks && flicks.map(f => {
          return <div key={f.imdbID} className={`flex flex-row mb-4 items-center justify-start`}>
            <Flick data={f} />
          </div>
        })}
    </div>
  )
}
