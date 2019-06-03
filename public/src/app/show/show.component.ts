import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import * as io from 'socket.io-client';
import * as $ from 'jquery';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  viewMentor = { name: '' };
  newRating;
  actualname = ""
  message = {message: ""}
  display = ""
  usernameInput = false;
  socket: SocketIOClient.Socket;
  constructor(private _route: ActivatedRoute,
    private _httpService: HttpService,
    private _router: Router,
  ) { 
    this.socket = io('http://localhost:8000');
  }

  ngOnInit() {
    this.display = "";
    this.newRating = { stars: "", name: " ", reviews: "", id: "" };
    this.findMentor()
    this._httpService.scrollTo("person");
    this.socket.emit("clientConnected");
    this.socket.on("updateMessage", function(data){
      this.display = data.toString();
      $('#chatbox').html(this.display);
    })
  }
  setName() {
    this.actualname = $('#username').val();
    this.usernameInput = true;
  }
  sendMessage() {
    let message = ""
    message += this.actualname + " says : " + this.message.message
    this.socket.emit("messageFromClient", message);
    this.message.message = ""
  }
  findMentor() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      console.log("finding a mentor");
      let observable = this._httpService.findOneMentor(params["id"]);
      observable.subscribe(data => {
        console.log(data)
        this.viewMentor = data['data']
        console.log("details data", this.viewMentor)

      })
    })
  }
  addRating(id, thisstars, thisreviews, thisname) {
    this.newRating.id = id;
    this.newRating.stars = thisstars.value;
    this.newRating.name = thisname.value;
    this.newRating.reviews = thisreviews.value;
    console.log("Rating:", this.newRating)
    let myRating = this._httpService.createRating(this.newRating, id);
    myRating.subscribe(data => {
      this.findMentor();
      this.newRating = { stars: "", name: "", reviews: "" };
    });
  }


  //add delete review
  // deleteRating(){
  //   console.log("Deleting review");
  //   let obs= this._httpService.deleteReview(this.addRating);
  //   obs.subscribe(data =>{
  //     console.log("Deleting review in show component");
  //     this._httpService.scrollTo("services");
  //   })

  }



