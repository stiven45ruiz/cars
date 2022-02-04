import { Component, OnInit } from '@angular/core';
import {Images} from '../images.model';

@Component({
  selector: 'app-euro',
  templateUrl: './euro.component.html',
  styleUrls: ['./euro.component.scss']
})
export class EuroComponent implements OnInit {

  products: Images[]= [
    {
      id: '1',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/ba8a2667628875.5b405a41459c9.jpg',
      title: 'BMW E30 M3',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a812d335089243.56e93cf695aae.jpg',
      title: 'Ferrari F40',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/08273e136319667.61f7d31f2d708.png',
      title: 'Lamborghini Countach',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/3d31f6130404033.617fc1ee56a2d.jpg',
      title: 'Mercedes AMG GT-R',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/202be3105932211.5f8486ff13845.jpeg',
      title: 'Porche 911 GT3 RS',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/38b6cf69249587.5b7d08586ed63.jpg',
      title: 'Audi R8 V10 Plus',
      price: 80000,
      description: 'bla bla bla bla bla'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
