(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [640], {
        9749: function(e, t, r) {
            "use strict";

            function n(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function i(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function o(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, o = [],
                            a = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(a = (n = r.next()).done) && (o.push(n.value), !t || o.length !== t); a = !0);
                        } catch (c) {
                            l = !0, i = c
                        } finally {
                            try {
                                a || null == r.return || r.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || l(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function a(e) {
                return function(e) {
                    if (Array.isArray(e)) return n(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || l(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function l(e, t) {
                if (e) {
                    if ("string" === typeof e) return n(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0
                }
            }
            t.default = function(e) {
                var t = e.src,
                    r = e.sizes,
                    n = e.unoptimized,
                    l = void 0 !== n && n,
                    c = e.priority,
                    u = void 0 !== c && c,
                    y = e.loading,
                    m = e.lazyRoot,
                    A = void 0 === m ? null : m,
                    x = e.lazyBoundary,
                    k = void 0 === x ? "200px" : x,
                    R = e.className,
                    L = e.quality,
                    P = e.width,
                    M = e.height,
                    _ = e.style,
                    C = e.objectFit,
                    q = e.objectPosition,
                    N = e.onLoadingComplete,
                    U = e.loader,
                    D = void 0 === U ? E : U,
                    W = e.placeholder,
                    H = void 0 === W ? "empty" : W,
                    T = e.blurDataURL,
                    B = b(e, ["src", "sizes", "unoptimized", "priority", "loading", "lazyRoot", "lazyBoundary", "className", "quality", "width", "height", "style", "objectFit", "objectPosition", "onLoadingComplete", "loader", "placeholder", "blurDataURL"]),
                    F = s.useContext(p.ImageConfigContext),
                    K = s.useMemo((function() {
                        var e = v || F || d.imageConfigDefault,
                            t = a(e.deviceSizes).concat(a(e.imageSizes)).sort((function(e, t) {
                                return e - t
                            })),
                            r = e.deviceSizes.sort((function(e, t) {
                                return e - t
                            }));
                        return h({}, e, {
                            allSizes: t,
                            deviceSizes: r
                        })
                    }), [F]),
                    $ = B,
                    G = r ? "responsive" : "intrinsic";
                "layout" in $ && ($.layout && (G = $.layout), delete $.layout);
                var J = "";
                if (function(e) {
                        return "object" === typeof e && (j(e) || function(e) {
                            return void 0 !== e.src
                        }(e))
                    }(t)) {
                    var V = j(t) ? t.default : t;
                    if (!V.src) throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(V)));
                    if (T = T || V.blurDataURL, J = V.src, (!G || "fill" !== G) && (M = M || V.height, P = P || V.width, !V.height || !V.width)) throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(V)))
                }
                t = "string" === typeof t ? t : J;
                var Q = O(P),
                    X = O(M),
                    Y = O(L),
                    Z = !u && ("lazy" === y || "undefined" === typeof y);
                (t.startsWith("data:") || t.startsWith("blob:")) && (l = !0, Z = !1);
                w.has(t) && (Z = !1);
                var ee, te = o(g.useIntersection({
                        rootRef: A,
                        rootMargin: k,
                        disabled: !Z
                    }), 2),
                    re = te[0],
                    ne = te[1],
                    ie = !Z || ne,
                    oe = {
                        boxSizing: "border-box",
                        display: "block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0
                    },
                    ae = {
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0
                    },
                    le = !1,
                    ce = {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        objectFit: C,
                        objectPosition: q
                    };
                0;
                0;
                var ue = Object.assign({}, _, "raw" === G ? {
                        aspectRatio: "".concat(Q, " / ").concat(X)
                    } : ce),
                    se = "blur" === H ? {
                        filter: "blur(20px)",
                        backgroundSize: C || "cover",
                        backgroundImage: 'url("'.concat(T, '")'),
                        backgroundPosition: q || "0% 0%"
                    } : {};
                if ("fill" === G) oe.display = "block", oe.position = "absolute", oe.top = 0, oe.left = 0, oe.bottom = 0, oe.right = 0;
                else if ("undefined" !== typeof Q && "undefined" !== typeof X) {
                    var fe = X / Q,
                        de = isNaN(fe) ? "100%" : "".concat(100 * fe, "%");
                    "responsive" === G ? (oe.display = "block", oe.position = "relative", le = !0, ae.paddingTop = de) : "intrinsic" === G ? (oe.display = "inline-block", oe.position = "relative", oe.maxWidth = "100%", le = !0, ae.maxWidth = "100%", ee = "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(Q, "%27%20height=%27").concat(X, "%27/%3e")) : "fixed" === G && (oe.display = "inline-block", oe.position = "relative", oe.width = Q, oe.height = X)
                } else 0;
                var ge = {
                    src: S,
                    srcSet: void 0,
                    sizes: void 0
                };
                ie && (ge = z({
                    config: K,
                    src: t,
                    unoptimized: l,
                    layout: G,
                    width: Q,
                    quality: Y,
                    sizes: r,
                    loader: D
                }));
                var pe = t;
                0;
                var ye;
                0;
                var me = (i(ye = {}, "imagesrcset", ge.srcSet), i(ye, "imagesizes", ge.sizes), ye),
                    he = s.default.useLayoutEffect,
                    be = s.useRef(N),
                    ve = s.useRef(null);
                s.useEffect((function() {
                    be.current = N
                }), [N]), he((function() {
                    re(ve.current)
                }), [re]), s.useEffect((function() {
                    ! function(e, t, r, n, i) {
                        var o = function() {
                            var r = e.current;
                            r && (r.src !== S && ("decode" in r ? r.decode() : Promise.resolve()).catch((function() {})).then((function() {
                                if (e.current && (w.add(t), "blur" === n && (r.style.filter = "", r.style.backgroundSize = "", r.style.backgroundImage = "", r.style.backgroundPosition = ""), i.current)) {
                                    var o = r.naturalWidth,
                                        a = r.naturalHeight;
                                    i.current({
                                        naturalWidth: o,
                                        naturalHeight: a
                                    })
                                }
                            })))
                        };
                        e.current && (e.current.complete ? o() : e.current.onload = o)
                    }(ve, pe, 0, H, be)
                }), [pe, G, H, ie]);
                var we = h({
                    isLazy: Z,
                    imgAttributes: ge,
                    heightInt: X,
                    widthInt: Q,
                    qualityInt: Y,
                    layout: G,
                    className: R,
                    imgStyle: ue,
                    blurStyle: se,
                    imgRef: ve,
                    loading: y,
                    config: K,
                    unoptimized: l,
                    placeholder: H,
                    loader: D,
                    srcString: pe
                }, $);
                return s.default.createElement(s.default.Fragment, null, "raw" === G ? s.default.createElement(I, Object.assign({}, we)) : s.default.createElement("span", {
                    style: oe
                }, le ? s.default.createElement("span", {
                    style: ae
                }, ee ? s.default.createElement("img", {
                    style: {
                        display: "block",
                        maxWidth: "100%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0
                    },
                    alt: "",
                    "aria-hidden": !0,
                    src: ee
                }) : null) : null, s.default.createElement(I, Object.assign({}, we))), u ? s.default.createElement(f.default, null, s.default.createElement("link", Object.assign({
                    key: "__nimg-" + ge.src + ge.srcSet + ge.sizes,
                    rel: "preload",
                    as: "image",
                    href: ge.srcSet ? void 0 : ge.src
                }, me))) : null)
            };
            var c, u, s = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e)
                            if (Object.prototype.hasOwnProperty.call(e, r)) {
                                var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
                                n.get || n.set ? Object.defineProperty(t, r, n) : t[r] = e[r]
                            }
                    return t.default = e, t
                }(r(7294)),
                f = (c = r(3121)) && c.__esModule ? c : {
                    default: c
                },
                d = r(139),
                g = r(9246),
                p = r(8730),
                y = (r(670), r(2700));

            function m(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function h(e) {
                for (var t = arguments, r = function(r) {
                        var n = null != t[r] ? t[r] : {},
                            i = Object.keys(n);
                        "function" === typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        })))), i.forEach((function(t) {
                            m(e, t, n[t])
                        }))
                    }, n = 1; n < arguments.length; n++) r(n);
                return e
            }

            function b(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                }
                return i
            }
            u = {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                path: "/_next/image",
                loader: "default",
                experimentalLayoutRaw: !1
            };
            var v = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    experimentalLayoutRaw: !1
                },
                w = new Set,
                S = (new Map, "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
            var A = new Map([
                ["default", function(e) {
                    var t = e.config,
                        r = e.src,
                        n = e.width,
                        i = e.quality;
                    0;
                    if (r.endsWith(".svg") && !t.dangerouslyAllowSVG) return r;
                    return "".concat(y.normalizePathTrailingSlash(t.path), "?url=").concat(encodeURIComponent(r), "&w=").concat(n, "&q=").concat(i || 75)
                }],
                ["imgix", function(e) {
                    var t = e.config,
                        r = e.src,
                        n = e.width,
                        i = e.quality,
                        o = new URL("".concat(t.path).concat(x(r))),
                        a = o.searchParams;
                    a.set("auto", a.get("auto") || "format"), a.set("fit", a.get("fit") || "max"), a.set("w", a.get("w") || n.toString()), i && a.set("q", i.toString());
                    return o.href
                }],
                ["cloudinary", function(e) {
                    var t = e.config,
                        r = e.src,
                        n = e.width,
                        i = e.quality,
                        o = ["f_auto", "c_limit", "w_" + n, "q_" + (i || "auto")].join(",") + "/";
                    return "".concat(t.path).concat(o).concat(x(r))
                }],
                ["akamai", function(e) {
                    var t = e.config,
                        r = e.src,
                        n = e.width;
                    return "".concat(t.path).concat(x(r), "?imwidth=").concat(n)
                }],
                ["custom", function(e) {
                    var t = e.src;
                    throw new Error('Image with src "'.concat(t, '" is missing "loader" prop.') + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")
                }]
            ]);

            function j(e) {
                return void 0 !== e.default
            }

            function z(e) {
                var t = e.config,
                    r = e.src,
                    n = e.unoptimized,
                    i = e.layout,
                    o = e.width,
                    l = e.quality,
                    c = e.sizes,
                    u = e.loader;
                if (n) return {
                    src: r,
                    srcSet: void 0,
                    sizes: void 0
                };
                var s = function(e, t, r, n) {
                        var i = e.deviceSizes,
                            o = e.allSizes;
                        if (n && ("fill" === r || "responsive" === r || "raw" === r)) {
                            for (var l, c = /(^|\s)(1?\d?\d)vw/g, u = []; l = c.exec(n); l) u.push(parseInt(l[2]));
                            if (u.length) {
                                var s, f = .01 * (s = Math).min.apply(s, a(u));
                                return {
                                    widths: o.filter((function(e) {
                                        return e >= i[0] * f
                                    })),
                                    kind: "w"
                                }
                            }
                            return {
                                widths: o,
                                kind: "w"
                            }
                        }
                        return "number" !== typeof t || "fill" === r || "responsive" === r ? {
                            widths: i,
                            kind: "w"
                        } : {
                            widths: a(new Set([t, 2 * t].map((function(e) {
                                return o.find((function(t) {
                                    return t >= e
                                })) || o[o.length - 1]
                            })))),
                            kind: "x"
                        }
                    }(t, o, i, c),
                    f = s.widths,
                    d = s.kind,
                    g = f.length - 1;
                return {
                    sizes: c || "w" !== d ? c : "100vw",
                    srcSet: f.map((function(e, n) {
                        return "".concat(u({
                            config: t,
                            src: r,
                            quality: l,
                            width: e
                        }), " ").concat("w" === d ? e : n + 1).concat(d)
                    })).join(", "),
                    src: u({
                        config: t,
                        src: r,
                        quality: l,
                        width: f[g]
                    })
                }
            }

            function O(e) {
                return "number" === typeof e ? e : "string" === typeof e ? parseInt(e, 10) : void 0
            }

            function E(e) {
                var t, r = (null === (t = e.config) || void 0 === t ? void 0 : t.loader) || "default",
                    n = A.get(r);
                if (n) return n(e);
                throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "), ". Received: ").concat(r))
            }
            var I = function(e) {
                var t = e.imgAttributes,
                    r = e.heightInt,
                    n = e.widthInt,
                    i = e.qualityInt,
                    o = e.layout,
                    a = e.className,
                    l = e.imgStyle,
                    c = e.blurStyle,
                    u = e.isLazy,
                    f = e.imgRef,
                    d = e.placeholder,
                    g = e.loading,
                    p = e.sizes,
                    y = e.srcString,
                    m = e.config,
                    v = e.unoptimized,
                    w = e.loader,
                    S = b(e, ["imgAttributes", "heightInt", "widthInt", "qualityInt", "layout", "className", "imgStyle", "blurStyle", "isLazy", "imgRef", "placeholder", "loading", "sizes", "srcString", "config", "unoptimized", "loader"]);
                return s.default.createElement(s.default.Fragment, null, s.default.createElement("img", Object.assign({}, S, t, "raw" !== o || p ? {} : {
                    height: r,
                    width: n
                }, {
                    decoding: "async",
                    "data-nimg": o,
                    className: a,
                    ref: f,
                    style: h({}, l, c)
                })), (u || "blur" === d) && s.default.createElement("noscript", null, s.default.createElement("img", Object.assign({}, S, z({
                    config: m,
                    src: y,
                    unoptimized: v,
                    layout: o,
                    width: n,
                    quality: i,
                    sizes: p,
                    loader: w
                }), "raw" !== o || p ? {} : {
                    height: r,
                    width: n
                }, {
                    decoding: "async",
                    "data-nimg": o,
                    style: l,
                    className: a,
                    loading: g || "lazy"
                }))))
            };

            function x(e) {
                return "/" === e[0] ? e.slice(1) : e
            }
        },
        1551: function(e, t, r) {
            "use strict";

            function n(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function i(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, o = [],
                            a = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(a = (n = r.next()).done) && (o.push(n.value), !t || o.length !== t); a = !0);
                        } catch (c) {
                            l = !0, i = c
                        } finally {
                            try {
                                a || null == r.return || r.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return n(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return n(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            t.default = void 0;
            var o, a = (o = r(7294)) && o.__esModule ? o : {
                    default: o
                },
                l = r(1003),
                c = r(880),
                u = r(9246);
            var s = {};

            function f(e, t, r, n) {
                if (e && l.isLocalURL(t)) {
                    e.prefetch(t, r, n).catch((function(e) {
                        0
                    }));
                    var i = n && "undefined" !== typeof n.locale ? n.locale : e && e.locale;
                    s[t + "%" + r + (i ? "%" + i : "")] = !0
                }
            }
            var d = function(e) {
                var t, r = !1 !== e.prefetch,
                    n = c.useRouter(),
                    o = a.default.useMemo((function() {
                        var t = i(l.resolveHref(n, e.href, !0), 2),
                            r = t[0],
                            o = t[1];
                        return {
                            href: r,
                            as: e.as ? l.resolveHref(n, e.as) : o || r
                        }
                    }), [n, e.href, e.as]),
                    d = o.href,
                    g = o.as,
                    p = e.children,
                    y = e.replace,
                    m = e.shallow,
                    h = e.scroll,
                    b = e.locale;
                "string" === typeof p && (p = a.default.createElement("a", null, p));
                var v = (t = a.default.Children.only(p)) && "object" === typeof t && t.ref,
                    w = i(u.useIntersection({
                        rootMargin: "200px"
                    }), 2),
                    S = w[0],
                    A = w[1],
                    j = a.default.useCallback((function(e) {
                        S(e), v && ("function" === typeof v ? v(e) : "object" === typeof v && (v.current = e))
                    }), [v, S]);
                a.default.useEffect((function() {
                    var e = A && r && l.isLocalURL(d),
                        t = "undefined" !== typeof b ? b : n && n.locale,
                        i = s[d + "%" + g + (t ? "%" + t : "")];
                    e && !i && f(n, d, g, {
                        locale: t
                    })
                }), [g, d, A, b, r, n]);
                var z = {
                    ref: j,
                    onClick: function(e) {
                        t.props && "function" === typeof t.props.onClick && t.props.onClick(e), e.defaultPrevented || function(e, t, r, n, i, o, a, c) {
                            ("A" !== e.currentTarget.nodeName.toUpperCase() || ! function(e) {
                                var t = e.currentTarget.target;
                                return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                            }(e) && l.isLocalURL(r)) && (e.preventDefault(), t[i ? "replace" : "push"](r, n, {
                                shallow: o,
                                locale: c,
                                scroll: a
                            }))
                        }(e, n, d, g, y, m, h, b)
                    },
                    onMouseEnter: function(e) {
                        t.props && "function" === typeof t.props.onMouseEnter && t.props.onMouseEnter(e), l.isLocalURL(d) && f(n, d, g, {
                            priority: !0
                        })
                    }
                };
                if (e.passHref || "a" === t.type && !("href" in t.props)) {
                    var O = "undefined" !== typeof b ? b : n && n.locale,
                        E = n && n.isLocaleDomain && l.getDomainLocale(g, O, n && n.locales, n && n.domainLocales);
                    z.href = E || l.addBasePath(l.addLocale(g, O, n && n.defaultLocale))
                }
                return a.default.cloneElement(t, z)
            };
            t.default = d
        },
        9246: function(e, t, r) {
            "use strict";

            function n(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function i(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, o = [],
                            a = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(a = (n = r.next()).done) && (o.push(n.value), !t || o.length !== t); a = !0);
                        } catch (c) {
                            l = !0, i = c
                        } finally {
                            try {
                                a || null == r.return || r.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return n(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return n(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useIntersection = function(e) {
                var t = e.rootRef,
                    r = e.rootMargin,
                    n = e.disabled || !l,
                    s = o.useRef(),
                    f = i(o.useState(!1), 2),
                    d = f[0],
                    g = f[1],
                    p = i(o.useState(t ? t.current : null), 2),
                    y = p[0],
                    m = p[1],
                    h = o.useCallback((function(e) {
                        s.current && (s.current(), s.current = void 0), n || d || e && e.tagName && (s.current = function(e, t, r) {
                            var n = function(e) {
                                    var t, r = {
                                            root: e.root || null,
                                            margin: e.rootMargin || ""
                                        },
                                        n = u.find((function(e) {
                                            return e.root === r.root && e.margin === r.margin
                                        }));
                                    n ? t = c.get(n) : (t = c.get(r), u.push(r));
                                    if (t) return t;
                                    var i = new Map,
                                        o = new IntersectionObserver((function(e) {
                                            e.forEach((function(e) {
                                                var t = i.get(e.target),
                                                    r = e.isIntersecting || e.intersectionRatio > 0;
                                                t && r && t(r)
                                            }))
                                        }), e);
                                    return c.set(r, t = {
                                        id: r,
                                        observer: o,
                                        elements: i
                                    }), t
                                }(r),
                                i = n.id,
                                o = n.observer,
                                a = n.elements;
                            return a.set(e, t), o.observe(e),
                                function() {
                                    if (a.delete(e), o.unobserve(e), 0 === a.size) {
                                        o.disconnect(), c.delete(i);
                                        var t = u.findIndex((function(e) {
                                            return e.root === i.root && e.margin === i.margin
                                        }));
                                        t > -1 && u.splice(t, 1)
                                    }
                                }
                        }(e, (function(e) {
                            return e && g(e)
                        }), {
                            root: y,
                            rootMargin: r
                        }))
                    }), [n, y, r, d]);
                return o.useEffect((function() {
                    if (!l && !d) {
                        var e = a.requestIdleCallback((function() {
                            return g(!0)
                        }));
                        return function() {
                            return a.cancelIdleCallback(e)
                        }
                    }
                }), [d]), o.useEffect((function() {
                    t && m(t.current)
                }), [t]), [h, d]
            };
            var o = r(7294),
                a = r(4686),
                l = "undefined" !== typeof IntersectionObserver;
            var c = new Map,
                u = []
        },
        5675: function(e, t, r) {
            e.exports = r(9749)
        },
        1664: function(e, t, r) {
            e.exports = r(1551)
        },
        1163: function(e, t, r) {
            e.exports = r(880)
        }
    }
]);