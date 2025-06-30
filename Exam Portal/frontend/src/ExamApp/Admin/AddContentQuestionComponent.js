import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";

export const AddContentQuestion=()=>{

    const [topicdata,setTopicData]=useState([]);
    const [contentdata,setContentData]=useState([]); 
    const [tbldata,setTbltData]=useState([]);   
    const [status,setStatus]=useState(false);   


    const ddtopic=useRef();
    const ddcontent=useRef();
    const ddlevel=useRef();
    const txtquestion=useRef();
    const txtopt1=useRef();
    const txtopt2=useRef();
    const txtopt3=useRef();
    const txtopt4=useRef();
    const txtcorrect_opt=useRef();

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

    const FillTable=()=>{
        var cid=ddcontent.current.value;
        var level=ddlevel.current.value;
        var qt=txtquestion.current.value;
        var op1=txtopt1.current.value;
        var op2=txtopt2.current.value;
        var op3=txtopt3.current.value;
        var op4=txtopt4.current.value;
        var correct_option=txtcorrect_opt.current.value;

        var s={"question":qt,"content":cid,"level":level,"option1":op1,"option2":op2,"option3":op3,"option4":op4,"correct_option":correct_option};
        setTbltData(data=>[...data,s]);
    }

    const AddQuestion=()=> {
        
        tbldata.forEach(function(dt, i) {
            var st={"correct_option_number":dt.correct_option,"question":dt.question,"option1":dt.option1,"option2":dt.option2,"option3":dt.option3,"option4":dt.option4,"content":{"content_id":dt.content}};

            axios({
                url:"http://localhost:9090/api/admin/contentquestions",
                method:'post',
                data:st,
                contentType:'application/json'
            }).then((e)=>{
                console.log(e.data);
            })
        });

        setStatus(true);
        ClearData();
        
    }

    const ContentQuestionNavigate=()=>{
        navigate("/admin/content-question");
    }

    const ClearData=()=>{
        ddtopic.current.value="";
        ddcontent.current.value="";
        ddlevel.current.value="";
        txtquestion.current.value="";
        txtopt1.current.value="";
        txtopt2.current.value="";
        txtopt3.current.value="";
        txtopt4.current.value="";
        txtcorrect_opt.current.value="";

        setTbltData([]);
    }

    useEffect(function(){
        FetchTopic();
    },[])

    return(
        <div>
            <h2>Add ContentQuestion</h2>
            <hr/>
            <button className="btn btn-primary" onClick={()=>ContentQuestionNavigate()}>View All Questions</button><br/><br/>
            
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
                        <select className="form-control" ref={ddcontent}>
                            <option selected disabled>Select Content</option>
                            {contentdata.map((d,k)=>(
                                <option value={d.content_id}>{d.content_name}</option>
                            ))}
                            
                        </select>
                    </td>
                    <td>
                        <select className="form-control" ref={ddlevel}>
                            <option selected disabled>Select Level</option>
                            <option>Complex</option>
                            <option>Medium</option>
                            <option>Simple</option>
                        </select>
                    </td>    
                    </tr>
                </table>
                <Alert variant="success" hidden={!status}>
                    <strong>Data Added Successfully!</strong>
                </Alert>
                <div>
                <br/>
                <textarea cols="100" placeholder="Enter Question" className="form-control"ref={txtquestion}></textarea><br/>
                <div className="row">
                    <div className="col-md-6">
                        <textarea cols="100" placeholder="Option 1" className="form-control"ref={txtopt1}></textarea>
                    </div>
                    <div className="col-md-6">
                        <textarea cols="100" placeholder="Option 2" className="form-control"ref={txtopt2}></textarea>
                    </div>
                </div><br/>
                <div className="row">
                    <div className="col-md-6">
                        <textarea cols="100" placeholder="Option 3" className="form-control"ref={txtopt3}></textarea>
                    </div>
                    <div className="col-md-6">
                        <textarea cols="100" placeholder="Option 4" className="form-control"ref={txtopt4}></textarea>
                    </div>
                </div><br/>
                <div className="row">
                    <div className="col-md-4">
                        <input type="text" placeholder="Correct Answer" className="form-control"ref={txtcorrect_opt}/>
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-primary" onClick={()=>FillTable()}><b>+</b></button>
                    </div>
                    <div className="col-md-5">
                        <button className="btn btn-primary" onClick={()=>AddQuestion()}><b>Submit Questions</b></button>
                    </div>
                </div>
                <hr/>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Question</th>
                            <th>Content</th>
                            <th>Level</th>
                            <th>Option 1</th>
                            <th>Option 2</th>
                            <th>Option 3</th>
                            <th>Option 4</th>
                            <th>Correct Option Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tbldata.map((d,k)=>(
                            <tr key={k}>
                                <td>{k+1}</td>
                                <td>{d.question}</td>
                                <td>{d.content}</td>
                                <td>{d.level}</td>
                                <td>{d.option1}</td>
                                <td>{d.option2}</td>
                                <td>{d.option3}</td>
                                <td>{d.option4}</td>
                                <td>{d.correct_option}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}