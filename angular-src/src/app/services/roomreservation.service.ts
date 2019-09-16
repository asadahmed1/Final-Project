import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import { map } from "rxjs/operators";

@Injectable()
export class RoomreservationService {

  constructor(private _http : Http) { }
  roomReservation(newReserve){
    var headers=new Headers();
    headers.append('Content-type','application/json')
    return this._http.post('http://localhost:8080/api/roomsave',newReserve,{headers:headers}).pipe(map(res=> res.json()))
  }
  getAll(){
    return this._http.get('http://localhost:8080/api/allreservation').pipe(map(res=>res.json()))
  }
  deleteReservation(body){

    return this._http.delete('http://localhost:8080/api/deleteReservation/',body).pipe(map(res=> res.json()))
  }

}
