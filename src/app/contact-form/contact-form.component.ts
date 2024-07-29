import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  name: string = '';
  firstName: string = '';
  number: string = '';
  description: string = '';

  addContact() {
    const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    contacts.push({
      name: this.name,
      firstName: this.firstName,
      number: this.number,
      description: this.description
    });
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }
}
