import { ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EntityType } from '@shared/models/entity-type.models';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { DataKeyType } from '@shared/models/telemetry/telemetry.models';
import { EntityId } from '@app/shared/models/id/entity-id';
import { EntityView } from '@shared/models/entity-view.models';
import { GroupEntityComponent } from '@home/components/group/group-entity.component';
import { GroupEntityTableConfig } from '@home/models/group/group-entities-table-config.models';
import * as i0 from "@angular/core";
export declare class EntityViewComponent extends GroupEntityComponent<EntityView> {
    protected store: Store<AppState>;
    protected translate: TranslateService;
    protected entityValue: EntityView;
    protected entitiesTableConfigValue: GroupEntityTableConfig<EntityView>;
    protected fb: FormBuilder;
    protected cd: ChangeDetectorRef;
    entityType: typeof EntityType;
    dataKeyType: typeof DataKeyType;
    allowedEntityTypes: EntityType[];
    maxStartTimeMs: Observable<number | null>;
    minEndTimeMs: Observable<number | null>;
    selectedEntityId: Observable<EntityId | null>;
    constructor(store: Store<AppState>, translate: TranslateService, entityValue: EntityView, entitiesTableConfigValue: GroupEntityTableConfig<EntityView>, fb: FormBuilder, cd: ChangeDetectorRef);
    ngOnInit(): void;
    hideDelete(): boolean;
    hideAssignmentActions(): boolean;
    buildForm(entity: EntityView): FormGroup;
    updateForm(entity: EntityView): void;
    onEntityViewIdCopied($event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityViewComponent, "tb-entity-view", never, {}, {}, never, never>;
}
