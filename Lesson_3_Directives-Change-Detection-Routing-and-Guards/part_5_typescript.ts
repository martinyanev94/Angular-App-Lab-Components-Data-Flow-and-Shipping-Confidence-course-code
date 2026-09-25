import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { CatalogBrowseComponent } from './catalog-browse.component';

import { CatalogDetailComponent } from './catalog-detail.component';

import { CatalogManageComponent } from './catalog-manage.component';

import { CheckCredentials } from './check-credentials';



const appRoutes: Routes = [

  { path: '', redirectTo: 'browse', pathMatch: 'full' },

  { path: 'browse', component: CatalogBrowseComponent },

  { path: 'detail/:id', component: CatalogDetailComponent },

  {

    path: 'manage',

    component: CatalogManageComponent,

    canActivate: [CheckCredentials]

  }

];



@NgModule({

  imports: [RouterModule.forRoot(appRoutes)],

  exports: [RouterModule]

})

export class AppRoutingModule {}
