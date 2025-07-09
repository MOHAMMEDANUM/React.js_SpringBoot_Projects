package org.jsp.contact_form.repository;

import org.jsp.contact_form.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact, Integer>{

}
