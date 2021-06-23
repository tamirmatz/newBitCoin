import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
@Component({
  selector: 'contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrls: ['./contact-edit-page.component.scss']
})
export class ContactEditPageComponent implements OnInit {

  constructor(private ContactService:ContactService,private router: Router, private route: ActivatedRoute) { }
  subscription: Subscription
  contact: Contact
  
  ngOnInit(): void {
    this.route.params.subscribe(async params => {
      const { id } = params
      this.contact = id ? await this.ContactService.getContactById(id).toPromise() : this.ContactService.getEmptyContact()
    })
  }


  async onSaveContact(){
    await this.ContactService.saveContact(this.contact)
    this.router.navigateByUrl('/contact')
  }

}
