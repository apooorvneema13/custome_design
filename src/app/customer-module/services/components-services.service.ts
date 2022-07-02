import {
  HttpClient,
  HttpHeaders,
  JsonpClientBackend,
} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ComponentsServicesService {
  url = 'http://139.59.21.147:8080'
  constructor(   private router: Router,
    private http: HttpClient,

    ) { }


    getGlobalfunctionColor()
    {


      return this.http.get<any>(this.url+'api/customers/color')
    }
}
