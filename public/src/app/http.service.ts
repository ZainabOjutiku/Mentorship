import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import * as io from 'socket.io-client';
// // import { Observable } from 'rxjs/Observable';
// // import * as Rx from 'rxjs/Rx';
// import {environment} from '../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class HttpService {
  //our socket connection
  // private socket;


  constructor(private _http:HttpClient){}


  getAllMentors(){
    console.log("All mentors in service!");
    return this._http.get('/allmentors');
  }
  createMentor(mentorobj){
    console.log("Adding mentor.... ");
    return this._http.post('/newmentor', mentorobj);
  }
  createRating(newRate, id){
    console.log("Creating rating...", id);
    return this._http.post(`/newrating/${id}`, newRate)
  }
  editMentor(mentor){
    console.log("editing mentor...", mentor);
    return this._http.put(`/mentor/update/${mentor._id}`, mentor)
  }

  findOneMentor(mentor){
    console.log("Finding a mentor", mentor);
    return this._http.get(`/onementor/${mentor}`, mentor);
  }
  deleteMentor(mentor){
    console.log("Deleting mentor..", mentor._id);
    return this._http.delete(`/deletementor/${mentor._id}`, mentor);
  }
  deleteReview(rating){
    console.log("Deleting rating", rating);
    return this._http.delete(`/delete/rating/${rating._id}`, rating);
  }
  scrollTo(str){
    let topPos = document.getElementById(str);
    window.scrollTo({
      top: topPos.offsetTop,
      left: 0,
      behavior:'smooth'
    })
  }
  // connect(): Rx.Subject<MessageEvent> {
  //   // If you aren't familiar with environment variables then
  //   // you can hard code `environment.ws_url` as `http://localhost:5000`
  //   this.socket = io(environment.ws_url);

  //   // We define our observable which will observe any incoming messages
  //   // from our socket.io server.
  //   // let observable = new Observable(observer => {

  //       this.socket.on('message', (data) => {
  //         console.log("Received message from Websocket Server")
  //         observer.next(data);
  //       })
  //       return () => {
  //         this.socket.disconnect();
  //       }
  //   // });

  //   // We define our Observer which will listen to messages
  //   // from our other components and send messages back to our
  //   // socket server whenever the `next()` method is called.
  //   let observer = {
  //       next: (data: Object) => {
  //           this.socket.emit('message', JSON.stringify(data));
  //       },
  //   };

  //   // we return our Rx.Subject which is a combination
  //   // of both an observer and observable.
  //   return Rx.Subject.create(observer, observable);
  // }

}



