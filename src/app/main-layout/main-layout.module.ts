import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SearchModule } from '../search/search.module';
import { VideoModule } from '../video/video.module';


@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    SearchModule,
    VideoModule,
  ],
  exports: [
    MainLayoutComponent
  ]
})
export class MainLayoutModule { }
