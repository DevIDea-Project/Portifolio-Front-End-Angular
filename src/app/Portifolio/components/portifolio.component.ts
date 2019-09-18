import { Component, OnInit } from '@angular/core';

import { PortifolioService } from '../services';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.css']
})
export class PortifolioComponent implements OnInit {

  constructor(private portifolioService: PortifolioService) {}

  ngOnInit() {
  }

}
