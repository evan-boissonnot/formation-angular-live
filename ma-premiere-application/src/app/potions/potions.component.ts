import { Component, OnInit, OnDestroy } from '@angular/core';
import { Potion } from '../models/potion';
import { potions } from '../models/potions';
import { PotionsService } from '../services/potions.service';

@Component({
  selector: 'app-potions',
  templateUrl: './potions.component.html',
  styleUrls: ['./potions.component.css']
})
export class PotionsComponent implements OnInit, OnDestroy {
  potionList: Potion[];
  selectedPotion: Potion;

  ngOnDestroy(): void {

  }

  constructor(private _service: PotionsService) { }

  ngOnInit() {
    this._service.getAll().subscribe(maList => this.potionList = maList);
  }

  showTheDetails(potion: Potion) {
    this.selectedPotion = potion;
  }
}
