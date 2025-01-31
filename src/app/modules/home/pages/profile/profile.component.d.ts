import { OnInit } from '@angular/core';
import { UserService } from '@core/http/user.service';
import { User } from '@shared/models/user.model';
import { Authority } from '@shared/models/authority.enum';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HasConfirmForm } from '@core/guards/confirm-on-exit.guard';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from '@core/services/dialog.service';
import { AuthService } from '@core/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ClipboardService } from 'ngx-clipboard';
import * as i0 from "@angular/core";
export declare class ProfileComponent extends PageComponent implements OnInit, HasConfirmForm {
    protected store: Store<AppState>;
    private route;
    private userService;
    private authService;
    private translate;
    dialog: MatDialog;
    dialogService: DialogService;
    fb: FormBuilder;
    private datePipe;
    private clipboardService;
    authorities: typeof Authority;
    profile: FormGroup;
    user: User;
    languageList: any;
    authState: import("../../../../core/auth/auth.models").AuthState;
    get jwtToken(): string;
    get jwtTokenExpiration(): string;
    get expirationJwtData(): string;
    constructor(store: Store<AppState>, route: ActivatedRoute, userService: UserService, authService: AuthService, translate: TranslateService, dialog: MatDialog, dialogService: DialogService, fb: FormBuilder, datePipe: DatePipe, clipboardService: ClipboardService);
    ngOnInit(): void;
    buildProfileForm(): void;
    save(): void;
    changePassword(): void;
    userLoaded(user: User): void;
    confirmForm(): FormGroup;
    copyToken(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProfileComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProfileComponent, "tb-profile", never, {}, {}, never, never>;
}
