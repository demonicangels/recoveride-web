(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/App.tsx [app-client] (ecmascript, next/dynamic entry, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  {
    "path": "static/chunks/src_App_85137021.css",
    "included": [
      "[project]/src/App.css [app-client] (css)"
    ]
  },
  "static/chunks/src_bfb98800._.js",
  "static/chunks/node_modules_react-router_dist_development_chunk-UIGDSWPH_mjs_5ff08b1b._.js",
  "static/chunks/node_modules_next_a33697dd._.js",
  "static/chunks/node_modules_@mui_system_esm_a9df3c16._.js",
  "static/chunks/node_modules_@mui_material_esm_c9a25688._.js",
  "static/chunks/node_modules_3a76ff49._.js",
  "static/chunks/src_App_tsx_f5c19526._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/src/App.tsx [app-client] (ecmascript, next/dynamic entry)");
    });
});
}),
]);