import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';
import { getDatabase, push, ref, set } from "firebase/database";
import { Debt } from 'src/app/models/debt.model';
import { getAuth } from 'firebase/auth';


@Component({
  selector: 'app-add-debt',
  templateUrl: './add-debt.component.html',
  styleUrls: ['./add-debt.component.scss']
})
export class AddDebtComponent implements OnInit {

  isMenuOpen: boolean = false;
  dataForm!: FormGroup;
  auth: any = getAuth();





  constructor(private appService: AppService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.initForm();

    this.appService.emitMenuState.subscribe((res: boolean) => {
      this.isMenuOpen = res;
    })


  }

  addDebt(debt: Debt, userName: String) {

    const db: any = getDatabase();
    const debtListRef = ref(db, 'users/' + userName);
    const newDebtRef = push(debtListRef);
    set(newDebtRef, {
      name: debt.name,
      amount: debt.amount,
      date: debt.date,
    })


  }


  submit() {

    let userName: String = "";
    let debt: Debt;

    if (this.auth.currentUser) {
      userName = this.auth.currentUser.email;
    }

    if (this.dataForm.valid) {
      const { name, amount, date } = this.dataForm.value;
      debt = new Debt(name, amount, date);

      this.addDebt(debt!, userName);
    }


  }

  initForm() {
    this.dataForm = this.fb.group({
      name: ["", Validators.required],
      amount: ["", Validators.required],
      date: ["", Validators.required]
    })

  }

}
