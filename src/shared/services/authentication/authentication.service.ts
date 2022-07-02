import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { ContentType, Constants, Abstract } from '../../helper';
import { LoginResponse } from '../../model/fake/fakeDataModel';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    constructor(
        private httpClient: HttpClient,
        public router: Router
      ) { }

  //private loggedInUser; 
//   get LoggedInUser() {
//     return  (<LoginResponse>JSON.parse(localStorage.getItem(Abstract.Logged_User)));
//   }

  //private userToken; 
  get Token() {
    let _loginResponse = (<LoginResponse>JSON.parse(localStorage.getItem(Abstract.Logged_User)  || '{}'));
    if (_loginResponse == null && _loginResponse == undefined) {
        _loginResponse = new LoginResponse();
    }
    return _loginResponse.Token;
  }
  set Token(Token) {
    let _loginResponse = (<LoginResponse>JSON.parse(localStorage.getItem(Abstract.Logged_User ) || '{}'));
    if (_loginResponse == null && _loginResponse == undefined) {
        _loginResponse = new LoginResponse();
    }
    _loginResponse.Token = Token;
    localStorage.setItem(Abstract.Logged_User, JSON.stringify(_loginResponse, function replacer(key, value) { return value }));
  }

  //private authenticated; 
//   get Authenticated() {
//     let _loginResponse = (<LoginResponse>JSON.parse(localStorage.getItem(Abstract.Logged_User)  || '{}'));
//     if (_loginResponse == null && _loginResponse == undefined) {
//         _loginResponse = new LoginResponse();
//     }
//     return _loginResponse.Authenticated;
//   }
//   set Authenticated(authenticated) {
//     let _loginResponse = (<LoginResponse>JSON.parse(localStorage.getItem(Abstract.Logged_User)  || '{}'));
//     if (_loginResponse == null && _loginResponse == undefined) {
//         _loginResponse = new LoginResponse();
//     }

//     _loginResponse.Authenticated = authenticated;
//     localStorage.setItem(Abstract.Logged_User, JSON.stringify(_loginResponse, function replacer(key, value) { return value }));
//   }

//   private userLoginType; 
//   get UserLoginType() {
//     let _loginResponse = (<LoginResponse>JSON.parse(localStorage.getItem(Abstract.Logged_User)));
//     if (_loginResponse == null && _loginResponse == undefined) {
//         _loginResponse = new LoginResponse();
//     }
//     return _loginResponse.UserLoginType;
//   }
//   set UserLoginType(userLoginType) {
//     let _loginResponse = (<LoginResponse>JSON.parse(localStorage.getItem(Abstract.Logged_User)));
//     if (_loginResponse == null && _loginResponse == undefined) {
//         _loginResponse = new LoginResponse();
//     }
//     _loginResponse.UserLoginType = userLoginType;
//     localStorage.setItem(Abstract.Logged_User, JSON.stringify(_loginResponse, function replacer(key, value) { return value }));
//   }

//   private userCountry; 
//   get UserCountry() {
//     let _loginResponse = (<LoginResponse>JSON.parse(localStorage.getItem(Abstract.Logged_User)));
//     if (_loginResponse == null && _loginResponse == undefined) {
//         _loginResponse = new LoginResponse();
//     }
//     return _loginResponse.UserCountry;
//   }
//   set UserCountry(userCountry) {
//     let _loginResponse = (<LoginResponse>JSON.parse(localStorage.getItem(Abstract.Logged_User)));
//     if (_loginResponse == null && _loginResponse == undefined) {
//         _loginResponse = new LoginResponse();
//     }
//     _loginResponse.UserCountry = userCountry;
//     localStorage.setItem(Abstract.Logged_User, JSON.stringify(_loginResponse, function replacer(key, value) { return value }));
//   }

