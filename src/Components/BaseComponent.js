"use client"
import { useState ,useEffect} from "react";
import axios from "axios"
import { Overpass_Mono } from "next/font/google";
import Link from "next/link";



const BaseComponent = (props) => {
  
  const [person,setPerson] = useState({})
  
  useEffect(() => {
    const id = localStorage.getItem("idemployee0000");
    if(id!= null || id!= undefined && id!= 0){
      axios.get(`https://hospital.somee.com/api/employee/${id}`).then((res) => {
      setPerson(res.data)
    });
    }
  }, []); 

  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Tarea", src: "Chat" },
    { title: "Account", src: "User", gap: true },
    { title: "Hospital ", src: "Calendar" },
   
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="https://th.bing.com/th/id/OIP.EbJCUqacvfWdYPOyuZ9UwwHaHa?pid=ImgDet&rs=1"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li 
              key={index}
            
            >
             <a href={`/${Menu.title}`} className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}>
             <img src={`./assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
             </a>
            </li>
          ))}
            <li 
            >
             <a href={`/login`} className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              `}>
             <img src={`./assets/control.png`} />
              <span className={` origin-left duration-200`}>
                Log Out
              </span>
             </a>
            </li>

        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
            {
                props.children
            }
      </div>
    </div>
  );
};
export default BaseComponent;
