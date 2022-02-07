import { Component, OnInit } from '@angular/core';

import {Images} from '../../images.model'; 

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products: Images[]
}
