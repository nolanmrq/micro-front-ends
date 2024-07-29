import {Component, Inject} from '@angular/core';
import {Logger, LOGGER} from "./logger.service";
import {AsyncPipe} from "@angular/common";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatList, MatListItem, MatListItemLine, MatListItemTitle} from "@angular/material/list";
import {MatHint} from "@angular/material/form-field";

@Component({
  selector: 'lib-log-module',
  standalone: true,
  imports: [
    AsyncPipe,
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
    MatList,
    MatListItem,
    MatListItemTitle,
    MatListItemLine,
    MatHint
  ],
  templateUrl: 'log-module.component.html'
})
export class LogModuleComponent {

  constructor(
    @Inject(LOGGER) public logger: Logger
  ) {
  }
}
