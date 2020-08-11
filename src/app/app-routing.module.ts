import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MailComponent } from './mail/mail.component';
import { InboxComponent } from './inbox/inbox.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './Register/Register.component';
import { SentComponent } from './Sent/Sent.component';
import { BannerComponent } from './banner/banner.component';
import { TrashComponent } from './trash/trash.component';
import { ReadComponent } from './read/read.component';
import { TaskComponent } from './task/task.component';


const routes: Routes = [
  { path: '', component: BannerComponent },
  { path: 'mail', component: MailComponent },
  { path: 'inbox', component: InboxComponent },
  { path: 'trash', component: TrashComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Sent', component: SentComponent },
  { path: 'read/:id', component: ReadComponent },
  { path: 'banner', component: BannerComponent },
  { path: 'task', component: TaskComponent },


  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
