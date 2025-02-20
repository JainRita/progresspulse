module.exports = {

"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/* eslint-disable import/no-extraneous-dependencies */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "registerServerReference", {
    enumerable: true,
    get: function() {
        return _serveredge.registerServerReference;
    }
});
const _serveredge = __turbopack_require__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)"); //# sourceMappingURL=server-reference.js.map
}}),
"[project]/node_modules/next/dist/server/lib/trace/constants.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/**
 * Contains predefined constants for the trace span name in next/server.
 *
 * Currently, next/server/tracer is internal implementation only for tracking
 * next.js's implementation only with known span names defined here.
 **/ // eslint typescript has a bug with TS enums
/* eslint-disable no-shadow */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    AppRenderSpan: null,
    AppRouteRouteHandlersSpan: null,
    BaseServerSpan: null,
    LoadComponentsSpan: null,
    LogSpanAllowList: null,
    MiddlewareSpan: null,
    NextNodeServerSpan: null,
    NextServerSpan: null,
    NextVanillaSpanAllowlist: null,
    NodeSpan: null,
    RenderSpan: null,
    ResolveMetadataSpan: null,
    RouterSpan: null,
    StartServerSpan: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    AppRenderSpan: function() {
        return AppRenderSpan;
    },
    AppRouteRouteHandlersSpan: function() {
        return AppRouteRouteHandlersSpan;
    },
    BaseServerSpan: function() {
        return BaseServerSpan;
    },
    LoadComponentsSpan: function() {
        return LoadComponentsSpan;
    },
    LogSpanAllowList: function() {
        return LogSpanAllowList;
    },
    MiddlewareSpan: function() {
        return MiddlewareSpan;
    },
    NextNodeServerSpan: function() {
        return NextNodeServerSpan;
    },
    NextServerSpan: function() {
        return NextServerSpan;
    },
    NextVanillaSpanAllowlist: function() {
        return NextVanillaSpanAllowlist;
    },
    NodeSpan: function() {
        return NodeSpan;
    },
    RenderSpan: function() {
        return RenderSpan;
    },
    ResolveMetadataSpan: function() {
        return ResolveMetadataSpan;
    },
    RouterSpan: function() {
        return RouterSpan;
    },
    StartServerSpan: function() {
        return StartServerSpan;
    }
});
var BaseServerSpan = /*#__PURE__*/ function(BaseServerSpan) {
    BaseServerSpan["handleRequest"] = "BaseServer.handleRequest";
    BaseServerSpan["run"] = "BaseServer.run";
    BaseServerSpan["pipe"] = "BaseServer.pipe";
    BaseServerSpan["getStaticHTML"] = "BaseServer.getStaticHTML";
    BaseServerSpan["render"] = "BaseServer.render";
    BaseServerSpan["renderToResponseWithComponents"] = "BaseServer.renderToResponseWithComponents";
    BaseServerSpan["renderToResponse"] = "BaseServer.renderToResponse";
    BaseServerSpan["renderToHTML"] = "BaseServer.renderToHTML";
    BaseServerSpan["renderError"] = "BaseServer.renderError";
    BaseServerSpan["renderErrorToResponse"] = "BaseServer.renderErrorToResponse";
    BaseServerSpan["renderErrorToHTML"] = "BaseServer.renderErrorToHTML";
    BaseServerSpan["render404"] = "BaseServer.render404";
    return BaseServerSpan;
}(BaseServerSpan || {});
var LoadComponentsSpan = /*#__PURE__*/ function(LoadComponentsSpan) {
    LoadComponentsSpan["loadDefaultErrorComponents"] = "LoadComponents.loadDefaultErrorComponents";
    LoadComponentsSpan["loadComponents"] = "LoadComponents.loadComponents";
    return LoadComponentsSpan;
}(LoadComponentsSpan || {});
var NextServerSpan = /*#__PURE__*/ function(NextServerSpan) {
    NextServerSpan["getRequestHandler"] = "NextServer.getRequestHandler";
    NextServerSpan["getServer"] = "NextServer.getServer";
    NextServerSpan["getServerRequestHandler"] = "NextServer.getServerRequestHandler";
    NextServerSpan["createServer"] = "createServer.createServer";
    return NextServerSpan;
}(NextServerSpan || {});
var NextNodeServerSpan = /*#__PURE__*/ function(NextNodeServerSpan) {
    NextNodeServerSpan["compression"] = "NextNodeServer.compression";
    NextNodeServerSpan["getBuildId"] = "NextNodeServer.getBuildId";
    NextNodeServerSpan["createComponentTree"] = "NextNodeServer.createComponentTree";
    NextNodeServerSpan["clientComponentLoading"] = "NextNodeServer.clientComponentLoading";
    NextNodeServerSpan["getLayoutOrPageModule"] = "NextNodeServer.getLayoutOrPageModule";
    NextNodeServerSpan["generateStaticRoutes"] = "NextNodeServer.generateStaticRoutes";
    NextNodeServerSpan["generateFsStaticRoutes"] = "NextNodeServer.generateFsStaticRoutes";
    NextNodeServerSpan["generatePublicRoutes"] = "NextNodeServer.generatePublicRoutes";
    NextNodeServerSpan["generateImageRoutes"] = "NextNodeServer.generateImageRoutes.route";
    NextNodeServerSpan["sendRenderResult"] = "NextNodeServer.sendRenderResult";
    NextNodeServerSpan["proxyRequest"] = "NextNodeServer.proxyRequest";
    NextNodeServerSpan["runApi"] = "NextNodeServer.runApi";
    NextNodeServerSpan["render"] = "NextNodeServer.render";
    NextNodeServerSpan["renderHTML"] = "NextNodeServer.renderHTML";
    NextNodeServerSpan["imageOptimizer"] = "NextNodeServer.imageOptimizer";
    NextNodeServerSpan["getPagePath"] = "NextNodeServer.getPagePath";
    NextNodeServerSpan["getRoutesManifest"] = "NextNodeServer.getRoutesManifest";
    NextNodeServerSpan["findPageComponents"] = "NextNodeServer.findPageComponents";
    NextNodeServerSpan["getFontManifest"] = "NextNodeServer.getFontManifest";
    NextNodeServerSpan["getServerComponentManifest"] = "NextNodeServer.getServerComponentManifest";
    NextNodeServerSpan["getRequestHandler"] = "NextNodeServer.getRequestHandler";
    NextNodeServerSpan["renderToHTML"] = "NextNodeServer.renderToHTML";
    NextNodeServerSpan["renderError"] = "NextNodeServer.renderError";
    NextNodeServerSpan["renderErrorToHTML"] = "NextNodeServer.renderErrorToHTML";
    NextNodeServerSpan["render404"] = "NextNodeServer.render404";
    NextNodeServerSpan["startResponse"] = "NextNodeServer.startResponse";
    // nested inner span, does not require parent scope name
    NextNodeServerSpan["route"] = "route";
    NextNodeServerSpan["onProxyReq"] = "onProxyReq";
    NextNodeServerSpan["apiResolver"] = "apiResolver";
    NextNodeServerSpan["internalFetch"] = "internalFetch";
    return NextNodeServerSpan;
}(NextNodeServerSpan || {});
var StartServerSpan = /*#__PURE__*/ function(StartServerSpan) {
    StartServerSpan["startServer"] = "startServer.startServer";
    return StartServerSpan;
}(StartServerSpan || {});
var RenderSpan = /*#__PURE__*/ function(RenderSpan) {
    RenderSpan["getServerSideProps"] = "Render.getServerSideProps";
    RenderSpan["getStaticProps"] = "Render.getStaticProps";
    RenderSpan["renderToString"] = "Render.renderToString";
    RenderSpan["renderDocument"] = "Render.renderDocument";
    RenderSpan["createBodyResult"] = "Render.createBodyResult";
    return RenderSpan;
}(RenderSpan || {});
var AppRenderSpan = /*#__PURE__*/ function(AppRenderSpan) {
    AppRenderSpan["renderToString"] = "AppRender.renderToString";
    AppRenderSpan["renderToReadableStream"] = "AppRender.renderToReadableStream";
    AppRenderSpan["getBodyResult"] = "AppRender.getBodyResult";
    AppRenderSpan["fetch"] = "AppRender.fetch";
    return AppRenderSpan;
}(AppRenderSpan || {});
var RouterSpan = /*#__PURE__*/ function(RouterSpan) {
    RouterSpan["executeRoute"] = "Router.executeRoute";
    return RouterSpan;
}(RouterSpan || {});
var NodeSpan = /*#__PURE__*/ function(NodeSpan) {
    NodeSpan["runHandler"] = "Node.runHandler";
    return NodeSpan;
}(NodeSpan || {});
var AppRouteRouteHandlersSpan = /*#__PURE__*/ function(AppRouteRouteHandlersSpan) {
    AppRouteRouteHandlersSpan["runHandler"] = "AppRouteRouteHandlers.runHandler";
    return AppRouteRouteHandlersSpan;
}(AppRouteRouteHandlersSpan || {});
var ResolveMetadataSpan = /*#__PURE__*/ function(ResolveMetadataSpan) {
    ResolveMetadataSpan["generateMetadata"] = "ResolveMetadata.generateMetadata";
    ResolveMetadataSpan["generateViewport"] = "ResolveMetadata.generateViewport";
    return ResolveMetadataSpan;
}(ResolveMetadataSpan || {});
var MiddlewareSpan = /*#__PURE__*/ function(MiddlewareSpan) {
    MiddlewareSpan["execute"] = "Middleware.execute";
    return MiddlewareSpan;
}(MiddlewareSpan || {});
const NextVanillaSpanAllowlist = [
    "Middleware.execute",
    "BaseServer.handleRequest",
    "Render.getServerSideProps",
    "Render.getStaticProps",
    "AppRender.fetch",
    "AppRender.getBodyResult",
    "Render.renderDocument",
    "Node.runHandler",
    "AppRouteRouteHandlers.runHandler",
    "ResolveMetadata.generateMetadata",
    "ResolveMetadata.generateViewport",
    "NextNodeServer.createComponentTree",
    "NextNodeServer.findPageComponents",
    "NextNodeServer.getLayoutOrPageModule",
    "NextNodeServer.startResponse",
    "NextNodeServer.clientComponentLoading"
];
const LogSpanAllowList = [
    "NextNodeServer.findPageComponents",
    "NextNodeServer.createComponentTree",
    "NextNodeServer.clientComponentLoading"
]; //# sourceMappingURL=constants.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/is-thenable.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/**
 * Check to see if a value is Thenable.
 *
 * @param promise the maybe-thenable value
 * @returns true if the value is thenable
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isThenable", {
    enumerable: true,
    get: function() {
        return isThenable;
    }
});
function isThenable(promise) {
    return promise !== null && typeof promise === 'object' && 'then' in promise && typeof promise.then === 'function';
} //# sourceMappingURL=is-thenable.js.map
}}),
"[project]/node_modules/next/dist/server/lib/trace/tracer.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    BubbledError: null,
    SpanKind: null,
    SpanStatusCode: null,
    getTracer: null,
    isBubbledError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BubbledError: function() {
        return BubbledError;
    },
    SpanKind: function() {
        return SpanKind;
    },
    SpanStatusCode: function() {
        return SpanStatusCode;
    },
    getTracer: function() {
        return getTracer;
    },
    isBubbledError: function() {
        return isBubbledError;
    }
});
const _constants = __turbopack_require__("[project]/node_modules/next/dist/server/lib/trace/constants.js [app-rsc] (ecmascript)");
const _isthenable = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/is-thenable.js [app-rsc] (ecmascript)");
let api;
// we want to allow users to use their own version of @opentelemetry/api if they
// want to, so we try to require it first, and if it fails we fall back to the
// version that is bundled with Next.js
// this is because @opentelemetry/api has to be synced with the version of
// @opentelemetry/tracing that is used, and we don't want to force users to use
// the version that is bundled with Next.js.
// the API is ~stable, so this should be fine
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    try {
        api = __turbopack_require__("[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)");
    } catch (err) {
        api = __turbopack_require__("[project]/node_modules/next/dist/compiled/@opentelemetry/api/index.js [app-rsc] (ecmascript)");
    }
}
const { context, propagation, trace, SpanStatusCode, SpanKind, ROOT_CONTEXT } = api;
class BubbledError extends Error {
    constructor(bubble, result){
        super(), this.bubble = bubble, this.result = result;
    }
}
function isBubbledError(error) {
    if (typeof error !== 'object' || error === null) return false;
    return error instanceof BubbledError;
}
const closeSpanWithError = (span, error)=>{
    if (isBubbledError(error) && error.bubble) {
        span.setAttribute('next.bubble', true);
    } else {
        if (error) {
            span.recordException(error);
        }
        span.setStatus({
            code: SpanStatusCode.ERROR,
            message: error == null ? void 0 : error.message
        });
    }
    span.end();
};
/** we use this map to propagate attributes from nested spans to the top span */ const rootSpanAttributesStore = new Map();
const rootSpanIdKey = api.createContextKey('next.rootSpanId');
let lastSpanId = 0;
const getSpanId = ()=>lastSpanId++;
const clientTraceDataSetter = {
    set (carrier, key, value) {
        carrier.push({
            key,
            value
        });
    }
};
class NextTracerImpl {
    /**
   * Returns an instance to the trace with configured name.
   * Since wrap / trace can be defined in any place prior to actual trace subscriber initialization,
   * This should be lazily evaluated.
   */ getTracerInstance() {
        return trace.getTracer('next.js', '0.0.1');
    }
    getContext() {
        return context;
    }
    getTracePropagationData() {
        const activeContext = context.active();
        const entries = [];
        propagation.inject(activeContext, entries, clientTraceDataSetter);
        return entries;
    }
    getActiveScopeSpan() {
        return trace.getSpan(context == null ? void 0 : context.active());
    }
    withPropagatedContext(carrier, fn, getter) {
        const activeContext = context.active();
        if (trace.getSpanContext(activeContext)) {
            // Active span is already set, too late to propagate.
            return fn();
        }
        const remoteContext = propagation.extract(activeContext, carrier, getter);
        return context.with(remoteContext, fn);
    }
    trace(...args) {
        var _trace_getSpanContext;
        const [type, fnOrOptions, fnOrEmpty] = args;
        // coerce options form overload
        const { fn, options } = typeof fnOrOptions === 'function' ? {
            fn: fnOrOptions,
            options: {}
        } : {
            fn: fnOrEmpty,
            options: {
                ...fnOrOptions
            }
        };
        const spanName = options.spanName ?? type;
        if (!_constants.NextVanillaSpanAllowlist.includes(type) && process.env.NEXT_OTEL_VERBOSE !== '1' || options.hideSpan) {
            return fn();
        }
        // Trying to get active scoped span to assign parent. If option specifies parent span manually, will try to use it.
        let spanContext = this.getSpanContext((options == null ? void 0 : options.parentSpan) ?? this.getActiveScopeSpan());
        let isRootSpan = false;
        if (!spanContext) {
            spanContext = (context == null ? void 0 : context.active()) ?? ROOT_CONTEXT;
            isRootSpan = true;
        } else if ((_trace_getSpanContext = trace.getSpanContext(spanContext)) == null ? void 0 : _trace_getSpanContext.isRemote) {
            isRootSpan = true;
        }
        const spanId = getSpanId();
        options.attributes = {
            'next.span_name': spanName,
            'next.span_type': type,
            ...options.attributes
        };
        return context.with(spanContext.setValue(rootSpanIdKey, spanId), ()=>this.getTracerInstance().startActiveSpan(spanName, options, (span)=>{
                const startTime = 'performance' in globalThis && 'measure' in performance ? globalThis.performance.now() : undefined;
                const onCleanup = ()=>{
                    rootSpanAttributesStore.delete(spanId);
                    if (startTime && process.env.NEXT_OTEL_PERFORMANCE_PREFIX && _constants.LogSpanAllowList.includes(type || '')) {
                        performance.measure(`${process.env.NEXT_OTEL_PERFORMANCE_PREFIX}:next-${(type.split('.').pop() || '').replace(/[A-Z]/g, (match)=>'-' + match.toLowerCase())}`, {
                            start: startTime,
                            end: performance.now()
                        });
                    }
                };
                if (isRootSpan) {
                    rootSpanAttributesStore.set(spanId, new Map(Object.entries(options.attributes ?? {})));
                }
                try {
                    if (fn.length > 1) {
                        return fn(span, (err)=>closeSpanWithError(span, err));
                    }
                    const result = fn(span);
                    if ((0, _isthenable.isThenable)(result)) {
                        // If there's error make sure it throws
                        return result.then((res)=>{
                            span.end();
                            // Need to pass down the promise result,
                            // it could be react stream response with error { error, stream }
                            return res;
                        }).catch((err)=>{
                            closeSpanWithError(span, err);
                            throw err;
                        }).finally(onCleanup);
                    } else {
                        span.end();
                        onCleanup();
                    }
                    return result;
                } catch (err) {
                    closeSpanWithError(span, err);
                    onCleanup();
                    throw err;
                }
            }));
    }
    wrap(...args) {
        const tracer = this;
        const [name, options, fn] = args.length === 3 ? args : [
            args[0],
            {},
            args[1]
        ];
        if (!_constants.NextVanillaSpanAllowlist.includes(name) && process.env.NEXT_OTEL_VERBOSE !== '1') {
            return fn;
        }
        return function() {
            let optionsObj = options;
            if (typeof optionsObj === 'function' && typeof fn === 'function') {
                optionsObj = optionsObj.apply(this, arguments);
            }
            const lastArgId = arguments.length - 1;
            const cb = arguments[lastArgId];
            if (typeof cb === 'function') {
                const scopeBoundCb = tracer.getContext().bind(context.active(), cb);
                return tracer.trace(name, optionsObj, (_span, done)=>{
                    arguments[lastArgId] = function(err) {
                        done == null ? void 0 : done(err);
                        return scopeBoundCb.apply(this, arguments);
                    };
                    return fn.apply(this, arguments);
                });
            } else {
                return tracer.trace(name, optionsObj, ()=>fn.apply(this, arguments));
            }
        };
    }
    startSpan(...args) {
        const [type, options] = args;
        const spanContext = this.getSpanContext((options == null ? void 0 : options.parentSpan) ?? this.getActiveScopeSpan());
        return this.getTracerInstance().startSpan(type, options, spanContext);
    }
    getSpanContext(parentSpan) {
        const spanContext = parentSpan ? trace.setSpan(context.active(), parentSpan) : undefined;
        return spanContext;
    }
    getRootSpanAttributes() {
        const spanId = context.active().getValue(rootSpanIdKey);
        return rootSpanAttributesStore.get(spanId);
    }
    setRootSpanAttribute(key, value) {
        const spanId = context.active().getValue(rootSpanIdKey);
        const attributes = rootSpanAttributesStore.get(spanId);
        if (attributes) {
            attributes.set(key, value);
        }
    }
}
const getTracer = (()=>{
    const tracer = new NextTracerImpl();
    return ()=>tracer;
})(); //# sourceMappingURL=tracer.js.map
}}),
"[project]/node_modules/next/dist/lib/detached-promise.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/**
 * A `Promise.withResolvers` implementation that exposes the `resolve` and
 * `reject` functions on a `Promise`.
 *
 * @see https://tc39.es/proposal-promise-with-resolvers/
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DetachedPromise", {
    enumerable: true,
    get: function() {
        return DetachedPromise;
    }
});
class DetachedPromise {
    constructor(){
        let resolve;
        let reject;
        // Create the promise and assign the resolvers to the object.
        this.promise = new Promise((res, rej)=>{
            resolve = res;
            reject = rej;
        });
        // We know that resolvers is defined because the Promise constructor runs
        // synchronously.
        this.resolve = resolve;
        this.reject = reject;
    }
} //# sourceMappingURL=detached-promise.js.map
}}),
"[project]/node_modules/next/dist/server/stream-utils/encodedTags.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ENCODED_TAGS", {
    enumerable: true,
    get: function() {
        return ENCODED_TAGS;
    }
});
const ENCODED_TAGS = {
    // opening tags do not have the closing `>` since they can contain other attributes such as `<body className=''>`
    OPENING: {
        // <html
        HTML: new Uint8Array([
            60,
            104,
            116,
            109,
            108
        ]),
        // <body
        BODY: new Uint8Array([
            60,
            98,
            111,
            100,
            121
        ])
    },
    CLOSED: {
        // </head>
        HEAD: new Uint8Array([
            60,
            47,
            104,
            101,
            97,
            100,
            62
        ]),
        // </body>
        BODY: new Uint8Array([
            60,
            47,
            98,
            111,
            100,
            121,
            62
        ]),
        // </html>
        HTML: new Uint8Array([
            60,
            47,
            104,
            116,
            109,
            108,
            62
        ]),
        // </body></html>
        BODY_AND_HTML: new Uint8Array([
            60,
            47,
            98,
            111,
            100,
            121,
            62,
            60,
            47,
            104,
            116,
            109,
            108,
            62
        ])
    }
}; //# sourceMappingURL=encodedTags.js.map
}}),
"[project]/node_modules/next/dist/server/stream-utils/uint8array-helpers.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/**
 * Find the starting index of Uint8Array `b` within Uint8Array `a`.
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    indexOfUint8Array: null,
    isEquivalentUint8Arrays: null,
    removeFromUint8Array: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    indexOfUint8Array: function() {
        return indexOfUint8Array;
    },
    isEquivalentUint8Arrays: function() {
        return isEquivalentUint8Arrays;
    },
    removeFromUint8Array: function() {
        return removeFromUint8Array;
    }
});
function indexOfUint8Array(a, b) {
    if (b.length === 0) return 0;
    if (a.length === 0 || b.length > a.length) return -1;
    // start iterating through `a`
    for(let i = 0; i <= a.length - b.length; i++){
        let completeMatch = true;
        // from index `i`, iterate through `b` and check for mismatch
        for(let j = 0; j < b.length; j++){
            // if the values do not match, then this isn't a complete match, exit `b` iteration early and iterate to next index of `a`.
            if (a[i + j] !== b[j]) {
                completeMatch = false;
                break;
            }
        }
        if (completeMatch) {
            return i;
        }
    }
    return -1;
}
function isEquivalentUint8Arrays(a, b) {
    if (a.length !== b.length) return false;
    for(let i = 0; i < a.length; i++){
        if (a[i] !== b[i]) return false;
    }
    return true;
}
function removeFromUint8Array(a, b) {
    const tagIndex = indexOfUint8Array(a, b);
    if (tagIndex === 0) return a.subarray(b.length);
    if (tagIndex > -1) {
        const removed = new Uint8Array(a.length - b.length);
        removed.set(a.slice(0, tagIndex));
        removed.set(a.slice(tagIndex + b.length), tagIndex);
        return removed;
    } else {
        return a;
    }
} //# sourceMappingURL=uint8array-helpers.js.map
}}),
"[project]/node_modules/next/dist/server/stream-utils/node-web-streams-helper.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    chainStreams: null,
    continueDynamicHTMLResume: null,
    continueDynamicPrerender: null,
    continueFizzStream: null,
    continueStaticPrerender: null,
    createBufferedTransformStream: null,
    createDocumentClosingStream: null,
    createRootLayoutValidatorStream: null,
    renderToInitialFizzStream: null,
    streamFromBuffer: null,
    streamFromString: null,
    streamToBuffer: null,
    streamToString: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    chainStreams: function() {
        return chainStreams;
    },
    continueDynamicHTMLResume: function() {
        return continueDynamicHTMLResume;
    },
    continueDynamicPrerender: function() {
        return continueDynamicPrerender;
    },
    continueFizzStream: function() {
        return continueFizzStream;
    },
    continueStaticPrerender: function() {
        return continueStaticPrerender;
    },
    createBufferedTransformStream: function() {
        return createBufferedTransformStream;
    },
    createDocumentClosingStream: function() {
        return createDocumentClosingStream;
    },
    createRootLayoutValidatorStream: function() {
        return createRootLayoutValidatorStream;
    },
    renderToInitialFizzStream: function() {
        return renderToInitialFizzStream;
    },
    streamFromBuffer: function() {
        return streamFromBuffer;
    },
    streamFromString: function() {
        return streamFromString;
    },
    streamToBuffer: function() {
        return streamToBuffer;
    },
    streamToString: function() {
        return streamToString;
    }
});
const _tracer = __turbopack_require__("[project]/node_modules/next/dist/server/lib/trace/tracer.js [app-rsc] (ecmascript)");
const _constants = __turbopack_require__("[project]/node_modules/next/dist/server/lib/trace/constants.js [app-rsc] (ecmascript)");
const _detachedpromise = __turbopack_require__("[project]/node_modules/next/dist/lib/detached-promise.js [app-rsc] (ecmascript)");
const _scheduler = __turbopack_require__("[project]/node_modules/next/dist/lib/scheduler.js [app-rsc] (ecmascript)");
const _encodedTags = __turbopack_require__("[project]/node_modules/next/dist/server/stream-utils/encodedTags.js [app-rsc] (ecmascript)");
const _uint8arrayhelpers = __turbopack_require__("[project]/node_modules/next/dist/server/stream-utils/uint8array-helpers.js [app-rsc] (ecmascript)");
function voidCatch() {
// this catcher is designed to be used with pipeTo where we expect the underlying
// pipe implementation to forward errors but we don't want the pipeTo promise to reject
// and be unhandled
}
// We can share the same encoder instance everywhere
// Notably we cannot do the same for TextDecoder because it is stateful
// when handling streaming data
const encoder = new TextEncoder();
function chainStreams(...streams) {
    // We could encode this invariant in the arguments but current uses of this function pass
    // use spread so it would be missed by
    if (streams.length === 0) {
        throw new Error('Invariant: chainStreams requires at least one stream');
    }
    // If we only have 1 stream we fast path it by returning just this stream
    if (streams.length === 1) {
        return streams[0];
    }
    const { readable, writable } = new TransformStream();
    // We always initiate pipeTo immediately. We know we have at least 2 streams
    // so we need to avoid closing the writable when this one finishes.
    let promise = streams[0].pipeTo(writable, {
        preventClose: true
    });
    let i = 1;
    for(; i < streams.length - 1; i++){
        const nextStream = streams[i];
        promise = promise.then(()=>nextStream.pipeTo(writable, {
                preventClose: true
            }));
    }
    // We can omit the length check because we halted before the last stream and there
    // is at least two streams so the lastStream here will always be defined
    const lastStream = streams[i];
    promise = promise.then(()=>lastStream.pipeTo(writable));
    // Catch any errors from the streams and ignore them, they will be handled
    // by whatever is consuming the readable stream.
    promise.catch(voidCatch);
    return readable;
}
function streamFromString(str) {
    return new ReadableStream({
        start (controller) {
            controller.enqueue(encoder.encode(str));
            controller.close();
        }
    });
}
function streamFromBuffer(chunk) {
    return new ReadableStream({
        start (controller) {
            controller.enqueue(chunk);
            controller.close();
        }
    });
}
async function streamToBuffer(stream) {
    const reader = stream.getReader();
    const chunks = [];
    while(true){
        const { done, value } = await reader.read();
        if (done) {
            break;
        }
        chunks.push(value);
    }
    return Buffer.concat(chunks);
}
async function streamToString(stream) {
    const decoder = new TextDecoder('utf-8', {
        fatal: true
    });
    let string = '';
    for await (const chunk of stream){
        string += decoder.decode(chunk, {
            stream: true
        });
    }
    string += decoder.decode();
    return string;
}
function createBufferedTransformStream() {
    let bufferedChunks = [];
    let bufferByteLength = 0;
    let pending;
    const flush = (controller)=>{
        // If we already have a pending flush, then return early.
        if (pending) return;
        const detached = new _detachedpromise.DetachedPromise();
        pending = detached;
        (0, _scheduler.scheduleImmediate)(()=>{
            try {
                const chunk = new Uint8Array(bufferByteLength);
                let copiedBytes = 0;
                for(let i = 0; i < bufferedChunks.length; i++){
                    const bufferedChunk = bufferedChunks[i];
                    chunk.set(bufferedChunk, copiedBytes);
                    copiedBytes += bufferedChunk.byteLength;
                }
                // We just wrote all the buffered chunks so we need to reset the bufferedChunks array
                // and our bufferByteLength to prepare for the next round of buffered chunks
                bufferedChunks.length = 0;
                bufferByteLength = 0;
                controller.enqueue(chunk);
            } catch  {
            // If an error occurs while enqueuing it can't be due to this
            // transformers fault. It's likely due to the controller being
            // errored due to the stream being cancelled.
            } finally{
                pending = undefined;
                detached.resolve();
            }
        });
    };
    return new TransformStream({
        transform (chunk, controller) {
            // Combine the previous buffer with the new chunk.
            bufferedChunks.push(chunk);
            bufferByteLength += chunk.byteLength;
            // Flush the buffer to the controller.
            flush(controller);
        },
        flush () {
            if (!pending) return;
            return pending.promise;
        }
    });
}
function createInsertedHTMLStream(getServerInsertedHTML) {
    return new TransformStream({
        transform: async (chunk, controller)=>{
            const html = await getServerInsertedHTML();
            if (html) {
                controller.enqueue(encoder.encode(html));
            }
            controller.enqueue(chunk);
        }
    });
}
function renderToInitialFizzStream({ ReactDOMServer, element, streamOptions }) {
    return (0, _tracer.getTracer)().trace(_constants.AppRenderSpan.renderToReadableStream, async ()=>ReactDOMServer.renderToReadableStream(element, streamOptions));
}
function createHeadInsertionTransformStream(insert) {
    let inserted = false;
    let freezing = false;
    // We need to track if this transform saw any bytes because if it didn't
    // we won't want to insert any server HTML at all
    let hasBytes = false;
    return new TransformStream({
        async transform (chunk, controller) {
            hasBytes = true;
            // While react is flushing chunks, we don't apply insertions
            if (freezing) {
                controller.enqueue(chunk);
                return;
            }
            const insertion = await insert();
            if (inserted) {
                if (insertion) {
                    const encodedInsertion = encoder.encode(insertion);
                    controller.enqueue(encodedInsertion);
                }
                controller.enqueue(chunk);
                freezing = true;
            } else {
                // TODO (@Ethan-Arrowood): Replace the generic `indexOfUint8Array` method with something finely tuned for the subset of things actually being checked for.
                const index = (0, _uint8arrayhelpers.indexOfUint8Array)(chunk, _encodedTags.ENCODED_TAGS.CLOSED.HEAD);
                if (index !== -1) {
                    if (insertion) {
                        const encodedInsertion = encoder.encode(insertion);
                        const insertedHeadContent = new Uint8Array(chunk.length + encodedInsertion.length);
                        insertedHeadContent.set(chunk.slice(0, index));
                        insertedHeadContent.set(encodedInsertion, index);
                        insertedHeadContent.set(chunk.slice(index), index + encodedInsertion.length);
                        controller.enqueue(insertedHeadContent);
                    } else {
                        controller.enqueue(chunk);
                    }
                    freezing = true;
                    inserted = true;
                }
            }
            if (!inserted) {
                controller.enqueue(chunk);
            } else {
                (0, _scheduler.scheduleImmediate)(()=>{
                    freezing = false;
                });
            }
        },
        async flush (controller) {
            // Check before closing if there's anything remaining to insert.
            if (hasBytes) {
                const insertion = await insert();
                if (insertion) {
                    controller.enqueue(encoder.encode(insertion));
                }
            }
        }
    });
}
// Suffix after main body content - scripts before </body>,
// but wait for the major chunks to be enqueued.
function createDeferredSuffixStream(suffix) {
    let flushed = false;
    let pending;
    const flush = (controller)=>{
        const detached = new _detachedpromise.DetachedPromise();
        pending = detached;
        (0, _scheduler.scheduleImmediate)(()=>{
            try {
                controller.enqueue(encoder.encode(suffix));
            } catch  {
            // If an error occurs while enqueuing it can't be due to this
            // transformers fault. It's likely due to the controller being
            // errored due to the stream being cancelled.
            } finally{
                pending = undefined;
                detached.resolve();
            }
        });
    };
    return new TransformStream({
        transform (chunk, controller) {
            controller.enqueue(chunk);
            // If we've already flushed, we're done.
            if (flushed) return;
            // Schedule the flush to happen.
            flushed = true;
            flush(controller);
        },
        flush (controller) {
            if (pending) return pending.promise;
            if (flushed) return;
            // Flush now.
            controller.enqueue(encoder.encode(suffix));
        }
    });
}
// Merge two streams into one. Ensure the final transform stream is closed
// when both are finished.
function createMergedTransformStream(stream) {
    let pull = null;
    let donePulling = false;
    async function startPulling(controller) {
        if (pull) {
            return;
        }
        const reader = stream.getReader();
        // NOTE: streaming flush
        // We are buffering here for the inlined data stream because the
        // "shell" stream might be chunkenized again by the underlying stream
        // implementation, e.g. with a specific high-water mark. To ensure it's
        // the safe timing to pipe the data stream, this extra tick is
        // necessary.
        // We don't start reading until we've left the current Task to ensure
        // that it's inserted after flushing the shell. Note that this implementation
        // might get stale if impl details of Fizz change in the future.
        await (0, _scheduler.atLeastOneTask)();
        try {
            while(true){
                const { done, value } = await reader.read();
                if (done) {
                    donePulling = true;
                    return;
                }
                controller.enqueue(value);
            }
        } catch (err) {
            controller.error(err);
        }
    }
    return new TransformStream({
        transform (chunk, controller) {
            controller.enqueue(chunk);
            // Start the streaming if it hasn't already been started yet.
            if (!pull) {
                pull = startPulling(controller);
            }
        },
        flush (controller) {
            if (donePulling) {
                return;
            }
            return pull || startPulling(controller);
        }
    });
}
const CLOSE_TAG = '</body></html>';
/**
 * This transform stream moves the suffix to the end of the stream, so results
 * like `</body></html><script>...</script>` will be transformed to
 * `<script>...</script></body></html>`.
 */ function createMoveSuffixStream() {
    let foundSuffix = false;
    return new TransformStream({
        transform (chunk, controller) {
            if (foundSuffix) {
                return controller.enqueue(chunk);
            }
            const index = (0, _uint8arrayhelpers.indexOfUint8Array)(chunk, _encodedTags.ENCODED_TAGS.CLOSED.BODY_AND_HTML);
            if (index > -1) {
                foundSuffix = true;
                // If the whole chunk is the suffix, then don't write anything, it will
                // be written in the flush.
                if (chunk.length === _encodedTags.ENCODED_TAGS.CLOSED.BODY_AND_HTML.length) {
                    return;
                }
                // Write out the part before the suffix.
                const before = chunk.slice(0, index);
                controller.enqueue(before);
                // In the case where the suffix is in the middle of the chunk, we need
                // to split the chunk into two parts.
                if (chunk.length > _encodedTags.ENCODED_TAGS.CLOSED.BODY_AND_HTML.length + index) {
                    // Write out the part after the suffix.
                    const after = chunk.slice(index + _encodedTags.ENCODED_TAGS.CLOSED.BODY_AND_HTML.length);
                    controller.enqueue(after);
                }
            } else {
                controller.enqueue(chunk);
            }
        },
        flush (controller) {
            // Even if we didn't find the suffix, the HTML is not valid if we don't
            // add it, so insert it at the end.
            controller.enqueue(_encodedTags.ENCODED_TAGS.CLOSED.BODY_AND_HTML);
        }
    });
}
function createStripDocumentClosingTagsTransform() {
    return new TransformStream({
        transform (chunk, controller) {
            // We rely on the assumption that chunks will never break across a code unit.
            // This is reasonable because we currently concat all of React's output from a single
            // flush into one chunk before streaming it forward which means the chunk will represent
            // a single coherent utf-8 string. This is not safe to use if we change our streaming to no
            // longer do this large buffered chunk
            if ((0, _uint8arrayhelpers.isEquivalentUint8Arrays)(chunk, _encodedTags.ENCODED_TAGS.CLOSED.BODY_AND_HTML) || (0, _uint8arrayhelpers.isEquivalentUint8Arrays)(chunk, _encodedTags.ENCODED_TAGS.CLOSED.BODY) || (0, _uint8arrayhelpers.isEquivalentUint8Arrays)(chunk, _encodedTags.ENCODED_TAGS.CLOSED.HTML)) {
                // the entire chunk is the closing tags; return without enqueueing anything.
                return;
            }
            // We assume these tags will go at together at the end of the document and that
            // they won't appear anywhere else in the document. This is not really a safe assumption
            // but until we revamp our streaming infra this is a performant way to string the tags
            chunk = (0, _uint8arrayhelpers.removeFromUint8Array)(chunk, _encodedTags.ENCODED_TAGS.CLOSED.BODY);
            chunk = (0, _uint8arrayhelpers.removeFromUint8Array)(chunk, _encodedTags.ENCODED_TAGS.CLOSED.HTML);
            controller.enqueue(chunk);
        }
    });
}
function createRootLayoutValidatorStream() {
    let foundHtml = false;
    let foundBody = false;
    return new TransformStream({
        async transform (chunk, controller) {
            // Peek into the streamed chunk to see if the tags are present.
            if (!foundHtml && (0, _uint8arrayhelpers.indexOfUint8Array)(chunk, _encodedTags.ENCODED_TAGS.OPENING.HTML) > -1) {
                foundHtml = true;
            }
            if (!foundBody && (0, _uint8arrayhelpers.indexOfUint8Array)(chunk, _encodedTags.ENCODED_TAGS.OPENING.BODY) > -1) {
                foundBody = true;
            }
            controller.enqueue(chunk);
        },
        flush (controller) {
            const missingTags = [];
            if (!foundHtml) missingTags.push('html');
            if (!foundBody) missingTags.push('body');
            if (!missingTags.length) return;
            controller.enqueue(encoder.encode(`<script>self.__next_root_layout_missing_tags=${JSON.stringify(missingTags)}</script>`));
        }
    });
}
function chainTransformers(readable, transformers) {
    let stream = readable;
    for (const transformer of transformers){
        if (!transformer) continue;
        stream = stream.pipeThrough(transformer);
    }
    return stream;
}
async function continueFizzStream(renderStream, { suffix, inlinedDataStream, isStaticGeneration, getServerInsertedHTML, serverInsertedHTMLToHead, validateRootLayout }) {
    // Suffix itself might contain close tags at the end, so we need to split it.
    const suffixUnclosed = suffix ? suffix.split(CLOSE_TAG, 1)[0] : null;
    // If we're generating static HTML and there's an `allReady` promise on the
    // stream, we need to wait for it to resolve before continuing.
    if (isStaticGeneration && 'allReady' in renderStream) {
        await renderStream.allReady;
    }
    return chainTransformers(renderStream, [
        // Buffer everything to avoid flushing too frequently
        createBufferedTransformStream(),
        // Insert generated tags to head
        getServerInsertedHTML && !serverInsertedHTMLToHead ? createInsertedHTMLStream(getServerInsertedHTML) : null,
        // Insert suffix content
        suffixUnclosed != null && suffixUnclosed.length > 0 ? createDeferredSuffixStream(suffixUnclosed) : null,
        // Insert the inlined data (Flight data, form state, etc.) stream into the HTML
        inlinedDataStream ? createMergedTransformStream(inlinedDataStream) : null,
        // Validate the root layout for missing html or body tags
        validateRootLayout ? createRootLayoutValidatorStream() : null,
        // Close tags should always be deferred to the end
        createMoveSuffixStream(),
        // Special head insertions
        // TODO-APP: Insert server side html to end of head in app layout rendering, to avoid
        // hydration errors. Remove this once it's ready to be handled by react itself.
        getServerInsertedHTML && serverInsertedHTMLToHead ? createHeadInsertionTransformStream(getServerInsertedHTML) : null
    ]);
}
async function continueDynamicPrerender(prerenderStream, { getServerInsertedHTML }) {
    return prerenderStream // Buffer everything to avoid flushing too frequently
    .pipeThrough(createBufferedTransformStream()).pipeThrough(createStripDocumentClosingTagsTransform()) // Insert generated tags to head
    .pipeThrough(createHeadInsertionTransformStream(getServerInsertedHTML));
}
async function continueStaticPrerender(prerenderStream, { inlinedDataStream, getServerInsertedHTML }) {
    return prerenderStream // Buffer everything to avoid flushing too frequently
    .pipeThrough(createBufferedTransformStream()) // Insert generated tags to head
    .pipeThrough(createHeadInsertionTransformStream(getServerInsertedHTML)) // Insert the inlined data (Flight data, form state, etc.) stream into the HTML
    .pipeThrough(createMergedTransformStream(inlinedDataStream)) // Close tags should always be deferred to the end
    .pipeThrough(createMoveSuffixStream());
}
async function continueDynamicHTMLResume(renderStream, { inlinedDataStream, getServerInsertedHTML }) {
    return renderStream // Buffer everything to avoid flushing too frequently
    .pipeThrough(createBufferedTransformStream()) // Insert generated tags to head
    .pipeThrough(createHeadInsertionTransformStream(getServerInsertedHTML)) // Insert the inlined data (Flight data, form state, etc.) stream into the HTML
    .pipeThrough(createMergedTransformStream(inlinedDataStream)) // Close tags should always be deferred to the end
    .pipeThrough(createMoveSuffixStream());
}
function createDocumentClosingStream() {
    return streamFromString(CLOSE_TAG);
} //# sourceMappingURL=node-web-streams-helper.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/invariant-error.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "InvariantError", {
    enumerable: true,
    get: function() {
        return InvariantError;
    }
});
class InvariantError extends Error {
    constructor(message, options){
        super("Invariant: " + (message.endsWith('.') ? message : message + '.') + " This is a bug in Next.js.", options);
        this.name = 'InvariantError';
    }
} //# sourceMappingURL=invariant-error.js.map
}}),
"[project]/node_modules/next/dist/server/app-render/encryption-utils.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    arrayBufferToString: null,
    decrypt: null,
    encrypt: null,
    getActionEncryptionKey: null,
    getClientReferenceManifestForRsc: null,
    getServerModuleMap: null,
    setReferenceManifestsSingleton: null,
    stringToUint8Array: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    arrayBufferToString: function() {
        return arrayBufferToString;
    },
    decrypt: function() {
        return decrypt;
    },
    encrypt: function() {
        return encrypt;
    },
    getActionEncryptionKey: function() {
        return getActionEncryptionKey;
    },
    getClientReferenceManifestForRsc: function() {
        return getClientReferenceManifestForRsc;
    },
    getServerModuleMap: function() {
        return getServerModuleMap;
    },
    setReferenceManifestsSingleton: function() {
        return setReferenceManifestsSingleton;
    },
    stringToUint8Array: function() {
        return stringToUint8Array;
    }
});
const _invarianterror = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
const _apppaths = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)");
const _workasyncstorageexternal = __turbopack_require__("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
let __next_loaded_action_key;
function arrayBufferToString(buffer) {
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    // @anonrig: V8 has a limit of 65535 arguments in a function.
    // For len < 65535, this is faster.
    // https://github.com/vercel/next.js/pull/56377#pullrequestreview-1656181623
    if (len < 65535) {
        return String.fromCharCode.apply(null, bytes);
    }
    let binary = '';
    for(let i = 0; i < len; i++){
        binary += String.fromCharCode(bytes[i]);
    }
    return binary;
}
function stringToUint8Array(binary) {
    const len = binary.length;
    const arr = new Uint8Array(len);
    for(let i = 0; i < len; i++){
        arr[i] = binary.charCodeAt(i);
    }
    return arr;
}
function encrypt(key, iv, data) {
    return crypto.subtle.encrypt({
        name: 'AES-GCM',
        iv
    }, key, data);
}
function decrypt(key, iv, data) {
    return crypto.subtle.decrypt({
        name: 'AES-GCM',
        iv
    }, key, data);
}
// This is a global singleton that is used to encode/decode the action bound args from
// the closure. This can't be using a AsyncLocalStorage as it might happen on the module
// level. Since the client reference manifest won't be mutated, let's use a global singleton
// to keep it.
const SERVER_ACTION_MANIFESTS_SINGLETON = Symbol.for('next.server.action-manifests');
function setReferenceManifestsSingleton({ page, clientReferenceManifest, serverActionsManifest, serverModuleMap }) {
    var _globalThis_SERVER_ACTION_MANIFESTS_SINGLETON;
    // @ts-expect-error
    const clientReferenceManifestsPerPage = (_globalThis_SERVER_ACTION_MANIFESTS_SINGLETON = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON]) == null ? void 0 : _globalThis_SERVER_ACTION_MANIFESTS_SINGLETON.clientReferenceManifestsPerPage;
    // @ts-expect-error
    globalThis[SERVER_ACTION_MANIFESTS_SINGLETON] = {
        clientReferenceManifestsPerPage: {
            ...clientReferenceManifestsPerPage,
            [(0, _apppaths.normalizeAppPath)(page)]: clientReferenceManifest
        },
        serverActionsManifest,
        serverModuleMap
    };
}
function getServerModuleMap() {
    const serverActionsManifestSingleton = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON];
    if (!serverActionsManifestSingleton) {
        throw new _invarianterror.InvariantError('Missing manifest for Server Actions.');
    }
    return serverActionsManifestSingleton.serverModuleMap;
}
function getClientReferenceManifestForRsc() {
    const serverActionsManifestSingleton = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON];
    if (!serverActionsManifestSingleton) {
        throw new _invarianterror.InvariantError('Missing manifest for Server Actions.');
    }
    const { clientReferenceManifestsPerPage } = serverActionsManifestSingleton;
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (!workStore) {
        // If there's no work store defined, we can assume that a client reference
        // manifest is needed during module evaluation, e.g. to create a server
        // action using a higher-order function. This might also use client
        // components which need to be serialized by Flight, and therefore client
        // references need to be resolvable. To make this work, we're returning a
        // merged manifest across all pages. This is fine as long as the module IDs
        // are not page specific, which they are not for Webpack. TODO: Fix this in
        // Turbopack.
        return mergeClientReferenceManifests(clientReferenceManifestsPerPage);
    }
    const clientReferenceManifest = clientReferenceManifestsPerPage[workStore.route];
    if (!clientReferenceManifest) {
        throw new _invarianterror.InvariantError(`Missing Client Reference Manifest for ${workStore.route}.`);
    }
    return clientReferenceManifest;
}
async function getActionEncryptionKey() {
    if (__next_loaded_action_key) {
        return __next_loaded_action_key;
    }
    const serverActionsManifestSingleton = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON];
    if (!serverActionsManifestSingleton) {
        throw new _invarianterror.InvariantError('Missing manifest for Server Actions.');
    }
    const rawKey = process.env.NEXT_SERVER_ACTIONS_ENCRYPTION_KEY || serverActionsManifestSingleton.serverActionsManifest.encryptionKey;
    if (rawKey === undefined) {
        throw new _invarianterror.InvariantError('Missing encryption key for Server Actions');
    }
    __next_loaded_action_key = await crypto.subtle.importKey('raw', stringToUint8Array(atob(rawKey)), 'AES-GCM', true, [
        'encrypt',
        'decrypt'
    ]);
    return __next_loaded_action_key;
}
function mergeClientReferenceManifests(clientReferenceManifestsPerPage) {
    const clientReferenceManifests = Object.values(clientReferenceManifestsPerPage);
    const mergedClientReferenceManifest = {
        clientModules: {},
        edgeRscModuleMapping: {},
        rscModuleMapping: {}
    };
    for (const clientReferenceManifest of clientReferenceManifests){
        mergedClientReferenceManifest.clientModules = {
            ...mergedClientReferenceManifest.clientModules,
            ...clientReferenceManifest.clientModules
        };
        mergedClientReferenceManifest.edgeRscModuleMapping = {
            ...mergedClientReferenceManifest.edgeRscModuleMapping,
            ...clientReferenceManifest.edgeRscModuleMapping
        };
        mergedClientReferenceManifest.rscModuleMapping = {
            ...mergedClientReferenceManifest.rscModuleMapping,
            ...clientReferenceManifest.rscModuleMapping
        };
    }
    return mergedClientReferenceManifest;
} //# sourceMappingURL=encryption-utils.js.map
}}),
"[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/* eslint-disable import/no-extraneous-dependencies */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    decryptActionBoundArgs: null,
    encryptActionBoundArgs: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    decryptActionBoundArgs: function() {
        return decryptActionBoundArgs;
    },
    encryptActionBoundArgs: function() {
        return encryptActionBoundArgs;
    }
});
__turbopack_require__("[project]/node_modules/next/dist/compiled/server-only/empty.js [app-rsc] (ecmascript)");
const _serveredge = __turbopack_require__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
const _clientedge = __turbopack_require__("[project]/node_modules/next/dist/compiled/react-server-dom-turbopack/client.edge.js [app-rsc] (ecmascript)");
const _nodewebstreamshelper = __turbopack_require__("[project]/node_modules/next/dist/server/stream-utils/node-web-streams-helper.js [app-rsc] (ecmascript)");
const _encryptionutils = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/encryption-utils.js [app-rsc] (ecmascript)");
const _workunitasyncstorageexternal = __turbopack_require__("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const isEdgeRuntime = ("TURBOPACK compile-time value", "nodejs") === 'edge';
const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();
async function decodeActionBoundArg(actionId, arg) {
    const key = await (0, _encryptionutils.getActionEncryptionKey)();
    if (typeof key === 'undefined') {
        throw new Error(`Missing encryption key for Server Action. This is a bug in Next.js`);
    }
    // Get the iv (16 bytes) and the payload from the arg.
    const originalPayload = atob(arg);
    const ivValue = originalPayload.slice(0, 16);
    const payload = originalPayload.slice(16);
    const decrypted = textDecoder.decode(await (0, _encryptionutils.decrypt)(key, (0, _encryptionutils.stringToUint8Array)(ivValue), (0, _encryptionutils.stringToUint8Array)(payload)));
    if (!decrypted.startsWith(actionId)) {
        throw new Error('Invalid Server Action payload: failed to decrypt.');
    }
    return decrypted.slice(actionId.length);
}
/**
 * Encrypt the serialized string with the action id as the salt. Add a prefix to
 * later ensure that the payload is correctly decrypted, similar to a checksum.
 */ async function encodeActionBoundArg(actionId, arg) {
    const key = await (0, _encryptionutils.getActionEncryptionKey)();
    if (key === undefined) {
        throw new Error(`Missing encryption key for Server Action. This is a bug in Next.js`);
    }
    // Get 16 random bytes as iv.
    const randomBytes = new Uint8Array(16);
    _workunitasyncstorageexternal.workUnitAsyncStorage.exit(()=>crypto.getRandomValues(randomBytes));
    const ivValue = (0, _encryptionutils.arrayBufferToString)(randomBytes.buffer);
    const encrypted = await (0, _encryptionutils.encrypt)(key, randomBytes, textEncoder.encode(actionId + arg));
    return btoa(ivValue + (0, _encryptionutils.arrayBufferToString)(encrypted));
}
async function encryptActionBoundArgs(actionId, args) {
    const { clientModules } = (0, _encryptionutils.getClientReferenceManifestForRsc)();
    // Create an error before any asynchrounous calls, to capture the original
    // call stack in case we need it when the serialization errors.
    const error = new Error();
    Error.captureStackTrace(error, encryptActionBoundArgs);
    let didCatchError = false;
    // Using Flight to serialize the args into a string.
    const serialized = await (0, _nodewebstreamshelper.streamToString)((0, _serveredge.renderToReadableStream)(args, clientModules, {
        onError (err) {
            // We're only reporting one error at a time, starting with the first.
            if (didCatchError) {
                return;
            }
            didCatchError = true;
            // Use the original error message together with the previously created
            // stack, because err.stack is a useless Flight Server call stack.
            error.message = err instanceof Error ? err.message : String(err);
        }
    }));
    if (didCatchError) {
        if ("TURBOPACK compile-time truthy", 1) {
            // Logging the error is needed for server functions that are passed to the
            // client where the decryption is not done during rendering. Console
            // replaying allows us to still show the error dev overlay in this case.
            console.error(error);
        }
        throw error;
    }
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (!workUnitStore) {
        return encodeActionBoundArg(actionId, serialized);
    }
    const prerenderResumeDataCache = (0, _workunitasyncstorageexternal.getPrerenderResumeDataCache)(workUnitStore);
    const renderResumeDataCache = (0, _workunitasyncstorageexternal.getRenderResumeDataCache)(workUnitStore);
    const cacheKey = actionId + serialized;
    const cachedEncrypted = (prerenderResumeDataCache == null ? void 0 : prerenderResumeDataCache.encryptedBoundArgs.get(cacheKey)) ?? (renderResumeDataCache == null ? void 0 : renderResumeDataCache.encryptedBoundArgs.get(cacheKey));
    if (cachedEncrypted) {
        return cachedEncrypted;
    }
    const cacheSignal = workUnitStore.type === 'prerender' ? workUnitStore.cacheSignal : undefined;
    cacheSignal == null ? void 0 : cacheSignal.beginRead();
    const encrypted = await encodeActionBoundArg(actionId, serialized);
    cacheSignal == null ? void 0 : cacheSignal.endRead();
    prerenderResumeDataCache == null ? void 0 : prerenderResumeDataCache.encryptedBoundArgs.set(cacheKey, encrypted);
    return encrypted;
}
async function decryptActionBoundArgs(actionId, encrypted) {
    const { edgeRscModuleMapping, rscModuleMapping } = (0, _encryptionutils.getClientReferenceManifestForRsc)();
    // Decrypt the serialized string with the action id as the salt.
    const decrypted = await decodeActionBoundArg(actionId, await encrypted);
    // Using Flight to deserialize the args from the string.
    const deserialized = await (0, _clientedge.createFromReadableStream)(new ReadableStream({
        start (controller) {
            controller.enqueue(textEncoder.encode(decrypted));
            controller.close();
        }
    }), {
        serverConsumerManifest: {
            // moduleLoading must be null because we don't want to trigger preloads of ClientReferences
            // to be added to the current execution. Instead, we'll wait for any ClientReference
            // to be emitted which themselves will handle the preloading.
            moduleLoading: null,
            moduleMap: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : rscModuleMapping,
            serverModuleMap: (0, _encryptionutils.getServerModuleMap)()
        }
    });
    return deserialized;
} //# sourceMappingURL=encryption.js.map
}}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
// This function ensures that all the exported values are valid server actions,
// during the runtime. By definition all actions are required to be async
// functions, but here we can only check that they are functions.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureServerEntryExports", {
    enumerable: true,
    get: function() {
        return ensureServerEntryExports;
    }
});
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== 'function') {
            throw new Error(`A "use server" file can only export async functions, found ${typeof action}.\nRead more: https://nextjs.org/docs/messages/invalid-use-server-value`);
        }
    }
} //# sourceMappingURL=action-validate.js.map
}}),
"[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>_extends)
});
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
;
}}),
"[project]/node_modules/memoize-one/dist/memoize-one.esm.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>memoizeOne)
});
var safeIsNaN = Number.isNaN || function ponyfill(value) {
    return typeof value === 'number' && value !== value;
};
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for(var i = 0; i < newInputs.length; i++){
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}
function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) {
        isEqual = areInputsEqual;
    }
    var cache = null;
    function memoized() {
        var newArgs = [];
        for(var _i = 0; _i < arguments.length; _i++){
            newArgs[_i] = arguments[_i];
        }
        if (cache && cache.lastThis === this && isEqual(newArgs, cache.lastArgs)) {
            return cache.lastResult;
        }
        var lastResult = resultFn.apply(this, newArgs);
        cache = {
            lastResult: lastResult,
            lastArgs: newArgs,
            lastThis: this
        };
        return lastResult;
    }
    memoized.clear = function clear() {
        cache = null;
    };
    return memoized;
}
;
}}),
"[project]/node_modules/react-redux/dist/rsc.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/utils/shallowEqual.ts
__turbopack_esm__({
    "Provider": (()=>throwNotSupportedError),
    "ReactReduxContext": (()=>ReactReduxContext),
    "batch": (()=>throwNotSupportedError),
    "connect": (()=>throwNotSupportedError),
    "createDispatchHook": (()=>throwNotSupportedError),
    "createSelectorHook": (()=>throwNotSupportedError),
    "createStoreHook": (()=>throwNotSupportedError),
    "shallowEqual": (()=>shallowEqual),
    "useDispatch": (()=>throwNotSupportedError),
    "useSelector": (()=>throwNotSupportedError),
    "useStore": (()=>throwNotSupportedError)
});
function is(x, y) {
    if (x === y) {
        return x !== 0 || y !== 0 || 1 / x === 1 / y;
    } else {
        return x !== x && y !== y;
    }
}
function shallowEqual(objA, objB) {
    if (is(objA, objB)) return true;
    if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
        return false;
    }
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) return false;
    for(let i = 0; i < keysA.length; i++){
        if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
            return false;
        }
    }
    return true;
}
// src/index-rsc.ts
var throwNotSupportedError = (...args)=>{
    throw new Error("This function is not supported in React Server Components. Please only use this export in a Client Component.");
};
var ReactReduxContext = {};
;
 //# sourceMappingURL=rsc.mjs.map
}}),
"[project]/node_modules/tiny-invariant/dist/esm/tiny-invariant.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>invariant)
});
var isProduction = ("TURBOPACK compile-time value", "development") === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    var provided = typeof message === 'function' ? message() : message;
    var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
    throw new Error(value);
}
;
}}),
"[project]/node_modules/css-box-model/dist/css-box-model.esm.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "calculateBox": (()=>calculateBox),
    "createBox": (()=>createBox),
    "expand": (()=>expand),
    "getBox": (()=>getBox),
    "getRect": (()=>getRect),
    "offset": (()=>offset),
    "shrink": (()=>shrink),
    "withScroll": (()=>withScroll)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tiny$2d$invariant$2f$dist$2f$esm$2f$tiny$2d$invariant$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tiny-invariant/dist/esm/tiny-invariant.js [app-rsc] (ecmascript)");
