import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IngredientService } from '../ingredient.service';
import { Ingredient } from '../ingredient';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css','../../../../styles/styled.profile.css']
})
export class IngredientFormComponent {
  ingredient: Ingredient = new Ingredient();
  loading: boolean = false;
  error: any;
  constructor(
    private dialogRef: MatDialogRef<IngredientFormComponent>,
    private menuService: IngredientService,
    @Inject(MAT_DIALOG_DATA) public data: Ingredient
  ) {
    this.ingredient = data;
    console.log('data====', data);
  }

  onSubmit(f: NgForm) {

    if (!f.valid) {
      this.loading = true;
      return;
    }
    if (this.ingredient.id) {
      this.menuService.put(this.ingredient).subscribe((data) => {
        this.dialogRef.close();
        this.loading = false

      },
      (error) => {
        this.error = error;
        this.loading = false;
      }
      
      );
    } else {
      this.menuService.post(this.ingredient).subscribe((data) => {
        this.dialogRef.close();
      });
    }
  }

  close() {
    this.dialogRef.close();
  }
}
