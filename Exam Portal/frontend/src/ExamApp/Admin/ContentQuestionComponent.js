import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ContentQuestion=()=>{

    const [topicdata,setTopicData]=useState([]);
    const [contentdata,setContentData]=useState([]);
    const [questiondata,setQuestionData]=useState([]);

    const ddtopic=useRef();
    const ddcontent=useRef();
    const navigate=useNavigate();

    const FetchTopic=()=>{
        axios({
            url:"http://localhost:9090/api/admin/topics",
            method:'get',
            contentType:'application/json',
        }).then((e)=>{
            console.log(e.data);
            setTopicData(e.data);
        })
    }

    const SetContent=()=>{
        var ddt=ddtopic.current.value;
        axios({
            url:"http://localhost:9090/api/admin/topicwisecontent/"+ddt,
            method:'get',
            contentType:'application/json',
        }).then((e)=>{
            console.log(e.data);
            setContentData(e.data);
        })
    }

    const FetchQuestion=()=>{
        var ddc=ddcontent.current.value;
        axios({
            url:"http://localhost:9090/api/admin/contentwisequestion/"+ddc,
            method:'get',
            contentType:'application/json',
        }).then((e)=>{
            console.log(e.data);
            setQuestionData(e.data);
        })
    }

    const ContentNavigate=()=>{
        navigate("/admin/add-content-question");
    }
    
    useEffect(function(){
        FetchTopic();
    },[])

    return(
        <div>
            <h2>ContentQuestion</h2>
            <hr/>
            <button className="btn btn-primary" onClick={()=>ContentNavigate()}>Add Question</button><br/><br/>
            
            <table className="table">
                    <tr>
                        <td><label><b>Select Topic</b></label></td>
                        <td><label><b>Select Content</b></label></td>
                        <td><label><b>Select Level</b></label></td>
                    </tr>
                    <tr>
                    <td>
                        <select className="form-control" ref={ddtopic}  onChange={()=>SetContent()}>
                            <option selected disabled>Select Topic</option>
                            {topicdata.map((d,k)=>(
                                <option value={d.topic_id}>{d.topic_name}</option>
                            ))}
                        </select>
                    </td>
                    <td>
                        <select className="form-control" ref={ddcontent} onChange={()=>FetchQuestion()}>
                            <option selected disabled>Select Content</option>
                            {contentdata.map((d,k)=>(
                                <option value={d.content_id}>{d.content_name}</option>
                            ))}
                            
                        </select>
                    </td>
                    <td>
                        <select className="form-control">
                            <option selected disabled>Select Level</option>
                            <option>Complex</option>
                            <option>Medium</option>
                            <option>Simple</option>
                        </select>
                    </td>    
                    </tr>  
                </table>
                <h4>Content Questions</h4>
                <hr style={{backgroundColor:'darkblue',height:'7px'}}/>
                <div className="row">
                    {questiondata.map((d,k)=>(
                        <div className="card" style={{margin:"0 0 10px 10px"}}>
                            <div className="card-header">
                        <h5>{d.question}</h5>
                            </div>
                            <div className="card-body">
                                <ul>
                                    <li><h6>{d.option1}</h6></li>
                                    <li><h6>{d.option2}</h6></li>
                                    <li><h6>{d.option3}</h6></li>
                                    <li><h6>{d.option4}</h6></li>
                                    <li><h6>Correct Option - {d.correct_option_number}</h6></li>
                                </ul>
                                <div className="card-footer"></div>
                            </div>
                        </div>
                    ))}
                    
                </div>
        </div>
    )
}
export default ContentQuestion;