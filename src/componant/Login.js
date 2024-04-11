import React, { useState } from 'react';
import './login.css'
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const navigation = useNavigate()
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const loginuser = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/login-user', { email, password });
            if (response?.data?.msg === "user exists") {
                alert("user exists")
                navigation('users')
            }
            else {
                alert("Wrong credential,check your email and password")
                setemail('')
                setpassword('')
            }
        }
        catch (err) {
            console.error("some error happend");
        }
    }
    return (
        <div className='body1'>
            <div className='main1'>
                <form >
                    <h2 className='title'>LOGIN </h2>
                    <p className='line1'>Please Enter Your Login And Password !</p>

                    <div className='up'>
                        <label className='name'>UserName: </label>
                        <input className='input' placeholder='Enter Your UserName' onChange={(e) => { setemail(e.target.value) }} required />

                    </div>
                    <br></br>
                    <div className='up'>
                        <label className='name'>PassWord : </label>
                        <input className='input' placeholder='Enter Your PassWord' onChange={(e) => { setpassword(e.target.value) }} required />

                    </div>
                    <div className='line2'>
                        <a href="#!">Forgot password?</a>
                    </div>
                    <div >

                        <button className="btn" onClick={loginuser}>LOGIN</button>
                    </div>
                    <div className='icons'>
                        <FaFacebook />
                        <FaTwitter />
                        <FaGoogle />
                    </div>
                    <p className='line3'>Don't have an account? <a href='/signup'>Sign Up</a> </p>

                </form>
            </div>
        </div>
    );
};

export default Login;


