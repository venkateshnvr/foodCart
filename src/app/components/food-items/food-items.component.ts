import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-food-items',
  templateUrl: './food-items.component.html',
  styleUrls: ['./food-items.component.css']
})
export class FoodItemsComponent implements OnInit {
  Data = "";
  Disable = true;
  Disable_1 = false;
  jsonURL = 'assets/data.json'

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getJSON().subscribe(data => {
      this.Data = data;
    });
  }

  getJSON(): Observable<any> {
    return this.http.get(this.jsonURL);
  }

  disable() {
    this.Disable = false;
    this.Disable_1 = true;
  }

  disable_1() {
    this.Disable = true;
    this.Disable_1 = false;
  }

}
