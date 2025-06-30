import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

export const StudentExam=()=>{
    const[status,setStatus]=useState(false);
    const[show,setShow]=useState(false);
    const[topicdata,setTopicData]=useState([]);
    const[questiondata,setQuestionData]=useState([]);
    const topicid=useRef();
    const radio=useRef();

    const View=()=> {
        setStatus(true);
    }

    const FetchTopic=()=> {
        axios({
            url:"http://localhost:9090/api/admin/topics",
            method:'get',
            contentType:'application/json'
        }).then((e)=>{
            console.log(e.data);
            setTopicData(e.data);
        })
    }

    const FetchQuestion=()=> {
        var tid=topicid.current.value;
        console.log(tid);

        axios({
            url:"http://localhost:9090/api/student/topicwisequestion/"+tid,
            method:'get',
            contentType:'application/json'
        }).then((e)=>{
            console.log(e.data);
            setQuestionData(e.data);
            setShow(true);
        })
    }

    const AddResponse=()=> {
        
        // var a=[];
        // a.forEach(function(){
            
        // })
        // console.log(a);
    }

    useEffect(function(){
        FetchTopic();
    },[])

    return(
        <div>
            <h2>Student Exams</h2>
            <hr/>
            <button className="btn btn-lg btn-primary" hidden={status} onClick={()=>View()}><b>Give Exams</b></button>
            <div className="row" hidden={!status}>
            <div className="col-md-6">
                <select className="form-control"  ref={topicid}>
                   <option selected disabled>Select Topic</option>
                   {topicdata.map((d,k)=>(
                        <option value={d.topic_id}>{d.topic_name}</option>
                   ))}
                </select><br/>
            </div>
            <div className="col-md-6">
                <button className="btn btn-primary" onClick={()=>FetchQuestion()}>Submit</button>
            </div>
            </div>
            <div className="row">
                    {questiondata.map((d,k)=>(
                        <div className="card" style={{margin:"0 0 10px 10px"}}>
                            <div className="card-header">
                        <h5>{d.question}</h5>
                            </div>
                            <div className="card-body">
                                <input type="radio" name={k} ref={radio} value="1"/>{d.option1}<br/>
                                <input type="radio" name={k} ref={radio} value="2"/>{d.option2}<br/>
                                <input type="radio" name={k} ref={radio} value="3"/>{d.option3}<br/>
                                <input type="radio" name={k} ref={radio} value="4"/>{d.option4}
                                {/* <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li><h6>Correct Option - {d.correct_option_number}</h6></li>
                                </ul> */}
                                <div className="card-footer"></div>
                            </div>
                        </div>
                    ))}
                    <div hidden={!show}>
                    <button className="btn btn-lg btn-success" onClick={()=>AddResponse()}>Submit Exam</button>
                    </div>
                </div>
        </div>
    )
}