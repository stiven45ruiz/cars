import { Component, OnInit } from '@angular/core';
import {Images} from '../images.model';

@Component({
  selector: 'app-american',
  templateUrl: './american.component.html',
  styleUrls: ['./american.component.scss']
})
export class AmericanComponent implements OnInit {

  products: Images[]= [
    {
      id: '1',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/0f2ee286476567.5d9b180cbb1fa.jpg',
      title: 'Corvette C7 ZR1',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/41438e61337785.5a6afd9e2c02a.jpg',
      title: 'Ford Shelby GT350',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3593a835232723.56ef2483acedf.jpg',
      title: 'Ford GT40',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/f61649134677229.61da4a3b09e6c.jpg',
      title: 'Dodge Chellenger',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/f61649134677229.61da4a3b09e6c.jpg',
      title: 'Dodge Chellenger',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/f61649134677229.61da4a3b09e6c.jpg',
      title: 'Dodge Chellenger',
      price: 80000,
      description: 'bla bla bla bla bla'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
