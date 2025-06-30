package mypackage.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="tblexamdetails")
public class Exam_Detail {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int exam_id;
	private String exam_date;
	private String start_time;
	private String end_time;
	
	@ManyToOne(fetch=FetchType.LAZY,optional = false)
	@JoinColumn(name="student_id", nullable = false)
	private Student_Detail studentdetail;
	
	@OneToMany(mappedBy ="examdetail", fetch=FetchType.LAZY, cascade=CascadeType.ALL )
	@JsonIgnoreProperties("examdetail")
	private Set<Exam_Question> examquestions;

	public Exam_Detail() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Exam_Detail(int exam_id, String exam_date, String start_time, String end_time, Student_Detail studentdetail,
			Set<Exam_Question> examquestions) {
		super();
		this.exam_id = exam_id;
		this.exam_date = exam_date;
		this.start_time = start_time;
		this.end_time = end_time;
		this.studentdetail = studentdetail;
		this.examquestions = examquestions;
	}

	public int getExam_id() {
		return exam_id;
	}

	public void setExam_id(int exam_id) {
		this.exam_id = exam_id;
	}

	public String getExam_date() {
		return exam_date;
	}

	public void setExam_date(String exam_date) {
		this.exam_date = exam_date;
	}

	public String getStart_time() {
		return start_time;
	}

	public void setStart_time(String start_time) {
		this.start_time = start_time;
	}

	public String getEnd_time() {
		return end_time;
	}

	public void setEnd_time(String end_time) {
		this.end_time = end_time;
	}

	public Student_Detail getStudentdetail() {
		return studentdetail;
	}

	public void setStudentdetail(Student_Detail studentdetail) {
		this.studentdetail = studentdetail;
	}

	public Set<Exam_Question> getExamquestions() {
		return examquestions;
	}

	public void setExamquestions(Set<Exam_Question> examquestions) {
		this.examquestions = examquestions;
	}
	
	
}
