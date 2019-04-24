import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {  HttpService } from '../http.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  viewMentor = {name: ''};

  constructor(private _route: ActivatedRoute,
              private _httpService: HttpService,
              private _router: Router) { }

  ngOnInit() {
    this.findMentor()
  }

  findMentor(){
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      console.log("finding a mentor");
      let observable = this._httpService.findOneMentor(params["id"]);
      observable.subscribe(data =>{
        console.log(data)
        this.viewMentor = data['data']
        console.log("details data",this.viewMentor)

      })
    })
  }

}
