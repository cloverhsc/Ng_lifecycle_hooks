import { Component } from '@angular/core';

import { LoggerService }  from './logger.service';

@Component({
  selector: 'app-spy-parent',
  templateUrl: 'spy.component.html',
  styles: [
     '.parent {background: khaki;}',
     '.heroes {background: LightYellow; padding: 0 8px}'
  ],
  providers:  [LoggerService]
})
export class SpyParentComponent {
  newName = 'Herbie';
  heroes: string[] = ['Windstorm', 'Magneta'];
  spyLog: string[];

  constructor(private logger: LoggerService) {
    this.spyLog = logger.logs;
  }

  addHero() {
    if (this.newName.trim()) {
      this.heroes.push(this.newName.trim());
      this.newName = '';
      this.logger.tick();
    }
  }
  removeHero(hero: string) {
    this.heroes.splice(this.heroes.indexOf(hero), 1);
    this.logger.tick();
  }
  reset() {
    this.logger.log('-- reset --');
    this.heroes.length = 0;
    this.logger.tick();
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
