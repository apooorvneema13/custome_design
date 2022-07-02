import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Abstract, Constants } from "../../helper";
@Injectable({
    providedIn: 'root'
})
export class MasterService {
    constructor(
        private httpClient: HttpClient,
        public router: Router,
        //private authenticationService: AuthenticationService
    ) {

    }
    GetConfigurationMetaData() {
        return this.httpClient.post<any>(Constants.BASE_URI + Constants.MASTER_SERVICE_URI + 'GetConfigurationMetaData',
            {}, Abstract.getHttpOptions("", false))
            .pipe(response => response);
    }

    UploadImageDocument(payload: any) {
		return this.httpClient.post<any>(Constants.BASE_URI + 'v1/Master/UploadDocument', payload)
			.pipe(response => response);
	}
    
    resumeparsing(payload: any) {
		 return this.httpClient.post<any>(Constants.BASE_URI + 'v1/Master/resumeparsing', payload)
		 	.pipe(response => response);

        // return this.httpClient.get<any>("assets/fakeData/resume6.json")
        // .pipe(response => response);
	}

    getcodecountries() 
    {
       return this.httpClient.get<any>("assets/fakeData/countries.json")
       .pipe(response => response);
   }

}