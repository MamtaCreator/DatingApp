import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberDetailsComponent } from '../members/member-details/member-details.component';
import { MemberListComponent } from '../members/member-list/member-list.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'members', component: MemberListComponent },
  { path: 'members/:id', component: MemberDetailsComponent },
  { path: 'lists', component: ListComponent, canActivate: [AuthGuard] },
  { path: 'messages', component: MessagesComponent },
  { path: '**', component: HomeComponent, pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
