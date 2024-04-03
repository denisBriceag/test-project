import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private readonly _url: string = '../../assets/data.json';

  constructor(private readonly _http: HttpClient) {}

  getAllAuthors(): Observable<string[]> {
    return this._http
      .get<Book[]>(this._url)
      .pipe(
        map((products: Book[]) => [...new Set(products.map((p) => p.author))]),
      );
  }

  getBooksByData(title: string, author: string): Observable<Book[]> {
    return this._http
      .get<Book[]>(this._url)
      .pipe(
        map((products: Book[]) =>
          products.filter(
            (p) => p.title.includes(title) && p.author === author,
          ),
        ),
      );
  }
}
