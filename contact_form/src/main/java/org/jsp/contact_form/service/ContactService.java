package org.jsp.contact_form.service;

import java.util.List;

import org.jsp.contact_form.dao.ContactDao;
import org.jsp.contact_form.entity.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class ContactService {
	
	@Autowired
	ContactDao contactDao;

	public ResponseEntity<?> save(Contact data) {
		Contact datas=contactDao.save(data);
		return ResponseEntity.status(201).body("Data saved is :- \n\n"+datas);
	}
	
	
	public ResponseEntity<String> findAll(){
		List<Contact> allContact=contactDao.findAll();
		if(allContact.isEmpty()) {
			return ResponseEntity.status(404).body("Unable to fetch contacts details from DB");
		}
		else {
			return ResponseEntity.status(404).body("Unable to fetch contacts details from DB");
		}
	}

}