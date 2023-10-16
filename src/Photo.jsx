import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Photo = () => {
    const [photoData, setPhotoData] = useState([])

    const NewApi = "https://jsonplaceholder.typicode.com/photos"

    const fetchPhotoData = () => {
        axios.get(NewApi)
        .then((res) => setPhotoData(res.data))
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        fetchPhotoData()
    },[])
  return (
    <div>
         {
            photoData.map((pd,i) => (
                <div class="card" style={{width: "18rem"}} key={i}>
            <img src={pd.url} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{pd.title}</h5>
                <p class="card-text">{pd.code}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            ))
        }
    </div>
  )
}

export default Photo


