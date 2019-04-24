import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newMentor;
  constructor(private _httpService: HttpService,
              private _router: Router) { }

  ngOnInit() {
    this.newMentor= {name: " ", url: " ",description:"",skills:[""]};

  }
  NewMentor() {
    let observable = this._httpService.createMentor(this.newMentor);
    observable.subscribe(data => {
      console.log("creating mentor", data)
      this._router.navigate(["/"]);

    });
  }

}
