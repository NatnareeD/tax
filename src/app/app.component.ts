import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http'

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
  year: any
  penalty: any
  surcharge: any
  totalsum: any
  jsondata!: string
  result!: string

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.page = "page1"
    this.message = "Ordinary Filing";
    this.total = 0;
    this.month = '';
    this.penalty = 200.00
  }

  receiveMessage($event: any) {
    this.message = $event
    if (this.message == "0") {
      this.message = "Ordinary Filing"
    } else if (this.message == "1") {
      this.message = "Additional Filing"
    }
    console.log($event);

  }

  receiveTotal($event: any) {
    this.total = $event
    console.log(+this.total);
    this.vatTotal()
  }

  surchargeTotal() {
    this.surcharge = (this.vat * (0.1))
    this.sumTotalAmount()
  }

  vatTotal() {
    this.vat = (this.total * (0.07))
    console.log("vat", this.totalsum);
    this.surchargeTotal()
    this.sumTotalAmount()
  }

  sumTotalAmount(){
    this.totalsum = (this.penalty + this.surcharge + this.vat)
  }


  // receiveSumTotal($event: any) {
  //   this.totalsum = $event
  //   console.log(+this.totalsum);
  //   this.vatTotal()
  //   this.surchargeTotal()
  // }

  // receiveVatTotal($event: any) {
  //   this.vat = $event
  //   console.log(this.vat);
  // }

  receiveYear($event: any) {
    this.year = $event
    console.log("receiveMonth", this.year);
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

  postData() {
    let url = "http://httpbin.org/post"
    this.http.post(url, {

      month: this.month,
      year: this.year,
      vat: this.vat,
      message: this.message,
      total: this.total,
      penalty: this.penalty,
      surcharge: this.surcharge

    }).toPromise().then((data: any) => {
      console.log("data", data);
      console.log("datajson", JSON.stringify(data.json));
      this.result = JSON.stringify(data.json)
    })
  }

  forfilingtype!: string;
  title = 'tax';
}
