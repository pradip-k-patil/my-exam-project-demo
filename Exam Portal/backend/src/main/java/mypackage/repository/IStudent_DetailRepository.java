package mypackage.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import mypackage.model.Student_Detail;

public interface IStudent_DetailRepository extends JpaRepository<Student_Detail, Integer> {
	

}
