import { Component, OnInit } from '@angular/core';
import {ViewChild,AfterViewInit, ElementRef} from '@angular/core';

@Component({
  selector: 'app-navline',
  templateUrl: './navline.component.html',
  styleUrls: ['./navline.component.css']
})
export class NavlineComponent implements OnInit, AfterViewInit {
  @ViewChild('arrow') arrow: ElementRef;
  constructor() { }
arrowValue :ElementRef;
  ngOnInit() {
  }
transition() {

}
ngAfterViewInit() {
  this.arrowValue = this.arrow.nativeElement;
  console.log(this.arrowValue);
}
}
