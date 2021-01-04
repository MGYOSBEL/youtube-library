import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SearchResult } from '../../search/Models/SearchResult.model';
import { CacheService } from './cache.service';

const HISTORY_CACHE_TOKEN = 'history';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private historySubject = new BehaviorSubject<SearchResult[]>([]);
  history$ = this.historySubject.asObservable();

  constructor(private cache: CacheService) {
    const cachedHistory = this.cache.load(HISTORY_CACHE_TOKEN);
    this.historySubject.next(cachedHistory as SearchResult[]);
  }

  add(element: SearchResult): void {
    const history = [...this.historySubject.value];
    const updatedHistory = [element].concat(history);
    this.historySubject.next(updatedHistory);
    this.cache.save(HISTORY_CACHE_TOKEN, updatedHistory);
  }

}
