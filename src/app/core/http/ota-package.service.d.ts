import { HttpClient } from '@angular/common/http';
import { PageLink } from '@shared/models/page/page-link';
import { RequestConfig } from '@core/http/http-utils';
import { Observable } from 'rxjs';
import { PageData } from '@shared/models/page/page-data';
import { ChecksumAlgorithm, DeviceGroupOtaPackage, OtaPackage, OtaPackageInfo, OtaPagesIds, OtaUpdateType } from '@shared/models/ota-package.models';
import { BaseData } from '@shared/models/base-data';
import { EntityId } from '@shared/models/id/entity-id';
import { TranslateService } from '@ngx-translate/core';
import { DialogService } from '@core/services/dialog.service';
import * as i0 from "@angular/core";
export declare class OtaPackageService {
    private http;
    private translate;
    private dialogService;
    constructor(http: HttpClient, translate: TranslateService, dialogService: DialogService);
    getOtaPackages(pageLink: PageLink, config?: RequestConfig): Observable<PageData<OtaPackageInfo>>;
    getOtaPackagesInfoByDeviceProfileId(pageLink: PageLink, deviceProfileId: string, type: OtaUpdateType, config?: RequestConfig): Observable<PageData<OtaPackageInfo>>;
    getOtaPackage(otaPackageId: string, config?: RequestConfig): Observable<OtaPackage>;
    getOtaPackageInfo(otaPackageId: string, config?: RequestConfig): Observable<OtaPackageInfo>;
    downloadOtaPackage(otaPackageId: string): Observable<any>;
    saveOtaPackage(otaPackage: OtaPackage, config?: RequestConfig): Observable<OtaPackage>;
    saveOtaPackageInfo(otaPackageInfo: OtaPackageInfo, config?: RequestConfig): Observable<OtaPackage>;
    uploadOtaPackageFile(otaPackageId: string, file: File, checksumAlgorithm: ChecksumAlgorithm, checksum?: string, config?: RequestConfig): Observable<any>;
    deleteOtaPackage(otaPackageId: string, config?: RequestConfig): Observable<Object>;
    getOtaPackageInfoByDeviceGroupId(deviceGroupId: string, type: OtaUpdateType, config?: RequestConfig): Observable<DeviceGroupOtaPackage>;
    getOtaPackagesInfoByDeviceGroupId(pageLink: PageLink, deviceGroupId: string, type: OtaUpdateType, config?: RequestConfig): Observable<PageData<OtaPackageInfo>>;
    countUpdateDeviceAfterChangePackage(type: OtaUpdateType, entityId: EntityId, packageId?: string, config?: RequestConfig): Observable<number>;
    confirmDialogUpdatePackage(entity: BaseData<EntityId> & OtaPagesIds, originEntity: BaseData<EntityId> & OtaPagesIds): Observable<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<OtaPackageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OtaPackageService>;
}
