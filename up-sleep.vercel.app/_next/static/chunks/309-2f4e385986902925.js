"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [309], {
        2840: function(t, e, r) {
            var n = this && this.__assign || function() {
                    return n = Object.assign || function(t) {
                        for (var e, r = 1, n = arguments.length; r < n; r++)
                            for (var i in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                        return t
                    }, n.apply(this, arguments)
                },
                i = this && this.__rest || function(t, e) {
                    var r = {};
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
                    if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
                        var i = 0;
                        for (n = Object.getOwnPropertySymbols(t); i < n.length; i++) e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]])
                    }
                    return r
                },
                a = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = a(r(7294)),
                l = a(r(8972));
            e.default = function(t) {
                var e = t.color,
                    r = i(t, ["color"]);
                return o.default.createElement(l.default, n({}, r, {
                    startColor: e,
                    middleColor: e,
                    endColor: e
                }))
            }
        },
        8972: function(t, e, r) {
            var n = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(r(7294));

            function a() {
                return "_" + Math.random().toString(36).substr(2, 9)
            }
            e.default = function(t) {
                var e = t.size,
                    r = t.progress,
                    n = t.strokeWidth,
                    o = void 0 === n ? 6 : n,
                    l = t.emptyColor,
                    c = t.startColor,
                    s = t.endColor,
                    u = t.middleColor,
                    f = t.withSnail,
                    p = void 0 !== f && f,
                    y = t.classes,
                    h = t.children,
                    d = 50,
                    m = d + o,
                    v = r > d ? 1 : r / d,
                    b = r <= d ? 0 : (r - d) / d,
                    g = 2 * Math.PI * 25 / 2,
                    x = a(),
                    O = a();
                return i.default.createElement("div", {
                    className: ["CircularProgress", null === y || void 0 === y ? void 0 : y.indicator.container].join(" "),
                    style: {
                        width: e + "px",
                        height: e + "px"
                    }
                }, i.default.createElement("svg", {
                    viewBox: "0 0 " + m + " " + m
                }, i.default.createElement("defs", null, i.default.createElement("linearGradient", {
                    id: x,
                    x1: "50%",
                    y1: "0%",
                    x2: "0%",
                    y2: "100%"
                }, i.default.createElement("stop", {
                    offset: "0%",
                    stopColor: c
                }), i.default.createElement("stop", {
                    offset: "90%",
                    stopColor: u
                })), i.default.createElement("linearGradient", {
                    id: O,
                    x1: "0%",
                    y1: "0%",
                    x2: "50%",
                    y2: "100%"
                }, i.default.createElement("stop", {
                    offset: "0%",
                    stopColor: s
                }), i.default.createElement("stop", {
                    offset: "90%",
                    stopColor: u
                }))), i.default.createElement("path", {
                    className: null === y || void 0 === y ? void 0 : y.indicator.empty,
                    fill: "none",
                    stroke: l,
                    d: "\n              M " + o / 2 + " " + m / 2 + "\n              a 25 25 0 1 1 " + "50 0\n              a 25 25 0 1 1 -" + "50 0\n            ",
                    strokeWidth: o
                }), i.default.createElement("path", {
                    className: null === y || void 0 === y ? void 0 : y.indicator.progression,
                    fill: "none",
                    stroke: "url(#" + x + ")",
                    strokeDasharray: v * g + "," + g,
                    strokeLinecap: "round",
                    d: "\n              M " + m / 2 + " " + o / 2 + "\n              a 25 25 0 1 1 0 " + "50\n            ",
                    strokeWidth: o
                }), r >= 50 && i.default.createElement("path", {
                    className: null === y || void 0 === y ? void 0 : y.indicator.progression,
                    fill: "none",
                    stroke: "url(#" + O + ")",
                    strokeDasharray: b * g + "," + g,
                    strokeLinecap: "round",
                    d: "\n              M " + m / 2 + " " + (m - o / 2) + "\n              a 25 25 0 0 1 0 -" + "50\n            ",
                    strokeWidth: o
                }), p && i.default.createElement("circle", {
                    className: null === y || void 0 === y ? void 0 : y.snail,
                    cx: m / 2,
                    cy: o / 2,
                    r: o / 4,
                    fill: "white",
                    transform: "rotate(" + r / 100 * 360 + ", " + m / 2 + ", " + m / 2 + ")"
                })), h || i.default.createElement("div", {
                    style: {
                        fontSize: e / 6
                    },
                    className: ["textContent"].join(" ")
                }, i.default.createElement("span", {
                    className: ["text"].join(" ")
                }, r, "%")))
            }
        },
        5072: function(t, e, r) {
            var n = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.GradientCircularProgress = e.CircularProgress = void 0;
            var i = n(r(2840));
            e.CircularProgress = i.default;
            var a = n(r(8972));
            e.GradientCircularProgress = a.default
        },
        4195: function(t, e, r) {
            r.d(e, {
                q: function() {
                    return x
                }
            });
            var n = r(3560),
                i = r.n(n),
                a = r(7294),
                o = r(9055),
                l = r(9896);

            function c(t) {
                return c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, c(t)
            }

            function s() {
                return s = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }, s.apply(this, arguments)
            }

            function u(t, e) {
                if (null == t) return {};
                var r, n, i = function(t, e) {
                    if (null == t) return {};
                    var r, n, i = {},
                        a = Object.keys(t);
                    for (n = 0; n < a.length; n++) r = a[n], e.indexOf(r) >= 0 || (i[r] = t[r]);
                    return i
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < a.length; n++) r = a[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r])
                }
                return i
            }

            function f(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function p(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? f(Object(r), !0).forEach((function(e) {
                        y(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function y(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function h(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function d(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function m(t, e) {
                return m = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, m(t, e)
            }

            function v(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = g(t);
                    if (e) {
                        var i = g(this).constructor;
                        r = Reflect.construct(n, arguments, i)
                    } else r = n.apply(this, arguments);
                    return b(this, r)
                }
            }

            function b(t, e) {
                return !e || "object" !== c(e) && "function" !== typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function g(t) {
                return g = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, g(t)
            }
            var x = function(t) {
                ! function(t, e) {
                    if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && m(t, e)
                }(f, t);
                var e, r, n, c = v(f);

                function f() {
                    return h(this, f), c.apply(this, arguments)
                }
                return e = f, n = [{
                    key: "renderLineItem",
                    value: function(t, e) {
                        var r;
                        if (a.isValidElement(t)) r = a.cloneElement(t, e);
                        else if (i()(t)) r = t(e);
                        else {
                            var n = e.x1,
                                o = e.y1,
                                c = e.x2,
                                f = e.y2,
                                p = e.key,
                                y = u(e, ["x1", "y1", "x2", "y2", "key"]);
                            r = a.createElement("line", s({}, (0, l.L6)(y), {
                                x1: n,
                                y1: o,
                                x2: c,
                                y2: f,
                                fill: "none",
                                key: p
                            }))
                        }
                        return r
                    }
                }], (r = [{
                    key: "renderHorizontal",
                    value: function(t) {
                        var e = this,
                            r = this.props,
                            n = r.x,
                            i = r.width,
                            o = r.horizontal;
                        if (!t || !t.length) return null;
                        var l = t.map((function(t, r) {
                            var a = p(p({}, e.props), {}, {
                                x1: n,
                                y1: t,
                                x2: n + i,
                                y2: t,
                                key: "line-".concat(r),
                                index: r
                            });
                            return f.renderLineItem(o, a)
                        }));
                        return a.createElement("g", {
                            className: "recharts-cartesian-grid-horizontal"
                        }, l)
                    }
                }, {
                    key: "renderVertical",
                    value: function(t) {
                        var e = this,
                            r = this.props,
                            n = r.y,
                            i = r.height,
                            o = r.vertical;
                        if (!t || !t.length) return null;
                        var l = t.map((function(t, r) {
                            var a = p(p({}, e.props), {}, {
                                x1: t,
                                y1: n,
                                x2: t,
                                y2: n + i,
                                key: "line-".concat(r),
                                index: r
                            });
                            return f.renderLineItem(o, a)
                        }));
                        return a.createElement("g", {
                            className: "recharts-cartesian-grid-vertical"
                        }, l)
                    }
                }, {
                    key: "renderVerticalStripes",
                    value: function(t) {
                        var e = this.props.verticalFill;
                        if (!e || !e.length) return null;
                        var r = this.props,
                            n = r.fillOpacity,
                            i = r.x,
                            o = r.y,
                            l = r.width,
                            c = r.height,
                            s = t.slice().sort((function(t, e) {
                                return t - e
                            }));
                        i !== s[0] && s.unshift(0);
                        var u = s.map((function(t, r) {
                            var u = s[r + 1] ? s[r + 1] - t : i + l - t;
                            if (u <= 0) return null;
                            var f = r % e.length;
                            return a.createElement("rect", {
                                key: "react-".concat(r),
                                x: Math.round(t + i - i),
                                y: o,
                                width: u,
                                height: c,
                                stroke: "none",
                                fill: e[f],
                                fillOpacity: n,
                                className: "recharts-cartesian-grid-bg"
                            })
                        }));
                        return a.createElement("g", {
                            className: "recharts-cartesian-gridstripes-vertical"
                        }, u)
                    }
                }, {
                    key: "renderHorizontalStripes",
                    value: function(t) {
                        var e = this.props.horizontalFill;
                        if (!e || !e.length) return null;
                        var r = this.props,
                            n = r.fillOpacity,
                            i = r.x,
                            o = r.y,
                            l = r.width,
                            c = r.height,
                            s = t.slice().sort((function(t, e) {
                                return t - e
                            }));
                        o !== s[0] && s.unshift(0);
                        var u = s.map((function(t, r) {
                            var u = s[r + 1] ? s[r + 1] - t : o + c - t;
                            if (u <= 0) return null;
                            var f = r % e.length;
                            return a.createElement("rect", {
                                key: "react-".concat(r),
                                y: Math.round(t + o - o),
                                x: i,
                                height: u,
                                width: l,
                                stroke: "none",
                                fill: e[f],
                                fillOpacity: n,
                                className: "recharts-cartesian-grid-bg"
                            })
                        }));
                        return a.createElement("g", {
                            className: "recharts-cartesian-gridstripes-horizontal"
                        }, u)
                    }
                }, {
                    key: "renderBackground",
                    value: function() {
                        var t = this.props.fill;
                        if (!t || "none" === t) return null;
                        var e = this.props,
                            r = e.fillOpacity,
                            n = e.x,
                            i = e.y,
                            o = e.width,
                            l = e.height;
                        return a.createElement("rect", {
                            x: n,
                            y: i,
                            width: o,
                            height: l,
                            stroke: "none",
                            fill: t,
                            fillOpacity: r,
                            className: "recharts-cartesian-grid-bg"
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this.props,
                            e = t.x,
                            r = t.y,
                            n = t.width,
                            l = t.height,
                            c = t.horizontal,
                            s = t.vertical,
                            u = t.horizontalCoordinatesGenerator,
                            f = t.verticalCoordinatesGenerator,
                            p = t.xAxis,
                            y = t.yAxis,
                            h = t.offset,
                            d = t.chartWidth,
                            m = t.chartHeight;
                        if (!(0, o.hj)(n) || n <= 0 || !(0, o.hj)(l) || l <= 0 || !(0, o.hj)(e) || e !== +e || !(0, o.hj)(r) || r !== +r) return null;
                        var v = this.props,
                            b = v.horizontalPoints,
                            g = v.verticalPoints;
                        return b && b.length || !i()(u) || (b = u({
                            yAxis: y,
                            width: d,
                            height: m,
                            offset: h
                        })), g && g.length || !i()(f) || (g = f({
                            xAxis: p,
                            width: d,
                            height: m,
                            offset: h
                        })), a.createElement("g", {
                            className: "recharts-cartesian-grid"
                        }, this.renderBackground(), c && this.renderHorizontal(b), s && this.renderVertical(g), c && this.renderHorizontalStripes(b), s && this.renderVerticalStripes(g))
                    }
                }]) && d(e.prototype, r), n && d(e, n), f
            }(a.PureComponent);
            x.displayName = "CartesianGrid", x.defaultProps = {
                horizontal: !0,
                vertical: !0,
                horizontalPoints: [],
                verticalPoints: [],
                stroke: "#ccc",
                fill: "none",
                verticalFill: [],
                horizontalFill: []
            }
        },
        6143: function(t, e, r) {
            r.d(e, {
                c: function() {
                    return at
                }
            });
            var n = r(701),
                i = r(6108),
                a = r(4293),
                o = r.n(a),
                l = r(8446),
                c = r.n(l),
                s = r(3560),
                u = r.n(s),
                f = r(1469),
                p = r.n(f),
                y = r(7294),
                h = r(4184),
                d = r.n(h),
                m = r(4524),
                v = r(3481),
                b = r(8710),
                g = r(6641),
                x = function(t) {
                    return null
                };
            x.displayName = "Cell";
            var O = r(2763),
                P = r(9055),
                w = r(2017),
                A = r(7523),
                k = r(7718),
                E = r(9896);

            function j(t) {
                return j = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, j(t)
            }

            function S(t, e) {
                if (null == t) return {};
                var r, n, i = function(t, e) {
                    if (null == t) return {};
                    var r, n, i = {},
                        a = Object.keys(t);
                    for (n = 0; n < a.length; n++) r = a[n], e.indexOf(r) >= 0 || (i[r] = t[r]);
                    return i
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < a.length; n++) r = a[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r])
                }
                return i
            }

            function _() {
                return _ = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }, _.apply(this, arguments)
            }

            function N(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function z(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? N(Object(r), !0).forEach((function(e) {
                        C(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : N(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function C(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function D(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function I(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function R(t, e) {
                return R = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, R(t, e)
            }

            function F(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = B(t);
                    if (e) {
                        var i = B(this).constructor;
                        r = Reflect.construct(n, arguments, i)
                    } else r = n.apply(this, arguments);
                    return M(this, r)
                }
            }

            function M(t, e) {
                return !e || "object" !== j(e) && "function" !== typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function B(t) {
                return B = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, B(t)
            }
            var T = function(t) {
                ! function(t, e) {
                    if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && R(t, e)
                }(a, t);
                var e, r, n, i = F(a);

                function a() {
                    var t;
                    D(this, a);
                    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                    return (t = i.call.apply(i, [this].concat(r))).state = {
                        isAnimationFinished: !1
                    }, t.id = (0, P.EL)("recharts-bar-"), t.handleAnimationEnd = function() {
                        var e = t.props.onAnimationEnd;
                        t.setState({
                            isAnimationFinished: !0
                        }), e && e()
                    }, t.handleAnimationStart = function() {
                        var e = t.props.onAnimationStart;
                        t.setState({
                            isAnimationFinished: !1
                        }), e && e()
                    }, t
                }
                return e = a, n = [{
                    key: "getDerivedStateFromProps",
                    value: function(t, e) {
                        return t.animationId !== e.prevAnimationId ? {
                            prevAnimationId: t.animationId,
                            curData: t.data,
                            prevData: e.curData
                        } : t.data !== e.curData ? {
                            curData: t.data
                        } : null
                    }
                }, {
                    key: "renderRectangle",
                    value: function(t, e) {
                        return y.isValidElement(t) ? y.cloneElement(t, e) : u()(t) ? t(e) : y.createElement(v.A, e)
                    }
                }], (r = [{
                    key: "renderRectanglesStatically",
                    value: function(t) {
                        var e = this,
                            r = this.props.shape,
                            n = (0, E.L6)(this.props);
                        return t && t.map((function(t, i) {
                            var o = z(z(z({}, n), t), {}, {
                                index: i
                            });
                            return y.createElement(b.m, _({
                                className: "recharts-bar-rectangle"
                            }, (0, E.bw)(e.props, t, i), {
                                key: "rectangle-".concat(i)
                            }), a.renderRectangle(r, o))
                        }))
                    }
                }, {
                    key: "renderRectanglesWithAnimation",
                    value: function() {
                        var t = this,
                            e = this.props,
                            r = e.data,
                            n = e.layout,
                            i = e.isAnimationActive,
                            a = e.animationBegin,
                            o = e.animationDuration,
                            l = e.animationEasing,
                            c = e.animationId,
                            s = this.state.prevData;
                        return y.createElement(m.ZP, {
                            begin: a,
                            duration: o,
                            isActive: i,
                            easing: l,
                            from: {
                                t: 0
                            },
                            to: {
                                t: 1
                            },
                            key: "bar-".concat(c),
                            onAnimationEnd: this.handleAnimationEnd,
                            onAnimationStart: this.handleAnimationStart
                        }, (function(e) {
                            var i = e.t,
                                a = r.map((function(t, e) {
                                    var r = s && s[e];
                                    if (r) {
                                        var a = (0, P.k4)(r.x, t.x),
                                            o = (0, P.k4)(r.y, t.y),
                                            l = (0, P.k4)(r.width, t.width),
                                            c = (0, P.k4)(r.height, t.height);
                                        return z(z({}, t), {}, {
                                            x: a(i),
                                            y: o(i),
                                            width: l(i),
                                            height: c(i)
                                        })
                                    }
                                    if ("horizontal" === n) {
                                        var u = (0, P.k4)(0, t.height)(i);
                                        return z(z({}, t), {}, {
                                            y: t.y + t.height - u,
                                            height: u
                                        })
                                    }
                                    var f = (0, P.k4)(0, t.width)(i);
                                    return z(z({}, t), {}, {
                                        width: f
                                    })
                                }));
                            return y.createElement(b.m, null, t.renderRectanglesStatically(a))
                        }))
                    }
                }, {
                    key: "renderRectangles",
                    value: function() {
                        var t = this.props,
                            e = t.data,
                            r = t.isAnimationActive,
                            n = this.state.prevData;
                        return !(r && e && e.length) || n && c()(n, e) ? this.renderRectanglesStatically(e) : this.renderRectanglesWithAnimation()
                    }
                }, {
                    key: "renderBackground",
                    value: function() {
                        var t = this,
                            e = this.props.data,
                            r = (0, E.L6)(this.props.background);
                        return e.map((function(e, n) {
                            e.value;
                            var i = e.background,
                                o = S(e, ["value", "background"]);
                            if (!i) return null;
                            var l = z(z(z(z(z({}, o), {}, {
                                fill: "#eee"
                            }, i), r), (0, E.bw)(t.props, e, n)), {}, {
                                index: n,
                                key: "background-bar-".concat(n),
                                className: "recharts-bar-background-rectangle"
                            });
                            return a.renderRectangle(t.props.background, l)
                        }))
                    }
                }, {
                    key: "renderErrorBar",
                    value: function() {
                        if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
                        var t = this.props,
                            e = t.data,
                            r = t.xAxis,
                            n = t.yAxis,
                            i = t.layout,
                            a = t.children,
                            o = (0, w.NN)(a, g.W.displayName);
                        if (!o) return null;
                        var l = "vertical" === i ? e[0].height / 2 : e[0].width / 2;

                        function c(t, e) {
                            return {
                                x: t.x,
                                y: t.y,
                                value: t.value,
                                errorVal: (0, k.F$)(t, e)
                            }
                        }
                        return o.map((function(t, a) {
                            return y.cloneElement(t, {
                                key: "error-bar-".concat(a),
                                data: e,
                                xAxis: r,
                                yAxis: n,
                                layout: i,
                                offset: l,
                                dataPointFormatter: c
                            })
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this.props,
                            e = t.hide,
                            r = t.data,
                            n = t.className,
                            i = t.xAxis,
                            a = t.yAxis,
                            l = t.left,
                            c = t.top,
                            s = t.width,
                            u = t.height,
                            f = t.isAnimationActive,
                            p = t.background,
                            h = t.id;
                        if (e || !r || !r.length) return null;
                        var m = this.state.isAnimationFinished,
                            v = d()("recharts-bar", n),
                            g = i && i.allowDataOverflow || a && a.allowDataOverflow,
                            x = o()(h) ? this.id : h;
                        return y.createElement(b.m, {
                            className: v
                        }, g ? y.createElement("defs", null, y.createElement("clipPath", {
                            id: "clipPath-".concat(x)
                        }, y.createElement("rect", {
                            x: l,
                            y: c,
                            width: s,
                            height: u
                        }))) : null, y.createElement(b.m, {
                            className: "recharts-bar-rectangles",
                            clipPath: g ? "url(#clipPath-".concat(x, ")") : null
                        }, p ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(), (!f || m) && O.e.renderCallByParent(this.props, r))
                    }
                }]) && I(e.prototype, r), n && I(e, n), a
            }(y.PureComponent);
            T.displayName = "Bar", T.defaultProps = {
                xAxisId: 0,
                yAxisId: 0,
                legendType: "rect",
                minPointSize: 0,
                hide: !1,
                data: [],
                layout: "vertical",
                isAnimationActive: !A.x.isSsr,
                animationBegin: 0,
                animationDuration: 400,
                animationEasing: "ease"
            }, T.getComposedData = function(t) {
                var e = t.props,
                    r = t.item,
                    n = t.barPosition,
                    i = t.bandSize,
                    a = t.xAxis,
                    o = t.yAxis,
                    l = t.xAxisTicks,
                    c = t.yAxisTicks,
                    s = t.stackedData,
                    u = t.dataStartIndex,
                    f = t.displayedData,
                    y = t.offset,
                    h = (0, k.Bu)(n, r);
                if (!h) return null;
                var d = e.layout,
                    m = r.props,
                    v = m.dataKey,
                    b = m.children,
                    g = m.minPointSize,
                    O = "horizontal" === d ? o : a,
                    A = s ? O.scale.domain() : null,
                    E = (0, k.Yj)({
                        numericAxis: O
                    }),
                    j = (0, w.NN)(b, x.displayName),
                    S = f.map((function(t, e) {
                        var n, f, y, m, b, x;
                        if (s ? n = (0, k.Vv)(s[u + e], A) : (n = (0, k.F$)(t, v), p()(n) || (n = [E, n])), "horizontal" === d) {
                            if (f = (0, k.Fy)({
                                    axis: a,
                                    ticks: l,
                                    bandSize: i,
                                    offset: h.offset,
                                    entry: t,
                                    index: e
                                }), y = o.scale(n[1]), m = h.size, b = o.scale(n[0]) - o.scale(n[1]), x = {
                                    x: f,
                                    y: o.y,
                                    width: m,
                                    height: o.height
                                }, Math.abs(g) > 0 && Math.abs(b) < Math.abs(g)) {
                                var O = (0, P.uY)(b || g) * (Math.abs(g) - Math.abs(b));
                                y -= O, b += O
                            }
                        } else f = a.scale(n[0]), y = (0, k.Fy)({
                            axis: o,
                            ticks: c,
                            bandSize: i,
                            offset: h.offset,
                            entry: t,
                            index: e
                        }), m = a.scale(n[1]) - a.scale(n[0]), b = h.size, x = {
                            x: a.x,
                            y: y,
                            width: a.width,
                            height: b
                        }, Math.abs(g) > 0 && Math.abs(m) < Math.abs(g) && (m += (0, P.uY)(m || g) * (Math.abs(g) - Math.abs(m)));
                        return z(z(z({}, t), {}, {
                            x: f,
                            y: y,
                            width: m,
                            height: b,
                            value: s ? n : n[1],
                            payload: t,
                            background: x
                        }, j && j[e] && j[e].props), {}, {
                            tooltipPayload: [(0, k.Qo)(r, t)],
                            tooltipPosition: {
                                x: f + m / 2,
                                y: y + b / 2
                            }
                        })
                    }));
                return z({
                    data: S,
                    layout: d
                }, y)
            };
            var K = r(6880),
                L = function() {
                    return null
                };
            L.displayName = "ZAxis", L.defaultProps = {
                zAxisId: 0,
                range: [64, 64],
                scale: "auto",
                type: "number"
            };
            var V = r(3508),
                W = r(6353);

            function G(t) {
                return G = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, G(t)
            }

            function H() {
                return H = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }, H.apply(this, arguments)
            }

            function $(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Y(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? $(Object(r), !0).forEach((function(e) {
                        Z(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : $(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function Z(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function q(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function J(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function Q(t, e) {
                return Q = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, Q(t, e)
            }

            function U(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = tt(t);
                    if (e) {
                        var i = tt(this).constructor;
                        r = Reflect.construct(n, arguments, i)
                    } else r = n.apply(this, arguments);
                    return X(this, r)
                }
            }

            function X(t, e) {
                return !e || "object" !== G(e) && "function" !== typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function tt(t) {
                return tt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, tt(t)
            }
            var et = function(t) {
                ! function(t, e) {
                    if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && Q(t, e)
                }(a, t);
                var e, r, n, i = U(a);

                function a() {
                    var t;
                    q(this, a);
                    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                    return (t = i.call.apply(i, [this].concat(r))).state = {
                        isAnimationFinished: !1
                    }, t.handleAnimationEnd = function() {
                        t.setState({
                            isAnimationFinished: !0
                        })
                    }, t.handleAnimationStart = function() {
                        t.setState({
                            isAnimationFinished: !1
                        })
                    }, t.id = (0, P.EL)("recharts-scatter-"), t
                }
                return e = a, n = [{
                    key: "getDerivedStateFromProps",
                    value: function(t, e) {
                        return t.animationId !== e.prevAnimationId ? {
                            prevAnimationId: t.animationId,
                            curPoints: t.points,
                            prevPoints: e.curPoints
                        } : t.points !== e.curPoints ? {
                            curPoints: t.points
                        } : null
                    }
                }, {
                    key: "renderSymbolItem",
                    value: function(t, e) {
                        var r;
                        return y.isValidElement(t) ? r = y.cloneElement(t, e) : u()(t) ? r = t(e) : "string" === typeof t && (r = y.createElement(W.v, H({}, e, {
                            type: t
                        }))), r
                    }
                }], (r = [{
                    key: "renderSymbolsStatically",
                    value: function(t) {
                        var e = this,
                            r = this.props,
                            n = r.shape,
                            i = r.activeShape,
                            o = r.activeIndex,
                            l = (0, E.L6)(this.props);
                        return t.map((function(t, r) {
                            var c = Y(Y({
                                key: "symbol-".concat(r)
                            }, l), t);
                            return y.createElement(b.m, H({
                                className: "recharts-scatter-symbol"
                            }, (0, E.bw)(e.props, t, r), {
                                key: "symbol-".concat(r)
                            }), a.renderSymbolItem(o === r ? i : n, c))
                        }))
                    }
                }, {
                    key: "renderSymbolsWithAnimation",
                    value: function() {
                        var t = this,
                            e = this.props,
                            r = e.points,
                            n = e.isAnimationActive,
                            i = e.animationBegin,
                            a = e.animationDuration,
                            o = e.animationEasing,
                            l = e.animationId,
                            c = this.state.prevPoints;
                        return y.createElement(m.ZP, {
                            begin: i,
                            duration: a,
                            isActive: n,
                            easing: o,
                            from: {
                                t: 0
                            },
                            to: {
                                t: 1
                            },
                            key: "pie-".concat(l),
                            onAnimationEnd: this.handleAnimationEnd,
                            onAnimationStart: this.handleAnimationStart
                        }, (function(e) {
                            var n = e.t,
                                i = r.map((function(t, e) {
                                    var r = c && c[e];
                                    if (r) {
                                        var i = (0, P.k4)(r.cx, t.cx),
                                            a = (0, P.k4)(r.cy, t.cy),
                                            o = (0, P.k4)(r.size, t.size);
                                        return Y(Y({}, t), {}, {
                                            cx: i(n),
                                            cy: a(n),
                                            size: o(n)
                                        })
                                    }
                                    var l = (0, P.k4)(0, t.size);
                                    return Y(Y({}, t), {}, {
                                        size: l(n)
                                    })
                                }));
                            return y.createElement(b.m, null, t.renderSymbolsStatically(i))
                        }))
                    }
                }, {
                    key: "renderSymbols",
                    value: function() {
                        var t = this.props,
                            e = t.points,
                            r = t.isAnimationActive,
                            n = this.state.prevPoints;
                        return !(r && e && e.length) || n && c()(n, e) ? this.renderSymbolsStatically(e) : this.renderSymbolsWithAnimation()
                    }
                }, {
                    key: "renderErrorBar",
                    value: function() {
                        if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
                        var t = this.props,
                            e = t.points,
                            r = t.xAxis,
                            n = t.yAxis,
                            i = t.children,
                            a = (0, w.NN)(i, g.W.displayName);
                        if (!a) return null;

                        function o(t, e) {
                            return {
                                x: t.cx,
                                y: t.cy,
                                value: +t.node.y,
                                errorVal: (0, k.F$)(t, e)
                            }
                        }

                        function l(t, e) {
                            return {
                                x: t.cx,
                                y: t.cy,
                                value: +t.node.x,
                                errorVal: (0, k.F$)(t, e)
                            }
                        }
                        return a.map((function(t, i) {
                            var a = t.props.direction;
                            return y.cloneElement(t, {
                                key: i,
                                data: e,
                                xAxis: r,
                                yAxis: n,
                                layout: "x" === a ? "vertical" : "horizontal",
                                dataPointFormatter: "x" === a ? l : o
                            })
                        }))
                    }
                }, {
                    key: "renderLine",
                    value: function() {
                        var t, e, r = this.props,
                            n = r.points,
                            i = r.line,
                            a = r.lineType,
                            o = r.lineJointType,
                            l = (0, E.L6)(this.props),
                            c = (0, E.L6)(i);
                        if ("joint" === a) t = n.map((function(t) {
                            return {
                                x: t.cx,
                                y: t.cy
                            }
                        }));
                        else if ("fitting" === a) {
                            var s = (0, P.wr)(n),
                                f = s.xmin,
                                p = s.xmax,
                                h = s.a,
                                d = s.b,
                                m = function(t) {
                                    return h * t + d
                                };
                            t = [{
                                x: f,
                                y: m(f)
                            }, {
                                x: p,
                                y: m(p)
                            }]
                        }
                        var v = Y(Y(Y({}, l), {}, {
                            fill: "none",
                            stroke: l && l.fill
                        }, c), {}, {
                            points: t
                        });
                        return e = y.isValidElement(i) ? y.cloneElement(i, v) : u()(i) ? i(v) : y.createElement(V.H, H({}, v, {
                            type: o
                        })), y.createElement(b.m, {
                            className: "recharts-scatter-line",
                            key: "recharts-scatter-line"
                        }, e)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this.props,
                            e = t.hide,
                            r = t.points,
                            n = t.line,
                            i = t.className,
                            a = t.xAxis,
                            l = t.yAxis,
                            c = t.left,
                            s = t.top,
                            u = t.width,
                            f = t.height,
                            p = t.id,
                            h = t.isAnimationActive;
                        if (e || !r || !r.length) return null;
                        var m = this.state.isAnimationFinished,
                            v = d()("recharts-scatter", i),
                            g = a && a.allowDataOverflow || l && l.allowDataOverflow,
                            x = o()(p) ? this.id : p;
                        return y.createElement(b.m, {
                            className: v,
                            clipPath: g ? "url(#clipPath-".concat(x, ")") : null
                        }, g ? y.createElement("defs", null, y.createElement("clipPath", {
                            id: "clipPath-".concat(x)
                        }, y.createElement("rect", {
                            x: c,
                            y: s,
                            width: u,
                            height: f
                        }))) : null, n && this.renderLine(), this.renderErrorBar(), y.createElement(b.m, {
                            key: "recharts-scatter-symbols"
                        }, this.renderSymbols()), (!h || m) && O.e.renderCallByParent(this.props, r))
                    }
                }]) && J(e.prototype, r), n && J(e, n), a
            }(y.PureComponent);
            et.displayName = "Scatter", et.defaultProps = {
                xAxisId: 0,
                yAxisId: 0,
                zAxisId: 0,
                legendType: "circle",
                lineType: "joint",
                lineJointType: "linear",
                data: [],
                shape: "circle",
                hide: !1,
                isAnimationActive: !A.x.isSsr,
                animationBegin: 0,
                animationDuration: 400,
                animationEasing: "linear"
            }, et.getComposedData = function(t) {
                var e = t.xAxis,
                    r = t.yAxis,
                    n = t.zAxis,
                    i = t.item,
                    a = t.displayedData,
                    l = t.xAxisTicks,
                    c = t.yAxisTicks,
                    s = t.offset,
                    u = i.props.tooltipType,
                    f = (0, w.NN)(i.props.children, x.displayName),
                    p = o()(e.dataKey) ? i.props.dataKey : e.dataKey,
                    y = o()(r.dataKey) ? i.props.dataKey : r.dataKey,
                    h = n && n.dataKey,
                    d = n ? n.range : L.defaultProps.range,
                    m = d && d[0],
                    v = e.scale.bandwidth ? e.scale.bandwidth() : 0,
                    b = r.scale.bandwidth ? r.scale.bandwidth() : 0,
                    g = a.map((function(t, a) {
                        var s = (0, k.F$)(t, p),
                            d = (0, k.F$)(t, y),
                            g = !o()(h) && (0, k.F$)(t, h) || "-",
                            x = [{
                                name: o()(e.dataKey) ? i.props.name : e.name || e.dataKey,
                                unit: e.unit || "",
                                value: s,
                                payload: t,
                                dataKey: p,
                                type: u
                            }, {
                                name: o()(r.dataKey) ? i.props.name : r.name || r.dataKey,
                                unit: r.unit || "",
                                value: d,
                                payload: t,
                                dataKey: y,
                                type: u
                            }];
                        "-" !== g && x.push({
                            name: n.name || n.dataKey,
                            unit: n.unit || "",
                            value: g,
                            payload: t,
                            dataKey: h,
                            type: u
                        });
                        var O = (0, k.Hv)({
                                axis: e,
                                ticks: l,
                                bandSize: v,
                                entry: t,
                                index: a,
                                dataKey: p
                            }),
                            P = (0, k.Hv)({
                                axis: r,
                                ticks: c,
                                bandSize: b,
                                entry: t,
                                index: a,
                                dataKey: y
                            }),
                            w = "-" !== g ? n.scale(g) : m,
                            A = Math.sqrt(Math.max(w, 0) / Math.PI);
                        return Y(Y({}, t), {}, {
                            cx: O,
                            cy: P,
                            x: O - A,
                            y: P - A,
                            xAxis: e,
                            yAxis: r,
                            zAxis: n,
                            width: 2 * A,
                            height: 2 * A,
                            size: w,
                            node: {
                                x: s,
                                y: d,
                                z: g
                            },
                            tooltipPayload: x,
                            tooltipPosition: {
                                x: O,
                                y: P
                            },
                            payload: t
                        }, f && f[a] && f[a].props)
                    }));
                return Y({
                    points: g
                }, s)
            };
            var rt = r(3023),
                nt = r(5358),
                it = r(7187),
                at = (0, n.z)({
                    chartName: "ComposedChart",
                    GraphicalChild: [K.x, i.u, T, et],
                    axisComponents: [{
                        axisType: "xAxis",
                        AxisComp: rt.K
                    }, {
                        axisType: "yAxis",
                        AxisComp: nt.B
                    }, {
                        axisType: "zAxis",
                        AxisComp: L
                    }],
                    formatAxisMap: it.t9
                })
        }
    }
]);