import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { TimePageLink } from '@shared/models/page/page-link';
import { Observable } from 'rxjs';
import { PageData } from '@shared/models/page/page-data';
import { EntityId } from '@shared/models/id/entity-id';
import { AlarmInfo, AlarmSearchStatus } from '@app/shared/models/alarm.models';
import { AlarmService } from '@app/core/http/alarm.service';
import { DialogService } from '@core/services/dialog.service';
import { UserPermissionsService } from '@core/http/user-permissions.service';
export declare class AlarmTableConfig extends EntityTableConfig<AlarmInfo, TimePageLink> {
    private alarmService;
    private dialogService;
    private userPermissionsService;
    private translate;
    private datePipe;
    private dialog;
    entityId: EntityId;
    private defaultSearchStatus;
    searchStatus: AlarmSearchStatus;
    readonly: boolean;
    constructor(alarmService: AlarmService, dialogService: DialogService, userPermissionsService: UserPermissionsService, translate: TranslateService, datePipe: DatePipe, dialog: MatDialog, entityId?: EntityId, defaultSearchStatus?: AlarmSearchStatus);
    fetchAlarms(pageLink: TimePageLink): Observable<PageData<AlarmInfo>>;
    showAlarmDetails(entity: AlarmInfo): void;
}
