import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public activeUrl: any;
  constructor(private router: Router) { }
  user_role_id: number;
  showSideBar = false;
  isStyleAppended = false;
  menulist = {
    projectConfig: false
  };

  ngOnInit() {

    //   $('.test').on('click', function (e) {
    //     $('.test').removeClass('active'); // remove all previously selected classes
    //     $(this).addClass('active'); // add our new class
    //     //$('.test has-sub active').trigger(click); 
    //     //$('.test2 accordion-toggle collapsed toggle-switch').trigger('click'); 
    // });
    this.getcurrentpage()
    //this.shrservice.getSideBarDetail().subscribe(resp => { this.showSideBar = resp });

    this.user_role_id = parseInt(localStorage.getItem('user_role_id'));;

    // $('#sidemenu li').on('click', function (e) {
    //   $('.test1').removeClass('active');
    //   $('.test').removeClass('active');
    //   // remove all previously selected classes
    //   $(this).addClass('test active');
    //   //$('#sidemenu .has-sub').addClass('test active'); // add our new class
    // });


    $('#sidemenu .test').on('click', function (e) {
      $('#sidemenu .has-sub').removeClass('test active');
      $('#sidemenu .test').addClass('active');
      $('.has-sub .test2 accordion-toggle toggle-switch').addClass('collapsed');
      $('.has-sub ul').removeClass('show');
      $('.has-sub ul .test').removeClass('test');
    });

    $('#submenu-1 li').on('click', function (e) {  // selects any element
      $('#submenu-1 li.test').removeClass('test');
      $(this).addClass('test');
    });



  }




  isActiveM(instruction: any[]): boolean {

    if (!this.isStyleAppended) {
      const cardbtnheight = $('.card.h-100').find('.card-header').height();
      if (cardbtnheight !== undefined) {
        $('head').append('<style>.btn-add:before{border-top: ' + cardbtnheight + 'px solid transparent;}</style>');
        this.isStyleAppended = true;
      }
    }


    this.activeUrl = this.router.url.split('/');
    this.activeUrl.shift();
    let re = false;

    if (this.activeUrl[0] === 'workflow' || this.activeUrl[0] === 'input') {
      this.menulist.projectConfig = true;
    } else {
      this.menulist.projectConfig = false;
    }
    for (let ins of instruction)
      if (!re && this.activeUrl && this.activeUrl[0] && this.activeUrl[0] === ins)
        re = true;
    return re
  }

  getcurrentpage() {
    this.activeUrl = this.router.url.split('/');
    this.activeUrl.shift();
    if (this.activeUrl[0] === 'workflow' || this.activeUrl[0] === 'input') {
      this.menulist.projectConfig = true;
    } else {
      this.menulist.projectConfig = false;
    }
    
    let page;
    if(this.activeUrl[0] === 'dashbaord'){
      page ='Dashboard';
    }else if(this.activeUrl[0] === 'ClientAdministration'){
      page ='Client Administration';
    }else if(this.activeUrl[0] === 'ClientAdminUserBoard'){
      page ='Client AdminUser Board';
    }else if(this.activeUrl[0] === 'UserManagement'){
      page ='User Management';
    }else if(this.activeUrl[0] === 'Usergroupmanagement'){
      page ='User group management';
    }else if(this.activeUrl[0] === 'ServicecatalogComponent'){
      page ='Service Catalog';
    }else if(this.activeUrl[0] === 'ProjectTypeRegulation'){
      page ='Project Type Regulation';
    }else if(this.activeUrl[0] === 'RoleDefinition'){
      page ='Role Definition';
    }else if(this.activeUrl[0] === 'Projectdefinitions'){
      page ='Project Definitions';
    }else if(this.activeUrl[0] === 'input'){
      page ='Input';
    }else if(this.activeUrl[0] === 'workflow'){
      page ='Workflow';
    }else if(this.activeUrl[0] === 'ProjectUserRoleMapping'){
      page ='Project User Role Mapping';
    }else if(this.activeUrl[0] === 'FileUpload'){
      page ='File upload';
    }else if(this.activeUrl[0] === 'FileValidation'){
      page ='File validation';
    }

    // this.shrservice.setCurrentPage(page);
  }

}
