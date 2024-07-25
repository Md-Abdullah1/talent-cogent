"use client";
import React, { useState } from "react";

const ContactForm = () => {
    const [email,setEmail] = useState('')
    const contactUs = (e)=>{
        e.preventDefault();
        if(email){

            console.log('email',email)
            setEmail('')
        }
        else{
            alert("enter correct email")
        }
    }
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
