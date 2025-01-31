import { AfterViewInit, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { WidgetContext } from '@home/models/widget-component.models';
import { UtilsService } from '@core/services/utils.service';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { ThemePalette } from '@angular/material/core/common-behaviors/color';
import * as i0 from "@angular/core";
declare type SwitchType = 'switch' | 'slide-toggle';
export declare class SwitchComponent extends PageComponent implements OnInit, AfterViewInit, OnDestroy {
    private utils;
    protected store: Store<AppState>;
    switchElementRef: ElementRef<HTMLElement>;
    switchContainerRef: ElementRef<HTMLElement>;
    matSlideToggleRef: MatSlideToggle;
    onoffContainerRef: ElementRef<HTMLElement>;
    onLabelRef: ElementRef<HTMLElement>;
    offLabelRef: ElementRef<HTMLElement>;
    switchTitleContainerRef: ElementRef<HTMLElement>;
    switchTitleRef: ElementRef<HTMLElement>;
    textMeasureRef: ElementRef<HTMLElement>;
    switchErrorContainerRef: ElementRef<HTMLElement>;
    switchErrorRef: ElementRef<HTMLElement>;
    ctx: WidgetContext;
    switchType: SwitchType;
    showTitle: boolean;
    value: boolean;
    error: string;
    title: string;
    showOnOffLabels: boolean;
    labelPosition: 'before' | 'after';
    sliderColor: ThemePalette;
    private isSimulated;
    private requestTimeout;
    private requestPersistent;
    private persistentPollingInterval;
    private retrieveValueMethod;
    private valueKey;
    private parseValueFunction;
    private convertValueFunction;
    private getValueMethod;
    private setValueMethod;
    private valueSubscription;
    executingUpdateValue: boolean;
    private scheduledValue;
    private rpcValue;
    private switchElement;
    private switchContainer;
    private matSlideToggle;
    private onoffContainer;
    private onLabel;
    private offLabel;
    private switchTitleContainer;
    private switchTitle;
    private textMeasure;
    private switchErrorContainer;
    private switchError;
    private switchResize$;
    constructor(utils: UtilsService, store: Store<AppState>);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private init;
    private resize;
    private setFontSize;
    private measureTextWidth;
    private onError;
    private setValue;
    onValue(): void;
    private rpcRequestValue;
    private rpcUpdateValue;
    private subscribeForValue;
    private onDataUpdated;
    private onDataUpdateError;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwitchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwitchComponent, "tb-switch", never, { "ctx": "ctx"; "switchType": "switchType"; }, {}, never, never>;
}
export {};
