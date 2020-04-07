import { Component, OnInit } from '@angular/core';
import {Router,RouterModule} from '@angular/router'
@Component({
  selector: '/forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.less']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }
  

}
