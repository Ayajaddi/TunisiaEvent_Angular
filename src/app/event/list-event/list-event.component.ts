import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

   addEvenement(){
       this.router.navigate(['list-event/add-event']);
  }

}
