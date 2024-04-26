// import { Component } from '@angular/core';
// import { Table } from '../settings/table/table';
// import { RecipeService } from './recipe.service';
// import { TableService } from '../settings/table/table.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-dine-in',
//   templateUrl: './dine-in.component.html',
//   styleUrls: ['./dine-in.component.css', '../../styles/styled.mat-card.css', '../../styles/styled.content.css']
// })
// export class DineInComponent {
//   table: Table[] = [];

//   constructor(
//     private tableService: TableService,
//     private recipeService: RecipeService,
//     private router: Router
//   ) {
//     this.getAll();
//   }

//   getAll() {
//     this.tableService.getTable().subscribe((res) => {
//       this.table = res;
//     });
//   }

//   goToform(t: Table) {
//     this.tableService.getTableById(t.id).subscribe((res) => {
//       if (res.isBusy == true) {
//         this.router.navigate([`/dine-in/${t.id}`]);
//       }
//       if (res.isBusy == false) {
//         this.recipeService.post().subscribe((res) => {
//           if (res.id != undefined) {
//             const data: Table = {
//               "isBusy": true,
//               "id": t.id,
//               "recipeId": res.id,
//               "floor": t.floor,
//               "name": t.name,
//             }
//             this.tableService.putTable(data).subscribe((res => {
//               this.getAll();
//               this.router.navigate([`/dine-in/${t.id}`]);

//             }))
//           }
//           // this.getRecipe(this.recipeId);
//         })
//       }

//     })

//   }
//   // getRecipe(id: number) {
//   //     if(!!id){

//   //     }
//   // }
//   // recipeId(recipeId: any) {
//   //   throw new Error('Method not implemented.');
//   // }
// }
