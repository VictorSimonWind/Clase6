import React from 'react'
import {useState, useEffect} from 'react'

export default function Promises() {

const [products, setProducts] = useState([]);
useEffect(()=>{
    getProducts()
})

const getProducts = () =>{

        let resolve;
        //emulamos llamada al servidor
        setTimeout(()=>{
            /** el retorno de una llamada suele durar 
             * varios segundos, este caso lo emulamos 
             * con un Timeout */
            let resolve = "[{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"},{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"},{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"},{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"},{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"},{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"}]"
            console.log(resolve);
        },3000);
            /**al pedirle que convierta la respuesta de
             * nuestro servidor en un objecto JSON para
             * empezar a trabajar con, la aplicacion se 
             * rompe, por que si bien JavaScript inicio
             * la llamada al servidor, no espero a tener 
             * un resultado para seguir con el resto de la
             * aplicacion.
             * ESTO UN COMPORTAMIENTO ASYNCRONO
            */
         resolve = JSON.parse(resolve);
         setProducts(resolve);

         
    
/** 
        new Promise((resolve,reject)=>{
                //emulamos llamada al servidor
            setTimeout(()=>{
                resolve("[{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"},{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"},{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"},{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"},{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"},{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"}]");
                console.log(resolve);
            },1000)
        }).then(resolve =>{
            resolve = JSON.parse(resolve);
            setProducts(resolve);
        });
*/

      
  
    

}

    return (
        <div className='Product_Container'>

            {/*<h1 className='title_Product'>{products}</h1>*/}
            {products.map(element => {
                return (<TestComponent
                            id={element.id}
                            image={element.image}/>
                )
            })}
        </div>
    )
}


export function TestComponent(props) {
    return(
        <>
        <img alt='card' style={{width:150}} src={props.image}/>
        </>
    )
}