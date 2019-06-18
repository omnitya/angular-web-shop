import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
import { User } from '../../shared/user.model';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user: User;
  ngOnInit() {
    this.resetForm();
  }

  constructor(private userService: UserService, private toastr: ToastrService) { }

  OnSubmit(form: NgForm) {
    var email = form.value.email;
    this.userService.registerUser(form.value)
    .subscribe(
      result => {
        console.log(result)
        if (result != null) {
          this.resetForm(form);
          this.toastr.success('User registration successful.',email, { timeOut: 10000 });
        }
      },
      error => {
        console.log('Error Found!', error);
          this.toastr.error("Error Creating User", error.message, { timeOut: 10000 });
      },
      () => {
        // 'onCompleted' callback.
        // No errors, route to new page here
      }
    );
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
      this.user = {
      email: '',
      password: ''
    }
  }

}
