import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios'

const Table3 = () => {
  var [users,setUsers] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            setUsers(response.data);
            console.log(users);
        })
    .catch(err=>{console.log(err)})
    },[])
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Title</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((value,index)=>{
                    return(
                      <TableRow>
                        <TableCell>{value.id}</TableCell>
                        <TableCell>{value.title}</TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Table3
