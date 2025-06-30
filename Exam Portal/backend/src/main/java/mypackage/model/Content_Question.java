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
@Table(name="tblcontentquestions")
public class Content_Question {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int question_id;
	private int correct_option_number;
	private String question;
	private String option1;
	private String option2;
	private String option3;
	private String option4;
	
	@ManyToOne(fetch=FetchType.EAGER,optional = false)
	@JoinColumn(name="content_id", nullable = false)
	private Content content;
	
	@OneToMany(mappedBy ="contentquestion", fetch=FetchType.LAZY, cascade=CascadeType.ALL )
	@JsonIgnoreProperties("contentquestion")
	private Set<Exam_Question> examquestions;

	public Content_Question() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Content_Question(int question_id, int correct_option_number, String question, String option1, String option2,
			String option3, String option4, Content content, Set<Exam_Question> examquestions) {
		super();
		this.question_id = question_id;
		this.correct_option_number = correct_option_number;
		this.question = question;
		this.option1 = option1;
		this.option2 = option2;
		this.option3 = option3;
		this.option4 = option4;
		this.content = content;
		this.examquestions = examquestions;
	}

	public int getQuestion_id() {
		return question_id;
	}

	public void setQuestion_id(int question_id) {
		this.question_id = question_id;
	}

	public int getCorrect_option_number() {
		return correct_option_number;
	}

	public void setCorrect_option_number(int correct_option_number) {
		this.correct_option_number = correct_option_number;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String getOption1() {
		return option1;
	}

	public void setOption1(String option1) {
		this.option1 = option1;
	}

	public String getOption2() {
		return option2;
	}

	public void setOption2(String option2) {
		this.option2 = option2;
	}

	public String getOption3() {
		return option3;
	}

	public void setOption3(String option3) {
		this.option3 = option3;
	}

	public String getOption4() {
		return option4;
	}

	public void setOption4(String option4) {
		this.option4 = option4;
	}

	public Content getContent() {
		return content;
	}

	public void setContent(Content content) {
		this.content = content;
	}

	public Set<Exam_Question> getExamquestions() {
		return examquestions;
	}

	public void setExamquestions(Set<Exam_Question> examquestions) {
		this.examquestions = examquestions;
	}
	
}
