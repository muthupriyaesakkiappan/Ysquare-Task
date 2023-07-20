
import React from 'react';
import './Registration.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function Register()
{
    const navigate = useNavigate();
    const student=()=>{
        var name = document.getElementById("name").value;
        var gender = document.getElementById("gen").value;
        var date = document.getElementById("dob").value;
        var phoneNumber = document.getElementById("phn").value;
        var email = document.getElementById("mail").value;
        
        if (name == "" || name == null) {
            alert("Please fill the Your Name..!");
        } else if (gender == "" || gender == null) {
            alert("Please fill the Gender..!");
        } else if (date == "" || date == null) {
            alert("Please fill the Date Of Birth..!");
        } else if (phoneNumber == "" || phoneNumber == null) {
            alert("Please fill the Mobile Number..!");
        } else if (email == "" || email == null) {
            alert("Please fill the E-Mail..!");
        } else {
            let  userInfo={
                "user_name" : name,
                "gender" : gender,
                "date_of_birth" : date,
                "phone_number" : phoneNumber,
                "email" : email
            }
            console.log(userInfo);
            axios.post('http://localhost:120/register',userInfo)
            .then((res) => {
                console.log(res);
                if(res.data.status){
                  alert(res.data.status)
                  alert("Successfully Registered..!")
                  navigate('/login')
                //   window.location.reload()
                }
                else{
                    alert("Invalid Created Student Details")
                }
                }).catch((err) => {
                console.log(err);
            })
        }
    }

    return(
        <>
            <div className='stumaindiv container-fluid m-0 p-0'>
                <div className='stufidiv'>
                    <h1 className='stutexth text-center bg-info sticky-top'>SignUp Form</h1>
                    <form className='stuform container text-center mt-5'>
                        <label className='stulabel'>Enter Your Name :</label><br/>
                        <input type='text' className='stuinput' id='name' name='name' placeholder='Your Answer' /><br/>
                        <label className='stulabel'>Gender :</label><br/>
                        <input type='text' className='stuinput' id='gen' name='gen' placeholder='Your Answer' /><br/>
                        <label className='stulabel'>Date Of Birth :</label><br/>
                        <input type='date' className='stuinput' id='dob' name='dob' placeholder='Your Answer' /><br/>
                        <label className='stulabel'>Phone Number :</label><br/>
                        <input type='text' className='stuinput' id='phn' name='phn' placeholder='Your Answer' /><br/>
                        <label className='stulabel'>Enter Your Email :</label><br/>
                        <input type='email' className='stuinput' id='mail' name='mail' placeholder='Your Answer' /><br/><br/>
                        <button type='button' className='stubutton rounded-pill m-3' onClick={student}>Register</button>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Register;