//     private userCategory;
//     get UserCategory() {
//         let _loginResponse = (<LoginResponse>JSON.parse(localStorage.getItem(Abstract.Logged_User)));
//         if (_loginResponse == null && _loginResponse == undefined) {
//             _loginResponse = new LoginResponse();
//         }
//         return _loginResponse.UserCategory;
//     }
//     set UserCategory(userCategory) {
//         let _loginResponse = (<LoginResponse>JSON.parse(localStorage.getItem(Abstract.Logged_User)));
//         if (_loginResponse == null && _loginResponse == undefined) {
//             _loginResponse = new LoginResponse();
//         }
//         _loginResponse.UserCategory = userCategory;
//         localStorage.setItem(Abstract.Logged_User, JSON.stringify(_loginResponse, function replacer(key, value) { return value }));
//     }

//   private userSocialProfile; 
//   get UserSocialProfile() {
//     return sessionStorage.getItem(Constants.USER_SOCIAL_PROFILE);
//   }
//   set UserSocialProfile(userSocialProfile) {
//     sessionStorage.setItem(Constants.USER_SOCIAL_PROFILE, userSocialProfile);
//   }

//   private userEntityID;
//     get UserEntityID() {
//         let _loginResponse = (<LoginResponse>JSON.parse(localStorage.getItem(Abstract.Logged_User)));
//         if (_loginResponse == null && _loginResponse == undefined) {
//             _loginResponse = new LoginResponse();
//         }
//         return _loginResponse.UserEntityID;
//     }
//     set UserEntityID(userEntityID) {
//         let _loginResponse = (<LoginResponse>JSON.parse(localStorage.getItem(Abstract.Logged_User)));
//         if (_loginResponse == null && _loginResponse == undefined) {
//             _loginResponse = new LoginResponse();
//         }
//         _loginResponse.UserEntityID = userEntityID;
//         localStorage.setItem(Abstract.Logged_User, JSON.stringify(_loginResponse, function replacer(key, value) { return value }));
//     }

 

//   login(loginRequest: LoginRequest) {
//     let payload = {
//       "userName": loginRequest.username,
//       "password": loginRequest.password,
//       "logintype": (<LoginResponse>(<unknown>sessionStorage.getItem(Constants.USER_TOKEN))).UserLoginType
//     };

//     return this.httpClient.post<any>(Constants.BASE_URI + Constants.USER_SERVICE_URI + 'login', payload)
//       .pipe(response => response);
//   }

//   logout() {
//     const userId = <LoginResponse>JSON.parse(sessionStorage.getItem(Constants.USER_TOKEN)).LoggedInUser.UserEntityID;
//     const userType = <LoginResponse>JSON.parse(sessionStorage.getItem(Constants.USER_TOKEN)).LoggedInUser.UserType;

//     let payload = {
//       "userId": userId,
//       "userType": userType
//     };

//     // return this.httpClient.post(Constants.BASE_URI + Constants.USER_SERVICE_URI + 'logout', payload)
//     //   .pipe(response => response);
//     return this.httpClient.get<any>(Constants.BASE_URI + Constants.USER_SERVICE_URI +
//       'logout?userId=' + userId + '&userType=' + userType)
//       .pipe(response => response);
//   }

//   forgotPassword(forgetPasswordRequest: ForgetPasswordRequest) {
//     let payload = {
//       "phoneNumber": forgetPasswordRequest.PhoneNumber,
//       "password": forgetPasswordRequest.Password,
//       "countryCode": forgetPasswordRequest.CountryCode
//     };

//     return this.httpClient.post(Constants.BASE_URI + Constants.USER_SERVICE_URI + 'forgotpassword', payload)
//       .pipe(response => response);
//   }

//   async validateToken(): Promise<any> {
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type': ContentType.ApplicationJSON,
//         'DeviceType': 'Web',
//         'Authorization': 'Bearer ' + this.UserToken
//       })
//     };

//     let params = new HttpParams()
//     params.set(Constants.USER_TOKEN, this.UserToken);

//     try {
//       const response = await this.httpClient.get(Constants.BASE_URI + Constants.AUTHENTICATE_SERVICE_URI + 'validateToken', httpOptions)
//         .toPromise()
//       return await response;
//     } catch (error) {
//       return await false;
//     }
//   }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
