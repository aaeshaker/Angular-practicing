import { Component, computed, inject, Input, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { InvestmentService } from '../services/investment.service';

import type { InvestmentResult } from '../shared/models/investment-result.model';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  // results = input <..> ();
  // @Input() results?: InvestmentResult[];

  // using signal input
  // results = input<InvestmentResult[] | undefined>(undefined);

  // Using Service
  private investmentService = inject(InvestmentService);

  // Simple getter
  // get results() {
  //   return this.investmentService.resultsData;
  // }

  // We can use computed instead of simple getter to react to a signal value and it'll be read-only by default to make sure that the value can't be accidentally changed outside the service
  results = computed(() => this.investmentService.resultsData());
  // Or we can do it in the following way manually
  // results = this.investmentService.resultsData.asReadonly();

}
