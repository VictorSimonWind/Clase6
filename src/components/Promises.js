import React from 'react'
import {useState, useEffect} from 'react'

export default function Promises() {

const [products, setProducts] = useState([]);

useEffect(()=>{

    getProducts()

})

const getProducts = () =>{

    new Promise((resolve,reject)=>{
      //emulamos llamada al servidor
      setTimeout(()=>{
        let response = ['Producto 1','producto 2','producto 3'];
    },5000)
        
        
    }).then(resolve =>{
        setProducts(resolve);
    })

    

}

    return (
        <div className='Product_Container'>

            {<h1 className='title_Product'>{products}</h1>}
            {products.map(element => {
                return <h1 className='title_Product'>{element}</h1>
            })}
        </div>
    )
}
