import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SearchModule } from '../search/search.module';
import { VideoModule } from '../video/video.module';
import {MaterialComponentsModule} from '../material-components/material-components.module';


@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    SearchModule,
    VideoModule,
    MaterialComponentsModule
  ],
  exports: [
    MainLayoutComponent
  ]
})
export class MainLayoutModule { }
