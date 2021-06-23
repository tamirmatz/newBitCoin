import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  user:User
  constructor(private UserService:UserService,private router: Router) { }
  ngOnInit(): void {
    this.user = this.UserService.getEmptyUser()
  }
  onSignUp(){
    this.UserService.signup(this.user.name)
    this.router.navigateByUrl('/')

  }
}
