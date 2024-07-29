import {Component, Inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LOGGER, Logger, LogModuleComponent} from "log-module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LogModuleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(
    @Inject(LOGGER) logger: Logger
  ) {
    let count = 0;
    setInterval(() => {
      count++;
      logger.log = `Message n°${count}`;
    }, 2000)
  }
}
