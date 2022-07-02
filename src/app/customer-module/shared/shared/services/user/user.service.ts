import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Abstract } from "../../helper/abstract";
import { Constants } from "../../helper/constants";
import { LoginResponse } from "../../model/fake/fakeDataModel";
import { AuthenticationService } from "../authentication/authentication.service";
@Injectable({
	providedIn: 'root'
})
export class UserService {
	sessionUser: LoginResponse = new LoginResponse();
	constructor(
		private httpClient: HttpClient,
		public router: Router,
		private authenticationService: AuthenticationService
	) {

	}


	registerUser(registrationRequest: any) {

		return this.httpClient.post<any>(Constants.BASE_URI + Constants.USER_SERVICE_URI + 'AddUsers',
			registrationRequest, Abstract.getHttpOptions("", false))
			.pipe(response => response);
	}

	ValidateUser(userRequest: any) {
		return this.httpClient.post<any>(Constants.BASE_URI + Constants.USER_SERVICE_URI + 'ValidateUser',
			userRequest, Abstract.getHttpOptions("", false))
			.pipe(response => response);
	}
	UpdateUserPassword(Data: any, Token: string) {

		return this.httpClient.post<any>(Constants.BASE_URI + Constants.USER_SERVICE_URI + 'UpdateUserPassword',
			Data, Abstract.getHttpOptions(Token))
			.pipe(response => response);
	}


	UpdateLastLogin(Data: any) {

		return this.httpClient.post<any>(Constants.BASE_URI + Constants.USER_SERVICE_URI + 'UpdateLastLogin',
			Data, Abstract.getHttpOptions(this.authenticationService.Token))
			.pipe(response => response);
	}

	GetEmployeeListings(Data: any) {
		return this.httpClient.post<any>(Constants.BASE_URI + Constants.USER_SERVICE_URI + 'GetEmployeeListings',
			Data, Abstract.getHttpOptions(this.authenticationService.Token))
			.pipe(response => response);
	}

	



	checkUserExists(userName: string) {
		return this.httpClient.get<any>(Constants.BASE_URI + Constants.USER_SERVICE_URI + 'ChkUserExists?UserName=' + userName, Abstract.getHttpOptions("", false))
			.pipe(response => response);
	}
	async checkUserExistsAsync(userName: string) {
		let response: any;
		let exist: boolean = false;
		try {
			response = await this.httpClient.get<boolean>(Constants.BASE_URI + Constants.USER_SERVICE_URI + 'ChkUserExists?UserName=' + userName, Abstract.getHttpOptions("", false)).toPromise();
			if (response.statuscode == 200) {
				exist = true;
			} else {
				exist = false;
			}

		} catch {
			exist = true;
		}
		return exist;
	}

	
	AddOrganizationUsers(registrationRequest: any) {
		return this.httpClient.post<any>(Constants.BASE_URI + Constants.USER_SERVICE_URI + 'AddOrganizationUsers',
			registrationRequest, Abstract.getHttpOptions("", false))
			.pipe(response => response);
	}
	

	
	SendOTP(UserName: string) {
		return this.httpClient.get<any>(Constants.BASE_URI + Constants.USER_SERVICE_URI + 'SendOTP?UserName=' + UserName, Abstract.getHttpOptions("", false))
			.pipe(response => response);
	}


	// SendOTP(UserName: any) {
	// 	let data = {
	// 		"UserName": UserName,
	// 		"DeviceType": Constants.DeviceName
	// 	}
	// 	return this.httpClient.post<any>(Constants.BASE_URI + Constants.USER_SERVICE_URI + 'SendOTP?UserName=' + UserName,
	// 		data, Abstract.getHttpOptions("", false))
	// 		.pipe(response => response);
	// }

	
	ValidateExternalLogin(data: any) {
		return this.httpClient.post<any>(Constants.BASE_URI + Constants.USER_SERVICE_URI + 'ValidateExternalLogin',
			data, Abstract.getHttpOptions("", false))
			.pipe(response => response);
	}

	VerifyOTP(Data: any) {
		return this.httpClient.post<any>(Constants.BASE_URI + Constants.USER_SERVICE_URI + 'VerifyOTP',
			Data, Abstract.getHttpOptions(this.authenticationService.Token))
			.pipe(response => response);
	}

