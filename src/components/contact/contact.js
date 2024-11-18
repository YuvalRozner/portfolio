import React from 'react';
import * as Style from './contact.style';

const Contact = () => {
  return (
    <Style.ContactSection className="contact">
      <Style.ContactTitle>Get in Touch</Style.ContactTitle>
      <Style.ContactList>
        <Style.ContactListItem>
          <span role="img" aria-label="email">📧</span> Email: 
          <Style.ContactLink href="mailto:yuvalrozner98@gmail.com"> yuvalrozner98@gmail.com</Style.ContactLink>
        </Style.ContactListItem>
        <Style.ContactListItem>
          <span role="img" aria-label="link">🔗</span> LinkedIn: 
          <Style.ContactLink href="https://linkedin.com/in/yuval-rozner" target="_blank" rel="noopener noreferrer"> Yuval Rozner</Style.ContactLink>
        </Style.ContactListItem>
        <Style.ContactListItem>
          <span role="img" aria-label="link">🔗</span> GitHub: 
          <Style.ContactLink href="https://github.com/YuvalRozner" target="_blank" rel="noopener noreferrer"> YuvalRozner</Style.ContactLink>
        </Style.ContactListItem>
      </Style.ContactList>
      <Style.ContactParagraph>
        Thanks for stopping by my profile! I'm always open to new opportunities and collaborations, so don't hesitate to reach out.
      </Style.ContactParagraph>
    </Style.ContactSection>
  );
};

export default Contact;
