import React, { useRef, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";

const TopicContent=()=>{
    
    const [contentdata,setContentData]=useState([]);
    const [topicdata,setTopicData]=useState([]);
    const [show, setShow] = useState(false);
    const [status,setStatus] = useState(false);
    const [index,setIndex] = useState(-1);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const contentname=useRef();
    const ucontentname=useRef();
    const topicid=useRef();
    const utopicid=useRef();
    const contentid=useRef();

    const FetchContent=()=>{
        axios({
            url:"http://localhost:9090/api/admin/contents",
            method:'get',
            contentType:'application/json',
        }).then((e)=>{
            // console.log(e.data);
            setContentData(e.data);
        })
    }

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
        FetchContent();
        FetchTopic();
    },[])    

    const AddContent=()=>{
        var cname=contentname.current.value;
        var tid=topicid.current.value;
        var st={"content_name":cname,"topic":{"topic_id":tid}};

        axios({
            url:"http://localhost:9090/api/admin/contents",
            method:'post',
            data:st,
            contentType:'application/json'
        }).then((e)=>{
            console.log(e.data);
        FetchContent();
        handleClose();
        })
    }

    const ViewContent=(st,i)=>{
        setStatus(true);
        setIndex(i);

        contentid.current.value=st.content_id;
        ucontentname.current.value=st.content_name;
        utopicid.current.value=st.topic.topic_id;        
        UpdateContent();
    }

    const UpdateContent=()=>{
        var ucname=ucontentname.current.value;
        var cid=contentid.current.value;
        var utid=utopicid.current.value;
        var st={"content_id":cid,"content_name":ucname,"topic":{"topic_id":utid}};

        axios({
            url:"http://localhost:9090/api/admin/contents",
            method:'put',
            data:st,
            contentType:'application/json'
        }).then((e)=>{
            console.log(e.data);
        FetchTopic();
        FetchContent();
        })                

    }

    const ClearData=()=>{
        ucontentname.current.value="";
        contentid.current.value="";
        utopicid.current.value="";
    }

    return(
        <div>
            <h2>Content</h2>
            <hr/>
            <button className="btn btn-primary" onClick={handleShow}>New Content</button><br/>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Content</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-group">
                        <label>Topic Name</label>
                        <select className="form-control" ref={topicid}>
                            <option selected disabled>Select Topic Name</option>
                            {topicdata.map((d,k)=>(
                                <option value={d.topic_id}>{d.topic_name}</option>
                            ))}
                            
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Content Name</label>
                        <input type="text" className="form-control" placeholder="Enter content name" ref={contentname}/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={()=>AddContent()}>
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
                    <th>Content Name</th>
                    <th>Actions</th>
                    </tr>
                </thead>
            <tbody>
                {contentdata.map((d,k)=>(
                    <tr key={k}>
                        <td>{k+1}</td>
                        <td>{d.topic.topic_name}</td>
                        <td>{d.content_name}</td>
                        <td><button className="btn btn-warning" onClick={()=>ViewContent(d,k)}>Edit</button></td>
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
                                <td><label><b>Content Id</b></label></td>
                            </tr>
                                <tr>
                                    <td><label><input type="text" className="form-control" style={{width:'500px'}} ref={utopicid}/></label></td>
                                    <td><label><input type="text" className="form-control" style={{width:'500px'}} ref={contentid}/></label></td>
                                </tr>                                
                        </table>
                    </div>
                    <div className="row">
                        <table style={{margin:'0 0 0 12px'}}>
                            <tr>
                                <td><label><b>Content Name</b></label></td>
                            </tr>
                                <tr>
                                    <td><label><input type="text" className="form-control" style={{width:'500px'}} ref={ucontentname}/></label></td>
                                </tr>                                
                        </table>
                    </div>
                </div>
                <div className="card-footer">
                    <button className="btn btn-info" onClick={()=>UpdateContent()}>Update</button>
                        &nbsp;
                    <button className="btn btn-danger" onClick={()=>ClearData()}>Clear</button>
                </div>
            </div>
        </div>
    )
}
export default TopicContent;