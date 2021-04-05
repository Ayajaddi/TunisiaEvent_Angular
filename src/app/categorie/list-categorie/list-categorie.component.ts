import {ActivatedRoute, Router} from '@angular/router';

import {Component, OnInit} from '@angular/core';
import {Categorie} from 'app/entites/categorie';
import {CategorieService} from 'app/service/categorie.service';


@Component({
    selector: 'app-list-categorie',
    templateUrl: './list-categorie.component.html',
    styleUrls: ['./list-categorie.component.css']
})
export class ListCategorieComponent implements OnInit {
    categories: Categorie[];


    constructor(private activatedRoute: ActivatedRoute,
                private router: Router, private categorieService: CategorieService) {
    }

    ngOnInit(): void {
        this.categorieService.listCategorie().subscribe(cats => {
            console.log(cats);
            this.categories = cats;
        });
    }


    supprimerCategorie(c: Categorie) {
        let conf = confirm('Etes-vous sûr ?');
        if (conf) {
            this.categorieService.supprimerCategorie(c.idC).subscribe(() => {
                console.log('Categorie supprimé');
                this.SuprimerCategorieDuTableau(c);

            });
        }

    }

    SuprimerCategorieDuTableau(cat: Categorie) {
        this.categories.forEach((cur, index) => {
            if (cat.idC === cur.idC) {
                this.categories.splice(index, 1);
            }
        });
    }
}
