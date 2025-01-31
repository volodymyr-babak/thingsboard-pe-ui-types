import { AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { Converter, ConverterType } from '@shared/models/converter.models';
import { ConverterService } from '@core/http/converter.service';
import { ConverterId } from '@shared/models/id/converter-id';
import * as i0 from "@angular/core";
export declare class ConverterAutocompleteComponent implements ControlValueAccessor, OnInit, AfterViewInit {
    private store;
    translate: TranslateService;
    private converterService;
    private fb;
    selectConverterFormGroup: FormGroup;
    modelValue: ConverterId | string | null;
    converterTypeValue: ConverterType;
    useFullEntityId: boolean;
    set converterType(converterType: ConverterType);
    excludeEntityIds: Array<string>;
    labelText: string;
    requiredText: string;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    showDetailsPageLink: boolean;
    converterInput: ElementRef<HTMLElement>;
    entityText: string;
    entityRequiredText: string;
    filteredEntities: Observable<Array<Converter>>;
    searchText: string;
    converterURL: string;
    private dirty;
    private propagateChange;
    constructor(store: Store<AppState>, translate: TranslateService, converterService: ConverterService, fb: FormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    load(): void;
    getCurrentEntity(): Converter | null;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: string | ConverterId | null): void;
    onFocus(): void;
    reset(): void;
    updateView(value: string | ConverterId | null): void;
    displayEntityFn(converter?: Converter): string | undefined;
    fetchEntities(searchText?: string): Observable<Array<Converter>>;
    clear(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConverterAutocompleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConverterAutocompleteComponent, "tb-converter-autocomplete", never, { "useFullEntityId": "useFullEntityId"; "converterType": "converterType"; "excludeEntityIds": "excludeEntityIds"; "labelText": "labelText"; "requiredText": "requiredText"; "required": "required"; "disabled": "disabled"; "showDetailsPageLink": "showDetailsPageLink"; }, {}, never, never>;
}
