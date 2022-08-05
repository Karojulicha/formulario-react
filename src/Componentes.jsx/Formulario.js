import React, { useState } from "react";

function Formulario (props) {

    const [ names, setNames] = useState= ("");
    const [lastname, setLastname] = useState= ("");
    const [number, setNumber] = useState= ("");
    const [email, setEmail] = useState= ("");

    

    
    const CambiarName = (e) => {
        setNames (e.target.value);
      const validar =  /^\s+$/g.test(e)
      console.log (validar)
    }
    const CambiarLastname = (e) => {
        setLastname(e.target.value);
        const validar =  /^\s+$/g.test(e)
      console.log (validar)
            }
     const CambiarNumber = (e) => {
        setNumber(e.target.value);
        const validar =  /^\s+$/g.test(e)
      console.log (validar)
     }
    const CambiarEmail = (e) => {
        setEmail(e.target.value);
        const validar =  /^\s+$/g.test(e)
      console.log (validar)
      }
      const Enviar =(e) => {
        e.preverdefault();
        console.log ("name:" ,names , "apellido:" ,lastname , "numero:" ,number , "email:" ,email )
        
      }

      if (CambiarName.length === 0 || /^\s+$/.test(CambiarName)){
       alert ("El campo de nombre esta vacio");}
       if (CambiarLastname .length === 0 || /^\s+$/.test(CambiarLastname )){
        alert ("El campo de nombre esta vacio");}
        if (CambiarNumber .length === 0 || /^\s+$/.test(CambiarNumber )){
            alert ("El campo de nombre esta vacio");}
            if (CambiarEmail .length === 0 || /^\s+$/.test(CambiarEmail)){
                alert ("El campo de nombre esta vacio");}
       
 return(
    <div className="div1">
        <form onSubmit={Enviar}>
            <h2> Datos Basicos </h2>
            <label>
                Nombre:
                <input type="name" value ={names} onChange={CambiarName}></input> <br/>
            </label>
            <label>
                Apellido:
                <input type="lastName" value ={lastname} onChange={CambiarLastname}></input> <br/>
            </label>
            <label>
                Telefono:
                <input type="number" value ={number} onChange={CambiarNumber}></input> <br/>
            </label>
            <label>
                Email:
                <input type="email" value ={email} onChange={CambiarEmail}></input> <br/>
            </label>
        </form> 
        <br/>
        <button type="submit">Ingresar datos</button> <br/>

        lista de tareas <br/>{ [names, lastname, number, email ] }
    
    
    </div> ) };
       
   

        

    export default Formulario;