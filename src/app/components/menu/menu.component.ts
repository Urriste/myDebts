import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private appService: AppService) { }

  emitMenuState() {

    this.appService.emitMenuState.emit(false);

  }

  ngOnInit(): void {
  }

}
