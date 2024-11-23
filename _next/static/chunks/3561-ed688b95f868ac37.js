! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c8e6d0e5-8a12-4fba-bf28-123f34daaf20", e._sentryDebugIdIdentifier = "sentry-dbid-c8e6d0e5-8a12-4fba-bf28-123f34daaf20")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3561], {
        63321: function(e, t, a) {
            a.d(t, {
                D: function() {
                    return c
                },
                G: function() {
                    return u
                }
            });
            var s = a(57437),
                n = a(2265),
                r = a(43867),
                l = a(11301),
                o = a(17745),
                i = a(28243);
            let d = (e, t) => ({
                    currentPrice: {
                        address: (0, o.jk)(t),
                        chainId: t,
                        abi: l,
                        functionName: "currentPrice"
                    },
                    nativeLatestPrice: {
                        address: (0, o.jk)(t),
                        chainId: t,
                        abi: l,
                        functionName: "getLatestEthPrice"
                    }
                }),
                c = (0, n.createContext)({}),
                u = e => {
                    let {
                        children: t
                    } = e, [a, l] = (0, n.useState)(d(void 0)), [o, u] = (0, n.useState)({}), {
                        chain: m
                    } = (0, n.useContext)(i.Z), {
                        address: x
                    } = (0, r.mA)();
                    (0, n.useEffect)(() => {
                        l(d(x, m))
                    }, [x, m]);
                    let f = (0, r.Dm)({
                        contracts: Object.values(a),
                        watch: !0
                    });
                    return (0, n.useEffect)(() => {
                        u({ ...Object.keys(a).map((e, t) => ({
                                function: e,
                                data: f.data ? f.data[t] : void 0
                            })).reduce((e, t) => (e[t.function] = t.data, e), {})
                        })
                    }, [f.data]), (0, s.jsx)(c.Provider, {
                        value: o,
                        "data-sentry-element": "unknown",
                        "data-sentry-component": "EthereumContextProvider",
                        "data-sentry-source-file": "eth.context.jsx",
                        children: t
                    })
                }
        },
        69699: function(e, t, a) {
            a.d(t, {
                Z: function() {
                    return p
                }
            });
            var s = a(57437),
                n = a(33145),
                r = a(27648),
                l = a(86757);
            a(99319);
            var o = a(58475),
                i = a(11140),
                d = a(43949),
                c = a(36760),
                u = a.n(c),
                m = a(26084),
                x = a(2265),
                f = a(99376);

            function p() {
                let {
                    t: e
                } = (0, d.$G)(), [t, a] = (0, x.useState)(!1);
                (0, x.useEffect)(() => {
                    setTimeout(() => {
                        localStorage.getItem("urlCheckerDismissed") || a(!0)
                    }, 8e3)
                }, []), (0, f.useRouter)();
                let [c, p] = (0, x.useState)(!1);
                return (0, s.jsxs)("header", {
                    className: "fixed z-40 block w-full backdrop-blur backdrop-brightness-75",
                    "data-sentry-component": "Header",
                    "data-sentry-source-file": "header.jsx",
                    children: [t && (0, s.jsxs)(o.FN, {
                        className: "rounded-[0] justify-between items-center [&>button]:items-center [&>button]:justify-center [&>button]:bg-primary [&>button]:text-black bg-primary py-3 [&>button]:h-4",
                        children: [(0, s.jsx)("div", {
                            className: "ml-3 text-sm font-normal",
                            children: (0, s.jsx)(d.cC, {
                                i18nKey: "hero.confirmUrl",
                                components: [(0, s.jsx)(r.default, {
                                    target: "_blank",
                                    href: "https://aquadoge.com",
                                    className: "underline text-purple",
                                    children: "https://aquadoge.com"
                                }, "link-1"), (0, s.jsx)(r.default, {
                                    target: "_blank",
                                    href: "https://t.me/officialaquadoge",
                                    className: "underline text-purple",
                                    children: "Telegram"
                                }, "link-2")]
                            })
                        }), (0, s.jsx)(o.FN.Toggle, {
                            onDismiss: () => {
                                a(!1), localStorage.setItem("urlCheckerDismissed", !0)
                            }
                        })]
                    }), (0, s.jsxs)("div", {
                        className: "flex-col hidden w-full lg:flex",
                        children: [(0, s.jsxs)("div", {
                            className: "flex flex-row items-center justify-between w-full px-3",
                            children: [(0, s.jsx)(r.default, {
                                href: "#home",
                                className: "h-full w-auto my-[-10px] tracking-normal text-primary flex items-center",
                                "data-sentry-element": "Link",
                                "data-sentry-source-file": "header.jsx",
                                children: (0, s.jsx)(n.default, {
                                    src: "/assets/logo.webp",
                                    width: 85,
                                    height: 41,
                                    className: "relative w-auto py-1 m-auto",
                                    alt: e("globals.header") || "Aquadoge logo",
                                    "data-sentry-element": "Image",
                                    "data-sentry-source-file": "header.jsx"
                                })
                            }), (0, s.jsxs)("div", {
                                className: "items-center grow justify-center hidden sm:flex gap-x-8 max-w-[90vw] [&>a:hover]:text-primary [&>a:hover]:border-primary [&>a]:border-b-2 [&>a]:border-transparent uppercase [&>a]:transition-colors font-condensed text-base tracking-widest text-white font-bold",
                                children: [(0, s.jsx)(r.default, {
                                    href: "#about",
                                    "data-sentry-element": "Link",
                                    "data-sentry-source-file": "header.jsx",
                                    children: e("globals.about")
                                }), (0, s.jsx)(r.default, {
                                    href: "#tokenomics",
                                    "data-sentry-element": "Link",
                                    "data-sentry-source-file": "header.jsx",
                                    children: e("globals.tokenomics")
                                }), (0, s.jsx)(r.default, {
                                    href: "#roadmap",
                                    "data-sentry-element": "Link",
                                    "data-sentry-source-file": "header.jsx",
                                    children: e("globals.roadmap")
                                }), (0, s.jsx)(r.default, {
                                    href: "#play-to-earn",
                                    "data-sentry-element": "Link",
                                    "data-sentry-source-file": "header.jsx",
                                    children: e("p2e.heading")
                                }), (0, s.jsx)(r.default, {
                                    href: "#how-to-buy",
                                    "data-sentry-element": "Link",
                                    "data-sentry-source-file": "header.jsx",
                                    children: e("globals.howToBuy")
                                }), (0, s.jsx)(r.default, {
                                    href: "https://docs.aquadoge.com/aquadoge-whitepaper",
                                    target: "_blank",
                                    className: u()("relative text-black bg-primary p-1 px-3 rounded hover:bg-white hover:!text-blue hover:!border-blue"),
                                    "data-sentry-element": "Link",
                                    "data-sentry-source-file": "header.jsx",
                                    children: e("globals.whitePaper")
                                }), (0, s.jsx)(r.default, {
                                    href: "./dashboard",
                                    className: u()("relative text-white bg-purple p-1 px-3 opacity-95 rounded hover:opacity-100"),
                                    "data-sentry-element": "Link",
                                    "data-sentry-source-file": "header.jsx",
                                    children: e("globals.dashboard")
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "flex items-center gap-5 text-2xl text-primary",
                                children: [(0, s.jsx)(l.Z, {
                                    "data-sentry-element": "LanguageDropdown",
                                    "data-sentry-source-file": "header.jsx"
                                }), (0, s.jsx)(r.default, {
                                    href: "https://instagram.com/aqua.doge",
                                    target: "_blank",
                                    "data-sentry-element": "Link",
                                    "data-sentry-source-file": "header.jsx",
                                    children: (0, s.jsx)(i.Vs6, {
                                        "data-sentry-element": "BsInstagram",
                                        "data-sentry-source-file": "header.jsx"
                                    })
                                }), (0, s.jsx)(r.default, {
                                    href: "https://t.me/officialaquadoge",
                                    target: "_blank",
                                    "data-sentry-element": "Link",
                                    "data-sentry-source-file": "header.jsx",
                                    children: (0, s.jsx)(i.iEj, {
                                        "data-sentry-element": "BsTelegram",
                                        "data-sentry-source-file": "header.jsx"
                                    })
                                }), (0, s.jsx)(r.default, {
                                    href: "https://x.com/team_aquadoge",
                                    target: "_blank",
                                    "data-sentry-element": "Link",
                                    "data-sentry-source-file": "header.jsx",
                                    children: (0, s.jsx)(i.AMt, {
                                        "data-sentry-element": "BsTwitterX",
                                        "data-sentry-source-file": "header.jsx"
                                    })
                                }), (0, s.jsx)(r.default, {
                                    href: "https://www.tiktok.com/@aquadogeofficial",
                                    target: "_blank",
                                    "data-sentry-element": "Link",
                                    "data-sentry-source-file": "header.jsx",
                                    children: (0, s.jsx)(i.k9h, {
                                        "data-sentry-element": "BsTiktok",
                                        "data-sentry-source-file": "header.jsx"
                                    })
                                })]
                            })]
                        }), (0, s.jsx)(m.Z, {
                            "data-sentry-element": "TickerPanel",
                            "data-sentry-source-file": "header.jsx"
                        })]
                    }), (0, s.jsxs)("div", {
                        className: u()("flex flex-col w-full lg:hidden", {
                            "h-screen bg-[#000000aa]": c
                        }),
                        children: [(0, s.jsx)(m.Z, {
                            "data-sentry-element": "TickerPanel",
                            "data-sentry-source-file": "header.jsx"
                        }), (0, s.jsxs)("div", {
                            className: "flex flex-col w-full",
                            children: [(0, s.jsxs)("div", {
                                className: "h-[60px] flex flex-row items-center justify-between w-full px-2",
                                children: [(0, s.jsx)(r.default, {
                                    href: "#home",
                                    className: "h-[60px] w-auto pr-[5px] tracking-normal text-primary flex items-center",
                                    "data-sentry-element": "Link",
                                    "data-sentry-source-file": "header.jsx",
                                    children: (0, s.jsx)(n.default, {
                                        src: "/assets/logo.webp",
                                        width: 85,
                                        height: 60,
                                        className: "relative h-[60px] w-auto m-auto",
                                        alt: e("globals.header") || "Aquadoge logo",
                                        "data-sentry-element": "Image",
                                        "data-sentry-source-file": "header.jsx"
                                    })
                                }), (0, s.jsx)(h, {
                                    setMenuVisible: p,
                                    isMenuVisible: c,
                                    "data-sentry-element": "MenuButton",
                                    "data-sentry-source-file": "header.jsx"
                                })]
                            }), (0, s.jsxs)("div", {
                                className: u()("hidden flex-col h-[calc(100vh-160px)] items-start justify-start pt-12 gap-10 text-primary text-2xl max-w-sm m-auto", {
                                    "!flex": c
                                }),
                                children: [(0, s.jsx)(l.Z, {
                                    "data-sentry-element": "LanguageDropdown",
                                    "data-sentry-source-file": "header.jsx"
                                }), (0, s.jsx)(r.default, {
                                    href: "https://docs.aquadoge.com/aquadoge-whitepaper",
                                    target: "_blank",
                                    className: u()("relative font-serif text-white"),
                                    "data-sentry-element": "Link",
                                    "data-sentry-source-file": "header.jsx",
                                    children: e("globals.whitePaper")
                                }), (0, s.jsx)(r.default, {
                                    href: "./dashboard",
                                    className: u()("relative font-serif text-white"),
                                    "data-sentry-element": "Link",
                                    "data-sentry-source-file": "header.jsx",
                                    children: e("globals.dashboard")
                                }), (0, s.jsxs)("div", {
                                    className: "flex items-center gap-6 text-3xl",
                                    children: [(0, s.jsx)(r.default, {
                                        href: "https://instagram.com/aqua.doge",
                                        target: "_blank",
                                        "data-sentry-element": "Link",
                                        "data-sentry-source-file": "header.jsx",
                                        children: (0, s.jsx)(i.Vs6, {
                                            "data-sentry-element": "BsInstagram",
                                            "data-sentry-source-file": "header.jsx"
                                        })
                                    }), (0, s.jsx)(r.default, {
                                        href: "https://t.me/officialaquadoge",
                                        target: "_blank",
                                        "data-sentry-element": "Link",
                                        "data-sentry-source-file": "header.jsx",
                                        children: (0, s.jsx)(i.iEj, {
                                            "data-sentry-element": "BsTelegram",
                                            "data-sentry-source-file": "header.jsx"
                                        })
                                    }), (0, s.jsx)(r.default, {
                                        href: "https://x.com/team_aquadoge",
                                        target: "_blank",
                                        "data-sentry-element": "Link",
                                        "data-sentry-source-file": "header.jsx",
                                        children: (0, s.jsx)(i.AMt, {
                                            "data-sentry-element": "BsTwitterX",
                                            "data-sentry-source-file": "header.jsx"
                                        })
                                    }), (0, s.jsx)(r.default, {
                                        href: "https://www.tiktok.com/@aquadogeofficial",
                                        target: "_blank",
                                        "data-sentry-element": "Link",
                                        "data-sentry-source-file": "header.jsx",
                                        children: (0, s.jsx)(i.k9h, {
                                            "data-sentry-element": "BsTiktok",
                                            "data-sentry-source-file": "header.jsx"
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })]
                })
            }
            let y = "text-4xl text-primary";

            function h(e) {
                let {
                    setMenuVisible: t,
                    isMenuVisible: a
                } = e;
                return a ? (0, s.jsx)(i.z3f, {
                    onClick: () => t(!1),
                    className: u()(y)
                }) : (0, s.jsx)(i.Ps6, {
                    onClick: () => t(!0),
                    className: u()(y)
                })
            }
        },
        83561: function(e, t, a) {
            a.d(t, {
                Z: function() {
                    return z
                }
            });
            var s = a(57437),
                n = a(30166),
                r = a(94446),
                l = a(69699),
                o = a(33145),
                i = a(31884),
                d = a(43949);
            a(46304), a(35361), a(44762);
            var c = a(36760),
                u = a.n(c);
            a(18827);
            var m = a(2265),
                x = a(95067);
            let f = (e, t) => {};
            var p = a(43867),
                y = a(15408);
            a(41854);
            var h = a(17745);

            function b() {
                let {
                    t: e
                } = (0, d.$G)();
                return (0, s.jsxs)("div", {
                    className: "sm:mt-4 text-white bg-[#000000aa] p-4 rounded-xl max-w-[400px] relative z-30",
                    "data-sentry-component": "FeatureList",
                    "data-sentry-source-file": "feature-list.jsx",
                    children: [(0, s.jsx)("h1", {
                        className: "text-base font-bold text-left text-white sm:pl-4",
                        children: (0, s.jsx)(d.cC, {
                            i18nKey: "hero.poweredBy",
                            components: [(0, s.jsx)("span", {
                                className: "mb-0 font-serif text-5xl text-blue white-glow"
                            }, "whirlpool-detail")],
                            "data-sentry-element": "Trans",
                            "data-sentry-source-file": "feature-list.jsx"
                        })
                    }), (0, s.jsxs)("div", {
                        className: "flex flex-col items-center gap-4 px-4 py-4 mt-2",
                        children: [(0, s.jsx)(o.default, {
                            src: "/assets/whirlpool.webp",
                            width: 160,
                            height: 160,
                            className: "sm:!absolute sm:w-[160px] w-3/4 sm:!-right-32 sm:!-top-16 section-header",
                            alt: "Whirlpool logo",
                            "data-sentry-element": "Image",
                            "data-sentry-source-file": "feature-list.jsx"
                        }), (0, s.jsx)("div", {
                            className: u()("[&>div]:rounded-3xl [&>div]:border-transparent [&>div]:border-2 [&>div]:px-4 [&>div]:py-1 [&>div]:relative", "[&>div]:before:content-[''] [&>div]:before:w-[14px] [&>div]:before:h-[14px] [&>div]:before:bg-[#00000000] [&>div]:before:absolute [&>div]:before:rounded-xl [&>div]:before:-left-6 [&>div]:before:top-3 [&>div]:before:border-2 [&>div]:before:border-blue", "flex flex-col gap-0 text-xl grow"),
                            children: [, , , ].fill(!0).map((t, a) => (0, s.jsx)("div", {
                                children: e("hero.whirlpool.".concat(a))
                            }, "whirlpool-features-".concat(a)))
                        })]
                    })]
                })
            }
            var j = a(8198),
                g = a(11140),
                v = a(58475);

            function w(e) {
                let {
                    visible: t,
                    setVisible: a
                } = e, {
                    t: n
                } = (0, d.$G)();
                return (0, s.jsxs)(v.u_, {
                    show: t,
                    onClose: () => a(!1),
                    className: u()("bg-[#00000066] [&>div]:max-w-[750px] [&>div>div]:bg-[#000000aa] [&>div>div]:border-2 [&>div>div]:border-[#00000055] [&>div>div]:backdrop-blur flex justify-center items-center [&>div]:h-[unset]", "sm:p-8 p-1"),
                    "data-sentry-element": "Modal",
                    "data-sentry-component": "StakingOfferModal",
                    "data-sentry-source-file": "staking-offer-modal.jsx",
                    children: [(0, s.jsx)(v.u_.Header, {
                        className: "[&>h3]:text-primary p-8 pb-2 [&>h3]:text-3xl font-serif [&>button]:text-3xl [&>button]:text-primary [&>h3]:text-primary border-transparent",
                        onClick: e => {
                            e.preventDefault(), e.stopPropagation()
                        },
                        "data-sentry-element": "unknown",
                        "data-sentry-source-file": "staking-offer-modal.jsx",
                        children: n("globals.staking")
                    }), (0, s.jsx)(v.u_.Body, {
                        className: "py-5 ",
                        onClick: e => {
                            e.preventDefault(), e.stopPropagation()
                        },
                        "data-sentry-element": "unknown",
                        "data-sentry-source-file": "staking-offer-modal.jsx",
                        children: (0, s.jsx)("div", {
                            className: "p-2 max-h-[67vh] flex flex-col gap-2 text-base text-gray-300 leading-loose tracking-wider whitespace-pre-line",
                            children: (0, s.jsx)("p", {
                                children: (0, s.jsx)(d.cC, {
                                    i18nKey: "staking.stakingInfo",
                                    components: [(0, s.jsx)("strong", {
                                        className: "font-bold text-primary"
                                    }, "bold"), (0, s.jsx)("strong", {
                                        className: "font-bold text-primary"
                                    }, "bold-2")],
                                    "data-sentry-element": "Trans",
                                    "data-sentry-source-file": "staking-offer-modal.jsx"
                                })
                            })
                        })
                    }), (0, s.jsx)(v.u_.Footer, {
                        className: "flex justify-end gap-2 px-5 pb-5 bg-transparent border-transparent",
                        "data-sentry-element": "unknown",
                        "data-sentry-source-file": "staking-offer-modal.jsx",
                        children: (0, s.jsx)(v.zx, {
                            onClick: () => a(!1),
                            className: "px-4 py-1 bg-transparent border-2 border-primary rounded-lg text-primary font-bold [&>span]:relative [&>span]:text-base",
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "staking-offer-modal.jsx",
                            children: n("globals.cancel")
                        })
                    })]
                })
            }
            a(5578), a(27892);
            var N = a(30245);
            let k = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return e > 1e12 ? (e / 1e12).toFixed(1) + "T" : e > 1e9 ? (e / 1e9).toFixed(1) + "B" : e > 1e6 ? (e / 1e6).toFixed(1) + "M" : Math.floor(e).toLocaleString()
            };

            function T() {
                let {
                    t: e
                } = (0, d.$G)(), [t, a] = (0, m.useState)(!1), {
                    data: n
                } = (0, j.a)({
                    queryKey: ["presaleState"],
                    refetchInterval: 3e4,
                    queryFn: async () => {
                        let {
                            data: e
                        } = await N.Z.get("fetch-presale-state");
                        return e
                    }
                });
                return (0, s.jsxs)("div", {
                    className: "relative sm:w-[160px] !z-30 flex items-center justify-center sm:h-[160px] w-[120px] h-[120px] cursor-pointer",
                    onClick: () => a(!0),
                    "data-sentry-component": "ApyBadge",
                    "data-sentry-source-file": "apy-badge.jsx",
                    children: [(0, s.jsx)(w, {
                        visible: t,
                        setVisible: a,
                        "data-sentry-element": "StakingOfferModal",
                        "data-sentry-source-file": "apy-badge.jsx"
                    }), (0, s.jsx)(o.default, {
                        src: "/assets/badge.webp",
                        width: 400,
                        height: 400,
                        className: "absolute",
                        alt: "",
                        "data-sentry-element": "Image",
                        "data-sentry-source-file": "apy-badge.jsx"
                    }), (0, s.jsxs)("div", {
                        className: "relative z-10 flex flex-col items-center justify-center gap-1",
                        children: [(0, s.jsxs)("h3", {
                            className: "font-serif text-2xl font-bold text-center sm:text-3xl text-purple",
                            children: [k(null == n ? void 0 : n.APY), "%"]
                        }), (0, s.jsx)("span", {
                            className: "text-sm font-bold tracking-widest text-center uppercase opacity-100 sm:text-lg font-condensed",
                            children: e("presaleForm.currentAPY")
                        })]
                    }), (0, s.jsx)("button", {
                        className: "absolute max-w-[130px] font-bold !font-sans flex items-center gap-1 rounded-lg bg-primary !text-black !normal-case justify-center !px-3 !py-2 !leading-tight !text-sm md:bottom-2 -bottom-1 !bg-transparent",
                        children: (0, s.jsx)(g.kjE, {
                            className: "relative inline text-2xl text-purple",
                            "data-sentry-element": "BsQuestionCircle",
                            "data-sentry-source-file": "apy-badge.jsx"
                        })
                    })]
                })
            }

            function C() {
                let {
                    t: e
                } = (0, d.$G)();
                return ! function() {
                    let {
                        ready: e,
                        params: t,
                        trackWalletConnected: a
                    } = (0, x.Z)(), [s, n] = (0, m.useState)(!1), r = (0, p.py)(), l = (0, y.O)();
                    (0, p.mA)({
                        onConnect(e) {
                            let {
                                address: t,
                                connector: s,
                                isReconnected: n
                            } = e;
                            !1 === n && s.getChainId().then(e => {
                                a(t, (0, h.pp)(e))
                            })
                        }
                    }), (0, m.useEffect)(() => {}, []), (0, m.useEffect)(() => {
                        (null == l ? void 0 : l.publicKey) && e && !localStorage.getItem("didTrackSol") && (f(l.publicKey.toString(), t.referrer), a(l.publicKey.toString(), "solana"), localStorage.setItem("didTrackSol", !0))
                    }, [r, e])
                }(), (0, s.jsx)("section", {
                    className: "relative flex w-full sm:min-h-[100vh] sky-bg",
                    id: "home",
                    "data-sentry-component": "Hero",
                    "data-sentry-source-file": "hero.jsx",
                    children: (0, s.jsxs)("div", {
                        className: "flex items-center w-full m-auto max-w-screen-2xl",
                        children: [(0, s.jsxs)("div", {
                            className: "items-end justify-between hidden w-full h-full md:flex lg:px-24",
                            children: [(0, s.jsxs)("div", {
                                className: "relative z-20 flex flex-col items-center w-1/2 gap-2 pt-0 -ml-12",
                                children: [(0, s.jsxs)("div", {
                                    className: "whale-container bg-[#ffffff00] scale-[0.8] z-10 w-[700px] h-[400px] absolute bottom-[40vh] left-[0vw] overflow-hidden",
                                    children: [(0, s.jsx)(o.default, {
                                        width: 570,
                                        height: 143,
                                        src: "/assets/splash-sm-b.webp",
                                        className: "absolute splash-sm splash-sm-b",
                                        alt: "Waves",
                                        "data-sentry-element": "Image",
                                        "data-sentry-source-file": "hero.jsx"
                                    }), (0, s.jsx)(o.default, {
                                        width: 713,
                                        height: 220,
                                        src: "/assets/splash-lg-b.webp",
                                        className: "absolute z-20 splash-lg splash-lg-b",
                                        alt: "Waves",
                                        "data-sentry-element": "Image",
                                        "data-sentry-source-file": "hero.jsx"
                                    }), (0, s.jsx)(o.default, {
                                        width: 461,
                                        height: 532,
                                        src: "/assets/whale.webp",
                                        className: "z-30 whale",
                                        alt: "Whale",
                                        "data-sentry-element": "Image",
                                        "data-sentry-source-file": "hero.jsx"
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "whale-splashes-container bg-[#ffffff00] scale-[0.8] w-[700px] h-[400px] z-10 absolute bottom-[37vh] left-[0vw]",
                                    children: [(0, s.jsx)(o.default, {
                                        width: 602,
                                        height: 251,
                                        src: "/assets/ripples.webp",
                                        className: "ripples",
                                        alt: "",
                                        "data-sentry-element": "Image",
                                        "data-sentry-source-file": "hero.jsx"
                                    }), (0, s.jsx)(o.default, {
                                        width: 570,
                                        height: 190,
                                        src: "/assets/splash-sm-f.webp",
                                        className: "relative splash-sm splash-sm-f",
                                        alt: "",
                                        "data-sentry-element": "Image",
                                        "data-sentry-source-file": "hero.jsx"
                                    }), (0, s.jsx)(o.default, {
                                        width: 602,
                                        height: 251,
                                        src: "/assets/ripples.webp",
                                        className: "ripples-lg",
                                        alt: "",
                                        "data-sentry-element": "Image",
                                        "data-sentry-source-file": "hero.jsx"
                                    }), (0, s.jsx)(o.default, {
                                        width: 728,
                                        height: 285,
                                        src: "/assets/splash-lg-f.webp",
                                        className: "z-40 splash-lg splash-lg-f",
                                        alt: "",
                                        "data-sentry-element": "Image",
                                        "data-sentry-source-file": "hero.jsx"
                                    })]
                                }), (0, s.jsx)(o.default, {
                                    width: 1868,
                                    height: 664,
                                    src: "/assets/logo.webp",
                                    className: "-mb-28 mt-16 max-w-[550px] mx-auto z-20",
                                    alt: "logo",
                                    "data-sentry-element": "Image",
                                    "data-sentry-source-file": "hero.jsx"
                                }), (0, s.jsx)("h4", {
                                    className: "relative z-40 inline mb-4 text-4xl text-white font-condensed site-header",
                                    children: e("globals.heroSub")
                                }), (0, s.jsx)("div", {
                                    className: "relative z-30 flex justify-center w-full",
                                    children: (0, s.jsx)(b, {
                                        "data-sentry-element": "FeatureList",
                                        "data-sentry-source-file": "hero.jsx"
                                    })
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "relative flex flex-col gap-2 pt-24",
                                children: [(0, s.jsx)("div", {
                                    className: "absolute z-30 -top-0 -right-24",
                                    children: (0, s.jsx)(T, {
                                        "data-sentry-element": "ApyBadge",
                                        "data-sentry-source-file": "hero.jsx"
                                    })
                                }), (0, s.jsx)(i.Z, {
                                    "data-sentry-element": "PresaleForm",
                                    "data-sentry-source-file": "hero.jsx"
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "absolute h-[26vh] w-[100%] top-2 left-0",
                                children: [(0, s.jsx)(o.default, {
                                    src: "/assets/clouds.webp",
                                    width: 3424,
                                    height: 1920,
                                    className: "absolute left-0 object-cover object-bottom w-full h-full -top-2",
                                    alt: "",
                                    "data-sentry-element": "Image",
                                    "data-sentry-source-file": "hero.jsx"
                                }), (0, s.jsx)(o.default, {
                                    src: "/assets/horizon.webp",
                                    width: 5573,
                                    height: 1247,
                                    className: "absolute left-0 object-cover object-bottom w-full h-full -top-2 horizon",
                                    alt: "",
                                    "data-sentry-element": "Image",
                                    "data-sentry-source-file": "hero.jsx"
                                })]
                            }), (0, s.jsx)(o.default, {
                                src: "/assets/ocean.webp",
                                width: 2854,
                                height: 1605,
                                className: "absolute w-[100vw] left-[0vw] top-[26vh] h-[74vh]",
                                alt: "Ocean",
                                "data-sentry-element": "Image",
                                "data-sentry-source-file": "hero.jsx"
                            }), (0, s.jsx)(o.default, {
                                src: "/assets/waves-back.webp",
                                width: 2854,
                                height: 1605,
                                className: "absolute w-[110vw] left-[-5vw] max-w-[unset] top-[24vh] h-[77vh] waves-back",
                                alt: "Waves",
                                "data-sentry-element": "Image",
                                "data-sentry-source-file": "hero.jsx"
                            }), (0, s.jsx)(o.default, {
                                src: "/assets/doge-thumb.webp",
                                height: 1235,
                                width: 2851,
                                className: "thumb absolute -bottom-4 z-10 w-[300px] h-auto left-[50%]",
                                alt: "Doge",
                                "data-sentry-element": "Image",
                                "data-sentry-source-file": "hero.jsx"
                            }), (0, s.jsx)(o.default, {
                                src: "/assets/waves-fore.webp",
                                height: 1235,
                                width: 2851,
                                className: "max-w-[unset] absolute -bottom-12 left-0 z-10 w-[110%] h-auto waves",
                                alt: "Waves",
                                "data-sentry-element": "Image",
                                "data-sentry-source-file": "hero.jsx"
                            }), (0, s.jsx)("div", {
                                id: "swim-container",
                                className: "fixed top-[50%] w-[245px] h-[403px] right-24 z-20",
                                children: (0, s.jsx)("div", {
                                    id: "swim",
                                    height: 270,
                                    width: 300,
                                    className: "w-full h-full",
                                    alt: "Aquadoge"
                                })
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "relative flex flex-col items-center justify-start w-full min-h-screen py-0 md:hidden",
                            children: [(0, s.jsx)("div", {
                                className: "relative h-[56vw] w-[100%] -top-[4vw] left-0",
                                children: (0, s.jsx)(o.default, {
                                    src: "/assets/horizon-mob.webp",
                                    width: 5573,
                                    height: 1247,
                                    className: "object-cover object-bottom w-full h-full",
                                    alt: "",
                                    "data-sentry-element": "Image",
                                    "data-sentry-source-file": "hero.jsx"
                                })
                            }), (0, s.jsx)(o.default, {
                                src: "/assets/ocean-mob.webp",
                                width: 2854,
                                height: 1605,
                                className: "absolute w-[100%] left-[0vw] top-[52vw] h-[100vw]",
                                alt: "Waves",
                                "data-sentry-element": "Image",
                                "data-sentry-source-file": "hero.jsx"
                            }), (0, s.jsx)(o.default, {
                                src: "/assets/waves-back-mob.webp",
                                width: 3600,
                                height: 4700,
                                className: "absolute w-[100vw] z-10 object-cover left-[0vw] top-[56vw] h-[100vw] waves-back",
                                alt: "Waves",
                                "data-sentry-element": "Image",
                                "data-sentry-source-file": "hero.jsx"
                            }), (0, s.jsxs)("div", {
                                className: "relative z-10 flex flex-col items-center py-2",
                                children: [(0, s.jsx)(o.default, {
                                    width: 600,
                                    height: 274,
                                    src: "/assets/logo.webp",
                                    className: "mx-4 w-[90%] -mt-14 -mb-14",
                                    alt: "",
                                    "data-sentry-element": "Image",
                                    "data-sentry-source-file": "hero.jsx"
                                }), (0, s.jsx)("h4", {
                                    className: "font-condensed text-[30px] tracking-tight text-primary site-header",
                                    children: e("globals.heroSub")
                                })]
                            }), (0, s.jsx)(i.Z, {
                                "data-sentry-element": "PresaleForm",
                                "data-sentry-source-file": "hero.jsx"
                            }), (0, s.jsx)("div", {
                                className: "absolute z-30 bottom-16 -right-2",
                                children: (0, s.jsx)(T, {
                                    "data-sentry-element": "ApyBadge",
                                    "data-sentry-source-file": "hero.jsx"
                                })
                            }), (0, s.jsxs)("div", {
                                className: "relative w-full",
                                children: [(0, s.jsx)(o.default, {
                                    src: "/assets/doge-thumb.webp",
                                    height: 1235,
                                    width: 2851,
                                    className: "thumb-mob z-20 -top-0 w-[200px] -mb-12 h-auto relative m-auto",
                                    alt: "",
                                    "data-sentry-element": "Image",
                                    "data-sentry-source-file": "hero.jsx"
                                }), (0, s.jsx)(o.default, {
                                    src: "/assets/waves-fore-mob.webp",
                                    height: 1235,
                                    width: 2851,
                                    className: "max-w-[unset] top-[120px] z-30 w-[110%] h-auto absolute left-[0%]",
                                    alt: "Waves",
                                    "data-sentry-element": "Image",
                                    "data-sentry-source-file": "hero.jsx"
                                })]
                            }), (0, s.jsx)("div", {
                                id: "swim-container",
                                className: "fixed top-[50%] w-[137px] h-[246px] right-24 z-10",
                                children: (0, s.jsx)("div", {
                                    id: "swim",
                                    height: 270,
                                    width: 300,
                                    className: "w-full h-full",
                                    alt: "Aquadoge"
                                })
                            })]
                        })]
                    })
                })
            }
            let S = (0, n.default)(() => a.e(291).then(a.bind(a, 10291)), {
                    loadableGenerated: {
                        webpack: () => [10291]
                    }
                }),
                I = (0, n.default)(() => a.e(3214).then(a.bind(a, 3214)), {
                    loadableGenerated: {
                        webpack: () => [3214]
                    }
                }),
                M = (0, n.default)(() => a.e(2495).then(a.bind(a, 2495)), {
                    loadableGenerated: {
                        webpack: () => [2495]
                    }
                }),
                B = (0, n.default)(() => Promise.all([a.e(461), a.e(98)]).then(a.bind(a, 80098)), {
                    loadableGenerated: {
                        webpack: () => [80098]
                    }
                }),
                L = (0, n.default)(() => a.e(8136).then(a.bind(a, 58136)), {
                    loadableGenerated: {
                        webpack: () => [58136]
                    }
                }),
                A = (0, n.default)(() => a.e(8966).then(a.bind(a, 48966)), {
                    loadableGenerated: {
                        webpack: () => [48966]
                    }
                }),
                P = (0, n.default)(() => a.e(2303).then(a.bind(a, 62303)), {
                    loadableGenerated: {
                        webpack: () => [62303]
                    }
                }),
                Z = (0, n.default)(() => a.e(9995).then(a.bind(a, 29995)), {
                    loadableGenerated: {
                        webpack: () => [29995]
                    }
                }),
                F = (0, n.default)(() => a.e(2316).then(a.bind(a, 62316)), {
                    loadableGenerated: {
                        webpack: () => [62316]
                    }
                }),
                E = (0, n.default)(() => a.e(973).then(a.bind(a, 41846)), {
                    loadableGenerated: {
                        webpack: () => [41846]
                    }
                }),
                D = (0, n.default)(() => a.e(8211).then(a.bind(a, 38211)), {
                    loadableGenerated: {
                        webpack: () => [38211]
                    }
                });

            function z() {
                let {
                    t: e
                } = (0, d.$G)();
                return (0, s.jsxs)("main", {
                    className: "overflow-hidden",
                    "data-sentry-component": "Homepage",
                    "data-sentry-source-file": "homepage.jsx",
                    children: [(0, s.jsx)(r.Z, {
                        "data-sentry-element": "Splash",
                        "data-sentry-source-file": "homepage.jsx"
                    }), (0, s.jsx)(l.Z, {
                        "data-sentry-element": "Header",
                        "data-sentry-source-file": "homepage.jsx"
                    }), (0, s.jsx)(C, {
                        "data-sentry-element": "Hero",
                        "data-sentry-source-file": "homepage.jsx"
                    }), (0, s.jsx)("div", {
                        className: "mt-20 sm:hidden w-[95%] m-auto",
                        children: (0, s.jsx)(b, {
                            "data-sentry-element": "FeatureList",
                            "data-sentry-source-file": "homepage.jsx"
                        })
                    }), (0, s.jsx)("div", {
                        className: "relative z-30 flex justify-center w-full mt-12 sm:mt-0",
                        children: (0, s.jsx)(I, {
                            "data-sentry-element": "StakingStatistics",
                            "data-sentry-source-file": "homepage.jsx"
                        })
                    }), (0, s.jsx)(M, {
                        "data-sentry-element": "FeaturedIn",
                        "data-sentry-source-file": "homepage.jsx"
                    }), (0, s.jsx)(B, {
                        "data-sentry-element": "About",
                        "data-sentry-source-file": "homepage.jsx"
                    }), (0, s.jsx)(S, {
                        "data-sentry-element": "Newsletter",
                        "data-sentry-source-file": "homepage.jsx"
                    }), (0, s.jsx)(A, {
                        "data-sentry-element": "Tokenomics",
                        "data-sentry-source-file": "homepage.jsx"
                    }), (0, s.jsx)(P, {
                        "data-sentry-element": "Roadmap",
                        "data-sentry-source-file": "homepage.jsx"
                    }), (0, s.jsx)(D, {
                        "data-sentry-element": "PlayToEarn",
                        "data-sentry-source-file": "homepage.jsx"
                    }), (0, s.jsx)(L, {
                        "data-sentry-element": "HowToBuy",
                        "data-sentry-source-file": "homepage.jsx"
                    }), (0, s.jsx)(E, {
                        "data-sentry-element": "Faq",
                        "data-sentry-source-file": "homepage.jsx"
                    }), (0, s.jsx)(F, {
                        "data-sentry-element": "Disclaimer",
                        "data-sentry-source-file": "homepage.jsx"
                    }), (0, s.jsx)(Z, {
                        "data-sentry-element": "Contact",
                        "data-sentry-source-file": "homepage.jsx"
                    })]
                })
            }
        },
        31884: function(e, t, a) {
            a.d(t, {
                Z: function() {
                    return eN
                }
            });
            var s = a(57437),
                n = a(2265);
            let r = [{
                    cName: "text-green-900",
                    text: "✅ Presale is open..."
                }],
                l = (0, n.createContext)({
                    logs: [...r]
                });

            function o(e) {
                let {
                    children: t
                } = e, [a, o] = (0, n.useState)([...r]);
                return (0, s.jsx)(l.Provider, {
                    value: {
                        logs: a,
                        addLog: e => o(t => [...t, e]),
                        clearLogs: () => {
                            o([...r])
                        }
                    },
                    children: t
                })
            }
            var i = a(33145),
                d = a(24786),
                c = a(32058),
                u = a(27648),
                m = a(36760),
                x = a.n(m),
                f = a(43867),
                p = a(28243),
                y = a(17745),
                h = a(99281);
            let b = e => {
                var t, a;
                return null == e ? void 0 : null === (a = e.account) || void 0 === a ? void 0 : null === (t = a.address) || void 0 === t ? void 0 : t.toString()
            };

            function j(e) {
                let {
                    onClick: t
                } = e, {
                    chain: a
                } = (0, n.useContext)(p.Z);
                return (0, s.jsx)("div", {
                    className: "flex flex-col items-center justify-center w-full gap-0",
                    "data-sentry-component": "ChooseCurrency",
                    "data-sentry-source-file": "choose-currency.jsx",
                    children: (0, y.c5)(a).map(e => e.type === h.B5 ? (0, s.jsx)(N, {
                        onClick: t,
                        currency: e
                    }, e.key) : (0, s.jsx)(w, {
                        onClick: t,
                        currency: e
                    }, e.key))
                })
            }

            function g(e) {
                let {
                    onClick: t,
                    currency: a
                } = e, {
                    setCurrency: r,
                    currency: l
                } = (0, n.useContext)(p.Z);
                return (0, s.jsxs)("div", {
                    className: x()("cursor-pointer flex items-center justify-center col-span-4 gap-2 p-2 px-6 rounded-lg", {
                        "!border-[#054]": a.key === l
                    }, "border-2 border-[#00000000] transition-colors hover:border-[#387]   bg-[#fff]"),
                    onClick: () => {
                        r(a.key), t()
                    },
                    "data-sentry-component": "CurrencyButton",
                    "data-sentry-source-file": "choose-currency.jsx",
                    children: [(0, s.jsx)(i.default, {
                        src: "/assets/currencies/".concat(a.logo),
                        className: x()("object-cover p-[2px] bg-transparent"),
                        width: 35,
                        height: 35,
                        alt: a.name,
                        "data-sentry-element": "Image",
                        "data-sentry-source-file": "choose-currency.jsx"
                    }), (0, s.jsx)("span", {
                        className: "sm:text-lg grow",
                        children: _.startCase(a.symbol)
                    })]
                })
            }
            let v = {
                uni: "hover:bg-[#ffffff] hover:border-[#ff007a] hover:text-[#ff007a]"
            };

            function w(e) {
                var t;
                let {
                    currency: a,
                    onClick: r
                } = e, {
                    chain: l
                } = (0, n.useContext)(p.Z), {
                    data: o
                } = (0, f.py)(), {
                    data: d
                } = (0, f.KQ)({
                    address: b(o),
                    chainId: l,
                    token: a.tokenAddress,
                    watch: !0
                });
                return (0, s.jsxs)("div", {
                    className: x()("w-full grid grid-cols-12 items-center border-t border-[#aaffee66] py-2"),
                    "data-sentry-component": "ERC_20_Currency",
                    "data-sentry-source-file": "choose-currency.jsx",
                    children: [(0, s.jsx)(g, {
                        onClick: r,
                        currency: a,
                        "data-sentry-element": "CurrencyButton",
                        "data-sentry-source-file": "choose-currency.jsx"
                    }), (0, s.jsxs)("div", {
                        className: "flex flex-col items-start justify-start col-span-5 gap-0 pl-3",
                        children: [(0, s.jsx)("span", {
                            className: "text-xs opacity-50",
                            children: "Balance:"
                        }), (0, s.jsx)("span", {
                            className: "text-2xl",
                            children: (null == d ? void 0 : null === (t = d.formatted) || void 0 === t ? void 0 : t.toLocaleString().slice(0, 8)) || "~"
                        })]
                    }), (null == a ? void 0 : a.dex) && (0, s.jsxs)(u.default, {
                        className: x()("flex items-center justify-center col-span-3 gap-1 p-2 py-1 text-xs rounded-lg cursor-pointer", "border border-white transition-colors bg-[#fff]", v[a.dex.key]),
                        href: a.dex.href(a.tokenAddress),
                        target: "_blank",
                        children: [(0, s.jsx)(i.default, {
                            src: "/assets/currencies/".concat(a.dex.logo),
                            className: x()("object-cover bg-white p-[3px] rounded-[50%]"),
                            width: 26,
                            height: 26,
                            alt: a.name || "Currency logo"
                        }), (0, s.jsx)("span", {
                            className: "",
                            children: "Get more"
                        })]
                    })]
                })
            }

            function N(e) {
                var t;
                let {
                    onClick: a,
                    currency: r
                } = e, {
                    chain: l
                } = (0, n.useContext)(p.Z), o = (0, y.KQ)(l);
                return (0, s.jsxs)("div", {
                    className: x()("w-full grid grid-cols-12 items-center border-t border-[#aaffee66] py-2"),
                    "data-sentry-component": "NativeCurrency",
                    "data-sentry-source-file": "choose-currency.jsx",
                    children: [(0, s.jsx)(g, {
                        onClick: a,
                        currency: r,
                        "data-sentry-element": "CurrencyButton",
                        "data-sentry-source-file": "choose-currency.jsx"
                    }), (0, s.jsxs)("div", {
                        className: "flex flex-col items-start justify-start col-span-8 gap-0 pl-3",
                        children: [(0, s.jsx)("span", {
                            className: "text-xs opacity-50",
                            children: "Balance:"
                        }), (0, s.jsx)("span", {
                            className: "text-2xl",
                            children: (null == o ? void 0 : null === (t = o.formatted) || void 0 === t ? void 0 : t.toLocaleString().slice(0, 10)) || "~"
                        })]
                    })]
                })
            }
            var k = a(8946),
                T = a.n(k),
                C = a(8198),
                S = a(39502),
                I = a(68768),
                M = a(44762),
                B = a(63321);
            let L = {
                result: BigInt(M.CJ)
            };

            function A(e) {
                let {
                    chain: t,
                    currency: a,
                    address: s,
                    spendAmount: r
                } = e, [l, o] = (0, n.useState)(0), [i, d] = (0, n.useState)(0), {
                    data: c
                } = (0, f.KQ)({
                    address: s,
                    chainId: t,
                    watch: !0
                }), {
                    nativeLatestPrice: u
                } = (0, n.useContext)(B.D), m = (0, n.useMemo)(() => {
                    if (null == u ? void 0 : u.result) return u.result
                }, [t, u]), x = (0, n.useMemo)(() => "USD" === a && (0, y.YD)(t, a), [t, a]), p = (0, n.useMemo)(() => Math.min(M.m2, x), [x]), h = e => {
                    if (!(null == L ? void 0 : L.result)) return 0;
                    if ("native" !== a && "weth" !== a || !m) return Math.floor((0, S.b)(e / L.result, 12)); {
                        let t = m / L.result * e;
                        return Math.floor((0, S.b)(t, 30))
                    }
                }, b = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return (0, I.v)("" + e, 18)
                };
                return (0, n.useEffect)(() => {
                    let e = b(r);
                    o(h(e)), d((0, I.v)(e + "", x))
                }, [r, null == L ? void 0 : L.result, t, a]), {
                    tokenPrice: M.CJ,
                    priceDecimals: x,
                    displayDecimals: p,
                    nativeBalance: c,
                    nativeUsdPrice: m,
                    calculateTokens: h,
                    buyAmount: l,
                    buyPrice: i
                }
            }
            var P = a(41854),
                Z = a(43949),
                F = a(31669),
                E = a(27964),
                D = a(72932),
                z = a(99372),
                q = a(88203),
                G = a(11301),
                $ = a(12629),
                W = a(6484),
                O = a(95067);
            BigInt(M.CJ);
            let K = e => {
                var t, a;
                return null == e ? void 0 : null === (a = e.data) || void 0 === a ? void 0 : null === (t = a.account) || void 0 === t ? void 0 : t.address
            };
            var Q = a(58475),
                V = a(11140),
                H = a(18827),
                R = a(12326);

            function U(e) {
                let {
                    visible: t,
                    setVisible: a
                } = e, {
                    t: r
                } = (0, Z.$G)(), [l, o] = (0, n.useState)(!1), [d, c] = (0, n.useState)(!1), [m, f] = (0, n.useState)(!1);
                return (0, s.jsx)(Q.u_, {
                    show: t,
                    onClose: () => a(!1),
                    onClick: () => {
                        a(!1)
                    },
                    className: x()("bg-[#00000066] [&>div>div]:bg-[#ffffff] [&>div]:max-w-[550px] flex justify-center items-center [&>div]:h-[unset]", "sm:p-8 p-1"),
                    "data-sentry-element": "Modal",
                    "data-sentry-component": "ThankYouModal",
                    "data-sentry-source-file": "thank-you.jsx",
                    children: (0, s.jsxs)(Q.u_.Body, {
                        className: "flex flex-col items-start justify-center gap-2 p-4 overflow-visible sm:gap-4 sm:px-8 sm:py-6",
                        "data-sentry-element": "unknown",
                        "data-sentry-source-file": "thank-you.jsx",
                        children: [(0, s.jsx)(H.Z, {
                            visible: l,
                            setVisible: o,
                            "data-sentry-element": "ReferModal",
                            "data-sentry-source-file": "thank-you.jsx"
                        }), (0, s.jsx)(i.default, {
                            src: "/assets/turtle-shot.webp",
                            width: 250,
                            height: 250,
                            className: "mx-auto mb-0 -mt-12 sm:max-w-[unset] max-w-[120px] rounded sm:-mt-32",
                            alt: "Zissou thanking you",
                            "data-sentry-element": "Image",
                            "data-sentry-source-file": "thank-you.jsx"
                        }), (0, s.jsxs)("div", {
                            children: [(0, s.jsx)("h3", {
                                className: "font-serif sm:text-[25px] text-2xl text-left text-blue leading-tight sm:mb-0 mb-3",
                                children: r("thankYou.title")
                            }), (0, s.jsx)("p", {
                                className: "text-base",
                                children: r("thankYou.text")
                            }), (0, s.jsxs)("div", {
                                className: "flex items-center justify-around w-full gap-8 pt-3 text-2xl sm:justify-center sm:py-2 sm:text-3xl text-blue",
                                onClick: e => {
                                    e.stopPropagation()
                                },
                                children: [(0, s.jsx)(u.default, {
                                    href: "https://x.com/team_aquadoge",
                                    target: "_blank",
                                    "data-sentry-element": "Link",
                                    "data-sentry-source-file": "thank-you.jsx",
                                    children: (0, s.jsx)(V.AMt, {
                                        "data-sentry-element": "BsTwitterX",
                                        "data-sentry-source-file": "thank-you.jsx"
                                    })
                                }), (0, s.jsx)(u.default, {
                                    href: "https://t.me/officialaquadoge",
                                    target: "_blank",
                                    "data-sentry-element": "Link",
                                    "data-sentry-source-file": "thank-you.jsx",
                                    children: (0, s.jsx)(V.iEj, {
                                        "data-sentry-element": "BsTelegram",
                                        "data-sentry-source-file": "thank-you.jsx"
                                    })
                                }), (0, s.jsx)(u.default, {
                                    href: "https://instagram.com/aqua.doge",
                                    target: "_blank",
                                    "data-sentry-element": "Link",
                                    "data-sentry-source-file": "thank-you.jsx",
                                    children: (0, s.jsx)(V.Vs6, {
                                        "data-sentry-element": "BsInstagram",
                                        "data-sentry-source-file": "thank-you.jsx"
                                    })
                                })]
                            })]
                        }), (0, s.jsx)("div", {
                            className: "flex flex-col items-center justify-center w-full gap-2 py-2 mt-2 border-t-2 border-purple-200 sm:rounded-lg sm:mt-0 sm:border-2 sm:px-3 sm:py-6 sm:px-4",
                            onClick: e => {
                                e.stopPropagation()
                            },
                            children: (0, s.jsxs)("form", {
                                className: "flex flex-col w-full gap-3",
                                action: async e => {
                                    let t = await (0, R.z)(e, localStorage.getItem("session"));
                                    t.error && (f(!0), setTimeout(() => {
                                        f(!1)
                                    }, 3e3)), t.message && (c(!0), setTimeout(() => {
                                        c(!1)
                                    }, 3e3))
                                },
                                children: [(0, s.jsx)("p", {
                                    className: "text-base",
                                    children: r("thankYou.enroll")
                                }), (0, s.jsx)("label", {
                                    for: "search",
                                    class: "mb-2 text-sm font-medium text-gray-900 sr-only",
                                    children: "Sign up"
                                }), (0, s.jsxs)("div", {
                                    class: "relative",
                                    children: [(0, s.jsx)("div", {
                                        class: "absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-purple",
                                        children: (0, s.jsx)(V.lZw, {
                                            "data-sentry-element": "BsEnvelope",
                                            "data-sentry-source-file": "thank-you.jsx"
                                        })
                                    }), (0, s.jsx)("input", {
                                        type: "email",
                                        id: "email",
                                        name: "email",
                                        class: "block w-full p-4 ps-10 text-sm text-black border-2 border-purple-300 rounded-lg bg-gray-50 focus:ring-purple focus:border-purple",
                                        placeholder: "mail@provider.com",
                                        required: !0
                                    }), (0, s.jsx)("button", {
                                        type: "submit",
                                        className: x()("text-white absolute end-2.5 bottom-2.5 bg-purple hover:brightness-100 brightness-90 focus:ring-4 focus:outline-none focus:ring-blue font-medium rounded-lg text-sm px-4 py-2", {
                                            "!bg-red-700 text-white": m
                                        }, {
                                            "!bg-green-700 text-white": d
                                        }),
                                        children: m ? "Something went wrong" : d ? "Thanks!" : "Subscribe"
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [(0, s.jsx)("p", {
                                        className: "text-sm",
                                        children: r("thankYou.subscribe")
                                    }), (0, s.jsx)("input", {
                                        id: "default-checkbox",
                                        type: "checkbox",
                                        checked: !0,
                                        class: "w-6 h-6 text-purple bg-gray-100 border-gray-300 rounded"
                                    })]
                                })]
                            })
                        }), (0, s.jsxs)("div", {
                            className: "relative !hidden sm:!block !text-3xl !px-24 font-pirate text-on-map map-bg !flex-col !pt-14 !z-0 whitespace-pre-wrap sm:scale-[0.9] scale-[1.2] sm:-mt-4 -mb-32",
                            children: ["The sea is wide, but many", "'", "s the prize, that lie inside, Arise, arise!", (0, s.jsx)("span", {
                                className: "w-full mt-2 text-right",
                                children: "- Zissou"
                            })]
                        })]
                    })
                })
            }
            let Y = e => {
                var t, a, s;
                return null == e ? void 0 : null === (s = e.data) || void 0 === s ? void 0 : null === (a = s.account) || void 0 === a ? void 0 : null === (t = a.address) || void 0 === t ? void 0 : t.toString()
            };

            function J(e) {
                let {
                    logs: t,
                    loading: a
                } = e;
                return (0, s.jsxs)("div", {
                    className: "flex flex-col gap-0 px-2 py-2 mb-4 overflow-auto text-base border-2 border-white rounded-lg countdown-panel grow h-[133px] sm:h-[143px]",
                    "data-sentry-component": "LogsContainer",
                    "data-sentry-source-file": "ethish-txn-btn.jsx",
                    children: [t.map((e, t) => {
                        let {
                            cName: a,
                            text: n
                        } = e;
                        return (0, s.jsx)("span", {
                            className: a,
                            children: n
                        }, n + t)
                    }), a ? (0, s.jsx)("span", {
                        className: "",
                        children: "Processing..."
                    }) : (0, s.jsx)("span", {
                        className: "",
                        children: "Awaiting input"
                    })]
                })
            }
            var X = () => {
                    let {
                        t: e
                    } = (0, Z.$G)(), t = (0, f.py)(), [a, r] = (0, n.useState)(!1), [o, i] = (0, n.useState)(!1), {
                        chain: d,
                        currency: c,
                        spendAmount: u
                    } = (0, n.useContext)(p.Z), {
                        logs: m,
                        addLog: h,
                        clearLogs: b
                    } = (0, n.useContext)(l), {
                        balance: j,
                        allowance: g,
                        approve: v,
                        isApproving: w
                    } = function(e) {
                        let {
                            address: t,
                            onApproveSuccessful: a
                        } = e, {
                            chain: s,
                            currency: r
                        } = (0, n.useContext)(p.Z), l = (0, f.do)({
                            address: (0, y.V9)(s, r),
                            chainId: s,
                            abi: (0, y.au)(s, r),
                            functionName: "allowance",
                            args: [t || "0x0000000000000000000000000000000000000000", (0, y.jk)(s)],
                            watch: !0
                        });
                        return function(e) {
                            var t;
                            let {
                                chain: a,
                                baseContract: s,
                                pairContract: r,
                                query: l,
                                userWallet: o,
                                onApproveSuccessful: i
                            } = e, [d, c] = (0, n.useState)(BigInt(0)), {
                                data: u
                            } = (0, f.KQ)({
                                address: o,
                                chainId: a,
                                token: s.address,
                                watch: !0
                            });
                            (0, n.useEffect)(() => {
                                c((null == l ? void 0 : l.data) || 0)
                            }, [l]);
                            let m = e => {
                                    for (let t of ((0, z.Z)("Approved on " + (0, y.pp)(a)), e))
                                        if ((0, F.K)(t.address) === s.address) {
                                            let e = (0, E.F)({
                                                abi: s.abi,
                                                data: t.data,
                                                topics: t.topics
                                            });
                                            "Approval" === e.eventName && c(e.args.value)
                                        }
                                    i(), x.reset()
                                },
                                x = (0, f.GG)({ ...s,
                                    chainId: a,
                                    functionName: "approve",
                                    args: [r.address, (0, D.H_)("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", "bigint")]
                                }),
                                p = (0, f.BX)({
                                    hash: null === (t = x.data) || void 0 === t ? void 0 : t.hash,
                                    onSuccess: e => m(e.logs)
                                });
                            return {
                                balance: u,
                                allowance: d,
                                isApproving: (0, n.useMemo)(() => x.isLoading || p.isLoading, [a, x.isLoading, p.isLoading]),
                                approve: x.write
                            }
                        }({
                            chain: s,
                            baseContract: {
                                address: (0, y.V9)(s, r),
                                abi: (0, y.au)(s, r)
                            },
                            pairContract: {
                                address: (0, y.jk)(s)
                            },
                            query: l,
                            userWallet: t,
                            onApproveSuccessful: a
                        })
                    }({
                        address: Y(t),
                        onApproveSuccessful: () => {
                            h({
                                cName: "text-green-900",
                                text: e("logs.approved", {
                                    currency: c
                                })
                            }), i(!0)
                        }
                    }), {
                        buy: N,
                        buyError: k,
                        isPurchasing: T,
                        purchased: C
                    } = function(e) {
                        var t;
                        let {
                            chain: a,
                            currency: s,
                            spendAmount: r,
                            onPurchaseSubmitted: l,
                            onPurchaseSuccessful: o
                        } = e, [i, d] = (0, n.useState)(), [c, u] = (0, n.useState)(!1), [m, x] = (0, n.useState)(!1), {
                            params: p,
                            sendDashFx: h
                        } = (0, O.Z)(a), b = (0, f.py)(), j = e => ({ ...e,
                            onError: e => {
                                d(e.details || e.shortMessage), u(!1), null == w || w.reset(), setTimeout(() => d(), 5e3)
                            }
                        }), {
                            nativeLatestPrice: g
                        } = (0, n.useContext)(B.D), {
                            buyAmount: v
                        } = A({
                            chain: a,
                            currency: s,
                            spendAmount: r,
                            address: K(b)
                        });
                        (0, n.useEffect)(() => {
                            d()
                        }, [r, a, s]);
                        let w = (0, f.GG)(j({
                                onSuccess: l,
                                address: (0, y.jk)(a),
                                chainId: a,
                                abi: G,
                                functionName: (0, y.F_)(a, s)
                            })),
                            N = (e, t) => {
                                u(!1), x(!0), o(), setTimeout(() => x(!1), 5e3);
                                let s = (0, S.b)(M.CJ, 6) * v,
                                    n = K(b);
                                (0, z.Z)("Bought on " + (0, y.pp)(a)), h("/api/conversions", {
                                    network: (0, y.pp)(a),
                                    purchase_amount: s,
                                    wallet: n
                                }), W.queryClient.invalidateQueries({
                                    queryKey: ["presaleState", "tokensBought"]
                                }), w.reset()
                            };
                        return (0, f.BX)(j({
                            hash: null === (t = w.data) || void 0 === t ? void 0 : t.hash,
                            onSuccess: e => N(e.transactionHash, e.logs)
                        })), {
                            buy: (0, n.useMemo)(() => {
                                let e;
                                if ("native" === s) e = (e, t) => w.write({
                                    value: (0, $.f)("" + e),
                                    args: [t]
                                });
                                else {
                                    let t = (0, y.YD)(a, s);
                                    e = (e, a) => w.write({
                                        args: [(0, I.v)("" + e, t), a]
                                    })
                                }
                                return async (t, a) => (u(!0), e(t, a))
                            }, [w]),
                            isPurchasing: c,
                            purchased: m,
                            buyError: i
                        }
                    }({
                        chain: d,
                        currency: c,
                        spendAmount: u,
                        onPurchaseSuccessful: () => {
                            r(!0), h({
                                cName: "text-green-900",
                                text: e("logs.purchaseSuccessful")
                            })
                        },
                        onPurchaseSubmitted: () => h({
                            cName: "text-green-900",
                            text: e("logs.purchasedTxnSubmitted")
                        })
                    }), {
                        data: L
                    } = (0, f.KQ)({
                        address: Y(t),
                        chainId: d,
                        watch: !0
                    });
                    (0, n.useEffect)(() => {
                        k && h({
                            cName: "text-red-900",
                            text: "❌ ".concat(k)
                        })
                    }, [k]), (0, n.useEffect)(() => {
                        b(), h({
                            cName: "text-blue-900",
                            text: e("logs.changedNetwork", {
                                network: (0, y.pp)(d)
                            })
                        }), Y(t) && h({
                            cName: "text-blue-900",
                            text: e("logs.walletConnected")
                        })
                    }, [d]);
                    let P = (0, n.useMemo)(() => "native" === c ? parseFloat(null == L ? void 0 : L.formatted) : parseFloat(null == j ? void 0 : j.formatted), [c, L, j]),
                        Q = !(o || g > (0, I.v)("" + u, 6) || "native" === c),
                        V = async t => {
                            Q ? "native" !== c && ((0, z.Z)("Attempted approve on " + (0, y.pp)(d)), h({
                                cName: "text-blue-900",
                                text: e("logs.requestApproveSig", {
                                    currency: c
                                })
                            }), await v()) : ((0, z.Z)("Attempted buy on " + (0, y.pp)(d)), h({
                                cName: "text-blue-900",
                                text: e("logs.requestBuySig")
                            }), await N(u, t))
                        },
                        H = T || w,
                        R = 0 == u || H || !P || u >= P;
                    return (0, s.jsxs)("div", {
                        className: "relative flex flex-col",
                        "data-sentry-component": "BuyTokens",
                        "data-sentry-source-file": "ethish-txn-btn.jsx",
                        children: [(0, s.jsx)(U, {
                            visible: a,
                            setVisible: r,
                            "data-sentry-element": "ThankYouModal",
                            "data-sentry-source-file": "ethish-txn-btn.jsx"
                        }), (0, s.jsx)("span", {
                            className: "h-6 my-1 text-red-700",
                            children: u >= P && e("presaleForm.balanceTooLow")
                        }), (0, s.jsx)(J, {
                            logs: m,
                            loading: H,
                            "data-sentry-element": "LogsContainer",
                            "data-sentry-source-file": "ethish-txn-btn.jsx"
                        }), (0, s.jsx)("button", {
                            type: "submit",
                            disabled: R,
                            className: x()("primary-button w-full", {
                                "cursor-not-allowed opacity-60": R,
                                "mb-8": Q
                            }),
                            onClick: async () => R || await V(!0),
                            children: H ? (0, s.jsx)(q.Z, {
                                className: "relative h-8 p-0 -top-1 !text-white"
                            }) : Q ? e("presaleForm.approveButtonText") : e("presaleForm.buyButtonText")
                        }), !Q && (0, s.jsx)("button", {
                            disabled: R,
                            className: x()("my-2 mb-6", {
                                "cursor-not-allowed opacity-60": R
                            }),
                            onClick: async () => R || await V(!1),
                            children: "Buy without staking"
                        })]
                    })
                },
                ee = a(15408),
                et = a(6832),
                ea = a(5578),
                es = a(27892);
            let en = e => null == e ? void 0 : e.publicKey;

            function er(e) {
                let {
                    logs: t,
                    loading: a
                } = e;
                return (0, s.jsxs)("div", {
                    className: "flex flex-col gap-0 px-2 py-2 mb-4 overflow-auto text-base border-2 border-white rounded-lg countdown-panel grow h-[133px] sm:h-[143px]",
                    "data-sentry-component": "LogsContainer",
                    "data-sentry-source-file": "sol-txn-btn.jsx",
                    children: [t.map((e, t) => {
                        let {
                            cName: a,
                            text: n
                        } = e;
                        return (0, s.jsx)("span", {
                            className: a,
                            children: n
                        }, n + t)
                    }), a ? (0, s.jsx)("span", {
                        className: "",
                        children: "Processing..."
                    }) : (0, s.jsx)("span", {
                        className: "",
                        children: "Awaiting input"
                    })]
                })
            }
            var el = () => {
                    let {
                        t: e
                    } = (0, Z.$G)(), {
                        spendAmount: t,
                        chain: a
                    } = (0, n.useContext)(p.Z), {
                        buy: r,
                        buyError: o,
                        isPurchasing: i,
                        purchased: d
                    } = function(e) {
                        let {
                            spendAmount: t
                        } = e, {
                            t: a
                        } = (0, Z.$G)(), s = (0, ee.O)(), [r, l] = (0, n.useState)(), [o, i] = (0, n.useState)(!1), [d, c] = (0, n.useState)(!1), {
                            program: u,
                            connection: m
                        } = (0, es.on)((0, et.z)()), {
                            params: x,
                            sendDashFx: f
                        } = (0, O.Z)(P.$D.id), p = (0, es.b3)(), y = e => p.data ? e * T().get(p, "data.solana_price") : 0;
                        return {
                            buy: (0, n.useCallback)(async e => {
                                if (u) try {
                                    i(!0), await (0, ea.DQ)({
                                        program: u,
                                        wallet: s,
                                        amount: 1e9 * +t,
                                        shouldStake: e,
                                        evmAddress: ""
                                    });
                                    let a = y(t),
                                        n = null == s ? void 0 : s.publicKey.toString();
                                    return (0, z.Z)("Bought on SOL"), f("/api/conversions", {
                                        network: "sol",
                                        purchase_amount: a,
                                        wallet: n
                                    }), W.queryClient.invalidateQueries({
                                        queryKey: ["presaleState", "tokensBought"]
                                    }), c(!0), W.queryClient.invalidateQueries({
                                        queryKey: ["presaleState", "tokensBought"]
                                    }), setTimeout(() => c(!1), 5e3), i(!1), !0
                                } catch (e) {
                                    var n, r;
                                    return l((null == e ? void 0 : null === (n = e.error) || void 0 === n ? void 0 : n.toString()) || (null == e ? void 0 : null === (r = e.message) || void 0 === r ? void 0 : r.substr(0, 88)) || a("globals.somethingWentWrong")), setTimeout(() => {
                                        l()
                                    }, 5e3), i(!1), !1
                                }
                            }, [s, t, u]),
                            buyError: r,
                            isPurchasing: o,
                            purchased: d
                        }
                    }({
                        spendAmount: t
                    }), c = (0, ee.O)(), [u, m] = (0, n.useState)(!1), {
                        logs: f,
                        addLog: h,
                        clearLogs: b
                    } = (0, n.useContext)(l), j = (0, es.KQ)(c);
                    (0, n.useEffect)(() => {
                        o && h({
                            cName: "text-red-900",
                            text: "❌ ".concat(o)
                        })
                    }, [o]), (0, n.useEffect)(() => {
                        b(), h({
                            cName: "text-blue-900",
                            text: e("logs.changedNetwork", {
                                network: (0, y.pp)(a)
                            })
                        }), en(c) && h({
                            cName: "text-blue-900",
                            text: e("logs.walletConnected")
                        })
                    }, [a]);
                    let g = 0 == t || i || !j.data || t >= j.data;
                    return (0, s.jsxs)("div", {
                        className: "relative flex flex-col",
                        "data-sentry-component": "BuyTokens",
                        "data-sentry-source-file": "sol-txn-btn.jsx",
                        children: [(0, s.jsx)(U, {
                            visible: u,
                            setVisible: m,
                            "data-sentry-element": "ThankYouModal",
                            "data-sentry-source-file": "sol-txn-btn.jsx"
                        }), (0, s.jsx)("span", {
                            className: "h-6 my-1 text-red-700",
                            children: t >= (null == j ? void 0 : j.data) && e("presaleForm.balanceTooLow")
                        }), (0, s.jsx)(er, {
                            logs: f,
                            loading: i,
                            "data-sentry-element": "LogsContainer",
                            "data-sentry-source-file": "sol-txn-btn.jsx"
                        }), (0, s.jsx)("button", {
                            type: "submit",
                            disabled: g,
                            className: x()("primary-button w-full", {
                                "cursor-not-allowed opacity-60": g
                            }),
                            onClick: async () => {
                                !g && ((0, z.Z)("Attempted buy on SOL"), h({
                                    cName: "text-blue-900",
                                    text: e("logs.requestBuySig")
                                }), await r(!0) && h({
                                    cName: "text-green-900",
                                    text: e("logs.purchaseSuccessful")
                                }))
                            },
                            children: i ? (0, s.jsx)(q.Z, {
                                className: "relative h-8 p-0 -top-1"
                            }) : e("presaleForm.buyButtonText")
                        }), (0, s.jsx)("button", {
                            disabled: g,
                            className: x()("mt-2", {
                                "cursor-not-allowed opacity-60": g
                            }),
                            onClick: async () => g || await r(!1),
                            children: "Buy without staking"
                        })]
                    })
                },
                eo = a(19790),
                ei = a(30245);
            let ed = e => {
                var t, a, s;
                return null == e ? void 0 : null === (s = e.data) || void 0 === s ? void 0 : null === (a = s.account) || void 0 === a ? void 0 : null === (t = a.address) || void 0 === t ? void 0 : t.toString()
            };

            function ec() {
                var e, t;
                let {
                    t: a
                } = (0, Z.$G)(), {
                    chain: r,
                    currency: l,
                    setCurrency: o,
                    spendAmount: i,
                    setSpendAmount: d
                } = (0, n.useContext)(p.Z), c = (0, f.py)(), u = (0, y.KQ)(r, (0, y.V9)(r, l)), m = (0, C.a)({
                    queryKey: ["presaleState"],
                    queryFn: async () => (await ei.Z.get("fetch-presale-state")).data
                }), {
                    buyAmount: x
                } = A({
                    chain: r,
                    currency: l,
                    address: ed(c),
                    spendAmount: i
                });
                return (0, n.useEffect)(() => {
                    [P.$D.id].includes(r) && o("NATIVE")
                }, [r]), (0, s.jsxs)("div", {
                    className: "relative z-20 flex flex-col justify-between w-full h-full gap-0 py-4 text-base text-left text-black",
                    "data-sentry-component": "Buy",
                    "data-sentry-source-file": "currency-input.jsx",
                    children: [(0, s.jsxs)("div", {
                        className: "flex flex-col gap-2 border-black border-2 px-4 py-2 bg-[#ffffff] rounded-lg justify-center",
                        children: [(0, s.jsxs)("div", {
                            className: "",
                            children: [(0, s.jsx)("label", {
                                htmlFor: "pay-input",
                                className: "block w-full text-sm font-bold tracking-wider text-left sm:text-base",
                                children: (0, s.jsx)(Z.cC, {
                                    i18nKey: "presaleForm.spendAmount",
                                    components: [(null === (e = (0, y.zC)(r, l)) || void 0 === e ? void 0 : e.symbol) || ""],
                                    "data-sentry-element": "Trans",
                                    "data-sentry-source-file": "currency-input.jsx"
                                })
                            }), (0, s.jsxs)("div", {
                                className: "flex gap-2",
                                children: [(0, s.jsx)("input", {
                                    type: "text",
                                    id: "pay-input",
                                    className: "bg-[transparent] w-full text-3xl focus-visible:outline-none border-b border-black",
                                    placeholder: "0",
                                    value: i,
                                    onChange: e => {
                                        let {
                                            target: {
                                                value: t
                                            }
                                        } = e;
                                        isNaN(+t) || d(t)
                                    }
                                }), (0, s.jsx)("button", {
                                    className: "px-3 py-0 font-bold border-2 border-black rounded hover:bg-primary transition-colours",
                                    disabled: !(null == u ? void 0 : u.value),
                                    onClick: () => {
                                        let e = u.value - (0, I.v)("0.001", u.decimals);
                                        d(Math.max(0, (0, S.b)(e, u.decimals).slice(0, 12)))
                                    },
                                    children: "MAX"
                                })]
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "border-b border-black cursor-not-allowed",
                            children: [(0, s.jsx)("label", {
                                htmlFor: "recieve-input",
                                className: "block w-full mt-1 text-xs font-bold tracking-wider text-left sm:text-sm",
                                children: a("presaleForm.receive", {
                                    currency: "AQUA"
                                })
                            }), (0, s.jsx)("input", {
                                type: "text",
                                id: "recieve-input",
                                className: "w-full text-2xl opacity-50 cursor-not-allowed focus-visible:outline-none",
                                placeholder: "0",
                                disabled: !0,
                                value: null === (t = r != P.$D.id ? x : m.data ? Math.floor(i * T().get(m, "data.solana_price") / (M.CJ / 1e6)) : "~") || void 0 === t ? void 0 : t.toLocaleString()
                            })]
                        })]
                    }), (0, s.jsx)(eu, {
                        "data-sentry-element": "DappButton",
                        "data-sentry-source-file": "currency-input.jsx"
                    })]
                })
            }

            function eu() {
                let e = (0, f.py)(),
                    t = (0, et.z)(),
                    {
                        chain: a
                    } = (0, n.useContext)(p.Z);
                if (a === P.$D.id) {
                    if (t) return (0, s.jsx)(el, {})
                } else if (null == e ? void 0 : e.data) return (0, s.jsx)(X, {});
                return (0, s.jsx)(eo.Z, {
                    chain: a,
                    className: "!mb-12",
                    "data-sentry-element": "ConnectButton",
                    "data-sentry-component": "DappButton",
                    "data-sentry-source-file": "currency-input.jsx"
                })
            }

            function em(e) {
                let {
                    setTab: t,
                    currentTab: a
                } = e, {
                    t: r
                } = (0, Z.$G)(), {
                    chain: l,
                    currency: o,
                    setChain: c,
                    setCurrency: u
                } = (0, n.useContext)(p.Z), m = (0, y.c5)(l).find(e => {
                    let {
                        key: t
                    } = e;
                    return t === o
                });
                return (0, s.jsxs)("div", {
                    className: "flex w-full gap-1 justify-end min-h-[64px]",
                    "data-sentry-component": "Breadcrumb",
                    "data-sentry-source-file": "breadcrumb.jsx",
                    children: [(0, s.jsxs)("div", {
                        className: "flex gap-1 grow",
                        children: [(0, s.jsx)(d.u, {
                            unmount: !1,
                            show: !!l,
                            enter: "ease-in duration-100",
                            leave: "ease-in duration-200",
                            enterFrom: "opacity-0 -translate-x-4",
                            enterTo: "opacity-100 translate-x-0",
                            leaveFrom: "opacity-50 -translate-x-0",
                            leaveTo: "opacity-0 -translate-x-4",
                            className: "flex w-1/2",
                            "data-sentry-element": "Transition",
                            "data-sentry-source-file": "breadcrumb.jsx",
                            children: (0, s.jsxs)("div", {
                                className: "flex flex-col items-start w-full gap-1",
                                children: [(0, s.jsxs)("span", {
                                    className: "text-sm font-bold",
                                    children: [r("globals.network"), ":"]
                                }), (0, s.jsxs)("h4", {
                                    className: "w-full flex items-center gap-2 my-0 mb-0 border-[#054] border-2 h-[40px] sm:text-lg bg-[#fff] px-2 py-1 rounded-lg cursor-pointer",
                                    onClick: () => {
                                        u(), c(), t(1)
                                    },
                                    children: [(0, s.jsx)(i.default, {
                                        src: "/assets/chains/".concat((0, y.qQ)(l)),
                                        className: x()("object-cover p-[2px] bg-transparent"),
                                        width: 24,
                                        height: 24,
                                        alt: (0, y.pp)(l),
                                        "data-sentry-element": "Image",
                                        "data-sentry-source-file": "breadcrumb.jsx"
                                    }), (0, s.jsx)("span", {
                                        children: T().startCase((0, y.pp)(l))
                                    })]
                                })]
                            })
                        }), (0, s.jsx)(d.u, {
                            unmount: !1,
                            show: !!o,
                            enter: "ease-in duration-100",
                            leave: "ease-in duration-200",
                            enterFrom: "opacity-0 -translate-x-4",
                            enterTo: "opacity-100 translate-x-0",
                            leaveFrom: "opacity-50 -translate-x-0",
                            leaveTo: "opacity-0 -translate-x-4",
                            className: "flex w-1/2",
                            "data-sentry-element": "Transition",
                            "data-sentry-source-file": "breadcrumb.jsx",
                            children: (0, s.jsxs)("div", {
                                className: "flex flex-col items-start justify-start w-full gap-1",
                                children: [(0, s.jsxs)("span", {
                                    className: "text-sm font-bold",
                                    children: [r("globals.currency"), ":"]
                                }), m && (0, s.jsxs)("h4", {
                                    className: "w-full flex items-center gap-2 my-0 mb-0 border-[#054] border-2 h-[40px] sm:text-lg bg-[#fff] px-2 py-1 rounded-lg cursor-pointer",
                                    onClick: () => {
                                        u(), t(2)
                                    },
                                    children: [(0, s.jsx)(i.default, {
                                        src: "/assets/currencies/".concat(null == m ? void 0 : m.logo),
                                        className: x()("object-cover p-[2px] bg-transparent"),
                                        width: 24,
                                        height: 24,
                                        alt: (0, y.pp)(l)
                                    }), (0, s.jsx)("span", {
                                        children: T().startCase(null == m ? void 0 : m.symbol)
                                    })]
                                })]
                            })
                        })]
                    }), (0, s.jsx)(d.u, {
                        unmount: !1,
                        show: a > 0,
                        enter: "ease-in duration-300",
                        leave: "ease-in duration-300",
                        enterFrom: "opacity-0 rotate-[-180deg]",
                        enterTo: "opacity-100 rotate-[0deg]",
                        leaveFrom: "opacity-100 rotate-[0deg]",
                        leaveTo: "opacity-0 rotate-[-180deg]",
                        className: "flex",
                        "data-sentry-element": "Transition",
                        "data-sentry-source-file": "breadcrumb.jsx",
                        children: (0, s.jsx)("div", {
                            className: "flex items-center",
                            children: (0, s.jsx)("div", {
                                className: "h-[28px] flex justify-center items-center cursor-pointer rotate-0 hover:rotate-[90deg] transition-all",
                                onClick: () => {
                                    c(), u(), t(0)
                                },
                                children: (0, s.jsx)(V.z3f, {
                                    className: "text-4xl text-red-700",
                                    "data-sentry-element": "BsX",
                                    "data-sentry-source-file": "breadcrumb.jsx"
                                })
                            })
                        })
                    })]
                })
            }
            var ex = a(46304);
            let ef = e => e === P.$D.id ? M.t : "TON_PAYMENT_WALLET";

            function ep() {
                let {
                    chain: e
                } = (0, n.useContext)(p.Z), [t, a] = (0, n.useState)(!1), {
                    t: r
                } = (0, Z.$G)(), l = () => {
                    var t, s;
                    null === (s = navigator) || void 0 === s || null === (t = s.clipboard) || void 0 === t || t.writeText(ef(e)), a(!0), setTimeout(() => {
                        a(!1)
                    }, 5e3)
                };
                return t ? (0, s.jsx)("div", {
                    className: "flex items-center justify-center w-full py-4 font-serif text-center text-white rounded-lg cursor-pointer bg-purple",
                    onClick: () => l(),
                    children: r("hero.copiedToClipboard")
                }) : (0, s.jsxs)("div", {
                    className: "flex items-center w-full gap-2 p-3 py-4 bg-white rounded-lg cursor-pointer",
                    onClick: l,
                    children: [(0, s.jsx)("div", {
                        className: "truncate grow",
                        children: ef(e)
                    }), (0, s.jsx)(V.EZF, {
                        className: "text-xl text-purple"
                    })]
                })
            }
            let ey = (0, a(30166).default)(() => a.e(8350).then(a.bind(a, 58350)), {
                loadableGenerated: {
                    webpack: () => [58350]
                },
                ssr: !1
            });

            function eh() {
                let [e, t] = (0, n.useState)(0), {
                    chain: a,
                    currency: r
                } = (0, n.useContext)(p.Z);
                return (0, n.useEffect)(() => {
                    r && a ? t(3) : a && t(2)
                }, []), (0, s.jsxs)("div", {
                    className: "relative w-full h-full",
                    "data-sentry-component": "PresaleTabs",
                    "data-sentry-source-file": "index.jsx",
                    children: [(0, s.jsx)(em, {
                        setTab: t,
                        currentTab: e,
                        "data-sentry-element": "Breadcrumb",
                        "data-sentry-source-file": "index.jsx"
                    }), (0, s.jsxs)("div", {
                        className: "relative w-full presale-tab-container",
                        children: [(0, s.jsx)(ej, {
                            index: 0,
                            current: e,
                            setTab: t,
                            "data-sentry-element": "SplashTab",
                            "data-sentry-source-file": "index.jsx"
                        }), (0, s.jsx)(eg, {
                            index: 1,
                            current: e,
                            setTab: t,
                            "data-sentry-element": "NetworkTab",
                            "data-sentry-source-file": "index.jsx"
                        }), (0, s.jsx)(ev, {
                            index: 2,
                            current: e,
                            setTab: t,
                            "data-sentry-element": "CurrencyTab",
                            "data-sentry-source-file": "index.jsx"
                        }), (0, s.jsx)(ew, {
                            index: 3,
                            current: e,
                            setTab: t,
                            "data-sentry-element": "BuyTab",
                            "data-sentry-source-file": "index.jsx"
                        })]
                    })]
                })
            }

            function eb(e) {
                return function(t) {
                    let {
                        index: a,
                        current: n,
                        ...r
                    } = t;
                    return (0, s.jsx)(d.u, {
                        unmount: !1,
                        show: a === n,
                        enter: "ease-in-out duration-300",
                        leave: "ease-in-out duration-300",
                        enterFrom: "opacity-0 scale-75 translate-x-[50%] absolute",
                        enterTo: "opacity-100 translate-x-0 absolute",
                        leaveFrom: "opacity-100 translate-x-0 absolute",
                        leaveTo: "opacity-0 scale-75 translate-x-[-50%] absolute",
                        className: "absolute top-0 flex flex-col justify-between w-full h-full grow",
                        children: (0, s.jsx)(e, { ...r,
                            appear: !0
                        })
                    })
                }
            }
            let ej = eb(function(e) {
                    let {
                        setTab: t
                    } = e, [a, r] = (0, n.useState)(!1), {
                        t: l
                    } = (0, Z.$G)();
                    return (0, s.jsxs)("div", {
                        className: "relative flex flex-col sm:justify-between justify-around w-full h-full sm:gap-0 gap-2 -mt-[60px] text-[#000000cc]",
                        "data-sentry-component": "Splash",
                        "data-sentry-source-file": "index.jsx",
                        children: [(0, s.jsx)(H.Z, {
                            visible: a,
                            setVisible: r,
                            "data-sentry-element": "ReferModal",
                            "data-sentry-source-file": "index.jsx"
                        }), (0, s.jsx)("h2", {
                            className: "mb-0 font-serif text-2xl text-center text-black",
                            children: l("presaleForm.buyAQUA")
                        }), (0, s.jsx)("div", {
                            className: "flex flex-col gap-0 px-0 rounded-lg",
                            children: (0, s.jsx)(ex.Z, {
                                expiryTimestamp: new Date(M.LA).getTime(),
                                "data-sentry-element": "Countdown",
                                "data-sentry-source-file": "index.jsx"
                            })
                        }), (0, s.jsx)("div", {
                            children: (0, s.jsx)(ey, {
                                "data-sentry-element": "ProgressPanel",
                                "data-sentry-source-file": "index.jsx"
                            })
                        }), (0, s.jsx)("button", {
                            className: "relative z-10 !mt-0 primary-button w-full",
                            onClick: () => t(1),
                            children: (0, s.jsx)("span", {
                                className: "drop-shadow",
                                children: l("presaleForm.buyNow")
                            })
                        })]
                    })
                }),
                eg = eb(function(e) {
                    let {
                        setTab: t
                    } = e, {
                        t: a
                    } = (0, Z.$G)(), {
                        setCurrency: r
                    } = (0, n.useContext)(p.Z);
                    return (0, s.jsxs)("div", {
                        className: "relative flex flex-col items-start justify-center w-full grow",
                        "data-sentry-component": "Network",
                        "data-sentry-source-file": "index.jsx",
                        children: [(0, s.jsx)("h4", {
                            className: "my-1 font-bold border-white sm:text-lg",
                            children: a("presaleForm.selectNetwork")
                        }), (0, s.jsx)(c.Z, {
                            onClick: e => {
                                e === P.$D.id ? (r("native"), t(3)) : t(2)
                            },
                            "data-sentry-element": "ChooseChain",
                            "data-sentry-source-file": "index.jsx"
                        })]
                    })
                }),
                ev = eb(function(e) {
                    let {
                        setTab: t
                    } = e, a = (0, f.py)(), r = (0, et.z)(), {
                        chain: o
                    } = (0, n.useContext)(p.Z), {
                        addLog: i
                    } = (0, n.useContext)(l), {
                        t: d
                    } = (0, Z.$G)();
                    return o === P.$D.id && r || (0, y.XD)(o) && (null == a ? void 0 : a.data) ? (0, s.jsxs)("div", {
                        className: "relative flex flex-col items-start justify-center w-full grow",
                        children: [(0, s.jsx)("h4", {
                            className: "my-0 my-2 font-bold border-white sm:text-lg",
                            children: d("presaleForm.selectCurrency")
                        }), (0, s.jsx)(j, {
                            onClick: () => t(3)
                        }), (o === P.$D.id || o === P.h9.id) && (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsxs)("div", {
                                className: "flex items-center justify-center w-full gap-2 my-12",
                                children: [(0, s.jsx)("div", {
                                    className: "h-1 border-black border-y grow"
                                }), (0, s.jsx)("h4", {
                                    className: "my-0 my-2 font-serif text-xl text-purple sm:text-xl",
                                    children: d("globals.or")
                                }), (0, s.jsx)("div", {
                                    className: "h-1 border-black border-y grow"
                                })]
                            }), (0, s.jsxs)("h4", {
                                className: "w-full mb-2 font-bold border-white sm:text-lg",
                                children: [d("presaleForm.sendDirect", {
                                    currency: (0, y.K7)(o)
                                }), ":"]
                            }), (0, s.jsx)(ep, {})]
                        })]
                    }) : (0, s.jsxs)("div", {
                        className: "relative flex flex-col items-center justify-center w-full grow",
                        children: [(0, s.jsx)("h4", {
                            className: "my-0 my-2 font-bold border-white sm:text-lg",
                            children: d("presaleForm.connectWallet")
                        }), (0, s.jsx)(eo.Z, {
                            chain: o
                        }), (o === P.$D.id || o === P.h9.id) && (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsxs)("div", {
                                className: "flex items-center justify-center w-full gap-2 my-12",
                                children: [(0, s.jsx)("div", {
                                    className: "h-1 border-black border-y grow"
                                }), (0, s.jsx)("h4", {
                                    className: "my-0 my-2 font-serif text-xl text-purple sm:text-xl",
                                    children: d("globals.or")
                                }), (0, s.jsx)("div", {
                                    className: "h-1 border-black border-y grow"
                                })]
                            }), (0, s.jsxs)("h4", {
                                className: "w-full mb-2 font-bold border-white sm:text-lg",
                                children: [d("presaleForm.sendDirect", {
                                    currency: (0, y.K7)(o)
                                }), ":"]
                            }), (0, s.jsx)(ep, {})]
                        })]
                    })
                }),
                ew = eb(function(e) {
                    let {
                        setTab: t
                    } = e;
                    return (0, s.jsx)("div", {
                        className: "relative flex flex-col items-start justify-center w-full grow",
                        "data-sentry-component": "Buy",
                        "data-sentry-source-file": "index.jsx",
                        children: (0, s.jsx)(ec, {
                            setTab: t,
                            "data-sentry-element": "CurrencyInput",
                            "data-sentry-source-file": "index.jsx"
                        })
                    })
                });

            function eN() {
                let {
                    t: e
                } = (0, Z.$G)();
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)("div", {
                        className: "hidden px-10 py-10 pb-0 w-[510px] h-[590px] items-center sm:flex flex-col relative z-20 presale-container",
                        children: (0, s.jsx)(o, {
                            "data-sentry-element": "LogsContextProvider",
                            "data-sentry-source-file": "index.jsx",
                            children: (0, s.jsx)(eh, {
                                "data-sentry-element": "PresaleTabs",
                                "data-sentry-source-file": "index.jsx"
                            })
                        })
                    }), (0, s.jsx)("div", {
                        className: "relative z-20 flex flex-col gap-4 px-4 py-6 text-center sm:hidden presale-container",
                        children: (0, s.jsx)(o, {
                            "data-sentry-element": "LogsContextProvider",
                            "data-sentry-source-file": "index.jsx",
                            children: (0, s.jsx)(eh, {
                                "data-sentry-element": "PresaleTabs",
                                "data-sentry-source-file": "index.jsx"
                            })
                        })
                    })]
                })
            }
        },
        46304: function(e, t, a) {
            var s = a(57437),
                n = a(96991),
                r = a(2265),
                l = a(43949);
            a(44762);
            var o = a(36760),
                i = a.n(o);
            let d = ["days", "hours", "minutes", "seconds"],
                c = ["text-purple border-purple", "text-green-900 border-green-900", "text-red border-red", "text-blue-900 border-blue-900"];
            t.Z = function(e) {
                let {
                    expiryTimestamp: t,
                    onExpire: a
                } = e, o = (0, n.useTimer)({
                    expiryTimestamp: (t || new Date) / 100,
                    onExpire: a
                });
                (0, r.useEffect)(() => {
                    t && o.restart(+t)
                }, [t]);
                let {
                    t: u
                } = (0, l.$G)();
                return (0, s.jsxs)("div", {
                    className: "relative mx-2",
                    "data-sentry-component": "Countdown",
                    "data-sentry-source-file": "countdown-timer.jsx",
                    children: [(0, s.jsx)("div", {
                        className: "flex justify-center gap-3 py-2 m-auto font-sans font-bold border-2 border-black rounded-xl md:gap-5 countdown-panel-new",
                        children: d.map((e, t) => (0, s.jsxs)("span", {
                            className: i()("px-0 py-1 text-center sm:px-0 progress-bar-shaded", c[t]),
                            children: [(0, s.jsx)("span", {
                                className: "!w-[55px] inline-block text-3xl md:text-4xl",
                                children: Math.trunc(o[e]).toString().padStart(2, "0")
                            }), (0, s.jsx)("span", {
                                className: "text-xl uppercase",
                                children: u("presaleForm.".concat(e))
                            })]
                        }, e))
                    }), (0, s.jsx)("span", {
                        className: "block w-full pt-2 text-xl font-bold tracking-wider text-center uppercase font-condensed",
                        children: u("presaleForm.untilNextPrice")
                    })]
                })
            }
        },
        35361: function(e, t, a) {
            a.d(t, {
                Z: function() {
                    return u
                }
            });
            var s = a(57437);
            a(33145);
            var n = a(43949),
                r = a(2265),
                l = a(44762),
                o = a(36760),
                i = a.n(o);
            l.LA;
            let d = e => e > 99 ? "rounded-r-[2em]" : e > 98 ? "rounded-r-[1.5em]" : e > 96 ? "rounded-r-[1em]" : "rounded-r-sm",
                c = e => {
                    if (l.Af >= e) return l.Af; {
                        let t = l.Af;
                        for (; t < e;) t *= 1.05;
                        return 5e3 * Math.ceil(t / 5e3)
                    }
                };

            function u(e) {
                let {
                    raised: t
                } = e, [a, l] = (0, r.useState)(0), o = (0, r.useRef)(), {
                    t: u
                } = (0, n.$G)();
                return (0, r.useEffect)(() => {
                    if (!o.current) return;
                    let e = 1.25 * Math.floor(parseInt(t) / parseInt(c(t)) * 100) - 25;
                    l(e), o.current.style.width = "calc(".concat(e + "%", " - 4px)")
                }, [t, o.current]), (0, s.jsxs)("div", {
                    className: "bg-white relative sm:w-[91%] w-[91%] sm:left-[4.5%] left-[4.5%] h-12 rounded-[2rem] overflow-hidden progress-bar border-black border-2 scale-[0.8] sm:scale-[0.9] sm:top-0 -top-2 relative",
                    "data-sentry-component": "RaiseProgress",
                    "data-sentry-source-file": "raise-progress.jsx",
                    children: [(0, s.jsx)("div", {
                        ref: o,
                        className: i()("h-[90%] top-[5%] left-[2px] absolute rounded-[2rem] progress-bar-shaded", "bg-red", d(a))
                    }), (0, s.jsxs)("p", {
                        className: "absolute z-20 w-full my-2 text-lg font-bold tracking-wider text-center text-black uppercase md:text-xl font-condensed",
                        children: ["$", t.toLocaleString(), " / $", Number(c(t)).toLocaleString()]
                    })]
                })
            }
        },
        18827: function(e, t, a) {
            a.d(t, {
                Z: function() {
                    return y
                }
            });
            var s = a(57437),
                n = a(33145),
                r = a(2265),
                l = a(43949),
                o = a(58475),
                i = a(88203),
                d = a(8198),
                c = a(6832),
                u = a(43867),
                m = a(41854),
                x = a(28243),
                f = a(36760),
                p = a.n(f);

            function y(e) {
                let {
                    visible: t,
                    setVisible: a
                } = e, {
                    chain: i
                } = (0, r.useContext)(x.Z), [d, f] = (0, r.useState)(), {
                    t: y
                } = (0, l.$G)(), b = (0, c.z)(), j = (0, u.py)();
                return (0, r.useEffect)(() => {
                    var e, t, a, s, n, r;
                    i === m.$D.id && (null == b ? void 0 : null === (e = b.publicKey) || void 0 === e ? void 0 : e.toString()) ? f(null == b ? void 0 : null === (s = b.publicKey) || void 0 === s ? void 0 : s.toString()) : (null == j ? void 0 : null === (a = j.data) || void 0 === a ? void 0 : null === (t = a.account) || void 0 === t ? void 0 : t.address) && f(null == j ? void 0 : null === (r = j.data) || void 0 === r ? void 0 : null === (n = r.account) || void 0 === n ? void 0 : n.address)
                }, [b, j]), (0, s.jsxs)(o.u_, {
                    show: t,
                    onClose: () => a(!1),
                    onClick: () => a(!1),
                    className: p()("bg-[#00000066] [&>div]:max-w-[750px] flex justify-center items-center [&>div]:h-[unset]", "sm:p-8 p-1"),
                    "data-sentry-element": "Modal",
                    "data-sentry-component": "ReferModal",
                    "data-sentry-source-file": "refer-modal.jsx",
                    children: [(0, s.jsx)(o.u_.Header, {
                        className: "[&>h3]:text-blue bg-transparent font-serif p-5 pb-2 [&>h3]:sm:text-4xl [&>button]:text-3xl [&>button]:text-red",
                        onClick: e => {
                            e.preventDefault(), e.stopPropagation()
                        },
                        "data-sentry-element": "unknown",
                        "data-sentry-source-file": "refer-modal.jsx",
                        children: _.startCase(y("hero.refer"))
                    }), (0, s.jsx)(o.u_.Body, {
                        className: "py-5 mx-auto bg-transparent",
                        onClick: e => {
                            e.preventDefault(), e.stopPropagation()
                        },
                        "data-sentry-element": "unknown",
                        "data-sentry-source-file": "refer-modal.jsx",
                        children: (0, s.jsxs)("div", {
                            className: "w-full px-0",
                            children: [(0, s.jsx)(n.default, {
                                src: "/assets/selfie.png",
                                width: 512,
                                height: 512,
                                className: "h-auto sm:w-[300px] w-[200px] max-w-[unset] mx-auto mb-4",
                                alt: "",
                                "data-sentry-element": "Image",
                                "data-sentry-source-file": "refer-modal.jsx"
                            }), (0, s.jsx)("p", {
                                className: "mb-4 text-base font-bold max-w-[500px] whitespace-break-spaces",
                                children: y("hero.referText")
                            }), (0, s.jsx)(h, {
                                address: d,
                                "data-sentry-element": "CopyAddress",
                                "data-sentry-source-file": "refer-modal.jsx"
                            })]
                        })
                    }), (0, s.jsx)(o.u_.Footer, {
                        className: "justify-end px-5 py-3 bg-transparent",
                        "data-sentry-element": "unknown",
                        "data-sentry-source-file": "refer-modal.jsx",
                        children: (0, s.jsx)(o.zx, {
                            onClick: () => a(!1),
                            className: "px-4 py-0 bg-white border-2 border-blue rounded-lg text-blue [&>span]:text-base",
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "refer-modal.jsx",
                            children: y("globals.cancel")
                        })
                    })]
                })
            }

            function h(e) {
                let {
                    address: t
                } = e, [a, n] = (0, r.useState)(!1), {
                    t: o
                } = (0, l.$G)(), c = () => {
                    navigator.clipboard.writeText(m), n(!0), setTimeout(() => n(!1), 3e3)
                }, {
                    isLoading: u,
                    data: m
                } = (0, d.a)({
                    queryKey: ["referralLink", t],
                    queryFn: async () => {
                        var e;
                        let a = await fetch("/api/refer", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    address: t
                                })
                            }),
                            s = await a.json();
                        return (null == s ? void 0 : null === (e = s.data) || void 0 === e ? void 0 : e.url) || ""
                    }
                });
                return t ? (0, s.jsx)("div", {
                    onClick: () => {
                        m && c()
                    },
                    className: "w-full p-2 cursor-pointer font-bold text-blue text-center truncate border-2 border-blue bg-white rounded-lg",
                    children: a ? o("hero.copiedToClipboard") : (0, s.jsx)(s.Fragment, {
                        children: u ? (0, s.jsx)(i.Z, {
                            className: "!text-blue"
                        }) : m || o("globals.somethingWentWrong")
                    })
                }) : (0, s.jsx)("div", {
                    className: "w-full p-2 font-bold text-blue text-center border-2 border-primary bg-white rounded-lg cursor-pointer",
                    onClick: () => {
                        var e, t;
                        return null === (t = document) || void 0 === t ? void 0 : null === (e = t.getElementById("connect-button")) || void 0 === e ? void 0 : e.click()
                    },
                    children: o("hero.referConnectWallet")
                })
            }
        },
        12326: function(e, t, a) {
            a.d(t, {
                z: function() {
                    return s
                }
            }), a(83079);
            var s = (0, a(12119).$)("a30928ba68f2321ed7b0079cb6f045a7c6423128")
        },
        6484: function(e, t, a) {
            let s;
            a.r(t), a.d(t, {
                default: function() {
                    return M
                },
                queryClient: function() {
                    return I
                }
            });
            var n, r, l, o = a(57437),
                i = a(2265),
                d = a(46550),
                c = a(43949),
                u = a(47830),
                m = a(86454),
                x = a(54968),
                f = a(2396),
                p = a(44156),
                y = a(4298),
                h = a(11867),
                b = a(25223),
                j = a(41854),
                g = a(67872),
                v = a(67148),
                w = a(43867),
                N = a(51814),
                k = a(29827),
                T = a(63321),
                C = a(28243),
                S = a(44762);
            a(42060), null != (s = null == (s = (null === (l = window) || void 0 === l ? void 0 : null === (r = l.location) || void 0 === r ? void 0 : null === (n = r.pathname) || void 0 === n ? void 0 : n.length) > 1 ? window.location.pathname.substr(1) : void 0) ? void 0 : s.split("/")[0]) || (s = "en"), d.ZP.use(c.Db).init({
                resources: u.Z,
                fallbackLng: ["en"],
                interpolation: {
                    escapeValue: !1
                }
            });
            let I = new N.S;

            function M(e) {
                let {
                    children: t
                } = e, [a] = (0, i.useState)(S.Sl ? m.Q.Devnet : m.Q.Mainnet), s = (0, i.useMemo)(() => S.ZE, []), n = (0, i.useMemo)(() => [new y.O, new h.e({
                    network: a
                }), new b.X], [a]);
                return (0, o.jsx)(x.U, {
                    endpoint: s,
                    children: (0, o.jsx)(f.n, {
                        wallets: n,
                        autoConnect: !0,
                        children: (0, o.jsx)(p.s, {
                            children: (0, o.jsx)(w.eM, {
                                config: j.ZB,
                                children: (0, o.jsx)(g.pj, {
                                    chains: j.oY.chains,
                                    theme: (0, v.W)(),
                                    children: (0, o.jsx)(k.aH, {
                                        client: I,
                                        children: (0, o.jsx)(C.z, {
                                            children: (0, o.jsx)(T.G, {
                                                children: t
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            }
        },
        95067: function(e, t, a) {
            a.d(t, {
                Z: function() {
                    return l
                }
            });
            var s = a(2265),
                n = a(99376);

            function r() {
                try {
                    return JSON.parse(localStorage.getItem("params"))
                } catch (e) {
                    return {}
                }
            }

            function l() {
                let [e, t] = (0, s.useState)({}), [a, l] = (0, s.useState)(!1);
                (0, n.useRouter)(), (0, n.usePathname)(), (0, s.useEffect)(() => {
                    let e = new URLSearchParams(window.location.search),
                        a = Array.from(e.values()),
                        s = {
                            clickId: e.get("clickId"),
                            source: e.get("source"),
                            referrer: e.get("referrer"),
                            device: function() {
                                let e = function() {
                                    var e;
                                    if (null === (e = window) || void 0 === e ? void 0 : e.navigator) return /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                                }();
                                return _.isUndefined(e) ? "HEADLESS" : e ? "MOBILE" : "DESKTOP"
                            }()
                        };
                    if (a.length > 0) {
                        let e = { ...r(),
                            ...s
                        };
                        t(e), localStorage.setItem("params", JSON.stringify(e))
                    }
                    l(!0)
                }, []);
                let o = (e, t) => {
                    fetch(e, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ ...t,
                            sessionId: localStorage.getItem("session")
                        })
                    })
                };
                return {
                    ready: a,
                    params: e,
                    localParams: r(),
                    sendDashFx: o,
                    trackWalletConnected: (e, t) => {
                        o("/api/lead", {
                            address: e,
                            network: t
                        })
                    }
                }
            }
            a(17745)
        },
        11301: function(e) {
            e.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"string","name":"solanaAddress","type":"string"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"bool","name":"stake","type":"bool"}],"name":"BridgeSolana","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"StakeTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"ethAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"bool","name":"stake","type":"bool"}],"name":"TokensBoughtWithEth","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"usdAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"bool","name":"stake","type":"bool"},{"indexed":false,"internalType":"uint8","name":"decimals","type":"uint8"}],"name":"TokensBoughtWithUsd","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"DAIInterface","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDCInterface","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDTInterface","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WETHInterface","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aggregatorInterface","outputs":[{"internalType":"contract Aggregator","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"solanaAddress","type":"string"},{"internalType":"bool","name":"stake","type":"bool"}],"name":"bridgeFromSolana","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"daiAmount","type":"uint256"},{"internalType":"bool","name":"stake","type":"bool"}],"name":"buyWithDAI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"stake","type":"bool"}],"name":"buyWithEth","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"usdcAmount","type":"uint256"},{"internalType":"bool","name":"stake","type":"bool"}],"name":"buyWithUSDC","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"usdtAmount","type":"uint256"},{"internalType":"bool","name":"stake","type":"bool"}],"name":"buyWithUSDT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"wethAmount","type":"uint256"},{"internalType":"bool","name":"stake","type":"bool"}],"name":"buyWithWETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newPaymentWallet","type":"address"}],"name":"changePaymentWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_currentPrice","type":"uint256"}],"name":"changePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLatestEthPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasBridgedFromSolana","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paymentWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stakeTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawNative","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenContractAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]')
        }
    }
]);