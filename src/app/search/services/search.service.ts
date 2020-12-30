import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SearchResult } from '../Models/SearchResult.model';

export const YOUTUBE_API_KEY = environment.YOUTUBE_API_KEY;
export const YOUTUBE_API_URL = environment.YOUTUBE_API_URL;

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(
    private http: HttpClient,
  ) {}


  searchById(query: string): Observable<SearchResult> {
    const params: string = [
      `part=id,snippet`,
      `id=${query}`,
      `key=${YOUTUBE_API_KEY}`
    ].join('&');
    const queryUrl = `${YOUTUBE_API_URL}/videos?${params}`;
    return this.http.get(queryUrl).pipe(
      map((response: any) => {
        const items = response['items'].map((item: any) => {
          return new SearchResult({
            id: item.id,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnailUrl: item.snippet.thumbnails.default.url
          });
        });
        return items[0];
      }));
  }


  validateUrlAndExtractId(url: string): string {
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      return match[2];
    }
    return '';
  }

}


