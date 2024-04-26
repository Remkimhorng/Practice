import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoleComponent } from './settings/role/role.component';
import { UserComponent } from './settings/user/user.component';
import { SettingsComponent } from './settings/settings.component';
import { MenuComponent } from './settings/menu/menu.component';
import { TableComponent } from './settings/table/table.component';
import { StockComponent } from './settings/stock/stock.component';
import { IngredientComponent } from './settings/ingredient/ingredient.component';
import { CategoryComponent } from './settings/category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './settings/profile/profile.component';
import { ThemeComponent } from './components/theme/theme.component';
import { TableDineInComponent } from './home/table-dine-in/table-dine-in.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ForgetPasswordComponent } from './authentication/forget-password/forget-password.component';
import { ConfirmPasswordComponent } from './authentication/confirm-password/confirm-password.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: AuthenticationComponent },
  { path: 'forget', component: ForgetPasswordComponent },
  { path: 'confirm', component: ConfirmPasswordComponent },
  { path: 'role', component: RoleComponent },
  { path: 'user', component: UserComponent },
  { path: 'setting', component: SettingsComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'table', component: TableComponent },
  { path: 'stock', component: StockComponent },
  { path: 'ingredient', component: IngredientComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'dine-in/:tableId', component: TableDineInComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'theme', component: ThemeComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
