import { Component, OnInit, Input } from '@angular/core';
import { Potion } from '../models/potion';

@Component({
  selector: 'app-potion-resume',
  templateUrl: './potion-resume.component.html',
  styleUrls: ['./potion-resume.component.css']
})
export class PotionResumeComponent implements OnInit {
  @Input() potion: Potion;

  constructor() { }

  ngOnInit() {
  }

  showDetail(): void {
    console.log(this.potion);
  }
}
