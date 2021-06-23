import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { Observable, Subscription } from 'rxjs';
import { FilterBy } from 'src/app/models/filter-by';


@Component({
  selector: 'contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {
  filterBy = { term: '' }
  contacts$: Observable<Contact[]>
  constructor(private contactService:ContactService) { }
  
  ngOnInit(): void {
    this.contacts$ = this.contactService.contacts$
    this.contactService.loadContacts()
  }

  onSetFilter(filterBy: FilterBy) {
    this.filterBy = filterBy
    this.contactService.loadContacts(this.filterBy)
  }

}
