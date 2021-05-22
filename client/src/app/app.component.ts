import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;  // any type of data are allowes that is type safety
  constructor(private http: HttpClient, private accountService: AccountService) // Make an Http Request
  {

  }
  ngOnInit()  {
    this.getUsers();
    this.setCurrentUser();
  }

  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user'));
  }

  getUsers(){
    this.http.get("https://localhost:44345/api/users").subscribe(response=>{
      this.users= response;
  },error=>{
    console.log(error);
    })
  }
}

