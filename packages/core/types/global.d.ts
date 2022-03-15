declare global {
  interface Document {
    webkitFullscreenEnabled?: boolean;
    webkitFullscreenElement?: HTMLElement;
    webkitExitFullscreen?: () => void;
  }
}

declare global {
  interface HTMLElement {
    webkitRequestFullscreen?: () => void;
  }
}

declare global {
  interface HTMLVideoElement {
    webkitEnterFullscreen?: () => void;
    webkitSupportsFullscreen?: () => boolean;
  }
}
