


import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-bottom-table',
  templateUrl: './bottom-table.component.html',
  styleUrls: ['./bottom-table.component.css']
})
export class BottomTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'ladleNumber', 'heatNumber', 'aimGrade','rhRoute','planSlamWidth',
  'laddleTemp','laddleStreet','lastUnitDate','lastProcessUnit'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  id: number;
  ladleNumber: string;
  heatNumber: string;
  aimGrade:string;
  rhRoute: number;
  planSlamWidth:number;
  laddleTemp:string;
  laddleStreet: number;
  lastUnitDate:string;
  lastProcessUnit: string;
  
  planCasterNumber: string
}

const ELEMENT_DATA: PeriodicElement[] = [
 {id:1 ,ladleNumber: 'JSW1361',heatNumber:'',aimGrade:'1234',rhRoute:1234,planSlamWidth:2424,
 laddleTemp:'1234',laddleStreet:1234,lastUnitDate:"Download by Dispatcher",lastProcessUnit:'12345',planCasterNumber:'asfd'},

 
];

