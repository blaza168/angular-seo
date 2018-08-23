import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public message: string;
  public users: {
      lastName: string,
      firstName: string,
      router: string
  }[];

    constructor(private activatedRoute: ActivatedRoute) {
        this.users = this.activatedRoute.snapshot.data['users'];
        console.log(this.users);
    }

  ngOnInit() {
    this.message = 'Hello';
  }
}
