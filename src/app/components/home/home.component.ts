import { Component, OnInit } from '@angular/core';
import { getAuth } from 'firebase/auth';
import { AppService } from 'src/app/services/app.service';
import { getDatabase, ref, child, get } from "firebase/database";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  auth: any = getAuth();
  name: String = "";
  email: String = "";
  debts: any[] = [];
  total: number = 0;
  isMenuOpen: boolean = false;


  constructor(private appService: AppService) { }

  ngOnInit(): void {
    if (this.auth.currentUser) {
      console.log(this.auth.currentUser)
      this.name = this.auth.currentUser.displayName;
      this.email = this.auth.currentUser.email;
      this.email = this.email.split("@")[0];

    }

    this.appService.emitMenuState.subscribe((res: boolean) => {
      this.isMenuOpen = res;
    })

    this.getDebt();

  }

  getDebt() {

    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${this.email}`)).then((snapshot) => {
      if (snapshot.exists()) {

        snapshot.forEach((item) => {

          this.total += item.val().amount;
          this.debts.push(item.val());

        })
        console.log("debts", this.debts)

      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }


}
