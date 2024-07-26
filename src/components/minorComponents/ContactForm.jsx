"use client";
import React, { useState } from "react";
import { message} from 'antd'
const ContactForm = () => {
    const [email,setEmail] = useState('')
    const contactUs = (e)=>{
        e.preventDefault();
        if(email){

            console.log('email',email)
            setEmail('')
            trueNotification()
        }
        else{
            falseNotification()
        }
    }
    const falseNotification = () => {
      if (!email || email.length === 0) {
        message.open({
          type: 'error',
          content: 'Please enter your email address first.',
        });
      } else {
        message.open({
          type: 'error',
          content: 'Please review the email address and correct it.',
        });
    };
  }
    const trueNotification = () => {
      message.open({
        type:'success',
        content:
          "thanks for contacting us ",
        
      });
    };
  return (
    <form onSubmit={contactUs}>
      <div className="w-[100%] h-fit  flex ">
        <input type="email" className=" h-full w-full p-3 outline-none border-none rounded-tl-md rounded-bl-md" placeholder=" Your work email address" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <button type="submit" className="bg-black text-white px-2 text-sm rounded-tr-md rounded-br-md ">
          ContactUS
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
