import { Component, signal } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { UserInputComponent } from './user-input/user-input.component';

import type { InvestmentInput } from './shared/models/investment-input.model';
import type { InvestmentResult } from './shared/models/investment-result.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, InvestmentResultsComponent, UserInputComponent]
})
export class AppComponent {
  // resultsData = signal<InvestmentResult[] | undefined>(undefined); // This is can be signal because this variable state depends on the state of user

}
