import {
  Component, ViewChild, EventEmitter, Input, Output, OnInit, OnChanges, ChangeDetectorRef, SimpleChanges
} from '@angular/core';

// import { } from 'googlemaps';
// import { } from 'google-maps';
import { MapsAPILoader } from "@agm/core";

 //declare var google: any;

@Component({
  selector: 'mj-google-autocomplete',
  templateUrl: './mj-google-autocomplete.component.html',
  styleUrls: ['./mj-google-autocomplete.component.scss']
})
export class MjGoogleAutocompleteComponent implements OnInit, OnChanges {


  // #region properties //

  @Output() setAddress: EventEmitter<any> = new EventEmitter();
  @Output() setfocusout: EventEmitter<any> = new EventEmitter();

  @Input() placeholder: string = 'Enter locaation';
  @Input() disabled: boolean = false;
  @Input() adressType: any = [];
  @Input() defaultCountry: string = 'IN';
  @Output() focustout_toggle = new EventEmitter<any>();
  @Input() rows: number= 1;
  // @Input() specificPlace: boolean = false;
  private _specificPlace: boolean = false;
  @Input() set specificPlace(value: boolean) {
    this._specificPlace = value;
  }
  get specificPlace(): boolean {
    return this._specificPlace;
  }
  // @Input() placeLatLng: any[] = [];
  private _placeLatLng: any[] = [];
  @Input() set placeLatLng(value: any[]) {
    this._placeLatLng = value;
  }
  get placeLatLng(): any[] {
    return this._placeLatLng;
  }

  // autocompleteInput: string;
  private _autocompleteInput: string="";
  @Input() set autocompleteInput(value: string) {
    this._autocompleteInput = value;
  }
  get autocompleteInput(): string {
    return this._autocompleteInput;
  }

  // #endregion properties //

  @ViewChild('addresstext') addresstext: any;

  // #region private variable //

  queryWait: boolean=false;

  // #endregion private variable //

  // #region public variable //

  // #endregion public variable //

  // #region lifecycle hook //

  constructor(
    private cdRef: ChangeDetectorRef,
    private mapsAPILoader: MapsAPILoader) {
    // this.autocompleteInput = (this.selectedValue === undefined || this.selectedValue === null ? '' : this.selectedValue);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['specificPlace'] === undefined || changes['specificPlace'] === null) { }
    else {
      this.specificPlace = changes.specificPlace.currentValue;
      console.log('this.specificPlace = ', this.specificPlace);
      this.setDefaults();
      this.cdRef.detectChanges();
    }

    if (changes['placeLatLng'] === undefined || changes['placeLatLng'] === null) { }
    else {
      this.placeLatLng = changes.placeLatLng.currentValue;
      console.log('this.placeLatLng = ', this.placeLatLng);
      this.setDefaults();
      this.cdRef.detectChanges();
    }

    if (changes['autocompleteInput'] === undefined || changes['autocompleteInput'] === null) { }
    else {
      this.autocompleteInput = changes.autocompleteInput.currentValue;
      console.log('this.autocompleteInput = ', this.autocompleteInput);
      this.cdRef.detectChanges();
    }
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

    this.setDefaults();
    // this.getPlaceAutocomplete();
  }

  // #endregion lifecycle hook //

  // #region lifecycle helper //

  setDefaults() {
    console.log('setDefaults = ', this.specificPlace, this.placeLatLng);

    if (this.specificPlace === undefined || this.specificPlace === null) { }
    else {
      if (!this.specificPlace) {
        console.log('inside google autocomplete (getPlaceAutocomplete) -> ', this.specificPlace);
        this.getPlaceAutocomplete();
      } else {
        console.log('inside google autocomplete (getPlaceAutocomplete) -> ', this.specificPlace, this.placeLatLng, this.placeLatLng[0], this.placeLatLng[1]);
        this.getPlaceAutocompleteByPlace(this.placeLatLng[0], this.placeLatLng[1])
      }
    }
  }

  private getPlaceAutocomplete() {
    if (this.specificPlace) {
      console.log('inside google autocomplete (getPlaceAutocompleteByPlace) -> ', this.specificPlace, this.placeLatLng, this.placeLatLng[0], this.placeLatLng[1]);
      this.getPlaceAutocompleteByPlace(this.placeLatLng[0], this.placeLatLng[1])
    } else {
      console.log('inside google autocomplete (getAllPlaceAutocomplete) -> ', this.specificPlace);
      this.getAllPlaceAutocomplete();
    }
  }

  // private getAllPlaceAutocomplete() {
 
  //   if (this.addresstext?.nativeElement != undefined) {
  //     const autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement,
  //       {
  //         componentRestrictions: { country: this.defaultCountry },
  //         types: [this.adressType]
  //       });

  //     google.maps.event.addListener(autocomplete, 'place_changed', () => {
  //       const place = autocomplete.getPlace();
  //       console.log('inside getAllPlaceAutocomplete...', this.addresstext);
  //       this.invokeEvent(place);
  //     });
  //   }
  // }

  private getAllPlaceAutocomplete() {

    if (this.addresstext?.nativeElement != undefined) {
      // const autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement,
      //   {
      //     types: [this.adressType]
      //   });

      // google.maps.event.addListener(autocomplete, 'place_changed', () => {
      //   const place = autocomplete.getPlace();
      //   this.invokeEvent(place);
      // });
      var options = {
        types: ['establishment']
      };
      const autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement,
        options);

      google.maps.event.addListener(autocomplete, 'place_changed', () => {
        const place = autocomplete.getPlace();
        this.invokeEvent(place);
      });
    }
    else
    {
      this.invokeEvent("");
    }
  }
  
    // #endregion lifecycle helper //

    // #region API call //

    // #endregion API call //

    // #region API helper method //

    // #endregion API helper method //

    // #region Event methods //

    invokeEvent(place: Object) {
      console.log('invokeEvent getPlaceAutocomplete = ', place);

      this.setAddress.emit(place);
    }

  // #endregion Event methods //

  // #region Event helper method //

  private getPlaceAutocompleteByPlace(lat: number, lng: number) {
    console.log("getPlaceAutocompleteByPlace => ", lat, lng)

    const defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(lat, lng)
    );
    if (this.addresstext?.nativeElement != undefined) {
      const autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement,
        {
          componentRestrictions: { country: this.defaultCountry },
          bounds: defaultBounds,
          // strictBounds: true,
          types: [this.adressType]
        });

      google.maps.event.addListener(autocomplete, 'place_changed', () => {
        const place = autocomplete.getPlace();
        console.log('inside getPlaceAutocompleteByPlace -> ', this.addresstext, ' | lat = ', lat, ' | lng = ', lng);
        this.invokeEvent(place);
      });
    }
  }
  onfocusout()
  {
    
    this.setfocusout.emit(this.autocompleteInput);
  }
  // #endregion Event helper method //

  // #region other method //

  // #endregion other method //
}
