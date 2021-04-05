import {CategorieService} from 'app/service/categorie.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Categorie} from 'app/entites/categorie';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-add-categorie',
    templateUrl: './add-categorie.component.html',
    styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {
    newCategorie = new Categorie();
    public formGroup: FormGroup;
    message: string;

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router, private formBuilder: FormBuilder,
                private  categorieService: CategorieService) {
    }

    ngOnInit(): void {
        this.formGroup = this.formBuilder.group({
            code: [null],
            libelle: [null],
            id: [null],
        });
    }

    addCategorie() {
       // console.log(this.newCategorie);

        this.newCategorie = this.formGroup.value as Categorie;
        this.categorieService.ajouterCategorie(this.newCategorie);
        this.router.navigate(['liste-categories']);
    }
}


