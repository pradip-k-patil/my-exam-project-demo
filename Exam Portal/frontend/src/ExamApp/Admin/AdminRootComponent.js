import React from "react";
import { ListGroup } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link, Outlet  } from "react-router-dom";

const AdminRoot=()=> {
    return(
        <div>
            <nav className="navbar navbar-dark bg-dark">
                    <h2 style={{color:'white',margin:'0 0 0 40px'}}>ExamPortal</h2>
                </nav>
                <div class="row">
                    <div className="col-md-3" style={{background:'grey'}}>
                        <br/>
                        <h4>Student Section</h4>
                        <ListGroup>
                            <ListGroup.Item><Link to="">DashBoard</Link></ListGroup.Item>
                            <ListGroup.Item><Link to="student">Student</Link></ListGroup.Item>
                            <ListGroup.Item style={{margin:'0 0 20px 0'}}><Link to="/admin/exam">Exam</Link></ListGroup.Item>
                        </ListGroup>
                    <hr/>
                    <h4>Master Section</h4>
                        <ListGroup>
                            <ListGroup.Item><Link to="topic">Topic</Link></ListGroup.Item>
                            <ListGroup.Item><Link to="topic-content">Content</Link></ListGroup.Item>
                            <ListGroup.Item><Link to="content-question">Content Question</Link></ListGroup.Item>
                            <ListGroup.Item><Link to="question-level">Question Level</Link></ListGroup.Item>
                            <ListGroup.Item style={{margin:'0 0 220px 0'}}><Link to="role">Role</Link></ListGroup.Item>
                        </ListGroup>
                    </div>
                    <div className="col-md-9">
                        <Outlet/>
                    </div>
                </div>
        </div>
    )
}

export default AdminRoot;