package mypackage.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import mypackage.model.Content;
import mypackage.model.Content_Question;
import mypackage.model.EmailModel;
import mypackage.model.Exam_Detail;
import mypackage.model.Exam_Question;
import mypackage.model.Login;
import mypackage.model.Student_Detail;
import mypackage.model.Topic;
import mypackage.repository.IContentRepository;
import mypackage.repository.IContent_QuestionRepository;
import mypackage.repository.IExam_DetailRepository;
import mypackage.repository.IExam_QuestionRepository;
import mypackage.repository.IStudent_DetailRepository;
import mypackage.repository.ITopicRepository;

@Service
public class TopicContentService {
	
	@Autowired
	ITopicRepository topicrepo;
	
	@Autowired
	IContentRepository contentrepo;
	
	@Autowired
	IContent_QuestionRepository questionrepo;
	
	@Autowired
	IStudent_DetailRepository studentrepo;
	
	@Autowired
	IExam_DetailRepository edetailrepo;
	
	@Autowired
	IExam_QuestionRepository equestionrepo;
	
	@Autowired
	EmailServiceImplementation email;
	
	//Topic Service
	public List<Topic> GetAllTopics() {
		List<Topic> lst=new ArrayList<Topic>();
		for(Topic t:topicrepo.findAll()) {
			Topic tp=new Topic(t.getTopic_id(), t.getTopic_name(), null);
			lst.add(tp);
		}
		return lst;
	}
	
	public Topic GetTopicByid(int id) {
		Topic t=topicrepo.findById(id).get();
		return t;
	}
	
	public Topic AddAllTopics(Topic t) {
		topicrepo.save(t);
		return t;
	}
	
	public Topic UpdateTopics(Topic t) {
		topicrepo.save(t);
		return t;
	}
	
	//Content Service
	public List<Content> GetAllContents() {
		List<Content> lst=new ArrayList<Content>();
		for(Content c:contentrepo.findAll()) {
			Topic t=new Topic(c.getTopic().getTopic_id(), c.getTopic().getTopic_name(), null);
			Content ct=new Content(c.getContent_id(), c.getContent_name(), t, null);
			lst.add(ct);
		}
		return lst;
	}
	
	public Content GetContentByid(int cid) {
		Content c=contentrepo.findById(cid).get();
		return c;
	}
	
	public List<Content> GetTopicWiseContent(int topic_id) {
		List<Content> lst=new ArrayList<Content>();
		for(Content c:contentrepo.findAll()) {
			
			if(c.getTopic().getTopic_id()==topic_id) {
				Topic t=new Topic(c.getTopic().getTopic_id(), c.getTopic().getTopic_name(), null);
				Content ct=new Content(c.getContent_id(), c.getContent_name(), t, null);
				lst.add(ct);
			}
		}
		return lst;
	}
	
	public void AddTopicContent(Topic t) {
		Topic tp=new Topic(0, t.getTopic_name(), null);
		Topic tm=topicrepo.save(tp);
		
		for(Content c:t.getContents()) {
			Content cm=new Content(0, c.getContent_name(), tm, null);
			contentrepo.save(cm);
		}
	}
	
	public Content AddAllContents(Content c) {
		contentrepo.save(c);
		return c;
	}
	
	public Content UpdateContents(Content c) {
		contentrepo.save(c);
		return c;
	}
	
	//Content_Question Service
	public List<Content_Question> GetAllQuestions() {
		List<Content_Question> lst=new ArrayList<Content_Question>();
		for(Content_Question cq:questionrepo.findAll()) {
			Topic t=new Topic(cq.getContent().getTopic().getTopic_id(), cq.getContent().getTopic().getTopic_name(), null);
			Content c=new Content(cq.getContent().getContent_id(), cq.getContent().getContent_name(), t, null);
			Content_Question cqt=new Content_Question(cq.getQuestion_id(), cq.getCorrect_option_number(), cq.getQuestion(), cq.getOption1(), cq.getOption2(), cq.getOption3(), cq.getOption4(), c, null);
			lst.add(cqt);
		}
		return lst;
	}
	
	public Content_Question GetQuestionByid(int id) {
		Content_Question q=questionrepo.findById(id).get();
		return q;
	}
	
