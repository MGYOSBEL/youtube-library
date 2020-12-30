import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VideoService } from '../../video/services/video.service';


@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  videoUrl$: Observable<string>;

  constructor(
    private videoService: VideoService
  ) {
    this.videoUrl$ = this.videoService.videoUrl$;
  }

  ngOnInit(): void {
  }

}
