import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { EditorModule } from '@tinymce/tinymce-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DataTableModule } from "angular2-datatable";
import { DataFilterPipe } from './components/book-list/data.filter.pipe';
import { routing } from './app.routing';

import 'hammerjs';

import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';
import { PaymentService } from './services/payment.service';
import { ShippingService } from './services/shipping.service';
import { BookService } from './services/book.service';
import { CartService } from './services/cart.service';
import { OrderService } from './services/order.service';
import { CheckoutService } from './services/checkout.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { LogoComponent } from './components/logo/logo.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { OrderComponent } from './components/order/order.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { FooterComponent } from './components/footer/footer.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    MyAccountComponent,
    LogoComponent,
    MyProfileComponent,
    BookListComponent,
    DataFilterPipe,
    BookDetailComponent,
    ShoppingCartComponent,
    OrderComponent,
    OrderSummaryComponent,
    FooterComponent,
    CurriculumComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    DataTableModule,
    EditorModule,
    routing
  ],
  providers: [
  LoginService,
  UserService,
  PaymentService,
  ShippingService,
  BookService,
  CartService,
  OrderService,
  CheckoutService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
