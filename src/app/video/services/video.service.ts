import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchResult } from '../../search/Models/SearchResult.model';


@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private videoSubject = new BehaviorSubject<SearchResult>(new SearchResult());
  video$ = this.videoSubject.asObservable();

  constructor(
  ) { }

  play(youtubeVideo: SearchResult): void {
    this.videoSubject.next(youtubeVideo);
  }

}
