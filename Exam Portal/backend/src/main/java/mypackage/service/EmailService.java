package mypackage.service;

import mypackage.model.EmailModel;

public interface EmailService {
	
    String sendSimpleMail(EmailModel details);
}
