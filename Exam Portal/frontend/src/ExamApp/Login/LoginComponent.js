import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login=()=>{

    // const [user,setUser]=useState("admin");
    // const [apass,setAPass]=useState("admin");
    const [status,setStatus]=useState(true);
    const [txtcolor,setTxtColor]=useState({"color":"#66FCF1"});
    const [msg,setMessage]=useState("")

    const uname=useRef();
    const pass=useRef();
    const navigate=useNavigate();
    
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
            console.log(e.data);
            if(e.data=="") {
                if(u=="admin" && p=="admin") {
                    navigate("/admin");
                }
                setStatus(false);
                setMessage("Invalid User Name or Password!");
            }
            else {
                var d=e.data;
                localStorage.setItem("student_id",d.student_id);
                localStorage.setItem("student_name",d.student_name);
                navigate("/student");
            }
        })
    }

    return(
        <div style={{"backgroundImage":"url('https://wallpaperaccess.com/full/2345244.jpg')","backgroundSize":"cover"}}>

                <nav className="navbar navbar-expand-sm bg-dark text-white">
                    <div className="container-fluid">
                        <img src="https://ciitinstitute.com/images/mainlogo.png" style={{"height":"40px"}} alt="ciit logo"/>
                    </div>
                    <ul className="navbar-nav ml-auto">
                        <li><a className="nav-link text-white" href="#">Login</a></li>
                    </ul>
                </nav>
                <div className="alert alert-danger" role="alert" hidden={status}>
                        <strong>{msg}</strong>
                    </div>
                <div className="container h-80">
                    
                    <div hidden={!status} style={{"marginTop":"74px"}}>
                    </div>

                    <div className="row align-items-center h-100">
                        <div className="col-md-3 mx-auto">
                            <div className="text-center" style={{"margin":"115px 55px 120px 0"}}>
                                <img id="profile-img" className="rounded-circle profile-img-card" src="https://i.imgur.com/6b6psnA.png" style={{"height":"200px"}}/>
                                <p id="profile-name" className="profile-name-card"></p>
                                    <input type="text" className="form-control" placeholder="Enter Username/Email" ref={uname} required/><br/>
                                    <input type="password" className="form-control" placeholder="Enter Password" ref={pass} required/><br/>
                                    <button className="btn btn-lg btn-success" type="submit" onClick={()=>CheckLogin()}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            {/* <section className="vh-100" style={{"background-color":"black"}}>
            <div className="alert alert-danger" role="alert" hidden={status}>
                <strong>{msg}</strong>
            </div>

    <div className="container h-100" style={{"background-color":"#1F2833"}}>
        <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
            <div className="card text-black" >
            <div className="card-body p-md-5">
                <div className="row justify-content-center" style={{"background-color":"#1F2833"}}>
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"  style={txtcolor}>Login</p>

                    <form className="mx-1 mx-md-4">

                    <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                        <label className="form-label" for="form3Example1c" style={txtcolor}>UserName/Email</label>
                        <input type="text" ref={uname} className="form-control" />
                        </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                        <label className="form-label" style={txtcolor}>Password</label>
                        <input type="password" ref={pass} className="form-control" />
                        </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    </div>

                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" className="btn btn-info btn-lg" onClick={()=>CheckLogin()}>Login</button>
                    </div>

                    </form>

                </div>
                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                    <img src="https://wallpaperaccess.com/full/1655659.jpg" className="img-fluid" alt="Sample image"/>
                    <img src="https://wallpapercave.com/wp/wp7740354.jpg" className="img-fluid" alt="Sample"/>

                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
</section> */}
        </div>
    )
}
export default Login;