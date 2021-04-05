import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'app/service/event.service';
//import {Event} from 'app/entites/Event';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  public formGroup: FormGroup;
 // message: string;
  //newEvent=new  Event();

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router, private formBuilder: FormBuilder,
    private  eventService:  EventService) { }

  ngOnInit(): void {
  //   this.formGroup = this.formBuilder.group({
  //     id:  [null],
  //   code: [null],
  //   libelle:  [null],
    
  //   Ville:[null],
  //   Organisateur:[null],
  //   DateEvent:[null],
  //  // prix:float;
  //   stock:[null],
  //   fileName:[null],
  //   codeC:[null]
    
  

     
  // });
  }

  addEvenement()
 {
//     this.newEvent = this.formGroup.value as Event;
//     //this.eventService.ajouterEvent(this.newEvent);
   this.router.navigate(['list-event']);
 }
}
