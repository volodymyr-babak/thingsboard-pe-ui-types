import { FormattedData, MapProviders, UnitedMapSettings } from './map-models';
import LeafletMap from './leaflet-map';
import { MapWidgetInterface, MapWidgetStaticInterface } from './map-widget.interface';
import { WidgetContext } from '@app/modules/home/models/widget-component.models';
import { Datasource, DatasourceData, JsonSettingsSchema } from '@shared/models/widget.models';
import { EntityDataPageLink } from '@shared/models/query/query.models';
import { Observable } from 'rxjs';
export declare class MapWidgetController implements MapWidgetInterface {
    mapProvider: MapProviders;
    private drawRoutes;
    ctx: WidgetContext;
    constructor(mapProvider: MapProviders, drawRoutes: boolean, ctx: WidgetContext, $element: HTMLElement, isEdit?: boolean);
    map: LeafletMap;
    provider: MapProviders;
    schema: JsonSettingsSchema;
    data: DatasourceData[];
    settings: UnitedMapSettings;
    pageLink: EntityDataPageLink;
    static dataKeySettingsSchema(): object;
    static getProvidersSchema(mapProvider: MapProviders, ignoreImageMap?: boolean): JsonSettingsSchema;
    static settingsSchema(mapProvider: MapProviders, drawRoutes: boolean): JsonSettingsSchema;
    static actionSources(): object;
    translate: (key: string, defaultTranslation?: string) => string;
    getDescriptors(name: string): {
        [name: string]: ($event: Event, datasource: Datasource) => void;
    };
    onInit(): void;
    private onCustomAction;
    setMarkerLocation(e: FormattedData, lat?: number, lng?: number): Observable<any>;
    savePolygonLocation(e: FormattedData, coordinates?: Array<any>): Observable<any>;
    saveLocation(e: FormattedData, values: {
        [key: string]: any;
    }): Observable<any>;
    initSettings(settings: UnitedMapSettings, isEditMap?: boolean): UnitedMapSettings;
    update(): void;
    resize(): void;
    destroy(): void;
}
export declare let TbMapWidgetV2: MapWidgetStaticInterface;
