import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  @Output() emitMenuState = new EventEmitter<boolean>();


  constructor() { }
}
