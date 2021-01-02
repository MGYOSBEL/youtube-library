import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoViewComponent } from './video-view/video-view.component';
import { SafePipe } from './pipes/safe.pipe';
import { FavoriteSelectorComponent } from './favorite-selector/favorite-selector.component';
import { MaterialComponentsModule } from '../material-components/material-components.module';



@NgModule({
  declarations: [
    VideoViewComponent,
    SafePipe,
    FavoriteSelectorComponent
  ],
  imports: [
    CommonModule,
    MaterialComponentsModule
  ],
  exports: [
    VideoViewComponent,
    FavoriteSelectorComponent
  ]
})
export class VideoModule { }
