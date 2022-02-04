import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  
  images: string[] = [
    'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a812d335089243.56e93cf695aae.jpg',
    'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3593a835232723.56ef2483acedf.jpg',
    'https://2.bp.blogspot.com/-TV7z2_kYwSM/UeBlAcN-9eI/AAAAAAAAK-Q/FWShcJyRlig/s1600/037.jpg',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
