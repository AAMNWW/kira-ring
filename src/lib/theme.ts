export const THEME_KEY = "kira-theme";

/**
 * Inline <head> script: sets html[data-theme] before first paint so there is no flash.
 * Light is the default; dark only applies if the visitor chose it with the toggle.
 */
export const themeInitScript = `(function(){var t='light';try{if(localStorage.getItem('${THEME_KEY}')==='dark')t='dark'}catch(e){}var r=document.documentElement;r.dataset.theme=t;r.style.colorScheme=t})()`;
