import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InvestmentService } from '../services/investment.service';

import type { InvestmentInput } from '../shared/models/investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  // enteredInitialInvestment = '0'; // We set initial value as string because input by default converts its value to string
  // enteredAnnualInvestment = '0';
  // enteredExpectedReturn = '5';
  // enteredDuration = '10';

  // Using signals
  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  // @Output() calculate = new EventEmitter<InvestmentInput>();

  // Using signal output
  // calculate = output<InvestmentInput>();

  constructor(private investmentService: InvestmentService){}

  onSubmit() {
    // const data = {
    //   initialInvestment: +this.enteredInitialInvestment,
    //   duration: +this.enteredDuration,
    //   expectedReturn: +this.enteredExpectedReturn,
    //   annualInvestment: +this.enteredAnnualInvestment
    // }

    // Using Signals
    const data = {
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment()
    }

    // this.calculate.emit(data);
    
    // Using Service
    this.investmentService.calculateInvestmentResults(data)

    // Reset values after submission
    this.enteredInitialInvestment.set('0');
    this.enteredDuration.set('10');
    this.enteredExpectedReturn.set('5');
    this.enteredAnnualInvestment.set('0');
  }
}
