import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Style: boolean = false;
  public greeting = "";
  disaster_types = ['PhoeniX Corporate', 'St Joseph Phoenix','Bakersfield','Other location'];
  constructor() { }

  ngOnInit() {
    
  }
  firstClick(value){
    this.h1Style = true;
    this.greeting = "Processing prediction for "+value;
    
  }
  secondClick(){
   // this.data.dataClick();
  }
}
