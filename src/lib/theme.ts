export const THEME_KEY = "kira-theme";

/**
 * Inline <head> script: sets html[data-theme] before first paint so there is no flash.
 * Every visit opens in light mode. A dark choice made with the toggle only lasts for
 * the current tab session (sessionStorage); any choice saved permanently by an
 * older version of the site (localStorage) is cleared.
 */
export const themeInitScript = `(function(){var t='light';try{localStorage.removeItem('${THEME_KEY}');if(sessionStorage.getItem('${THEME_KEY}')==='dark')t='dark'}catch(e){}var r=document.documentElement;r.dataset.theme=t;r.style.colorScheme=t})()`;
