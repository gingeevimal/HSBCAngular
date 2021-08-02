import { Component, OnInit, ViewChild } from '@angular/core';
import { Moment } from 'moment';
import * as moment from 'moment';

declare var $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],

})
export class DashboardComponent implements OnInit {
  showSideBar = true;
  public dashboardData: any;
  public projects = [];
  public users = [];
  public activityLogs = [];
  public cloneActivityLogs: any;
  public drpdownProjects = [];
  public drpdownUsers = [];
  public ticketLogs = [];
  public ticketLogFilter = [];

  public projectSetting: any;
  constructor() {
    this.projectSetting = {
      singleSelection: true,
      text: 'All Projects',
      enableSearchFilter: true,
      showCheckbox: false,
      enableFilterSelectAll: false
    };

    // remove dummy data
    this.ticketLogs = [{
      ticketNo: 12434,
      project: 'Lexis Nexis',
      subject: 'Dodge - Mails to be triggered for scheduled runs',
      assigned: 'Mark',
      updatedTime: '2020-04-15 10:01:40.06668'
    },
    {
      ticketNo: 11234,
      project: 'Extraction xtract',
      subject: 'Dodge - Mails to be triggered for scheduled runs',
      assigned: 'sergio marquin',
      updatedTime: '2020-04-15 10:01:40.06668'
    },
    {
      ticketNo: 12234,
      project: 'Lexis Nexis',
      subject: 'Dodge - Mails to be triggered for scheduled runs',
      assigned: 'Mark',
      updatedTime: '2020-04-15 10:01:40.06668'
    },
    {
      ticketNo: 12334,
      project: 'Lexis Nexis',
      subject: 'Dodge - Mails to be triggered for scheduled runs',
      assigned: 'Mark',
      updatedTime: '2020-04-15 10:01:40.06668'
    },
    {
      ticketNo: 12345,
      project: 'Lexis Nexis',
      subject: 'Dodge - Mails to be triggered for scheduled runs',
      assigned: 'Mark',
      updatedTime: '2020-04-15 10:01:40.06668'
    },
    ];

    this.ticketLogFilter = [{
      id: 1,
      filterName: 'Worked',
      count: 105
    },
    {
      id: 2,
      filterName: 'Completed',
      count: 28
    },
    {
      id: 3,
      filterName: 'Re-opened',
      count: 5
    },
    {
      id: 4,
      filterName: 'Overdue Tickets',
      count: 5
    },
    {
      id: 5,
      filterName: 'Inbound Tickets',
      count: 7
    },
    {
      id: 6,
      filterName: 'Aging Tickets',
      count: 10
    },


    ]

    this.users = [{
      id: 1,
      userName: 'Mark Anderson',
    },
    {
      id: 2,
      userName: 'Alison Parker',
    }];
    this.activityLogs = [{
      userName: 'Mark Anderson',
      createdDateTime: '2020-04-15 10:01:40.06668',
      developer: 'Lexis Nexis',
      ticketNo: '244567',
      text: 'is been logged for further clarification'
    },
    {
      userName: 'Mark Anderson',
      createdDateTime: '2020-04-15 10:01:40.06668',
      developer: 'Lexis Nexis',
      ticketNo: '234567',
      text: 'is been logged for further clarification'
    },
    {
      userName: 'Alison Parker',
      createdDateTime: '2020-04-15 10:01:40.06668',
      developer: 'Lexis Nexis',
      ticketNo: '234567',
      text: 'is been logged for further clarification'
    },
    {
      userName: 'Nairobi valhensun',
      createdDateTime: '2020-04-15 10:01:40.06668',
      developer: 'Lexis Nexis',
      ticketNo: '234567',
      text: 'is been logged for further clarification'
    },
    {
      userName: 'Mark Anderson',
      createdDateTime: '2020-04-15 10:01:40.06668',
      developer: 'Lexis Nexis',
      ticketNo: '234567',
      text: 'is been logged for further clarification'
    },
    {
      userName: 'Mark Anderson',
      createdDateTime: '2020-04-15 10:01:40.06668',
      developer: 'Lexis Nexis',
      ticketNo: '234567',
      text: 'is been logged for further clarification'
    }


    ];
    this.dashboardData = {
      liveProjects: 5,
      liveJobs: 220,
      dataPoints: '3330K',
      users: 12
    };

    this.projects = [{
      id: 1,
      projectName: 'Lexis Nexis',
      totalJobs: 120,
      logoImgURL: 'assets/img/LexisNexis.jpg',
      inProgress: 10,
      overDue: 5,
      detailsData: [{
        id: 1,
        jobName: 'JOB 1',
        initiatedBy: 'Mark Zukerberg',
        initiatedTime: '2020-04-15 10:01:40.06668',
        status: 1,
        stage: 'Extraction'
      },
      {
        id: 2,
        jobName: 'JOB 142',
        initiatedBy: 'Mark Zukerberg',
        initiatedTime: '2020-04-15 10:01:40.06668',
        status: 2,
        stage: 'Extraction'
      },
      {
        id: 3,
        jobName: 'JOB 3',
        initiatedBy: 'Mark Zukerberg',
        initiatedTime: '2020-04-15 10:01:40.06668',
        status: 0,
        stage: 'Extraction'
      },
      {
        id: 4,
        jobName: 'JOB 4',
        initiatedBy: 'Mark Zukerberg',
        initiatedTime: '2020-04-15 10:01:40.06668',
        status: 1,
        stage: 'Extraction'
      },
      {
        id: 5,
        jobName: 'JOB 5',
        initiatedBy: 'Mark Zukerberg',
        initiatedTime: '2020-04-15 10:01:40.06668',
        status: 2,
        stage: 'Extraction'
      },
      {
        id: 6,
        jobName: 'JOB 6',
        initiatedBy: 'Mark Zukerberg',
        initiatedTime: '2020-04-15 10:01:40.06668',
        status: 0,
        stage: 'Extraction'
      },
      {
        id: 7,
        jobName: 'JOB 7',
        initiatedBy: 'Mark Zukerberg',
        initiatedTime: '2020-04-15 10:01:40.06668',
        status: 1,
        stage: 'Extraction'
      },
      ]
    },
    {
      id: 2,
      projectName: 'Lexis Nexis 2',
      totalJobs: 110,
      logoImgURL: 'assets/img/LexisNexis.jpg',
      inProgress: 15,
      overDue: 10,
      detailsData: [{
        id: 1,
        jobName: 'JOB 1',
        initiatedBy: 'Mark Zukerberg',
        initiatedTime: '2020-04-15 10:01:40.06668',
        status: 0,
        stage: 'Extraction'
      },
      {
        id: 2,
        jobName: 'JOB 2',
        initiatedBy: 'Mark Zukerberg',
        initiatedTime: '2020-04-15 10:01:40.06668',
        status: 1,
        stage: 'Extraction'
      },
      {
        id: 3,
        jobName: 'JOB 3',
        initiatedBy: 'Mark Zukerberg',
        initiatedTime: '2020-04-15 10:01:40.06668',
        status: 2,
        stage: 'Extraction'
      },
      {
        id: 4,
        jobName: 'JOB 4',
        initiatedBy: 'Mark Zukerberg',
        initiatedTime: '2020-04-15 10:01:40.06668',
        status: 2,
        stage: 'Extraction'
      },
      {
        id: 5,
        jobName: 'JOB 5',
        initiatedBy: 'Mark Zukerberg',
        initiatedTime: '2020-04-15 10:01:40.06668',
        status: 0,
        stage: 'Extraction'
      },
      {
        id: 6,
        jobName: 'JOB 6',
        initiatedBy: 'Mark Zukerberg',
        initiatedTime: '2020-04-15 10:01:40.06668',
        status: 1,
        stage: 'Extraction'
      },
      {
        id: 7,
        jobName: 'JOB 7',
        initiatedBy: 'Mark Zukerberg',
        initiatedTime: '2020-04-15 10:01:40.06668',
        status: 1,
        stage: 'Extraction'
      },
      ]
    }
    ];




    // remove dummy data
   

  }

