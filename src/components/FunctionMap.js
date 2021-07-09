import React from 'react'
import { useState, useEffect } from 'react'

export default function FunctionMap() {

    const [productos,setProductos] = useState([]);

    /**Map es un methodo que genera un array
     * completamente nuevo y lo llena con los resultados 
     * de una funcion que se repite por cada elemento del
     * array que estamos procesando.
     * 
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
     */
    const mapProductos = (array) =>{
            /**Una Map puede recibir hasta 3 parametros*/
                                //item - indice - array que esta iterando
        let newArray = array.map((element,index,arrayEnProceso) =>{
            let offerta = arrayEnProceso.filter(filter => filter.price > element.price)
            return(
                    {
                        id:element.id,
                        price:element.price,
                        array: arrayEnProceso,
                        tieneOferta: offerta.length < 1
                                    ? 'tiene oferta'
                                    : 'no tiene oferta'

                    }
                    
                  )
        })

        console.log(newArray);
        setProductos(newArray);
    }

    

    const getProducts = async () =>
    {
        /**Declarando el fetch */
        let llamada = fetch('http://localhost:4000/Products');
        /**llamando al servidor */
        let data = await llamada;
        /**procesar la respuesta */
        data = await data.text();
        data = JSON.parse(data);
        
        
         mapProductos(data);
        
    }

    


    useEffect(()=>{
        getProducts();
    })

    return (
        <div>
            {productos.map(element =>{
                    return(
                        <Component1
                                price={element.price}
                                oferta={element.tieneOferta}
                                />
                        )
            })
                }
           
        </div>
    )

}

export function Component1(props){
return(
    <div>
       <h1> {props.price}</h1>
        <h1>{props.oferta}</h1>
    </div>
)
}
