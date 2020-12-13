import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FilterBoxComponent } from './filter-box/filter-box.component';
import { FormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';


@NgModule({
  declarations: [HomeComponent, FilterBoxComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ToastModule
  ]
})
export class HomeModule { }
