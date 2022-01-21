import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { UtilsService } from '@core/services/utils.service';
import { EntityGroupStateConfigFactory, EntityGroupStateInfo, GroupEntityTableConfig } from '@home/models/group/group-entities-table-config.models';
import { BroadcastService } from '@core/services/broadcast.service';
import { EntityAction } from '@home/models/entity/entity-component.models';
import { MatDialog } from '@angular/material/dialog';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import { EntityGroupParams, ShortEntityView } from '@shared/models/entity-group.models';
import { HomeDialogsService } from '@home/dialogs/home-dialogs.service';
import { GroupConfigTableConfigService } from '@home/components/group/group-config-table-config.service';
import { Edge } from '@shared/models/edge.models';
import { EdgeService } from '@core/http/edge.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class EdgeGroupConfigFactory implements EntityGroupStateConfigFactory<Edge> {
    private groupConfigTableConfigService;
    private userPermissionsService;
    private store;
    private translate;
    private utils;
    private dialog;
    private homeDialogs;
    private edgeService;
    private broadcast;
    private router;
    private window;
    constructor(groupConfigTableConfigService: GroupConfigTableConfigService<Edge>, userPermissionsService: UserPermissionsService, store: Store<AppState>, translate: TranslateService, utils: UtilsService, dialog: MatDialog, homeDialogs: HomeDialogsService, edgeService: EdgeService, broadcast: BroadcastService, router: Router, window: Window);
    createConfig(params: EntityGroupParams, entityGroup: EntityGroupStateInfo<Edge>): Observable<GroupEntityTableConfig<Edge>>;
    importEdges($event: Event, config: GroupEntityTableConfig<Edge>): void;
    onEdgeAction(action: EntityAction<Edge>, config: GroupEntityTableConfig<Edge>, params: EntityGroupParams): boolean;
    private openEdge;
    manageUsers($event: Event, edge: Edge | ShortEntityView, config: GroupEntityTableConfig<Edge>, params: EntityGroupParams): void;
    manageAssets($event: Event, edge: Edge | ShortEntityView, config: GroupEntityTableConfig<Edge>, params: EntityGroupParams): void;
    manageDevices($event: Event, edge: Edge | ShortEntityView, config: GroupEntityTableConfig<Edge>, params: EntityGroupParams): void;
    manageEntityViews($event: Event, edge: Edge | ShortEntityView, config: GroupEntityTableConfig<Edge>, params: EntityGroupParams): void;
    manageDashboards($event: Event, edge: Edge | ShortEntityView, config: GroupEntityTableConfig<Edge>, params: EntityGroupParams): void;
    manageSchedulerEvents($event: Event, edge: Edge | ShortEntityView, config: GroupEntityTableConfig<Edge>, params: EntityGroupParams): void;
    manageRuleChains($event: Event, edge: Edge | ShortEntityView, config: GroupEntityTableConfig<Edge>, params: EntityGroupParams): void;
    syncEdge($event: any, edge: any): void;
    private isCustomerScope;
    static ɵfac: i0.ɵɵFactoryDeclaration<EdgeGroupConfigFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EdgeGroupConfigFactory>;
}
