! function() {
    try {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            e = (new t.Error).stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "976c6b99-fff4-47c7-9974-d08ef8ad03f4", t._sentryDebugIdIdentifier = "sentry-dbid-976c6b99-fff4-47c7-9974-d08ef8ad03f4")
    } catch (t) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3912], {
        33912: function(t, e, n) {
            let r, i;
            /*!
             * @kurkle/color v0.3.2
             * https://github.com/kurkle/color#readme
             * (c) 2023 Jukka Kurkela
             * Released under the MIT License
             */
            function o(t) {
                return t + .5 | 0
            }
            n.d(e, {
                $: function() {
                    return eh
                },
                A: function() {
                    return tF
                },
                B: function() {
                    return tW
                },
                C: function() {
                    return ec
                },
                D: function() {
                    return tO
                },
                E: function() {
                    return ek
                },
                F: function() {
                    return q
                },
                G: function() {
                    return eG
                },
                H: function() {
                    return ts
                },
                I: function() {
                    return eq
                },
                J: function() {
                    return e5
                },
                K: function() {
                    return e1
                },
                L: function() {
                    return tH
                },
                M: function() {
                    return eX
                },
                N: function() {
                    return tm
                },
                O: function() {
                    return D
                },
                P: function() {
                    return ta
                },
                Q: function() {
                    return X
                },
                R: function() {
                    return eT
                },
                S: function() {
                    return tR
                },
                T: function() {
                    return tl
                },
                U: function() {
                    return tk
                },
                V: function() {
                    return ei
                },
                W: function() {
                    return tI
                },
                X: function() {
                    return ea
                },
                Y: function() {
                    return es
                },
                Z: function() {
                    return ep
                },
                _: function() {
                    return tD
                },
                a: function() {
                    return eO
                },
                a0: function() {
                    return e_
                },
                a1: function() {
                    return tX
                },
                a2: function() {
                    return tq
                },
                a3: function() {
                    return t6
                },
                a4: function() {
                    return K
                },
                a5: function() {
                    return te
                },
                a6: function() {
                    return t7
                },
                a7: function() {
                    return tr
                },
                a8: function() {
                    return function t(e, n, r, i) {
                        return new Proxy({
                            _cacheable: !1,
                            _proxy: e,
                            _context: n,
                            _subProxy: r,
                            _stack: new Set,
                            _descriptors: eC(e, i),
                            setContext: n => t(e, n, r, i),
                            override: o => t(e.override(o), n, r, i)
                        }, {
                            deleteProperty: (t, n) => (delete t[n], delete e[n], !0),
                            get: (e, n, r) => ej(e, n, () => (function(e, n, r) {
                                let {
                                    _proxy: i,
                                    _context: o,
                                    _subProxy: a,
                                    _descriptors: l
                                } = e, u = i[n];
                                return tr(u) && l.isScriptable(n) && (u = function(t, e, n, r) {
                                    let {
                                        _proxy: i,
                                        _context: o,
                                        _subProxy: a,
                                        _stack: l
                                    } = n;
                                    if (l.has(t)) throw Error("Recursion detected: " + Array.from(l).join("->") + "->" + t);
                                    l.add(t);
                                    let u = e(o, a || r);
                                    return l.delete(t), eI(t, u) && (u = eW(i._scopes, i, t, u)), u
                                }(n, u, e, r)), Y(u) && u.length && (u = function(e, n, r, i) {
                                    let {
                                        _proxy: o,
                                        _context: a,
                                        _subProxy: l,
                                        _descriptors: u
                                    } = r;
                                    if (void 0 !== a.index && i(e)) return n[a.index % n.length];
                                    if (N(n[0])) {
                                        let r = n,
                                            i = o._scopes.filter(t => t !== r);
                                        for (let f of (n = [], r)) {
                                            let r = eW(i, o, e, f);
                                            n.push(t(r, a, l && l[e], u))
                                        }
                                    }
                                    return n
                                }(n, u, e, l.isIndexable)), eI(n, u) && (u = t(u, o, a && a[n], l)), u
                            })(e, n, r)),
                            getOwnPropertyDescriptor: (t, n) => t._descriptors.allKeys ? Reflect.has(e, n) ? {
                                enumerable: !0,
                                configurable: !0
                            } : void 0 : Reflect.getOwnPropertyDescriptor(e, n),
                            getPrototypeOf: () => Reflect.getPrototypeOf(e),
                            has: (t, n) => Reflect.has(e, n),
                            ownKeys: () => Reflect.ownKeys(e),
                            set: (t, n, r) => (e[n] = r, delete t[n], !0)
                        })
                    }
                },
                a9: function() {
                    return eS
                },
                aA: function() {
                    return e9
                },
                aB: function() {
                    return tz
                },
                aC: function() {
                    return e6
                },
                aD: function() {
                    return ef
                },
                aE: function() {
                    return tT
                },
                aF: function() {
                    return W
                },
                aG: function() {
                    return tw
                },
                aH: function() {
                    return ty
                },
                aI: function() {
                    return tv
                },
                aJ: function() {
                    return tb
                },
                aK: function() {
                    return t_
                },
                aL: function() {
                    return t9
                },
                aM: function() {
                    return tg
                },
                aN: function() {
                    return eo
                },
                aO: function() {
                    return tE
                },
                aP: function() {
                    return tA
                },
                aa: function() {
                    return eC
                },
                ab: function() {
                    return U
                },
                ac: function() {
                    return F
                },
                ad: function() {
                    return t$
                },
                ae: function() {
                    return e0
                },
                af: function() {
                    return el
                },
                ag: function() {
                    return ti
                },
                ah: function() {
                    return z
                },
                ai: function() {
                    return to
                },
                aj: function() {
                    return tj
                },
                ak: function() {
                    return ev
                },
                al: function() {
                    return e$
                },
                am: function() {
                    return nr
                },
                an: function() {
                    return nn
                },
                ao: function() {
                    return e8
                },
                ap: function() {
                    return e4
                },
                aq: function() {
                    return e2
                },
                ar: function() {
                    return ed
                },
                as: function() {
                    return eg
                },
                at: function() {
                    return eu
                },
                au: function() {
                    return eb
                },
                av: function() {
                    return ew
                },
                aw: function() {
                    return eM
                },
                ax: function() {
                    return ne
                },
                ay: function() {
                    return tS
                },
                az: function() {
                    return e3
                },
                b: function() {
                    return Y
                },
                c: function() {
                    return t0
                },
                d: function() {
                    return er
                },
                e: function() {
                    return tJ
                },
                f: function() {
                    return tt
                },
                g: function() {
                    return B
                },
                h: function() {
                    return tn
                },
                i: function() {
                    return N
                },
                j: function() {
                    return eP
                },
                k: function() {
                    return E
                },
                l: function() {
                    return tN
                },
                m: function() {
                    return H
                },
                n: function() {
                    return $
                },
                o: function() {
                    return t4
                },
                p: function() {
                    return tC
                },
                q: function() {
                    return tZ
                },
                r: function() {
                    return tL
                },
                s: function() {
                    return tp
                },
                t: function() {
                    return tM
                },
                u: function() {
                    return tB
                },
                v: function() {
                    return L
                },
                w: function() {
                    return tQ
                },
                x: function() {
                    return tx
                },
                y: function() {
                    return eN
                },
                z: function() {
                    return eU
                }
            });
            let a = (t, e, n) => Math.max(Math.min(t, n), e);

            function l(t) {
                return a(o(2.55 * t), 0, 255)
            }

            function u(t) {
                return a(o(255 * t), 0, 255)
            }

            function f(t) {
                return a(o(t / 2.55) / 100, 0, 1)
            }

            function c(t) {
                return a(o(100 * t), 0, 100)
            }
            let s = {
                    0: 0,
                    1: 1,
                    2: 2,
                    3: 3,
                    4: 4,
                    5: 5,
                    6: 6,
                    7: 7,
                    8: 8,
                    9: 9,
                    A: 10,
                    B: 11,
                    C: 12,
                    D: 13,
                    E: 14,
                    F: 15,
                    a: 10,
                    b: 11,
                    c: 12,
                    d: 13,
                    e: 14,
                    f: 15
                },
                h = [..."0123456789ABCDEF"],
                d = t => h[15 & t],
                g = t => h[(240 & t) >> 4] + h[15 & t],
                p = t => (240 & t) >> 4 == (15 & t),
                b = t => p(t.r) && p(t.g) && p(t.b) && p(t.a),
                y = (t, e) => t < 255 ? e(t) : "",
                m = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;

            function x(t, e, n) {
                let r = e * Math.min(n, 1 - n),
                    i = (e, i = (e + t / 30) % 12) => n - r * Math.max(Math.min(i - 3, 9 - i, 1), -1);
                return [i(0), i(8), i(4)]
            }

            function v(t, e, n) {
                let r = (r, i = (r + t / 60) % 6) => n - n * e * Math.max(Math.min(i, 4 - i, 1), 0);
                return [r(5), r(3), r(1)]
            }

            function w(t, e, n) {
                let r;
                let i = x(t, 1, .5);
                for (e + n > 1 && (r = 1 / (e + n), e *= r, n *= r), r = 0; r < 3; r++) i[r] *= 1 - e - n, i[r] += e;
                return i
            }

            function M(t) {
                let e, n, r;
                let i = t.r / 255,
                    o = t.g / 255,
                    a = t.b / 255,
                    l = Math.max(i, o, a),
                    u = Math.min(i, o, a),
                    f = (l + u) / 2;
                return l !== u && (r = l - u, n = f > .5 ? r / (2 - l - u) : r / (l + u), e = 60 * (e = i === l ? (o - a) / r + (o < a ? 6 : 0) : o === l ? (a - i) / r + 2 : (i - o) / r + 4) + .5), [0 | e, n || 0, f]
            }

            function k(t, e, n, r) {
                return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, n, r)).map(u)
            }

            function _(t) {
                return (t % 360 + 360) % 360
            }
            let O = {
                    x: "dark",
                    Z: "light",
                    Y: "re",
                    X: "blu",
                    W: "gr",
                    V: "medium",
                    U: "slate",
                    A: "ee",
                    T: "ol",
                    S: "or",
                    B: "ra",
                    C: "lateg",
                    D: "ights",
                    R: "in",
                    Q: "turquois",
                    E: "hi",
                    P: "ro",
                    O: "al",
                    N: "le",
                    M: "de",
                    L: "yello",
                    F: "en",
                    K: "ch",
                    G: "arks",
                    H: "ea",
                    I: "ightg",
                    J: "wh"
                },
                T = {
                    OiceXe: "f0f8ff",
                    antiquewEte: "faebd7",
                    aqua: "ffff",
                    aquamarRe: "7fffd4",
                    azuY: "f0ffff",
                    beige: "f5f5dc",
                    bisque: "ffe4c4",
                    black: "0",
                    blanKedOmond: "ffebcd",
                    Xe: "ff",
                    XeviTet: "8a2be2",
                    bPwn: "a52a2a",
                    burlywood: "deb887",
                    caMtXe: "5f9ea0",
                    KartYuse: "7fff00",
                    KocTate: "d2691e",
                    cSO: "ff7f50",
                    cSnflowerXe: "6495ed",
                    cSnsilk: "fff8dc",
                    crimson: "dc143c",
                    cyan: "ffff",
                    xXe: "8b",
                    xcyan: "8b8b",
                    xgTMnPd: "b8860b",
                    xWay: "a9a9a9",
                    xgYF: "6400",
                    xgYy: "a9a9a9",
                    xkhaki: "bdb76b",
                    xmagFta: "8b008b",
                    xTivegYF: "556b2f",
                    xSange: "ff8c00",
                    xScEd: "9932cc",
                    xYd: "8b0000",
                    xsOmon: "e9967a",
                    xsHgYF: "8fbc8f",
                    xUXe: "483d8b",
                    xUWay: "2f4f4f",
                    xUgYy: "2f4f4f",
                    xQe: "ced1",
                    xviTet: "9400d3",
                    dAppRk: "ff1493",
                    dApskyXe: "bfff",
                    dimWay: "696969",
                    dimgYy: "696969",
                    dodgerXe: "1e90ff",
                    fiYbrick: "b22222",
                    flSOwEte: "fffaf0",
                    foYstWAn: "228b22",
                    fuKsia: "ff00ff",
                    gaRsbSo: "dcdcdc",
                    ghostwEte: "f8f8ff",
                    gTd: "ffd700",
                    gTMnPd: "daa520",
                    Way: "808080",
                    gYF: "8000",
                    gYFLw: "adff2f",
                    gYy: "808080",
                    honeyMw: "f0fff0",
                    hotpRk: "ff69b4",
                    RdianYd: "cd5c5c",
                    Rdigo: "4b0082",
                    ivSy: "fffff0",
                    khaki: "f0e68c",
                    lavFMr: "e6e6fa",
                    lavFMrXsh: "fff0f5",
                    lawngYF: "7cfc00",
                    NmoncEffon: "fffacd",
                    ZXe: "add8e6",
                    ZcSO: "f08080",
                    Zcyan: "e0ffff",
                    ZgTMnPdLw: "fafad2",
                    ZWay: "d3d3d3",
                    ZgYF: "90ee90",
                    ZgYy: "d3d3d3",
                    ZpRk: "ffb6c1",
                    ZsOmon: "ffa07a",
                    ZsHgYF: "20b2aa",
                    ZskyXe: "87cefa",
                    ZUWay: "778899",
                    ZUgYy: "778899",
                    ZstAlXe: "b0c4de",
                    ZLw: "ffffe0",
                    lime: "ff00",
                    limegYF: "32cd32",
                    lRF: "faf0e6",
                    magFta: "ff00ff",
                    maPon: "800000",
                    VaquamarRe: "66cdaa",
                    VXe: "cd",
                    VScEd: "ba55d3",
                    VpurpN: "9370db",
                    VsHgYF: "3cb371",
                    VUXe: "7b68ee",
                    VsprRggYF: "fa9a",
                    VQe: "48d1cc",
                    VviTetYd: "c71585",
                    midnightXe: "191970",
                    mRtcYam: "f5fffa",
                    mistyPse: "ffe4e1",
                    moccasR: "ffe4b5",
                    navajowEte: "ffdead",
                    navy: "80",
                    Tdlace: "fdf5e6",
                    Tive: "808000",
                    TivedBb: "6b8e23",
                    Sange: "ffa500",
                    SangeYd: "ff4500",
                    ScEd: "da70d6",
                    pOegTMnPd: "eee8aa",
                    pOegYF: "98fb98",
                    pOeQe: "afeeee",
                    pOeviTetYd: "db7093",
                    papayawEp: "ffefd5",
                    pHKpuff: "ffdab9",
                    peru: "cd853f",
                    pRk: "ffc0cb",
                    plum: "dda0dd",
                    powMrXe: "b0e0e6",
                    purpN: "800080",
                    YbeccapurpN: "663399",
                    Yd: "ff0000",
                    Psybrown: "bc8f8f",
                    PyOXe: "4169e1",
                    saddNbPwn: "8b4513",
                    sOmon: "fa8072",
                    sandybPwn: "f4a460",
                    sHgYF: "2e8b57",
                    sHshell: "fff5ee",
                    siFna: "a0522d",
                    silver: "c0c0c0",
                    skyXe: "87ceeb",
                    UXe: "6a5acd",
                    UWay: "708090",
                    UgYy: "708090",
                    snow: "fffafa",
                    sprRggYF: "ff7f",
                    stAlXe: "4682b4",
                    tan: "d2b48c",
                    teO: "8080",
                    tEstN: "d8bfd8",
                    tomato: "ff6347",
                    Qe: "40e0d0",
                    viTet: "ee82ee",
                    JHt: "f5deb3",
                    wEte: "ffffff",
                    wEtesmoke: "f5f5f5",
                    Lw: "ffff00",
                    LwgYF: "9acd32"
                },
                P = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,
                S = t => t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055,
                C = t => t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);

            function R(t, e, n) {
                if (t) {
                    let r = M(t);
                    r[e] = Math.max(0, Math.min(r[e] + r[e] * n, 0 === e ? 360 : 1)), r = k(x, r, void 0, void 0), t.r = r[0], t.g = r[1], t.b = r[2]
                }
            }

            function I(t, e) {
                return t ? Object.assign(e || {}, t) : t
            }

            function j(t) {
                var e = {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 255
                };
                return Array.isArray(t) ? t.length >= 3 && (e = {
                    r: t[0],
                    g: t[1],
                    b: t[2],
                    a: 255
                }, t.length > 3 && (e.a = u(t[3]))) : (e = I(t, {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 1
                })).a = u(e.a), e
            }
            class A {
                constructor(t) {
                    let e;
                    if (t instanceof A) return t;
                    let n = typeof t;
                    if ("object" === n) e = j(t);
                    else if ("string" === n) {
                        var i, o;
                        o = t.length, "#" === t[0] && (4 === o || 5 === o ? i = {
                            r: 255 & 17 * s[t[1]],
                            g: 255 & 17 * s[t[2]],
                            b: 255 & 17 * s[t[3]],
                            a: 5 === o ? 17 * s[t[4]] : 255
                        } : (7 === o || 9 === o) && (i = {
                            r: s[t[1]] << 4 | s[t[2]],
                            g: s[t[3]] << 4 | s[t[4]],
                            b: s[t[5]] << 4 | s[t[6]],
                            a: 9 === o ? s[t[7]] << 4 | s[t[8]] : 255
                        })), e = i || function(t) {
                            r || ((r = function() {
                                let t, e, n, r, i;
                                let o = {},
                                    a = Object.keys(T),
                                    l = Object.keys(O);
                                for (t = 0; t < a.length; t++) {
                                    for (e = 0, r = i = a[t]; e < l.length; e++) n = l[e], i = i.replace(n, O[n]);
                                    n = parseInt(T[r], 16), o[i] = [n >> 16 & 255, n >> 8 & 255, 255 & n]
                                }
                                return o
                            }()).transparent = [0, 0, 0, 0]);
                            let e = r[t.toLowerCase()];
                            return e && {
                                r: e[0],
                                g: e[1],
                                b: e[2],
                                a: 4 === e.length ? e[3] : 255
                            }
                        }(t) || ("r" === t.charAt(0) ? function(t) {
                            let e, n, r;
                            let i = P.exec(t),
                                o = 255;
                            if (i) {
                                if (i[7] !== e) {
                                    let t = +i[7];
                                    o = i[8] ? l(t) : a(255 * t, 0, 255)
                                }
                                return e = +i[1], n = +i[3], r = +i[5], {
                                    r: e = 255 & (i[2] ? l(e) : a(e, 0, 255)),
                                    g: n = 255 & (i[4] ? l(n) : a(n, 0, 255)),
                                    b: r = 255 & (i[6] ? l(r) : a(r, 0, 255)),
                                    a: o
                                }
                            }
                        }(t) : function(t) {
                            let e;
                            let n = m.exec(t),
                                r = 255;
                            if (!n) return;
                            n[5] !== e && (r = n[6] ? l(+n[5]) : u(+n[5]));
                            let i = _(+n[2]),
                                o = +n[3] / 100,
                                a = +n[4] / 100;
                            return {
                                r: (e = "hwb" === n[1] ? k(w, i, o, a) : "hsv" === n[1] ? k(v, i, o, a) : k(x, i, o, a))[0],
                                g: e[1],
                                b: e[2],
                                a: r
                            }
                        }(t))
                    }
                    this._rgb = e, this._valid = !!e
                }
                get valid() {
                    return this._valid
                }
                get rgb() {
                    var t = I(this._rgb);
                    return t && (t.a = f(t.a)), t
                }
                set rgb(t) {
                    this._rgb = j(t)
                }
                rgbString() {
                    var t;
                    return this._valid ? (t = this._rgb) && (t.a < 255 ? `rgba(${t.r}, ${t.g}, ${t.b}, ${f(t.a)})` : `rgb(${t.r}, ${t.g}, ${t.b})`) : void 0
                }
                hexString() {
                    var t, e;
                    return this._valid ? (e = b(t = this._rgb) ? d : g, t ? "#" + e(t.r) + e(t.g) + e(t.b) + y(t.a, e) : void 0) : void 0
                }
                hslString() {
                    return this._valid ? function(t) {
                        if (!t) return;
                        let e = M(t),
                            n = e[0],
                            r = c(e[1]),
                            i = c(e[2]);
                        return t.a < 255 ? `hsla(${n}, ${r}%, ${i}%, ${f(t.a)})` : `hsl(${n}, ${r}%, ${i}%)`
                    }(this._rgb) : void 0
                }
                mix(t, e) {
                    if (t) {
                        let n;
                        let r = this.rgb,
                            i = t.rgb,
                            o = e === n ? .5 : e,
                            a = 2 * o - 1,
                            l = r.a - i.a,
                            u = ((a * l == -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
                        n = 1 - u, r.r = 255 & u * r.r + n * i.r + .5, r.g = 255 & u * r.g + n * i.g + .5, r.b = 255 & u * r.b + n * i.b + .5, r.a = o * r.a + (1 - o) * i.a, this.rgb = r
                    }
                    return this
                }
                interpolate(t, e) {
                    return t && (this._rgb = function(t, e, n) {
                        let r = C(f(t.r)),
                            i = C(f(t.g)),
                            o = C(f(t.b));
                        return {
                            r: u(S(r + n * (C(f(e.r)) - r))),
                            g: u(S(i + n * (C(f(e.g)) - i))),
                            b: u(S(o + n * (C(f(e.b)) - o))),
                            a: t.a + n * (e.a - t.a)
                        }
                    }(this._rgb, t._rgb, e)), this
                }
                clone() {
                    return new A(this.rgb)
                }
                alpha(t) {
                    return this._rgb.a = u(t), this
                }
                clearer(t) {
                    let e = this._rgb;
                    return e.a *= 1 - t, this
                }
                greyscale() {
                    let t = this._rgb,
                        e = o(.3 * t.r + .59 * t.g + .11 * t.b);
                    return t.r = t.g = t.b = e, this
                }
                opaquer(t) {
                    let e = this._rgb;
                    return e.a *= 1 + t, this
                }
                negate() {
                    let t = this._rgb;
                    return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this
                }
                lighten(t) {
                    return R(this._rgb, 2, t), this
                }
                darken(t) {
                    return R(this._rgb, 2, -t), this
                }
                saturate(t) {
                    return R(this._rgb, 1, t), this
                }
                desaturate(t) {
                    return R(this._rgb, 1, -t), this
                }
                rotate(t) {
                    var e, n;
                    return (n = M(e = this._rgb))[0] = _(n[0] + t), n = k(x, n, void 0, void 0), e.r = n[0], e.g = n[1], e.b = n[2], this
                }
            }
            /*!
             * Chart.js v4.4.4
             * https://www.chartjs.org
             * (c) 2024 Chart.js Contributors
             * Released under the MIT License
             */
            function W() {}
            let F = (i = 0, () => i++);

            function E(t) {
                return null == t
            }

            function Y(t) {
                if (Array.isArray && Array.isArray(t)) return !0;
                let e = Object.prototype.toString.call(t);
                return "[object" === e.slice(0, 7) && "Array]" === e.slice(-6)
            }

            function N(t) {
                return null !== t && "[object Object]" === Object.prototype.toString.call(t)
            }

            function B(t) {
                return ("number" == typeof t || t instanceof Number) && isFinite(+t)
            }

            function D(t, e) {
                return B(t) ? t : e
            }

            function L(t, e) {
                return void 0 === t ? e : t
            }
            let H = (t, e) => "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 : +t / e,
                $ = (t, e) => "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 * e : +t;

            function X(t, e, n) {
                if (t && "function" == typeof t.call) return t.apply(n, e)
            }

            function q(t, e, n, r) {
                let i, o, a;
                if (Y(t)) {
                    if (o = t.length, r)
                        for (i = o - 1; i >= 0; i--) e.call(n, t[i], i);
                    else
                        for (i = 0; i < o; i++) e.call(n, t[i], i)
                } else if (N(t))
                    for (i = 0, o = (a = Object.keys(t)).length; i < o; i++) e.call(n, t[a[i]], a[i])
            }

            function z(t, e) {
                let n, r, i, o;
                if (!t || !e || t.length !== e.length) return !1;
                for (n = 0, r = t.length; n < r; ++n)
                    if (i = t[n], o = e[n], i.datasetIndex !== o.datasetIndex || i.index !== o.index) return !1;
                return !0
            }

            function Z(t) {
                if (Y(t)) return t.map(Z);
                if (N(t)) {
                    let e = Object.create(null),
                        n = Object.keys(t),
                        r = n.length,
                        i = 0;
                    for (; i < r; ++i) e[n[i]] = Z(t[n[i]]);
                    return e
                }
                return t
            }

            function Q(t) {
                return -1 === ["__proto__", "prototype", "constructor"].indexOf(t)
            }

            function V(t, e, n, r) {
                if (!Q(t)) return;
                let i = e[t],
                    o = n[t];
                N(i) && N(o) ? K(i, o, r) : e[t] = Z(o)
            }

            function K(t, e, n) {
                let r;
                let i = Y(e) ? e : [e],
                    o = i.length;
                if (!N(t)) return t;
                let a = (n = n || {}).merger || V;
                for (let e = 0; e < o; ++e) {
                    if (!N(r = i[e])) continue;
                    let o = Object.keys(r);
                    for (let e = 0, i = o.length; e < i; ++e) a(o[e], t, r, n)
                }
                return t
            }

            function U(t, e) {
                return K(t, e, {
                    merger: J
                })
            }

            function J(t, e, n) {
                if (!Q(t)) return;
                let r = e[t],
                    i = n[t];
                N(r) && N(i) ? U(r, i) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = Z(i))
            }
            let G = {
                "": t => t,
                x: t => t.x,
                y: t => t.y
            };

            function tt(t, e) {
                return (G[e] || (G[e] = function(t) {
                    let e = function(t) {
                        let e = t.split("."),
                            n = [],
                            r = "";
                        for (let t of e)(r += t).endsWith("\\") ? r = r.slice(0, -1) + "." : (n.push(r), r = "");
                        return n
                    }(t);
                    return t => {
                        for (let n of e) {
                            if ("" === n) break;
                            t = t && t[n]
                        }
                        return t
                    }
                }(e)))(t)
            }

            function te(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }
            let tn = t => void 0 !== t,
                tr = t => "function" == typeof t,
                ti = (t, e) => {
                    if (t.size !== e.size) return !1;
                    for (let n of t)
                        if (!e.has(n)) return !1;
                    return !0
                };

            function to(t) {
                return "mouseup" === t.type || "click" === t.type || "contextmenu" === t.type
            }
            let ta = Math.PI,
                tl = 2 * ta,
                tu = tl + ta,
                tf = Number.POSITIVE_INFINITY,
                tc = ta / 180,
                ts = ta / 2,
                th = ta / 4,
                td = 2 * ta / 3,
                tg = Math.log10,
                tp = Math.sign;

            function tb(t, e, n) {
                return Math.abs(t - e) < n
            }

            function ty(t) {
                let e = Math.round(t),
                    n = Math.pow(10, Math.floor(tg(t = tb(t, e, t / 1e3) ? e : t))),
                    r = t / n;
                return (r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10) * n
            }

            function tm(t) {
                let e;
                let n = [],
                    r = Math.sqrt(t);
                for (e = 1; e < r; e++) t % e == 0 && (n.push(e), n.push(t / e));
                return r === (0 | r) && n.push(r), n.sort((t, e) => t - e).pop(), n
            }

            function tx(t) {
                return !isNaN(parseFloat(t)) && isFinite(t)
            }

            function tv(t, e) {
                let n = Math.round(t);
                return n - e <= t && n + e >= t
            }

            function tw(t, e, n) {
                let r, i, o;
                for (r = 0, i = t.length; r < i; r++) isNaN(o = t[r][n]) || (e.min = Math.min(e.min, o), e.max = Math.max(e.max, o))
            }

            function tM(t) {
                return ta / 180 * t
            }

            function tk(t) {
                return 180 / ta * t
            }

            function t_(t) {
                if (!B(t)) return;
                let e = 1,
                    n = 0;
                for (; Math.round(t * e) / e !== t;) e *= 10, n++;
                return n
            }

            function tO(t, e) {
                let n = e.x - t.x,
                    r = e.y - t.y,
                    i = Math.atan2(r, n);
                return i < -.5 * ta && (i += tl), {
                    angle: i,
                    distance: Math.sqrt(n * n + r * r)
                }
            }

            function tT(t, e) {
                return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
            }

            function tP(t, e) {
                return (t - e + tu) % tl - ta
            }

            function tS(t) {
                return (t % tl + tl) % tl
            }

            function tC(t, e, n, r) {
                let i = tS(t),
                    o = tS(e),
                    a = tS(n),
                    l = tS(o - i),
                    u = tS(a - i),
                    f = tS(i - o),
                    c = tS(i - a);
                return i === o || i === a || r && o === a || l > u && f < c
            }

            function tR(t, e, n) {
                return Math.max(e, Math.min(n, t))
            }

            function tI(t) {
                return tR(t, -32768, 32767)
            }

            function tj(t, e, n, r = 1e-6) {
                return t >= Math.min(e, n) - r && t <= Math.max(e, n) + r
            }

            function tA(t, e, n) {
                let r;
                n = n || (n => t[n] < e);
                let i = t.length - 1,
                    o = 0;
                for (; i - o > 1;) n(r = o + i >> 1) ? o = r : i = r;
                return {
                    lo: o,
                    hi: i
                }
            }
            let tW = (t, e, n, r) => tA(t, n, r ? r => {
                    let i = t[r][e];
                    return i < n || i === n && t[r + 1][e] === n
                } : r => t[r][e] < n),
                tF = (t, e, n) => tA(t, n, r => t[r][e] >= n);

            function tE(t, e, n) {
                let r = 0,
                    i = t.length;
                for (; r < i && t[r] < e;) r++;
                for (; i > r && t[i - 1] > n;) i--;
                return r > 0 || i < t.length ? t.slice(r, i) : t
            }
            let tY = ["push", "pop", "shift", "splice", "unshift"];

            function tN(t, e) {
                if (t._chartjs) {
                    t._chartjs.listeners.push(e);
                    return
                }
                Object.defineProperty(t, "_chartjs", {
                    configurable: !0,
                    enumerable: !1,
                    value: {
                        listeners: [e]
                    }
                }), tY.forEach(e => {
                    let n = "_onData" + te(e),
                        r = t[e];
                    Object.defineProperty(t, e, {
                        configurable: !0,
                        enumerable: !1,
                        value(...e) {
                            let i = r.apply(this, e);
                            return t._chartjs.listeners.forEach(t => {
                                "function" == typeof t[n] && t[n](...e)
                            }), i
                        }
                    })
                })
            }

            function tB(t, e) {
                let n = t._chartjs;
                if (!n) return;
                let r = n.listeners,
                    i = r.indexOf(e); - 1 !== i && r.splice(i, 1), r.length > 0 || (tY.forEach(e => {
                    delete t[e]
                }), delete t._chartjs)
            }

            function tD(t) {
                let e = new Set(t);
                return e.size === t.length ? t : Array.from(e)
            }
            let tL = "undefined" == typeof window ? function(t) {
                return t()
            } : window.requestAnimationFrame;

            function tH(t, e) {
                let n = [],
                    r = !1;
                return function(...i) {
                    n = i, r || (r = !0, tL.call(window, () => {
                        r = !1, t.apply(e, n)
                    }))
                }
            }

            function t$(t, e) {
                let n;
                return function(...r) {
                    return e ? (clearTimeout(n), n = setTimeout(t, e, r)) : t.apply(this, r), e
                }
            }
            let tX = t => "start" === t ? "left" : "end" === t ? "right" : "center",
                tq = (t, e, n) => "start" === t ? e : "end" === t ? n : (e + n) / 2,
                tz = (t, e, n, r) => t === (r ? "left" : "right") ? n : "center" === t ? (e + n) / 2 : e;

            function tZ(t, e, n) {
                let r = e.length,
                    i = 0,
                    o = r;
                if (t._sorted) {
                    let {
                        iScale: a,
                        _parsed: l
                    } = t, u = a.axis, {
                        min: f,
                        max: c,
                        minDefined: s,
                        maxDefined: h
                    } = a.getUserBounds();
                    s && (i = tR(Math.min(tW(l, u, f).lo, n ? r : tW(e, u, a.getPixelForValue(f)).lo), 0, r - 1)), o = h ? tR(Math.max(tW(l, a.axis, c, !0).hi + 1, n ? 0 : tW(e, u, a.getPixelForValue(c), !0).hi + 1), i, r) - i : r - i
                }
                return {
                    start: i,
                    count: o
                }
            }

            function tQ(t) {
                let {
                    xScale: e,
                    yScale: n,
                    _scaleRanges: r
                } = t, i = {
                    xmin: e.min,
                    xmax: e.max,
                    ymin: n.min,
                    ymax: n.max
                };
                if (!r) return t._scaleRanges = i, !0;
                let o = r.xmin !== e.min || r.xmax !== e.max || r.ymin !== n.min || r.ymax !== n.max;
                return Object.assign(r, i), o
            }
            let tV = t => 0 === t || 1 === t,
                tK = (t, e, n) => -(Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * tl / n)),
                tU = (t, e, n) => Math.pow(2, -10 * t) * Math.sin((t - e) * tl / n) + 1,
                tJ = {
                    linear: t => t,
                    easeInQuad: t => t * t,
                    easeOutQuad: t => -t * (t - 2),
                    easeInOutQuad: t => (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1),
                    easeInCubic: t => t * t * t,
                    easeOutCubic: t => (t -= 1) * t * t + 1,
                    easeInOutCubic: t => (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2),
                    easeInQuart: t => t * t * t * t,
                    easeOutQuart: t => -((t -= 1) * t * t * t - 1),
                    easeInOutQuart: t => (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2),
                    easeInQuint: t => t * t * t * t * t,
                    easeOutQuint: t => (t -= 1) * t * t * t * t + 1,
                    easeInOutQuint: t => (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2),
                    easeInSine: t => -Math.cos(t * ts) + 1,
                    easeOutSine: t => Math.sin(t * ts),
                    easeInOutSine: t => -.5 * (Math.cos(ta * t) - 1),
                    easeInExpo: t => 0 === t ? 0 : Math.pow(2, 10 * (t - 1)),
                    easeOutExpo: t => 1 === t ? 1 : -Math.pow(2, -10 * t) + 1,
                    easeInOutExpo: t => tV(t) ? t : t < .5 ? .5 * Math.pow(2, 10 * (2 * t - 1)) : .5 * (-Math.pow(2, -10 * (2 * t - 1)) + 2),
                    easeInCirc: t => t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1),
                    easeOutCirc: t => Math.sqrt(1 - (t -= 1) * t),
                    easeInOutCirc: t => (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
                    easeInElastic: t => tV(t) ? t : tK(t, .075, .3),
                    easeOutElastic: t => tV(t) ? t : tU(t, .075, .3),
                    easeInOutElastic: t => tV(t) ? t : t < .5 ? .5 * tK(2 * t, .1125, .45) : .5 + .5 * tU(2 * t - 1, .1125, .45),
                    easeInBack: t => t * t * (2.70158 * t - 1.70158),
                    easeOutBack: t => (t -= 1) * t * (2.70158 * t + 1.70158) + 1,
                    easeInOutBack(t) {
                        let e = 1.70158;
                        return (t /= .5) < 1 ? t * t * (((e *= 1.525) + 1) * t - e) * .5 : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
                    },
                    easeInBounce: t => 1 - tJ.easeOutBounce(1 - t),
                    easeOutBounce: t => t < .36363636363636365 ? 7.5625 * t * t : t < .7272727272727273 ? 7.5625 * (t -= .5454545454545454) * t + .75 : t < .9090909090909091 ? 7.5625 * (t -= .8181818181818182) * t + .9375 : 7.5625 * (t -= .9545454545454546) * t + .984375,
                    easeInOutBounce: t => t < .5 ? .5 * tJ.easeInBounce(2 * t) : .5 * tJ.easeOutBounce(2 * t - 1) + .5
                };

            function tG(t) {
                if (t && "object" == typeof t) {
                    let e = t.toString();
                    return "[object CanvasPattern]" === e || "[object CanvasGradient]" === e
                }
                return !1
            }

            function t0(t) {
                return tG(t) ? t : new A(t)
            }

            function t1(t) {
                return tG(t) ? t : new A(t).saturate(.5).darken(.1).hexString()
            }
            let t5 = ["x", "y", "borderWidth", "radius", "tension"],
                t2 = ["color", "borderColor", "backgroundColor"],
                t8 = new Map;

            function t4(t, e, n) {
                return (function(t, e) {
                    let n = t + JSON.stringify(e = e || {}),
                        r = t8.get(n);
                    return r || (r = new Intl.NumberFormat(t, e), t8.set(n, r)), r
                })(e, n).format(t)
            }
            let t3 = {
                values: t => Y(t) ? t : "" + t,
                numeric(t, e, n) {
                    let r;
                    if (0 === t) return "0";
                    let i = this.chart.options.locale,
                        o = t;
                    if (n.length > 1) {
                        let e;
                        let i = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value));
                        (i < 1e-4 || i > 1e15) && (r = "scientific"), Math.abs(e = n.length > 3 ? n[2].value - n[1].value : n[1].value - n[0].value) >= 1 && t !== Math.floor(t) && (e = t - Math.floor(t)), o = e
                    }
                    let a = tg(Math.abs(o)),
                        l = isNaN(a) ? 1 : Math.max(Math.min(-1 * Math.floor(a), 20), 0),
                        u = {
                            notation: r,
                            minimumFractionDigits: l,
                            maximumFractionDigits: l
                        };
                    return Object.assign(u, this.options.ticks.format), t4(t, i, u)
                },
                logarithmic(t, e, n) {
                    return 0 === t ? "0" : [1, 2, 3, 5, 10, 15].includes(n[e].significand || t / Math.pow(10, Math.floor(tg(t)))) || e > .8 * n.length ? t3.numeric.call(this, t, e, n) : ""
                }
            };
            var t9 = {
                formatters: t3
            };
            let t6 = Object.create(null),
                t7 = Object.create(null);

            function et(t, e) {
                if (!e) return t;
                let n = e.split(".");
                for (let e = 0, r = n.length; e < r; ++e) {
                    let r = n[e];
                    t = t[r] || (t[r] = Object.create(null))
                }
                return t
            }

            function ee(t, e, n) {
                return "string" == typeof e ? K(et(t, e), n) : K(et(t, ""), e)
            }
            class en {
                constructor(t, e) {
                    this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = t => t.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"], this.font = {
                        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                        size: 12,
                        style: "normal",
                        lineHeight: 1.2,
                        weight: null
                    }, this.hover = {}, this.hoverBackgroundColor = (t, e) => t1(e.backgroundColor), this.hoverBorderColor = (t, e) => t1(e.borderColor), this.hoverColor = (t, e) => t1(e.color), this.indexAxis = "x", this.interaction = {
                        mode: "nearest",
                        intersect: !0,
                        includeInvisible: !1
                    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e)
                }
                set(t, e) {
                    return ee(this, t, e)
                }
                get(t) {
                    return et(this, t)
                }
                describe(t, e) {
                    return ee(t7, t, e)
                }
                override(t, e) {
                    return ee(t6, t, e)
                }
                route(t, e, n, r) {
                    let i = et(this, t),
                        o = et(this, n),
                        a = "_" + e;
                    Object.defineProperties(i, {
                        [a]: {
                            value: i[e],
                            writable: !0
                        },
                        [e]: {
                            enumerable: !0,
                            get() {
                                let t = this[a],
                                    e = o[r];
                                return N(t) ? Object.assign({}, e, t) : L(t, e)
                            },
                            set(t) {
                                this[a] = t
                            }
                        }
                    })
                }
                apply(t) {
                    t.forEach(t => t(this))
                }
            }
            var er = new en({
                _scriptable: t => !t.startsWith("on"),
                _indexable: t => "events" !== t,
                hover: {
                    _fallback: "interaction"
                },
                interaction: {
                    _scriptable: !1,
                    _indexable: !1
                }
            }, [function(t) {
                t.set("animation", {
                    delay: void 0,
                    duration: 1e3,
                    easing: "easeOutQuart",
                    fn: void 0,
                    from: void 0,
                    loop: void 0,
                    to: void 0,
                    type: void 0
                }), t.describe("animation", {
                    _fallback: !1,
                    _indexable: !1,
                    _scriptable: t => "onProgress" !== t && "onComplete" !== t && "fn" !== t
                }), t.set("animations", {
                    colors: {
                        type: "color",
                        properties: t2
                    },
                    numbers: {
                        type: "number",
                        properties: t5
                    }
                }), t.describe("animations", {
                    _fallback: "animation"
                }), t.set("transitions", {
                    active: {
                        animation: {
                            duration: 400
                        }
                    },
                    resize: {
                        animation: {
                            duration: 0
                        }
                    },
                    show: {
                        animations: {
                            colors: {
                                from: "transparent"
                            },
                            visible: {
                                type: "boolean",
                                duration: 0
                            }
                        }
                    },
                    hide: {
                        animations: {
                            colors: {
                                to: "transparent"
                            },
                            visible: {
                                type: "boolean",
                                easing: "linear",
                                fn: t => 0 | t
                            }
                        }
                    }
                })
            }, function(t) {
                t.set("layout", {
                    autoPadding: !0,
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }
                })
            }, function(t) {
                t.set("scale", {
                    display: !0,
                    offset: !1,
                    reverse: !1,
                    beginAtZero: !1,
                    bounds: "ticks",
                    clip: !0,
                    grace: 0,
                    grid: {
                        display: !0,
                        lineWidth: 1,
                        drawOnChartArea: !0,
                        drawTicks: !0,
                        tickLength: 8,
                        tickWidth: (t, e) => e.lineWidth,
                        tickColor: (t, e) => e.color,
                        offset: !1
                    },
                    border: {
                        display: !0,
                        dash: [],
                        dashOffset: 0,
                        width: 1
                    },
                    title: {
                        display: !1,
                        text: "",
                        padding: {
                            top: 4,
                            bottom: 4
                        }
                    },
                    ticks: {
                        minRotation: 0,
                        maxRotation: 50,
                        mirror: !1,
                        textStrokeWidth: 0,
                        textStrokeColor: "",
                        padding: 3,
                        display: !0,
                        autoSkip: !0,
                        autoSkipPadding: 3,
                        labelOffset: 0,
                        callback: t9.formatters.values,
                        minor: {},
                        major: {},
                        align: "center",
                        crossAlign: "near",
                        showLabelBackdrop: !1,
                        backdropColor: "rgba(255, 255, 255, 0.75)",
                        backdropPadding: 2
                    }
                }), t.route("scale.ticks", "color", "", "color"), t.route("scale.grid", "color", "", "borderColor"), t.route("scale.border", "color", "", "borderColor"), t.route("scale.title", "color", "", "color"), t.describe("scale", {
                    _fallback: !1,
                    _scriptable: t => !t.startsWith("before") && !t.startsWith("after") && "callback" !== t && "parser" !== t,
                    _indexable: t => "borderDash" !== t && "tickBorderDash" !== t && "dash" !== t
                }), t.describe("scales", {
                    _fallback: "scale"
                }), t.describe("scale.ticks", {
                    _scriptable: t => "backdropPadding" !== t && "callback" !== t,
                    _indexable: t => "backdropPadding" !== t
                })
            }]);

            function ei(t, e, n, r, i) {
                let o = e[i];
                return o || (o = e[i] = t.measureText(i).width, n.push(i)), o > r && (r = o), r
            }

            function eo(t, e, n, r) {
                let i, o, a, l, u;
                let f = (r = r || {}).data = r.data || {},
                    c = r.garbageCollect = r.garbageCollect || [];
                r.font !== e && (f = r.data = {}, c = r.garbageCollect = [], r.font = e), t.save(), t.font = e;
                let s = 0,
                    h = n.length;
                for (i = 0; i < h; i++)
                    if (null == (l = n[i]) || Y(l)) {
                        if (Y(l))
                            for (o = 0, a = l.length; o < a; o++) null == (u = l[o]) || Y(u) || (s = ei(t, f, c, s, u))
                    } else s = ei(t, f, c, s, l);
                t.restore();
                let d = c.length / 2;
                if (d > n.length) {
                    for (i = 0; i < d; i++) delete f[c[i]];
                    c.splice(0, d)
                }
                return s
            }

            function ea(t, e, n) {
                let r = t.currentDevicePixelRatio,
                    i = 0 !== n ? Math.max(n / 2, .5) : 0;
                return Math.round((e - i) * r) / r + i
            }

            function el(t, e) {
                (e || t) && ((e = e || t.getContext("2d")).save(), e.resetTransform(), e.clearRect(0, 0, t.width, t.height), e.restore())
            }

            function eu(t, e, n, r) {
                ef(t, e, n, r, null)
            }

            function ef(t, e, n, r, i) {
                let o, a, l, u, f, c, s, h;
                let d = e.pointStyle,
                    g = e.rotation,
                    p = e.radius,
                    b = (g || 0) * tc;
                if (d && "object" == typeof d && ("[object HTMLImageElement]" === (o = d.toString()) || "[object HTMLCanvasElement]" === o)) {
                    t.save(), t.translate(n, r), t.rotate(b), t.drawImage(d, -d.width / 2, -d.height / 2, d.width, d.height), t.restore();
                    return
                }
                if (!isNaN(p) && !(p <= 0)) {
                    switch (t.beginPath(), d) {
                        default: i ? t.ellipse(n, r, i / 2, p, 0, 0, tl) : t.arc(n, r, p, 0, tl),
                        t.closePath();
                        break;
                        case "triangle":
                                c = i ? i / 2 : p,
                            t.moveTo(n + Math.sin(b) * c, r - Math.cos(b) * p),
                            b += td,
                            t.lineTo(n + Math.sin(b) * c, r - Math.cos(b) * p),
                            b += td,
                            t.lineTo(n + Math.sin(b) * c, r - Math.cos(b) * p),
                            t.closePath();
                            break;
                        case "rectRounded":
                                f = .516 * p,
                            a = Math.cos(b + th) * (u = p - f),
                            s = Math.cos(b + th) * (i ? i / 2 - f : u),
                            l = Math.sin(b + th) * u,
                            h = Math.sin(b + th) * (i ? i / 2 - f : u),
                            t.arc(n - s, r - l, f, b - ta, b - ts),
                            t.arc(n + h, r - a, f, b - ts, b),
                            t.arc(n + s, r + l, f, b, b + ts),
                            t.arc(n - h, r + a, f, b + ts, b + ta),
                            t.closePath();
                            break;
                        case "rect":
                                if (!g) {
                                u = Math.SQRT1_2 * p, c = i ? i / 2 : u, t.rect(n - c, r - u, 2 * c, 2 * u);
                                break
                            }b += th;
                        case "rectRot":
                                s = Math.cos(b) * (i ? i / 2 : p),
                            a = Math.cos(b) * p,
                            l = Math.sin(b) * p,
                            h = Math.sin(b) * (i ? i / 2 : p),
                            t.moveTo(n - s, r - l),
                            t.lineTo(n + h, r - a),
                            t.lineTo(n + s, r + l),
                            t.lineTo(n - h, r + a),
                            t.closePath();
                            break;
                        case "crossRot":
                                b += th;
                        case "cross":
                                s = Math.cos(b) * (i ? i / 2 : p),
                            a = Math.cos(b) * p,
                            l = Math.sin(b) * p,
                            h = Math.sin(b) * (i ? i / 2 : p),
                            t.moveTo(n - s, r - l),
                            t.lineTo(n + s, r + l),
                            t.moveTo(n + h, r - a),
                            t.lineTo(n - h, r + a);
                            break;
                        case "star":
                                s = Math.cos(b) * (i ? i / 2 : p),
                            a = Math.cos(b) * p,
                            l = Math.sin(b) * p,
                            h = Math.sin(b) * (i ? i / 2 : p),
                            t.moveTo(n - s, r - l),
                            t.lineTo(n + s, r + l),
                            t.moveTo(n + h, r - a),
                            t.lineTo(n - h, r + a),
                            b += th,
                            s = Math.cos(b) * (i ? i / 2 : p),
                            a = Math.cos(b) * p,
                            l = Math.sin(b) * p,
                            h = Math.sin(b) * (i ? i / 2 : p),
                            t.moveTo(n - s, r - l),
                            t.lineTo(n + s, r + l),
                            t.moveTo(n + h, r - a),
                            t.lineTo(n - h, r + a);
                            break;
                        case "line":
                                a = i ? i / 2 : Math.cos(b) * p,
                            l = Math.sin(b) * p,
                            t.moveTo(n - a, r - l),
                            t.lineTo(n + a, r + l);
                            break;
                        case "dash":
                                t.moveTo(n, r),
                            t.lineTo(n + Math.cos(b) * (i ? i / 2 : p), r + Math.sin(b) * p);
                            break;
                        case !1:
                                t.closePath()
                    }
                    t.fill(), e.borderWidth > 0 && t.stroke()
                }
            }

            function ec(t, e, n) {
                return n = n || .5, !e || t && t.x > e.left - n && t.x < e.right + n && t.y > e.top - n && t.y < e.bottom + n
            }

            function es(t, e) {
                t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
            }

            function eh(t) {
                t.restore()
            }

            function ed(t, e, n, r, i) {
                if (!e) return t.lineTo(n.x, n.y);
                if ("middle" === i) {
                    let r = (e.x + n.x) / 2;
                    t.lineTo(r, e.y), t.lineTo(r, n.y)
                } else "after" === i != !!r ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y);
                t.lineTo(n.x, n.y)
            }

            function eg(t, e, n, r) {
                if (!e) return t.lineTo(n.x, n.y);
                t.bezierCurveTo(r ? e.cp1x : e.cp2x, r ? e.cp1y : e.cp2y, r ? n.cp2x : n.cp1x, r ? n.cp2y : n.cp1y, n.x, n.y)
            }

            function ep(t, e, n, r, i, o = {}) {
                let a, l;
                let u = Y(e) ? e : [e],
                    f = o.strokeWidth > 0 && "" !== o.strokeColor;
                for (t.save(), t.font = i.string, o.translation && t.translate(o.translation[0], o.translation[1]), E(o.rotation) || t.rotate(o.rotation), o.color && (t.fillStyle = o.color), o.textAlign && (t.textAlign = o.textAlign), o.textBaseline && (t.textBaseline = o.textBaseline), a = 0; a < u.length; ++a) l = u[a], o.backdrop && function(t, e) {
                        let n = t.fillStyle;
                        t.fillStyle = e.color, t.fillRect(e.left, e.top, e.width, e.height), t.fillStyle = n
                    }(t, o.backdrop), f && (o.strokeColor && (t.strokeStyle = o.strokeColor), E(o.strokeWidth) || (t.lineWidth = o.strokeWidth), t.strokeText(l, n, r, o.maxWidth)), t.fillText(l, n, r, o.maxWidth),
                    function(t, e, n, r, i) {
                        if (i.strikethrough || i.underline) {
                            let o = t.measureText(r),
                                a = e - o.actualBoundingBoxLeft,
                                l = e + o.actualBoundingBoxRight,
                                u = n - o.actualBoundingBoxAscent,
                                f = n + o.actualBoundingBoxDescent,
                                c = i.strikethrough ? (u + f) / 2 : f;
                            t.strokeStyle = t.fillStyle, t.beginPath(), t.lineWidth = i.decorationWidth || 2, t.moveTo(a, c), t.lineTo(l, c), t.stroke()
                        }
                    }(t, n, r, l, o), r += Number(i.lineHeight);
                t.restore()
            }

            function eb(t, e) {
                let {
                    x: n,
                    y: r,
                    w: i,
                    h: o,
                    radius: a
                } = e;
                t.arc(n + a.topLeft, r + a.topLeft, a.topLeft, 1.5 * ta, ta, !0), t.lineTo(n, r + o - a.bottomLeft), t.arc(n + a.bottomLeft, r + o - a.bottomLeft, a.bottomLeft, ta, ts, !0), t.lineTo(n + i - a.bottomRight, r + o), t.arc(n + i - a.bottomRight, r + o - a.bottomRight, a.bottomRight, ts, 0, !0), t.lineTo(n + i, r + a.topRight), t.arc(n + i - a.topRight, r + a.topRight, a.topRight, 0, -ts, !0), t.lineTo(n + a.topLeft, r)
            }
            let ey = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
                em = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/,
                ex = t => +t || 0;

            function ev(t, e) {
                let n = {},
                    r = N(e),
                    i = r ? Object.keys(e) : e,
                    o = N(t) ? r ? n => L(t[n], t[e[n]]) : e => t[e] : () => t;
                for (let t of i) n[t] = ex(o(t));
                return n
            }

            function ew(t) {
                return ev(t, {
                    top: "y",
                    right: "x",
                    bottom: "y",
                    left: "x"
                })
            }

            function eM(t) {
                return ev(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"])
            }

            function ek(t) {
                let e = ew(t);
                return e.width = e.left + e.right, e.height = e.top + e.bottom, e
            }

            function e_(t, e) {
                t = t || {}, e = e || er.font;
                let n = L(t.size, e.size);
                "string" == typeof n && (n = parseInt(n, 10));
                let r = L(t.style, e.style);
                r && !("" + r).match(em) && (console.warn('Invalid font style specified: "' + r + '"'), r = void 0);
                let i = {
                    family: L(t.family, e.family),
                    lineHeight: function(t, e) {
                        let n = ("" + t).match(ey);
                        if (!n || "normal" === n[1]) return 1.2 * e;
                        switch (t = +n[2], n[3]) {
                            case "px":
                                return t;
                            case "%":
                                t /= 100
                        }
                        return e * t
                    }(L(t.lineHeight, e.lineHeight), n),
                    size: n,
                    style: r,
                    weight: L(t.weight, e.weight),
                    string: ""
                };
                return i.string = !i || E(i.size) || E(i.family) ? null : (i.style ? i.style + " " : "") + (i.weight ? i.weight + " " : "") + i.size + "px " + i.family, i
            }

            function eO(t, e, n, r) {
                let i, o, a, l = !0;
                for (i = 0, o = t.length; i < o; ++i)
                    if (void 0 !== (a = t[i]) && (void 0 !== e && "function" == typeof a && (a = a(e), l = !1), void 0 !== n && Y(a) && (a = a[n % a.length], l = !1), void 0 !== a)) return r && !l && (r.cacheable = !1), a
            }

            function eT(t, e, n) {
                let {
                    min: r,
                    max: i
                } = t, o = $(e, (i - r) / 2), a = (t, e) => n && 0 === t ? 0 : t + e;
                return {
                    min: a(r, -Math.abs(o)),
                    max: a(i, o)
                }
            }

            function eP(t, e) {
                return Object.assign(Object.create(t), e)
            }

            function eS(t, e = [""], n, r, i = () => t[0]) {
                let o = n || t;
                return void 0 === r && (r = eE("_fallback", t)), new Proxy({
                    [Symbol.toStringTag]: "Object",
                    _cacheable: !0,
                    _scopes: t,
                    _rootScopes: o,
                    _fallback: r,
                    _getTarget: i,
                    override: n => eS([n, ...t], e, o, r)
                }, {
                    deleteProperty: (e, n) => (delete e[n], delete e._keys, delete t[0][n], !0),
                    get: (n, r) => ej(n, r, () => (function(t, e, n, r) {
                        let i;
                        for (let o of e)
                            if (void 0 !== (i = eE(eR(o, t), n))) return eI(t, i) ? eW(n, r, t, i) : i
                    })(r, e, t, n)),
                    getOwnPropertyDescriptor: (t, e) => Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
                    getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
                    has: (t, e) => eY(t).includes(e),
                    ownKeys: t => eY(t),
                    set(t, e, n) {
                        let r = t._storage || (t._storage = i());
                        return t[e] = r[e] = n, delete t._keys, !0
                    }
                })
            }

            function eC(t, e = {
                scriptable: !0,
                indexable: !0
            }) {
                let {
                    _scriptable: n = e.scriptable,
                    _indexable: r = e.indexable,
                    _allKeys: i = e.allKeys
                } = t;
                return {
                    allKeys: i,
                    scriptable: n,
                    indexable: r,
                    isScriptable: tr(n) ? n : () => n,
                    isIndexable: tr(r) ? r : () => r
                }
            }
            let eR = (t, e) => t ? t + te(e) : e,
                eI = (t, e) => N(e) && "adapters" !== t && (null === Object.getPrototypeOf(e) || e.constructor === Object);

            function ej(t, e, n) {
                if (Object.prototype.hasOwnProperty.call(t, e) || "constructor" === e) return t[e];
                let r = n();
                return t[e] = r, r
            }
            let eA = (t, e) => !0 === t ? e : "string" == typeof t ? tt(e, t) : void 0;

            function eW(t, e, n, r) {
                var i;
                let o = e._rootScopes,
                    a = tr(i = e._fallback) ? i(n, r) : i,
                    l = [...t, ...o],
                    u = new Set;
                u.add(r);
                let f = eF(u, l, n, a || n, r);
                return null !== f && (void 0 === a || a === n || null !== (f = eF(u, l, a, f, r))) && eS(Array.from(u), [""], o, a, () => (function(t, e, n) {
                    let r = t._getTarget();
                    e in r || (r[e] = {});
                    let i = r[e];
                    return Y(i) && N(n) ? n : i || {}
                })(e, n, r))
            }

            function eF(t, e, n, r, i) {
                for (; n;) n = function(t, e, n, r, i) {
                    for (let a of e) {
                        let e = eA(n, a);
                        if (e) {
                            var o;
                            t.add(e);
                            let a = tr(o = e._fallback) ? o(n, i) : o;
                            if (void 0 !== a && a !== n && a !== r) return a
                        } else if (!1 === e && void 0 !== r && n !== r) return null
                    }
                    return !1
                }(t, e, n, r, i);
                return n
            }

            function eE(t, e) {
                for (let n of e) {
                    if (!n) continue;
                    let e = n[t];
                    if (void 0 !== e) return e
                }
            }

            function eY(t) {
                let e = t._keys;
                return e || (e = t._keys = function(t) {
                    let e = new Set;
                    for (let n of t)
                        for (let t of Object.keys(n).filter(t => !t.startsWith("_"))) e.add(t);
                    return Array.from(e)
                }(t._scopes)), e
            }

            function eN(t, e, n, r) {
                let i, o, a;
                let {
                    iScale: l
                } = t, {
                    key: u = "r"
                } = this._parsing, f = Array(r);
                for (i = 0; i < r; ++i) a = e[o = i + n], f[i] = {
                    r: l.parse(tt(a, u), o)
                };
                return f
            }
            let eB = Number.EPSILON || 1e-14,
                eD = (t, e) => e < t.length && !t[e].skip && t[e],
                eL = t => "x" === t ? "y" : "x";

            function eH(t, e, n) {
                return Math.max(Math.min(t, n), e)
            }

            function e$(t, e, n, r, i) {
                let o, a, l, u;
                if (e.spanGaps && (t = t.filter(t => !t.skip)), "monotone" === e.cubicInterpolationMode) ! function(t, e = "x") {
                    let n, r, i;
                    let o = eL(e),
                        a = t.length,
                        l = Array(a).fill(0),
                        u = Array(a),
                        f = eD(t, 0);
                    for (n = 0; n < a; ++n)
                        if (r = i, i = f, f = eD(t, n + 1), i) {
                            if (f) {
                                let t = f[e] - i[e];
                                l[n] = 0 !== t ? (f[o] - i[o]) / t : 0
                            }
                            u[n] = r ? f ? tp(l[n - 1]) !== tp(l[n]) ? 0 : (l[n - 1] + l[n]) / 2 : l[n - 1] : l[n]
                        }! function(t, e, n) {
                        let r, i, o, a, l;
                        let u = t.length,
                            f = eD(t, 0);
                        for (let c = 0; c < u - 1; ++c)
                            if (l = f, f = eD(t, c + 1), l && f) {
                                if (tb(e[c], 0, eB)) {
                                    n[c] = n[c + 1] = 0;
                                    continue
                                }(a = Math.pow(r = n[c] / e[c], 2) + Math.pow(i = n[c + 1] / e[c], 2)) <= 9 || (o = 3 / Math.sqrt(a), n[c] = r * o * e[c], n[c + 1] = i * o * e[c])
                            }
                    }(t, l, u),
                    function(t, e, n = "x") {
                        let r, i, o;
                        let a = eL(n),
                            l = t.length,
                            u = eD(t, 0);
                        for (let f = 0; f < l; ++f) {
                            if (i = o, o = u, u = eD(t, f + 1), !o) continue;
                            let l = o[n],
                                c = o[a];
                            i && (r = (l - i[n]) / 3, o[`cp1${n}`] = l - r, o[`cp1${a}`] = c - r * e[f]), u && (r = (u[n] - l) / 3, o[`cp2${n}`] = l + r, o[`cp2${a}`] = c + r * e[f])
                        }
                    }(t, u, e)
                }(t, i);
                else {
                    let n = r ? t[t.length - 1] : t[0];
                    for (o = 0, a = t.length; o < a; ++o) u = function(t, e, n, r) {
                        let i = t.skip ? e : t,
                            o = n.skip ? e : n,
                            a = tT(e, i),
                            l = tT(o, e),
                            u = a / (a + l),
                            f = l / (a + l);
                        u = isNaN(u) ? 0 : u, f = isNaN(f) ? 0 : f;
                        let c = r * u,
                            s = r * f;
                        return {
                            previous: {
                                x: e.x - c * (o.x - i.x),
                                y: e.y - c * (o.y - i.y)
                            },
                            next: {
                                x: e.x + s * (o.x - i.x),
                                y: e.y + s * (o.y - i.y)
                            }
                        }
                    }(n, l = t[o], t[Math.min(o + 1, a - (r ? 0 : 1)) % a], e.tension), l.cp1x = u.previous.x, l.cp1y = u.previous.y, l.cp2x = u.next.x, l.cp2y = u.next.y, n = l
                }
                e.capBezierPoints && function(t, e) {
                    let n, r, i, o, a;
                    let l = ec(t[0], e);
                    for (n = 0, r = t.length; n < r; ++n) a = o, o = l, l = n < r - 1 && ec(t[n + 1], e), o && (i = t[n], a && (i.cp1x = eH(i.cp1x, e.left, e.right), i.cp1y = eH(i.cp1y, e.top, e.bottom)), l && (i.cp2x = eH(i.cp2x, e.left, e.right), i.cp2y = eH(i.cp2y, e.top, e.bottom)))
                }(t, n)
            }

            function eX() {
                return "undefined" != typeof window && "undefined" != typeof document
            }

            function eq(t) {
                let e = t.parentNode;
                return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e
            }

            function ez(t, e, n) {
                let r;
                return "string" == typeof t ? (r = parseInt(t, 10), -1 !== t.indexOf("%") && (r = r / 100 * e.parentNode[n])) : r = t, r
            }
            let eZ = t => t.ownerDocument.defaultView.getComputedStyle(t, null),
                eQ = ["top", "right", "bottom", "left"];

            function eV(t, e, n) {
                let r = {};
                n = n ? "-" + n : "";
                for (let i = 0; i < 4; i++) {
                    let o = eQ[i];
                    r[o] = parseFloat(t[e + "-" + o + n]) || 0
                }
                return r.width = r.left + r.right, r.height = r.top + r.bottom, r
            }
            let eK = (t, e, n) => (t > 0 || e > 0) && (!n || !n.shadowRoot);

            function eU(t, e) {
                if ("native" in t) return t;
                let {
                    canvas: n,
                    currentDevicePixelRatio: r
                } = e, i = eZ(n), o = "border-box" === i.boxSizing, a = eV(i, "padding"), l = eV(i, "border", "width"), {
                    x: u,
                    y: f,
                    box: c
                } = function(t, e) {
                    let n, r;
                    let i = t.touches,
                        o = i && i.length ? i[0] : t,
                        {
                            offsetX: a,
                            offsetY: l
                        } = o,
                        u = !1;
                    if (eK(a, l, t.target)) n = a, r = l;
                    else {
                        let t = e.getBoundingClientRect();
                        n = o.clientX - t.left, r = o.clientY - t.top, u = !0
                    }
                    return {
                        x: n,
                        y: r,
                        box: u
                    }
                }(t, n), s = a.left + (c && l.left), h = a.top + (c && l.top), {
                    width: d,
                    height: g
                } = e;
                return o && (d -= a.width + l.width, g -= a.height + l.height), {
                    x: Math.round((u - s) / d * n.width / r),
                    y: Math.round((f - h) / g * n.height / r)
                }
            }
            let eJ = t => Math.round(10 * t) / 10;

            function eG(t, e, n, r) {
                let i = eZ(t),
                    o = eV(i, "margin"),
                    a = ez(i.maxWidth, t, "clientWidth") || tf,
                    l = ez(i.maxHeight, t, "clientHeight") || tf,
                    u = function(t, e, n) {
                        let r, i;
                        if (void 0 === e || void 0 === n) {
                            let o = t && eq(t);
                            if (o) {
                                let t = o.getBoundingClientRect(),
                                    a = eZ(o),
                                    l = eV(a, "border", "width"),
                                    u = eV(a, "padding");
                                e = t.width - u.width - l.width, n = t.height - u.height - l.height, r = ez(a.maxWidth, o, "clientWidth"), i = ez(a.maxHeight, o, "clientHeight")
                            } else e = t.clientWidth, n = t.clientHeight
                        }
                        return {
                            width: e,
                            height: n,
                            maxWidth: r || tf,
                            maxHeight: i || tf
                        }
                    }(t, e, n),
                    {
                        width: f,
                        height: c
                    } = u;
                if ("content-box" === i.boxSizing) {
                    let t = eV(i, "border", "width"),
                        e = eV(i, "padding");
                    f -= e.width + t.width, c -= e.height + t.height
                }
                return f = Math.max(0, f - o.width), c = Math.max(0, r ? f / r : c - o.height), f = eJ(Math.min(f, a, u.maxWidth)), c = eJ(Math.min(c, l, u.maxHeight)), f && !c && (c = eJ(f / 2)), (void 0 !== e || void 0 !== n) && r && u.height && c > u.height && (f = eJ(Math.floor((c = u.height) * r))), {
                    width: f,
                    height: c
                }
            }

            function e0(t, e, n) {
                let r = e || 1,
                    i = Math.floor(t.height * r),
                    o = Math.floor(t.width * r);
                t.height = Math.floor(t.height), t.width = Math.floor(t.width);
                let a = t.canvas;
                return a.style && (n || !a.style.height && !a.style.width) && (a.style.height = `${t.height}px`, a.style.width = `${t.width}px`), (t.currentDevicePixelRatio !== r || a.height !== i || a.width !== o) && (t.currentDevicePixelRatio = r, a.height = i, a.width = o, t.ctx.setTransform(r, 0, 0, r, 0, 0), !0)
            }
            let e1 = function() {
                let t = !1;
                try {
                    let e = {
                        get passive() {
                            return t = !0, !1
                        }
                    };
                    eX() && (window.addEventListener("test", null, e), window.removeEventListener("test", null, e))
                } catch (t) {}
                return t
            }();

            function e5(t, e) {
                let n = eZ(t).getPropertyValue(e),
                    r = n && n.match(/^(\d+)(\.\d+)?px$/);
                return r ? +r[1] : void 0
            }

            function e2(t, e, n, r) {
                return {
                    x: t.x + n * (e.x - t.x),
                    y: t.y + n * (e.y - t.y)
                }
            }

            function e8(t, e, n, r) {
                return {
                    x: t.x + n * (e.x - t.x),
                    y: "middle" === r ? n < .5 ? t.y : e.y : "after" === r ? n < 1 ? t.y : e.y : n > 0 ? e.y : t.y
                }
            }

            function e4(t, e, n, r) {
                let i = {
                        x: t.cp2x,
                        y: t.cp2y
                    },
                    o = {
                        x: e.cp1x,
                        y: e.cp1y
                    },
                    a = e2(t, i, n),
                    l = e2(i, o, n),
                    u = e2(o, e, n),
                    f = e2(a, l, n),
                    c = e2(l, u, n);
                return e2(f, c, n)
            }

            function e3(t, e, n) {
                var r;
                return t ? (r = n, {
                    x: t => e + e + r - t,
                    setWidth(t) {
                        r = t
                    },
                    textAlign: t => "center" === t ? t : "right" === t ? "left" : "right",
                    xPlus: (t, e) => t - e,
                    leftForLtr: (t, e) => t - e
                }) : {
                    x: t => t,
                    setWidth(t) {},
                    textAlign: t => t,
                    xPlus: (t, e) => t + e,
                    leftForLtr: (t, e) => t
                }
            }

            function e9(t, e) {
                let n, r;
                ("ltr" === e || "rtl" === e) && (r = [(n = t.canvas.style).getPropertyValue("direction"), n.getPropertyPriority("direction")], n.setProperty("direction", e, "important"), t.prevTextDirection = r)
            }

            function e6(t, e) {
                void 0 !== e && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1]))
            }

            function e7(t) {
                return "angle" === t ? {
                    between: tC,
                    compare: tP,
                    normalize: tS
                } : {
                    between: tj,
                    compare: (t, e) => t - e,
                    normalize: t => t
                }
            }

            function nt({
                start: t,
                end: e,
                count: n,
                loop: r,
                style: i
            }) {
                return {
                    start: t % n,
                    end: e % n,
                    loop: r && (e - t + 1) % n == 0,
                    style: i
                }
            }

            function ne(t, e, n) {
                let r, i, o;
                if (!n) return [t];
                let {
                    property: a,
                    start: l,
                    end: u
                } = n, f = e.length, {
                    compare: c,
                    between: s,
                    normalize: h
                } = e7(a), {
                    start: d,
                    end: g,
                    loop: p,
                    style: b
                } = function(t, e, n) {
                    let r;
                    let {
                        property: i,
                        start: o,
                        end: a
                    } = n, {
                        between: l,
                        normalize: u
                    } = e7(i), f = e.length, {
                        start: c,
                        end: s,
                        loop: h
                    } = t;
                    if (h) {
                        for (c += f, s += f, r = 0; r < f && l(u(e[c % f][i]), o, a); ++r) c--, s--;
                        c %= f, s %= f
                    }
                    return s < c && (s += f), {
                        start: c,
                        end: s,
                        loop: h,
                        style: t.style
                    }
                }(t, e, n), y = [], m = !1, x = null, v = () => s(l, o, r) && 0 !== c(l, o), w = () => 0 === c(u, r) || s(u, o, r), M = () => m || v(), k = () => !m || w();
                for (let t = d, n = d; t <= g; ++t)(i = e[t % f]).skip || (r = h(i[a])) === o || (m = s(r, l, u), null === x && M() && (x = 0 === c(r, l) ? t : n), null !== x && k() && (y.push(nt({
                    start: x,
                    end: t,
                    loop: p,
                    count: f,
                    style: b
                })), x = null), n = t, o = r);
                return null !== x && y.push(nt({
                    start: x,
                    end: g,
                    loop: p,
                    count: f,
                    style: b
                })), y
            }

            function nn(t, e) {
                let n = [],
                    r = t.segments;
                for (let i = 0; i < r.length; i++) {
                    let o = ne(r[i], t.points, e);
                    o.length && n.push(...o)
                }
                return n
            }

            function nr(t, e) {
                let n = t.points,
                    r = t.options.spanGaps,
                    i = n.length;
                if (!i) return [];
                let o = !!t._loop,
                    {
                        start: a,
                        end: l
                    } = function(t, e, n, r) {
                        let i = 0,
                            o = e - 1;
                        if (n && !r)
                            for (; i < e && !t[i].skip;) i++;
                        for (; i < e && t[i].skip;) i++;
                        for (i %= e, n && (o += i); o > i && t[o % e].skip;) o--;
                        return {
                            start: i,
                            end: o %= e
                        }
                    }(n, i, o, r);
                if (!0 === r) return ni(t, [{
                    start: a,
                    end: l,
                    loop: o
                }], n, e);
                let u = l < a ? l + i : l,
                    f = !!t._fullLoop && 0 === a && l === i - 1;
                return ni(t, function(t, e, n, r) {
                    let i;
                    let o = t.length,
                        a = [],
                        l = e,
                        u = t[e];
                    for (i = e + 1; i <= n; ++i) {
                        let n = t[i % o];
                        n.skip || n.stop ? u.skip || (r = !1, a.push({
                            start: e % o,
                            end: (i - 1) % o,
                            loop: r
                        }), e = l = n.stop ? i : null) : (l = i, u.skip && (e = i)), u = n
                    }
                    return null !== l && a.push({
                        start: e % o,
                        end: l % o,
                        loop: r
                    }), a
                }(n, a, u, f), n, e)
            }

            function ni(t, e, n, r) {
                return r && r.setContext && n ? function(t, e, n, r) {
                    let i = t._chart.getContext(),
                        o = no(t.options),
                        {
                            _datasetIndex: a,
                            options: {
                                spanGaps: l
                            }
                        } = t,
                        u = n.length,
                        f = [],
                        c = o,
                        s = e[0].start,
                        h = s;

                    function d(t, e, r, i) {
                        let o = l ? -1 : 1;
                        if (t !== e) {
                            for (t += u; n[t % u].skip;) t -= o;
                            for (; n[e % u].skip;) e += o;
                            t % u != e % u && (f.push({
                                start: t % u,
                                end: e % u,
                                loop: r,
                                style: i
                            }), c = i, s = e % u)
                        }
                    }
                    for (let t of e) {
                        let e;
                        let o = n[(s = l ? s : t.start) % u];
                        for (h = s + 1; h <= t.end; h++) {
                            let l = n[h % u];
                            (function(t, e) {
                                if (!e) return !1;
                                let n = [],
                                    r = function(t, e) {
                                        return tG(e) ? (n.includes(e) || n.push(e), n.indexOf(e)) : e
                                    };
                                return JSON.stringify(t, r) !== JSON.stringify(e, r)
                            })(e = no(r.setContext(eP(i, {
                                type: "segment",
                                p0: o,
                                p1: l,
                                p0DataIndex: (h - 1) % u,
                                p1DataIndex: h % u,
                                datasetIndex: a
                            }))), c) && d(s, h - 1, t.loop, c), o = l, c = e
                        }
                        s < h - 1 && d(s, h - 1, t.loop, c)
                    }
                    return f
                }(t, e, n, r) : e
            }

            function no(t) {
                return {
                    backgroundColor: t.backgroundColor,
                    borderCapStyle: t.borderCapStyle,
                    borderDash: t.borderDash,
                    borderDashOffset: t.borderDashOffset,
                    borderJoinStyle: t.borderJoinStyle,
                    borderWidth: t.borderWidth,
                    borderColor: t.borderColor
                }
            }
        }
    }
]);