import { MapsAPILoader } from '@agm/core';
import { Component, ElementRef, EventEmitter, Input, NgZone, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'mj-google-organization-autocomplete',
  templateUrl: './mj-google-organization-autocomplete.component.html',
  styleUrls: ['./mj-google-organization-autocomplete.component.scss']
})
export class MjGoogleOrganizationAutocompleteComponent implements OnInit {
  @Input() OrganizationName: string = '';
  @Input() placeholder: string = '';
  @Input() validationclass: string= '';

  
  @Output() onfocustout = new EventEmitter<any>();
  @Output() onAutocomplit = new EventEmitter<any>();
  @ViewChild('searchOrganizationName') public searchOrganizationName!: ElementRef;
  constructor(private mapsAPILoader: MapsAPILoader,
    public zone: NgZone,) { }

  ngOnInit(): void 
  {
    this.mapsAPILoader.load().then(() => {
      // this.geoCoder = new google.maps.Geocoder;
      let autocomplete = new google.maps.places.Autocomplete(this.searchOrganizationName.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.zone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          setTimeout(() => {
            this.searchOrganizationName.nativeElement.value = place.name;
            console.log(JSON.stringify(place));
            this.onAutocomplit.emit(place);
            // this.selobjWorkExperience.JobLocation = GoogleHelper.getCity(place) + ", " + GoogleHelper.getStateLong(place) + ", " + GoogleHelper.getCountry(place);
            // if (place.photos != undefined && place.photos.length > 0) {
            //   this.selobjWorkExperience.OrganizationMediaURL = place.photos[0].getUrl({ 'maxWidth': 500, 'maxHeight': 500 });
            // }
            // else {
            //   this.selobjWorkExperience.OrganizationMediaURL = "assets/images/img4.png";
            // }
          }, 100);
          // if (place.geometry === undefined || place.geometry === null) {
          //   return;
          // }
        });
      });


    });

  }

  focusout()
  {
    // if(this.OrganizationName==undefined || this.OrganizationName==null || this.OrganizationName=="" )
    // {
      this.onfocustout.emit(this.OrganizationName);
    //}
    
  }

}
