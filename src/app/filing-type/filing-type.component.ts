import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';



@Component({
  selector: 'app-filing-type',
  templateUrl: './filing-type.component.html',
  styleUrls: ['./filing-type.component.css']
})
export class FilingTypeComponent implements OnInit {
  //@Input() type!: string;
  controlsFormGroup : any;
  filing!: string;
  Ordinary! : string;
  Additional! : string;

  checked!: string;

  value! : string;

  constructor() { }
  @Output() event = new EventEmitter<string>()
  
  sentMessage(){
    this.event.emit(this.filing)
    console.log(this.event.emit(this.filing));
   
  }

  Change(){
    this.filing = "0"
    console.log('0',this.filing)
    this.sentMessage()
  }

  OnChange(){
    
    this.filing = "1"
    console.log('1',this.filing)
    this.sentMessage()
   
  }

  ngOnInit(): void {

    // if(this.filing == "0"){

    // }
  }

  

}
