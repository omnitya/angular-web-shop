import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { ToastrService } from 'ngx-toastr'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService : UserService, private toastr: ToastrService, private router: Router) { }
  loading = true;
  ngOnInit() {
    
  }

  private isLoggedIn: boolean;

  OnSubmit(email, password){
    this.userService.userAuthentication(email, password).subscribe(
      (result : any)  => {
        console.log('Login response : ', result);
        if (result != null) {
          let response = result;
          localStorage.setItem('token', response.token);
          this.toastr.success('Login successful.',email, { timeOut: 10000 });
        }
      },
      error => {
        console.log('Error Found!', error);
          this.toastr.error("Invalid user login details!", error.message, { timeOut: 10000 });
      },
      () => {
        // 'onCompleted' callback.
        // No errors, route to home page.
        this.router.navigate(['']);
      }
    );
    this.loading = false;
  }

  loggedIn(){
    //check here if the user is logged by your usual way
    // and return true if logged or false, if not
    //something like
    if(localStorage.getData('token') != null){
       // && tokenNotExpired('id_token');
    this.isLoggedIn = true;
    }
   
}

}
