import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BeneficiariesPayoutComponent } from './beneficiary/beneficiary.component';
import { NgxsModule } from '@ngxs/store';
import { BeneficiariesState } from './beneficiary/beneficiary.state';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgxsModule.forRoot([BeneficiariesState], {
      developmentMode: true,
    }),
  ],
  declarations: [AppComponent, HelloComponent, BeneficiariesPayoutComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
