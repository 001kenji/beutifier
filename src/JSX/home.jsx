import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {get, useForm} from 'react-hook-form'
import SocialJsx from "./social"
import '../App.css'
import axios, { AxiosError } from 'axios'
import Credentials from './logingCredentials'
import emptyStar from '../assets/icons/emptyStar.png'
import fullStar from '../assets/icons/fullStars.png'
import filledStar from '../assets/icons/filledStar.png'

import happyemoji from '../assets/icons/happy.png'
import coolEmoji from '../assets/icons/cool.png'
import sadEmoji from '../assets/icons/sad.png'
import confusedEmoji from '../assets/icons/confused.png'
import emptyfullStar from '../assets/icons/empty5.png'

import tiktok from '../assets/icons/tiktok.png'
import tick from '../assets/tick.jpg'
import fail from '../assets/fail.jpg'
import loadImg from '../assets/loader.png'
import instagram from '../assets/icons/instagram.png'
import facebook from '../assets/icons/facebook.png'
import linkedinIcon from '../assets/icons/linkedin.png'
import twitterIcon from '../assets/icons/twitter.png'
import menuIcon from '../assets/icons/menu.png'
import moon from '../assets/icons/moon.png'
import sun from '../assets/icons/sun.png'
import userImg from '../assets/profile.png'
export default Home 
function Home() {
  const {register,getValues,formState,handleSubmit} = useForm({
    defaultValues : {
        from_name : '',
        to_name : '',
        email_id :'briannjuguna694@gmail.com',
        message : ''
    },
    mode : 'onTouched'
  })
  
    const {errors,isSubmitting} = formState
    const navBarContent = document.getElementById('navBarContent')
    const NavbarAlphaDiv = document.getElementById('NavbarAlphaDiv')
    const [ShowNav, setNav] = useState (false)
    const [Mynews, setMyNews] = useState()
    const [themeSet, setThemeState] = useState('light')
    const theme = useRef()
    function showTheme(props){
        
       
        console.log(theme.current.GlobaUser)
       const sun = document.getElementById('sun')
       const moon = document.getElementById('moon')

       if(props == 'sun') {
        setThemeState('dark')
            sun.style.display = 'none'
            moon.style.display = 'inline-flex'
            theme.current.SetDarknode('light')
       }else if(props == 'moon') {
        setThemeState('light')
            theme.current.SetDarknode('dark')
            moon.style.display = 'none'
            sun.style.display = 'inline-flex'
       }
    }
    const navstyler = {
        display : ShowNav ? 'flex' : 'none'
        
    }
    const [progError,seterror] = useState(false)
    const [progSuccess,setSuccess] = useState(false)
    const [progLoad, setload] = useState(false)
    const progressSuccess = {
        display : progSuccess ? 'flex' : 'none'
    }
    const progressError = {
        display : progError ? 'flex' : 'none'
    }
    const progressLoad = {
        display : progLoad ? 'flex' : 'none'
    }
  
    const errorDiv = document.getElementsByName('errorDiv')
    const successDiv = document.getElementsByName('successDiv')
    const loadDiv = document.getElementsByName('loadDiv')
   
    var btn = document.getElementById('button')
    function Showerror(props){
        if(props == 'show'){
           seterror(true)
        }else if(props == 'hide'){
            seterror(false)
        }
    }
    function ShowSuccess(props){
        if(props == 'show'){
            setSuccess(true)
        }else if(props == 'hide'){
            setSuccess(false)
        }
    }
    function ShowLoad(props){
        const loadDiv = document.getElementsByName('loadDiv')
        if(props == 'show'){
            setload(true)
        }else if(props == 'hide'){
            setload(false)
        }
    }
 var formEmail =  document.getElementById('emailForm')
 function EmailSender(event) {
  event.preventDefault();
  
  var btn = document.getElementById('button')
  btn.innerHTML = 'Sending...';
    ShowLoad('show')
  const serviceID = 'default_service';
  const templateID = 'template_66y53lj';

  emailjs.sendForm(serviceID, templateID, formEmail)
   .then(() => {
     btn.innerHTML = 'Send';
   ShowLoad('hide')
    ShowSuccess('show')
    setInterval(() => {
       ShowSuccess('hide')
    }, 1600);
    
   }, (err) => {
     btn.value = 'Send';
     //alert(JSON.stringify(err));
     ShowLoad('hide')
     Showerror('show')
     setTimeout(() => {
        Showerror('hide')
     }, 1600);
     
   });
   
 
}


   window.addEventListener('resize', function() {
    if(this.window.innerWidth >= 640) {
        setNav(true)
        }else if(this.window.innerWidth < 640){
            setNav(false)
        }
   })
   
  useLayoutEffect(() =>{
  if(window.innerWidth >= 640) {
    setNav(true)
    }else if(window.innerWidth < 640){
        setNav(false)
    }
    },[])
 const userData = [
    {
        name : 'Kenji Cladia',
        bibliography : 'I am dedicated culture critic and biogger located in San Fransisco, Califonia',
        social : {
            facebook : true,
            facebookLink : '',
            instagram : true,
            instagramLink : '',
            twitter : true,
            twitterLink : '',
            linkedIn : true,
            linkedinLink : ''
        },
        image : userImg,
        personal : {
            

        }
    }
]
function Show() {
    var mapper = Mynews.map((detail) => 
  ` <div   id='partMaster'>

    <div  id='part1'>
        <div id='ImageDiv'><img id='partImg' src=${detail.urlToImage}></img></div>
        <div id='part1-2'>
            <textarea disabled>Author: ${detail.author}</textarea>
            <textarea disabled>Title: ${detail.title}</textarea>
            <p><span>Id</span>: ${detail.source.id}</p>
            <p><span>Name</span>: ${detail.source.name}</p>
        </div>
    </div>

    <div id='part2'>
        <div id='part2-1'>
            <textarea classname='bg-slate-300' disabled>Description: ${detail.description}</textarea>
            <textarea disabled>Content: ${detail.content}</textarea>
            <small>Poblished At: ${detail.publishedAt}</small>  
        </div>
        <div id='#part2-2' classname=' max-w-full '>
            <textarea classname=' max-w-full '  disabled>Url: ${detail.url}</textarea>
           
        </div>
    </div>

   </div>`
   )
    document.getElementById('displayer').innerHTML =mapper
}
const [NewSelsect, setSelect] = useState({
    news : ""
})
const newNews = (event)  => {
    var {value, name} = event.target
    setSelect((val) => {
        return {
            [name] : value
        }
    })
console.log(NewSelsect)
}
const [newsStylesState, setnewsStylesState] = useState({
   shower :  false,
   mess1 :  'choose one please' })
const newsStyles = {
    display : newsStylesState.shower ? 'flex' : 'none'
}

const  GetNews = (props) => {
    ShowLoad('show')
    var fetcher = async (url) => {
        var url = NewSelsect.news
        console.log(url)
        if(url == '') {
            ShowLoad('hide')
            Showerror('show')
            setTimeout(() => {
                     Showerror('hide')
                 }, 1600); 
            console.log('empty')
            setnewsStylesState((e) => {
                return {
                    ...e,
                    shower : true
                } })
            
        }else {
            setnewsStylesState((e) => {
                return {
                    ...e,
                    shower : false
                } })

           axios.get(url)
        .then((Response) => {
            setMyNews(Response.data.articles)
           if(Mynews) {

            console.log(Mynews)
            ShowLoad('hide')
            ShowSuccess('show')
            setTimeout(() => {
                     ShowSuccess('hide')
                 }, 1600); 
                Show()
           }else if(!Mynews) {
            ShowLoad('hide')
            Showerror('show')
            console.log('no news')
            Showerror('show')
            setTimeout(() => {
                     Showerror('hide')
                 }, 1600); 
                 
                 setnewsStylesState((e) => {
                    return {
                        ...e,
                        shower : true,
                        mess1 : 'choose again'
                    }
                 })
           }
        })
        .catch(error => {
            console.log(error + 'is the error')
            ShowLoad('hide')
            Showerror('show')
            setTimeout(() => {
                     Showerror('hide')
                 }, 1600); 
        })

        }
       
    }
        fetcher()
}


const userPersonalMapper = userData.map((personData) =>
    <div>

    </div>

)
 const userDataMapper =    userData.map((details) => 
    <div className="p-2 bg-purple-200  rounded-md mt-2" id="personalDetails">
        <div id="personalDetails1" className="flex bg-slate-300 justify-center  border-black"><img className="w-20  " src={details.image}  /></div>
        
        <div className="block">
            <h1 className="font-bold text-center underline underline-offset-2 space-x-1">{details.name}</h1>
        <blockquote className="p-4 w-full ">{details.bibliography}</blockquote>
        <small className="flex justify-center">Get Social with me</small>
        <div className="flex justify-center flex-row gap-3 mt-3">
                {details.social.facebook && <a href={details.social.facebookLink}><img width={30} src={facebook} /></a>}
                {details.social.instagram && <a href={details.social.instagramLink}><img width={30} src={instagram} /></a>}
                {details.social.twitter && <a href={details.social.twitterLink}><img width={30} src={twitterIcon} /></a>}
                {details.social.linkedIn && <a href={details.social.linkedinLink}><img width={30} src={linkedinIcon} /></a>}
        </div>
        </div>
        
      
    </div>
    )

    var one =  useRef()
    var one1 = useRef()
    var two =  useRef()
    var two1 = useRef()
    var three =useRef()
    var three1 = useRef()
    var four =  useRef()
    var four1 = useRef()
    var five =   useRef()
    var five1 = useRef()
    var emojiImg = useRef()

//    function FullstarFunc(event) {
    
//    }
   
   


    function Starfunc(props){

   // var one1 =     document.getElementsByName('one1')
    
        if(props == '1'){
            one1.current.style.display = 'flex'
            two1.current.style.display = 'none'
            three1.current.style.display = 'none'
            four1.current.style.display = 'none'
            five1.current.style.display = 'none'

            one.current.style.display = 'none'
            two.current.style.display = 'flex'
            three.current.style.display = 'flex'
            four.current.style.display = 'flex'
            five.current.style.display = 'flex'


            emojiImg.current.src = `${sadEmoji}`
        }
        if(props == '1p'){
            
            one1.current.style.display = 'none'
            two1.current.style.display = 'none'
            three1.current.style.display = 'none'
            four1.current.style.display = 'none'
            five1.current.style.display = 'none'

            one.current.style.display = 'flex'
            two.current.style.display = 'flex'
            three.current.style.display = 'flex'
            four.current.style.display = 'flex'
            five.current.style.display = 'flex'

            emojiImg.current.src = `${emptyfullStar}`
        }
        if(props == '2'){
            one1.current.style.display = 'flex'
            two1.current.style.display = 'flex'
            three1.current.style.display = 'none'
            four1.current.style.display = 'none'
            five1.current.style.display = 'none'

            one.current.style.display = 'none'
            two.current.style.display = 'none'
            three.current.style.display = 'flex'
            four.current.style.display = 'flex'
            five.current.style.display = 'flex'

            emojiImg.current.src = `${confusedEmoji}`
        }
        if(props == '2p'){
            
            one1.current.style.display = 'flex'
            two1.current.style.display = 'none'
            three1.current.style.display = 'none'
            four1.current.style.display = 'none'
            five1.current.style.display = 'none'

            one.current.style.display = 'none'
            two.current.style.display = 'flex'
            three.current.style.display = 'flex'
            four.current.style.display = 'flex'
            five.current.style.display = 'flex'

            emojiImg.current.src = `${sadEmoji}`
        }
        if(props == '3'){
            one1.current.style.display = 'flex'
            two1.current.style.display = 'flex'
            three1.current.style.display = 'flex'
            four1.current.style.display = 'none'
            five1.current.style.display = 'none'

            one.current.style.display = 'none'
            two.current.style.display = 'none'
            three.current.style.display = 'none'
            four.current.style.display = 'flex'
            five.current.style.display = 'flex'

            emojiImg.current.src = `${happyemoji}`
        }
        if(props == '3p'){
            
            one1.current.style.display = 'flex'
            two1.current.style.display = 'flex'
            three1.current.style.display = 'none'
            four1.current.style.display = 'none'
            five1.current.style.display = 'none'

            one.current.style.display = 'none'
            two.current.style.display = 'none'
            three.current.style.display = 'flex'
            four.current.style.display = 'flex'
            five.current.style.display = 'flex'

            emojiImg.current.src = `${confusedEmoji}`
        }
        if(props == '4'){
            one1.current.style.display = 'flex'
            two1.current.style.display = 'flex'
            three1.current.style.display = 'flex'
            four1.current.style.display = 'flex'
            five1.current.style.display = 'none'

            one.current.style.display = 'none'
            two.current.style.display = 'none'
            three.current.style.display = 'none'
            four.current.style.display = 'none'
            five.current.style.display = 'flex'

            emojiImg.current.src = `${coolEmoji}`
        }
        if(props == '4p'){
            
            one1.current.style.display = 'flex'
            two1.current.style.display = 'flex'
            three1.current.style.display = 'flex'
            four1.current.style.display = 'none'
            five1.current.style.display = 'none'

            one.current.style.display = 'none'
            two.current.style.display = 'none'
            three.current.style.display = 'none'
            four.current.style.display = 'flex'
            five.current.style.display = 'flex'

            emojiImg.current.src = `${happyemoji}`
        }
        if(props == '5'){
            one1.current.style.display = 'flex'
            two1.current.style.display = 'flex'
            three1.current.style.display = 'flex'
            four1.current.style.display = 'flex'
            five1.current.style.display = 'flex'

            one.current.style.display = 'none'
            two.current.style.display = 'none'
            three.current.style.display = 'none'
            four.current.style.display = 'none'
            five.current.style.display = 'none'

            emojiImg.current.src = `${fullStar}`
        }
        if(props == '5p'){
            
            one1.current.style.display = 'flex'
            two1.current.style.display = 'flex'
            three1.current.style.display = 'flex'
            four1.current.style.display = 'flex'
            five1.current.style.display = 'none'

            one.current.style.display = 'none'
            two.current.style.display = 'none'
            three.current.style.display = 'none'
            four.current.style.display = 'none'
            five.current.style.display = 'flex'

            emojiImg.current.src = `${coolEmoji}`
        }
    }
const [FormStylerState, setFormStylerState] = useState(true)
    const FormStyler = {
        display : FormStylerState ? 'flex' : 'none'
    }

function LogOut() {
    window.open('../index.html')
    window.close(this)
}

    return (
        <>
          <Credentials ref={theme} />
        <div className={`${theme.current.GlobaUser.darkmode}`}  >
                  
       

        <div className=" sm:dark:font-base  dark:text-black dark:bg-slate-800"    >
            {/* toogle dark mode on the top div */}
        <div className="top-0 sticky" id="myNav">
            <div className="p-6 flex-row  justify-stretch flex" id="NavbarAlphaDiv">
                <div style={navstyler}  id="navBarContent" className="flex sm:flex md:gap-8 sm:flex-row flex-col  gap-2 ">
                    <ul className="hover:bg-slate-500 hover:text-black rounded-md p-2"><a href="#home">Home</a></ul>
                    <ul className="hover:bg-slate-500 hover:text-black rounded-md p-2"><a href="#projects">Projects</a></ul>
                    <ul className="hover:bg-slate-500 hover:text-black rounded-md p-2"><a href="#socialLinkDiv">social</a></ul>
                    <ul className="hover:bg-slate-500 hover:text-black rounded-md p-2"><a href="#Email">Email</a></ul>
                    <ul className="hover:bg-slate-500 hover:text-black rounded-md p-2"><a href="#rateDiv">Rate</a></ul>
                </div>
                <div className="bg-gradient-to-r h-fit w-fit  rounded-md from-purple-700 via-black to-yellow-500" id="beutifierDiv">
                    <p className="w-auto  text-lime-500 p-0.5 font-bold font-sans text-lg">
                        Beutifier
                    </p>
                </div>
                <div className="hidden  sm:flex gap-3" id="social">
                    <a href="https://www.tiktok.com/signup"> <img src={tiktok}  /></a>
                    <a href="https://www.instagram.com/accounts/login/"> <img src={instagram}  /></a>
                    <a href="https://www.facebook.com/"> <img src={facebook}  /></a>
                </div>
                <div className="text-white   visible sm:hidden" id="menuIcon"> <img onClick={() => setNav((e) => !e)}  src={menuIcon} alt="" /></div>
            <div >
                <div id="ThemeDiv" className="gap-3 ">
                    <img id="moon" onClick={() => showTheme('moon')} width={35} src={moon}></img>
                    <img id="sun" onClick={() => showTheme('sun')} width={35} src={sun}></img>
                </div>
            </div>
            </div>
        </div>

       
            <div style={progressError} className="top-0 sticky" name='errorDiv' id="notifier">
                <img className="w-6 animate-ping p-1.5 sm:w-8 "  src={fail} alt="" />
              <p className="text-sm   sm:text-base" id="error">Error</p>   
            </div>
            <div style={progressSuccess} className="top-0 sticky" name='successDiv' id="notifier" > 
                <img className="w-6 sm:w-8 "  src={tick} alt="" />
                <p className="bg-black  text-sm sm:text-base rounded-sm top-1 text-green-500 font-bold p-2 mx-auto w-fit">Successfull</p>
           </div>
            <div style={progressLoad} className="top-0 sticky" name='loadDiv' id="notifier">
                <img className="w-6 bg-blue-500 p-1 animate-spin sm:w-8 "  src={loadImg} alt="" />
                <p className="bg-black animate-pulse text-sm sm:text-base rounded-sm top-1 text-blue-500 font-bold p-2 mx-auto w-fit" >Loading...</p>
            </div>
         


        <div className=" max-w-72 w-auto  "  id="home">
            <div className=" "  >
                {userDataMapper}
            </div>
        </div>
        {/* ac1d477eeaf14670b0e3c3bc7af2dc3e */}

        
        <div id="projects">
            <div>
               <h1 className="bg rounded-md font-bold text-sm sm:text-base bg-amber-500 p-1 justify-center flex m-2">NEWS</h1>
               <hr id='hr1'/>
               <div className="flex justify-stretch w-full gap-5">
                <button onClick={() => setFormStylerState(false)} id="button">Hide</button>
                <button onClick={() => setFormStylerState(true)} id="button">Show</button>
               </div>
               <form  className='' id='newsform'>
                <div>
                    <label className="text-black font-bold justify-center align-bottom" htmlFor="news">Select News: </label>
                    <select onChange={newNews}  name="news" id="news">
                        <option disabled selected >Choose one</option>
                        <option  value="https://newsapi.org/v2/everything?q=tesla&from=2023-10-25&sortBy=publishedAt&apiKey=ac1d477eeaf14670b0e3c3bc7af2dc3e">Tesla</option>
                        <option value="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ac1d477eeaf14670b0e3c3bc7af2dc3e">Business headlines</option>
                        <option value="https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ac1d477eeaf14670b0e3c3bc7af2dc3e">TechCruncher</option>
                        <option value="https://newsapi.org/v2/everything?domains=wsj.com&apiKey=ac1d477eeaf14670b0e3c3bc7af2dc3e">Wall Street Journal</option>
                        <option value="https://newsapi.org/v2/everything?q=apple&from=2023-11-22&to=2023-11-22&sortBy=popularity&apiKey=ac1d477eeaf14670b0e3c3bc7af2dc3e">Apple</option>
                    </select> 
                    <p style={newsStyles} id="error">{newsStylesState.mess1}</p>
                </div>
               
                <div className=" block space-x-2 ">
                    <label className="text-black font-bold justify-center align-bottom" >Push</label>
                         <button  onClick={GetNews} className='bg-black p-1 font-bold rounded-sm text-cyan-600' type='button'>GET</button>
              
                </div>
                </form>
            </div>
        </div>
        <div style={FormStyler} id="displayerMaster">
            <div id="displayer">
                
            </div>
        </div>


        <hr id='hr1'/>
        <div id="socialLinkDiv">
            <div>
                <SocialJsx className=' dark:bg-slate-400' />
            </div>
        </div>

        <hr id='hr1'/>

        <div id="Email" className="mx-auto flex justify-center  mt-2 shadow-sm shadow-purple-400">
            <div id="emailformDiv1-2" >
                <form onSubmit={EmailSender} id="emailForm" noValidate  className="emailForm">
                <label htmlFor="from_name">Enter your name</label>
                {errors.sendersName && <p id="error">{errors.sendersName?.message}</p>}
                <input  id="from_name" name="from_name" type="text" {...register('from_name',{
                    required :  'Enter name',
                    minLength : {
                        value : 5,
                        message : 'less characters'
                    }
                })} />
                <label  htmlFor="to_name">Enter reciever's name</label>
                {errors.sendersEmail && <p id="error">{errors.sendersEmail?.message}</p>}
                <input id="to_name" name="to_name" type="text" {...register('to_name',{
                    required : 'Enter name',
                    minLength : {
                        value : 5,
                        message : 'less characters'
                    }
                })} />
                <label htmlFor="email_id">Recipients email</label>
                <input id="email_id" name="email_id" type="emial"{...register('email_id',{
                    disabled : false,
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address"
                      }
                })} />
                <label htmlFor="message">Enter message</label>
                {errors.message && <p id="error">{errors.message?.message}</p>}
                <textarea   name="message" id="message" {...register('message',{
                    required : 'Enter message'
                })}></textarea>


                <button id="button" disable={isSubmitting} type="submit">Send</button>
                </form>
            </div>
        </div>
        <hr id="hr1" />

        <div id="rateDiv" className="flex sm:w-96 w-fit  bg-amber-300 justify-center flex-col">
            <div id="starDiv">
                <img ref={one} name='one' onClick={() => Starfunc('1')} id="emptystar"  src={emptyStar} alt="" />
                <img onClick={() => Starfunc('1p')} ref={one1} name='one1' id="filledstar"  src={filledStar} alt="" />
                <img onClick={() => Starfunc('2')} ref={two} id="emptystar"  src={emptyStar} alt="" />
                <img onClick={() => Starfunc('2p')} ref={two1} id="filledstar"  src={filledStar} alt="" />
                <img onClick={() => Starfunc('3')} ref={three} id="emptystar"  src={emptyStar} alt="" />
                <img onClick={() => Starfunc('3p')} ref={three1} id="filledstar"  src={filledStar} alt="" />
                <img onClick={() => Starfunc('4')} ref={four} id="emptystar"  src={emptyStar} alt="" />
                <img onClick={() => Starfunc('4p')} ref={four1} id="filledstar"  src={filledStar} alt="" />
                <img onClick={() => Starfunc('5')} ref={five} id="emptystar"  src={emptyStar} alt="" />
                <img onClick={() => Starfunc('5p')} ref={five1} id="filledstar"  src={filledStar} alt="" />
            </div>
            <div className="flex gap-3 flex-row justify-center">
            <img   className="bg-white  rounded-md p-1" ref={emojiImg} id="fullstar"  src={emptyfullStar} alt="" />
            {/* onLoad={FullstarFunc}  */}
            </div>
        </div>

            <div onClick={LogOut} className=" bg-black mb-1 text-sm sm:text-base rounded-sm p-1">
                <h1 className="flex justify-center hover:text-amber-400 focus:text-amber-400 cursor-pointer font-bold text-white">LOG OUT</h1>
            </div>

        </div>

        </div>
        </>
    )
}