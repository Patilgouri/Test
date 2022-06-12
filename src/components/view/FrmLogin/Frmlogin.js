import { useState } from "react";
import "./Frmlogin.css";
import Homepage from "../HomePage/Homepage";
export default function Frmlogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState('bcd');

  function login() {

    let headersList = {
      "Accept": "*/*",
    }

    fetch("https://retoolapi.dev/B13laa/getusers?user_id=" + email + "&password=" + password, {
      method: "GET",
      headers: headersList
    }).then(function (response) {
      return response.text();
    }).then(function (data) {
      console.log(data);
      data = JSON.parse(data)

      try {
        if (data[0].user_id !== "") {
          setData("abc");
        }
      }
      catch
      {
        alert("Login Failed")
      }
    })
  }
  return (
    <div>
      {data === "bcd" &&

        <div className="App">
          <h3>Login</h3>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="name@email.com" onChange={(e) => { setEmail(e.target.value) }} />
          </div>
          <div className="input-group">
            <label htmlFor="password">password</label>
            <input type="password" name="password" onChange={(e) => { setPassword(e.target.value) }} />
          </div>
          <button className="primary" onClick={(e) => { login() }} >Login</button>
        </div>
      }
      {data === "abc" &&
        <Homepage />
      }
    </div>
  );

}



