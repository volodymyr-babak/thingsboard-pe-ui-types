import { BaseData } from '@shared/models/base-data';
import { TenantId } from '@shared/models/id/tenant-id';
import { ConverterId } from '@shared/models/id/converter-id';
import { ContentType } from '@shared/models/constants';
export declare enum ConverterType {
    UPLINK = "UPLINK",
    DOWNLINK = "DOWNLINK"
}
export declare const converterTypeTranslationMap: Map<ConverterType, string>;
export interface Converter extends BaseData<ConverterId> {
    tenantId?: TenantId;
    name: string;
    type: ConverterType;
    debugMode: boolean;
    configuration: any;
    additionalInfo?: any;
}
export interface TestUpLinkInputParams {
    metadata: {
        [key: string]: string;
    };
    payload: string;
    decoder: string;
}
export interface TestDownLinkInputParams {
    metadata: {
        [key: string]: string;
    };
    msg: string;
    msgType: string;
    integrationMetadata: {
        [key: string]: string;
    };
    encoder: string;
}
export declare type TestConverterInputParams = TestUpLinkInputParams & TestDownLinkInputParams;
export interface TestConverterResult {
    output: string;
    error: string;
}
export interface ConverterDebugInput {
    inContentType: ContentType;
    inContent: string;
    inMetadata: string;
    inMsgType: string;
    inIntegrationMetadata: string;
}
export declare function getConverterHelpLink(converter: Converter): string;
