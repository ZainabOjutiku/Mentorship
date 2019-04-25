import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'public';
  newMentor
  allMentors
  currentMentor;


  constructor(private _httpService: HttpService,
              private _router: Router
  ) {
  }

  ngOnInit() {
    this.newMentor= {name: " ", url: " ",description:"",skills:[""]};
    this.allMentors=[];
    this.currentMentor ={id:"", ratings: []};
    this.getAllMentors();
  }


  getAllMentors() {
    console.log("getting mentors")

    let observable = this._httpService.getAllMentors();
    observable.subscribe(data =>{
      console.log(this.allMentors)
      console.log(data['data'])
      this.allMentors = data['data']
    })


  }

  makeNewMentor() {
      let observable = this._httpService.createMentor(this.newMentor);
      observable.subscribe(data => {
        console.log("creating data", data)
        this._router.navigate(["/"]);



      });
    }
    viewMentor(id){
    for(var i = 0; i < this.allMentors.length; i++){
      if(this.allMentors[i]._id == id){
        this.currentMentor= this.allMentors[i];
      }
    }
    console.log(this.currentMentor)
    }

}
