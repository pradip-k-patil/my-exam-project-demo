import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert } from "react-bootstrap";

export const AddStudent=()=>{

    const [studentdata,setStudentData]=useState([]);
    const [status,setStatus]=useState(false);   
    
    const txtname=useRef();
    const txtemail=useRef();
    const txtnum=useRef();
    const txtqual=useRef();
    const txtcity=useRef();
    const txtid=useRef();
    const navigate=useNavigate();

    const FetchStudents=()=>{
        axios({
            url:"http://localhost:9090/api/students",
            method:'get',
            contentType:'application/json',
        }).then((e)=>{
            // console.log(e.data);
            setStudentData(e.data);
        })
        
    }

    const InsertStudent=()=>{
        var sname=txtname.current.value;
        var email=txtemail.current.value;
        var mobile=txtnum.current.value;
        var qual=txtqual.current.value;
        var city=txtcity.current.value;

        var st={"student_name":sname,"qualification":qual,"mobile":mobile,"email_address":email,"city":city};

        axios({
            url:"http://localhost:9090/api/students",
            method:'post',
            data:st,
            contentType:'application/json'
        }).then((e)=>{
            console.log(e.data);
            ClearData();
            setStatus(true);
        })
    }

    const StudentNavigate=()=>{
        navigate("/admin/student");
    }

    const ClearData=()=>{
        txtname.current.value="";
        txtemail.current.value="";
        txtnum.current.value="";
        txtqual.current.value="";
        txtcity.current.value="";
        FetchStudents();
    }

    useEffect(function(){
        FetchStudents();        
    },[])

    return(
        <div>
            <h2>AddStudent</h2>
            <hr/>
            <button className="btn btn-primary" onClick={()=>StudentNavigate()}>View All Students</button><br/><br/>
            <Alert variant="success" hidden={!status}>
                    <strong>Data Added Successfully!</strong>
                </Alert>
            <div className="card">
                <h5 className="card-header bg-primary text-white">Add Student</h5>
                <div className="card-body">
                    <div className="row">
                        <table style={{margin:'0 0 0 12px'}}>
                            <tr>
                                <td><label><b>Student Id</b></label></td>
                                <td><label><b>Student Name</b></label></td>
                            </tr>
                                <tr>
                                    <td><label><input type="text" className="form-control" style={{width:'500px'}} ref={txtid} value={(studentdata.length+1)}/></label></td>
                                    <td><label><input type="text" className="form-control" style={{width:'500px'}} ref={txtname}/></label></td>
                                </tr>                                
                        </table>
                    </div>
                    <div className="row">
                        <table style={{margin:'0 0 0 12px'}}>
                            <tr>
                                <td><label><b>Email Address</b></label></td>
                                <td><label><b>Mobile Number</b></label></td>
                            </tr>
                            <tr>
                                <td><label><input type="text" className="form-control" style={{width:'500px'}} ref={txtemail}/></label></td>
                                <td><label><input type="text" className="form-control" style={{width:'500px'}} ref={txtnum}/></label></td>
                            </tr>
                            
                        </table>
                    </div>
                    <div className="row">
                        <table style={{margin:'0 0 0 12px'}}>
                            <tr>
                                <td><label><b>Qualification</b></label></td>
                                <td><label><b>City</b></label></td>
                            </tr>
                            <tr>
                                <td><label><input type="text" className="form-control" style={{width:'500px'}} ref={txtqual}/></label></td>
                                <td><label><input type="text" className="form-control" style={{width:'500px'}} ref={txtcity}/></label></td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="card-footer">
                    <button className="btn btn-success" onClick={()=>InsertStudent()}>Submit</button>
                </div>
                
            </div>
        </div>
    )
}