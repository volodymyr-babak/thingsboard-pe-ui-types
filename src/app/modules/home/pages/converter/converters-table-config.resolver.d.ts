import { Resolve, Router } from '@angular/router';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { EntityAction } from '@home/models/entity/entity-component.models';
import { Converter } from '@shared/models/converter.models';
import { ConverterService } from '@core/http/converter.service';
import { ImportExportService } from '@home/components/import-export/import-export.service';
import { UtilsService } from '@core/services/utils.service';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import * as i0 from "@angular/core";
export declare class ConvertersTableConfigResolver implements Resolve<EntityTableConfig<Converter>> {
    private converterService;
    private userPermissionsService;
    private translate;
    private importExport;
    private datePipe;
    private router;
    private utils;
    private readonly config;
    constructor(converterService: ConverterService, userPermissionsService: UserPermissionsService, translate: TranslateService, importExport: ImportExportService, datePipe: DatePipe, router: Router, utils: UtilsService);
    resolve(): EntityTableConfig<Converter>;
    openConverter($event: Event, converter: Converter): void;
    exportConverter($event: Event, converter: Converter): void;
    importConverter($event: Event): void;
    onConverterAction(action: EntityAction<Converter>): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConvertersTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ConvertersTableConfigResolver>;
}
