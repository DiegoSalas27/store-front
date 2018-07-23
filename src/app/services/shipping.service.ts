import { Injectable } from '@angular/core';
import { AppConst } from '../const/app-const';
import { Http, Headers } from '@angular/http';
import { UserShipping } from '../models/user-shipping';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  private serverPath: string = AppConst.serverPath;

  constructor(private http: Http) { }

  newShipping(Shipping: UserShipping){
    let url = this.serverPath+'/shipping/add';

    let tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.post(url, JSON.stringify(Shipping), {headers: tokenHeader});
  }

  getUserShippingList(){
    let url = this.serverPath+'/shipping/getUserShippingList';

    let tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.get(url, {headers: tokenHeader});
  }

  removeShipping(id: number){
    let url = this.serverPath+'/shipping/remove';

    let tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.post(url, id, {headers: tokenHeader});
  }

  setDefaultShipping(id: number){
    let url = this.serverPath+'/shipping/setDefault';

    let tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.post(url, id, {headers: tokenHeader});
  }
}
