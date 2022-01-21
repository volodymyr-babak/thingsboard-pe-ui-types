import { NgZone } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../core.state';
import { AuthState } from '../auth/auth.models';
import { Observable } from 'rxjs';
import { DialogService } from '@core/services/dialog.service';
import { TranslateService } from '@ngx-translate/core';
import { UtilsService } from '@core/services/utils.service';
import { WhiteLabelingService } from '@core/http/white-labeling.service';
import { SelfRegistrationService } from '@core/http/self-register.service';
import { MenuService } from '@core/services/menu.service';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import { MobileService } from '@core/services/mobile.service';
import * as i0 from "@angular/core";
export declare class AuthGuard implements CanActivate, CanActivateChild {
    private store;
    private router;
    private authService;
    private dialogService;
    private utils;
    private translate;
    private whiteLabelingService;
    private selfRegistrationService;
    private userPermissionsService;
    private menuService;
    private mobileService;
    private zone;
    constructor(store: Store<AppState>, router: Router, authService: AuthService, dialogService: DialogService, utils: UtilsService, translate: TranslateService, whiteLabelingService: WhiteLabelingService, selfRegistrationService: SelfRegistrationService, userPermissionsService: UserPermissionsService, menuService: MenuService, mobileService: MobileService, zone: NgZone);
    getAuthState(): Observable<AuthState>;
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | import("@angular/router").UrlTree>;
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | import("@angular/router").UrlTree>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthGuard>;
}
