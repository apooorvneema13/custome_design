import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/Rx';

// import { Http, Response, Headers, RequestOptions } from '@angular/http';


@Injectable({
    providedIn: 'root'
})
export class IpAddressService {

    constructor(private httpClient: HttpClient) { }

    public getIPAddress() {
        return this.httpClient.get("https://api.ipify.org/?format=json")
            .pipe(response => response);
    }


    public getjsonip() {
        return this.httpClient.get("https://jsonip.com")
            .pipe(response => response);
    }


    public getIPDetails(): Observable<any[]> {
        return this.httpClient.get<any>('https://ipinfo.io')
            .pipe(response => response);
    }

    public getMacAddress() {

    }
}