;
var getRect = function getRect(_ref) {
    var top = _ref.top, right = _ref.right, bottom = _ref.bottom, left = _ref.left;
    var width = right - left;
    var height = bottom - top;
    var rect = {
        top: top,
        right: right,
        bottom: bottom,
        left: left,
        width: width,
        height: height,
        x: left,
        y: top,
        center: {
            x: (right + left) / 2,
            y: (bottom + top) / 2
        }
    };
    return rect;
};
var expand = function expand(target, expandBy) {
    return {
        top: target.top - expandBy.top,
        left: target.left - expandBy.left,
        bottom: target.bottom + expandBy.bottom,
        right: target.right + expandBy.right
    };
};
var shrink = function shrink(target, shrinkBy) {
    return {
        top: target.top + shrinkBy.top,
        left: target.left + shrinkBy.left,
        bottom: target.bottom - shrinkBy.bottom,
        right: target.right - shrinkBy.right
    };
};
var shift = function shift(target, shiftBy) {
    return {
        top: target.top + shiftBy.y,
        left: target.left + shiftBy.x,
        bottom: target.bottom + shiftBy.y,
        right: target.right + shiftBy.x
    };
};
var noSpacing = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
};
var createBox = function createBox(_ref2) {
    var borderBox = _ref2.borderBox, _ref2$margin = _ref2.margin, margin = _ref2$margin === void 0 ? noSpacing : _ref2$margin, _ref2$border = _ref2.border, border = _ref2$border === void 0 ? noSpacing : _ref2$border, _ref2$padding = _ref2.padding, padding = _ref2$padding === void 0 ? noSpacing : _ref2$padding;
    var marginBox = getRect(expand(borderBox, margin));
    var paddingBox = getRect(shrink(borderBox, border));
    var contentBox = getRect(shrink(paddingBox, padding));
    return {
        marginBox: marginBox,
        borderBox: getRect(borderBox),
        paddingBox: paddingBox,
        contentBox: contentBox,
        margin: margin,
        border: border,
        padding: padding
    };
};
var parse = function parse(raw) {
    var value = raw.slice(0, -2);
    var suffix = raw.slice(-2);
    if (suffix !== 'px') {
        return 0;
    }
    var result = Number(value);
    !!isNaN(result) ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tiny$2d$invariant$2f$dist$2f$esm$2f$tiny$2d$invariant$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(false, "Could not parse value [raw: " + raw + ", without suffix: " + value + "]") : ("TURBOPACK unreachable", undefined) : void 0;
    return result;
};
var getWindowScroll = function getWindowScroll() {
    return {
        x: window.pageXOffset,
        y: window.pageYOffset
    };
};
var offset = function offset(original, change) {
    var borderBox = original.borderBox, border = original.border, margin = original.margin, padding = original.padding;
    var shifted = shift(borderBox, change);
    return createBox({
        borderBox: shifted,
        border: border,
        margin: margin,
        padding: padding
    });
};
var withScroll = function withScroll(original, scroll) {
    if (scroll === void 0) {
        scroll = getWindowScroll();
    }
    return offset(original, scroll);
};
var calculateBox = function calculateBox(borderBox, styles) {
    var margin = {
        top: parse(styles.marginTop),
        right: parse(styles.marginRight),
        bottom: parse(styles.marginBottom),
        left: parse(styles.marginLeft)
    };
    var padding = {
        top: parse(styles.paddingTop),
        right: parse(styles.paddingRight),
        bottom: parse(styles.paddingBottom),
        left: parse(styles.paddingLeft)
    };
    var border = {
        top: parse(styles.borderTopWidth),
        right: parse(styles.borderRightWidth),
        bottom: parse(styles.borderBottomWidth),
        left: parse(styles.borderLeftWidth)
    };
    return createBox({
        borderBox: borderBox,
        margin: margin,
        padding: padding,
        border: border
    });
};
var getBox = function getBox(el) {
    var borderBox = el.getBoundingClientRect();
    var styles = window.getComputedStyle(el);
    return calculateBox(borderBox, styles);
};
;
}}),
"[project]/node_modules/raf-schd/dist/raf-schd.esm.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var rafSchd = function rafSchd(fn) {
    var lastArgs = [];
    var frameId = null;
    var wrapperFn = function wrapperFn() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        lastArgs = args;
        if (frameId) {
            return;
        }
        frameId = requestAnimationFrame(function() {
            frameId = null;
            fn.apply(void 0, lastArgs);
        });
    };
    wrapperFn.cancel = function() {
        if (!frameId) {
            return;
        }
        cancelAnimationFrame(frameId);
        frameId = null;
    };
    return wrapperFn;
};
const __TURBOPACK__default__export__ = rafSchd;
}}),
"[project]/node_modules/redux/dist/redux.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/utils/formatProdErrorMessage.ts
__turbopack_esm__({
    "__DO_NOT_USE__ActionTypes": (()=>actionTypes_default),
    "applyMiddleware": (()=>applyMiddleware),
    "bindActionCreators": (()=>bindActionCreators),
    "combineReducers": (()=>combineReducers),
    "compose": (()=>compose),
    "createStore": (()=>createStore),
    "isAction": (()=>isAction),
    "isPlainObject": (()=>isPlainObject),
    "legacy_createStore": (()=>legacy_createStore)
});
function formatProdErrorMessage(code) {
    return `Minified Redux error #${code}; visit https://redux.js.org/Errors?code=${code} for the full message or use the non-minified dev environment for full errors. `;
}
// src/utils/symbol-observable.ts
var $$observable = /* @__PURE__ */ (()=>typeof Symbol === "function" && Symbol.observable || "@@observable")();
var symbol_observable_default = $$observable;
// src/utils/actionTypes.ts
var randomString = ()=>Math.random().toString(36).substring(7).split("").join(".");
var ActionTypes = {
    INIT: `@@redux/INIT${randomString()}`,
    REPLACE: `@@redux/REPLACE${randomString()}`,
    PROBE_UNKNOWN_ACTION: ()=>`@@redux/PROBE_UNKNOWN_ACTION${randomString()}`
};
var actionTypes_default = ActionTypes;
// src/utils/isPlainObject.ts
function isPlainObject(obj) {
    if (typeof obj !== "object" || obj === null) return false;
    let proto = obj;
    while(Object.getPrototypeOf(proto) !== null){
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(obj) === proto || Object.getPrototypeOf(obj) === null;
}
// src/utils/kindOf.ts
function miniKindOf(val) {
    if (val === void 0) return "undefined";
    if (val === null) return "null";
    const type = typeof val;
    switch(type){
        case "boolean":
        case "string":
        case "number":
        case "symbol":
        case "function":
            {
                return type;
            }
    }
    if (Array.isArray(val)) return "array";
    if (isDate(val)) return "date";
    if (isError(val)) return "error";
    const constructorName = ctorName(val);
    switch(constructorName){
        case "Symbol":
        case "Promise":
        case "WeakMap":
        case "WeakSet":
        case "Map":
        case "Set":
            return constructorName;
    }
    return Object.prototype.toString.call(val).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function ctorName(val) {
    return typeof val.constructor === "function" ? val.constructor.name : null;
}
function isError(val) {
    return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
}
function isDate(val) {
    if (val instanceof Date) return true;
    return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
}
function kindOf(val) {
    let typeOfVal = typeof val;
    if ("TURBOPACK compile-time truthy", 1) {
        typeOfVal = miniKindOf(val);
    }
    return typeOfVal;
}
// src/createStore.ts
function createStore(reducer, preloadedState, enhancer) {
    if (typeof reducer !== "function") {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : `Expected the root reducer to be a function. Instead, received: '${kindOf(reducer)}'`);
    }
    if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
    }
    if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
        enhancer = preloadedState;
        preloadedState = void 0;
    }
    if (typeof enhancer !== "undefined") {
        if (typeof enhancer !== "function") {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : `Expected the enhancer to be a function. Instead, received: '${kindOf(enhancer)}'`);
        }
        return enhancer(createStore)(reducer, preloadedState);
    }
    let currentReducer = reducer;
    let currentState = preloadedState;
    let currentListeners = /* @__PURE__ */ new Map();
    let nextListeners = currentListeners;
    let listenerIdCounter = 0;
    let isDispatching = false;
    function ensureCanMutateNextListeners() {
        if (nextListeners === currentListeners) {
            nextListeners = /* @__PURE__ */ new Map();
            currentListeners.forEach((listener, key)=>{
                nextListeners.set(key, listener);
            });
        }
    }
    function getState() {
        if (isDispatching) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
        }
        return currentState;
    }
    function subscribe(listener) {
        if (typeof listener !== "function") {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : `Expected the listener to be a function. Instead, received: '${kindOf(listener)}'`);
        }
        if (isDispatching) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
        }
        let isSubscribed = true;
        ensureCanMutateNextListeners();
        const listenerId = listenerIdCounter++;
        nextListeners.set(listenerId, listener);
        return function unsubscribe() {
            if (!isSubscribed) {
                return;
            }
            if (isDispatching) {
                throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
            }
            isSubscribed = false;
            ensureCanMutateNextListeners();
            nextListeners.delete(listenerId);
            currentListeners = null;
        };
    }
    function dispatch(action) {
        if (!isPlainObject(action)) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : `Actions must be plain objects. Instead, the actual type was: '${kindOf(action)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
        }
        if (typeof action.type === "undefined") {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
        }
        if (typeof action.type !== "string") {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : `Action "type" property must be a string. Instead, the actual type was: '${kindOf(action.type)}'. Value was: '${action.type}' (stringified)`);
        }
        if (isDispatching) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "Reducers may not dispatch actions.");
        }
        try {
            isDispatching = true;
            currentState = currentReducer(currentState, action);
        } finally{
            isDispatching = false;
        }
        const listeners = currentListeners = nextListeners;
        listeners.forEach((listener)=>{
            listener();
        });
        return action;
    }
    function replaceReducer(nextReducer) {
        if (typeof nextReducer !== "function") {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : `Expected the nextReducer to be a function. Instead, received: '${kindOf(nextReducer)}`);
        }
        currentReducer = nextReducer;
        dispatch({
            type: actionTypes_default.REPLACE
        });
    }
    function observable() {
        const outerSubscribe = subscribe;
        return {
            /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */ subscribe (observer) {
                if (typeof observer !== "object" || observer === null) {
                    throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : `Expected the observer to be an object. Instead, received: '${kindOf(observer)}'`);
                }
                function observeState() {
                    const observerAsObserver = observer;
                    if (observerAsObserver.next) {
                        observerAsObserver.next(getState());
                    }
                }
                observeState();
                const unsubscribe = outerSubscribe(observeState);
                return {
                    unsubscribe
                };
            },
            [symbol_observable_default] () {
                return this;
            }
        };
    }
    dispatch({
        type: actionTypes_default.INIT
    });
    const store = {
        dispatch,
        subscribe,
        getState,
        replaceReducer,
        [symbol_observable_default]: observable
    };
    return store;
}
function legacy_createStore(reducer, preloadedState, enhancer) {
    return createStore(reducer, preloadedState, enhancer);
}
// src/utils/warning.ts
function warning(message) {
    if (typeof console !== "undefined" && typeof console.error === "function") {
        console.error(message);
    }
    try {
        throw new Error(message);
    } catch (e) {}
}
// src/combineReducers.ts
function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
    const reducerKeys = Object.keys(reducers);
    const argumentName = action && action.type === actionTypes_default.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
    if (reducerKeys.length === 0) {
        return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
    }
    if (!isPlainObject(inputState)) {
        return `The ${argumentName} has unexpected type of "${kindOf(inputState)}". Expected argument to be an object with the following keys: "${reducerKeys.join('", "')}"`;
    }
    const unexpectedKeys = Object.keys(inputState).filter((key)=>!reducers.hasOwnProperty(key) && !unexpectedKeyCache[key]);
    unexpectedKeys.forEach((key)=>{
        unexpectedKeyCache[key] = true;
    });
    if (action && action.type === actionTypes_default.REPLACE) return;
    if (unexpectedKeys.length > 0) {
        return `Unexpected ${unexpectedKeys.length > 1 ? "keys" : "key"} "${unexpectedKeys.join('", "')}" found in ${argumentName}. Expected to find one of the known reducer keys instead: "${reducerKeys.join('", "')}". Unexpected keys will be ignored.`;
    }
}
function assertReducerShape(reducers) {
    Object.keys(reducers).forEach((key)=>{
        const reducer = reducers[key];
        const initialState = reducer(void 0, {
            type: actionTypes_default.INIT
        });
        if (typeof initialState === "undefined") {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : `The slice reducer for key "${key}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
        }
        if (typeof reducer(void 0, {
            type: actionTypes_default.PROBE_UNKNOWN_ACTION()
        }) === "undefined") {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : `The slice reducer for key "${key}" returned undefined when probed with a random type. Don't try to handle '${actionTypes_default.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
        }
    });
}
function combineReducers(reducers) {
    const reducerKeys = Object.keys(reducers);
    const finalReducers = {};
    for(let i = 0; i < reducerKeys.length; i++){
        const key = reducerKeys[i];
        if ("TURBOPACK compile-time truthy", 1) {
            if (typeof reducers[key] === "undefined") {
                warning(`No reducer provided for key "${key}"`);
            }
        }
        if (typeof reducers[key] === "function") {
            finalReducers[key] = reducers[key];
        }
    }
    const finalReducerKeys = Object.keys(finalReducers);
    let unexpectedKeyCache;
    if (("TURBOPACK compile-time value", "development") !== "production") {
        unexpectedKeyCache = {};
    }
    let shapeAssertionError;
    try {
        assertReducerShape(finalReducers);
    } catch (e) {
        shapeAssertionError = e;
    }
    return function combination(state = {}, action) {
        if (shapeAssertionError) {
            throw shapeAssertionError;
        }
        if ("TURBOPACK compile-time truthy", 1) {
            const warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
            if (warningMessage) {
                warning(warningMessage);
            }
        }
        let hasChanged = false;
        const nextState = {};
        for(let i = 0; i < finalReducerKeys.length; i++){
            const key = finalReducerKeys[i];
            const reducer = finalReducers[key];
            const previousStateForKey = state[key];
            const nextStateForKey = reducer(previousStateForKey, action);
            if (typeof nextStateForKey === "undefined") {
                const actionType = action && action.type;
                throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : `When called with an action of type ${actionType ? `"${String(actionType)}"` : "(unknown type)"}, the slice reducer for key "${key}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
            }
            nextState[key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }
        hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
        return hasChanged ? nextState : state;
    };
}
// src/bindActionCreators.ts
function bindActionCreator(actionCreator, dispatch) {
    return function(...args) {
        return dispatch(actionCreator.apply(this, args));
    };
}
function bindActionCreators(actionCreators, dispatch) {
    if (typeof actionCreators === "function") {
        return bindActionCreator(actionCreators, dispatch);
    }
    if (typeof actionCreators !== "object" || actionCreators === null) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : `bindActionCreators expected an object or a function, but instead received: '${kindOf(actionCreators)}'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
    }
    const boundActionCreators = {};
    for(const key in actionCreators){
        const actionCreator = actionCreators[key];
        if (typeof actionCreator === "function") {
            boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
        }
    }
    return boundActionCreators;
}
// src/compose.ts
function compose(...funcs) {
    if (funcs.length === 0) {
        return (arg)=>arg;
    }
    if (funcs.length === 1) {
        return funcs[0];
    }
    return funcs.reduce((a, b)=>(...args)=>a(b(...args)));
}
// src/applyMiddleware.ts
function applyMiddleware(...middlewares) {
    return (createStore2)=>(reducer, preloadedState)=>{
            const store = createStore2(reducer, preloadedState);
            let dispatch = ()=>{
                throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
            };
            const middlewareAPI = {
                getState: store.getState,
                dispatch: (action, ...args)=>dispatch(action, ...args)
            };
            const chain = middlewares.map((middleware)=>middleware(middlewareAPI));
            dispatch = compose(...chain)(store.dispatch);
            return {
                ...store,
                dispatch
            };
        };
}
// src/utils/isAction.ts
function isAction(action) {
    return isPlainObject(action) && "type" in action && typeof action.type === "string";
}
;
 //# sourceMappingURL=redux.mjs.map
}}),
"[project]/node_modules/use-memo-one/dist/use-memo-one.esm.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useCallback": (()=>useCallback),
    "useCallbackOne": (()=>useCallbackOne),
    "useMemo": (()=>useMemo),
    "useMemoOne": (()=>useMemoOne)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for(var i = 0; i < newInputs.length; i++){
        if (newInputs[i] !== lastInputs[i]) {
            return false;
        }
    }
    return true;
}
function useMemoOne(getResult, inputs) {
    var initial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(function() {
        return {
            inputs: inputs,
            result: getResult()
        };
    })[0];
    var isFirstRun = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(true);
    var committed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(initial);
    var useCache = isFirstRun.current || Boolean(inputs && committed.current.inputs && areInputsEqual(inputs, committed.current.inputs));
    var cache = useCache ? committed.current : {
        inputs: inputs,
        result: getResult()
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        isFirstRun.current = false;
        committed.current = cache;
    }, [
        cache
    ]);
    return cache.result;
}
function useCallbackOne(callback, inputs) {
    return useMemoOne(function() {
        return callback;
    }, inputs);
}
var useMemo = useMemoOne;
var useCallback = useCallbackOne;
;
}}),
"[project]/node_modules/@hello-pangea/dnd/dist/dnd.esm.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "DragDropContext": (()=>DragDropContext),
    "Draggable": (()=>PublicDraggable),
    "Droppable": (()=>ConnectedDroppable$1),
    "useKeyboardSensor": (()=>useKeyboardSensor),
    "useMouseSensor": (()=>useMouseSensor),
    "useTouchSensor": (()=>useTouchSensor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$dom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-dom.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$memoize$2d$one$2f$dist$2f$memoize$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/memoize-one/dist/memoize-one.esm.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$rsc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/dist/rsc.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$box$2d$model$2f$dist$2f$css$2d$box$2d$model$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/css-box-model/dist/css-box-model.esm.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$raf$2d$schd$2f$dist$2f$raf$2d$schd$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/raf-schd/dist/raf-schd.esm.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/redux/dist/redux.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/use-memo-one/dist/use-memo-one.esm.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
const isProduction$1 = ("TURBOPACK compile-time value", "development") === 'production';
const spacesAndTabs = /[ \t]{2,}/g;
const lineStartWithSpaces = /^[ \t]*/gm;
const clean$2 = (value)=>value.replace(spacesAndTabs, ' ').replace(lineStartWithSpaces, '').trim();
const getDevMessage = (message)=>clean$2(`
  %c@hello-pangea/dnd

  %c${clean$2(message)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`);
const getFormattedMessage = (message)=>[
        getDevMessage(message),
        'color: #00C584; font-size: 1.2em; font-weight: bold;',
        'line-height: 1.5',
        'color: #723874;'
    ];
const isDisabledFlag = '__@hello-pangea/dnd-disable-dev-warnings';
function log(type, message) {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    console[type](...getFormattedMessage(message));
}
const warning = log.bind(null, 'warn');
const error = log.bind(null, 'error');
function noop$2() {}
function getOptions(shared, fromBinding) {
    return {
        ...shared,
        ...fromBinding
    };
}
function bindEvents(el, bindings, sharedOptions) {
    const unbindings = bindings.map((binding)=>{
        const options = getOptions(sharedOptions, binding.options);
        el.addEventListener(binding.eventName, binding.fn, options);
        return function unbind() {
            el.removeEventListener(binding.eventName, binding.fn, options);
        };
    });
    return function unbindAll() {
        unbindings.forEach((unbind)=>{
            unbind();
        });
    };
}
const isProduction = ("TURBOPACK compile-time value", "development") === 'production';
const prefix$1 = 'Invariant failed';
class RbdInvariant extends Error {
}
RbdInvariant.prototype.toString = function toString() {
    return this.message;
};
function invariant(condition, message) {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        throw new RbdInvariant(`${prefix$1}: ${message || ''}`);
    }
}
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Component {
    constructor(...args){
        super(...args);
        this.callbacks = null;
        this.unbind = noop$2;
        this.onWindowError = (event)=>{
            const callbacks = this.getCallbacks();
            if (callbacks.isDragging()) {
                callbacks.tryAbort();
                ("TURBOPACK compile-time truthy", 1) ? warning(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `) : ("TURBOPACK unreachable", undefined);
            }
            const err = event.error;
            if (err instanceof RbdInvariant) {
                event.preventDefault();
                if ("TURBOPACK compile-time truthy", 1) {
                    error(err.message);
                }
            }
        };
        this.getCallbacks = ()=>{
            if (!this.callbacks) {
                throw new Error('Unable to find AppCallbacks in <ErrorBoundary/>');
            }
            return this.callbacks;
        };
        this.setCallbacks = (callbacks)=>{
            this.callbacks = callbacks;
        };
    }
    componentDidMount() {
        this.unbind = bindEvents(window, [
            {
                eventName: 'error',
                fn: this.onWindowError
            }
        ]);
    }
    componentDidCatch(err) {
        if (err instanceof RbdInvariant) {
            if ("TURBOPACK compile-time truthy", 1) {
                error(err.message);
            }
            this.setState({});
            return;
        }
        throw err;
    }
    componentWillUnmount() {
        this.unbind();
    }
    render() {
        return this.props.children(this.setCallbacks);
    }
}
const dragHandleUsageInstructions = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`;
const position = (index)=>index + 1;
const onDragStart = (start)=>`
  You have lifted an item in position ${position(start.source.index)}
`;
const withLocation = (source, destination)=>{
    const isInHomeList = source.droppableId === destination.droppableId;
    const startPosition = position(source.index);
    const endPosition = position(destination.index);
    if (isInHomeList) {
        return `
      You have moved the item from position ${startPosition}
      to position ${endPosition}
    `;
    }
    return `
    You have moved the item from position ${startPosition}
    in list ${source.droppableId}
    to list ${destination.droppableId}
    in position ${endPosition}
  `;
};
const withCombine = (id, source, combine)=>{
    const inHomeList = source.droppableId === combine.droppableId;
    if (inHomeList) {
        return `
      The item ${id}
      has been combined with ${combine.draggableId}`;
    }
    return `
      The item ${id}
      in list ${source.droppableId}
      has been combined with ${combine.draggableId}
      in list ${combine.droppableId}
    `;
};
const onDragUpdate = (update)=>{
    const location = update.destination;
    if (location) {
        return withLocation(update.source, location);
    }
    const combine = update.combine;
    if (combine) {
        return withCombine(update.draggableId, update.source, combine);
    }
    return 'You are over an area that cannot be dropped on';
};
const returnedToStart = (source)=>`
  The item has returned to its starting position
  of ${position(source.index)}
`;
const onDragEnd = (result)=>{
    if (result.reason === 'CANCEL') {
        return `
      Movement cancelled.
      ${returnedToStart(result.source)}
    `;
    }
    const location = result.destination;
    const combine = result.combine;
    if (location) {
        return `
      You have dropped the item.
      ${withLocation(result.source, location)}
    `;
    }
    if (combine) {
        return `
      You have dropped the item.
      ${withCombine(result.draggableId, result.source, combine)}
    `;
    }
    return `
    The item has been dropped while not over a drop area.
    ${returnedToStart(result.source)}
  `;
};
const preset = {
    dragHandleUsageInstructions,
    onDragStart,
    onDragUpdate,
    onDragEnd
};
const origin = {
    x: 0,
    y: 0
};
const add = (point1, point2)=>({
        x: point1.x + point2.x,
        y: point1.y + point2.y
    });
const subtract = (point1, point2)=>({
        x: point1.x - point2.x,
        y: point1.y - point2.y
    });
const isEqual$1 = (point1, point2)=>point1.x === point2.x && point1.y === point2.y;
const negate = (point)=>({
        x: point.x !== 0 ? -point.x : 0,
        y: point.y !== 0 ? -point.y : 0
    });
const patch = (line, value, otherValue = 0)=>{
    if (line === 'x') {
        return {
            x: value,
            y: otherValue
        };
    }
    return {
        x: otherValue,
        y: value
    };
};
const distance = (point1, point2)=>Math.sqrt((point2.x - point1.x) ** 2 + (point2.y - point1.y) ** 2);
const closest$1 = (target, points)=>Math.min(...points.map((point)=>distance(target, point)));
const apply = (fn)=>(point)=>({
            x: fn(point.x),
            y: fn(point.y)
        });
var executeClip = (frame, subject)=>{
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$box$2d$model$2f$dist$2f$css$2d$box$2d$model$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRect"])({
        top: Math.max(subject.top, frame.top),
        right: Math.min(subject.right, frame.right),
        bottom: Math.min(subject.bottom, frame.bottom),
        left: Math.max(subject.left, frame.left)
    });
    if (result.width <= 0 || result.height <= 0) {
        return null;
    }
    return result;
};
const offsetByPosition = (spacing, point)=>({
        top: spacing.top + point.y,
        left: spacing.left + point.x,
        bottom: spacing.bottom + point.y,
        right: spacing.right + point.x
    });
const getCorners = (spacing)=>[
        {
            x: spacing.left,
            y: spacing.top
        },
        {
            x: spacing.right,
            y: spacing.top
        },
        {
            x: spacing.left,
            y: spacing.bottom
        },
        {
            x: spacing.right,
            y: spacing.bottom
        }
    ];
const noSpacing = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
};
const scroll$1 = (target, frame)=>{
    if (!frame) {
        return target;
    }
    return offsetByPosition(target, frame.scroll.diff.displacement);
};
const increase = (target, axis, withPlaceholder)=>{
    if (withPlaceholder && withPlaceholder.increasedBy) {
        return {
            ...target,
            [axis.end]: target[axis.end] + withPlaceholder.increasedBy[axis.line]
        };
    }
    return target;
};
const clip = (target, frame)=>{
    if (frame && frame.shouldClipSubject) {
        return executeClip(frame.pageMarginBox, target);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$box$2d$model$2f$dist$2f$css$2d$box$2d$model$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRect"])(target);
};
var getSubject = ({ page, withPlaceholder, axis, frame })=>{
    const scrolled = scroll$1(page.marginBox, frame);
    const increased = increase(scrolled, axis, withPlaceholder);
    const clipped = clip(increased, frame);
    return {
        page,
        withPlaceholder,
        active: clipped
    };
};
var scrollDroppable = (droppable, newScroll)=>{
    !droppable.frame ? ("TURBOPACK compile-time truthy", 1) ? invariant() : ("TURBOPACK unreachable", undefined) : void 0;
    const scrollable = droppable.frame;
    const scrollDiff = subtract(newScroll, scrollable.scroll.initial);
    const scrollDisplacement = negate(scrollDiff);
    const frame = {
        ...scrollable,
        scroll: {
            initial: scrollable.scroll.initial,
            current: newScroll,
            diff: {
                value: scrollDiff,
                displacement: scrollDisplacement
            },
            max: scrollable.scroll.max
        }
    };
    const subject = getSubject({
        page: droppable.subject.page,
        withPlaceholder: droppable.subject.withPlaceholder,
        axis: droppable.axis,
        frame
    });
    const result = {
        ...droppable,
        frame,
        subject
    };
    return result;
};
const toDroppableMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$memoize$2d$one$2f$dist$2f$memoize$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])((droppables)=>droppables.reduce((previous, current)=>{
        previous[current.descriptor.id] = current;
        return previous;
    }, {}));
const toDraggableMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$memoize$2d$one$2f$dist$2f$memoize$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])((draggables)=>draggables.reduce((previous, current)=>{
        previous[current.descriptor.id] = current;
        return previous;
    }, {}));
