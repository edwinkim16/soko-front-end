import { Component, OnInit ,Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
 
  constructor() {}

  getName(){
    alert("added to cart")
  }

  ngOnInit(): void {
    
  }

 
}
