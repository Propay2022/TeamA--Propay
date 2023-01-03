import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import jsPDF from 'jspdf';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BroadbandComponent } from './broadband/broadband.component';
import { BroadbandplansComponent } from './broadbandplans/broadbandplans.component';
import { PaymentComponent } from './payment/payment.component';
import { ElectricbillComponent } from './electricbill/electricbill.component';
import { DTHComponent } from './dth/dth.component';
import { DthpageComponent } from './dthpage/dthpage.component';
import { GasComponent } from './gas/gas.component';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { FasttagComponent } from './fasttag/fasttag.component';
import { MobilepageComponent } from './mobilepage/mobilepage.component';
import { PlanshomeComponent } from './planshome/planshome.component';

import { InsurancefirstComponent } from './insurancefirst/insurancefirst.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { LpgService } from './services/lpg.service';
import { LpgHistoryComponent } from './lpg-history/lpg-history.component';
import { FasttagHistoryComponent } from './fasttag-history/fasttag-history.component';
import { ElectricityHistoryComponent } from './electricity-history/electricity-history.component';
import { CreditcardHistoryComponent } from './creditcard-history/creditcard-history.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InsuranceHistoryComponent } from './insurance-history/insurance-history.component';
import { MobilerechargeHistoryComponent } from './mobilerecharge-history/mobilerecharge-history.component';
import { DthHistoryComponent } from './dth-history/dth-history.component';
import { BroadbandHistoryComponent } from './broadband-history/broadband-history.component';
import { SuccesspageComponent } from './successpage/successpage.component';
import { BillpaymentpageComponent } from './billpaymentpage/billpaymentpage.component';
import { ProfileComponent } from './profile/profile.component';

const ROUTES: Routes = [
  {path: '', component: LandingpageComponent},
  {path: 'landing', component: LandingpageComponent},
  {path: 'login', component : LoginComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'reset', component: ResetComponent},
  {path: 'mobilepage', component: MobilepageComponent},
  {path: 'dthpage', component: DthpageComponent},
  {path: 'broadband', component: BroadbandComponent},
  {path: 'electricbill', component: ElectricbillComponent},
  {path: 'creditcard', component: CreditcardComponent},
  {path: 'gas', component: GasComponent},
  {path: 'fasttag', component: FasttagComponent},
  {path: 'insurance', component: InsuranceComponent},
  {path: 'planshome/:mob/:ope', component: PlanshomeComponent},

  {path: 'dth/:mob/:ope', component: DTHComponent},
  {path: 'broadbandplans/:mob/:ope', component: BroadbandplansComponent},
  {path: 'insurancefirst', component: InsurancefirstComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'transactions', component: TransactionsComponent },
  {path: 'profile', component: ProfileComponent },
  
  {path: 'gasHistory', component: LpgHistoryComponent},
  {path: 'fasttagHistory', component: FasttagHistoryComponent},
  {path: 'electricityHistory', component: ElectricityHistoryComponent},
  {path: 'creditHistory', component: CreditcardHistoryComponent},
  {path: 'insuranceHistory', component: InsuranceHistoryComponent},
  {path: 'mobileHistory', component: MobilerechargeHistoryComponent},
  {path: 'dthHistory', component: DthHistoryComponent},
  {path: 'broadbandHistory', component: BroadbandHistoryComponent},

  {path: 'successpage', component: SuccesspageComponent},
  {path: 'billpaymentpage', component: BillpaymentpageComponent},


  // {path:'**',component:HomePageComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    BroadbandComponent,
    BroadbandplansComponent,
    PaymentComponent,
    ElectricbillComponent,
    DTHComponent,
    DthpageComponent,
    GasComponent,
    CreditcardComponent,
    InsuranceComponent,
    FasttagComponent,
    MobilepageComponent,
    PlanshomeComponent,

    InsurancefirstComponent,
    HomePageComponent,
    LoginComponent,
    ResetComponent,
    SignupComponent,
    LandingpageComponent,
    TransactionsComponent,
    LpgHistoryComponent,
    FasttagHistoryComponent,
    ElectricityHistoryComponent,
    CreditcardHistoryComponent,
    InsuranceHistoryComponent,
    MobilerechargeHistoryComponent,
    DthHistoryComponent,
    BroadbandHistoryComponent,
    SuccesspageComponent,
    BillpaymentpageComponent,
    ProfileComponent,
  ],
  exports: [RouterModule,MatMenuModule],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  providers: [
    UserService,
    LpgService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
