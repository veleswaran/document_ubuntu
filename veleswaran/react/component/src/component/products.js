import {useEffect, useState} from 'react'
const Product =()=>{
   const [product,setProduct]=useState([])
   useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data=>{
        console.log(data.products)
        setProduct(data.products)
   })
   },[])
    return(
        <>
        <h1>hi veleswara</h1>
        {product && product.map((val,index)=>
            <div key={index}>
               <p> {val.title}</p>
               <img src={val.images[0]} width="400px" height="400px"/>
            </div>
        )}
        </>
    )
}
export default Product