const toDroppableList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$memoize$2d$one$2f$dist$2f$memoize$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])((droppables)=>Object.values(droppables));
const toDraggableList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$memoize$2d$one$2f$dist$2f$memoize$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])((draggables)=>Object.values(draggables));
var getDraggablesInsideDroppable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$memoize$2d$one$2f$dist$2f$memoize$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])((droppableId, draggables)=>{
    const result = toDraggableList(draggables).filter((draggable)=>droppableId === draggable.descriptor.droppableId).sort((a, b)=>a.descriptor.index - b.descriptor.index);
    return result;
});
function tryGetDestination(impact) {
    if (impact.at && impact.at.type === 'REORDER') {
        return impact.at.destination;
    }
    return null;
}
function tryGetCombine(impact) {
    if (impact.at && impact.at.type === 'COMBINE') {
        return impact.at.combine;
    }
    return null;
}
var removeDraggableFromList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$memoize$2d$one$2f$dist$2f$memoize$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])((remove, list)=>list.filter((item)=>item.descriptor.id !== remove.descriptor.id));
var moveToNextCombine = ({ isMovingForward, draggable, destination, insideDestination, previousImpact })=>{
    if (!destination.isCombineEnabled) {
        return null;
    }
    const location = tryGetDestination(previousImpact);
    if (!location) {
        return null;
    }
    function getImpact(target) {
        const at = {
            type: 'COMBINE',
            combine: {
                draggableId: target,
                droppableId: destination.descriptor.id
            }
        };
        return {
            ...previousImpact,
            at
        };
    }
    const all = previousImpact.displaced.all;
    const closestId = all.length ? all[0] : null;
    if (isMovingForward) {
        return closestId ? getImpact(closestId) : null;
    }
    const withoutDraggable = removeDraggableFromList(draggable, insideDestination);
    if (!closestId) {
        if (!withoutDraggable.length) {
            return null;
        }
        const last = withoutDraggable[withoutDraggable.length - 1];
        return getImpact(last.descriptor.id);
    }
    const indexOfClosest = withoutDraggable.findIndex((d)=>d.descriptor.id === closestId);
    !(indexOfClosest !== -1) ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Could not find displaced item in set') : ("TURBOPACK unreachable", undefined) : void 0;
    const proposedIndex = indexOfClosest - 1;
    if (proposedIndex < 0) {
        return null;
    }
    const before = withoutDraggable[proposedIndex];
    return getImpact(before.descriptor.id);
};
var isHomeOf = (draggable, destination)=>draggable.descriptor.droppableId === destination.descriptor.id;
const noDisplacedBy = {
    point: origin,
    value: 0
};
const emptyGroups = {
    invisible: {},
    visible: {},
    all: []
};
const noImpact = {
    displaced: emptyGroups,
    displacedBy: noDisplacedBy,
    at: null
};
var isWithin = (lowerBound, upperBound)=>(value)=>lowerBound <= value && value <= upperBound;
var isPartiallyVisibleThroughFrame = (frame)=>{
    const isWithinVertical = isWithin(frame.top, frame.bottom);
    const isWithinHorizontal = isWithin(frame.left, frame.right);
    return (subject)=>{
        const isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
        if (isContained) {
            return true;
        }
        const isPartiallyVisibleVertically = isWithinVertical(subject.top) || isWithinVertical(subject.bottom);
        const isPartiallyVisibleHorizontally = isWithinHorizontal(subject.left) || isWithinHorizontal(subject.right);
        const isPartiallyContained = isPartiallyVisibleVertically && isPartiallyVisibleHorizontally;
        if (isPartiallyContained) {
            return true;
        }
        const isBiggerVertically = subject.top < frame.top && subject.bottom > frame.bottom;
        const isBiggerHorizontally = subject.left < frame.left && subject.right > frame.right;
        const isTargetBiggerThanFrame = isBiggerVertically && isBiggerHorizontally;
        if (isTargetBiggerThanFrame) {
            return true;
        }
        const isTargetBiggerOnOneAxis = isBiggerVertically && isPartiallyVisibleHorizontally || isBiggerHorizontally && isPartiallyVisibleVertically;
        return isTargetBiggerOnOneAxis;
    };
};
var isTotallyVisibleThroughFrame = (frame)=>{
    const isWithinVertical = isWithin(frame.top, frame.bottom);
    const isWithinHorizontal = isWithin(frame.left, frame.right);
    return (subject)=>{
        const isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
        return isContained;
    };
};
const vertical = {
    direction: 'vertical',
    line: 'y',
    crossAxisLine: 'x',
    start: 'top',
    end: 'bottom',
    size: 'height',
    crossAxisStart: 'left',
    crossAxisEnd: 'right',
    crossAxisSize: 'width'
};
const horizontal = {
    direction: 'horizontal',
    line: 'x',
    crossAxisLine: 'y',
    start: 'left',
    end: 'right',
    size: 'width',
    crossAxisStart: 'top',
    crossAxisEnd: 'bottom',
    crossAxisSize: 'height'
};
var isTotallyVisibleThroughFrameOnAxis = (axis)=>(frame)=>{
        const isWithinVertical = isWithin(frame.top, frame.bottom);
        const isWithinHorizontal = isWithin(frame.left, frame.right);
        return (subject)=>{
            if (axis === vertical) {
                return isWithinVertical(subject.top) && isWithinVertical(subject.bottom);
            }
            return isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
        };
    };
const getDroppableDisplaced = (target, destination)=>{
    const displacement = destination.frame ? destination.frame.scroll.diff.displacement : origin;
    return offsetByPosition(target, displacement);
};
const isVisibleInDroppable = (target, destination, isVisibleThroughFrameFn)=>{
    if (!destination.subject.active) {
        return false;
    }
    return isVisibleThroughFrameFn(destination.subject.active)(target);
};
const isVisibleInViewport = (target, viewport, isVisibleThroughFrameFn)=>isVisibleThroughFrameFn(viewport)(target);
const isVisible$1 = ({ target: toBeDisplaced, destination, viewport, withDroppableDisplacement, isVisibleThroughFrameFn })=>{
    const displacedTarget = withDroppableDisplacement ? getDroppableDisplaced(toBeDisplaced, destination) : toBeDisplaced;
    return isVisibleInDroppable(displacedTarget, destination, isVisibleThroughFrameFn) && isVisibleInViewport(displacedTarget, viewport, isVisibleThroughFrameFn);
};
const isPartiallyVisible = (args)=>isVisible$1({
        ...args,
        isVisibleThroughFrameFn: isPartiallyVisibleThroughFrame
    });
const isTotallyVisible = (args)=>isVisible$1({
        ...args,
        isVisibleThroughFrameFn: isTotallyVisibleThroughFrame
    });
const isTotallyVisibleOnAxis = (args)=>isVisible$1({
        ...args,
        isVisibleThroughFrameFn: isTotallyVisibleThroughFrameOnAxis(args.destination.axis)
    });
const getShouldAnimate = (id, last, forceShouldAnimate)=>{
    if (typeof forceShouldAnimate === 'boolean') {
        return forceShouldAnimate;
    }
    if (!last) {
        return true;
    }
    const { invisible, visible } = last;
    if (invisible[id]) {
        return false;
    }
    const previous = visible[id];
    return previous ? previous.shouldAnimate : true;
};
function getTarget(draggable, displacedBy) {
    const marginBox = draggable.page.marginBox;
    const expandBy = {
        top: displacedBy.point.y,
        right: 0,
        bottom: 0,
        left: displacedBy.point.x
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$box$2d$model$2f$dist$2f$css$2d$box$2d$model$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRect"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$box$2d$model$2f$dist$2f$css$2d$box$2d$model$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["expand"])(marginBox, expandBy));
}
function getDisplacementGroups({ afterDragging, destination, displacedBy, viewport, forceShouldAnimate, last }) {
    return afterDragging.reduce(function process(groups, draggable) {
        const target = getTarget(draggable, displacedBy);
        const id = draggable.descriptor.id;
        groups.all.push(id);
        const isVisible = isPartiallyVisible({
            target,
            destination,
            viewport,
            withDroppableDisplacement: true
        });
        if (!isVisible) {
            groups.invisible[draggable.descriptor.id] = true;
            return groups;
        }
        const shouldAnimate = getShouldAnimate(id, last, forceShouldAnimate);
        const displacement = {
            draggableId: id,
            shouldAnimate
        };
        groups.visible[id] = displacement;
        return groups;
    }, {
        all: [],
        visible: {},
        invisible: {}
    });
}
function getIndexOfLastItem(draggables, options) {
    if (!draggables.length) {
        return 0;
    }
    const indexOfLastItem = draggables[draggables.length - 1].descriptor.index;
    return options.inHomeList ? indexOfLastItem : indexOfLastItem + 1;
}
function goAtEnd({ insideDestination, inHomeList, displacedBy, destination }) {
    const newIndex = getIndexOfLastItem(insideDestination, {
        inHomeList
    });
    return {
        displaced: emptyGroups,
        displacedBy,
        at: {
            type: 'REORDER',
            destination: {
                droppableId: destination.descriptor.id,
                index: newIndex
            }
        }
    };
}
function calculateReorderImpact({ draggable, insideDestination, destination, viewport, displacedBy, last, index, forceShouldAnimate }) {
    const inHomeList = isHomeOf(draggable, destination);
    if (index == null) {
        return goAtEnd({
            insideDestination,
            inHomeList,
            displacedBy,
            destination
        });
    }
    const match = insideDestination.find((item)=>item.descriptor.index === index);
    if (!match) {
        return goAtEnd({
            insideDestination,
            inHomeList,
            displacedBy,
            destination
        });
    }
    const withoutDragging = removeDraggableFromList(draggable, insideDestination);
    const sliceFrom = insideDestination.indexOf(match);
    const impacted = withoutDragging.slice(sliceFrom);
    const displaced = getDisplacementGroups({
        afterDragging: impacted,
        destination,
        displacedBy,
        last,
        viewport: viewport.frame,
        forceShouldAnimate
    });
    return {
        displaced,
        displacedBy,
        at: {
            type: 'REORDER',
            destination: {
                droppableId: destination.descriptor.id,
                index
            }
        }
    };
}
function didStartAfterCritical(draggableId, afterCritical) {
    return Boolean(afterCritical.effected[draggableId]);
}
var fromCombine = ({ isMovingForward, destination, draggables, combine, afterCritical })=>{
    if (!destination.isCombineEnabled) {
        return null;
    }
    const combineId = combine.draggableId;
    const combineWith = draggables[combineId];
    const combineWithIndex = combineWith.descriptor.index;
    const didCombineWithStartAfterCritical = didStartAfterCritical(combineId, afterCritical);
    if (didCombineWithStartAfterCritical) {
        if (isMovingForward) {
            return combineWithIndex;
        }
        return combineWithIndex - 1;
    }
    if (isMovingForward) {
        return combineWithIndex + 1;
    }
    return combineWithIndex;
};
var fromReorder = ({ isMovingForward, isInHomeList, insideDestination, location })=>{
    if (!insideDestination.length) {
        return null;
    }
    const currentIndex = location.index;
    const proposedIndex = isMovingForward ? currentIndex + 1 : currentIndex - 1;
    const firstIndex = insideDestination[0].descriptor.index;
    const lastIndex = insideDestination[insideDestination.length - 1].descriptor.index;
    const upperBound = isInHomeList ? lastIndex : lastIndex + 1;
    if (proposedIndex < firstIndex) {
        return null;
    }
    if (proposedIndex > upperBound) {
        return null;
    }
    return proposedIndex;
};
var moveToNextIndex = ({ isMovingForward, isInHomeList, draggable, draggables, destination, insideDestination, previousImpact, viewport, afterCritical })=>{
    const wasAt = previousImpact.at;
    !wasAt ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Cannot move in direction without previous impact location') : ("TURBOPACK unreachable", undefined) : void 0;
    if (wasAt.type === 'REORDER') {
        const newIndex = fromReorder({
            isMovingForward,
            isInHomeList,
            location: wasAt.destination,
            insideDestination
        });
        if (newIndex == null) {
            return null;
        }
        return calculateReorderImpact({
            draggable,
            insideDestination,
            destination,
            viewport,
            last: previousImpact.displaced,
            displacedBy: previousImpact.displacedBy,
            index: newIndex
        });
    }
    const newIndex = fromCombine({
        isMovingForward,
        destination,
        displaced: previousImpact.displaced,
        draggables,
        combine: wasAt.combine,
        afterCritical
    });
    if (newIndex == null) {
        return null;
    }
    return calculateReorderImpact({
        draggable,
        insideDestination,
        destination,
        viewport,
        last: previousImpact.displaced,
        displacedBy: previousImpact.displacedBy,
        index: newIndex
    });
};
var getCombinedItemDisplacement = ({ displaced, afterCritical, combineWith, displacedBy })=>{
    const isDisplaced = Boolean(displaced.visible[combineWith] || displaced.invisible[combineWith]);
    if (didStartAfterCritical(combineWith, afterCritical)) {
        return isDisplaced ? origin : negate(displacedBy.point);
    }
    return isDisplaced ? displacedBy.point : origin;
};
var whenCombining = ({ afterCritical, impact, draggables })=>{
    const combine = tryGetCombine(impact);
    !combine ? ("TURBOPACK compile-time truthy", 1) ? invariant() : ("TURBOPACK unreachable", undefined) : void 0;
    const combineWith = combine.draggableId;
    const center = draggables[combineWith].page.borderBox.center;
    const displaceBy = getCombinedItemDisplacement({
        displaced: impact.displaced,
        afterCritical,
        combineWith,
        displacedBy: impact.displacedBy
    });
    return add(center, displaceBy);
};
const distanceFromStartToBorderBoxCenter = (axis, box)=>box.margin[axis.start] + box.borderBox[axis.size] / 2;
const distanceFromEndToBorderBoxCenter = (axis, box)=>box.margin[axis.end] + box.borderBox[axis.size] / 2;
const getCrossAxisBorderBoxCenter = (axis, target, isMoving)=>target[axis.crossAxisStart] + isMoving.margin[axis.crossAxisStart] + isMoving.borderBox[axis.crossAxisSize] / 2;
const goAfter = ({ axis, moveRelativeTo, isMoving })=>patch(axis.line, moveRelativeTo.marginBox[axis.end] + distanceFromStartToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveRelativeTo.marginBox, isMoving));
const goBefore = ({ axis, moveRelativeTo, isMoving })=>patch(axis.line, moveRelativeTo.marginBox[axis.start] - distanceFromEndToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveRelativeTo.marginBox, isMoving));
const goIntoStart = ({ axis, moveInto, isMoving })=>patch(axis.line, moveInto.contentBox[axis.start] + distanceFromStartToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveInto.contentBox, isMoving));
var whenReordering = ({ impact, draggable, draggables, droppable, afterCritical })=>{
    const insideDestination = getDraggablesInsideDroppable(droppable.descriptor.id, draggables);
    const draggablePage = draggable.page;
    const axis = droppable.axis;
    if (!insideDestination.length) {
        return goIntoStart({
            axis,
            moveInto: droppable.page,
            isMoving: draggablePage
        });
    }
    const { displaced, displacedBy } = impact;
    const closestAfter = displaced.all[0];
    if (closestAfter) {
        const closest = draggables[closestAfter];
        if (didStartAfterCritical(closestAfter, afterCritical)) {
            return goBefore({
                axis,
                moveRelativeTo: closest.page,
                isMoving: draggablePage
            });
        }
        const withDisplacement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$box$2d$model$2f$dist$2f$css$2d$box$2d$model$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["offset"])(closest.page, displacedBy.point);
        return goBefore({
            axis,
            moveRelativeTo: withDisplacement,
            isMoving: draggablePage
        });
    }
    const last = insideDestination[insideDestination.length - 1];
    if (last.descriptor.id === draggable.descriptor.id) {
        return draggablePage.borderBox.center;
    }
    if (didStartAfterCritical(last.descriptor.id, afterCritical)) {
        const page = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$box$2d$model$2f$dist$2f$css$2d$box$2d$model$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["offset"])(last.page, negate(afterCritical.displacedBy.point));
        return goAfter({
            axis,
            moveRelativeTo: page,
            isMoving: draggablePage
        });
    }
    return goAfter({
        axis,
        moveRelativeTo: last.page,
        isMoving: draggablePage
    });
};
var withDroppableDisplacement = (droppable, point)=>{
    const frame = droppable.frame;
    if (!frame) {
        return point;
    }
    return add(point, frame.scroll.diff.displacement);
};
const getResultWithoutDroppableDisplacement = ({ impact, draggable, droppable, draggables, afterCritical })=>{
    const original = draggable.page.borderBox.center;
    const at = impact.at;
    if (!droppable) {
        return original;
    }
    if (!at) {
        return original;
    }
    if (at.type === 'REORDER') {
        return whenReordering({
            impact,
            draggable,
            draggables,
            droppable,
            afterCritical
        });
    }
    return whenCombining({
        impact,
        draggables,
        afterCritical
    });
};
var getPageBorderBoxCenterFromImpact = (args)=>{
    const withoutDisplacement = getResultWithoutDroppableDisplacement(args);
    const droppable = args.droppable;
    const withDisplacement = droppable ? withDroppableDisplacement(droppable, withoutDisplacement) : withoutDisplacement;
    return withDisplacement;
};
var scrollViewport = (viewport, newScroll)=>{
    const diff = subtract(newScroll, viewport.scroll.initial);
    const displacement = negate(diff);
    const frame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$box$2d$model$2f$dist$2f$css$2d$box$2d$model$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRect"])({
        top: newScroll.y,
        bottom: newScroll.y + viewport.frame.height,
        left: newScroll.x,
        right: newScroll.x + viewport.frame.width
    });
    const updated = {
        frame,
        scroll: {
            initial: viewport.scroll.initial,
            max: viewport.scroll.max,
            current: newScroll,
            diff: {
                value: diff,
                displacement
            }
        }
    };
    return updated;
};
function getDraggables$1(ids, draggables) {
    return ids.map((id)=>draggables[id]);
}
function tryGetVisible(id, groups) {
    for(let i = 0; i < groups.length; i++){
        const displacement = groups[i].visible[id];
        if (displacement) {
            return displacement;
        }
    }
    return null;
}
var speculativelyIncrease = ({ impact, viewport, destination, draggables, maxScrollChange })=>{
    const scrolledViewport = scrollViewport(viewport, add(viewport.scroll.current, maxScrollChange));
    const scrolledDroppable = destination.frame ? scrollDroppable(destination, add(destination.frame.scroll.current, maxScrollChange)) : destination;
    const last = impact.displaced;
    const withViewportScroll = getDisplacementGroups({
        afterDragging: getDraggables$1(last.all, draggables),
        destination,
        displacedBy: impact.displacedBy,
        viewport: scrolledViewport.frame,
        last,
        forceShouldAnimate: false
    });
    const withDroppableScroll = getDisplacementGroups({
        afterDragging: getDraggables$1(last.all, draggables),
        destination: scrolledDroppable,
        displacedBy: impact.displacedBy,
        viewport: viewport.frame,
        last,
        forceShouldAnimate: false
    });
    const invisible = {};
    const visible = {};
    const groups = [
        last,
        withViewportScroll,
        withDroppableScroll
    ];
    last.all.forEach((id)=>{
        const displacement = tryGetVisible(id, groups);
        if (displacement) {
            visible[id] = displacement;
            return;
        }
        invisible[id] = true;
    });
    const newImpact = {
        ...impact,
        displaced: {
            all: last.all,
            invisible,
            visible
        }
    };
    return newImpact;
};
var withViewportDisplacement = (viewport, point)=>add(viewport.scroll.diff.displacement, point);
var getClientFromPageBorderBoxCenter = ({ pageBorderBoxCenter, draggable, viewport })=>{
    const withoutPageScrollChange = withViewportDisplacement(viewport, pageBorderBoxCenter);
    const offset = subtract(withoutPageScrollChange, draggable.page.borderBox.center);
    return add(draggable.client.borderBox.center, offset);
};
var isTotallyVisibleInNewLocation = ({ draggable, destination, newPageBorderBoxCenter, viewport, withDroppableDisplacement, onlyOnMainAxis = false })=>{
    const changeNeeded = subtract(newPageBorderBoxCenter, draggable.page.borderBox.center);
    const shifted = offsetByPosition(draggable.page.borderBox, changeNeeded);
    const args = {
        target: shifted,
        destination,
        withDroppableDisplacement,
        viewport
    };
    return onlyOnMainAxis ? isTotallyVisibleOnAxis(args) : isTotallyVisible(args);
};
var moveToNextPlace = ({ isMovingForward, draggable, destination, draggables, previousImpact, viewport, previousPageBorderBoxCenter, previousClientSelection, afterCritical })=>{
    if (!destination.isEnabled) {
        return null;
    }
    const insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
    const isInHomeList = isHomeOf(draggable, destination);
    const impact = moveToNextCombine({
        isMovingForward,
        draggable,
        destination,
        insideDestination,
        previousImpact
    }) || moveToNextIndex({
        isMovingForward,
        isInHomeList,
        draggable,
        draggables,
        destination,
        insideDestination,
        previousImpact,
        viewport,
        afterCritical
    });
    if (!impact) {
        return null;
    }
    const pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
        impact,
        draggable,
        droppable: destination,
        draggables,
        afterCritical
    });
    const isVisibleInNewLocation = isTotallyVisibleInNewLocation({
        draggable,
        destination,
        newPageBorderBoxCenter: pageBorderBoxCenter,
        viewport: viewport.frame,
        withDroppableDisplacement: false,
        onlyOnMainAxis: true
    });
    if (isVisibleInNewLocation) {
        const clientSelection = getClientFromPageBorderBoxCenter({
            pageBorderBoxCenter,
            draggable,
            viewport
        });
        return {
            clientSelection,
            impact,
            scrollJumpRequest: null
        };
    }
    const distance = subtract(pageBorderBoxCenter, previousPageBorderBoxCenter);
    const cautious = speculativelyIncrease({
        impact,
        viewport,
        destination,
        draggables,
        maxScrollChange: distance
    });
    return {
        clientSelection: previousClientSelection,
        impact: cautious,
        scrollJumpRequest: distance
    };
};
const getKnownActive = (droppable)=>{
    const rect = droppable.subject.active;
    !rect ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Cannot get clipped area from droppable') : ("TURBOPACK unreachable", undefined) : void 0;
    return rect;
};
var getBestCrossAxisDroppable = ({ isMovingForward, pageBorderBoxCenter, source, droppables, viewport })=>{
    const active = source.subject.active;
    if (!active) {
        return null;
    }
    const axis = source.axis;
    const isBetweenSourceClipped = isWithin(active[axis.start], active[axis.end]);
    const candidates = toDroppableList(droppables).filter((droppable)=>droppable !== source).filter((droppable)=>droppable.isEnabled).filter((droppable)=>Boolean(droppable.subject.active)).filter((droppable)=>isPartiallyVisibleThroughFrame(viewport.frame)(getKnownActive(droppable))).filter((droppable)=>{
        const activeOfTarget = getKnownActive(droppable);
        if (isMovingForward) {
            return active[axis.crossAxisEnd] < activeOfTarget[axis.crossAxisEnd];
        }
        return activeOfTarget[axis.crossAxisStart] < active[axis.crossAxisStart];
    }).filter((droppable)=>{
        const activeOfTarget = getKnownActive(droppable);
        const isBetweenDestinationClipped = isWithin(activeOfTarget[axis.start], activeOfTarget[axis.end]);
        return isBetweenSourceClipped(activeOfTarget[axis.start]) || isBetweenSourceClipped(activeOfTarget[axis.end]) || isBetweenDestinationClipped(active[axis.start]) || isBetweenDestinationClipped(active[axis.end]);
    }).sort((a, b)=>{
        const first = getKnownActive(a)[axis.crossAxisStart];
        const second = getKnownActive(b)[axis.crossAxisStart];
        if (isMovingForward) {
            return first - second;
        }
        return second - first;
    }).filter((droppable, index, array)=>getKnownActive(droppable)[axis.crossAxisStart] === getKnownActive(array[0])[axis.crossAxisStart]);
    if (!candidates.length) {
        return null;
    }
    if (candidates.length === 1) {
        return candidates[0];
    }
    const contains = candidates.filter((droppable)=>{
        const isWithinDroppable = isWithin(getKnownActive(droppable)[axis.start], getKnownActive(droppable)[axis.end]);
        return isWithinDroppable(pageBorderBoxCenter[axis.line]);
    });
    if (contains.length === 1) {
        return contains[0];
    }
    if (contains.length > 1) {
        return contains.sort((a, b)=>getKnownActive(a)[axis.start] - getKnownActive(b)[axis.start])[0];
    }
    return candidates.sort((a, b)=>{
        const first = closest$1(pageBorderBoxCenter, getCorners(getKnownActive(a)));
        const second = closest$1(pageBorderBoxCenter, getCorners(getKnownActive(b)));
        if (first !== second) {
            return first - second;
        }
        return getKnownActive(a)[axis.start] - getKnownActive(b)[axis.start];
    })[0];
};
const getCurrentPageBorderBoxCenter = (draggable, afterCritical)=>{
    const original = draggable.page.borderBox.center;
    return didStartAfterCritical(draggable.descriptor.id, afterCritical) ? subtract(original, afterCritical.displacedBy.point) : original;
};
const getCurrentPageBorderBox = (draggable, afterCritical)=>{
    const original = draggable.page.borderBox;
    return didStartAfterCritical(draggable.descriptor.id, afterCritical) ? offsetByPosition(original, negate(afterCritical.displacedBy.point)) : original;
};
var getClosestDraggable = ({ pageBorderBoxCenter, viewport, destination, insideDestination, afterCritical })=>{
    const sorted = insideDestination.filter((draggable)=>isTotallyVisible({
            target: getCurrentPageBorderBox(draggable, afterCritical),
            destination,
            viewport: viewport.frame,
            withDroppableDisplacement: true
        })).sort((a, b)=>{
        const distanceToA = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(a, afterCritical)));
        const distanceToB = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(b, afterCritical)));
        if (distanceToA < distanceToB) {
            return -1;
        }
        if (distanceToB < distanceToA) {
            return 1;
        }
        return a.descriptor.index - b.descriptor.index;
    });
    return sorted[0] || null;
};
var getDisplacedBy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$memoize$2d$one$2f$dist$2f$memoize$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(function getDisplacedBy(axis, displaceBy) {
    const displacement = displaceBy[axis.line];
    return {
        value: displacement,
        point: patch(axis.line, displacement)
    };
});
const getRequiredGrowthForPlaceholder = (droppable, placeholderSize, draggables)=>{
    const axis = droppable.axis;
    if (droppable.descriptor.mode === 'virtual') {
        return patch(axis.line, placeholderSize[axis.line]);
    }
    const availableSpace = droppable.subject.page.contentBox[axis.size];
    const insideDroppable = getDraggablesInsideDroppable(droppable.descriptor.id, draggables);
    const spaceUsed = insideDroppable.reduce((sum, dimension)=>sum + dimension.client.marginBox[axis.size], 0);
    const requiredSpace = spaceUsed + placeholderSize[axis.line];
    const needsToGrowBy = requiredSpace - availableSpace;
    if (needsToGrowBy <= 0) {
        return null;
    }
    return patch(axis.line, needsToGrowBy);
};
const withMaxScroll = (frame, max)=>({
        ...frame,
        scroll: {
            ...frame.scroll,
            max
        }
    });
