import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact: any;
  errorMessage: string = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam);

    if (isNaN(id)) {
      this.errorMessage = 'Invalid contact ID';
      return;
    }

    const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');

    if (id < 0 || id >= contacts.length) {
      this.errorMessage = 'Contact not found';
      return;
    }

    this.contact = contacts[id];
  }

  backToList(): void {
    this.router.navigate(['/contact-list']);
  }
}
