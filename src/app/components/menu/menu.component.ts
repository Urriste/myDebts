import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { getAuth, signOut } from 'firebase/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {



  constructor(private appService: AppService, private router: Router) { }

  emitMenuState() {

    this.appService.emitMenuState.emit(false);

  }

  ngOnInit(): void {
  }

  logout() {
    let auth: any = getAuth();
    signOut(auth).then(() => {
      this.router.navigate(["/login"])
    })
  }

}
