import React, { useEffect, useState } from 'react'
import Flick from './Flick'
import axios from 'axios'

const BASE_URL = 'https://www.omdbapi.com/'
const API_KEY_PARAM = '?apikey=3bb1db48'
export default function FlickList() {
  const [flicks, setFlicks] = useState([])
  
  useEffect(()=>{
    // http://www.omdbapi.com/
    retrieveMovieData()
  },[])

  const retrieveMovieData = async () => {
    const constructedRequestQuery = `${BASE_URL}${API_KEY_PARAM}&s=fast`
    console.log('url? ', constructedRequestQuery)
    await axios
        .get(constructedRequestQuery, {})
        .then((res) => {
          console.log('response from omdb api?? : ', res.data)
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
