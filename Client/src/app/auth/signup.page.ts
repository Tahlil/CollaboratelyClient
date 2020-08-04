import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";



@Component({
  selector: 'app-auth',
  templateUrl: './signup.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class SignUpPage implements OnInit {
  selectedType:string;
  
  constructor(private router: Router) { 
    this.selectedType = "";
  }

  ngOnInit() {
    
  }

}
