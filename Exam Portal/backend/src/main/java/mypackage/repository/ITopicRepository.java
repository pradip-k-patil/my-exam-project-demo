package mypackage.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import mypackage.model.Topic;

public interface ITopicRepository extends JpaRepository<Topic, Integer> {
	

}
