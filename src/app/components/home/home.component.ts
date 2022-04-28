import { Component, OnInit } from '@angular/core';
import { getAuth } from 'firebase/auth';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  auth: any = getAuth();
  name: String = "";
  debts!: any[];
  isMenuOpen: boolean = false;


  constructor(private appService: AppService) { }

  ngOnInit(): void {
    if (this.auth.currentUser) {
      console.log(this.auth.currentUser)
      this.name = this.auth.currentUser.displayName;
    }

    this.appService.emitMenuState.subscribe((res: boolean) => {
      this.isMenuOpen = res;
    })

  }


}
