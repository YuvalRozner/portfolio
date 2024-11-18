import React from 'react';
import * as Style from './contact.style';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import GitHub and LinkedIn icons from react-icons
import contactData from '../../data/contactData.json'; // Import contact data

const Contact = () => {
  return (
    <Style.ContactSection className="contact" id="contact">
      <Style.ContactTitle>Get in Touch</Style.ContactTitle>
      <Style.ContactList>
        <Style.ContactListItem>
          <span role="img" aria-label="email">📧</span> Email: 
          <Style.ContactLink href={`mailto:${contactData.email}`}> {contactData.email}</Style.ContactLink>
        </Style.ContactListItem>
        <Style.ContactListItem>
          <FaLinkedin aria-label="LinkedIn" /> LinkedIn: 
          <Style.ContactLink href={contactData.linkedin} target="_blank" rel="noopener noreferrer"> Yuval Rozner</Style.ContactLink>
        </Style.ContactListItem>
        <Style.ContactListItem>
          <FaGithub aria-label="GitHub" /> GitHub: 
          <Style.ContactLink href={contactData.github} target="_blank" rel="noopener noreferrer"> YuvalRozner</Style.ContactLink>
        </Style.ContactListItem>
        <Style.ContactListItem>
          <span role="img" aria-label="phone">📞</span> Phone: 
          <Style.ContactLink href={`tel:${contactData.phone}`}>052-4706877</Style.ContactLink>
        </Style.ContactListItem>
        <Style.ContactListItem>
          <span role="img" aria-label="cv">📄</span> CV: 
          <Style.ContactLink href={contactData.cv} download>Download CV</Style.ContactLink>
        </Style.ContactListItem>
      </Style.ContactList>
      <Style.ContactParagraph>
        Thanks for stopping by my profile! I'm always open to new opportunities and collaborations, so don't hesitate to reach out.
      </Style.ContactParagraph>
    </Style.ContactSection>
  );
};

export default Contact;