const addPlaceholder = (droppable, draggable, draggables)=>{
    const frame = droppable.frame;
    !!isHomeOf(draggable, droppable) ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Should not add placeholder space to home list') : ("TURBOPACK unreachable", undefined) : void 0;
    !!droppable.subject.withPlaceholder ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Cannot add placeholder size to a subject when it already has one') : ("TURBOPACK unreachable", undefined) : void 0;
    const placeholderSize = getDisplacedBy(droppable.axis, draggable.displaceBy).point;
    const requiredGrowth = getRequiredGrowthForPlaceholder(droppable, placeholderSize, draggables);
    const added = {
        placeholderSize,
        increasedBy: requiredGrowth,
        oldFrameMaxScroll: droppable.frame ? droppable.frame.scroll.max : null
    };
    if (!frame) {
        const subject = getSubject({
            page: droppable.subject.page,
            withPlaceholder: added,
            axis: droppable.axis,
            frame: droppable.frame
        });
        return {
            ...droppable,
            subject
        };
    }
    const maxScroll = requiredGrowth ? add(frame.scroll.max, requiredGrowth) : frame.scroll.max;
    const newFrame = withMaxScroll(frame, maxScroll);
    const subject = getSubject({
        page: droppable.subject.page,
        withPlaceholder: added,
        axis: droppable.axis,
        frame: newFrame
    });
    return {
        ...droppable,
        subject,
        frame: newFrame
    };
};
const removePlaceholder = (droppable)=>{
    const added = droppable.subject.withPlaceholder;
    !added ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Cannot remove placeholder form subject when there was none') : ("TURBOPACK unreachable", undefined) : void 0;
    const frame = droppable.frame;
    if (!frame) {
        const subject = getSubject({
            page: droppable.subject.page,
            axis: droppable.axis,
            frame: null,
            withPlaceholder: null
        });
        return {
            ...droppable,
            subject
        };
    }
    const oldMaxScroll = added.oldFrameMaxScroll;
    !oldMaxScroll ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Expected droppable with frame to have old max frame scroll when removing placeholder') : ("TURBOPACK unreachable", undefined) : void 0;
    const newFrame = withMaxScroll(frame, oldMaxScroll);
    const subject = getSubject({
        page: droppable.subject.page,
        axis: droppable.axis,
        frame: newFrame,
        withPlaceholder: null
    });
    return {
        ...droppable,
        subject,
        frame: newFrame
    };
};
var moveToNewDroppable = ({ previousPageBorderBoxCenter, moveRelativeTo, insideDestination, draggable, draggables, destination, viewport, afterCritical })=>{
    if (!moveRelativeTo) {
        if (insideDestination.length) {
            return null;
        }
        const proposed = {
            displaced: emptyGroups,
            displacedBy: noDisplacedBy,
            at: {
                type: 'REORDER',
                destination: {
                    droppableId: destination.descriptor.id,
                    index: 0
                }
            }
        };
        const proposedPageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
            impact: proposed,
            draggable,
            droppable: destination,
            draggables,
            afterCritical
        });
        const withPlaceholder = isHomeOf(draggable, destination) ? destination : addPlaceholder(destination, draggable, draggables);
        const isVisibleInNewLocation = isTotallyVisibleInNewLocation({
            draggable,
            destination: withPlaceholder,
            newPageBorderBoxCenter: proposedPageBorderBoxCenter,
            viewport: viewport.frame,
            withDroppableDisplacement: false,
            onlyOnMainAxis: true
        });
        return isVisibleInNewLocation ? proposed : null;
    }
    const isGoingBeforeTarget = Boolean(previousPageBorderBoxCenter[destination.axis.line] <= moveRelativeTo.page.borderBox.center[destination.axis.line]);
    const proposedIndex = (()=>{
        const relativeTo = moveRelativeTo.descriptor.index;
        if (moveRelativeTo.descriptor.id === draggable.descriptor.id) {
            return relativeTo;
        }
        if (isGoingBeforeTarget) {
            return relativeTo;
        }
        return relativeTo + 1;
    })();
    const displacedBy = getDisplacedBy(destination.axis, draggable.displaceBy);
    return calculateReorderImpact({
        draggable,
        insideDestination,
        destination,
        viewport,
        displacedBy,
        last: emptyGroups,
        index: proposedIndex
    });
};
var moveCrossAxis = ({ isMovingForward, previousPageBorderBoxCenter, draggable, isOver, draggables, droppables, viewport, afterCritical })=>{
    const destination = getBestCrossAxisDroppable({
        isMovingForward,
        pageBorderBoxCenter: previousPageBorderBoxCenter,
        source: isOver,
        droppables,
        viewport
    });
    if (!destination) {
        return null;
    }
    const insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
    const moveRelativeTo = getClosestDraggable({
        pageBorderBoxCenter: previousPageBorderBoxCenter,
        viewport,
        destination,
        insideDestination,
        afterCritical
    });
    const impact = moveToNewDroppable({
        previousPageBorderBoxCenter,
        destination,
        draggable,
        draggables,
        moveRelativeTo,
        insideDestination,
        viewport,
        afterCritical
    });
    if (!impact) {
        return null;
    }
    const pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
        impact,
        draggable,
        droppable: destination,
        draggables,
        afterCritical
    });
    const clientSelection = getClientFromPageBorderBoxCenter({
        pageBorderBoxCenter,
        draggable,
        viewport
    });
    return {
        clientSelection,
        impact,
        scrollJumpRequest: null
    };
};
var whatIsDraggedOver = (impact)=>{
    const at = impact.at;
    if (!at) {
        return null;
    }
    if (at.type === 'REORDER') {
        return at.destination.droppableId;
    }
    return at.combine.droppableId;
};
const getDroppableOver$1 = (impact, droppables)=>{
    const id = whatIsDraggedOver(impact);
    return id ? droppables[id] : null;
};
var moveInDirection = ({ state, type })=>{
    const isActuallyOver = getDroppableOver$1(state.impact, state.dimensions.droppables);
    const isMainAxisMovementAllowed = Boolean(isActuallyOver);
    const home = state.dimensions.droppables[state.critical.droppable.id];
    const isOver = isActuallyOver || home;
    const direction = isOver.axis.direction;
    const isMovingOnMainAxis = direction === 'vertical' && (type === 'MOVE_UP' || type === 'MOVE_DOWN') || direction === 'horizontal' && (type === 'MOVE_LEFT' || type === 'MOVE_RIGHT');
    if (isMovingOnMainAxis && !isMainAxisMovementAllowed) {
        return null;
    }
    const isMovingForward = type === 'MOVE_DOWN' || type === 'MOVE_RIGHT';
    const draggable = state.dimensions.draggables[state.critical.draggable.id];
    const previousPageBorderBoxCenter = state.current.page.borderBoxCenter;
    const { draggables, droppables } = state.dimensions;
    return isMovingOnMainAxis ? moveToNextPlace({
        isMovingForward,
        previousPageBorderBoxCenter,
        draggable,
        destination: isOver,
        draggables,
        viewport: state.viewport,
        previousClientSelection: state.current.client.selection,
        previousImpact: state.impact,
        afterCritical: state.afterCritical
    }) : moveCrossAxis({
        isMovingForward,
        previousPageBorderBoxCenter,
        draggable,
        isOver,
        draggables,
        droppables,
        viewport: state.viewport,
        afterCritical: state.afterCritical
    });
};
function isMovementAllowed(state) {
    return state.phase === 'DRAGGING' || state.phase === 'COLLECTING';
}
function isPositionInFrame(frame) {
    const isWithinVertical = isWithin(frame.top, frame.bottom);
    const isWithinHorizontal = isWithin(frame.left, frame.right);
    return function run(point) {
        return isWithinVertical(point.y) && isWithinHorizontal(point.x);
    };
}
function getHasOverlap(first, second) {
    return first.left < second.right && first.right > second.left && first.top < second.bottom && first.bottom > second.top;
}
function getFurthestAway({ pageBorderBox, draggable, candidates }) {
    const startCenter = draggable.page.borderBox.center;
    const sorted = candidates.map((candidate)=>{
        const axis = candidate.axis;
        const target = patch(candidate.axis.line, pageBorderBox.center[axis.line], candidate.page.borderBox.center[axis.crossAxisLine]);
        return {
            id: candidate.descriptor.id,
            distance: distance(startCenter, target)
        };
    }).sort((a, b)=>b.distance - a.distance);
    return sorted[0] ? sorted[0].id : null;
}
function getDroppableOver({ pageBorderBox, draggable, droppables }) {
    const candidates = toDroppableList(droppables).filter((item)=>{
        if (!item.isEnabled) {
            return false;
        }
        const active = item.subject.active;
        if (!active) {
            return false;
        }
        if (!getHasOverlap(pageBorderBox, active)) {
            return false;
        }
        if (isPositionInFrame(active)(pageBorderBox.center)) {
            return true;
        }
        const axis = item.axis;
        const childCenter = active.center[axis.crossAxisLine];
        const crossAxisStart = pageBorderBox[axis.crossAxisStart];
        const crossAxisEnd = pageBorderBox[axis.crossAxisEnd];
        const isContained = isWithin(active[axis.crossAxisStart], active[axis.crossAxisEnd]);
        const isStartContained = isContained(crossAxisStart);
        const isEndContained = isContained(crossAxisEnd);
        if (!isStartContained && !isEndContained) {
            return true;
        }
        if (isStartContained) {
            return crossAxisStart < childCenter;
        }
        return crossAxisEnd > childCenter;
    });
    if (!candidates.length) {
        return null;
    }
    if (candidates.length === 1) {
        return candidates[0].descriptor.id;
    }
    return getFurthestAway({
        pageBorderBox,
        draggable,
        candidates
    });
}
const offsetRectByPosition = (rect, point)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$box$2d$model$2f$dist$2f$css$2d$box$2d$model$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRect"])(offsetByPosition(rect, point));
var withDroppableScroll = (droppable, area)=>{
    const frame = droppable.frame;
    if (!frame) {
        return area;
    }
    return offsetRectByPosition(area, frame.scroll.diff.value);
};
function getIsDisplaced({ displaced, id }) {
    return Boolean(displaced.visible[id] || displaced.invisible[id]);
}
function atIndex({ draggable, closest, inHomeList }) {
    if (!closest) {
        return null;
    }
    if (!inHomeList) {
        return closest.descriptor.index;
    }
    if (closest.descriptor.index > draggable.descriptor.index) {
        return closest.descriptor.index - 1;
    }
    return closest.descriptor.index;
}
var getReorderImpact = ({ pageBorderBoxWithDroppableScroll: targetRect, draggable, destination, insideDestination, last, viewport, afterCritical })=>{
    const axis = destination.axis;
    const displacedBy = getDisplacedBy(destination.axis, draggable.displaceBy);
    const displacement = displacedBy.value;
    const targetStart = targetRect[axis.start];
    const targetEnd = targetRect[axis.end];
    const withoutDragging = removeDraggableFromList(draggable, insideDestination);
    const closest = withoutDragging.find((child)=>{
        const id = child.descriptor.id;
        const childCenter = child.page.borderBox.center[axis.line];
        const didStartAfterCritical$1 = didStartAfterCritical(id, afterCritical);
        const isDisplaced = getIsDisplaced({
            displaced: last,
            id
        });
        if (didStartAfterCritical$1) {
            if (isDisplaced) {
                return targetEnd <= childCenter;
            }
            return targetStart < childCenter - displacement;
        }
        if (isDisplaced) {
            return targetEnd <= childCenter + displacement;
        }
        return targetStart < childCenter;
    }) || null;
    const newIndex = atIndex({
        draggable,
        closest,
        inHomeList: isHomeOf(draggable, destination)
    });
    return calculateReorderImpact({
        draggable,
        insideDestination,
        destination,
        viewport,
        last,
        displacedBy,
        index: newIndex
    });
};
const combineThresholdDivisor = 4;
var getCombineImpact = ({ draggable, pageBorderBoxWithDroppableScroll: targetRect, previousImpact, destination, insideDestination, afterCritical })=>{
    if (!destination.isCombineEnabled) {
        return null;
    }
    const axis = destination.axis;
    const displacedBy = getDisplacedBy(destination.axis, draggable.displaceBy);
    const displacement = displacedBy.value;
    const targetStart = targetRect[axis.start];
    const targetEnd = targetRect[axis.end];
    const withoutDragging = removeDraggableFromList(draggable, insideDestination);
    const combineWith = withoutDragging.find((child)=>{
        const id = child.descriptor.id;
        const childRect = child.page.borderBox;
        const childSize = childRect[axis.size];
        const threshold = childSize / combineThresholdDivisor;
        const didStartAfterCritical$1 = didStartAfterCritical(id, afterCritical);
        const isDisplaced = getIsDisplaced({
            displaced: previousImpact.displaced,
            id
        });
        if (didStartAfterCritical$1) {
            if (isDisplaced) {
                return targetEnd > childRect[axis.start] + threshold && targetEnd < childRect[axis.end] - threshold;
            }
            return targetStart > childRect[axis.start] - displacement + threshold && targetStart < childRect[axis.end] - displacement - threshold;
        }
        if (isDisplaced) {
            return targetEnd > childRect[axis.start] + displacement + threshold && targetEnd < childRect[axis.end] + displacement - threshold;
        }
        return targetStart > childRect[axis.start] + threshold && targetStart < childRect[axis.end] - threshold;
    });
    if (!combineWith) {
        return null;
    }
    const impact = {
        displacedBy,
        displaced: previousImpact.displaced,
        at: {
            type: 'COMBINE',
            combine: {
                draggableId: combineWith.descriptor.id,
                droppableId: destination.descriptor.id
            }
        }
    };
    return impact;
};
var getDragImpact = ({ pageOffset, draggable, draggables, droppables, previousImpact, viewport, afterCritical })=>{
    const pageBorderBox = offsetRectByPosition(draggable.page.borderBox, pageOffset);
    const destinationId = getDroppableOver({
        pageBorderBox,
        draggable,
        droppables
    });
    if (!destinationId) {
        return noImpact;
    }
    const destination = droppables[destinationId];
    const insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
    const pageBorderBoxWithDroppableScroll = withDroppableScroll(destination, pageBorderBox);
    return getCombineImpact({
        pageBorderBoxWithDroppableScroll,
        draggable,
        previousImpact,
        destination,
        insideDestination,
        afterCritical
    }) || getReorderImpact({
        pageBorderBoxWithDroppableScroll,
        draggable,
        destination,
        insideDestination,
        last: previousImpact.displaced,
        viewport,
        afterCritical
    });
};
var patchDroppableMap = (droppables, updated)=>({
        ...droppables,
        [updated.descriptor.id]: updated
    });
const clearUnusedPlaceholder = ({ previousImpact, impact, droppables })=>{
    const last = whatIsDraggedOver(previousImpact);
    const now = whatIsDraggedOver(impact);
    if (!last) {
        return droppables;
    }
    if (last === now) {
        return droppables;
    }
    const lastDroppable = droppables[last];
    if (!lastDroppable.subject.withPlaceholder) {
        return droppables;
    }
    const updated = removePlaceholder(lastDroppable);
    return patchDroppableMap(droppables, updated);
};
var recomputePlaceholders = ({ draggable, draggables, droppables, previousImpact, impact })=>{
    const cleaned = clearUnusedPlaceholder({
        previousImpact,
        impact,
        droppables
    });
    const isOver = whatIsDraggedOver(impact);
    if (!isOver) {
        return cleaned;
    }
    const droppable = droppables[isOver];
    if (isHomeOf(draggable, droppable)) {
        return cleaned;
    }
    if (droppable.subject.withPlaceholder) {
        return cleaned;
    }
    const patched = addPlaceholder(droppable, draggable, draggables);
    return patchDroppableMap(cleaned, patched);
};
var update = ({ state, clientSelection: forcedClientSelection, dimensions: forcedDimensions, viewport: forcedViewport, impact: forcedImpact, scrollJumpRequest })=>{
    const viewport = forcedViewport || state.viewport;
    const dimensions = forcedDimensions || state.dimensions;
    const clientSelection = forcedClientSelection || state.current.client.selection;
    const offset = subtract(clientSelection, state.initial.client.selection);
    const client = {
        offset,
        selection: clientSelection,
        borderBoxCenter: add(state.initial.client.borderBoxCenter, offset)
    };
    const page = {
        selection: add(client.selection, viewport.scroll.current),
        borderBoxCenter: add(client.borderBoxCenter, viewport.scroll.current),
        offset: add(client.offset, viewport.scroll.diff.value)
    };
    const current = {
        client,
        page
    };
    if (state.phase === 'COLLECTING') {
        return {
            ...state,
            dimensions,
            viewport,
            current
        };
    }
    const draggable = dimensions.draggables[state.critical.draggable.id];
    const newImpact = forcedImpact || getDragImpact({
        pageOffset: page.offset,
        draggable,
        draggables: dimensions.draggables,
        droppables: dimensions.droppables,
        previousImpact: state.impact,
        viewport,
        afterCritical: state.afterCritical
    });
    const withUpdatedPlaceholders = recomputePlaceholders({
        draggable,
        impact: newImpact,
        previousImpact: state.impact,
        draggables: dimensions.draggables,
        droppables: dimensions.droppables
    });
    const result = {
        ...state,
        current,
        dimensions: {
            draggables: dimensions.draggables,
            droppables: withUpdatedPlaceholders
        },
        impact: newImpact,
        viewport,
        scrollJumpRequest: scrollJumpRequest || null,
        forceShouldAnimate: scrollJumpRequest ? false : null
    };
    return result;
};
function getDraggables(ids, draggables) {
    return ids.map((id)=>draggables[id]);
}
var recompute = ({ impact, viewport, draggables, destination, forceShouldAnimate })=>{
    const last = impact.displaced;
    const afterDragging = getDraggables(last.all, draggables);
    const displaced = getDisplacementGroups({
        afterDragging,
        destination,
        displacedBy: impact.displacedBy,
        viewport: viewport.frame,
        forceShouldAnimate,
        last
    });
    return {
        ...impact,
        displaced
    };
};
var getClientBorderBoxCenter = ({ impact, draggable, droppable, draggables, viewport, afterCritical })=>{
    const pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
        impact,
        draggable,
        draggables,
        droppable,
        afterCritical
    });
    return getClientFromPageBorderBoxCenter({
        pageBorderBoxCenter,
        draggable,
        viewport
    });
};
var refreshSnap = ({ state, dimensions: forcedDimensions, viewport: forcedViewport })=>{
    !(state.movementMode === 'SNAP') ? ("TURBOPACK compile-time truthy", 1) ? invariant() : ("TURBOPACK unreachable", undefined) : void 0;
    const needsVisibilityCheck = state.impact;
    const viewport = forcedViewport || state.viewport;
    const dimensions = forcedDimensions || state.dimensions;
    const { draggables, droppables } = dimensions;
    const draggable = draggables[state.critical.draggable.id];
    const isOver = whatIsDraggedOver(needsVisibilityCheck);
    !isOver ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Must be over a destination in SNAP movement mode') : ("TURBOPACK unreachable", undefined) : void 0;
    const destination = droppables[isOver];
    const impact = recompute({
        impact: needsVisibilityCheck,
        viewport,
        destination,
        draggables
    });
    const clientSelection = getClientBorderBoxCenter({
        impact,
        draggable,
        droppable: destination,
        draggables,
        viewport,
        afterCritical: state.afterCritical
    });
    return update({
        impact,
        clientSelection,
        state,
        dimensions,
        viewport
    });
};
var getHomeLocation = (descriptor)=>({
        index: descriptor.index,
        droppableId: descriptor.droppableId
    });
var getLiftEffect = ({ draggable, home, draggables, viewport })=>{
    const displacedBy = getDisplacedBy(home.axis, draggable.displaceBy);
    const insideHome = getDraggablesInsideDroppable(home.descriptor.id, draggables);
    const rawIndex = insideHome.indexOf(draggable);
    !(rawIndex !== -1) ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Expected draggable to be inside home list') : ("TURBOPACK unreachable", undefined) : void 0;
    const afterDragging = insideHome.slice(rawIndex + 1);
    const effected = afterDragging.reduce((previous, item)=>{
        previous[item.descriptor.id] = true;
        return previous;
    }, {});
    const afterCritical = {
        inVirtualList: home.descriptor.mode === 'virtual',
        displacedBy,
        effected
    };
    const displaced = getDisplacementGroups({
        afterDragging,
        destination: home,
        displacedBy,
        last: null,
        viewport: viewport.frame,
        forceShouldAnimate: false
    });
    const impact = {
        displaced,
        displacedBy,
        at: {
            type: 'REORDER',
            destination: getHomeLocation(draggable.descriptor)
        }
    };
    return {
        impact,
        afterCritical
    };
};
var patchDimensionMap = (dimensions, updated)=>({
        draggables: dimensions.draggables,
        droppables: patchDroppableMap(dimensions.droppables, updated)
    });
const start = (key)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        {
            return;
        }
    }
};
const finish = (key)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        {
            return;
        }
    }
};
var offsetDraggable = ({ draggable, offset: offset$1, initialWindowScroll })=>{
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$box$2d$model$2f$dist$2f$css$2d$box$2d$model$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["offset"])(draggable.client, offset$1);
    const page = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$box$2d$model$2f$dist$2f$css$2d$box$2d$model$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withScroll"])(client, initialWindowScroll);
    const moved = {
        ...draggable,
        placeholder: {
            ...draggable.placeholder,
            client
        },
        client,
        page
    };
    return moved;
};
var getFrame = (droppable)=>{
    const frame = droppable.frame;
    !frame ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Expected Droppable to have a frame') : ("TURBOPACK unreachable", undefined) : void 0;
    return frame;
};
var adjustAdditionsForScrollChanges = ({ additions, updatedDroppables, viewport })=>{
    const windowScrollChange = viewport.scroll.diff.value;
    return additions.map((draggable)=>{
        const droppableId = draggable.descriptor.droppableId;
        const modified = updatedDroppables[droppableId];
        const frame = getFrame(modified);
        const droppableScrollChange = frame.scroll.diff.value;
        const totalChange = add(windowScrollChange, droppableScrollChange);
        const moved = offsetDraggable({
            draggable,
            offset: totalChange,
            initialWindowScroll: viewport.scroll.initial
        });
        return moved;
    });
};
const timingsKey = 'Processing dynamic changes';
var publishWhileDraggingInVirtual = ({ state, published })=>{
    start();
    const withScrollChange = published.modified.map((update)=>{
        const existing = state.dimensions.droppables[update.droppableId];
        const scrolled = scrollDroppable(existing, update.scroll);
        return scrolled;
    });
    const droppables = {
        ...state.dimensions.droppables,
        ...toDroppableMap(withScrollChange)
    };
    const updatedAdditions = toDraggableMap(adjustAdditionsForScrollChanges({
        additions: published.additions,
        updatedDroppables: droppables,
        viewport: state.viewport
    }));
    const draggables = {
        ...state.dimensions.draggables,
        ...updatedAdditions
    };
    published.removals.forEach((id)=>{
        delete draggables[id];
    });
    const dimensions = {
        droppables,
        draggables
    };
    const wasOverId = whatIsDraggedOver(state.impact);
    const wasOver = wasOverId ? dimensions.droppables[wasOverId] : null;
    const draggable = dimensions.draggables[state.critical.draggable.id];
    const home = dimensions.droppables[state.critical.droppable.id];
    const { impact: onLiftImpact, afterCritical } = getLiftEffect({
        draggable,
        home,
        draggables,
        viewport: state.viewport
    });
    const previousImpact = wasOver && wasOver.isCombineEnabled ? state.impact : onLiftImpact;
    const impact = getDragImpact({
        pageOffset: state.current.page.offset,
        draggable: dimensions.draggables[state.critical.draggable.id],
        draggables: dimensions.draggables,
        droppables: dimensions.droppables,
        previousImpact,
        viewport: state.viewport,
        afterCritical
    });
    finish(timingsKey);
    const draggingState = {
        ...state,
        phase: 'DRAGGING',
        impact,
        onLiftImpact,
        dimensions,
        afterCritical,
        forceShouldAnimate: false
    };
    if (state.phase === 'COLLECTING') {
        return draggingState;
    }
    const dropPending = {
        ...draggingState,
        phase: 'DROP_PENDING',
        reason: state.reason,
        isWaiting: false
    };
    return dropPending;
};
const isSnapping = (state)=>state.movementMode === 'SNAP';
const postDroppableChange = (state, updated, isEnabledChanging)=>{
    const dimensions = patchDimensionMap(state.dimensions, updated);
    if (!isSnapping(state) || isEnabledChanging) {
        return update({
            state,
            dimensions
        });
    }
    return refreshSnap({
        state,
        dimensions
    });
};
function removeScrollJumpRequest(state) {
    if (state.isDragging && state.movementMode === 'SNAP') {
        return {
            ...state,
            scrollJumpRequest: null
        };
    }
    return state;
}
const idle$2 = {
    phase: 'IDLE',
    completed: null,
    shouldFlush: false
};
var reducer = (state = idle$2, action)=>{
    if (action.type === 'FLUSH') {
        return {
            ...idle$2,
            shouldFlush: true
        };
    }
    if (action.type === 'INITIAL_PUBLISH') {
        !(state.phase === 'IDLE') ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'INITIAL_PUBLISH must come after a IDLE phase') : ("TURBOPACK unreachable", undefined) : void 0;
        const { critical, clientSelection, viewport, dimensions, movementMode } = action.payload;
        const draggable = dimensions.draggables[critical.draggable.id];
        const home = dimensions.droppables[critical.droppable.id];
        const client = {
            selection: clientSelection,
            borderBoxCenter: draggable.client.borderBox.center,
            offset: origin
        };
        const initial = {
            client,
            page: {
                selection: add(client.selection, viewport.scroll.initial),
                borderBoxCenter: add(client.selection, viewport.scroll.initial),
                offset: add(client.selection, viewport.scroll.diff.value)
            }
        };
        const isWindowScrollAllowed = toDroppableList(dimensions.droppables).every((item)=>!item.isFixedOnPage);
        const { impact, afterCritical } = getLiftEffect({
            draggable,
            home,
            draggables: dimensions.draggables,
            viewport
        });
        const result = {
            phase: 'DRAGGING',
            isDragging: true,
            critical,
            movementMode,
            dimensions,
            initial,
            current: initial,
            isWindowScrollAllowed,
            impact,
            afterCritical,
            onLiftImpact: impact,
            viewport,
            scrollJumpRequest: null,
            forceShouldAnimate: null
        };
        return result;
    }
    if (action.type === 'COLLECTION_STARTING') {
        if (state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') {
            return state;
        }
        !(state.phase === 'DRAGGING') ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, `Collection cannot start from phase ${state.phase}`) : ("TURBOPACK unreachable", undefined) : void 0;
        const result = {
            ...state,
            phase: 'COLLECTING'
        };
        return result;
    }
    if (action.type === 'PUBLISH_WHILE_DRAGGING') {
        !(state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, `Unexpected ${action.type} received in phase ${state.phase}`) : ("TURBOPACK unreachable", undefined) : void 0;
        return publishWhileDraggingInVirtual({
            state,
            published: action.payload
        });
    }
    if (action.type === 'MOVE') {
        if (state.phase === 'DROP_PENDING') {
            return state;
        }
        !isMovementAllowed(state) ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, `${action.type} not permitted in phase ${state.phase}`) : ("TURBOPACK unreachable", undefined) : void 0;
        const { client: clientSelection } = action.payload;
        if (isEqual$1(clientSelection, state.current.client.selection)) {
            return state;
        }
        return update({
            state,
            clientSelection,
            impact: isSnapping(state) ? state.impact : null
        });
    }
    if (action.type === 'UPDATE_DROPPABLE_SCROLL') {
        if (state.phase === 'DROP_PENDING') {
            return removeScrollJumpRequest(state);
        }
        if (state.phase === 'COLLECTING') {
            return removeScrollJumpRequest(state);
        }
        !isMovementAllowed(state) ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, `${action.type} not permitted in phase ${state.phase}`) : ("TURBOPACK unreachable", undefined) : void 0;
        const { id, newScroll } = action.payload;
        const target = state.dimensions.droppables[id];
        if (!target) {
            return state;
        }
        const scrolled = scrollDroppable(target, newScroll);
        return postDroppableChange(state, scrolled, false);
    }
    if (action.type === 'UPDATE_DROPPABLE_IS_ENABLED') {
        if (state.phase === 'DROP_PENDING') {
            return state;
        }
        !isMovementAllowed(state) ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, `Attempting to move in an unsupported phase ${state.phase}`) : ("TURBOPACK unreachable", undefined) : void 0;
        const { id, isEnabled } = action.payload;
        const target = state.dimensions.droppables[id];
        !target ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, `Cannot find Droppable[id: ${id}] to toggle its enabled state`) : ("TURBOPACK unreachable", undefined) : void 0;
        !(target.isEnabled !== isEnabled) ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, `Trying to set droppable isEnabled to ${String(isEnabled)}
      but it is already ${String(target.isEnabled)}`) : ("TURBOPACK unreachable", undefined) : void 0;
        const updated = {
            ...target,
            isEnabled
        };
        return postDroppableChange(state, updated, true);
    }
    if (action.type === 'UPDATE_DROPPABLE_IS_COMBINE_ENABLED') {
        if (state.phase === 'DROP_PENDING') {
            return state;
        }
        !isMovementAllowed(state) ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, `Attempting to move in an unsupported phase ${state.phase}`) : ("TURBOPACK unreachable", undefined) : void 0;
        const { id, isCombineEnabled } = action.payload;
        const target = state.dimensions.droppables[id];
        !target ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, `Cannot find Droppable[id: ${id}] to toggle its isCombineEnabled state`) : ("TURBOPACK unreachable", undefined) : void 0;
        !(target.isCombineEnabled !== isCombineEnabled) ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, `Trying to set droppable isCombineEnabled to ${String(isCombineEnabled)}
      but it is already ${String(target.isCombineEnabled)}`) : ("TURBOPACK unreachable", undefined) : void 0;
        const updated = {
            ...target,
            isCombineEnabled
        };
        return postDroppableChange(state, updated, true);
    }
    if (action.type === 'MOVE_BY_WINDOW_SCROLL') {
        if (state.phase === 'DROP_PENDING' || state.phase === 'DROP_ANIMATING') {
            return state;
        }
        !isMovementAllowed(state) ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, `Cannot move by window in phase ${state.phase}`) : ("TURBOPACK unreachable", undefined) : void 0;
        !state.isWindowScrollAllowed ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Window scrolling is currently not supported for fixed lists') : ("TURBOPACK unreachable", undefined) : void 0;
        const newScroll = action.payload.newScroll;
        if (isEqual$1(state.viewport.scroll.current, newScroll)) {
            return removeScrollJumpRequest(state);
        }
        const viewport = scrollViewport(state.viewport, newScroll);
        if (isSnapping(state)) {
            return refreshSnap({
                state,
                viewport
            });
        }
        return update({
            state,
            viewport
        });
    }
    if (action.type === 'UPDATE_VIEWPORT_MAX_SCROLL') {
        if (!isMovementAllowed(state)) {
            return state;
        }
        const maxScroll = action.payload.maxScroll;
        if (isEqual$1(maxScroll, state.viewport.scroll.max)) {
            return state;
        }
        const withMaxScroll = {
            ...state.viewport,
            scroll: {
                ...state.viewport.scroll,
                max: maxScroll
            }
        };
        return {
            ...state,
            viewport: withMaxScroll
        };
    }
    if (action.type === 'MOVE_UP' || action.type === 'MOVE_DOWN' || action.type === 'MOVE_LEFT' || action.type === 'MOVE_RIGHT') {
        if (state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') {
            return state;
        }
        !(state.phase === 'DRAGGING') ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, `${action.type} received while not in DRAGGING phase`) : ("TURBOPACK unreachable", undefined) : void 0;
        const result = moveInDirection({
            state,
            type: action.type
        });
        if (!result) {
            return state;
        }
        return update({
            state,
            impact: result.impact,
            clientSelection: result.clientSelection,
            scrollJumpRequest: result.scrollJumpRequest
        });
    }
    if (action.type === 'DROP_PENDING') {
        const reason = action.payload.reason;
        !(state.phase === 'COLLECTING') ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Can only move into the DROP_PENDING phase from the COLLECTING phase') : ("TURBOPACK unreachable", undefined) : void 0;
        const newState = {
            ...state,
            phase: 'DROP_PENDING',
            isWaiting: true,
            reason
        };
        return newState;
    }
    if (action.type === 'DROP_ANIMATE') {
        const { completed, dropDuration, newHomeClientOffset } = action.payload;
        !(state.phase === 'DRAGGING' || state.phase === 'DROP_PENDING') ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, `Cannot animate drop from phase ${state.phase}`) : ("TURBOPACK unreachable", undefined) : void 0;
        const result = {
            phase: 'DROP_ANIMATING',
            completed,
            dropDuration,
            newHomeClientOffset,
            dimensions: state.dimensions
        };
        return result;
    }
    if (action.type === 'DROP_COMPLETE') {
        const { completed } = action.payload;
        return {
            phase: 'IDLE',
            completed,
            shouldFlush: false
        };
    }
    return state;
};
function guard(action, predicate) {
    return action instanceof Object && 'type' in action && action.type === predicate;
}
const beforeInitialCapture = (args)=>({
        type: 'BEFORE_INITIAL_CAPTURE',
        payload: args
    });
const lift$1 = (args)=>({
        type: 'LIFT',
        payload: args
    });
const initialPublish = (args)=>({
        type: 'INITIAL_PUBLISH',
        payload: args
    });
const publishWhileDragging = (args)=>({
        type: 'PUBLISH_WHILE_DRAGGING',
        payload: args
    });
const collectionStarting = ()=>({
        type: 'COLLECTION_STARTING',
        payload: null
    });
const updateDroppableScroll = (args)=>({
        type: 'UPDATE_DROPPABLE_SCROLL',
        payload: args
    });
const updateDroppableIsEnabled = (args)=>({
        type: 'UPDATE_DROPPABLE_IS_ENABLED',
        payload: args
    });
const updateDroppableIsCombineEnabled = (args)=>({
        type: 'UPDATE_DROPPABLE_IS_COMBINE_ENABLED',
        payload: args
    });
const move = (args)=>({
        type: 'MOVE',
        payload: args
    });
const moveByWindowScroll = (args)=>({
        type: 'MOVE_BY_WINDOW_SCROLL',
        payload: args
    });
const updateViewportMaxScroll = (args)=>({
        type: 'UPDATE_VIEWPORT_MAX_SCROLL',
        payload: args
    });
const moveUp = ()=>({
        type: 'MOVE_UP',
        payload: null
    });
const moveDown = ()=>({
        type: 'MOVE_DOWN',
        payload: null
    });
const moveRight = ()=>({
        type: 'MOVE_RIGHT',
        payload: null
    });
const moveLeft = ()=>({
        type: 'MOVE_LEFT',
        payload: null
    });
const flush = ()=>({
        type: 'FLUSH',
        payload: null
    });
const animateDrop = (args)=>({
        type: 'DROP_ANIMATE',
        payload: args
    });
const completeDrop = (args)=>({
        type: 'DROP_COMPLETE',
        payload: args
    });
const drop = (args)=>({
        type: 'DROP',
        payload: args
    });
const dropPending = (args)=>({
        type: 'DROP_PENDING',
        payload: args
    });
const dropAnimationFinished = ()=>({
        type: 'DROP_ANIMATION_FINISHED',
        payload: null
    });
function checkIndexes(insideDestination) {
    if (insideDestination.length <= 1) {
        return;
    }
    const indexes = insideDestination.map((d)=>d.descriptor.index);
    const errors = {};
    for(let i = 1; i < indexes.length; i++){
        const current = indexes[i];
        const previous = indexes[i - 1];
        if (current !== previous + 1) {
            errors[current] = true;
        }
    }
    if (!Object.keys(errors).length) {
        return;
    }
    const formatted = indexes.map((index)=>{
        const hasError = Boolean(errors[index]);
        return hasError ? `[🔥${index}]` : `${index}`;
    }).join(', ');
    ("TURBOPACK compile-time truthy", 1) ? warning(`
    Detected non-consecutive <Draggable /> indexes.

    (This can cause unexpected bugs)

    ${formatted}
  `) : ("TURBOPACK unreachable", undefined);
}
function validateDimensions(critical, dimensions) {
    if ("TURBOPACK compile-time truthy", 1) {
        const insideDestination = getDraggablesInsideDroppable(critical.droppable.id, dimensions.draggables);
        checkIndexes(insideDestination);
    }
}
var lift = (marshal)=>({ getState, dispatch })=>(next)=>(action)=>{
                if (!guard(action, 'LIFT')) {
                    next(action);
                    return;
                }
                const { id, clientSelection, movementMode } = action.payload;
                const initial = getState();
                if (initial.phase === 'DROP_ANIMATING') {
                    dispatch(completeDrop({
                        completed: initial.completed
                    }));
                }
                !(getState().phase === 'IDLE') ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Unexpected phase to start a drag') : ("TURBOPACK unreachable", undefined) : void 0;
                dispatch(flush());
                dispatch(beforeInitialCapture({
                    draggableId: id,
                    movementMode
                }));
                const scrollOptions = {
                    shouldPublishImmediately: movementMode === 'SNAP'
                };
                const request = {
                    draggableId: id,
                    scrollOptions
                };
                const { critical, dimensions, viewport } = marshal.startPublishing(request);
                validateDimensions(critical, dimensions);
                dispatch(initialPublish({
                    critical,
                    dimensions,
                    clientSelection,
                    movementMode,
                    viewport
                }));
            };
var style = (marshal)=>()=>(next)=>(action)=>{
                if (guard(action, 'INITIAL_PUBLISH')) {
                    marshal.dragging();
                }
                if (guard(action, 'DROP_ANIMATE')) {
                    marshal.dropping(action.payload.completed.result.reason);
                }
                if (guard(action, 'FLUSH') || guard(action, 'DROP_COMPLETE')) {
                    marshal.resting();
                }
                next(action);
            };
