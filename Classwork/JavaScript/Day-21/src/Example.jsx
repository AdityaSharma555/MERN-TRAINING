import React, { useEffect, useState } from 'react'

const Example = () => {
    const [data, setdata] = useState([])

    const api=()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            return res.json()
        }).then((data)=>{
    setdata(data)
    console.log(data);
        })
    }
    useEffect(()=>{
 api();
    
    },[])
// 
//  console.log(data);
  return (
    <div>
        <h1>exmaple</h1>
        {
            data.map((item)=>{
                return(
<h1>{item.title}</h1>
                )

            })
        }
    </div>
  )
}

export default Example