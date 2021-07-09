/**JAVASCRIPT ES SINCRONICO Y SE MANEJA DE UN HILO A LA VEZ*/

/**muchas veses vamos a sentir que muchas cosas ocurren a la vez
 * debido a la velocidad a la que los eventos se disparan,
 *  pero el codigo siempre se lee de arriba hacia abajo,
 * y cuando un bloque de codigo se ejecuta, no hay otro que se ejecute a la vez.
 * 
 * para indagar mas en el tema, pueden leer el articulo debajo
 * 
 * https://stackoverflow.com/questions/2035645/when-is-javascript-synchronous
 * 
 * a todo esto, JS tiene Excepciones a este comportamiento, 
 * que le permiten comportarse de forma Syncronica estos son CallBacks
 * Ejemplos
 * setTimeout();
 * fetch();
 * llamadas Ajax
 * 
 */
import React from 'react'
import {useState, useEffect} from 'react'

export default function Promises() {

const [products, setProducts] = useState([]);

useEffect(()=>{
    getProducts();
})

const llamada = async () =>{
    /**Syntaxys Async await */
  // let promesa = new Promise((resultado,fallido)=>{/**funcion a llamar */})
  // let data = await promesa;
}

const getProducts = async () =>{




       // let resolve;
      //  //emulamos llamada al servidor
      //  setTimeout(()=>{
      //      /** el retorno de una llamada suele durar 
      //       * varios segundos, este caso lo emulamos 
      //       * con un Timeout */
      //      let resolve = "[{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"},{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"},{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"},{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"},{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"},{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"}]"
      //      console.log(resolve);
      //      },3000);
      //      /**al pedirle que convierta la respuesta de
      //       * nuestro servidor en un objecto JSON para
      //       * empezar a trabajar, la aplicacion se 
      //       * rompe, por que si bien JavaScript inicio
      //       * la llamada al servidor, no espero a tener 
      //       * un resultado para seguir con el resto de la
      //       * aplicacion.
      //       * ESTO UN COMPORTAMIENTO ASYNCRONO
      //      */
      //   resolve = JSON.parse(resolve);
      //   setProducts(resolve);

         
   //    let ServerOnline = false;
   //    new Promise((resolve,reject)=>{
   //          //emulamos llamada al servidor
   //      setTimeout(()=>{
   //          if(ServerOnline){
   //              resolve("[{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"},{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"},{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"},{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"},{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"},{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"}]");
   //          }else{
   //              reject( new Error('Servidor sin conexion'));
   //          }
   //          console.log(resolve);
   //      },3000)
   //  }).then(resultado =>{
   //      //Resultado tiene el valor de resolve 
   //      resultado = JSON.parse(resultado);
   //      setProducts(resultado);
   //  }).catch(error =>{
   //      //Error tiene el resultado de reject
   //      alert(error.message);
   //  })

        /**SUGAR SYNTAX  ASYNC AWAIT
         * async hace que una funcion retorne una promesa
         * await makes que una funcion espere por la promesa
        */
        
       let ServerOnline = true;
        let promesa = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(ServerOnline){
                    resolve("[{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"},{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"},{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"},{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"},{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"},{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"}]");
                }else{
                    reject( new Error('Servidor sin conexion'));
                }
            },3000);    
        });
        console.log(promesa);
         let data = await promesa;
         console.log(data);
         data = JSON.parse(data);

         setProducts(data);

}

    return (
        <div className='Product_Container'>

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