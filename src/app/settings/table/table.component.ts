import { Component } from '@angular/core';
import { TableFormComponent } from './table-form/table-form.component';
import { Table } from './table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmService } from '../../confirm/confirm.service';
import { TableService } from './table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css','../../../styles/styled.table.css']
})
export class TableComponent {
  table: Table[] = [];

  constructor(
    private tableService: TableService,
    private confirmService: ConfirmService,
    private dialog: MatDialog
  ) {
    this.getAll();
  }

  getAll() {
    this.tableService.getTable().subscribe((res) => {
      this.table = res;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  newDailog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = new Table();

    this.dialog
      .open(TableFormComponent, dialogConfig)
      .afterClosed()
      .subscribe((result) => {
        this.getAll();
      });
  }
  updateDailog(data: Table) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = data;

    this.dialog
      .open(TableFormComponent, dialogConfig)
      .afterClosed()
      .subscribe((result) => {
        this.getAll();
      });
  }

  deleteConfirm(data: Table) {
    const options = {
      title: 'Table',
      message: `${'delete-confirmation'} ${data.name}?`,
      cancelText: 'cancel',
      confirmText: 'yes',
    };

    this.confirmService.open(options);

    this.confirmService.confirmed().subscribe((confirmed) => {
      if (confirmed) {
        this.tableService.deleteTable(data).subscribe(
          (data) => {
            this.getAll();
          },
          (error) => {}
        );
      }
    });
  }
} 
