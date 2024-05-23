import { basic, initSidebar, initTopbar } from './modules/layouts';
import { loadImg, imgPopup, initClipboard, initMasonry } from './modules/plugins';

loadImg();
imgPopup();
initSidebar();
initTopbar();
initClipboard();
initMasonry();
basic();