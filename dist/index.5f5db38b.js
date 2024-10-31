// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dIgJ8":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "fdb0a4525f5db38b";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"gk0xL":[function(require,module,exports) {
var _lit = require("lit");
class EmployeeList extends (0, _lit.LitElement) {
    firstUpdated() {
        // Başlangıçta çalıştırılacak fonksiyon
        this.displayEmployees();
        this.setupPagination();
        this.loadEmployees();
    }
    static styles = (0, _lit.css)`
    /* CSS kodlarınız burada */
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Open Sans", sans-serif;
    font-weight: 200;
}

body {
    background-color: #f7f7f7;
    color: #333;
    padding: 20px;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow-x: auto; /* Enable horizontal scrolling if content overflows */
    transition: all 0.3s ease; /* Smooth resizing */
}

h1 {
    text-align: center;
    margin-bottom: 20px;
}

.employee-table {
    width: 100%;
    border-collapse: collapse;
}

.employee-table th,
.employee-table td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

.employee-table th {
    background-color: #f4f4f4;
    color: #ff5722;
    font-size: 13px !important;
}
.employee-table td {
    font-size: 15px;
}

.employee-table tr:hover {
    background-color: #f1f1f1;
}

.edit-btn,
.delete-btn {
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 16px;
}

.edit-btn:hover,
.delete-btn:hover {
    color: #ff5722;
}

.empHeader {
    display: block;
    text-align: left;
    margin-bottom: 20px;
    color: #ff5722;
    font-size: 20px;
    font-weight: bold;
}
.HeaderH1 {
    font-size: 18px;
    display: flex;
    font-weight: bold;
    align-items: left;
    margin-bottom: auto;
    margin-top: auto;
}
.headerIMG {
    display: flex;
    align-items: left;
    width: 30px;
    height: 30px;
    margin-right: 10px;
}
header {
    padding: 0.5em;
    background-color: white;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}
.boldText{
    font-weight: bold;
}
.headerLeft {
    display: flex;
    align-items: left;
    margin-bottom: auto;
    margin-top: auto;
}
.headerRight {
    display: flex;
    align-items: right;
    margin-bottom: auto;
    margin-top: auto;
}
.addEmployeeButton {
    background-color: #fff;
    color: #ff5722;
    border: none;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-bottom: auto;
    margin-top: auto;
}
.employesHeading2 {
    font-size: 16px;
    margin-bottom: auto;
    margin-top: auto;
    color: #ff5722;
    margin-right: 15px;
}
.topToTable {
    max-width: 1200px;
    margin: 0 auto;
    background-color: #fff;
    padding: 15px;
    overflow-x: auto; /* Enable horizontal scrolling if content overflows */
    transition: all 0.3s ease; /* Smooth resizing */
    background-color: #f7f7f7;
    display: flex;
    justify-content:space-between;
}

.topheading {
    display: flex;
    margin-bottom: 2px;
    color: #b1b1b1;
}

.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    width: 400px;
    position: relative;
}

.close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 20px;
}
.modalHeading {
    font-size: 20px;
    text-align: center;
    margin-bottom: 20px;
    color: #ff5722;
}
input[type="text"],[type="email"],[type="number"],[type="date"],[type="password"],[type="file"],[type="tel"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
}
select {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
}
.addBtn{
    background-color: #ff5722;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
}
/* Confirmation Modal Styles */
.confirmation-modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.confirmation-modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    width: 400px;
    text-align: center;
    position: relative;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}


.confirmation-modal-content p {
    margin-bottom: 20px;
    font-size: 14px;
    color: #555;
}

.confirmation-buttons {
    display: block;
}

.confirm-btn {
    background-color: #ff5722;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    display: block;
    width: 100%;
    margin-bottom: 10px;
}
.cancel-btn {
    background-color: #fff;
    color: #6062fd;
    border: 1px solid #6062fd;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    display: block;
    width: 100%;
}

.close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 30px;
    cursor: pointer;
    color: #ff5722;
}
.confirmHeading{
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    margin-bottom: 20px;
    color: #ff5722;
}
.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.pagination button {
    background-color: transparent;
    border: none;
    padding: 8px 12px;
    margin: 0 2px;
    cursor: pointer;
    border-radius: 100px;
    font-size: 14px;
    color: #333;
    transition: background-color 0.3s;
}
.pagination button:hover {
    background-color: #f1f1f1;
}

.pagination button.active {
    background-color: #ff5722;
    color: white;
}

.pagination button:disabled {
    background-color: #ddd;
    cursor: not-allowed;
}

.pagination span {
    padding: 8px 12px;
    color: #888;
}
.language-selection {
    display: flex;
    align-items: center;
    margin-left: 20px;
}

.language-flag {
    width: 24px;
    height: 24px;
    cursor: pointer;
    margin-left: 10px;
    transition: transform 0.3s;
}

.language-flag:hover {
    transform: scale(1.1);
}
.iconCss {
    width: 30px;
    height: 30px;
    font-size: 20px !important;
    margin-right:auto;
    margin-left: auto;
    color: #ff5722;
}

.icons {
    display: flex;
    justify-content: start;
}
/* Responsive Adjustments */
@media (max-width: 1024px) {
    .container {
        padding: 15px; /* Reduce padding on medium screens */
    }
}
@media (max-width: 768px) {
    .container {
        padding: 10px; /* Further reduce padding on small screens */
    }
    .topToTable {
        padding: 10px; /* Further reduce padding on small screens */
    }
    .empHeader {
        margin-left: auto;
        margin-right: auto;
    }
    .topheading {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .headerLeft {
        display: flex;
        align-items: center;
        margin-right: auto;
        margin-left: auto;
    }
    .headerRight {
        display: flex;
        align-items:center;
        margin-left: auto;
        margin-right: auto;
    }
    header {
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
    }

    .employee-table th, .employee-table td {
        padding: 10px;
    }

    .modal-content {
        width: 100%;
    }

    .confirmation-modal-content {
        width: 100%;
    }
}

@media (max-width: 480px) {
    .empHeader {
        margin-left: 0;
    }
    .container {
        padding: 5px; /* Minimal padding on very small screens */
    }
    .topToTable {
        padding: 5px; /* Further reduce padding on small screens */
    }
    .topheading {
        display: block;
        text-align: center;
    }
    .headerLeft {
        display: flex;
        align-items: center;
        margin-right: auto;
        margin-left: auto;
    }
    .headerRight {
        display: flex;
        align-items: center;
    }
    .headerIMG {
        width: 25px;
        height: 25px;
    }

    .language-flag {
        width: 20px;
        height: 20px;
    }

    .employee-table th, .employee-table td {
        font-size: 13px;
        padding: 8px;
    }

    .modal-content {
        padding: 15px;
    }

    .addBtn {
        padding: 8px 12px;
        font-size: 14px;
    }

    .confirm-btn, .cancel-btn {
        padding: 8px 15px;
        font-size: 14px;
    }
}
  
  `;
    static properties = {
        employees: {
            type: Array
        },
        currentPage: {
            type: Number
        },
        currentLanguage: {
            type: String
        },
        editEmployeeId: {
            type: Number
        },
        confirmationAction: {
            type: Function
        },
        rowsPerPage: {
            type: Number
        }
    };
    constructor(){
        super();
        this.employees = [];
        this.currentPage = 1;
        this.currentLanguage = "en";
        this.editEmployeeId = null;
        this.rowsPerPage = 10;
        this.loadEmployees();
    }
    loadEmployees() {
        if (!localStorage.getItem("employees")) {
            const employees = [];
            for(let i = 1; i <= 100; i++)employees.push({
                id: i,
                firstName: "Ahmet",
                lastName: "Sourtimes",
                dateOfEmployment: "09/23/2022",
                dateOfBirth: "09/23/2022",
                phone: "+(90) 532 123 45 67",
                email: `ahmet${i}@sourtimes.org`,
                department: "analytics",
                position: "junior"
            });
            localStorage.setItem("employees", JSON.stringify(employees));
        }
        this.employees = JSON.parse(localStorage.getItem("employees")) || [];
    }
    render() {
        return (0, _lit.html)`
      <!-- HTML kodlarınız burada -->
      <h6 class="topheading" data-lang="employeeList">Employee List (Table View)</h6>
      <header>
        <div class="headerLeft">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E0BAQFow-6H6DCFeA/company-logo_100_100/company-logo_100_100/0/1701856035724/ing_hubs_turkiye_logo?e=1738195200&amp;v=beta&amp;t=lNELhXKmYu1diBV79lRz-TeSa2UEmTW7XKWJf7mzBTY"
            class="headerIMG"
            alt="ING Hubs Türkiye logosu"
          />
          <h1 class="HeaderH1" data-lang="header">ING</h1>
        </div>
        <div class="headerRight">
          <h2 class="employesHeading2" data-lang="employees">& Employees</h2>
          <button class="addEmployeeButton" @click="${this.openModal}" data-lang="addNew"> + Add New</button>

          <div class="language-selection">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg"
              alt="Turkish Flag"
              class="language-flag"
              title="Türkçe"
              @click="${()=>this.changeLanguage("tr")}"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
              alt="English Flag"
              class="language-flag"
              title="English"
              @click="${()=>this.changeLanguage("en")}"
            />
          </div>
        </div>
      </header>

      <div class="topToTable">
        <h1 class="empHeader" data-lang="employeeListHeader">Employee List</h1>
        <div class="icons">
          <i class="fa fa-bars iconCss"></i>
          <i class="fa fa-table iconCss"></i>
        </div>
      </div>

      <div class="container">
        <table class="employee-table">
          <thead>
            <tr>
              <th><input id="fullSelect" type="checkbox" @click="${this.selectAllCheckboxes}"></th>
              <th data-lang="firstName">First Name</th>
              <th data-lang="lastName">Last Name</th>
              <th data-lang="dateOfEmployment">Date of Employment</th>
              <th data-lang="dateOfBirth">Date of Birth</th>
              <th data-lang="phone">Phone</th>
              <th data-lang="email">Email</th>
              <th data-lang="department">Department</th>
              <th data-lang="position">Position</th>
              <th data-lang="actions">Actions</th>
            </tr>
          </thead>
          <tbody id="employee-table-body"></tbody>
        </table>
        <div id="pagination" class="pagination"></div>

        <!-- Employee Add Modal -->
        <div class="modal" id="employeeModal">
          <div class="modal-content">
            <span class="close" @click="${this.closeModal}">&times;</span>
            <h2 class="modalHeading" data-lang="addEmployee">Add Employee</h2>
            <form id="employeeForm">
              <label for="firstName" data-lang="firstName">First Name:</label>
              <input type="text" id="firstName" required /><br />

              <label for="lastName" data-lang="lastName">Last Name:</label>
              <input type="text" id="lastName" required /><br />

              <label for="dateOfEmployment" data-lang="dateOfEmployment">Date of Employment:</label>
              <input type="date" id="dateOfEmployment" required /><br />

              <label for="dateOfBirth" data-lang="dateOfBirth">Date of Birth:</label>
              <input type="date" id="dateOfBirth" required /><br />

              <label for="phone" data-lang="phone">Phone:</label>
              <input type="text" id="phone" required /><br />

              <label for="email" data-lang="email">Email:</label>
              <input type="email" id="email" required /><br />

              <label for="department" data-lang="department">Department:</label>
              <select id="department" required>
                <option value="Analytics" data-lang="analytics">Analytics</option>
                <option value="Tech" data-lang="tech">Tech</option>
              </select>

              <label for="position" data-lang="position">Position:</label>
              <select id="position" required>
                <option value="Junior" data-lang="junior">Junior</option>
                <option value="Medior" data-lang="medior">Medior</option>
                <option value="Senior" data-lang="senior">Senior</option>
              </select><br />

              <button type="button" class="addBtn" @click="${this.addEmployee}" data-lang="add">Add</button>
            </form>
          </div>
        </div>

        <!-- Edit Employee Modal -->
        <div class="modal" id="editEmployeeModal">
          <div class="modal-content">
            <span class="close" @click="${this.closeEditModal}">&times;</span>
            <h2 class="modalHeading" data-lang="editEmployee">Edit Employee</h2>
            <form id="editEmployeeForm">
              <label for="editFirstName" data-lang="firstName">First Name:</label>
              <input type="text" id="editFirstName" required /><br />

              <label for="editLastName" data-lang="lastName">Last Name:</label>
              <input type="text" id="editLastName" required /><br />

              <label for="editDateOfEmployment" data-lang="dateOfEmployment">Date of Employment:</label>
              <input type="date" id="editDateOfEmployment" required /><br />

              <label for="editDateOfBirth" data-lang="dateOfBirth">Date of Birth:</label>
              <input type="date" id="editDateOfBirth" required /><br />

              <label for="editPhone" data-lang="phone">Phone:</label>
              <input type="text" id="editPhone" required /><br />

              <label for="editEmail" data-lang="email">Email:</label>
              <input type="email" id="editEmail" required /><br />

              <label for="editDepartment" data-lang="department">Department:</label>
              <select id="editDepartment" required>
                <option value="Analytics" data-lang="analytics">Analytics</option>
                <option value="Tech" data-lang="tech">Tech</option>
              </select><br />

              <label for="editPosition" data-lang="position">Position:</label>
              <select id="editPosition" required>
                <option value="Junior" data-lang="junior">Junior</option>
                <option value="Medior" data-lang="medior">Medior</option>
                <option value="Senior" data-lang="senior">Senior</option>
              </select><br />

              <button type="button" class="addBtn" @click="${this.updateEmployee}" data-lang="UpdateBtn">Update</button>
            </form>
          </div>
        </div>

        <!-- Confirmation Modal -->
        <div class="confirmation-modal" id="confirmationModal">
          <div class="confirmation-modal-content">
            <span class="close" @click="${this.closeConfirmationModal}">&times;</span>
            <h2 class="confirmHeading" data-lang="areyousure">Are you sure?</h2>
            <p id="confirmationMessage" data-lang="Selectedemployee" >Selected employee record will be deleted.</p>
            <div class="confirmation-buttons">
              <button class="confirm-btn" data-lang="Proceed"  @click="${this.proceedAction}">Proceed</button>
              <button class="cancel-btn" data-lang="Cancel" @click="${this.closeConfirmationModal}">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    
    `;
    }
    static translations = {
        en: {
            employeeList: "Employee List (Table View)",
            header: "ING",
            employees: "& Employees",
            addNew: "+ Add New",
            employeeListHeader: "Employee List",
            firstName: "First Name",
            lastName: "Last Name",
            dateOfEmployment: "Date of Employment",
            dateOfBirth: "Date of Birth",
            phone: "Phone",
            email: "Email",
            department: "Department",
            position: "Position",
            actions: "Actions",
            analytics: "Analytics",
            tech: "Tech",
            junior: "Junior",
            medior: "Medior",
            senior: "Senior",
            addEmployee: "Add Employee",
            editEmployee: "Edit Employee",
            dateOfEmployment: "Date of Employment",
            dateOfBirth: "Date of Birth",
            phone: "Phone",
            email: "Email",
            UpdateBtn: "Update",
            areyousure: "Are you sure?",
            Selectedemployee: "Selected employee record will be deleted.",
            Proceed: "Proceed",
            Cancel: "Cancel"
        },
        tr: {
            employeeList: "\xc7al\u0131\u015Fan Listesi (Tablo G\xf6r\xfcn\xfcm\xfc)",
            header: "\u0130NG",
            employees: "& \xc7al\u0131\u015Fanlar",
            addNew: "+ Yeni Ekle",
            employeeListHeader: "\xc7al\u0131\u015Fan Listesi",
            firstName: "Ad",
            lastName: "Soyad",
            dateOfEmployment: "\u0130\u015Fe Ba\u015Flama Tarihi",
            dateOfBirth: "Do\u011Fum Tarihi",
            phone: "Telefon",
            email: "E-posta",
            department: "Departman",
            position: "Pozisyon",
            actions: "\u0130\u015Flemler",
            analytics: "Analitik",
            tech: "Teknoloji",
            junior: "\xc7aylak",
            medior: "Orta D\xfczey",
            senior: "K\u0131demli",
            addEmployee: "\xc7al\u0131\u015Fan Ekle",
            editEmployee: "\xc7al\u0131\u015Fan D\xfczenle",
            dateOfEmployment: "\u0130\u015Fe Ba\u015Flama Tarihi",
            dateOfBirth: "Do\u011Fum Tarihi",
            phone: "Telefon",
            email: "E-posta",
            UpdateBtn: "G\xfcncelle",
            areyousure: "Emin misiniz?",
            Selectedemployee: "Se\xe7ilen \xe7al\u0131\u015Fan kayd\u0131 silinecektir.",
            Proceed: "Devam Et",
            Cancel: "\u0130ptal"
        }
    };
    formatDate(dateString) {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }
    displayEmployees() {
        const employees = JSON.parse(localStorage.getItem("employees")) || [];
        const tableBody = this.shadowRoot.getElementById("employee-table-body");
        tableBody.innerHTML = "";
        const startIndex = (this.currentPage - 1) * this.rowsPerPage;
        const endIndex = startIndex + this.rowsPerPage;
        const employeesToDisplay = employees.slice(startIndex, endIndex);
        employeesToDisplay.forEach((employee)=>{
            const row = document.createElement("tr");
            row.setAttribute("data-id", employee.id);
            const departmentTranslation = EmployeeList.translations[this.currentLanguage][employee.department.toLowerCase()] || employee.department;
            const positionTranslation = EmployeeList.translations[this.currentLanguage][employee.position.toLowerCase()] || employee.position;
            const formattedDateOfEmployment = this.formatDate(employee.dateOfEmployment);
            const formattedDateOfBirth = this.formatDate(employee.dateOfBirth);
            row.innerHTML = `
        <td><input type="checkbox"></td>
        <td class="boldText">${employee.firstName}</td>
        <td class="boldText">${employee.lastName}</td>
        <td>${formattedDateOfEmployment}</td>
        <td>${formattedDateOfBirth}</td>
        <td>${employee.phone}</td>
        <td>${employee.email}</td>
        <td>${departmentTranslation}</td>
        <td>${positionTranslation}</td>
        <td>
          <button class="edit-btn">\u{270F}\u{FE0F}</button>
          <button class="delete-btn">\u{1F5D1}\u{FE0F}</button>
        </td>
      `;
            tableBody.appendChild(row);
            row.querySelector(".edit-btn").addEventListener("click", ()=>this.openEditModal(employee));
            row.querySelector(".delete-btn").addEventListener("click", ()=>{
                this.openConfirmationModal(`Selected employee record of ${employee.firstName} ${employee.lastName} will be deleted.`, ()=>this.deleteEmployee(employee.id, row));
            });
        });
    }
    setupPagination() {
        const employees = JSON.parse(localStorage.getItem("employees")) || [];
        const totalPages = Math.ceil(employees.length / this.rowsPerPage);
        const paginationContainer = this.shadowRoot.getElementById("pagination");
        paginationContainer.innerHTML = "";
        const prevButton = document.createElement("button");
        prevButton.innerHTML = "&#8249;";
        prevButton.disabled = this.currentPage === 1;
        prevButton.addEventListener("click", ()=>{
            if (this.currentPage > 1) {
                this.currentPage--;
                this.displayEmployees();
                this.setupPagination();
            }
        });
        paginationContainer.appendChild(prevButton);
        for(let i = 1; i <= totalPages; i++){
            if (i === 1 || i === totalPages || i >= this.currentPage - 2 && i <= this.currentPage + 2) {
                const pageButton = document.createElement("button");
                pageButton.textContent = i;
                pageButton.className = i === this.currentPage ? "active" : "";
                pageButton.addEventListener("click", ()=>{
                    this.currentPage = i;
                    this.displayEmployees();
                    this.setupPagination();
                });
                paginationContainer.appendChild(pageButton);
            } else if (i === this.currentPage - 3 || i === this.currentPage + 3) {
                const ellipsis = document.createElement("span");
                ellipsis.textContent = "...";
                paginationContainer.appendChild(ellipsis);
            }
        }
        const nextButton = document.createElement("button");
        nextButton.innerHTML = "&#8250;";
        nextButton.disabled = this.currentPage === totalPages;
        nextButton.addEventListener("click", ()=>{
            if (this.currentPage < totalPages) {
                this.currentPage++;
                this.displayEmployees();
                this.setupPagination();
            }
        });
        paginationContainer.appendChild(nextButton);
    }
    deleteEmployee(employeeId, row) {
        let employees = JSON.parse(localStorage.getItem("employees"));
        employees = employees.filter((employee)=>employee.id !== employeeId);
        localStorage.setItem("employees", JSON.stringify(employees));
        row.remove();
        this.displayEmployees();
        this.setupPagination();
    }
    openConfirmationModal(message, action) {
        this.shadowRoot.getElementById("confirmationMessage").textContent = message;
        this.confirmationAction = action;
        this.shadowRoot.getElementById("confirmationModal").style.display = "flex";
    }
    closeConfirmationModal() {
        this.shadowRoot.getElementById("confirmationModal").style.display = "none";
        this.confirmationAction = null;
    }
    proceedAction() {
        if (this.confirmationAction) this.confirmationAction();
        this.closeConfirmationModal();
    }
    openModal() {
        this.shadowRoot.getElementById("employeeModal").style.display = "flex";
    }
    closeModal() {
        this.shadowRoot.getElementById("employeeModal").style.display = "none";
    }
    addEmployee() {
        const firstName = this.shadowRoot.getElementById("firstName").value;
        const lastName = this.shadowRoot.getElementById("lastName").value;
        const dateOfEmployment = this.shadowRoot.getElementById("dateOfEmployment").value;
        const dateOfBirth = this.shadowRoot.getElementById("dateOfBirth").value;
        const phone = this.shadowRoot.getElementById("phone").value;
        const email = this.shadowRoot.getElementById("email").value;
        const department = this.shadowRoot.getElementById("department").value.toLowerCase();
        const position = this.shadowRoot.getElementById("position").value.toLowerCase();
        const formattedDateOfEmployment = dateOfEmployment;
        const formattedDateOfBirth = dateOfBirth;
        const newEmployee = {
            id: Date.now(),
            firstName,
            lastName,
            dateOfEmployment: formattedDateOfEmployment,
            dateOfBirth: formattedDateOfBirth,
            phone,
            email,
            department,
            position
        };
        let employees = JSON.parse(localStorage.getItem("employees")) || [];
        employees.push(newEmployee);
        localStorage.setItem("employees", JSON.stringify(employees));
        this.closeModal();
        this.displayEmployees();
        this.setupPagination();
    }
    openEditModal(employee) {
        this.shadowRoot.getElementById("editEmployeeModal").style.display = "flex";
        this.shadowRoot.getElementById("editFirstName").value = employee.firstName;
        this.shadowRoot.getElementById("editLastName").value = employee.lastName;
        this.shadowRoot.getElementById("editDateOfEmployment").value = this.convertToInputDateFormat(employee.dateOfEmployment);
        this.shadowRoot.getElementById("editDateOfBirth").value = this.convertToInputDateFormat(employee.dateOfBirth);
        this.shadowRoot.getElementById("editPhone").value = employee.phone;
        this.shadowRoot.getElementById("editEmail").value = employee.email;
        this.shadowRoot.getElementById("editDepartment").value = employee.department.charAt(0).toUpperCase() + employee.department.slice(1);
        this.shadowRoot.getElementById("editPosition").value = employee.position.charAt(0).toUpperCase() + employee.position.slice(1);
        this.editEmployeeId = employee.id;
    }
    convertToInputDateFormat(dateString) {
        const [day, month, year] = dateString.split("/");
        return `${year}-${month}-${day}`;
    }
    closeEditModal() {
        this.shadowRoot.getElementById("editEmployeeModal").style.display = "none";
    }
    updateEmployee() {
        this.openConfirmationModal("Yapt\u0131\u011F\u0131n\u0131z de\u011Fi\u015Fiklikleri kaydetmek istedi\u011Finizden emin misiniz?", ()=>{
            const firstName = this.shadowRoot.getElementById("editFirstName").value;
            const lastName = this.shadowRoot.getElementById("editLastName").value;
            const dateOfEmployment = this.shadowRoot.getElementById("editDateOfEmployment").value;
            const dateOfBirth = this.shadowRoot.getElementById("editDateOfBirth").value;
            const phone = this.shadowRoot.getElementById("editPhone").value;
            const email = this.shadowRoot.getElementById("editEmail").value;
            const department = this.shadowRoot.getElementById("editDepartment").value.toLowerCase();
            const position = this.shadowRoot.getElementById("editPosition").value.toLowerCase();
            const formattedDateOfEmployment = this.formatDate(dateOfEmployment);
            const formattedDateOfBirth = this.formatDate(dateOfBirth);
            let employees = JSON.parse(localStorage.getItem("employees")) || [];
            employees = employees.map((employee)=>{
                if (employee.id === this.editEmployeeId) return {
                    ...employee,
                    firstName,
                    lastName,
                    dateOfEmployment: formattedDateOfEmployment,
                    dateOfBirth: formattedDateOfBirth,
                    phone,
                    email,
                    department,
                    position
                };
                return employee;
            });
            localStorage.setItem("employees", JSON.stringify(employees));
            this.closeEditModal();
            this.displayEmployees();
            this.setupPagination();
        });
    }
    changeLanguage(language) {
        this.currentLanguage = language;
        const elements = this.shadowRoot.querySelectorAll("[data-lang]");
        elements.forEach((element)=>{
            const key = element.getAttribute("data-lang");
            if (EmployeeList.translations[language][key]) element.textContent = EmployeeList.translations[language][key];
        });
        this.displayEmployees();
    }
}
customElements.define("employee-list", EmployeeList);

},{"lit":"4antt"}],"4antt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _reactiveElement = require("@lit/reactive-element");
var _litHtml = require("lit-html");
var _litElementJs = require("lit-element/lit-element.js");
parcelHelpers.exportAll(_litElementJs, exports);
var _isServerJs = require("lit-html/is-server.js");
parcelHelpers.exportAll(_isServerJs, exports);

},{"@lit/reactive-element":"hypet","lit-html":"1cmQt","lit-element/lit-element.js":"9YxkX","lit-html/is-server.js":"e2OXP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hypet":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSResult", ()=>(0, _cssTagJs.CSSResult));
parcelHelpers.export(exports, "adoptStyles", ()=>(0, _cssTagJs.adoptStyles));
parcelHelpers.export(exports, "css", ()=>(0, _cssTagJs.css));
parcelHelpers.export(exports, "getCompatibleStyle", ()=>(0, _cssTagJs.getCompatibleStyle));
parcelHelpers.export(exports, "supportsAdoptingStyleSheets", ()=>(0, _cssTagJs.supportsAdoptingStyleSheets));
parcelHelpers.export(exports, "unsafeCSS", ()=>(0, _cssTagJs.unsafeCSS));
parcelHelpers.export(exports, "ReactiveElement", ()=>b);
parcelHelpers.export(exports, "defaultConverter", ()=>u);
parcelHelpers.export(exports, "notEqual", ()=>f);
var _cssTagJs = require("./css-tag.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { is: i, defineProperty: e, getOwnPropertyDescriptor: r, getOwnPropertyNames: h, getOwnPropertySymbols: o, getPrototypeOf: n } = Object, a = globalThis, c = a.trustedTypes, l = c ? c.emptyScript : "", p = a.reactiveElementPolyfillSupport, d = (t, s)=>t, u = {
    toAttribute (t, s) {
        switch(s){
            case Boolean:
                t = t ? l : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, s) {
        let i = t;
        switch(s){
            case Boolean:
                i = null !== t;
                break;
            case Number:
                i = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    i = JSON.parse(t);
                } catch (t) {
                    i = null;
                }
        }
        return i;
    }
}, f = (t, s)=>!i(t, s), y = {
    attribute: !0,
    type: String,
    converter: u,
    reflect: !1,
    hasChanged: f
};
Symbol.metadata ??= Symbol("metadata"), a.litPropertyMetadata ??= new WeakMap;
class b extends HTMLElement {
    static addInitializer(t) {
        this._$Ei(), (this.l ??= []).push(t);
    }
    static get observedAttributes() {
        return this.finalize(), this._$Eh && [
            ...this._$Eh.keys()
        ];
    }
    static createProperty(t, s = y) {
        if (s.state && (s.attribute = !1), this._$Ei(), this.elementProperties.set(t, s), !s.noAccessor) {
            const i = Symbol(), r = this.getPropertyDescriptor(t, i, s);
            void 0 !== r && e(this.prototype, t, r);
        }
    }
    static getPropertyDescriptor(t, s, i) {
        const { get: e, set: h } = r(this.prototype, t) ?? {
            get () {
                return this[s];
            },
            set (t) {
                this[s] = t;
            }
        };
        return {
            get () {
                return e?.call(this);
            },
            set (s) {
                const r = e?.call(this);
                h.call(this, s), this.requestUpdate(t, r, i);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) ?? y;
    }
    static _$Ei() {
        if (this.hasOwnProperty(d("elementProperties"))) return;
        const t = n(this);
        t.finalize(), void 0 !== t.l && (this.l = [
            ...t.l
        ]), this.elementProperties = new Map(t.elementProperties);
    }
    static finalize() {
        if (this.hasOwnProperty(d("finalized"))) return;
        if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(d("properties"))) {
            const t = this.properties, s = [
                ...h(t),
                ...o(t)
            ];
            for (const i of s)this.createProperty(i, t[i]);
        }
        const t = this[Symbol.metadata];
        if (null !== t) {
            const s = litPropertyMetadata.get(t);
            if (void 0 !== s) for (const [t, i] of s)this.elementProperties.set(t, i);
        }
        this._$Eh = new Map;
        for (const [t, s] of this.elementProperties){
            const i = this._$Eu(t, s);
            void 0 !== i && this._$Eh.set(i, t);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s) {
        const i = [];
        if (Array.isArray(s)) {
            const e = new Set(s.flat(1 / 0).reverse());
            for (const s of e)i.unshift((0, _cssTagJs.getCompatibleStyle)(s));
        } else void 0 !== s && i.push((0, _cssTagJs.getCompatibleStyle)(s));
        return i;
    }
    static _$Eu(t, s) {
        const i = s.attribute;
        return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    constructor(){
        super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
    }
    _$Ev() {
        this._$ES = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t)=>t(this));
    }
    addController(t) {
        (this._$EO ??= new Set).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
    }
    removeController(t) {
        this._$EO?.delete(t);
    }
    _$E_() {
        const t = new Map, s = this.constructor.elementProperties;
        for (const i of s.keys())this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
        t.size > 0 && (this._$Ep = t);
    }
    createRenderRoot() {
        const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return (0, _cssTagJs.adoptStyles)(t, this.constructor.elementStyles), t;
    }
    connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t)=>t.hostConnected?.());
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        this._$EO?.forEach((t)=>t.hostDisconnected?.());
    }
    attributeChangedCallback(t, s, i) {
        this._$AK(t, i);
    }
    _$EC(t, s) {
        const i = this.constructor.elementProperties.get(t), e = this.constructor._$Eu(t, i);
        if (void 0 !== e && !0 === i.reflect) {
            const r = (void 0 !== i.converter?.toAttribute ? i.converter : u).toAttribute(s, i.type);
            this._$Em = t, null == r ? this.removeAttribute(e) : this.setAttribute(e, r), this._$Em = null;
        }
    }
    _$AK(t, s) {
        const i = this.constructor, e = i._$Eh.get(t);
        if (void 0 !== e && this._$Em !== e) {
            const t = i.getPropertyOptions(e), r = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== t.converter?.fromAttribute ? t.converter : u;
            this._$Em = e, this[e] = r.fromAttribute(s, t.type), this._$Em = null;
        }
    }
    requestUpdate(t, s, i) {
        if (void 0 !== t) {
            if (i ??= this.constructor.getPropertyOptions(t), !(i.hasChanged ?? f)(this[t], s)) return;
            this.P(t, s, i);
        }
        !1 === this.isUpdatePending && (this._$ES = this._$ET());
    }
    P(t, s, i) {
        this._$AL.has(t) || this._$AL.set(t, s), !0 === i.reflect && this._$Em !== t && (this._$Ej ??= new Set).add(t);
    }
    async _$ET() {
        this.isUpdatePending = !0;
        try {
            await this._$ES;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
            if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
                for (const [t, s] of this._$Ep)this[t] = s;
                this._$Ep = void 0;
            }
            const t = this.constructor.elementProperties;
            if (t.size > 0) for (const [s, i] of t)!0 !== i.wrapped || this._$AL.has(s) || void 0 === this[s] || this.P(s, this[s], i);
        }
        let t = !1;
        const s = this._$AL;
        try {
            t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$EO?.forEach((t)=>t.hostUpdate?.()), this.update(s)) : this._$EU();
        } catch (s) {
            throw t = !1, this._$EU(), s;
        }
        t && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        this._$EO?.forEach((t)=>t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$EU() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$ES;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        this._$Ej &&= this._$Ej.forEach((t)=>this._$EC(t, this[t])), this._$EU();
    }
    updated(t) {}
    firstUpdated(t) {}
}
b.elementStyles = [], b.shadowRootOptions = {
    mode: "open"
}, b[d("elementProperties")] = new Map, b[d("finalized")] = new Map, p?.({
    ReactiveElement: b
}), (a.reactiveElementVersions ??= []).push("2.0.4");

},{"./css-tag.js":"gkZsf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkZsf":[function(require,module,exports) {
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSResult", ()=>n);
parcelHelpers.export(exports, "adoptStyles", ()=>S);
parcelHelpers.export(exports, "css", ()=>i);
parcelHelpers.export(exports, "getCompatibleStyle", ()=>c);
parcelHelpers.export(exports, "supportsAdoptingStyleSheets", ()=>e);
parcelHelpers.export(exports, "unsafeCSS", ()=>r);
const t = globalThis, e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s = Symbol(), o = new WeakMap;
class n {
    constructor(t, e, o){
        if (this._$cssResult$ = !0, o !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if (e && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = o.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && o.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const r = (t)=>new n("string" == typeof t ? t : t + "", void 0, s), i = (t, ...e)=>{
    const o = 1 === t.length ? t[0] : e.reduce((e, s, o)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[o + 1], t[0]);
    return new n(o, t, s);
}, S = (s, o)=>{
    if (e) s.adoptedStyleSheets = o.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet);
    else for (const e of o){
        const o = document.createElement("style"), n = t.litNonce;
        void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
    }
}, c = e ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return r(e);
    })(t) : t;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"1cmQt":[function(require,module,exports) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_$LH", ()=>Z);
parcelHelpers.export(exports, "html", ()=>x);
parcelHelpers.export(exports, "mathml", ()=>w);
parcelHelpers.export(exports, "noChange", ()=>T);
parcelHelpers.export(exports, "nothing", ()=>E);
parcelHelpers.export(exports, "render", ()=>B);
parcelHelpers.export(exports, "svg", ()=>b);
const t = globalThis, i = t.trustedTypes, s = i ? i.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, e = "$lit$", h = `lit$${Math.random().toFixed(9).slice(2)}$`, o = "?" + h, n = `<${o}>`, r = document, l = ()=>r.createComment(""), c = (t)=>null === t || "object" != typeof t && "function" != typeof t, a = Array.isArray, u = (t)=>a(t) || "function" == typeof t?.[Symbol.iterator], d = "[ 	\n\f\r]", f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, v = /-->/g, _ = />/g, m = RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), p = /'/g, g = /"/g, $ = /^(?:script|style|textarea|title)$/i, y = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), x = y(1), b = y(2), w = y(3), T = Symbol.for("lit-noChange"), E = Symbol.for("lit-nothing"), A = new WeakMap, C = r.createTreeWalker(r, 129);
function P(t, i) {
    if (!a(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== s ? s.createHTML(i) : i;
}
const V = (t, i)=>{
    const s = t.length - 1, o = [];
    let r, l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "", c = f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let a, u, d = -1, y = 0;
        for(; y < s.length && (c.lastIndex = y, u = c.exec(s), null !== u);)y = c.lastIndex, c === f ? "!--" === u[1] ? c = v : void 0 !== u[1] ? c = _ : void 0 !== u[2] ? ($.test(u[2]) && (r = RegExp("</" + u[2], "g")), c = m) : void 0 !== u[3] && (c = m) : c === m ? ">" === u[0] ? (c = r ?? f, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? m : '"' === u[3] ? g : p) : c === g || c === p ? c = m : c === v || c === _ ? c = f : (c = m, r = void 0);
        const x = c === m && t[i + 1].startsWith("/>") ? " " : "";
        l += c === f ? s + n : d >= 0 ? (o.push(a), s.slice(0, d) + e + s.slice(d) + h + x) : s + h + (-2 === d ? i : x);
    }
    return [
        P(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")),
        o
    ];
};
class N {
    constructor({ strings: t, _$litType$: s }, n){
        let r;
        this.parts = [];
        let c = 0, a = 0;
        const u = t.length - 1, d = this.parts, [f, v] = V(t, s);
        if (this.el = N.createElement(f, n), C.currentNode = this.el.content, 2 === s || 3 === s) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (r = C.nextNode()) && d.length < u;){
            if (1 === r.nodeType) {
                if (r.hasAttributes()) for (const t of r.getAttributeNames())if (t.endsWith(e)) {
                    const i = v[a++], s = r.getAttribute(t).split(h), e = /([.?@])?(.*)/.exec(i);
                    d.push({
                        type: 1,
                        index: c,
                        name: e[2],
                        strings: s,
                        ctor: "." === e[1] ? H : "?" === e[1] ? I : "@" === e[1] ? L : k
                    }), r.removeAttribute(t);
                } else t.startsWith(h) && (d.push({
                    type: 6,
                    index: c
                }), r.removeAttribute(t));
                if ($.test(r.tagName)) {
                    const t = r.textContent.split(h), s = t.length - 1;
                    if (s > 0) {
                        r.textContent = i ? i.emptyScript : "";
                        for(let i = 0; i < s; i++)r.append(t[i], l()), C.nextNode(), d.push({
                            type: 2,
                            index: ++c
                        });
                        r.append(t[s], l());
                    }
                }
            } else if (8 === r.nodeType) {
                if (r.data === o) d.push({
                    type: 2,
                    index: c
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = r.data.indexOf(h, t + 1));)d.push({
                        type: 7,
                        index: c
                    }), t += h.length - 1;
                }
            }
            c++;
        }
    }
    static createElement(t, i) {
        const s = r.createElement("template");
        return s.innerHTML = t, s;
    }
}
function S(t, i, s = t, e) {
    if (i === T) return i;
    let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
    const o = c(i) ? void 0 : i._$litDirective$;
    return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = S(t, h._$AS(t, i.values), h, e)), i;
}
class M {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? r).importNode(i, !0);
        C.currentNode = e;
        let h = C.nextNode(), o = 0, n = 0, l = s[0];
        for(; void 0 !== l;){
            if (o === l.index) {
                let i;
                2 === l.type ? i = new R(h, h.nextSibling, this, t) : 1 === l.type ? i = new l.ctor(h, l.name, l.strings, this, t) : 6 === l.type && (i = new z(h, this, t)), this._$AV.push(i), l = s[++n];
            }
            o !== l?.index && (h = C.nextNode(), o++);
        }
        return C.currentNode = r, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class R {
    get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t, i, s, e){
        this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = S(this, t, i), c(t) ? t === E || null == t || "" === t ? (this._$AH !== E && this._$AR(), this._$AH = E) : t !== this._$AH && t !== T && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : u(t) ? this.k(t) : this._(t);
    }
    O(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    _(t) {
        this._$AH !== E && c(this._$AH) ? this._$AA.nextSibling.data = t : this.T(r.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = N.createElement(P(s.h, s.h[0]), this.options)), s);
        if (this._$AH?._$AD === e) this._$AH.p(i);
        else {
            const t = new M(e, this), s = t.u(this.options);
            t.p(i), this.T(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = A.get(t.strings);
        return void 0 === i && A.set(t.strings, i = new N(t)), i;
    }
    k(t) {
        a(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new R(this.O(l()), this.O(l()), this, this.options)) : s = i[e], s._$AI(h), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        for(this._$AP?.(!1, !0, i); t && t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
    }
}
class k {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = E, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = E;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = S(this, t, i, 0), o = !c(t) || t !== this._$AH && t !== T, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = S(this, e[s + n], i, n), r === T && (r = this._$AH[n]), o ||= !c(r) || r !== this._$AH[n], r === E ? t = E : t !== E && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.j(t);
    }
    j(t) {
        t === E ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}
class H extends k {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === E ? void 0 : t;
    }
}
class I extends k {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== E);
    }
}
class L extends k {
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
    _$AI(t, i = this) {
        if ((t = S(this, t, i, 0) ?? E) === T) return;
        const s = this._$AH, e = t === E && s !== E || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== E && (s === E || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
}
class z {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        S(this, t);
    }
}
const Z = {
    M: e,
    P: h,
    A: o,
    C: 1,
    L: V,
    R: M,
    D: u,
    V: S,
    I: R,
    H: k,
    N: I,
    U: L,
    B: H,
    F: z
}, j = t.litHtmlPolyfillSupport;
j?.(N, R), (t.litHtmlVersions ??= []).push("3.2.1");
const B = (t, i, s)=>{
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
        const t = s?.renderBefore ?? null;
        e._$litPart$ = h = new R(i.insertBefore(l(), t), t, void 0, s ?? {});
    }
    return h._$AI(t), h;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9YxkX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LitElement", ()=>r);
parcelHelpers.export(exports, "_$LE", ()=>o);
var _reactiveElement = require("@lit/reactive-element");
parcelHelpers.exportAll(_reactiveElement, exports);
var _litHtml = require("lit-html");
parcelHelpers.exportAll(_litHtml, exports);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class r extends (0, _reactiveElement.ReactiveElement) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        const t = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t.firstChild, t;
    }
    update(t) {
        const s = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, _litHtml.render)(s, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        super.connectedCallback(), this._$Do?.setConnected(!0);
    }
    disconnectedCallback() {
        super.disconnectedCallback(), this._$Do?.setConnected(!1);
    }
    render() {
        return 0, _litHtml.noChange;
    }
}
r._$litElement$ = !0, r["finalized"] = !0, globalThis.litElementHydrateSupport?.({
    LitElement: r
});
const i = globalThis.litElementPolyfillSupport;
i?.({
    LitElement: r
});
const o = {
    _$AK: (t, e, s)=>{
        t._$AK(e, s);
    },
    _$AL: (t)=>t._$AL
};
(globalThis.litElementVersions ??= []).push("4.1.1");

},{"@lit/reactive-element":"hypet","lit-html":"1cmQt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e2OXP":[function(require,module,exports) {
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isServer", ()=>o);
const o = !1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["dIgJ8","gk0xL"], "gk0xL", "parcelRequirebda9")

//# sourceMappingURL=index.5f5db38b.js.map
