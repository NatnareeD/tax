import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-amount',
  templateUrl: './total-amount.component.html',
  styleUrls: ['./total-amount.component.css']
})
export class TotalAmountComponent implements OnInit {
  @Input() sumTotalItem : any
  totalsum:any
  total:any
  vat:any
  surcharge:any
  
  constructor() { }

  ngOnInit(): void {
    this.vat = 0;
    this.total = 0;
  }

}
