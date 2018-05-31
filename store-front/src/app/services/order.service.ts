import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Order} from '../models/order';
import {AppConst} from '../constants/app-const'

@Injectable()
export class OrderService {

  constructor(private http:Http) { }

  getOrderList() {
  	let url = AppConst.serverPath+"/order/getOrderList";

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.get(url, {headers: tokenHeader});
  }
}
