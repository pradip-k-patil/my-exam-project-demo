package mypackage.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import mypackage.model.Content;
import mypackage.model.Content_Question;
import mypackage.model.Exam_Detail;
import mypackage.model.Exam_Question;
import mypackage.model.Login;
import mypackage.model.Message;
import mypackage.model.Student_Detail;
import mypackage.model.Topic;
import mypackage.repository.IStudent_DetailRepository;
import mypackage.service.TopicContentService;

@CrossOrigin(origins="*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE}, allowedHeaders = "*")
@RestController
public class AdminController {
	
	@Autowired
	TopicContentService tcservice;
	
	@Autowired
	IStudent_DetailRepository studentrepo;

	//Topic Controller
	@GetMapping("api/admin/topics")
	public List<Topic> GetTopics() {
		return tcservice.GetAllTopics();
	}
	
	@GetMapping("api/admin/topic/{id}")
	public Topic GetTopicByid(@PathVariable("id") int id) {
		return tcservice.GetTopicByid(id);
	}
	
	@PostMapping("api/admin/topics")
	public Topic AddTopics(@RequestBody Topic t) {
		tcservice.AddAllTopics(t);
		return t;
	}
	
	@PutMapping("api/admin/topics")
	public Topic UpdateTopic(@RequestBody Topic t) {
		tcservice.UpdateTopics(t);
		return t;
	}
	
	//Content Controller
	@GetMapping("api/admin/contents")
	public List<Content> GetContents() {
		return tcservice.GetAllContents();
	}
	
	@GetMapping("api/admin/content/{cid}")
	public Content GetContentByid(@PathVariable("cid") int cid) {
		return tcservice.GetContentByid(cid);
	}
	
	@GetMapping("api/admin/topicwisecontent/{id}")
	public List<Content> GetTopicContents(@PathVariable("id") int id) {
		return tcservice.GetTopicWiseContent(id);
	}
	
	@PostMapping("api/admin/contents")
	public Content AddContents(@RequestBody Content c) {
		return tcservice.AddAllContents(c);
	}
	
	@PostMapping("api/admin/topicwisecontent")
	public Message AddTopicContent(@RequestBody Topic t) {
		tcservice.AddTopicContent(t);
		Message m= new Message("Data Added Successfully");
		return m;
	}
	
	@PutMapping("api/admin/contents")
	public Content UpdateContent(@RequestBody Content c) {
		return tcservice.UpdateContents(c);
	}
	
	//Content_Question Controller
	@GetMapping("api/admin/contentquestions")
	public List<Content_Question> GetQuestions() {
		return tcservice.GetAllQuestions();
	}
	
	@GetMapping("api/admin/contentquestion/{id}")
	public Content_Question GetQuestion(@PathVariable("id") int id) {
		return tcservice.GetQuestionByid(id);
	}
	
	@GetMapping("api/admin/contentwisequestion/{id}")
	public List<Content_Question> GetContentQuestions(@PathVariable("id") int id) {
		return tcservice.GetContentWiseQuestion(id);
	}
	
	@GetMapping("api/student/topicwisequestion/{id}")
	public List<Content_Question> GetTContentQuestions(@PathVariable("id") int id) {
		List<Content_Question> cqlst=new ArrayList<Content_Question>();
		cqlst = tcservice.GetTopicWiseQuestion(id);
		Random r=new Random();
		r.nextInt(10);
		return cqlst;
	}
	
	@PostMapping("api/admin/contentquestions")
	public Message AddQuestion(@RequestBody Content_Question q) {
		tcservice.AddContentQuestion(q);
		Message m= new Message("Data Added Successfully");
		return m;
	}
	
	//Student Controller
	@GetMapping("api/students")
	public List<Student_Detail> GetStudents() {
		return tcservice.GetAllStudents();
	}
	
	@GetMapping("api/student/{id}")
	public Student_Detail GetStudentByid(@PathVariable("id") int id) {
		return tcservice.GetStudentByid(id);
	}
	
	@PostMapping("api/login")
	public Student_Detail LoginApi(@RequestBody Login l) {
		Student_Detail s=tcservice.CheckLogin(l);
		return s;
	}
	
	@PostMapping("api/students")
	public Student_Detail AddStudents(@RequestBody Student_Detail s) {
		tcservice.AddStudents(s);
		return s;
	}
	
	//ExamDetail Controller
	@GetMapping("api/edetails")
	public List<Exam_Detail> GetExamDetails() {
		return tcservice.GetAllExamDetails();
	}
	
	@GetMapping("api/edetail/{id}")
	public Exam_Detail GetExamDetailByid(@PathVariable("id") int id) {
		return tcservice.GetExamDetailByid(id);
	}
	
	@PostMapping("api/edetails")
	public Exam_Detail AddExamDetails(@RequestBody Exam_Detail q) {
		tcservice.AddExamDetails(q);
		return q;
	}
	
	//ExamQuestion Controller
	@GetMapping("api/equestions")
	public List<Exam_Question> GetExamQuestions() {
		return tcservice.GetAllExamQuestions();
	}
	
	@GetMapping("api/equestion/{id}")
	public Exam_Question GetExamQuestionByid(@PathVariable("id") int id) {
		return tcservice.GetExamQuestionByid(id);
	}
	
	@PostMapping("api/equestions")
	public Exam_Question AddExamQuestions(@RequestBody Exam_Question eq) {
		tcservice.AddExamQuestions(eq);
		return eq;
	}
}



/*{
        "topic_name":"java",
        "contents":[{
            "content_name":"Java"
        }]
}

{
    "correct_option_number":1,
    "question":"Why?",
    "option1":"a",
    "option2":"b",
    "option3":"c",
    "option4":"d",
    "content":{"content_id":1},
    "examquestions":null
}

*/
