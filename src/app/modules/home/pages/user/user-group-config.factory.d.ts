import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { UtilsService } from '@core/services/utils.service';
import { EntityGroupStateConfigFactory, EntityGroupStateInfo, GroupEntityTableConfig } from '@home/models/group/group-entities-table-config.models';
import { EntityAction } from '@home/models/entity/entity-component.models';
import { MatDialog } from '@angular/material/dialog';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import { EntityGroupParams, ShortEntityView } from '@shared/models/entity-group.models';
import { HomeDialogsService } from '@home/dialogs/home-dialogs.service';
import { GroupConfigTableConfigService } from '@home/components/group/group-config-table-config.service';
import { User } from '@shared/models/user.model';
import { UserService } from '@core/http/user.service';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { AuthService } from '@core/auth/auth.service';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class UserGroupConfigFactory implements EntityGroupStateConfigFactory<User> {
    private groupConfigTableConfigService;
    private userPermissionsService;
    private translate;
    private utils;
    private dialog;
    private homeDialogs;
    private userService;
    private authService;
    private router;
    private store;
    private window;
    constructor(groupConfigTableConfigService: GroupConfigTableConfigService<User>, userPermissionsService: UserPermissionsService, translate: TranslateService, utils: UtilsService, dialog: MatDialog, homeDialogs: HomeDialogsService, userService: UserService, authService: AuthService, router: Router, store: Store<AppState>, window: Window);
    createConfig(params: EntityGroupParams, entityGroup: EntityGroupStateInfo<User>): Observable<GroupEntityTableConfig<User>>;
    addUser(config: GroupEntityTableConfig<User>): Observable<User>;
    private openUser;
    loginAsUser($event: Event, user: User | ShortEntityView): void;
    displayActivationLink($event: Event, user: User): void;
    resendActivation($event: Event, user: User): void;
    setUserCredentialsEnabled($event: Event, user: User, userCredentialsEnabled: boolean): void;
    onUserAction(action: EntityAction<User>, config: GroupEntityTableConfig<User>, params: EntityGroupParams): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserGroupConfigFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserGroupConfigFactory>;
}
