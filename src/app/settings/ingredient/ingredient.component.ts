import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Ingredient } from './ingredient';
import { IngredientService } from './ingredient.service';
import { ConfirmService } from '../../confirm/confirm.service';
import { IngredientFormComponent } from './ingredient-form/ingredient-form.component';
import { environment } from '../../../environments/environment';
// import { PaggingModel } from '../../../app/_helper/responseModel';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css','../../../styles/styled.table.css']
})
export class IngredientComponent {
  // @ViewChild(MatPaginator, { read: true }) paginator!: MatPaginator;

  data:  Ingredient[] = [];
  pageSizeOptions: number[] = environment.pageSizeOptions;
  // pagingModel?: PaggingModel;
  size = environment.pageSize;
  page = environment.currentPage;
  constructor(
    private ingredientService: IngredientService,
    private confirmService: ConfirmService,
    private dialog: MatDialog,
  ) { this.getAll()
  }
  
  newDailog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = new Ingredient();

    this.dialog
      .open(IngredientFormComponent, dialogConfig)
      .afterClosed()
      .subscribe((result) => {
        this.getAll();
      });
  }
  getAll() {
    this.ingredientService.gets().subscribe((res) => {
      this.data = res ;
      
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // pageChanged(ingredient: PageIngredient) {
  //   this.size = ingredient.pageSize;
  //   this.page = ingredient.pageIndex;
  //   this.getAll();
  // }

  
  
  updateDailog(data: Ingredient) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = data;
    
    this.dialog
      .open(IngredientFormComponent, dialogConfig)
      .afterClosed()
      .subscribe((result) => {
        this.getAll();
      });
  }
  deleteConfirm(data: Ingredient) {
    const options = {
      title:('Ingredient'),
      message: `${('delete-confirmation')} ${data.name}?`,
      cancelText:('cancel'),
      confirmText: ('yes'),
    };
    this.confirmService.open(options);
    this.confirmService.confirmed().subscribe((confirmed) => {
      if (confirmed) {
        this.ingredientService. delete(data).subscribe(
          (data) => {
            this.getAll();
          },
          (error) => { }
        );
      }
    });
  }
}
