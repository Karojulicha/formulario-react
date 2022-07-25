import React, { useState } from "react";


function Formulario (props){
    const [name, setName] = useState= ("")
    const [lastname, setLastname] = useState= ("")
    const [number, setNumber] = useState= ("")
    const [email, setEmail] = useState= ("")

    const cambiarname = (e) => {
        setName (e.target.value);
      const validar =  /^\s+$/g.test(e)
      console.log (validar)
    }
    const cambiarlastname = (e) => {
        setLastname(e.target.value);
        
            }
     const cambiarnumber = (e) => {
        setNumber(e.target.value);
     }
    const cambiaremail = (e) => {
        setEmail(e.target.value);
      }
      const enviar =(e) => {
        e.preverdefault();
        console.log ("name:" ,name , "apellido:" ,lastname , "numero:" ,number , "email:" ,email )
        
      }

      //if (cambiarname.length === 0 || /^\s+$/.test(cambiarname)){
      // alert ("El campo de nombre esta vacio");}
       
 return(
    <div>
        <form onSubmit={enviar}>
            <h2> Datos Basicos </h2>
            <label>
                Nombre:
                <input type="name" value ={ name } onChange={cambiarname}></input>
            </label>
            <label>
                Apellido:
                <input type="lastName" value ={lastname} onChange={cambiarlastname}></input>
            </label>
            <label>
                Telefono:
                <input type="number" value ={number} onChange={cambiarnumber}></input>
            </label>
            <label>
                Email:
                <input type="email" value ={email} onChange={cambiaremail}></input>
            </label>
        </form>
        <button type="submit">Ingresar datos</button>
    </div>

 )
} export default Formulario