import axios from "axios";
import React, { useEffect, useState } from "react";
export const StudentProfile=()=>{

    const [student,setStudent]=useState({});
    
    useEffect(function(){
        var sid=localStorage.getItem("student_id");

        axios({
            url:'http://localhost:9090/api/student/'+sid,
            method:'get',
            contentType:'application/json'
        }).then(e=>{
            setStudent(e.data);
        })
    },[])

    return(
        <div>
            <h2>Student Profile</h2>
            <hr/>
            <div className="" style={{"background-color": "#f4f5f7","marginTop":"60px"}}>
            <div className="container py-5">
                <div className="row d-flex justify-content-center align-items-center">
                <div className="col col-lg-8">
                    <div className="card mb-3" style={{"border-radius": ".5rem"}}>
                    <div className="row g-0">
                        <div className="col-md-4 gradient-custom text-center text-white"
                        style={{"border-top-left-radius": ".5rem", "border-bottom-left-radius": ".5rem","backgroundColor":"#35363a"}}>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                            alt="Avatar" className="img-fluid my-5" style={{"width": "80px"}} />
                        <h4>{student.student_name}</h4>
                        <h6>{student.qualification}</h6>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body p-4">
                            <h5>Information</h5>
                            <hr className="mt-0 mb-4"/>
                            <div className="row pt-1">
                            <div className="col-6 mb-3">
                                <h6>Email</h6>
                                <p className="text-muted">{student.email_address}</p>
                            </div>
                            <div className="col-6 mb-3">
                                <h6>Phone</h6>
                                <p className="text-muted">{student.mobile}</p>
                            </div>
                            </div>
                            <h5>Projects</h5>
                            <hr className="mt-0 mb-4"/>
                            <div className="row pt-1">
                            <div className="col-6 mb-3">
                                <h6>City</h6>
                                <p className="text-muted">{student.city}</p>
                            </div>
                            <div className="col-6 mb-3">
                                <h6>Student Code</h6>
                                <p className="text-muted">S150268513</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
       </div>
    )
}