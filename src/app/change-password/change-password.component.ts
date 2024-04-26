import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../settings/user/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css', '../../styles/styled.profile.css']
})
export class ChangePasswordComponent {
  matchPass = true;
  public fg: FormGroup;
  // resetPassword: ResetPassword = new ResetPassword();
  dailogRef: any;
  dialog: any;

  constructor(
    public dialogRef: MatDialogRef<ChangePasswordComponent>,
    private userService: UserService,
    private _snackBar: MatSnackBar,
    private readonly translocoService: TranslocoService,
    fb: FormBuilder,
  ) {
      this.fg = fb.group({
        currentPassword: ['', [Validators.required]],
        // password: ['', [Validators.required, PasswordStrengthValidator]],
        // confirmPassword: ['', [Validators.required, PasswordStrengthValidator]]
      });
   }

  error = '';
  durationInSeconds = 3;
  loading: boolean = false;

  ngOnInit(): void {
  }

  onSearchChange(conPassValue: string): void {
    // if(conPassValue === this.resetPassword.password){
    //    this.matchPass = true;
    //  }else{
    //    this.matchPass=false;
    //  }
   }

  // exist(permission_name: string): boolean {
  //   return PermissionData.exist(permission_name);
  // }

  onSubmit(f: NgForm) {
    if (!this.fg.valid) {
      return;

    }

    if(!this.matchPass){
      this._snackBar.open(this.translocoService.translate('not-matched-password'), this.translocoService.translate("close"), {
        duration: this.durationInSeconds * 1000
      });
      return;
    }

    this.loading = true;
    // this.userService.changePassword(this.resetPassword).subscribe(
    //   (data: any) => {
    //     this.loading = false;
    //     this._snackBar.open(this.translocoService.translate("success"), this.translocoService.translate("close"), {
    //       duration: this.durationInSeconds * 1000
    //     });
    //   }, (error: any) => {
    //     this.loading = false;
    //   }
    // );
  }

  // checkAuth(roleName : string) : boolean{
  //   return this.authenticationService.existAuthorization(roleName);
  // }

  Onclose() {
 this.dialogRef.close(ChangePasswordComponent);
  }

  @HostListener('keydown.esc')
  public onEsc() {
    this.Onclose();
  }

} 
