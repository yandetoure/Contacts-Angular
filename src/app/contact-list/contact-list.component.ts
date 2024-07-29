import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    const savedContacts = localStorage.getItem('contacts');
    this.contacts = savedContacts ? JSON.parse(savedContacts) : [];
  }

  viewDetail(id: number): void {
    this.router.navigate(['/contact-detail', id]);
  }

  editContact(id: number): void {
    this.router.navigate(['/contact-form', id]);
  }

  deleteContact(id: number): void {
    this.contacts.splice(id, 1);
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }
}
