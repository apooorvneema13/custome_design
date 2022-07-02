import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


// import { SessionUser } from 'src/assets/fakeData/dataModel';

import { LoginResponse } from '../model/fake/fakeDataModel';
import { Abstract } from '../helper/abstract';
import { Constants } from '../helper/constants';
@Injectable({
    providedIn: 'root'
})
export class LocationService {
    private sessionUser: LoginResponse;
    constructor(
        private httpClient: HttpClient,
        public router: Router,
       // private authenticationService: AuthenticationService
    ) {
        this.sessionUser = Abstract.getLoggedInUser();

        this.sessionUser = <LoginResponse>JSON.parse(localStorage.getItem(Abstract.Logged_User) || '{}');
    }

    GooglePlaceSearch(zipCode:any, businessName:any,showPhotos = false) {
        this.sessionUser = <LoginResponse>JSON.parse(localStorage.getItem(Abstract.Logged_User) || '{}');
        if (this.sessionUser === undefined || this.sessionUser === null) {
            this.sessionUser = new LoginResponse();
            this.sessionUser.UserCountry = Abstract.getIpContry();
        }
        businessName = Abstract.handelnullundefind(businessName,'string');
        return this.httpClient.get<any>(Constants.BASE_URI + Constants.LOCATION_SERVICE_URI + 'GooglePlaceSearch?zipCode=' + zipCode + '&&businessName=' + businessName + '&&country=' + this.sessionUser.UserCountry+ '&&showPhotos=' + showPhotos,
        Abstract.getHttpOptions(this.sessionUser.Token))
            .pipe(response => response);
    }

    async GooglePlaceSearchAsync(zipCode:any, businessName:any,showPhotos = false) {
		let response: any;
		let exist: boolean = false;

		try {
			response = await this.httpClient.get<boolean>(Constants.BASE_URI + Constants.LOCATION_SERVICE_URI + 'GooglePlaceSearch?zipCode=' + zipCode + '&&businessName=' + businessName + '&&country=' + this.sessionUser.UserCountry+ '&&showPhotos=' + showPhotos,
            Abstract.getHttpOptions(this.sessionUser.Token)).toPromise();
		} catch {
			response = [];
		}
		return response;
	}

    iPSearch(IpAddress:any) {
        return this.httpClient.get<any>(Constants.BASE_URI + Constants.LOCATION_SERVICE_URI + 'iPSearch?clientIP=' + IpAddress,
            )
            .pipe(response => response);
    }


    GetGoogleUniversity1(SearchStr:any,lat:any,lon:any) {
        
        let url = Constants.GOOGLE_API_SERVICE_URI + 'json?query='+SearchStr+'&type=university&key='+Constants.GOOGLE_MAP_KEY;
        return this.httpClient.get<any>(url,Abstract.getHttpOptionsGoogle())
            .pipe(response => response);
    }

    async GetGoogleUniversity(SearchStr:any,lat:any,lon:any) {
        
        console.log("GetGoogleUniversity", SearchStr);
        let response = await this.httpClient.get<any>(Constants.GOOGLE_API_SERVICE_URI + 'json?query='+SearchStr+'&type=university&key='+Constants.GOOGLE_MAP_KEY
        ).toPromise();
        let data = response["results"]
        // if (data.length > 0) {
        //     data = data.filter(ar => !AddCompanyList.find(rm => (
        //         rm.BusinessName.trim().toLowerCase() === ar.BusinessName.trim().toLowerCase() &&
        //         rm.State.trim().toLowerCase() === ar.State.trim().toLowerCase() &&
        //         rm.ZipCode.trim().toLowerCase() === ar.ZipCode.trim().toLowerCase()
        //     )))
        // }
        return data;
    }



}