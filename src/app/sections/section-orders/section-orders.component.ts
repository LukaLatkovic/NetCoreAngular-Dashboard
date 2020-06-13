import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/order';


@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  orders: Order[]=[
    {id: 1, customer:
      {id: 1, name: 'Main st Bakery', state: 'SO', email: 'test@test.com'},
       total: 230, placed: new Date(2020, 12, 1), fullfiled: new Date(2020, 12, 1)},
  ];

  ngOnInit() {
  }

}
