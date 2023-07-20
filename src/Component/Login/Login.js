
import React, { useState, useEffect } from "react";
import axios from 'axios';
import './Login.css';
import { useNavigate } from "react-router-dom";

export function Login() {
    const navigate = useNavigate();
    const [error,setError]=useState('')
    const login = (event) => {
        event.preventDefault();
        var config = { headers: { "enctype": "multipart/form-data" } };
        var username = document.getElementById("user").value;
        var password = document.getElementById("pass").value;
        if (username == "") {
            alert("please enter the name")
        } else if (password == "") {
            alert("please enter the password")

        } else {
            let user_Info = {
                "email": username,
                "password": password
            }
            console.log(user_Info);

            document.getElementById("user").value = "";
            document.getElementById("pass").value = "";

            axios.post("http://localhost:120/userlogin", user_Info, config)
                .then(function (res) {
                    if (res.data.status == 'error') {
                        alert('Success')
                        navigate("/logout")
                        console.log(res.data);
                    } else if (res.data.status == 'success') {
                        alert('success')
                        navigate("/logout")
                        console.log(res.data);
                    }
                })
        }
    }
    return (
        <>
           <div className=' container-fluid m-0 p-0'>
               <div className='logdiv '>
                    <h1 className='stutexth text-center bg-info sticky-top'>Login</h1>
                <form className='stuform container text-center mt-5'>
                    <label className='stulabel'>Username:</label><br/>
                      <input type='text' className='stuinput' id='user' name='name' placeholder='Enter Username' required=""/><br/>
                         <label className='stulabel'>Password</label><br/>                         <input type='text' className='stuinput ' id='pass' name='gen' placeholder="Enter Password" /><br/>
                        
                         <button type='button' className='stubutton rounded-pill m-3 btn__submit' onClick={login}>Login</button>
                   </form>
                </div>
            </div>
        </>
    );
}
export default Login;