	UpdateUserProfile(profiledata: any) {
		return this.httpClient.post<any>(Constants.BASE_URI + Constants.USER_SERVICE_URI + 'UpdateUserProfile',
			profiledata, Abstract.getHttpOptions(this.authenticationService.Token))
			.pipe(response => response);
	}


	PreLaunchUsers(userRequest: any) {
		return this.httpClient.post<any>(Constants.BASE_URI + Constants.USER_SERVICE_URI + 'PreLaunchUsers',
			userRequest, Abstract.getHttpOptions("", false))
			.pipe(response => response);
	}

	iPsearch(IPAddress: string) {
		return this.httpClient.get<any>(Constants.BASE_URI + Constants.USER_SERVICE_URI + 'iPsearch?IPAddress=' + IPAddress, Abstract.getHttpOptions("", false))
			.pipe(response => response);
	}

	LoginwithlinkdinAsync(token: string, redirect_uri: string) {
		return this.httpClient.get<any>(Constants.BASE_URI + Constants.USER_SERVICE_URI + 'LoginwithlinkdinAsync?token=' + token + '&redirect_uri=' + redirect_uri, Abstract.getHttpOptions("", false))
			.pipe(response => response);
	}
	DeleteUserSkills(Data: any) {
		return this.httpClient.post<any>(Constants.BASE_URI + Constants.USER_SERVICE_URI + 'DeleteUserSkills',
			Data, Abstract.getHttpOptions(this.authenticationService.Token))
			.pipe(response => response);
	}

	AddUserSkills(Data: any) {
		return this.httpClient.post<any>(Constants.BASE_URI + Constants.USER_SERVICE_URI + 'AddUserSkills',
			Data, Abstract.getHttpOptions(this.authenticationService.Token))
			.pipe(response => response);
	}

	AddUserEducation(Data: any) {
		return this.httpClient.post<any>(Constants.BASE_URI + Constants.USER_SERVICE_URI + 'AddUserEducation',
			Data, Abstract.getHttpOptions(this.authenticationService.Token))
			.pipe(response => response);
	}

	UpdateUserEducation(Data: any) {
		return this.httpClient.post<any>(Constants.BASE_URI + Constants.USER_SERVICE_URI + 'UpdateUserEducation',
			Data, Abstract.getHttpOptions(this.authenticationService.Token))
			.pipe(response => response);
	}

	DeleteUserEducation(Data: any) {
		return this.httpClient.post<any>(Constants.BASE_URI + Constants.USER_SERVICE_URI + 'DeleteUserEducation',
			Data, Abstract.getHttpOptions(this.authenticationService.Token))
			.pipe(response => response);
	}

	AddUserExperience(Data: any) {
		return this.httpClient.post<any>(Constants.BASE_URI + Constants.USER_SERVICE_URI + 'AddUserExperience',
			Data, Abstract.getHttpOptions(this.authenticationService.Token))
			.pipe(response => response);
	}

	UpdateUserExperience(Data: any) {
		return this.httpClient.post<any>(Constants.BASE_URI + Constants.USER_SERVICE_URI + 'UpdateUserExperience',
			Data, Abstract.getHttpOptions(this.authenticationService.Token))
			.pipe(response => response);
	}

	DeleteUserExperience(Data: any) {
		return this.httpClient.post<any>(Constants.BASE_URI + Constants.USER_SERVICE_URI + 'DeleteUserExperience',
			Data, Abstract.getHttpOptions(this.authenticationService.Token))
			.pipe(response => response);
	}

	AddUserPreference(Data: any) {
		return this.httpClient.post<any>(Constants.BASE_URI + Constants.USER_SERVICE_URI + 'AddUserPreference',
			Data, Abstract.getHttpOptions(this.authenticationService.Token))
			.pipe(response => response);
	}

	UpsrtUserAchivements(Data: any) {
		return this.httpClient.post<any>(Constants.BASE_URI + Constants.USER_SERVICE_URI + 'UpsrtUserAchivements',
			Data, Abstract.getHttpOptions(this.authenticationService.Token))
			.pipe(response => response);
	}

	GetUserJobSummary(UserID: number) {
		return this.httpClient.get<any>(Constants.BASE_URI + Constants.USER_SERVICE_URI + 'GetUserJobSummary?UserID=' + UserID, Abstract.getHttpOptions(this.authenticationService.Token))
			.pipe(response => response);
	}

