import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  login(e){

    e.preventDefault();
    const target=e.target;
    const name=target.querySelector('#nm').value;
    const password=target.querySelector('#ps').value;

    if(name == password){
     //window.location.href="task";
     this.router.navigateByUrl('newspost');

    }
  }

}
