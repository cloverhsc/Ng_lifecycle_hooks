import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SpyDirective } from './spy.directive';
import { SpyParentComponent }   from './spy.component';
import { OnChangesComponent, OnChangesParentComponent } from './on-changes.component';
import {
    AfterViewParentComponent,
    AfterViewComponent,
    ChildViewComponent
} from './after-view.component';

// service
import { LoggerService }    from './logger.service';

@NgModule({
  declarations: [
    AppComponent,
    SpyDirective,
    SpyParentComponent,
    OnChangesComponent,
    OnChangesParentComponent,
    AfterViewParentComponent,
    AfterViewComponent,
    ChildViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
