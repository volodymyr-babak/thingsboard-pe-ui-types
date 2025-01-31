import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { CellActionDescriptor, EntityTableColumn, EntityTableConfig, GroupActionDescriptor, HeaderActionDescriptor } from '@home/models/entity/entities-table-config.models';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { EntityAction } from '@home/models/entity/entity-component.models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { CustomerService } from '@core/http/customer.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from '@core/services/dialog.service';
import { Dashboard, DashboardInfo } from '@app/shared/models/dashboard.models';
import { DashboardService } from '@app/core/http/dashboard.service';
import { ImportExportService } from '@home/components/import-export/import-export.service';
import { UtilsService } from '@core/services/utils.service';
import * as i0 from "@angular/core";
export declare class DashboardsTableConfigResolver implements Resolve<EntityTableConfig<DashboardInfo | Dashboard>> {
    private store;
    private dashboardService;
    private customerService;
    private dialogService;
    private importExport;
    private translate;
    private datePipe;
    private router;
    private utils;
    private dialog;
    private readonly config;
    constructor(store: Store<AppState>, dashboardService: DashboardService, customerService: CustomerService, dialogService: DialogService, importExport: ImportExportService, translate: TranslateService, datePipe: DatePipe, router: Router, utils: UtilsService, dialog: MatDialog);
    resolve(route: ActivatedRouteSnapshot): Observable<EntityTableConfig<DashboardInfo | Dashboard>>;
    configureColumns(dashboardScope: string): Array<EntityTableColumn<DashboardInfo>>;
    configureEntityFunctions(dashboardScope: string): void;
    configureCellActions(dashboardScope: string): Array<CellActionDescriptor<DashboardInfo>>;
    configureGroupActions(dashboardScope: string): Array<GroupActionDescriptor<DashboardInfo>>;
    configureAddActions(dashboardScope: string): Array<HeaderActionDescriptor>;
    openDashboard($event: Event, dashboard: DashboardInfo): void;
    importDashboard($event: Event): void;
    exportDashboard($event: Event, dashboard: DashboardInfo): void;
    onDashboardAction(action: EntityAction<DashboardInfo>): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardsTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DashboardsTableConfigResolver>;
}
