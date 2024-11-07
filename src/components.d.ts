/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface WfButton {
        "backgroundColor"?: string;
        "borderColor"?: string;
        "color"?: string;
        "variant"?: 'sm' | 'md' | 'lg' | 'xl';
    }
    interface WfCheckbox {
    }
    interface WfContainer {
        "padding"?: string;
        "width"?: string;
    }
    interface WfFlex {
        "alignItems"?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
        "flexDirection"?: string;
        "flexWrap"?: 'wrap' | 'nowrap' | 'wrap-reverse';
        "gap"?: string;
        "height"?: string;
        "justifyContent"?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
        "margin"?: string;
    }
    interface WfGrid {
        "alignItems"?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
        "gap"?: string;
        "justifyContent"?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
        "justifyItems"?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    }
    interface WfHr {
    }
    interface WfImage {
        "aspectRatio"?: string;
        "borderRadius"?: string;
        "height"?: string;
        "text"?: string;
        "width"?: string;
    }
    interface WfInput {
        "maxWidth"?: string;
        "placeholder": string;
        "variant"?: 'sm' | 'md' | 'lg' | 'xl';
        "width"?: string;
    }
    interface WfLink {
        "href"?: string;
        "target"?: string;
    }
    interface WfLorem {
        "words"?: number;
    }
    interface WfP {
        /**
          * Size of the font
         */
        "fontSize"?: string;
        /**
          * Text align
         */
        "textAlign"?: 'left' | 'center' | 'right' | 'justify';
    }
    interface WfTabContent {
        "getChild": () => Promise<{ select: any; unselect: any; name: string; }>;
        "name"?: string;
    }
    interface WfTabHeader {
        "getChild": () => Promise<{ select: any; unselect: any; name: string; }>;
        "name"?: string;
    }
    interface WfTabs {
        "names"?: string;
    }
    interface WfTitle {
        "fontWeight"?: string;
        "tag"?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
        "textAlign"?: string;
        "variant"?: 'sm' | 'md' | 'lg' | 'xl';
    }
    interface WfVideo {
        "aspectRatio"?: string;
        "height"?: string;
        "margin"?: string;
        "maxWidth"?: string;
        "width"?: string;
    }
}
export interface WfTabHeaderCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLWfTabHeaderElement;
}
declare global {
    interface HTMLWfButtonElement extends Components.WfButton, HTMLStencilElement {
    }
    var HTMLWfButtonElement: {
        prototype: HTMLWfButtonElement;
        new (): HTMLWfButtonElement;
    };
    interface HTMLWfCheckboxElement extends Components.WfCheckbox, HTMLStencilElement {
    }
    var HTMLWfCheckboxElement: {
        prototype: HTMLWfCheckboxElement;
        new (): HTMLWfCheckboxElement;
    };
    interface HTMLWfContainerElement extends Components.WfContainer, HTMLStencilElement {
    }
    var HTMLWfContainerElement: {
        prototype: HTMLWfContainerElement;
        new (): HTMLWfContainerElement;
    };
    interface HTMLWfFlexElement extends Components.WfFlex, HTMLStencilElement {
    }
    var HTMLWfFlexElement: {
        prototype: HTMLWfFlexElement;
        new (): HTMLWfFlexElement;
    };
    interface HTMLWfGridElement extends Components.WfGrid, HTMLStencilElement {
    }
    var HTMLWfGridElement: {
        prototype: HTMLWfGridElement;
        new (): HTMLWfGridElement;
    };
    interface HTMLWfHrElement extends Components.WfHr, HTMLStencilElement {
    }
    var HTMLWfHrElement: {
        prototype: HTMLWfHrElement;
        new (): HTMLWfHrElement;
    };
    interface HTMLWfImageElement extends Components.WfImage, HTMLStencilElement {
    }
    var HTMLWfImageElement: {
        prototype: HTMLWfImageElement;
        new (): HTMLWfImageElement;
    };
    interface HTMLWfInputElement extends Components.WfInput, HTMLStencilElement {
    }
    var HTMLWfInputElement: {
        prototype: HTMLWfInputElement;
        new (): HTMLWfInputElement;
    };
    interface HTMLWfLinkElement extends Components.WfLink, HTMLStencilElement {
    }
    var HTMLWfLinkElement: {
        prototype: HTMLWfLinkElement;
        new (): HTMLWfLinkElement;
    };
    interface HTMLWfLoremElement extends Components.WfLorem, HTMLStencilElement {
    }
    var HTMLWfLoremElement: {
        prototype: HTMLWfLoremElement;
        new (): HTMLWfLoremElement;
    };
    interface HTMLWfPElement extends Components.WfP, HTMLStencilElement {
    }
    var HTMLWfPElement: {
        prototype: HTMLWfPElement;
        new (): HTMLWfPElement;
    };
    interface HTMLWfTabContentElement extends Components.WfTabContent, HTMLStencilElement {
    }
    var HTMLWfTabContentElement: {
        prototype: HTMLWfTabContentElement;
        new (): HTMLWfTabContentElement;
    };
    interface HTMLWfTabHeaderElementEventMap {
        "selected": any;
    }
    interface HTMLWfTabHeaderElement extends Components.WfTabHeader, HTMLStencilElement {
        addEventListener<K extends keyof HTMLWfTabHeaderElementEventMap>(type: K, listener: (this: HTMLWfTabHeaderElement, ev: WfTabHeaderCustomEvent<HTMLWfTabHeaderElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLWfTabHeaderElementEventMap>(type: K, listener: (this: HTMLWfTabHeaderElement, ev: WfTabHeaderCustomEvent<HTMLWfTabHeaderElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLWfTabHeaderElement: {
        prototype: HTMLWfTabHeaderElement;
        new (): HTMLWfTabHeaderElement;
    };
    interface HTMLWfTabsElement extends Components.WfTabs, HTMLStencilElement {
    }
    var HTMLWfTabsElement: {
        prototype: HTMLWfTabsElement;
        new (): HTMLWfTabsElement;
    };
    interface HTMLWfTitleElement extends Components.WfTitle, HTMLStencilElement {
    }
    var HTMLWfTitleElement: {
        prototype: HTMLWfTitleElement;
        new (): HTMLWfTitleElement;
    };
    interface HTMLWfVideoElement extends Components.WfVideo, HTMLStencilElement {
    }
    var HTMLWfVideoElement: {
        prototype: HTMLWfVideoElement;
        new (): HTMLWfVideoElement;
    };
    interface HTMLElementTagNameMap {
        "wf-button": HTMLWfButtonElement;
        "wf-checkbox": HTMLWfCheckboxElement;
        "wf-container": HTMLWfContainerElement;
        "wf-flex": HTMLWfFlexElement;
        "wf-grid": HTMLWfGridElement;
        "wf-hr": HTMLWfHrElement;
        "wf-image": HTMLWfImageElement;
        "wf-input": HTMLWfInputElement;
        "wf-link": HTMLWfLinkElement;
        "wf-lorem": HTMLWfLoremElement;
        "wf-p": HTMLWfPElement;
        "wf-tab-content": HTMLWfTabContentElement;
        "wf-tab-header": HTMLWfTabHeaderElement;
        "wf-tabs": HTMLWfTabsElement;
        "wf-title": HTMLWfTitleElement;
        "wf-video": HTMLWfVideoElement;
    }
}
declare namespace LocalJSX {
    interface WfButton {
        "backgroundColor"?: string;
        "borderColor"?: string;
        "color"?: string;
        "variant"?: 'sm' | 'md' | 'lg' | 'xl';
    }
    interface WfCheckbox {
    }
    interface WfContainer {
        "padding"?: string;
        "width"?: string;
    }
    interface WfFlex {
        "alignItems"?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
        "flexDirection"?: string;
        "flexWrap"?: 'wrap' | 'nowrap' | 'wrap-reverse';
        "gap"?: string;
        "height"?: string;
        "justifyContent"?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
        "margin"?: string;
    }
    interface WfGrid {
        "alignItems"?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
        "gap"?: string;
        "justifyContent"?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
        "justifyItems"?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    }
    interface WfHr {
    }
    interface WfImage {
        "aspectRatio"?: string;
        "borderRadius"?: string;
        "height"?: string;
        "text"?: string;
        "width"?: string;
    }
    interface WfInput {
        "maxWidth"?: string;
        "placeholder"?: string;
        "variant"?: 'sm' | 'md' | 'lg' | 'xl';
        "width"?: string;
    }
    interface WfLink {
        "href"?: string;
        "target"?: string;
    }
    interface WfLorem {
        "words"?: number;
    }
    interface WfP {
        /**
          * Size of the font
         */
        "fontSize"?: string;
        /**
          * Text align
         */
        "textAlign"?: 'left' | 'center' | 'right' | 'justify';
    }
    interface WfTabContent {
        "name"?: string;
    }
    interface WfTabHeader {
        "name"?: string;
        "onSelected"?: (event: WfTabHeaderCustomEvent<any>) => void;
    }
    interface WfTabs {
        "names"?: string;
    }
    interface WfTitle {
        "fontWeight"?: string;
        "tag"?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
        "textAlign"?: string;
        "variant"?: 'sm' | 'md' | 'lg' | 'xl';
    }
    interface WfVideo {
        "aspectRatio"?: string;
        "height"?: string;
        "margin"?: string;
        "maxWidth"?: string;
        "width"?: string;
    }
    interface IntrinsicElements {
        "wf-button": WfButton;
        "wf-checkbox": WfCheckbox;
        "wf-container": WfContainer;
        "wf-flex": WfFlex;
        "wf-grid": WfGrid;
        "wf-hr": WfHr;
        "wf-image": WfImage;
        "wf-input": WfInput;
        "wf-link": WfLink;
        "wf-lorem": WfLorem;
        "wf-p": WfP;
        "wf-tab-content": WfTabContent;
        "wf-tab-header": WfTabHeader;
        "wf-tabs": WfTabs;
        "wf-title": WfTitle;
        "wf-video": WfVideo;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "wf-button": LocalJSX.WfButton & JSXBase.HTMLAttributes<HTMLWfButtonElement>;
            "wf-checkbox": LocalJSX.WfCheckbox & JSXBase.HTMLAttributes<HTMLWfCheckboxElement>;
            "wf-container": LocalJSX.WfContainer & JSXBase.HTMLAttributes<HTMLWfContainerElement>;
            "wf-flex": LocalJSX.WfFlex & JSXBase.HTMLAttributes<HTMLWfFlexElement>;
            "wf-grid": LocalJSX.WfGrid & JSXBase.HTMLAttributes<HTMLWfGridElement>;
            "wf-hr": LocalJSX.WfHr & JSXBase.HTMLAttributes<HTMLWfHrElement>;
            "wf-image": LocalJSX.WfImage & JSXBase.HTMLAttributes<HTMLWfImageElement>;
            "wf-input": LocalJSX.WfInput & JSXBase.HTMLAttributes<HTMLWfInputElement>;
            "wf-link": LocalJSX.WfLink & JSXBase.HTMLAttributes<HTMLWfLinkElement>;
            "wf-lorem": LocalJSX.WfLorem & JSXBase.HTMLAttributes<HTMLWfLoremElement>;
            "wf-p": LocalJSX.WfP & JSXBase.HTMLAttributes<HTMLWfPElement>;
            "wf-tab-content": LocalJSX.WfTabContent & JSXBase.HTMLAttributes<HTMLWfTabContentElement>;
            "wf-tab-header": LocalJSX.WfTabHeader & JSXBase.HTMLAttributes<HTMLWfTabHeaderElement>;
            "wf-tabs": LocalJSX.WfTabs & JSXBase.HTMLAttributes<HTMLWfTabsElement>;
            "wf-title": LocalJSX.WfTitle & JSXBase.HTMLAttributes<HTMLWfTitleElement>;
            "wf-video": LocalJSX.WfVideo & JSXBase.HTMLAttributes<HTMLWfVideoElement>;
        }
    }
}