  ngOnInit() {
    $('.modal').appendTo('#fullscreen');
    // this.shrService.getSideBarDetail().subscribe(resp => { this.showSideBar = resp });
    
    // carousel config
    $('.owl-carousel').owlCarousel({
      loop: false,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 10000,
      autoplayHoverPause: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 3,
          nav: true
        },
        1000: {
          items: 3,
          nav: true
        }
      }
    });
    // carousel config end

    // date range picker config
    const start = moment().subtract(29, 'days');
    const end = moment();

    $('#reportrange').daterangepicker({
      startDate: start,
      endDate: end,
      opens: 'left',
      ranges: {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
      }
    }, this.cb(start, end));

    this.cb(start, end);
    $('#reportrange').on('apply.daterangepicker', (ev, picker) => {
      $('#dateDisplay').html(picker.startDate.format('DD MMM, YYYY') + ' - ' + picker.endDate.format('D MMM, YYYY'));
    });
    $('.drp-buttons').prepend('<div class="custom-control custom-checkbox float-left">' +
      '<input type="checkbox" class="custom-control-input" id="fdr">' +
      '<label class="custom-control-label font12 pt-1" for="fdr">Fixed Date Range</label></div>');

    $('.drp-buttons .drp-selected').hide();
    // date range picker config end
  

    this.cloneActivityLogs = [...this.activityLogs]
  }

  cb(start, end) {
    console.log(start, end);
    $('#dateDisplay').html(start.format('D MMM, YYYY') + ' - ' + end.format('D MMM, YYYY'));
  }


// fitler acitivitylog
onSearchChange(sval: string): void {
  console.log(sval);
  this.activityLogs = this.cloneActivityLogs.filter((obj) =>{
    return obj.userName.toLowerCase().includes(sval.toLowerCase()) ||
    obj.developer.toLowerCase().includes(sval.toLowerCase()) || obj.ticketNo.toLowerCase().includes(sval.toLowerCase()) ||
    obj.text.toLowerCase().includes(sval.toLowerCase()) ;
  });
  console.log(this.activityLogs);
}




}


