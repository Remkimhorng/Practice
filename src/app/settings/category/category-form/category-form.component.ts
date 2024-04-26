import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from '../category.service';
import { category } from '../category';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css','../../../../styles/styled.profile.css']
})
export class CategoryFormComponent {
  category:category = new category();
  loading: boolean = false;
  error: any;
  

  constructor(
    private dialogRef: MatDialogRef<CategoryFormComponent>,
    private CategoryService: CategoryService  ,
    @Inject (MAT_DIALOG_DATA) public data: category
  ) {
    this.category = data;
    console.log("data====",data);
    
  }
  
  onSubmit(f: NgForm) {
    console.log("submit--");
    
    if (!f.valid) {
      this.loading = true;
      return;
    }
    if (this.category.id) {
      this.CategoryService.put( this.category).subscribe(
        (data) => {
          this.dialogRef.close();
          this.loading = false

        },
        (error) => {
          this.error = error;
          this.loading = false;
        }
      );
    } else {
      this.CategoryService.post(this.category).subscribe(
        (data) => {
          this.dialogRef.close();
        }
      );
    }
  }
  

  close() {
    this.dialogRef.close();
  }
}
