import { HttpClient } from '@angular/common/http';
import { PageLink } from '@shared/models/page/page-link';
import { RequestConfig } from '@core/http/http-utils';
import { Observable } from 'rxjs';
import { PageData } from '@shared/models/page/page-data';
import { ContactBased } from '@shared/models/contact-based.model';
import { EntityId } from '@shared/models/id/entity-id';
import { EntityGroup, EntityGroupInfo, ShareGroupRequest, ShortEntityView } from '@shared/models/entity-group.models';
import { EntityType } from '@shared/models/entity-type.models';
import { EntityGroupId } from '@shared/models/id/entity-group-id';
import { BaseData, HasId } from '@shared/models/base-data';
import { OtaPackageService } from '@core/http/ota-package.service';
import { DeviceGroupOtaPackage, OtaUpdateType } from '@shared/models/ota-package.models';
import { OtaPackageId } from '@shared/models/id/ota-package-id';
import * as i0 from "@angular/core";
export declare class EntityGroupService {
    private http;
    private otaPackageService;
    constructor(http: HttpClient, otaPackageService: OtaPackageService);
    getOwners(pageLink: PageLink, config?: RequestConfig): Observable<PageData<ContactBased<EntityId>>>;
    getEntityGroup(entityGroupId: string, config?: RequestConfig): Observable<EntityGroupInfo>;
    fetchOtaPackageGroupInfo(group: EntityGroupInfo, config?: RequestConfig): Observable<EntityGroupInfo>;
    updateDeviceGroupOtaPackage(deviceGroupOtaPackage: DeviceGroupOtaPackage, otaPackageId: OtaPackageId | null, groupId: EntityGroupId, otaPackageType: OtaUpdateType, config?: RequestConfig): Observable<DeviceGroupOtaPackage>;
    saveDeviceGroupOtaPackage(deviceGroupOtaPackage: DeviceGroupOtaPackage, config?: RequestConfig): Observable<DeviceGroupOtaPackage>;
    saveDeviceEntityGroup(entityGroup: EntityGroupInfo, originalEntityGroup: EntityGroupInfo, config?: RequestConfig): Observable<EntityGroupInfo>;
    deleteDeviceGroupOtaPackage(otaPackageId: string, config?: RequestConfig): Observable<null>;
    saveEntityGroup(entityGroup: EntityGroup, config?: RequestConfig): Observable<EntityGroupInfo>;
    deleteEntityGroup(entityGroupId: string, config?: RequestConfig): Observable<Object>;
    makeEntityGroupPublic(entityGroupId: string, config?: RequestConfig): Observable<any>;
    makeEntityGroupPrivate(entityGroupId: string, config?: RequestConfig): Observable<any>;
    shareEntityGroup(entityGroupId: string, shareGroupRequest: ShareGroupRequest, config?: RequestConfig): Observable<any>;
    getEntityGroups(groupType: EntityType, config?: RequestConfig): Observable<Array<EntityGroupInfo>>;
    getEntityGroupIdsForEntityId(entityType: EntityType, entityId: string, config?: RequestConfig): Observable<Array<EntityGroupId>>;
    getEntityGroupsByIds(entityGroupIds: Array<string>, config?: RequestConfig): Observable<Array<EntityGroup>>;
    getEntityGroupsByOwnerId(ownerType: EntityType, ownerId: string, groupType: EntityType, config?: RequestConfig): Observable<Array<EntityGroupInfo>>;
    getEntityGroupAllByOwnerId(ownerType: EntityType, ownerId: string, groupType: EntityType, config?: RequestConfig): Observable<EntityGroupInfo>;
    getEntityGroupsByPageLink(pageLink: PageLink, groupType: EntityType, config?: RequestConfig): Observable<PageData<EntityGroupInfo>>;
    addEntityToEntityGroup(entityGroupId: string, entityId: string, config?: RequestConfig): Observable<any>;
    addEntitiesToEntityGroup(entityGroupId: string, entityIds: string[], config?: RequestConfig): Observable<any>;
    changeEntityOwner(ownerId: EntityId, entityId: EntityId, config?: RequestConfig): Observable<any>;
    removeEntityFromEntityGroup(entityGroupId: string, entityId: string, config?: RequestConfig): Observable<any>;
    removeEntitiesFromEntityGroup(entityGroupId: string, entityIds: string[], config?: RequestConfig): Observable<any>;
    getEntityGroupEntity(entityGroupId: string, entityId: string, config?: RequestConfig): Observable<ShortEntityView>;
    getEntityGroupEntities<T extends BaseData<HasId> | ShortEntityView>(entityGroupId: string, pageLink: PageLink, entityType?: EntityType, config?: RequestConfig): Observable<PageData<T>>;
    getEdgeEntityGroups(edgeId: string, groupType: EntityType, config?: RequestConfig): Observable<Array<EntityGroupInfo>>;
    assignEntityGroupToEdge(edgeId: string, entityGroupId: string, groupType: string, config?: RequestConfig): Observable<EntityGroup>;
    unassignEntityGroupFromEdge(edgeId: string, entityGroupId: string, groupType: string, config?: RequestConfig): Observable<EntityGroup>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityGroupService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EntityGroupService>;
}
