package mypackage.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import mypackage.model.*;
@Service
public class EmailServiceImplementation implements EmailService {
	
	@Autowired
	private JavaMailSender javaMailSender;
	
	@Value("${spring.mail.username}")
	private String sender;
	
	// Method 1
//  // To send a simple email
	
	public String sendSimpleMail(EmailModel details) {
		try {
			
			// Creating a simple mail message
			SimpleMailMessage mailMessage=new SimpleMailMessage();
			mailMessage.setFrom(sender);
			mailMessage.setTo(details.getRecipient());
			mailMessage.setText(details.getMsgBody());
			mailMessage.setSubject(details.getSubject());
			javaMailSender.send(mailMessage);
			return "Mail Sent Successfully...";
			
		}
		catch(Exception ex){
			return ex.getMessage();
		}
	}
//	@Autowired 
//	private JavaMailSender javaMailSender;
//	 
//    @Value("${spring.mail.username}") 
//    private String sender;
// 
//    // Method 1
//    // To send a simple email
//    public String sendSimpleMail(EmailModel details)
//    {
// 
//        // Try block to check for exceptions
//        try {
// 
//            // Creating a simple mail message
//            SimpleMailMessage mailMessage= new SimpleMailMessage();
//            mailMessage.setFrom(sender);
//            mailMessage.setTo(details.getRecipient());
//            mailMessage.setText(details.getMsgBody());
//            mailMessage.setSubject(details.getSubject());
//            javaMailSender.send(mailMessage);
//            return "Mail Sent Successfully...";
//        }
//        catch(Exception ex) {
//        	return ex.getMessage();	
//        }
//        
// 
//    }
	
}
