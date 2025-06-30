package mypackage.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import mypackage.model.Content_Question;

public interface IContent_QuestionRepository extends JpaRepository<Content_Question, Integer> {
	

}
