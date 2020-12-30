import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultCardComponent } from './result-card/result-card.component';
import { ResultsListComponent } from './results-list/results-list.component';



@NgModule({
  declarations: [
    ResultCardComponent,
    ResultsListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ResultsListComponent,
    ResultCardComponent
  ]
})
export class SidebarModule { }
