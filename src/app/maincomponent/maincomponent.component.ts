import { Component, OnInit } from '@angular/core';

const productWineObject = [ ]

@Component({
  selector: 'app-maincomponent',
  templateUrl: './maincomponent.component.html',
  styleUrls: ['./maincomponent.component.css']
})
export class MaincomponentComponent implements OnInit {
 public productArray : any
  constructor() { }

  ngOnInit(): void {
  }
addToArray(){

}
}
