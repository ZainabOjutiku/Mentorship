import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

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
    return this._http.post(`/newrating/${id}`, newRate);
  }
  editMentor(editMentor){
    console.log("editing mentor...", editMentor);
    return this._http.put(`/mentor/update/${editMentor._id}`, editMentor);
  }
  findOneMentor(mentor){
    console.log("Finding a mentor", mentor);
    return this._http.get(`/onementor/${mentor}`, mentor);
  }
  deleteMentor(mentor){
    console.log("Deleting mentor..", mentor._id);
    return this._http.delete(`/mentor/delete/${mentor._id}`, mentor);
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

}



