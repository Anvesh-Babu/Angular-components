import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authorization/login/login.component';
import { RegisterComponent } from './authorization/register/register.component';
import { SingleMediaComponent } from './upload media/single-media/single-media.component';
import {  GalleryComponent } from './my media/gallery/gallery.component';
import { FollowersFollowingComponent } from './following/folowers/followers-following/followers-following.component';
import { AccountUpdateComponent } from './account details/account-update/account-update.component';


const routes: Routes = [
  { path:"", redirectTo : "login", pathMatch: "full"},
  { path: 'login', component:LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path:'upload', component:SingleMediaComponent},
  { path:'mymedia', component: GalleryComponent},
  {path: 'followers', component: FollowersFollowingComponent},
  {path:'account', component: AccountUpdateComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
