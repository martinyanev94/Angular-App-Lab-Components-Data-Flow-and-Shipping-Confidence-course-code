import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import 'rxjs/add/operator/filter';

import 'rxjs/add/operator/flatMap';

import { CatalogTitle } from '../models/catalog-title';



@Injectable()

export class CatalogBenchCatalogService {

  private catalogUrl = 'assets/catalog.json';



  constructor(private http: Http) {}



  fetchOneById(id: number): Observable<CatalogTitle> {

    return this.http.get(this.catalogUrl)

      .flatMap(response => response.json())

      .filter((title: CatalogTitle) => title.title_id === id)

      .map((title: any) => new CatalogTitle(title));

  }

}
