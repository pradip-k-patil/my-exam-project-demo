import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Student=()=>{

    const [studentdata,setStudentData]=useState([]);
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

    const StudentNavigate=()=>{
        navigate("/admin/add-student");
    }

    useEffect(function(){
        FetchStudents();
    },[])

    return(
        <div>
            <h2>Student Section</h2>
            <hr/>
            <button className="btn btn-primary" onClick={()=>StudentNavigate()}>Add Students</button><br/><br/>
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th>Sr. No.</th>
                    <th>Student Name</th>
                    <th>Email Address</th>
                    <th>Mobile Number</th>
                    <th>Qualification</th>
                    <th>City</th>
                    {/* <th>Student Code</th> */}
                    {/* <th>Address</th> */}
                    </tr>
                </thead>
                <tbody>
                    {studentdata.map((d,k)=>(
                        <tr key={k}>
                            <td>{k+1}</td>
                            <td>{d.student_name}</td>
                            <td>{d.email_address}</td>
                            <td>{d.mobile}</td>
                            <td>{d.qualification}</td>
                            <td>{d.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
    )
}
export default Student;