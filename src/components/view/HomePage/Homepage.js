import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import Empdetails from '../EmpDetails/Empdetails';
export default function BasicTable() {
  const [users, setUsers] = useState([]);
  const [data1, setData1] = useState("bcd");

  function fetchData() {
    let headersList = {
      "Accept": "*/*",
    }

    fetch("https://retoolapi.dev/GFHqAV/getemployees", {
      method: "GET",
      headers: headersList
    }).then(function (response) {
      return response.text();
    }).then(function (data) {
      console.log(data);
      setUsers(JSON.parse(data));
    })
  }
  function functionTwo(id) {
    localStorage.setItem('id', id);
    setData1("abc");
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      {data1 === "bcd" &&

        <TableContainer component={Paper} >
          <Table sx={{ minWidth: 950 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Company</TableCell>
                <TableCell align="right">designation&nbsp;(g)</TableCell>
                <TableCell align="right">company_logo&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map(user => (
                <TableRow

                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">{user.id}</TableCell>
                  <TableCell component="th" scope="row">
                    {user.name}</TableCell>
                  <TableCell component="th" scope="row">{user.company}</TableCell>
                  <TableCell component="th" scope="row">{user.designation}</TableCell>
                  <TableCell component="th" scope="row"> <img width="50px" height="50px"
                    src={user.company_logo}
                    alt="new"
                  /></TableCell>
                  <TableCell><button className="primary" onClick={(e) => { functionTwo(user.id); }}>View More</button> </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      }
      {data1 === "abc" &&
        <div>
          <Empdetails />
        </div>
      }
    </div>
  );
}
