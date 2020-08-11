import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MailComponent } from './mail/mail.component';
import { InboxComponent } from './inbox/inbox.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './Register/Register.component';
import { SentComponent } from './Sent/Sent.component';
import { HttpClientModule } from '@angular/common/http';
import { AngthemeService } from './angtheme.service';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { BannerComponent } from './banner/banner.component';
import { TrashComponent } from './trash/trash.component';
import { ReadComponent } from './read/read.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    MailComponent,
    InboxComponent,
    LoginComponent,
    RegisterComponent,
    SentComponent,
    BannerComponent,
    TrashComponent,
    ReadComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()


  ],
  providers: [AngthemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
