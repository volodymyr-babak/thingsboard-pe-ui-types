import { BaseData } from '@shared/models/base-data';
import { TenantId } from '@shared/models/id/tenant-id';
import { WidgetTypeId } from '@shared/models/id/widget-type-id';
import { Timewindow } from '@shared/models/time/time.models';
import { EntityType } from '@shared/models/entity-type.models';
import { AlarmSearchStatus, AlarmSeverity } from '@shared/models/alarm.models';
import { DataKeyType } from './telemetry/telemetry.models';
import { EntityId } from '@shared/models/id/entity-id';
import * as moment_ from 'moment';
import { EntityDataPageLink, EntityFilter, KeyFilter } from '@shared/models/query/query.models';
import { PopoverPlacement } from '@shared/components/popover.models';
export declare enum widgetType {
    timeseries = "timeseries",
    latest = "latest",
    rpc = "rpc",
    alarm = "alarm",
    static = "static"
}
export interface WidgetTypeTemplate {
    bundleAlias: string;
    alias: string;
}
export interface WidgetTypeData {
    name: string;
    icon: string;
    isMdiIcon?: boolean;
    configHelpLinkId: string;
    template: WidgetTypeTemplate;
}
export declare const widgetTypesData: Map<widgetType, WidgetTypeData>;
export interface WidgetResource {
    url: string;
    isModule?: boolean;
}
export interface WidgetActionSource {
    name: string;
    value: string;
    multiple: boolean;
    hasShowCondition?: boolean;
}
export declare const widgetActionSources: {
    [acionSourceId: string]: WidgetActionSource;
};
export interface WidgetTypeDescriptor {
    type: widgetType;
    resources: Array<WidgetResource>;
    templateHtml: string;
    templateCss: string;
    controllerScript: string;
    settingsSchema?: string | any;
    dataKeySettingsSchema?: string | any;
    defaultConfig: string;
    sizeX: number;
    sizeY: number;
}
export interface WidgetTypeParameters {
    useCustomDatasources?: boolean;
    maxDatasources?: number;
    maxDataKeys?: number;
    datasourcesOptional?: boolean;
    dataKeysOptional?: boolean;
    stateData?: boolean;
    hasDataPageLink?: boolean;
    singleEntity?: boolean;
    warnOnPageDataOverflow?: boolean;
    ignoreDataUpdateOnIntervalTick?: boolean;
}
export interface WidgetControllerDescriptor {
    widgetTypeFunction?: any;
    settingsSchema?: string | any;
    dataKeySettingsSchema?: string | any;
    typeParameters?: WidgetTypeParameters;
    actionSources?: {
        [actionSourceId: string]: WidgetActionSource;
    };
}
export interface BaseWidgetType extends BaseData<WidgetTypeId> {
    tenantId: TenantId;
    bundleAlias: string;
    alias: string;
    name: string;
}
export interface WidgetType extends BaseWidgetType {
    descriptor: WidgetTypeDescriptor;
}
export interface WidgetTypeInfo extends BaseWidgetType {
    image: string;
    description: string;
    widgetType: widgetType;
}
export interface WidgetTypeDetails extends WidgetType {
    image: string;
    description: string;
}
export declare enum LegendDirection {
    column = "column",
    row = "row"
}
export declare const legendDirectionTranslationMap: Map<LegendDirection, string>;
export declare enum LegendPosition {
    top = "top",
    bottom = "bottom",
    left = "left",
    right = "right"
}
export declare const legendPositionTranslationMap: Map<LegendPosition, string>;
export interface LegendConfig {
    position: LegendPosition;
    direction?: LegendDirection;
    sortDataKeys: boolean;
    showMin: boolean;
    showMax: boolean;
    showAvg: boolean;
    showTotal: boolean;
}
export declare function defaultLegendConfig(wType: widgetType): LegendConfig;
export interface KeyInfo {
    name: string;
    label?: string;
    color?: string;
    funcBody?: string;
    postFuncBody?: string;
    units?: string;
    decimals?: number;
}
export interface DataKey extends KeyInfo {
    type: DataKeyType;
    pattern?: string;
    title?: string;
    settings?: any;
    usePostProcessing?: boolean;
    hidden?: boolean;
    inLegend?: boolean;
    isAdditional?: boolean;
    origDataKeyIndex?: number;
    _hash?: number;
}
export declare enum DatasourceType {
    function = "function",
    entity = "entity",
    entityCount = "entityCount"
}
export declare const datasourceTypeTranslationMap: Map<DatasourceType, string>;
export interface Datasource {
    type?: DatasourceType | any;
    name?: string;
    aliasName?: string;
    dataKeys?: Array<DataKey>;
    entityType?: EntityType;
    entityId?: string;
    entityName?: string;
    entityAliasId?: string;
    filterId?: string;
    unresolvedStateEntity?: boolean;
    dataReceived?: boolean;
    entity?: BaseData<EntityId>;
    entityLabel?: string;
    entityDescription?: string;
    generated?: boolean;
    isAdditional?: boolean;
    origDatasourceIndex?: number;
    pageLink?: EntityDataPageLink;
    keyFilters?: Array<KeyFilter>;
    entityFilter?: EntityFilter;
    dataKeyStartIndex?: number;
    [key: string]: any;
}
export declare type DataSet = [number, any][];
export interface DataSetHolder {
    data: DataSet;
}
export interface DatasourceData extends DataSetHolder {
    datasource: Datasource;
    dataKey: DataKey;
}
export interface LegendKey {
    dataKey: DataKey;
    dataIndex: number;
}
export interface LegendKeyData {
    min: string;
    max: string;
    avg: string;
    total: string;
    hidden: boolean;
}
export interface LegendData {
    keys: Array<LegendKey>;
    data: Array<LegendKeyData>;
}
export declare enum WidgetActionType {
    openDashboardState = "openDashboardState",
    updateDashboardState = "updateDashboardState",
    openDashboard = "openDashboard",
    custom = "custom",
    customPretty = "customPretty",
    mobileAction = "mobileAction"
}
export declare enum WidgetMobileActionType {
    takePictureFromGallery = "takePictureFromGallery",
    takePhoto = "takePhoto",
    mapDirection = "mapDirection",
    mapLocation = "mapLocation",
    scanQrCode = "scanQrCode",
    makePhoneCall = "makePhoneCall",
    getLocation = "getLocation",
    takeScreenshot = "takeScreenshot"
}
export declare const widgetActionTypes: WidgetActionType[];
export declare const widgetActionTypeTranslationMap: Map<WidgetActionType, string>;
export declare const widgetMobileActionTypeTranslationMap: Map<WidgetMobileActionType, string>;
export declare enum WidgetExportType {
    csv = "csv",
    xls = "xls",
    xlsx = "xlsx"
}
export declare const widgetExportTypeTranslationMap: Map<WidgetExportType, string>;
export interface MobileLaunchResult {
    launched: boolean;
}
export interface MobileImageResult {
    imageUrl: string;
}
export interface MobileQrCodeResult {
    code: string;
    format: string;
}
export interface MobileLocationResult {
    latitude: number;
    longitude: number;
}
export declare type MobileActionResult = MobileLaunchResult & MobileImageResult & MobileQrCodeResult & MobileLocationResult;
export interface WidgetMobileActionResult<T extends MobileActionResult> {
    result?: T;
    hasResult: boolean;
    error?: string;
    hasError: boolean;
}
export interface ProcessImageDescriptor {
    processImageFunction: string;
}
export interface ProcessLaunchResultDescriptor {
    processLaunchResultFunction?: string;
}
export interface LaunchMapDescriptor extends ProcessLaunchResultDescriptor {
    getLocationFunction: string;
}
export interface ScanQrCodeDescriptor {
    processQrCodeFunction: string;
}
export interface MakePhoneCallDescriptor extends ProcessLaunchResultDescriptor {
    getPhoneNumberFunction: string;
}
export interface GetLocationDescriptor {
    processLocationFunction: string;
}
export declare type WidgetMobileActionDescriptors = ProcessImageDescriptor & LaunchMapDescriptor & ScanQrCodeDescriptor & MakePhoneCallDescriptor & GetLocationDescriptor;
export interface WidgetMobileActionDescriptor extends WidgetMobileActionDescriptors {
    type: WidgetMobileActionType;
    handleErrorFunction?: string;
    handleEmptyResultFunction?: string;
}
export interface CustomActionDescriptor {
    customFunction?: string;
    customResources?: Array<WidgetResource>;
    customHtml?: string;
    customCss?: string;
}
export interface WidgetActionDescriptor extends CustomActionDescriptor {
    id: string;
    name: string;
    icon: string;
    displayName?: string;
    type: WidgetActionType;
    targetDashboardId?: string;
    targetDashboardStateId?: string;
    openRightLayout?: boolean;
    openNewBrowserTab?: boolean;
    openInPopover?: boolean;
    popoverHideDashboardToolbar?: boolean;
    popoverPreferredPlacement?: PopoverPlacement;
    popoverHideOnClickOutside?: boolean;
    popoverWidth?: string;
    popoverHeight?: string;
    popoverStyle?: {
        [klass: string]: any;
    };
    openInSeparateDialog?: boolean;
    dialogTitle?: string;
    dialogHideDashboardToolbar?: boolean;
    dialogWidth?: number;
    dialogHeight?: number;
    setEntityId?: boolean;
    stateEntityParamName?: string;
    mobileAction?: WidgetMobileActionDescriptor;
    useShowWidgetActionFunction?: boolean;
    showWidgetActionFunction?: string;
}
export interface WidgetComparisonSettings {
    comparisonEnabled?: boolean;
    timeForComparison?: moment_.unitOfTime.DurationConstructor;
    comparisonCustomIntervalValue?: number;
}
export interface WidgetConfig {
    title?: string;
    titleIcon?: string;
    showTitle?: boolean;
    showTitleIcon?: boolean;
    iconColor?: string;
    iconSize?: string;
    titleTooltip?: string;
    dropShadow?: boolean;
    enableFullscreen?: boolean;
    enableDataExport?: boolean;
    useDashboardTimewindow?: boolean;
    displayTimewindow?: boolean;
    showLegend?: boolean;
    legendConfig?: LegendConfig;
    timewindow?: Timewindow;
    mobileHide?: boolean;
    mobileHeight?: number;
    mobileOrder?: number;
    color?: string;
    backgroundColor?: string;
    padding?: string;
    margin?: string;
    widgetStyle?: {
        [klass: string]: any;
    };
    widgetCss?: string;
    titleStyle?: {
        [klass: string]: any;
    };
    units?: string;
    decimals?: number;
    noDataDisplayMessage?: string;
    actions?: {
        [actionSourceId: string]: Array<WidgetActionDescriptor>;
    };
    settings?: any;
    alarmSource?: Datasource;
    alarmStatusList?: AlarmSearchStatus[];
    alarmSeverityList?: AlarmSeverity[];
    alarmTypeList?: string[];
    searchPropagatedAlarms?: boolean;
    datasources?: Array<Datasource>;
    targetDeviceAliasIds?: Array<string>;
    [key: string]: any;
}
export interface Widget extends WidgetInfo {
    typeId?: WidgetTypeId;
    sizeX: number;
    sizeY: number;
    row: number;
    col: number;
    config: WidgetConfig;
}
export interface WidgetInfo {
    id?: string;
    isSystemType: boolean;
    bundleAlias: string;
    typeAlias: string;
    type: widgetType;
    title: string;
    image?: string;
    description?: string;
}
export interface GroupInfo {
    formIndex: number;
    GroupTitle: string;
}
export interface JsonSchema {
    type: string;
    title?: string;
    properties: {
        [key: string]: any;
    };
    required?: string[];
}
export interface JsonSettingsSchema {
    schema?: JsonSchema;
    form?: any[];
    groupInfoes?: GroupInfo[];
}
export interface WidgetPosition {
    row: number;
    column: number;
}
export interface WidgetSize {
    sizeX: number;
    sizeY: number;
}
