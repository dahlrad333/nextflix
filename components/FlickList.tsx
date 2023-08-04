import React, { useEffect, useState } from 'react'
import Flick from './Flick'

export default function FlickList() {
  const [flicks, setFlicks] = useState([])
  
  useEffect(()=>{
    
    setFlicks([{id: 1, title:"Matrix"}, {id:2, title:"Matrix 2"}, {id:3, title:"Matrix 3"},{id: 4, title:"Land Before Time"}, {id:6, title:"Spy Kids"}, {id:3, title:"Homeward Bound"}])
  },[])


  return (
    <div className={`w-11/12 h-[85%] border border-white flex flex-col overflow-y-scroll`}>
        {flicks && flicks.map(f => {
          console.log('hello?')
          return <div key={f.id} className={`border border-white flex flex-row h-44 w-full p-5`}>
            <div className={` flex flex-col h-44 w-full`}>
              <div>{f.title}</div>
              <Flick data={f}/>
            </div>
            
          </div>
        })}
    </div>
  )
}
