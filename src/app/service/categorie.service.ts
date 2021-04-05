import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Categorie} from 'app/entites/categorie';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
    providedIn: 'root'
})
export class CategorieService {
    apiURL = 'http://localhost:8101/categories/api';
    categories: Categorie[];

    constructor(private http: HttpClient) {
    }

    listeCategorie(): Observable<Categorie[]> {
        return this.http.get<Categorie[]>(this.apiURL);
    }

    ajouterCategorie(categorie: Categorie): Observable<Categorie> {
        // return this.http.post<Categorie>(this.apiURL, cat, httpOptions);
        return this.http.post<any>(this.apiURL + '/   ', categorie, httpOptions);
    }

    listCategorie() {
        return this.http.get(this.apiURL + '/list').pipe(map((res: Categorie[]) => res as Categorie[]));
    }


    supprimerCategorie(id: number) {
        const url = `${this.apiURL}/${id}`;
        return this.http.delete(url, httpOptions);
    }

    consulterCategorie(id: number) {
        const url = `${this.apiURL}/${id}`;
        return this.http.get<Categorie>(url);
    }

    updateCategorie(cat: Categorie): Observable<Categorie> {
        return this.http.put<Categorie>(this.apiURL, cat, httpOptions);

    }
}
