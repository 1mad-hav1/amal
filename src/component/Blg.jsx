import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Blg = () => {
    var [name,setName] = useState("");
    var [des,setDes] = useState("");
    var [aut,setAut] = useState("");
    const Nme = (n)=>
    {
      setName(n.target.value);
      console.log(name);
    }
    const Des = (d)=>
    {
      setDes(d.target.value);
      console.log(des);
    }
    const Aut = (a)=>
    {
      setAut(a.target.value);
      console.log(aut);
    }
    const add = ()=>{
      alert("Data added")
    }
  return (
    <div>
        <TextField variant='outlined' label="Blog Name" onChange={Nme}/>
        <TextField variant='outlined' label="Description" onChange={Des}/>
        <TextField variant='outlined' label="Author Name" onChange={Aut}/>
        <br/>
        <Button variant='contained'onClick={add}>Add Blog</Button>
    </div>
  )
}

export default Blg