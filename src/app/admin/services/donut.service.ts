import { Injectable } from '@angular/core';
import { Donut } from '../models/donut.model';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHandler,
  HttpHeaders,
} from '@angular/common/http';
import {
  tap,
  of,
  map,
  catchError,
  throwError,
  retry,
  retryWhen,
  delay,
  take,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DonutService {
  private donuts: Donut[] = [];

  constructor(private http: HttpClient) {}

  read() {
    if (this.donuts.length) {
      return of(this.donuts);
    }

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    headers = headers.append('Api-token', '1234abcd');

    const options = {
      headers,
    };

    return this.http.get<Donut[]>(`/api/donuts`).pipe(
      tap((donuts) => (this.donuts = donuts)),
      retry(2), //retry 2 times
      retryWhen((errors) => {
        return errors.pipe(delay(5000), take(2));
      }),
      catchError(this.handleError)
    );
  }

  readOne(id: string | null) {
    return this.read().pipe(
      map((donuts) => {
        const donut = donuts.find((donut: Donut) => donut.id === id);
        if (donut) {
          return donut;
        }
        return {
          name: '',
          icon: '',
          price: 0,
          description: '',
        };
      }),
      catchError(this.handleError)
    );
  }

  create(payload: Donut) {
    return this.http.post<Donut>(`/api/donuts`, payload).pipe(
      tap((donut) => {
        this.donuts = [...this.donuts, payload];
      }),
      catchError(this.handleError)
    );
  }

  update(payload: Donut) {
    return this.http.put<Donut>(`/api/donuts/${payload.id}`, payload).pipe(
      tap((donut) => {
        this.donuts = this.donuts.map((item: Donut) => {
          if (item.id === donut.id) {
            return donut;
          }
          return item;
        });
      }),
      catchError(this.handleError)
    );
  }

  delete(payload: Donut) {
    return this.http.delete<Donut>(`/api/donuts/${payload.id}`).pipe(
      tap(() => {
        this.donuts = this.donuts.filter((donut) => donut.id !== payload.id);
      }),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    if (err.error instanceof ErrorEvent) {
      // client-side
      console.warn('Client', err.message);
    } else {
      // server-side
      console.warn('Server', err.status);
    }
    return throwError(() => new Error(err.message));
  }
}
