import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PrincipalPageComponent } from './principal-page/principal-page.component';

const routes: Routes = [
  {path: "", component: HomepageComponent},
  {path: "homepage", component: HomepageComponent},
  {path: "mainmenu", component: MainMenuComponent},
  {path: "principalpage", component: PrincipalPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
