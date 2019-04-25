import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {  HttpService } from '../http.service';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {


  constructor(private _route: ActivatedRoute,
    private _httpService: HttpService,
    private _router: Router,


  ) { }

  ngOnInit() {
    // this._httpService
    //   // .getMessages()
    //   .subscribe((message: string)=> {
    //     this.messages.push(message);
    //   });
  }
  // sendMessages(){
  //   this._httpService.sendMessages(this.message);
  //   this.message= '';
  // }


}
