// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'resource-manager2';
// }

import { Component,OnInit } from '@angular/core';

import { AccountService } from './_services';
import { User } from './_models';
import { UserService } from './_services/user.service';
import { Observable } from 'rxjs';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {
  user: Observable<User[]>;
  title = 'Angular8ClientCrud';
  constructor(
    private accountService: AccountService,
    private UserService: UserService
  ) {
    // this.accountService.user.subscribe((x) => (this.user = x));
  }

  logout() {
    this.accountService.logout();
  }

  ngOnInit(): void {
    this.user = this.fetchAll();
  }

  fetchAll(): Observable<User[]> {
    console.log(this.UserService.fetchAll());
    return this.UserService.fetchAll();
  }
}