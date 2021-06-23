import { Component, OnDestroy, OnInit } from '@angular/core';
// import { Observable, Subscription } from 'rxjs';
// import { FilterBy } from 'src/app/models/filter-by';
// import { Pet } from 'src/app/models/pet';
// import { Contact } from 'src/app/models/contact.model';
// import { ContactService } from 'src/app/services/contact.service';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'pet-app',
  templateUrl: './pet-app.component.html',
  styleUrls: ['./pet-app.component.scss']
})
export class PetAppComponent implements OnInit {
  user = null
  currancy$;
  constructor(private UserService:UserService,private BitcoinService:BitcoinService) { }

  ngOnInit(): void {
    this.user = this.UserService.getUser()
    this.currancy$ = this.BitcoinService.getRate()
  }
}
