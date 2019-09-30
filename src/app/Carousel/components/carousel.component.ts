import { Component, OnInit } from '@angular/core';

import { CarouselService } from '../service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor(private carouselService: CarouselService) { }

  ngOnInit() {
  }

}
