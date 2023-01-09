// import { Component, OnInit } from '@angular/core';
// import {MatPaginator} from '@angular/material/paginator';
// import {MatTableDataSource} from '@angular/material/table';

// @Component({
//   selector: 'app-heat-production',
//   templateUrl: './heat-production.component.html',
//   styleUrls: ['./heat-production.component.css']
// })
// export class HeatProductionComponent implements OnInit {
  
//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-heat-production',
  templateUrl: './heat-production.component.html',
  styleUrls: ['./heat-production.component.css']
})
export class HeatProductionComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'scheduleId', 'planGrade', 'route','planWidth','planThick',
  'plannedStartDate','heatNumber','heatStatus'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  id: number;
  scheduleId: number;
  planGrade: string;
  route:string;
  planWidth: number;
  planThick:number;
  plannedStartDate:string;
  heatNumber: number;
  heatStatus:string;
  // name: string;
  // position: number;
  // weight: number;
  // symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
 {id:1, scheduleId: 12 ,planGrade: 'JSW1361',route:'',planWidth:1234,planThick:1234,plannedStartDate:'24/12/2022',
 heatNumber:1234,heatStatus:"Download by Dispatcher"},
 {id:1, scheduleId: 12 ,planGrade: 'JSW1361',route:'',planWidth:1234,planThick:1234,plannedStartDate:'24/12/2022',
 heatNumber:1234,heatStatus:"Download by Dispatcher"},
 {id:1, scheduleId: 12 ,planGrade: 'JSW1361',route:'',planWidth:1234,planThick:1234,plannedStartDate:'24/12/2022',
 heatNumber:1234,heatStatus:"Download by Dispatcher"},
 {id:1, scheduleId: 12 ,planGrade: 'JSW1361',route:'',planWidth:1234,planThick:1234,plannedStartDate:'24/12/2022',
 heatNumber:1234,heatStatus:"Download by Dispatcher"},
 {id:1, scheduleId: 12 ,planGrade: 'JSW1361',route:'',planWidth:1234,planThick:1234,plannedStartDate:'24/12/2022',
 heatNumber:1234,heatStatus:"Download by Dispatcher"},
 {id:1, scheduleId: 12 ,planGrade: 'JSW1361',route:'',planWidth:1234,planThick:1234,plannedStartDate:'24/12/2022',
 heatNumber:1234,heatStatus:"Download by Dispatcher"}
 
];

