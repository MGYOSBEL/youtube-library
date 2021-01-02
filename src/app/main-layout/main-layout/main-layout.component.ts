import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VideoService } from '../../video/services/video.service';
import { SearchResult } from '../../search/Models/SearchResult.model';


@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  video$: Observable<SearchResult>;

  constructor(
    private videoService: VideoService
  ) {
    this.video$ = this.videoService.video$;
  }

  ngOnInit(): void {
  }

}
