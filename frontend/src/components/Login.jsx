import React from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc';
import blogVideo from '../assets/blog.mp4';
import logo from '../assets/logowhite.png';



const Login = () => {
  return (
    <>
    <div className="flex justify-start item-center flex-col h-screen">
    <div className='relative w-full h-full'>
     <video
      src={blogVideo}
      type="vedio/mp4"
      loop
      controls={false}
      muted
      autoPlay
      className=" w-full h-full object-cover"
      
      />
    </div>
    <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay ">
        <div className="p-5">
           <img src={logo}  width="140px " alt="logo" />
        </div>
        <div className="shawdow-2xl">
          <GoogleLogin
            clientId=''
            render={(renderProps)=>(
                 <button
                 type="button"
                 className='bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none' 
                 onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  >
                  
                  <FcGoogle className='mr-4'/> Sign in with Google
                 </button>
            )}
            // onSuccess={responseGoogle}
            // onFailure={responseGoogle}
            // cookiePolicy='single_host_origin'

            />
        </div>
    </div>
    </div>
    </>
  )
}

export default Login