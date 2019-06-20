import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userClaims : any;
  loading = true;
  ids : any = [];
  constructor(private router : Router, private userService : UserService) { }

  ngOnInit() {
    this.userService.getUserClaims().subscribe((data : any)=>{
    this.userClaims = data;

    for(let result of data.products){
      this.ids.push(result.name);
    }
    this.loading = false;
    });
  }

  Logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}
