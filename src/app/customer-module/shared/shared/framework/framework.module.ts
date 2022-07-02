import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask'
// import { AgmCoreModule } from '@agm/core';
import { MjGoogleAutocompleteComponent } from './mj-google-autocomplete/mj-google-autocomplete.component';
import { Constants } from '../helper/constants';
import { MjGoogleOrganizationAutocompleteComponent } from './mj-google-organization-autocomplete/mj-google-organization-autocomplete.component';

@NgModule({
  declarations: [
    MjGoogleAutocompleteComponent,
    MjGoogleOrganizationAutocompleteComponent,
  ],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    // AgmCoreModule.forRoot({
    //   apiKey: Constants.GOOGLE_MAP_KEY,
    //   libraries: ['geometry', 'places']
    // }),
   
  ],
  exports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    MjGoogleAutocompleteComponent,
    MjGoogleOrganizationAutocompleteComponent,
  ],
  providers: [
    DatePipe
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class FrameworkModule {
  constructor(
    //library: FaIconLibrary
    ) {
    // // Add an icon packs to the library for convenient access in other components
    // library.addIconPacks(fas, far);
    // // Add an icon to the library for convenient access in other components
    // library.addIcons(faFilter, faCalendar, faCalendarAlt, faEdit, faTrash);
  }
}
