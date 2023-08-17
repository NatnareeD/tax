import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tax-amount',
  templateUrl: './tax-amount.component.html',
  styleUrls: ['./tax-amount.component.css']
})
export class TaxAmountComponent implements OnInit {
  // @Output() event = new EventEmitter<string>()
  @Input() vatItem : any
  total:any
  vat:any

  constructor() { }

  ngOnInit(): void {
    
    this.total = 0;
  }

  // receiveTotal($event: any){
  //   this.total=$event
  //   console.log(this.total);
  //   // this.vatTotal()
    
  // }

  // vatTotal(){
  //   this.vat = this.total*0.07
  //   console.log("vat",this.vat);
    
  // }

}
