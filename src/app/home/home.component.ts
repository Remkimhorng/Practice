import { Component } from '@angular/core';
import { Table } from '../settings/table/table';
import { RecipeService } from '../dine-in/recipe.service';
import { TableService } from '../settings/table/table.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from './recipe';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TableFormComponent } from '../settings/table/table-form/table-form.component';
import { strings } from '@material/form-field';
import { ResponseModel } from '../_helper/response-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css',
    '../../styles/styled.content.css',
    '../../styles/styled.mat-card.css',
    '../../styles/styled.table.css',
  ],
})
export class HomeComponent {
  table: Table[] = [];
  selecteTtable: Table = new Table();
  status: boolean = false;
  order: Recipe[] = [];
  granTotal: number = 0;
  grandUnits: number = 0;
  _tableId: string | number | null = 0;
  data_table!: Table;
  recipeId!: number;
  _Multiple: Array<any> = [];
  isFocus: number = -1;
  myDate = new Date();

  constructor(
    private tableService: TableService,
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {
    this.getAll();
  }

  getAll() {
    this.tableService.getTable().subscribe((res) => {
      this.table = res;
    });
  }

  getRecipe(id: number) {
    if (!!id) {
      this.recipeService.gets(id).subscribe((res) => {
        this.order = (res as ResponseModel).order;
        this.getUnits();
        this.getTotal();
      });
    } else {
      let order: Recipe = {
        name: 'any',
        price: 0,
        isHave: false,
        units: 0,
        date: this.myDate,
      };
      this.recipeService.post().subscribe((res) => {
        this._tableId = this.route.snapshot.paramMap.get('tableId');
        if (res.id != undefined) {
          const data: Table = {
            isBusy: true,
            id: this._tableId,
            recipeId: res.id,
            floor: this.data_table.floor,
            name: this.data_table.name,
          };
          this.tableService.putTable(data).subscribe((res) => {});
        }
        // this.getRecipe(this.recipeId);
      });
    }
  }

  getTotal() {
    const array_price: any = this.order.map((p) => p.price * p.units);
    this.granTotal = array_price.reduce((a: number, b: number) => a + b, 0);
  }

  getUnits() {
    const array_unit: any = this.order.map((u) => u.units);
    this.grandUnits = array_unit.reduce((c: number, d: number) => c + d);
  }

  selected() {}

  selectedTable(t: Table) {
    this.selecteTtable = t;
    this.getRecipe(t.recipeId);
  }

  onOrder(t: Table) {
    this.tableService.getTableById(t.id).subscribe((res) => {
      if (res.isBusy == true) {
        this.router.navigate([`/dine-in/${t.id}`]);
      }
      if (res.isBusy == false) {
        this.recipeService.post().subscribe((res) => {
          if (res.id != undefined) {
            const data: Table = {
              isBusy: true,
              id: t.id,
              recipeId: res.id,
              floor: t.floor,
              name: t.name,
              status: 'String',
            };
            this.tableService.putTable(data).subscribe((res) => {
              this.getAll();
              this.router.navigate([`/dine-in/${t.id}`]);
            });
          }
          // this.getRecipe(this.recipeId);
        });
      }
    });
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

  onCheckOut() {
    this._tableId = this.selecteTtable.id;

    console.log(this._tableId, 'table:::');
    let oder: Table = this.selecteTtable;
    oder.isBusy = false;
    oder.recipeId = 0;
    console.log('select::', this.selecteTtable);

    // if (this.order.length <= 0) {
    //   this.recipeService.delete(this.recipeId).subscribe();
    // }

    this.tableService.putTable(oder).subscribe((res) => {
      // this.router.navigate([`/dine-in`]);
      this.getAll();
    });
  }

  // getRecipe(id: number) {
  //     if(!!id){

  //     }
  // }
  // recipeId(recipeId: any) {
  //   throw new Error('Method not implemented.');
  // }
}
