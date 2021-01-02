import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SearchResult } from '../../search/Models/SearchResult.model';

const YOUTUBE_EMBED_BASE_URL = 'https://www.youtube.com/embed';
@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})
export class VideoViewComponent implements OnInit {

  @Input()
  youtubeVideo$?: Observable<SearchResult>;

  videoUrl$?: Observable<string>;


  constructor() { }

  ngOnInit(): void {
    this.videoUrl$ = this.youtubeVideo$?.pipe(
      map(video => `${YOUTUBE_EMBED_BASE_URL}/${video.id}`)
    );
  }

}
