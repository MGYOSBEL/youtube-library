import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, filter, map, switchMap, tap } from 'rxjs/operators';
import { SearchService } from '../services/search.service';
import { VideoService } from '../../video/services/video.service';
import { HistoryService } from '../../video/services/history.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchFrom: FormGroup;

  urlFormControl: AbstractControl;

  constructor(
    private formBuilder: FormBuilder,
    private searchService: SearchService,
    private videoService: VideoService,
    private historyService: HistoryService
  ) {
    this.searchFrom = this.formBuilder.group({
      urlFormControl: ['', Validators.required]
    });

    this.urlFormControl = this.searchFrom.controls.urlFormControl;
  }

  ngOnInit(): void {
    this.urlFormControl.valueChanges.pipe(
      debounceTime(500),
      map(url => this.searchService.validateUrlAndExtractId(url)),
      filter(id =>  id.length > 0),
      switchMap(id => this.searchService.searchById(id)),
      tap(result => this.historyService.add(result))
    ).subscribe(
      searchResult => this.videoService.play(searchResult.id)
    );

  }

}
