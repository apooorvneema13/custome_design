import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Abstract } from "../../helper/abstract";
import { Constants } from "../../helper/constants";
import { LoginResponse } from "../../model/fake/fakeDataModel";
import { AuthenticationService } from "../authentication/authentication.service";
@Injectable({
	providedIn: 'root'
})
export class VendorService {
	sessionUser: LoginResponse = new LoginResponse();
	constructor(
		private httpClient: HttpClient,
		public router: Router,
		private authenticationService: AuthenticationService
	) {

	}

	AddVendor(data: any) 
	{
		return this.httpClient.post<any>(Constants.BASE_URI + Constants.VENDOR_SERVICE_URI + 'AddVendor',
		data, Abstract.getHttpOptions("", false))
			.pipe(response => response);
	}
	
	ValidateUser(data: any) 
	{
		return this.httpClient.post<any>(Constants.BASE_URI + Constants.VENDOR_SERVICE_URI + 'ValidateUser',
		data, Abstract.getHttpOptions("", false))
			.pipe(response => response);
	}

	
}