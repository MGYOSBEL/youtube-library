import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HistoryService } from './history.service';

const YOUTUBE_EMBED_BASE_URL = 'https://www.youtube.com/embed';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private videoUrlSubject = new BehaviorSubject<string>('');
  videoUrl$ = this.videoUrlSubject.asObservable();

  constructor(
    private historyService: HistoryService
  ) { }

  play(youtubeVideoId: string): void {
    const embedUrl = `${YOUTUBE_EMBED_BASE_URL}/${youtubeVideoId}`;
    this.videoUrlSubject.next(embedUrl);
  }

}
