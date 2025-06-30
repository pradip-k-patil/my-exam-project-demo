import { Button, Modal } from "react-bootstrap";
import React, { useRef, useEffect, useState } from "react";
import axios from "axios";

const Topic=()=>{

    const [topicdata,setTopicData]=useState([]);
    const [show, setShow] = useState(false);
    const [status,setStatus] = useState(false);
    const [index,setIndex] = useState("1");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const topicname=useRef();
    const topicid=useRef();
    const utopicname=useRef();

    const FetchTopic=()=>{
        axios({
            url:"http://localhost:9090/api/admin/topics",
            method:'get',
            contentType:'application/json',
        }).then((e)=>{
            // console.log(e.data);
            setTopicData(e.data);
        })
    }
    
    useEffect(function(){
        FetchTopic();
    },[])    

    const AddTopic=()=>{
        var tname=topicname.current.value;
        var st={"topic_name":tname};

        axios({
            url:"http://localhost:9090/api/admin/topics",
            method:'post',
            data:st,
            contentType:'application/json'
        }).then((e)=>{
            console.log(e.data);
        FetchTopic();
        handleClose();
        })                

    }

    const ViewTopic=(st,i)=>{
        setStatus(true);
        setIndex(i);

        topicid.current.value=st.topic_id;
        utopicname.current.value=st.topic_name;
        UpdateTopic();
    }

    const UpdateTopic=()=>{
        var utname=utopicname.current.value;
        var tid=topicid.current.value;
        var st={"topic_id":tid,"topic_name":utname};

        axios({
            url:"http://localhost:9090/api/admin/topics",
            method:'put',
            data:st,
            contentType:'application/json'
        }).then((e)=>{
            console.log(e.data);
        FetchTopic();
        })                

    }

    const ClearData=()=>{
        utopicname.current.value="";
        topicid.current.value="";
    }

    return(
        <div>
            <h2>Topic</h2>
            <hr/>
            <button className="btn btn-primary" onClick={handleShow}>New Topic</button><br/>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Topic</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-group">
                        <label>Topic Name</label>
                        <input type="text" className="form-control" placeholder="Enter topic name" ref={topicname}/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={()=>AddTopic()}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>            
            
            <br/>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Topic Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
            <tbody>
                {topicdata.map((d,k)=>(
                    <tr key={k}>
                        <td>{k+1}</td>
                        <td>{d.topic_name}</td>
                        <td><button className="btn btn-warning" onClick={()=>ViewTopic(d,k)}>Edit</button></td>
                    </tr>
                ))}
            </tbody>
            </table>
            <div className="card" hidden={!status}>
                <h5 className="card-header bg-primary text-white">Update Topic</h5>
                <div className="card-body">
                    <div className="row">
                        <table style={{margin:'0 0 0 12px'}}>
                            <tr>
                                <td><label><b>Topic Id</b></label></td>
                                <td><label><b>Topic Name</b></label></td>
                            </tr>
                                <tr>
                                    <td><label><input type="text" className="form-control" style={{width:'500px'}} ref={topicid}/></label></td>
                                    <td><label><input type="text" className="form-control" style={{width:'500px'}} ref={utopicname}/></label></td>
                                </tr>                                
                        </table>
                    </div>
                </div>
                <div className="card-footer">
                    <button className="btn btn-info" onClick={()=>UpdateTopic()}>Update</button>
                        &nbsp;
                    <button className="btn btn-danger" onClick={()=>ClearData()}>Clear</button>
                </div>
            </div>
        </div>
    )
}
export default Topic;