	AddUserDocuments(Data: any) {
		return this.httpClient.post<any>(Constants.BASE_URI + Constants.USER_SERVICE_URI + 'AddUserDocuments',
			Data, Abstract.getHttpOptions(this.authenticationService.Token))
			.pipe(response => response);
	}

	UpdateUserJobTitle(Data: any) {
		return this.httpClient.post<any>(Constants.BASE_URI + Constants.USER_SERVICE_URI + 'UpdateUserJobTitle',
			Data, Abstract.getHttpOptions(this.authenticationService.Token))
			.pipe(response => response);
	}

	GetCandidatesList(Data: any) {

		return this.httpClient.post<any>(Constants.BASE_URI + Constants.USER_SERVICE_URI + 'GetCandidatesList',
			Data, Abstract.getHttpOptions(this.authenticationService.Token))
			.pipe(response => response);
	}

	UploadDocumentUsingURL(FileURL: string) {
		let obj = { "FileURL": FileURL }
		return this.httpClient.post<any>(Constants.BASE_URI + Constants.USER_SERVICE_URI + 'UploadDocumentUsingURL?FileURL=' + FileURL,
			obj, Abstract.getHttpOptions(this.authenticationService.Token))
			.pipe(response => response);
	}


	CompanyApproval(Data: any) {
		return this.httpClient.post<any>(Constants.BASE_URI + Constants.USER_SERVICE_URI + 'CompanyApproval',
			Data, Abstract.getHttpOptions(this.authenticationService.Token))
			.pipe(response => response);
	}

	GetAddressonZipcode(zipcode: string) {
		return this.httpClient.get<any>(Constants.BASE_URI + Constants.USER_SERVICE_URI + 'GetAddressbyZipcode?zipcode=' + zipcode, Abstract.getHttpOptions(this.authenticationService.Token))
			.pipe(response => response);
	}

	SendEmail(Data: any) {
		return this.httpClient.post<any>(Constants.BASE_URI + Constants.USER_SERVICE_URI + 'SendEmail',
			Data, Abstract.getHttpOptions(this.authenticationService.Token))
			.pipe(response => response);
	}

	GetOrganizationUserProfile(UserID: number) {
		return this.httpClient.get<any>(Constants.BASE_URI + Constants.USER_SERVICE_URI + 'GetOrganizationUserProfile?UserID=' + UserID, Abstract.getHttpOptions(this.authenticationService.Token))
			.pipe(response => response);
	}


	IpayGet1() {
		return this.httpClient.get<any>(
			"https://payments.ipayafrica.com/v3/ke?live=1&oid=112&inv=112&ttl=50&tel=9925707990&eml=janvijoshi134@gmail.com&vid=demo&curr=KES&p1=112&p2=112&p3=112&p4=112&cbk=https://kune.africa/success&cst=1&crl=2&hsh=9889193727b827a882d7a5a21b1f9f1508461875&autopay=0"
			, Abstract.getHttpOptions(this.authenticationService.Token))
			.pipe(response => response);
	}


	IpayGet() {
		return this.httpClient.get<any>(
			"https://payments.ipayafrica.com/v3/ke?live=0&ttl=150&vid=274564654&oid=00001&eml=mukesh.siyana@siyana.com&curr=KES&hsh=2ad67da3a4330a6a7e5413a3585192edf4e4251e92ab855832e652a6dfcc7c19&cst=1&crl=1&tel=+919427245368&cbk=https://localhost:4200/vendor/advertising"
			, Abstract.getHttpOptions(this.authenticationService.Token))
			.pipe(response => response);
	}

	Ipay(reqdata: any) 
	{
		let httpOptions = {};
		httpOptions = {
			headers: new HttpHeaders(
				{
						'Content-Type': 'application/json;charset=utf-8',
						'Access-Control-Allow-Origin': '*',
						'Access-Control-Allow-Credentials': 'true',
						
				}
				)};

		return this.httpClient.post<any>(
			'https://payments.ipayafrica.com/v3/ke',
		//	'https://apis.ipayafrica.com/payments/v2/transact',
			{
				"live": 0,
				"oid": "some-fictitious-id1",
				"inv": "some-fictitious-in1",
				"amount": 10,
				"vid":"demo",
				"curr": "KES",
				"hash":"337595f88a1111fb7dff911fda4e7c35318e53e8f20249458238454dfa6bfd0e"
			}
		, httpOptions		
		)
			.pipe(response => response);
	}
	
}