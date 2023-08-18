import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-surcharge',
  templateUrl: './surcharge.component.html',
  styleUrls: ['./surcharge.component.css']
})
export class SurchargeComponent implements OnInit {
  @Input() surchargeItem : any
  surcharge:any
  vat:any


  constructor() { }

  ngOnInit(): void {
    this.vat = 0;
  }

}
