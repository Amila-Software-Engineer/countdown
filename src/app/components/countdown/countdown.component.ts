import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  countdownDate = new Date("january 16, 2023 20:00:00").getTime();
  days:any;
  hours:any;
  minutes:any;
  seconds:any;

  countdown = setInterval(() =>{
    var now = new Date().getTime();
    var distance = this.countdownDate - now;
    this.days = Math.floor(distance/(1000*60*60*24));
    this.hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
    this.minutes = Math.floor((distance % (1000*60*60))/(1000*60));
    this.seconds = Math.floor((distance % (1000*60))/(1000));
  })

}
