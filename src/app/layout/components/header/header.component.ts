import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthguardService } from 'src/app/guard/authguard.service';

declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user_name: string;
  email: string;
  showSideBar = true;
  currentpage = 'Home';
  constructor(private auth: AuthguardService,private router: Router) { }

  ngOnInit() {

    

  
  // this.shrservice.getCurrentPageDetails().subscribe(resp => { this.currentpage = resp });
  // this.shrservice.setSideBarDetails(this.showSideBar);


    this.email = localStorage.getItem('email');
    this.user_name = localStorage.getItem('user_name');

  }
 

  logout() {
    localStorage.removeItem('user_role_id');
    localStorage.removeItem('user_name');
    localStorage.removeItem('email');
    localStorage.removeItem('user_id');
    localStorage.removeItem('project_id');
    localStorage.removeItem('module_id');
    //this.router.navigate(['login']);
    
  }

  

  showSideBarFun(e) {
    console.log(e.checked);
    this.showSideBar = e.checked;
    // this.shrservice.setSideBarDetails(this.showSideBar);
  }

  

}
