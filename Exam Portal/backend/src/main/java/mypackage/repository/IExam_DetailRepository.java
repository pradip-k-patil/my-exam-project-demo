package mypackage.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import mypackage.model.Exam_Detail;

public interface IExam_DetailRepository extends JpaRepository<Exam_Detail, Integer> {
	

}
