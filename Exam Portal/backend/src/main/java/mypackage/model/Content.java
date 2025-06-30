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
@Table(name="tblcontents")
public class Content {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int content_id;
	private String content_name;
	
	@ManyToOne(fetch=FetchType.EAGER,optional = false)
	@JoinColumn(name="topic_id", nullable = false)
	private Topic topic;
	
	@OneToMany(mappedBy ="content", fetch=FetchType.LAZY, cascade=CascadeType.ALL )
	@JsonIgnoreProperties("content")
	private Set<Content_Question> contentquestions;

	public Content() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Content(int content_id, String content_name, Topic topic, Set<Content_Question> contentquestions) {
		super();
		this.content_id = content_id;
		this.content_name = content_name;
		this.topic = topic;
		this.contentquestions = contentquestions;
	}

	public int getContent_id() {
		return content_id;
	}

	public void setContent_id(int content_id) {
		this.content_id = content_id;
	}

	public String getContent_name() {
		return content_name;
	}

	public void setContent_name(String content_name) {
		this.content_name = content_name;
	}

	public Topic getTopic() {
		return topic;
	}

	public void setTopic(Topic topic) {
		this.topic = topic;
	}

	public Set<Content_Question> getContentquestions() {
		return contentquestions;
	}

	public void setContentquestions(Set<Content_Question> contentquestions) {
		this.contentquestions = contentquestions;
	}
}
