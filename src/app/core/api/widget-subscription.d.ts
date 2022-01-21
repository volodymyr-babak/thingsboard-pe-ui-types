import { IWidgetSubscription, SubscriptionEntityInfo, WidgetSubscriptionCallbacks, WidgetSubscriptionContext, WidgetSubscriptionOptions } from '@core/api/widget-api.models';
import { DataSetHolder, Datasource, DatasourceData, LegendConfig, LegendData, widgetType } from '@app/shared/models/widget.models';
import { HttpErrorResponse } from '@angular/common/http';
import { ComparisonDuration, SubscriptionTimewindow, Timewindow, WidgetTimewindow } from '@app/shared/models/time/time.models';
import { Observable, Subject } from 'rxjs';
import { CancelAnimationFrame } from '@core/services/raf.service';
import { PageData } from '@shared/models/page/page-data';
import { EntityDataListener } from '@core/api/entity-data.service';
import { AlarmData, AlarmDataPageLink, EntityDataPageLink, KeyFilter } from '@shared/models/query/query.models';
import { AlarmDataListener } from '@core/api/alarm-data.service';
export declare class WidgetSubscription implements IWidgetSubscription {
    options: WidgetSubscriptionOptions;
    id: string;
    ctx: WidgetSubscriptionContext;
    type: widgetType;
    callbacks: WidgetSubscriptionCallbacks;
    timeWindow: WidgetTimewindow;
    originalTimewindow: Timewindow;
    timeWindowConfig: Timewindow;
    timezone: string;
    subscriptionTimewindow: SubscriptionTimewindow;
    useDashboardTimewindow: boolean;
    tsOffset: number;
    hasDataPageLink: boolean;
    singleEntity: boolean;
    warnOnPageDataOverflow: boolean;
    ignoreDataUpdateOnIntervalTick: boolean;
    datasourcePages: PageData<Datasource>[];
    dataPages: PageData<Array<DatasourceData>>[];
    entityDataListeners: Array<EntityDataListener>;
    configuredDatasources: Array<Datasource>;
    data: Array<DatasourceData>;
    datasources: Array<Datasource>;
    hiddenData: Array<DataSetHolder>;
    legendData: LegendData;
    legendConfig: LegendConfig;
    caulculateLegendData: boolean;
    displayLegend: boolean;
    stateData: boolean;
    datasourcesOptional: boolean;
    decimals: number;
    units: string;
    comparisonEnabled: boolean;
    timeForComparison: ComparisonDuration;
    comparisonCustomIntervalValue: number;
    comparisonTimeWindow: WidgetTimewindow;
    timewindowForComparison: SubscriptionTimewindow;
    alarms: PageData<AlarmData>;
    alarmSource: Datasource;
    alarmDataListener: AlarmDataListener;
    loadingData: boolean;
    targetDeviceAliasIds?: Array<string>;
    targetDeviceIds?: Array<string>;
    executingRpcRequest: boolean;
    rpcEnabled: boolean;
    rpcErrorText: string;
    rpcRejection: HttpErrorResponse;
    init$: Observable<IWidgetSubscription>;
    cafs: {
        [cafId: string]: CancelAnimationFrame;
    };
    hasResolvedData: boolean;
    targetDeviceAliasId: string;
    targetDeviceId: string;
    targetDeviceName: string;
    executingSubjects: Array<Subject<any>>;
    subscribed: boolean;
    widgetTimewindowChangedSubject: Subject<WidgetTimewindow>;
    widgetTimewindowChanged$: Observable<WidgetTimewindow>;
    constructor(subscriptionContext: WidgetSubscriptionContext, options: WidgetSubscriptionOptions);
    private initRpc;
    private initAlarmSubscription;
    private configureAlarmsData;
    private initDataSubscription;
    private prepareDataSubscriptions;
    private resetData;
    getFirstEntityInfo(): SubscriptionEntityInfo;
    onAliasesChanged(aliasIds: Array<string>): boolean;
    onFiltersChanged(filterIds: Array<string>): boolean;
    private onDataUpdated;
    private onSubscriptionMessage;
    onDashboardTimewindowChanged(newDashboardTimewindow: Timewindow): void;
    updateDataVisibility(index: number): void;
    updateTimewindowConfig(newTimewindow: Timewindow): void;
    onResetTimewindow(): void;
    onUpdateTimewindow(startTimeMs: number, endTimeMs: number, interval?: number): void;
    sendOneWayCommand(method: string, params?: any, timeout?: number, persistent?: boolean, persistentPollingInterval?: number, retries?: number, additionalInfo?: any, requestUUID?: string): Observable<any>;
    sendTwoWayCommand(method: string, params?: any, timeout?: number, persistent?: boolean, persistentPollingInterval?: number, retries?: number, additionalInfo?: any, requestUUID?: string): Observable<any>;
    clearRpcError(): void;
    completedCommand(): void;
    sendCommand(oneWayElseTwoWay: boolean, method: string, params?: any, timeout?: number, persistent?: boolean, persistentPollingInterval?: number, retries?: number, additionalInfo?: any, requestUUID?: string): Observable<any>;
    private extractRejectionErrorText;
    private prepareMessageFromData;
    update(isTimewindowTypeChanged?: boolean): void;
    subscribe(): void;
    subscribeAllForPaginatedData(pageLink: EntityDataPageLink, keyFilters: KeyFilter[]): Observable<any>;
    subscribeForPaginatedData(datasourceIndex: number, pageLink: EntityDataPageLink, keyFilters: KeyFilter[]): Observable<any>;
    subscribeForAlarms(pageLink: AlarmDataPageLink, keyFilters: KeyFilter[]): void;
    private doSubscribe;
    private updateDataTimewindow;
    private dataSubscribe;
    unsubscribe(): void;
    private alarmsUnsubscribe;
    private checkRpcTarget;
    private checkAlarmSource;
    private checkAlarmSourceFilters;
    private updateAlarmSubscription;
    private updateAlarmDataSubscription;
    private checkSubscriptions;
    private checkSubscriptionsFilters;
    private updateDataSubscriptions;
    private updatePaginatedDataSubscriptions;
    isDataResolved(): boolean;
    exportData(): {
        [key: string]: any;
    }[];
    private checkProperty;
    destroy(): void;
    private notifyDataLoading;
    private notifyDataLoaded;
    private updateTimewindow;
    private updateTsOffset;
    private updateRealtimeSubscription;
    private updateComparisonTimewindow;
    private updateSubscriptionForComparison;
    private initialPageDataChanged;
    private forceReInit;
    private dataLoaded;
    private configureLoadedData;
    private entityDataToDatasourceData;
    private entityDataToDatasource;
    private dataUpdated;
    private alarmsLoaded;
    private alarmsUpdated;
    private updateLegend;
    private loadStDiff;
}
