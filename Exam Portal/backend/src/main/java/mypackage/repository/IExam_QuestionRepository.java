package mypackage.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import mypackage.model.Exam_Question;

public interface IExam_QuestionRepository extends JpaRepository<Exam_Question, Integer> {
	

}
