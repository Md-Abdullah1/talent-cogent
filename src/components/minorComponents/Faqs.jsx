'use client'
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
const Faqs = () => {
  const data = [
    {
      question: "question1",
      answer: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid magni dolores corporis necessitatibus harum consequatur illo tenetur! Ea blanditiis dolorum hic voluptatibus possimus suscipit quas ratione facere maiores, eaque architecto?",
    },
    {
      question: "question2",
      answer: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid magni dolores corporis necessitatibus harum consequatur illo tenetur! Ea blanditiis dolorum hic voluptatibus possimus suscipit quas ratione facere maiores, eaque architecto?",
    },
    {
      question: "question3",
      answer: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid magni dolores corporis necessitatibus harum consequatur illo tenetur! Ea blanditiis dolorum hic voluptatibus possimus suscipit quas ratione facere maiores, eaque architecto?",
    },
    {
      question: "question4",
      answer: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid magni dolores corporis necessitatibus harum consequatur illo tenetur! Ea blanditiis dolorum hic voluptatibus possimus suscipit quas ratione facere maiores, eaque architecto?",
    },
    {
      question: "question5",
      answer: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid magni dolores corporis necessitatibus harum consequatur illo tenetur! Ea blanditiis dolorum hic voluptatibus possimus suscipit quas ratione facere maiores, eaque architecto?",
    },
    {
      question: "question6",
      answer: "v Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid magni dolores corporis necessitatibus harum consequatur illo tenetur! Ea blanditiis dolorum hic voluptatibus possimus suscipit quas ratione facere maiores, eaque architecto?",
    },
  ];

  const [selectedFaq,setSelectedFaq] = useState({})

  const setFaq = (val)=>{
   if(selectedFaq &&  selectedFaq.question == val.question){
    setSelectedFaq({});
   }
   else{
    setSelectedFaq(val)
   }
  }
  return (
    <div className="w-[80%] h-fit  flex flex-col items-center gap-3 my-4">
      <div className="flex flex-col justify-center items-center gap-1  w-[50%] ">
        <h2 className="text-2xl font-bold">FAQs</h2>
        <p>This is where all the answers to your questions are.</p>
      </div>
      <div className="w-full h-fit flex flex-col gap-3">
        {data &&
          data.map((val, i) => {
            return (
              <div
                key={i}
                className={`border  w-full p-2 px-5 h-fit flex flex-col gap-2 rounded-md  ${(selectedFaq.question == val.question) && 'border-blue-400' } shadow-sm`}  
              >
                <div className="flex w-full justify-between items-center ">
                  <p className="text-lg font-medium">{val.question}</p>
                  <FaPlus className={`${(selectedFaq.question == val.question) && 'rotate-45' } cursor-pointer`} onClick={()=>setFaq(val)}/>
                </div>
                <p className={`text-gray-600 ${(selectedFaq.question !== val.question) && 'hidden ' } w-[90%]`}>{val.answer}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Faqs;
