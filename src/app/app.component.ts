import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @Input() filing!: string ;


  page: any;
  message: any
  total: any
  vat: any
  month: any

  ngOnInit(): void {
    this.page = "page1"
    this.message = "Ordinary Filing";
    this.total = 0;
    this.month = '';
  }

  receiveMessage($event: any) {
    this.message = $event
    if (this.message == "0") {
      this.message = "Ordinary Filing"
    }else if (this.message == "1")
    {
      this.message = "Additional Filing"
    }
    console.log($event);

  }

  receiveTotal($event: any) {
    this.total = $event
    console.log(+this.total);
    this.vatTotal()
  }

  vatTotal() {
    this.vat = (this.total * (0.07))
    console.log("vat", this.vat);

  }

  receiveVatTotal($event: any) {
    this.vat = $event
    console.log(this.vat);
  }

  receiveMonth($event: any) {
    this.month = $event
    console.log("receiveMonth", this.month);
  }

  gotoconfirm() {
    this.page = 'page2'
  }

  goback() {
    this.page = 'page1'
  }

  forfilingtype!: string;
  title = 'tax';
}
