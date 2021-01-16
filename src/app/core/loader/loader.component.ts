import {Component, OnInit} from '@angular/core';
import {LoaderService} from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styles: []
})
export class LoaderComponent implements OnInit {

  constructor(public loaderService: LoaderService) {
  }

  ngOnInit(): void {
  }

}
