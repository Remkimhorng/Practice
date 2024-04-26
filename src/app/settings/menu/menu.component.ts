import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Menu } from './menu';
import { ConfirmService } from '../../confirm/confirm.service';
import { MenuService } from './menu.service';
import { MenuFormComponent } from './menu-form/menu-form.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css','../../../styles/styled.table.css']
})
export class MenuComponent {
  data: Menu[] = [];
  constructor(
    private menuService: MenuService,
    private confirmService: ConfirmService,
    private dialog: MatDialog
  )
  {
    this.getAll();
  }
  newDailog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = new Menu();  
// console.log("new----",);

    this.dialog
      .open(MenuFormComponent, dialogConfig)
      .afterClosed()
      .subscribe((result) => {
        this.getAll();
      });
  }
  getAll()  {
    this.menuService.gets().subscribe((res) => {
      console.log("res::",res.length);
      
      this.data = res;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  updateDailog(data: Menu) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = data;

    this.dialog
      .open(MenuFormComponent, dialogConfig)
      .afterClosed()
      .subscribe((result) => {
        this.getAll();
      });
  }

  deleteConfirm(data: Menu) {
    const options = {
      title: 'Menu',
      message: `${'delete-confirmation'} ${data.name}?`,
      cancelText: 'cancel',
      confirmText: 'yes',
    };

    this.confirmService.open(options);

    this.confirmService.confirmed().subscribe((confirmed) => {
      if (confirmed) {
        this.menuService. delete(data).subscribe(
          (data) => {
            this.getAll();
          },
          (error) => { }
        );
      }
    });
  }
}
