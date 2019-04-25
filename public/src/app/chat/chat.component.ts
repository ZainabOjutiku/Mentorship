import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {  HttpService } from '../http.service';
// import {Socket} from 'ngx-socket-io';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  message: string;
  messages: string[] =[];

  constructor(private _route: ActivatedRoute,
    private _httpService: HttpService,
    private _router: Router,
    // private socket: Socket

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
