package mypackage.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="tblstudents")
public class Student_Detail {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int student_id;
	private String student_name;
	private String qualification;
	private String mobile;
	private String email_address;
	private String city;
	private String password;
	
	@OneToMany(mappedBy ="studentdetail", fetch=FetchType.LAZY, cascade=CascadeType.ALL )
	@JsonIgnoreProperties("studentdetail")
	private Set<Exam_Detail> examdetails;

	public Student_Detail() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Student_Detail(int student_id, String student_name, String qualification, String mobile,
			String email_address, String city, String password, Set<Exam_Detail> examdetails) {
		super();
		this.student_id = student_id;
		this.student_name = student_name;
		this.qualification = qualification;
		this.mobile = mobile;
		this.email_address = email_address;
		this.city = city;
		this.password = password;
		this.examdetails = examdetails;
	}

	public int getStudent_id() {
		return student_id;
	}

	public void setStudent_id(int student_id) {
		this.student_id = student_id;
	}

	public String getStudent_name() {
		return student_name;
	}

	public void setStudent_name(String student_name) {
		this.student_name = student_name;
	}

	public String getQualification() {
		return qualification;
	}

	public void setQualification(String qualification) {
		this.qualification = qualification;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getEmail_address() {
		return email_address;
	}

	public void setEmail_address(String email_address) {
		this.email_address = email_address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Set<Exam_Detail> getExamdetails() {
		return examdetails;
	}

	public void setExamdetails(Set<Exam_Detail> examdetails) {
		this.examdetails = examdetails;
	}
	
}
