import { ChangeDetectorRef, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityComponent } from '../../components/entity/entity.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { Integration, IntegrationType, IntegrationTypeInfo } from '@shared/models/integration.models';
import { ConverterType } from '@shared/models/converter.models';
import { IntegrationFormComponent } from '@home/pages/integration/configurations/integration-form.component';
import { IntegrationService } from '@core/http/integration.service';
import * as i0 from "@angular/core";
export declare class IntegrationComponent extends EntityComponent<Integration> implements OnInit {
    protected store: Store<AppState>;
    protected translate: TranslateService;
    protected entityValue: Integration;
    protected entitiesTableConfigValue: EntityTableConfig<Integration>;
    protected fb: FormBuilder;
    protected integrationService: IntegrationService;
    protected cd: ChangeDetectorRef;
    integrationFormComponent: IntegrationFormComponent;
    integrationType: IntegrationType;
    converterType: typeof ConverterType;
    integrationTypes: typeof IntegrationType;
    integrationTypeKeys: string[];
    integrationTypeInfos: Map<IntegrationType, IntegrationTypeInfo>;
    integrationForm: FormGroup;
    integrationInfo: IntegrationTypeInfo;
    constructor(store: Store<AppState>, translate: TranslateService, entityValue: Integration, entitiesTableConfigValue: EntityTableConfig<Integration>, fb: FormBuilder, integrationService: IntegrationService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    hideDelete(): boolean;
    buildForm(entity: Integration): FormGroup;
    setConfigurationForm(configuration?: {}): void;
    updateFormState(): void;
    private checkIsNewIntegration;
    private integrationTypeChanged;
    private checkIsRemote;
    get isRemoteIntegration(): boolean;
    updateForm(entity: Integration): void;
    getIntegrationForm(form: object, ignoreNonPrimitiveFields?: string[]): FormGroup;
    prepareFormValue(formValue: any): any;
    private generateSecret;
    onIntegrationIdCopied(): void;
    onIntegrationInfoCopied(type: string): void;
    onIntegrationCheck(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IntegrationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IntegrationComponent, "tb-integration", never, {}, {}, never, never>;
}
