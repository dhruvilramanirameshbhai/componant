import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Effect = () => {
    const [product, setproduct] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products').then((result)=>{
            return result.json()
        }).then((res)=>{
            console.log(res);
            setproduct(res)
        }) 
    },  [])
  return (
    <div className='container d-flex flex-wrap'>
        {product.map((prd)=>{
            return(
                <>
                <div className= "card" style={{width:'18rem',margin:'auto',border:'4px solid black',backgroundColor:'blueviolet'}}>
                    <img src={prd.image} className="card-img-top" alt="" />
                    <div className="card-body">
                      <h5 className="card-title">{prd.title}</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <h5 >$ {prd.price}</h5>
                      <a href="#" className="btn btn-primary">go somewhere</a>
                    </div>

                </div>
                </>
            )
        })}


    </div>
  )
}

export default Effect