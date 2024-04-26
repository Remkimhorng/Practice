import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient,
} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ForgetPasswordComponent } from './authentication/forget-password/forget-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { DineInComponent } from './dine-in/dine-in.component';
// import { DineInFormComponent } from './dine-in/dine-in-form/dine-in-form.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { SettingsComponent } from './settings/settings.component';
import { CategoryFormComponent } from './settings/category/category-form/category-form.component';
import { CategoryComponent } from './settings/category/category.component';
import { IngredientFormComponent } from './settings/ingredient/ingredient-form/ingredient-form.component';
import { IngredientComponent } from './settings/ingredient/ingredient.component';
import { MenuFormComponent } from './settings/menu/menu-form/menu-form.component';
import { MenuComponent } from './settings/menu/menu.component';
import { ProfileComponent } from './settings/profile/profile.component';
import { StockFormComponent } from './settings/stock/stock-form/stock-form.component';
import { StockComponent } from './settings/stock/stock.component';
import { TableFormComponent } from './settings/table/table-form/table-form.component';
import { TableComponent } from './settings/table/table.component';
import { RoleFormComponent } from './settings/role/role-form/role-form.component';
import { RoleComponent } from './settings/role/role.component';
import { UserFormComponent } from './settings/user/user-form/user-form.component';
import { UserComponent } from './settings/user/user.component';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { LayoutModule } from '@angular/cdk/layout';
import { NgIf } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatNativeDateModule } from '@angular/material/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NavItemComponent } from './nav/nav-item/nav-item.component';
import { ThemeComponent } from './components/theme/theme.component';
import { MatRadioModule } from '@angular/material/radio';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { MatSliderModule } from '@angular/material/slider';
import { TranslocoRootModule } from './transloco-http-loader';
import { BaseChartDirective } from 'ng2-charts';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { TableDineInComponent } from './home/table-dine-in/table-dine-in.component';
import { SvgTableComponent } from './components/svg-table/svg-table.component';
import { ConfirmPasswordComponent } from './authentication/confirm-password/confirm-password.component';
const httpLoaderFactory = (http: HttpClient) => new TranslocoRootModule();

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    ForgetPasswordComponent,
    ChangePasswordComponent,
    ConfirmComponent,
    DashboardComponent,
    // DineInComponent,
    // DineInFormComponent,
    HomeComponent,
    NavComponent,
    SettingsComponent,
    CategoryComponent,
    IngredientComponent,
    MenuComponent,
    ProfileComponent,
    StockComponent,
    TableComponent,
    RoleComponent,
    UserComponent,
    NavItemComponent,
    CategoryFormComponent,
    IngredientFormComponent,
    MenuFormComponent,
    RoleFormComponent,
    StockFormComponent,
    TableFormComponent,
    UserFormComponent,
    ThemeComponent,
    LanguageSelectorComponent,
    // DineInFormComponent,
    TableDineInComponent,
    SvgTableComponent,
    ConfirmPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressBarModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    LayoutModule,
    NgIf,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatBottomSheetModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    HttpClientModule,
    TranslocoRootModule,
    MatSliderModule,
    BaseChartDirective,
  ],
  providers: [
    provideAnimationsAsync(),
    provideCharts(withDefaultRegisterables()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
