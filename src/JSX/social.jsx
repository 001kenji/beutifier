import React, { memo, useRef, useState } from "react";
import '../CSS/social.css'
import Credentials from './logingCredentials'

function SocialJsx (props) {
    const logData = useRef()
    

   
    const [data, setdata] = useState([
        {
            username : "",
            usermessage : ''
        },
        {
            ownername : "",
            ownermessage : ''
        }
    ])
    const [newdata, setnew] = useState({
        newname : '',
        newmessage : ''
    })


    const MyChat = (event) => {
        const {value, name} = event.target
        setnew((prev) => {
            return{
                ...prev,
                [name] : value
            }
        })
        console.log(newdata)
    }


    const chart1 = document.getElementById('chart1')
    const chart2  = document.getElementById('chart2')
function SendUser(event) {
    event.preventDefault()
    console.log(event)
    var chart1 = document.getElementById('chart1')
    var typedName = document.getElementsByName('typedName')
    const message = document.getElementsByName('message')

    console.log(event)

    chart1.innerHTML += 
                `<div>
                    <p className="text-sm font-normal sm:text-base">${newdata.newname}</p>
                    <textarea  disabled  name="" id="textarea" cols="20" rows="3">${newdata.newmessage}</textarea>
                </div>`


}
function SendOwner(event) {
    event.preventDefault()

    

    var typedName = document.getElementsByName('typedName')
    var message = document.getElementsByName('message')
    const chart2  = document.getElementById('chart2')
    chart2.innerHTML += 
    `   <div>
            <p disabled className="text-sm font-normal sm:text-base">${newdata.newname}</p>
            <textarea disabled  name="" id="textarea" cols="20" rows="3">${newdata.newmessage}</textarea>
        </div>`


}

    return (
        <>
        <Credentials ref={logData} />
        <h1 id="title">Social</h1>
       <div>
        <div id="chartDiv">
            <div  id='chart1'>
                <div>
                    <p className="text-sm sm:text-base">User</p>
                    <textarea placeholder="User text" disabled className="bg-gradient-to-b placeholder:text-white text-white h-fit from-green-500 to-black  " name="" id="" cols="20" rows="3"></textarea>
                </div>
              </div>
            <div  id="chart2">
                <div>
                    <p className="text-sm sm:text-base">Owner</p>
                    <textarea placeholder="Owner text" disabled className="bg-gradient-to-b placeholder:text-white h-fit text-white from-green-500 to-black  " name="" id="" cols="20" rows="3"></textarea>
               </div>
            </div>
           
        </div>
        <form noValidate >
            <div>
                        <input onChange={MyChat}  name="newname" placeholder="type name" className="text-sm p-1 bg-black w-full text-white rounded-sm sm:text-base" />
                        <textarea onChange={MyChat}  placeholder="type text" className="bg-gradient-to-b text-black min-h-fit font-semibold w-full from-white to-slate-400  " name="newmessage"  cols="20" rows="3"></textarea>
                        
                    </div>
                    <div id="myButton">
                        <button type="button"  onClick={SendUser}>Send as user</button>
                        <button type="button"  onClick={SendOwner}>Send as owner</button>
            </div>
        </form>
        


       </div>
        
        
        </>
    )
}

export default memo(SocialJsx)