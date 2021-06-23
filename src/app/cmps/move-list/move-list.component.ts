import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit {

  constructor(private UserService: UserService, private route: ActivatedRoute) { }
  moves = this.UserService.getUser().moves.slice(0,3)
  contactId: string;
  ngOnInit(): void {
    this.route.params.subscribe(async params => {
      const { id } = params
      if (id) {
        this.contactId = id
        this.moves = this.moves.filter(move => {
          return move.toId === id
        })
        this.moves.slice(0,3)
        console.log(this.moves)
      }
    })
  }

  convertTimestamp(timedtamp) {
    Intl.DateTimeFormat('IL-il').format(timedtamp)
  }
}
