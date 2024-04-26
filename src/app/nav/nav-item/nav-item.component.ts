import { Component, ViewChild } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.css'
})
export class NavItemComponent {
  @ViewChild(MatPaginator, { read: true }) paginator!: MatPaginator;
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<NavItemComponent>,
    // @Inject(MAT_BOTTOM_SHEET_DATA) public data: Notify
  ) {
    this.getAll();
  }

  getAll(){
    
  }
}
