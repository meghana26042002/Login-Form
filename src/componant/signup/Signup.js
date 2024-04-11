import React, { useState } from 'react'
import axios from 'axios';
import './signup.css'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigation = useNavigate()
    const [name, setname] = useState('')
    const [phone, setphone] = useState('')
    const [email, setemail] = useState('')
    const [age, setage] = useState('')
    const [password, setpassword] = useState('')

    const onSignUpClick = async () => {
        console.log({ name, phone, email, age, password });
        try {
            const response = await axios.post('http://localhost:3000/create-user', { name, phone, email, age, password })
            if (response) {
                setname('')
                setemail('')
                setphone('')
                setage('')
                setpassword('')
                alert("User has been created")
                navigation('/')
            }
        }
        catch (err) {
            console.error(err);
        }
    }
    return (
        <div className='outter'>
            <div className='innertext'>

                <h2 className='t1'>SIGN UP </h2>
                <p className='l1'>Please Enter Your Login And Password !</p>

                <div className='up1'>
                    <label className='nm'>UserName: </label>
                    <input className='ip' onChange={(e) => { setname(e.target.value) }} placeholder='Enter Your UserName' required />
                </div>
                <div className='up1'>
                    <label className='nm'>phone:  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; </label>
                    <input className='ip' onChange={(e) => { setphone(e.target.value) }} placeholder='Enter Your phone' required />
                </div>
                <div className='up1'>
                    <label className='nm'>email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input className='ip' onChange={(e) => { setemail(e.target.value) }} placeholder='Enter Your email' required />
                </div>
                <div className='up1'>
                    <label className='nm'>age:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
                    <input className='ip' onChange={(e) => { setage(e.target.value) }} placeholder='Enter Your age' required />
                </div>
                <div className='up1'>
                    <label className='nm'>password: </label>
                    <input className='ip' onChange={(e) => { setpassword(e.target.value) }} placeholder='Enter Your password' required />
                </div>
                <div>
                    <button className="btn1" onClick={onSignUpClick} type='submit'>Signup</button>

                </div>
            </div>

        </div>
    )
}
export default Signup;

// import React, { useState } from 'react';
// import './signup.css';
// import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const SignUp = () => {
//     const navigation = useNavigate()
//     const [name, setname] = useState('')
//     const [phone, setPhone] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')


//     const onSignUpClick = async () => {
//         console.log({ name, phone, email, password });

//         try {
//             const response = await axios.post('http://localhost:3000/create-user', { name, phone, email, password })
//             if (response) {
//                 setEmail('')
//                 setPassword('')
//                 setPhone('')
//                 setname('')
//                 alert("User has been created")
//                 navigation('/')
//                 // console.log(response?.data)

//             }
//         }
//         catch (err) {
//             console.error(err);
//         }

//     }

//     return (
//         <div className='body'>
//             <div className='main'>

//                 <h2 className='title'>SIGN UP</h2>
//                 <p className='line1'>Please Enter Your Details</p>

//                 <div className='up'>
//                     <label className='name'>Name:</label>
//                     <input className='input' onChange={(e) => { setname(e.target.value) }} type='text' placeholder='Enter Your Name' required />
//                 </div>
//                 <br />
//                 <div className='up'>
//                     <label className='name'>Email:</label>
//                     <input className='input' onChange={(e) => { setEmail(e.target.value) }} type='email' placeholder='Enter Your Email' required />
//                 </div>
//                 <br />
//                 <div className='up'>
//                     <label className='name'>Phone Number:</label>
//                     <input className='input' onChange={(e) => { setPhone(e.target.value) }} type='tel' placeholder='Enter Your Phone Number' required />
//                 </div>
//                 <br />
//                 <div className='up'>
//                     <label className='name'>Password:</label>
//                     <input className='input' onChange={(e) => { setPassword(e.target.value) }} type='password' placeholder='Enter Your Password' required />
//                 </div>
//                 <div className='line2'>
//                     <a href="#!">Forgot password?</a>
//                 </div>
//                 <div>
//                     <button className='btn' onClick={onSignUpClick} type='submit'>SIGN UP</button>
//                 </div>
//                 <div className='icons'>
//                     <FaFacebook />
//                     <FaTwitter />
//                     <FaGoogle />
//                 </div>
//                 <p className='line3'>Already have an account? <a href='#/'>Log In</a></p>

//             </div>
//         </div>
//     );
// };

// export default SignUp;