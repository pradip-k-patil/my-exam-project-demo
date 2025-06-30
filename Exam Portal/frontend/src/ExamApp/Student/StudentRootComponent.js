import React from "react";
import { ListGroup } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link, Outlet  } from "react-router-dom";

export const StudentRoot=()=> {
    return(
        <div>
            <nav className="navbar navbar-dark bg-dark">
                    <h2 style={{color:'white',margin:'0 0 0 40px'}}>Student Section</h2>
                </nav>
                <div class="row">
                    <div className="col-md-3" style={{background:'grey'}}>
                        <br/>
                        <ListGroup>
                            <ListGroup.Item><Link to="">DashBoard</Link></ListGroup.Item>
                            <ListGroup.Item><Link to="profile">Profile</Link></ListGroup.Item>
                            <ListGroup.Item><Link to="exam">Exam</Link></ListGroup.Item>
                            <ListGroup.Item style={{margin:'0 0 420px 0'}}><Link to="tutorial">Tutorial</Link></ListGroup.Item>
                        </ListGroup>
                    </div>
                    <div className="col-md-9">
                        <Outlet/>
                    </div>
                </div>
        </div>
    )
}


