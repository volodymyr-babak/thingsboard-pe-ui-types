import * as CanvasGauges from 'canvas-gauges';
import { FontStyle, FontWeight } from '@home/components/widget/lib/settings.models';
import { ColorFormats } from 'tinycolor2';
import GenericOptions = CanvasGauges.GenericOptions;
import BaseGauge = CanvasGauges.BaseGauge;
export declare type GaugeType = 'arc' | 'donut' | 'horizontalBar' | 'verticalBar';
export interface DigitalGaugeColorRange {
    pct: number;
    color: ColorFormats.RGBA;
    rgbString: string;
}
export interface ColorLevelSetting {
    value: number;
    color: string;
}
export declare type levelColors = Array<string | ColorLevelSetting>;
export interface CanvasDigitalGaugeOptions extends GenericOptions {
    gaugeType?: GaugeType;
    gaugeWithScale?: number;
    dashThickness?: number;
    roundedLineCap?: boolean;
    gaugeColor?: string;
    levelColors?: levelColors;
    symbol?: string;
    label?: string;
    hideValue?: boolean;
    hideMinMax?: boolean;
    fontTitle?: string;
    fontValue?: string;
    fontMinMaxSize?: number;
    fontMinMaxStyle?: FontStyle;
    fontMinMaxWeight?: FontWeight;
    colorMinMax?: string;
    fontMinMax?: string;
    fontLabelSize?: number;
    fontLabelStyle?: FontStyle;
    fontLabelWeight?: FontWeight;
    colorLabel?: string;
    colorValue?: string;
    fontLabel?: string;
    neonGlowBrightness?: number;
    isMobile?: boolean;
    donutStartAngle?: number;
    donutEndAngle?: number;
    colorsRange?: DigitalGaugeColorRange[];
    neonColorsRange?: DigitalGaugeColorRange[];
    neonColorTitle?: string;
    neonColorLabel?: string;
    neonColorValue?: string;
    neonColorMinMax?: string;
    timestamp?: number;
    gaugeWidthScale?: number;
    fontTitleHeight?: FontHeightInfo;
    fontLabelHeight?: FontHeightInfo;
    fontValueHeight?: FontHeightInfo;
    fontMinMaxHeight?: FontHeightInfo;
    ticksValue?: number[];
    ticks?: number[];
    colorTicks?: string;
    tickWidth?: number;
    showTimestamp?: boolean;
}
interface FontHeightInfo {
    ascent?: number;
    height?: number;
    descent?: number;
}
export declare class Drawings {
    static font(options: CanvasGauges.GenericOptions, target: string, baseSize: number): string;
    static normalizedValue(options: CanvasGauges.GenericOptions): {
        normal: number;
        indented: number;
    };
    static verifyError(err: any): void;
}
export declare class CanvasDigitalGauge extends BaseGauge {
    static heightCache: {
        [key: string]: FontHeightInfo;
    };
    private elementValueClone;
    private contextValueClone;
    private elementProgressClone;
    private contextProgressClone;
    _value: number;
    constructor(options: CanvasDigitalGaugeOptions);
    static configure(options: CanvasDigitalGaugeOptions): CanvasDigitalGaugeOptions;
    static normalizeValue(value: number, min: number, max: number): number;
    private initValueClone;
    destroy(): void;
    update(options: GenericOptions): BaseGauge;
    set timestamp(timestamp: number);
    get timestamp(): number;
    draw(): CanvasDigitalGauge;
    getValueColor(): string;
}
export {};
