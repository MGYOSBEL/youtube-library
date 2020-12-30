import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

constructor() { }

load(key: string): object {
  const cached = localStorage.getItem(key);
  if (!cached) {
    return [];
  }
  return JSON.parse(cached);
}

save(key: string, element: object): void {
  const cacheable = JSON.stringify(element);
  localStorage.setItem(key, cacheable);
}

}
