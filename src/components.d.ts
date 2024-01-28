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
    }
    interface WfFlex {
        "alignItems"?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
        "flexDirection"?: string;
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
    interface WfImage {
        "aspectRatio"?: string;
        "borderRadius"?: string;
        "height"?: string;
        "text"?: string;
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
        "fontSize"?: string;
        "textAlign"?: 'left' | 'center' | 'right' | 'justify';
    }
    interface WfTitle {
        "fontWeight"?: string;
        "textAlign"?: string;
        "variant"?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    }
    interface WfVideo {
        "aspectRatio"?: string;
        "height"?: string;
        "margin"?: string;
        "width"?: string;
    }
}
declare global {
    interface HTMLWfButtonElement extends Components.WfButton, HTMLStencilElement {
    }
    var HTMLWfButtonElement: {
        prototype: HTMLWfButtonElement;
        new (): HTMLWfButtonElement;
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
    interface HTMLWfImageElement extends Components.WfImage, HTMLStencilElement {
    }
    var HTMLWfImageElement: {
        prototype: HTMLWfImageElement;
        new (): HTMLWfImageElement;
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
        "wf-flex": HTMLWfFlexElement;
        "wf-grid": HTMLWfGridElement;
        "wf-image": HTMLWfImageElement;
        "wf-link": HTMLWfLinkElement;
        "wf-lorem": HTMLWfLoremElement;
        "wf-p": HTMLWfPElement;
        "wf-title": HTMLWfTitleElement;
        "wf-video": HTMLWfVideoElement;
    }
}
declare namespace LocalJSX {
    interface WfButton {
        "backgroundColor"?: string;
        "borderColor"?: string;
        "color"?: string;
    }
    interface WfFlex {
        "alignItems"?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
        "flexDirection"?: string;
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
    interface WfImage {
        "aspectRatio"?: string;
        "borderRadius"?: string;
        "height"?: string;
        "text"?: string;
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
        "fontSize"?: string;
        "textAlign"?: 'left' | 'center' | 'right' | 'justify';
    }
    interface WfTitle {
        "fontWeight"?: string;
        "textAlign"?: string;
        "variant"?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    }
    interface WfVideo {
        "aspectRatio"?: string;
        "height"?: string;
        "margin"?: string;
        "width"?: string;
    }
    interface IntrinsicElements {
        "wf-button": WfButton;
        "wf-flex": WfFlex;
        "wf-grid": WfGrid;
        "wf-image": WfImage;
        "wf-link": WfLink;
        "wf-lorem": WfLorem;
        "wf-p": WfP;
        "wf-title": WfTitle;
        "wf-video": WfVideo;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "wf-button": LocalJSX.WfButton & JSXBase.HTMLAttributes<HTMLWfButtonElement>;
            "wf-flex": LocalJSX.WfFlex & JSXBase.HTMLAttributes<HTMLWfFlexElement>;
            "wf-grid": LocalJSX.WfGrid & JSXBase.HTMLAttributes<HTMLWfGridElement>;
            "wf-image": LocalJSX.WfImage & JSXBase.HTMLAttributes<HTMLWfImageElement>;
            "wf-link": LocalJSX.WfLink & JSXBase.HTMLAttributes<HTMLWfLinkElement>;
            "wf-lorem": LocalJSX.WfLorem & JSXBase.HTMLAttributes<HTMLWfLoremElement>;
            "wf-p": LocalJSX.WfP & JSXBase.HTMLAttributes<HTMLWfPElement>;
            "wf-title": LocalJSX.WfTitle & JSXBase.HTMLAttributes<HTMLWfTitleElement>;
            "wf-video": LocalJSX.WfVideo & JSXBase.HTMLAttributes<HTMLWfVideoElement>;
        }
    }
}
