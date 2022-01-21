import { AfterViewInit, ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { EntityType } from '@shared/models/entity-type.models';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipList } from '@angular/material/chips';
import { EntityGroupInfo } from '@shared/models/entity-group.models';
import { EntityGroupService } from '@core/http/entity-group.service';
import { EntityId } from '@shared/models/id/entity-id';
import { AddEntityGroupsToEdgeDialogData } from '@home/dialogs/add-entity-groups-to-edge-dialog.models';
import * as i0 from "@angular/core";
export declare class EdgeEntityGroupListComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnChanges {
    private store;
    translate: TranslateService;
    private entityGroupService;
    data: AddEntityGroupsToEdgeDialogData;
    private fb;
    edgeEntityGroupListFormGroup: FormGroup;
    modelValue: Array<string> | null;
    groupType: EntityType;
    excludeGroupAll: boolean;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    entityGroupInput: ElementRef<HTMLInputElement>;
    matAutocomplete: MatAutocomplete;
    chipList: MatChipList;
    entityGroups: Array<EntityGroupInfo>;
    filteredEntityGroups: Observable<Array<EntityGroupInfo>>;
    ownerId: EntityId;
    edgeId: string;
    tenantId: string;
    customerId: string;
    searchText: string;
    private dirty;
    private propagateChange;
    constructor(store: Store<AppState>, translate: TranslateService, entityGroupService: EntityGroupService, data: AddEntityGroupsToEdgeDialogData, fb: FormBuilder);
    updateValidators(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: Array<string> | null): void;
    reset(): void;
    add(entityGroup: EntityGroupInfo): void;
    remove(entityGroup: EntityGroupInfo): void;
    displayEntityGroupFn(entityGroup?: EntityGroupInfo): string | undefined;
    fetchEntityGroups(searchText?: string): Observable<Array<EntityGroupInfo>>;
    getEntityGroups(): Observable<Array<EntityGroupInfo>>;
    onFocus(): void;
    clear(value?: string): void;
    private getEntityGroupsTasks;
    private getOwnerGroups;
    private getParentGroups;
    static ɵfac: i0.ɵɵFactoryDeclaration<EdgeEntityGroupListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EdgeEntityGroupListComponent, "tb-edge-entity-group-list", never, { "groupType": "groupType"; "excludeGroupAll": "excludeGroupAll"; "required": "required"; "disabled": "disabled"; }, {}, never, never>;
}
