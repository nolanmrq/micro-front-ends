import {Component, Inject} from '@angular/core';
import {Logger, LOGGER} from "./logger.service";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'lib-log-module',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: 'log-module.component.html'
})
export class LogModuleComponent {

  constructor(
    @Inject(LOGGER) public logger: Logger
  ) {
  }
}
