package mypackage.model;


import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="tblexamquestions")
public class Exam_Question {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int exam_question_id;
	private int submitted_option_number;
	
	@ManyToOne(fetch=FetchType.LAZY,optional = false)
	@JoinColumn(name="exam_id", nullable = false)
	private Exam_Detail examdetail;
	
	@ManyToOne(fetch=FetchType.LAZY,optional = false)
	@JoinColumn(name="question_id", nullable = false)
	private Content_Question contentquestion;

	public Exam_Question() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Exam_Question(int exam_question_id, int submitted_option_number, Exam_Detail examdetail,
			Content_Question contentquestion) {
		super();
		this.exam_question_id = exam_question_id;
		this.submitted_option_number = submitted_option_number;
		this.examdetail = examdetail;
		this.contentquestion = contentquestion;
	}

	public int getExam_question_id() {
		return exam_question_id;
	}

	public void setExam_question_id(int exam_question_id) {
		this.exam_question_id = exam_question_id;
	}

	public int getSubmitted_option_number() {
		return submitted_option_number;
	}

	public void setSubmitted_option_number(int submitted_option_number) {
		this.submitted_option_number = submitted_option_number;
	}

	public Exam_Detail getExamdetail() {
		return examdetail;
	}

	public void setExamdetail(Exam_Detail examdetail) {
		this.examdetail = examdetail;
	}

	public Content_Question getContentquestion() {
		return contentquestion;
	}

	public void setContentquestion(Content_Question contentquestion) {
		this.contentquestion = contentquestion;
	}	
}
