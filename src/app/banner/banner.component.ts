import { Component, OnInit } from '@angular/core';

import {Images} from '../images.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  
  products: Images[]= [
    {
      id: '1',
      image: 'https://2.bp.blogspot.com/-TV7z2_kYwSM/UeBlAcN-9eI/AAAAAAAAK-Q/FWShcJyRlig/s1600/037.jpg',
      title: 'Honda NSX',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/aa238a91974539.5e3fd3aecb220.jpg',
      title: 'Mazda Rx-7',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/cadde3120056831.60aa77dc82614.jpg',
      title: 'Toyota Supra MK5',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/2dfc31131885615.619e0bb7e3720.jpg',
      title: 'lancer Evolution X',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/f5eee5131091359.618d98f27cb5e.jpg',
      title: 'Subaru Impreza WRX STI',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/8ecb91109180607.5fce4e7241fad.jpg',
      title: 'Honda S2000',
      price: 80000,
      description: 'bla bla bla bla bla'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
