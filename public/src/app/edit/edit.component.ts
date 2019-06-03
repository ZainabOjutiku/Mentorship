import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  viewMentor = {name: ""};
  editMentor:any;
  mentor:object;

  constructor(private _route: ActivatedRoute,
    private _httpService: HttpService,
    private _router: Router,) { }

  ngOnInit() {
    this.findMentor();
    this.editSubmit();
    this.editMentor={name:"", url:"", description:"", skills:[""]};
  }
  findMentor() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      console.log("finding a mentor");
      let observable = this._httpService.findOneMentor(params["id"]);
      observable.subscribe(data => {
        console.log(data);
        this.editMentor = data['data'];
        console.log("details data", this.viewMentor);

      })
    })
  }

  editSubmit(){
    console.log("In the edit component");
    console.log(this.editMentor);
    let obs= this._httpService.editMentor(this.editMentor);
    obs.subscribe((data:any)=>{
      console.log(data);
      console.log("In edit component");
      if(!data.error){
        this._httpService.scrollTo("services");
      }
      else{
        console.log("error in edit component", data.error);
      }
    })     
  
  }
  deleteMentor(){
    console.log("Deleting in edit component");
    let obs = this._httpService.deleteMentor(this.editMentor);
    obs.subscribe(data =>{
      console.log("deleteing....");
      this._httpService.scrollTo("services");
    })
  }
  
}
