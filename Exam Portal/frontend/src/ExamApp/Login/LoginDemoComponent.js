import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
export const Login=()=>{
    const uname=useRef();
    const pass=useRef();
    const navigate=useNavigate();
    const [msg,setMessage]=useState("")
    const CheckLogin=()=>{
        var u=uname.current.value;
        var p=pass.current.value;
        var st={"username":u,"password":p};
        axios({
            url:'http://localhost:9090/api/login',
            method:'post',
            data:st,
            contentType:'application/json'
        }).then(e=>{
            console.log(e)
            if(e.data=="")
            {
             setMessage("Invalid User Name or Password")   
            }
            else{
                // setMessage("Login Success")
                var d=e.data;
                localStorage.setItem("student_id",d.student_id);
                localStorage.setItem("student_name",d.student_name);
            navigate("/student")
            }
        })
    }
    return(
        <div>
            <h2>Login Here</h2>
            <table>
                <thead>

                </thead>
                <tbody>
                    <tr>
                        <td>User Name/ Email Address</td>
                        <td><input type="text" ref={uname}/></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="password" ref={pass}/></td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <input type="button" value="Login" onClick={()=>CheckLogin()}/>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2>{msg}</h2>
        </div>
    )
}