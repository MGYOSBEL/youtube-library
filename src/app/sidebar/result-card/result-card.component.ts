import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchResult } from '../../search/Models/SearchResult.model';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss']
})
export class ResultCardComponent implements OnInit {
  @Output()
  cardClicked = new EventEmitter<SearchResult>();

  @Input()
  result!: SearchResult;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.cardClicked.emit(this.result);
  }

}
