import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Potion } from '../models/potion';
import { PotionsService } from '../services/potions.service';

@Component({
  selector: 'app-potion-resume',
  templateUrl: './potion-resume.component.html',
  styleUrls: ['./potion-resume.component.css']
})
export class PotionResumeComponent implements OnInit {
  @Input() potion: Potion;
  @Output() showDetails = new EventEmitter<Potion>();

  constructor(private _service: PotionsService) { }

  ngOnInit() {
  }

  showDetail(): void {
    this.showDetails.emit(this.potion);
  }

  save(): void {
    this._service.updateOne(this.potion).subscribe(pot => this.potion = pot);
  }
}
