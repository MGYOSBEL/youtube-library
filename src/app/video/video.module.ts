import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoViewComponent } from './video-view/video-view.component';
import { SafePipe } from './pipes/safe.pipe';



@NgModule({
  declarations: [VideoViewComponent, SafePipe],
  imports: [
    CommonModule
  ],
  exports: [
    VideoViewComponent
  ]
})
export class VideoModule { }
