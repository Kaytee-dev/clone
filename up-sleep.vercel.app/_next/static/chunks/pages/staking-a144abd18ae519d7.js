(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [879], {
        5081: function(e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/staking", function() {
                return s(2197)
            }])
        },
        2197: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return U
                }
            });
            var n = s(5893),
                l = s(6874),
                a = s(7294),
                r = s(5675),
                i = function() {
                    var e = (0, a.useState)(0),
                        t = e[0],
                        s = e[1];
                    return (0, n.jsxs)("div", {
                        className: "relative flex py-3 transition-all ease-in rounded-full bg-brand-black-light",
                        children: [(0, n.jsx)("div", {
                            className: "absolute top-0 z-0  h-full w-1/2 rounded-full p-2  transition-all ease-in ".concat(0 == t ? " left-0" : "left-1/2", " "),
                            children: (0, n.jsx)("div", {
                                className: "w-full h-full rounded-full bg-brand-gradient "
                            })
                        }), (0, n.jsx)("span", {
                            className: "z-[9999] flex w-1/2 cursor-pointer justify-center px-10 text-white relative ",
                            onClick: function() {
                                s(0)
                            },
                            children: "Live"
                        }), (0, n.jsx)("span", {
                            className: "z-10 flex w-1/2  cursor-pointer justify-center text-white  px-10 relative ",
                            onClick: function() {
                                s(1)
                            },
                            children: "Finished"
                        })]
                    })
                },
                c = s(2351),
                o = s(9946),
                d = s(1363),
                u = s(4103),
                x = s(6723),
                f = s(3784);
            let m = (0, a.createContext)(null);

            function p() {
                let e = (0, a.useContext)(m);
                if (null === e) {
                    let e = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
                    throw Error.captureStackTrace && Error.captureStackTrace(e, p), e
                }
                return e
            }
            let h = (0, c.yV)((function(e, t) {
                let {
                    passive: s = !1,
                    ...n
                } = e, l = p(), a = `headlessui-label-${(0,o.M)()}`, r = (0, f.T)(t);
                (0, x.e)((() => l.register(a)), [a, l.register]);
                let i = {
                    ref: r,
                    ...l.props,
                    id: a
                };
                return s && ("onClick" in i && delete i.onClick, "onClick" in n && delete n.onClick), (0, c.sY)({
                    ourProps: i,
                    theirProps: n,
                    slot: l.slot || {},
                    defaultTag: "label",
                    name: l.name || "Label"
                })
            }));
            var b = s(9516);

            function A(e) {
                var t;
                if (e.type) return e.type;
                let s = null != (t = e.as) ? t : "button";
                return "string" == typeof s && "button" === s.toLowerCase() ? "button" : void 0
            }

            function g(e, t) {
                let [s, n] = (0, a.useState)((() => A(e)));
                return (0, x.e)((() => {
                    n(A(e))
                }), [e.type, e.as]), (0, x.e)((() => {
                    s || !t.current || t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && n("button")
                }), [s, t]), s
            }
            let j = (0, c.yV)((function(e, t) {
                return (0, c.sY)({
                    ourProps: {
                        ref: t,
                        style: {
                            position: "absolute",
                            width: 1,
                            height: 1,
                            padding: 0,
                            margin: -1,
                            overflow: "hidden",
                            clip: "rect(0, 0, 0, 0)",
                            whiteSpace: "nowrap",
                            borderWidth: "0",
                            display: "none"
                        }
                    },
                    theirProps: e,
                    slot: {},
                    defaultTag: "div",
                    name: "VisuallyHidden"
                })
            }));
            let v = (0, a.createContext)(null);
            v.displayName = "GroupContext";
            let N = a.Fragment;
            let w = (0, c.yV)((function(e, t) {
                    let {
                        checked: s,
                        onChange: n,
                        name: l,
                        value: r,
                        ...i
                    } = e, x = `headlessui-switch-${(0,o.M)()}`, m = (0, a.useContext)(v), p = (0, a.useRef)(null), h = (0, f.T)(p, t, null === m ? null : m.setSwitch), b = (0, a.useCallback)((() => n(!s)), [n, s]), A = (0, a.useCallback)((e => {
                        if ((0, u.P)(e.currentTarget)) return e.preventDefault();
                        e.preventDefault(), b()
                    }), [b]), N = (0, a.useCallback)((e => {
                        e.key === d.R.Space ? (e.preventDefault(), b()) : e.key === d.R.Enter && function(e) {
                            var t;
                            let s = null != (t = null == e ? void 0 : e.form) ? t : e.closest("form");
                            if (s)
                                for (let n of s.elements)
                                    if ("INPUT" === n.tagName && "submit" === n.type || "BUTTON" === n.tagName && "submit" === n.type || "INPUT" === n.nodeName && "image" === n.type) return void n.click()
                        }(e.currentTarget)
                    }), [b]), w = (0, a.useCallback)((e => e.preventDefault()), []), y = (0, a.useMemo)((() => ({
                        checked: s
                    })), [s]), k = {
                        id: x,
                        ref: h,
                        role: "switch",
                        type: g(e, p),
                        tabIndex: 0,
                        "aria-checked": s,
                        "aria-labelledby": null == m ? void 0 : m.labelledby,
                        "aria-describedby": null == m ? void 0 : m.describedby,
                        onClick: A,
                        onKeyUp: N,
                        onKeyPress: w
                    };
                    return a.createElement(a.Fragment, null, null != l && s && a.createElement(j, { ...(0, c.oA)({
                            as: "input",
                            type: "checkbox",
                            hidden: !0,
                            readOnly: !0,
                            checked: s,
                            name: l,
                            value: r
                        })
                    }), (0, c.sY)({
                        ourProps: k,
                        theirProps: i,
                        slot: y,
                        defaultTag: "button",
                        name: "Switch"
                    }))
                })),
                y = Object.assign(w, {
                    Group: function(e) {
                        let [t, s] = (0, a.useState)(null), [n, l] = function() {
                            let [e, t] = (0, a.useState)([]);
                            return [e.length > 0 ? e.join(" ") : void 0, (0, a.useMemo)((() => function(e) {
                                let s = (0, a.useCallback)((e => (t((t => [...t, e])), () => t((t => {
                                        let s = t.slice(),
                                            n = s.indexOf(e);
                                        return -1 !== n && s.splice(n, 1), s
                                    })))), []),
                                    n = (0, a.useMemo)((() => ({
                                        register: s,
                                        slot: e.slot,
                                        name: e.name,
                                        props: e.props
                                    })), [s, e.slot, e.name, e.props]);
                                return a.createElement(m.Provider, {
                                    value: n
                                }, e.children)
                            }), [t])]
                        }(), [r, i] = (0, b.f)(), o = (0, a.useMemo)((() => ({
                            switch: t,
                            setSwitch: s,
                            labelledby: n,
                            describedby: r
                        })), [t, s, n, r]), d = e;
                        return a.createElement(i, {
                            name: "Switch.Description"
                        }, a.createElement(l, {
                            name: "Switch.Label",
                            props: {
                                onClick() {
                                    !t || (t.click(), t.focus({
                                        preventScroll: !0
                                    }))
                                }
                            }
                        }, a.createElement(v.Provider, {
                            value: o
                        }, (0, c.sY)({
                            ourProps: {},
                            theirProps: d,
                            defaultTag: N,
                            name: "Switch.Group"
                        }))))
                    },
                    Label: h,
                    Description: b.d
                });
            var k = s(4184),
                S = s.n(k);

            function C() {
                var e = (0, a.useState)(!1),
                    t = e[0],
                    s = e[1];
                return (0, n.jsxs)(y, {
                    checked: t,
                    onChange: s,
                    className: S()("relative inline-flex h-6  w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-[#ECE2E2] transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"),
                    children: [(0, n.jsx)("span", {
                        className: "sr-only",
                        children: "Use setting"
                    }), (0, n.jsx)("span", {
                        "aria-hidden": "true",
                        className: S()(t ? "translate-x-5" : "translate-x-0", "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-primary shadow ring-0 transition duration-200 ease-in-out")
                    })]
                })
            }
            var E = s(2122),
                R = s(7543),
                P = {
                    src: "/_next/static/media/staking-hero.8d8b4671.png",
                    height: 306,
                    width: 609,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAOVBMVEVMaXHjGjL3W2j8o6viucP7t777XGkWFBL6jJr7qbL+nKgpQET4t7/0mqXjpq7w3er5s7X4rK7wX3XQwJyOAAAAEHRSTlMAqF3YYnGoKRxLqgzIWqb6fGDxQQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAChJREFUCJkFwYcBACAIwLA6ASf4/7EmaAZkgnZsnT0QmkdRQ6rHfYkPDogA9OMX8xwAAAAASUVORK5CYII="
                },
                T = {
                    src: "/_next/static/media/token-round.8d50c37f.png",
                    height: 54,
                    width: 54,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEVrSNKnRq1sSNGuW4tMaXFkR9hqSdJrSNJtRtFsSdJuSc97RsRcbtayQ6CIRsE3fORtSdFYU9bMW3REdt+2AIPiAAAAFHRSTlOWzWzAAJ9tGJ+SbcbQv6TIbbrPsqpLXqQAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA8SURBVAiZFcEJEoAgDATBARI2ARSP///VshtThy5DGRApasS93+jAnGvxa6UUYHh7jtMrSgdPYRrJJfsANZMBg6zDLjcAAAAASUVORK5CYII="
                };
            var L = function(e) {
                    var t = e.title,
                        s = (0, a.useState)(30),
                        l = s[0],
                        i = s[1],
                        c = (0, a.useState)(""),
                        o = c[0],
                        d = c[1],
                        u = (0, a.useCallback)((function(e) {
                            var t, s = e.target.value;
                            "string" != typeof(t = s) || isNaN(t) || isNaN(parseFloat(t)) || d(e.target.value)
                        }), []);
                    return (0, n.jsxs)(E.Z, {
                        bare: !0,
                        title: t,
                        className: "flex flex-col gap-4 divide-y-2 divide-gray-200/40",
                        rightComp: (0, n.jsx)("div", {
                            children: (0, n.jsx)(r.default, {
                                src: T
                            })
                        }),
                        children: [(0, n.jsxs)("div", {
                            className: "flex flex-col",
                            children: [(0, n.jsxs)("div", {
                                className: "flex justify-between w-full py-4",
                                children: [(0, n.jsx)("span", {
                                    className: "text-sm ",
                                    children: "ARR"
                                }), (0, n.jsx)("div", {
                                    className: "text-lg font-semibold ",
                                    children: " 124.44%"
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "flex justify-between w-full",
                                children: [(0, n.jsx)("span", {
                                    className: "text-sm ",
                                    children: "Stake"
                                }), (0, n.jsx)("div", {
                                    className: "text-lg font-semibold ",
                                    children: "$Gank LP"
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "flex justify-between w-full py-4",
                                children: [(0, n.jsx)("span", {
                                    className: "text-sm ",
                                    children: "Earn"
                                }), (0, n.jsx)("div", {
                                    className: "text-lg font-semibold ",
                                    children: " $Gank"
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "flex justify-between w-full py-4",
                                children: [(0, n.jsx)("span", {
                                    className: "text-sm font-semibold ",
                                    children: "Deposit Fee"
                                }), (0, n.jsx)("div", {
                                    className: "text-lg font-semibold ",
                                    children: "0%"
                                })]
                            })]
                        }), (0, n.jsxs)("div", {
                            className: "flex flex-col ",
                            children: [(0, n.jsxs)("div", {
                                className: "flex items-center justify-between w-full py-4",
                                children: [(0, n.jsx)("span", {
                                    className: "text-sm ",
                                    children: "Lock"
                                }), (0, n.jsxs)("div", {
                                    className: "flex gap-4",
                                    children: [(0, n.jsx)("div", {
                                        onClick: function() {
                                            return i(30)
                                        },
                                        className: S()("cursor-pointer", 30 === l ? "inline-flex w-[70px] items-center justify-center rounded-[5px]  bg-brand-gradient  p-1 text-xs outline-none" : "inline-flex w-[70px] items-center justify-center rounded-[5px] border-2 border-solid border-transparent bg-brand-black-light p-1 text-xs outline-none border-gradient-tr-brand-brand-black hover:border-gradient-tl-brand-brand-black"),
                                        children: "30 days"
                                    }), (0, n.jsx)("div", {
                                        onClick: function() {
                                            return i(60)
                                        },
                                        className: S()("cursor-pointer", 60 === l ? "inline-flex w-[70px] items-center justify-center rounded-[5px]  bg-brand-gradient  p-1 text-xs outline-none" : "inline-flex w-[70px] items-center justify-center rounded-[5px] border-2 border-solid border-transparent bg-brand-black-light p-1 text-xs outline-none border-gradient-tr-brand-brand-black hover:border-gradient-tl-brand-brand-black"),
                                        children: "60 days"
                                    })]
                                })]
                            }), (0, n.jsx)("div", {
                                className: "flex flex-col",
                                children: (0, n.jsxs)("div", {
                                    className: "flex gap-2 mt-4",
                                    children: [(0, n.jsx)("input", {
                                        type: "text",
                                        className: "w-full px-4 py-2 text-xs transition-all border border-gray-300 rounded-full text-text hover:border-primary focus:border-primary focus:ring-primary",
                                        placeholder: "Stake Amount",
                                        value: o,
                                        onChange: u
                                    }), (0, n.jsx)(R.Z, {
                                        className: "btn-sm max-w-[100px] text-xs ",
                                        children: "Stake"
                                    })]
                                })
                            }), (0, n.jsx)("div", {
                                className: "flex flex-col ",
                                children: (0, n.jsxs)("div", {
                                    className: "flex items-center justify-between w-full mt-4",
                                    children: [(0, n.jsxs)("span", {
                                        className: "text-sm text-white",
                                        children: ["$Gank earned:", (0, n.jsx)("span", {
                                            className: "ml-1 text-sm font-semibold",
                                            children: "1"
                                        }), " "]
                                    }), (0, n.jsx)(R.Z, {
                                        className: "btn-sm max-w-[100px] rounded text-xs ",
                                        children: "Harvest"
                                    })]
                                })
                            }), (0, n.jsx)("div", {
                                className: "flex flex-col ",
                                children: (0, n.jsxs)("div", {
                                    className: "flex items-center justify-between w-full mt-4",
                                    children: [(0, n.jsxs)("span", {
                                        className: "text-sm text-white",
                                        children: ["Matured stake:", (0, n.jsx)("span", {
                                            className: "ml-1 text-sm font-semibold",
                                            children: "123"
                                        }), " "]
                                    }), (0, n.jsx)(R.Z, {
                                        className: "btn-sm max-w-[100px] rounded text-xs ",
                                        children: "Unstake"
                                    })]
                                })
                            })]
                        })]
                    })
                },
                M = function() {
                    return (0, n.jsxs)("div", {
                        className: "flex flex-col gap-7",
                        children: [(0, n.jsxs)(E.Z, {
                            title: "Sleep Ecosystem",
                            option: !0,
                            bare: !0,
                            className: "relative h-full",
                            children: [(0, n.jsxs)("div", {
                                className: "z-50 flex flex-col justify-between h-full gap-3 pt-4",
                                children: [(0, n.jsx)("span", {
                                    className: "z-50 max-w-md text-sm font-normal",
                                    children: "A Sleep-to-Earn protocole that combines DeFi, NFTs and a Land Distribution Game on the metaverse. Powered by $Sleep."
                                }), (0, n.jsx)("div", {
                                    className: "z-50 pt-16 w-[200px]",
                                    children: (0, n.jsx)(R.Z, {
                                        children: "Start Staking"
                                    })
                                })]
                            }), (0, n.jsx)("div", {
                                className: "absolute bottom-0 right-0 md:right-12 -z-1 lg:top-0 sm",
                                children: (0, n.jsx)("div", {
                                    className: "relative h-[137px] w-[224px] lg:h-[276px] lg:w-[500px] ",
                                    children: (0, n.jsx)(r.default, {
                                        src: P,
                                        layout: "fill"
                                    })
                                })
                            })]
                        }), (0, n.jsxs)("div", {
                            className: "flex flex-col gap-6",
                            children: [(0, n.jsx)("span", {
                                className: "text-2xl font-semibold text-white ",
                                children: "Stake LP Tokens to Earn $Sleep"
                            }), (0, n.jsxs)("div", {
                                className: "flex flex-col gap-3 md:flex-row md:gap-10",
                                children: [(0, n.jsx)(i, {}), (0, n.jsxs)("div", {
                                    className: "flex items-center gap-2 ",
                                    children: [(0, n.jsx)("span", {
                                        className: "fontse\\ text-sm text-white",
                                        children: "Staked Only"
                                    }), (0, n.jsx)(C, {})]
                                })]
                            })]
                        }), (0, n.jsx)("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-x-7 gap-y-7",
                            children: (0, n.jsx)(L, {
                                title: "$Sleep Staking Pool"
                            })
                        })]
                    })
                },
                U = function() {
                    return (0, n.jsx)(l.Z, {
                        title: "Staking",
                        children: (0, n.jsx)(M, {})
                    })
                }
        }
    },
    function(e) {
        e.O(0, [640, 167, 774, 888, 179], (function() {
            return t = 5081, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);