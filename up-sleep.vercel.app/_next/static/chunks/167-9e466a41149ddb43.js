"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [167], {
        9761: function(e, t) {
            t.Z = {
                src: "/_next/static/media/logo.e3cb2ad1.png",
                height: 132,
                width: 464,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAJFBMVEXp9PP19Pf/VEnr6/Ly8vLz8/P29vVMaXFEVOXEVoIXlO+mSqPDzVlgAAAADHRSTlMTDCZKWBxpADaBYYVaN/S7AAAACXBIWXMAACxLAAAsSwGlPZapAAAAIElEQVQImQXBhQEAAAjAoNn1/78CvSBBMGdp6Y6qANQDBXsAWLrmfEQAAAAASUVORK5CYII="
            }
        },
        2122: function(e, t, n) {
            var r = n(5893),
                a = (n(7294), n(4184)),
                l = n.n(a),
                i = n(2872);
            t.Z = function(e) {
                var t = e.children,
                    n = e.className,
                    a = e.title,
                    s = e.option,
                    c = e.rightComp,
                    o = e.bare,
                    A = e.controls,
                    d = e.underline;
                return (0, r.jsxs)("div", {
                    className: l()("w-full rounded-3xl  text-white", n, o ? "bg-brand-black-light p-[25px] " : "bg-brand-black "),
                    children: [(0, r.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [(0, r.jsxs)("div", {
                            className: "flex justify-between w-full",
                            children: [(0, r.jsxs)("div", {
                                className: "relative",
                                children: [(0, r.jsx)("span", {
                                    className: " font-nasalization text-[29px] font-normal text-white",
                                    children: a
                                }), d && (0, r.jsx)("div", {
                                    className: " absolute bottom-0 h-[3px] w-2/5 rounded-[10px] bg-brand-gradient"
                                })]
                            }), A && (0, r.jsxs)("div", {
                                className: "flex gap-4",
                                children: [(0, r.jsx)(i.fU, {
                                    className: "transition-all cursor-pointer hover:opacity-70 "
                                }), (0, r.jsx)(i.fU, {
                                    className: "transition-all rotate-180 cursor-pointer hover:opacity-70 "
                                })]
                            })]
                        }), s && (0, r.jsx)("div", {
                            children: (0, r.jsx)(i.bb, {})
                        }), (0, r.jsx)("div", {
                            children: c
                        })]
                    }), t]
                })
            }
        },
        6874: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return w
                }
            });
            var r = n(5893),
                a = n(7294),
                l = n(2872),
                i = n(7543),
                s = n(3587),
                c = n(5726),
                o = function(e) {
                    var t = e.isOpen,
                        n = e.setIsOpen,
                        i = function() {
                            n(!1)
                        };
                    return (0, r.jsx)(s.u, {
                        appear: !0,
                        show: t,
                        as: a.Fragment,
                        children: (0, r.jsxs)(c.V, {
                            as: "div",
                            className: "fixed inset-0 z-[999] overflow-y-auto",
                            onClose: i,
                            children: ["o", (0, r.jsxs)("div", {
                                className: "min-h-screen px-4 text-center",
                                children: [(0, r.jsx)(s.u.Child, {
                                    as: a.Fragment,
                                    enter: "ease-out duration-300",
                                    enterFrom: "opacity-0",
                                    enterTo: "opacity-100",
                                    leave: "ease-in duration-200",
                                    leaveFrom: "opacity-100",
                                    leaveTo: "opacity-0",
                                    children: (0, r.jsx)(c.V.Overlay, {
                                        className: "fixed inset-0 bg-black bg-opacity-40"
                                    })
                                }), (0, r.jsx)("span", {
                                    className: "inline-block h-screen align-middle",
                                    "aria-hidden": "true",
                                    children: "\u200b"
                                }), (0, r.jsx)(s.u.Child, {
                                    as: a.Fragment,
                                    enter: "ease-out duration-300",
                                    enterFrom: "opacity-0 scale-95",
                                    enterTo: "opacity-100 scale-100",
                                    leave: "ease-in duration-200",
                                    leaveFrom: "opacity-100 scale-100",
                                    leaveTo: "opacity-0 scale-95",
                                    children: (0, r.jsx)("div", {
                                        className: "inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl",
                                        children: (0, r.jsxs)("div", {
                                            className: "flex flex-col",
                                            children: [(0, r.jsxs)("div", {
                                                className: "flex items-center justify-between",
                                                children: [(0, r.jsx)("span", {
                                                    className: "text-2xl text-text",
                                                    children: "Connect Wallet"
                                                }), (0, r.jsx)("div", {
                                                    children: (0, r.jsx)(l.x8, {
                                                        className: "cursor-pointer",
                                                        onClick: i
                                                    })
                                                })]
                                            }), (0, r.jsx)("div", {
                                                className: "divider"
                                            }), (0, r.jsxs)("div", {
                                                className: "grid grid-cols-2 gap-y-24",
                                                children: [(0, r.jsxs)("div", {
                                                    className: "flex flex-col items-center w-full gap-2 cursor-pointer",
                                                    children: [(0, r.jsx)("div", {
                                                        children: (0, r.jsx)(l.BP, {})
                                                    }), (0, r.jsx)("span", {
                                                        className: " font-[20px] font-semibold text-black",
                                                        children: "Metamask"
                                                    })]
                                                }), (0, r.jsxs)("div", {
                                                    className: "flex flex-col items-center w-full gap-2 cursor-pointer",
                                                    children: [(0, r.jsx)("div", {
                                                        children: (0, r.jsx)(l.w5, {})
                                                    }), (0, r.jsx)("span", {
                                                        className: " font-[20px] font-semibold text-black",
                                                        children: "Wallet Connect"
                                                    })]
                                                }), (0, r.jsxs)("div", {
                                                    className: "flex flex-col items-center w-full gap-2 cursor-pointer",
                                                    children: [(0, r.jsx)("div", {
                                                        children: (0, r.jsx)(l.TA, {})
                                                    }), (0, r.jsx)("span", {
                                                        className: " font-[20px] font-semibold text-black ",
                                                        children: "Trust Wallet"
                                                    })]
                                                }), (0, r.jsxs)("div", {
                                                    className: "flex flex-col items-center justify-center w-full gap-2 cursor-pointer",
                                                    children: [(0, r.jsx)("div", {
                                                        children: (0, r.jsx)(l.Tk, {})
                                                    }), (0, r.jsx)("span", {
                                                        className: " font-[20px] mt-6 font-semibold text-black",
                                                        children: "More"
                                                    })]
                                                })]
                                            })]
                                        })
                                    })
                                })]
                            })]
                        })
                    })
                },
                A = function(e) {
                    var t = e.setSidebarOpen,
                        n = e.title,
                        s = (0, a.useState)(!1),
                        c = s[0],
                        A = s[1];
                    return (0, r.jsxs)("div", {
                        className: "relative z-10 flex items-center flex-shrink-0 h-16 mt-7",
                        children: [(0, r.jsxs)("button", {
                            className: "pl-4 mt-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden",
                            onClick: function() {
                                return t(!0)
                            },
                            children: [(0, r.jsx)("span", {
                                className: "sr-only",
                                children: "Open sidebar"
                            }), (0, r.jsx)(l.OW, {
                                className: "w-6 h-6",
                                "aria-hidden": "true"
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "flex items-center justify-end flex-1 px-4 md:justify-between",
                            children: [(0, r.jsx)("div", {
                                className: "flex-1 text-white md:flex",
                                children: (0, r.jsxs)("div", {
                                    className: "relative ",
                                    children: [(0, r.jsx)("span", {
                                        className: "text-4xl font-nasalization",
                                        children: n
                                    }), (0, r.jsx)("div", {
                                        className: " absolute bottom-0 h-[3px] bg-brand-gradient w-[50px] rounded-[10px]"
                                    })]
                                })
                            }), (0, r.jsx)("div", {
                                className: "flex items-center gap-5 md:ml-6",
                                children: (0, r.jsx)("div", {
                                    className: " w-[138px] md:w-[270px] flex-shrink-0",
                                    children: (0, r.jsx)(i.Z, {
                                        onClick: function() {
                                            A(!0)
                                        },
                                        children: "Connect"
                                    })
                                })
                            })]
                        }), (0, r.jsx)(o, {
                            isOpen: c,
                            setIsOpen: A
                        })]
                    })
                },
                d = n(5675),
                f = [{
                    name: "Home",
                    href: "/",
                    image: {
                        src: "/_next/static/media/home.a14bbe44.png",
                        height: 19,
                        width: 18,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEX///9MaXH////////////////////////////////3VMxpAAAACnRSTlP9AIwsm+gU2qerCrmWwgAAAAlwSFlzAAALEwAACxMBAJqcGAAAADFJREFUCJklxkEOACEMxLBkWmD3/x9GFScbNVHRQCaBGd8IP/3SuEhYsqEKNvapOu0FDHMAcuRROmQAAAAASUVORK5CYII="
                    }
                }, {
                    name: "Staking",
                    href: "/staking",
                    image: {
                        src: "/_next/static/media/stake.567d5936.png",
                        height: 19,
                        width: 18,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEVMaXH///////////////////////////////////////////9tKdXLAAAADHRSTlMAJnlolTEWo01FVVvTeS7JAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANUlEQVQImR3IQRIAIQjEwDAOKO7//7uFfUoFraFkM+KwKceLUK6vew7UO5kZtynZ9gFK0oUfH/MA8P8VFekAAAAASUVORK5CYII="
                    }
                }, {
                    name: "Sleep-To-Earn",
                    href: "/sleep-to-earn",
                    image: {
                        src: "/_next/static/media/earn.1a01499a.png",
                        height: 19,
                        width: 13,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAKlBMVEX///////////////////9MaXH////////////////+/v7+/v7///////9AOKruAAAADnRSTlN9is4sZwColnISWe4FuG+uQgEAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAtSURBVAiZHcrHEQAwCASxJRzg0H+9nrHeQoHEMjdRjSdTNkn5psmwE1w8xZ8PD9cAq8mzWr8AAAAASUVORK5CYII="
                    }
                }, {
                    name: "Wallet",
                    href: "/wallet",
                    image: {
                        src: "/_next/static/media/wallet.67d26974.png",
                        height: 19,
                        width: 18,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEX///////////////////////9MaXH////////+/v7////////pT4+rAAAADHRSTlP+vs95tKEA4pEsTTgybnQgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVQImVXJtw0AIBAEwTNvMP33S0IAG420qLk86EKKkSMLaEnqwJ/3hd5jkgz6ABvyAJB+quC5AAAAAElFTkSuQmCC"
                    }
                }, {
                    name: "NFT Mint",
                    href: "/mint",
                    image: {
                        src: "/_next/static/media/mint.100cd177.png",
                        height: 19,
                        width: 17,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAALVBMVEX///9MaXH///////////////////////////////////////////////////8s/zaxAAAAD3RSTlPZAMz9YHdSuZ4LIq9tOYtSMIm+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAANUlEQVQImRXHQRIAIQgEsR5AwBX//90tcwvad66EYmatD3MsI3DD871PnRB0YxIOnhIFtaUfJPQA/Rp8tFwAAAAASUVORK5CYII="
                    }
                }, {
                    name: "Whitepaper",
                    href: "https://sleepecosystem.io/whitepaper",
                    image: {
                        src: "/_next/static/media/white-paper.efc4ebbd.png",
                        height: 19,
                        width: 13,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAHlBMVEX///////////////////////////////////9MaXH/2w+gAAAACnRSTlPu3dPknZKnc7UA1TmsmgAAAAlwSFlzAAALEwAACxMBAJqcGAAAACpJREFUCJk1xrERACAMA7G3nRDYf2GOAlVi1ZpDnD0gxZDgf+ndjqmu6gsMRQBxSoeViAAAAABJRU5ErkJggg=="
                    }
                }],
                x = n(1163),
                u = n(1664);

            function h() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return t.filter(Boolean).join(" ")
            }
            var m = function(e) {
                    var t, n = e.children,
                        a = e.className,
                        l = e.activeClassName,
                        i = e.defaultClassName,
                        s = e.href,
                        c = e.exact,
                        o = (0, x.useRouter)().pathname;
                    return (0, r.jsx)(u.default, {
                        href: s,
                        passHref: !0,
                        children: (0, r.jsx)("a", {
                            className: h((t = s, c ? o === t ? null !== l && void 0 !== l ? l : "" : null !== i && void 0 !== i ? i : "" : o.includes(t) ? null !== l && void 0 !== l ? l : "" : null !== i && void 0 !== i ? i : ""), a),
                            children: n
                        })
                    })
                },
                p = {
                    src: "/_next/static/media/rabbit-sidebar.2685e1e7.png",
                    height: 155,
                    width: 155,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEVMaXGpYnfDnKiVcHuzjZmrnqGyd4mhho6/mqW/lKG4kp6LZ3KceIOeeISefoe7lqGwdYexdYeqZnqUc362pakh/uepAAAAE3RSTlMAsZKwK/tn/h5TcdlzoI3Szt/xKrVn+AAAAAlwSFlzAAALEwAACxMBAJqcGAAAADhJREFUCJkdyEkOwCAMwECzhrRl5/9vrcjJIwNZ8QXAOZZe5KHTTknH39LS6YZPdjXEdz+GICKRHytIAUPqNLOtAAAAAElFTkSuQmCC"
                },
                g = n(9761),
                j = function() {
                    return (0, r.jsx)("div", {
                        className: "hidden md:flex md:flex-shrink-0",
                        children: (0, r.jsx)("div", {
                            className: "flex flex-col w-64 bg-opacity-50 bg-brand-black-light",
                            children: (0, r.jsxs)("div", {
                                className: "rounded-r-b-[20px] flex flex-grow flex-col overflow-y-auto rounded-r-[20px] p-4 pt-5 pb-4",
                                children: [(0, r.jsx)("div", {
                                    className: "flex items-center flex-shrink-0 px-4 cursor-pointer",
                                    children: (0, r.jsx)(u.default, {
                                        href: "/",
                                        children: (0, r.jsx)(d.default, {
                                            src: g.Z,
                                            height: 33,
                                            width: 116
                                        })
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: "flex flex-col justify-between flex-grow px-2 mt-8",
                                    children: [(0, r.jsx)("nav", {
                                        className: "flex-1 h-12 space-y-1 text-white",
                                        children: f.map((function(e, t) {
                                            return (0, r.jsxs)(m, {
                                                href: e.href,
                                                className: "group flex items-center gap-4 rounded-[5px] p-[15px] text-[15px] font-medium hover:bg-brand-gradient transition-all ease-in ",
                                                activeClassName: "active bg-primary text-red-100 bg-brand-gradient",
                                                exact: !0,
                                                children: [(0, r.jsx)(d.default, {
                                                    src: e.image,
                                                    alt: e.name
                                                }), e.name]
                                            }, t)
                                        }))
                                    }), (0, r.jsx)("div", {
                                        className: "flex flex-col gap-12 bg-[#8115E7] bg-opacity-10 border border-[#8253B0] rounded-[15px]",
                                        children: (0, r.jsxs)("div", {
                                            className: "relative flex flex-col items-center justify-between p-4",
                                            children: [(0, r.jsxs)("div", {
                                                className: "flex flex-col items-center -mt-[75px]",
                                                children: [(0, r.jsx)(d.default, {
                                                    src: p,
                                                    className: "z-0 "
                                                }), (0, r.jsxs)("span", {
                                                    className: "z-10 text-lg font-bold text-center text-white top-6",
                                                    children: ["SleepVerse", (0, r.jsx)("br", {}), "NFT"]
                                                })]
                                            }), (0, r.jsx)("div", {
                                                className: "z-10 w-full px-2",
                                                children: (0, r.jsx)(u.default, {
                                                    href: "/mint",
                                                    children: (0, r.jsx)(i.Z, {
                                                        children: "Mint"
                                                    })
                                                })
                                            })]
                                        })
                                    })]
                                })]
                            })
                        })
                    })
                },
                b = function(e) {
                    var t = e.sidebarOpen,
                        n = e.setSidebarOpen;
                    return (0, r.jsx)(s.u.Root, {
                        show: t,
                        as: a.Fragment,
                        children: (0, r.jsxs)(c.V, {
                            as: "div",
                            static: !0,
                            className: "fixed inset-0 z-[999] flex md:hidden",
                            open: t,
                            onClose: n,
                            children: [(0, r.jsx)(s.u.Child, {
                                as: a.Fragment,
                                enter: "transition-opacity ease-linear duration-300",
                                enterFrom: "opacity-0",
                                enterTo: "opacity-100",
                                leave: "transition-opacity ease-linear duration-300",
                                leaveFrom: "opacity-100",
                                leaveTo: "opacity-0",
                                children: (0, r.jsx)(c.V.Overlay, {
                                    className: "fixed inset-0 bg-gray-600 bg-opacity-75"
                                })
                            }), (0, r.jsx)(s.u.Child, {
                                as: a.Fragment,
                                enter: "transition ease-in-out duration-300 transform",
                                enterFrom: "-translate-x-full",
                                enterTo: "translate-x-0",
                                leave: "transition ease-in-out duration-300 transform",
                                leaveFrom: "translate-x-0",
                                leaveTo: "-translate-x-full",
                                children: (0, r.jsxs)("div", {
                                    className: "relative flex flex-col jus flex-1 w-full max-w-[276px] pt-5 pb-4 bg-brand-black-light ",
                                    children: [(0, r.jsxs)("div", {
                                        className: "flex items-center justify-between flex-shrink-0 px-4",
                                        children: [(0, r.jsx)(u.default, {
                                            href: "/",
                                            children: (0, r.jsx)(d.default, {
                                                src: g.Z,
                                                height: 33,
                                                width: 116
                                            })
                                        }), (0, r.jsx)(l.OW, {
                                            className: "rotate-180 ",
                                            onClick: function() {
                                                n(!1)
                                            }
                                        })]
                                    }), (0, r.jsx)("div", {
                                        className: "flex-1 h-0 mt-5 overflow-y-auto text-white ",
                                        children: (0, r.jsx)("nav", {
                                            className: "px-2 space-y-1",
                                            children: f.map((function(e, t) {
                                                return (0, r.jsxs)(m, {
                                                    href: e.href,
                                                    className: "flex items-center gap-4 p-[15px] text-[15px] font-medium rounded-[5px] group",
                                                    activeClassName: "active bg-primary text-red-100 bg-brand-gradient",
                                                    exact: !0,
                                                    children: [(0, r.jsx)(d.default, {
                                                        src: e.image,
                                                        alt: e.name
                                                    }), e.name]
                                                }, t)
                                            }))
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "flex flex-col gap-12 bg-[#8115E7] bg-opacity-10 border border-[#8253B0] rounded-[15px] mx-3",
                                        children: (0, r.jsxs)("div", {
                                            className: "relative flex flex-col items-center justify-between p-4",
                                            children: [(0, r.jsxs)("div", {
                                                className: "flex flex-col items-center -mt-[75px]",
                                                children: [(0, r.jsx)(d.default, {
                                                    src: p,
                                                    className: "z-0 "
                                                }), (0, r.jsxs)("span", {
                                                    className: "z-10 text-lg font-bold text-center text-white top-6",
                                                    children: ["SleepVerse", (0, r.jsx)("br", {}), "NFT"]
                                                })]
                                            }), (0, r.jsx)("div", {
                                                className: "z-10 w-full px-2",
                                                children: (0, r.jsx)(u.default, {
                                                    href: "/mint",
                                                    children: (0, r.jsx)(i.Z, {
                                                        children: "Mint"
                                                    })
                                                })
                                            })]
                                        })
                                    })]
                                })
                            }), (0, r.jsx)("div", {
                                className: "flex-shrink-0 w-14",
                                "aria-hidden": "true"
                            })]
                        })
                    })
                },
                w = function(e) {
                    var t = e.children,
                        n = e.bare,
                        l = e.title,
                        i = (0, a.useState)(!1),
                        s = i[0],
                        c = i[1];
                    return (0, r.jsxs)("div", {
                        className: "flex h-screen overflow-hidden bg-brand-black md:gap-7",
                        children: [!n && (0, r.jsxs)(r.Fragment, {
                            children: [" ", (0, r.jsx)(b, {
                                sidebarOpen: s,
                                setSidebarOpen: c
                            }), (0, r.jsx)(j, {})]
                        }), (0, r.jsxs)("div", {
                            className: "flex flex-col flex-1 w-0 ",
                            children: [!n && (0, r.jsx)(A, {
                                setSidebarOpen: c,
                                title: l
                            }), (0, r.jsx)("main", {
                                className: "relative flex-1 overflow-y-auto focus:outline-none",
                                children: (0, r.jsx)("div", {
                                    className: "px-4 py-6 overflow-y-auto",
                                    children: t
                                })
                            })]
                        })]
                    })
                }
        },
        2872: function(e, t, n) {
            n.d(t, {
                OW: function() {
                    return l
                },
                _M: function() {
                    return w
                },
                x8: function() {
                    return o
                },
                fU: function() {
                    return j
                },
                bb: function() {
                    return s
                },
                BP: function() {
                    return d
                },
                Tk: function() {
                    return x
                },
                TA: function() {
                    return h
                },
                w5: function() {
                    return p
                }
            });
            var r = n(5893);
            n(7294);

            function a(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var l = function(e) {
                return (0, r.jsx)("svg", function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        })))), r.forEach((function(t) {
                            a(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    width: 14,
                    height: 12,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e, {
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M0 1a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1Z",
                        fill: "#fff"
                    })
                }))
            };

            function i(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var s = function(e) {
                return (0, r.jsx)("svg", function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        })))), r.forEach((function(t) {
                            i(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    width: 13,
                    height: 3,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e, {
                    children: (0, r.jsx)("g", {
                        opacity: .5,
                        fill: "#00204C",
                        children: (0, r.jsx)("path", {
                            d: "M3 1.333a1.333 1.333 0 1 1-2.666 0 1.333 1.333 0 0 1 2.667 0ZM7.667 1.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0ZM12.334 1.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"
                        })
                    })
                }))
            };

            function c(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var o = function(e) {
                return (0, r.jsxs)("svg", function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        })))), r.forEach((function(t) {
                            c(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    width: 39,
                    height: 39,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e, {
                    children: [(0, r.jsx)("circle", {
                        opacity: .1,
                        cx: 19.5,
                        cy: 19.5,
                        r: 19.5,
                        fill: "#A700FA"
                    }), (0, r.jsx)("path", {
                        d: "M25 14 13 26m12 0L13 14l12 12Z",
                        stroke: "#00204C",
                        strokeWidth: 1.5,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })]
                }))
            };

            function A(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var d = function(e) {
                return (0, r.jsxs)("svg", function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        })))), r.forEach((function(t) {
                            A(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    width: 50,
                    height: 47,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e, {
                    children: [(0, r.jsx)("path", {
                        d: "M48.841 0 27.387 15.875l3.99-9.356L48.84 0Z",
                        fill: "#E17726"
                    }), (0, r.jsx)("path", {
                        d: "M1.21.019 18.626 6.52l3.789 9.478L1.209.018ZM40.206 33.76l9.483.18L46.376 45.2l-11.571-3.186 5.402-8.253Zm-30.414 0 5.382 8.253L3.624 45.2.33 33.942l9.463-.18Z",
                        fill: "#E27625"
                    }), (0, r.jsx)("path", {
                        d: "m21.9 13.585.388 12.516-11.596-.528 3.299-4.976.042-.048 7.868-6.964Zm6.08-.14 7.988 7.104.041.048 3.299 4.976-11.594.528.266-12.656ZM15.515 33.798l6.331 4.933-7.355 3.551 1.024-8.484Zm18.972-.001 1.002 8.485-7.335-3.551 6.333-4.934Z",
                        fill: "#E27625"
                    }), (0, r.jsx)("path", {
                        d: "m28.316 38.266 7.443 3.604-6.924 3.29.072-2.174-.591-4.72Zm-6.634.002-.569 4.682.047 2.208-6.94-3.288 7.462-3.602Z",
                        fill: "#D5BFB2"
                    }), (0, r.jsx)("path", {
                        d: "m19.533 27.734 1.945 4.088-6.622-1.94 4.677-2.148Zm10.934 0 4.7 2.148-6.644 1.94 1.944-4.087Z",
                        fill: "#233447"
                    }), (0, r.jsx)("path", {
                        d: "m16.02 33.756-1.07 8.797-5.737-8.605 6.808-.192Zm17.96 0 6.807.192-5.758 8.605-1.05-8.797Zm5.495-8.68-4.954 5.049-3.82-1.746-1.829 3.845-1.198-6.611 11.8-.537Zm-28.953 0 11.804.537-1.199 6.61-1.83-3.843-3.799 1.745-4.976-5.05Z",
                        fill: "#CC6228"
                    }), (0, r.jsx)("path", {
                        d: "m10.188 24.04 5.606 5.687.194 5.615-5.8-11.302Zm29.629-.01-5.81 11.322.219-5.625 5.59-5.698Zm-17.765.356.226 1.42.557 3.537-.358 10.864-1.695-8.727v-.09l1.27-7.004Zm5.893-.02 1.273 7.024v.09l-1.699 8.75-.067-2.19-.265-8.761.758-4.913Z",
                        fill: "#E27525"
                    }), (0, r.jsx)("path", {
                        d: "m34.724 29.501-.19 4.878-5.912 4.607-1.195-.844 1.34-6.902 5.957-1.739Zm-19.428 0 5.938 1.74 1.34 6.9-1.196.845-5.913-4.607-.169-4.878Z",
                        fill: "#F5841F"
                    }), (0, r.jsx)("path", {
                        d: "m13.09 40.792 7.564 3.585-.032-1.53.633-.556h7.487l.656.553-.048 1.53 7.517-3.573-3.658 3.023-4.423 3.038h-7.592l-4.42-3.05-3.685-3.02Z",
                        fill: "#C0AC9D"
                    }), (0, r.jsx)("path", {
                        d: "m27.774 37.79 1.07.755.626 5-.907-.765H21.44l-.89.78.607-5.015 1.07-.756h5.548Z",
                        fill: "#161616"
                    }), (0, r.jsx)("path", {
                        d: "M47.425.44 50 8.164l-1.608 7.812 1.145.884-1.55 1.182 1.165.9-1.542 1.404.946.686-2.512 2.935-10.307-3.001-.09-.048-7.426-6.265L47.425.439Zm-44.85 0L21.78 14.653l-7.428 6.265-.089.048-10.307 3-2.512-2.934.946-.685-1.542-1.405 1.163-.899-1.573-1.186 1.188-.884L0 8.166 2.575.439Z",
                        fill: "#763E1A"
                    }), (0, r.jsx)("path", {
                        d: "m35.233 20.31 10.92 3.18 3.548 10.935h-9.36l-6.45.081 4.69-9.142-3.348-5.053Zm-20.466 0-3.35 5.054 4.691 9.142-6.446-.081H.318L3.846 23.49l10.921-3.18ZM31.911 6.468l-3.055 8.25-.648 11.145-.248 3.493-.02 8.923h-5.88l-.02-8.906-.249-3.513-.648-11.142-3.054-8.25H31.91Z",
                        fill: "#F5841F"
                    })]
                }))
            };

            function f(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var x = function(e) {
                return (0, r.jsx)("svg", function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        })))), r.forEach((function(t) {
                            f(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    width: 50,
                    height: 13,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e, {
                    children: (0, r.jsx)("path", {
                        d: "M44.327 12.694H42.96c-.11-.03-.211-.08-.322-.1-2.876-.444-5.15-2.837-5.34-5.644-.222-3.138 1.568-5.793 4.485-6.658.383-.11.785-.191 1.177-.292h1.368c.09.03.171.08.272.09 2.655.433 4.677 2.344 5.25 4.96.04.2.1.402.151.603V7.02c-.03.09-.08.18-.09.271-.423 2.616-2.284 4.607-4.869 5.21-.251.061-.483.131-.714.192ZM5.663 0H7.03c.11.03.211.08.322.09 2.896.453 5.16 2.857 5.34 5.694.202 3.128-1.609 5.773-4.536 6.628-.372.11-.754.191-1.126.282H5.663c-.09-.03-.171-.08-.262-.1-2.615-.484-4.325-2.002-5.14-4.537C.152 7.725.092 7.373 0 7.03V5.663c.03-.09.08-.181.09-.272C.524 2.766 2.375.785 4.96.181c.241-.06.473-.12.704-.181ZM24.31 0h1.368c.11.03.211.08.322.1 2.887.453 5.21 2.948 5.33 5.764.142 3.168-1.77 5.854-4.716 6.608-.312.08-.624.151-.936.222h-1.368c-.11-.03-.211-.08-.322-.1-2.887-.443-5.21-2.948-5.34-5.764C18.496 3.66 20.418.976 23.365.22c.322-.08.633-.15.945-.22Z",
                        fill: "#1097C1"
                    })
                }))
            };

            function u(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var h = function(e) {
                return (0, r.jsx)("svg", function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        })))), r.forEach((function(t) {
                            u(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    width: 47,
                    height: 50,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e, {
                    children: (0, r.jsx)("path", {
                        d: "M23.465.001c.82 0 1.627.053 2.378.179.74.096 1.47.258 2.182.481a14.33 14.33 0 0 1 2.109.823c.679.323 1.377.717 2.075 1.146 1.18.75 2.34 1.358 3.523 1.843a23.586 23.586 0 0 0 7.295 1.643c1.27.09 2.576.144 3.934.144v12.518c0 2.378-.304 4.631-.91 6.778a28.15 28.15 0 0 1-2.47 6.08 32.266 32.266 0 0 1-3.718 5.399 47.223 47.223 0 0 1-4.669 4.794 54.983 54.983 0 0 1-5.33 4.147 82.57 82.57 0 0 1-5.613 3.577L23.5 50l-.752-.447a84.814 84.814 0 0 1-5.651-3.577 48.778 48.778 0 0 1-5.33-4.147 47.22 47.22 0 0 1-4.666-4.794 34.26 34.26 0 0 1-3.736-5.398 30.52 30.52 0 0 1-2.47-6.081 24.712 24.712 0 0 1-.894-6.778V6.26c1.361 0 2.666-.053 3.937-.144a25.536 25.536 0 0 0 3.717-.535 22.419 22.419 0 0 0 3.577-1.108 20.542 20.542 0 0 0 3.505-1.824c1.377-.895 2.773-1.556 4.15-1.99A14.99 14.99 0 0 1 23.465 0Zm20.348 9.335a29.937 29.937 0 0 1-6.992-1.18 24.912 24.912 0 0 1-6.402-2.95 13.339 13.339 0 0 0-3.32-1.575 12.158 12.158 0 0 0-3.618-.52 12.486 12.486 0 0 0-3.646.52 12.347 12.347 0 0 0-3.31 1.574 24.804 24.804 0 0 1-6.42 2.964A31.59 31.59 0 0 1 3.13 9.352v9.441c0 2.075.27 4.06.808 5.971A26.85 26.85 0 0 0 6.19 30.22a30.054 30.054 0 0 0 3.38 4.92 45.636 45.636 0 0 0 4.2 4.324 49.49 49.49 0 0 0 4.721 3.774 69.1 69.1 0 0 0 4.989 3.183 70.047 70.047 0 0 0 4.972-3.183 48.165 48.165 0 0 0 4.738-3.774 45.667 45.667 0 0 0 4.203-4.325 30.024 30.024 0 0 0 3.38-4.92 25.845 25.845 0 0 0 2.219-5.454c.554-1.941.83-3.952.82-5.97V9.335Z",
                        fill: "#6293FC"
                    })
                }))
            };

            function m(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var p = function(e) {
                return (0, r.jsx)("svg", function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        })))), r.forEach((function(t) {
                            m(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    width: 47,
                    height: 50,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e, {
                    children: (0, r.jsx)("path", {
                        d: "M28.33.868a3.845 3.845 0 0 0-5.436.577l-11.136 13.95h4.922l9.216-11.551 2.961 2.418-7.42 9.133h4.952l5.448-6.706 6.606 5.394-1.146 1.312h1.154a11.534 11.534 0 0 1 3.383.503 3.846 3.846 0 0 0-.961-4.787L28.33.868ZM3.845 17.317a1.922 1.922 0 0 1 1.923-1.922h2.145l3.057-3.846H5.768A5.768 5.768 0 0 0 0 17.317v23.07A9.613 9.613 0 0 0 9.613 50H38.45a7.69 7.69 0 0 0 7.69-7.69V26.93a7.69 7.69 0 0 0-7.69-7.69H5.768a1.922 1.922 0 0 1-1.923-1.923ZM32.683 34.62h3.845a1.922 1.922 0 1 1 0 3.845h-3.845a1.922 1.922 0 1 1 0-3.845Z",
                        fill: "#368DFF"
                    })
                }))
            };

            function g(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var j = function(e) {
                return (0, r.jsxs)("svg", function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        })))), r.forEach((function(t) {
                            g(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    width: 34,
                    height: 34,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e, {
                    children: [(0, r.jsxs)("g", {
                        filter: "url(#a)",
                        transform: "matrix(-1 0 0 1 17 17)",
                        children: [(0, r.jsx)("circle", {
                            r: 17,
                            fill: "#fff",
                            fillOpacity: .02
                        }), (0, r.jsx)("circle", {
                            r: 16.5,
                            stroke: "url(#b)"
                        })]
                    }), (0, r.jsx)("path", {
                        d: "m20 23-6-6 6-6",
                        stroke: "#fff",
                        strokeWidth: 1.5,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, r.jsxs)("defs", {
                        children: [(0, r.jsxs)("linearGradient", {
                            id: "b",
                            x1: 0,
                            y1: 0,
                            x2: 36.694,
                            y2: 3.211,
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, r.jsx)("stop", {
                                stopColor: "#fff",
                                stopOpacity: .05
                            }), (0, r.jsx)("stop", {
                                offset: .474,
                                stopColor: "#fff",
                                stopOpacity: .19
                            }), (0, r.jsx)("stop", {
                                offset: 1,
                                stopColor: "#fff",
                                stopOpacity: .05
                            })]
                        }), (0, r.jsxs)("filter", {
                            id: "a",
                            x: -100,
                            y: -100,
                            width: 234,
                            height: 234,
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [(0, r.jsx)("feFlood", {
                                floodOpacity: 0,
                                result: "BackgroundImageFix"
                            }), (0, r.jsx)("feGaussianBlur", { in: "BackgroundImage",
                                stdDeviation: 50
                            }), (0, r.jsx)("feComposite", {
                                in2: "SourceAlpha",
                                operator: "in",
                                result: "effect1_backgroundBlur_29_250"
                            }), (0, r.jsx)("feBlend", { in: "SourceGraphic",
                                in2: "effect1_backgroundBlur_29_250",
                                result: "shape"
                            })]
                        })]
                    })]
                }))
            };

            function b(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var w = function(e) {
                return (0, r.jsx)("svg", function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        })))), r.forEach((function(t) {
                            b(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    width: 12,
                    height: 8,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e, {
                    children: (0, r.jsx)("path", {
                        d: "m.214 1.451 5.12 5.974a.879.879 0 0 0 1.334 0l5.119-5.974A.879.879 0 0 0 11.119 0H.88a.878.878 0 0 0-.666 1.451Z",
                        fill: "#E72B2B"
                    })
                }))
            }
        }
    }
]);