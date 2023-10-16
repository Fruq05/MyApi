// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const Form = () => {
//     const [bankData, setBankData] = useState([])

//     const Api = "https://nigerianbanks.xyz/"

//     const fetchBankData = () => {
//             fetch(Api)
//             .then((res) => res.json())
//             .then((data) => console.log(data))
//             .catch((err) => console.log(err))
//     }

//     const fetchBankData = () => {
//             axios.get(Api)
//             .then((res) => console.log(res))
//     }

//     useEffect(() => {
//         fetchBankData()
//     }, [])
//   return (
//     <div className='d-flex flex-wrap gap-5 p-5 justify-content-center' >
//         {
//             bankData.map((bd,i) => (
//                 <div class="card" style={{width: "18rem"}} key={i}>
//   <img src={bd.logo} class="card-img-top" alt="..." />
//   <div class="card-body">
//     <h5 class="card-title">{bd.name}</h5>
//     <p class="card-text">{bd.code}</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//             ))
//         }

//     </div>
//   )
// }

// export default Form