import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Menu } from '../menu';
import { CategoryService } from '../../category/category.service';
import { StockService } from '../../stock/stock.service';
import { MenuService } from '../menu.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls:[ './menu-form.component.css','../../../../styles/styled.profile.css']
})
export class MenuFormComponent {
  menuTemplate: Menu = new Menu();
  menu: Menu = new Menu();
  loading: boolean = false;
  error: any;
  constructor(
    private dialogRef: MatDialogRef<MenuFormComponent>,
    private menuService: MenuService,
    private stockService: StockService,
    private categorySevice: CategoryService,
    @Inject(MAT_DIALOG_DATA) public data: Menu
  ) {
    this.menu = data;
    this.getTemplate();
    
  }

  getTemplate() {
    this.stockService.getTemplate().subscribe((res) => {
      this.menuTemplate.ingredient = res;
      // this.dialogRef.close();
    });
    this.categorySevice.gets().subscribe((res) => {
      this.menuTemplate.category = res;
    });
  }

  onSubmit(f: NgForm) {
    if (!f.valid) {
      this.loading = true;

      return;
    }
    console.log("menu---", this.menu);
    if (this.menu.id) {
      this.menuService.put(this.menu).subscribe((data) => {
        this.dialogRef.close();
        this.loading = false

      },
      (error) => {
        this.error = error;
        this.loading = false;
      }
      );
    } else {
      this.menuService.post(this.menu).subscribe((data) => {
        this.dialogRef.close();
      });
    }
  }

  close() {
    this.dialogRef.close();
  }
}
