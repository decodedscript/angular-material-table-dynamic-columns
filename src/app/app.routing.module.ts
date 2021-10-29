import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MainShellComponent } from '@shared/fragments/main-shell/main-shell.component'

const routes: Routes = [
  {
    path: '',
    component: MainShellComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@components/dashboard/dashboard.module').then(
            (m) => m.DashboardModule,
          ),
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRouteModule {}
