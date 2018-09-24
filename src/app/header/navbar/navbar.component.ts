import { Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {ViewChild,AfterViewInit, ElementRef} from '@angular/core';
import {Renderer2} from '@angular/core';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
// import { NavlineComponent } from '../navline/navline.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class NavbarComponent implements OnInit, AfterViewInit, OnChanges {
  menuItems = [
    { value: "Checkout", image: "../assets/header/checkout.png", toggle: false},
    { value: "Wheeled Robot", image: "../assets/header/find-card.png", toggle: false},
    { value: "Offers", image: "../assets/header/offers.png", toggle: false},
    { value: "Payments", image: "../assets/header/payments.png", toggle: false},
    { value: "Payment Technology", image: "../assets/header/payment-tech.png", toggle: false}
  ];
 // @ViewChild('NavlineComponent') NavlineComponent: ElementRef;
 // @ViewChild(NavlineComponent) alert: NavlineComponent;
 //@ViewChild("arrow", {read: ElementRef}) arrow: ElementRef;
 @ViewChild('arrow') arrow: ElementRef;
 arrowValue :ElementRef;
 currentX: number;
 startingPosition: number;
 middle: number;
 visible: boolean;
 targetWidth: number;
 arrowVisibility: boolean = true;
  //constructor(element: ElementRef, private renderer: Renderer2) { 
  constructor(@Inject(DOCUMENT) document) { 
    
  }
 
  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {  
 let change = changes[propName];
 let curVal  = JSON.stringify(change.currentValue);
 let prevVal = JSON.stringify(change.previousValue);

       console.log(curVal);
       console.log(prevVal);
    }
 }
  getMousePosition(event, val) {
    // let endingPosition = 0;
   // console.log(angular.element(document.querySelector("#cntrlID")))
   let payWithVisa = document.getElementById('payWithVisa');
   let partnerWithUs = document.getElementById('partnerWithUs');
   let learnAboutVisa = document.getElementById('learnAboutVisa');
   let runYourBusiness = document.getElementById('runYourBusiness');
   this.arrowVisibility = true;
   if(val === 0) {
    partnerWithUs.className = "sub-nav-menu collapse";
    learnAboutVisa.className = "sub-nav-menu collapse";
    runYourBusiness.className = "sub-nav-menu collapse";
  }
    if(val === 1) {
      payWithVisa.className = "sub-nav-menu collapse";
      learnAboutVisa.className = "sub-nav-menu collapse";
      runYourBusiness.className = "sub-nav-menu collapse";
    }
    if(val === 2) {
      partnerWithUs.className = "sub-nav-menu collapse";
      payWithVisa.className = "sub-nav-menu collapse";
      learnAboutVisa.className = "sub-nav-menu collapse";
      
    }
    if(val === 3) {
      payWithVisa.className = "sub-nav-menu collapse";
      partnerWithUs.className = "sub-nav-menu collapse";
      learnAboutVisa.className = "sub-nav-menu collapse";
      runYourBusiness.className = "sub-nav-menu collapse";
      //this.renderer.removeClass('#payWithVisa', 'show');
      this.arrowVisibility = false;
      
    }
    if(val === 4) {
      payWithVisa.className = "sub-nav-menu collapse";
      partnerWithUs.className = "sub-nav-menu collapse";
      runYourBusiness.className = "sub-nav-menu collapse";
      //this.renderer.removeClass('#payWithVisa', 'show');
      
    }
    // this.menuItems.forEach(function(entry, index) {
    //   if(index !== val) {
    //     entry.toggle =false;
       
    //   } else {
    //     entry.toggle = !entry.toggle;
    //   }
 // });
    let offsetX = event.offsetX;
    this.currentX = event.clientX;
    this.startingPosition = event.currentTarget.offsetLeft;
    this.targetWidth = event.currentTarget.offsetWidth;
    this.middle = this.startingPosition + this.targetWidth/2 - 10;
    this.visible = true;
//console.log(this.alert.arrowValue);
//this.myMove(val);
  }
  getLeft() {
    return this.middle;
  }
  onResize(event) {
    let rr =  event.target;
  }
  ngAfterViewInit() {
   // console.log(this.NavlineComponent);
  //  this.arrowValue = this.arrow.nativeElement.value;
  //this.arrowValue = this.arrow.nativeElement;
  
  //console.log(this.arrowValue);
  }
}
