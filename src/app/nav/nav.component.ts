import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from './nav.service';
import { Observable, map, shareReplay } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmService } from '../confirm/confirm.service';
import { Table } from '../settings/table/table';
import { TableFormComponent } from '../settings/table/table-form/table-form.component';
import { TableService } from '../settings/table/table.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css', '../components/theme/theme.component.css'],
})
export class NavComponent {
  curentRouter?: any;
  fullRouter?: string;
  @Output() messageEvent = new EventEmitter<boolean>();
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  // isExpanded?: boolean
  public collapsed?: boolean = true;
  public dropdown?: boolean = true;
  menuLists = MENU_LISTS;
  settingLists = SETTING_LIST;
  _loading: boolean = false;
  _theme: string = 'default';
  _fontSize: string = 'medium';
  table: Table[] = [];

  constructor(
    // private authenticationService: AuthenticationService,
    private breakpointObserver: BreakpointObserver,
    // private permissionService: PermissionService,
    private confirmService: ConfirmService,
    // private transloco: TranslocoService,
    private cdr: ChangeDetectorRef,
    public navService: NavService,
    private dialog: MatDialog,
    private router: Router,
    private tableService: TableService
  ) {
    var istheme = localStorage.getItem('theme');
    if (istheme) this._theme = istheme;
    var isFontSize = localStorage.getItem('font-size');
    if (isFontSize) this._fontSize = isFontSize;
    // this.getPermissions();
    var isCollapsed = localStorage.getItem('isCollapsed');
    if (isCollapsed == null) localStorage.setItem('isCollapsed', 'true');
    if (isCollapsed) this.collapsed = isCollapsed == 'false' ? false : true;
    var isDropdowned = localStorage.getItem('isDropdowned');
    if (isDropdowned == null) localStorage.setItem('isDropdowned', 'true');
    if (isDropdowned) this.dropdown = isDropdowned == 'false' ? false : true;
  }

  getAll() {
    this.tableService.getTable().subscribe((res) => {
      this.table = res;
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

  logout() {
    const options = {
      title: 'logout',
      message: 'logout-confirm',
      cancelText: 'cancel',
      confirmText: 'yes',
    };

    this.confirmService.open(options);
    this.confirmService.confirmed().subscribe((confirmed) => {
      if (confirmed) {
        //click yes
        // this.authenticationService.logout();
        localStorage.clear();
        window.location.replace('/login');
        this.messageEvent.emit(false);
        this.router.navigate(['/login']);
      }
    });
  }

  ngAfterViewChecked() {
    if (this.fullRouter !== this.router.url) {
      const strRouter = this.router.url;
      const _arrRouter = strRouter.split('/').splice(1, 3);
      this.curentRouter = _arrRouter[0];
    }
    this.fullRouter = this.router.url;
    this.cdr.detectChanges();
  }

  OnCollapse() {
    this.collapsed = !this.collapsed;
    localStorage.setItem('isCollapsed', String(this.collapsed));
  }

  onDropdown() {
    this.dropdown = !this.dropdown;
    localStorage.setItem('isDropdowned', String(this.dropdown));
  }

  // checkAuth(roleName: string): boolean {
  //   return this.authenticationService.existAuthorization(roleName);
  // }

  // getPermissions() {
  //   this.permissionService.getCurrentUserRole().subscribe(
  //     (result) => {
  //       RoleListData.roleListData = (result.data as RoleList[]);
  //     }
  //   );
  // }

  // onTheme() {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   dialogConfig.data = this._theme
  //   this.dialog
  //     .open(ThemeComponent, dialogConfig)
  //     .afterClosed();
  // }
}

export const MENU_LISTS = [
  {
    title: 'home',
    icon: 'home',
    router: '/home',
  },
  {
    title: 'payment',
    icon: 'payment',
    router: '/menu',
  },
  {
    title: 'menu',
    icon: 'date_range',
    router: '/dine-in',
  },
  {
    title: 'order',
    icon: 'rate_review',
    router: '/stock',
  },
];

export const SETTING_LIST = [
  {
    title: 'user',
    icon: 'perm_identity',
    router: '/user',
  },
  {
    title: 'category',
    icon: 'fastfood',
    router: '/category',
  },
  {
    title: 'role',
    icon: 'border_color',
    router: '/role',
  },
  {
    title: 'ingredient',
    icon: 'local_dining',
    router: '/ingredient',
  },
  {
    title: 'menu',
    icon: 'date_range',
    router: '/menu',
  },
  {
    title: 'table',
    icon: 'event_seat',
    router: '/table',
  },
];
