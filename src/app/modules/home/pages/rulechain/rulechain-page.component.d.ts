/// <reference types="tooltipster" />
import { AfterViewInit, ElementRef, OnDestroy, OnInit, QueryList } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { HasDirtyFlag } from '@core/guards/confirm-on-exit.guard';
import { TranslateService } from '@ngx-translate/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatExpansionPanel } from '@angular/material/expansion';
import { DialogService } from '@core/services/dialog.service';
import { AuthService } from '@core/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RuleChain, RuleChainMetaData, RuleChainType } from '@shared/models/rule-chain.models';
import { NgxFlowchartComponent, UserCallbacks } from 'ngx-flowchart';
import { FcRuleEdge, FcRuleNode, FcRuleNodeType, LinkLabel, RuleNodeComponentDescriptor, RuleNodeType } from '@shared/models/rule-node.models';
import { FcRuleNodeModel, FcRuleNodeTypeModel } from './rulechain-page.models';
import { RuleChainService } from '@core/http/rule-chain.service';
import { Observable } from 'rxjs';
import { ISearchableComponent } from '../../models/searchable-component.models';
import { RuleNodeDetailsComponent } from '@home/pages/rulechain/rule-node-details.component';
import { RuleNodeLinkComponent } from './rule-node-link.component';
import { DialogComponent } from '@shared/components/dialog.component';
import { MatMenuTrigger } from '@angular/material/menu';
import { ItemBufferService } from '@core/services/item-buffer.service';
import { Hotkey } from 'angular2-hotkeys';
import { DebugEventType, EventType } from '@shared/models/event.models';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import * as i0 from "@angular/core";
export declare class RuleChainPageComponent extends PageComponent implements AfterViewInit, OnInit, OnDestroy, HasDirtyFlag, ISearchableComponent {
    protected store: Store<AppState>;
    private route;
    private router;
    private ruleChainService;
    private authService;
    private translate;
    private itembuffer;
    private userPermissionsService;
    dialog: MatDialog;
    dialogService: DialogService;
    fb: FormBuilder;
    get isDirty(): boolean;
    width: string;
    height: string;
    ruleNodeSearchInputField: ElementRef;
    ruleChainCanvas: NgxFlowchartComponent;
    expansionPanels: QueryList<MatExpansionPanel>;
    ruleChainMenuTrigger: MatMenuTrigger;
    readonly: boolean;
    eventTypes: typeof EventType;
    debugEventTypes: typeof DebugEventType;
    ruleChainMenuPosition: {
        x: string;
        y: string;
    };
    contextMenuEvent: MouseEvent;
    ruleNodeTypeDescriptorsMap: Map<RuleNodeType, import("@shared/models/rule-node.models").RuleNodeTypeDescriptor>;
    ruleNodeTypesLibraryArray: RuleNodeType[];
    isImport: boolean;
    isDirtyValue: boolean;
    isInvalid: boolean;
    ruleChainType: RuleChainType;
    errorTooltips: {
        [nodeId: string]: JQueryTooltipster.ITooltipsterInstance;
    };
    isFullscreen: boolean;
    selectedRuleNodeTabIndex: number;
    editingRuleNode: FcRuleNode;
    isEditingRuleNode: boolean;
    editingRuleNodeIndex: number;
    editingRuleNodeAllowCustomLabels: boolean;
    editingRuleNodeLinkLabels: {
        [label: string]: LinkLabel;
    };
    editingRuleNodeSourceRuleChainId: string;
    ruleNodeComponent: RuleNodeDetailsComponent;
    ruleNodeLinkComponent: RuleNodeLinkComponent;
    editingRuleNodeLink: FcRuleEdge;
    isEditingRuleNodeLink: boolean;
    editingRuleNodeLinkIndex: number;
    hotKeys: Hotkey[];
    enableHotKeys: boolean;
    isLibraryOpen: boolean;
    ruleNodeSearch: string;
    ruleNodeTypeSearch: string;
    ruleChain: RuleChain;
    ruleChainMetaData: RuleChainMetaData;
    ruleChainModel: FcRuleNodeModel;
    selectedObjects: any[];
    editCallbacks: UserCallbacks;
    nextNodeID: number;
    nextConnectorID: number;
    inputConnectorId: number;
    ruleNodeTypesModel: {
        [type: string]: {
            model: FcRuleNodeTypeModel;
            selectedObjects: any[];
        };
    };
    nodeLibCallbacks: UserCallbacks;
    ruleNodeComponents: Array<RuleNodeComponentDescriptor>;
    flowchartConstants: {
        htmlPrefix: string;
        leftConnectorType: string;
        rightConnectorType: string;
        curvedStyle: string;
        lineStyle: string;
        dragAnimationRepaint: string;
        dragAnimationShadow: string;
        canvasClass: string;
        selectedClass: string;
        editClass: string;
        activeClass: string;
        hoverClass: string;
        draggingClass: string;
        edgeClass: string;
        edgeLabelClass: string;
        connectorClass: string;
        magnetClass: string;
        nodeClass: string;
        nodeOverlayClass: string;
        leftConnectorClass: string;
        rightConnectorClass: string;
        canvasResizeThreshold: number;
        canvasResizeStep: number;
    };
    private rxSubscription;
    private tooltipTimeout;
    constructor(store: Store<AppState>, route: ActivatedRoute, router: Router, ruleChainService: RuleChainService, authService: AuthService, translate: TranslateService, itembuffer: ItemBufferService, userPermissionsService: UserPermissionsService, dialog: MatDialog, dialogService: DialogService, fb: FormBuilder);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onSearchTextUpdated(searchText: string): void;
    private init;
    private reset;
    private initHotKeys;
    updateRuleChainLibrary(): void;
    private loadRuleChainLibrary;
    private createRuleChainModel;
    openRuleChainContextMenu($event: MouseEvent): void;
    onRuleChainContextMenuMouseLeave(): void;
    private prepareContextMenu;
    private prepareRuleChainContextMenu;
    private prepareRuleNodeContextMenu;
    private prepareEdgeContextMenu;
    private canCreateNestedRuleChain;
    private createNestedRuleChain;
    onModelChanged(): void;
    helpLinkIdForRuleNodeType(): string;
    openNodeDetails(node: FcRuleNode): void;
    openLinkDetails(edge: FcRuleEdge): void;
    private copyNode;
    private copyRuleNodes;
    private pasteRuleNodes;
    onDetailsDrawerClosed(): void;
    onEditRuleNodeClosed(): void;
    onEditRuleNodeLinkClosed(): void;
    onRevertRuleNodeEdit(): void;
    onRevertRuleNodeLinkEdit(): void;
    saveRuleNode(): void;
    saveRuleNodeLink(): void;
    typeHeaderMouseEnter(event: MouseEvent, ruleNodeType: RuleNodeType): void;
    displayLibNodeDescriptionTooltip(event: MouseEvent, node: FcRuleNodeType): void;
    displayNodeDescriptionTooltip(event: MouseEvent, node: FcRuleNode): void;
    destroyTooltips(): void;
    private updateRuleNodesHighlight;
    objectsSelected(): boolean;
    deleteSelected(): void;
    isDebugModeEnabled(): boolean;
    resetDebugModeInAllNodes(): void;
    validate(): void;
    saveRuleChain(): void;
    revertRuleChain(): void;
    addRuleNode(ruleNode: FcRuleNode): void;
    addRuleNodeLink(link: FcRuleEdge, labels: {
        [label: string]: LinkLabel;
    }, allowCustomLabels: boolean, sourceRuleChainId: string): Observable<FcRuleEdge>;
    private updateNodeErrorTooltip;
    private updateErrorTooltips;
    private displayTooltip;
    static ɵfac: i0.ɵɵFactoryDeclaration<RuleChainPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RuleChainPageComponent, "tb-rulechain-page", never, {}, {}, never, never>;
}
export interface AddRuleNodeLinkDialogData {
    link: FcRuleEdge;
    labels: {
        [label: string]: LinkLabel;
    };
    allowCustomLabels: boolean;
    sourceRuleChainId: string;
}
export declare class AddRuleNodeLinkDialogComponent extends DialogComponent<AddRuleNodeLinkDialogComponent, FcRuleEdge> implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: AddRuleNodeLinkDialogData;
    private errorStateMatcher;
    dialogRef: MatDialogRef<AddRuleNodeLinkDialogComponent, FcRuleEdge>;
    private fb;
    ruleNodeLinkFormGroup: FormGroup;
    link: FcRuleEdge;
    labels: {
        [label: string]: LinkLabel;
    };
    allowCustomLabels: boolean;
    sourceRuleChainId: string;
    submitted: boolean;
    constructor(store: Store<AppState>, router: Router, data: AddRuleNodeLinkDialogData, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<AddRuleNodeLinkDialogComponent, FcRuleEdge>, fb: FormBuilder);
    ngOnInit(): void;
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    add(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AddRuleNodeLinkDialogComponent, [null, null, null, { skipSelf: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AddRuleNodeLinkDialogComponent, "tb-add-rule-node-link-dialog", never, {}, {}, never, never>;
}
export interface AddRuleNodeDialogData {
    ruleNode: FcRuleNode;
    ruleChainId: string;
    ruleChainType: RuleChainType;
}
export declare class AddRuleNodeDialogComponent extends DialogComponent<AddRuleNodeDialogComponent, FcRuleNode> implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: AddRuleNodeDialogData;
    private errorStateMatcher;
    dialogRef: MatDialogRef<AddRuleNodeDialogComponent, FcRuleNode>;
    ruleNodeDetailsComponent: RuleNodeDetailsComponent;
    ruleNode: FcRuleNode;
    ruleChainId: string;
    ruleChainType: RuleChainType;
    submitted: boolean;
    constructor(store: Store<AppState>, router: Router, data: AddRuleNodeDialogData, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<AddRuleNodeDialogComponent, FcRuleNode>);
    ngOnInit(): void;
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    helpLinkIdForRuleNodeType(): string;
    cancel(): void;
    add(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AddRuleNodeDialogComponent, [null, null, null, { skipSelf: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AddRuleNodeDialogComponent, "tb-add-rule-node-dialog", never, {}, {}, never, never>;
}
export interface CreateNestedRuleChainDialogData {
    ruleChainType: RuleChainType;
}
export declare class CreateNestedRuleChainDialogComponent extends DialogComponent<CreateNestedRuleChainDialogComponent, RuleChain> implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: CreateNestedRuleChainDialogData;
    private errorStateMatcher;
    private fb;
    private ruleChainService;
    dialogRef: MatDialogRef<CreateNestedRuleChainDialogComponent, RuleChain>;
    createNestedRuleChainFormGroup: FormGroup;
    submitted: boolean;
    constructor(store: Store<AppState>, router: Router, data: CreateNestedRuleChainDialogData, errorStateMatcher: ErrorStateMatcher, fb: FormBuilder, ruleChainService: RuleChainService, dialogRef: MatDialogRef<CreateNestedRuleChainDialogComponent, RuleChain>);
    ngOnInit(): void;
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    add(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CreateNestedRuleChainDialogComponent, [null, null, null, { skipSelf: true; }, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CreateNestedRuleChainDialogComponent, "tb-create-nested-rulechain-dialog", never, {}, {}, never, never>;
}
