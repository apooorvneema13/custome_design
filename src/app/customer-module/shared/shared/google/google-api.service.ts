import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from '../model/fake/fakeDataModel';



@Injectable({
    providedIn: 'root'
})
export class GoogleApiService {

    // public loggedInUser = new Employee();
    public loginResponse = new LoginResponse();

    constructor(
        private httpClient: HttpClient,
        public router: Router
    ) { }

    // googlePlaceSearch() {
    //     const uri = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Mitaja%20Corporation%2020759&inputtype=textquery&fields=place_id,photos,formatted_address,name,rating,opening_hours&key=' +
    //         Constants.GOOGLE_MAP_KEY;

    //     // const headers = new Headers({
    //     //     'Access-Control-Allow-Origin': '*',
    //     //     'Content-Type': 'application/x-www-form-urlencoded'
    //     // });

    //     let headers = new HttpHeaders();
    //     headers.append('Access-Control-Allow-Origin', '*');
    //     headers.append('Accept', 'application/json');
    //     headers.append('Content-Type', 'application/json');
    //     // headers.append('Access-Control-Allow-Credentials', 'true');

    //     return this.httpClient
    //         .get<any>(uri);
    // }

    // googlePlaceDetail(place_id: string) {
    //     const uri = 'https://maps.googleapis.com/maps/api/place/details/json?place_id=' +
    //         place_id + '&fields=name,rating,formatted_phone_number,opening_hours,&key=' +
    //         Constants.GOOGLE_MAP_KEY;

    

    //     return this.httpClient
    //         .get(uri)
    //         .pipe(response => response);
    // }
    // googleBusinessDetail(businessText: string) {
    //     const uri = 'https://maps.googleapis.com/maps/api/place/details/json?place_id=' +
    //         businessText + '&fields=name,rating,formatted_phone_number,opening_hours,&key=' +
    //         Constants.GOOGLE_MAP_KEY;

    

    //     return this.httpClient
    //         .get(uri)
    //         .pipe(response => response);
    // }
}