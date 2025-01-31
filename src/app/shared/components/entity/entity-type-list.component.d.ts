import { AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { AliasEntityType, EntityType } from '@shared/models/entity-type.models';
import { EntityService } from '@core/http/entity.service';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipList } from '@angular/material/chips';
import * as i0 from "@angular/core";
interface EntityTypeInfo {
    name: string;
    value: EntityType;
}
export declare class EntityTypeListComponent implements ControlValueAccessor, OnInit, AfterViewInit {
    private store;
    translate: TranslateService;
    private entityService;
    private fb;
    entityTypeListFormGroup: FormGroup;
    modelValue: Array<EntityType> | null;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    allowedEntityTypes: Array<EntityType | AliasEntityType>;
    ignoreAuthorityFilter: boolean;
    entityTypeInput: ElementRef<HTMLInputElement>;
    entityTypeAutocomplete: MatAutocomplete;
    chipList: MatChipList;
    allEntityTypeList: Array<EntityTypeInfo>;
    entityTypeList: Array<EntityTypeInfo>;
    filteredEntityTypeList: Observable<Array<EntityTypeInfo>>;
    placeholder: string;
    secondaryPlaceholder: string;
    searchText: string;
    private dirty;
    private propagateChange;
    constructor(store: Store<AppState>, translate: TranslateService, entityService: EntityService, fb: FormBuilder);
    updateValidators(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: Array<EntityType> | null): void;
    add(entityType: EntityTypeInfo): void;
    remove(entityType: EntityTypeInfo): void;
    displayEntityTypeFn(entityType?: EntityTypeInfo): string | undefined;
    fetchEntityTypes(searchText?: string): Observable<Array<EntityTypeInfo>>;
    onFocus(): void;
    clear(value?: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityTypeListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityTypeListComponent, "tb-entity-type-list", never, { "required": "required"; "disabled": "disabled"; "allowedEntityTypes": "allowedEntityTypes"; "ignoreAuthorityFilter": "ignoreAuthorityFilter"; }, {}, never, never>;
}
export {};