const curves = {
    outOfTheWay: 'cubic-bezier(0.2, 0, 0, 1)',
    drop: 'cubic-bezier(.2,1,.1,1)'
};
const combine = {
    opacity: {
        drop: 0,
        combining: 0.7
    },
    scale: {
        drop: 0.75
    }
};
const timings = {
    outOfTheWay: 0.2,
    minDropTime: 0.33,
    maxDropTime: 0.55
};
const outOfTheWayTiming = `${timings.outOfTheWay}s ${curves.outOfTheWay}`;
const transitions = {
    fluid: `opacity ${outOfTheWayTiming}`,
    snap: `transform ${outOfTheWayTiming}, opacity ${outOfTheWayTiming}`,
    drop: (duration)=>{
        const timing = `${duration}s ${curves.drop}`;
        return `transform ${timing}, opacity ${timing}`;
    },
    outOfTheWay: `transform ${outOfTheWayTiming}`,
    placeholder: `height ${outOfTheWayTiming}, width ${outOfTheWayTiming}, margin ${outOfTheWayTiming}`
};
const moveTo = (offset)=>isEqual$1(offset, origin) ? undefined : `translate(${offset.x}px, ${offset.y}px)`;
const transforms = {
    moveTo,
    drop: (offset, isCombining)=>{
        const translate = moveTo(offset);
        if (!translate) {
            return undefined;
        }
        if (!isCombining) {
            return translate;
        }
        return `${translate} scale(${combine.scale.drop})`;
    }
};
const { minDropTime, maxDropTime } = timings;
const dropTimeRange = maxDropTime - minDropTime;
const maxDropTimeAtDistance = 1500;
const cancelDropModifier = 0.6;
var getDropDuration = ({ current, destination, reason })=>{
    const distance$1 = distance(current, destination);
    if (distance$1 <= 0) {
        return minDropTime;
    }
    if (distance$1 >= maxDropTimeAtDistance) {
        return maxDropTime;
    }
    const percentage = distance$1 / maxDropTimeAtDistance;
    const duration = minDropTime + dropTimeRange * percentage;
    const withDuration = reason === 'CANCEL' ? duration * cancelDropModifier : duration;
    return Number(withDuration.toFixed(2));
};
var getNewHomeClientOffset = ({ impact, draggable, dimensions, viewport, afterCritical })=>{
    const { draggables, droppables } = dimensions;
    const droppableId = whatIsDraggedOver(impact);
    const destination = droppableId ? droppables[droppableId] : null;
    const home = droppables[draggable.descriptor.droppableId];
    const newClientCenter = getClientBorderBoxCenter({
        impact,
        draggable,
        draggables,
        afterCritical,
        droppable: destination || home,
        viewport
    });
    const offset = subtract(newClientCenter, draggable.client.borderBox.center);
    return offset;
};
var getDropImpact = ({ draggables, reason, lastImpact, home, viewport, onLiftImpact })=>{
    if (!lastImpact.at || reason !== 'DROP') {
        const recomputedHomeImpact = recompute({
            draggables,
            impact: onLiftImpact,
            destination: home,
            viewport,
            forceShouldAnimate: true
        });
        return {
            impact: recomputedHomeImpact,
            didDropInsideDroppable: false
        };
    }
    if (lastImpact.at.type === 'REORDER') {
        return {
            impact: lastImpact,
            didDropInsideDroppable: true
        };
    }
    const withoutMovement = {
        ...lastImpact,
        displaced: emptyGroups
    };
    return {
        impact: withoutMovement,
        didDropInsideDroppable: true
    };
};
const dropMiddleware = ({ getState, dispatch })=>(next)=>(action)=>{
            if (!guard(action, 'DROP')) {
                next(action);
                return;
            }
            const state = getState();
            const reason = action.payload.reason;
            if (state.phase === 'COLLECTING') {
                dispatch(dropPending({
                    reason
                }));
                return;
            }
            if (state.phase === 'IDLE') {
                return;
            }
            const isWaitingForDrop = state.phase === 'DROP_PENDING' && state.isWaiting;
            !!isWaitingForDrop ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'A DROP action occurred while DROP_PENDING and still waiting') : ("TURBOPACK unreachable", undefined) : void 0;
            !(state.phase === 'DRAGGING' || state.phase === 'DROP_PENDING') ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, `Cannot drop in phase: ${state.phase}`) : ("TURBOPACK unreachable", undefined) : void 0;
            const critical = state.critical;
            const dimensions = state.dimensions;
            const draggable = dimensions.draggables[state.critical.draggable.id];
            const { impact, didDropInsideDroppable } = getDropImpact({
                reason,
                lastImpact: state.impact,
                afterCritical: state.afterCritical,
                onLiftImpact: state.onLiftImpact,
                home: state.dimensions.droppables[state.critical.droppable.id],
                viewport: state.viewport,
                draggables: state.dimensions.draggables
            });
            const destination = didDropInsideDroppable ? tryGetDestination(impact) : null;
            const combine = didDropInsideDroppable ? tryGetCombine(impact) : null;
            const source = {
                index: critical.draggable.index,
                droppableId: critical.droppable.id
            };
            const result = {
                draggableId: draggable.descriptor.id,
                type: draggable.descriptor.type,
                source,
                reason,
                mode: state.movementMode,
                destination,
                combine
            };
            const newHomeClientOffset = getNewHomeClientOffset({
                impact,
                draggable,
                dimensions,
                viewport: state.viewport,
                afterCritical: state.afterCritical
            });
            const completed = {
                critical: state.critical,
                afterCritical: state.afterCritical,
                result,
                impact
            };
            const isAnimationRequired = !isEqual$1(state.current.client.offset, newHomeClientOffset) || Boolean(result.combine);
            if (!isAnimationRequired) {
                dispatch(completeDrop({
                    completed
                }));
                return;
            }
            const dropDuration = getDropDuration({
                current: state.current.client.offset,
                destination: newHomeClientOffset,
                reason
            });
            const args = {
                newHomeClientOffset,
                dropDuration,
                completed
            };
            dispatch(animateDrop(args));
        };
var getWindowScroll = ()=>({
        x: window.pageXOffset,
        y: window.pageYOffset
    });
function getWindowScrollBinding(update) {
    return {
        eventName: 'scroll',
        options: {
            passive: true,
            capture: false
        },
        fn: (event)=>{
            if (event.target !== window && event.target !== window.document) {
                return;
            }
            update();
        }
    };
}
function getScrollListener({ onWindowScroll }) {
    function updateScroll() {
        onWindowScroll(getWindowScroll());
    }
    const scheduled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$raf$2d$schd$2f$dist$2f$raf$2d$schd$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(updateScroll);
    const binding = getWindowScrollBinding(scheduled);
    let unbind = noop$2;
    function isActive() {
        return unbind !== noop$2;
    }
    function start() {
        !!isActive() ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Cannot start scroll listener when already active') : ("TURBOPACK unreachable", undefined) : void 0;
        unbind = bindEvents(window, [
            binding
        ]);
    }
    function stop() {
        !isActive() ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Cannot stop scroll listener when not active') : ("TURBOPACK unreachable", undefined) : void 0;
        scheduled.cancel();
        unbind();
        unbind = noop$2;
    }
    return {
        start,
        stop,
        isActive
    };
}
const shouldStop$1 = (action)=>guard(action, 'DROP_COMPLETE') || guard(action, 'DROP_ANIMATE') || guard(action, 'FLUSH');
const scrollListener = (store)=>{
    const listener = getScrollListener({
        onWindowScroll: (newScroll)=>{
            store.dispatch(moveByWindowScroll({
                newScroll
            }));
        }
    });
    return (next)=>(action)=>{
            if (!listener.isActive() && guard(action, 'INITIAL_PUBLISH')) {
                listener.start();
            }
            if (listener.isActive() && shouldStop$1(action)) {
                listener.stop();
            }
            next(action);
        };
};
var getExpiringAnnounce = (announce)=>{
    let wasCalled = false;
    let isExpired = false;
    const timeoutId = setTimeout(()=>{
        isExpired = true;
    });
    const result = (message)=>{
        if (wasCalled) {
            ("TURBOPACK compile-time truthy", 1) ? warning('Announcement already made. Not making a second announcement') : ("TURBOPACK unreachable", undefined);
            return;
        }
        if (isExpired) {
            ("TURBOPACK compile-time truthy", 1) ? warning(`
        Announcements cannot be made asynchronously.
        Default message has already been announced.
      `) : ("TURBOPACK unreachable", undefined);
            return;
        }
        wasCalled = true;
        announce(message);
        clearTimeout(timeoutId);
    };
    result.wasCalled = ()=>wasCalled;
    return result;
};
var getAsyncMarshal = ()=>{
    const entries = [];
    const execute = (timerId)=>{
        const index = entries.findIndex((item)=>item.timerId === timerId);
        !(index !== -1) ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Could not find timer') : ("TURBOPACK unreachable", undefined) : void 0;
        const [entry] = entries.splice(index, 1);
        entry.callback();
    };
    const add = (fn)=>{
        const timerId = setTimeout(()=>execute(timerId));
        const entry = {
            timerId,
            callback: fn
        };
        entries.push(entry);
    };
    const flush = ()=>{
        if (!entries.length) {
            return;
        }
        const shallow = [
            ...entries
        ];
        entries.length = 0;
        shallow.forEach((entry)=>{
            clearTimeout(entry.timerId);
            entry.callback();
        });
    };
    return {
        add,
        flush
    };
};
const areLocationsEqual = (first, second)=>{
    if (first == null && second == null) {
        return true;
    }
    if (first == null || second == null) {
        return false;
    }
    return first.droppableId === second.droppableId && first.index === second.index;
};
const isCombineEqual = (first, second)=>{
    if (first == null && second == null) {
        return true;
    }
    if (first == null || second == null) {
        return false;
    }
    return first.draggableId === second.draggableId && first.droppableId === second.droppableId;
};
const isCriticalEqual = (first, second)=>{
    if (first === second) {
        return true;
    }
    const isDraggableEqual = first.draggable.id === second.draggable.id && first.draggable.droppableId === second.draggable.droppableId && first.draggable.type === second.draggable.type && first.draggable.index === second.draggable.index;
    const isDroppableEqual = first.droppable.id === second.droppable.id && first.droppable.type === second.droppable.type;
    return isDraggableEqual && isDroppableEqual;
};
const withTimings = (key, fn)=>{
    start();
    fn();
    finish();
};
const getDragStart = (critical, mode)=>({
        draggableId: critical.draggable.id,
        type: critical.droppable.type,
        source: {
            droppableId: critical.droppable.id,
            index: critical.draggable.index
        },
        mode
    });
function execute(responder, data, announce, getDefaultMessage) {
    if (!responder) {
        announce(getDefaultMessage(data));
        return;
    }
    const willExpire = getExpiringAnnounce(announce);
    const provided = {
        announce: willExpire
    };
    responder(data, provided);
    if (!willExpire.wasCalled()) {
        announce(getDefaultMessage(data));
    }
}
var getPublisher = (getResponders, announce)=>{
    const asyncMarshal = getAsyncMarshal();
    let dragging = null;
    const beforeCapture = (draggableId, mode)=>{
        !!dragging ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Cannot fire onBeforeCapture as a drag start has already been published') : ("TURBOPACK unreachable", undefined) : void 0;
        withTimings('onBeforeCapture', ()=>{
            const fn = getResponders().onBeforeCapture;
            if (fn) {
                const before = {
                    draggableId,
                    mode
                };
                fn(before);
            }
        });
    };
    const beforeStart = (critical, mode)=>{
        !!dragging ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Cannot fire onBeforeDragStart as a drag start has already been published') : ("TURBOPACK unreachable", undefined) : void 0;
        withTimings('onBeforeDragStart', ()=>{
            const fn = getResponders().onBeforeDragStart;
            if (fn) {
                fn(getDragStart(critical, mode));
            }
        });
    };
    const start = (critical, mode)=>{
        !!dragging ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Cannot fire onBeforeDragStart as a drag start has already been published') : ("TURBOPACK unreachable", undefined) : void 0;
        const data = getDragStart(critical, mode);
        dragging = {
            mode,
            lastCritical: critical,
            lastLocation: data.source,
            lastCombine: null
        };
        asyncMarshal.add(()=>{
            withTimings('onDragStart', ()=>execute(getResponders().onDragStart, data, announce, preset.onDragStart));
        });
    };
    const update = (critical, impact)=>{
        const location = tryGetDestination(impact);
        const combine = tryGetCombine(impact);
        !dragging ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Cannot fire onDragMove when onDragStart has not been called') : ("TURBOPACK unreachable", undefined) : void 0;
        const hasCriticalChanged = !isCriticalEqual(critical, dragging.lastCritical);
        if (hasCriticalChanged) {
            dragging.lastCritical = critical;
        }
        const hasLocationChanged = !areLocationsEqual(dragging.lastLocation, location);
        if (hasLocationChanged) {
            dragging.lastLocation = location;
        }
        const hasGroupingChanged = !isCombineEqual(dragging.lastCombine, combine);
        if (hasGroupingChanged) {
            dragging.lastCombine = combine;
        }
        if (!hasCriticalChanged && !hasLocationChanged && !hasGroupingChanged) {
            return;
        }
        const data = {
            ...getDragStart(critical, dragging.mode),
            combine,
            destination: location
        };
        asyncMarshal.add(()=>{
            withTimings('onDragUpdate', ()=>execute(getResponders().onDragUpdate, data, announce, preset.onDragUpdate));
        });
    };
    const flush = ()=>{
        !dragging ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Can only flush responders while dragging') : ("TURBOPACK unreachable", undefined) : void 0;
        asyncMarshal.flush();
    };
    const drop = (result)=>{
        !dragging ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Cannot fire onDragEnd when there is no matching onDragStart') : ("TURBOPACK unreachable", undefined) : void 0;
        dragging = null;
        withTimings('onDragEnd', ()=>execute(getResponders().onDragEnd, result, announce, preset.onDragEnd));
    };
    const abort = ()=>{
        if (!dragging) {
            return;
        }
        const result = {
            ...getDragStart(dragging.lastCritical, dragging.mode),
            combine: null,
            destination: null,
            reason: 'CANCEL'
        };
        drop(result);
    };
    return {
        beforeCapture,
        beforeStart,
        start,
        update,
        flush,
        drop,
        abort
    };
};
var responders = (getResponders, announce)=>{
    const publisher = getPublisher(getResponders, announce);
    return (store)=>(next)=>(action)=>{
                if (guard(action, 'BEFORE_INITIAL_CAPTURE')) {
                    publisher.beforeCapture(action.payload.draggableId, action.payload.movementMode);
                    return;
                }
                if (guard(action, 'INITIAL_PUBLISH')) {
                    const critical = action.payload.critical;
                    publisher.beforeStart(critical, action.payload.movementMode);
                    next(action);
                    publisher.start(critical, action.payload.movementMode);
                    return;
                }
                if (guard(action, 'DROP_COMPLETE')) {
                    const result = action.payload.completed.result;
                    publisher.flush();
                    next(action);
                    publisher.drop(result);
                    return;
                }
                next(action);
                if (guard(action, 'FLUSH')) {
                    publisher.abort();
                    return;
                }
                const state = store.getState();
                if (state.phase === 'DRAGGING') {
                    publisher.update(state.critical, state.impact);
                }
            };
};
const dropAnimationFinishMiddleware = (store)=>(next)=>(action)=>{
            if (!guard(action, 'DROP_ANIMATION_FINISHED')) {
                next(action);
                return;
            }
            const state = store.getState();
            !(state.phase === 'DROP_ANIMATING') ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Cannot finish a drop animating when no drop is occurring') : ("TURBOPACK unreachable", undefined) : void 0;
            store.dispatch(completeDrop({
                completed: state.completed
            }));
        };
const dropAnimationFlushOnScrollMiddleware = (store)=>{
    let unbind = null;
    let frameId = null;
    function clear() {
        if (frameId) {
            cancelAnimationFrame(frameId);
            frameId = null;
        }
        if (unbind) {
            unbind();
            unbind = null;
        }
    }
    return (next)=>(action)=>{
            if (guard(action, 'FLUSH') || guard(action, 'DROP_COMPLETE') || guard(action, 'DROP_ANIMATION_FINISHED')) {
                clear();
            }
            next(action);
            if (!guard(action, 'DROP_ANIMATE')) {
                return;
            }
            const binding = {
                eventName: 'scroll',
                options: {
                    capture: true,
                    passive: false,
                    once: true
                },
                fn: function flushDropAnimation() {
                    const state = store.getState();
                    if (state.phase === 'DROP_ANIMATING') {
                        store.dispatch(dropAnimationFinished());
                    }
                }
            };
            frameId = requestAnimationFrame(()=>{
                frameId = null;
                unbind = bindEvents(window, [
                    binding
                ]);
            });
        };
};
var dimensionMarshalStopper = (marshal)=>()=>(next)=>(action)=>{
                if (guard(action, 'DROP_COMPLETE') || guard(action, 'FLUSH') || guard(action, 'DROP_ANIMATE')) {
                    marshal.stopPublishing();
                }
                next(action);
            };
var focus = (marshal)=>{
    let isWatching = false;
    return ()=>(next)=>(action)=>{
                if (guard(action, 'INITIAL_PUBLISH')) {
                    isWatching = true;
                    marshal.tryRecordFocus(action.payload.critical.draggable.id);
                    next(action);
                    marshal.tryRestoreFocusRecorded();
                    return;
                }
                next(action);
                if (!isWatching) {
                    return;
                }
                if (guard(action, 'FLUSH')) {
                    isWatching = false;
                    marshal.tryRestoreFocusRecorded();
                    return;
                }
                if (guard(action, 'DROP_COMPLETE')) {
                    isWatching = false;
                    const result = action.payload.completed.result;
                    if (result.combine) {
                        marshal.tryShiftRecord(result.draggableId, result.combine.draggableId);
                    }
                    marshal.tryRestoreFocusRecorded();
                }
            };
};
const shouldStop = (action)=>guard(action, 'DROP_COMPLETE') || guard(action, 'DROP_ANIMATE') || guard(action, 'FLUSH');
var autoScroll = (autoScroller)=>(store)=>(next)=>(action)=>{
                if (shouldStop(action)) {
                    autoScroller.stop();
                    next(action);
                    return;
                }
                if (guard(action, 'INITIAL_PUBLISH')) {
                    next(action);
                    const state = store.getState();
                    !(state.phase === 'DRAGGING') ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Expected phase to be DRAGGING after INITIAL_PUBLISH') : ("TURBOPACK unreachable", undefined) : void 0;
                    autoScroller.start(state);
                    return;
                }
                next(action);
                autoScroller.scroll(store.getState());
            };
const pendingDrop = (store)=>(next)=>(action)=>{
            next(action);
            if (!guard(action, 'PUBLISH_WHILE_DRAGGING')) {
                return;
            }
            const postActionState = store.getState();
            if (postActionState.phase !== 'DROP_PENDING') {
                return;
            }
            if (postActionState.isWaiting) {
                return;
            }
            store.dispatch(drop({
                reason: postActionState.reason
            }));
        };
const composeEnhancers = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compose"];
var createStore = ({ dimensionMarshal, focusMarshal, styleMarshal, getResponders, announce, autoScroller })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createStore"])(reducer, composeEnhancers((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["applyMiddleware"])(style(styleMarshal), dimensionMarshalStopper(dimensionMarshal), lift(dimensionMarshal), dropMiddleware, dropAnimationFinishMiddleware, dropAnimationFlushOnScrollMiddleware, pendingDrop, autoScroll(autoScroller), scrollListener, focus(focusMarshal), responders(getResponders, announce))));
const clean$1 = ()=>({
        additions: {},
        removals: {},
        modified: {}
    });
function createPublisher({ registry, callbacks }) {
    let staging = clean$1();
    let frameId = null;
    const collect = ()=>{
        if (frameId) {
            return;
        }
        callbacks.collectionStarting();
        frameId = requestAnimationFrame(()=>{
            frameId = null;
            start();
            const { additions, removals, modified } = staging;
            const added = Object.keys(additions).map((id)=>registry.draggable.getById(id).getDimension(origin)).sort((a, b)=>a.descriptor.index - b.descriptor.index);
            const updated = Object.keys(modified).map((id)=>{
                const entry = registry.droppable.getById(id);
                const scroll = entry.callbacks.getScrollWhileDragging();
                return {
                    droppableId: id,
                    scroll
                };
            });
            const result = {
                additions: added,
                removals: Object.keys(removals),
                modified: updated
            };
            staging = clean$1();
            finish();
            callbacks.publish(result);
        });
    };
    const add = (entry)=>{
        const id = entry.descriptor.id;
        staging.additions[id] = entry;
        staging.modified[entry.descriptor.droppableId] = true;
        if (staging.removals[id]) {
            delete staging.removals[id];
        }
        collect();
    };
    const remove = (entry)=>{
        const descriptor = entry.descriptor;
        staging.removals[descriptor.id] = true;
        staging.modified[descriptor.droppableId] = true;
        if (staging.additions[descriptor.id]) {
            delete staging.additions[descriptor.id];
        }
        collect();
    };
    const stop = ()=>{
        if (!frameId) {
            return;
        }
        cancelAnimationFrame(frameId);
        frameId = null;
        staging = clean$1();
    };
    return {
        add,
        remove,
        stop
    };
}
var getMaxScroll = ({ scrollHeight, scrollWidth, height, width })=>{
    const maxScroll = subtract({
        x: scrollWidth,
        y: scrollHeight
    }, {
        x: width,
        y: height
    });
    const adjustedMaxScroll = {
        x: Math.max(0, maxScroll.x),
        y: Math.max(0, maxScroll.y)
    };
    return adjustedMaxScroll;
};
var getDocumentElement = ()=>{
    const doc = document.documentElement;
    !doc ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Cannot find document.documentElement') : ("TURBOPACK unreachable", undefined) : void 0;
    return doc;
};
var getMaxWindowScroll = ()=>{
    const doc = getDocumentElement();
    const maxScroll = getMaxScroll({
        scrollHeight: doc.scrollHeight,
        scrollWidth: doc.scrollWidth,
        width: doc.clientWidth,
        height: doc.clientHeight
    });
    return maxScroll;
};
var getViewport = ()=>{
    const scroll = getWindowScroll();
    const maxScroll = getMaxWindowScroll();
    const top = scroll.y;
    const left = scroll.x;
    const doc = getDocumentElement();
    const width = doc.clientWidth;
    const height = doc.clientHeight;
    const right = left + width;
    const bottom = top + height;
    const frame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$box$2d$model$2f$dist$2f$css$2d$box$2d$model$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRect"])({
        top,
        left,
        right,
        bottom
    });
    const viewport = {
        frame,
        scroll: {
            initial: scroll,
            current: scroll,
            max: maxScroll,
            diff: {
                value: origin,
                displacement: origin
            }
        }
    };
    return viewport;
};
var getInitialPublish = ({ critical, scrollOptions, registry })=>{
    start();
    const viewport = getViewport();
    const windowScroll = viewport.scroll.current;
    const home = critical.droppable;
    const droppables = registry.droppable.getAllByType(home.type).map((entry)=>entry.callbacks.getDimensionAndWatchScroll(windowScroll, scrollOptions));
    const draggables = registry.draggable.getAllByType(critical.draggable.type).map((entry)=>entry.getDimension(windowScroll));
    const dimensions = {
        draggables: toDraggableMap(draggables),
        droppables: toDroppableMap(droppables)
    };
    finish();
    const result = {
        dimensions,
        critical,
        viewport
    };
    return result;
};
function shouldPublishUpdate(registry, dragging, entry) {
    if (entry.descriptor.id === dragging.id) {
        return false;
    }
    if (entry.descriptor.type !== dragging.type) {
        return false;
    }
    const home = registry.droppable.getById(entry.descriptor.droppableId);
    if (home.descriptor.mode !== 'virtual') {
        ("TURBOPACK compile-time truthy", 1) ? warning(`
      You are attempting to add or remove a Draggable [id: ${entry.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `) : ("TURBOPACK unreachable", undefined);
        return false;
    }
    return true;
}
var createDimensionMarshal = (registry, callbacks)=>{
    let collection = null;
    const publisher = createPublisher({
        callbacks: {
            publish: callbacks.publishWhileDragging,
            collectionStarting: callbacks.collectionStarting
        },
        registry
    });
    const updateDroppableIsEnabled = (id, isEnabled)=>{
        !registry.droppable.exists(id) ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, `Cannot update is enabled flag of Droppable ${id} as it is not registered`) : ("TURBOPACK unreachable", undefined) : void 0;
        if (!collection) {
            return;
        }
        callbacks.updateDroppableIsEnabled({
            id,
            isEnabled
        });
    };
    const updateDroppableIsCombineEnabled = (id, isCombineEnabled)=>{
        if (!collection) {
            return;
        }
        !registry.droppable.exists(id) ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, `Cannot update isCombineEnabled flag of Droppable ${id} as it is not registered`) : ("TURBOPACK unreachable", undefined) : void 0;
        callbacks.updateDroppableIsCombineEnabled({
            id,
            isCombineEnabled
        });
    };
    const updateDroppableScroll = (id, newScroll)=>{
        if (!collection) {
            return;
        }
        !registry.droppable.exists(id) ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, `Cannot update the scroll on Droppable ${id} as it is not registered`) : ("TURBOPACK unreachable", undefined) : void 0;
        callbacks.updateDroppableScroll({
            id,
            newScroll
        });
    };
    const scrollDroppable = (id, change)=>{
        if (!collection) {
            return;
        }
        registry.droppable.getById(id).callbacks.scroll(change);
    };
    const stopPublishing = ()=>{
        if (!collection) {
            return;
        }
        publisher.stop();
        const home = collection.critical.droppable;
        registry.droppable.getAllByType(home.type).forEach((entry)=>entry.callbacks.dragStopped());
        collection.unsubscribe();
        collection = null;
    };
    const subscriber = (event)=>{
        !collection ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Should only be subscribed when a collection is occurring') : ("TURBOPACK unreachable", undefined) : void 0;
        const dragging = collection.critical.draggable;
        if (event.type === 'ADDITION') {
            if (shouldPublishUpdate(registry, dragging, event.value)) {
                publisher.add(event.value);
            }
        }
        if (event.type === 'REMOVAL') {
            if (shouldPublishUpdate(registry, dragging, event.value)) {
                publisher.remove(event.value);
            }
        }
    };
    const startPublishing = (request)=>{
        !!collection ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Cannot start capturing critical dimensions as there is already a collection') : ("TURBOPACK unreachable", undefined) : void 0;
        const entry = registry.draggable.getById(request.draggableId);
        const home = registry.droppable.getById(entry.descriptor.droppableId);
        const critical = {
            draggable: entry.descriptor,
            droppable: home.descriptor
        };
        const unsubscribe = registry.subscribe(subscriber);
        collection = {
            critical,
            unsubscribe
        };
        return getInitialPublish({
            critical,
            registry,
            scrollOptions: request.scrollOptions
        });
    };
    const marshal = {
        updateDroppableIsEnabled,
        updateDroppableIsCombineEnabled,
        scrollDroppable,
        updateDroppableScroll,
        startPublishing,
        stopPublishing
    };
    return marshal;
};
var canStartDrag = (state, id)=>{
    if (state.phase === 'IDLE') {
        return true;
    }
    if (state.phase !== 'DROP_ANIMATING') {
        return false;
    }
    if (state.completed.result.draggableId === id) {
        return false;
    }
    return state.completed.result.reason === 'DROP';
};
var scrollWindow = (change)=>{
    window.scrollBy(change.x, change.y);
};
const getScrollableDroppables = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$memoize$2d$one$2f$dist$2f$memoize$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])((droppables)=>toDroppableList(droppables).filter((droppable)=>{
        if (!droppable.isEnabled) {
            return false;
        }
        if (!droppable.frame) {
            return false;
        }
        return true;
    }));
