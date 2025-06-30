import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRoot from "../Admin/AdminRootComponent";
import Login from "./LoginComponent";
import ContentQuestion from "../Admin/ContentQuestionComponent";
import Dashboard from "../Admin/DashBoardComponent";
import Exam from "../Admin/ExamComponent";
import QuestionLevel from "../Admin/QuestionLevelComponent";
import Role from "../Admin/RoleComponent";
import Student from "../Admin/StudentComponent";
import Topic from "../Admin/TopicComponent";
import TopicContent from "../Admin/TopicContentCoomponent";
import { AddContentQuestion } from "../Admin/AddContentQuestionComponent";
import { AddStudent } from "../Admin/AddStudentComponent";
// import { Login } from "./LoginDemoComponent";
import { StudentTutorial } from "../Student/TutorialComponent";
import { StudentRoot } from "../Student/StudentRootComponent";
import { StduentDashboard } from "../Student/DashboardComponent";
import { StudentProfile } from "../Student/ProfileComponent";
import { StudentExam } from "../Student/ExamComponent";
const Common=()=> {
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="" element={<Login/>}/>
                    <Route path="admin" element={<AdminRoot/>}>
                        <Route path="" element={<Dashboard/>}/>
                        <Route path="student" element={<Student/>}/>
                        <Route path="exam" element={<Exam/>}/>
                        <Route path="topic" element={<Topic/>}/>
                        <Route path="topic-content" element={<TopicContent/>}/>
                        <Route path="content-question" element={<ContentQuestion/>}/>
                        <Route path="question-level" element={<QuestionLevel/>}/>
                        <Route path="role" element={<Role/>}/>
                        <Route path="add-content-question" element={<AddContentQuestion/>}/>
                        <Route path="add-student" element={<AddStudent/>}/>    
                    </Route>
                    <Route path="student" element={<StudentRoot/>}>
                        <Route path="" element={<StduentDashboard/>}/>
                        <Route path="profile" element={<StudentProfile/>}/>
                        <Route path="exam" element={<StudentExam/>}/>
                        <Route path="tutorial" element={<StudentTutorial/>}/>
                       
                    </Route>

                </Routes>
            </Router>
        </div>
    )
}
export default Common;