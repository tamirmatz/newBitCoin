import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { Location } from '@angular/common';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service'
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  constructor(
    private ContactService: ContactService,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private UserService: UserService,
    private cdr: ChangeDetectorRef,
  ) { }

  contact: Contact
  notEnoughCoins = false;
  ngOnInit(): void {
    this.route.params.subscribe(async params => {
      const { id } = params
      this.contact = await this.ContactService.getContactById(id).toPromise()
    })
  }

  onBack() {
    this.location.back()
  }

  onDeleteContact() {
    this.ContactService.deleteContact(this.contact._id)
    this.router.navigateByUrl('contact')
  }

  onTransfer(amount) {
    if(!amount || amount === 0) return
    if(this.UserService.getUser().coins < amount) {
      this.notEnoughCoins = true;
      return 
    }
    this.UserService.addMove(this.contact, amount)
    window.location.reload();
  }
}
