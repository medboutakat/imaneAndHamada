import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { IntroComponent } from './intro/intro.component';
import { HomeComponent } from './home/home.component';
// import { BlogModule } from './BlogModule/Blog.Module';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'Intro',
    component:IntroComponent,
    pathMatch:'full'
  },
  {
    path:'blog',
    component:BlogComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
