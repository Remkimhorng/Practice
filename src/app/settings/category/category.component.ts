import { Component } from '@angular/core';
import { category } from './category';
import { CategoryService } from './category.service';
import { ConfirmService } from '../../confirm/confirm.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CategoryFormComponent } from './category-form/category-form.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css','../../../styles/styled.table.css']
})
export class CategoryComponent {

  data:  category[] = [];
 
  constructor(
    private categoryService: CategoryService,
    private confirmService: ConfirmService,
    private dialog: MatDialog,
  ) { this.getAll()
  }
  
  newDailog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = new category();

    this.dialog
      .open(CategoryFormComponent, dialogConfig)
      .afterClosed()
      .subscribe((result) => {
        this.getAll();
      });
  }
  getAll() {
    this.categoryService.gets().subscribe((res) => {
      this.data = res ;
      
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
  }
  
  updateDailog(data: category) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = data;
    
    this.dialog
      .open(CategoryFormComponent, dialogConfig)
      .afterClosed()
      .subscribe((result) => {
        this.getAll();
      });
  }

  deleteConfirm(data: category) {
    const options = {
      title:('Category'),
      message: `${('delete-confirmation')} ${data.name}?`,
      cancelText:('cancel'),
      confirmText: ('yes'),
    };

    this.confirmService.open(options);

    this.confirmService.confirmed().subscribe((confirmed) => {
      if (confirmed) {
        this.categoryService. delete(data).subscribe(
          (data) => {
            this.getAll();
          },
          (error) => { }
        );
      }
    });
  }
}
