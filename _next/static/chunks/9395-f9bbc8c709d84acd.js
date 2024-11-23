! function() {
    try {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            e = (new t.Error).stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "2740a2f0-d092-45ad-96ca-166003ffea17", t._sentryDebugIdIdentifier = "sentry-dbid-2740a2f0-d092-45ad-96ca-166003ffea17")
    } catch (t) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9395], {
        59147: function(t, e, n) {
            let i = n(25494);
            t.exports = i("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")
        },
        25494: function(t) {
            "use strict";
            t.exports = function(t) {
                if (t.length >= 255) throw TypeError("Alphabet too long");
                for (var e = new Uint8Array(256), n = 0; n < e.length; n++) e[n] = 255;
                for (var i = 0; i < t.length; i++) {
                    var r = t.charAt(i),
                        s = r.charCodeAt(0);
                    if (255 !== e[s]) throw TypeError(r + " is ambiguous");
                    e[s] = i
                }
                var a = t.length,
                    o = t.charAt(0),
                    l = Math.log(a) / Math.log(256),
                    u = Math.log(256) / Math.log(a);

                function c(t) {
                    if ("string" != typeof t) throw TypeError("Expected String");
                    if (0 === t.length) return new Uint8Array;
                    for (var n = 0, i = 0, r = 0; t[n] === o;) i++, n++;
                    for (var s = (t.length - n) * l + 1 >>> 0, u = new Uint8Array(s); t[n];) {
                        var c = e[t.charCodeAt(n)];
                        if (255 === c) return;
                        for (var h = 0, d = s - 1;
                            (0 !== c || h < r) && -1 !== d; d--, h++) c += a * u[d] >>> 0, u[d] = c % 256 >>> 0, c = c / 256 >>> 0;
                        if (0 !== c) throw Error("Non-zero carry");
                        r = h, n++
                    }
                    for (var g = s - r; g !== s && 0 === u[g];) g++;
                    for (var f = new Uint8Array(i + (s - g)), p = i; g !== s;) f[p++] = u[g++];
                    return f
                }
                return {
                    encode: function(e) {
                        if (e instanceof Uint8Array || (ArrayBuffer.isView(e) ? e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : Array.isArray(e) && (e = Uint8Array.from(e))), !(e instanceof Uint8Array)) throw TypeError("Expected Uint8Array");
                        if (0 === e.length) return "";
                        for (var n = 0, i = 0, r = 0, s = e.length; r !== s && 0 === e[r];) r++, n++;
                        for (var l = (s - r) * u + 1 >>> 0, c = new Uint8Array(l); r !== s;) {
                            for (var h = e[r], d = 0, g = l - 1;
                                (0 !== h || d < i) && -1 !== g; g--, d++) h += 256 * c[g] >>> 0, c[g] = h % a >>> 0, h = h / a >>> 0;
                            if (0 !== h) throw Error("Non-zero carry");
                            i = d, r++
                        }
                        for (var f = l - i; f !== l && 0 === c[f];) f++;
                        for (var p = o.repeat(n); f < l; ++f) p += t.charAt(c[f]);
                        return p
                    },
                    decodeUnsafe: c,
                    decode: function(t) {
                        var e = c(t);
                        if (e) return e;
                        throw Error("Non-base" + a + " character")
                    }
                }
            }
        },
        42060: function() {},
        68757: function(t, e, n) {
            "use strict";
            n.d(e, {
                H: function() {
                    return u
                },
                i1: function() {
                    return r
                },
                mI: function() {
                    return o
                },
                su: function() {
                    return l
                }
            });
            var i, r, s = n(77625),
                a = n(74659);
            (i = r || (r = {})).Installed = "Installed", i.NotDetected = "NotDetected", i.Loadable = "Loadable", i.Unsupported = "Unsupported";
            class o extends s {
                get connected() {
                    return !!this.publicKey
                }
                async autoConnect() {
                    await this.connect()
                }
                async prepareTransaction(t, e, n = {}) {
                    let i = this.publicKey;
                    if (!i) throw new a.oS;
                    return t.feePayer = t.feePayer || i, t.recentBlockhash = t.recentBlockhash || (await e.getLatestBlockhash({
                        commitment: n.preflightCommitment,
                        minContextSlot: n.minContextSlot
                    })).blockhash, t
                }
            }

            function l(t) {
                if ("undefined" == typeof window || "undefined" == typeof document) return;
                let e = [];

                function n() {
                    if (t())
                        for (let t of e) t()
                }
                let i = setInterval(n, 1e3);
                e.push(() => clearInterval(i)), "loading" === document.readyState && (document.addEventListener("DOMContentLoaded", n, {
                    once: !0
                }), e.push(() => document.removeEventListener("DOMContentLoaded", n))), "complete" !== document.readyState && (window.addEventListener("load", n, {
                    once: !0
                }), e.push(() => window.removeEventListener("load", n))), n()
            }

            function u() {
                if (!navigator) return !1;
                let t = navigator.userAgent.toLowerCase(),
                    e = t.includes("iphone") || t.includes("ipad"),
                    n = t.includes("safari");
                return e && n
            }
        },
        74659: function(t, e, n) {
            "use strict";
            n.d(e, {
                $w: function() {
                    return o
                },
                IW: function() {
                    return g
                },
                Nx: function() {
                    return h
                },
                OZ: function() {
                    return r
                },
                PY: function() {
                    return f
                },
                UG: function() {
                    return u
                },
                W8: function() {
                    return s
                },
                at: function() {
                    return l
                },
                bD: function() {
                    return y
                },
                cO: function() {
                    return c
                },
                fk: function() {
                    return p
                },
                lj: function() {
                    return i
                },
                oS: function() {
                    return d
                },
                p6: function() {
                    return a
                }
            });
            class i extends Error {
                constructor(t, e) {
                    super(t), this.error = e
                }
            }
            class r extends i {
                constructor() {
                    super(...arguments), this.name = "WalletNotReadyError"
                }
            }
            class s extends i {
                constructor() {
                    super(...arguments), this.name = "WalletLoadError"
                }
            }
            class a extends i {
                constructor() {
                    super(...arguments), this.name = "WalletConfigError"
                }
            }
            class o extends i {
                constructor() {
                    super(...arguments), this.name = "WalletConnectionError"
                }
            }
            class l extends i {
                constructor() {
                    super(...arguments), this.name = "WalletDisconnectedError"
                }
            }
            class u extends i {
                constructor() {
                    super(...arguments), this.name = "WalletDisconnectionError"
                }
            }
            class c extends i {
                constructor() {
                    super(...arguments), this.name = "WalletAccountError"
                }
            }
            class h extends i {
                constructor() {
                    super(...arguments), this.name = "WalletPublicKeyError"
                }
            }
            class d extends i {
                constructor() {
                    super(...arguments), this.name = "WalletNotConnectedError"
                }
            }
            class g extends i {
                constructor() {
                    super(...arguments), this.name = "WalletSendTransactionError"
                }
            }
            class f extends i {
                constructor() {
                    super(...arguments), this.name = "WalletSignTransactionError"
                }
            }
            class p extends i {
                constructor() {
                    super(...arguments), this.name = "WalletSignMessageError"
                }
            }
            class y extends i {
                constructor() {
                    super(...arguments), this.name = "WalletSignInError"
                }
            }
        },
        95462: function(t, e, n) {
            "use strict";
            n.d(e, {
                eC: function() {
                    return o
                },
                qz: function() {
                    return l
                }
            });
            var i = n(68757),
                r = n(74659),
                s = n(43887);
            class a extends i.mI {
                async sendTransaction(t, e, n = {}) {
                    let i = !0;
                    try {
                        if ((0, s.W)(t)) {
                            if (!this.supportedTransactionVersions) throw new r.IW("Sending versioned transactions isn't supported by this wallet");
                            if (!this.supportedTransactionVersions.has(t.version)) throw new r.IW(`Sending transaction version ${t.version} isn't supported by this wallet`);
                            try {
                                let i = (t = await this.signTransaction(t)).serialize();
                                return await e.sendRawTransaction(i, n)
                            } catch (t) {
                                if (t instanceof r.PY) throw i = !1, t;
                                throw new r.IW(t ? .message, t)
                            }
                        } else try {
                            let {
                                signers: i,
                                ...r
                            } = n;
                            t = await this.prepareTransaction(t, e, r), i ? .length && t.partialSign(...i);
                            let s = (t = await this.signTransaction(t)).serialize();
                            return await e.sendRawTransaction(s, r)
                        } catch (t) {
                            if (t instanceof r.PY) throw i = !1, t;
                            throw new r.IW(t ? .message, t)
                        }
                    } catch (t) {
                        throw i && this.emit("error", t), t
                    }
                }
                async signAllTransactions(t) {
                    for (let e of t)
                        if ((0, s.W)(e)) {
                            if (!this.supportedTransactionVersions) throw new r.PY("Signing versioned transactions isn't supported by this wallet");
                            if (!this.supportedTransactionVersions.has(e.version)) throw new r.PY(`Signing transaction version ${e.version} isn't supported by this wallet`)
                        }
                    let e = [];
                    for (let n of t) e.push(await this.signTransaction(n));
                    return e
                }
            }
            class o extends a {}
            class l extends o {}
        },
        43887: function(t, e, n) {
            "use strict";

            function i(t) {
                return "version" in t
            }
            n.d(e, {
                W: function() {
                    return i
                }
            })
        },
        86454: function(t, e, n) {
            "use strict";
            var i, r;
            n.d(e, {
                Q: function() {
                    return i
                }
            }), (r = i || (i = {})).Mainnet = "mainnet-beta", r.Testnet = "testnet", r.Devnet = "devnet"
        },
        4298: function(t, e, n) {
            "use strict";
            n.d(e, {
                O: function() {
                    return l
                }
            });
            var i = n(95462),
                r = n(68757),
                s = n(74659),
                a = n(43887),
                o = n(64024);
            class l extends i.eC {
                constructor(t = {}) {
                    super(), this.name = "Phantom", this.url = "https://phantom.app", this.icon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiB2aWV3Qm94PSIwIDAgMTA4IDEwOCIgZmlsbD0ibm9uZSI+CjxyZWN0IHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiByeD0iMjYiIGZpbGw9IiNBQjlGRjIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ni41MjY3IDY5LjkyMjlDNDIuMDA1NCA3Ni44NTA5IDM0LjQyOTIgODUuNjE4MiAyNC4zNDggODUuNjE4MkMxOS41ODI0IDg1LjYxODIgMTUgODMuNjU2MyAxNSA3NS4xMzQyQzE1IDUzLjQzMDUgNDQuNjMyNiAxOS44MzI3IDcyLjEyNjggMTkuODMyN0M4Ny43NjggMTkuODMyNyA5NCAzMC42ODQ2IDk0IDQzLjAwNzlDOTQgNTguODI1OCA4My43MzU1IDc2LjkxMjIgNzMuNTMyMSA3Ni45MTIyQzcwLjI5MzkgNzYuOTEyMiA2OC43MDUzIDc1LjEzNDIgNjguNzA1MyA3Mi4zMTRDNjguNzA1MyA3MS41NzgzIDY4LjgyNzUgNzAuNzgxMiA2OS4wNzE5IDY5LjkyMjlDNjUuNTg5MyA3NS44Njk5IDU4Ljg2ODUgODEuMzg3OCA1Mi41NzU0IDgxLjM4NzhDNDcuOTkzIDgxLjM4NzggNDUuNjcxMyA3OC41MDYzIDQ1LjY3MTMgNzQuNDU5OEM0NS42NzEzIDcyLjk4ODQgNDUuOTc2OCA3MS40NTU2IDQ2LjUyNjcgNjkuOTIyOVpNODMuNjc2MSA0Mi41Nzk0QzgzLjY3NjEgNDYuMTcwNCA4MS41NTc1IDQ3Ljk2NTggNzkuMTg3NSA0Ny45NjU4Qzc2Ljc4MTYgNDcuOTY1OCA3NC42OTg5IDQ2LjE3MDQgNzQuNjk4OSA0Mi41Nzk0Qzc0LjY5ODkgMzguOTg4NSA3Ni43ODE2IDM3LjE5MzEgNzkuMTg3NSAzNy4xOTMxQzgxLjU1NzUgMzcuMTkzMSA4My42NzYxIDM4Ljk4ODUgODMuNjc2MSA0Mi41Nzk0Wk03MC4yMTAzIDQyLjU3OTVDNzAuMjEwMyA0Ni4xNzA0IDY4LjA5MTYgNDcuOTY1OCA2NS43MjE2IDQ3Ljk2NThDNjMuMzE1NyA0Ny45NjU4IDYxLjIzMyA0Ni4xNzA0IDYxLjIzMyA0Mi41Nzk1QzYxLjIzMyAzOC45ODg1IDYzLjMxNTcgMzcuMTkzMSA2NS43MjE2IDM3LjE5MzFDNjguMDkxNiAzNy4xOTMxIDcwLjIxMDMgMzguOTg4NSA3MC4yMTAzIDQyLjU3OTVaIiBmaWxsPSIjRkZGREY4Ii8+Cjwvc3ZnPg==", this.supportedTransactionVersions = new Set(["legacy", 0]), this._readyState = "undefined" == typeof window || "undefined" == typeof document ? r.i1.Unsupported : r.i1.NotDetected, this._disconnected = () => {
                        let t = this._wallet;
                        t && (t.off("disconnect", this._disconnected), t.off("accountChanged", this._accountChanged), this._wallet = null, this._publicKey = null, this.emit("error", new s.at), this.emit("disconnect"))
                    }, this._accountChanged = t => {
                        let e = this._publicKey;
                        if (e) {
                            try {
                                t = new o.PublicKey(t.toBytes())
                            } catch (t) {
                                this.emit("error", new s.Nx(t ? .message, t));
                                return
                            }
                            e.equals(t) || (this._publicKey = t, this.emit("connect", t))
                        }
                    }, this._connecting = !1, this._wallet = null, this._publicKey = null, this._readyState !== r.i1.Unsupported && ((0, r.H)() ? (this._readyState = r.i1.Loadable, this.emit("readyStateChange", this._readyState)) : (0, r.su)(() => !!(window.phantom ? .solana ? .isPhantom || window.solana ? .isPhantom) && (this._readyState = r.i1.Installed, this.emit("readyStateChange", this._readyState), !0)))
                }
                get publicKey() {
                    return this._publicKey
                }
                get connecting() {
                    return this._connecting
                }
                get readyState() {
                    return this._readyState
                }
                async autoConnect() {
                    this.readyState === r.i1.Installed && await this.connect()
                }
                async connect() {
                    try {
                        let t;
                        if (this.connected || this.connecting) return;
                        if (this.readyState === r.i1.Loadable) {
                            let t = encodeURIComponent(window.location.href),
                                e = encodeURIComponent(window.location.origin);
                            window.location.href = `https://phantom.app/ul/browse/${t}?ref=${e}`;
                            return
                        }
                        if (this.readyState !== r.i1.Installed) throw new s.OZ;
                        this._connecting = !0;
                        let e = window.phantom ? .solana || window.solana;
                        if (!e.isConnected) try {
                            await e.connect()
                        } catch (t) {
                            throw new s.$w(t ? .message, t)
                        }
                        if (!e.publicKey) throw new s.cO;
                        try {
                            t = new o.PublicKey(e.publicKey.toBytes())
                        } catch (t) {
                            throw new s.Nx(t ? .message, t)
                        }
                        e.on("disconnect", this._disconnected), e.on("accountChanged", this._accountChanged), this._wallet = e, this._publicKey = t, this.emit("connect", t)
                    } catch (t) {
                        throw this.emit("error", t), t
                    } finally {
                        this._connecting = !1
                    }
                }
                async disconnect() {
                    let t = this._wallet;
                    if (t) {
                        t.off("disconnect", this._disconnected), t.off("accountChanged", this._accountChanged), this._wallet = null, this._publicKey = null;
                        try {
                            await t.disconnect()
                        } catch (t) {
                            this.emit("error", new s.UG(t ? .message, t))
                        }
                    }
                    this.emit("disconnect")
                }
                async sendTransaction(t, e, n = {}) {
                    try {
                        let i = this._wallet;
                        if (!i) throw new s.oS;
                        try {
                            let {
                                signers: r,
                                ...s
                            } = n;
                            (0, a.W)(t) ? r ? .length && t.sign(r) : (t = await this.prepareTransaction(t, e, s), r ? .length && t.partialSign(...r)), s.preflightCommitment = s.preflightCommitment || e.commitment;
                            let {
                                signature: o
                            } = await i.signAndSendTransaction(t, s);
                            return o
                        } catch (t) {
                            if (t instanceof s.lj) throw t;
                            throw new s.IW(t ? .message, t)
                        }
                    } catch (t) {
                        throw this.emit("error", t), t
                    }
                }
                async signTransaction(t) {
                    try {
                        let e = this._wallet;
                        if (!e) throw new s.oS;
                        try {
                            return await e.signTransaction(t) || t
                        } catch (t) {
                            throw new s.PY(t ? .message, t)
                        }
                    } catch (t) {
                        throw this.emit("error", t), t
                    }
                }
                async signAllTransactions(t) {
                    try {
                        let e = this._wallet;
                        if (!e) throw new s.oS;
                        try {
                            return await e.signAllTransactions(t) || t
                        } catch (t) {
                            throw new s.PY(t ? .message, t)
                        }
                    } catch (t) {
                        throw this.emit("error", t), t
                    }
                }
                async signMessage(t) {
                    try {
                        let e = this._wallet;
                        if (!e) throw new s.oS;
                        try {
                            let {
                                signature: n
                            } = await e.signMessage(t);
                            return n
                        } catch (t) {
                            throw new s.fk(t ? .message, t)
                        }
                    } catch (t) {
                        throw this.emit("error", t), t
                    }
                }
            }
        },
        44156: function(t, e, n) {
            "use strict";
            n.d(e, {
                s: function() {
                    return f
                }
            });
            var i = n(2265),
                r = n(72941),
                s = n(68757),
                a = n(15408),
                o = n(54887);
            let l = ({
                    id: t,
                    children: e,
                    expanded: n = !1
                }) => {
                    let r = (0, i.useRef)(null),
                        s = (0, i.useRef)(!0),
                        a = () => {
                            let t = r.current;
                            t && requestAnimationFrame(() => {
                                t.style.height = t.scrollHeight + "px"
                            })
                        },
                        o = () => {
                            let t = r.current;
                            t && requestAnimationFrame(() => {
                                t.style.height = t.offsetHeight + "px", t.style.overflow = "hidden", requestAnimationFrame(() => {
                                    t.style.height = "0"
                                })
                            })
                        };
                    return (0, i.useLayoutEffect)(() => {
                        n ? a() : o()
                    }, [n]), (0, i.useLayoutEffect)(() => {
                        let t = r.current;
                        if (t) return s.current && (e(), s.current = !1), t.addEventListener("transitionend", i), () => t.removeEventListener("transitionend", i);

                        function e() {
                            t && (t.style.overflow = n ? "initial" : "hidden", n && (t.style.height = "auto"))
                        }

                        function i(n) {
                            t && n.target === t && "height" === n.propertyName && e()
                        }
                    }, [n]), i.createElement("div", {
                        className: "wallet-adapter-collapse",
                        id: t,
                        ref: r,
                        role: "region",
                        style: {
                            height: 0,
                            transition: s.current ? void 0 : "height 250ms ease-out"
                        }
                    }, e)
                },
                u = t => i.createElement("button", {
                    className: `wallet-adapter-button ${t.className||""}`,
                    disabled: t.disabled,
                    style: t.style,
                    onClick: t.onClick,
                    tabIndex: t.tabIndex || 0,
                    type: "button"
                }, t.startIcon && i.createElement("i", {
                    className: "wallet-adapter-button-start-icon"
                }, t.startIcon), t.children, t.endIcon && i.createElement("i", {
                    className: "wallet-adapter-button-end-icon"
                }, t.endIcon)),
                c = ({
                    wallet: t,
                    ...e
                }) => t && i.createElement("img", {
                    src: t.adapter.icon,
                    alt: `${t.adapter.name} icon`,
                    ...e
                }),
                h = ({
                    handleClick: t,
                    tabIndex: e,
                    wallet: n
                }) => i.createElement("li", null, i.createElement(u, {
                    onClick: t,
                    startIcon: i.createElement(c, {
                        wallet: n
                    }),
                    tabIndex: e
                }, n.adapter.name, n.readyState === s.i1.Installed && i.createElement("span", null, "Detected"))),
                d = () => i.createElement("svg", {
                    width: "97",
                    height: "96",
                    viewBox: "0 0 97 96",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, i.createElement("circle", {
                    cx: "48.5",
                    cy: "48",
                    r: "48",
                    fill: "url(#paint0_linear_880_5115)",
                    fillOpacity: "0.1"
                }), i.createElement("circle", {
                    cx: "48.5",
                    cy: "48",
                    r: "47",
                    stroke: "url(#paint1_linear_880_5115)",
                    strokeOpacity: "0.4",
                    strokeWidth: "2"
                }), i.createElement("g", {
                    clipPath: "url(#clip0_880_5115)"
                }, i.createElement("path", {
                    d: "M65.5769 28.1523H31.4231C27.6057 28.1523 24.5 31.258 24.5 35.0754V60.9215C24.5 64.7389 27.6057 67.8446 31.4231 67.8446H65.5769C69.3943 67.8446 72.5 64.7389 72.5 60.9215V35.0754C72.5 31.258 69.3943 28.1523 65.5769 28.1523ZM69.7308 52.1523H59.5769C57.2865 52.1523 55.4231 50.289 55.4231 47.9985C55.4231 45.708 57.2864 43.8446 59.5769 43.8446H69.7308V52.1523ZM69.7308 41.0754H59.5769C55.7595 41.0754 52.6539 44.1811 52.6539 47.9985C52.6539 51.8159 55.7595 54.9215 59.5769 54.9215H69.7308V60.9215C69.7308 63.2119 67.8674 65.0754 65.5769 65.0754H31.4231C29.1327 65.0754 27.2692 63.212 27.2692 60.9215V35.0754C27.2692 32.785 29.1326 30.9215 31.4231 30.9215H65.5769C67.8673 30.9215 69.7308 32.7849 69.7308 35.0754V41.0754Z",
                    fill: "url(#paint2_linear_880_5115)"
                }), i.createElement("path", {
                    d: "M61.4231 46.6172H59.577C58.8123 46.6172 58.1924 47.2371 58.1924 48.0018C58.1924 48.7665 58.8123 49.3863 59.577 49.3863H61.4231C62.1878 49.3863 62.8077 48.7664 62.8077 48.0018C62.8077 47.2371 62.1878 46.6172 61.4231 46.6172Z",
                    fill: "url(#paint3_linear_880_5115)"
                })), i.createElement("defs", null, i.createElement("linearGradient", {
                    id: "paint0_linear_880_5115",
                    x1: "3.41664",
                    y1: "98.0933",
                    x2: "103.05",
                    y2: "8.42498",
                    gradientUnits: "userSpaceOnUse"
                }, i.createElement("stop", {
                    stopColor: "#9945FF"
                }), i.createElement("stop", {
                    offset: "0.14",
                    stopColor: "#8A53F4"
                }), i.createElement("stop", {
                    offset: "0.42",
                    stopColor: "#6377D6"
                }), i.createElement("stop", {
                    offset: "0.79",
                    stopColor: "#24B0A7"
                }), i.createElement("stop", {
                    offset: "0.99",
                    stopColor: "#00D18C"
                }), i.createElement("stop", {
                    offset: "1",
                    stopColor: "#00D18C"
                })), i.createElement("linearGradient", {
                    id: "paint1_linear_880_5115",
                    x1: "3.41664",
                    y1: "98.0933",
                    x2: "103.05",
                    y2: "8.42498",
                    gradientUnits: "userSpaceOnUse"
                }, i.createElement("stop", {
                    stopColor: "#9945FF"
                }), i.createElement("stop", {
                    offset: "0.14",
                    stopColor: "#8A53F4"
                }), i.createElement("stop", {
                    offset: "0.42",
                    stopColor: "#6377D6"
                }), i.createElement("stop", {
                    offset: "0.79",
                    stopColor: "#24B0A7"
                }), i.createElement("stop", {
                    offset: "0.99",
                    stopColor: "#00D18C"
                }), i.createElement("stop", {
                    offset: "1",
                    stopColor: "#00D18C"
                })), i.createElement("linearGradient", {
                    id: "paint2_linear_880_5115",
                    x1: "25.9583",
                    y1: "68.7101",
                    x2: "67.2337",
                    y2: "23.7879",
                    gradientUnits: "userSpaceOnUse"
                }, i.createElement("stop", {
                    stopColor: "#9945FF"
                }), i.createElement("stop", {
                    offset: "0.14",
                    stopColor: "#8A53F4"
                }), i.createElement("stop", {
                    offset: "0.42",
                    stopColor: "#6377D6"
                }), i.createElement("stop", {
                    offset: "0.79",
                    stopColor: "#24B0A7"
                }), i.createElement("stop", {
                    offset: "0.99",
                    stopColor: "#00D18C"
                }), i.createElement("stop", {
                    offset: "1",
                    stopColor: "#00D18C"
                })), i.createElement("linearGradient", {
                    id: "paint3_linear_880_5115",
                    x1: "58.3326",
                    y1: "49.4467",
                    x2: "61.0002",
                    y2: "45.4453",
                    gradientUnits: "userSpaceOnUse"
                }, i.createElement("stop", {
                    stopColor: "#9945FF"
                }), i.createElement("stop", {
                    offset: "0.14",
                    stopColor: "#8A53F4"
                }), i.createElement("stop", {
                    offset: "0.42",
                    stopColor: "#6377D6"
                }), i.createElement("stop", {
                    offset: "0.79",
                    stopColor: "#24B0A7"
                }), i.createElement("stop", {
                    offset: "0.99",
                    stopColor: "#00D18C"
                }), i.createElement("stop", {
                    offset: "1",
                    stopColor: "#00D18C"
                })), i.createElement("clipPath", {
                    id: "clip0_880_5115"
                }, i.createElement("rect", {
                    width: "48",
                    height: "48",
                    fill: "white",
                    transform: "translate(24.5 24)"
                })))),
                g = ({
                    className: t = "",
                    container: e = "body"
                }) => {
                    let n = (0, i.useRef)(null),
                        {
                            wallets: u,
                            select: c
                        } = (0, a.O)(),
                        {
                            setVisible: g
                        } = (0, r.h)(),
                        [f, p] = (0, i.useState)(!1),
                        [y, m] = (0, i.useState)(!1),
                        [w, M] = (0, i.useState)(null),
                        [N, v] = (0, i.useMemo)(() => {
                            let t = [],
                                e = [];
                            for (let n of u) n.readyState === s.i1.Installed ? t.push(n) : e.push(n);
                            return t.length ? [t, e] : [e, []]
                        }, [u]),
                        L = (0, i.useCallback)(() => {
                            m(!1), setTimeout(() => g(!1), 150)
                        }, [g]),
                        j = (0, i.useCallback)(t => {
                            t.preventDefault(), L()
                        }, [L]),
                        I = (0, i.useCallback)((t, e) => {
                            c(e), j(t)
                        }, [c, j]),
                        b = (0, i.useCallback)(() => p(!f), [f]),
                        S = (0, i.useCallback)(t => {
                            let e = n.current;
                            if (!e) return;
                            let i = e.querySelectorAll("button"),
                                r = i[0],
                                s = i[i.length - 1];
                            t.shiftKey ? document.activeElement === r && (s.focus(), t.preventDefault()) : document.activeElement === s && (r.focus(), t.preventDefault())
                        }, [n]);
                    return (0, i.useLayoutEffect)(() => {
                        let t = t => {
                                "Escape" === t.key ? L() : "Tab" === t.key && S(t)
                            },
                            {
                                overflow: e
                            } = window.getComputedStyle(document.body);
                        return setTimeout(() => m(!0), 0), document.body.style.overflow = "hidden", window.addEventListener("keydown", t, !1), () => {
                            document.body.style.overflow = e, window.removeEventListener("keydown", t, !1)
                        }
                    }, [L, S]), (0, i.useLayoutEffect)(() => M(document.querySelector(e)), [e]), w && (0, o.createPortal)(i.createElement("div", {
                        "aria-labelledby": "wallet-adapter-modal-title",
                        "aria-modal": "true",
                        className: `wallet-adapter-modal ${y&&"wallet-adapter-modal-fade-in"} ${t}`,
                        ref: n,
                        role: "dialog"
                    }, i.createElement("div", {
                        className: "wallet-adapter-modal-container"
                    }, i.createElement("div", {
                        className: "wallet-adapter-modal-wrapper"
                    }, i.createElement("button", {
                        onClick: j,
                        className: "wallet-adapter-modal-button-close"
                    }, i.createElement("svg", {
                        width: "14",
                        height: "14"
                    }, i.createElement("path", {
                        d: "M14 12.461 8.3 6.772l5.234-5.233L12.006 0 6.772 5.234 1.54 0 0 1.539l5.234 5.233L0 12.006l1.539 1.528L6.772 8.3l5.69 5.7L14 12.461z"
                    }))), N.length ? i.createElement(i.Fragment, null, i.createElement("h1", {
                        className: "wallet-adapter-modal-title"
                    }, "Connect a wallet on Solana to continue"), i.createElement("ul", {
                        className: "wallet-adapter-modal-list"
                    }, N.map(t => i.createElement(h, {
                        key: t.adapter.name,
                        handleClick: e => I(e, t.adapter.name),
                        wallet: t
                    })), v.length ? i.createElement(l, {
                        expanded: f,
                        id: "wallet-adapter-modal-collapse"
                    }, v.map(t => i.createElement(h, {
                        key: t.adapter.name,
                        handleClick: e => I(e, t.adapter.name),
                        tabIndex: f ? 0 : -1,
                        wallet: t
                    }))) : null), v.length ? i.createElement("button", {
                        className: "wallet-adapter-modal-list-more",
                        onClick: b,
                        tabIndex: 0
                    }, i.createElement("span", null, f ? "Less " : "More ", "options"), i.createElement("svg", {
                        width: "13",
                        height: "7",
                        viewBox: "0 0 13 7",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: `${f?"wallet-adapter-modal-list-more-icon-rotate":""}`
                    }, i.createElement("path", {
                        d: "M0.71418 1.626L5.83323 6.26188C5.91574 6.33657 6.0181 6.39652 6.13327 6.43762C6.24844 6.47872 6.37371 6.5 6.50048 6.5C6.62725 6.5 6.75252 6.47872 6.8677 6.43762C6.98287 6.39652 7.08523 6.33657 7.16774 6.26188L12.2868 1.626C12.7753 1.1835 12.3703 0.5 11.6195 0.5H1.37997C0.629216 0.5 0.224175 1.1835 0.71418 1.626Z"
                    }))) : null) : i.createElement(i.Fragment, null, i.createElement("h1", {
                        className: "wallet-adapter-modal-title"
                    }, "You'll need a wallet on Solana to continue"), i.createElement("div", {
                        className: "wallet-adapter-modal-middle"
                    }, i.createElement(d, null)), v.length ? i.createElement(i.Fragment, null, i.createElement("button", {
                        className: "wallet-adapter-modal-list-more",
                        onClick: b,
                        tabIndex: 0
                    }, i.createElement("span", null, f ? "Hide " : "Already have a wallet? View ", "options"), i.createElement("svg", {
                        width: "13",
                        height: "7",
                        viewBox: "0 0 13 7",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: `${f?"wallet-adapter-modal-list-more-icon-rotate":""}`
                    }, i.createElement("path", {
                        d: "M0.71418 1.626L5.83323 6.26188C5.91574 6.33657 6.0181 6.39652 6.13327 6.43762C6.24844 6.47872 6.37371 6.5 6.50048 6.5C6.62725 6.5 6.75252 6.47872 6.8677 6.43762C6.98287 6.39652 7.08523 6.33657 7.16774 6.26188L12.2868 1.626C12.7753 1.1835 12.3703 0.5 11.6195 0.5H1.37997C0.629216 0.5 0.224175 1.1835 0.71418 1.626Z"
                    }))), i.createElement(l, {
                        expanded: f,
                        id: "wallet-adapter-modal-collapse"
                    }, i.createElement("ul", {
                        className: "wallet-adapter-modal-list"
                    }, v.map(t => i.createElement(h, {
                        key: t.adapter.name,
                        handleClick: e => I(e, t.adapter.name),
                        tabIndex: f ? 0 : -1,
                        wallet: t
                    }))))) : null))), i.createElement("div", {
                        className: "wallet-adapter-modal-overlay",
                        onMouseDown: j
                    })), w)
                },
                f = ({
                    children: t,
                    ...e
                }) => {
                    let [n, s] = (0, i.useState)(!1);
                    return i.createElement(r.g.Provider, {
                        value: {
                            visible: n,
                            setVisible: s
                        }
                    }, t, n && i.createElement(g, { ...e
                    }))
                }
        },
        54968: function(t, e, n) {
            "use strict";
            n.d(e, {
                U: function() {
                    return a
                }
            });
            var i = n(64024),
                r = n(2265),
                s = n(13816);
            let a = ({
                children: t,
                endpoint: e,
                config: n = {
                    commitment: "confirmed"
                }
            }) => {
                let a = (0, r.useMemo)(() => new i.Connection(e, n), [e, n]);
                return r.createElement(s.h.Provider, {
                    value: {
                        connection: a
                    }
                }, t)
            }
        },
        2396: function(t, e, n) {
            "use strict";
            let i, r, s;
            n.d(e, {
                n: function() {
                    return tR
                }
            });
            var a, o, l, u, c, h, d, g, f, p, y, m, w, M, N, v, L, j, I, b, S, D = n(95462),
                O = n(68757),
                E = n(74659),
                T = n(64024);
            let x = `(?:\\nURI: (?<uri>[^\\n]+))?(?:\\nVersion: (?<version>[^\\n]+))?(?:\\nChain ID: (?<chainId>[^\\n]+))?(?:\\nNonce: (?<nonce>[^\\n]+))?(?:\\nIssued At: (?<issuedAt>[^\\n]+))?(?:\\nExpiration Time: (?<expirationTime>[^\\n]+))?(?:\\nNot Before: (?<notBefore>[^\\n]+))?(?:\\nRequest ID: (?<requestId>[^\\n]+))?(?:\\nResources:(?<resources>(?:\\n- [^\\n]+)*))?`;
            RegExp(`^(?<domain>[^\\n]+?) wants you to sign in with your Solana account:\\n(?<address>[^\\n]+)(?:\\n|$)(?:\\n(?<statement>[\\S\\s]*?)(?:\\n|$))??${x}\\n*$`);
            let A = {
                ERROR_ASSOCIATION_PORT_OUT_OF_RANGE: "ERROR_ASSOCIATION_PORT_OUT_OF_RANGE",
                ERROR_FORBIDDEN_WALLET_BASE_URL: "ERROR_FORBIDDEN_WALLET_BASE_URL",
                ERROR_SECURE_CONTEXT_REQUIRED: "ERROR_SECURE_CONTEXT_REQUIRED",
                ERROR_SESSION_CLOSED: "ERROR_SESSION_CLOSED",
                ERROR_SESSION_TIMEOUT: "ERROR_SESSION_TIMEOUT",
                ERROR_WALLET_NOT_FOUND: "ERROR_WALLET_NOT_FOUND",
                ERROR_INVALID_PROTOCOL_VERSION: "ERROR_INVALID_PROTOCOL_VERSION"
            };
            class C extends Error {
                constructor(...t) {
                    let [e, n, i] = t;
                    super(n), this.code = e, this.data = i, this.name = "SolanaMobileWalletAdapterError"
                }
            }
            class z extends Error {
                constructor(...t) {
                    let [e, n, i, r] = t;
                    super(i), this.code = n, this.data = r, this.jsonRpcMessageId = e, this.name = "SolanaMobileWalletAdapterProtocolError"
                }
            }

            function k(t, e, n, i) {
                return new(n || (n = Promise))(function(r, s) {
                    function a(t) {
                        try {
                            l(i.next(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function o(t) {
                        try {
                            l(i.throw(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function l(t) {
                        var e;
                        t.done ? r(t.value) : ((e = t.value) instanceof n ? e : new n(function(t) {
                            t(e)
                        })).then(a, o)
                    }
                    l((i = i.apply(t, e || [])).next())
                })
            }
            let R = "solana:cloneAuthorization";

            function _(t, e) {
                return k(this, void 0, void 0, function*() {
                    let n = t.slice(0, 4),
                        r = t.slice(4, 16),
                        s = t.slice(16),
                        a = yield crypto.subtle.decrypt(P(n, r), e, s);
                    return (void 0 === i && (i = new TextDecoder("utf-8")), i).decode(a)
                })
            }

            function P(t, e) {
                return {
                    additionalData: t,
                    iv: e,
                    name: "AES-GCM",
                    tagLength: 128
                }
            }

            function U(t) {
                if (t < 49152 || t > 65535) throw new C(A.ERROR_ASSOCIATION_PORT_OUT_OF_RANGE, `Association port number must be between 49152 and 65535. ${t} given.`, {
                    port: t
                });
                return t
            }

            function Q(t) {
                return t.replace(/(^\/+|\/+$)/g, "").split("/")
            }
            let Y = {
                    Firefox: 0,
                    Other: 1
                },
                W = null,
                $ = [150, 150, 200, 500, 500, 750, 750, 1e3];

            function Z(t) {
                return new DataView(t).getUint32(0, !1)
            }
            var B = n(59147);

            function V(t, e) {
                var n = {};
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && 0 > e.indexOf(i) && (n[i] = t[i]);
                if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                    for (var r = 0, i = Object.getOwnPropertySymbols(t); r < i.length; r++) 0 > e.indexOf(i[r]) && Object.prototype.propertyIsEnumerable.call(t, i[r]) && (n[i[r]] = t[i[r]]);
                return n
            }

            function F(t, e, n, i) {
                return new(n || (n = Promise))(function(r, s) {
                    function a(t) {
                        try {
                            l(i.next(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function o(t) {
                        try {
                            l(i.throw(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function l(t) {
                        var e;
                        t.done ? r(t.value) : ((e = t.value) instanceof n ? e : new n(function(t) {
                            t(e)
                        })).then(a, o)
                    }
                    l((i = i.apply(t, e || [])).next())
                })
            }

            function G(t) {
                return window.btoa(String.fromCharCode.call(null, ...t))
            }

            function H(t) {
                return new Uint8Array(window.atob(t).split("").map(t => t.charCodeAt(0)))
            }

            function K(t) {
                return G("version" in t ? t.serialize() : t.serialize({
                    requireAllSignatures: !1,
                    verifySignatures: !1
                }))
            }

            function q(t) {
                let e = t[0] * T.SIGNATURE_LENGTH_IN_BYTES + 1;
                return "legacy" === T.VersionedMessage.deserializeMessageVersion(t.slice(e, t.length)) ? T.Transaction.from(t) : T.VersionedTransaction.deserialize(t)
            }

            function J(t, e, n, i) {
                return new(n || (n = Promise))(function(r, s) {
                    function a(t) {
                        try {
                            l(i.next(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function o(t) {
                        try {
                            l(i.throw(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function l(t) {
                        var e;
                        t.done ? r(t.value) : ((e = t.value) instanceof n ? e : new n(function(t) {
                            t(e)
                        })).then(a, o)
                    }
                    l((i = i.apply(t, e || [])).next())
                })
            }

            function X(t) {
                return new Uint8Array(window.atob(t).split("").map(t => t.charCodeAt(0)))
            }
            let tt = "Mobile Wallet Adapter";

            function te(t) {
                return "version" in t
            }
            class tn extends D.qz {
                constructor(t) {
                    var e;
                    super(), this.supportedTransactionVersions = new Set(["legacy", 0]), this.name = tt, this.url = "https://solanamobile.com/wallets", this.icon = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI4IiB3aWR0aD0iMjgiIHZpZXdCb3g9Ii0zIDAgMjggMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI0RDQjhGRiI+PHBhdGggZD0iTTE3LjQgMTcuNEgxNXYyLjRoMi40di0yLjRabTEuMi05LjZoLTIuNHYyLjRoMi40VjcuOFoiLz48cGF0aCBkPSJNMjEuNiAzVjBoLTIuNHYzaC0zLjZWMGgtMi40djNoLTIuNHY2LjZINC41YTIuMSAyLjEgMCAxIDEgMC00LjJoMi43VjNINC41QTQuNSA0LjUgMCAwIDAgMCA3LjVWMjRoMjEuNnYtNi42aC0yLjR2NC4ySDIuNFYxMS41Yy41LjMgMS4yLjQgMS44LjVoNy41QTYuNiA2LjYgMCAwIDAgMjQgOVYzaC0yLjRabTAgNS43YTQuMiA0LjIgMCAxIDEtOC40IDBWNS40aDguNHYzLjNaIi8+PC9nPjwvc3ZnPg==", this._connecting = !1, this._connectionGeneration = 0, this._readyState = "undefined" != typeof window && window.isSecureContext && "undefined" != typeof document && /android/i.test(navigator.userAgent) ? O.i1.Loadable : O.i1.Unsupported, this._authorizationResultCache = t.authorizationResultCache, this._addressSelector = t.addressSelector, this._appIdentity = t.appIdentity, this._chain = null !== (e = t.chain) && void 0 !== e ? e : t.cluster, this._onWalletNotFound = t.onWalletNotFound, this._readyState !== O.i1.Unsupported && this._authorizationResultCache.get().then(t => {
                        t && this.declareWalletAsInstalled()
                    })
                }
                get publicKey() {
                    if (null == this._publicKey && null != this._selectedAddress) try {
                        this._publicKey = function(t) {
                            let e = X(t);
                            return new T.PublicKey(e)
                        }(this._selectedAddress)
                    } catch (t) {
                        throw new E.Nx(t instanceof Error && (null == t ? void 0 : t.message) || "Unknown error", t)
                    }
                    return this._publicKey ? this._publicKey : null
                }
                get connected() {
                    return !!this._authorizationResult
                }
                get connecting() {
                    return this._connecting
                }
                get readyState() {
                    return this._readyState
                }
                declareWalletAsInstalled() {
                    this._readyState !== O.i1.Installed && this.emit("readyStateChange", this._readyState = O.i1.Installed)
                }
                runWithGuard(t) {
                    return J(this, void 0, void 0, function*() {
                        try {
                            return yield t()
                        } catch (t) {
                            throw this.emit("error", t), t
                        }
                    })
                }
                autoConnect_DO_NOT_USE_OR_YOU_WILL_BE_FIRED() {
                    return J(this, void 0, void 0, function*() {
                        return yield this.autoConnect()
                    })
                }
                autoConnect() {
                    return J(this, void 0, void 0, function*() {
                        if (!this.connecting && !this.connected) return yield this.runWithGuard(() => J(this, void 0, void 0, function*() {
                            if (this._readyState !== O.i1.Installed && this._readyState !== O.i1.Loadable) throw new E.OZ;
                            this._connecting = !0;
                            try {
                                let t = yield this._authorizationResultCache.get();
                                t && this.handleAuthorizationResult(t)
                            } catch (t) {
                                throw new E.$w(t instanceof Error && t.message || "Unknown error", t)
                            } finally {
                                this._connecting = !1
                            }
                        }))
                    })
                }
                connect() {
                    return J(this, void 0, void 0, function*() {
                        if (!this.connecting && !this.connected) return yield this.runWithGuard(() => J(this, void 0, void 0, function*() {
                            if (this._readyState !== O.i1.Installed && this._readyState !== O.i1.Loadable) throw new E.OZ;
                            this._connecting = !0;
                            try {
                                yield this.performAuthorization()
                            } catch (t) {
                                throw new E.$w(t instanceof Error && t.message || "Unknown error", t)
                            } finally {
                                this._connecting = !1
                            }
                        }))
                    })
                }
                performAuthorization(t) {
                    return J(this, void 0, void 0, function*() {
                        try {
                            let e = yield this._authorizationResultCache.get();
                            if (e) return this.handleAuthorizationResult(e), e;
                            return yield this.transact(e => J(this, void 0, void 0, function*() {
                                let n = yield e.authorize({
                                    chain: this._chain,
                                    identity: this._appIdentity,
                                    sign_in_payload: t
                                });
                                return Promise.all([this._authorizationResultCache.set(n), this.handleAuthorizationResult(n)]), n
                            }))
                        } catch (t) {
                            throw new E.$w(t instanceof Error && t.message || "Unknown error", t)
                        }
                    })
                }
                handleAuthorizationResult(t) {
                    var e;
                    return J(this, void 0, void 0, function*() {
                        let n = null == this._authorizationResult || (null === (e = this._authorizationResult) || void 0 === e ? void 0 : e.accounts.length) !== t.accounts.length || this._authorizationResult.accounts.some((e, n) => e.address !== t.accounts[n].address);
                        if (this._authorizationResult = t, this.declareWalletAsInstalled(), n) {
                            let e = yield this._addressSelector.select(t.accounts.map(({
                                address: t
                            }) => t));
                            e !== this._selectedAddress && (this._selectedAddress = e, delete this._publicKey, this.emit("connect", this.publicKey))
                        }
                    })
                }
                performReauthorization(t, e) {
                    return J(this, void 0, void 0, function*() {
                        try {
                            let n = yield t.authorize({
                                auth_token: e,
                                identity: this._appIdentity
                            });
                            Promise.all([this._authorizationResultCache.set(n), this.handleAuthorizationResult(n)])
                        } catch (t) {
                            throw this.disconnect(), new E.at(t instanceof Error && (null == t ? void 0 : t.message) || "Unknown error", t)
                        }
                    })
                }
                disconnect() {
                    return J(this, void 0, void 0, function*() {
                        this._authorizationResultCache.clear(), this._connecting = !1, this._connectionGeneration++, delete this._authorizationResult, delete this._publicKey, delete this._selectedAddress, this.emit("disconnect")
                    })
                }
                transact(t) {
                    var e;
                    return J(this, void 0, void 0, function*() {
                        let n = null === (e = this._authorizationResult) || void 0 === e ? void 0 : e.wallet_uri_base,
                            i = this._connectionGeneration;
                        try {
                            return yield function(t, e) {
                                return F(this, void 0, void 0, function*() {
                                    return yield function(t, e) {
                                        return k(this, void 0, void 0, function*() {
                                            let n;
                                            ! function() {
                                                if ("undefined" == typeof window || !0 !== window.isSecureContext) throw new C(A.ERROR_SECURE_CONTEXT_REQUIRED, "The mobile wallet adapter protocol must be used in a secure context (`https`).")
                                            }();
                                            let i = yield function() {
                                                return k(this, void 0, void 0, function*() {
                                                    return yield crypto.subtle.generateKey({
                                                        name: "ECDSA",
                                                        namedCurve: "P-256"
                                                    }, !1, ["sign"])
                                                })
                                            }(), r = yield function(t, e) {
                                                return k(this, void 0, void 0, function*() {
                                                    let n = U(49152 + Math.floor(16384 * Math.random())),
                                                        i = yield function(t, e, n, i = ["v1"]) {
                                                            return k(this, void 0, void 0, function*() {
                                                                let r = U(e),
                                                                    s = function(t) {
                                                                        let e = "",
                                                                            n = new Uint8Array(t),
                                                                            i = n.byteLength;
                                                                        for (let t = 0; t < i; t++) e += String.fromCharCode(n[t]);
                                                                        return window.btoa(e)
                                                                    }((yield crypto.subtle.exportKey("raw", t))),
                                                                    a = function(t, e) {
                                                                        let n = null;
                                                                        if (e) {
                                                                            try {
                                                                                n = new URL(e)
                                                                            } catch (t) {}
                                                                            if ((null == n ? void 0 : n.protocol) !== "https:") throw new C(A.ERROR_FORBIDDEN_WALLET_BASE_URL, "Base URLs supplied by wallets must be valid `https` URLs")
                                                                        }
                                                                        return n || (n = new URL("solana-wallet:/")), new URL(t.startsWith("/") ? t : [...Q(n.pathname), ...Q(t)].join("/"), n)
                                                                    }("v1/associate/local", n);
                                                                return a.searchParams.set("association", s.replace(/[/+=]/g, t => ({
                                                                    "/": "_",
                                                                    "+": "-",
                                                                    "=": "."
                                                                })[t])), a.searchParams.set("port", `${r}`), i.forEach(t => {
                                                                    a.searchParams.set("v", t)
                                                                }), a
                                                            })
                                                        }(t, n, e);
                                                    if ("https:" === i.protocol) window.location.assign(i);
                                                    else try {
                                                        switch (-1 !== navigator.userAgent.indexOf("Firefox/") ? Y.Firefox : Y.Other) {
                                                            case Y.Firefox:
                                                                null == W && ((W = document.createElement("iframe")).style.display = "none", document.body.appendChild(W)), W.contentWindow.location.href = i.toString();
                                                                break;
                                                            case Y.Other:
                                                                {
                                                                    let t = new Promise((t, e) => {
                                                                        function n() {
                                                                            clearTimeout(r), window.removeEventListener("blur", i)
                                                                        }

                                                                        function i() {
                                                                            n(), t()
                                                                        }
                                                                        window.addEventListener("blur", i);
                                                                        let r = setTimeout(() => {
                                                                            n(), e()
                                                                        }, 2e3)
                                                                    });window.location.assign(i),
                                                                    yield t
                                                                }
                                                        }
                                                    } catch (t) {
                                                        throw new C(A.ERROR_WALLET_NOT_FOUND, "Found no installed wallet that supports the mobile wallet protocol.")
                                                    }
                                                    return n
                                                })
                                            }(i.publicKey, null == e ? void 0 : e.baseUri), s = `ws://localhost:${r}/solana-wallet`, a = (() => {
                                                let t = [...$];
                                                return () => t.length > 1 ? t.shift() : t[0]
                                            })(), o = 1, l = 0, u = {
                                                __type: "disconnected"
                                            };
                                            return new Promise((e, c) => {
                                                let h, d, g;
                                                let f = {},
                                                    p = () => k(this, void 0, void 0, function*() {
                                                        if ("connecting" !== u.__type) {
                                                            console.warn(`Expected adapter state to be \`connecting\` at the moment the websocket opens. Got \`${u.__type}\`.`);
                                                            return
                                                        }
                                                        let {
                                                            associationKeypair: t
                                                        } = u;
                                                        h.removeEventListener("open", p);
                                                        let e = yield function() {
                                                            return k(this, void 0, void 0, function*() {
                                                                return yield crypto.subtle.generateKey({
                                                                    name: "ECDH",
                                                                    namedCurve: "P-256"
                                                                }, !1, ["deriveKey", "deriveBits"])
                                                            })
                                                        }();
                                                        h.send((yield function(t, e) {
                                                            return k(this, void 0, void 0, function*() {
                                                                let n = yield crypto.subtle.exportKey("raw", t), i = yield crypto.subtle.sign({
                                                                    hash: "SHA-256",
                                                                    name: "ECDSA"
                                                                }, e, n), r = new Uint8Array(n.byteLength + i.byteLength);
                                                                return r.set(new Uint8Array(n), 0), r.set(new Uint8Array(i), n.byteLength), r
                                                            })
                                                        }(e.publicKey, t.privateKey))), u = {
                                                            __type: "hello_req_sent",
                                                            associationPublicKey: t.publicKey,
                                                            ecdhPrivateKey: e.privateKey
                                                        }
                                                    }),
                                                    y = t => {
                                                        t.wasClean ? u = {
                                                            __type: "disconnected"
                                                        } : c(new C(A.ERROR_SESSION_CLOSED, `The wallet session dropped unexpectedly (${t.code}: ${t.reason}).`, {
                                                            closeEvent: t
                                                        })), d()
                                                    },
                                                    m = t => k(this, void 0, void 0, function*() {
                                                        d(), Date.now() - n >= 3e4 ? c(new C(A.ERROR_SESSION_TIMEOUT, `Failed to connect to the wallet websocket on port ${r}.`)) : (yield new Promise(t => {
                                                            let e = a();
                                                            g = window.setTimeout(t, e)
                                                        }), M())
                                                    }),
                                                    w = n => k(this, void 0, void 0, function*() {
                                                        let i = yield n.data.arrayBuffer();
                                                        switch (u.__type) {
                                                            case "connected":
                                                                try {
                                                                    let t = i.slice(0, 4),
                                                                        e = Z(t);
                                                                    if (e !== l + 1) throw Error("Encrypted message has invalid sequence number");
                                                                    l = e;
                                                                    let n = yield function(t, e) {
                                                                        return k(this, void 0, void 0, function*() {
                                                                            let n = JSON.parse((yield _(t, e)));
                                                                            if (Object.hasOwnProperty.call(n, "error")) throw new z(n.id, n.error.code, n.error.message);
                                                                            return n
                                                                        })
                                                                    }(i, u.sharedSecret), r = f[n.id];
                                                                    delete f[n.id], r.resolve(n.result)
                                                                } catch (t) {
                                                                    if (t instanceof z) {
                                                                        let e = f[t.jsonRpcMessageId];
                                                                        delete f[t.jsonRpcMessageId], e.reject(t)
                                                                    } else throw t
                                                                }
                                                                break;
                                                            case "hello_req_sent":
                                                                {
                                                                    var r, s;
                                                                    let n = yield function(t, e, n) {
                                                                        return k(this, void 0, void 0, function*() {
                                                                            let [i, r] = yield Promise.all([crypto.subtle.exportKey("raw", e), crypto.subtle.importKey("raw", t.slice(0, 65), {
                                                                                name: "ECDH",
                                                                                namedCurve: "P-256"
                                                                            }, !1, [])]), s = yield crypto.subtle.deriveBits({
                                                                                name: "ECDH",
                                                                                public: r
                                                                            }, n, 256), a = yield crypto.subtle.importKey("raw", s, "HKDF", !1, ["deriveKey"]);
                                                                            return yield crypto.subtle.deriveKey({
                                                                                name: "HKDF",
                                                                                hash: "SHA-256",
                                                                                salt: new Uint8Array(i),
                                                                                info: new Uint8Array
                                                                            }, a, {
                                                                                name: "AES-GCM",
                                                                                length: 128
                                                                            }, !1, ["encrypt", "decrypt"])
                                                                        })
                                                                    }(i, u.associationPublicKey, u.ecdhPrivateKey), a = i.slice(65), g = 0 !== a.byteLength ? yield k(this, void 0, void 0, function*() {
                                                                        let t = Z(a.slice(0, 4));
                                                                        if (t !== l + 1) throw Error("Encrypted message has invalid sequence number");
                                                                        return l = t,
                                                                            function(t, e) {
                                                                                return k(this, void 0, void 0, function*() {
                                                                                    let n = JSON.parse((yield _(t, e))),
                                                                                        i = "legacy";
                                                                                    if (Object.hasOwnProperty.call(n, "v")) switch (n.v) {
                                                                                        case 1:
                                                                                        case "1":
                                                                                        case "v1":
                                                                                            i = "v1";
                                                                                            break;
                                                                                        case "legacy":
                                                                                            i = "legacy";
                                                                                            break;
                                                                                        default:
                                                                                            throw new C(A.ERROR_INVALID_PROTOCOL_VERSION, `Unknown/unsupported protocol version: ${n.v}`)
                                                                                    }
                                                                                    return {
                                                                                        protocol_version: i
                                                                                    }
                                                                                })
                                                                            }(a, n)
                                                                    }): {
                                                                        protocol_version: "legacy"
                                                                    };u = {
                                                                        __type: "connected",
                                                                        sharedSecret: n,
                                                                        sessionProperties: g
                                                                    };
                                                                    let p = (r = g.protocol_version, s = (t, e) => k(this, void 0, void 0, function*() {
                                                                        let i = o++;
                                                                        return h.send((yield function(t, e) {
                                                                            return k(this, void 0, void 0, function*() {
                                                                                let n = JSON.stringify(t);
                                                                                return function(t, e, n) {
                                                                                    return k(this, void 0, void 0, function*() {
                                                                                        let i = function(t) {
                                                                                                if (t >= 4294967296) throw Error("Outbound sequence number overflow. The maximum sequence number is 32-bytes.");
                                                                                                let e = new ArrayBuffer(4);
                                                                                                return new DataView(e).setUint32(0, t, !1), new Uint8Array(e)
                                                                                            }(e),
                                                                                            r = new Uint8Array(12);
                                                                                        crypto.getRandomValues(r);
                                                                                        let s = yield crypto.subtle.encrypt(P(i, r), n, new TextEncoder().encode(t)), a = new Uint8Array(i.byteLength + r.byteLength + s.byteLength);
                                                                                        return a.set(new Uint8Array(i), 0), a.set(new Uint8Array(r), i.byteLength), a.set(new Uint8Array(s), i.byteLength + r.byteLength), a
                                                                                    })
                                                                                }(n, t.id, e)
                                                                            })
                                                                        }({
                                                                            id: i,
                                                                            jsonrpc: "2.0",
                                                                            method: t,
                                                                            params: null != e ? e : {}
                                                                        }, n))), new Promise((e, n) => {
                                                                            f[i] = {
                                                                                resolve(i) {
                                                                                    switch (t) {
                                                                                        case "authorize":
                                                                                        case "reauthorize":
                                                                                            {
                                                                                                let {
                                                                                                    wallet_uri_base: t
                                                                                                } = i;
                                                                                                if (null != t) try {
                                                                                                    ! function(t) {
                                                                                                        let e;
                                                                                                        try {
                                                                                                            e = new URL(t)
                                                                                                        } catch (t) {
                                                                                                            throw new C(A.ERROR_FORBIDDEN_WALLET_BASE_URL, "Invalid base URL supplied by wallet")
                                                                                                        }
                                                                                                        if ("https:" !== e.protocol) throw new C(A.ERROR_FORBIDDEN_WALLET_BASE_URL, "Base URLs supplied by wallets must be valid `https` URLs")
                                                                                                    }(t)
                                                                                                } catch (t) {
                                                                                                    n(t);
                                                                                                    return
                                                                                                }
                                                                                            }
                                                                                    }
                                                                                    e(i)
                                                                                },
                                                                                reject: n
                                                                            }
                                                                        })
                                                                    }), new Proxy({}, {
                                                                        get: (t, e) => (null == t[e] && (t[e] = function(t) {
                                                                            return k(this, void 0, void 0, function*() {
                                                                                let {
                                                                                    method: n,
                                                                                    params: i
                                                                                } = function(t, e, n) {
                                                                                    let i = e,
                                                                                        r = t.toString().replace(/[A-Z]/g, t => `_${t.toLowerCase()}`).toLowerCase();
                                                                                    switch (t) {
                                                                                        case "authorize":
                                                                                            {
                                                                                                let {
                                                                                                    chain: t
                                                                                                } = i;
                                                                                                if ("legacy" === n) {
                                                                                                    switch (t) {
                                                                                                        case "solana:testnet":
                                                                                                            t = "testnet";
                                                                                                            break;
                                                                                                        case "solana:devnet":
                                                                                                            t = "devnet";
                                                                                                            break;
                                                                                                        case "solana:mainnet":
                                                                                                            t = "mainnet-beta";
                                                                                                            break;
                                                                                                        default:
                                                                                                            t = i.cluster
                                                                                                    }
                                                                                                    i.cluster = t
                                                                                                } else {
                                                                                                    switch (t) {
                                                                                                        case "testnet":
                                                                                                        case "devnet":
                                                                                                            t = `solana:${t}`;
                                                                                                            break;
                                                                                                        case "mainnet-beta":
                                                                                                            t = "solana:mainnet"
                                                                                                    }
                                                                                                    i.chain = t
                                                                                                }
                                                                                            }
                                                                                        case "reauthorize":
                                                                                            {
                                                                                                let {
                                                                                                    auth_token: t,
                                                                                                    identity: e
                                                                                                } = i;t && ("legacy" === n ? (r = "reauthorize", i = {
                                                                                                    auth_token: t,
                                                                                                    identity: e
                                                                                                }) : r = "authorize")
                                                                                            }
                                                                                    }
                                                                                    return {
                                                                                        method: r,
                                                                                        params: i
                                                                                    }
                                                                                }(e, t, r), a = yield s(n, i);
                                                                                return "authorize" === n && i.sign_in_payload && !a.sign_in_result && (a.sign_in_result = yield function(t, e, n) {
                                                                                        var i;
                                                                                        return k(this, void 0, void 0, function*() {
                                                                                            var r, s;
                                                                                            let a = null !== (i = t.domain) && void 0 !== i ? i : window.location.host,
                                                                                                o = e.accounts[0].address,
                                                                                                l = (r = Object.assign(Object.assign({}, t), {
                                                                                                    domain: a,
                                                                                                    address: o
                                                                                                }), s = function(t) {
                                                                                                    let e = `${t.domain} wants you to sign in with your Solana account:
`;
                                                                                                    e += `${t.address}`, t.statement && (e += `

${t.statement}`);
                                                                                                    let n = [];
                                                                                                    if (t.uri && n.push(`URI: ${t.uri}`), t.version && n.push(`Version: ${t.version}`), t.chainId && n.push(`Chain ID: ${t.chainId}`), t.nonce && n.push(`Nonce: ${t.nonce}`), t.issuedAt && n.push(`Issued At: ${t.issuedAt}`), t.expirationTime && n.push(`Expiration Time: ${t.expirationTime}`), t.notBefore && n.push(`Not Before: ${t.notBefore}`), t.requestId && n.push(`Request ID: ${t.requestId}`), t.resources)
                                                                                                        for (let e of (n.push("Resources:"), t.resources)) n.push(`- ${e}`);
                                                                                                    return n.length && (e += `

${n.join("\n")}`), e
                                                                                                }(r), window.btoa(s)),
                                                                                                u = yield n("sign_messages", {
                                                                                                    addresses: [o],
                                                                                                    payloads: [l]
                                                                                                });
                                                                                            return {
                                                                                                address: o,
                                                                                                signed_message: l,
                                                                                                signature: u.signed_payloads[0].slice(l.length)
                                                                                            }
                                                                                        })
                                                                                    }(i.sign_in_payload, a, s)),
                                                                                    function(t, e, n) {
                                                                                        if ("getCapabilities" === t) switch (n) {
                                                                                            case "legacy":
                                                                                                {
                                                                                                    let t = ["solana:signTransactions"];
                                                                                                    return !0 === e.supports_clone_authorization && t.push(R),
                                                                                                    Object.assign(Object.assign({}, e), {
                                                                                                        features: t
                                                                                                    })
                                                                                                }
                                                                                            case "v1":
                                                                                                return Object.assign(Object.assign({}, e), {
                                                                                                    supports_sign_and_send_transactions: !0,
                                                                                                    supports_clone_authorization: e.features.includes(R)
                                                                                                })
                                                                                        }
                                                                                        return e
                                                                                    }(e, a, r)
                                                                            })
                                                                        }), t[e]),
                                                                        defineProperty: () => !1,
                                                                        deleteProperty: () => !1
                                                                    }));
                                                                    try {
                                                                        e((yield t(p)))
                                                                    } catch (t) {
                                                                        c(t)
                                                                    } finally {
                                                                        d(), h.close()
                                                                    }
                                                                }
                                                        }
                                                    }),
                                                    M = () => {
                                                        d && d(), u = {
                                                            __type: "connecting",
                                                            associationKeypair: i
                                                        }, void 0 === n && (n = Date.now()), (h = new WebSocket(s, ["com.solana.mobilewalletadapter.v1"])).addEventListener("open", p), h.addEventListener("close", y), h.addEventListener("error", m), h.addEventListener("message", w), d = () => {
                                                            window.clearTimeout(g), h.removeEventListener("open", p), h.removeEventListener("close", y), h.removeEventListener("error", m), h.removeEventListener("message", w)
                                                        }
                                                    };
                                                M()
                                            })
                                        })
                                    }(e => t(new Proxy({}, {
                                        get(t, n) {
                                            if (null == t[n]) switch (n) {
                                                case "signAndSendTransactions":
                                                    t[n] = function(t) {
                                                        var {
                                                            minContextSlot: n,
                                                            commitment: i,
                                                            skipPreflight: r,
                                                            maxRetries: s,
                                                            waitForCommitmentToSendNextTransaction: a,
                                                            transactions: o
                                                        } = t, l = V(t, ["minContextSlot", "commitment", "skipPreflight", "maxRetries", "waitForCommitmentToSendNextTransaction", "transactions"]);
                                                        return F(this, void 0, void 0, function*() {
                                                            let t = o.map(K),
                                                                u = {
                                                                    min_context_slot: n,
                                                                    commitment: i,
                                                                    skip_preflight: r,
                                                                    max_retries: s,
                                                                    wait_for_commitment_to_send_next_transaction: a
                                                                },
                                                                {
                                                                    signatures: c
                                                                } = yield e.signAndSendTransactions(Object.assign(Object.assign(Object.assign({}, l), Object.values(u).some(t => null != t) ? {
                                                                    options: u
                                                                } : null), {
                                                                    payloads: t
                                                                }));
                                                            return c.map(H).map(B.encode)
                                                        })
                                                    };
                                                    break;
                                                case "signMessages":
                                                    t[n] = function(t) {
                                                        var {
                                                            payloads: n
                                                        } = t, i = V(t, ["payloads"]);
                                                        return F(this, void 0, void 0, function*() {
                                                            let t = n.map(G),
                                                                {
                                                                    signed_payloads: r
                                                                } = yield e.signMessages(Object.assign(Object.assign({}, i), {
                                                                    payloads: t
                                                                }));
                                                            return r.map(H)
                                                        })
                                                    };
                                                    break;
                                                case "signTransactions":
                                                    t[n] = function(t) {
                                                        var {
                                                            transactions: n
                                                        } = t, i = V(t, ["transactions"]);
                                                        return F(this, void 0, void 0, function*() {
                                                            let t = n.map(K),
                                                                {
                                                                    signed_payloads: r
                                                                } = yield e.signTransactions(Object.assign(Object.assign({}, i), {
                                                                    payloads: t
                                                                }));
                                                            return r.map(H).map(q)
                                                        })
                                                    };
                                                    break;
                                                default:
                                                    t[n] = e[n]
                                            }
                                            return t[n]
                                        },
                                        defineProperty: () => !1,
                                        deleteProperty: () => !1
                                    })), e)
                                })
                            }(t, n ? {
                                baseUri: n
                            } : void 0)
                        } catch (t) {
                            throw this._connectionGeneration !== i && (yield new Promise(() => {})), t instanceof Error && "SolanaMobileWalletAdapterError" === t.name && "ERROR_WALLET_NOT_FOUND" === t.code && (yield this._onWalletNotFound(this)), t
                        }
                    })
                }
                assertIsAuthorized() {
                    if (!this._authorizationResult || !this._selectedAddress) throw new E.oS;
                    return {
                        authToken: this._authorizationResult.auth_token,
                        selectedAddress: this._selectedAddress
                    }
                }
                performSignTransactions(t) {
                    return J(this, void 0, void 0, function*() {
                        let {
                            authToken: e
                        } = this.assertIsAuthorized();
                        try {
                            return yield this.transact(n => J(this, void 0, void 0, function*() {
                                return yield this.performReauthorization(n, e), yield n.signTransactions({
                                    transactions: t
                                })
                            }))
                        } catch (t) {
                            throw new E.PY(null == t ? void 0 : t.message, t)
                        }
                    })
                }
                sendTransaction(t, e, n) {
                    return J(this, void 0, void 0, function*() {
                        return yield this.runWithGuard(() => J(this, void 0, void 0, function*() {
                            let {
                                authToken: i
                            } = this.assertIsAuthorized(), r = null == n ? void 0 : n.minContextSlot;
                            try {
                                return yield this.transact(s => J(this, void 0, void 0, function*() {
                                    function a() {
                                        let t, i;
                                        switch (e.commitment) {
                                            case "confirmed":
                                            case "finalized":
                                            case "processed":
                                                t = e.commitment;
                                                break;
                                            default:
                                                t = "finalized"
                                        }
                                        switch (null == n ? void 0 : n.preflightCommitment) {
                                            case "confirmed":
                                            case "finalized":
                                            case "processed":
                                                i = n.preflightCommitment;
                                                break;
                                            case void 0:
                                                i = t;
                                                break;
                                            default:
                                                i = "finalized"
                                        }
                                        let r = "finalized" === i ? 2 : "confirmed" === i ? 1 : 0,
                                            s = "finalized" === t ? 2 : "confirmed" === t ? 1 : 0;
                                        return r < s ? i : t
                                    }
                                    let [o, l, u] = yield Promise.all([s.getCapabilities(), this.performReauthorization(s, i), te(t) ? null : J(this, void 0, void 0, function*() {
                                        var n;
                                        if (t.feePayer || (t.feePayer = null !== (n = this.publicKey) && void 0 !== n ? n : void 0), null == t.recentBlockhash) {
                                            let {
                                                blockhash: n
                                            } = yield e.getLatestBlockhash({
                                                commitment: a()
                                            });
                                            t.recentBlockhash = n
                                        }
                                    })]);
                                    if (o.supports_sign_and_send_transactions) return (yield s.signAndSendTransactions({
                                        minContextSlot: r,
                                        transactions: [t]
                                    }))[0]; {
                                        let [i] = yield s.signTransactions({
                                            transactions: [t]
                                        });
                                        if (te(i)) return yield e.sendTransaction(i); {
                                            let t = i.serialize();
                                            return yield e.sendRawTransaction(t, Object.assign(Object.assign({}, n), {
                                                preflightCommitment: a()
                                            }))
                                        }
                                    }
                                }))
                            } catch (t) {
                                throw new E.IW(null == t ? void 0 : t.message, t)
                            }
                        }))
                    })
                }
                signTransaction(t) {
                    return J(this, void 0, void 0, function*() {
                        return yield this.runWithGuard(() => J(this, void 0, void 0, function*() {
                            let [e] = yield this.performSignTransactions([t]);
                            return e
                        }))
                    })
                }
                signAllTransactions(t) {
                    return J(this, void 0, void 0, function*() {
                        return yield this.runWithGuard(() => J(this, void 0, void 0, function*() {
                            return yield this.performSignTransactions(t)
                        }))
                    })
                }
                signMessage(t) {
                    return J(this, void 0, void 0, function*() {
                        return yield this.runWithGuard(() => J(this, void 0, void 0, function*() {
                            let {
                                authToken: e,
                                selectedAddress: n
                            } = this.assertIsAuthorized();
                            try {
                                return yield this.transact(i => J(this, void 0, void 0, function*() {
                                    yield this.performReauthorization(i, e);
                                    let [r] = yield i.signMessages({
                                        addresses: [n],
                                        payloads: [t]
                                    });
                                    return r.slice(-64)
                                }))
                            } catch (t) {
                                throw new E.fk(null == t ? void 0 : t.message, t)
                            }
                        }))
                    })
                }
                signIn(t) {
                    return J(this, void 0, void 0, function*() {
                        return yield this.runWithGuard(() => J(this, void 0, void 0, function*() {
                            var e, n;
                            if (this._readyState !== O.i1.Installed && this._readyState !== O.i1.Loadable) throw new E.OZ;
                            this._connecting = !0;
                            try {
                                let i = yield this.performAuthorization(Object.assign(Object.assign({}, t), {
                                    domain: null !== (e = null == t ? void 0 : t.domain) && void 0 !== e ? e : window.location.host
                                }));
                                if (!i.sign_in_result) throw Error("Sign in failed, no sign in result returned by wallet");
                                let r = i.sign_in_result.address;
                                return {
                                    account: Object.assign(Object.assign({}, null !== (n = i.accounts.find(t => t.address == r)) && void 0 !== n ? n : {
                                        address: r
                                    }), {
                                        publicKey: X(r)
                                    }),
                                    signedMessage: X(i.sign_in_result.signed_message),
                                    signature: X(i.sign_in_result.signature)
                                }
                            } catch (t) {
                                throw new E.$w(t instanceof Error && t.message || "Unknown error", t)
                            } finally {
                                this._connecting = !1
                            }
                        }))
                    })
                }
            }
            let ti = "SolanaMobileWalletAdapterDefaultAuthorizationCache";

            function tr(t) {
                return J(this, void 0, void 0, function*() {
                    "undefined" != typeof window && window.location.assign(t.url)
                })
            }
            var ts = n(77684),
                ta = n(10282),
                to = n(59186),
                tl = n(83747);
            let tu = function(t) {
                return to.V in t.features && tl.k in t.features && (ts.G in t.features || ta.R in t.features)
            };
            var tc = n(43887),
                th = n(34402);
            let td = "solana:signIn";
            var tg = n(88746);

            function tf(t) {
                switch (t) {
                    case "processed":
                    case "confirmed":
                    case "finalized":
                    case void 0:
                        return t;
                    case "recent":
                        return "processed";
                    case "single":
                    case "singleGossip":
                        return "confirmed";
                    case "max":
                    case "root":
                        return "finalized";
                    default:
                        return
                }
            }
            var tp = n(3005);
            new WeakMap, new WeakMap, new WeakMap, new WeakMap, new WeakMap, new WeakMap;
            var ty = function(t, e, n, i, r) {
                    if ("m" === i) throw TypeError("Private method is not writable");
                    if ("a" === i && !r) throw TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof e ? t !== e || !r : !e.has(t)) throw TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === i ? r.call(t, n) : r ? r.value = n : e.set(t, n), n
                },
                tm = function(t, e, n, i) {
                    if ("a" === n && !i) throw TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof e ? t !== e || !i : !e.has(t)) throw TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === n ? i : "a" === n ? i.call(t) : i ? i.value : e.get(t)
                };
            class tw extends O.mI {
                constructor({
                    wallet: t
                }) {
                    super(), o.add(this), l.set(this, void 0), u.set(this, void 0), c.set(this, void 0), h.set(this, void 0), d.set(this, void 0), g.set(this, void 0), f.set(this, void 0), p.set(this, "undefined" == typeof window || "undefined" == typeof document ? O.i1.Unsupported : O.i1.Installed), N.set(this, t => {
                        if ("accounts" in t) {
                            let t = tm(this, f, "f").accounts[0];
                            tm(this, l, "f") && !tm(this, h, "f") && t !== tm(this, l, "f") && (t ? tm(this, o, "m", m).call(this, t) : (this.emit("error", new E.at), tm(this, o, "m", w).call(this)))
                        }
                        "features" in t && tm(this, o, "m", M).call(this)
                    }), ty(this, f, t, "f"), ty(this, l, null, "f"), ty(this, u, null, "f"), ty(this, c, !1, "f"), ty(this, h, !1, "f"), ty(this, d, tm(this, f, "f").features[tl.k].on("change", tm(this, N, "f")), "f"), tm(this, o, "m", M).call(this)
                }
                get name() {
                    return tm(this, f, "f").name
                }
                get url() {
                    return "https://github.com/solana-labs/wallet-standard"
                }
                get icon() {
                    return tm(this, f, "f").icon
                }
                get readyState() {
                    return tm(this, p, "f")
                }
                get publicKey() {
                    return tm(this, u, "f")
                }
                get connecting() {
                    return tm(this, c, "f")
                }
                get supportedTransactionVersions() {
                    return tm(this, g, "f")
                }
                get wallet() {
                    return tm(this, f, "f")
                }
                get standard() {
                    return !0
                }
                destroy() {
                    ty(this, l, null, "f"), ty(this, u, null, "f"), ty(this, c, !1, "f"), ty(this, h, !1, "f");
                    let t = tm(this, d, "f");
                    t && (ty(this, d, null, "f"), t())
                }
                async autoConnect() {
                    return tm(this, o, "m", y).call(this, {
                        silent: !0
                    })
                }
                async connect() {
                    return tm(this, o, "m", y).call(this)
                }
                async disconnect() {
                    if (tp.R in tm(this, f, "f").features) try {
                        ty(this, h, !0, "f"), await tm(this, f, "f").features[tp.R].disconnect()
                    } catch (t) {
                        this.emit("error", new E.UG(t ? .message, t))
                    } finally {
                        ty(this, h, !1, "f")
                    }
                    tm(this, o, "m", w).call(this)
                }
                async sendTransaction(t, e, n = {}) {
                    try {
                        var i;
                        let r;
                        let s = tm(this, l, "f");
                        if (!s) throw new E.oS;
                        if (ts.G in tm(this, f, "f").features) {
                            if (s.features.includes(ts.G)) r = ts.G;
                            else if (ta.R in tm(this, f, "f").features && s.features.includes(ta.R)) r = ta.R;
                            else throw new E.cO
                        } else if (ta.R in tm(this, f, "f").features) {
                            if (!s.features.includes(ta.R)) throw new E.cO;
                            r = ta.R
                        } else throw new E.p6;
                        let a = (i = e.rpcEndpoint).includes("https://api.mainnet-beta.solana.com") ? tg.aI : /\bdevnet\b/i.test(i) ? tg.BR : /\btestnet\b/i.test(i) ? tg.gv : /\blocalhost\b/i.test(i) || /\b127\.0\.0\.1\b/.test(i) ? tg.l1 : tg.aI;
                        if (!s.chains.includes(a)) throw new E.IW;
                        try {
                            let i;
                            let {
                                signers: o,
                                ...l
                            } = n;
                            if ((0, tc.W)(t) ? (o ? .length && t.sign(o), i = t.serialize()) : (t = await this.prepareTransaction(t, e, l), o ? .length && t.partialSign(...o), i = new Uint8Array(t.serialize({
                                    requireAllSignatures: !1,
                                    verifySignatures: !1
                                }))), r === ts.G) {
                                let [t] = await tm(this, f, "f").features[ts.G].signAndSendTransaction({
                                    account: s,
                                    chain: a,
                                    transaction: i,
                                    options: {
                                        preflightCommitment: tf(l.preflightCommitment || e.commitment),
                                        skipPreflight: l.skipPreflight,
                                        maxRetries: l.maxRetries,
                                        minContextSlot: l.minContextSlot
                                    }
                                });
                                return B.encode(t.signature)
                            } {
                                let [t] = await tm(this, f, "f").features[ta.R].signTransaction({
                                    account: s,
                                    chain: a,
                                    transaction: i,
                                    options: {
                                        preflightCommitment: tf(l.preflightCommitment || e.commitment),
                                        minContextSlot: l.minContextSlot
                                    }
                                });
                                return await e.sendRawTransaction(t.signedTransaction, { ...l,
                                    preflightCommitment: tf(l.preflightCommitment || e.commitment)
                                })
                            }
                        } catch (t) {
                            if (t instanceof E.lj) throw t;
                            throw new E.IW(t ? .message, t)
                        }
                    } catch (t) {
                        throw this.emit("error", t), t
                    }
                }
            }
            l = new WeakMap, u = new WeakMap, c = new WeakMap, h = new WeakMap, d = new WeakMap, g = new WeakMap, f = new WeakMap, p = new WeakMap, N = new WeakMap, o = new WeakSet, y = async function(t) {
                try {
                    if (this.connected || this.connecting) return;
                    if (tm(this, p, "f") !== O.i1.Installed) throw new E.OZ;
                    if (ty(this, c, !0, "f"), !tm(this, f, "f").accounts.length) try {
                        await tm(this, f, "f").features[to.V].connect(t)
                    } catch (t) {
                        throw new E.$w(t ? .message, t)
                    }
                    let e = tm(this, f, "f").accounts[0];
                    if (!e) throw new E.cO;
                    tm(this, o, "m", m).call(this, e)
                } catch (t) {
                    throw this.emit("error", t), t
                } finally {
                    ty(this, c, !1, "f")
                }
            }, m = function(t) {
                let e;
                try {
                    e = new T.PublicKey(t.address)
                } catch (t) {
                    throw new E.Nx(t ? .message, t)
                }
                ty(this, l, t, "f"), ty(this, u, e, "f"), tm(this, o, "m", M).call(this), this.emit("connect", e)
            }, w = function() {
                ty(this, l, null, "f"), ty(this, u, null, "f"), tm(this, o, "m", M).call(this), this.emit("disconnect")
            }, M = function() {
                let t = ts.G in tm(this, f, "f").features ? tm(this, f, "f").features[ts.G].supportedTransactionVersions : tm(this, f, "f").features[ta.R].supportedTransactionVersions;
                ty(this, g, ! function(t, e) {
                    if (t === e) return !0;
                    let n = t.length;
                    if (n !== e.length) return !1;
                    for (let i = 0; i < n; i++)
                        if (t[i] !== e[i]) return !1;
                    return !0
                }(t, ["legacy"]) ? new Set(t) : null, "f"), ta.R in tm(this, f, "f").features && tm(this, l, "f") ? .features.includes(ta.R) ? (this.signTransaction = tm(this, o, "m", v), this.signAllTransactions = tm(this, o, "m", L)) : (delete this.signTransaction, delete this.signAllTransactions), th.g in tm(this, f, "f").features && tm(this, l, "f") ? .features.includes(th.g) ? this.signMessage = tm(this, o, "m", j) : delete this.signMessage, td in tm(this, f, "f").features ? this.signIn = tm(this, o, "m", I) : delete this.signIn
            }, v = async function(t) {
                try {
                    let e = tm(this, l, "f");
                    if (!e) throw new E.oS;
                    if (!(ta.R in tm(this, f, "f").features)) throw new E.p6;
                    if (!e.features.includes(ta.R)) throw new E.cO;
                    try {
                        let n = (await tm(this, f, "f").features[ta.R].signTransaction({
                            account: e,
                            transaction: (0, tc.W)(t) ? t.serialize() : new Uint8Array(t.serialize({
                                requireAllSignatures: !1,
                                verifySignatures: !1
                            }))
                        }))[0].signedTransaction;
                        return (0, tc.W)(t) ? T.VersionedTransaction.deserialize(n) : T.Transaction.from(n)
                    } catch (t) {
                        if (t instanceof E.lj) throw t;
                        throw new E.PY(t ? .message, t)
                    }
                } catch (t) {
                    throw this.emit("error", t), t
                }
            }, L = async function(t) {
                try {
                    let e = tm(this, l, "f");
                    if (!e) throw new E.oS;
                    if (!(ta.R in tm(this, f, "f").features)) throw new E.p6;
                    if (!e.features.includes(ta.R)) throw new E.cO;
                    try {
                        let n = await tm(this, f, "f").features[ta.R].signTransaction(...t.map(t => ({
                            account: e,
                            transaction: (0, tc.W)(t) ? t.serialize() : new Uint8Array(t.serialize({
                                requireAllSignatures: !1,
                                verifySignatures: !1
                            }))
                        })));
                        return t.map((t, e) => {
                            let i = n[e].signedTransaction;
                            return (0, tc.W)(t) ? T.VersionedTransaction.deserialize(i) : T.Transaction.from(i)
                        })
                    } catch (t) {
                        throw new E.PY(t ? .message, t)
                    }
                } catch (t) {
                    throw this.emit("error", t), t
                }
            }, j = async function(t) {
                try {
                    let e = tm(this, l, "f");
                    if (!e) throw new E.oS;
                    if (!(th.g in tm(this, f, "f").features)) throw new E.p6;
                    if (!e.features.includes(th.g)) throw new E.cO;
                    try {
                        return (await tm(this, f, "f").features[th.g].signMessage({
                            account: e,
                            message: t
                        }))[0].signature
                    } catch (t) {
                        throw new E.fk(t ? .message, t)
                    }
                } catch (t) {
                    throw this.emit("error", t), t
                }
            }, I = async function(t = {}) {
                try {
                    let e;
                    if (!(td in tm(this, f, "f").features)) throw new E.p6;
                    try {
                        [e] = await tm(this, f, "f").features[td].signIn(t)
                    } catch (t) {
                        throw new E.bD(t ? .message, t)
                    }
                    if (!e) throw new E.bD;
                    return tm(this, o, "m", m).call(this, e.account), e
                } catch (t) {
                    throw this.emit("error", t), t
                }
            };
            var tM = function(t, e, n, i, r) {
                    if ("m" === i) throw TypeError("Private method is not writable");
                    if ("a" === i && !r) throw TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof e ? t !== e || !r : !e.has(t)) throw TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === i ? r.call(t, n) : r ? r.value = n : e.set(t, n), n
                },
                tN = function(t, e, n, i) {
                    if ("a" === n && !i) throw TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof e ? t !== e || !i : !e.has(t)) throw TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === n ? i : "a" === n ? i.call(t) : i ? i.value : e.get(t)
                };
            let tv = new Set,
                tL = {};

            function tj(...t) {
                return (t = t.filter(t => !tv.has(t))).length ? (t.forEach(t => tv.add(t)), tL.register ? .forEach(e => tS(() => e(...t))), function() {
                    t.forEach(t => tv.delete(t)), tL.unregister ? .forEach(e => tS(() => e(...t)))
                }) : () => {}
            }

            function tI() {
                return [...tv]
            }

            function tb(t, e) {
                return tL[t] ? .push(e) || (tL[t] = [e]),
                    function() {
                        tL[t] = tL[t] ? .filter(t => e !== t)
                    }
            }

            function tS(t) {
                try {
                    t()
                } catch (t) {
                    console.error(t)
                }
            }
            class tD extends Event {
                constructor(t) {
                    super("wallet-standard:app-ready", {
                        bubbles: !1,
                        cancelable: !1,
                        composed: !1
                    }), b.set(this, void 0), tM(this, b, t, "f")
                }
                get detail() {
                    return tN(this, b, "f")
                }
                get type() {
                    return "wallet-standard:app-ready"
                }
                preventDefault() {
                    throw Error("preventDefault cannot be called")
                }
                stopImmediatePropagation() {
                    throw Error("stopImmediatePropagation cannot be called")
                }
                stopPropagation() {
                    throw Error("stopPropagation cannot be called")
                }
            }
            b = new WeakMap;
            var tO = n(2265);

            function tE(t) {
                let e = (0, tO.useRef)();
                return e.current || (e.current = {
                    value: t()
                }), e.current.value
            }

            function tT(t) {
                return t.filter(tu).map(t => new tw({
                    wallet: t
                }))
            }(a = S || (S = {}))[a.DESKTOP_WEB = 0] = "DESKTOP_WEB", a[a.MOBILE_WEB = 1] = "MOBILE_WEB";
            var tx = n(13816);
            class tA extends E.lj {
                constructor() {
                    super(...arguments), this.name = "WalletNotSelectedError"
                }
            }
            var tC = n(15408);

            function tz({
                children: t,
                wallets: e,
                adapter: n,
                isUnloadingRef: i,
                onAutoConnectRequest: r,
                onConnectError: s,
                onError: a,
                onSelectWallet: o
            }) {
                let l = (0, tO.useRef)(!1),
                    [u, c] = (0, tO.useState)(!1),
                    h = (0, tO.useRef)(!1),
                    [d, g] = (0, tO.useState)(!1),
                    [f, p] = (0, tO.useState)(() => n ? .publicKey ? ? null),
                    [y, m] = (0, tO.useState)(() => n ? .connected ? ? !1),
                    w = (0, tO.useRef)(a);
                (0, tO.useEffect)(() => (w.current = a, () => {
                    w.current = void 0
                }), [a]);
                let M = (0, tO.useRef)((t, e) => (!i.current && (w.current ? w.current(t, e) : (console.error(t, e), t instanceof E.OZ && "undefined" != typeof window && e && window.open(e.url, "_blank"))), t)),
                    [N, v] = (0, tO.useState)(() => e.map(t => ({
                        adapter: t,
                        readyState: t.readyState
                    })).filter(({
                        readyState: t
                    }) => t !== O.i1.Unsupported));
                (0, tO.useEffect)(() => {
                    function t(t) {
                        v(e => {
                            let n = e.findIndex(({
                                adapter: t
                            }) => t === this);
                            if (-1 === n) return e;
                            let {
                                adapter: i
                            } = e[n];
                            return [...e.slice(0, n), {
                                adapter: i,
                                readyState: t
                            }, ...e.slice(n + 1)].filter(({
                                readyState: t
                            }) => t !== O.i1.Unsupported)
                        })
                    }
                    return v(t => e.map((e, n) => {
                        let i = t[n];
                        return i && i.adapter === e && i.readyState === e.readyState ? i : {
                            adapter: e,
                            readyState: e.readyState
                        }
                    }).filter(({
                        readyState: t
                    }) => t !== O.i1.Unsupported)), e.forEach(e => e.on("readyStateChange", t, e)), () => {
                        e.forEach(e => e.off("readyStateChange", t, e))
                    }
                }, [n, e]);
                let L = (0, tO.useMemo)(() => N.find(t => t.adapter === n) ? ? null, [n, N]);
                (0, tO.useEffect)(() => {
                    if (!n) return;
                    let t = t => {
                            p(t), l.current = !1, c(!1), m(!0), h.current = !1, g(!1)
                        },
                        e = () => {
                            i.current || (p(null), l.current = !1, c(!1), m(!1), h.current = !1, g(!1))
                        },
                        r = t => {
                            M.current(t, n)
                        };
                    return n.on("connect", t), n.on("disconnect", e), n.on("error", r), () => {
                        n.off("connect", t), n.off("disconnect", e), n.off("error", r), e()
                    }
                }, [n, i]);
                let j = (0, tO.useRef)(!1);
                (0, tO.useEffect)(() => () => {
                    j.current = !1
                }, [n]), (0, tO.useEffect)(() => {
                    j.current || l.current || y || !r || L ? .readyState !== O.i1.Installed && L ? .readyState !== O.i1.Loadable || (l.current = !0, c(!0), j.current = !0, async function() {
                        try {
                            await r()
                        } catch {
                            s()
                        } finally {
                            c(!1), l.current = !1
                        }
                    }())
                }, [y, r, s, L]);
                let I = (0, tO.useCallback)(async (t, e, i) => {
                        if (!n) throw M.current(new tA);
                        if (!y) throw M.current(new E.oS, n);
                        return await n.sendTransaction(t, e, i)
                    }, [n, y]),
                    b = (0, tO.useMemo)(() => n && "signTransaction" in n ? async t => {
                        if (!y) throw M.current(new E.oS, n);
                        return await n.signTransaction(t)
                    } : void 0, [n, y]),
                    S = (0, tO.useMemo)(() => n && "signAllTransactions" in n ? async t => {
                        if (!y) throw M.current(new E.oS, n);
                        return await n.signAllTransactions(t)
                    } : void 0, [n, y]),
                    D = (0, tO.useMemo)(() => n && "signMessage" in n ? async t => {
                        if (!y) throw M.current(new E.oS, n);
                        return await n.signMessage(t)
                    } : void 0, [n, y]),
                    T = (0, tO.useMemo)(() => n && "signIn" in n ? async t => await n.signIn(t) : void 0, [n]),
                    x = (0, tO.useCallback)(async () => {
                        if (l.current || h.current || L ? .adapter.connected) return;
                        if (!L) throw M.current(new tA);
                        let {
                            adapter: t,
                            readyState: e
                        } = L;
                        if (!(e === O.i1.Installed || e === O.i1.Loadable)) throw M.current(new E.OZ, t);
                        l.current = !0, c(!0);
                        try {
                            await t.connect()
                        } catch (t) {
                            throw s(), t
                        } finally {
                            c(!1), l.current = !1
                        }
                    }, [s, L]),
                    A = (0, tO.useCallback)(async () => {
                        if (!h.current && n) {
                            h.current = !0, g(!0);
                            try {
                                await n.disconnect()
                            } finally {
                                g(!1), h.current = !1
                            }
                        }
                    }, [n]);
                return tO.createElement(tC.z.Provider, {
                    value: {
                        autoConnect: !!r,
                        wallets: N,
                        wallet: L,
                        publicKey: f,
                        connected: y,
                        connecting: u,
                        disconnecting: d,
                        select: o,
                        connect: x,
                        disconnect: A,
                        sendTransaction: I,
                        signTransaction: b,
                        signAllTransactions: S,
                        signMessage: D,
                        signIn: T
                    }
                }, t)
            }

            function tk(t) {
                return function({
                    adapters: t,
                    userAgentString: e
                }) {
                    return t.some(t => t.name !== tt && t.readyState === O.i1.Installed) ? S.DESKTOP_WEB : e && /android/i.test(e) && !/(WebView|Version\/.+(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+)|; wv\).+(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+))/i.test(e) ? S.MOBILE_WEB : S.DESKTOP_WEB
                }({
                    adapters: t,
                    userAgentString: (void 0 === r && (r = globalThis.navigator ? .userAgent ? ? null), r)
                }) === S.MOBILE_WEB
            }

            function tR({
                children: t,
                wallets: e,
                autoConnect: n,
                localStorageKey: i = "walletName",
                onError: r
            }) {
                let {
                    connection: a
                } = (0, tx.R)(), o = function(t) {
                    let e = tE(() => new Set),
                        {
                            get: n,
                            on: i
                        } = tE(() => (function() {
                            if (s || (s = function() {
                                    if (s || (s = Object.freeze({
                                            register: tj,
                                            get: tI,
                                            on: tb
                                        }), "undefined" == typeof window)) return s;
                                    let t = Object.freeze({
                                        register: tj
                                    });
                                    try {
                                        window.addEventListener("wallet-standard:register-wallet", ({
                                            detail: e
                                        }) => e(t))
                                    } catch (t) {
                                        console.error("wallet-standard:register-wallet event listener could not be added\n", t)
                                    }
                                    try {
                                        window.dispatchEvent(new tD(t))
                                    } catch (t) {
                                        console.error("wallet-standard:app-ready event could not be dispatched\n", t)
                                    }
                                    return s
                                }(), "undefined" == typeof window)) return s;
                            let t = window.navigator.wallets || [];
                            if (!Array.isArray(t)) return console.error("window.navigator.wallets is not an array"), s;
                            let {
                                register: e
                            } = s, n = (...t) => t.forEach(t => tS(() => t({
                                register: e
                            })));
                            try {
                                Object.defineProperty(window.navigator, "wallets", {
                                    value: Object.freeze({
                                        push: n
                                    })
                                })
                            } catch (t) {
                                return console.error("window.navigator.wallets could not be set"), s
                            }
                            return n(...t), s
                        })()),
                        [r, a] = (0, tO.useState)(() => tT(n()));
                    (0, tO.useEffect)(() => {
                        let t = [i("register", (...t) => a(e => [...e, ...tT(t)])), i("unregister", (...t) => a(e => e.filter(e => t.some(t => t === e.wallet))))];
                        return () => t.forEach(t => t())
                    }, [i]);
                    let o = function(t) {
                        let e = (0, tO.useRef)();
                        return (0, tO.useEffect)(() => {
                            e.current = t
                        }), e.current
                    }(r);
                    return (0, tO.useEffect)(() => {
                        if (!o) return;
                        let t = new Set(r);
                        new Set(o.filter(e => !t.has(e))).forEach(t => t.destroy())
                    }, [o, r]), (0, tO.useEffect)(() => () => r.forEach(t => t.destroy()), []), (0, tO.useMemo)(() => [...r, ...t.filter(({
                        name: t
                    }) => !r.some(e => e.name === t) || (e.has(t) || (e.add(t), console.warn(`${t} was registered as a Standard Wallet. The Wallet Adapter for ${t} can be removed from your app.`)), !1))], [r, t, e])
                }(e), l = (0, tO.useMemo)(() => {
                    var t;
                    if (!tk(o)) return null;
                    let e = o.find(t => t.name === tt);
                    return e || new tn({
                        addressSelector: {
                            select(t) {
                                return J(this, void 0, void 0, function*() {
                                    return t[0]
                                })
                            }
                        },
                        appIdentity: {
                            uri: function() {
                                let t = globalThis.location;
                                if (t) return `${t.protocol}//${t.host}`
                            }()
                        },
                        authorizationResultCache: function() {
                            let t;
                            try {
                                t = window.localStorage
                            } catch (t) {}
                            return {
                                clear() {
                                    return J(this, void 0, void 0, function*() {
                                        if (t) try {
                                            t.removeItem(ti)
                                        } catch (t) {}
                                    })
                                },
                                get() {
                                    return J(this, void 0, void 0, function*() {
                                        if (t) try {
                                            return JSON.parse(t.getItem(ti)) || void 0
                                        } catch (t) {}
                                    })
                                },
                                set(e) {
                                    return J(this, void 0, void 0, function*() {
                                        if (t) try {
                                            t.setItem(ti, JSON.stringify(e))
                                        } catch (t) {}
                                    })
                                }
                            }
                        }(),
                        cluster: (t = a ? .rpcEndpoint) ? /devnet/i.test(t) ? "devnet" : /testnet/i.test(t) ? "testnet" : "mainnet-beta" : "mainnet-beta",
                        onWalletNotFound: tr
                    })
                }, [o, a ? .rpcEndpoint]), u = (0, tO.useMemo)(() => null == l || -1 !== o.indexOf(l) ? o : [l, ...o], [o, l]), [c, h] = function(t, e) {
                    let n = (0, tO.useState)(() => {
                            try {
                                let e = localStorage.getItem(t);
                                if (e) return JSON.parse(e)
                            } catch (t) {
                                "undefined" != typeof window && console.error(t)
                            }
                            return e
                        }),
                        i = n[0],
                        r = (0, tO.useRef)(!0);
                    return (0, tO.useEffect)(() => {
                        if (r.current) {
                            r.current = !1;
                            return
                        }
                        try {
                            null === i ? localStorage.removeItem(t) : localStorage.setItem(t, JSON.stringify(i))
                        } catch (t) {
                            "undefined" != typeof window && console.error(t)
                        }
                    }, [i, t]), n
                }(i, tk(o) ? tt : null), d = (0, tO.useMemo)(() => u.find(t => t.name === c) ? ? null, [u, c]), g = (0, tO.useCallback)(t => {
                    c !== t && (d && d.name !== tt && d.disconnect(), h(t))
                }, [d, h, c]);
                (0, tO.useEffect)(() => {
                    if (d) return d.on("disconnect", t), () => {
                        d.off("disconnect", t)
                    };

                    function t() {
                        !y.current && (c === tt && tk(o) || h(null))
                    }
                }, [d, o, h, c]);
                let f = (0, tO.useRef)(!1),
                    p = (0, tO.useMemo)(() => {
                        if (n && d) return async () => {
                            (!0 === n || await n(d)) && (f.current ? await d.connect() : await d.autoConnect())
                        }
                    }, [n, d]),
                    y = (0, tO.useRef)(!1);
                (0, tO.useEffect)(() => {
                    if (c === tt && tk(o)) {
                        y.current = !1;
                        return
                    }

                    function t() {
                        y.current = !0
                    }
                    return window.addEventListener("beforeunload", t), () => {
                        window.removeEventListener("beforeunload", t)
                    }
                }, [o, c]);
                let m = (0, tO.useCallback)(() => {
                        d && d.name !== tt && g(null)
                    }, [d, g]),
                    w = (0, tO.useCallback)(t => {
                        f.current = !0, g(t)
                    }, [g]);
                return tO.createElement(tz, {
                    wallets: u,
                    adapter: d,
                    isUnloadingRef: y,
                    onAutoConnectRequest: p,
                    onConnectError: m,
                    onError: r,
                    onSelectWallet: w
                }, t)
            }
        },
        11867: function(t, e, n) {
            "use strict";
            n.d(e, {
                e: function() {
                    return P
                }
            });
            var i, r, s, a, o, l, u, c, h, d, g, f, p, y, m, w = n(95462),
                M = n(68757),
                N = n(74659),
                v = n(43887),
                L = n(64024),
                j = function(t, e, n, i, r) {
                    if ("m" === i) throw TypeError("Private method is not writable");
                    if ("a" === i && !r) throw TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof e ? t !== e || !r : !e.has(t)) throw TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === i ? r.call(t, n) : r ? r.value = n : e.set(t, n), n
                },
                I = function(t, e, n, i) {
                    if ("a" === n && !i) throw TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof e ? t !== e || !i : !e.has(t)) throw TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === n ? i : "a" === n ? i.call(t) : i ? i.value : e.get(t)
                };
            class b extends Event {
                constructor(t) {
                    super("wallet-standard:register-wallet", {
                        bubbles: !1,
                        cancelable: !1,
                        composed: !1
                    }), i.set(this, void 0), j(this, i, t, "f")
                }
                get detail() {
                    return I(this, i, "f")
                }
                get type() {
                    return "wallet-standard:register-wallet"
                }
                preventDefault() {
                    throw Error("preventDefault cannot be called")
                }
                stopImmediatePropagation() {
                    throw Error("stopImmediatePropagation cannot be called")
                }
                stopPropagation() {
                    throw Error("stopPropagation cannot be called")
                }
            }
            i = new WeakMap;
            var S = n(88746),
                D = n(77684),
                O = n(10282),
                E = n(34402),
                T = n(59186),
                x = n(3005),
                A = n(83747),
                C = function(t, e, n, i) {
                    if ("a" === n && !i) throw TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof e ? t !== e || !i : !e.has(t)) throw TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === n ? i : "a" === n ? i.call(t) : i ? i.value : e.get(t)
                },
                z = function(t, e, n, i, r) {
                    if ("m" === i) throw TypeError("Private method is not writable");
                    if ("a" === i && !r) throw TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof e ? t !== e || !r : !e.has(t)) throw TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === i ? r.call(t, n) : r ? r.value = n : e.set(t, n), n
                };
            class k {
                constructor() {
                    r.add(this), s.set(this, {}), a.set(this, "1.0.0"), o.set(this, "MetaMask"), l.set(this, "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMxIiB2aWV3Qm94PSIwIDAgMzEgMzEiIHdpZHRoPSIzMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjIwLjI1IiB4Mj0iMjYuNTcxIiB5MT0iMjcuMTczIiB5Mj0iMTkuODU4Ij48c3RvcCBvZmZzZXQ9Ii4wOCIgc3RvcC1jb2xvcj0iIzk5NDVmZiIvPjxzdG9wIG9mZnNldD0iLjMiIHN0b3AtY29sb3I9IiM4NzUyZjMiLz48c3RvcCBvZmZzZXQ9Ii41IiBzdG9wLWNvbG9yPSIjNTQ5N2Q1Ii8+PHN0b3Agb2Zmc2V0PSIuNiIgc3RvcC1jb2xvcj0iIzQzYjRjYSIvPjxzdG9wIG9mZnNldD0iLjcyIiBzdG9wLWNvbG9yPSIjMjhlMGI5Ii8+PHN0b3Agb2Zmc2V0PSIuOTciIHN0b3AtY29sb3I9IiMxOWZiOWIiLz48L2xpbmVhckdyYWRpZW50PjxnIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iLjA5NCI+PHBhdGggZD0ibTI2LjEwOSAzLjY0My05LjM2OSA2Ljk1OSAxLjczMy00LjEwNSA3LjYzNy0yLjg1M3oiIGZpbGw9IiNlMjc2MWIiIHN0cm9rZT0iI2UyNzYxYiIvPjxnIGZpbGw9IiNlNDc2MWIiIHN0cm9rZT0iI2U0NzYxYiI+PHBhdGggZD0ibTQuNDgxIDMuNjQzIDkuMjk0IDcuMDI0LTEuNjQ4LTQuMTcxem0xOC4yNTggMTYuMTMtMi40OTUgMy44MjMgNS4zMzkgMS40NjkgMS41MzUtNS4yMDctNC4zNzgtLjA4NXptLTE5LjI0Ny4wODUgMS41MjUgNS4yMDcgNS4zMzktMS40NjktMi40OTUtMy44MjN6Ii8+PHBhdGggZD0ibTEwLjA1NSAxMy4zMTMtMS40ODggMi4yNTEgNS4zMDEuMjM1LS4xODgtNS42OTd6bTEwLjQ4IDAtMy42NzItMy4yNzctLjEyMiA1Ljc2MyA1LjI5Mi0uMjM1LTEuNDk3LTIuMjUxem0tMTAuMTc4IDEwLjI4MyAzLjE4My0xLjU1NC0yLjc0OS0yLjE0Ny0uNDMzIDMuNzAxem02LjY5NS0xLjU1NCAzLjE5MiAxLjU1NC0uNDQzLTMuNzAxeiIvPjwvZz48cGF0aCBkPSJtMjAuMjQ0IDIzLjU5Ni0zLjE5Mi0xLjU1NC4yNTQgMi4wODEtLjAyOC44NzZ6bS05Ljg4NyAwIDIuOTY2IDEuNDAzLS4wMTktLjg3Ni4yMzUtMi4wODEtMy4xODMgMS41NTR6IiBmaWxsPSIjZDdjMWIzIiBzdHJva2U9IiNkN2MxYjMiLz48cGF0aCBkPSJtMTMuMzY5IDE4LjUyMS0yLjY1NS0uNzgxIDEuODc0LS44NTd6bTMuODUxIDAgLjc4MS0xLjYzOCAxLjg4My44NTctMi42NjUuNzgxeiIgZmlsbD0iIzIzMzQ0NyIgc3Ryb2tlPSIjMjMzNDQ3Ii8+PHBhdGggZD0ibTEwLjM1NyAyMy41OTYuNDUyLTMuODIzLTIuOTQ3LjA4NXptOS40MzUtMy44MjMuNDUyIDMuODIzIDIuNDk1LTMuNzM4em0yLjI0MS00LjIwOS01LjI5Mi4yMzUuNDkgMi43MjEuNzgyLTEuNjM4IDEuODgzLjg1N3ptLTExLjMxOCAyLjE3NSAxLjg4My0uODU3Ljc3MiAxLjYzOC40OTktMi43MjEtNS4zMDEtLjIzNXoiIGZpbGw9IiNjZDYxMTYiIHN0cm9rZT0iI2NkNjExNiIvPjxwYXRoIGQ9Im04LjU2NyAxNS41NjQgMi4yMjIgNC4zMzEtLjA3NS0yLjE1NnptMTEuMzI4IDIuMTc1LS4wOTQgMi4xNTYgMi4yMzItNC4zMzEtMi4xMzcgMi4xNzV6bS02LjAyNi0xLjk0LS40OTkgMi43MjEuNjIxIDMuMjExLjE0MS00LjIyOC0uMjY0LTEuNzA0em0yLjg3MiAwLS4yNTQgMS42OTUuMTEzIDQuMjM3LjYzMS0zLjIxMXoiIGZpbGw9IiNlNDc1MWYiIHN0cm9rZT0iI2U0NzUxZiIvPjxwYXRoIGQ9Im0xNy4yMyAxOC41Mi0uNjMxIDMuMjExLjQ1Mi4zMTEgMi43NS0yLjE0Ny4wOTQtMi4xNTZ6bS02LjUxNi0uNzgxLjA3NSAyLjE1NiAyLjc1IDIuMTQ3LjQ1Mi0uMzExLS42MjItMy4yMTF6IiBmaWxsPSIjZjY4NTFiIiBzdHJva2U9IiNmNjg1MWIiLz48cGF0aCBkPSJtMTcuMjc3IDI0Ljk5OS4wMjgtLjg3Ni0uMjM1LS4yMDdoLTMuNTVsLS4yMTcuMjA3LjAxOS44NzYtMi45NjYtMS40MDMgMS4wMzYuODQ4IDIuMSAxLjQ1OWgzLjYwNmwyLjEwOS0xLjQ1OSAxLjAzNi0uODQ4eiIgZmlsbD0iI2MwYWQ5ZSIgc3Ryb2tlPSIjYzBhZDllIi8+PHBhdGggZD0ibTE3LjA1MSAyMi4wNDItLjQ1Mi0uMzExaC0yLjYwOGwtLjQ1Mi4zMTEtLjIzNSAyLjA4MS4yMTctLjIwN2gzLjU1bC4yMzUuMjA3LS4yNTQtMi4wODF6IiBmaWxsPSIjMTYxNjE2IiBzdHJva2U9IiMxNjE2MTYiLz48cGF0aCBkPSJtMjYuNTA1IDExLjA1My44LTMuODQyLTEuMTk2LTMuNTY5LTkuMDU4IDYuNzIzIDMuNDg0IDIuOTQ3IDQuOTI1IDEuNDQxIDEuMDkyLTEuMjcxLS40NzEtLjMzOS43NTMtLjY4Ny0uNTg0LS40NTIuNzUzLS41NzQtLjQ5OS0uMzc3em0tMjMuMjExLTMuODQxLjggMy44NDItLjUwOC4zNzcuNzUzLjU3NC0uNTc0LjQ1Mi43NTMuNjg3LS40NzEuMzM5IDEuMDgzIDEuMjcxIDQuOTI1LTEuNDQxIDMuNDg0LTIuOTQ3LTkuMDU5LTYuNzIzeiIgZmlsbD0iIzc2M2QxNiIgc3Ryb2tlPSIjNzYzZDE2Ii8+PHBhdGggZD0ibTI1LjQ2IDE0Ljc1NC00LjkyNS0xLjQ0MSAxLjQ5NyAyLjI1MS0yLjIzMiA0LjMzMSAyLjkzOC0uMDM4aDQuMzc4bC0xLjY1Ny01LjEwNHptLTE1LjQwNS0xLjQ0MS00LjkyNSAxLjQ0MS0xLjYzOCA1LjEwNGg0LjM2OWwyLjkyOC4wMzgtMi4yMjItNC4zMzEgMS40ODgtMi4yNTF6bTYuNjg1IDIuNDg2LjMxMS01LjQzMyAxLjQzMS0zLjg3aC02LjM1NmwxLjQxMyAzLjg3LjMyOSA1LjQzMy4xMTMgMS43MTQuMDA5IDQuMjE5aDIuNjFsLjAxOS00LjIxOS4xMjItMS43MTR6IiBmaWxsPSIjZjY4NTFiIiBzdHJva2U9IiNmNjg1MWIiLz48L2c+PGNpcmNsZSBjeD0iMjMuNSIgY3k9IjIzLjUiIGZpbGw9IiMwMDAiIHI9IjYuNSIvPjxwYXRoIGQ9Im0yNy40NzMgMjUuNTQ1LTEuMzEgMS4zNjhjLS4wMjkuMDMtLjA2My4wNTMtLjEwMS4wN2EuMzEuMzEgMCAwIDEgLS4xMjEuMDI0aC02LjIwOWMtLjAzIDAtLjA1OS0uMDA4LS4wODMtLjAyNGEuMTUuMTUgMCAwIDEgLS4wNTYtLjA2NWMtLjAxMi0uMDI2LS4wMTUtLjA1Ni0uMDEtLjA4NHMuMDE4LS4wNTUuMDM5LS4wNzZsMS4zMTEtMS4zNjhjLjAyOC0uMDMuMDYzLS4wNTMuMTAxLS4wNjlhLjMxLjMxIDAgMCAxIC4xMjEtLjAyNWg2LjIwOGMuMDMgMCAuMDU5LjAwOC4wODMuMDI0YS4xNS4xNSAwIDAgMSAuMDU2LjA2NWMuMDEyLjAyNi4wMTUuMDU2LjAxLjA4NHMtLjAxOC4wNTUtLjAzOS4wNzZ6bS0xLjMxLTIuNzU2Yy0uMDI5LS4wMy0uMDYzLS4wNTMtLjEwMS0uMDdhLjMxLjMxIDAgMCAwIC0uMTIxLS4wMjRoLTYuMjA5Yy0uMDMgMC0uMDU5LjAwOC0uMDgzLjAyNHMtLjA0NC4wMzgtLjA1Ni4wNjUtLjAxNS4wNTYtLjAxLjA4NC4wMTguMDU1LjAzOS4wNzZsMS4zMTEgMS4zNjhjLjAyOC4wMy4wNjMuMDUzLjEwMS4wNjlhLjMxLjMxIDAgMCAwIC4xMjEuMDI1aDYuMjA4Yy4wMyAwIC4wNTktLjAwOC4wODMtLjAyNGEuMTUuMTUgMCAwIDAgLjA1Ni0uMDY1Yy4wMTItLjAyNi4wMTUtLjA1Ni4wMS0uMDg0cy0uMDE4LS4wNTUtLjAzOS0uMDc2em0tNi40MzEtLjk4M2g2LjIwOWEuMzEuMzEgMCAwIDAgLjEyMS0uMDI0Yy4wMzgtLjAxNi4wNzMtLjA0LjEwMS0uMDdsMS4zMS0xLjM2OGMuMDItLjAyMS4wMzQtLjA0Ny4wMzktLjA3NnMuMDAxLS4wNTgtLjAxLS4wODRhLjE1LjE1IDAgMCAwIC0uMDU2LS4wNjVjLS4wMjUtLjAxNi0uMDU0LS4wMjQtLjA4My0uMDI0aC02LjIwOGEuMzEuMzEgMCAwIDAgLS4xMjEuMDI1Yy0uMDM4LjAxNi0uMDcyLjA0LS4xMDEuMDY5bC0xLjMxIDEuMzY4Yy0uMDIuMDIxLS4wMzQuMDQ3LS4wMzkuMDc2cy0uMDAxLjA1OC4wMS4wODQuMDMxLjA0OS4wNTYuMDY1LjA1NC4wMjQuMDgzLjAyNHoiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4="), u.set(this, null), c.set(this, (t, e) => (C(this, s, "f")[t] ? .push(e) || (C(this, s, "f")[t] = [e]), () => C(this, r, "m", d).call(this, t, e))), g.set(this, async () => {
                        if (!C(this, u, "f")) {
                            let t;
                            try {
                                t = (await n.e(7572).then(n.bind(n, 27572))).default
                            } catch (t) {
                                throw Error("Unable to load Solflare MetaMask SDK")
                            }
                            z(this, u, new t, "f"), C(this, u, "f").on("standard_change", t => C(this, r, "m", h).call(this, "change", t))
                        }
                        return this.accounts.length || await C(this, u, "f").connect(), {
                            accounts: this.accounts
                        }
                    }), f.set(this, async () => {
                        C(this, u, "f") && await C(this, u, "f").disconnect()
                    }), p.set(this, async (...t) => {
                        if (!C(this, u, "f")) throw new N.oS;
                        return await C(this, u, "f").standardSignAndSendTransaction(...t)
                    }), y.set(this, async (...t) => {
                        if (!C(this, u, "f")) throw new N.oS;
                        return await C(this, u, "f").standardSignTransaction(...t)
                    }), m.set(this, async (...t) => {
                        if (!C(this, u, "f")) throw new N.oS;
                        return await C(this, u, "f").standardSignMessage(...t)
                    })
                }
                get version() {
                    return C(this, a, "f")
                }
                get name() {
                    return C(this, o, "f")
                }
                get icon() {
                    return C(this, l, "f")
                }
                get chains() {
                    return [S.aI, S.BR, S.gv]
                }
                get features() {
                    return {
                        [T.V]: {
                            version: "1.0.0",
                            connect: C(this, g, "f")
                        },
                        [x.R]: {
                            version: "1.0.0",
                            disconnect: C(this, f, "f")
                        },
                        [A.k]: {
                            version: "1.0.0",
                            on: C(this, c, "f")
                        },
                        [D.G]: {
                            version: "1.0.0",
                            supportedTransactionVersions: ["legacy", 0],
                            signAndSendTransaction: C(this, p, "f")
                        },
                        [O.R]: {
                            version: "1.0.0",
                            supportedTransactionVersions: ["legacy", 0],
                            signTransaction: C(this, y, "f")
                        },
                        [E.g]: {
                            version: "1.0.0",
                            signMessage: C(this, m, "f")
                        }
                    }
                }
                get accounts() {
                    return C(this, u, "f") ? C(this, u, "f").standardAccounts : []
                }
            }
            s = new WeakMap, a = new WeakMap, o = new WeakMap, l = new WeakMap, u = new WeakMap, c = new WeakMap, g = new WeakMap, f = new WeakMap, p = new WeakMap, y = new WeakMap, m = new WeakMap, r = new WeakSet, h = function(t, ...e) {
                C(this, s, "f")[t] ? .forEach(t => t.apply(null, e))
            }, d = function(t, e) {
                C(this, s, "f")[t] = C(this, s, "f")[t] ? .filter(t => e !== t)
            };
            let R = !1;
            async function _() {
                let t = "solflare-detect-metamask";

                function e() {
                    window.postMessage({
                        target: "metamask-contentscript",
                        data: {
                            name: "metamask-provider",
                            data: {
                                id: t,
                                jsonrpc: "2.0",
                                method: "wallet_getSnaps"
                            }
                        }
                    }, window.location.origin)
                }

                function n(i) {
                    let r = i.data;
                    r ? .target === "metamask-inpage" && r.data ? .name === "metamask-provider" && (r.data.data ? .id === t ? (window.removeEventListener("message", n), !r.data.data.error && (R || (function(t) {
                        let e = ({
                            register: e
                        }) => e(t);
                        try {
                            window.dispatchEvent(new b(e))
                        } catch (t) {
                            console.error("wallet-standard:register-wallet event could not be dispatched\n", t)
                        }
                        try {
                            window.addEventListener("wallet-standard:app-ready", ({
                                detail: t
                            }) => e(t))
                        } catch (t) {
                            console.error("wallet-standard:app-ready event listener could not be added\n", t)
                        }
                    }(new k), R = !0))) : e())
                }
                window.addEventListener("message", n), window.setTimeout(() => window.removeEventListener("message", n), 5e3), e()
            }
            class P extends w.eC {
                constructor(t = {}) {
                    super(), this.name = "Solflare", this.url = "https://solflare.com", this.icon = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmMxMGIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYjNmMmUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI2LjQ3ODM1IiB4Mj0iMzQuOTEwNyIgeGxpbms6aHJlZj0iI2EiIHkxPSI3LjkyIiB5Mj0iMzMuNjU5MyIvPjxyYWRpYWxHcmFkaWVudCBpZD0iYyIgY3g9IjAiIGN5PSIwIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDQuOTkyMTg4MzIgMTIuMDYzODc5NjMgLTEyLjE4MTEzNjU1IDUuMDQwNzEwNzQgMjIuNTIwMiAyMC42MTgzKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHI9IjEiIHhsaW5rOmhyZWY9IiNhIi8+PHBhdGggZD0ibTI1LjE3MDggNDcuOTEwNGMuNTI1IDAgLjk1MDcuNDIxLjk1MDcuOTQwM3MtLjQyNTcuOTQwMi0uOTUwNy45NDAyLS45NTA3LS40MjA5LS45NTA3LS45NDAyLjQyNTctLjk0MDMuOTUwNy0uOTQwM3ptLTEuMDMyOC00NC45MTU2NWMuNDY0Ni4wMzgzNi44Mzk4LjM5MDQuOTAyNy44NDY4MWwxLjEzMDcgOC4yMTU3NGMuMzc5OCAyLjcxNDMgMy42NTM1IDMuODkwNCA1LjY3NDMgMi4wNDU5bDExLjMyOTEtMTAuMzExNThjLjI3MzMtLjI0ODczLjY5ODktLjIzMTQ5Ljk1MDcuMDM4NTEuMjMwOS4yNDc3Mi4yMzc5LjYyNjk3LjAxNjEuODgyNzdsLTkuODc5MSAxMS4zOTU4Yy0xLjgxODcgMi4wOTQyLS40NzY4IDUuMzY0MyAyLjI5NTYgNS41OTc4bDguNzE2OC44NDAzYy40MzQxLjA0MTguNzUxNy40MjM0LjcwOTMuODUyNC0uMDM0OS4zNTM3LS4zMDc0LjYzOTUtLjY2MjguNjk0OWwtOS4xNTk0IDEuNDMwMmMtMi42NTkzLjM2MjUtMy44NjM2IDMuNTExNy0yLjEzMzkgNS41NTc2bDMuMjIgMy43OTYxYy4yNTk0LjMwNTguMjE4OC43NjE1LS4wOTA4IDEuMDE3OC0uMjYyMi4yMTcyLS42NDE5LjIyNTYtLjkxMzguMDIwM2wtMy45Njk0LTIuOTk3OGMtMi4xNDIxLTEuNjEwOS01LjIyOTctLjI0MTctNS40NTYxIDIuNDI0M2wtLjg3NDcgMTAuMzk3NmMtLjAzNjIuNDI5NS0uNDE3OC43NDg3LS44NTI1LjcxMy0uMzY5LS4wMzAzLS42NjcxLS4zMDk3LS43MTcxLS42NzIxbC0xLjM4NzEtMTAuMDQzN2MtLjM3MTctMi43MTQ0LTMuNjQ1NC0zLjg5MDQtNS42NzQzLTIuMDQ1OWwtMTIuMDUxOTUgMTAuOTc0Yy0uMjQ5NDcuMjI3MS0uNjM4MDkuMjExNC0uODY4LS4wMzUtLjIxMDk0LS4yMjYyLS4yMTczNS0uNTcyNC0uMDE0OTMtLjgwNmwxMC41MTgxOC0xMi4xMzg1YzEuODE4Ny0yLjA5NDIuNDg0OS01LjM2NDQtMi4yODc2LTUuNTk3OGwtOC43MTg3Mi0uODQwNWMtLjQzNDEzLS4wNDE4LS43NTE3Mi0uNDIzNS0uNzA5MzYtLjg1MjQuMDM0OTMtLjM1MzcuMzA3MzktLjYzOTQuNjYyNy0uNjk1bDkuMTUzMzgtMS40Mjk5YzIuNjU5NC0uMzYyNSAzLjg3MTgtMy41MTE3IDIuMTQyMS01LjU1NzZsLTIuMTkyLTIuNTg0MWMtLjMyMTctLjM3OTItLjI3MTMtLjk0NDMuMTEyNi0xLjI2MjEuMzI1My0uMjY5NC43OTYzLS4yNzk3IDEuMTMzNC0uMDI0OWwyLjY5MTggMi4wMzQ3YzIuMTQyMSAxLjYxMDkgNS4yMjk3LjI0MTcgNS40NTYxLTIuNDI0M2wuNzI0MS04LjU1OTk4Yy4wNDU3LS41NDA4LjUyNjUtLjk0MjU3IDEuMDczOS0uODk3Mzd6bS0yMy4xODczMyAyMC40Mzk2NWMuNTI1MDQgMCAuOTUwNjcuNDIxLjk1MDY3Ljk0MDNzLS40MjU2My45NDAzLS45NTA2Ny45NDAzYy0uNTI1MDQxIDAtLjk1MDY3LS40MjEtLjk1MDY3LS45NDAzcy40MjU2MjktLjk0MDMuOTUwNjctLjk0MDN6bTQ3LjY3OTczLS45NTQ3Yy41MjUgMCAuOTUwNy40MjEuOTUwNy45NDAzcy0uNDI1Ny45NDAyLS45NTA3Ljk0MDItLjk1MDctLjQyMDktLjk1MDctLjk0MDIuNDI1Ny0uOTQwMy45NTA3LS45NDAzem0tMjQuNjI5Ni0yMi40Nzk3Yy41MjUgMCAuOTUwNi40MjA5NzMuOTUwNi45NDAyNyAwIC41MTkzLS40MjU2Ljk0MDI3LS45NTA2Ljk0MDI3LS41MjUxIDAtLjk1MDctLjQyMDk3LS45NTA3LS45NDAyNyAwLS41MTkyOTcuNDI1Ni0uOTQwMjcuOTUwNy0uOTQwMjd6IiBmaWxsPSJ1cmwoI2IpIi8+PHBhdGggZD0ibTI0LjU3MSAzMi43NzkyYzQuOTU5NiAwIDguOTgwMi0zLjk3NjUgOC45ODAyLTguODgxOSAwLTQuOTA1My00LjAyMDYtOC44ODE5LTguOTgwMi04Ljg4MTlzLTguOTgwMiAzLjk3NjYtOC45ODAyIDguODgxOWMwIDQuOTA1NCA0LjAyMDYgOC44ODE5IDguOTgwMiA4Ljg4MTl6IiBmaWxsPSJ1cmwoI2MpIi8+PC9zdmc+", this.supportedTransactionVersions = new Set(["legacy", 0]), this._readyState = "undefined" == typeof window || "undefined" == typeof document ? M.i1.Unsupported : M.i1.Loadable, this._disconnected = () => {
                        let t = this._wallet;
                        t && (t.off("disconnect", this._disconnected), this._wallet = null, this._publicKey = null, this.emit("error", new N.at), this.emit("disconnect"))
                    }, this._accountChanged = t => {
                        if (!t) return;
                        let e = this._publicKey;
                        if (e) {
                            try {
                                t = new L.PublicKey(t.toBytes())
                            } catch (t) {
                                this.emit("error", new N.Nx(t ? .message, t));
                                return
                            }
                            e.equals(t) || (this._publicKey = t, this.emit("connect", t))
                        }
                    }, this._connecting = !1, this._publicKey = null, this._wallet = null, this._config = t, this._readyState !== M.i1.Unsupported && ((0, M.su)(() => (!!window.solflare ? .isSolflare || !!window.SolflareApp) && (this._readyState = M.i1.Installed, this.emit("readyStateChange", this._readyState), !0)), _())
                }
                get publicKey() {
                    return this._publicKey
                }
                get connecting() {
                    return this._connecting
                }
                get connected() {
                    return !!this._wallet ? .connected
                }
                get readyState() {
                    return this._readyState
                }
                async autoConnect() {
                    this.readyState === M.i1.Loadable && (0, M.H)() || await this.connect()
                }
                async connect() {
                    try {
                        let t, e, i;
                        if (this.connected || this.connecting) return;
                        if (this._readyState !== M.i1.Loadable && this._readyState !== M.i1.Installed) throw new N.OZ;
                        if (this.readyState === M.i1.Loadable && (0, M.H)()) {
                            let t = encodeURIComponent(window.location.href),
                                e = encodeURIComponent(window.location.origin);
                            window.location.href = `https://solflare.com/ul/v1/browse/${t}?ref=${e}`;
                            return
                        }
                        try {
                            t = (await n.e(5161).then(n.bind(n, 15161))).default
                        } catch (t) {
                            throw new N.W8(t ? .message, t)
                        }
                        try {
                            e = new t({
                                network: this._config.network
                            })
                        } catch (t) {
                            throw new N.p6(t ? .message, t)
                        }
                        if (this._connecting = !0, !e.connected) try {
                            await e.connect()
                        } catch (t) {
                            throw new N.$w(t ? .message, t)
                        }
                        if (!e.publicKey) throw new N.$w;
                        try {
                            i = new L.PublicKey(e.publicKey.toBytes())
                        } catch (t) {
                            throw new N.Nx(t ? .message, t)
                        }
                        e.on("disconnect", this._disconnected), e.on("accountChanged", this._accountChanged), this._wallet = e, this._publicKey = i, this.emit("connect", i)
                    } catch (t) {
                        throw this.emit("error", t), t
                    } finally {
                        this._connecting = !1
                    }
                }
                async disconnect() {
                    let t = this._wallet;
                    if (t) {
                        t.off("disconnect", this._disconnected), t.off("accountChanged", this._accountChanged), this._wallet = null, this._publicKey = null;
                        try {
                            await t.disconnect()
                        } catch (t) {
                            this.emit("error", new N.UG(t ? .message, t))
                        }
                    }
                    this.emit("disconnect")
                }
                async sendTransaction(t, e, n = {}) {
                    try {
                        let i = this._wallet;
                        if (!i) throw new N.oS;
                        try {
                            let {
                                signers: r,
                                ...s
                            } = n;
                            return (0, v.W)(t) ? r ? .length && t.sign(r) : (t = await this.prepareTransaction(t, e, s), r ? .length && t.partialSign(...r)), s.preflightCommitment = s.preflightCommitment || e.commitment, await i.signAndSendTransaction(t, s)
                        } catch (t) {
                            if (t instanceof N.lj) throw t;
                            throw new N.IW(t ? .message, t)
                        }
                    } catch (t) {
                        throw this.emit("error", t), t
                    }
                }
                async signTransaction(t) {
                    try {
                        let e = this._wallet;
                        if (!e) throw new N.oS;
                        try {
                            return await e.signTransaction(t) || t
                        } catch (t) {
                            throw new N.PY(t ? .message, t)
                        }
                    } catch (t) {
                        throw this.emit("error", t), t
                    }
                }
                async signAllTransactions(t) {
                    try {
                        let e = this._wallet;
                        if (!e) throw new N.oS;
                        try {
                            return await e.signAllTransactions(t) || t
                        } catch (t) {
                            throw new N.PY(t ? .message, t)
                        }
                    } catch (t) {
                        throw this.emit("error", t), t
                    }
                }
                async signMessage(t) {
                    try {
                        let e = this._wallet;
                        if (!e) throw new N.oS;
                        try {
                            return await e.signMessage(t, "utf8")
                        } catch (t) {
                            throw new N.fk(t ? .message, t)
                        }
                    } catch (t) {
                        throw this.emit("error", t), t
                    }
                }
            }
        },
        25223: function(t, e, n) {
            "use strict";
            n.d(e, {
                X: function() {
                    return o
                }
            });
            var i = n(95462),
                r = n(68757),
                s = n(74659),
                a = n(64024);
            class o extends i.eC {
                constructor({
                    params: t = {
                        showTorusButton: !1
                    }
                } = {
                    params: {
                        showTorusButton: !1
                    }
                }) {
                    super(), this.name = "Torus", this.url = "https://tor.us", this.icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMyAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYuNSIgY3k9IjE2IiByPSIxNiIgZmlsbD0iIzAzNjRGRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjIxODYgOS40OTIxOUMxMC40NTM5IDkuNDkyMTkgOS44MzM5OCAxMC4xMTIxIDkuODMzOTggMTAuODc2OFYxMi40ODk4QzkuODMzOTggMTMuMjU0NSAxMC40NTM5IDEzLjg3NDQgMTEuMjE4NiAxMy44NzQ0SDEzLjY2ODRWMjIuODk3NkMxMy42Njg0IDIzLjY2MjMgMTQuMjg4MyAyNC4yODIyIDE1LjA1MyAyNC4yODIySDE2LjY2NkMxNy40MzA3IDI0LjI4MjIgMTguMDUwNiAyMy42NjIzIDE4LjA1MDYgMjIuODk3NlYxMi41MDE1QzE4LjA1MDYgMTIuNDk3NiAxOC4wNTA2IDEyLjQ5MzcgMTguMDUwNiAxMi40ODk4VjEwLjg3NjhDMTguMDUwNiAxMC4xMTIxIDE3LjQzMDcgOS40OTIxOSAxNi42NjYgOS40OTIxOUgxNS4wNTNIMTEuMjE4NloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMS4zMzc2IDEzLjg3NDRDMjIuNTQ3NyAxMy44NzQ0IDIzLjUyODcgMTIuODkzNCAyMy41Mjg3IDExLjY4MzNDMjMuNTI4NyAxMC40NzMyIDIyLjU0NzcgOS40OTIxOSAyMS4zMzc2IDkuNDkyMTlDMjAuMTI3NSA5LjQ5MjE5IDE5LjE0NjUgMTAuNDczMiAxOS4xNDY1IDExLjY4MzNDMTkuMTQ2NSAxMi44OTM0IDIwLjEyNzUgMTMuODc0NCAyMS4zMzc2IDEzLjg3NDRaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K", this.supportedTransactionVersions = null, this._readyState = "undefined" == typeof window || "undefined" == typeof document ? r.i1.Unsupported : r.i1.Loadable, this._connecting = !1, this._wallet = null, this._publicKey = null, this._params = t
                }
                get publicKey() {
                    return this._publicKey
                }
                get connecting() {
                    return this._connecting
                }
                get connected() {
                    return !!this._wallet ? .isLoggedIn
                }
                get readyState() {
                    return this._readyState
                }
                async connect() {
                    try {
                        let t, e, i, o;
                        if (this.connected || this.connecting) return;
                        if (this._readyState !== r.i1.Loadable) throw new s.OZ;
                        this._connecting = !0;
                        try {
                            t = (await Promise.all([n.e(8218), n.e(6450), n.e(990), n.e(4997)]).then(n.bind(n, 58386))).default
                        } catch (t) {
                            throw new s.W8(t ? .message, t)
                        }
                        try {
                            e = window.torus || new t
                        } catch (t) {
                            throw new s.p6(t ? .message, t)
                        }
                        if (!e.isInitialized) try {
                            await e.init(this._params)
                        } catch (t) {
                            throw new s.$w(t ? .message, t)
                        }
                        try {
                            i = await e.login()
                        } catch (t) {
                            throw new s.cO(t ? .message, t)
                        }
                        try {
                            o = new a.PublicKey(i[0])
                        } catch (t) {
                            throw new s.Nx(t ? .message, t)
                        }
                        this._wallet = e, this._publicKey = o, this.emit("connect", o)
                    } catch (t) {
                        throw this.emit("error", t), t
                    } finally {
                        this._connecting = !1
                    }
                }
                async disconnect() {
                    let t = this._wallet;
                    if (t) {
                        this._wallet = null, this._publicKey = null;
                        try {
                            t.isLoggedIn && await t.cleanUp()
                        } catch (t) {
                            this.emit("error", new s.UG(t ? .message, t))
                        }
                    }
                    this.emit("disconnect")
                }
                async sendTransaction(t, e, n = {}) {
                    try {
                        let i = this._wallet;
                        if (!i) throw new s.oS;
                        try {
                            let {
                                signers: r,
                                ...s
                            } = n;
                            t = await this.prepareTransaction(t, e, s), r ? .length && t.partialSign(...r), s.preflightCommitment = s.preflightCommitment || e.commitment;
                            let {
                                signature: a
                            } = await i.signAndSendTransaction(t, s);
                            return a
                        } catch (t) {
                            if (t instanceof s.lj) throw t;
                            throw new s.IW(t ? .message, t)
                        }
                    } catch (t) {
                        throw this.emit("error", t), t
                    }
                }
                async signTransaction(t) {
                    try {
                        let e = this._wallet;
                        if (!e) throw new s.oS;
                        try {
                            return await e.signTransaction(t) || t
                        } catch (t) {
                            throw new s.PY(t ? .message, t)
                        }
                    } catch (t) {
                        throw this.emit("error", t), t
                    }
                }
                async signAllTransactions(t) {
                    try {
                        let e = this._wallet;
                        if (!e) throw new s.oS;
                        try {
                            return await e.signAllTransactions(t) || t
                        } catch (t) {
                            throw new s.PY(t ? .message, t)
                        }
                    } catch (t) {
                        throw this.emit("error", t), t
                    }
                }
                async signMessage(t) {
                    try {
                        let e = this._wallet;
                        if (!e) throw new s.oS;
                        try {
                            return await e.signMessage(t)
                        } catch (t) {
                            throw new s.fk(t ? .message, t)
                        }
                    } catch (t) {
                        throw this.emit("error", t), t
                    }
                }
            }
        },
        88746: function(t, e, n) {
            "use strict";
            n.d(e, {
                BR: function() {
                    return r
                },
                aI: function() {
                    return i
                },
                gv: function() {
                    return s
                },
                l1: function() {
                    return a
                }
            });
            let i = "solana:mainnet",
                r = "solana:devnet",
                s = "solana:testnet",
                a = "solana:localnet"
        },
        77684: function(t, e, n) {
            "use strict";
            n.d(e, {
                G: function() {
                    return i
                }
            });
            let i = "solana:signAndSendTransaction"
        },
        34402: function(t, e, n) {
            "use strict";
            n.d(e, {
                g: function() {
                    return i
                }
            });
            let i = "solana:signMessage"
        },
        10282: function(t, e, n) {
            "use strict";
            n.d(e, {
                R: function() {
                    return i
                }
            });
            let i = "solana:signTransaction"
        },
        51814: function(t, e, n) {
            "use strict";
            n.d(e, {
                S: function() {
                    return y
                }
            });
            var i = n(7826),
                r = n(38418),
                s = n(63529),
                a = n(90221),
                o = class extends a.l {
                    constructor(t = {}) {
                        super(), this.config = t, this.#t = new Map
                    }#
                    t;
                    build(t, e, n) {
                        let s = e.queryKey,
                            a = e.queryHash ? ? (0, i.Rm)(s, e),
                            o = this.get(a);
                        return o || (o = new r.A({
                            cache: this,
                            queryKey: s,
                            queryHash: a,
                            options: t.defaultQueryOptions(e),
                            state: n,
                            defaultOptions: t.getQueryDefaults(s)
                        }), this.add(o)), o
                    }
                    add(t) {
                        this.#t.has(t.queryHash) || (this.#t.set(t.queryHash, t), this.notify({
                            type: "added",
                            query: t
                        }))
                    }
                    remove(t) {
                        let e = this.#t.get(t.queryHash);
                        e && (t.destroy(), e === t && this.#t.delete(t.queryHash), this.notify({
                            type: "removed",
                            query: t
                        }))
                    }
                    clear() {
                        s.V.batch(() => {
                            this.getAll().forEach(t => {
                                this.remove(t)
                            })
                        })
                    }
                    get(t) {
                        return this.#t.get(t)
                    }
                    getAll() {
                        return [...this.#t.values()]
                    }
                    find(t) {
                        let e = {
                            exact: !0,
                            ...t
                        };
                        return this.getAll().find(t => (0, i._x)(e, t))
                    }
                    findAll(t = {}) {
                        let e = this.getAll();
                        return Object.keys(t).length > 0 ? e.filter(e => (0, i._x)(t, e)) : e
                    }
                    notify(t) {
                        s.V.batch(() => {
                            this.listeners.forEach(e => {
                                e(t)
                            })
                        })
                    }
                    onFocus() {
                        s.V.batch(() => {
                            this.getAll().forEach(t => {
                                t.onFocus()
                            })
                        })
                    }
                    onOnline() {
                        s.V.batch(() => {
                            this.getAll().forEach(t => {
                                t.onOnline()
                            })
                        })
                    }
                },
                l = n(10641),
                u = n(49125),
                c = class extends l.F {#
                    e;#
                    n;#
                    i;
                    constructor(t) {
                        super(), this.mutationId = t.mutationId, this.#n = t.mutationCache, this.#e = [], this.state = t.state || {
                            context: void 0,
                            data: void 0,
                            error: null,
                            failureCount: 0,
                            failureReason: null,
                            isPaused: !1,
                            status: "idle",
                            variables: void 0,
                            submittedAt: 0
                        }, this.setOptions(t.options), this.scheduleGc()
                    }
                    setOptions(t) {
                        this.options = t, this.updateGcTime(this.options.gcTime)
                    }
                    get meta() {
                        return this.options.meta
                    }
                    addObserver(t) {
                        this.#e.includes(t) || (this.#e.push(t), this.clearGcTimeout(), this.#n.notify({
                            type: "observerAdded",
                            mutation: this,
                            observer: t
                        }))
                    }
                    removeObserver(t) {
                        this.#e = this.#e.filter(e => e !== t), this.scheduleGc(), this.#n.notify({
                            type: "observerRemoved",
                            mutation: this,
                            observer: t
                        })
                    }
                    optionalRemove() {
                        this.#e.length || ("pending" === this.state.status ? this.scheduleGc() : this.#n.remove(this))
                    }
                    continue () {
                        return this.#i ? .continue() ? ? this.execute(this.state.variables)
                    }
                    async execute(t) {
                        this.#i = (0, u.Mz)({
                            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(Error("No mutationFn found")),
                            onFail: (t, e) => {
                                this.#r({
                                    type: "failed",
                                    failureCount: t,
                                    error: e
                                })
                            },
                            onPause: () => {
                                this.#r({
                                    type: "pause"
                                })
                            },
                            onContinue: () => {
                                this.#r({
                                    type: "continue"
                                })
                            },
                            retry: this.options.retry ? ? 0,
                            retryDelay: this.options.retryDelay,
                            networkMode: this.options.networkMode,
                            canRun: () => this.#n.canRun(this)
                        });
                        let e = "pending" === this.state.status,
                            n = !this.#i.canStart();
                        try {
                            if (!e) {
                                this.#r({
                                    type: "pending",
                                    variables: t,
                                    isPaused: n
                                }), await this.#n.config.onMutate ? .(t, this);
                                let e = await this.options.onMutate ? .(t);
                                e !== this.state.context && this.#r({
                                    type: "pending",
                                    context: e,
                                    variables: t,
                                    isPaused: n
                                })
                            }
                            let i = await this.#i.start();
                            return await this.#n.config.onSuccess ? .(i, t, this.state.context, this), await this.options.onSuccess ? .(i, t, this.state.context), await this.#n.config.onSettled ? .(i, null, this.state.variables, this.state.context, this), await this.options.onSettled ? .(i, null, t, this.state.context), this.#r({
                                type: "success",
                                data: i
                            }), i
                        } catch (e) {
                            try {
                                throw await this.#n.config.onError ? .(e, t, this.state.context, this), await this.options.onError ? .(e, t, this.state.context), await this.#n.config.onSettled ? .(void 0, e, this.state.variables, this.state.context, this), await this.options.onSettled ? .(void 0, e, t, this.state.context), e
                            } finally {
                                this.#r({
                                    type: "error",
                                    error: e
                                })
                            }
                        } finally {
                            this.#n.runNext(this)
                        }
                    }#
                    r(t) {
                        this.state = (e => {
                            switch (t.type) {
                                case "failed":
                                    return { ...e,
                                        failureCount: t.failureCount,
                                        failureReason: t.error
                                    };
                                case "pause":
                                    return { ...e,
                                        isPaused: !0
                                    };
                                case "continue":
                                    return { ...e,
                                        isPaused: !1
                                    };
                                case "pending":
                                    return { ...e,
                                        context: t.context,
                                        data: void 0,
                                        failureCount: 0,
                                        failureReason: null,
                                        error: null,
                                        isPaused: t.isPaused,
                                        status: "pending",
                                        variables: t.variables,
                                        submittedAt: Date.now()
                                    };
                                case "success":
                                    return { ...e,
                                        data: t.data,
                                        failureCount: 0,
                                        failureReason: null,
                                        error: null,
                                        status: "success",
                                        isPaused: !1
                                    };
                                case "error":
                                    return { ...e,
                                        data: void 0,
                                        error: t.error,
                                        failureCount: e.failureCount + 1,
                                        failureReason: t.error,
                                        isPaused: !1,
                                        status: "error"
                                    }
                            }
                        })(this.state), s.V.batch(() => {
                            this.#e.forEach(e => {
                                e.onMutationUpdate(t)
                            }), this.#n.notify({
                                mutation: this,
                                type: "updated",
                                action: t
                            })
                        })
                    }
                },
                h = class extends a.l {
                    constructor(t = {}) {
                        super(), this.config = t, this.#s = new Map, this.#a = Date.now()
                    }#
                    s;#
                    a;
                    build(t, e, n) {
                        let i = new c({
                            mutationCache: this,
                            mutationId: ++this.#a,
                            options: t.defaultMutationOptions(e),
                            state: n
                        });
                        return this.add(i), i
                    }
                    add(t) {
                        let e = d(t),
                            n = this.#s.get(e) ? ? [];
                        n.push(t), this.#s.set(e, n), this.notify({
                            type: "added",
                            mutation: t
                        })
                    }
                    remove(t) {
                        let e = d(t);
                        if (this.#s.has(e)) {
                            let n = this.#s.get(e) ? .filter(e => e !== t);
                            n && (0 === n.length ? this.#s.delete(e) : this.#s.set(e, n))
                        }
                        this.notify({
                            type: "removed",
                            mutation: t
                        })
                    }
                    canRun(t) {
                        let e = this.#s.get(d(t)) ? .find(t => "pending" === t.state.status);
                        return !e || e === t
                    }
                    runNext(t) {
                        let e = this.#s.get(d(t)) ? .find(e => e !== t && e.state.isPaused);
                        return e ? .continue() ? ? Promise.resolve()
                    }
                    clear() {
                        s.V.batch(() => {
                            this.getAll().forEach(t => {
                                this.remove(t)
                            })
                        })
                    }
                    getAll() {
                        return [...this.#s.values()].flat()
                    }
                    find(t) {
                        let e = {
                            exact: !0,
                            ...t
                        };
                        return this.getAll().find(t => (0, i.X7)(e, t))
                    }
                    findAll(t = {}) {
                        return this.getAll().filter(e => (0, i.X7)(t, e))
                    }
                    notify(t) {
                        s.V.batch(() => {
                            this.listeners.forEach(e => {
                                e(t)
                            })
                        })
                    }
                    resumePausedMutations() {
                        let t = this.getAll().filter(t => t.state.isPaused);
                        return s.V.batch(() => Promise.all(t.map(t => t.continue().catch(i.ZT))))
                    }
                };

            function d(t) {
                return t.options.scope ? .id ? ? String(t.mutationId)
            }
            var g = n(17697),
                f = n(42323);

            function p(t, {
                pages: e,
                pageParams: n
            }) {
                let i = e.length - 1;
                return t.getNextPageParam(e[i], e, n[i], n)
            }
            var y = class {#
                o;#
                n;#
                l;#
                u;#
                c;#
                h;#
                d;#
                g;
                constructor(t = {}) {
                    this.#o = t.queryCache || new o, this.#n = t.mutationCache || new h, this.#l = t.defaultOptions || {}, this.#u = new Map, this.#c = new Map, this.#h = 0
                }
                mount() {
                    this.#h++, 1 === this.#h && (this.#d = g.j.subscribe(async t => {
                        t && (await this.resumePausedMutations(), this.#o.onFocus())
                    }), this.#g = f.N.subscribe(async t => {
                        t && (await this.resumePausedMutations(), this.#o.onOnline())
                    }))
                }
                unmount() {
                    this.#h--, 0 === this.#h && (this.#d ? .(), this.#d = void 0, this.#g ? .(), this.#g = void 0)
                }
                isFetching(t) {
                    return this.#o.findAll({ ...t,
                        fetchStatus: "fetching"
                    }).length
                }
                isMutating(t) {
                    return this.#n.findAll({ ...t,
                        status: "pending"
                    }).length
                }
                getQueryData(t) {
                    let e = this.defaultQueryOptions({
                        queryKey: t
                    });
                    return this.#o.get(e.queryHash) ? .state.data
                }
                ensureQueryData(t) {
                    let e = this.getQueryData(t.queryKey);
                    if (void 0 === e) return this.fetchQuery(t); {
                        let n = this.defaultQueryOptions(t),
                            i = this.#o.build(this, n);
                        return t.revalidateIfStale && i.isStaleByTime(n.staleTime) && this.prefetchQuery(n), Promise.resolve(e)
                    }
                }
                getQueriesData(t) {
                    return this.#o.findAll(t).map(({
                        queryKey: t,
                        state: e
                    }) => [t, e.data])
                }
                setQueryData(t, e, n) {
                    let r = this.defaultQueryOptions({
                            queryKey: t
                        }),
                        s = this.#o.get(r.queryHash),
                        a = s ? .state.data,
                        o = (0, i.SE)(e, a);
                    if (void 0 !== o) return this.#o.build(this, r).setData(o, { ...n,
                        manual: !0
                    })
                }
                setQueriesData(t, e, n) {
                    return s.V.batch(() => this.#o.findAll(t).map(({
                        queryKey: t
                    }) => [t, this.setQueryData(t, e, n)]))
                }
                getQueryState(t) {
                    let e = this.defaultQueryOptions({
                        queryKey: t
                    });
                    return this.#o.get(e.queryHash) ? .state
                }
                removeQueries(t) {
                    let e = this.#o;
                    s.V.batch(() => {
                        e.findAll(t).forEach(t => {
                            e.remove(t)
                        })
                    })
                }
                resetQueries(t, e) {
                    let n = this.#o,
                        i = {
                            type: "active",
                            ...t
                        };
                    return s.V.batch(() => (n.findAll(t).forEach(t => {
                        t.reset()
                    }), this.refetchQueries(i, e)))
                }
                cancelQueries(t = {}, e = {}) {
                    let n = {
                        revert: !0,
                        ...e
                    };
                    return Promise.all(s.V.batch(() => this.#o.findAll(t).map(t => t.cancel(n)))).then(i.ZT).catch(i.ZT)
                }
                invalidateQueries(t = {}, e = {}) {
                    return s.V.batch(() => {
                        if (this.#o.findAll(t).forEach(t => {
                                t.invalidate()
                            }), "none" === t.refetchType) return Promise.resolve();
                        let n = { ...t,
                            type: t.refetchType ? ? t.type ? ? "active"
                        };
                        return this.refetchQueries(n, e)
                    })
                }
                refetchQueries(t = {}, e) {
                    let n = { ...e,
                        cancelRefetch: e ? .cancelRefetch ? ? !0
                    };
                    return Promise.all(s.V.batch(() => this.#o.findAll(t).filter(t => !t.isDisabled()).map(t => {
                        let e = t.fetch(void 0, n);
                        return n.throwOnError || (e = e.catch(i.ZT)), "paused" === t.state.fetchStatus ? Promise.resolve() : e
                    }))).then(i.ZT)
                }
                fetchQuery(t) {
                    let e = this.defaultQueryOptions(t);
                    void 0 === e.retry && (e.retry = !1);
                    let n = this.#o.build(this, e);
                    return n.isStaleByTime(e.staleTime) ? n.fetch(e) : Promise.resolve(n.state.data)
                }
                prefetchQuery(t) {
                    return this.fetchQuery(t).then(i.ZT).catch(i.ZT)
                }
                fetchInfiniteQuery(t) {
                    var e;
                    return t.behavior = (e = t.pages, {
                        onFetch: (t, n) => {
                            let r = async () => {
                                let n;
                                let r = t.options,
                                    s = t.fetchOptions ? .meta ? .fetchMore ? .direction,
                                    a = t.state.data ? .pages || [],
                                    o = t.state.data ? .pageParams || [],
                                    l = !1,
                                    u = e => {
                                        Object.defineProperty(e, "signal", {
                                            enumerable: !0,
                                            get: () => (t.signal.aborted ? l = !0 : t.signal.addEventListener("abort", () => {
                                                l = !0
                                            }), t.signal)
                                        })
                                    },
                                    c = t.options.queryFn && t.options.queryFn !== i.CN ? t.options.queryFn : () => Promise.reject(Error(`Missing queryFn: '${t.options.queryHash}'`)),
                                    h = async (e, n, r) => {
                                        if (l) return Promise.reject();
                                        if (null == n && e.pages.length) return Promise.resolve(e);
                                        let s = {
                                            queryKey: t.queryKey,
                                            pageParam: n,
                                            direction: r ? "backward" : "forward",
                                            meta: t.options.meta
                                        };
                                        u(s);
                                        let a = await c(s),
                                            {
                                                maxPages: o
                                            } = t.options,
                                            h = r ? i.Ht : i.VX;
                                        return {
                                            pages: h(e.pages, a, o),
                                            pageParams: h(e.pageParams, n, o)
                                        }
                                    };
                                if (s && a.length) {
                                    let t = "backward" === s,
                                        e = {
                                            pages: a,
                                            pageParams: o
                                        },
                                        i = (t ? function(t, {
                                            pages: e,
                                            pageParams: n
                                        }) {
                                            return t.getPreviousPageParam ? .(e[0], e, n[0], n)
                                        } : p)(r, e);
                                    n = await h(e, i, t)
                                } else {
                                    n = await h({
                                        pages: [],
                                        pageParams: []
                                    }, o[0] ? ? r.initialPageParam);
                                    let t = e ? ? a.length;
                                    for (let e = 1; e < t; e++) {
                                        let t = p(r, n);
                                        n = await h(n, t)
                                    }
                                }
                                return n
                            };
                            t.options.persister ? t.fetchFn = () => t.options.persister ? .(r, {
                                queryKey: t.queryKey,
                                meta: t.options.meta,
                                signal: t.signal
                            }, n) : t.fetchFn = r
                        }
                    }), this.fetchQuery(t)
                }
                prefetchInfiniteQuery(t) {
                    return this.fetchInfiniteQuery(t).then(i.ZT).catch(i.ZT)
                }
                resumePausedMutations() {
                    return f.N.isOnline() ? this.#n.resumePausedMutations() : Promise.resolve()
                }
                getQueryCache() {
                    return this.#o
                }
                getMutationCache() {
                    return this.#n
                }
                getDefaultOptions() {
                    return this.#l
                }
                setDefaultOptions(t) {
                    this.#l = t
                }
                setQueryDefaults(t, e) {
                    this.#u.set((0, i.Ym)(t), {
                        queryKey: t,
                        defaultOptions: e
                    })
                }
                getQueryDefaults(t) {
                    let e = [...this.#u.values()],
                        n = {};
                    return e.forEach(e => {
                        (0, i.to)(t, e.queryKey) && (n = { ...n,
                            ...e.defaultOptions
                        })
                    }), n
                }
                setMutationDefaults(t, e) {
                    this.#c.set((0, i.Ym)(t), {
                        mutationKey: t,
                        defaultOptions: e
                    })
                }
                getMutationDefaults(t) {
                    let e = [...this.#c.values()],
                        n = {};
                    return e.forEach(e => {
                        (0, i.to)(t, e.mutationKey) && (n = { ...n,
                            ...e.defaultOptions
                        })
                    }), n
                }
                defaultQueryOptions(t) {
                    if (t._defaulted) return t;
                    let e = { ...this.#l.queries,
                        ...this.getQueryDefaults(t.queryKey),
                        ...t,
                        _defaulted: !0
                    };
                    return e.queryHash || (e.queryHash = (0, i.Rm)(e.queryKey, e)), void 0 === e.refetchOnReconnect && (e.refetchOnReconnect = "always" !== e.networkMode), void 0 === e.throwOnError && (e.throwOnError = !!e.suspense), !e.networkMode && e.persister && (e.networkMode = "offlineFirst"), !0 !== e.enabled && e.queryFn === i.CN && (e.enabled = !1), e
                }
                defaultMutationOptions(t) {
                    return t ? ._defaulted ? t : { ...this.#l.mutations,
                        ...t ? .mutationKey && this.getMutationDefaults(t.mutationKey),
                        ...t,
                        _defaulted : !0
                    }
                }
                clear() {
                    this.#o.clear(), this.#n.clear()
                }
            }
        },
        59186: function(t, e, n) {
            "use strict";
            n.d(e, {
                V: function() {
                    return i
                }
            });
            let i = "standard:connect"
        },
        3005: function(t, e, n) {
            "use strict";
            n.d(e, {
                R: function() {
                    return i
                }
            });
            let i = "standard:disconnect"
        },
        83747: function(t, e, n) {
            "use strict";
            n.d(e, {
                k: function() {
                    return i
                }
            });
            let i = "standard:events"
        },
        46550: function(t, e, n) {
            "use strict";
            n.d(e, {
                ZP: function() {
                    return W
                }
            });
            let i = {
                type: "logger",
                log(t) {
                    this.output("log", t)
                },
                warn(t) {
                    this.output("warn", t)
                },
                error(t) {
                    this.output("error", t)
                },
                output(t, e) {
                    console && console[t] && console[t].apply(console, e)
                }
            };
            class r {
                constructor(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.init(t, e)
                }
                init(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.prefix = e.prefix || "i18next:", this.logger = t || i, this.options = e, this.debug = e.debug
                }
                log() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return this.forward(e, "log", "", !0)
                }
                warn() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return this.forward(e, "warn", "", !0)
                }
                error() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return this.forward(e, "error", "")
                }
                deprecate() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return this.forward(e, "warn", "WARNING DEPRECATED: ", !0)
                }
                forward(t, e, n, i) {
                    return i && !this.debug ? null : ("string" == typeof t[0] && (t[0] = `${n}${this.prefix} ${t[0]}`), this.logger[e](t))
                }
                create(t) {
                    return new r(this.logger, {
                        prefix: `${this.prefix}:${t}:`,
                        ...this.options
                    })
                }
                clone(t) {
                    return (t = t || this.options).prefix = t.prefix || this.prefix, new r(this.logger, t)
                }
            }
            var s = new r;
            class a {
                constructor() {
                    this.observers = {}
                }
                on(t, e) {
                    return t.split(" ").forEach(t => {
                        this.observers[t] || (this.observers[t] = new Map);
                        let n = this.observers[t].get(e) || 0;
                        this.observers[t].set(e, n + 1)
                    }), this
                }
                off(t, e) {
                    if (this.observers[t]) {
                        if (!e) {
                            delete this.observers[t];
                            return
                        }
                        this.observers[t].delete(e)
                    }
                }
                emit(t) {
                    for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
                    this.observers[t] && Array.from(this.observers[t].entries()).forEach(t => {
                        let [e, i] = t;
                        for (let t = 0; t < i; t++) e(...n)
                    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(e => {
                        let [i, r] = e;
                        for (let e = 0; e < r; e++) i.apply(i, [t, ...n])
                    })
                }
            }

            function o() {
                let t, e;
                let n = new Promise((n, i) => {
                    t = n, e = i
                });
                return n.resolve = t, n.reject = e, n
            }

            function l(t) {
                return null == t ? "" : "" + t
            }
            let u = /###/g;

            function c(t, e, n) {
                function i(t) {
                    return t && t.indexOf("###") > -1 ? t.replace(u, ".") : t
                }

                function r() {
                    return !t || "string" == typeof t
                }
                let s = "string" != typeof e ? e : e.split("."),
                    a = 0;
                for (; a < s.length - 1;) {
                    if (r()) return {};
                    let e = i(s[a]);
                    !t[e] && n && (t[e] = new n), t = Object.prototype.hasOwnProperty.call(t, e) ? t[e] : {}, ++a
                }
                return r() ? {} : {
                    obj: t,
                    k: i(s[a])
                }
            }

            function h(t, e, n) {
                let {
                    obj: i,
                    k: r
                } = c(t, e, Object);
                if (void 0 !== i || 1 === e.length) {
                    i[r] = n;
                    return
                }
                let s = e[e.length - 1],
                    a = e.slice(0, e.length - 1),
                    o = c(t, a, Object);
                for (; void 0 === o.obj && a.length;) s = `${a[a.length-1]}.${s}`, (o = c(t, a = a.slice(0, a.length - 1), Object)) && o.obj && void 0 !== o.obj[`${o.k}.${s}`] && (o.obj = void 0);
                o.obj[`${o.k}.${s}`] = n
            }

            function d(t, e) {
                let {
                    obj: n,
                    k: i
                } = c(t, e);
                if (n) return n[i]
            }

            function g(t) {
                return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            }
            var f = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;"
            };

            function p(t) {
                return "string" == typeof t ? t.replace(/[&<>"'\/]/g, t => f[t]) : t
            }
            class y {
                constructor(t) {
                    this.capacity = t, this.regExpMap = new Map, this.regExpQueue = []
                }
                getRegExp(t) {
                    let e = this.regExpMap.get(t);
                    if (void 0 !== e) return e;
                    let n = new RegExp(t);
                    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(t, n), this.regExpQueue.push(t), n
                }
            }
            let m = [" ", ",", "?", "!", ";"],
                w = new y(20);

            function M(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
                if (!t) return;
                if (t[e]) return t[e];
                let i = e.split(n),
                    r = t;
                for (let t = 0; t < i.length;) {
                    let e;
                    if (!r || "object" != typeof r) return;
                    let s = "";
                    for (let a = t; a < i.length; ++a)
                        if (a !== t && (s += n), s += i[a], void 0 !== (e = r[s])) {
                            if (["string", "number", "boolean"].indexOf(typeof e) > -1 && a < i.length - 1) continue;
                            t += a - t + 1;
                            break
                        }
                    r = e
                }
                return r
            }

            function N(t) {
                return t && t.indexOf("_") > 0 ? t.replace("_", "-") : t
            }
            class v extends a {
                constructor(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        ns: ["translation"],
                        defaultNS: "translation"
                    };
                    super(), this.data = t || {}, this.options = e, void 0 === this.options.keySeparator && (this.options.keySeparator = "."), void 0 === this.options.ignoreJSONStructure && (this.options.ignoreJSONStructure = !0)
                }
                addNamespaces(t) {
                    0 > this.options.ns.indexOf(t) && this.options.ns.push(t)
                }
                removeNamespaces(t) {
                    let e = this.options.ns.indexOf(t);
                    e > -1 && this.options.ns.splice(e, 1)
                }
                getResource(t, e, n) {
                    let i, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        s = void 0 !== r.keySeparator ? r.keySeparator : this.options.keySeparator,
                        a = void 0 !== r.ignoreJSONStructure ? r.ignoreJSONStructure : this.options.ignoreJSONStructure;
                    t.indexOf(".") > -1 ? i = t.split(".") : (i = [t, e], n && (Array.isArray(n) ? i.push(...n) : "string" == typeof n && s ? i.push(...n.split(s)) : i.push(n)));
                    let o = d(this.data, i);
                    return (!o && !e && !n && t.indexOf(".") > -1 && (t = i[0], e = i[1], n = i.slice(2).join(".")), o || !a || "string" != typeof n) ? o : M(this.data && this.data[t] && this.data[t][e], n, s)
                }
                addResource(t, e, n, i) {
                    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                            silent: !1
                        },
                        s = void 0 !== r.keySeparator ? r.keySeparator : this.options.keySeparator,
                        a = [t, e];
                    n && (a = a.concat(s ? n.split(s) : n)), t.indexOf(".") > -1 && (a = t.split("."), i = e, e = a[1]), this.addNamespaces(e), h(this.data, a, i), r.silent || this.emit("added", t, e, n, i)
                }
                addResources(t, e, n) {
                    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                        silent: !1
                    };
                    for (let i in n)("string" == typeof n[i] || "[object Array]" === Object.prototype.toString.apply(n[i])) && this.addResource(t, e, i, n[i], {
                        silent: !0
                    });
                    i.silent || this.emit("added", t, e, n)
                }
                addResourceBundle(t, e, n, i, r) {
                    let s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                            silent: !1,
                            skipCopy: !1
                        },
                        a = [t, e];
                    t.indexOf(".") > -1 && (a = t.split("."), i = n, n = e, e = a[1]), this.addNamespaces(e);
                    let o = d(this.data, a) || {};
                    s.skipCopy || (n = JSON.parse(JSON.stringify(n))), i ? function t(e, n, i) {
                        for (let r in n) "__proto__" !== r && "constructor" !== r && (r in e ? "string" == typeof e[r] || e[r] instanceof String || "string" == typeof n[r] || n[r] instanceof String ? i && (e[r] = n[r]) : t(e[r], n[r], i) : e[r] = n[r]);
                        return e
                    }(o, n, r) : o = { ...o,
                        ...n
                    }, h(this.data, a, o), s.silent || this.emit("added", t, e, n)
                }
                removeResourceBundle(t, e) {
                    this.hasResourceBundle(t, e) && delete this.data[t][e], this.removeNamespaces(e), this.emit("removed", t, e)
                }
                hasResourceBundle(t, e) {
                    return void 0 !== this.getResource(t, e)
                }
                getResourceBundle(t, e) {
                    return (e || (e = this.options.defaultNS), "v1" === this.options.compatibilityAPI) ? { ...this.getResource(t, e)
                    } : this.getResource(t, e)
                }
                getDataByLanguage(t) {
                    return this.data[t]
                }
                hasLanguageSomeTranslations(t) {
                    let e = this.getDataByLanguage(t);
                    return !!(e && Object.keys(e) || []).find(t => e[t] && Object.keys(e[t]).length > 0)
                }
                toJSON() {
                    return this.data
                }
            }
            var L = {
                processors: {},
                addPostProcessor(t) {
                    this.processors[t.name] = t
                },
                handle(t, e, n, i, r) {
                    return t.forEach(t => {
                        this.processors[t] && (e = this.processors[t].process(e, n, i, r))
                    }), e
                }
            };
            let j = {};
            class I extends a {
                constructor(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    super(),
                        function(t, e, n) {
                            t.forEach(t => {
                                e[t] && (n[t] = e[t])
                            })
                        }(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this), this.options = e, void 0 === this.options.keySeparator && (this.options.keySeparator = "."), this.logger = s.create("translator")
                }
                changeLanguage(t) {
                    t && (this.language = t)
                }
                exists(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        interpolation: {}
                    };
                    if (null == t) return !1;
                    let n = this.resolve(t, e);
                    return n && void 0 !== n.res
                }
                extractFromKey(t, e) {
                    let n = void 0 !== e.nsSeparator ? e.nsSeparator : this.options.nsSeparator;
                    void 0 === n && (n = ":");
                    let i = void 0 !== e.keySeparator ? e.keySeparator : this.options.keySeparator,
                        r = e.ns || this.options.defaultNS || [],
                        s = n && t.indexOf(n) > -1,
                        a = !this.options.userDefinedKeySeparator && !e.keySeparator && !this.options.userDefinedNsSeparator && !e.nsSeparator && ! function(t, e, n) {
                            e = e || "", n = n || "";
                            let i = m.filter(t => 0 > e.indexOf(t) && 0 > n.indexOf(t));
                            if (0 === i.length) return !0;
                            let r = w.getRegExp(`(${i.map(t=>"?"===t?"\\?":t).join("|")})`),
                                s = !r.test(t);
                            if (!s) {
                                let e = t.indexOf(n);
                                e > 0 && !r.test(t.substring(0, e)) && (s = !0)
                            }
                            return s
                        }(t, n, i);
                    if (s && !a) {
                        let e = t.match(this.interpolator.nestingRegexp);
                        if (e && e.length > 0) return {
                            key: t,
                            namespaces: r
                        };
                        let s = t.split(n);
                        (n !== i || n === i && this.options.ns.indexOf(s[0]) > -1) && (r = s.shift()), t = s.join(i)
                    }
                    return "string" == typeof r && (r = [r]), {
                        key: t,
                        namespaces: r
                    }
                }
                translate(t, e, n) {
                    if ("object" != typeof e && this.options.overloadTranslationOptionHandler && (e = this.options.overloadTranslationOptionHandler(arguments)), "object" == typeof e && (e = { ...e
                        }), e || (e = {}), null == t) return "";
                    Array.isArray(t) || (t = [String(t)]);
                    let i = void 0 !== e.returnDetails ? e.returnDetails : this.options.returnDetails,
                        r = void 0 !== e.keySeparator ? e.keySeparator : this.options.keySeparator,
                        {
                            key: s,
                            namespaces: a
                        } = this.extractFromKey(t[t.length - 1], e),
                        o = a[a.length - 1],
                        l = e.lng || this.language,
                        u = e.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                    if (l && "cimode" === l.toLowerCase()) {
                        if (u) {
                            let t = e.nsSeparator || this.options.nsSeparator;
                            return i ? {
                                res: `${o}${t}${s}`,
                                usedKey: s,
                                exactUsedKey: s,
                                usedLng: l,
                                usedNS: o,
                                usedParams: this.getUsedParamsDetails(e)
                            } : `${o}${t}${s}`
                        }
                        return i ? {
                            res: s,
                            usedKey: s,
                            exactUsedKey: s,
                            usedLng: l,
                            usedNS: o,
                            usedParams: this.getUsedParamsDetails(e)
                        } : s
                    }
                    let c = this.resolve(t, e),
                        h = c && c.res,
                        d = c && c.usedKey || s,
                        g = c && c.exactUsedKey || s,
                        f = Object.prototype.toString.apply(h),
                        p = void 0 !== e.joinArrays ? e.joinArrays : this.options.joinArrays,
                        y = !this.i18nFormat || this.i18nFormat.handleAsObject,
                        m = "string" != typeof h && "boolean" != typeof h && "number" != typeof h;
                    if (y && h && m && 0 > ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(f) && !("string" == typeof p && "[object Array]" === f)) {
                        if (!e.returnObjects && !this.options.returnObjects) {
                            this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                            let t = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(d, h, { ...e,
                                ns: a
                            }) : `key '${s} (${this.language})' returned an object instead of string.`;
                            return i ? (c.res = t, c.usedParams = this.getUsedParamsDetails(e), c) : t
                        }
                        if (r) {
                            let t = "[object Array]" === f,
                                n = t ? [] : {},
                                i = t ? g : d;
                            for (let t in h)
                                if (Object.prototype.hasOwnProperty.call(h, t)) {
                                    let s = `${i}${r}${t}`;
                                    n[t] = this.translate(s, { ...e,
                                        joinArrays: !1,
                                        ns: a
                                    }), n[t] === s && (n[t] = h[t])
                                }
                            h = n
                        }
                    } else if (y && "string" == typeof p && "[object Array]" === f)(h = h.join(p)) && (h = this.extendTranslation(h, t, e, n));
                    else {
                        let i = !1,
                            a = !1,
                            u = void 0 !== e.count && "string" != typeof e.count,
                            d = I.hasDefaultValue(e),
                            g = u ? this.pluralResolver.getSuffix(l, e.count, e) : "",
                            f = e.ordinal && u ? this.pluralResolver.getSuffix(l, e.count, {
                                ordinal: !1
                            }) : "",
                            p = u && !e.ordinal && 0 === e.count && this.pluralResolver.shouldUseIntlApi(),
                            y = p && e[`defaultValue${this.options.pluralSeparator}zero`] || e[`defaultValue${g}`] || e[`defaultValue${f}`] || e.defaultValue;
                        !this.isValidLookup(h) && d && (i = !0, h = y), this.isValidLookup(h) || (a = !0, h = s);
                        let m = (e.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && a ? void 0 : h,
                            w = d && y !== h && this.options.updateMissing;
                        if (a || i || w) {
                            if (this.logger.log(w ? "updateKey" : "missingKey", l, o, s, w ? y : h), r) {
                                let t = this.resolve(s, { ...e,
                                    keySeparator: !1
                                });
                                t && t.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                            }
                            let t = [],
                                n = this.languageUtils.getFallbackCodes(this.options.fallbackLng, e.lng || this.language);
                            if ("fallback" === this.options.saveMissingTo && n && n[0])
                                for (let e = 0; e < n.length; e++) t.push(n[e]);
                            else "all" === this.options.saveMissingTo ? t = this.languageUtils.toResolveHierarchy(e.lng || this.language) : t.push(e.lng || this.language);
                            let i = (t, n, i) => {
                                let r = d && i !== h ? i : m;
                                this.options.missingKeyHandler ? this.options.missingKeyHandler(t, o, n, r, w, e) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(t, o, n, r, w, e), this.emit("missingKey", t, o, n, h)
                            };
                            this.options.saveMissing && (this.options.saveMissingPlurals && u ? t.forEach(t => {
                                let n = this.pluralResolver.getSuffixes(t, e);
                                p && e[`defaultValue${this.options.pluralSeparator}zero`] && 0 > n.indexOf(`${this.options.pluralSeparator}zero`) && n.push(`${this.options.pluralSeparator}zero`), n.forEach(n => {
                                    i([t], s + n, e[`defaultValue${n}`] || y)
                                })
                            }) : i(t, s, y))
                        }
                        h = this.extendTranslation(h, t, e, c, n), a && h === s && this.options.appendNamespaceToMissingKey && (h = `${o}:${s}`), (a || i) && this.options.parseMissingKeyHandler && (h = "v1" !== this.options.compatibilityAPI ? this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${o}:${s}` : s, i ? h : void 0) : this.options.parseMissingKeyHandler(h))
                    }
                    return i ? (c.res = h, c.usedParams = this.getUsedParamsDetails(e), c) : h
                }
                extendTranslation(t, e, n, i, r) {
                    var s = this;
                    if (this.i18nFormat && this.i18nFormat.parse) t = this.i18nFormat.parse(t, { ...this.options.interpolation.defaultVariables,
                        ...n
                    }, n.lng || this.language || i.usedLng, i.usedNS, i.usedKey, {
                        resolved: i
                    });
                    else if (!n.skipInterpolation) {
                        let a;
                        n.interpolation && this.interpolator.init({ ...n,
                            interpolation: { ...this.options.interpolation,
                                ...n.interpolation
                            }
                        });
                        let o = "string" == typeof t && (n && n.interpolation && void 0 !== n.interpolation.skipOnVariables ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
                        if (o) {
                            let e = t.match(this.interpolator.nestingRegexp);
                            a = e && e.length
                        }
                        let l = n.replace && "string" != typeof n.replace ? n.replace : n;
                        if (this.options.interpolation.defaultVariables && (l = { ...this.options.interpolation.defaultVariables,
                                ...l
                            }), t = this.interpolator.interpolate(t, l, n.lng || this.language, n), o) {
                            let e = t.match(this.interpolator.nestingRegexp);
                            a < (e && e.length) && (n.nest = !1)
                        }!n.lng && "v1" !== this.options.compatibilityAPI && i && i.res && (n.lng = i.usedLng), !1 !== n.nest && (t = this.interpolator.nest(t, function() {
                            for (var t = arguments.length, i = Array(t), a = 0; a < t; a++) i[a] = arguments[a];
                            return r && r[0] === i[0] && !n.context ? (s.logger.warn(`It seems you are nesting recursively key: ${i[0]} in key: ${e[0]}`), null) : s.translate(...i, e)
                        }, n)), n.interpolation && this.interpolator.reset()
                    }
                    let a = n.postProcess || this.options.postProcess,
                        o = "string" == typeof a ? [a] : a;
                    return null != t && o && o.length && !1 !== n.applyPostProcessor && (t = L.handle(o, t, e, this.options && this.options.postProcessPassResolved ? {
                        i18nResolved: { ...i,
                            usedParams: this.getUsedParamsDetails(n)
                        },
                        ...n
                    } : n, this)), t
                }
                resolve(t) {
                    let e, n, i, r, s, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return "string" == typeof t && (t = [t]), t.forEach(t => {
                        if (this.isValidLookup(e)) return;
                        let o = this.extractFromKey(t, a),
                            l = o.key;
                        n = l;
                        let u = o.namespaces;
                        this.options.fallbackNS && (u = u.concat(this.options.fallbackNS));
                        let c = void 0 !== a.count && "string" != typeof a.count,
                            h = c && !a.ordinal && 0 === a.count && this.pluralResolver.shouldUseIntlApi(),
                            d = void 0 !== a.context && ("string" == typeof a.context || "number" == typeof a.context) && "" !== a.context,
                            g = a.lngs ? a.lngs : this.languageUtils.toResolveHierarchy(a.lng || this.language, a.fallbackLng);
                        u.forEach(t => {
                            this.isValidLookup(e) || (s = t, !j[`${g[0]}-${t}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(s) && (j[`${g[0]}-${t}`] = !0, this.logger.warn(`key "${n}" for languages "${g.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), g.forEach(n => {
                                let s;
                                if (this.isValidLookup(e)) return;
                                r = n;
                                let o = [l];
                                if (this.i18nFormat && this.i18nFormat.addLookupKeys) this.i18nFormat.addLookupKeys(o, l, n, t, a);
                                else {
                                    let t;
                                    c && (t = this.pluralResolver.getSuffix(n, a.count, a));
                                    let e = `${this.options.pluralSeparator}zero`,
                                        i = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                                    if (c && (o.push(l + t), a.ordinal && 0 === t.indexOf(i) && o.push(l + t.replace(i, this.options.pluralSeparator)), h && o.push(l + e)), d) {
                                        let n = `${l}${this.options.contextSeparator}${a.context}`;
                                        o.push(n), c && (o.push(n + t), a.ordinal && 0 === t.indexOf(i) && o.push(n + t.replace(i, this.options.pluralSeparator)), h && o.push(n + e))
                                    }
                                }
                                for (; s = o.pop();) this.isValidLookup(e) || (i = s, e = this.getResource(n, t, s, a))
                            }))
                        })
                    }), {
                        res: e,
                        usedKey: n,
                        exactUsedKey: i,
                        usedLng: r,
                        usedNS: s
                    }
                }
                isValidLookup(t) {
                    return void 0 !== t && !(!this.options.returnNull && null === t) && !(!this.options.returnEmptyString && "" === t)
                }
                getResource(t, e, n) {
                    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(t, e, n, i) : this.resourceStore.getResource(t, e, n, i)
                }
                getUsedParamsDetails() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = t.replace && "string" != typeof t.replace,
                        n = e ? t.replace : t;
                    if (e && void 0 !== t.count && (n.count = t.count), this.options.interpolation.defaultVariables && (n = { ...this.options.interpolation.defaultVariables,
                            ...n
                        }), !e)
                        for (let t of (n = { ...n
                            }, ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"])) delete n[t];
                    return n
                }
                static hasDefaultValue(t) {
                    let e = "defaultValue";
                    for (let n in t)
                        if (Object.prototype.hasOwnProperty.call(t, n) && e === n.substring(0, e.length) && void 0 !== t[n]) return !0;
                    return !1
                }
            }

            function b(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }
            class S {
                constructor(t) {
                    this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = s.create("languageUtils")
                }
                getScriptPartFromCode(t) {
                    if (!(t = N(t)) || 0 > t.indexOf("-")) return null;
                    let e = t.split("-");
                    return 2 === e.length ? null : (e.pop(), "x" === e[e.length - 1].toLowerCase()) ? null : this.formatLanguageCode(e.join("-"))
                }
                getLanguagePartFromCode(t) {
                    if (!(t = N(t)) || 0 > t.indexOf("-")) return t;
                    let e = t.split("-");
                    return this.formatLanguageCode(e[0])
                }
                formatLanguageCode(t) {
                    if ("string" == typeof t && t.indexOf("-") > -1) {
                        let e = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
                            n = t.split("-");
                        return this.options.lowerCaseLng ? n = n.map(t => t.toLowerCase()) : 2 === n.length ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), e.indexOf(n[1].toLowerCase()) > -1 && (n[1] = b(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(), 2 === n[1].length && (n[1] = n[1].toUpperCase()), "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()), e.indexOf(n[1].toLowerCase()) > -1 && (n[1] = b(n[1].toLowerCase())), e.indexOf(n[2].toLowerCase()) > -1 && (n[2] = b(n[2].toLowerCase()))), n.join("-")
                    }
                    return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t
                }
                isSupportedCode(t) {
                    return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (t = this.getLanguagePartFromCode(t)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1
                }
                getBestMatchFromCodes(t) {
                    let e;
                    return t ? (t.forEach(t => {
                        if (e) return;
                        let n = this.formatLanguageCode(t);
                        (!this.options.supportedLngs || this.isSupportedCode(n)) && (e = n)
                    }), !e && this.options.supportedLngs && t.forEach(t => {
                        if (e) return;
                        let n = this.getLanguagePartFromCode(t);
                        if (this.isSupportedCode(n)) return e = n;
                        e = this.options.supportedLngs.find(t => {
                            if (t === n || !(0 > t.indexOf("-") && 0 > n.indexOf("-")) && (t.indexOf("-") > 0 && 0 > n.indexOf("-") && t.substring(0, t.indexOf("-")) === n || 0 === t.indexOf(n) && n.length > 1)) return t
                        })
                    }), e || (e = this.getFallbackCodes(this.options.fallbackLng)[0]), e) : null
                }
                getFallbackCodes(t, e) {
                    if (!t) return [];
                    if ("function" == typeof t && (t = t(e)), "string" == typeof t && (t = [t]), "[object Array]" === Object.prototype.toString.apply(t)) return t;
                    if (!e) return t.default || [];
                    let n = t[e];
                    return n || (n = t[this.getScriptPartFromCode(e)]), n || (n = t[this.formatLanguageCode(e)]), n || (n = t[this.getLanguagePartFromCode(e)]), n || (n = t.default), n || []
                }
                toResolveHierarchy(t, e) {
                    let n = this.getFallbackCodes(e || this.options.fallbackLng || [], t),
                        i = [],
                        r = t => {
                            t && (this.isSupportedCode(t) ? i.push(t) : this.logger.warn(`rejecting language code not found in supportedLngs: ${t}`))
                        };
                    return "string" == typeof t && (t.indexOf("-") > -1 || t.indexOf("_") > -1) ? ("languageOnly" !== this.options.load && r(this.formatLanguageCode(t)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && r(this.getScriptPartFromCode(t)), "currentOnly" !== this.options.load && r(this.getLanguagePartFromCode(t))) : "string" == typeof t && r(this.formatLanguageCode(t)), n.forEach(t => {
                        0 > i.indexOf(t) && r(this.formatLanguageCode(t))
                    }), i
                }
            }
            let D = [{
                    lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
                    nr: [1, 2],
                    fc: 1
                }, {
                    lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
                    nr: [1, 2],
                    fc: 2
                }, {
                    lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
                    nr: [1],
                    fc: 3
                }, {
                    lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
                    nr: [1, 2, 5],
                    fc: 4
                }, {
                    lngs: ["ar"],
                    nr: [0, 1, 2, 3, 11, 100],
                    fc: 5
                }, {
                    lngs: ["cs", "sk"],
                    nr: [1, 2, 5],
                    fc: 6
                }, {
                    lngs: ["csb", "pl"],
                    nr: [1, 2, 5],
                    fc: 7
                }, {
                    lngs: ["cy"],
                    nr: [1, 2, 3, 8],
                    fc: 8
                }, {
                    lngs: ["fr"],
                    nr: [1, 2],
                    fc: 9
                }, {
                    lngs: ["ga"],
                    nr: [1, 2, 3, 7, 11],
                    fc: 10
                }, {
                    lngs: ["gd"],
                    nr: [1, 2, 3, 20],
                    fc: 11
                }, {
                    lngs: ["is"],
                    nr: [1, 2],
                    fc: 12
                }, {
                    lngs: ["jv"],
                    nr: [0, 1],
                    fc: 13
                }, {
                    lngs: ["kw"],
                    nr: [1, 2, 3, 4],
                    fc: 14
                }, {
                    lngs: ["lt"],
                    nr: [1, 2, 10],
                    fc: 15
                }, {
                    lngs: ["lv"],
                    nr: [1, 2, 0],
                    fc: 16
                }, {
                    lngs: ["mk"],
                    nr: [1, 2],
                    fc: 17
                }, {
                    lngs: ["mnk"],
                    nr: [0, 1, 2],
                    fc: 18
                }, {
                    lngs: ["mt"],
                    nr: [1, 2, 11, 20],
                    fc: 19
                }, {
                    lngs: ["or"],
                    nr: [2, 1],
                    fc: 2
                }, {
                    lngs: ["ro"],
                    nr: [1, 2, 20],
                    fc: 20
                }, {
                    lngs: ["sl"],
                    nr: [5, 1, 2, 3],
                    fc: 21
                }, {
                    lngs: ["he", "iw"],
                    nr: [1, 2, 20, 21],
                    fc: 22
                }],
                O = {
                    1: function(t) {
                        return Number(t > 1)
                    },
                    2: function(t) {
                        return Number(1 != t)
                    },
                    3: function(t) {
                        return 0
                    },
                    4: function(t) {
                        return Number(t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2)
                    },
                    5: function(t) {
                        return Number(0 == t ? 0 : 1 == t ? 1 : 2 == t ? 2 : t % 100 >= 3 && t % 100 <= 10 ? 3 : t % 100 >= 11 ? 4 : 5)
                    },
                    6: function(t) {
                        return Number(1 == t ? 0 : t >= 2 && t <= 4 ? 1 : 2)
                    },
                    7: function(t) {
                        return Number(1 == t ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2)
                    },
                    8: function(t) {
                        return Number(1 == t ? 0 : 2 == t ? 1 : 8 != t && 11 != t ? 2 : 3)
                    },
                    9: function(t) {
                        return Number(t >= 2)
                    },
                    10: function(t) {
                        return Number(1 == t ? 0 : 2 == t ? 1 : t < 7 ? 2 : t < 11 ? 3 : 4)
                    },
                    11: function(t) {
                        return Number(1 == t || 11 == t ? 0 : 2 == t || 12 == t ? 1 : t > 2 && t < 20 ? 2 : 3)
                    },
                    12: function(t) {
                        return Number(t % 10 != 1 || t % 100 == 11)
                    },
                    13: function(t) {
                        return Number(0 !== t)
                    },
                    14: function(t) {
                        return Number(1 == t ? 0 : 2 == t ? 1 : 3 == t ? 2 : 3)
                    },
                    15: function(t) {
                        return Number(t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2)
                    },
                    16: function(t) {
                        return Number(t % 10 == 1 && t % 100 != 11 ? 0 : 0 !== t ? 1 : 2)
                    },
                    17: function(t) {
                        return Number(1 == t || t % 10 == 1 && t % 100 != 11 ? 0 : 1)
                    },
                    18: function(t) {
                        return Number(0 == t ? 0 : 1 == t ? 1 : 2)
                    },
                    19: function(t) {
                        return Number(1 == t ? 0 : 0 == t || t % 100 > 1 && t % 100 < 11 ? 1 : t % 100 > 10 && t % 100 < 20 ? 2 : 3)
                    },
                    20: function(t) {
                        return Number(1 == t ? 0 : 0 == t || t % 100 > 0 && t % 100 < 20 ? 1 : 2)
                    },
                    21: function(t) {
                        return Number(t % 100 == 1 ? 1 : t % 100 == 2 ? 2 : t % 100 == 3 || t % 100 == 4 ? 3 : 0)
                    },
                    22: function(t) {
                        return Number(1 == t ? 0 : 2 == t ? 1 : (t < 0 || t > 10) && t % 10 == 0 ? 2 : 3)
                    }
                },
                E = ["v1", "v2", "v3"],
                T = ["v4"],
                x = {
                    zero: 0,
                    one: 1,
                    two: 2,
                    few: 3,
                    many: 4,
                    other: 5
                };
            class A {
                constructor(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.languageUtils = t, this.options = e, this.logger = s.create("pluralResolver"), (!this.options.compatibilityJSON || T.includes(this.options.compatibilityJSON)) && ("undefined" == typeof Intl || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = function() {
                        let t = {};
                        return D.forEach(e => {
                            e.lngs.forEach(n => {
                                t[n] = {
                                    numbers: e.nr,
                                    plurals: O[e.fc]
                                }
                            })
                        }), t
                    }()
                }
                addRule(t, e) {
                    this.rules[t] = e
                }
                getRule(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (this.shouldUseIntlApi()) try {
                        return new Intl.PluralRules(N("dev" === t ? "en" : t), {
                            type: e.ordinal ? "ordinal" : "cardinal"
                        })
                    } catch (t) {
                        return
                    }
                    return this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)]
                }
                needsPlural(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = this.getRule(t, e);
                    return this.shouldUseIntlApi() ? n && n.resolvedOptions().pluralCategories.length > 1 : n && n.numbers.length > 1
                }
                getPluralFormsOfKey(t, e) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return this.getSuffixes(t, n).map(t => `${e}${t}`)
                }
                getSuffixes(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = this.getRule(t, e);
                    return n ? this.shouldUseIntlApi() ? n.resolvedOptions().pluralCategories.sort((t, e) => x[t] - x[e]).map(t => `${this.options.prepend}${e.ordinal?`ordinal${this.options.prepend}`:""}${t}`) : n.numbers.map(n => this.getSuffix(t, n, e)) : []
                }
                getSuffix(t, e) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        i = this.getRule(t, n);
                    return i ? this.shouldUseIntlApi() ? `${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${i.select(e)}` : this.getSuffixRetroCompatible(i, e) : (this.logger.warn(`no plural rule found for: ${t}`), "")
                }
                getSuffixRetroCompatible(t, e) {
                    let n = t.noAbs ? t.plurals(e) : t.plurals(Math.abs(e)),
                        i = t.numbers[n];
                    this.options.simplifyPluralSuffix && 2 === t.numbers.length && 1 === t.numbers[0] && (2 === i ? i = "plural" : 1 === i && (i = ""));
                    let r = () => this.options.prepend && i.toString() ? this.options.prepend + i.toString() : i.toString();
                    return "v1" === this.options.compatibilityJSON ? 1 === i ? "" : "number" == typeof i ? `_plural_${i.toString()}` : r() : "v2" === this.options.compatibilityJSON || this.options.simplifyPluralSuffix && 2 === t.numbers.length && 1 === t.numbers[0] ? r() : this.options.prepend && n.toString() ? this.options.prepend + n.toString() : n.toString()
                }
                shouldUseIntlApi() {
                    return !E.includes(this.options.compatibilityJSON)
                }
            }

            function C(t, e, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ".",
                    r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
                    s = function(t, e, n) {
                        let i = d(t, n);
                        return void 0 !== i ? i : d(e, n)
                    }(t, e, n);
                return !s && r && "string" == typeof n && void 0 === (s = M(t, n, i)) && (s = M(e, n, i)), s
            }
            class z {
                constructor() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.logger = s.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || (t => t), this.init(t)
                }
                init() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    t.interpolation || (t.interpolation = {
                        escapeValue: !0
                    });
                    let {
                        escape: e,
                        escapeValue: n,
                        useRawValueToEscape: i,
                        prefix: r,
                        prefixEscaped: s,
                        suffix: a,
                        suffixEscaped: o,
                        formatSeparator: l,
                        unescapeSuffix: u,
                        unescapePrefix: c,
                        nestingPrefix: h,
                        nestingPrefixEscaped: d,
                        nestingSuffix: f,
                        nestingSuffixEscaped: y,
                        nestingOptionsSeparator: m,
                        maxReplaces: w,
                        alwaysFormat: M
                    } = t.interpolation;
                    this.escape = void 0 !== e ? e : p, this.escapeValue = void 0 === n || n, this.useRawValueToEscape = void 0 !== i && i, this.prefix = r ? g(r) : s || "{{", this.suffix = a ? g(a) : o || "}}", this.formatSeparator = l || ",", this.unescapePrefix = u ? "" : c || "-", this.unescapeSuffix = this.unescapePrefix ? "" : u || "", this.nestingPrefix = h ? g(h) : d || g("$t("), this.nestingSuffix = f ? g(f) : y || g(")"), this.nestingOptionsSeparator = m || ",", this.maxReplaces = w || 1e3, this.alwaysFormat = void 0 !== M && M, this.resetRegExp()
                }
                reset() {
                    this.options && this.init(this.options)
                }
                resetRegExp() {
                    let t = (t, e) => t && t.source === e ? (t.lastIndex = 0, t) : RegExp(e, "g");
                    this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = t(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = t(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`)
                }
                interpolate(t, e, n, i) {
                    let r, s, a;
                    let o = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

                    function u(t) {
                        return t.replace(/\$/g, "$$$$")
                    }
                    let c = t => {
                        if (0 > t.indexOf(this.formatSeparator)) {
                            let r = C(e, o, t, this.options.keySeparator, this.options.ignoreJSONStructure);
                            return this.alwaysFormat ? this.format(r, void 0, n, { ...i,
                                ...e,
                                interpolationkey: t
                            }) : r
                        }
                        let r = t.split(this.formatSeparator),
                            s = r.shift().trim(),
                            a = r.join(this.formatSeparator).trim();
                        return this.format(C(e, o, s, this.options.keySeparator, this.options.ignoreJSONStructure), a, n, { ...i,
                            ...e,
                            interpolationkey: s
                        })
                    };
                    this.resetRegExp();
                    let h = i && i.missingInterpolationHandler || this.options.missingInterpolationHandler,
                        d = i && i.interpolation && void 0 !== i.interpolation.skipOnVariables ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
                    return [{
                        regex: this.regexpUnescape,
                        safeValue: t => u(t)
                    }, {
                        regex: this.regexp,
                        safeValue: t => this.escapeValue ? u(this.escape(t)) : u(t)
                    }].forEach(e => {
                        for (a = 0; r = e.regex.exec(t);) {
                            let n = r[1].trim();
                            if (void 0 === (s = c(n))) {
                                if ("function" == typeof h) {
                                    let e = h(t, r, i);
                                    s = "string" == typeof e ? e : ""
                                } else if (i && Object.prototype.hasOwnProperty.call(i, n)) s = "";
                                else if (d) {
                                    s = r[0];
                                    continue
                                } else this.logger.warn(`missed to pass in variable ${n} for interpolating ${t}`), s = ""
                            } else "string" == typeof s || this.useRawValueToEscape || (s = l(s));
                            let o = e.safeValue(s);
                            if (t = t.replace(r[0], o), d ? (e.regex.lastIndex += s.length, e.regex.lastIndex -= r[0].length) : e.regex.lastIndex = 0, ++a >= this.maxReplaces) break
                        }
                    }), t
                }
                nest(t, e) {
                    let n, i, r, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};

                    function a(t, e) {
                        let n = this.nestingOptionsSeparator;
                        if (0 > t.indexOf(n)) return t;
                        let i = t.split(RegExp(`${n}[ ]*{`)),
                            s = `{${i[1]}`;
                        t = i[0];
                        let a = (s = this.interpolate(s, r)).match(/'/g),
                            o = s.match(/"/g);
                        (a && a.length % 2 == 0 && !o || o.length % 2 != 0) && (s = s.replace(/'/g, '"'));
                        try {
                            r = JSON.parse(s), e && (r = { ...e,
                                ...r
                            })
                        } catch (e) {
                            return this.logger.warn(`failed parsing options string in nesting for key ${t}`, e), `${t}${n}${s}`
                        }
                        return r.defaultValue && r.defaultValue.indexOf(this.prefix) > -1 && delete r.defaultValue, t
                    }
                    for (; n = this.nestingRegexp.exec(t);) {
                        let o = [];
                        (r = (r = { ...s
                        }).replace && "string" != typeof r.replace ? r.replace : r).applyPostProcessor = !1, delete r.defaultValue;
                        let u = !1;
                        if (-1 !== n[0].indexOf(this.formatSeparator) && !/{.*}/.test(n[1])) {
                            let t = n[1].split(this.formatSeparator).map(t => t.trim());
                            n[1] = t.shift(), o = t, u = !0
                        }
                        if ((i = e(a.call(this, n[1].trim(), r), r)) && n[0] === t && "string" != typeof i) return i;
                        "string" != typeof i && (i = l(i)), i || (this.logger.warn(`missed to resolve ${n[1]} for nesting ${t}`), i = ""), u && (i = o.reduce((t, e) => this.format(t, e, s.lng, { ...s,
                            interpolationkey: n[1].trim()
                        }), i.trim())), t = t.replace(n[0], i), this.regexp.lastIndex = 0
                    }
                    return t
                }
            }

            function k(t) {
                let e = {};
                return function(n, i, r) {
                    let s = i + JSON.stringify(r),
                        a = e[s];
                    return a || (a = t(N(i), r), e[s] = a), a(n)
                }
            }
            class R {
                constructor() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.logger = s.create("formatter"), this.options = t, this.formats = {
                        number: k((t, e) => {
                            let n = new Intl.NumberFormat(t, { ...e
                            });
                            return t => n.format(t)
                        }),
                        currency: k((t, e) => {
                            let n = new Intl.NumberFormat(t, { ...e,
                                style: "currency"
                            });
                            return t => n.format(t)
                        }),
                        datetime: k((t, e) => {
                            let n = new Intl.DateTimeFormat(t, { ...e
                            });
                            return t => n.format(t)
                        }),
                        relativetime: k((t, e) => {
                            let n = new Intl.RelativeTimeFormat(t, { ...e
                            });
                            return t => n.format(t, e.range || "day")
                        }),
                        list: k((t, e) => {
                            let n = new Intl.ListFormat(t, { ...e
                            });
                            return t => n.format(t)
                        })
                    }, this.init(t)
                }
                init(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            interpolation: {}
                        },
                        n = e.interpolation;
                    this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ","
                }
                add(t, e) {
                    this.formats[t.toLowerCase().trim()] = e
                }
                addCached(t, e) {
                    this.formats[t.toLowerCase().trim()] = k(e)
                }
                format(t, e, n) {
                    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    return e.split(this.formatSeparator).reduce((t, e) => {
                        let {
                            formatName: r,
                            formatOptions: s
                        } = function(t) {
                            let e = t.toLowerCase().trim(),
                                n = {};
                            if (t.indexOf("(") > -1) {
                                let i = t.split("(");
                                e = i[0].toLowerCase().trim();
                                let r = i[1].substring(0, i[1].length - 1);
                                "currency" === e && 0 > r.indexOf(":") ? n.currency || (n.currency = r.trim()) : "relativetime" === e && 0 > r.indexOf(":") ? n.range || (n.range = r.trim()) : r.split(";").forEach(t => {
                                    if (!t) return;
                                    let [e, ...i] = t.split(":"), r = i.join(":").trim().replace(/^'+|'+$/g, "");
                                    n[e.trim()] || (n[e.trim()] = r), "false" === r && (n[e.trim()] = !1), "true" === r && (n[e.trim()] = !0), isNaN(r) || (n[e.trim()] = parseInt(r, 10))
                                })
                            }
                            return {
                                formatName: e,
                                formatOptions: n
                            }
                        }(e);
                        if (this.formats[r]) {
                            let e = t;
                            try {
                                let a = i && i.formatParams && i.formatParams[i.interpolationkey] || {},
                                    o = a.locale || a.lng || i.locale || i.lng || n;
                                e = this.formats[r](t, o, { ...s,
                                    ...i,
                                    ...a
                                })
                            } catch (t) {
                                this.logger.warn(t)
                            }
                            return e
                        }
                        return this.logger.warn(`there was no format function for ${r}`), t
                    }, t)
                }
            }
            class _ extends a {
                constructor(t, e, n) {
                    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    super(), this.backend = t, this.store = e, this.services = n, this.languageUtils = n.languageUtils, this.options = i, this.logger = s.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = i.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5, this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(n, i.backend, i)
                }
                queueLoad(t, e, n, i) {
                    let r = {},
                        s = {},
                        a = {},
                        o = {};
                    return t.forEach(t => {
                        let i = !0;
                        e.forEach(e => {
                            let a = `${t}|${e}`;
                            !n.reload && this.store.hasResourceBundle(t, e) ? this.state[a] = 2 : this.state[a] < 0 || (1 === this.state[a] ? void 0 === s[a] && (s[a] = !0) : (this.state[a] = 1, i = !1, void 0 === s[a] && (s[a] = !0), void 0 === r[a] && (r[a] = !0), void 0 === o[e] && (o[e] = !0)))
                        }), i || (a[t] = !0)
                    }), (Object.keys(r).length || Object.keys(s).length) && this.queue.push({
                        pending: s,
                        pendingCount: Object.keys(s).length,
                        loaded: {},
                        errors: [],
                        callback: i
                    }), {
                        toLoad: Object.keys(r),
                        pending: Object.keys(s),
                        toLoadLanguages: Object.keys(a),
                        toLoadNamespaces: Object.keys(o)
                    }
                }
                loaded(t, e, n) {
                    let i = t.split("|"),
                        r = i[0],
                        s = i[1];
                    e && this.emit("failedLoading", r, s, e), n && this.store.addResourceBundle(r, s, n, void 0, void 0, {
                        skipCopy: !0
                    }), this.state[t] = e ? -1 : 2;
                    let a = {};
                    this.queue.forEach(n => {
                        (function(t, e, n, i) {
                            let {
                                obj: r,
                                k: s
                            } = c(t, e, Object);
                            r[s] = r[s] || [], r[s].push(n)
                        })(n.loaded, [r], s), void 0 !== n.pending[t] && (delete n.pending[t], n.pendingCount--), e && n.errors.push(e), 0 !== n.pendingCount || n.done || (Object.keys(n.loaded).forEach(t => {
                            a[t] || (a[t] = {});
                            let e = n.loaded[t];
                            e.length && e.forEach(e => {
                                void 0 === a[t][e] && (a[t][e] = !0)
                            })
                        }), n.done = !0, n.errors.length ? n.callback(n.errors) : n.callback())
                    }), this.emit("loaded", a), this.queue = this.queue.filter(t => !t.done)
                }
                read(t, e, n) {
                    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.retryTimeout,
                        s = arguments.length > 5 ? arguments[5] : void 0;
                    if (!t.length) return s(null, {});
                    if (this.readingCalls >= this.maxParallelReads) {
                        this.waitingReads.push({
                            lng: t,
                            ns: e,
                            fcName: n,
                            tried: i,
                            wait: r,
                            callback: s
                        });
                        return
                    }
                    this.readingCalls++;
                    let a = (a, o) => {
                            if (this.readingCalls--, this.waitingReads.length > 0) {
                                let t = this.waitingReads.shift();
                                this.read(t.lng, t.ns, t.fcName, t.tried, t.wait, t.callback)
                            }
                            if (a && o && i < this.maxRetries) {
                                setTimeout(() => {
                                    this.read.call(this, t, e, n, i + 1, 2 * r, s)
                                }, r);
                                return
                            }
                            s(a, o)
                        },
                        o = this.backend[n].bind(this.backend);
                    if (2 === o.length) {
                        try {
                            let n = o(t, e);
                            n && "function" == typeof n.then ? n.then(t => a(null, t)).catch(a) : a(null, n)
                        } catch (t) {
                            a(t)
                        }
                        return
                    }
                    return o(t, e, a)
                }
                prepareLoading(t, e) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        i = arguments.length > 3 ? arguments[3] : void 0;
                    if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), i && i();
                    "string" == typeof t && (t = this.languageUtils.toResolveHierarchy(t)), "string" == typeof e && (e = [e]);
                    let r = this.queueLoad(t, e, n, i);
                    if (!r.toLoad.length) return r.pending.length || i(), null;
                    r.toLoad.forEach(t => {
                        this.loadOne(t)
                    })
                }
                load(t, e, n) {
                    this.prepareLoading(t, e, {}, n)
                }
                reload(t, e, n) {
                    this.prepareLoading(t, e, {
                        reload: !0
                    }, n)
                }
                loadOne(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        n = t.split("|"),
                        i = n[0],
                        r = n[1];
                    this.read(i, r, "read", void 0, void 0, (n, s) => {
                        n && this.logger.warn(`${e}loading namespace ${r} for language ${i} failed`, n), !n && s && this.logger.log(`${e}loaded namespace ${r} for language ${i}`, s), this.loaded(t, n, s)
                    })
                }
                saveMissing(t, e, n, i, r) {
                    let s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
                        a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {};
                    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(e)) {
                        this.logger.warn(`did not save key "${n}" as the namespace "${e}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
                        return
                    }
                    if (null != n && "" !== n) {
                        if (this.backend && this.backend.create) {
                            let o = { ...s,
                                    isUpdate: r
                                },
                                l = this.backend.create.bind(this.backend);
                            if (l.length < 6) try {
                                let r;
                                (r = 5 === l.length ? l(t, e, n, i, o) : l(t, e, n, i)) && "function" == typeof r.then ? r.then(t => a(null, t)).catch(a) : a(null, r)
                            } catch (t) {
                                a(t)
                            } else l(t, e, n, i, a, o)
                        }
                        t && t[0] && this.store.addResource(t[0], e, n, i)
                    }
                }
            }

            function P() {
                return {
                    debug: !1,
                    initImmediate: !0,
                    ns: ["translation"],
                    defaultNS: ["translation"],
                    fallbackLng: ["dev"],
                    fallbackNS: !1,
                    supportedLngs: !1,
                    nonExplicitSupportedLngs: !1,
                    load: "all",
                    preload: !1,
                    simplifyPluralSuffix: !0,
                    keySeparator: ".",
                    nsSeparator: ":",
                    pluralSeparator: "_",
                    contextSeparator: "_",
                    partialBundledLanguages: !1,
                    saveMissing: !1,
                    updateMissing: !1,
                    saveMissingTo: "fallback",
                    saveMissingPlurals: !0,
                    missingKeyHandler: !1,
                    missingInterpolationHandler: !1,
                    postProcess: !1,
                    postProcessPassResolved: !1,
                    returnNull: !1,
                    returnEmptyString: !0,
                    returnObjects: !1,
                    joinArrays: !1,
                    returnedObjectHandler: !1,
                    parseMissingKeyHandler: !1,
                    appendNamespaceToMissingKey: !1,
                    appendNamespaceToCIMode: !1,
                    overloadTranslationOptionHandler: function(t) {
                        let e = {};
                        if ("object" == typeof t[1] && (e = t[1]), "string" == typeof t[1] && (e.defaultValue = t[1]), "string" == typeof t[2] && (e.tDescription = t[2]), "object" == typeof t[2] || "object" == typeof t[3]) {
                            let n = t[3] || t[2];
                            Object.keys(n).forEach(t => {
                                e[t] = n[t]
                            })
                        }
                        return e
                    },
                    interpolation: {
                        escapeValue: !0,
                        format: t => t,
                        prefix: "{{",
                        suffix: "}}",
                        formatSeparator: ",",
                        unescapePrefix: "-",
                        nestingPrefix: "$t(",
                        nestingSuffix: ")",
                        nestingOptionsSeparator: ",",
                        maxReplaces: 1e3,
                        skipOnVariables: !0
                    }
                }
            }

            function U(t) {
                return "string" == typeof t.ns && (t.ns = [t.ns]), "string" == typeof t.fallbackLng && (t.fallbackLng = [t.fallbackLng]), "string" == typeof t.fallbackNS && (t.fallbackNS = [t.fallbackNS]), t.supportedLngs && 0 > t.supportedLngs.indexOf("cimode") && (t.supportedLngs = t.supportedLngs.concat(["cimode"])), t
            }

            function Q() {}
            class Y extends a {
                constructor() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = arguments.length > 1 ? arguments[1] : void 0;
                    if (super(), this.options = U(t), this.services = {}, this.logger = s, this.modules = {
                            external: []
                        }, function(t) {
                            Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(e => {
                                "function" == typeof t[e] && (t[e] = t[e].bind(t))
                            })
                        }(this), e && !this.isInitialized && !t.isClone) {
                        if (!this.options.initImmediate) return this.init(t, e), this;
                        setTimeout(() => {
                            this.init(t, e)
                        }, 0)
                    }
                }
                init() {
                    var t = this;
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 ? arguments[1] : void 0;
                    this.isInitializing = !0, "function" == typeof e && (n = e, e = {}), !e.defaultNS && !1 !== e.defaultNS && e.ns && ("string" == typeof e.ns ? e.defaultNS = e.ns : 0 > e.ns.indexOf("translation") && (e.defaultNS = e.ns[0]));
                    let i = P();

                    function r(t) {
                        return t ? "function" == typeof t ? new t : t : null
                    }
                    if (this.options = { ...i,
                            ...this.options,
                            ...U(e)
                        }, "v1" !== this.options.compatibilityAPI && (this.options.interpolation = { ...i.interpolation,
                            ...this.options.interpolation
                        }), void 0 !== e.keySeparator && (this.options.userDefinedKeySeparator = e.keySeparator), void 0 !== e.nsSeparator && (this.options.userDefinedNsSeparator = e.nsSeparator), !this.options.isClone) {
                        let e;
                        this.modules.logger ? s.init(r(this.modules.logger), this.options) : s.init(null, this.options), this.modules.formatter ? e = this.modules.formatter : "undefined" != typeof Intl && (e = R);
                        let n = new S(this.options);
                        this.store = new v(this.options.resources, this.options);
                        let a = this.services;
                        a.logger = s, a.resourceStore = this.store, a.languageUtils = n, a.pluralResolver = new A(n, {
                            prepend: this.options.pluralSeparator,
                            compatibilityJSON: this.options.compatibilityJSON,
                            simplifyPluralSuffix: this.options.simplifyPluralSuffix
                        }), e && (!this.options.interpolation.format || this.options.interpolation.format === i.interpolation.format) && (a.formatter = r(e), a.formatter.init(a, this.options), this.options.interpolation.format = a.formatter.format.bind(a.formatter)), a.interpolator = new z(this.options), a.utils = {
                            hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                        }, a.backendConnector = new _(r(this.modules.backend), a.resourceStore, a, this.options), a.backendConnector.on("*", function(e) {
                            for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                            t.emit(e, ...i)
                        }), this.modules.languageDetector && (a.languageDetector = r(this.modules.languageDetector), a.languageDetector.init && a.languageDetector.init(a, this.options.detection, this.options)), this.modules.i18nFormat && (a.i18nFormat = r(this.modules.i18nFormat), a.i18nFormat.init && a.i18nFormat.init(this)), this.translator = new I(this.services, this.options), this.translator.on("*", function(e) {
                            for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                            t.emit(e, ...i)
                        }), this.modules.external.forEach(t => {
                            t.init && t.init(this)
                        })
                    }
                    if (this.format = this.options.interpolation.format, n || (n = Q), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                        let t = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                        t.length > 0 && "dev" !== t[0] && (this.options.lng = t[0])
                    }
                    this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(e => {
                        this[e] = function() {
                            return t.store[e](...arguments)
                        }
                    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(e => {
                        this[e] = function() {
                            return t.store[e](...arguments), t
                        }
                    });
                    let a = o(),
                        l = () => {
                            let t = (t, e) => {
                                this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), a.resolve(e), n(t, e)
                            };
                            if (this.languages && "v1" !== this.options.compatibilityAPI && !this.isInitialized) return t(null, this.t.bind(this));
                            this.changeLanguage(this.options.lng, t)
                        };
                    return this.options.resources || !this.options.initImmediate ? l() : setTimeout(l, 0), a
                }
                loadResources(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Q,
                        n = e,
                        i = "string" == typeof t ? t : this.language;
                    if ("function" == typeof t && (n = t), !this.options.resources || this.options.partialBundledLanguages) {
                        if (i && "cimode" === i.toLowerCase() && (!this.options.preload || 0 === this.options.preload.length)) return n();
                        let t = [],
                            e = e => {
                                e && "cimode" !== e && this.services.languageUtils.toResolveHierarchy(e).forEach(e => {
                                    "cimode" !== e && 0 > t.indexOf(e) && t.push(e)
                                })
                            };
                        i ? e(i) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(t => e(t)), this.options.preload && this.options.preload.forEach(t => e(t)), this.services.backendConnector.load(t, this.options.ns, t => {
                            t || this.resolvedLanguage || !this.language || this.setResolvedLanguage(this.language), n(t)
                        })
                    } else n(null)
                }
                reloadResources(t, e, n) {
                    let i = o();
                    return t || (t = this.languages), e || (e = this.options.ns), n || (n = Q), this.services.backendConnector.reload(t, e, t => {
                        i.resolve(), n(t)
                    }), i
                }
                use(t) {
                    if (!t) throw Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
                    if (!t.type) throw Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
                    return "backend" === t.type && (this.modules.backend = t), ("logger" === t.type || t.log && t.warn && t.error) && (this.modules.logger = t), "languageDetector" === t.type && (this.modules.languageDetector = t), "i18nFormat" === t.type && (this.modules.i18nFormat = t), "postProcessor" === t.type && L.addPostProcessor(t), "formatter" === t.type && (this.modules.formatter = t), "3rdParty" === t.type && this.modules.external.push(t), this
                }
                setResolvedLanguage(t) {
                    if (t && this.languages && !(["cimode", "dev"].indexOf(t) > -1))
                        for (let t = 0; t < this.languages.length; t++) {
                            let e = this.languages[t];
                            if (!(["cimode", "dev"].indexOf(e) > -1) && this.store.hasLanguageSomeTranslations(e)) {
                                this.resolvedLanguage = e;
                                break
                            }
                        }
                }
                changeLanguage(t, e) {
                    var n = this;
                    this.isLanguageChangingTo = t;
                    let i = o();
                    this.emit("languageChanging", t);
                    let r = t => {
                            this.language = t, this.languages = this.services.languageUtils.toResolveHierarchy(t), this.resolvedLanguage = void 0, this.setResolvedLanguage(t)
                        },
                        s = (t, s) => {
                            s ? (r(s), this.translator.changeLanguage(s), this.isLanguageChangingTo = void 0, this.emit("languageChanged", s), this.logger.log("languageChanged", s)) : this.isLanguageChangingTo = void 0, i.resolve(function() {
                                return n.t(...arguments)
                            }), e && e(t, function() {
                                return n.t(...arguments)
                            })
                        },
                        a = e => {
                            t || e || !this.services.languageDetector || (e = []);
                            let n = "string" == typeof e ? e : this.services.languageUtils.getBestMatchFromCodes(e);
                            n && (this.language || r(n), this.translator.language || this.translator.changeLanguage(n), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(n)), this.loadResources(n, t => {
                                s(t, n)
                            })
                        };
                    return t || !this.services.languageDetector || this.services.languageDetector.async ? !t && this.services.languageDetector && this.services.languageDetector.async ? 0 === this.services.languageDetector.detect.length ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(t) : a(this.services.languageDetector.detect()), i
                }
                getFixedT(t, e, n) {
                    var i = this;
                    let r = function(t, e) {
                        let s, a;
                        if ("object" != typeof e) {
                            for (var o = arguments.length, l = Array(o > 2 ? o - 2 : 0), u = 2; u < o; u++) l[u - 2] = arguments[u];
                            s = i.options.overloadTranslationOptionHandler([t, e].concat(l))
                        } else s = { ...e
                        };
                        s.lng = s.lng || r.lng, s.lngs = s.lngs || r.lngs, s.ns = s.ns || r.ns, s.keyPrefix = s.keyPrefix || n || r.keyPrefix;
                        let c = i.options.keySeparator || ".";
                        return a = s.keyPrefix && Array.isArray(t) ? t.map(t => `${s.keyPrefix}${c}${t}`) : s.keyPrefix ? `${s.keyPrefix}${c}${t}` : t, i.t(a, s)
                    };
                    return "string" == typeof t ? r.lng = t : r.lngs = t, r.ns = e, r.keyPrefix = n, r
                }
                t() {
                    return this.translator && this.translator.translate(...arguments)
                }
                exists() {
                    return this.translator && this.translator.exists(...arguments)
                }
                setDefaultNamespace(t) {
                    this.options.defaultNS = t
                }
                hasLoadedNamespace(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
                    if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
                    let n = e.lng || this.resolvedLanguage || this.languages[0],
                        i = !!this.options && this.options.fallbackLng,
                        r = this.languages[this.languages.length - 1];
                    if ("cimode" === n.toLowerCase()) return !0;
                    let s = (t, e) => {
                        let n = this.services.backendConnector.state[`${t}|${e}`];
                        return -1 === n || 2 === n
                    };
                    if (e.precheck) {
                        let t = e.precheck(this, s);
                        if (void 0 !== t) return t
                    }
                    return !!(this.hasResourceBundle(n, t) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || s(n, t) && (!i || s(r, t)))
                }
                loadNamespaces(t, e) {
                    let n = o();
                    return this.options.ns ? ("string" == typeof t && (t = [t]), t.forEach(t => {
                        0 > this.options.ns.indexOf(t) && this.options.ns.push(t)
                    }), this.loadResources(t => {
                        n.resolve(), e && e(t)
                    }), n) : (e && e(), Promise.resolve())
                }
                loadLanguages(t, e) {
                    let n = o();
                    "string" == typeof t && (t = [t]);
                    let i = this.options.preload || [],
                        r = t.filter(t => 0 > i.indexOf(t) && this.services.languageUtils.isSupportedCode(t));
                    return r.length ? (this.options.preload = i.concat(r), this.loadResources(t => {
                        n.resolve(), e && e(t)
                    }), n) : (e && e(), Promise.resolve())
                }
                dir(t) {
                    return (t || (t = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), t) ? ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"].indexOf((this.services && this.services.languageUtils || new S(P())).getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr" : "rtl"
                }
                static createInstance() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = arguments.length > 1 ? arguments[1] : void 0;
                    return new Y(t, e)
                }
                cloneInstance() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Q,
                        n = t.forkResourceStore;
                    n && delete t.forkResourceStore;
                    let i = { ...this.options,
                            ...t,
                            isClone: !0
                        },
                        r = new Y(i);
                    return (void 0 !== t.debug || void 0 !== t.prefix) && (r.logger = r.logger.clone(t)), ["store", "services", "language"].forEach(t => {
                        r[t] = this[t]
                    }), r.services = { ...this.services
                    }, r.services.utils = {
                        hasLoadedNamespace: r.hasLoadedNamespace.bind(r)
                    }, n && (r.store = new v(this.store.data, i), r.services.resourceStore = r.store), r.translator = new I(r.services, i), r.translator.on("*", function(t) {
                        for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
                        r.emit(t, ...n)
                    }), r.init(i, e), r.translator.options = i, r.translator.backendConnector.services.utils = {
                        hasLoadedNamespace: r.hasLoadedNamespace.bind(r)
                    }, r
                }
                toJSON() {
                    return {
                        options: this.options,
                        store: this.store,
                        language: this.language,
                        languages: this.languages,
                        resolvedLanguage: this.resolvedLanguage
                    }
                }
            }
            let W = Y.createInstance();
            W.createInstance = Y.createInstance, W.createInstance, W.dir, W.init, W.loadResources, W.reloadResources, W.use, W.changeLanguage, W.getFixedT, W.t, W.exists, W.setDefaultNamespace, W.hasLoadedNamespace, W.loadNamespaces, W.loadLanguages
        }
    }
]);