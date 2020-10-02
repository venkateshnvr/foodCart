import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../share-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  jsonData:object = {}
  totalPrice = 0
  
  constructor(private SharedService:SharedService, private router: Router) { }

  ngOnInit(): void {
    this.jsonDataRendering();
    this.amount()
  }

  jsonDataRendering() {
    this.SharedService.sharedMessage.subscribe((data) => {
      this.jsonData = data;
    });
  }

  amount(){
    for(let key in this.jsonData) {
      this.totalPrice += this.jsonData[key].count * this.jsonData[key].cost
    }
  }
  totalAmount() {
    this.totalPrice = 0
    if(this.totalPrice === 0) {
      for(let key in this.jsonData) {
        this.totalPrice += this.jsonData[key].count * this.jsonData[key].cost
      }
    }
  }

  payment() {
    this.router.navigate([""])
  }
}
