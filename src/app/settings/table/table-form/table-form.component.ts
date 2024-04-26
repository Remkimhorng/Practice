import { Component, HostListener, Inject } from '@angular/core';
import { Table } from '../table';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TableService } from '../table.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.css','../../../../styles/styled.profile.css']
})
export class TableFormComponent {
  _table: Table = new Table();
  isInteger: boolean = false;
  table: Table;

  constructor(
    private dialogRef: MatDialogRef<TableFormComponent>,
    private tableService: TableService,
    @Inject(MAT_DIALOG_DATA) public data: Table
  ) {
    this.table = data;
  }


  onSubmit(f: NgForm) {
    if (!f.valid) {
      return;
    }
    if (this.table.id) {
      this.tableService.putTable(this.table).subscribe((data) => {
        this.dialogRef.close();
      });
    } else {
      this.table.isBusy = false
      this.tableService.postTable(this.table).subscribe((data) => {
        this.dialogRef.close();
      });
    }
  }

  close() {
    this.dialogRef.close();
  }

  @HostListener('keydown.esc')
  public onEsc() {
    this.close();
  }
}
