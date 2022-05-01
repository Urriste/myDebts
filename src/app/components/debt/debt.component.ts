import { Component, Input, OnInit } from '@angular/core';
import { Debt } from 'src/app/models/debt.model';

@Component({
  selector: 'app-debt',
  templateUrl: './debt.component.html',
  styleUrls: ['./debt.component.scss']
})
export class DebtComponent implements OnInit {

  @Input() debt!: Debt;


  constructor() { }

  ngOnInit(): void {
  }

}
