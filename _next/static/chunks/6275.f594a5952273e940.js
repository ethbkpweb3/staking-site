! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "560ad048-6f72-4c4b-b74b-52003cd7647a", e._sentryDebugIdIdentifier = "sentry-dbid-560ad048-6f72-4c4b-b74b-52003cd7647a")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6275], {
        46275: function(e, t, r) {
            let i;
            r.r(t), r.d(t, {
                WcmModal: function() {
                    return ih
                },
                WcmQrCode: function() {
                    return rw
                }
            });
            /**
             * @license
             * Copyright 2019 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            let o = window,
                l = o.ShadowRoot && (void 0 === o.ShadyCSS || o.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
                a = Symbol(),
                n = new WeakMap;
            class s {
                constructor(e, t, r) {
                    if (this._$cssResult$ = !0, r !== a) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
                    this.cssText = e, this.t = t
                }
                get styleSheet() {
                    let e = this.o,
                        t = this.t;
                    if (l && void 0 === e) {
                        let r = void 0 !== t && 1 === t.length;
                        r && (e = n.get(t)), void 0 === e && ((this.o = e = new CSSStyleSheet).replaceSync(this.cssText), r && n.set(t, e))
                    }
                    return e
                }
                toString() {
                    return this.cssText
                }
            }
            let c = e => new s("string" == typeof e ? e : e + "", void 0, a),
                d = (e, ...t) => new s(1 === e.length ? e[0] : t.reduce((t, r, i) => t + (e => {
                    if (!0 === e._$cssResult$) return e.cssText;
                    if ("number" == typeof e) return e;
                    throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
                })(r) + e[i + 1], e[0]), e, a),
                h = (e, t) => {
                    l ? e.adoptedStyleSheets = t.map(e => e instanceof CSSStyleSheet ? e : e.styleSheet) : t.forEach(t => {
                        let r = document.createElement("style"),
                            i = o.litNonce;
                        void 0 !== i && r.setAttribute("nonce", i), r.textContent = t.cssText, e.appendChild(r)
                    })
                },
                m = l ? e => e : e => e instanceof CSSStyleSheet ? (e => {
                    let t = "";
                    for (let r of e.cssRules) t += r.cssText;
                    return c(t)
                })(e) : e,
                p = window,
                u = p.trustedTypes,
                w = u ? u.emptyScript : "",
                g = p.reactiveElementPolyfillSupport,
                v = {
                    toAttribute(e, t) {
                        switch (t) {
                            case Boolean:
                                e = e ? w : null;
                                break;
                            case Object:
                            case Array:
                                e = null == e ? e : JSON.stringify(e)
                        }
                        return e
                    },
                    fromAttribute(e, t) {
                        let r = e;
                        switch (t) {
                            case Boolean:
                                r = null !== e;
                                break;
                            case Number:
                                r = null === e ? null : Number(e);
                                break;
                            case Object:
                            case Array:
                                try {
                                    r = JSON.parse(e)
                                } catch (e) {
                                    r = null
                                }
                        }
                        return r
                    }
                },
                f = (e, t) => t !== e && (t == t || e == e),
                b = {
                    attribute: !0,
                    type: String,
                    converter: v,
                    reflect: !1,
                    hasChanged: f
                },
                y = "finalized";
            class x extends HTMLElement {
                constructor() {
                    super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this._$Eu()
                }
                static addInitializer(e) {
                    var t;
                    this.finalize(), (null !== (t = this.h) && void 0 !== t ? t : this.h = []).push(e)
                }
                static get observedAttributes() {
                    this.finalize();
                    let e = [];
                    return this.elementProperties.forEach((t, r) => {
                        let i = this._$Ep(r, t);
                        void 0 !== i && (this._$Ev.set(i, r), e.push(i))
                    }), e
                }
                static createProperty(e, t = b) {
                    if (t.state && (t.attribute = !1), this.finalize(), this.elementProperties.set(e, t), !t.noAccessor && !this.prototype.hasOwnProperty(e)) {
                        let r = "symbol" == typeof e ? Symbol() : "__" + e,
                            i = this.getPropertyDescriptor(e, r, t);
                        void 0 !== i && Object.defineProperty(this.prototype, e, i)
                    }
                }
                static getPropertyDescriptor(e, t, r) {
                    return {
                        get() {
                            return this[t]
                        },
                        set(i) {
                            let o = this[e];
                            this[t] = i, this.requestUpdate(e, o, r)
                        },
                        configurable: !0,
                        enumerable: !0
                    }
                }
                static getPropertyOptions(e) {
                    return this.elementProperties.get(e) || b
                }
                static finalize() {
                    if (this.hasOwnProperty(y)) return !1;
                    this[y] = !0;
                    let e = Object.getPrototypeOf(this);
                    if (e.finalize(), void 0 !== e.h && (this.h = [...e.h]), this.elementProperties = new Map(e.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
                        let e = this.properties;
                        for (let t of [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)]) this.createProperty(t, e[t])
                    }
                    return this.elementStyles = this.finalizeStyles(this.styles), !0
                }
                static finalizeStyles(e) {
                    let t = [];
                    if (Array.isArray(e))
                        for (let r of new Set(e.flat(1 / 0).reverse())) t.unshift(m(r));
                    else void 0 !== e && t.push(m(e));
                    return t
                }
                static _$Ep(e, t) {
                    let r = t.attribute;
                    return !1 === r ? void 0 : "string" == typeof r ? r : "string" == typeof e ? e.toLowerCase() : void 0
                }
                _$Eu() {
                    var e;
                    this._$E_ = new Promise(e => this.enableUpdating = e), this._$AL = new Map, this._$Eg(), this.requestUpdate(), null === (e = this.constructor.h) || void 0 === e || e.forEach(e => e(this))
                }
                addController(e) {
                    var t, r;
                    (null !== (t = this._$ES) && void 0 !== t ? t : this._$ES = []).push(e), void 0 !== this.renderRoot && this.isConnected && (null === (r = e.hostConnected) || void 0 === r || r.call(e))
                }
                removeController(e) {
                    var t;
                    null === (t = this._$ES) || void 0 === t || t.splice(this._$ES.indexOf(e) >>> 0, 1)
                }
                _$Eg() {
                    this.constructor.elementProperties.forEach((e, t) => {
                        this.hasOwnProperty(t) && (this._$Ei.set(t, this[t]), delete this[t])
                    })
                }
                createRenderRoot() {
                    var e;
                    let t = null !== (e = this.shadowRoot) && void 0 !== e ? e : this.attachShadow(this.constructor.shadowRootOptions);
                    return h(t, this.constructor.elementStyles), t
                }
                connectedCallback() {
                    var e;
                    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (e = this._$ES) || void 0 === e || e.forEach(e => {
                        var t;
                        return null === (t = e.hostConnected) || void 0 === t ? void 0 : t.call(e)
                    })
                }
                enableUpdating(e) {}
                disconnectedCallback() {
                    var e;
                    null === (e = this._$ES) || void 0 === e || e.forEach(e => {
                        var t;
                        return null === (t = e.hostDisconnected) || void 0 === t ? void 0 : t.call(e)
                    })
                }
                attributeChangedCallback(e, t, r) {
                    this._$AK(e, r)
                }
                _$EO(e, t, r = b) {
                    var i;
                    let o = this.constructor._$Ep(e, r);
                    if (void 0 !== o && !0 === r.reflect) {
                        let l = (void 0 !== (null === (i = r.converter) || void 0 === i ? void 0 : i.toAttribute) ? r.converter : v).toAttribute(t, r.type);
                        this._$El = e, null == l ? this.removeAttribute(o) : this.setAttribute(o, l), this._$El = null
                    }
                }
                _$AK(e, t) {
                    var r;
                    let i = this.constructor,
                        o = i._$Ev.get(e);
                    if (void 0 !== o && this._$El !== o) {
                        let e = i.getPropertyOptions(o),
                            l = "function" == typeof e.converter ? {
                                fromAttribute: e.converter
                            } : void 0 !== (null === (r = e.converter) || void 0 === r ? void 0 : r.fromAttribute) ? e.converter : v;
                        this._$El = o, this[o] = l.fromAttribute(t, e.type), this._$El = null
                    }
                }
                requestUpdate(e, t, r) {
                    let i = !0;
                    void 0 !== e && (((r = r || this.constructor.getPropertyOptions(e)).hasChanged || f)(this[e], t) ? (this._$AL.has(e) || this._$AL.set(e, t), !0 === r.reflect && this._$El !== e && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(e, r))) : i = !1), !this.isUpdatePending && i && (this._$E_ = this._$Ej())
                }
                async _$Ej() {
                    this.isUpdatePending = !0;
                    try {
                        await this._$E_
                    } catch (e) {
                        Promise.reject(e)
                    }
                    let e = this.scheduleUpdate();
                    return null != e && await e, !this.isUpdatePending
                }
                scheduleUpdate() {
                    return this.performUpdate()
                }
                performUpdate() {
                    var e;
                    if (!this.isUpdatePending) return;
                    this.hasUpdated, this._$Ei && (this._$Ei.forEach((e, t) => this[t] = e), this._$Ei = void 0);
                    let t = !1,
                        r = this._$AL;
                    try {
                        (t = this.shouldUpdate(r)) ? (this.willUpdate(r), null === (e = this._$ES) || void 0 === e || e.forEach(e => {
                            var t;
                            return null === (t = e.hostUpdate) || void 0 === t ? void 0 : t.call(e)
                        }), this.update(r)) : this._$Ek()
                    } catch (e) {
                        throw t = !1, this._$Ek(), e
                    }
                    t && this._$AE(r)
                }
                willUpdate(e) {}
                _$AE(e) {
                    var t;
                    null === (t = this._$ES) || void 0 === t || t.forEach(e => {
                        var t;
                        return null === (t = e.hostUpdated) || void 0 === t ? void 0 : t.call(e)
                    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e)
                }
                _$Ek() {
                    this._$AL = new Map, this.isUpdatePending = !1
                }
                get updateComplete() {
                    return this.getUpdateComplete()
                }
                getUpdateComplete() {
                    return this._$E_
                }
                shouldUpdate(e) {
                    return !0
                }
                update(e) {
                    void 0 !== this._$EC && (this._$EC.forEach((e, t) => this._$EO(t, this[t], e)), this._$EC = void 0), this._$Ek()
                }
                updated(e) {}
                firstUpdated(e) {}
            }
            x[y] = !0, x.elementProperties = new Map, x.elementStyles = [], x.shadowRootOptions = {
                mode: "open"
            }, null == g || g({
                ReactiveElement: x
            }), (null !== (ef = p.reactiveElementVersions) && void 0 !== ef ? ef : p.reactiveElementVersions = []).push("1.6.3");
            let $ = window,
                C = $.trustedTypes,
                A = C ? C.createPolicy("lit-html", {
                    createHTML: e => e
                }) : void 0,
                _ = "$lit$",
                O = `lit$${(Math.random()+"").slice(9)}$`,
                E = "?" + O,
                k = `<${E}>`,
                I = document,
                T = () => I.createComment(""),
                P = e => null === e || "object" != typeof e && "function" != typeof e,
                M = Array.isArray,
                S = e => M(e) || "function" == typeof(null == e ? void 0 : e[Symbol.iterator]),
                R = "[ 	\n\f\r]",
                L = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
                W = /-->/g,
                j = />/g,
                D = RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"),
                N = /'/g,
                U = /"/g,
                z = /^(?:script|style|textarea|title)$/i,
                H = e => (t, ...r) => ({
                    _$litType$: e,
                    strings: t,
                    values: r
                }),
                Z = H(1),
                B = H(2),
                V = Symbol.for("lit-noChange"),
                q = Symbol.for("lit-nothing"),
                F = new WeakMap,
                K = I.createTreeWalker(I, 129, null, !1);

            function Q(e, t) {
                if (!Array.isArray(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
                return void 0 !== A ? A.createHTML(t) : t
            }
            let Y = (e, t) => {
                let r = e.length - 1,
                    i = [],
                    o, l = 2 === t ? "<svg>" : "",
                    a = L;
                for (let t = 0; t < r; t++) {
                    let r = e[t],
                        n, s, c = -1,
                        d = 0;
                    for (; d < r.length && (a.lastIndex = d, null !== (s = a.exec(r)));) d = a.lastIndex, a === L ? "!--" === s[1] ? a = W : void 0 !== s[1] ? a = j : void 0 !== s[2] ? (z.test(s[2]) && (o = RegExp("</" + s[2], "g")), a = D) : void 0 !== s[3] && (a = D) : a === D ? ">" === s[0] ? (a = null != o ? o : L, c = -1) : void 0 === s[1] ? c = -2 : (c = a.lastIndex - s[2].length, n = s[1], a = void 0 === s[3] ? D : '"' === s[3] ? U : N) : a === U || a === N ? a = D : a === W || a === j ? a = L : (a = D, o = void 0);
                    let h = a === D && e[t + 1].startsWith("/>") ? " " : "";
                    l += a === L ? r + k : c >= 0 ? (i.push(n), r.slice(0, c) + _ + r.slice(c) + O + h) : r + O + (-2 === c ? (i.push(void 0), t) : h)
                }
                return [Q(e, l + (e[r] || "<?>") + (2 === t ? "</svg>" : "")), i]
            };
            class G {
                constructor({
                    strings: e,
                    _$litType$: t
                }, r) {
                    let i;
                    this.parts = [];
                    let o = 0,
                        l = 0,
                        a = e.length - 1,
                        n = this.parts,
                        [s, c] = Y(e, t);
                    if (this.el = G.createElement(s, r), K.currentNode = this.el.content, 2 === t) {
                        let e = this.el.content,
                            t = e.firstChild;
                        t.remove(), e.append(...t.childNodes)
                    }
                    for (; null !== (i = K.nextNode()) && n.length < a;) {
                        if (1 === i.nodeType) {
                            if (i.hasAttributes()) {
                                let e = [];
                                for (let t of i.getAttributeNames())
                                    if (t.endsWith(_) || t.startsWith(O)) {
                                        let r = c[l++];
                                        if (e.push(t), void 0 !== r) {
                                            let e = i.getAttribute(r.toLowerCase() + _).split(O),
                                                t = /([.?@])?(.*)/.exec(r);
                                            n.push({
                                                type: 1,
                                                index: o,
                                                name: t[2],
                                                strings: e,
                                                ctor: "." === t[1] ? er : "?" === t[1] ? eo : "@" === t[1] ? el : et
                                            })
                                        } else n.push({
                                            type: 6,
                                            index: o
                                        })
                                    }
                                for (let t of e) i.removeAttribute(t)
                            }
                            if (z.test(i.tagName)) {
                                let e = i.textContent.split(O),
                                    t = e.length - 1;
                                if (t > 0) {
                                    i.textContent = C ? C.emptyScript : "";
                                    for (let r = 0; r < t; r++) i.append(e[r], T()), K.nextNode(), n.push({
                                        type: 2,
                                        index: ++o
                                    });
                                    i.append(e[t], T())
                                }
                            }
                        } else if (8 === i.nodeType) {
                            if (i.data === E) n.push({
                                type: 2,
                                index: o
                            });
                            else {
                                let e = -1;
                                for (; - 1 !== (e = i.data.indexOf(O, e + 1));) n.push({
                                    type: 7,
                                    index: o
                                }), e += O.length - 1
                            }
                        }
                        o++
                    }
                }
                static createElement(e, t) {
                    let r = I.createElement("template");
                    return r.innerHTML = e, r
                }
            }

            function X(e, t, r = e, i) {
                var o, l, a;
                if (t === V) return t;
                let n = void 0 !== i ? null === (o = r._$Co) || void 0 === o ? void 0 : o[i] : r._$Cl,
                    s = P(t) ? void 0 : t._$litDirective$;
                return (null == n ? void 0 : n.constructor) !== s && (null === (l = null == n ? void 0 : n._$AO) || void 0 === l || l.call(n, !1), void 0 === s ? n = void 0 : (n = new s(e))._$AT(e, r, i), void 0 !== i ? (null !== (a = r._$Co) && void 0 !== a ? a : r._$Co = [])[i] = n : r._$Cl = n), void 0 !== n && (t = X(e, n._$AS(e, t.values), n, i)), t
            }
            class J {
                constructor(e, t) {
                    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t
                }
                get parentNode() {
                    return this._$AM.parentNode
                }
                get _$AU() {
                    return this._$AM._$AU
                }
                u(e) {
                    var t;
                    let {
                        el: {
                            content: r
                        },
                        parts: i
                    } = this._$AD, o = (null !== (t = null == e ? void 0 : e.creationScope) && void 0 !== t ? t : I).importNode(r, !0);
                    K.currentNode = o;
                    let l = K.nextNode(),
                        a = 0,
                        n = 0,
                        s = i[0];
                    for (; void 0 !== s;) {
                        if (a === s.index) {
                            let t;
                            2 === s.type ? t = new ee(l, l.nextSibling, this, e) : 1 === s.type ? t = new s.ctor(l, s.name, s.strings, this, e) : 6 === s.type && (t = new ea(l, this, e)), this._$AV.push(t), s = i[++n]
                        }
                        a !== (null == s ? void 0 : s.index) && (l = K.nextNode(), a++)
                    }
                    return K.currentNode = I, o
                }
                v(e) {
                    let t = 0;
                    for (let r of this._$AV) void 0 !== r && (void 0 !== r.strings ? (r._$AI(e, r, t), t += r.strings.length - 2) : r._$AI(e[t])), t++
                }
            }
            class ee {
                constructor(e, t, r, i) {
                    var o;
                    this.type = 2, this._$AH = q, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = r, this.options = i, this._$Cp = null === (o = null == i ? void 0 : i.isConnected) || void 0 === o || o
                }
                get _$AU() {
                    var e, t;
                    return null !== (t = null === (e = this._$AM) || void 0 === e ? void 0 : e._$AU) && void 0 !== t ? t : this._$Cp
                }
                get parentNode() {
                    let e = this._$AA.parentNode,
                        t = this._$AM;
                    return void 0 !== t && 11 === (null == e ? void 0 : e.nodeType) && (e = t.parentNode), e
                }
                get startNode() {
                    return this._$AA
                }
                get endNode() {
                    return this._$AB
                }
                _$AI(e, t = this) {
                    P(e = X(this, e, t)) ? e === q || null == e || "" === e ? (this._$AH !== q && this._$AR(), this._$AH = q) : e !== this._$AH && e !== V && this._(e) : void 0 !== e._$litType$ ? this.g(e) : void 0 !== e.nodeType ? this.$(e) : S(e) ? this.T(e) : this._(e)
                }
                k(e) {
                    return this._$AA.parentNode.insertBefore(e, this._$AB)
                }
                $(e) {
                    this._$AH !== e && (this._$AR(), this._$AH = this.k(e))
                }
                _(e) {
                    this._$AH !== q && P(this._$AH) ? this._$AA.nextSibling.data = e : this.$(I.createTextNode(e)), this._$AH = e
                }
                g(e) {
                    var t;
                    let {
                        values: r,
                        _$litType$: i
                    } = e, o = "number" == typeof i ? this._$AC(e) : (void 0 === i.el && (i.el = G.createElement(Q(i.h, i.h[0]), this.options)), i);
                    if ((null === (t = this._$AH) || void 0 === t ? void 0 : t._$AD) === o) this._$AH.v(r);
                    else {
                        let e = new J(o, this),
                            t = e.u(this.options);
                        e.v(r), this.$(t), this._$AH = e
                    }
                }
                _$AC(e) {
                    let t = F.get(e.strings);
                    return void 0 === t && F.set(e.strings, t = new G(e)), t
                }
                T(e) {
                    M(this._$AH) || (this._$AH = [], this._$AR());
                    let t = this._$AH,
                        r, i = 0;
                    for (let o of e) i === t.length ? t.push(r = new ee(this.k(T()), this.k(T()), this, this.options)) : r = t[i], r._$AI(o), i++;
                    i < t.length && (this._$AR(r && r._$AB.nextSibling, i), t.length = i)
                }
                _$AR(e = this._$AA.nextSibling, t) {
                    var r;
                    for (null === (r = this._$AP) || void 0 === r || r.call(this, !1, !0, t); e && e !== this._$AB;) {
                        let t = e.nextSibling;
                        e.remove(), e = t
                    }
                }
                setConnected(e) {
                    var t;
                    void 0 === this._$AM && (this._$Cp = e, null === (t = this._$AP) || void 0 === t || t.call(this, e))
                }
            }
            class et {
                constructor(e, t, r, i, o) {
                    this.type = 1, this._$AH = q, this._$AN = void 0, this.element = e, this.name = t, this._$AM = i, this.options = o, r.length > 2 || "" !== r[0] || "" !== r[1] ? (this._$AH = Array(r.length - 1).fill(new String), this.strings = r) : this._$AH = q
                }
                get tagName() {
                    return this.element.tagName
                }
                get _$AU() {
                    return this._$AM._$AU
                }
                _$AI(e, t = this, r, i) {
                    let o = this.strings,
                        l = !1;
                    if (void 0 === o)(l = !P(e = X(this, e, t, 0)) || e !== this._$AH && e !== V) && (this._$AH = e);
                    else {
                        let i, a;
                        let n = e;
                        for (e = o[0], i = 0; i < o.length - 1; i++)(a = X(this, n[r + i], t, i)) === V && (a = this._$AH[i]), l || (l = !P(a) || a !== this._$AH[i]), a === q ? e = q : e !== q && (e += (null != a ? a : "") + o[i + 1]), this._$AH[i] = a
                    }
                    l && !i && this.j(e)
                }
                j(e) {
                    e === q ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != e ? e : "")
                }
            }
            class er extends et {
                constructor() {
                    super(...arguments), this.type = 3
                }
                j(e) {
                    this.element[this.name] = e === q ? void 0 : e
                }
            }
            let ei = C ? C.emptyScript : "";
            class eo extends et {
                constructor() {
                    super(...arguments), this.type = 4
                }
                j(e) {
                    e && e !== q ? this.element.setAttribute(this.name, ei) : this.element.removeAttribute(this.name)
                }
            }
            class el extends et {
                constructor(e, t, r, i, o) {
                    super(e, t, r, i, o), this.type = 5
                }
                _$AI(e, t = this) {
                    var r;
                    if ((e = null !== (r = X(this, e, t, 0)) && void 0 !== r ? r : q) === V) return;
                    let i = this._$AH,
                        o = e === q && i !== q || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive,
                        l = e !== q && (i === q || o);
                    o && this.element.removeEventListener(this.name, this, i), l && this.element.addEventListener(this.name, this, e), this._$AH = e
                }
                handleEvent(e) {
                    var t, r;
                    "function" == typeof this._$AH ? this._$AH.call(null !== (r = null === (t = this.options) || void 0 === t ? void 0 : t.host) && void 0 !== r ? r : this.element, e) : this._$AH.handleEvent(e)
                }
            }
            class ea {
                constructor(e, t, r) {
                    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = r
                }
                get _$AU() {
                    return this._$AM._$AU
                }
                _$AI(e) {
                    X(this, e)
                }
            }
            let en = $.litHtmlPolyfillSupport;
            null == en || en(G, ee), (null !== (eb = $.litHtmlVersions) && void 0 !== eb ? eb : $.litHtmlVersions = []).push("2.8.0");
            let es = (e, t, r) => {
                var i, o;
                let l = null !== (i = null == r ? void 0 : r.renderBefore) && void 0 !== i ? i : t,
                    a = l._$litPart$;
                if (void 0 === a) {
                    let e = null !== (o = null == r ? void 0 : r.renderBefore) && void 0 !== o ? o : null;
                    l._$litPart$ = a = new ee(t.insertBefore(T(), e), e, void 0, null != r ? r : {})
                }
                return a._$AI(e), a
            };
            class ec extends x {
                constructor() {
                    super(...arguments), this.renderOptions = {
                        host: this
                    }, this._$Do = void 0
                }
                createRenderRoot() {
                    var e, t;
                    let r = super.createRenderRoot();
                    return null !== (e = (t = this.renderOptions).renderBefore) && void 0 !== e || (t.renderBefore = r.firstChild), r
                }
                update(e) {
                    let t = this.render();
                    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = es(t, this.renderRoot, this.renderOptions)
                }
                connectedCallback() {
                    var e;
                    super.connectedCallback(), null === (e = this._$Do) || void 0 === e || e.setConnected(!0)
                }
                disconnectedCallback() {
                    var e;
                    super.disconnectedCallback(), null === (e = this._$Do) || void 0 === e || e.setConnected(!1)
                }
                render() {
                    return V
                }
            }
            ec.finalized = !0, ec._$litElement$ = !0, null === (ey = globalThis.litElementHydrateSupport) || void 0 === ey || ey.call(globalThis, {
                LitElement: ec
            });
            let ed = globalThis.litElementPolyfillSupport;
            null == ed || ed({
                LitElement: ec
            }), (null !== (ex = globalThis.litElementVersions) && void 0 !== ex ? ex : globalThis.litElementVersions = []).push("3.3.3");
            /**
             * @license
             * Copyright 2017 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            let eh = e => t => "function" == typeof t ? (customElements.define(e, t), t) : ((e, t) => {
                    let {
                        kind: r,
                        elements: i
                    } = t;
                    return {
                        kind: r,
                        elements: i,
                        finisher(t) {
                            customElements.define(e, t)
                        }
                    }
                })(e, t),
                em = (e, t) => "method" !== t.kind || !t.descriptor || "value" in t.descriptor ? {
                    kind: "field",
                    key: Symbol(),
                    placement: "own",
                    descriptor: {},
                    originalKey: t.key,
                    initializer() {
                        "function" == typeof t.initializer && (this[t.key] = t.initializer.call(this))
                    },
                    finisher(r) {
                        r.createProperty(t.key, e)
                    }
                } : { ...t,
                    finisher(r) {
                        r.createProperty(t.key, e)
                    }
                },
                ep = (e, t, r) => {
                    t.constructor.createProperty(r, e)
                };

            function eu(e) {
                return (t, r) => void 0 !== r ? ep(e, t, r) : em(e, t)
            }
            /**
             * @license
             * Copyright 2017 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            function ew(e) {
                return eu({ ...e,
                    state: !0
                })
            }
            null != (null === (e$ = window.HTMLSlotElement) || void 0 === e$ ? void 0 : e$.prototype.assignedElements) || ((e, t) => e.assignedNodes(t).filter(e => e.nodeType === Node.ELEMENT_NODE));
            class eg {
                constructor(e) {}
                get _$AU() {
                    return this._$AM._$AU
                }
                _$AT(e, t, r) {
                    this._$Ct = e, this._$AM = t, this._$Ci = r
                }
                _$AS(e, t) {
                    return this.update(e, t)
                }
                update(e, t) {
                    return this.render(...t)
                }
            }
            /**
             * @license
             * Copyright 2018 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            let ev = (i = class extends eg {
                constructor(e) {
                    var t;
                    if (super(e), 1 !== e.type || "class" !== e.name || (null === (t = e.strings) || void 0 === t ? void 0 : t.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")
                }
                render(e) {
                    return " " + Object.keys(e).filter(t => e[t]).join(" ") + " "
                }
                update(e, [t]) {
                    var r, i;
                    if (void 0 === this.it) {
                        for (let i in this.it = new Set, void 0 !== e.strings && (this.nt = new Set(e.strings.join(" ").split(/\s/).filter(e => "" !== e))), t) !t[i] || (null === (r = this.nt) || void 0 === r ? void 0 : r.has(i)) || this.it.add(i);
                        return this.render(t)
                    }
                    let o = e.element.classList;
                    for (let e in this.it.forEach(e => {
                            e in t || (o.remove(e), this.it.delete(e))
                        }), t) {
                        let r = !!t[e];
                        r === this.it.has(e) || (null === (i = this.nt) || void 0 === i ? void 0 : i.has(e)) || (r ? (o.add(e), this.it.add(e)) : (o.remove(e), this.it.delete(e)))
                    }
                    return V
                }
            }, (...e) => ({
                _$litDirective$: i,
                values: e
            }));
            var ef, eb, ey, ex, e$, eC = r(57837);
            let eA = {
                    duration: .3,
                    delay: 0,
                    endDelay: 0,
                    repeat: 0,
                    easing: "ease"
                },
                e_ = {
                    ms: e => 1e3 * e,
                    s: e => e / 1e3
                },
                eO = () => {},
                eE = e => e;

            function ek(e, t = !0) {
                if (e && "finished" !== e.playState) try {
                    e.stop ? e.stop() : (t && e.commitStyles(), e.cancel())
                } catch (e) {}
            }
            let eI = e => e(),
                eT = (e, t, r = eA.duration) => new Proxy({
                    animations: e.map(eI).filter(Boolean),
                    duration: r,
                    options: t
                }, eM),
                eP = e => e.animations[0],
                eM = {
                    get: (e, t) => {
                        let r = eP(e);
                        switch (t) {
                            case "duration":
                                return e.duration;
                            case "currentTime":
                                return e_.s((null == r ? void 0 : r[t]) || 0);
                            case "playbackRate":
                            case "playState":
                                return null == r ? void 0 : r[t];
                            case "finished":
                                return e.finished || (e.finished = Promise.all(e.animations.map(eS)).catch(eO)), e.finished;
                            case "stop":
                                return () => {
                                    e.animations.forEach(e => ek(e))
                                };
                            case "forEachNative":
                                return t => {
                                    e.animations.forEach(r => t(r, e))
                                };
                            default:
                                return void 0 === (null == r ? void 0 : r[t]) ? void 0 : () => e.animations.forEach(e => e[t]())
                        }
                    },
                    set: (e, t, r) => {
                        switch (t) {
                            case "currentTime":
                                r = e_.ms(r);
                            case "playbackRate":
                                for (let i = 0; i < e.animations.length; i++) e.animations[i][t] = r;
                                return !0
                        }
                        return !1
                    }
                },
                eS = e => e.finished,
                eR = e => "object" == typeof e && !!e.createAnimation,
                eL = e => "number" == typeof e,
                eW = e => Array.isArray(e) && !eL(e[0]),
                ej = (e, t, r) => -r * e + r * t + e,
                eD = (e, t, r) => t - e == 0 ? 1 : (r - e) / (t - e);

            function eN(e, t) {
                let r = e[e.length - 1];
                for (let i = 1; i <= t; i++) {
                    let o = eD(0, t, i);
                    e.push(ej(r, 1, o))
                }
            }
            let eU = (e, t, r) => {
                    let i = t - e;
                    return ((r - e) % i + i) % i + e
                },
                ez = (e, t, r) => Math.min(Math.max(r, e), t),
                eH = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e;

            function eZ(e, t, r, i) {
                if (e === t && r === i) return eE;
                let o = t => (function(e, t, r, i, o) {
                    let l, a;
                    let n = 0;
                    do(l = eH(a = t + (r - t) / 2, i, o) - e) > 0 ? r = a : t = a; while (Math.abs(l) > 1e-7 && ++n < 12);
                    return a
                })(t, 0, 1, e, r);
                return e => 0 === e || 1 === e ? e : eH(o(e), t, i)
            }
            let eB = (e, t = "end") => r => {
                    let i = (r = "end" === t ? Math.min(r, .999) : Math.max(r, .001)) * e;
                    return ez(0, 1, ("end" === t ? Math.floor(i) : Math.ceil(i)) / e)
                },
                eV = e => "function" == typeof e,
                eq = e => Array.isArray(e) && eL(e[0]),
                eF = {
                    ease: eZ(.25, .1, .25, 1),
                    "ease-in": eZ(.42, 0, 1, 1),
                    "ease-in-out": eZ(.42, 0, .58, 1),
                    "ease-out": eZ(0, 0, .58, 1)
                },
                eK = /\((.*?)\)/;

            function eQ(e) {
                if (eV(e)) return e;
                if (eq(e)) return eZ(...e);
                if (eF[e]) return eF[e];
                if (e.startsWith("steps")) {
                    let t = eK.exec(e);
                    if (t) {
                        let e = t[1].split(",");
                        return eB(parseFloat(e[0]), e[1].trim())
                    }
                }
                return eE
            }
            class eY {
                constructor(e, t = [0, 1], {
                    easing: r,
                    duration: i = eA.duration,
                    delay: o = eA.delay,
                    endDelay: l = eA.endDelay,
                    repeat: a = eA.repeat,
                    offset: n,
                    direction: s = "normal",
                    autoplay: c = !0
                } = {}) {
                    if (this.startTime = null, this.rate = 1, this.t = 0, this.cancelTimestamp = null, this.easing = eE, this.duration = 0, this.totalDuration = 0, this.repeat = 0, this.playState = "idle", this.finished = new Promise((e, t) => {
                            this.resolve = e, this.reject = t
                        }), eR(r = r || eA.easing)) {
                        let e = r.createAnimation(t);
                        r = e.easing, t = e.keyframes || t, i = e.duration || i
                    }
                    this.repeat = a, this.easing = eW(r) ? eE : eQ(r), this.updateDuration(i);
                    let d = function(e, t = function(e) {
                        let t = [0];
                        return eN(t, e - 1), t
                    }(e.length), r = eE) {
                        let i = e.length,
                            o = i - t.length;
                        return o > 0 && eN(t, o), o => {
                            var l;
                            let a = 0;
                            for (; a < i - 2 && !(o < t[a + 1]); a++);
                            let n = ez(0, 1, eD(t[a], t[a + 1], o));
                            return n = (l = a, eW(r) ? r[eU(0, r.length, l)] : r)(n), ej(e[a], e[a + 1], n)
                        }
                    }(t, n, eW(r) ? r.map(eQ) : eE);
                    this.tick = t => {
                        var r;
                        let i = 0;
                        i = void 0 !== this.pauseTime ? this.pauseTime : (t - this.startTime) * this.rate, this.t = i, i /= 1e3, i = Math.max(i - o, 0), "finished" === this.playState && void 0 === this.pauseTime && (i = this.totalDuration);
                        let a = i / this.duration,
                            n = Math.floor(a),
                            c = a % 1;
                        !c && a >= 1 && (c = 1), 1 === c && n--;
                        let h = n % 2;
                        ("reverse" === s || "alternate" === s && h || "alternate-reverse" === s && !h) && (c = 1 - c);
                        let m = i >= this.totalDuration ? 1 : Math.min(c, 1),
                            p = d(this.easing(m));
                        e(p), void 0 === this.pauseTime && ("finished" === this.playState || i >= this.totalDuration + l) ? (this.playState = "finished", null === (r = this.resolve) || void 0 === r || r.call(this, p)) : "idle" !== this.playState && (this.frameRequestId = requestAnimationFrame(this.tick))
                    }, c && this.play()
                }
                play() {
                    let e = performance.now();
                    this.playState = "running", void 0 !== this.pauseTime ? this.startTime = e - this.pauseTime : this.startTime || (this.startTime = e), this.cancelTimestamp = this.startTime, this.pauseTime = void 0, this.frameRequestId = requestAnimationFrame(this.tick)
                }
                pause() {
                    this.playState = "paused", this.pauseTime = this.t
                }
                finish() {
                    this.playState = "finished", this.tick(0)
                }
                stop() {
                    var e;
                    this.playState = "idle", void 0 !== this.frameRequestId && cancelAnimationFrame(this.frameRequestId), null === (e = this.reject) || void 0 === e || e.call(this, !1)
                }
                cancel() {
                    this.stop(), this.tick(this.cancelTimestamp)
                }
                reverse() {
                    this.rate *= -1
                }
                commitStyles() {}
                updateDuration(e) {
                    this.duration = e, this.totalDuration = e * (this.repeat + 1)
                }
                get currentTime() {
                    return this.t
                }
                set currentTime(e) {
                    void 0 !== this.pauseTime || 0 === this.rate ? this.pauseTime = e : this.startTime = performance.now() - e / this.rate
                }
                get playbackRate() {
                    return this.rate
                }
                set playbackRate(e) {
                    this.rate = e
                }
            }
            var eG = function() {};
            class eX {
                setAnimation(e) {
                    this.animation = e, null == e || e.finished.then(() => this.clearAnimation()).catch(() => {})
                }
                clearAnimation() {
                    this.animation = this.generator = void 0
                }
            }
            let eJ = new WeakMap;

            function e0(e) {
                return eJ.has(e) || eJ.set(e, {
                    transforms: [],
                    values: new Map
                }), eJ.get(e)
            }
            let e1 = ["", "X", "Y", "Z"],
                e2 = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ"
                },
                e5 = {
                    syntax: "<angle>",
                    initialValue: "0deg",
                    toDefaultUnit: e => e + "deg"
                },
                e4 = {
                    translate: {
                        syntax: "<length-percentage>",
                        initialValue: "0px",
                        toDefaultUnit: e => e + "px"
                    },
                    rotate: e5,
                    scale: {
                        syntax: "<number>",
                        initialValue: 1,
                        toDefaultUnit: eE
                    },
                    skew: e5
                },
                e3 = new Map,
                e7 = e => `--motion-${e}`,
                e6 = ["x", "y", "z"];
            ["translate", "scale", "rotate", "skew"].forEach(e => {
                e1.forEach(t => {
                    e6.push(e + t), e3.set(e7(e + t), e4[e])
                })
            });
            let e8 = (e, t) => e6.indexOf(e) - e6.indexOf(t),
                e9 = new Set(e6),
                te = e => e9.has(e),
                tt = (e, t) => {
                    var r;
                    e2[t] && (t = e2[t]);
                    let {
                        transforms: i
                    } = e0(e);
                    r = t, -1 === i.indexOf(r) && i.push(r), e.style.transform = tr(i)
                },
                tr = e => e.sort(e8).reduce(ti, "").trim(),
                ti = (e, t) => `${e} ${t}(var(${e7(t)}))`,
                to = e => e.startsWith("--"),
                tl = new Set,
                ta = (e, t) => document.createElement("div").animate(e, t),
                tn = {
                    cssRegisterProperty: () => "undefined" != typeof CSS && Object.hasOwnProperty.call(CSS, "registerProperty"),
                    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
                    partialKeyframes: () => {
                        try {
                            ta({
                                opacity: [1]
                            })
                        } catch (e) {
                            return !1
                        }
                        return !0
                    },
                    finished: () => !!ta({
                        opacity: [0, 1]
                    }, {
                        duration: .001
                    }).finished,
                    linearEasing: () => {
                        try {
                            ta({
                                opacity: 0
                            }, {
                                easing: "linear(0, 1)"
                            })
                        } catch (e) {
                            return !1
                        }
                        return !0
                    }
                },
                ts = {},
                tc = {};
            for (let e in tn) tc[e] = () => (void 0 === ts[e] && (ts[e] = tn[e]()), ts[e]);
            let td = (e, t) => {
                    let r = "",
                        i = Math.round(t / .015);
                    for (let t = 0; t < i; t++) r += e(eD(0, i - 1, t)) + ", ";
                    return r.substring(0, r.length - 2)
                },
                th = (e, t) => eV(e) ? tc.linearEasing() ? `linear(${td(e,t)})` : eA.easing : eq(e) ? tm(e) : e,
                tm = ([e, t, r, i]) => `cubic-bezier(${e}, ${t}, ${r}, ${i})`,
                tp = e => Array.isArray(e) ? e : [e];

            function tu(e) {
                return e2[e] && (e = e2[e]), te(e) ? e7(e) : e
            }
            let tw = {
                    get: (e, t) => {
                        let r = to(t = tu(t)) ? e.style.getPropertyValue(t) : getComputedStyle(e)[t];
                        if (!r && 0 !== r) {
                            let e = e3.get(t);
                            e && (r = e.initialValue)
                        }
                        return r
                    },
                    set: (e, t, r) => {
                        to(t = tu(t)) ? e.style.setProperty(t, r) : e.style[t] = r
                    }
                },
                tg = e => "string" == typeof e,
                tv = (e, t) => e[t] ? Object.assign(Object.assign({}, e), e[t]) : Object.assign({}, e),
                tf = function(e, t, r = {}) {
                    var i, o, l;
                    "string" == typeof(i = e) ? i = document.querySelectorAll(i): i instanceof Element && (i = [i]);
                    let a = (e = Array.from(i || [])).length;
                    eG(!!a, "No valid element provided."), eG(!!t, "No keyframes defined.");
                    let n = [];
                    for (let i = 0; i < a; i++) {
                        let s = e[i];
                        for (let e in t) {
                            let c = tv(r, e);
                            c.delay = (o = c.delay, l = i, eV(o) ? o(l, a) : o);
                            let d = function(e, t, r, i = {}, o) {
                                var l;
                                let a;
                                let n = window.__MOTION_DEV_TOOLS_RECORD,
                                    s = !1 !== i.record && n,
                                    {
                                        duration: c = eA.duration,
                                        delay: d = eA.delay,
                                        endDelay: h = eA.endDelay,
                                        repeat: m = eA.repeat,
                                        easing: p = eA.easing,
                                        persist: u = !1,
                                        direction: w,
                                        offset: g,
                                        allowWebkitAcceleration: v = !1,
                                        autoplay: f = !0
                                    } = i,
                                    b = e0(e),
                                    y = te(t),
                                    x = tc.waapi();
                                y && tt(e, t);
                                let $ = tu(t),
                                    C = ((l = b.values).has($) || l.set($, new eX), l.get($)),
                                    A = e3.get($);
                                return ek(C.animation, !(eR(p) && C.generator) && !1 !== i.record), () => {
                                    let l = () => {
                                            var t, r;
                                            return null !== (r = null !== (t = tw.get(e, $)) && void 0 !== t ? t : null == A ? void 0 : A.initialValue) && void 0 !== r ? r : 0
                                        },
                                        b = function(e, t) {
                                            for (let r = 0; r < e.length; r++) null === e[r] && (e[r] = r ? e[r - 1] : t());
                                            return e
                                        }(tp(r), l),
                                        _ = function(e, t) {
                                            var r;
                                            let i = (null == t ? void 0 : t.toDefaultUnit) || eE,
                                                o = e[e.length - 1];
                                            if (tg(o)) {
                                                let e = (null === (r = o.match(/(-?[\d.]+)([a-z%]*)/)) || void 0 === r ? void 0 : r[2]) || "";
                                                e && (i = t => t + e)
                                            }
                                            return i
                                        }(b, A);
                                    if (eR(p)) {
                                        let e = p.createAnimation(b, "opacity" !== t, l, $, C);
                                        p = e.easing, b = e.keyframes || b, c = e.duration || c
                                    }
                                    if (to($) && (tc.cssRegisterProperty() ? function(e) {
                                            if (!tl.has(e)) {
                                                tl.add(e);
                                                try {
                                                    let {
                                                        syntax: t,
                                                        initialValue: r
                                                    } = e3.has(e) ? e3.get(e) : {};
                                                    CSS.registerProperty({
                                                        name: e,
                                                        inherits: !1,
                                                        syntax: t,
                                                        initialValue: r
                                                    })
                                                } catch (e) {}
                                            }
                                        }($) : x = !1), y && !tc.linearEasing() && (eV(p) || eW(p) && p.some(eV)) && (x = !1), x) {
                                        A && (b = b.map(e => eL(e) ? A.toDefaultUnit(e) : e)), 1 === b.length && (!tc.partialKeyframes() || s) && b.unshift(l());
                                        let t = {
                                            delay: e_.ms(d),
                                            duration: e_.ms(c),
                                            endDelay: e_.ms(h),
                                            easing: eW(p) ? void 0 : th(p, c),
                                            direction: w,
                                            iterations: m + 1,
                                            fill: "both"
                                        };
                                        (a = e.animate({
                                            [$]: b,
                                            offset: g,
                                            easing: eW(p) ? p.map(e => th(e, c)) : void 0
                                        }, t)).finished || (a.finished = new Promise((e, t) => {
                                            a.onfinish = e, a.oncancel = t
                                        }));
                                        let r = b[b.length - 1];
                                        a.finished.then(() => {
                                            u || (tw.set(e, $, r), a.cancel())
                                        }).catch(eO), v || (a.playbackRate = 1.000001)
                                    } else if (o && y) 1 === (b = b.map(e => "string" == typeof e ? parseFloat(e) : e)).length && b.unshift(parseFloat(l())), a = new o(t => {
                                        tw.set(e, $, _ ? _(t) : t)
                                    }, b, Object.assign(Object.assign({}, i), {
                                        duration: c,
                                        easing: p
                                    }));
                                    else {
                                        let t = b[b.length - 1];
                                        tw.set(e, $, A && eL(t) ? A.toDefaultUnit(t) : t)
                                    }
                                    return s && n(e, t, b, {
                                        duration: c,
                                        delay: d,
                                        easing: p,
                                        repeat: m,
                                        offset: g
                                    }, "motion-one"), C.setAnimation(a), a && !f && a.pause(), a
                                }
                            }(s, e, t[e], c, eY);
                            n.push(d)
                        }
                    }
                    return eT(n, r, r.duration)
                };

            function tb(e, t, r) {
                return (eV(e) ? function(e, t = {}) {
                    return eT([() => {
                        let r = new eY(e, [0, 1], t);
                        return r.finished.catch(() => {}), r
                    }], t, t.duration)
                } : tf)(e, t, r)
            }
            /**
             * @license
             * Copyright 2018 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            let ty = e => null != e ? e : q;
            var tx = r(35819),
                t$ = Object.defineProperty,
                tC = Object.getOwnPropertySymbols,
                tA = Object.prototype.hasOwnProperty,
                t_ = Object.prototype.propertyIsEnumerable,
                tO = (e, t, r) => t in e ? t$(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                tE = (e, t) => {
                    for (var r in t || (t = {})) tA.call(t, r) && tO(e, r, t[r]);
                    if (tC)
                        for (var r of tC(t)) t_.call(t, r) && tO(e, r, t[r]);
                    return e
                };

            function tk() {
                return {
                    "--wcm-accent-color": "#3396FF",
                    "--wcm-accent-fill-color": "#FFFFFF",
                    "--wcm-z-index": "89",
                    "--wcm-background-color": "#3396FF",
                    "--wcm-background-border-radius": "8px",
                    "--wcm-container-border-radius": "30px",
                    "--wcm-wallet-icon-border-radius": "15px",
                    "--wcm-wallet-icon-large-border-radius": "30px",
                    "--wcm-wallet-icon-small-border-radius": "7px",
                    "--wcm-input-border-radius": "28px",
                    "--wcm-button-border-radius": "10px",
                    "--wcm-notification-border-radius": "36px",
                    "--wcm-secondary-button-border-radius": "28px",
                    "--wcm-icon-button-border-radius": "50%",
                    "--wcm-button-hover-highlight-border-radius": "10px",
                    "--wcm-text-big-bold-size": "20px",
                    "--wcm-text-big-bold-weight": "600",
                    "--wcm-text-big-bold-line-height": "24px",
                    "--wcm-text-big-bold-letter-spacing": "-0.03em",
                    "--wcm-text-big-bold-text-transform": "none",
                    "--wcm-text-xsmall-bold-size": "10px",
                    "--wcm-text-xsmall-bold-weight": "700",
                    "--wcm-text-xsmall-bold-line-height": "12px",
                    "--wcm-text-xsmall-bold-letter-spacing": "0.02em",
                    "--wcm-text-xsmall-bold-text-transform": "uppercase",
                    "--wcm-text-xsmall-regular-size": "12px",
                    "--wcm-text-xsmall-regular-weight": "600",
                    "--wcm-text-xsmall-regular-line-height": "14px",
                    "--wcm-text-xsmall-regular-letter-spacing": "-0.03em",
                    "--wcm-text-xsmall-regular-text-transform": "none",
                    "--wcm-text-small-thin-size": "14px",
                    "--wcm-text-small-thin-weight": "500",
                    "--wcm-text-small-thin-line-height": "16px",
                    "--wcm-text-small-thin-letter-spacing": "-0.03em",
                    "--wcm-text-small-thin-text-transform": "none",
                    "--wcm-text-small-regular-size": "14px",
                    "--wcm-text-small-regular-weight": "600",
                    "--wcm-text-small-regular-line-height": "16px",
                    "--wcm-text-small-regular-letter-spacing": "-0.03em",
                    "--wcm-text-small-regular-text-transform": "none",
                    "--wcm-text-medium-regular-size": "16px",
                    "--wcm-text-medium-regular-weight": "600",
                    "--wcm-text-medium-regular-line-height": "20px",
                    "--wcm-text-medium-regular-letter-spacing": "-0.03em",
                    "--wcm-text-medium-regular-text-transform": "none",
                    "--wcm-font-family": "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
                    "--wcm-font-feature-settings": "'tnum' on, 'lnum' on, 'case' on",
                    "--wcm-success-color": "rgb(38,181,98)",
                    "--wcm-error-color": "rgb(242, 90, 103)",
                    "--wcm-overlay-background-color": "rgba(0, 0, 0, 0.3)",
                    "--wcm-overlay-backdrop-filter": "none"
                }
            }
            let tI = {
                    getPreset: e => tk()[e],
                    setTheme() {
                        let e = document.querySelector(":root"),
                            {
                                themeVariables: t
                            } = eC.ThemeCtrl.state;
                        e && Object.entries(tE(tE(tE({}, function() {
                            var e;
                            let t = {
                                light: {
                                    foreground: {
                                        1: "rgb(20,20,20)",
                                        2: "rgb(121,134,134)",
                                        3: "rgb(158,169,169)"
                                    },
                                    background: {
                                        1: "rgb(255,255,255)",
                                        2: "rgb(241,243,243)",
                                        3: "rgb(228,231,231)"
                                    },
                                    overlay: "rgba(0,0,0,0.1)"
                                },
                                dark: {
                                    foreground: {
                                        1: "rgb(228,231,231)",
                                        2: "rgb(148,158,158)",
                                        3: "rgb(110,119,119)"
                                    },
                                    background: {
                                        1: "rgb(20,20,20)",
                                        2: "rgb(39,42,42)",
                                        3: "rgb(59,64,64)"
                                    },
                                    overlay: "rgba(255,255,255,0.1)"
                                }
                            }[null != (e = eC.ThemeCtrl.state.themeMode) ? e : "dark"];
                            return {
                                "--wcm-color-fg-1": t.foreground[1],
                                "--wcm-color-fg-2": t.foreground[2],
                                "--wcm-color-fg-3": t.foreground[3],
                                "--wcm-color-bg-1": t.background[1],
                                "--wcm-color-bg-2": t.background[2],
                                "--wcm-color-bg-3": t.background[3],
                                "--wcm-color-overlay": t.overlay
                            }
                        }()), tk()), t)).forEach(([t, r]) => e.style.setProperty(t, r))
                    },
                    globalCss: d `*,::after,::before{margin:0;padding:0;box-sizing:border-box;font-style:normal;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;backface-visibility:hidden}button{cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent;transition:all .2s ease}@media (hover:hover) and (pointer:fine){button:active{transition:all .1s ease;transform:scale(.93)}}button::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;transition:background-color,.2s ease}button:disabled{cursor:not-allowed}button svg,button wcm-text{position:relative;z-index:1}input{border:none;outline:0;appearance:none}img{display:block}::selection{color:var(--wcm-accent-fill-color);background:var(--wcm-accent-color)}`
                },
                tT = d `button{border-radius:var(--wcm-secondary-button-border-radius);height:28px;padding:0 10px;background-color:var(--wcm-accent-color)}button path{fill:var(--wcm-accent-fill-color)}button::after{border-radius:inherit;border:1px solid var(--wcm-color-overlay)}button:disabled::after{background-color:transparent}.wcm-icon-left svg{margin-right:5px}.wcm-icon-right svg{margin-left:5px}button:active::after{background-color:var(--wcm-color-overlay)}.wcm-ghost,.wcm-ghost:active::after,.wcm-outline{background-color:transparent}.wcm-ghost:active{opacity:.5}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}.wcm-ghost:hover::after{background-color:transparent}.wcm-ghost:hover{opacity:.5}}button:disabled{background-color:var(--wcm-color-bg-3);pointer-events:none}.wcm-ghost::after{border-color:transparent}.wcm-ghost path{fill:var(--wcm-color-fg-2)}.wcm-outline path{fill:var(--wcm-accent-color)}.wcm-outline:disabled{background-color:transparent;opacity:.5}`;
            var tP = Object.defineProperty,
                tM = Object.getOwnPropertyDescriptor,
                tS = (e, t, r, i) => {
                    for (var o, l = i > 1 ? void 0 : i ? tM(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                    return i && l && tP(t, r, l), l
                };
            let tR = class extends ec {
                constructor() {
                    super(...arguments), this.disabled = !1, this.iconLeft = void 0, this.iconRight = void 0, this.onClick = () => null, this.variant = "default"
                }
                render() {
                    let e = {
                            "wcm-icon-left": void 0 !== this.iconLeft,
                            "wcm-icon-right": void 0 !== this.iconRight,
                            "wcm-ghost": "ghost" === this.variant,
                            "wcm-outline": "outline" === this.variant
                        },
                        t = "inverse";
                    return "ghost" === this.variant && (t = "secondary"), "outline" === this.variant && (t = "accent"), Z `<button class="${ev(e)}" ?disabled="${this.disabled}" @click="${this.onClick}">${this.iconLeft}<wcm-text variant="small-regular" color="${t}"><slot></slot></wcm-text>${this.iconRight}</button>`
                }
            };
            tR.styles = [tI.globalCss, tT], tS([eu({
                type: Boolean
            })], tR.prototype, "disabled", 2), tS([eu()], tR.prototype, "iconLeft", 2), tS([eu()], tR.prototype, "iconRight", 2), tS([eu()], tR.prototype, "onClick", 2), tS([eu()], tR.prototype, "variant", 2), tR = tS([eh("wcm-button")], tR);
            let tL = d `:host{display:inline-block}button{padding:0 15px 1px;height:40px;border-radius:var(--wcm-button-border-radius);color:var(--wcm-accent-fill-color);background-color:var(--wcm-accent-color)}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--wcm-color-overlay)}button:active::after{background-color:var(--wcm-color-overlay)}button:disabled{padding-bottom:0;background-color:var(--wcm-color-bg-3);color:var(--wcm-color-fg-3)}.wcm-secondary{color:var(--wcm-accent-color);background-color:transparent}.wcm-secondary::after{display:none}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}}`;
            var tW = Object.defineProperty,
                tj = Object.getOwnPropertyDescriptor,
                tD = (e, t, r, i) => {
                    for (var o, l = i > 1 ? void 0 : i ? tj(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                    return i && l && tW(t, r, l), l
                };
            let tN = class extends ec {
                constructor() {
                    super(...arguments), this.disabled = !1, this.variant = "primary"
                }
                render() {
                    let e = {
                        "wcm-secondary": "secondary" === this.variant
                    };
                    return Z `<button ?disabled="${this.disabled}" class="${ev(e)}"><slot></slot></button>`
                }
            };
            tN.styles = [tI.globalCss, tL], tD([eu({
                type: Boolean
            })], tN.prototype, "disabled", 2), tD([eu()], tN.prototype, "variant", 2), tN = tD([eh("wcm-button-big")], tN);
            let tU = d `:host{background-color:var(--wcm-color-bg-2);border-top:1px solid var(--wcm-color-bg-3)}div{padding:10px 20px;display:inherit;flex-direction:inherit;align-items:inherit;width:inherit;justify-content:inherit}`;
            var tz = Object.defineProperty,
                tH = Object.getOwnPropertyDescriptor;
            let tZ = class extends ec {
                render() {
                    return Z `<div><slot></slot></div>`
                }
            };
            tZ.styles = [tI.globalCss, tU], tZ = ((e, t, r, i) => {
                for (var o, l = i > 1 ? void 0 : i ? tH(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                return i && l && tz(t, r, l), l
            })([eh("wcm-info-footer")], tZ);
            let tB = {
                    CROSS_ICON: B `<svg width="12" height="12" viewBox="0 0 12 12"><path d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z" fill="#fff"/></svg>`,
                    WALLET_CONNECT_LOGO: B `<svg width="178" height="29" viewBox="0 0 178 29" id="wcm-wc-logo"><path d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z" fill="#fff"/></svg>`,
                    WALLET_CONNECT_ICON: B `<svg width="28" height="20" viewBox="0 0 28 20"><g clip-path="url(#a)"><path d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z" fill="#000000"/></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z"/></clipPath></defs></svg>`,
                    WALLET_CONNECT_ICON_COLORED: B `<svg width="96" height="96" fill="none"><path fill="#fff" d="M25.322 33.597c12.525-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.156 5.048a.814.814 0 0 1-1.134 0l-2.074-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.654-1.62Zm56.019 10.44 4.589 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.267 0L48.283 56.632a.407.407 0 0 0-.567 0L33.03 71.012a1.628 1.628 0 0 1-2.268 0L10.07 50.75a1.547 1.547 0 0 1 0-2.22l4.59-4.494a1.628 1.628 0 0 1 2.267 0l14.687 14.38c.156.153.41.153.567 0l14.685-14.38a1.628 1.628 0 0 1 2.268 0l14.687 14.38c.156.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"/><path stroke="#000" d="M25.672 33.954c12.33-12.072 32.325-12.072 44.655 0l1.508 1.476a1.047 1.047 0 0 1 0 1.506l-5.157 5.048a.314.314 0 0 1-.434 0l-2.074-2.03c-8.932-8.746-23.409-8.746-32.34 0l-2.222 2.174a.314.314 0 0 1-.434 0l-5.157-5.048a1.047 1.047 0 0 1 0-1.506l1.655-1.62Zm55.319 10.44 4.59 4.494a1.047 1.047 0 0 1 0 1.506l-20.694 20.26a1.128 1.128 0 0 1-1.568 0l-14.686-14.38a.907.907 0 0 0-1.267 0L32.68 70.655a1.128 1.128 0 0 1-1.568 0L10.42 50.394a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.567 0l14.687 14.379a.907.907 0 0 0 1.266 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.687 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"/></svg>`,
                    BACK_ICON: B `<svg width="10" height="18" viewBox="0 0 10 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z" fill="#fff"/></svg>`,
                    COPY_ICON: B `<svg width="24" height="24" fill="none"><path fill="#fff" fill-rule="evenodd" d="M7.01 7.01c.03-1.545.138-2.5.535-3.28A5 5 0 0 1 9.73 1.545C10.8 1 12.2 1 15 1c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 4.8 23 6.2 23 9c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.78.397-1.735.505-3.28.534l-.001.01c-.03 1.54-.138 2.493-.534 3.27a5 5 0 0 1-2.185 2.186C13.2 23 11.8 23 9 23c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 19.2 1 17.8 1 15c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 7.545C4.508 7.149 5.46 7.04 7 7.01h.01ZM15 15.5c-1.425 0-2.403-.001-3.162-.063-.74-.06-1.139-.172-1.427-.319a3.5 3.5 0 0 1-1.53-1.529c-.146-.288-.257-.686-.318-1.427C8.501 11.403 8.5 10.425 8.5 9c0-1.425.001-2.403.063-3.162.06-.74.172-1.139.318-1.427a3.5 3.5 0 0 1 1.53-1.53c.288-.146.686-.257 1.427-.318.759-.062 1.737-.063 3.162-.063 1.425 0 2.403.001 3.162.063.74.06 1.139.172 1.427.318a3.5 3.5 0 0 1 1.53 1.53c.146.288.257.686.318 1.427.062.759.063 1.737.063 3.162 0 1.425-.001 2.403-.063 3.162-.06.74-.172 1.139-.319 1.427a3.5 3.5 0 0 1-1.529 1.53c-.288.146-.686.257-1.427.318-.759.062-1.737.063-3.162.063ZM7 8.511c-.444.009-.825.025-1.162.052-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427-.062.759-.063 1.737-.063 3.162 0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.53c.146-.287.257-.685.318-1.426.027-.337.043-.718.052-1.162H15c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C7 13.2 7 11.8 7 9v-.489Z" clip-rule="evenodd"/></svg>`,
                    RETRY_ICON: B `<svg width="15" height="16" viewBox="0 0 15 16"><path d="M6.464 2.03A.75.75 0 0 0 5.403.97L2.08 4.293a1 1 0 0 0 0 1.414L5.403 9.03a.75.75 0 0 0 1.06-1.06L4.672 6.177a.25.25 0 0 1 .177-.427h2.085a4 4 0 1 1-3.93 4.746c-.077-.407-.405-.746-.82-.746-.414 0-.755.338-.7.748a5.501 5.501 0 1 0 5.45-6.248H4.848a.25.25 0 0 1-.177-.427L6.464 2.03Z" fill="#fff"/></svg>`,
                    DESKTOP_ICON: B `<svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z" fill="#fff"/><path d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
                    MOBILE_ICON: B `<svg width="16" height="16" viewBox="0 0 16 16"><path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z" fill="#fff"/></svg>`,
                    ARROW_DOWN_ICON: B `<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2.28 7.47a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06l-3.544 3.543a.25.25 0 0 1-.426-.177V.75a.75.75 0 0 0-1.5 0v10.086a.25.25 0 0 1-.427.176L2.28 7.47Z" fill="#fff"/></svg>`,
                    ARROW_UP_RIGHT_ICON: B `<svg width="15" height="14" fill="none"><path d="M4.5 1.75A.75.75 0 0 1 5.25 1H12a1.5 1.5 0 0 1 1.5 1.5v6.75a.75.75 0 0 1-1.5 0V4.164a.25.25 0 0 0-.427-.176L4.061 11.5A.75.75 0 0 1 3 10.44l7.513-7.513a.25.25 0 0 0-.177-.427H5.25a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
                    ARROW_RIGHT_ICON: B `<svg width="6" height="14" viewBox="0 0 6 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.181 1.099a.75.75 0 0 1 1.024.279l2.433 4.258a2.75 2.75 0 0 1 0 2.729l-2.433 4.257a.75.75 0 1 1-1.303-.744L4.335 7.62a1.25 1.25 0 0 0 0-1.24L1.902 2.122a.75.75 0 0 1 .28-1.023Z" fill="#fff"/></svg>`,
                    QRCODE_ICON: B `<svg width="25" height="24" viewBox="0 0 25 24"><path d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" fill="#fff"/><path d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z" fill="#fff"/></svg>`,
                    SCAN_ICON: B `<svg width="16" height="16" fill="none"><path fill="#fff" d="M10 15.216c0 .422.347.763.768.74 1.202-.064 2.025-.222 2.71-.613a5.001 5.001 0 0 0 1.865-1.866c.39-.684.549-1.507.613-2.709a.735.735 0 0 0-.74-.768.768.768 0 0 0-.76.732c-.009.157-.02.306-.032.447-.073.812-.206 1.244-.384 1.555-.31.545-.761.996-1.306 1.306-.311.178-.743.311-1.555.384-.141.013-.29.023-.447.032a.768.768 0 0 0-.732.76ZM10 .784c0 .407.325.737.732.76.157.009.306.02.447.032.812.073 1.244.206 1.555.384a3.5 3.5 0 0 1 1.306 1.306c.178.311.311.743.384 1.555.013.142.023.29.032.447a.768.768 0 0 0 .76.732.734.734 0 0 0 .74-.768c-.064-1.202-.222-2.025-.613-2.71A5 5 0 0 0 13.477.658c-.684-.39-1.507-.549-2.709-.613a.735.735 0 0 0-.768.74ZM5.232.044A.735.735 0 0 1 6 .784a.768.768 0 0 1-.732.76c-.157.009-.305.02-.447.032-.812.073-1.244.206-1.555.384A3.5 3.5 0 0 0 1.96 3.266c-.178.311-.311.743-.384 1.555-.013.142-.023.29-.032.447A.768.768 0 0 1 .784 6a.735.735 0 0 1-.74-.768c.064-1.202.222-2.025.613-2.71A5 5 0 0 1 2.523.658C3.207.267 4.03.108 5.233.044ZM5.268 14.456a.768.768 0 0 1 .732.76.734.734 0 0 1-.768.74c-1.202-.064-2.025-.222-2.71-.613a5 5 0 0 1-1.865-1.866c-.39-.684-.549-1.507-.613-2.709A.735.735 0 0 1 .784 10c.407 0 .737.325.76.732.009.157.02.306.032.447.073.812.206 1.244.384 1.555a3.5 3.5 0 0 0 1.306 1.306c.311.178.743.311 1.555.384.142.013.29.023.447.032Z"/></svg>`,
                    CHECKMARK_ICON: B `<svg width="13" height="12" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.155.132a.75.75 0 0 1 .232 1.035L5.821 11.535a1 1 0 0 1-1.626.09L.665 7.21a.75.75 0 1 1 1.17-.937L4.71 9.867a.25.25 0 0 0 .406-.023L11.12.364a.75.75 0 0 1 1.035-.232Z" fill="#fff"/></svg>`,
                    SEARCH_ICON: B `<svg width="20" height="21"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.432 13.992c-.354-.353-.91-.382-1.35-.146a5.5 5.5 0 1 1 2.265-2.265c-.237.441-.208.997.145 1.35l3.296 3.296a.75.75 0 1 1-1.06 1.061l-3.296-3.296Zm.06-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#949E9E"/></svg>`,
                    WALLET_PLACEHOLDER: B `<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#q)"><path id="wallet-placeholder-fill" fill="#fff" d="M0 24.9c0-9.251 0-13.877 1.97-17.332a15 15 0 0 1 5.598-5.597C11.023 0 15.648 0 24.9 0h10.2c9.252 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.023 60 15.648 60 24.9v10.2c0 9.252 0 13.877-1.97 17.332a15.001 15.001 0 0 1-5.598 5.597C48.977 60 44.352 60 35.1 60H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.352 0 35.1V24.9Z"/><path id="wallet-placeholder-dash" stroke="#000" stroke-dasharray="4 4" stroke-width="1.5" d="M.04 41.708a231.598 231.598 0 0 1-.039-4.403l.75-.001L.75 35.1v-2.55H0v-5.1h.75V24.9l.001-2.204h-.75c.003-1.617.011-3.077.039-4.404l.75.016c.034-1.65.099-3.08.218-4.343l-.746-.07c.158-1.678.412-3.083.82-4.316l.713.236c.224-.679.497-1.296.827-1.875a14.25 14.25 0 0 1 1.05-1.585L3.076 5.9A15 15 0 0 1 5.9 3.076l.455.596a14.25 14.25 0 0 1 1.585-1.05c.579-.33 1.196-.603 1.875-.827l-.236-.712C10.812.674 12.217.42 13.895.262l.07.746C15.23.89 16.66.824 18.308.79l-.016-.75C19.62.012 21.08.004 22.695.001l.001.75L24.9.75h2.55V0h5.1v.75h2.55l2.204.001v-.75c1.617.003 3.077.011 4.404.039l-.016.75c1.65.034 3.08.099 4.343.218l.07-.746c1.678.158 3.083.412 4.316.82l-.236.713c.679.224 1.296.497 1.875.827a14.24 14.24 0 0 1 1.585 1.05l.455-.596A14.999 14.999 0 0 1 56.924 5.9l-.596.455c.384.502.735 1.032 1.05 1.585.33.579.602 1.196.827 1.875l.712-.236c.409 1.233.663 2.638.822 4.316l-.747.07c.119 1.264.184 2.694.218 4.343l.75-.016c.028 1.327.036 2.787.039 4.403l-.75.001.001 2.204v2.55H60v5.1h-.75v2.55l-.001 2.204h.75a231.431 231.431 0 0 1-.039 4.404l-.75-.016c-.034 1.65-.099 3.08-.218 4.343l.747.07c-.159 1.678-.413 3.083-.822 4.316l-.712-.236a10.255 10.255 0 0 1-.827 1.875 14.242 14.242 0 0 1-1.05 1.585l.596.455a14.997 14.997 0 0 1-2.824 2.824l-.455-.596c-.502.384-1.032.735-1.585 1.05-.579.33-1.196.602-1.875.827l.236.712c-1.233.409-2.638.663-4.316.822l-.07-.747c-1.264.119-2.694.184-4.343.218l.016.75c-1.327.028-2.787.036-4.403.039l-.001-.75-2.204.001h-2.55V60h-5.1v-.75H24.9l-2.204-.001v.75a231.431 231.431 0 0 1-4.404-.039l.016-.75c-1.65-.034-3.08-.099-4.343-.218l-.07.747c-1.678-.159-3.083-.413-4.316-.822l.236-.712a10.258 10.258 0 0 1-1.875-.827 14.252 14.252 0 0 1-1.585-1.05l-.455.596A14.999 14.999 0 0 1 3.076 54.1l.596-.455a14.24 14.24 0 0 1-1.05-1.585 10.259 10.259 0 0 1-.827-1.875l-.712.236C.674 49.188.42 47.783.262 46.105l.746-.07C.89 44.77.824 43.34.79 41.692l-.75.016Z"/><path fill="#fff" fill-rule="evenodd" d="M35.643 32.145c-.297-.743-.445-1.114-.401-1.275a.42.42 0 0 1 .182-.27c.134-.1.463-.1 1.123-.1.742 0 1.499.046 2.236-.05a6 6 0 0 0 5.166-5.166c.051-.39.051-.855.051-1.784 0-.928 0-1.393-.051-1.783a6 6 0 0 0-5.166-5.165c-.39-.052-.854-.052-1.783-.052h-7.72c-4.934 0-7.401 0-9.244 1.051a8 8 0 0 0-2.985 2.986C16.057 22.28 16.003 24.58 16 29 15.998 31.075 16 33.15 16 35.224A7.778 7.778 0 0 0 23.778 43H28.5c1.394 0 2.09 0 2.67-.116a6 6 0 0 0 4.715-4.714c.115-.58.115-1.301.115-2.744 0-1.31 0-1.964-.114-2.49a4.998 4.998 0 0 0-.243-.792Z" clip-rule="evenodd"/><path fill="#9EA9A9" fill-rule="evenodd" d="M37 18h-7.72c-2.494 0-4.266.002-5.647.126-1.361.122-2.197.354-2.854.728a6.5 6.5 0 0 0-2.425 2.426c-.375.657-.607 1.492-.729 2.853-.11 1.233-.123 2.777-.125 4.867 0 .7 0 1.05.097 1.181.096.13.182.181.343.2.163.02.518-.18 1.229-.581a6.195 6.195 0 0 1 3.053-.8H37c.977 0 1.32-.003 1.587-.038a4.5 4.5 0 0 0 3.874-3.874c.036-.268.039-.611.039-1.588 0-.976-.003-1.319-.038-1.587a4.5 4.5 0 0 0-3.875-3.874C38.32 18.004 37.977 18 37 18Zm-7.364 12.5h-7.414a4.722 4.722 0 0 0-4.722 4.723 6.278 6.278 0 0 0 6.278 6.278H28.5c1.466 0 1.98-.008 2.378-.087a4.5 4.5 0 0 0 3.535-3.536c.08-.397.087-.933.087-2.451 0-1.391-.009-1.843-.08-2.17a3.5 3.5 0 0 0-2.676-2.676c-.328-.072-.762-.08-2.108-.08Z" clip-rule="evenodd"/></g><defs><clipPath id="q"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
                    GLOBE_ICON: B `<svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#fff" fill-rule="evenodd" d="M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-2.113.75c.301 0 .535.264.47.558a6.01 6.01 0 0 1-2.867 3.896c-.203.116-.42-.103-.334-.32.409-1.018.691-2.274.797-3.657a.512.512 0 0 1 .507-.477h1.427Zm.47-2.058c.065.294-.169.558-.47.558H11.96a.512.512 0 0 1-.507-.477c-.106-1.383-.389-2.638-.797-3.656-.087-.217.13-.437.333-.32a6.01 6.01 0 0 1 2.868 3.895Zm-4.402.558c.286 0 .515-.24.49-.525-.121-1.361-.429-2.534-.83-3.393-.279-.6-.549-.93-.753-1.112a.535.535 0 0 0-.724 0c-.204.182-.474.513-.754 1.112-.4.859-.708 2.032-.828 3.393a.486.486 0 0 0 .49.525h2.909Zm-5.415 0c.267 0 .486-.21.507-.477.106-1.383.389-2.638.797-3.656.087-.217-.13-.437-.333-.32a6.01 6.01 0 0 0-2.868 3.895c-.065.294.169.558.47.558H4.04ZM2.143 9.308c-.065-.294.169-.558.47-.558H4.04c.267 0 .486.21.507.477.106 1.383.389 2.639.797 3.657.087.217-.13.436-.333.32a6.01 6.01 0 0 1-2.868-3.896Zm3.913-.033a.486.486 0 0 1 .49-.525h2.909c.286 0 .515.24.49.525-.121 1.361-.428 2.535-.83 3.394-.279.6-.549.93-.753 1.112a.535.535 0 0 1-.724 0c-.204-.182-.474-.513-.754-1.112-.4-.859-.708-2.033-.828-3.394Z" clip-rule="evenodd"/></svg>`
                },
                tV = d `.wcm-toolbar-placeholder{top:0;bottom:0;left:0;right:0;width:100%;position:absolute;display:block;pointer-events:none;height:100px;border-radius:calc(var(--wcm-background-border-radius) * .9);background-color:var(--wcm-background-color);background-position:center;background-size:cover}.wcm-toolbar{height:38px;display:flex;position:relative;margin:5px 15px 5px 5px;justify-content:space-between;align-items:center}.wcm-toolbar img,.wcm-toolbar svg{height:28px;object-position:left center;object-fit:contain}#wcm-wc-logo path{fill:var(--wcm-accent-fill-color)}button{width:28px;height:28px;border-radius:var(--wcm-icon-button-border-radius);border:0;display:flex;justify-content:center;align-items:center;cursor:pointer;background-color:var(--wcm-color-bg-1);box-shadow:0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-bg-2)}button svg{display:block;object-position:center}button path{fill:var(--wcm-color-fg-1)}.wcm-toolbar div{display:flex}@media(hover:hover){button:hover{background-color:var(--wcm-color-bg-2)}}`;
            var tq = Object.defineProperty,
                tF = Object.getOwnPropertyDescriptor;
            let tK = class extends ec {
                render() {
                    return Z `<div class="wcm-toolbar-placeholder"></div><div class="wcm-toolbar">${tB.WALLET_CONNECT_LOGO} <button @click="${eC.jb.close}">${tB.CROSS_ICON}</button></div>`
                }
            };
            tK.styles = [tI.globalCss, tV], tK = ((e, t, r, i) => {
                for (var o, l = i > 1 ? void 0 : i ? tF(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                return i && l && tq(t, r, l), l
            })([eh("wcm-modal-backcard")], tK);
            let tQ = d `main{padding:20px;padding-top:0;width:100%}`;
            var tY = Object.defineProperty,
                tG = Object.getOwnPropertyDescriptor;
            let tX = class extends ec {
                render() {
                    return Z `<main><slot></slot></main>`
                }
            };
            tX.styles = [tI.globalCss, tQ], tX = ((e, t, r, i) => {
                for (var o, l = i > 1 ? void 0 : i ? tG(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                return i && l && tY(t, r, l), l
            })([eh("wcm-modal-content")], tX);
            let tJ = d `footer{padding:10px;display:flex;flex-direction:column;align-items:inherit;justify-content:inherit;border-top:1px solid var(--wcm-color-bg-2)}`;
            var t0 = Object.defineProperty,
                t1 = Object.getOwnPropertyDescriptor;
            let t2 = class extends ec {
                render() {
                    return Z `<footer><slot></slot></footer>`
                }
            };
            t2.styles = [tI.globalCss, tJ], t2 = ((e, t, r, i) => {
                for (var o, l = i > 1 ? void 0 : i ? t1(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                return i && l && t0(t, r, l), l
            })([eh("wcm-modal-footer")], t2);
            let t5 = d `header{display:flex;justify-content:center;align-items:center;padding:20px;position:relative}.wcm-border{border-bottom:1px solid var(--wcm-color-bg-2);margin-bottom:20px}header button{padding:15px 20px}header button:active{opacity:.5}@media(hover:hover){header button:hover{opacity:.5}}.wcm-back-btn{position:absolute;left:0}.wcm-action-btn{position:absolute;right:0}path{fill:var(--wcm-accent-color)}`;
            var t4 = Object.defineProperty,
                t3 = Object.getOwnPropertyDescriptor,
                t7 = (e, t, r, i) => {
                    for (var o, l = i > 1 ? void 0 : i ? t3(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                    return i && l && t4(t, r, l), l
                };
            let t6 = class extends ec {
                constructor() {
                    super(...arguments), this.title = "", this.onAction = void 0, this.actionIcon = void 0, this.border = !1
                }
                backBtnTemplate() {
                    return Z `<button class="wcm-back-btn" @click="${eC.AV.goBack}">${tB.BACK_ICON}</button>`
                }
                actionBtnTemplate() {
                    return Z `<button class="wcm-action-btn" @click="${this.onAction}">${this.actionIcon}</button>`
                }
                render() {
                    let e = {
                            "wcm-border": this.border
                        },
                        t = eC.AV.state.history.length > 1,
                        r = this.title ? Z `<wcm-text variant="big-bold">${this.title}</wcm-text>` : Z `<slot></slot>`;
                    return Z `<header class="${ev(e)}">${t?this.backBtnTemplate():null} ${r} ${this.onAction?this.actionBtnTemplate():null}</header>`
                }
            };
            t6.styles = [tI.globalCss, t5], t7([eu()], t6.prototype, "title", 2), t7([eu()], t6.prototype, "onAction", 2), t7([eu()], t6.prototype, "actionIcon", 2), t7([eu({
                type: Boolean
            })], t6.prototype, "border", 2), t6 = t7([eh("wcm-modal-header")], t6);
            let t8 = {
                    MOBILE_BREAKPOINT: 600,
                    WCM_RECENT_WALLET_DATA: "WCM_RECENT_WALLET_DATA",
                    EXPLORER_WALLET_URL: "https://explorer.walletconnect.com/?type=wallet",
                    getShadowRootElement(e, t) {
                        let r = e.renderRoot.querySelector(t);
                        if (!r) throw Error(`${t} not found`);
                        return r
                    },
                    getWalletIcon({
                        id: e,
                        image_id: t
                    }) {
                        let {
                            walletImages: r
                        } = eC.ConfigCtrl.state;
                        return null != r && r[e] ? r[e] : t ? eC.ExplorerCtrl.getWalletImageUrl(t) : ""
                    },
                    getWalletName: (e, t = !1) => t && e.length > 8 ? `${e.substring(0,8)}..` : e,
                    isMobileAnimation: () => window.innerWidth <= t8.MOBILE_BREAKPOINT,
                    preloadImage: async e => Promise.race([new Promise((t, r) => {
                        let i = new Image;
                        i.onload = t, i.onerror = r, i.crossOrigin = "anonymous", i.src = e
                    }), eC.zv.wait(3e3)]),
                    getErrorMessage: e => e instanceof Error ? e.message : "Unknown Error",
                    debounce(e, t = 500) {
                        let r;
                        return (...i) => {
                            r && clearTimeout(r), r = setTimeout(function() {
                                e(...i)
                            }, t)
                        }
                    },
                    handleMobileLinking(e) {
                        let t;
                        let {
                            walletConnectUri: r
                        } = eC.OptionsCtrl.state, {
                            mobile: i,
                            name: o
                        } = e, l = i ? .native, a = i ? .universal;
                        t8.setRecentWallet(e), r && (t = "", l ? t = eC.zv.formatUniversalUrl(l, r, o) : a && (t = eC.zv.formatNativeUrl(a, r, o)), eC.zv.openHref(t, "_self"))
                    },
                    handleAndroidLinking() {
                        let {
                            walletConnectUri: e
                        } = eC.OptionsCtrl.state;
                        e && (eC.zv.setWalletConnectAndroidDeepLink(e), eC.zv.openHref(e, "_self"))
                    },
                    async handleUriCopy() {
                        let {
                            walletConnectUri: e
                        } = eC.OptionsCtrl.state;
                        if (e) try {
                            await navigator.clipboard.writeText(e), eC.ToastCtrl.openToast("Link copied", "success")
                        } catch {
                            eC.ToastCtrl.openToast("Failed to copy", "error")
                        }
                    },
                    getCustomImageUrls() {
                        let {
                            walletImages: e
                        } = eC.ConfigCtrl.state;
                        return Object.values(Object.values(e ? ? {}))
                    },
                    truncate: (e, t = 8) => e.length <= t ? e : `${e.substring(0,4)}...${e.substring(e.length-4)}`,
                    setRecentWallet(e) {
                        try {
                            localStorage.setItem(t8.WCM_RECENT_WALLET_DATA, JSON.stringify(e))
                        } catch {
                            console.info("Unable to set recent wallet")
                        }
                    },
                    getRecentWallet() {
                        try {
                            let e = localStorage.getItem(t8.WCM_RECENT_WALLET_DATA);
                            return e ? JSON.parse(e) : void 0
                        } catch {
                            console.info("Unable to get recent wallet")
                        }
                    },
                    caseSafeIncludes: (e, t) => e.toUpperCase().includes(t.toUpperCase()),
                    openWalletExplorerUrl() {
                        eC.zv.openHref(t8.EXPLORER_WALLET_URL, "_blank")
                    },
                    getCachedRouterWalletPlatforms() {
                        let {
                            desktop: e,
                            mobile: t
                        } = eC.zv.getWalletRouterData(), r = !!e ? .native, i = !!e ? .universal;
                        return {
                            isDesktop: r,
                            isMobile: !!t ? .native || !!t ? .universal,
                            isWeb: i
                        }
                    },
                    goToConnectingView(e) {
                        eC.AV.setData({
                            Wallet: e
                        });
                        let t = eC.zv.isMobile(),
                            {
                                isDesktop: r,
                                isWeb: i,
                                isMobile: o
                            } = t8.getCachedRouterWalletPlatforms();
                        t ? o ? eC.AV.push("MobileConnecting") : i ? eC.AV.push("WebConnecting") : eC.AV.push("InstallWallet") : r ? eC.AV.push("DesktopConnecting") : i ? eC.AV.push("WebConnecting") : o ? eC.AV.push("MobileQrcodeConnecting") : eC.AV.push("InstallWallet")
                    }
                },
                t9 = d `.wcm-router{overflow:hidden;will-change:transform}.wcm-content{display:flex;flex-direction:column}`;
            var re = Object.defineProperty,
                rt = Object.getOwnPropertyDescriptor,
                rr = (e, t, r, i) => {
                    for (var o, l = i > 1 ? void 0 : i ? rt(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                    return i && l && re(t, r, l), l
                };
            let ri = class extends ec {
                constructor() {
                    super(), this.view = eC.AV.state.view, this.prevView = eC.AV.state.view, this.unsubscribe = void 0, this.oldHeight = "0px", this.resizeObserver = void 0, this.unsubscribe = eC.AV.subscribe(e => {
                        this.view !== e.view && this.onChangeRoute()
                    })
                }
                firstUpdated() {
                    this.resizeObserver = new ResizeObserver(([e]) => {
                        let t = `${e.contentRect.height}px`;
                        "0px" !== this.oldHeight && tb(this.routerEl, {
                            height: [this.oldHeight, t]
                        }, {
                            duration: .2
                        }), this.oldHeight = t
                    }), this.resizeObserver.observe(this.contentEl)
                }
                disconnectedCallback() {
                    var e, t;
                    null == (e = this.unsubscribe) || e.call(this), null == (t = this.resizeObserver) || t.disconnect()
                }
                get routerEl() {
                    return t8.getShadowRootElement(this, ".wcm-router")
                }
                get contentEl() {
                    return t8.getShadowRootElement(this, ".wcm-content")
                }
                viewTemplate() {
                    switch (this.view) {
                        case "ConnectWallet":
                            return Z `<wcm-connect-wallet-view></wcm-connect-wallet-view>`;
                        case "DesktopConnecting":
                            return Z `<wcm-desktop-connecting-view></wcm-desktop-connecting-view>`;
                        case "MobileConnecting":
                            return Z `<wcm-mobile-connecting-view></wcm-mobile-connecting-view>`;
                        case "WebConnecting":
                            return Z `<wcm-web-connecting-view></wcm-web-connecting-view>`;
                        case "MobileQrcodeConnecting":
                            return Z `<wcm-mobile-qr-connecting-view></wcm-mobile-qr-connecting-view>`;
                        case "WalletExplorer":
                            return Z `<wcm-wallet-explorer-view></wcm-wallet-explorer-view>`;
                        case "Qrcode":
                            return Z `<wcm-qrcode-view></wcm-qrcode-view>`;
                        case "InstallWallet":
                            return Z `<wcm-install-wallet-view></wcm-install-wallet-view>`;
                        default:
                            return Z `<div>Not Found</div>`
                    }
                }
                async onChangeRoute() {
                    await tb(this.routerEl, {
                        opacity: [1, 0],
                        scale: [1, 1.02]
                    }, {
                        duration: .15,
                        delay: .1
                    }).finished, this.view = eC.AV.state.view, tb(this.routerEl, {
                        opacity: [0, 1],
                        scale: [.99, 1]
                    }, {
                        duration: .37,
                        delay: .05
                    })
                }
                render() {
                    return Z `<div class="wcm-router"><div class="wcm-content">${this.viewTemplate()}</div></div>`
                }
            };
            ri.styles = [tI.globalCss, t9], rr([ew()], ri.prototype, "view", 2), rr([ew()], ri.prototype, "prevView", 2), ri = rr([eh("wcm-modal-router")], ri);
            let ro = d `div{height:36px;width:max-content;display:flex;justify-content:center;align-items:center;padding:9px 15px 11px;position:absolute;top:12px;box-shadow:0 6px 14px -6px rgba(10,16,31,.3),0 10px 32px -4px rgba(10,16,31,.15);z-index:2;left:50%;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);border-radius:var(--wcm-notification-border-radius);border:1px solid var(--wcm-color-overlay);background-color:var(--wcm-color-overlay)}svg{margin-right:5px}@-moz-document url-prefix(){div{background-color:var(--wcm-color-bg-3)}}.wcm-success path{fill:var(--wcm-accent-color)}.wcm-error path{fill:var(--wcm-error-color)}`;
            var rl = Object.defineProperty,
                ra = Object.getOwnPropertyDescriptor,
                rn = (e, t, r, i) => {
                    for (var o, l = i > 1 ? void 0 : i ? ra(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                    return i && l && rl(t, r, l), l
                };
            let rs = class extends ec {
                constructor() {
                    super(), this.open = !1, this.unsubscribe = void 0, this.timeout = void 0, this.unsubscribe = eC.ToastCtrl.subscribe(e => {
                        e.open ? (this.open = !0, this.timeout = setTimeout(() => eC.ToastCtrl.closeToast(), 2200)) : (this.open = !1, clearTimeout(this.timeout))
                    })
                }
                disconnectedCallback() {
                    var e;
                    null == (e = this.unsubscribe) || e.call(this), clearTimeout(this.timeout), eC.ToastCtrl.closeToast()
                }
                render() {
                    let {
                        message: e,
                        variant: t
                    } = eC.ToastCtrl.state;
                    return this.open ? Z `<div class="${ev({"wcm-success":"success"===t,"wcm-error":"error"===t})}">${"success"===t?tB.CHECKMARK_ICON:null} ${"error"===t?tB.CROSS_ICON:null}<wcm-text variant="small-regular">${e}</wcm-text></div>` : null
                }
            };

            function rc(e, t, r) {
                return e !== t && (e - t < 0 ? t - e : e - t) <= r + .1
            }
            rs.styles = [tI.globalCss, ro], rn([ew()], rs.prototype, "open", 2), rs = rn([eh("wcm-modal-toast")], rs);
            let rd = {
                    generate(e, t, r) {
                        let i = "#141414",
                            o = [],
                            l = function(e, t) {
                                let r = Array.prototype.slice.call(tx.create(e, {
                                        errorCorrectionLevel: "Q"
                                    }).modules.data, 0),
                                    i = Math.sqrt(r.length);
                                return r.reduce((e, t, r) => (r % i == 0 ? e.push([t]) : e[e.length - 1].push(t)) && e, [])
                            }(e, 0),
                            a = t / l.length,
                            n = [{
                                x: 0,
                                y: 0
                            }, {
                                x: 1,
                                y: 0
                            }, {
                                x: 0,
                                y: 1
                            }];
                        n.forEach(({
                            x: e,
                            y: t
                        }) => {
                            let r = (l.length - 7) * a * e,
                                s = (l.length - 7) * a * t;
                            for (let e = 0; e < n.length; e += 1) {
                                let t = a * (7 - 2 * e);
                                o.push(B `<rect fill="${e%2==0?i:"#ffffff"}" height="${t}" rx="${.45*t}" ry="${.45*t}" width="${t}" x="${r+a*e}" y="${s+a*e}">`)
                            }
                        });
                        let s = Math.floor((r + 25) / a),
                            c = l.length / 2 - s / 2,
                            d = l.length / 2 + s / 2 - 1,
                            h = [];
                        l.forEach((e, t) => {
                            e.forEach((e, r) => {
                                !l[t][r] || t < 7 && r < 7 || t > l.length - 8 && r < 7 || t < 7 && r > l.length - 8 || t > c && t < d && r > c && r < d || h.push([t * a + a / 2, r * a + a / 2])
                            })
                        });
                        let m = {};
                        return h.forEach(([e, t]) => {
                            m[e] ? m[e].push(t) : m[e] = [t]
                        }), Object.entries(m).map(([e, t]) => {
                            let r = t.filter(e => t.every(t => !rc(e, t, a)));
                            return [Number(e), r]
                        }).forEach(([e, t]) => {
                            t.forEach(t => {
                                o.push(B `<circle cx="${e}" cy="${t}" fill="${i}" r="${a/2.5}">`)
                            })
                        }), Object.entries(m).filter(([e, t]) => t.length > 1).map(([e, t]) => {
                            let r = t.filter(e => t.some(t => rc(e, t, a)));
                            return [Number(e), r]
                        }).map(([e, t]) => {
                            t.sort((e, t) => e < t ? -1 : 1);
                            let r = [];
                            for (let e of t) {
                                let t = r.find(t => t.some(t => rc(e, t, a)));
                                t ? t.push(e) : r.push([e])
                            }
                            return [e, r.map(e => [e[0], e[e.length - 1]])]
                        }).forEach(([e, t]) => {
                            t.forEach(([t, r]) => {
                                o.push(B `<line x1="${e}" x2="${e}" y1="${t}" y2="${r}" stroke="${i}" stroke-width="${a/1.25}" stroke-linecap="round">`)
                            })
                        }), o
                    }
                },
                rh = d `@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}div{position:relative;user-select:none;display:block;overflow:hidden;aspect-ratio:1/1;animation:fadeIn ease .2s}.wcm-dark{background-color:#fff;border-radius:var(--wcm-container-border-radius);padding:18px;box-shadow:0 2px 5px #000}svg:first-child,wcm-wallet-image{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{width:25%;height:25%;border-radius:var(--wcm-wallet-icon-border-radius)}svg:first-child{transform:translateY(-50%) translateX(-50%) scale(.9)}svg:first-child path:first-child{fill:var(--wcm-accent-color)}svg:first-child path:last-child{stroke:var(--wcm-color-overlay)}`;
            var rm = Object.defineProperty,
                rp = Object.getOwnPropertyDescriptor,
                ru = (e, t, r, i) => {
                    for (var o, l = i > 1 ? void 0 : i ? rp(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                    return i && l && rm(t, r, l), l
                };
            let rw = class extends ec {
                constructor() {
                    super(...arguments), this.uri = "", this.size = 0, this.imageId = void 0, this.walletId = void 0, this.imageUrl = void 0
                }
                svgTemplate() {
                    let e = "light" === eC.ThemeCtrl.state.themeMode ? this.size : this.size - 36;
                    return B `<svg height="${e}" width="${e}">${rd.generate(this.uri,e,e/4)}</svg>`
                }
                render() {
                    let e = {
                        "wcm-dark": "dark" === eC.ThemeCtrl.state.themeMode
                    };
                    return Z `<div style="${`width: ${this.size}px`}" class="${ev(e)}">${this.walletId||this.imageUrl?Z`<wcm-wallet-image walletId="${ty(this.walletId)}" imageId="${ty(this.imageId)}" imageUrl="${ty(this.imageUrl)}"></wcm-wallet-image>`:tB.WALLET_CONNECT_ICON_COLORED} ${this.svgTemplate()}</div>`
                }
            };
            rw.styles = [tI.globalCss, rh], ru([eu()], rw.prototype, "uri", 2), ru([eu({
                type: Number
            })], rw.prototype, "size", 2), ru([eu()], rw.prototype, "imageId", 2), ru([eu()], rw.prototype, "walletId", 2), ru([eu()], rw.prototype, "imageUrl", 2), rw = ru([eh("wcm-qrcode")], rw);
            let rg = d `:host{position:relative;height:28px;width:80%}input{width:100%;height:100%;line-height:28px!important;border-radius:var(--wcm-input-border-radius);font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'case' on;font-weight:500;font-size:16px;letter-spacing:-.03em;padding:0 10px 0 34px;transition:.2s all ease;color:var(--wcm-color-fg-1);background-color:var(--wcm-color-bg-3);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay);caret-color:var(--wcm-accent-color)}input::placeholder{color:var(--wcm-color-fg-2)}svg{left:10px;top:4px;pointer-events:none;position:absolute;width:20px;height:20px}input:focus-within{box-shadow:inset 0 0 0 1px var(--wcm-accent-color)}path{fill:var(--wcm-color-fg-2)}`;
            var rv = Object.defineProperty,
                rf = Object.getOwnPropertyDescriptor,
                rb = (e, t, r, i) => {
                    for (var o, l = i > 1 ? void 0 : i ? rf(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                    return i && l && rv(t, r, l), l
                };
            let ry = class extends ec {
                constructor() {
                    super(...arguments), this.onChange = () => null
                }
                render() {
                    return Z `<input type="text" @input="${this.onChange}" placeholder="Search wallets"> ${tB.SEARCH_ICON}`
                }
            };
            ry.styles = [tI.globalCss, rg], rb([eu()], ry.prototype, "onChange", 2), ry = rb([eh("wcm-search-input")], ry);
            let rx = d `@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}100%{stroke-dasharray:90,150;stroke-dashoffset:-124}}svg{animation:rotate 2s linear infinite;display:flex;justify-content:center;align-items:center}svg circle{stroke-linecap:round;animation:dash 1.5s ease infinite;stroke:var(--wcm-accent-color)}`;
            var r$ = Object.defineProperty,
                rC = Object.getOwnPropertyDescriptor;
            let rA = class extends ec {
                render() {
                    return Z `<svg viewBox="0 0 50 50" width="24" height="24"><circle cx="25" cy="25" r="20" fill="none" stroke-width="4" stroke="#fff"/></svg>`
                }
            };
            rA.styles = [tI.globalCss, rx], rA = ((e, t, r, i) => {
                for (var o, l = i > 1 ? void 0 : i ? rC(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                return i && l && r$(t, r, l), l
            })([eh("wcm-spinner")], rA);
            let r_ = d `span{font-style:normal;font-family:var(--wcm-font-family);font-feature-settings:var(--wcm-font-feature-settings)}.wcm-xsmall-bold{font-family:var(--wcm-text-xsmall-bold-font-family);font-weight:var(--wcm-text-xsmall-bold-weight);font-size:var(--wcm-text-xsmall-bold-size);line-height:var(--wcm-text-xsmall-bold-line-height);letter-spacing:var(--wcm-text-xsmall-bold-letter-spacing);text-transform:var(--wcm-text-xsmall-bold-text-transform)}.wcm-xsmall-regular{font-family:var(--wcm-text-xsmall-regular-font-family);font-weight:var(--wcm-text-xsmall-regular-weight);font-size:var(--wcm-text-xsmall-regular-size);line-height:var(--wcm-text-xsmall-regular-line-height);letter-spacing:var(--wcm-text-xsmall-regular-letter-spacing);text-transform:var(--wcm-text-xsmall-regular-text-transform)}.wcm-small-thin{font-family:var(--wcm-text-small-thin-font-family);font-weight:var(--wcm-text-small-thin-weight);font-size:var(--wcm-text-small-thin-size);line-height:var(--wcm-text-small-thin-line-height);letter-spacing:var(--wcm-text-small-thin-letter-spacing);text-transform:var(--wcm-text-small-thin-text-transform)}.wcm-small-regular{font-family:var(--wcm-text-small-regular-font-family);font-weight:var(--wcm-text-small-regular-weight);font-size:var(--wcm-text-small-regular-size);line-height:var(--wcm-text-small-regular-line-height);letter-spacing:var(--wcm-text-small-regular-letter-spacing);text-transform:var(--wcm-text-small-regular-text-transform)}.wcm-medium-regular{font-family:var(--wcm-text-medium-regular-font-family);font-weight:var(--wcm-text-medium-regular-weight);font-size:var(--wcm-text-medium-regular-size);line-height:var(--wcm-text-medium-regular-line-height);letter-spacing:var(--wcm-text-medium-regular-letter-spacing);text-transform:var(--wcm-text-medium-regular-text-transform)}.wcm-big-bold{font-family:var(--wcm-text-big-bold-font-family);font-weight:var(--wcm-text-big-bold-weight);font-size:var(--wcm-text-big-bold-size);line-height:var(--wcm-text-big-bold-line-height);letter-spacing:var(--wcm-text-big-bold-letter-spacing);text-transform:var(--wcm-text-big-bold-text-transform)}:host(*){color:var(--wcm-color-fg-1)}.wcm-color-primary{color:var(--wcm-color-fg-1)}.wcm-color-secondary{color:var(--wcm-color-fg-2)}.wcm-color-tertiary{color:var(--wcm-color-fg-3)}.wcm-color-inverse{color:var(--wcm-accent-fill-color)}.wcm-color-accnt{color:var(--wcm-accent-color)}.wcm-color-error{color:var(--wcm-error-color)}`;
            var rO = Object.defineProperty,
                rE = Object.getOwnPropertyDescriptor,
                rk = (e, t, r, i) => {
                    for (var o, l = i > 1 ? void 0 : i ? rE(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                    return i && l && rO(t, r, l), l
                };
            let rI = class extends ec {
                constructor() {
                    super(...arguments), this.variant = "medium-regular", this.color = "primary"
                }
                render() {
                    let e = {
                        "wcm-big-bold": "big-bold" === this.variant,
                        "wcm-medium-regular": "medium-regular" === this.variant,
                        "wcm-small-regular": "small-regular" === this.variant,
                        "wcm-small-thin": "small-thin" === this.variant,
                        "wcm-xsmall-regular": "xsmall-regular" === this.variant,
                        "wcm-xsmall-bold": "xsmall-bold" === this.variant,
                        "wcm-color-primary": "primary" === this.color,
                        "wcm-color-secondary": "secondary" === this.color,
                        "wcm-color-tertiary": "tertiary" === this.color,
                        "wcm-color-inverse": "inverse" === this.color,
                        "wcm-color-accnt": "accent" === this.color,
                        "wcm-color-error": "error" === this.color
                    };
                    return Z `<span><slot class="${ev(e)}"></slot></span>`
                }
            };
            rI.styles = [tI.globalCss, r_], rk([eu()], rI.prototype, "variant", 2), rk([eu()], rI.prototype, "color", 2), rI = rk([eh("wcm-text")], rI);
            let rT = d `button{width:100%;height:100%;border-radius:var(--wcm-button-hover-highlight-border-radius);display:flex;align-items:flex-start}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}button>div{width:80px;padding:5px 0;display:flex;flex-direction:column;align-items:center}wcm-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}wcm-wallet-image{height:60px;width:60px;transition:all .2s ease;border-radius:var(--wcm-wallet-icon-border-radius);margin-bottom:5px}.wcm-sublabel{margin-top:2px}`;
            var rP = Object.defineProperty,
                rM = Object.getOwnPropertyDescriptor,
                rS = (e, t, r, i) => {
                    for (var o, l = i > 1 ? void 0 : i ? rM(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                    return i && l && rP(t, r, l), l
                };
            let rR = class extends ec {
                constructor() {
                    super(...arguments), this.onClick = () => null, this.name = "", this.walletId = "", this.label = void 0, this.imageId = void 0, this.installed = !1, this.recent = !1
                }
                sublabelTemplate() {
                    return this.recent ? Z `<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">RECENT</wcm-text>` : this.installed ? Z `<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">INSTALLED</wcm-text>` : null
                }
                handleClick() {
                    eC.uA.click({
                        name: "WALLET_BUTTON",
                        walletId: this.walletId
                    }), this.onClick()
                }
                render() {
                    var e;
                    return Z `<button @click="${this.handleClick.bind(this)}"><div><wcm-wallet-image walletId="${this.walletId}" imageId="${ty(this.imageId)}"></wcm-wallet-image><wcm-text variant="xsmall-regular">${null!=(e=this.label)?e:t8.getWalletName(this.name,!0)}</wcm-text>${this.sublabelTemplate()}</div></button>`
                }
            };
            rR.styles = [tI.globalCss, rT], rS([eu()], rR.prototype, "onClick", 2), rS([eu()], rR.prototype, "name", 2), rS([eu()], rR.prototype, "walletId", 2), rS([eu()], rR.prototype, "label", 2), rS([eu()], rR.prototype, "imageId", 2), rS([eu({
                type: Boolean
            })], rR.prototype, "installed", 2), rS([eu({
                type: Boolean
            })], rR.prototype, "recent", 2), rR = rS([eh("wcm-wallet-button")], rR);
            let rL = d `:host{display:block}div{overflow:hidden;position:relative;border-radius:inherit;width:100%;height:100%;background-color:var(--wcm-color-overlay)}svg{position:relative;width:100%;height:100%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:inherit;border:1px solid var(--wcm-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
            var rW = Object.defineProperty,
                rj = Object.getOwnPropertyDescriptor,
                rD = (e, t, r, i) => {
                    for (var o, l = i > 1 ? void 0 : i ? rj(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                    return i && l && rW(t, r, l), l
                };
            let rN = class extends ec {
                constructor() {
                    super(...arguments), this.walletId = "", this.imageId = void 0, this.imageUrl = void 0
                }
                render() {
                    var e;
                    let t = null != (e = this.imageUrl) && e.length ? this.imageUrl : t8.getWalletIcon({
                        id: this.walletId,
                        image_id: this.imageId
                    });
                    return Z `${t.length?Z`<div><img crossorigin="anonymous" src="${t}" alt="${this.id}"></div>`:tB.WALLET_PLACEHOLDER}`
                }
            };
            rN.styles = [tI.globalCss, rL], rD([eu()], rN.prototype, "walletId", 2), rD([eu()], rN.prototype, "imageId", 2), rD([eu()], rN.prototype, "imageUrl", 2), rN = rD([eh("wcm-wallet-image")], rN);
            var rU = Object.defineProperty,
                rz = Object.getOwnPropertyDescriptor,
                rH = (e, t, r, i) => {
                    for (var o, l = i > 1 ? void 0 : i ? rz(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                    return i && l && rU(t, r, l), l
                };
            let rZ = class extends ec {
                constructor() {
                    super(), this.preload = !0, this.preloadData()
                }
                async loadImages(e) {
                    try {
                        null != e && e.length && await Promise.all(e.map(async e => t8.preloadImage(e)))
                    } catch {
                        console.info("Unsuccessful attempt at preloading some images", e)
                    }
                }
                async preloadListings() {
                    if (eC.ConfigCtrl.state.enableExplorer) {
                        await eC.ExplorerCtrl.getRecomendedWallets(), eC.OptionsCtrl.setIsDataLoaded(!0);
                        let {
                            recomendedWallets: e
                        } = eC.ExplorerCtrl.state, t = e.map(e => t8.getWalletIcon(e));
                        await this.loadImages(t)
                    } else eC.OptionsCtrl.setIsDataLoaded(!0)
                }
                async preloadCustomImages() {
                    let e = t8.getCustomImageUrls();
                    await this.loadImages(e)
                }
                async preloadData() {
                    try {
                        this.preload && (this.preload = !1, await Promise.all([this.preloadListings(), this.preloadCustomImages()]))
                    } catch (e) {
                        console.error(e), eC.ToastCtrl.openToast("Failed preloading", "error")
                    }
                }
            };
            rH([ew()], rZ.prototype, "preload", 2), rZ = rH([eh("wcm-explorer-context")], rZ);
            var rB = Object.defineProperty,
                rV = Object.getOwnPropertyDescriptor;
            let rq = class extends ec {
                constructor() {
                    super(), this.unsubscribeTheme = void 0, tI.setTheme(), this.unsubscribeTheme = eC.ThemeCtrl.subscribe(tI.setTheme)
                }
                disconnectedCallback() {
                    var e;
                    null == (e = this.unsubscribeTheme) || e.call(this)
                }
            };
            rq = ((e, t, r, i) => {
                for (var o, l = i > 1 ? void 0 : i ? rV(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                return i && l && rB(t, r, l), l
            })([eh("wcm-theme-context")], rq);
            let rF = d `@keyframes scroll{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(calc(-70px * 9),0,0)}}.wcm-slider{position:relative;overflow-x:hidden;padding:10px 0;margin:0 -20px;width:calc(100% + 40px)}.wcm-track{display:flex;width:calc(70px * 18);animation:scroll 20s linear infinite;opacity:.7}.wcm-track svg{margin:0 5px}wcm-wallet-image{width:60px;height:60px;margin:0 5px;border-radius:var(--wcm-wallet-icon-border-radius)}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-title{display:flex;align-items:center;margin-bottom:10px}.wcm-title svg{margin-right:6px}.wcm-title path{fill:var(--wcm-accent-color)}wcm-modal-footer .wcm-title{padding:0 10px}wcm-button-big{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);filter:drop-shadow(0 0 17px var(--wcm-color-bg-1))}wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-info-footer wcm-text{text-align:center;margin-bottom:15px}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
            var rK = Object.defineProperty,
                rQ = Object.getOwnPropertyDescriptor;
            let rY = class extends ec {
                onGoToQrcode() {
                    eC.AV.push("Qrcode")
                }
                render() {
                    let {
                        recomendedWallets: e
                    } = eC.ExplorerCtrl.state, t = [...e, ...e], r = 2 * eC.zv.RECOMMENDED_WALLET_AMOUNT;
                    return Z `<wcm-modal-header title="Connect your wallet" .onAction="${this.onGoToQrcode}" .actionIcon="${tB.QRCODE_ICON}"></wcm-modal-header><wcm-modal-content><div class="wcm-title">${tB.MOBILE_ICON}<wcm-text variant="small-regular" color="accent">WalletConnect</wcm-text></div><div class="wcm-slider"><div class="wcm-track">${[...Array(r)].map((e,r)=>{let i=t[r%t.length];return i?Z`<wcm-wallet-image walletId="${i.id}" imageId="${i.image_id}"></wcm-wallet-image>`:tB.WALLET_PLACEHOLDER})}</div><wcm-button-big @click="${t8.handleAndroidLinking}"><wcm-text variant="medium-regular" color="inverse">Select Wallet</wcm-text></wcm-button-big></div></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">Choose WalletConnect to see supported apps on your device</wcm-text></wcm-info-footer>`
                }
            };
            rY.styles = [tI.globalCss, rF], rY = ((e, t, r, i) => {
                for (var o, l = i > 1 ? void 0 : i ? rQ(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                return i && l && rK(t, r, l), l
            })([eh("wcm-android-wallet-selection")], rY);
            let rG = d `@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:2px;top:0;left:0}use{stroke:var(--wcm-accent-color);animation:loading 1s linear infinite}wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:90px;height:90px}wcm-text{margin-bottom:40px}.wcm-error svg{stroke:var(--wcm-error-color)}.wcm-error use{display:none}.wcm-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}.wcm-stale svg,.wcm-stale use{display:none}`;
            var rX = Object.defineProperty,
                rJ = Object.getOwnPropertyDescriptor,
                r0 = (e, t, r, i) => {
                    for (var o, l = i > 1 ? void 0 : i ? rJ(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                    return i && l && rX(t, r, l), l
                };
            let r1 = class extends ec {
                constructor() {
                    super(...arguments), this.walletId = void 0, this.imageId = void 0, this.isError = !1, this.isStale = !1, this.label = ""
                }
                svgLoaderTemplate() {
                    var e, t;
                    let r = null != (t = null == (e = eC.ThemeCtrl.state.themeVariables) ? void 0 : e["--wcm-wallet-icon-large-border-radius"]) ? t : tI.getPreset("--wcm-wallet-icon-large-border-radius"),
                        i = 0,
                        o = 317 - 1.57 * (i = (r.includes("%") ? .88 * parseInt(r, 10) : parseInt(r, 10)) * 1.17),
                        l = 425 - 1.8 * i;
                    return Z `<svg viewBox="0 0 110 110" width="110" height="110"><rect id="wcm-loader" x="2" y="2" width="106" height="106" rx="${i}"/><use xlink:href="#wcm-loader" stroke-dasharray="106 ${o}" stroke-dashoffset="${l}"></use></svg>`
                }
                render() {
                    let e = {
                        "wcm-error": this.isError,
                        "wcm-stale": this.isStale
                    };
                    return Z `<div class="${ev(e)}">${this.svgLoaderTemplate()}<wcm-wallet-image walletId="${ty(this.walletId)}" imageId="${ty(this.imageId)}"></wcm-wallet-image></div><wcm-text variant="medium-regular" color="${this.isError?"error":"primary"}">${this.isError?"Connection declined":this.label}</wcm-text>`
                }
            };
            r1.styles = [tI.globalCss, rG], r0([eu()], r1.prototype, "walletId", 2), r0([eu()], r1.prototype, "imageId", 2), r0([eu({
                type: Boolean
            })], r1.prototype, "isError", 2), r0([eu({
                type: Boolean
            })], r1.prototype, "isStale", 2), r0([eu()], r1.prototype, "label", 2), r1 = r0([eh("wcm-connector-waiting")], r1);
            let r2 = {
                    manualWallets() {
                        var e, t;
                        let {
                            mobileWallets: r,
                            desktopWallets: i
                        } = eC.ConfigCtrl.state, o = null == (e = r2.recentWallet()) ? void 0 : e.id, l = eC.zv.isMobile() ? r : i, a = l ? .filter(e => o !== e.id);
                        return null != (t = eC.zv.isMobile() ? a ? .map(({
                            id: e,
                            name: t,
                            links: r
                        }) => ({
                            id: e,
                            name: t,
                            mobile: r,
                            links: r
                        })) : a ? .map(({
                            id: e,
                            name: t,
                            links: r
                        }) => ({
                            id: e,
                            name: t,
                            desktop: r,
                            links: r
                        }))) ? t : []
                    },
                    recentWallet: () => t8.getRecentWallet(),
                    recomendedWallets(e = !1) {
                        var t;
                        let r = e || null == (t = r2.recentWallet()) ? void 0 : t.id,
                            {
                                recomendedWallets: i
                            } = eC.ExplorerCtrl.state;
                        return i.filter(e => r !== e.id)
                    }
                },
                r5 = {
                    onConnecting(e) {
                        t8.goToConnectingView(e)
                    },
                    manualWalletsTemplate() {
                        return r2.manualWallets().map(e => Z `<wcm-wallet-button walletId="${e.id}" name="${e.name}" .onClick="${()=>this.onConnecting(e)}"></wcm-wallet-button>`)
                    },
                    recomendedWalletsTemplate(e = !1) {
                        return r2.recomendedWallets(e).map(e => Z `<wcm-wallet-button name="${e.name}" walletId="${e.id}" imageId="${e.image_id}" .onClick="${()=>this.onConnecting(e)}"></wcm-wallet-button>`)
                    },
                    recentWalletTemplate() {
                        let e = r2.recentWallet();
                        if (e) return Z `<wcm-wallet-button name="${e.name}" walletId="${e.id}" imageId="${ty(e.image_id)}" .recent="${!0}" .onClick="${()=>this.onConnecting(e)}"></wcm-wallet-button>`
                    }
                },
                r4 = d `.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-desktop-title,.wcm-mobile-title{display:flex;align-items:center}.wcm-mobile-title{justify-content:space-between;margin-bottom:20px;margin-top:-10px}.wcm-desktop-title{margin-bottom:10px;padding:0 10px}.wcm-subtitle{display:flex;align-items:center}.wcm-subtitle:last-child path{fill:var(--wcm-color-fg-3)}.wcm-desktop-title svg,.wcm-mobile-title svg{margin-right:6px}.wcm-desktop-title path,.wcm-mobile-title path{fill:var(--wcm-accent-color)}`;
            var r3 = Object.defineProperty,
                r7 = Object.getOwnPropertyDescriptor;
            let r6 = class extends ec {
                render() {
                    let {
                        explorerExcludedWalletIds: e,
                        enableExplorer: t
                    } = eC.ConfigCtrl.state, r = r5.manualWalletsTemplate(), i = r5.recomendedWalletsTemplate(), o = [r5.recentWalletTemplate(), ...r, ...i], l = (o = o.filter(Boolean)).length > 4 || "ALL" !== e && t, a = [], n = !!(a = l ? o.slice(0, 3) : o).length;
                    return Z `<wcm-modal-header .border="${!0}" title="Connect your wallet" .onAction="${t8.handleUriCopy}" .actionIcon="${tB.COPY_ICON}"></wcm-modal-header><wcm-modal-content><div class="wcm-mobile-title"><div class="wcm-subtitle">${tB.MOBILE_ICON}<wcm-text variant="small-regular" color="accent">Mobile</wcm-text></div><div class="wcm-subtitle">${tB.SCAN_ICON}<wcm-text variant="small-regular" color="secondary">Scan with your wallet</wcm-text></div></div><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>${n?Z`<wcm-modal-footer><div class="wcm-desktop-title">${tB.DESKTOP_ICON}<wcm-text variant="small-regular" color="accent">Desktop</wcm-text></div><div class="wcm-grid">${a} ${l?Z`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>`:null}</div></wcm-modal-footer>`:null}`
                }
            };
            r6.styles = [tI.globalCss, r4], r6 = ((e, t, r, i) => {
                for (var o, l = i > 1 ? void 0 : i ? r7(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                return i && l && r3(t, r, l), l
            })([eh("wcm-desktop-wallet-selection")], r6);
            let r8 = d `div{background-color:var(--wcm-color-bg-2);padding:10px 20px 15px 20px;border-top:1px solid var(--wcm-color-bg-3);text-align:center}a{color:var(--wcm-accent-color);text-decoration:none;transition:opacity .2s ease-in-out;display:inline}a:active{opacity:.8}@media(hover:hover){a:hover{opacity:.8}}`;
            var r9 = Object.defineProperty,
                ie = Object.getOwnPropertyDescriptor;
            let it = class extends ec {
                render() {
                    let {
                        termsOfServiceUrl: e,
                        privacyPolicyUrl: t
                    } = eC.ConfigCtrl.state;
                    return e ? ? t ? Z `<div><wcm-text variant="small-regular" color="secondary">By connecting your wallet to this app, you agree to the app's ${e?Z`<a href="${e}" target="_blank" rel="noopener noreferrer">Terms of Service</a>`:null} ${e&&t?"and":null} ${t?Z`<a href="${t}" target="_blank" rel="noopener noreferrer">Privacy Policy</a>`:null}</wcm-text></div>` : null
                }
            };
            it.styles = [tI.globalCss, r8], it = ((e, t, r, i) => {
                for (var o, l = i > 1 ? void 0 : i ? ie(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                return i && l && r9(t, r, l), l
            })([eh("wcm-legal-notice")], it);
            let ir = d `div{display:grid;grid-template-columns:repeat(4,80px);margin:0 -10px;justify-content:space-between;row-gap:10px}`;
            var ii = Object.defineProperty,
                io = Object.getOwnPropertyDescriptor;
            let il = class extends ec {
                onQrcode() {
                    eC.AV.push("Qrcode")
                }
                render() {
                    let {
                        explorerExcludedWalletIds: e,
                        enableExplorer: t
                    } = eC.ConfigCtrl.state, r = r5.manualWalletsTemplate(), i = r5.recomendedWalletsTemplate(), o = [r5.recentWalletTemplate(), ...r, ...i], l = (o = o.filter(Boolean)).length > 8 || "ALL" !== e && t, a = [], n = !!(a = l ? o.slice(0, 7) : o).length;
                    return Z `<wcm-modal-header title="Connect your wallet" .onAction="${this.onQrcode}" .actionIcon="${tB.QRCODE_ICON}"></wcm-modal-header>${n?Z`<wcm-modal-content><div>${a} ${l?Z`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>`:null}</div></wcm-modal-content>`:null}`
                }
            };
            il.styles = [tI.globalCss, ir], il = ((e, t, r, i) => {
                for (var o, l = i > 1 ? void 0 : i ? io(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                return i && l && ii(t, r, l), l
            })([eh("wcm-mobile-wallet-selection")], il);
            let ia = d `:host{all:initial}.wcm-overlay{top:0;bottom:0;left:0;right:0;position:fixed;z-index:var(--wcm-z-index);overflow:hidden;display:flex;justify-content:center;align-items:center;opacity:0;pointer-events:none;background-color:var(--wcm-overlay-background-color);backdrop-filter:var(--wcm-overlay-backdrop-filter)}@media(max-height:720px) and (orientation:landscape){.wcm-overlay{overflow:scroll;align-items:flex-start;padding:20px 0}}.wcm-active{pointer-events:auto}.wcm-container{position:relative;max-width:360px;width:100%;outline:0;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) var(--wcm-container-border-radius) var(--wcm-container-border-radius);border:1px solid var(--wcm-color-overlay);overflow:hidden}.wcm-card{width:100%;position:relative;border-radius:var(--wcm-container-border-radius);overflow:hidden;box-shadow:0 6px 14px -6px rgba(10,16,31,.12),0 10px 32px -4px rgba(10,16,31,.1),0 0 0 1px var(--wcm-color-overlay);background-color:var(--wcm-color-bg-1);color:var(--wcm-color-fg-1)}@media(max-width:600px){.wcm-container{max-width:440px;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) 0 0}.wcm-card{border-radius:var(--wcm-container-border-radius) var(--wcm-container-border-radius) 0 0}.wcm-overlay{align-items:flex-end}}@media(max-width:440px){.wcm-container{border:0}}`;
            var is = Object.defineProperty,
                ic = Object.getOwnPropertyDescriptor,
                id = (e, t, r, i) => {
                    for (var o, l = i > 1 ? void 0 : i ? ic(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                    return i && l && is(t, r, l), l
                };
            let ih = class extends ec {
                constructor() {
                    super(), this.open = !1, this.active = !1, this.unsubscribeModal = void 0, this.abortController = void 0, this.unsubscribeModal = eC.jb.subscribe(e => {
                        e.open ? this.onOpenModalEvent() : this.onCloseModalEvent()
                    })
                }
                disconnectedCallback() {
                    var e;
                    null == (e = this.unsubscribeModal) || e.call(this)
                }
                get overlayEl() {
                    return t8.getShadowRootElement(this, ".wcm-overlay")
                }
                get containerEl() {
                    return t8.getShadowRootElement(this, ".wcm-container")
                }
                toggleBodyScroll(e) {
                    if (document.querySelector("body")) {
                        if (e) {
                            let e = document.getElementById("wcm-styles");
                            e ? .remove()
                        } else document.head.insertAdjacentHTML("beforeend", '<style id="wcm-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>')
                    }
                }
                onCloseModal(e) {
                    e.target === e.currentTarget && eC.jb.close()
                }
                onOpenModalEvent() {
                    this.toggleBodyScroll(!1), this.addKeyboardEvents(), this.open = !0, setTimeout(async () => {
                        let e = t8.isMobileAnimation() ? {
                            y: ["50vh", "0vh"]
                        } : {
                            scale: [.98, 1]
                        };
                        await Promise.all([tb(this.overlayEl, {
                            opacity: [0, 1]
                        }, {
                            delay: .1,
                            duration: .2
                        }).finished, tb(this.containerEl, e, {
                            delay: .1,
                            duration: .2
                        }).finished]), this.active = !0
                    }, 0)
                }
                async onCloseModalEvent() {
                    this.toggleBodyScroll(!0), this.removeKeyboardEvents();
                    let e = t8.isMobileAnimation() ? {
                        y: ["0vh", "50vh"]
                    } : {
                        scale: [1, .98]
                    };
                    await Promise.all([tb(this.overlayEl, {
                        opacity: [1, 0]
                    }, {
                        duration: .2
                    }).finished, tb(this.containerEl, e, {
                        duration: .2
                    }).finished]), this.containerEl.removeAttribute("style"), this.active = !1, this.open = !1
                }
                addKeyboardEvents() {
                    this.abortController = new AbortController, window.addEventListener("keydown", e => {
                        var t;
                        "Escape" === e.key ? eC.jb.close() : "Tab" === e.key && (null != (t = e.target) && t.tagName.includes("wcm-") || this.containerEl.focus())
                    }, this.abortController), this.containerEl.focus()
                }
                removeKeyboardEvents() {
                    var e;
                    null == (e = this.abortController) || e.abort(), this.abortController = void 0
                }
                render() {
                    let e = {
                        "wcm-overlay": !0,
                        "wcm-active": this.active
                    };
                    return Z `<wcm-explorer-context></wcm-explorer-context><wcm-theme-context></wcm-theme-context><div id="wcm-modal" class="${ev(e)}" @click="${this.onCloseModal}" role="alertdialog" aria-modal="true"><div class="wcm-container" tabindex="0">${this.open?Z`<wcm-modal-backcard></wcm-modal-backcard><div class="wcm-card"><wcm-modal-router></wcm-modal-router><wcm-modal-toast></wcm-modal-toast></div>`:null}</div></div>`
                }
            };
            ih.styles = [tI.globalCss, ia], id([ew()], ih.prototype, "open", 2), id([ew()], ih.prototype, "active", 2), ih = id([eh("wcm-modal")], ih);
            let im = d `div{display:flex;margin-top:15px}slot{display:inline-block;margin:0 5px}wcm-button{margin:0 5px}`;
            var ip = Object.defineProperty,
                iu = Object.getOwnPropertyDescriptor,
                iw = (e, t, r, i) => {
                    for (var o, l = i > 1 ? void 0 : i ? iu(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                    return i && l && ip(t, r, l), l
                };
            let ig = class extends ec {
                constructor() {
                    super(...arguments), this.isMobile = !1, this.isDesktop = !1, this.isWeb = !1, this.isRetry = !1
                }
                onMobile() {
                    eC.zv.isMobile() ? eC.AV.replace("MobileConnecting") : eC.AV.replace("MobileQrcodeConnecting")
                }
                onDesktop() {
                    eC.AV.replace("DesktopConnecting")
                }
                onWeb() {
                    eC.AV.replace("WebConnecting")
                }
                render() {
                    return Z `<div>${this.isRetry?Z`<slot></slot>`:null} ${this.isMobile?Z`<wcm-button .onClick="${this.onMobile}" .iconLeft="${tB.MOBILE_ICON}" variant="outline">Mobile</wcm-button>`:null} ${this.isDesktop?Z`<wcm-button .onClick="${this.onDesktop}" .iconLeft="${tB.DESKTOP_ICON}" variant="outline">Desktop</wcm-button>`:null} ${this.isWeb?Z`<wcm-button .onClick="${this.onWeb}" .iconLeft="${tB.GLOBE_ICON}" variant="outline">Web</wcm-button>`:null}</div>`
                }
            };
            ig.styles = [tI.globalCss, im], iw([eu({
                type: Boolean
            })], ig.prototype, "isMobile", 2), iw([eu({
                type: Boolean
            })], ig.prototype, "isDesktop", 2), iw([eu({
                type: Boolean
            })], ig.prototype, "isWeb", 2), iw([eu({
                type: Boolean
            })], ig.prototype, "isRetry", 2), ig = iw([eh("wcm-platform-selection")], ig);
            let iv = d `button{display:flex;flex-direction:column;padding:5px 10px;border-radius:var(--wcm-button-hover-highlight-border-radius);height:100%;justify-content:flex-start}.wcm-icons{width:60px;height:60px;display:flex;flex-wrap:wrap;padding:7px;border-radius:var(--wcm-wallet-icon-border-radius);justify-content:space-between;align-items:center;margin-bottom:5px;background-color:var(--wcm-color-bg-2);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}.wcm-icons img{width:21px;height:21px;object-fit:cover;object-position:center;border-radius:calc(var(--wcm-wallet-icon-border-radius)/ 2);border:1px solid var(--wcm-color-overlay)}.wcm-icons svg{width:21px;height:21px}.wcm-icons img:nth-child(1),.wcm-icons img:nth-child(2),.wcm-icons svg:nth-child(1),.wcm-icons svg:nth-child(2){margin-bottom:4px}wcm-text{width:100%;text-align:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
            var ib = Object.defineProperty,
                iy = Object.getOwnPropertyDescriptor;
            let ix = class extends ec {
                onClick() {
                    eC.AV.push("WalletExplorer")
                }
                render() {
                    let {
                        recomendedWallets: e
                    } = eC.ExplorerCtrl.state, t = [...e, ...r2.manualWallets()].reverse().slice(0, 4);
                    return Z `<button @click="${this.onClick}"><div class="wcm-icons">${t.map(e=>{let t=t8.getWalletIcon(e);if(t)return Z`<img crossorigin="anonymous" src="${t}">`;let r=t8.getWalletIcon({id:e.id});return r?Z` < img crossorigin = "anonymous"
                    src = "${r}" > `:tB.WALLET_PLACEHOLDER})} ${[...Array(4-t.length)].map(()=>tB.WALLET_PLACEHOLDER)}</div><wcm-text variant="xsmall-regular">View All</wcm-text></button>`
                }
            };
            ix.styles = [tI.globalCss, iv], ix = ((e, t, r, i) => {
                for (var o, l = i > 1 ? void 0 : i ? iy(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                return i && l && ib(t, r, l), l
            })([eh("wcm-view-all-wallets-button")], ix);
            let i$ = d `.wcm-qr-container{width:100%;display:flex;justify-content:center;align-items:center;aspect-ratio:1/1}`;
            var iC = Object.defineProperty,
                iA = Object.getOwnPropertyDescriptor,
                i_ = (e, t, r, i) => {
                    for (var o, l = i > 1 ? void 0 : i ? iA(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                    return i && l && iC(t, r, l), l
                };
            let iO = class extends ec {
                constructor() {
                    super(), this.walletId = "", this.imageId = "", this.uri = "", setTimeout(() => {
                        let {
                            walletConnectUri: e
                        } = eC.OptionsCtrl.state;
                        this.uri = e
                    }, 0)
                }
                get overlayEl() {
                    return t8.getShadowRootElement(this, ".wcm-qr-container")
                }
                render() {
                    return Z `<div class="wcm-qr-container">${this.uri?Z`<wcm-qrcode size="${this.overlayEl.offsetWidth}" uri="${this.uri}" walletId="${ty(this.walletId)}" imageId="${ty(this.imageId)}"></wcm-qrcode>`:Z`<wcm-spinner></wcm-spinner>`}</div>`
                }
            };
            iO.styles = [tI.globalCss, i$], i_([eu()], iO.prototype, "walletId", 2), i_([eu()], iO.prototype, "imageId", 2), i_([ew()], iO.prototype, "uri", 2), iO = i_([eh("wcm-walletconnect-qr")], iO);
            var iE = Object.defineProperty,
                ik = Object.getOwnPropertyDescriptor;
            let iI = class extends ec {
                viewTemplate() {
                    return eC.zv.isAndroid() ? Z `<wcm-android-wallet-selection></wcm-android-wallet-selection>` : eC.zv.isMobile() ? Z `<wcm-mobile-wallet-selection></wcm-mobile-wallet-selection>` : Z `<wcm-desktop-wallet-selection></wcm-desktop-wallet-selection>`
                }
                render() {
                    return Z `${this.viewTemplate()}<wcm-legal-notice></wcm-legal-notice>`
                }
            };
            iI.styles = [tI.globalCss], iI = ((e, t, r, i) => {
                for (var o, l = i > 1 ? void 0 : i ? ik(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                return i && l && iE(t, r, l), l
            })([eh("wcm-connect-wallet-view")], iI);
            let iT = d `wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
            var iP = Object.defineProperty,
                iM = Object.getOwnPropertyDescriptor,
                iS = (e, t, r, i) => {
                    for (var o, l = i > 1 ? void 0 : i ? iM(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                    return i && l && iP(t, r, l), l
                };
            let iR = class extends ec {
                constructor() {
                    super(), this.isError = !1, this.openDesktopApp()
                }
                onFormatAndRedirect(e) {
                    let {
                        desktop: t,
                        name: r
                    } = eC.zv.getWalletRouterData(), i = t ? .native;
                    if (i) {
                        let t = eC.zv.formatNativeUrl(i, e, r);
                        eC.zv.openHref(t, "_self")
                    }
                }
                openDesktopApp() {
                    let {
                        walletConnectUri: e
                    } = eC.OptionsCtrl.state, t = eC.zv.getWalletRouterData();
                    t8.setRecentWallet(t), e && this.onFormatAndRedirect(e)
                }
                render() {
                    let {
                        name: e,
                        id: t,
                        image_id: r
                    } = eC.zv.getWalletRouterData(), {
                        isMobile: i,
                        isWeb: o
                    } = t8.getCachedRouterWalletPlatforms();
                    return Z `<wcm-modal-header title="${e}" .onAction="${t8.handleUriCopy}" .actionIcon="${tB.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${t}" imageId="${ty(r)}" label="${`Continue in ${e}...`}" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Connection can continue loading if ${e} is not installed on your device`}</wcm-text><wcm-platform-selection .isMobile="${i}" .isWeb="${o}" .isRetry="${!0}"><wcm-button .onClick="${this.openDesktopApp.bind(this)}" .iconRight="${tB.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`
                }
            };
            iR.styles = [tI.globalCss, iT], iS([ew()], iR.prototype, "isError", 2), iR = iS([eh("wcm-desktop-connecting-view")], iR);
            let iL = d `wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}wcm-button{margin-top:15px}`;
            var iW = Object.defineProperty,
                ij = Object.getOwnPropertyDescriptor;
            let iD = class extends ec {
                onInstall(e) {
                    e && eC.zv.openHref(e, "_blank")
                }
                render() {
                    let {
                        name: e,
                        id: t,
                        image_id: r,
                        homepage: i
                    } = eC.zv.getWalletRouterData();
                    return Z `<wcm-modal-header title="${e}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${t}" imageId="${ty(r)}" label="Not Detected" .isStale="${!0}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Download ${e} to continue. If multiple browser extensions are installed, disable non ${e} ones and try again`}</wcm-text><wcm-button .onClick="${()=>this.onInstall(i)}" .iconLeft="${tB.ARROW_DOWN_ICON}">Download</wcm-button></wcm-info-footer>`
                }
            };
            iD.styles = [tI.globalCss, iL], iD = ((e, t, r, i) => {
                for (var o, l = i > 1 ? void 0 : i ? ij(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                return i && l && iW(t, r, l), l
            })([eh("wcm-install-wallet-view")], iD);
            let iN = d `wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:96px;height:96px;margin-bottom:20px}wcm-info-footer{display:flex;width:100%}.wcm-app-store{justify-content:space-between}.wcm-app-store wcm-wallet-image{margin-right:10px;margin-bottom:0;width:28px;height:28px;border-radius:var(--wcm-wallet-icon-small-border-radius)}.wcm-app-store div{display:flex;align-items:center}.wcm-app-store wcm-button{margin-right:-10px}.wcm-note{flex-direction:column;align-items:center;padding:5px 0}.wcm-note wcm-text{text-align:center}wcm-platform-selection{margin-top:-15px}.wcm-note wcm-text{margin-top:15px}.wcm-note wcm-text span{color:var(--wcm-accent-color)}`;
            var iU = Object.defineProperty,
                iz = Object.getOwnPropertyDescriptor,
                iH = (e, t, r, i) => {
                    for (var o, l = i > 1 ? void 0 : i ? iz(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                    return i && l && iU(t, r, l), l
                };
            let iZ = class extends ec {
                constructor() {
                    super(), this.isError = !1, this.openMobileApp()
                }
                onFormatAndRedirect(e, t = !1) {
                    let {
                        mobile: r,
                        name: i
                    } = eC.zv.getWalletRouterData(), o = r ? .native, l = r ? .universal;
                    if (o && !t) {
                        let t = eC.zv.formatNativeUrl(o, e, i);
                        eC.zv.openHref(t, "_self")
                    } else if (l) {
                        let t = eC.zv.formatUniversalUrl(l, e, i);
                        eC.zv.openHref(t, "_self")
                    }
                }
                openMobileApp(e = !1) {
                    let {
                        walletConnectUri: t
                    } = eC.OptionsCtrl.state, r = eC.zv.getWalletRouterData();
                    t8.setRecentWallet(r), t && this.onFormatAndRedirect(t, e)
                }
                onGoToAppStore(e) {
                    e && eC.zv.openHref(e, "_blank")
                }
                render() {
                    let {
                        name: e,
                        id: t,
                        image_id: r,
                        app: i,
                        mobile: o
                    } = eC.zv.getWalletRouterData(), {
                        isWeb: l
                    } = t8.getCachedRouterWalletPlatforms(), a = i ? .ios, n = o ? .universal;
                    return Z `<wcm-modal-header title="${e}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${t}" imageId="${ty(r)}" label="Tap 'Open' to continue…" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer class="wcm-note"><wcm-platform-selection .isWeb="${l}" .isRetry="${!0}"><wcm-button .onClick="${()=>this.openMobileApp(!1)}" .iconRight="${tB.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection>${n?Z`<wcm-text color="secondary" variant="small-thin">Still doesn't work? <span tabindex="0" @click="${()=>this.openMobileApp(!0)}">Try this alternate link</span></wcm-text>`:null}</wcm-info-footer><wcm-info-footer class="wcm-app-store"><div><wcm-wallet-image walletId="${t}" imageId="${ty(r)}"></wcm-wallet-image><wcm-text>${`Get ${e}`}</wcm-text></div><wcm-button .iconRight="${tB.ARROW_RIGHT_ICON}" .onClick="${()=>this.onGoToAppStore(a)}" variant="ghost">App Store</wcm-button></wcm-info-footer>`
                }
            };
            iZ.styles = [tI.globalCss, iN], iH([ew()], iZ.prototype, "isError", 2), iZ = iH([eh("wcm-mobile-connecting-view")], iZ);
            let iB = d `wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
            var iV = Object.defineProperty,
                iq = Object.getOwnPropertyDescriptor;
            let iF = class extends ec {
                render() {
                    let {
                        name: e,
                        id: t,
                        image_id: r
                    } = eC.zv.getWalletRouterData(), {
                        isDesktop: i,
                        isWeb: o
                    } = t8.getCachedRouterWalletPlatforms();
                    return Z `<wcm-modal-header title="${e}" .onAction="${t8.handleUriCopy}" .actionIcon="${tB.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr walletId="${t}" imageId="${ty(r)}"></wcm-walletconnect-qr></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Scan this QR Code with your phone's camera or inside ${e} app`}</wcm-text><wcm-platform-selection .isDesktop="${i}" .isWeb="${o}"></wcm-platform-selection></wcm-info-footer>`
                }
            };
            iF.styles = [tI.globalCss, iB], iF = ((e, t, r, i) => {
                for (var o, l = i > 1 ? void 0 : i ? iq(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                return i && l && iV(t, r, l), l
            })([eh("wcm-mobile-qr-connecting-view")], iF);
            var iK = Object.defineProperty,
                iQ = Object.getOwnPropertyDescriptor;
            let iY = class extends ec {
                render() {
                    return Z `<wcm-modal-header title="Scan the code" .onAction="${t8.handleUriCopy}" .actionIcon="${tB.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>`
                }
            };
            iY.styles = [tI.globalCss], iY = ((e, t, r, i) => {
                for (var o, l = i > 1 ? void 0 : i ? iQ(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                return i && l && iK(t, r, l), l
            })([eh("wcm-qrcode-view")], iY);
            let iG = d `wcm-modal-content{height:clamp(200px,60vh,600px);display:block;overflow:scroll;scrollbar-width:none;position:relative;margin-top:1px}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between;margin:-15px -10px;padding-top:20px}wcm-modal-content::after,wcm-modal-content::before{content:'';position:fixed;pointer-events:none;z-index:1;width:100%;height:20px;opacity:1}wcm-modal-content::before{box-shadow:0 -1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(var(--wcm-color-bg-1),rgba(255,255,255,0))}wcm-modal-content::after{box-shadow:0 1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(rgba(255,255,255,0),var(--wcm-color-bg-1));top:calc(100% - 20px)}wcm-modal-content::-webkit-scrollbar{display:none}.wcm-placeholder-block{display:flex;justify-content:center;align-items:center;height:100px;overflow:hidden}.wcm-empty,.wcm-loading{display:flex}.wcm-loading .wcm-placeholder-block{height:100%}.wcm-end-reached .wcm-placeholder-block{height:0;opacity:0}.wcm-empty .wcm-placeholder-block{opacity:1;height:100%}wcm-wallet-button{margin:calc((100% - 60px)/ 3) 0}`;
            var iX = Object.defineProperty,
                iJ = Object.getOwnPropertyDescriptor,
                i0 = (e, t, r, i) => {
                    for (var o, l = i > 1 ? void 0 : i ? iJ(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                    return i && l && iX(t, r, l), l
                };
            let i1 = class extends ec {
                constructor() {
                    super(...arguments), this.loading = !eC.ExplorerCtrl.state.wallets.listings.length, this.firstFetch = !eC.ExplorerCtrl.state.wallets.listings.length, this.search = "", this.endReached = !1, this.intersectionObserver = void 0, this.searchDebounce = t8.debounce(e => {
                        e.length >= 1 ? (this.firstFetch = !0, this.endReached = !1, this.search = e, eC.ExplorerCtrl.resetSearch(), this.fetchWallets()) : this.search && (this.search = "", this.endReached = this.isLastPage(), eC.ExplorerCtrl.resetSearch())
                    })
                }
                firstUpdated() {
                    this.createPaginationObserver()
                }
                disconnectedCallback() {
                    var e;
                    null == (e = this.intersectionObserver) || e.disconnect()
                }
                get placeholderEl() {
                    return t8.getShadowRootElement(this, ".wcm-placeholder-block")
                }
                createPaginationObserver() {
                    this.intersectionObserver = new IntersectionObserver(([e]) => {
                        e.isIntersecting && !(this.search && this.firstFetch) && this.fetchWallets()
                    }), this.intersectionObserver.observe(this.placeholderEl)
                }
                isLastPage() {
                    let {
                        wallets: e,
                        search: t
                    } = eC.ExplorerCtrl.state, {
                        listings: r,
                        total: i
                    } = this.search ? t : e;
                    return i <= 40 || r.length >= i
                }
                async fetchWallets() {
                    var e;
                    let {
                        wallets: t,
                        search: r
                    } = eC.ExplorerCtrl.state, {
                        listings: i,
                        total: o,
                        page: l
                    } = this.search ? r : t;
                    if (!this.endReached && (this.firstFetch || o > 40 && i.length < o)) try {
                        this.loading = !0;
                        let t = null == (e = eC.OptionsCtrl.state.chains) ? void 0 : e.join(","),
                            {
                                listings: r
                            } = await eC.ExplorerCtrl.getWallets({
                                page: this.firstFetch ? 1 : l + 1,
                                entries: 40,
                                search: this.search,
                                version: 2,
                                chains: t
                            }),
                            i = r.map(e => t8.getWalletIcon(e));
                        await Promise.all([...i.map(async e => t8.preloadImage(e)), eC.zv.wait(300)]), this.endReached = this.isLastPage()
                    } catch (e) {
                        console.error(e), eC.ToastCtrl.openToast(t8.getErrorMessage(e), "error")
                    } finally {
                        this.loading = !1, this.firstFetch = !1
                    }
                }
                onConnect(e) {
                    eC.zv.isAndroid() ? t8.handleMobileLinking(e) : t8.goToConnectingView(e)
                }
                onSearchChange(e) {
                    let {
                        value: t
                    } = e.target;
                    this.searchDebounce(t)
                }
                render() {
                    let {
                        wallets: e,
                        search: t
                    } = eC.ExplorerCtrl.state, {
                        listings: r
                    } = this.search ? t : e, i = this.loading && !r.length, o = this.search.length >= 3, l = r5.manualWalletsTemplate(), a = r5.recomendedWalletsTemplate(!0);
                    o && (l = l.filter(({
                        values: e
                    }) => t8.caseSafeIncludes(e[0], this.search)), a = a.filter(({
                        values: e
                    }) => t8.caseSafeIncludes(e[0], this.search)));
                    let n = !this.loading && !r.length && !a.length,
                        s = {
                            "wcm-loading": i,
                            "wcm-end-reached": this.endReached || !this.loading,
                            "wcm-empty": n
                        };
                    return Z `<wcm-modal-header><wcm-search-input .onChange="${this.onSearchChange.bind(this)}"></wcm-search-input></wcm-modal-header><wcm-modal-content class="${ev(s)}"><div class="wcm-grid">${i?null:l} ${i?null:a} ${i?null:r.map(e=>Z`${e?Z`<wcm-wallet-button imageId="${e.image_id}" name="${e.name}" walletId="${e.id}" .onClick="${()=>this.onConnect(e)}"></wcm-wallet-button>`:null}`)}</div><div class="wcm-placeholder-block">${n?Z`<wcm-text variant="big-bold" color="secondary">No results found</wcm-text>`:null} ${!n&&this.loading?Z`<wcm-spinner></wcm-spinner>`:null}</div></wcm-modal-content>`
                }
            };
            i1.styles = [tI.globalCss, iG], i0([ew()], i1.prototype, "loading", 2), i0([ew()], i1.prototype, "firstFetch", 2), i0([ew()], i1.prototype, "search", 2), i0([ew()], i1.prototype, "endReached", 2), i1 = i0([eh("wcm-wallet-explorer-view")], i1);
            let i2 = d `wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
            var i5 = Object.defineProperty,
                i4 = Object.getOwnPropertyDescriptor,
                i3 = (e, t, r, i) => {
                    for (var o, l = i > 1 ? void 0 : i ? i4(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                    return i && l && i5(t, r, l), l
                };
            let i7 = class extends ec {
                constructor() {
                    super(), this.isError = !1, this.openWebWallet()
                }
                onFormatAndRedirect(e) {
                    let {
                        desktop: t,
                        name: r
                    } = eC.zv.getWalletRouterData(), i = t ? .universal;
                    if (i) {
                        let t = eC.zv.formatUniversalUrl(i, e, r);
                        eC.zv.openHref(t, "_blank")
                    }
                }
                openWebWallet() {
                    let {
                        walletConnectUri: e
                    } = eC.OptionsCtrl.state, t = eC.zv.getWalletRouterData();
                    t8.setRecentWallet(t), e && this.onFormatAndRedirect(e)
                }
                render() {
                    let {
                        name: e,
                        id: t,
                        image_id: r
                    } = eC.zv.getWalletRouterData(), {
                        isMobile: i,
                        isDesktop: o
                    } = t8.getCachedRouterWalletPlatforms(), l = eC.zv.isMobile();
                    return Z `<wcm-modal-header title="${e}" .onAction="${t8.handleUriCopy}" .actionIcon="${tB.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${t}" imageId="${ty(r)}" label="${`Continue in ${e}...`}" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`${e} web app has opened in a new tab. Go there, accept the connection, and come back`}</wcm-text><wcm-platform-selection .isMobile="${i}" .isDesktop="${!l&&o}" .isRetry="${!0}"><wcm-button .onClick="${this.openWebWallet.bind(this)}" .iconRight="${tB.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`
                }
            };
            i7.styles = [tI.globalCss, i2], i3([ew()], i7.prototype, "isError", 2), i7 = i3([eh("wcm-web-connecting-view")], i7)
        }
    }
]);