	public List<Content_Question> GetContentWiseQuestion(int content_id) {
		List<Content_Question> lst=new ArrayList<Content_Question>();
		for(Content_Question q:questionrepo.findAll()) {
			
			if(q.getContent().getContent_id()==content_id) {
				Content c=new Content(q.getContent().getContent_id(), q.getContent().getContent_name(), null, null);
				Content_Question qt=new Content_Question(q.getQuestion_id(), q.getCorrect_option_number(), q.getQuestion(), q.getOption1(), q.getOption2(), q.getOption3(), q.getOption4(), c, null);
				lst.add(qt);
			}
		}
		return lst;
	}
	
	public List<Content_Question> GetTopicWiseQuestion(int topic_id) {
		List<Content_Question> lst=new ArrayList<Content_Question>();
		for(Content_Question q:questionrepo.findAll()) {
			
			if(q.getContent().getTopic().getTopic_id()==topic_id) {
				Content c=new Content(q.getContent().getContent_id(), q.getContent().getContent_name(), null, null);
				Content_Question qt=new Content_Question(q.getQuestion_id(), q.getCorrect_option_number(), q.getQuestion(), q.getOption1(), q.getOption2(), q.getOption3(), q.getOption4(), c, null);
				lst.add(qt);
			}
		}
		return lst;
	}
	
	public Content_Question AddContentQuestion(Content_Question q) {
			questionrepo.save(q);
			return q;
		}
	
	//Student Service
	public List<Student_Detail> GetAllStudents() {
		List<Student_Detail> lst=new ArrayList<Student_Detail>();
		for(Student_Detail s:studentrepo.findAll()) {
			Student_Detail st=new Student_Detail(s.getStudent_id(), s.getStudent_name(), s.getQualification(), s.getMobile(), s.getEmail_address(), s.getCity(), s.getPassword(), null);
			lst.add(st);
		}
		return lst;
	}
	
	public Student_Detail GetStudentByid(int id) {
		Student_Detail s=studentrepo.findById(id).get();
		return s;
	}
	
	public Student_Detail CheckLogin(Login d){
		
		List<Student_Detail>lst=studentrepo.findAll();
		Student_Detail st=null;
		for(Student_Detail s :lst){
			if(s.getEmail_address().equals(d.getUsername()) && s.getPassword().equals(d.getPassword())) {
				st=s;
				break;
			}
		}
		return st;
	}
	
	public Student_Detail AddStudents(Student_Detail s) {
		String pass=GeneratePassword(10);
		s.setPassword(pass);
		Student_Detail st=studentrepo.save(s);
		String msgbody="Dear "+s.getStudent_name()+", Your Registration has been completed successfully. You can access your account using following Credentials.... Email Address="+s.getEmail_address()+" , Password="+pass;
		String subject="Student Registration Confirmation";
		
		EmailModel em=new EmailModel(s.getEmail_address(), msgbody, subject);
		email.sendSimpleMail(em);
		
		return st;
	}
	
	//ExamDetail Service
	public List<Exam_Detail> GetAllExamDetails() {
		List<Exam_Detail> lst=new ArrayList<Exam_Detail>();
		for(Exam_Detail d:edetailrepo.findAll()) {
			Exam_Detail dt=new Exam_Detail(d.getExam_id(), d.getExam_date(), d.getStart_time(), d.getEnd_time(), null, null);
			lst.add(dt);
		}
		return lst;
	}
	
	public Exam_Detail GetExamDetailByid(int id) {
		Exam_Detail d=edetailrepo.findById(id).get();
		return d;
	}
	
	public Exam_Detail AddExamDetails(Exam_Detail d) {
		edetailrepo.save(d);
		return d;
	}
	
	//ExamQuestion Service
	public List<Exam_Question> GetAllExamQuestions() {
		List<Exam_Question> lst=new ArrayList<Exam_Question>();
		for(Exam_Question eq:equestionrepo.findAll()) {
			Exam_Question eqt=new Exam_Question(eq.getExam_question_id(), eq.getSubmitted_option_number(), null, null);
			lst.add(eqt);
		}
		return lst;
	}
	
	public Exam_Question GetExamQuestionByid(int id) {
		Exam_Question eq=equestionrepo.findById(id).get();
		return eq;
	}
	
	public Exam_Question AddExamQuestions(Exam_Question eq) {
		equestionrepo.save(eq);
		return eq;
	}
	
	//Password Generation
	public String GeneratePassword(int size) {
		String data="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		String password="";
		Random r=new Random();
		for(int i=1;i<=size;i++) {
			int p=r.nextInt(data.length()-1);
			password+=data.charAt(p);
		}
		return password;
	}
	
}
