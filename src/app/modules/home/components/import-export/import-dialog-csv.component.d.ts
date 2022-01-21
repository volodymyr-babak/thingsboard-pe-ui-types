import { AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@app/shared/components/dialog.component';
import { EntityType } from '@shared/models/entity-type.models';
import { TranslateService } from '@ngx-translate/core';
import { MatVerticalStepper } from '@angular/material/stepper';
import { BulkImportResult, CSVDelimiter } from '@home/components/import-export/import-export.models';
import { ImportExportService } from '@home/components/import-export/import-export.service';
import { CustomerId } from '@shared/models/id/customer-id';
import { TableColumnsAssignmentComponent } from '@home/components/import-export/table-columns-assignment.component';
import * as i0 from "@angular/core";
export interface ImportDialogCsvData {
    entityType: EntityType;
    customerId: CustomerId;
    importTitle: string;
    importFileLabel: string;
    entityGroupId: string;
}
export declare class ImportDialogCsvComponent extends DialogComponent<ImportDialogCsvComponent, boolean> implements AfterViewInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: ImportDialogCsvData;
    dialogRef: MatDialogRef<ImportDialogCsvComponent, boolean>;
    translate: TranslateService;
    private importExport;
    private fb;
    private renderer;
    importStepper: MatVerticalStepper;
    columnsAssignmentComponent: TableColumnsAssignmentComponent;
    failureDetailsEditorElmRef: ElementRef;
    entityType: EntityType;
    importTitle: string;
    importFileLabel: string;
    customerId: CustomerId;
    entityGroupId: string;
    delimiters: {
        key: CSVDelimiter;
        value: string;
    }[];
    selectedIndex: number;
    selectFileFormGroup: FormGroup;
    importParametersFormGroup: FormGroup;
    columnTypesFormGroup: FormGroup;
    isImportData: boolean;
    statistical: BulkImportResult;
    private allowAssignColumn;
    private initEditorComponent;
    private parseData;
    constructor(store: Store<AppState>, router: Router, data: ImportDialogCsvData, dialogRef: MatDialogRef<ImportDialogCsvComponent, boolean>, translate: TranslateService, importExport: ImportExportService, fb: FormBuilder, renderer: Renderer2);
    ngAfterViewInit(): void;
    cancel(): void;
    previousStep(): void;
    nextStep(step: number): void;
    private parseCSV;
    private createColumnsData;
    private addEntities;
    private processingColumnsParams;
    initEditor(): void;
    private createEditor;
    private updateEditorSize;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImportDialogCsvComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ImportDialogCsvComponent, "tb-import-csv-dialog", never, {}, {}, never, never>;
}
