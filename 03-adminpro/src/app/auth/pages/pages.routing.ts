import { Routes, RouterModule } from "@angular/router"
import { NgModule } from "@angular/core";

import { PagesComponent } from "src/app/pages/pages.component";
import { DashboardComponent } from "src/app/pages/dashboard/dashboard.component";
import { ProgressComponent } from "src/app/pages/progress/progress.component";
import { Grafica1Component } from "src/app/pages/grafica1/grafica1.component";
import { AccountSettingsComponent } from "src/app/pages/account-settings/account-settings.component";

    const routes: Routes = [
        {
            path: 'dashboard',
            component: PagesComponent,
            children: [
                { path: 'dashboard', component: DashboardComponent },
                { path: 'progress', component: ProgressComponent },
                { path: 'grafica1', component: Grafica1Component },
                { path: 'account-settings', component: AccountSettingsComponent},
                { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
            ]
    },


];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],    
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}
