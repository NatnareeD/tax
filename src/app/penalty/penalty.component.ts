import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-penalty',
  templateUrl: './penalty.component.html',
  styleUrls: ['./penalty.component.css']
})
export class PenaltyComponent implements OnInit {
  penalty:any

  constructor() { }

  ngOnInit(): void {
    this.penalty = 200.00
  }

  

}
