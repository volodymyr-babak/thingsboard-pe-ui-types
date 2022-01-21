import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { UtilsService } from '@core/services/utils.service';
import { EntityGroupStateConfigFactory, EntityGroupStateInfo, GroupEntityTableConfig } from '@home/models/group/group-entities-table-config.models';
import { BroadcastService } from '@core/services/broadcast.service';
import { EntityAction } from '@home/models/entity/entity-component.models';
import { MatDialog } from '@angular/material/dialog';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import { EntityGroupParams } from '@shared/models/entity-group.models';
import { HomeDialogsService } from '@home/dialogs/home-dialogs.service';
import { GroupConfigTableConfigService } from '@home/components/group/group-config-table-config.service';
import { EntityView } from '@shared/models/entity-view.models';
import { EntityViewService } from '@core/http/entity-view.service';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class EntityViewGroupConfigFactory implements EntityGroupStateConfigFactory<EntityView> {
    private groupConfigTableConfigService;
    private userPermissionsService;
    private translate;
    private utils;
    private dialog;
    private homeDialogs;
    private entityViewService;
    private router;
    private broadcast;
    private window;
    constructor(groupConfigTableConfigService: GroupConfigTableConfigService<EntityView>, userPermissionsService: UserPermissionsService, translate: TranslateService, utils: UtilsService, dialog: MatDialog, homeDialogs: HomeDialogsService, entityViewService: EntityViewService, router: Router, broadcast: BroadcastService, window: Window);
    createConfig(params: EntityGroupParams, entityGroup: EntityGroupStateInfo<EntityView>): Observable<GroupEntityTableConfig<EntityView>>;
    private openEntityView;
    onEntityViewAction(action: EntityAction<EntityView>, config: GroupEntityTableConfig<EntityView>, params: EntityGroupParams): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityViewGroupConfigFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EntityViewGroupConfigFactory>;
}