const getScrollableDroppableOver = (target, droppables)=>{
    const maybe = getScrollableDroppables(droppables).find((droppable)=>{
        !droppable.frame ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Invalid result') : ("TURBOPACK unreachable", undefined) : void 0;
        return isPositionInFrame(droppable.frame.pageMarginBox)(target);
    }) || null;
    return maybe;
};
var getBestScrollableDroppable = ({ center, destination, droppables })=>{
    if (destination) {
        const dimension = droppables[destination];
        if (!dimension.frame) {
            return null;
        }
        return dimension;
    }
    const dimension = getScrollableDroppableOver(center, droppables);
    return dimension;
};
const defaultAutoScrollerOptions = {
    startFromPercentage: 0.25,
    maxScrollAtPercentage: 0.05,
    maxPixelScroll: 28,
    ease: (percentage)=>percentage ** 2,
    durationDampening: {
        stopDampeningAt: 1200,
        accelerateAt: 360
    },
    disabled: false
};
var getDistanceThresholds = (container, axis, getAutoScrollerOptions = ()=>defaultAutoScrollerOptions)=>{
    const autoScrollerOptions = getAutoScrollerOptions();
    const startScrollingFrom = container[axis.size] * autoScrollerOptions.startFromPercentage;
    const maxScrollValueAt = container[axis.size] * autoScrollerOptions.maxScrollAtPercentage;
    const thresholds = {
        startScrollingFrom,
        maxScrollValueAt
    };
    return thresholds;
};
var getPercentage = ({ startOfRange, endOfRange, current })=>{
    const range = endOfRange - startOfRange;
    if (range === 0) {
        ("TURBOPACK compile-time truthy", 1) ? warning(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `) : ("TURBOPACK unreachable", undefined);
        return 0;
    }
    const currentInRange = current - startOfRange;
    const percentage = currentInRange / range;
    return percentage;
};
var minScroll = 1;
var getValueFromDistance = (distanceToEdge, thresholds, getAutoScrollerOptions = ()=>defaultAutoScrollerOptions)=>{
    const autoScrollerOptions = getAutoScrollerOptions();
    if (distanceToEdge > thresholds.startScrollingFrom) {
        return 0;
    }
    if (distanceToEdge <= thresholds.maxScrollValueAt) {
        return autoScrollerOptions.maxPixelScroll;
    }
    if (distanceToEdge === thresholds.startScrollingFrom) {
        return minScroll;
    }
    const percentageFromMaxScrollValueAt = getPercentage({
        startOfRange: thresholds.maxScrollValueAt,
        endOfRange: thresholds.startScrollingFrom,
        current: distanceToEdge
    });
    const percentageFromStartScrollingFrom = 1 - percentageFromMaxScrollValueAt;
    const scroll = autoScrollerOptions.maxPixelScroll * autoScrollerOptions.ease(percentageFromStartScrollingFrom);
    return Math.ceil(scroll);
};
var dampenValueByTime = (proposedScroll, dragStartTime, getAutoScrollerOptions)=>{
    const autoScrollerOptions = getAutoScrollerOptions();
    const accelerateAt = autoScrollerOptions.durationDampening.accelerateAt;
    const stopAt = autoScrollerOptions.durationDampening.stopDampeningAt;
    const startOfRange = dragStartTime;
    const endOfRange = stopAt;
    const now = Date.now();
    const runTime = now - startOfRange;
    if (runTime >= stopAt) {
        return proposedScroll;
    }
    if (runTime < accelerateAt) {
        return minScroll;
    }
    const betweenAccelerateAtAndStopAtPercentage = getPercentage({
        startOfRange: accelerateAt,
        endOfRange,
        current: runTime
    });
    const scroll = proposedScroll * autoScrollerOptions.ease(betweenAccelerateAtAndStopAtPercentage);
    return Math.ceil(scroll);
};
var getValue = ({ distanceToEdge, thresholds, dragStartTime, shouldUseTimeDampening, getAutoScrollerOptions })=>{
    const scroll = getValueFromDistance(distanceToEdge, thresholds, getAutoScrollerOptions);
    if (scroll === 0) {
        return 0;
    }
    if (!shouldUseTimeDampening) {
        return scroll;
    }
    return Math.max(dampenValueByTime(scroll, dragStartTime, getAutoScrollerOptions), minScroll);
};
var getScrollOnAxis = ({ container, distanceToEdges, dragStartTime, axis, shouldUseTimeDampening, getAutoScrollerOptions })=>{
    const thresholds = getDistanceThresholds(container, axis, getAutoScrollerOptions);
    const isCloserToEnd = distanceToEdges[axis.end] < distanceToEdges[axis.start];
    if (isCloserToEnd) {
        return getValue({
            distanceToEdge: distanceToEdges[axis.end],
            thresholds,
            dragStartTime,
            shouldUseTimeDampening,
            getAutoScrollerOptions
        });
    }
    return -1 * getValue({
        distanceToEdge: distanceToEdges[axis.start],
        thresholds,
        dragStartTime,
        shouldUseTimeDampening,
        getAutoScrollerOptions
    });
};
var adjustForSizeLimits = ({ container, subject, proposedScroll })=>{
    const isTooBigVertically = subject.height > container.height;
    const isTooBigHorizontally = subject.width > container.width;
    if (!isTooBigHorizontally && !isTooBigVertically) {
        return proposedScroll;
    }
    if (isTooBigHorizontally && isTooBigVertically) {
        return null;
    }
    return {
        x: isTooBigHorizontally ? 0 : proposedScroll.x,
        y: isTooBigVertically ? 0 : proposedScroll.y
    };
};
const clean = apply((value)=>value === 0 ? 0 : value);
var getScroll$1 = ({ dragStartTime, container, subject, center, shouldUseTimeDampening, getAutoScrollerOptions })=>{
    const distanceToEdges = {
        top: center.y - container.top,
        right: container.right - center.x,
        bottom: container.bottom - center.y,
        left: center.x - container.left
    };
    const y = getScrollOnAxis({
        container,
        distanceToEdges,
        dragStartTime,
        axis: vertical,
        shouldUseTimeDampening,
        getAutoScrollerOptions
    });
    const x = getScrollOnAxis({
        container,
        distanceToEdges,
        dragStartTime,
        axis: horizontal,
        shouldUseTimeDampening,
        getAutoScrollerOptions
    });
    const required = clean({
        x,
        y
    });
    if (isEqual$1(required, origin)) {
        return null;
    }
    const limited = adjustForSizeLimits({
        container,
        subject,
        proposedScroll: required
    });
    if (!limited) {
        return null;
    }
    return isEqual$1(limited, origin) ? null : limited;
};
const smallestSigned = apply((value)=>{
    if (value === 0) {
        return 0;
    }
    return value > 0 ? 1 : -1;
});
const getOverlap = (()=>{
    const getRemainder = (target, max)=>{
        if (target < 0) {
            return target;
        }
        if (target > max) {
            return target - max;
        }
        return 0;
    };
    return ({ current, max, change })=>{
        const targetScroll = add(current, change);
        const overlap = {
            x: getRemainder(targetScroll.x, max.x),
            y: getRemainder(targetScroll.y, max.y)
        };
        if (isEqual$1(overlap, origin)) {
            return null;
        }
        return overlap;
    };
})();
const canPartiallyScroll = ({ max: rawMax, current, change })=>{
    const max = {
        x: Math.max(current.x, rawMax.x),
        y: Math.max(current.y, rawMax.y)
    };
    const smallestChange = smallestSigned(change);
    const overlap = getOverlap({
        max,
        current,
        change: smallestChange
    });
    if (!overlap) {
        return true;
    }
    if (smallestChange.x !== 0 && overlap.x === 0) {
        return true;
    }
    if (smallestChange.y !== 0 && overlap.y === 0) {
        return true;
    }
    return false;
};
const canScrollWindow = (viewport, change)=>canPartiallyScroll({
        current: viewport.scroll.current,
        max: viewport.scroll.max,
        change
    });
const getWindowOverlap = (viewport, change)=>{
    if (!canScrollWindow(viewport, change)) {
        return null;
    }
    const max = viewport.scroll.max;
    const current = viewport.scroll.current;
    return getOverlap({
        current,
        max,
        change
    });
};
const canScrollDroppable = (droppable, change)=>{
    const frame = droppable.frame;
    if (!frame) {
        return false;
    }
    return canPartiallyScroll({
        current: frame.scroll.current,
        max: frame.scroll.max,
        change
    });
};
const getDroppableOverlap = (droppable, change)=>{
    const frame = droppable.frame;
    if (!frame) {
        return null;
    }
    if (!canScrollDroppable(droppable, change)) {
        return null;
    }
    return getOverlap({
        current: frame.scroll.current,
        max: frame.scroll.max,
        change
    });
};
var getWindowScrollChange = ({ viewport, subject, center, dragStartTime, shouldUseTimeDampening, getAutoScrollerOptions })=>{
    const scroll = getScroll$1({
        dragStartTime,
        container: viewport.frame,
        subject,
        center,
        shouldUseTimeDampening,
        getAutoScrollerOptions
    });
    return scroll && canScrollWindow(viewport, scroll) ? scroll : null;
};
var getDroppableScrollChange = ({ droppable, subject, center, dragStartTime, shouldUseTimeDampening, getAutoScrollerOptions })=>{
    const frame = droppable.frame;
    if (!frame) {
        return null;
    }
    const scroll = getScroll$1({
        dragStartTime,
        container: frame.pageMarginBox,
        subject,
        center,
        shouldUseTimeDampening,
        getAutoScrollerOptions
    });
    return scroll && canScrollDroppable(droppable, scroll) ? scroll : null;
};
var scroll = ({ state, dragStartTime, shouldUseTimeDampening, scrollWindow, scrollDroppable, getAutoScrollerOptions })=>{
    const center = state.current.page.borderBoxCenter;
    const draggable = state.dimensions.draggables[state.critical.draggable.id];
    const subject = draggable.page.marginBox;
    if (state.isWindowScrollAllowed) {
        const viewport = state.viewport;
        const change = getWindowScrollChange({
            dragStartTime,
            viewport,
            subject,
            center,
            shouldUseTimeDampening,
            getAutoScrollerOptions
        });
        if (change) {
            scrollWindow(change);
            return;
        }
    }
    const droppable = getBestScrollableDroppable({
        center,
        destination: whatIsDraggedOver(state.impact),
        droppables: state.dimensions.droppables
    });
    if (!droppable) {
        return;
    }
    const change = getDroppableScrollChange({
        dragStartTime,
        droppable,
        subject,
        center,
        shouldUseTimeDampening,
        getAutoScrollerOptions
    });
    if (change) {
        scrollDroppable(droppable.descriptor.id, change);
    }
};
var createFluidScroller = ({ scrollWindow, scrollDroppable, getAutoScrollerOptions = ()=>defaultAutoScrollerOptions })=>{
    const scheduleWindowScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$raf$2d$schd$2f$dist$2f$raf$2d$schd$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(scrollWindow);
    const scheduleDroppableScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$raf$2d$schd$2f$dist$2f$raf$2d$schd$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(scrollDroppable);
    let dragging = null;
    const tryScroll = (state)=>{
        !dragging ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Cannot fluid scroll if not dragging') : ("TURBOPACK unreachable", undefined) : void 0;
        const { shouldUseTimeDampening, dragStartTime } = dragging;
        scroll({
            state,
            scrollWindow: scheduleWindowScroll,
            scrollDroppable: scheduleDroppableScroll,
            dragStartTime,
            shouldUseTimeDampening,
            getAutoScrollerOptions
        });
    };
    const start$1 = (state)=>{
        start();
        !!dragging ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Cannot start auto scrolling when already started') : ("TURBOPACK unreachable", undefined) : void 0;
        const dragStartTime = Date.now();
        let wasScrollNeeded = false;
        const fakeScrollCallback = ()=>{
            wasScrollNeeded = true;
        };
        scroll({
            state,
            dragStartTime: 0,
            shouldUseTimeDampening: false,
            scrollWindow: fakeScrollCallback,
            scrollDroppable: fakeScrollCallback,
            getAutoScrollerOptions
        });
        dragging = {
            dragStartTime,
            shouldUseTimeDampening: wasScrollNeeded
        };
        finish();
        if (wasScrollNeeded) {
            tryScroll(state);
        }
    };
    const stop = ()=>{
        if (!dragging) {
            return;
        }
        scheduleWindowScroll.cancel();
        scheduleDroppableScroll.cancel();
        dragging = null;
    };
    return {
        start: start$1,
        stop,
        scroll: tryScroll
    };
};
var createJumpScroller = ({ move, scrollDroppable, scrollWindow })=>{
    const moveByOffset = (state, offset)=>{
        const client = add(state.current.client.selection, offset);
        move({
            client
        });
    };
    const scrollDroppableAsMuchAsItCan = (droppable, change)=>{
        if (!canScrollDroppable(droppable, change)) {
            return change;
        }
        const overlap = getDroppableOverlap(droppable, change);
        if (!overlap) {
            scrollDroppable(droppable.descriptor.id, change);
            return null;
        }
        const whatTheDroppableCanScroll = subtract(change, overlap);
        scrollDroppable(droppable.descriptor.id, whatTheDroppableCanScroll);
        const remainder = subtract(change, whatTheDroppableCanScroll);
        return remainder;
    };
    const scrollWindowAsMuchAsItCan = (isWindowScrollAllowed, viewport, change)=>{
        if (!isWindowScrollAllowed) {
            return change;
        }
        if (!canScrollWindow(viewport, change)) {
            return change;
        }
        const overlap = getWindowOverlap(viewport, change);
        if (!overlap) {
            scrollWindow(change);
            return null;
        }
        const whatTheWindowCanScroll = subtract(change, overlap);
        scrollWindow(whatTheWindowCanScroll);
        const remainder = subtract(change, whatTheWindowCanScroll);
        return remainder;
    };
    const jumpScroller = (state)=>{
        const request = state.scrollJumpRequest;
        if (!request) {
            return;
        }
        const destination = whatIsDraggedOver(state.impact);
        !destination ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Cannot perform a jump scroll when there is no destination') : ("TURBOPACK unreachable", undefined) : void 0;
        const droppableRemainder = scrollDroppableAsMuchAsItCan(state.dimensions.droppables[destination], request);
        if (!droppableRemainder) {
            return;
        }
        const viewport = state.viewport;
        const windowRemainder = scrollWindowAsMuchAsItCan(state.isWindowScrollAllowed, viewport, droppableRemainder);
        if (!windowRemainder) {
            return;
        }
        moveByOffset(state, windowRemainder);
    };
    return jumpScroller;
};
var createAutoScroller = ({ scrollDroppable, scrollWindow, move, getAutoScrollerOptions })=>{
    const fluidScroller = createFluidScroller({
        scrollWindow,
        scrollDroppable,
        getAutoScrollerOptions
    });
    const jumpScroll = createJumpScroller({
        move,
        scrollWindow,
        scrollDroppable
    });
    const scroll = (state)=>{
        const autoScrollerOptions = getAutoScrollerOptions();
        if (autoScrollerOptions.disabled || state.phase !== 'DRAGGING') {
            return;
        }
        if (state.movementMode === 'FLUID') {
            fluidScroller.scroll(state);
            return;
        }
        if (!state.scrollJumpRequest) {
            return;
        }
        jumpScroll(state);
    };
    const scroller = {
        scroll,
        start: fluidScroller.start,
        stop: fluidScroller.stop
    };
    return scroller;
};
const prefix = 'data-rfd';
const dragHandle = (()=>{
    const base = `${prefix}-drag-handle`;
    return {
        base,
        draggableId: `${base}-draggable-id`,
        contextId: `${base}-context-id`
    };
})();
const draggable = (()=>{
    const base = `${prefix}-draggable`;
    return {
        base,
        contextId: `${base}-context-id`,
        id: `${base}-id`
    };
})();
const droppable = (()=>{
    const base = `${prefix}-droppable`;
    return {
        base,
        contextId: `${base}-context-id`,
        id: `${base}-id`
    };
})();
const scrollContainer = {
    contextId: `${prefix}-scroll-container-context-id`
};
const makeGetSelector = (context)=>(attribute)=>`[${attribute}="${context}"]`;
const getStyles = (rules, property)=>rules.map((rule)=>{
        const value = rule.styles[property];
        if (!value) {
            return '';
        }
        return `${rule.selector} { ${value} }`;
    }).join(' ');
const noPointerEvents = 'pointer-events: none;';
var getStyles$1 = (contextId)=>{
    const getSelector = makeGetSelector(contextId);
    const dragHandle$1 = (()=>{
        const grabCursor = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
        return {
            selector: getSelector(dragHandle.contextId),
            styles: {
                always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
                resting: grabCursor,
                dragging: noPointerEvents,
                dropAnimating: grabCursor
            }
        };
    })();
    const draggable$1 = (()=>{
        const transition = `
      transition: ${transitions.outOfTheWay};
    `;
        return {
            selector: getSelector(draggable.contextId),
            styles: {
                dragging: transition,
                dropAnimating: transition,
                userCancel: transition
            }
        };
    })();
    const droppable$1 = {
        selector: getSelector(droppable.contextId),
        styles: {
            always: `overflow-anchor: none;`
        }
    };
    const body = {
        selector: 'body',
        styles: {
            dragging: `
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `
        }
    };
    const rules = [
        draggable$1,
        dragHandle$1,
        droppable$1,
        body
    ];
    return {
        always: getStyles(rules, 'always'),
        resting: getStyles(rules, 'resting'),
        dragging: getStyles(rules, 'dragging'),
        dropAnimating: getStyles(rules, 'dropAnimating'),
        userCancel: getStyles(rules, 'userCancel')
    };
};
const useIsomorphicLayoutEffect = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"];
const getHead = ()=>{
    const head = document.querySelector('head');
    !head ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Cannot find the head to append a style to') : ("TURBOPACK unreachable", undefined) : void 0;
    return head;
};
const createStyleEl = (nonce)=>{
    const el = document.createElement('style');
    if (nonce) {
        el.setAttribute('nonce', nonce);
    }
    el.type = 'text/css';
    return el;
};
function useStyleMarshal(contextId, nonce) {
    const styles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>getStyles$1(contextId), [
        contextId
    ]);
    const alwaysRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dynamicRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(null);
    const setDynamicStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$memoize$2d$one$2f$dist$2f$memoize$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])((proposed)=>{
        const el = dynamicRef.current;
        !el ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Cannot set dynamic style element if it is not set') : ("TURBOPACK unreachable", undefined) : void 0;
        el.textContent = proposed;
    }), []);
    const setAlwaysStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])((proposed)=>{
        const el = alwaysRef.current;
        !el ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Cannot set dynamic style element if it is not set') : ("TURBOPACK unreachable", undefined) : void 0;
        el.textContent = proposed;
    }, []);
    useIsomorphicLayoutEffect(()=>{
        !(!alwaysRef.current && !dynamicRef.current) ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'style elements already mounted') : ("TURBOPACK unreachable", undefined) : void 0;
        const always = createStyleEl(nonce);
        const dynamic = createStyleEl(nonce);
        alwaysRef.current = always;
        dynamicRef.current = dynamic;
        always.setAttribute(`${prefix}-always`, contextId);
        dynamic.setAttribute(`${prefix}-dynamic`, contextId);
        getHead().appendChild(always);
        getHead().appendChild(dynamic);
        setAlwaysStyle(styles.always);
        setDynamicStyle(styles.resting);
        return ()=>{
            const remove = (ref)=>{
                const current = ref.current;
                !current ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Cannot unmount ref as it is not set') : ("TURBOPACK unreachable", undefined) : void 0;
                getHead().removeChild(current);
                ref.current = null;
            };
            remove(alwaysRef);
            remove(dynamicRef);
        };
    }, [
        nonce,
        setAlwaysStyle,
        setDynamicStyle,
        styles.always,
        styles.resting,
        contextId
    ]);
    const dragging = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(()=>setDynamicStyle(styles.dragging), [
        setDynamicStyle,
        styles.dragging
    ]);
    const dropping = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])((reason)=>{
        if (reason === 'DROP') {
            setDynamicStyle(styles.dropAnimating);
            return;
        }
        setDynamicStyle(styles.userCancel);
    }, [
        setDynamicStyle,
        styles.dropAnimating,
        styles.userCancel
    ]);
    const resting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!dynamicRef.current) {
            return;
        }
        setDynamicStyle(styles.resting);
    }, [
        setDynamicStyle,
        styles.resting
    ]);
    const marshal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            dragging,
            dropping,
            resting
        }), [
        dragging,
        dropping,
        resting
    ]);
    return marshal;
}
function querySelectorAll(parentNode, selector) {
    return Array.from(parentNode.querySelectorAll(selector));
}
var getWindowFromEl = (el)=>{
    if (el && el.ownerDocument && el.ownerDocument.defaultView) {
        return el.ownerDocument.defaultView;
    }
    return window;
};
function isHtmlElement(el) {
    return el instanceof getWindowFromEl(el).HTMLElement;
}
function findDragHandle(contextId, draggableId) {
    const selector = `[${dragHandle.contextId}="${contextId}"]`;
    const possible = querySelectorAll(document, selector);
    if (!possible.length) {
        ("TURBOPACK compile-time truthy", 1) ? warning(`Unable to find any drag handles in the context "${contextId}"`) : ("TURBOPACK unreachable", undefined);
        return null;
    }
    const handle = possible.find((el)=>{
        return el.getAttribute(dragHandle.draggableId) === draggableId;
    });
    if (!handle) {
        ("TURBOPACK compile-time truthy", 1) ? warning(`Unable to find drag handle with id "${draggableId}" as no handle with a matching id was found`) : ("TURBOPACK unreachable", undefined);
        return null;
    }
    if (!isHtmlElement(handle)) {
        ("TURBOPACK compile-time truthy", 1) ? warning('drag handle needs to be a HTMLElement') : ("TURBOPACK unreachable", undefined);
        return null;
    }
    return handle;
}
function useFocusMarshal(contextId) {
    const entriesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])({});
    const recordRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(null);
    const restoreFocusFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isMountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(false);
    const register = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function register(id, focus) {
        const entry = {
            id,
            focus
        };
        entriesRef.current[id] = entry;
        return function unregister() {
            const entries = entriesRef.current;
            const current = entries[id];
            if (current !== entry) {
                delete entries[id];
            }
        };
    }, []);
    const tryGiveFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function tryGiveFocus(tryGiveFocusTo) {
        const handle = findDragHandle(contextId, tryGiveFocusTo);
        if (handle && handle !== document.activeElement) {
            handle.focus();
        }
    }, [
        contextId
    ]);
    const tryShiftRecord = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function tryShiftRecord(previous, redirectTo) {
        if (recordRef.current === previous) {
            recordRef.current = redirectTo;
        }
    }, []);
    const tryRestoreFocusRecorded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function tryRestoreFocusRecorded() {
        if (restoreFocusFrameRef.current) {
            return;
        }
        if (!isMountedRef.current) {
            return;
        }
        restoreFocusFrameRef.current = requestAnimationFrame(()=>{
            restoreFocusFrameRef.current = null;
            const record = recordRef.current;
            if (record) {
                tryGiveFocus(record);
            }
        });
    }, [
        tryGiveFocus
    ]);
    const tryRecordFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function tryRecordFocus(id) {
        recordRef.current = null;
        const focused = document.activeElement;
        if (!focused) {
            return;
        }
        if (focused.getAttribute(dragHandle.draggableId) !== id) {
            return;
        }
        recordRef.current = id;
    }, []);
    useIsomorphicLayoutEffect(()=>{
        isMountedRef.current = true;
        return function clearFrameOnUnmount() {
            isMountedRef.current = false;
            const frameId = restoreFocusFrameRef.current;
            if (frameId) {
                cancelAnimationFrame(frameId);
            }
        };
    }, []);
    const marshal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            register,
            tryRecordFocus,
            tryRestoreFocusRecorded,
            tryShiftRecord
        }), [
        register,
        tryRecordFocus,
        tryRestoreFocusRecorded,
        tryShiftRecord
    ]);
    return marshal;
}
function createRegistry() {
    const entries = {
        draggables: {},
        droppables: {}
    };
    const subscribers = [];
    function subscribe(cb) {
        subscribers.push(cb);
        return function unsubscribe() {
            const index = subscribers.indexOf(cb);
            if (index === -1) {
                return;
            }
            subscribers.splice(index, 1);
        };
    }
    function notify(event) {
        if (subscribers.length) {
            subscribers.forEach((cb)=>cb(event));
        }
    }
    function findDraggableById(id) {
        return entries.draggables[id] || null;
    }
    function getDraggableById(id) {
        const entry = findDraggableById(id);
        !entry ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, `Cannot find draggable entry with id [${id}]`) : ("TURBOPACK unreachable", undefined) : void 0;
        return entry;
    }
    const draggableAPI = {
        register: (entry)=>{
            entries.draggables[entry.descriptor.id] = entry;
            notify({
                type: 'ADDITION',
                value: entry
            });
        },
        update: (entry, last)=>{
            const current = entries.draggables[last.descriptor.id];
            if (!current) {
                return;
            }
            if (current.uniqueId !== entry.uniqueId) {
                return;
            }
            delete entries.draggables[last.descriptor.id];
            entries.draggables[entry.descriptor.id] = entry;
        },
        unregister: (entry)=>{
            const draggableId = entry.descriptor.id;
            const current = findDraggableById(draggableId);
            if (!current) {
                return;
            }
            if (entry.uniqueId !== current.uniqueId) {
                return;
            }
            delete entries.draggables[draggableId];
            if (entries.droppables[entry.descriptor.droppableId]) {
                notify({
                    type: 'REMOVAL',
                    value: entry
                });
            }
        },
        getById: getDraggableById,
        findById: findDraggableById,
        exists: (id)=>Boolean(findDraggableById(id)),
        getAllByType: (type)=>Object.values(entries.draggables).filter((entry)=>entry.descriptor.type === type)
    };
    function findDroppableById(id) {
        return entries.droppables[id] || null;
    }
    function getDroppableById(id) {
        const entry = findDroppableById(id);
        !entry ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, `Cannot find droppable entry with id [${id}]`) : ("TURBOPACK unreachable", undefined) : void 0;
        return entry;
    }
    const droppableAPI = {
        register: (entry)=>{
            entries.droppables[entry.descriptor.id] = entry;
        },
        unregister: (entry)=>{
            const current = findDroppableById(entry.descriptor.id);
            if (!current) {
                return;
            }
            if (entry.uniqueId !== current.uniqueId) {
                return;
            }
            delete entries.droppables[entry.descriptor.id];
        },
        getById: getDroppableById,
        findById: findDroppableById,
        exists: (id)=>Boolean(findDroppableById(id)),
        getAllByType: (type)=>Object.values(entries.droppables).filter((entry)=>entry.descriptor.type === type)
    };
    function clean() {
        entries.draggables = {};
        entries.droppables = {};
        subscribers.length = 0;
    }
    return {
        draggable: draggableAPI,
        droppable: droppableAPI,
        subscribe,
        clean
    };
}
function useRegistry() {
    const registry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(createRegistry, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return function unmount() {
            registry.clean();
        };
    }, [
        registry
    ]);
    return registry;
}
var StoreContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createContext(null);
var getBodyElement = ()=>{
    const body = document.body;
    !body ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Cannot find document.body') : ("TURBOPACK unreachable", undefined) : void 0;
    return body;
};
const visuallyHidden = {
    position: 'absolute',
    width: '1px',
    height: '1px',
    margin: '-1px',
    border: '0',
    padding: '0',
    overflow: 'hidden',
    clip: 'rect(0 0 0 0)',
    'clip-path': 'inset(100%)'
};
const getId = (contextId)=>`rfd-announcement-${contextId}`;
function useAnnouncer(contextId) {
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>getId(contextId), [
        contextId
    ]);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(function setup() {
        const el = document.createElement('div');
        ref.current = el;
        el.id = id;
        el.setAttribute('aria-live', 'assertive');
        el.setAttribute('aria-atomic', 'true');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(el.style, visuallyHidden);
        getBodyElement().appendChild(el);
        return function cleanup() {
            setTimeout(function remove() {
                const body = getBodyElement();
                if (body.contains(el)) {
                    body.removeChild(el);
                }
                if (el === ref.current) {
                    ref.current = null;
                }
            });
        };
    }, [
        id
    ]);
    const announce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])((message)=>{
        const el = ref.current;
        if (el) {
            el.textContent = message;
            return;
        }
        ("TURBOPACK compile-time truthy", 1) ? warning(`
      A screen reader message was trying to be announced but it was unable to do so.
      This can occur if you unmount your <DragDropContext /> in your onDragEnd.
      Consider calling provided.announce() before the unmount so that the instruction will
      not be lost for users relying on a screen reader.

      Message not passed to screen reader:

      "${message}"
    `) : ("TURBOPACK unreachable", undefined);
    }, []);
    return announce;
}
const defaults = {
    separator: '::'
};
function useUniqueId(prefix, options = defaults) {
    const id = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].useId();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>`${prefix}${options.separator}${id}`, [
        options.separator,
        prefix,
        id
    ]);
}
function getElementId({ contextId, uniqueId }) {
    return `rfd-hidden-text-${contextId}-${uniqueId}`;
}
function useHiddenTextElement({ contextId, text }) {
    const uniqueId = useUniqueId('hidden-text', {
        separator: '-'
    });
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>getElementId({
            contextId,
            uniqueId
        }), [
        uniqueId,
        contextId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(function mount() {
        const el = document.createElement('div');
        el.id = id;
        el.textContent = text;
        el.style.display = 'none';
        getBodyElement().appendChild(el);
        return function unmount() {
            const body = getBodyElement();
            if (body.contains(el)) {
                body.removeChild(el);
            }
        };
    }, [
        id,
        text
    ]);
    return id;
}
var AppContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createContext(null);
var peerDependencies = {
    react: "^18.0.0",
    "react-dom": "^18.0.0"
};
const semver = /(\d+)\.(\d+)\.(\d+)/;
const getVersion = (value)=>{
    const result = semver.exec(value);
    !(result != null) ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, `Unable to parse React version ${value}`) : ("TURBOPACK unreachable", undefined) : void 0;
    const major = Number(result[1]);
    const minor = Number(result[2]);
    const patch = Number(result[3]);
    return {
        major,
        minor,
        patch,
        raw: value
    };
};
const isSatisfied = (expected, actual)=>{
    if (actual.major > expected.major) {
        return true;
    }
    if (actual.major < expected.major) {
        return false;
    }
    if (actual.minor > expected.minor) {
        return true;
    }
    if (actual.minor < expected.minor) {
        return false;
    }
    return actual.patch >= expected.patch;
};
var checkReactVersion = (peerDepValue, actualValue)=>{
    const peerDep = getVersion(peerDepValue);
    const actual = getVersion(actualValue);
    if (isSatisfied(peerDep, actual)) {
        return;
    }
    ("TURBOPACK compile-time truthy", 1) ? warning(`
    React version: [${actual.raw}]
    does not satisfy expected peer dependency version: [${peerDep.raw}]

    This can result in run time bugs, and even fatal crashes
  `) : ("TURBOPACK unreachable", undefined);
};
const suffix = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var checkDoctype = (doc)=>{
    const doctype = doc.doctype;
    if (!doctype) {
        ("TURBOPACK compile-time truthy", 1) ? warning(`
      No <!doctype html> found.

      ${suffix}
    `) : ("TURBOPACK unreachable", undefined);
        return;
    }
    if (doctype.name.toLowerCase() !== 'html') {
        ("TURBOPACK compile-time truthy", 1) ? warning(`
      Unexpected <!doctype> found: (${doctype.name})

      ${suffix}
    `) : ("TURBOPACK unreachable", undefined);
    }
    if (doctype.publicId !== '') {
        ("TURBOPACK compile-time truthy", 1) ? warning(`
      Unexpected <!doctype> publicId found: (${doctype.publicId})
      A html5 doctype does not have a publicId

      ${suffix}
    `) : ("TURBOPACK unreachable", undefined);
    }
};
function useDev(useHook) {
    if ("TURBOPACK compile-time truthy", 1) {
        useHook();
    }
}
function useDevSetupWarning(fn, inputs) {
    useDev(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
            try {
                fn();
            } catch (e) {
                error(`
          A setup problem was encountered.

          > ${e.message}
        `);
            }
        }, inputs);
    });
}
function useStartupValidation() {
    useDevSetupWarning(()=>{
        checkReactVersion(peerDependencies.react, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].version);
        checkDoctype(document);
    }, []);
}
function usePrevious(current) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(current);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        ref.current = current;
    });
    return ref;
}
function create() {
    let lock = null;
    function isClaimed() {
        return Boolean(lock);
    }
    function isActive(value) {
        return value === lock;
    }
    function claim(abandon) {
        !!lock ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Cannot claim lock as it is already claimed') : ("TURBOPACK unreachable", undefined) : void 0;
        const newLock = {
            abandon
        };
        lock = newLock;
        return newLock;
    }
    function release() {
        !lock ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Cannot release lock when there is no lock') : ("TURBOPACK unreachable", undefined) : void 0;
        lock = null;
    }
    function tryAbandon() {
        if (lock) {
            lock.abandon();
            release();
        }
    }
    return {
        isClaimed,
        isActive,
        claim,
        release,
        tryAbandon
    };
}
function isDragging(state) {
    if (state.phase === 'IDLE' || state.phase === 'DROP_ANIMATING') {
        return false;
    }
    return state.isDragging;
}
const tab = 9;
const enter = 13;
const escape = 27;
const space = 32;
const pageUp = 33;
const pageDown = 34;
const end = 35;
const home = 36;
const arrowLeft = 37;
const arrowUp = 38;
const arrowRight = 39;
const arrowDown = 40;
const preventedKeys = {
    [enter]: true,
    [tab]: true
};
var preventStandardKeyEvents = (event)=>{
    if (preventedKeys[event.keyCode]) {
        event.preventDefault();
    }
};
const supportedEventName = (()=>{
    const base = 'visibilitychange';
    if (typeof document === 'undefined') {
        return base;
    }
    const candidates = [
        base,
        `ms${base}`,
        `webkit${base}`,
        `moz${base}`,
        `o${base}`
    ];
    const supported = candidates.find((eventName)=>`on${eventName}` in document);
    return supported || base;
})();
const primaryButton = 0;
const sloppyClickThreshold = 5;
function isSloppyClickThresholdExceeded(original, current) {
    return Math.abs(current.x - original.x) >= sloppyClickThreshold || Math.abs(current.y - original.y) >= sloppyClickThreshold;
}
const idle$1 = {
    type: 'IDLE'
};
function getCaptureBindings({ cancel, completed, getPhase, setPhase }) {
    return [
        {
            eventName: 'mousemove',
            fn: (event)=>{
                const { button, clientX, clientY } = event;
                if (button !== primaryButton) {
                    return;
                }
                const point = {
                    x: clientX,
                    y: clientY
                };
                const phase = getPhase();
                if (phase.type === 'DRAGGING') {
                    event.preventDefault();
                    phase.actions.move(point);
                    return;
                }
                !(phase.type === 'PENDING') ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Cannot be IDLE') : ("TURBOPACK unreachable", undefined) : void 0;
                const pending = phase.point;
                if (!isSloppyClickThresholdExceeded(pending, point)) {
                    return;
                }
                event.preventDefault();
                const actions = phase.actions.fluidLift(point);
                setPhase({
                    type: 'DRAGGING',
                    actions
                });
            }
        },
        {
            eventName: 'mouseup',
            fn: (event)=>{
                const phase = getPhase();
                if (phase.type !== 'DRAGGING') {
                    cancel();
                    return;
                }
                event.preventDefault();
                phase.actions.drop({
                    shouldBlockNextClick: true
                });
                completed();
            }
        },
        {
            eventName: 'mousedown',
            fn: (event)=>{
                if (getPhase().type === 'DRAGGING') {
                    event.preventDefault();
                }
                cancel();
            }
        },
        {
            eventName: 'keydown',
            fn: (event)=>{
                const phase = getPhase();
                if (phase.type === 'PENDING') {
                    cancel();
                    return;
                }
                if (event.keyCode === escape) {
                    event.preventDefault();
                    cancel();
                    return;
                }
                preventStandardKeyEvents(event);
            }
        },
        {
            eventName: 'resize',
            fn: cancel
        },
        {
            eventName: 'scroll',
            options: {
                passive: true,
                capture: false
            },
            fn: ()=>{
                if (getPhase().type === 'PENDING') {
                    cancel();
                }
            }
        },
        {
            eventName: 'webkitmouseforcedown',
            fn: (event)=>{
                const phase = getPhase();
                !(phase.type !== 'IDLE') ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Unexpected phase') : ("TURBOPACK unreachable", undefined) : void 0;
                if (phase.actions.shouldRespectForcePress()) {
                    cancel();
                    return;
                }
                event.preventDefault();
            }
        },
        {
            eventName: supportedEventName,
            fn: cancel
        }
    ];
}
function useMouseSensor(api) {
    const phaseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(idle$1);
    const unbindEventsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(noop$2);
    const startCaptureBinding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            eventName: 'mousedown',
            fn: function onMouseDown(event) {
                if (event.defaultPrevented) {
                    return;
                }
                if (event.button !== primaryButton) {
                    return;
                }
                if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
                    return;
                }
                const draggableId = api.findClosestDraggableId(event);
                if (!draggableId) {
                    return;
                }
                const actions = api.tryGetLock(draggableId, stop, {
                    sourceEvent: event
                });
                if (!actions) {
                    return;
                }
                event.preventDefault();
                const point = {
                    x: event.clientX,
                    y: event.clientY
                };
                unbindEventsRef.current();
                startPendingDrag(actions, point);
            }
        }), [
        api
    ]);
    const preventForcePressBinding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            eventName: 'webkitmouseforcewillbegin',
            fn: (event)=>{
                if (event.defaultPrevented) {
                    return;
                }
                const id = api.findClosestDraggableId(event);
                if (!id) {
                    return;
                }
                const options = api.findOptionsForDraggable(id);
                if (!options) {
                    return;
                }
                if (options.shouldRespectForcePress) {
                    return;
                }
                if (!api.canGetLock(id)) {
                    return;
                }
                event.preventDefault();
            }
        }), [
        api
    ]);
    const listenForCapture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function listenForCapture() {
        const options = {
            passive: false,
            capture: true
        };
        unbindEventsRef.current = bindEvents(window, [
            preventForcePressBinding,
            startCaptureBinding
        ], options);
    }, [
        preventForcePressBinding,
        startCaptureBinding
    ]);
    const stop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const current = phaseRef.current;
        if (current.type === 'IDLE') {
            return;
        }
        phaseRef.current = idle$1;
        unbindEventsRef.current();
        listenForCapture();
    }, [
        listenForCapture
    ]);
    const cancel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const phase = phaseRef.current;
        stop();
        if (phase.type === 'DRAGGING') {
            phase.actions.cancel({
                shouldBlockNextClick: true
            });
        }
        if (phase.type === 'PENDING') {
            phase.actions.abort();
        }
    }, [
        stop
    ]);
    const bindCapturingEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function bindCapturingEvents() {
        const options = {
            capture: true,
            passive: false
        };
        const bindings = getCaptureBindings({
            cancel,
            completed: stop,
            getPhase: ()=>phaseRef.current,
            setPhase: (phase)=>{
                phaseRef.current = phase;
            }
        });
        unbindEventsRef.current = bindEvents(window, bindings, options);
    }, [
        cancel,
        stop
    ]);
    const startPendingDrag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function startPendingDrag(actions, point) {
        !(phaseRef.current.type === 'IDLE') ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Expected to move from IDLE to PENDING drag') : ("TURBOPACK unreachable", undefined) : void 0;
        phaseRef.current = {
            type: 'PENDING',
            point,
            actions
        };
        bindCapturingEvents();
    }, [
        bindCapturingEvents
    ]);
    useIsomorphicLayoutEffect(function mount() {
        listenForCapture();
        return function unmount() {
            unbindEventsRef.current();
        };
    }, [
        listenForCapture
    ]);
}
function noop$1() {}
const scrollJumpKeys = {
    [pageDown]: true,
    [pageUp]: true,
    [home]: true,
    [end]: true
};
function getDraggingBindings(actions, stop) {
    function cancel() {
        stop();
        actions.cancel();
    }
    function drop() {
        stop();
        actions.drop();
    }
    return [
        {
            eventName: 'keydown',
            fn: (event)=>{
                if (event.keyCode === escape) {
                    event.preventDefault();
                    cancel();
                    return;
                }
                if (event.keyCode === space) {
                    event.preventDefault();
                    drop();
                    return;
                }
                if (event.keyCode === arrowDown) {
                    event.preventDefault();
                    actions.moveDown();
                    return;
                }
                if (event.keyCode === arrowUp) {
                    event.preventDefault();
                    actions.moveUp();
                    return;
                }
                if (event.keyCode === arrowRight) {
                    event.preventDefault();
                    actions.moveRight();
                    return;
                }
                if (event.keyCode === arrowLeft) {
                    event.preventDefault();
                    actions.moveLeft();
                    return;
                }
                if (scrollJumpKeys[event.keyCode]) {
                    event.preventDefault();
                    return;
                }
                preventStandardKeyEvents(event);
            }
        },
        {
            eventName: 'mousedown',
            fn: cancel
        },
        {
            eventName: 'mouseup',
            fn: cancel
        },
        {
            eventName: 'click',
            fn: cancel
        },
        {
            eventName: 'touchstart',
            fn: cancel
        },
        {
            eventName: 'resize',
            fn: cancel
        },
        {
            eventName: 'wheel',
            fn: cancel,
            options: {
                passive: true
            }
        },
        {
            eventName: supportedEventName,
            fn: cancel
        }
    ];
}
function useKeyboardSensor(api) {
    const unbindEventsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(noop$1);
    const startCaptureBinding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            eventName: 'keydown',
            fn: function onKeyDown(event) {
                if (event.defaultPrevented) {
                    return;
                }
                if (event.keyCode !== space) {
                    return;
                }
                const draggableId = api.findClosestDraggableId(event);
                if (!draggableId) {
                    return;
                }
                const preDrag = api.tryGetLock(draggableId, stop, {
                    sourceEvent: event
                });
                if (!preDrag) {
                    return;
                }
                event.preventDefault();
                let isCapturing = true;
                const actions = preDrag.snapLift();
                unbindEventsRef.current();
                function stop() {
                    !isCapturing ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Cannot stop capturing a keyboard drag when not capturing') : ("TURBOPACK unreachable", undefined) : void 0;
                    isCapturing = false;
                    unbindEventsRef.current();
                    listenForCapture();
                }
                unbindEventsRef.current = bindEvents(window, getDraggingBindings(actions, stop), {
                    capture: true,
                    passive: false
                });
            }
        }), [
        api
    ]);
    const listenForCapture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function tryStartCapture() {
        const options = {
            passive: false,
            capture: true
        };
        unbindEventsRef.current = bindEvents(window, [
            startCaptureBinding
        ], options);
    }, [
        startCaptureBinding
    ]);
    useIsomorphicLayoutEffect(function mount() {
        listenForCapture();
        return function unmount() {
            unbindEventsRef.current();
        };
    }, [
        listenForCapture
    ]);
}
const idle = {
    type: 'IDLE'
};
const timeForLongPress = 120;
const forcePressThreshold = 0.15;
function getWindowBindings({ cancel, getPhase }) {
    return [
        {
            eventName: 'orientationchange',
            fn: cancel
        },
        {
            eventName: 'resize',
            fn: cancel
        },
        {
            eventName: 'contextmenu',
            fn: (event)=>{
                event.preventDefault();
            }
        },
        {
            eventName: 'keydown',
            fn: (event)=>{
                if (getPhase().type !== 'DRAGGING') {
                    cancel();
                    return;
                }
                if (event.keyCode === escape) {
                    event.preventDefault();
                }
                cancel();
            }
        },
        {
            eventName: supportedEventName,
            fn: cancel
        }
    ];
}
function getHandleBindings({ cancel, completed, getPhase }) {
    return [
        {
            eventName: 'touchmove',
            options: {
                capture: false
            },
            fn: (event)=>{
                const phase = getPhase();
                if (phase.type !== 'DRAGGING') {
                    cancel();
                    return;
                }
                phase.hasMoved = true;
                const { clientX, clientY } = event.touches[0];
                const point = {
                    x: clientX,
                    y: clientY
                };
                event.preventDefault();
                phase.actions.move(point);
            }
        },
        {
            eventName: 'touchend',
            fn: (event)=>{
                const phase = getPhase();
                if (phase.type !== 'DRAGGING') {
                    cancel();
                    return;
                }
                event.preventDefault();
                phase.actions.drop({
                    shouldBlockNextClick: true
                });
                completed();
            }
        },
        {
            eventName: 'touchcancel',
            fn: (event)=>{
                if (getPhase().type !== 'DRAGGING') {
                    cancel();
                    return;
                }
                event.preventDefault();
                cancel();
            }
        },
        {
            eventName: 'touchforcechange',
            fn: (event)=>{
                const phase = getPhase();
                !(phase.type !== 'IDLE') ? ("TURBOPACK compile-time truthy", 1) ? invariant() : ("TURBOPACK unreachable", undefined) : void 0;
                const touch = event.touches[0];
                if (!touch) {
                    return;
                }
                const isForcePress = touch.force >= forcePressThreshold;
                if (!isForcePress) {
                    return;
                }
                const shouldRespect = phase.actions.shouldRespectForcePress();
                if (phase.type === 'PENDING') {
                    if (shouldRespect) {
                        cancel();
                    }
                    return;
                }
                if (shouldRespect) {
                    if (phase.hasMoved) {
                        event.preventDefault();
                        return;
                    }
                    cancel();
                    return;
                }
                event.preventDefault();
            }
        },
        {
            eventName: supportedEventName,
            fn: cancel
        }
    ];
}
function useTouchSensor(api) {
    const phaseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(idle);
    const unbindEventsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(noop$2);
    const getPhase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function getPhase() {
        return phaseRef.current;
    }, []);
    const setPhase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function setPhase(phase) {
        phaseRef.current = phase;
    }, []);
    const startCaptureBinding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            eventName: 'touchstart',
            fn: function onTouchStart(event) {
                if (event.defaultPrevented) {
                    return;
                }
                const draggableId = api.findClosestDraggableId(event);
                if (!draggableId) {
                    return;
                }
                const actions = api.tryGetLock(draggableId, stop, {
                    sourceEvent: event
                });
                if (!actions) {
                    return;
                }
                const touch = event.touches[0];
                const { clientX, clientY } = touch;
                const point = {
                    x: clientX,
                    y: clientY
                };
                unbindEventsRef.current();
                startPendingDrag(actions, point);
            }
        }), [
        api
    ]);
    const listenForCapture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function listenForCapture() {
        const options = {
            capture: true,
            passive: false
        };
        unbindEventsRef.current = bindEvents(window, [
            startCaptureBinding
        ], options);
    }, [
        startCaptureBinding
    ]);
    const stop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const current = phaseRef.current;
        if (current.type === 'IDLE') {
            return;
        }
        if (current.type === 'PENDING') {
            clearTimeout(current.longPressTimerId);
        }
        setPhase(idle);
        unbindEventsRef.current();
        listenForCapture();
    }, [
        listenForCapture,
        setPhase
    ]);
    const cancel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const phase = phaseRef.current;
        stop();
        if (phase.type === 'DRAGGING') {
            phase.actions.cancel({
                shouldBlockNextClick: true
            });
        }
        if (phase.type === 'PENDING') {
            phase.actions.abort();
        }
    }, [
        stop
    ]);
    const bindCapturingEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function bindCapturingEvents() {
        const options = {
            capture: true,
            passive: false
        };
        const args = {
            cancel,
            completed: stop,
            getPhase
        };
        const unbindTarget = bindEvents(window, getHandleBindings(args), options);
        const unbindWindow = bindEvents(window, getWindowBindings(args), options);
        unbindEventsRef.current = function unbindAll() {
            unbindTarget();
            unbindWindow();
        };
    }, [
        cancel,
        getPhase,
        stop
    ]);
    const startDragging = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function startDragging() {
        const phase = getPhase();
        !(phase.type === 'PENDING') ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, `Cannot start dragging from phase ${phase.type}`) : ("TURBOPACK unreachable", undefined) : void 0;
        const actions = phase.actions.fluidLift(phase.point);
        setPhase({
            type: 'DRAGGING',
            actions,
            hasMoved: false
        });
    }, [
        getPhase,
        setPhase
    ]);
    const startPendingDrag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function startPendingDrag(actions, point) {
        !(getPhase().type === 'IDLE') ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Expected to move from IDLE to PENDING drag') : ("TURBOPACK unreachable", undefined) : void 0;
        const longPressTimerId = setTimeout(startDragging, timeForLongPress);
        setPhase({
            type: 'PENDING',
            point,
            actions,
            longPressTimerId
        });
        bindCapturingEvents();
    }, [
        bindCapturingEvents,
        getPhase,
        setPhase,
        startDragging
    ]);
    useIsomorphicLayoutEffect(function mount() {
        listenForCapture();
        return function unmount() {
            unbindEventsRef.current();
            const phase = getPhase();
            if (phase.type === 'PENDING') {
                clearTimeout(phase.longPressTimerId);
                setPhase(idle);
            }
        };
    }, [
        getPhase,
        listenForCapture,
        setPhase
    ]);
    useIsomorphicLayoutEffect(function webkitHack() {
        const unbind = bindEvents(window, [
            {
                eventName: 'touchmove',
                fn: ()=>{},
                options: {
                    capture: false,
                    passive: false
                }
            }
        ]);
        return unbind;
    }, []);
}
function useValidateSensorHooks(sensorHooks) {
    useDev(()=>{
        const previousRef = usePrevious(sensorHooks);
        useDevSetupWarning(()=>{
            !(previousRef.current.length === sensorHooks.length) ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Cannot change the amount of sensor hooks after mounting') : ("TURBOPACK unreachable", undefined) : void 0;
        });
    });
}
const interactiveTagNames = [
    'input',
    'button',
    'textarea',
    'select',
    'option',
    'optgroup',
    'video',
    'audio'
];
function isAnInteractiveElement(parent, current) {
    if (current == null) {
        return false;
    }
    const hasAnInteractiveTag = interactiveTagNames.includes(current.tagName.toLowerCase());
    if (hasAnInteractiveTag) {
        return true;
    }
    const attribute = current.getAttribute('contenteditable');
    if (attribute === 'true' || attribute === '') {
        return true;
    }
    if (current === parent) {
        return false;
    }
    return isAnInteractiveElement(parent, current.parentElement);
}
function isEventInInteractiveElement(draggable, event) {
    const target = event.target;
    if (!isHtmlElement(target)) {
        return false;
    }
    return isAnInteractiveElement(draggable, target);
}
var getBorderBoxCenterPosition = (el)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$box$2d$model$2f$dist$2f$css$2d$box$2d$model$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRect"])(el.getBoundingClientRect()).center;
function isElement(el) {
    return el instanceof getWindowFromEl(el).Element;
}
const supportedMatchesName = (()=>{
    const base = 'matches';
    if (typeof document === 'undefined') {
        return base;
    }
    const candidates = [
        base,
        'msMatchesSelector',
        'webkitMatchesSelector'
    ];
    const value = candidates.find((name)=>name in Element.prototype);
    return value || base;
})();
function closestPonyfill(el, selector) {
    if (el == null) {
        return null;
    }
    if (el[supportedMatchesName](selector)) {
        return el;
    }
    return closestPonyfill(el.parentElement, selector);
}
function closest(el, selector) {
    if (el.closest) {
        return el.closest(selector);
    }
    return closestPonyfill(el, selector);
}
function getSelector(contextId) {
    return `[${dragHandle.contextId}="${contextId}"]`;
}
function findClosestDragHandleFromEvent(contextId, event) {
    const target = event.target;
    if (!isElement(target)) {
        ("TURBOPACK compile-time truthy", 1) ? warning('event.target must be a Element') : ("TURBOPACK unreachable", undefined);
        return null;
    }
    const selector = getSelector(contextId);
    const handle = closest(target, selector);
    if (!handle) {
        return null;
    }
    if (!isHtmlElement(handle)) {
        ("TURBOPACK compile-time truthy", 1) ? warning('drag handle must be a HTMLElement') : ("TURBOPACK unreachable", undefined);
        return null;
    }
    return handle;
}
function tryGetClosestDraggableIdFromEvent(contextId, event) {
    const handle = findClosestDragHandleFromEvent(contextId, event);
    if (!handle) {
        return null;
    }
    return handle.getAttribute(dragHandle.draggableId);
}
function findDraggable(contextId, draggableId) {
    const selector = `[${draggable.contextId}="${contextId}"]`;
    const possible = querySelectorAll(document, selector);
    const draggable$1 = possible.find((el)=>{
        return el.getAttribute(draggable.id) === draggableId;
    });
    if (!draggable$1) {
        return null;
    }
    if (!isHtmlElement(draggable$1)) {
        ("TURBOPACK compile-time truthy", 1) ? warning('Draggable element is not a HTMLElement') : ("TURBOPACK unreachable", undefined);
        return null;
    }
    return draggable$1;
}
function preventDefault(event) {
    event.preventDefault();
}
function isActive({ expected, phase, isLockActive, shouldWarn }) {
    if (!isLockActive()) {
        if (shouldWarn) {
            ("TURBOPACK compile-time truthy", 1) ? warning(`
        Cannot perform action.
        The sensor no longer has an action lock.

        Tips:

        - Throw away your action handlers when forceStop() is called
        - Check actions.isActive() if you really need to
      `) : ("TURBOPACK unreachable", undefined);
        }
        return false;
    }
    if (expected !== phase) {
        if (shouldWarn) {
            ("TURBOPACK compile-time truthy", 1) ? warning(`
        Cannot perform action.
        The actions you used belong to an outdated phase

        Current phase: ${expected}
        You called an action from outdated phase: ${phase}

        Tips:

        - Do not use preDragActions actions after calling preDragActions.lift()
      `) : ("TURBOPACK unreachable", undefined);
        }
        return false;
    }
    return true;
}
function canStart({ lockAPI, store, registry, draggableId }) {
    if (lockAPI.isClaimed()) {
        return false;
    }
    const entry = registry.draggable.findById(draggableId);
    if (!entry) {
        ("TURBOPACK compile-time truthy", 1) ? warning(`Unable to find draggable with id: ${draggableId}`) : ("TURBOPACK unreachable", undefined);
        return false;
    }
    if (!entry.options.isEnabled) {
        return false;
    }
    if (!canStartDrag(store.getState(), draggableId)) {
        return false;
    }
    return true;
}
function tryStart({ lockAPI, contextId, store, registry, draggableId, forceSensorStop, sourceEvent }) {
    const shouldStart = canStart({
        lockAPI,
        store,
        registry,
        draggableId
    });
    if (!shouldStart) {
        return null;
    }
    const entry = registry.draggable.getById(draggableId);
    const el = findDraggable(contextId, entry.descriptor.id);
    if (!el) {
        ("TURBOPACK compile-time truthy", 1) ? warning(`Unable to find draggable element with id: ${draggableId}`) : ("TURBOPACK unreachable", undefined);
        return null;
    }
    if (sourceEvent && !entry.options.canDragInteractiveElements && isEventInInteractiveElement(el, sourceEvent)) {
        return null;
    }
    const lock = lockAPI.claim(forceSensorStop || noop$2);
    let phase = 'PRE_DRAG';
    function getShouldRespectForcePress() {
        return entry.options.shouldRespectForcePress;
    }
    function isLockActive() {
        return lockAPI.isActive(lock);
    }
    function tryDispatch(expected, getAction) {
        if (isActive({
            expected,
            phase,
            isLockActive,
            shouldWarn: true
        })) {
            store.dispatch(getAction());
        }
    }
    const tryDispatchWhenDragging = tryDispatch.bind(null, 'DRAGGING');
    function lift(args) {
        function completed() {
            lockAPI.release();
            phase = 'COMPLETED';
        }
        if (phase !== 'PRE_DRAG') {
            completed();
            ("TURBOPACK compile-time truthy", 1) ? invariant(false, `Cannot lift in phase ${phase}`) : ("TURBOPACK unreachable", undefined);
        }
        store.dispatch(lift$1(args.liftActionArgs));
        phase = 'DRAGGING';
        function finish(reason, options = {
            shouldBlockNextClick: false
        }) {
            args.cleanup();
            if (options.shouldBlockNextClick) {
                const unbind = bindEvents(window, [
                    {
                        eventName: 'click',
                        fn: preventDefault,
                        options: {
                            once: true,
                            passive: false,
                            capture: true
                        }
                    }
                ]);
                setTimeout(unbind);
            }
            completed();
            store.dispatch(drop({
                reason
            }));
        }
        return {
            isActive: ()=>isActive({
                    expected: 'DRAGGING',
                    phase,
                    isLockActive,
                    shouldWarn: false
                }),
            shouldRespectForcePress: getShouldRespectForcePress,
            drop: (options)=>finish('DROP', options),
            cancel: (options)=>finish('CANCEL', options),
            ...args.actions
        };
    }
    function fluidLift(clientSelection) {
        const move$1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$raf$2d$schd$2f$dist$2f$raf$2d$schd$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])((client)=>{
            tryDispatchWhenDragging(()=>move({
                    client
                }));
        });
        const api = lift({
            liftActionArgs: {
                id: draggableId,
                clientSelection,
                movementMode: 'FLUID'
            },
            cleanup: ()=>move$1.cancel(),
            actions: {
                move: move$1
            }
        });
        return {
            ...api,
            move: move$1
        };
    }
    function snapLift() {
        const actions = {
            moveUp: ()=>tryDispatchWhenDragging(moveUp),
            moveRight: ()=>tryDispatchWhenDragging(moveRight),
            moveDown: ()=>tryDispatchWhenDragging(moveDown),
            moveLeft: ()=>tryDispatchWhenDragging(moveLeft)
        };
        return lift({
            liftActionArgs: {
                id: draggableId,
                clientSelection: getBorderBoxCenterPosition(el),
                movementMode: 'SNAP'
            },
            cleanup: noop$2,
            actions
        });
    }
    function abortPreDrag() {
        const shouldRelease = isActive({
            expected: 'PRE_DRAG',
            phase,
            isLockActive,
            shouldWarn: true
        });
        if (shouldRelease) {
            lockAPI.release();
        }
    }
    const preDrag = {
        isActive: ()=>isActive({
                expected: 'PRE_DRAG',
                phase,
                isLockActive,
                shouldWarn: false
            }),
        shouldRespectForcePress: getShouldRespectForcePress,
        fluidLift,
        snapLift,
        abort: abortPreDrag
    };
    return preDrag;
}
const defaultSensors = [
    useMouseSensor,
    useKeyboardSensor,
    useTouchSensor
];
function useSensorMarshal({ contextId, store, registry, customSensors, enableDefaultSensors }) {
    const useSensors = [
        ...enableDefaultSensors ? defaultSensors : [],
        ...customSensors || []
    ];
    const lockAPI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(()=>create())[0];
    const tryAbandonLock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function tryAbandonLock(previous, current) {
        if (isDragging(previous) && !isDragging(current)) {
            lockAPI.tryAbandon();
        }
    }, [
        lockAPI
    ]);
    useIsomorphicLayoutEffect(function listenToStore() {
        let previous = store.getState();
        const unsubscribe = store.subscribe(()=>{
            const current = store.getState();
            tryAbandonLock(previous, current);
            previous = current;
        });
        return unsubscribe;
    }, [
        lockAPI,
        store,
        tryAbandonLock
    ]);
    useIsomorphicLayoutEffect(()=>{
        return lockAPI.tryAbandon;
    }, [
        lockAPI.tryAbandon
    ]);
    const canGetLock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])((draggableId)=>{
        return canStart({
            lockAPI,
            registry,
            store,
            draggableId
        });
    }, [
        lockAPI,
        registry,
        store
    ]);
    const tryGetLock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])((draggableId, forceStop, options)=>tryStart({
            lockAPI,
            registry,
            contextId,
            store,
            draggableId,
            forceSensorStop: forceStop || null,
            sourceEvent: options && options.sourceEvent ? options.sourceEvent : null
        }), [
        contextId,
        lockAPI,
        registry,
        store
    ]);
    const findClosestDraggableId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])((event)=>tryGetClosestDraggableIdFromEvent(contextId, event), [
        contextId
    ]);
    const findOptionsForDraggable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        const entry = registry.draggable.findById(id);
        return entry ? entry.options : null;
    }, [
        registry.draggable
    ]);
    const tryReleaseLock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function tryReleaseLock() {
        if (!lockAPI.isClaimed()) {
            return;
        }
        lockAPI.tryAbandon();
        if (store.getState().phase !== 'IDLE') {
            store.dispatch(flush());
        }
    }, [
        lockAPI,
        store
    ]);
    const isLockClaimed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(()=>lockAPI.isClaimed(), [
        lockAPI
    ]);
    const api = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            canGetLock,
            tryGetLock,
            findClosestDraggableId,
            findOptionsForDraggable,
            tryReleaseLock,
            isLockClaimed
        }), [
        canGetLock,
        tryGetLock,
        findClosestDraggableId,
        findOptionsForDraggable,
        tryReleaseLock,
        isLockClaimed
    ]);
    useValidateSensorHooks(useSensors);
    for(let i = 0; i < useSensors.length; i++){
        useSensors[i](api);
    }
}
const createResponders = (props)=>({
        onBeforeCapture: (t)=>{
            const onBeforeCapureCallback = ()=>{
                if (props.onBeforeCapture) {
                    props.onBeforeCapture(t);
                }
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$dom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["flushSync"])(onBeforeCapureCallback);
        },
        onBeforeDragStart: props.onBeforeDragStart,
        onDragStart: props.onDragStart,
        onDragEnd: props.onDragEnd,
        onDragUpdate: props.onDragUpdate
    });
const createAutoScrollerOptions = (props)=>({
        ...defaultAutoScrollerOptions,
        ...props.autoScrollerOptions,
        durationDampening: {
            ...defaultAutoScrollerOptions.durationDampening,
            ...props.autoScrollerOptions
        }
    });
function getStore(lazyRef) {
    !lazyRef.current ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Could not find store from lazy ref') : ("TURBOPACK unreachable", undefined) : void 0;
    return lazyRef.current;
}
function App(props) {
    const { contextId, setCallbacks, sensors, nonce, dragHandleUsageInstructions } = props;
    const lazyStoreRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(null);
    useStartupValidation();
    const lastPropsRef = usePrevious(props);
    const getResponders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        return createResponders(lastPropsRef.current);
    }, [
        lastPropsRef
    ]);
    const getAutoScrollerOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        return createAutoScrollerOptions(lastPropsRef.current);
    }, [
        lastPropsRef
    ]);
    const announce = useAnnouncer(contextId);
    const dragHandleUsageInstructionsId = useHiddenTextElement({
        contextId,
        text: dragHandleUsageInstructions
    });
    const styleMarshal = useStyleMarshal(contextId, nonce);
    const lazyDispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])((action)=>{
        getStore(lazyStoreRef).dispatch(action);
    }, []);
    const marshalCallbacks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bindActionCreators"])({
            publishWhileDragging,
            updateDroppableScroll,
            updateDroppableIsEnabled,
            updateDroppableIsCombineEnabled,
            collectionStarting
        }, lazyDispatch), [
        lazyDispatch
    ]);
    const registry = useRegistry();
    const dimensionMarshal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return createDimensionMarshal(registry, marshalCallbacks);
    }, [
        registry,
        marshalCallbacks
    ]);
    const autoScroller = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>createAutoScroller({
            scrollWindow,
            scrollDroppable: dimensionMarshal.scrollDroppable,
            getAutoScrollerOptions,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bindActionCreators"])({
                move
            }, lazyDispatch)
        }), [
        dimensionMarshal.scrollDroppable,
        lazyDispatch,
        getAutoScrollerOptions
    ]);
    const focusMarshal = useFocusMarshal(contextId);
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>createStore({
            announce,
            autoScroller,
            dimensionMarshal,
            focusMarshal,
            getResponders,
            styleMarshal
        }), [
        announce,
        autoScroller,
        dimensionMarshal,
        focusMarshal,
        getResponders,
        styleMarshal
    ]);
    if ("TURBOPACK compile-time truthy", 1) {
        if (lazyStoreRef.current && lazyStoreRef.current !== store) {
            ("TURBOPACK compile-time truthy", 1) ? warning('unexpected store change') : ("TURBOPACK unreachable", undefined);
        }
    }
    lazyStoreRef.current = store;
    const tryResetStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const current = getStore(lazyStoreRef);
        const state = current.getState();
        if (state.phase !== 'IDLE') {
            current.dispatch(flush());
        }
    }, []);
    const isDragging = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const state = getStore(lazyStoreRef).getState();
        if (state.phase === 'DROP_ANIMATING') {
            return true;
        }
        if (state.phase === 'IDLE') {
            return false;
        }
        return state.isDragging;
    }, []);
    const appCallbacks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            isDragging,
            tryAbort: tryResetStore
        }), [
        isDragging,
        tryResetStore
    ]);
    setCallbacks(appCallbacks);
    const getCanLift = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])((id)=>canStartDrag(getStore(lazyStoreRef).getState(), id), []);
    const getIsMovementAllowed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(()=>isMovementAllowed(getStore(lazyStoreRef).getState()), []);
    const appContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            marshal: dimensionMarshal,
            focus: focusMarshal,
            contextId,
            canLift: getCanLift,
            isMovementAllowed: getIsMovementAllowed,
            dragHandleUsageInstructionsId,
            registry
        }), [
        contextId,
        dimensionMarshal,
        dragHandleUsageInstructionsId,
        focusMarshal,
        getCanLift,
        getIsMovementAllowed,
        registry
    ]);
    useSensorMarshal({
        contextId,
        store,
        registry,
        customSensors: sensors || null,
        enableDefaultSensors: props.enableDefaultSensors !== false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return tryResetStore;
    }, [
        tryResetStore
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(AppContext.Provider, {
        value: appContext
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$rsc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Provider"], {
        context: StoreContext,
        store: store
    }, props.children));
}
function useUniqueContextId() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].useId();
}
function DragDropContext(props) {
    const contextId = useUniqueContextId();
    const dragHandleUsageInstructions = props.dragHandleUsageInstructions || preset.dragHandleUsageInstructions;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(ErrorBoundary, null, (setCallbacks)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(App, {
            nonce: props.nonce,
            contextId: contextId,
            setCallbacks: setCallbacks,
            dragHandleUsageInstructions: dragHandleUsageInstructions,
            enableDefaultSensors: props.enableDefaultSensors,
            sensors: props.sensors,
            onBeforeCapture: props.onBeforeCapture,
            onBeforeDragStart: props.onBeforeDragStart,
            onDragStart: props.onDragStart,
            onDragUpdate: props.onDragUpdate,
            onDragEnd: props.onDragEnd,
            autoScrollerOptions: props.autoScrollerOptions
        }, props.children));
}
const zIndexOptions = {
    dragging: 5000,
    dropAnimating: 4500
};
const getDraggingTransition = (shouldAnimateDragMovement, dropping)=>{
    if (dropping) {
        return transitions.drop(dropping.duration);
    }
    if (shouldAnimateDragMovement) {
        return transitions.snap;
    }
    return transitions.fluid;
};
const getDraggingOpacity = (isCombining, isDropAnimating)=>{
    if (!isCombining) {
        return undefined;
    }
    return isDropAnimating ? combine.opacity.drop : combine.opacity.combining;
};
const getShouldDraggingAnimate = (dragging)=>{
    if (dragging.forceShouldAnimate != null) {
        return dragging.forceShouldAnimate;
    }
    return dragging.mode === 'SNAP';
};
function getDraggingStyle(dragging) {
    const dimension = dragging.dimension;
    const box = dimension.client;
    const { offset, combineWith, dropping } = dragging;
    const isCombining = Boolean(combineWith);
    const shouldAnimate = getShouldDraggingAnimate(dragging);
    const isDropAnimating = Boolean(dropping);
    const transform = isDropAnimating ? transforms.drop(offset, isCombining) : transforms.moveTo(offset);
    const style = {
        position: 'fixed',
        top: box.marginBox.top,
        left: box.marginBox.left,
        boxSizing: 'border-box',
        width: box.borderBox.width,
        height: box.borderBox.height,
        transition: getDraggingTransition(shouldAnimate, dropping),
        transform,
        opacity: getDraggingOpacity(isCombining, isDropAnimating),
        zIndex: isDropAnimating ? zIndexOptions.dropAnimating : zIndexOptions.dragging,
        pointerEvents: 'none'
    };
    return style;
}
function getSecondaryStyle(secondary) {
    return {
        transform: transforms.moveTo(secondary.offset),
        transition: secondary.shouldAnimateDisplacement ? undefined : 'none'
    };
}
function getStyle$1(mapped) {
    return mapped.type === 'DRAGGING' ? getDraggingStyle(mapped) : getSecondaryStyle(mapped);
}
function getDimension$1(descriptor, el, windowScroll = origin) {
    const computedStyles = window.getComputedStyle(el);
    const borderBox = el.getBoundingClientRect();
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$box$2d$model$2f$dist$2f$css$2d$box$2d$model$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateBox"])(borderBox, computedStyles);
    const page = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$box$2d$model$2f$dist$2f$css$2d$box$2d$model$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withScroll"])(client, windowScroll);
    const placeholder = {
        client,
        tagName: el.tagName.toLowerCase(),
        display: computedStyles.display
    };
    const displaceBy = {
        x: client.marginBox.width,
        y: client.marginBox.height
    };
    const dimension = {
        descriptor,
        placeholder,
        displaceBy,
        client,
        page
    };
    return dimension;
}
function useDraggablePublisher(args) {
    const uniqueId = useUniqueId('draggable');
    const { descriptor, registry, getDraggableRef, canDragInteractiveElements, shouldRespectForcePress, isEnabled } = args;
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            canDragInteractiveElements,
            shouldRespectForcePress,
            isEnabled
        }), [
        canDragInteractiveElements,
        isEnabled,
        shouldRespectForcePress
    ]);
    const getDimension = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])((windowScroll)=>{
        const el = getDraggableRef();
        !el ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Cannot get dimension when no ref is set') : ("TURBOPACK unreachable", undefined) : void 0;
        return getDimension$1(descriptor, el, windowScroll);
    }, [
        descriptor,
        getDraggableRef
    ]);
    const entry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            uniqueId,
            descriptor,
            options,
            getDimension
        }), [
        descriptor,
        getDimension,
        options,
        uniqueId
    ]);
    const publishedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(entry);
    const isFirstPublishRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(true);
    useIsomorphicLayoutEffect(()=>{
        registry.draggable.register(publishedRef.current);
        return ()=>registry.draggable.unregister(publishedRef.current);
    }, [
        registry.draggable
    ]);
    useIsomorphicLayoutEffect(()=>{
        if (isFirstPublishRef.current) {
            isFirstPublishRef.current = false;
            return;
        }
        const last = publishedRef.current;
        publishedRef.current = entry;
        registry.draggable.update(entry, last);
    }, [
        entry,
        registry.draggable
    ]);
}
var DroppableContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createContext(null);
function checkIsValidInnerRef(el) {
    !(el && isHtmlElement(el)) ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : ("TURBOPACK unreachable", undefined) : void 0;
}
function useValidation$1(props, contextId, getRef) {
    useDevSetupWarning(()=>{
        function prefix(id) {
            return `Draggable[id: ${id}]: `;
        }
        const id = props.draggableId;
        !id ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Draggable requires a draggableId') : ("TURBOPACK unreachable", undefined) : void 0;
        !(typeof id === 'string') ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof id}] (value: ${id})`) : ("TURBOPACK unreachable", undefined) : void 0;
        !Number.isInteger(props.index) ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, `${prefix(id)} requires an integer index prop`) : ("TURBOPACK unreachable", undefined) : void 0;
        if (props.mapped.type === 'DRAGGING') {
            return;
        }
        checkIsValidInnerRef(getRef());
        if (props.isEnabled) {
            !findDragHandle(contextId, id) ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, `${prefix(id)} Unable to find drag handle`) : ("TURBOPACK unreachable", undefined) : void 0;
        }
    });
}
function useClonePropValidation(isClone) {
    useDev(()=>{
        const initialRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(isClone);
        useDevSetupWarning(()=>{
            !(isClone === initialRef.current) ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Draggable isClone prop value changed during component life') : ("TURBOPACK unreachable", undefined) : void 0;
        }, [
            isClone
        ]);
    });
}
function useRequiredContext(Context) {
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])(Context);
    !result ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Could not find required context') : ("TURBOPACK unreachable", undefined) : void 0;
    return result;
}
function preventHtml5Dnd(event) {
    event.preventDefault();
}
const Draggable = (props)=>{
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(null);
    const setRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])((el = null)=>{
        ref.current = el;
    }, []);
    const getRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(()=>ref.current, []);
    const { contextId, dragHandleUsageInstructionsId, registry } = useRequiredContext(AppContext);
    const { type, droppableId } = useRequiredContext(DroppableContext);
    const descriptor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            id: props.draggableId,
            index: props.index,
            type,
            droppableId
        }), [
        props.draggableId,
        props.index,
        type,
        droppableId
    ]);
    const { children, draggableId, isEnabled, shouldRespectForcePress, canDragInteractiveElements, isClone, mapped, dropAnimationFinished: dropAnimationFinishedAction } = props;
    useValidation$1(props, contextId, getRef);
    useClonePropValidation(isClone);
    if (!isClone) {
        const forPublisher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
                descriptor,
                registry,
                getDraggableRef: getRef,
                canDragInteractiveElements,
                shouldRespectForcePress,
                isEnabled
            }), [
            descriptor,
            registry,
            getRef,
            canDragInteractiveElements,
            shouldRespectForcePress,
            isEnabled
        ]);
        useDraggablePublisher(forPublisher);
    }
    const dragHandleProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>isEnabled ? {
            tabIndex: 0,
            role: 'button',
            'aria-describedby': dragHandleUsageInstructionsId,
            'data-rfd-drag-handle-draggable-id': draggableId,
            'data-rfd-drag-handle-context-id': contextId,
            draggable: false,
            onDragStart: preventHtml5Dnd
        } : null, [
        contextId,
        dragHandleUsageInstructionsId,
        draggableId,
        isEnabled
    ]);
    const onMoveEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])((event)=>{
        if (mapped.type !== 'DRAGGING') {
            return;
        }
        if (!mapped.dropping) {
            return;
        }
        if (event.propertyName !== 'transform') {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$dom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["flushSync"])(dropAnimationFinishedAction);
    }, [
        dropAnimationFinishedAction,
        mapped
    ]);
    const provided = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const style = getStyle$1(mapped);
        const onTransitionEnd = mapped.type === 'DRAGGING' && mapped.dropping ? onMoveEnd : undefined;
        const result = {
            innerRef: setRef,
            draggableProps: {
                'data-rfd-draggable-context-id': contextId,
                'data-rfd-draggable-id': draggableId,
                style,
                onTransitionEnd
            },
            dragHandleProps
        };
        return result;
    }, [
        contextId,
        dragHandleProps,
        draggableId,
        mapped,
        onMoveEnd,
        setRef
    ]);
    const rubric = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            draggableId: descriptor.id,
            type: descriptor.type,
            source: {
                index: descriptor.index,
                droppableId: descriptor.droppableId
            }
        }), [
        descriptor.droppableId,
        descriptor.id,
        descriptor.index,
        descriptor.type
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Fragment, null, children(provided, mapped.snapshot, rubric));
};
var isStrictEqual = (a, b)=>a === b;
var whatIsDraggedOverFromResult = (result)=>{
    const { combine, destination } = result;
    if (destination) {
        return destination.droppableId;
    }
    if (combine) {
        return combine.droppableId;
    }
    return null;
};
const getCombineWithFromResult = (result)=>{
    return result.combine ? result.combine.draggableId : null;
};
const getCombineWithFromImpact = (impact)=>{
    return impact.at && impact.at.type === 'COMBINE' ? impact.at.combine.draggableId : null;
};
function getDraggableSelector() {
    const memoizedOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$memoize$2d$one$2f$dist$2f$memoize$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])((x, y)=>({
            x,
            y
        }));
    const getMemoizedSnapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$memoize$2d$one$2f$dist$2f$memoize$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])((mode, isClone, draggingOver = null, combineWith = null, dropping = null)=>({
            isDragging: true,
            isClone,
            isDropAnimating: Boolean(dropping),
            dropAnimation: dropping,
            mode,
            draggingOver,
            combineWith,
            combineTargetFor: null
        }));
    const getMemoizedProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$memoize$2d$one$2f$dist$2f$memoize$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])((offset, mode, dimension, isClone, draggingOver = null, combineWith = null, forceShouldAnimate = null)=>({
            mapped: {
                type: 'DRAGGING',
                dropping: null,
                draggingOver,
                combineWith,
                mode,
                offset,
                dimension,
                forceShouldAnimate,
                snapshot: getMemoizedSnapshot(mode, isClone, draggingOver, combineWith, null)
            }
        }));
    const selector = (state, ownProps)=>{
        if (isDragging(state)) {
            if (state.critical.draggable.id !== ownProps.draggableId) {
                return null;
            }
            const offset = state.current.client.offset;
            const dimension = state.dimensions.draggables[ownProps.draggableId];
            const draggingOver = whatIsDraggedOver(state.impact);
            const combineWith = getCombineWithFromImpact(state.impact);
            const forceShouldAnimate = state.forceShouldAnimate;
            return getMemoizedProps(memoizedOffset(offset.x, offset.y), state.movementMode, dimension, ownProps.isClone, draggingOver, combineWith, forceShouldAnimate);
        }
        if (state.phase === 'DROP_ANIMATING') {
            const completed = state.completed;
            if (completed.result.draggableId !== ownProps.draggableId) {
                return null;
            }
            const isClone = ownProps.isClone;
            const dimension = state.dimensions.draggables[ownProps.draggableId];
            const result = completed.result;
            const mode = result.mode;
            const draggingOver = whatIsDraggedOverFromResult(result);
            const combineWith = getCombineWithFromResult(result);
            const duration = state.dropDuration;
            const dropping = {
                duration,
                curve: curves.drop,
                moveTo: state.newHomeClientOffset,
                opacity: combineWith ? combine.opacity.drop : null,
                scale: combineWith ? combine.scale.drop : null
            };
            return {
                mapped: {
                    type: 'DRAGGING',
                    offset: state.newHomeClientOffset,
                    dimension,
                    dropping,
                    draggingOver,
                    combineWith,
                    mode,
                    forceShouldAnimate: null,
                    snapshot: getMemoizedSnapshot(mode, isClone, draggingOver, combineWith, dropping)
                }
            };
        }
        return null;
    };
    return selector;
}
function getSecondarySnapshot(combineTargetFor = null) {
    return {
        isDragging: false,
        isDropAnimating: false,
        isClone: false,
        dropAnimation: null,
        mode: null,
        draggingOver: null,
        combineTargetFor,
        combineWith: null
    };
}
const atRest = {
    mapped: {
        type: 'SECONDARY',
        offset: origin,
        combineTargetFor: null,
        shouldAnimateDisplacement: true,
        snapshot: getSecondarySnapshot(null)
    }
};
function getSecondarySelector() {
    const memoizedOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$memoize$2d$one$2f$dist$2f$memoize$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])((x, y)=>({
            x,
            y
        }));
    const getMemoizedSnapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$memoize$2d$one$2f$dist$2f$memoize$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(getSecondarySnapshot);
    const getMemoizedProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$memoize$2d$one$2f$dist$2f$memoize$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])((offset, combineTargetFor = null, shouldAnimateDisplacement)=>({
            mapped: {
                type: 'SECONDARY',
                offset,
                combineTargetFor,
                shouldAnimateDisplacement,
                snapshot: getMemoizedSnapshot(combineTargetFor)
            }
        }));
    const getFallback = (combineTargetFor)=>{
        return combineTargetFor ? getMemoizedProps(origin, combineTargetFor, true) : null;
    };
    const getProps = (ownId, draggingId, impact, afterCritical)=>{
        const visualDisplacement = impact.displaced.visible[ownId];
        const isAfterCriticalInVirtualList = Boolean(afterCritical.inVirtualList && afterCritical.effected[ownId]);
        const combine = tryGetCombine(impact);
        const combineTargetFor = combine && combine.draggableId === ownId ? draggingId : null;
        if (!visualDisplacement) {
            if (!isAfterCriticalInVirtualList) {
                return getFallback(combineTargetFor);
            }
            if (impact.displaced.invisible[ownId]) {
                return null;
            }
            const change = negate(afterCritical.displacedBy.point);
            const offset = memoizedOffset(change.x, change.y);
            return getMemoizedProps(offset, combineTargetFor, true);
        }
        if (isAfterCriticalInVirtualList) {
            return getFallback(combineTargetFor);
        }
        const displaceBy = impact.displacedBy.point;
        const offset = memoizedOffset(displaceBy.x, displaceBy.y);
        return getMemoizedProps(offset, combineTargetFor, visualDisplacement.shouldAnimate);
    };
    const selector = (state, ownProps)=>{
        if (isDragging(state)) {
            if (state.critical.draggable.id === ownProps.draggableId) {
                return null;
            }
            return getProps(ownProps.draggableId, state.critical.draggable.id, state.impact, state.afterCritical);
        }
        if (state.phase === 'DROP_ANIMATING') {
            const completed = state.completed;
            if (completed.result.draggableId === ownProps.draggableId) {
                return null;
            }
            return getProps(ownProps.draggableId, completed.result.draggableId, completed.impact, completed.afterCritical);
        }
        return null;
    };
    return selector;
}
const makeMapStateToProps$1 = ()=>{
    const draggingSelector = getDraggableSelector();
    const secondarySelector = getSecondarySelector();
    const selector = (state, ownProps)=>draggingSelector(state, ownProps) || secondarySelector(state, ownProps) || atRest;
    return selector;
};
const mapDispatchToProps$1 = {
    dropAnimationFinished: dropAnimationFinished
};
const ConnectedDraggable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$rsc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connect"])(makeMapStateToProps$1, mapDispatchToProps$1, null, {
    context: StoreContext,
    areStatePropsEqual: isStrictEqual
})(Draggable);
function PrivateDraggable(props) {
    const droppableContext = useRequiredContext(DroppableContext);
    const isUsingCloneFor = droppableContext.isUsingCloneFor;
    if (isUsingCloneFor === props.draggableId && !props.isClone) {
        return null;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(ConnectedDraggable, props);
}
function PublicDraggable(props) {
    const isEnabled = typeof props.isDragDisabled === 'boolean' ? !props.isDragDisabled : true;
    const canDragInteractiveElements = Boolean(props.disableInteractiveElementBlocking);
    const shouldRespectForcePress = Boolean(props.shouldRespectForcePress);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(PrivateDraggable, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({}, props, {
        isClone: false,
        isEnabled: isEnabled,
        canDragInteractiveElements: canDragInteractiveElements,
        shouldRespectForcePress: shouldRespectForcePress
    }));
}
const isEqual = (base)=>(value)=>base === value;
const isScroll = isEqual('scroll');
const isAuto = isEqual('auto');
const isVisible = isEqual('visible');
const isEither = (overflow, fn)=>fn(overflow.overflowX) || fn(overflow.overflowY);
const isBoth = (overflow, fn)=>fn(overflow.overflowX) && fn(overflow.overflowY);
const isElementScrollable = (el)=>{
    const style = window.getComputedStyle(el);
    const overflow = {
        overflowX: style.overflowX,
        overflowY: style.overflowY
    };
    return isEither(overflow, isScroll) || isEither(overflow, isAuto);
};
const isBodyScrollable = ()=>{
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    const body = getBodyElement();
    const html = document.documentElement;
    !html ? ("TURBOPACK compile-time truthy", 1) ? invariant() : ("TURBOPACK unreachable", undefined) : void 0;
    if (!isElementScrollable(body)) {
        return false;
    }
    const htmlStyle = window.getComputedStyle(html);
    const htmlOverflow = {
        overflowX: htmlStyle.overflowX,
        overflowY: htmlStyle.overflowY
    };
    if (isBoth(htmlOverflow, isVisible)) {
        return false;
    }
    ("TURBOPACK compile-time truthy", 1) ? warning(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `) : ("TURBOPACK unreachable", undefined);
    return false;
};
const getClosestScrollable = (el)=>{
    if (el == null) {
        return null;
    }
    if (el === document.body) {
        return isBodyScrollable() ? ("TURBOPACK unreachable", undefined) : null;
    }
    if (el === document.documentElement) {
        return null;
    }
    if (!isElementScrollable(el)) {
        return getClosestScrollable(el.parentElement);
    }
    return el;
};
var checkForNestedScrollContainers = (scrollable)=>{
    if (!scrollable) {
        return;
    }
    const anotherScrollParent = getClosestScrollable(scrollable.parentElement);
    if (!anotherScrollParent) {
        return;
    }
    ("TURBOPACK compile-time truthy", 1) ? warning(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `) : ("TURBOPACK unreachable", undefined);
};
var getScroll = (el)=>({
        x: el.scrollLeft,
        y: el.scrollTop
    });
const getIsFixed = (el)=>{
    if (!el) {
        return false;
    }
    const style = window.getComputedStyle(el);
    if (style.position === 'fixed') {
        return true;
    }
    return getIsFixed(el.parentElement);
};
var getEnv = (start)=>{
    const closestScrollable = getClosestScrollable(start);
    const isFixedOnPage = getIsFixed(start);
    return {
        closestScrollable,
        isFixedOnPage
    };
};
var getDroppableDimension = ({ descriptor, isEnabled, isCombineEnabled, isFixedOnPage, direction, client, page, closest })=>{
    const frame = (()=>{
        if (!closest) {
            return null;
        }
        const { scrollSize, client: frameClient } = closest;
        const maxScroll = getMaxScroll({
            scrollHeight: scrollSize.scrollHeight,
            scrollWidth: scrollSize.scrollWidth,
            height: frameClient.paddingBox.height,
            width: frameClient.paddingBox.width
        });
        return {
            pageMarginBox: closest.page.marginBox,
            frameClient,
            scrollSize,
            shouldClipSubject: closest.shouldClipSubject,
            scroll: {
                initial: closest.scroll,
                current: closest.scroll,
                max: maxScroll,
                diff: {
                    value: origin,
                    displacement: origin
                }
            }
        };
    })();
    const axis = direction === 'vertical' ? vertical : horizontal;
    const subject = getSubject({
        page,
        withPlaceholder: null,
        axis,
        frame
    });
    const dimension = {
        descriptor,
        isCombineEnabled,
        isFixedOnPage,
        axis,
        isEnabled,
        client,
        page,
        frame,
        subject
    };
    return dimension;
};
const getClient = (targetRef, closestScrollable)=>{
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$box$2d$model$2f$dist$2f$css$2d$box$2d$model$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBox"])(targetRef);
    if (!closestScrollable) {
        return base;
    }
    if (targetRef !== closestScrollable) {
        return base;
    }
    const top = base.paddingBox.top - closestScrollable.scrollTop;
    const left = base.paddingBox.left - closestScrollable.scrollLeft;
    const bottom = top + closestScrollable.scrollHeight;
    const right = left + closestScrollable.scrollWidth;
    const paddingBox = {
        top,
        right,
        bottom,
        left
    };
    const borderBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$box$2d$model$2f$dist$2f$css$2d$box$2d$model$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["expand"])(paddingBox, base.border);
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$box$2d$model$2f$dist$2f$css$2d$box$2d$model$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createBox"])({
        borderBox,
        margin: base.margin,
        border: base.border,
        padding: base.padding
    });
    return client;
};
var getDimension = ({ ref, descriptor, env, windowScroll, direction, isDropDisabled, isCombineEnabled, shouldClipSubject })=>{
    const closestScrollable = env.closestScrollable;
    const client = getClient(ref, closestScrollable);
    const page = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$box$2d$model$2f$dist$2f$css$2d$box$2d$model$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withScroll"])(client, windowScroll);
    const closest = (()=>{
        if (!closestScrollable) {
            return null;
        }
        const frameClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$box$2d$model$2f$dist$2f$css$2d$box$2d$model$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBox"])(closestScrollable);
        const scrollSize = {
            scrollHeight: closestScrollable.scrollHeight,
            scrollWidth: closestScrollable.scrollWidth
        };
        return {
            client: frameClient,
            page: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$box$2d$model$2f$dist$2f$css$2d$box$2d$model$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withScroll"])(frameClient, windowScroll),
            scroll: getScroll(closestScrollable),
            scrollSize,
            shouldClipSubject
        };
    })();
    const dimension = getDroppableDimension({
        descriptor,
        isEnabled: !isDropDisabled,
        isCombineEnabled,
        isFixedOnPage: env.isFixedOnPage,
        direction,
        client,
        page,
        closest
    });
    return dimension;
};
const immediate = {
    passive: false
};
const delayed = {
    passive: true
};
var getListenerOptions = (options)=>options.shouldPublishImmediately ? immediate : delayed;
const getClosestScrollableFromDrag = (dragging)=>dragging && dragging.env.closestScrollable || null;
function useDroppablePublisher(args) {
    const whileDraggingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(null);
    const appContext = useRequiredContext(AppContext);
    const uniqueId = useUniqueId('droppable');
    const { registry, marshal } = appContext;
    const previousRef = usePrevious(args);
    const descriptor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            id: args.droppableId,
            type: args.type,
            mode: args.mode
        }), [
        args.droppableId,
        args.mode,
        args.type
    ]);
    const publishedDescriptorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(descriptor);
    const memoizedUpdateScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$memoize$2d$one$2f$dist$2f$memoize$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])((x, y)=>{
            !whileDraggingRef.current ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Can only update scroll when dragging') : ("TURBOPACK unreachable", undefined) : void 0;
            const scroll = {
                x,
                y
            };
            marshal.updateDroppableScroll(descriptor.id, scroll);
        }), [
        descriptor.id,
        marshal
    ]);
    const getClosestScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const dragging = whileDraggingRef.current;
        if (!dragging || !dragging.env.closestScrollable) {
            return origin;
        }
        return getScroll(dragging.env.closestScrollable);
    }, []);
    const updateScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const scroll = getClosestScroll();
        memoizedUpdateScroll(scroll.x, scroll.y);
    }, [
        getClosestScroll,
        memoizedUpdateScroll
    ]);
    const scheduleScrollUpdate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$raf$2d$schd$2f$dist$2f$raf$2d$schd$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(updateScroll), [
        updateScroll
    ]);
    const onClosestScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const dragging = whileDraggingRef.current;
        const closest = getClosestScrollableFromDrag(dragging);
        !(dragging && closest) ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Could not find scroll options while scrolling') : ("TURBOPACK unreachable", undefined) : void 0;
        const options = dragging.scrollOptions;
        if (options.shouldPublishImmediately) {
            updateScroll();
            return;
        }
        scheduleScrollUpdate();
    }, [
        scheduleScrollUpdate,
        updateScroll
    ]);
    const getDimensionAndWatchScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])((windowScroll, options)=>{
        !!whileDraggingRef.current ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Cannot collect a droppable while a drag is occurring') : ("TURBOPACK unreachable", undefined) : void 0;
        const previous = previousRef.current;
        const ref = previous.getDroppableRef();
        !ref ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Cannot collect without a droppable ref') : ("TURBOPACK unreachable", undefined) : void 0;
        const env = getEnv(ref);
        const dragging = {
            ref,
            descriptor,
            env,
            scrollOptions: options
        };
        whileDraggingRef.current = dragging;
        const dimension = getDimension({
            ref,
            descriptor,
            env,
            windowScroll,
            direction: previous.direction,
            isDropDisabled: previous.isDropDisabled,
            isCombineEnabled: previous.isCombineEnabled,
            shouldClipSubject: !previous.ignoreContainerClipping
        });
        const scrollable = env.closestScrollable;
        if (scrollable) {
            scrollable.setAttribute(scrollContainer.contextId, appContext.contextId);
            scrollable.addEventListener('scroll', onClosestScroll, getListenerOptions(dragging.scrollOptions));
            if ("TURBOPACK compile-time truthy", 1) {
                checkForNestedScrollContainers(scrollable);
            }
        }
        return dimension;
    }, [
        appContext.contextId,
        descriptor,
        onClosestScroll,
        previousRef
    ]);
    const getScrollWhileDragging = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const dragging = whileDraggingRef.current;
        const closest = getClosestScrollableFromDrag(dragging);
        !(dragging && closest) ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Can only recollect Droppable client for Droppables that have a scroll container') : ("TURBOPACK unreachable", undefined) : void 0;
        return getScroll(closest);
    }, []);
    const dragStopped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const dragging = whileDraggingRef.current;
        !dragging ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Cannot stop drag when no active drag') : ("TURBOPACK unreachable", undefined) : void 0;
        const closest = getClosestScrollableFromDrag(dragging);
        whileDraggingRef.current = null;
        if (!closest) {
            return;
        }
        scheduleScrollUpdate.cancel();
        closest.removeAttribute(scrollContainer.contextId);
        closest.removeEventListener('scroll', onClosestScroll, getListenerOptions(dragging.scrollOptions));
    }, [
        onClosestScroll,
        scheduleScrollUpdate
    ]);
    const scroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])((change)=>{
        const dragging = whileDraggingRef.current;
        !dragging ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Cannot scroll when there is no drag') : ("TURBOPACK unreachable", undefined) : void 0;
        const closest = getClosestScrollableFromDrag(dragging);
        !closest ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Cannot scroll a droppable with no closest scrollable') : ("TURBOPACK unreachable", undefined) : void 0;
        closest.scrollTop += change.y;
        closest.scrollLeft += change.x;
    }, []);
    const callbacks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return {
            getDimensionAndWatchScroll,
            getScrollWhileDragging,
            dragStopped,
            scroll
        };
    }, [
        dragStopped,
        getDimensionAndWatchScroll,
        getScrollWhileDragging,
        scroll
    ]);
    const entry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            uniqueId,
            descriptor,
            callbacks
        }), [
        callbacks,
        descriptor,
        uniqueId
    ]);
    useIsomorphicLayoutEffect(()=>{
        publishedDescriptorRef.current = entry.descriptor;
        registry.droppable.register(entry);
        return ()=>{
            if (whileDraggingRef.current) {
                ("TURBOPACK compile-time truthy", 1) ? warning('Unsupported: changing the droppableId or type of a Droppable during a drag') : ("TURBOPACK unreachable", undefined);
                dragStopped();
            }
            registry.droppable.unregister(entry);
        };
    }, [
        callbacks,
        descriptor,
        dragStopped,
        entry,
        marshal,
        registry.droppable
    ]);
    useIsomorphicLayoutEffect(()=>{
        if (!whileDraggingRef.current) {
            return;
        }
        marshal.updateDroppableIsEnabled(publishedDescriptorRef.current.id, !args.isDropDisabled);
    }, [
        args.isDropDisabled,
        marshal
    ]);
    useIsomorphicLayoutEffect(()=>{
        if (!whileDraggingRef.current) {
            return;
        }
        marshal.updateDroppableIsCombineEnabled(publishedDescriptorRef.current.id, args.isCombineEnabled);
    }, [
        args.isCombineEnabled,
        marshal
    ]);
}
function noop() {}
const empty = {
    width: 0,
    height: 0,
    margin: noSpacing
};
const getSize = ({ isAnimatingOpenOnMount, placeholder, animate })=>{
    if (isAnimatingOpenOnMount) {
        return empty;
    }
    if (animate === 'close') {
        return empty;
    }
    return {
        height: placeholder.client.borderBox.height,
        width: placeholder.client.borderBox.width,
        margin: placeholder.client.margin
    };
};
const getStyle = ({ isAnimatingOpenOnMount, placeholder, animate })=>{
    const size = getSize({
        isAnimatingOpenOnMount,
        placeholder,
        animate
    });
    return {
        display: placeholder.display,
        boxSizing: 'border-box',
        width: size.width,
        height: size.height,
        marginTop: size.margin.top,
        marginRight: size.margin.right,
        marginBottom: size.margin.bottom,
        marginLeft: size.margin.left,
        flexShrink: '0',
        flexGrow: '0',
        pointerEvents: 'none',
        transition: animate !== 'none' ? transitions.placeholder : null
    };
};
const Placeholder = (props)=>{
    const animateOpenTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tryClearAnimateOpenTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!animateOpenTimerRef.current) {
            return;
        }
        clearTimeout(animateOpenTimerRef.current);
        animateOpenTimerRef.current = null;
    }, []);
    const { animate, onTransitionEnd, onClose, contextId } = props;
    const [isAnimatingOpenOnMount, setIsAnimatingOpenOnMount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(props.animate === 'open');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isAnimatingOpenOnMount) {
            return noop;
        }
        if (animate !== 'open') {
            tryClearAnimateOpenTimer();
            setIsAnimatingOpenOnMount(false);
            return noop;
        }
        if (animateOpenTimerRef.current) {
            return noop;
        }
        animateOpenTimerRef.current = setTimeout(()=>{
            animateOpenTimerRef.current = null;
            setIsAnimatingOpenOnMount(false);
        });
        return tryClearAnimateOpenTimer;
    }, [
        animate,
        isAnimatingOpenOnMount,
        tryClearAnimateOpenTimer
    ]);
    const onSizeChangeEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])((event)=>{
        if (event.propertyName !== 'height') {
            return;
        }
        onTransitionEnd();
        if (animate === 'close') {
            onClose();
        }
    }, [
        animate,
        onClose,
        onTransitionEnd
    ]);
    const style = getStyle({
        isAnimatingOpenOnMount,
        animate: props.animate,
        placeholder: props.placeholder
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(props.placeholder.tagName, {
        style,
        'data-rfd-placeholder-context-id': contextId,
        onTransitionEnd: onSizeChangeEnd,
        ref: props.innerRef
    });
};
var Placeholder$1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].memo(Placeholder);
function isBoolean(value) {
    return typeof value === 'boolean';
}
function runChecks(args, checks) {
    checks.forEach((check)=>check(args));
}
const shared = [
    function required({ props }) {
        !props.droppableId ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'A Droppable requires a droppableId prop') : ("TURBOPACK unreachable", undefined) : void 0;
        !(typeof props.droppableId === 'string') ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, `A Droppable requires a [string] droppableId. Provided: [${typeof props.droppableId}]`) : ("TURBOPACK unreachable", undefined) : void 0;
    },
    function boolean({ props }) {
        !isBoolean(props.isDropDisabled) ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'isDropDisabled must be a boolean') : ("TURBOPACK unreachable", undefined) : void 0;
        !isBoolean(props.isCombineEnabled) ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'isCombineEnabled must be a boolean') : ("TURBOPACK unreachable", undefined) : void 0;
        !isBoolean(props.ignoreContainerClipping) ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'ignoreContainerClipping must be a boolean') : ("TURBOPACK unreachable", undefined) : void 0;
    },
    function ref({ getDroppableRef }) {
        checkIsValidInnerRef(getDroppableRef());
    }
];
const standard = [
    function placeholder({ props, getPlaceholderRef }) {
        if (!props.placeholder) {
            return;
        }
        const ref = getPlaceholderRef();
        if (ref) {
            return;
        }
        ("TURBOPACK compile-time truthy", 1) ? warning(`
      Droppable setup issue [droppableId: "${props.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `) : ("TURBOPACK unreachable", undefined);
    }
];
const virtual = [
    function hasClone({ props }) {
        !props.renderClone ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Must provide a clone render function (renderClone) for virtual lists') : ("TURBOPACK unreachable", undefined) : void 0;
    },
    function hasNoPlaceholder({ getPlaceholderRef }) {
        !!getPlaceholderRef() ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Expected virtual list to not have a placeholder') : ("TURBOPACK unreachable", undefined) : void 0;
    }
];
function useValidation(args) {
    useDevSetupWarning(()=>{
        runChecks(args, shared);
        if (args.props.mode === 'standard') {
            runChecks(args, standard);
        }
        if (args.props.mode === 'virtual') {
            runChecks(args, virtual);
        }
    });
}
class AnimateInOut extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].PureComponent {
    constructor(...args){
        super(...args);
        this.state = {
            isVisible: Boolean(this.props.on),
            data: this.props.on,
            animate: this.props.shouldAnimate && this.props.on ? 'open' : 'none'
        };
        this.onClose = ()=>{
            if (this.state.animate !== 'close') {
                return;
            }
            this.setState({
                isVisible: false
            });
        };
    }
    static getDerivedStateFromProps(props, state) {
        if (!props.shouldAnimate) {
            return {
                isVisible: Boolean(props.on),
                data: props.on,
                animate: 'none'
            };
        }
        if (props.on) {
            return {
                isVisible: true,
                data: props.on,
                animate: 'open'
            };
        }
        if (state.isVisible) {
            return {
                isVisible: true,
                data: state.data,
                animate: 'close'
            };
        }
        return {
            isVisible: false,
            animate: 'close',
            data: null
        };
    }
    render() {
        if (!this.state.isVisible) {
            return null;
        }
        const provided = {
            onClose: this.onClose,
            data: this.state.data,
            animate: this.state.animate
        };
        return this.props.children(provided);
    }
}
const Droppable = (props)=>{
    const appContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])(AppContext);
    !appContext ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'Could not find app context') : ("TURBOPACK unreachable", undefined) : void 0;
    const { contextId, isMovementAllowed } = appContext;
    const droppableRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(null);
    const placeholderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { children, droppableId, type, mode, direction, ignoreContainerClipping, isDropDisabled, isCombineEnabled, snapshot, useClone, updateViewportMaxScroll, getContainerForClone } = props;
    const getDroppableRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(()=>droppableRef.current, []);
    const setDroppableRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])((value = null)=>{
        droppableRef.current = value;
    }, []);
    const getPlaceholderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(()=>placeholderRef.current, []);
    const setPlaceholderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])((value = null)=>{
        placeholderRef.current = value;
    }, []);
    useValidation({
        props,
        getDroppableRef,
        getPlaceholderRef
    });
    const onPlaceholderTransitionEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (isMovementAllowed()) {
            updateViewportMaxScroll({
                maxScroll: getMaxWindowScroll()
            });
        }
    }, [
        isMovementAllowed,
        updateViewportMaxScroll
    ]);
    useDroppablePublisher({
        droppableId,
        type,
        mode,
        direction,
        isDropDisabled,
        isCombineEnabled,
        ignoreContainerClipping,
        getDroppableRef
    });
    const placeholder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(AnimateInOut, {
            on: props.placeholder,
            shouldAnimate: props.shouldAnimatePlaceholder
        }, ({ onClose, data, animate })=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(Placeholder$1, {
                placeholder: data,
                onClose: onClose,
                innerRef: setPlaceholderRef,
                animate: animate,
                contextId: contextId,
                onTransitionEnd: onPlaceholderTransitionEnd
            })), [
        contextId,
        onPlaceholderTransitionEnd,
        props.placeholder,
        props.shouldAnimatePlaceholder,
        setPlaceholderRef
    ]);
    const provided = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            innerRef: setDroppableRef,
            placeholder,
            droppableProps: {
                'data-rfd-droppable-id': droppableId,
                'data-rfd-droppable-context-id': contextId
            }
        }), [
        contextId,
        droppableId,
        placeholder,
        setDroppableRef
    ]);
    const isUsingCloneFor = useClone ? useClone.dragging.draggableId : null;
    const droppableContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$memo$2d$one$2f$dist$2f$use$2d$memo$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            droppableId,
            type,
            isUsingCloneFor
        }), [
        droppableId,
        isUsingCloneFor,
        type
    ]);
    function getClone() {
        if (!useClone) {
            return null;
        }
        const { dragging, render } = useClone;
        const node = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(PrivateDraggable, {
            draggableId: dragging.draggableId,
            index: dragging.source.index,
            isClone: true,
            isEnabled: true,
            shouldRespectForcePress: false,
            canDragInteractiveElements: true
        }, (draggableProvided, draggableSnapshot)=>render(draggableProvided, draggableSnapshot, dragging));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$dom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createPortal(node, getContainerForClone());
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(DroppableContext.Provider, {
        value: droppableContext
    }, children(provided, snapshot), getClone());
};
function getBody() {
    !document.body ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'document.body is not ready') : ("TURBOPACK unreachable", undefined) : void 0;
    return document.body;
}
const defaultProps = {
    mode: 'standard',
    type: 'DEFAULT',
    direction: 'vertical',
    isDropDisabled: false,
    isCombineEnabled: false,
    ignoreContainerClipping: false,
    renderClone: null,
    getContainerForClone: getBody
};
const attachDefaultPropsToOwnProps = (ownProps)=>{
    let mergedProps = {
        ...ownProps
    };
    let defaultPropKey;
    for(defaultPropKey in defaultProps){
        if (ownProps[defaultPropKey] === undefined) {
            mergedProps = {
                ...mergedProps,
                [defaultPropKey]: defaultProps[defaultPropKey]
            };
        }
    }
    return mergedProps;
};
const isMatchingType = (type, critical)=>type === critical.droppable.type;
const getDraggable = (critical, dimensions)=>dimensions.draggables[critical.draggable.id];
const makeMapStateToProps = ()=>{
    const idleWithAnimation = {
        placeholder: null,
        shouldAnimatePlaceholder: true,
        snapshot: {
            isDraggingOver: false,
            draggingOverWith: null,
            draggingFromThisWith: null,
            isUsingPlaceholder: false
        },
        useClone: null
    };
    const idleWithoutAnimation = {
        ...idleWithAnimation,
        shouldAnimatePlaceholder: false
    };
    const getDraggableRubric = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$memoize$2d$one$2f$dist$2f$memoize$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])((descriptor)=>({
            draggableId: descriptor.id,
            type: descriptor.type,
            source: {
                index: descriptor.index,
                droppableId: descriptor.droppableId
            }
        }));
    const getMapProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$memoize$2d$one$2f$dist$2f$memoize$2d$one$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])((id, isEnabled, isDraggingOverForConsumer, isDraggingOverForImpact, dragging, renderClone)=>{
        const draggableId = dragging.descriptor.id;
        const isHome = dragging.descriptor.droppableId === id;
        if (isHome) {
            const useClone = renderClone ? {
                render: renderClone,
                dragging: getDraggableRubric(dragging.descriptor)
            } : null;
            const snapshot = {
                isDraggingOver: isDraggingOverForConsumer,
                draggingOverWith: isDraggingOverForConsumer ? draggableId : null,
                draggingFromThisWith: draggableId,
                isUsingPlaceholder: true
            };
            return {
                placeholder: dragging.placeholder,
                shouldAnimatePlaceholder: false,
                snapshot,
                useClone
            };
        }
        if (!isEnabled) {
            return idleWithoutAnimation;
        }
        if (!isDraggingOverForImpact) {
            return idleWithAnimation;
        }
        const snapshot = {
            isDraggingOver: isDraggingOverForConsumer,
            draggingOverWith: draggableId,
            draggingFromThisWith: null,
            isUsingPlaceholder: true
        };
        return {
            placeholder: dragging.placeholder,
            shouldAnimatePlaceholder: true,
            snapshot,
            useClone: null
        };
    });
    const selector = (state, ownProps)=>{
        const ownPropsWithDefaultProps = attachDefaultPropsToOwnProps(ownProps);
        const id = ownPropsWithDefaultProps.droppableId;
        const type = ownPropsWithDefaultProps.type;
        const isEnabled = !ownPropsWithDefaultProps.isDropDisabled;
        const renderClone = ownPropsWithDefaultProps.renderClone;
        if (isDragging(state)) {
            const critical = state.critical;
            if (!isMatchingType(type, critical)) {
                return idleWithoutAnimation;
            }
            const dragging = getDraggable(critical, state.dimensions);
            const isDraggingOver = whatIsDraggedOver(state.impact) === id;
            return getMapProps(id, isEnabled, isDraggingOver, isDraggingOver, dragging, renderClone);
        }
        if (state.phase === 'DROP_ANIMATING') {
            const completed = state.completed;
            if (!isMatchingType(type, completed.critical)) {
                return idleWithoutAnimation;
            }
            const dragging = getDraggable(completed.critical, state.dimensions);
            return getMapProps(id, isEnabled, whatIsDraggedOverFromResult(completed.result) === id, whatIsDraggedOver(completed.impact) === id, dragging, renderClone);
        }
        if (state.phase === 'IDLE' && state.completed && !state.shouldFlush) {
            const completed = state.completed;
            if (!isMatchingType(type, completed.critical)) {
                return idleWithoutAnimation;
            }
            const wasOver = whatIsDraggedOver(completed.impact) === id;
            const wasCombining = Boolean(completed.impact.at && completed.impact.at.type === 'COMBINE');
            const isHome = completed.critical.droppable.id === id;
            if (wasOver) {
                return wasCombining ? idleWithAnimation : idleWithoutAnimation;
            }
            if (isHome) {
                return idleWithAnimation;
            }
            return idleWithoutAnimation;
        }
        return idleWithoutAnimation;
    };
    return selector;
};
const mapDispatchToProps = {
    updateViewportMaxScroll: updateViewportMaxScroll
};
const ConnectedDroppable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$rsc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connect"])(makeMapStateToProps, mapDispatchToProps, (stateProps, dispatchProps, ownProps)=>{
    return {
        ...attachDefaultPropsToOwnProps(ownProps),
        ...stateProps,
        ...dispatchProps
    };
}, {
    context: StoreContext,
    areStatePropsEqual: isStrictEqual
})(Droppable);
var ConnectedDroppable$1 = ConnectedDroppable;
;
}}),
"[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/(main)/project/[projectId]/page { METADATA_0 => \"[project]/app/favicon.ico.mjs { IMAGE => \\\"[project]/app/favicon.ico [app-rsc] (static)\\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)\", MODULE_1 => \"[project]/app/layout.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_2 => \"[project]/app/not-found.jsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_3 => \"[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_4 => \"[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_5 => \"[project]/app/(main)/layout.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_6 => \"[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_7 => \"[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_8 => \"[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_9 => \"[project]/app/(main)/project/[projectId]/layout.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_10 => \"[project]/app/(main)/project/[projectId]/page.jsx [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "__next_app__": (()=>__next_app__),
    "pages": (()=>pages),
    "routeModule": (()=>routeModule),
    "tree": (()=>tree)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_import__("[project]/app/(main)/project/[projectId]/page.jsx [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_import__("[project]/app/(main)/project/[projectId]/layout.js [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_import__("[project]/app/(main)/layout.js [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_import__('[project]/app/favicon.ico.mjs { IMAGE => "[project]/app/favicon.ico [app-rsc] (static)" } [app-rsc] (structured image object, ecmascript, Next.js server component)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_import__("[project]/app/layout.js [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_import__("[project]/app/not-found.jsx [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = [
    "",
    {
        "children": [
            "(main)",
            {
                "children": [
                    "project",
                    {
                        "children": [
                            "[projectId]",
                            {
                                "children": [
                                    "__PAGE__",
                                    {},
                                    {
                                        metadata: {},
                                        "page": [
                                            ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__,
                                            "[project]/app/(main)/project/[projectId]/page.jsx"
                                        ]
                                    }
                                ]
                            },
                            {
                                metadata: {},
                                "layout": [
                                    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__,
                                    "[project]/app/(main)/project/[projectId]/layout.js"
                                ]
                            }
                        ]
                    },
                    {
                        metadata: {}
                    }
                ]
            },
            {
                metadata: {},
                "layout": [
                    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__,
                    "[project]/app/(main)/layout.js"
                ],
                "not-found": [
                    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__,
                    "[project]/node_modules/next/dist/client/components/not-found-error.js"
                ],
                "forbidden": [
                    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__,
                    "[project]/node_modules/next/dist/client/components/forbidden-error.js"
                ],
                "unauthorized": [
                    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__,
                    "[project]/node_modules/next/dist/client/components/unauthorized-error.js"
                ]
            }
        ]
    },
    {
        metadata: {
            icon: [
                async (props)=>[
                        {
                            url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fillMetadataSegment"])("//", props.params, "favicon.ico") + `?${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29$__["default"].src.split("/").splice(-1)[0]}`,
                            sizes: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29$__["default"].width}x${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29$__["default"].height}`,
                            type: `image/x-icon`
                        }
                    ]
            ]
        },
        "layout": [
            ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__,
            "[project]/app/layout.js"
        ],
        "not-found": [
            ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__,
            "[project]/app/not-found.jsx"
        ],
        "forbidden": [
            ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__,
            "[project]/node_modules/next/dist/client/components/forbidden-error.js"
        ],
        "unauthorized": [
            ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__,
            "[project]/node_modules/next/dist/client/components/unauthorized-error.js"
        ]
    }
];
const pages = [
    "[project]/app/(main)/project/[projectId]/page.jsx"
];
;
;
const __next_app_require__ = __turbopack_require__;
const __next_app_load_chunk__ = __turbopack_load__;
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};
;
const routeModule = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppPageRouteModule"]({
    definition: {
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RouteKind"].APP_PAGE,
        page: "/(main)/project/[projectId]/page",
        pathname: "/project/[projectId]",
        // The following aren't used in production.
        bundlePath: '',
        filename: '',
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
}); //# sourceMappingURL=app-page.js.map
}}),
"[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/(main)/project/[projectId]/page { METADATA_0 => \"[project]/app/favicon.ico.mjs { IMAGE => \\\"[project]/app/favicon.ico [app-rsc] (static)\\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)\", MODULE_1 => \"[project]/app/layout.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_2 => \"[project]/app/not-found.jsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_3 => \"[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_4 => \"[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_5 => \"[project]/app/(main)/layout.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_6 => \"[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_7 => \"[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_8 => \"[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_9 => \"[project]/app/(main)/project/[projectId]/layout.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_10 => \"[project]/app/(main)/project/[projectId]/page.jsx [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_import__('[project]/app/favicon.ico.mjs { IMAGE => "[project]/app/favicon.ico [app-rsc] (static)" } [app-rsc] (structured image object, ecmascript, Next.js server component)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_import__("[project]/app/layout.js [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_import__("[project]/app/not-found.jsx [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_import__("[project]/app/(main)/layout.js [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_import__("[project]/app/(main)/project/[projectId]/layout.js [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_import__("[project]/app/(main)/project/[projectId]/page.jsx [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$error$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/components/error-boundary.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__('[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/(main)/project/[projectId]/page { METADATA_0 => "[project]/app/favicon.ico.mjs { IMAGE => \\"[project]/app/favicon.ico [app-rsc] (static)\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)", MODULE_1 => "[project]/app/layout.js [app-rsc] (ecmascript, Next.js server component)", MODULE_2 => "[project]/app/not-found.jsx [app-rsc] (ecmascript, Next.js server component)", MODULE_3 => "[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_4 => "[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_5 => "[project]/app/(main)/layout.js [app-rsc] (ecmascript, Next.js server component)", MODULE_6 => "[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_7 => "[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_8 => "[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_9 => "[project]/app/(main)/project/[projectId]/layout.js [app-rsc] (ecmascript, Next.js server component)", MODULE_10 => "[project]/app/(main)/project/[projectId]/page.jsx [app-rsc] (ecmascript, Next.js server component)" } [app-rsc] (ecmascript) <locals>');
}}),
"[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/(main)/project/[projectId]/page { METADATA_0 => \"[project]/app/favicon.ico.mjs { IMAGE => \\\"[project]/app/favicon.ico [app-rsc] (static)\\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)\", MODULE_1 => \"[project]/app/layout.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_2 => \"[project]/app/not-found.jsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_3 => \"[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_4 => \"[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_5 => \"[project]/app/(main)/layout.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_6 => \"[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_7 => \"[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_8 => \"[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_9 => \"[project]/app/(main)/project/[projectId]/layout.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_10 => \"[project]/app/(main)/project/[projectId]/page.jsx [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ClientPageRoot": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ClientPageRoot"]),
    "ClientSegmentRoot": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ClientSegmentRoot"]),
    "GlobalError": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$error$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]),
    "HTTPAccessFallbackBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HTTPAccessFallbackBoundary"]),
    "LayoutRouter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LayoutRouter"]),
    "MetadataBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MetadataBoundary"]),
    "OutletBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OutletBoundary"]),
    "Postpone": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Postpone"]),
    "RenderFromTemplateContext": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderFromTemplateContext"]),
    "ViewportBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ViewportBoundary"]),
    "__next_app__": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["__next_app__"]),
    "actionAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["actionAsyncStorage"]),
    "collectSegmentData": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["collectSegmentData"]),
    "createMetadataComponents": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createMetadataComponents"]),
    "createPrerenderParamsForClientSegment": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createPrerenderParamsForClientSegment"]),
    "createPrerenderSearchParamsForClientPage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createPrerenderSearchParamsForClientPage"]),
    "createServerParamsForMetadata": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerParamsForMetadata"]),
    "createServerParamsForServerSegment": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerParamsForServerSegment"]),
    "createServerSearchParamsForMetadata": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerSearchParamsForMetadata"]),
    "createServerSearchParamsForServerPage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerSearchParamsForServerPage"]),
    "createTemporaryReferenceSet": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTemporaryReferenceSet"]),
    "decodeAction": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeAction"]),
    "decodeFormState": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeFormState"]),
    "decodeReply": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeReply"]),
    "pages": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["pages"]),
    "patchFetch": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["patchFetch"]),
    "preconnect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["preconnect"]),
    "preloadFont": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["preloadFont"]),
    "preloadStyle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["preloadStyle"]),
    "prerender": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prerender"]),
    "renderToReadableStream": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderToReadableStream"]),
    "routeModule": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["routeModule"]),
    "serverHooks": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serverHooks"]),
    "taintObjectReference": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["taintObjectReference"]),
    "tree": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tree"]),
    "workAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["workAsyncStorage"]),
    "workUnitAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["workUnitAsyncStorage"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$error$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/components/error-boundary.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__('[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/(main)/project/[projectId]/page { METADATA_0 => "[project]/app/favicon.ico.mjs { IMAGE => \\"[project]/app/favicon.ico [app-rsc] (static)\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)", MODULE_1 => "[project]/app/layout.js [app-rsc] (ecmascript, Next.js server component)", MODULE_2 => "[project]/app/not-found.jsx [app-rsc] (ecmascript, Next.js server component)", MODULE_3 => "[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_4 => "[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_5 => "[project]/app/(main)/layout.js [app-rsc] (ecmascript, Next.js server component)", MODULE_6 => "[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_7 => "[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_8 => "[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_9 => "[project]/app/(main)/project/[projectId]/layout.js [app-rsc] (ecmascript, Next.js server component)", MODULE_10 => "[project]/app/(main)/project/[projectId]/page.jsx [app-rsc] (ecmascript, Next.js server component)" } [app-rsc] (ecmascript) <locals>');
}}),
"[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/(main)/project/[projectId]/page { METADATA_0 => \"[project]/app/favicon.ico.mjs { IMAGE => \\\"[project]/app/favicon.ico [app-rsc] (static)\\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)\", MODULE_1 => \"[project]/app/layout.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_2 => \"[project]/app/not-found.jsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_3 => \"[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_4 => \"[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_5 => \"[project]/app/(main)/layout.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_6 => \"[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_7 => \"[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_8 => \"[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_9 => \"[project]/app/(main)/project/[projectId]/layout.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_10 => \"[project]/app/(main)/project/[projectId]/page.jsx [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ClientPageRoot": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ClientPageRoot"]),
    "ClientSegmentRoot": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ClientSegmentRoot"]),
    "GlobalError": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["GlobalError"]),
    "HTTPAccessFallbackBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["HTTPAccessFallbackBoundary"]),
    "LayoutRouter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["LayoutRouter"]),
    "MetadataBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["MetadataBoundary"]),
    "OutletBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["OutletBoundary"]),
    "Postpone": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Postpone"]),
    "RenderFromTemplateContext": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["RenderFromTemplateContext"]),
    "ViewportBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ViewportBoundary"]),
    "__next_app__": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["__next_app__"]),
    "actionAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["actionAsyncStorage"]),
    "collectSegmentData": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["collectSegmentData"]),
    "createMetadataComponents": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createMetadataComponents"]),
    "createPrerenderParamsForClientSegment": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createPrerenderParamsForClientSegment"]),
    "createPrerenderSearchParamsForClientPage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createPrerenderSearchParamsForClientPage"]),
    "createServerParamsForMetadata": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createServerParamsForMetadata"]),
    "createServerParamsForServerSegment": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createServerParamsForServerSegment"]),
    "createServerSearchParamsForMetadata": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createServerSearchParamsForMetadata"]),
    "createServerSearchParamsForServerPage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createServerSearchParamsForServerPage"]),
    "createTemporaryReferenceSet": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createTemporaryReferenceSet"]),
    "decodeAction": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["decodeAction"]),
    "decodeFormState": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["decodeFormState"]),
    "decodeReply": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["decodeReply"]),
    "pages": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["pages"]),
    "patchFetch": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["patchFetch"]),
    "preconnect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["preconnect"]),
    "preloadFont": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["preloadFont"]),
    "preloadStyle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["preloadStyle"]),
    "prerender": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["prerender"]),
    "renderToReadableStream": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["renderToReadableStream"]),
    "routeModule": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["routeModule"]),
    "serverHooks": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["serverHooks"]),
    "taintObjectReference": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["taintObjectReference"]),
    "tree": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["tree"]),
    "workAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["workAsyncStorage"]),
    "workUnitAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["workUnitAsyncStorage"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__('[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/(main)/project/[projectId]/page { METADATA_0 => "[project]/app/favicon.ico.mjs { IMAGE => \\"[project]/app/favicon.ico [app-rsc] (static)\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)", MODULE_1 => "[project]/app/layout.js [app-rsc] (ecmascript, Next.js server component)", MODULE_2 => "[project]/app/not-found.jsx [app-rsc] (ecmascript, Next.js server component)", MODULE_3 => "[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_4 => "[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_5 => "[project]/app/(main)/layout.js [app-rsc] (ecmascript, Next.js server component)", MODULE_6 => "[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_7 => "[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_8 => "[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_9 => "[project]/app/(main)/project/[projectId]/layout.js [app-rsc] (ecmascript, Next.js server component)", MODULE_10 => "[project]/app/(main)/project/[projectId]/page.jsx [app-rsc] (ecmascript, Next.js server component)" } [app-rsc] (ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$main$292f$project$2f5b$projectId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$app$2f$not$2d$found$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__('[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/(main)/project/[projectId]/page { METADATA_0 => "[project]/app/favicon.ico.mjs { IMAGE => \\"[project]/app/favicon.ico [app-rsc] (static)\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)", MODULE_1 => "[project]/app/layout.js [app-rsc] (ecmascript, Next.js server component)", MODULE_2 => "[project]/app/not-found.jsx [app-rsc] (ecmascript, Next.js server component)", MODULE_3 => "[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_4 => "[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_5 => "[project]/app/(main)/layout.js [app-rsc] (ecmascript, Next.js server component)", MODULE_6 => "[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_7 => "[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_8 => "[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_9 => "[project]/app/(main)/project/[projectId]/layout.js [app-rsc] (ecmascript, Next.js server component)", MODULE_10 => "[project]/app/(main)/project/[projectId]/page.jsx [app-rsc] (ecmascript, Next.js server component)" } [app-rsc] (ecmascript) <exports>');
}}),
"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"7f242e7ea905a8dc9d2da24f9e149b6ff779d9882b":"invalidateCacheAction"} */ __turbopack_esm__({
    "invalidateCacheAction": (()=>invalidateCacheAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function invalidateCacheAction() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])().delete(`__clerk_invalidate_cache_cookie_${Date.now()}`);
}
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ invalidateCacheAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(invalidateCacheAction, "7f242e7ea905a8dc9d2da24f9e149b6ff779d9882b", null);
}}),
"[project]/.next-internal/server/app/(main)/project/[projectId]/page/actions.js { ACTIONS_MODULE0 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/actions/projects.js [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/actions/sprints.js [app-rsc] (ecmascript)\" } [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
;
;
}}),
"[project]/.next-internal/server/app/(main)/project/[projectId]/page/actions.js { ACTIONS_MODULE0 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/actions/projects.js [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/actions/sprints.js [app-rsc] (ecmascript)\" } [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$projects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/actions/projects.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$sprints$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/actions/sprints.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$actions$2f$projects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$actions$2f$sprints$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__('[project]/.next-internal/server/app/(main)/project/[projectId]/page/actions.js { ACTIONS_MODULE0 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/actions/projects.js [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/actions/sprints.js [app-rsc] (ecmascript)" } [app-rsc] (ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/(main)/project/[projectId]/page/actions.js { ACTIONS_MODULE0 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/actions/projects.js [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/actions/sprints.js [app-rsc] (ecmascript)\" } [app-rsc] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "4026ba3438df78227d18116cee3fda345855263c3a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$projects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteProject"]),
    "403e2bf7e663c8e8fa905190789755f03e3bb7107d": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$projects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProject"]),
    "4063800752ca2509aa88249b78c6c81cb228c421a0": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$projects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createProject"]),
    "6053b337427e3aaa37ed92500ed806734d46cbb840": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$sprints$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSprint"]),
    "60a0b9e714efdbb667f4fbd5a6aaf483c925833c61": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$sprints$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateSprintStatus"]),
    "7f242e7ea905a8dc9d2da24f9e149b6ff779d9882b": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["invalidateCacheAction"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$projects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/actions/projects.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$sprints$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/actions/sprints.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$actions$2f$projects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$actions$2f$sprints$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__('[project]/.next-internal/server/app/(main)/project/[projectId]/page/actions.js { ACTIONS_MODULE0 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/actions/projects.js [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/actions/sprints.js [app-rsc] (ecmascript)" } [app-rsc] (ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/(main)/project/[projectId]/page/actions.js { ACTIONS_MODULE0 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/actions/projects.js [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/actions/sprints.js [app-rsc] (ecmascript)\" } [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "4026ba3438df78227d18116cee3fda345855263c3a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$actions$2f$projects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$actions$2f$sprints$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["4026ba3438df78227d18116cee3fda345855263c3a"]),
    "403e2bf7e663c8e8fa905190789755f03e3bb7107d": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$actions$2f$projects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$actions$2f$sprints$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["403e2bf7e663c8e8fa905190789755f03e3bb7107d"]),
    "4063800752ca2509aa88249b78c6c81cb228c421a0": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$actions$2f$projects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$actions$2f$sprints$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["4063800752ca2509aa88249b78c6c81cb228c421a0"]),
    "6053b337427e3aaa37ed92500ed806734d46cbb840": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$actions$2f$projects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$actions$2f$sprints$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["6053b337427e3aaa37ed92500ed806734d46cbb840"]),
    "60a0b9e714efdbb667f4fbd5a6aaf483c925833c61": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$actions$2f$projects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$actions$2f$sprints$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["60a0b9e714efdbb667f4fbd5a6aaf483c925833c61"]),
    "7f242e7ea905a8dc9d2da24f9e149b6ff779d9882b": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$actions$2f$projects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$actions$2f$sprints$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["7f242e7ea905a8dc9d2da24f9e149b6ff779d9882b"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$actions$2f$projects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$actions$2f$sprints$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__('[project]/.next-internal/server/app/(main)/project/[projectId]/page/actions.js { ACTIONS_MODULE0 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/actions/projects.js [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/actions/sprints.js [app-rsc] (ecmascript)" } [app-rsc] (ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$project$2f5b$projectId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$actions$2f$projects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$actions$2f$sprints$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__('[project]/.next-internal/server/app/(main)/project/[projectId]/page/actions.js { ACTIONS_MODULE0 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/actions/projects.js [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/actions/sprints.js [app-rsc] (ecmascript)" } [app-rsc] (ecmascript) <exports>');
}}),

};

//# sourceMappingURL=_4530a6._.js.map