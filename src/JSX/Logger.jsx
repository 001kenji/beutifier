import React, { useContext, useId, useRef, useState } from "react";
import {useForm} from 'react-hook-form'
import Profile from '../assets/profile.png'
import usersData from '../FILES/userData.json'
import errorIcon from '../assets/fail.jpg'
import tick from '../assets/tick.jpg'
import Credentials from './logingCredentials'
import '../App.css'
export default Logger 
function Logger () {
    const [errorShow, seterror] = useState(false)
    const [successShow, setsuccess] = useState(false)
    const loggerInputs = useId()


    const {register, handleSubmit,formState} = useForm({
        defaultValues : {
            username : '',
            password : '',
            userEmail : ''
        },
        mode : 'onTouched'
    })
const {errors} = formState
    const Submitter  = (data) => {
        
       for(var i = 0; i<= usersData.length; i++){
        
        if(usersData[i].name == data.username) {
            if(usersData[i].passcode == data.password) {
                        console.log('successfull')
                       
                        setsuccess(true)
                        setTimeout(() => {
                            setsuccess((s) => !s)
                        }, 1600);
                        LoggerIdentity(data)
                    }else{
                        seterror((e) => !e)
                        setTimeout(() => {
                            document.getElementById('errormessage').innerText = 'Incorrect Password'
                            seterror(false)
                        }, 1600);
                    }
        } 
           else{
            console.log('error')
            seterror((e) => !e)
            setTimeout(() => {
                seterror(false)
            }, 1600);
            return
        }
            
       }
    }
const logData = useRef(null)
    const LoggerIdentity = (props) => {

       if(props != 'user'){
        console.log('owner')
        logData.current.SetUser('false')
        logData.current.SetOwner('true')
        window.open('../home.html')
        window.close(this)
       }else {
        console.log('ok') 
       { <Credentials ref={logData} />}
       logData.current.SetUser('true')
       logData.current.SetOwner('false')
        var got = logData.current.GlobaUser
        console.log(got)
       console.log(Credentials)
        window.open('../home.html')
        window.close(this)
       }

    }
    const [selection, setSelection] = useState(true)
    var  errorStyle = {
        display : errorShow ?  'flex': 'none'
    }
    var successStyle = {
        display  : successShow ? 'flex' : 'none'
    }
    return(
        <>
        <Credentials ref={logData} />
        <div >
            <div id="errorDiv">
                <div style={errorStyle} id="errorContent">
                     <img src={errorIcon} />  <span id="errormessage">ERROR</span>
                </div>
                </div>
                <div id="successDiv">
                <div style={successStyle}  id="successContent">
                     <img src={tick} />  <span>Successfull</span>
                </div>
                </div>
            <form id='loggerForm' className=" border-2 border-black" noValidate onSubmit={handleSubmit(Submitter)}>
              <div id="profileImg">
                <img width={90}   src={Profile} />
              </div>
              
               {selection && <div id='loginDiv'>
                    <label  htmlFor="username">Enter UserName :</label>
                    <input {...register('username',
                        {required :'enter your username',
                        minLength : 5
                        })} id="username" type="text" />
                    {errors.username && <p id="error" role="alert">{errors.username?.message}</p>}
                    <label id="passcode" htmlFor="">Enter Password :</label>
                    <input {...register('password',{required :'enter your password'})} id="passcode" type="password" />
                    {errors.passcode && <p id="error" role="alert">{errors.passcode?.message}</p>}
                    <label htmlFor="userEmail">Enter Email</label>
                    <input {...register('userEmail',{
                        required :'enter your email',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"
                          }
                        })} id="userEmail" type="email" />
                    {errors.userEmail && <p id="error" role="alert">{errors.userEmail?.message}</p>}
                    <div id="BtnDiv">
                      <button onClick={() => LoggerIdentity('user')} id="registerBtn" type="button">User Account</button>
                    <button id="loginBtn" type="submit">Log_In</button>  
                    </div>
                    
                </div> }
            </form>
        </div>
        
        </>
    )
}