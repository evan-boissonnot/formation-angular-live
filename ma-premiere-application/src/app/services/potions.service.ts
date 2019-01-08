import { Injectable } from '@angular/core';
import { Potion } from '../models/potion';
import { potions } from '../models/potions';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PotionsService {

  constructor(private _httpClient: HttpClient) { }

  public getAll(): Observable<Potion[]> {
    const url = environment.api_url;

    return this._httpClient.get<Potion[]>(url)
                          .pipe(tap(result => console.log(result)));
  }

  public updateOne(potion: Potion): Observable<Potion> {
    const url = environment.api_url;

    return this._httpClient.put<Potion>(url, potion);
  }
}
