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
  newRating;


  constructor(private _route: ActivatedRoute,
              private _httpService: HttpService,
              private _router: Router) { }

  ngOnInit() {
    this.newRating = {stars: "", name:" ",reviews: "", id: ""};
    this.findMentor()
    this._httpService.scrollTo("person");
  }

  findMentor(){
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      console.log("finding a mentor");
      let observable = this._httpService.findOneMentor(params["id"]);
      observable.subscribe(data => {
        console.log(data)
        this.viewMentor = data['data']
        console.log("details data",this.viewMentor)

      })
    })
  }
  addRating(id, thisstars, thisreviews,thisname) {
    this.newRating.id = id;
    this.newRating.stars = thisstars.value;
    this.newRating.name = thisname.value;
    this.newRating.reviews = thisreviews.value;
    console.log("my rATING", this.newRating)
    let myRating = this._httpService.createRating(this.newRating, id);
    myRating.subscribe(data => {
      this.findMentor();
      this.newRating = {stars: "", name: " ", reviews: ""};
    });
  }

  // addRating(){
  //   let observable = this._httpService.createRating(this.newRating);
  //   observable.subscribe(data => {
  //     console.log("creating rating", data)
  //     this.newRating = {stars: "", name:" ",reviews: ""};
  //
  //     // this.newMentor={name: " ", url: " ",description:"",skills:[""]};
  //     // this._httpService.scrollTo("services");
  //   });
  // }

}
