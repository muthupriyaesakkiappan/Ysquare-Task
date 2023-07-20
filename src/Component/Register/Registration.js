
import React from 'react';
import './Registration.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export function Register()
{
    const navigate = useNavigate();
    const user=()=>{
        var f_name = document.getElementById("fname").value;
        var l_name=document.getElementById("lname").value;
        var gender = document.getElementById("gen").value;
        var date = document.getElementById("dob").value;
        var phoneNumber = document.getElementById("phn").value;
        var email = document.getElementById("mail").value;
        
        if (f_name == "" || f_name == null) {
            alert("Please fill the Your Name..!");
        } else if (l_name == "" || l_name == null) {
            alert("Please fill the Lastname..!");
        }
        else if (gender == "" || gender == null) {
            alert("Please fill the Gender..!");
        } else if (date == "" || date == null) {
            alert("Please fill the Date Of Birth..!");
        } else if (phoneNumber == "" || phoneNumber == null) {
            alert("Please fill the Mobile Number..!");
        } else if (email == "" || email == null) {
            alert("Please fill the E-Mail..!");
        } else {
            let  userInfo={
                "first_name" : f_name,
                "last_name" : l_name,
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
            <div className='container-fluid m-0 p-0'>
                <div className='subdiv'>
                    <h1 className='stutexth text-center bg-info sticky-top'>SignUp Form</h1>
                    <form className='userform container text-center mt-5'>
                        <label className='labelinfo'>Firstname :</label><br/>
                        <input type='text' className='details' id='fname' name='fname' placeholder='Enter your name' /><br/>
                        <label className='labelinfo'>Lastname :</label><br/>
                        <input type='text' className='details' id='lname' name='lname' placeholder='Enter your lastname' /><br/>
                        <label className='labelinfol'>Gender :</label><br/>
                        <input type='text' className='details' id='gen' name='gen' placeholder='Enter the gender' /><br/>
                        <label className='labelinfo'>Date Of Birth :</label><br/>
                        <input type='date' className='details' id='dob' name='dob' placeholder='Enter date of birth' /><br/>
                        <label className='labelinfo'>Phone Number :</label><br/>
                        <input type='text' className='details' id='phn' name='phn' placeholder='Enter youphone number' /><br/>
                        <label className='labelinfo'>Enter Your Email :</label><br/>
                        <input type='email' className='details' id='mail' name='mail' placeholder='Enter your email' /><br/><br/>
                        <button type='button' className='stubutton rounded-pill m-3' onClick={user}>Register</button>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Register;