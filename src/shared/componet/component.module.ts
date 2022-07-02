import { NgModule,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ComponentRoutingModule } from './component-routing.module';
// import { MessageModule, MessageService, MessagesModule, ToastModule } from 'primeng';
import {MessageService} from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';

import { CompHeaderComponent } from './comp-header/comp-header.component';
import { CompFooterComponent } from './comp-footer/comp-footer.component';


@NgModule({
  declarations: [
    CompHeaderComponent,
    CompFooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    ComponentRoutingModule,
    MessagesModule,
    MessageModule,
    ToastModule,
  ],
  exports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    CompHeaderComponent,
    CompFooterComponent
  ],
  providers: [
    MessageService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class ComponentModule { }
