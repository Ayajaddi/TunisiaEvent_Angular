import { map } from 'rxjs/operators';
import { Event } from './../entites/event';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class EventService {
  apiURL = 'http://localhost:8101/events/api';
  Events: Event[];

  constructor(private http: HttpClient) { }

    listeEvent(): Observable<Event[]> {
        return this.http.get<Event[]>(this.apiURL);
    }

    ajouterEvent(event: Event): Observable<Event> {
        // return this.http.post<Categorie>(this.apiURL, cat, httpOptions);
        return this.http.post<any>(this.apiURL + '/   ', event, httpOptions);
    }

    listEvent() {
        return this.http.get(this.apiURL + '/list').pipe(map((res: Event[]) => res as Event[]));
        
    }


    supprimerEvent(id: number) {
        const url = `${this.apiURL}/${id}`;
        return this.http.delete(url, httpOptions);
    }

    consulterEvent(id: number) {
        const url = `${this.apiURL}/${id}`;
        return this.http.get<Event>(url);
    }

    updateEvente(cat: Event): Observable<Event> {
        return this.http.put<Event>(this.apiURL, cat, httpOptions);

    }
}
