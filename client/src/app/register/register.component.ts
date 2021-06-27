import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 // @Input() usersFromHomeComponent: any; //receving properties from child component
  @Output() cancelRegister = new EventEmitter(); //receving properties from parent component
  model: any = {};
  currentUser$: Observable<User>;



  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.currentUser$ = this.accountService.CurrentUser$;
  }
  register() {
    this.accountService.register(this.model).subscribe(response => {
      console.log(response);
      this.cancel();
    }, error => {
        console.log(error);

    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
