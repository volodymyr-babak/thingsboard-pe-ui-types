import { OnDestroy, OnInit } from '@angular/core';
import { User } from '@shared/models/user.model';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from '@core/services/dialog.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ClipboardService } from 'ngx-clipboard';
import { TwoFactorAuthenticationService } from '@core/http/two-factor-authentication.service';
import { TwoFactorAuthProviderType } from '@shared/models/two-factor-auth.models';
import * as i0 from "@angular/core";
export declare class SecurityComponent extends PageComponent implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    private route;
    private translate;
    private twoFaService;
    dialog: MatDialog;
    dialogService: DialogService;
    fb: FormBuilder;
    private datePipe;
    private clipboardService;
    private readonly destroy$;
    private accountConfig;
    twoFactorAuth: FormGroup;
    user: User;
    allowTwoFactorProviders: TwoFactorAuthProviderType[];
    providersData: Map<TwoFactorAuthProviderType, import("@shared/models/two-factor-auth.models").TwoFactorAuthProviderData>;
    twoFactorAuthProviderType: typeof TwoFactorAuthProviderType;
    useByDefault: TwoFactorAuthProviderType;
    activeSingleProvider: boolean;
    get jwtToken(): string;
    get jwtTokenExpiration(): string;
    get expirationJwtData(): string;
    constructor(store: Store<AppState>, route: ActivatedRoute, translate: TranslateService, twoFaService: TwoFactorAuthenticationService, dialog: MatDialog, dialogService: DialogService, fb: FormBuilder, datePipe: DatePipe, clipboardService: ClipboardService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private buildTwoFactorForm;
    private twoFactorLoad;
    private processTwoFactorAuthConfig;
    trackByProvider(i: number, provider: TwoFactorAuthProviderType): TwoFactorAuthProviderType;
    copyToken(): void;
    confirm2FAChange(event: MouseEvent, provider: TwoFactorAuthProviderType): void;
    private createdNewAuthConfig;
    changeDefaultProvider(event: MouseEvent, provider: TwoFactorAuthProviderType): void;
    generateNewBackupCode(): void;
    providerDataInfo(provider: TwoFactorAuthProviderType): {
        info: any;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<SecurityComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SecurityComponent, "tb-security", never, {}, {}, never, never>;
}