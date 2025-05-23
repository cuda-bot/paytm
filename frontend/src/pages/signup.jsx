
import { useState } from "react"
import { BottomWarning } from "../component/bottomwarning"
import { Button } from "../component/button"
import { Heading } from "../component/heading"
import { Inputbox } from "../component/inputbox"
import { Subheading } from "../component/subheading"
import axios from "axios"
import { useNavigate } from "react-router-dom"


export const Signup= ()=>{
     const [firstName, setFirstName]=useState("");
     const [lastName, setLastName]=useState("");
     const [username, setUsername]=useState("");
     const [password, setPassword]=useState("");
     const navigate = useNavigate();
     

return<div className="bg-slate-300 h-dvh flex justify-center ">
     <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-100 text-center p-3 h-max px-4">
        <Heading label="Sign up"/>
        <Subheading label={"Enter your information to create an account"} />
        <Inputbox onChange={(e)=>{
          setFirstName(e.target.value);
        }} label={"first Name"} placeholder={" Enter First Name"}/>
        <Inputbox onChange={(e)=>{
          setLastName(e.target.value);
        }} label={"Last Name"} placeholder={"Enter Last Name"}/>
        <Inputbox onChange={(e)=>{
          setUsername(e.target.value);
        }} label={"Email"} placeholder={"Jhondoe@gmail.com"}/>
        <Inputbox onChange={(e)=>{
          setPassword(e.target.value);
        }} label={"Password"} placeholder={"Password"}/>
        <Button onClick={async()=>{
          const response= await axios.post("http://localhost:3000/api/v1/user/signup", {
               username,
               firstName,
               lastName,
               password
          });
          localStorage.setItem("token",response.data.token)
          navigate("/dashboard")
        }} label={"signup"}/>
        <BottomWarning  label={"Already have an account?"} buttonText={"Sign in"}  to={"/signin"} />
         </div>
    </div>
</div>
} 