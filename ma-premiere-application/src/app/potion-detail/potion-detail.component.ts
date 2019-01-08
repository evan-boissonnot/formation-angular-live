import { Component, OnInit, Input } from '@angular/core';
import { Potion } from '../models/potion';

@Component({
  selector: 'app-potion-detail',
  templateUrl: './potion-detail.component.html',
  styleUrls: ['./potion-detail.component.css']
})
export class PotionDetailComponent implements OnInit {
  @Input() potion: Potion;

  constructor() { }

  ngOnInit() {
  }

}
