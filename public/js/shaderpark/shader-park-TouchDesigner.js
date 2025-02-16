/* Version: 0.2.8 - May 28, 2024 15:12:56 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.SPTD = {}));
})(this, (function (exports) { 'use strict';

  function _AsyncGenerator(e) {
    var r, t;
    function resume(r, t) {
      try {
        var n = e[r](t),
          o = n.value,
          u = o instanceof _OverloadYield;
        Promise.resolve(u ? o.v : o).then(function (t) {
          if (u) {
            var i = "return" === r ? "return" : "next";
            if (!o.k || t.done) return resume(i, t);
            t = e[i](t).value;
          }
          settle(n.done ? "return" : "normal", t);
        }, function (e) {
          resume("throw", e);
        });
      } catch (e) {
        settle("throw", e);
      }
    }
    function settle(e, n) {
      switch (e) {
        case "return":
          r.resolve({
            value: n,
            done: !0
          });
          break;
        case "throw":
          r.reject(n);
          break;
        default:
          r.resolve({
            value: n,
            done: !1
          });
      }
      (r = r.next) ? resume(r.key, r.arg) : t = null;
    }
    this._invoke = function (e, n) {
      return new Promise(function (o, u) {
        var i = {
          key: e,
          arg: n,
          resolve: o,
          reject: u,
          next: null
        };
        t ? t = t.next = i : (r = t = i, resume(e, n));
      });
    }, "function" != typeof e.return && (this.return = void 0);
  }
  _AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function () {
    return this;
  }, _AsyncGenerator.prototype.next = function (e) {
    return this._invoke("next", e);
  }, _AsyncGenerator.prototype.throw = function (e) {
    return this._invoke("throw", e);
  }, _AsyncGenerator.prototype.return = function (e) {
    return this._invoke("return", e);
  };
  function _OverloadYield(t, e) {
    this.v = t, this.k = e;
  }
  function old_createMetadataMethodsForProperty(e, t, a, r) {
    return {
      getMetadata: function (o) {
        old_assertNotFinished(r, "getMetadata"), old_assertMetadataKey(o);
        var i = e[o];
        if (void 0 !== i) if (1 === t) {
          var n = i.public;
          if (void 0 !== n) return n[a];
        } else if (2 === t) {
          var l = i.private;
          if (void 0 !== l) return l.get(a);
        } else if (Object.hasOwnProperty.call(i, "constructor")) return i.constructor;
      },
      setMetadata: function (o, i) {
        old_assertNotFinished(r, "setMetadata"), old_assertMetadataKey(o);
        var n = e[o];
        if (void 0 === n && (n = e[o] = {}), 1 === t) {
          var l = n.public;
          void 0 === l && (l = n.public = {}), l[a] = i;
        } else if (2 === t) {
          var s = n.priv;
          void 0 === s && (s = n.private = new Map()), s.set(a, i);
        } else n.constructor = i;
      }
    };
  }
  function old_convertMetadataMapToFinal(e, t) {
    var a = e[Symbol.metadata || Symbol.for("Symbol.metadata")],
      r = Object.getOwnPropertySymbols(t);
    if (0 !== r.length) {
      for (var o = 0; o < r.length; o++) {
        var i = r[o],
          n = t[i],
          l = a ? a[i] : null,
          s = n.public,
          c = l ? l.public : null;
        s && c && Object.setPrototypeOf(s, c);
        var d = n.private;
        if (d) {
          var u = Array.from(d.values()),
            f = l ? l.private : null;
          f && (u = u.concat(f)), n.private = u;
        }
        l && Object.setPrototypeOf(n, l);
      }
      a && Object.setPrototypeOf(t, a), e[Symbol.metadata || Symbol.for("Symbol.metadata")] = t;
    }
  }
  function old_createAddInitializerMethod(e, t) {
    return function (a) {
      old_assertNotFinished(t, "addInitializer"), old_assertCallable(a, "An initializer"), e.push(a);
    };
  }
  function old_memberDec(e, t, a, r, o, i, n, l, s) {
    var c;
    switch (i) {
      case 1:
        c = "accessor";
        break;
      case 2:
        c = "method";
        break;
      case 3:
        c = "getter";
        break;
      case 4:
        c = "setter";
        break;
      default:
        c = "field";
    }
    var d,
      u,
      f = {
        kind: c,
        name: l ? "#" + t : t,
        isStatic: n,
        isPrivate: l
      },
      p = {
        v: !1
      };
    if (0 !== i && (f.addInitializer = old_createAddInitializerMethod(o, p)), l) {
      d = 2, u = Symbol(t);
      var v = {};
      0 === i ? (v.get = a.get, v.set = a.set) : 2 === i ? v.get = function () {
        return a.value;
      } : (1 !== i && 3 !== i || (v.get = function () {
        return a.get.call(this);
      }), 1 !== i && 4 !== i || (v.set = function (e) {
        a.set.call(this, e);
      })), f.access = v;
    } else d = 1, u = t;
    try {
      return e(s, Object.assign(f, old_createMetadataMethodsForProperty(r, d, u, p)));
    } finally {
      p.v = !0;
    }
  }
  function old_assertNotFinished(e, t) {
    if (e.v) throw new Error("attempted to call " + t + " after decoration was finished");
  }
  function old_assertMetadataKey(e) {
    if ("symbol" != typeof e) throw new TypeError("Metadata keys must be symbols, received: " + e);
  }
  function old_assertCallable(e, t) {
    if ("function" != typeof e) throw new TypeError(t + " must be a function");
  }
  function old_assertValidReturnValue(e, t) {
    var a = typeof t;
    if (1 === e) {
      if ("object" !== a || null === t) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
      void 0 !== t.get && old_assertCallable(t.get, "accessor.get"), void 0 !== t.set && old_assertCallable(t.set, "accessor.set"), void 0 !== t.init && old_assertCallable(t.init, "accessor.init"), void 0 !== t.initializer && old_assertCallable(t.initializer, "accessor.initializer");
    } else if ("function" !== a) {
      var r;
      throw r = 0 === e ? "field" : 10 === e ? "class" : "method", new TypeError(r + " decorators must return a function or void 0");
    }
  }
  function old_getInit(e) {
    var t;
    return null == (t = e.init) && (t = e.initializer) && "undefined" != typeof console && console.warn(".initializer has been renamed to .init as of March 2022"), t;
  }
  function old_applyMemberDec(e, t, a, r, o, i, n, l, s) {
    var c,
      d,
      u,
      f,
      p,
      v,
      h = a[0];
    if (n ? c = 0 === o || 1 === o ? {
      get: a[3],
      set: a[4]
    } : 3 === o ? {
      get: a[3]
    } : 4 === o ? {
      set: a[3]
    } : {
      value: a[3]
    } : 0 !== o && (c = Object.getOwnPropertyDescriptor(t, r)), 1 === o ? u = {
      get: c.get,
      set: c.set
    } : 2 === o ? u = c.value : 3 === o ? u = c.get : 4 === o && (u = c.set), "function" == typeof h) void 0 !== (f = old_memberDec(h, r, c, l, s, o, i, n, u)) && (old_assertValidReturnValue(o, f), 0 === o ? d = f : 1 === o ? (d = old_getInit(f), p = f.get || u.get, v = f.set || u.set, u = {
      get: p,
      set: v
    }) : u = f);else for (var y = h.length - 1; y >= 0; y--) {
      var b;
      if (void 0 !== (f = old_memberDec(h[y], r, c, l, s, o, i, n, u))) old_assertValidReturnValue(o, f), 0 === o ? b = f : 1 === o ? (b = old_getInit(f), p = f.get || u.get, v = f.set || u.set, u = {
        get: p,
        set: v
      }) : u = f, void 0 !== b && (void 0 === d ? d = b : "function" == typeof d ? d = [d, b] : d.push(b));
    }
    if (0 === o || 1 === o) {
      if (void 0 === d) d = function (e, t) {
        return t;
      };else if ("function" != typeof d) {
        var g = d;
        d = function (e, t) {
          for (var a = t, r = 0; r < g.length; r++) a = g[r].call(e, a);
          return a;
        };
      } else {
        var m = d;
        d = function (e, t) {
          return m.call(e, t);
        };
      }
      e.push(d);
    }
    0 !== o && (1 === o ? (c.get = u.get, c.set = u.set) : 2 === o ? c.value = u : 3 === o ? c.get = u : 4 === o && (c.set = u), n ? 1 === o ? (e.push(function (e, t) {
      return u.get.call(e, t);
    }), e.push(function (e, t) {
      return u.set.call(e, t);
    })) : 2 === o ? e.push(u) : e.push(function (e, t) {
      return u.call(e, t);
    }) : Object.defineProperty(t, r, c));
  }
  function old_applyMemberDecs(e, t, a, r, o) {
    for (var i, n, l = new Map(), s = new Map(), c = 0; c < o.length; c++) {
      var d = o[c];
      if (Array.isArray(d)) {
        var u,
          f,
          p,
          v = d[1],
          h = d[2],
          y = d.length > 3,
          b = v >= 5;
        if (b ? (u = t, f = r, 0 !== (v -= 5) && (p = n = n || [])) : (u = t.prototype, f = a, 0 !== v && (p = i = i || [])), 0 !== v && !y) {
          var g = b ? s : l,
            m = g.get(h) || 0;
          if (!0 === m || 3 === m && 4 !== v || 4 === m && 3 !== v) throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + h);
          !m && v > 2 ? g.set(h, v) : g.set(h, !0);
        }
        old_applyMemberDec(e, u, d, h, v, b, y, f, p);
      }
    }
    old_pushInitializers(e, i), old_pushInitializers(e, n);
  }
  function old_pushInitializers(e, t) {
    t && e.push(function (e) {
      for (var a = 0; a < t.length; a++) t[a].call(e);
      return e;
    });
  }
  function old_applyClassDecs(e, t, a, r) {
    if (r.length > 0) {
      for (var o = [], i = t, n = t.name, l = r.length - 1; l >= 0; l--) {
        var s = {
          v: !1
        };
        try {
          var c = Object.assign({
              kind: "class",
              name: n,
              addInitializer: old_createAddInitializerMethod(o, s)
            }, old_createMetadataMethodsForProperty(a, 0, n, s)),
            d = r[l](i, c);
        } finally {
          s.v = !0;
        }
        void 0 !== d && (old_assertValidReturnValue(10, d), i = d);
      }
      e.push(i, function () {
        for (var e = 0; e < o.length; e++) o[e].call(i);
      });
    }
  }
  function _applyDecs(e, t, a) {
    var r = [],
      o = {},
      i = {};
    return old_applyMemberDecs(r, e, i, o, t), old_convertMetadataMapToFinal(e.prototype, i), old_applyClassDecs(r, e, o, a), old_convertMetadataMapToFinal(e, o), r;
  }
  function applyDecs2203Factory() {
    function createAddInitializerMethod(e, t) {
      return function (r) {
        !function (e, t) {
          if (e.v) throw new Error("attempted to call " + t + " after decoration was finished");
        }(t, "addInitializer"), assertCallable(r, "An initializer"), e.push(r);
      };
    }
    function memberDec(e, t, r, a, n, i, s, o) {
      var c;
      switch (n) {
        case 1:
          c = "accessor";
          break;
        case 2:
          c = "method";
          break;
        case 3:
          c = "getter";
          break;
        case 4:
          c = "setter";
          break;
        default:
          c = "field";
      }
      var l,
        u,
        f = {
          kind: c,
          name: s ? "#" + t : t,
          static: i,
          private: s
        },
        p = {
          v: !1
        };
      0 !== n && (f.addInitializer = createAddInitializerMethod(a, p)), 0 === n ? s ? (l = r.get, u = r.set) : (l = function () {
        return this[t];
      }, u = function (e) {
        this[t] = e;
      }) : 2 === n ? l = function () {
        return r.value;
      } : (1 !== n && 3 !== n || (l = function () {
        return r.get.call(this);
      }), 1 !== n && 4 !== n || (u = function (e) {
        r.set.call(this, e);
      })), f.access = l && u ? {
        get: l,
        set: u
      } : l ? {
        get: l
      } : {
        set: u
      };
      try {
        return e(o, f);
      } finally {
        p.v = !0;
      }
    }
    function assertCallable(e, t) {
      if ("function" != typeof e) throw new TypeError(t + " must be a function");
    }
    function assertValidReturnValue(e, t) {
      var r = typeof t;
      if (1 === e) {
        if ("object" !== r || null === t) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
        void 0 !== t.get && assertCallable(t.get, "accessor.get"), void 0 !== t.set && assertCallable(t.set, "accessor.set"), void 0 !== t.init && assertCallable(t.init, "accessor.init");
      } else if ("function" !== r) {
        var a;
        throw a = 0 === e ? "field" : 10 === e ? "class" : "method", new TypeError(a + " decorators must return a function or void 0");
      }
    }
    function applyMemberDec(e, t, r, a, n, i, s, o) {
      var c,
        l,
        u,
        f,
        p,
        d,
        h = r[0];
      if (s ? c = 0 === n || 1 === n ? {
        get: r[3],
        set: r[4]
      } : 3 === n ? {
        get: r[3]
      } : 4 === n ? {
        set: r[3]
      } : {
        value: r[3]
      } : 0 !== n && (c = Object.getOwnPropertyDescriptor(t, a)), 1 === n ? u = {
        get: c.get,
        set: c.set
      } : 2 === n ? u = c.value : 3 === n ? u = c.get : 4 === n && (u = c.set), "function" == typeof h) void 0 !== (f = memberDec(h, a, c, o, n, i, s, u)) && (assertValidReturnValue(n, f), 0 === n ? l = f : 1 === n ? (l = f.init, p = f.get || u.get, d = f.set || u.set, u = {
        get: p,
        set: d
      }) : u = f);else for (var v = h.length - 1; v >= 0; v--) {
        var g;
        if (void 0 !== (f = memberDec(h[v], a, c, o, n, i, s, u))) assertValidReturnValue(n, f), 0 === n ? g = f : 1 === n ? (g = f.init, p = f.get || u.get, d = f.set || u.set, u = {
          get: p,
          set: d
        }) : u = f, void 0 !== g && (void 0 === l ? l = g : "function" == typeof l ? l = [l, g] : l.push(g));
      }
      if (0 === n || 1 === n) {
        if (void 0 === l) l = function (e, t) {
          return t;
        };else if ("function" != typeof l) {
          var y = l;
          l = function (e, t) {
            for (var r = t, a = 0; a < y.length; a++) r = y[a].call(e, r);
            return r;
          };
        } else {
          var m = l;
          l = function (e, t) {
            return m.call(e, t);
          };
        }
        e.push(l);
      }
      0 !== n && (1 === n ? (c.get = u.get, c.set = u.set) : 2 === n ? c.value = u : 3 === n ? c.get = u : 4 === n && (c.set = u), s ? 1 === n ? (e.push(function (e, t) {
        return u.get.call(e, t);
      }), e.push(function (e, t) {
        return u.set.call(e, t);
      })) : 2 === n ? e.push(u) : e.push(function (e, t) {
        return u.call(e, t);
      }) : Object.defineProperty(t, a, c));
    }
    function pushInitializers(e, t) {
      t && e.push(function (e) {
        for (var r = 0; r < t.length; r++) t[r].call(e);
        return e;
      });
    }
    return function (e, t, r) {
      var a = [];
      return function (e, t, r) {
        for (var a, n, i = new Map(), s = new Map(), o = 0; o < r.length; o++) {
          var c = r[o];
          if (Array.isArray(c)) {
            var l,
              u,
              f = c[1],
              p = c[2],
              d = c.length > 3,
              h = f >= 5;
            if (h ? (l = t, 0 != (f -= 5) && (u = n = n || [])) : (l = t.prototype, 0 !== f && (u = a = a || [])), 0 !== f && !d) {
              var v = h ? s : i,
                g = v.get(p) || 0;
              if (!0 === g || 3 === g && 4 !== f || 4 === g && 3 !== f) throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + p);
              !g && f > 2 ? v.set(p, f) : v.set(p, !0);
            }
            applyMemberDec(e, l, c, p, f, h, d, u);
          }
        }
        pushInitializers(e, a), pushInitializers(e, n);
      }(a, e, t), function (e, t, r) {
        if (r.length > 0) {
          for (var a = [], n = t, i = t.name, s = r.length - 1; s >= 0; s--) {
            var o = {
              v: !1
            };
            try {
              var c = r[s](n, {
                kind: "class",
                name: i,
                addInitializer: createAddInitializerMethod(a, o)
              });
            } finally {
              o.v = !0;
            }
            void 0 !== c && (assertValidReturnValue(10, c), n = c);
          }
          e.push(n, function () {
            for (var e = 0; e < a.length; e++) a[e].call(n);
          });
        }
      }(a, e, r), a;
    };
  }
  var applyDecs2203Impl;
  function _applyDecs2203(e, t, r) {
    return (applyDecs2203Impl = applyDecs2203Impl || applyDecs2203Factory())(e, t, r);
  }
  function applyDecs2203RFactory() {
    function createAddInitializerMethod(e, t) {
      return function (r) {
        !function (e, t) {
          if (e.v) throw new Error("attempted to call " + t + " after decoration was finished");
        }(t, "addInitializer"), assertCallable(r, "An initializer"), e.push(r);
      };
    }
    function memberDec(e, t, r, n, a, i, s, o) {
      var c;
      switch (a) {
        case 1:
          c = "accessor";
          break;
        case 2:
          c = "method";
          break;
        case 3:
          c = "getter";
          break;
        case 4:
          c = "setter";
          break;
        default:
          c = "field";
      }
      var l,
        u,
        f = {
          kind: c,
          name: s ? "#" + t : t,
          static: i,
          private: s
        },
        p = {
          v: !1
        };
      0 !== a && (f.addInitializer = createAddInitializerMethod(n, p)), 0 === a ? s ? (l = r.get, u = r.set) : (l = function () {
        return this[t];
      }, u = function (e) {
        this[t] = e;
      }) : 2 === a ? l = function () {
        return r.value;
      } : (1 !== a && 3 !== a || (l = function () {
        return r.get.call(this);
      }), 1 !== a && 4 !== a || (u = function (e) {
        r.set.call(this, e);
      })), f.access = l && u ? {
        get: l,
        set: u
      } : l ? {
        get: l
      } : {
        set: u
      };
      try {
        return e(o, f);
      } finally {
        p.v = !0;
      }
    }
    function assertCallable(e, t) {
      if ("function" != typeof e) throw new TypeError(t + " must be a function");
    }
    function assertValidReturnValue(e, t) {
      var r = typeof t;
      if (1 === e) {
        if ("object" !== r || null === t) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
        void 0 !== t.get && assertCallable(t.get, "accessor.get"), void 0 !== t.set && assertCallable(t.set, "accessor.set"), void 0 !== t.init && assertCallable(t.init, "accessor.init");
      } else if ("function" !== r) {
        var n;
        throw n = 0 === e ? "field" : 10 === e ? "class" : "method", new TypeError(n + " decorators must return a function or void 0");
      }
    }
    function applyMemberDec(e, t, r, n, a, i, s, o) {
      var c,
        l,
        u,
        f,
        p,
        d,
        h = r[0];
      if (s ? c = 0 === a || 1 === a ? {
        get: r[3],
        set: r[4]
      } : 3 === a ? {
        get: r[3]
      } : 4 === a ? {
        set: r[3]
      } : {
        value: r[3]
      } : 0 !== a && (c = Object.getOwnPropertyDescriptor(t, n)), 1 === a ? u = {
        get: c.get,
        set: c.set
      } : 2 === a ? u = c.value : 3 === a ? u = c.get : 4 === a && (u = c.set), "function" == typeof h) void 0 !== (f = memberDec(h, n, c, o, a, i, s, u)) && (assertValidReturnValue(a, f), 0 === a ? l = f : 1 === a ? (l = f.init, p = f.get || u.get, d = f.set || u.set, u = {
        get: p,
        set: d
      }) : u = f);else for (var v = h.length - 1; v >= 0; v--) {
        var g;
        if (void 0 !== (f = memberDec(h[v], n, c, o, a, i, s, u))) assertValidReturnValue(a, f), 0 === a ? g = f : 1 === a ? (g = f.init, p = f.get || u.get, d = f.set || u.set, u = {
          get: p,
          set: d
        }) : u = f, void 0 !== g && (void 0 === l ? l = g : "function" == typeof l ? l = [l, g] : l.push(g));
      }
      if (0 === a || 1 === a) {
        if (void 0 === l) l = function (e, t) {
          return t;
        };else if ("function" != typeof l) {
          var y = l;
          l = function (e, t) {
            for (var r = t, n = 0; n < y.length; n++) r = y[n].call(e, r);
            return r;
          };
        } else {
          var m = l;
          l = function (e, t) {
            return m.call(e, t);
          };
        }
        e.push(l);
      }
      0 !== a && (1 === a ? (c.get = u.get, c.set = u.set) : 2 === a ? c.value = u : 3 === a ? c.get = u : 4 === a && (c.set = u), s ? 1 === a ? (e.push(function (e, t) {
        return u.get.call(e, t);
      }), e.push(function (e, t) {
        return u.set.call(e, t);
      })) : 2 === a ? e.push(u) : e.push(function (e, t) {
        return u.call(e, t);
      }) : Object.defineProperty(t, n, c));
    }
    function applyMemberDecs(e, t) {
      for (var r, n, a = [], i = new Map(), s = new Map(), o = 0; o < t.length; o++) {
        var c = t[o];
        if (Array.isArray(c)) {
          var l,
            u,
            f = c[1],
            p = c[2],
            d = c.length > 3,
            h = f >= 5;
          if (h ? (l = e, 0 !== (f -= 5) && (u = n = n || [])) : (l = e.prototype, 0 !== f && (u = r = r || [])), 0 !== f && !d) {
            var v = h ? s : i,
              g = v.get(p) || 0;
            if (!0 === g || 3 === g && 4 !== f || 4 === g && 3 !== f) throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + p);
            !g && f > 2 ? v.set(p, f) : v.set(p, !0);
          }
          applyMemberDec(a, l, c, p, f, h, d, u);
        }
      }
      return pushInitializers(a, r), pushInitializers(a, n), a;
    }
    function pushInitializers(e, t) {
      t && e.push(function (e) {
        for (var r = 0; r < t.length; r++) t[r].call(e);
        return e;
      });
    }
    return function (e, t, r) {
      return {
        e: applyMemberDecs(e, t),
        get c() {
          return function (e, t) {
            if (t.length > 0) {
              for (var r = [], n = e, a = e.name, i = t.length - 1; i >= 0; i--) {
                var s = {
                  v: !1
                };
                try {
                  var o = t[i](n, {
                    kind: "class",
                    name: a,
                    addInitializer: createAddInitializerMethod(r, s)
                  });
                } finally {
                  s.v = !0;
                }
                void 0 !== o && (assertValidReturnValue(10, o), n = o);
              }
              return [n, function () {
                for (var e = 0; e < r.length; e++) r[e].call(n);
              }];
            }
          }(e, r);
        }
      };
    };
  }
  function _applyDecs2203R(e, t, r) {
    return (_applyDecs2203R = applyDecs2203RFactory())(e, t, r);
  }
  function applyDecs2301Factory() {
    function createAddInitializerMethod(e, t) {
      return function (r) {
        !function (e, t) {
          if (e.v) throw new Error("attempted to call " + t + " after decoration was finished");
        }(t, "addInitializer"), assertCallable(r, "An initializer"), e.push(r);
      };
    }
    function assertInstanceIfPrivate(e, t) {
      if (!e(t)) throw new TypeError("Attempted to access private element on non-instance");
    }
    function memberDec(e, t, r, n, a, i, s, o, c) {
      var u;
      switch (a) {
        case 1:
          u = "accessor";
          break;
        case 2:
          u = "method";
          break;
        case 3:
          u = "getter";
          break;
        case 4:
          u = "setter";
          break;
        default:
          u = "field";
      }
      var l,
        f,
        p = {
          kind: u,
          name: s ? "#" + t : t,
          static: i,
          private: s
        },
        d = {
          v: !1
        };
      if (0 !== a && (p.addInitializer = createAddInitializerMethod(n, d)), s || 0 !== a && 2 !== a) {
        if (2 === a) l = function (e) {
          return assertInstanceIfPrivate(c, e), r.value;
        };else {
          var h = 0 === a || 1 === a;
          (h || 3 === a) && (l = s ? function (e) {
            return assertInstanceIfPrivate(c, e), r.get.call(e);
          } : function (e) {
            return r.get.call(e);
          }), (h || 4 === a) && (f = s ? function (e, t) {
            assertInstanceIfPrivate(c, e), r.set.call(e, t);
          } : function (e, t) {
            r.set.call(e, t);
          });
        }
      } else l = function (e) {
        return e[t];
      }, 0 === a && (f = function (e, r) {
        e[t] = r;
      });
      var v = s ? c.bind() : function (e) {
        return t in e;
      };
      p.access = l && f ? {
        get: l,
        set: f,
        has: v
      } : l ? {
        get: l,
        has: v
      } : {
        set: f,
        has: v
      };
      try {
        return e(o, p);
      } finally {
        d.v = !0;
      }
    }
    function assertCallable(e, t) {
      if ("function" != typeof e) throw new TypeError(t + " must be a function");
    }
    function assertValidReturnValue(e, t) {
      var r = typeof t;
      if (1 === e) {
        if ("object" !== r || null === t) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
        void 0 !== t.get && assertCallable(t.get, "accessor.get"), void 0 !== t.set && assertCallable(t.set, "accessor.set"), void 0 !== t.init && assertCallable(t.init, "accessor.init");
      } else if ("function" !== r) {
        var n;
        throw n = 0 === e ? "field" : 10 === e ? "class" : "method", new TypeError(n + " decorators must return a function or void 0");
      }
    }
    function curryThis2(e) {
      return function (t) {
        e(this, t);
      };
    }
    function applyMemberDec(e, t, r, n, a, i, s, o, c) {
      var u,
        l,
        f,
        p,
        d,
        h,
        v,
        g = r[0];
      if (s ? u = 0 === a || 1 === a ? {
        get: (p = r[3], function () {
          return p(this);
        }),
        set: curryThis2(r[4])
      } : 3 === a ? {
        get: r[3]
      } : 4 === a ? {
        set: r[3]
      } : {
        value: r[3]
      } : 0 !== a && (u = Object.getOwnPropertyDescriptor(t, n)), 1 === a ? f = {
        get: u.get,
        set: u.set
      } : 2 === a ? f = u.value : 3 === a ? f = u.get : 4 === a && (f = u.set), "function" == typeof g) void 0 !== (d = memberDec(g, n, u, o, a, i, s, f, c)) && (assertValidReturnValue(a, d), 0 === a ? l = d : 1 === a ? (l = d.init, h = d.get || f.get, v = d.set || f.set, f = {
        get: h,
        set: v
      }) : f = d);else for (var y = g.length - 1; y >= 0; y--) {
        var m;
        if (void 0 !== (d = memberDec(g[y], n, u, o, a, i, s, f, c))) assertValidReturnValue(a, d), 0 === a ? m = d : 1 === a ? (m = d.init, h = d.get || f.get, v = d.set || f.set, f = {
          get: h,
          set: v
        }) : f = d, void 0 !== m && (void 0 === l ? l = m : "function" == typeof l ? l = [l, m] : l.push(m));
      }
      if (0 === a || 1 === a) {
        if (void 0 === l) l = function (e, t) {
          return t;
        };else if ("function" != typeof l) {
          var b = l;
          l = function (e, t) {
            for (var r = t, n = 0; n < b.length; n++) r = b[n].call(e, r);
            return r;
          };
        } else {
          var I = l;
          l = function (e, t) {
            return I.call(e, t);
          };
        }
        e.push(l);
      }
      0 !== a && (1 === a ? (u.get = f.get, u.set = f.set) : 2 === a ? u.value = f : 3 === a ? u.get = f : 4 === a && (u.set = f), s ? 1 === a ? (e.push(function (e, t) {
        return f.get.call(e, t);
      }), e.push(function (e, t) {
        return f.set.call(e, t);
      })) : 2 === a ? e.push(f) : e.push(function (e, t) {
        return f.call(e, t);
      }) : Object.defineProperty(t, n, u));
    }
    function applyMemberDecs(e, t, r) {
      for (var n, a, i, s = [], o = new Map(), c = new Map(), u = 0; u < t.length; u++) {
        var l = t[u];
        if (Array.isArray(l)) {
          var f,
            p,
            d = l[1],
            h = l[2],
            v = l.length > 3,
            g = d >= 5,
            y = r;
          if (g ? (f = e, 0 !== (d -= 5) && (p = a = a || []), v && !i && (i = function (t) {
            return _checkInRHS(t) === e;
          }), y = i) : (f = e.prototype, 0 !== d && (p = n = n || [])), 0 !== d && !v) {
            var m = g ? c : o,
              b = m.get(h) || 0;
            if (!0 === b || 3 === b && 4 !== d || 4 === b && 3 !== d) throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + h);
            !b && d > 2 ? m.set(h, d) : m.set(h, !0);
          }
          applyMemberDec(s, f, l, h, d, g, v, p, y);
        }
      }
      return pushInitializers(s, n), pushInitializers(s, a), s;
    }
    function pushInitializers(e, t) {
      t && e.push(function (e) {
        for (var r = 0; r < t.length; r++) t[r].call(e);
        return e;
      });
    }
    return function (e, t, r, n) {
      return {
        e: applyMemberDecs(e, t, n),
        get c() {
          return function (e, t) {
            if (t.length > 0) {
              for (var r = [], n = e, a = e.name, i = t.length - 1; i >= 0; i--) {
                var s = {
                  v: !1
                };
                try {
                  var o = t[i](n, {
                    kind: "class",
                    name: a,
                    addInitializer: createAddInitializerMethod(r, s)
                  });
                } finally {
                  s.v = !0;
                }
                void 0 !== o && (assertValidReturnValue(10, o), n = o);
              }
              return [n, function () {
                for (var e = 0; e < r.length; e++) r[e].call(n);
              }];
            }
          }(e, r);
        }
      };
    };
  }
  function _applyDecs2301(e, t, r, n) {
    return (_applyDecs2301 = applyDecs2301Factory())(e, t, r, n);
  }
  function createAddInitializerMethod(e, t) {
    return function (r) {
      assertNotFinished(t, "addInitializer"), assertCallable(r, "An initializer"), e.push(r);
    };
  }
  function assertInstanceIfPrivate(e, t) {
    if (!e(t)) throw new TypeError("Attempted to access private element on non-instance");
  }
  function memberDec(e, t, r, n, a, i, s, o, c, l) {
    var u;
    switch (i) {
      case 1:
        u = "accessor";
        break;
      case 2:
        u = "method";
        break;
      case 3:
        u = "getter";
        break;
      case 4:
        u = "setter";
        break;
      default:
        u = "field";
    }
    var f,
      d,
      p = {
        kind: u,
        name: o ? "#" + r : r,
        static: s,
        private: o
      },
      h = {
        v: !1
      };
    if (0 !== i && (p.addInitializer = createAddInitializerMethod(a, h)), o || 0 !== i && 2 !== i) {
      if (2 === i) f = function (e) {
        return assertInstanceIfPrivate(l, e), n.value;
      };else {
        var v = 0 === i || 1 === i;
        (v || 3 === i) && (f = o ? function (e) {
          return assertInstanceIfPrivate(l, e), n.get.call(e);
        } : function (e) {
          return n.get.call(e);
        }), (v || 4 === i) && (d = o ? function (e, t) {
          assertInstanceIfPrivate(l, e), n.set.call(e, t);
        } : function (e, t) {
          n.set.call(e, t);
        });
      }
    } else f = function (e) {
      return e[r];
    }, 0 === i && (d = function (e, t) {
      e[r] = t;
    });
    var y = o ? l.bind() : function (e) {
      return r in e;
    };
    p.access = f && d ? {
      get: f,
      set: d,
      has: y
    } : f ? {
      get: f,
      has: y
    } : {
      set: d,
      has: y
    };
    try {
      return e.call(t, c, p);
    } finally {
      h.v = !0;
    }
  }
  function assertNotFinished(e, t) {
    if (e.v) throw new Error("attempted to call " + t + " after decoration was finished");
  }
  function assertCallable(e, t) {
    if ("function" != typeof e) throw new TypeError(t + " must be a function");
  }
  function assertValidReturnValue(e, t) {
    var r = typeof t;
    if (1 === e) {
      if ("object" !== r || null === t) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
      void 0 !== t.get && assertCallable(t.get, "accessor.get"), void 0 !== t.set && assertCallable(t.set, "accessor.set"), void 0 !== t.init && assertCallable(t.init, "accessor.init");
    } else if ("function" !== r) {
      var n;
      throw n = 0 === e ? "field" : 5 === e ? "class" : "method", new TypeError(n + " decorators must return a function or void 0");
    }
  }
  function curryThis1(e) {
    return function () {
      return e(this);
    };
  }
  function curryThis2(e) {
    return function (t) {
      e(this, t);
    };
  }
  function applyMemberDec(e, t, r, n, a, i, s, o, c, l) {
    var u,
      f,
      d,
      p,
      h,
      v,
      y = r[0];
    n || Array.isArray(y) || (y = [y]), o ? u = 0 === i || 1 === i ? {
      get: curryThis1(r[3]),
      set: curryThis2(r[4])
    } : 3 === i ? {
      get: r[3]
    } : 4 === i ? {
      set: r[3]
    } : {
      value: r[3]
    } : 0 !== i && (u = Object.getOwnPropertyDescriptor(t, a)), 1 === i ? d = {
      get: u.get,
      set: u.set
    } : 2 === i ? d = u.value : 3 === i ? d = u.get : 4 === i && (d = u.set);
    for (var g = n ? 2 : 1, m = y.length - 1; m >= 0; m -= g) {
      var b;
      if (void 0 !== (p = memberDec(y[m], n ? y[m - 1] : void 0, a, u, c, i, s, o, d, l))) assertValidReturnValue(i, p), 0 === i ? b = p : 1 === i ? (b = p.init, h = p.get || d.get, v = p.set || d.set, d = {
        get: h,
        set: v
      }) : d = p, void 0 !== b && (void 0 === f ? f = b : "function" == typeof f ? f = [f, b] : f.push(b));
    }
    if (0 === i || 1 === i) {
      if (void 0 === f) f = function (e, t) {
        return t;
      };else if ("function" != typeof f) {
        var I = f;
        f = function (e, t) {
          for (var r = t, n = I.length - 1; n >= 0; n--) r = I[n].call(e, r);
          return r;
        };
      } else {
        var w = f;
        f = function (e, t) {
          return w.call(e, t);
        };
      }
      e.push(f);
    }
    0 !== i && (1 === i ? (u.get = d.get, u.set = d.set) : 2 === i ? u.value = d : 3 === i ? u.get = d : 4 === i && (u.set = d), o ? 1 === i ? (e.push(function (e, t) {
      return d.get.call(e, t);
    }), e.push(function (e, t) {
      return d.set.call(e, t);
    })) : 2 === i ? e.push(d) : e.push(function (e, t) {
      return d.call(e, t);
    }) : Object.defineProperty(t, a, u));
  }
  function applyMemberDecs(e, t, r) {
    for (var n, a, i, s = [], o = new Map(), c = new Map(), l = 0; l < t.length; l++) {
      var u = t[l];
      if (Array.isArray(u)) {
        var f,
          d,
          p = u[1],
          h = u[2],
          v = u.length > 3,
          y = 16 & p,
          g = !!(8 & p),
          m = r;
        if (p &= 7, g ? (f = e, 0 !== p && (d = a = a || []), v && !i && (i = function (t) {
          return _checkInRHS(t) === e;
        }), m = i) : (f = e.prototype, 0 !== p && (d = n = n || [])), 0 !== p && !v) {
          var b = g ? c : o,
            I = b.get(h) || 0;
          if (!0 === I || 3 === I && 4 !== p || 4 === I && 3 !== p) throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + h);
          b.set(h, !(!I && p > 2) || p);
        }
        applyMemberDec(s, f, u, y, h, p, g, v, d, m);
      }
    }
    return pushInitializers(s, n), pushInitializers(s, a), s;
  }
  function pushInitializers(e, t) {
    t && e.push(function (e) {
      for (var r = 0; r < t.length; r++) t[r].call(e);
      return e;
    });
  }
  function applyClassDecs(e, t, r) {
    if (t.length) {
      for (var n = [], a = e, i = e.name, s = r ? 2 : 1, o = t.length - 1; o >= 0; o -= s) {
        var c = {
          v: !1
        };
        try {
          var l = t[o].call(r ? t[o - 1] : void 0, a, {
            kind: "class",
            name: i,
            addInitializer: createAddInitializerMethod(n, c)
          });
        } finally {
          c.v = !0;
        }
        void 0 !== l && (assertValidReturnValue(5, l), a = l);
      }
      return [a, function () {
        for (var e = 0; e < n.length; e++) n[e].call(a);
      }];
    }
  }
  function _applyDecs2305(e, t, r, n, a) {
    return {
      e: applyMemberDecs(e, t, a),
      get c() {
        return applyClassDecs(e, r, n);
      }
    };
  }
  function _asyncGeneratorDelegate(t) {
    var e = {},
      n = !1;
    function pump(e, r) {
      return n = !0, r = new Promise(function (n) {
        n(t[e](r));
      }), {
        done: !1,
        value: new _OverloadYield(r, 1)
      };
    }
    return e["undefined" != typeof Symbol && Symbol.iterator || "@@iterator"] = function () {
      return this;
    }, e.next = function (t) {
      return n ? (n = !1, t) : pump("next", t);
    }, "function" == typeof t.throw && (e.throw = function (t) {
      if (n) throw n = !1, t;
      return pump("throw", t);
    }), "function" == typeof t.return && (e.return = function (t) {
      return n ? (n = !1, t) : pump("return", t);
    }), e;
  }
  function _asyncIterator(r) {
    var n,
      t,
      o,
      e = 2;
    for ("undefined" != typeof Symbol && (t = Symbol.asyncIterator, o = Symbol.iterator); e--;) {
      if (t && null != (n = r[t])) return n.call(r);
      if (o && null != (n = r[o])) return new AsyncFromSyncIterator(n.call(r));
      t = "@@asyncIterator", o = "@@iterator";
    }
    throw new TypeError("Object is not async iterable");
  }
  function AsyncFromSyncIterator(r) {
    function AsyncFromSyncIteratorContinuation(r) {
      if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object."));
      var n = r.done;
      return Promise.resolve(r.value).then(function (r) {
        return {
          value: r,
          done: n
        };
      });
    }
    return AsyncFromSyncIterator = function (r) {
      this.s = r, this.n = r.next;
    }, AsyncFromSyncIterator.prototype = {
      s: null,
      n: null,
      next: function () {
        return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
      },
      return: function (r) {
        var n = this.s.return;
        return void 0 === n ? Promise.resolve({
          value: r,
          done: !0
        }) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
      },
      throw: function (r) {
        var n = this.s.return;
        return void 0 === n ? Promise.reject(r) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
      }
    }, new AsyncFromSyncIterator(r);
  }
  function _awaitAsyncGenerator(e) {
    return new _OverloadYield(e, 0);
  }
  function _checkInRHS(e) {
    if (Object(e) !== e) throw TypeError("right-hand side of 'in' should be an object, got " + (null !== e ? typeof e : "null"));
    return e;
  }
  function _defineAccessor(e, r, n, t) {
    var c = {
      configurable: !0,
      enumerable: !0
    };
    return c[e] = t, Object.defineProperty(r, n, c);
  }
  function dispose_SuppressedError(r, e) {
    return "undefined" != typeof SuppressedError ? dispose_SuppressedError = SuppressedError : (dispose_SuppressedError = function (r, e) {
      this.suppressed = r, this.error = e, this.stack = new Error().stack;
    }, dispose_SuppressedError.prototype = Object.create(Error.prototype, {
      constructor: {
        value: dispose_SuppressedError,
        writable: !0,
        configurable: !0
      }
    })), new dispose_SuppressedError(r, e);
  }
  function _dispose(r, e, s) {
    function next() {
      for (; r.length > 0;) try {
        var o = r.pop(),
          p = o.d.call(o.v);
        if (o.a) return Promise.resolve(p).then(next, err);
      } catch (r) {
        return err(r);
      }
      if (s) throw e;
    }
    function err(r) {
      return e = s ? new dispose_SuppressedError(r, e) : r, s = !0, next();
    }
    return next();
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function _iterableToArrayLimitLoose(e, r) {
    var t = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
    if (null != t) {
      var o,
        l = [];
      for (t = t.call(e); e.length < r && !(o = t.next()).done;) l.push(o.value);
      return l;
    }
  }
  var REACT_ELEMENT_TYPE;
  function _jsx(e, r, E, l) {
    REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
    var o = e && e.defaultProps,
      n = arguments.length - 3;
    if (r || 0 === n || (r = {
      children: void 0
    }), 1 === n) r.children = l;else if (n > 1) {
      for (var t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3];
      r.children = t;
    }
    if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {});
    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: e,
      key: void 0 === E ? null : "" + E,
      ref: null,
      props: r,
      _owner: null
    };
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _regeneratorRuntime() {
    "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
    _regeneratorRuntime = function () {
      return e;
    };
    var t,
      e = {},
      r = Object.prototype,
      n = r.hasOwnProperty,
      o = Object.defineProperty || function (t, e, r) {
        t[e] = r.value;
      },
      i = "function" == typeof Symbol ? Symbol : {},
      a = i.iterator || "@@iterator",
      c = i.asyncIterator || "@@asyncIterator",
      u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
      return Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), t[e];
    }
    try {
      define({}, "");
    } catch (t) {
      define = function (t, e, r) {
        return t[e] = r;
      };
    }
    function wrap(t, e, r, n) {
      var i = e && e.prototype instanceof Generator ? e : Generator,
        a = Object.create(i.prototype),
        c = new Context(n || []);
      return o(a, "_invoke", {
        value: makeInvokeMethod(t, r, c)
      }), a;
    }
    function tryCatch(t, e, r) {
      try {
        return {
          type: "normal",
          arg: t.call(e, r)
        };
      } catch (t) {
        return {
          type: "throw",
          arg: t
        };
      }
    }
    e.wrap = wrap;
    var h = "suspendedStart",
      l = "suspendedYield",
      f = "executing",
      s = "completed",
      y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function () {
      return this;
    });
    var d = Object.getPrototypeOf,
      v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
      ["next", "throw", "return"].forEach(function (e) {
        define(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function AsyncIterator(t, e) {
      function invoke(r, o, i, a) {
        var c = tryCatch(t[r], t, o);
        if ("throw" !== c.type) {
          var u = c.arg,
            h = u.value;
          return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
            invoke("next", t, i, a);
          }, function (t) {
            invoke("throw", t, i, a);
          }) : e.resolve(h).then(function (t) {
            u.value = t, i(u);
          }, function (t) {
            return invoke("throw", t, i, a);
          });
        }
        a(c.arg);
      }
      var r;
      o(this, "_invoke", {
        value: function (t, n) {
          function callInvokeWithMethodAndArg() {
            return new e(function (e, r) {
              invoke(t, n, e, r);
            });
          }
          return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(e, r, n) {
      var o = h;
      return function (i, a) {
        if (o === f) throw new Error("Generator is already running");
        if (o === s) {
          if ("throw" === i) throw a;
          return {
            value: t,
            done: !0
          };
        }
        for (n.method = i, n.arg = a;;) {
          var c = n.delegate;
          if (c) {
            var u = maybeInvokeDelegate(c, n);
            if (u) {
              if (u === y) continue;
              return u;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
            if (o === h) throw o = s, n.arg;
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          o = f;
          var p = tryCatch(e, r, n);
          if ("normal" === p.type) {
            if (o = n.done ? s : l, p.arg === y) continue;
            return {
              value: p.arg,
              done: n.done
            };
          }
          "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
        }
      };
    }
    function maybeInvokeDelegate(e, r) {
      var n = r.method,
        o = e.iterator[n];
      if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
      var i = tryCatch(o, e.iterator, r.arg);
      if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
      var a = i.arg;
      return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
      var e = {
        tryLoc: t[0]
      };
      1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
      var e = t.completion || {};
      e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
      if (e || "" === e) {
        var r = e[a];
        if (r) return r.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            i = function next() {
              for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
              return next.value = t, next.done = !0, next;
            };
          return i.next = i;
        }
      }
      throw new TypeError(typeof e + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function (t) {
      return {
        __await: t
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
      return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
        return t.done ? t.value : a.next();
      });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
      return this;
    }), define(g, "toString", function () {
      return "[object Generator]";
    }), e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return r.reverse(), function next() {
        for (; r.length;) {
          var t = r.pop();
          if (t in e) return next.value = t, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, e.values = values, Context.prototype = {
      constructor: Context,
      reset: function (e) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      },
      stop: function () {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function (e) {
        if (this.done) throw e;
        var r = this;
        function handle(n, o) {
          return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ("root" === i.tryLoc) return handle("end");
          if (i.tryLoc <= this.prev) {
            var c = n.call(i, "catchLoc"),
              u = n.call(i, "finallyLoc");
            if (c && u) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            } else if (c) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            } else {
              if (!u) throw new Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function (t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
            var i = o;
            break;
          }
        }
        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
        var a = i ? i.completion : {};
        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
      },
      complete: function (t, e) {
        if ("throw" === t.type) throw t.arg;
        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
      },
      finish: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      catch: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              resetTryEntry(r);
            }
            return o;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (e, r, n) {
        return this.delegate = {
          iterator: values(e),
          resultName: r,
          nextLoc: n
        }, "next" === this.method && (this.arg = t), y;
      }
    }, e;
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _using(o, e, n) {
    if (null == e) return e;
    if ("object" != typeof e) throw new TypeError("using declarations can only be used with objects, null, or undefined.");
    if (n) var r = e[Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")];
    if (null == r && (r = e[Symbol.dispose || Symbol.for("Symbol.dispose")]), "function" != typeof r) throw new TypeError("Property [Symbol.dispose] is not a function.");
    return o.push({
      v: e,
      d: r,
      a: n
    }), e;
  }
  function _wrapRegExp() {
    _wrapRegExp = function (e, r) {
      return new BabelRegExp(e, void 0, r);
    };
    var e = RegExp.prototype,
      r = new WeakMap();
    function BabelRegExp(e, t, p) {
      var o = new RegExp(e, t);
      return r.set(o, p || r.get(e)), _setPrototypeOf(o, BabelRegExp.prototype);
    }
    function buildGroups(e, t) {
      var p = r.get(t);
      return Object.keys(p).reduce(function (r, t) {
        var o = p[t];
        if ("number" == typeof o) r[t] = e[o];else {
          for (var i = 0; void 0 === e[o[i]] && i + 1 < o.length;) i++;
          r[t] = e[o[i]];
        }
        return r;
      }, Object.create(null));
    }
    return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (r) {
      var t = e.exec.call(this, r);
      if (t) {
        t.groups = buildGroups(t, this);
        var p = t.indices;
        p && (p.groups = buildGroups(p, this));
      }
      return t;
    }, BabelRegExp.prototype[Symbol.replace] = function (t, p) {
      if ("string" == typeof p) {
        var o = r.get(this);
        return e[Symbol.replace].call(this, t, p.replace(/\$<([^>]+)>/g, function (e, r) {
          var t = o[r];
          return "$" + (Array.isArray(t) ? t.join("$") : t);
        }));
      }
      if ("function" == typeof p) {
        var i = this;
        return e[Symbol.replace].call(this, t, function () {
          var e = arguments;
          return "object" != typeof e[e.length - 1] && (e = [].slice.call(e)).push(buildGroups(e, i)), p.apply(this, e);
        });
      }
      return e[Symbol.replace].call(this, t, p);
    }, _wrapRegExp.apply(this, arguments);
  }
  function _AwaitValue(value) {
    this.wrapped = value;
  }
  function _wrapAsyncGenerator(fn) {
    return function () {
      return new _AsyncGenerator(fn.apply(this, arguments));
    };
  }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineEnumerableProperties(obj, descs) {
    for (var key in descs) {
      var desc = descs[key];
      desc.configurable = desc.enumerable = true;
      if ("value" in desc) desc.writable = true;
      Object.defineProperty(obj, key, desc);
    }
    if (Object.getOwnPropertySymbols) {
      var objectSymbols = Object.getOwnPropertySymbols(descs);
      for (var i = 0; i < objectSymbols.length; i++) {
        var sym = objectSymbols[i];
        var desc = descs[sym];
        desc.configurable = desc.enumerable = true;
        if ("value" in desc) desc.writable = true;
        Object.defineProperty(obj, sym, desc);
      }
    }
    return obj;
  }
  function _defaults(obj, defaults) {
    var keys = Object.getOwnPropertyNames(defaults);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = Object.getOwnPropertyDescriptor(defaults, key);
      if (value && value.configurable && obj[key] === undefined) {
        Object.defineProperty(obj, key, value);
      }
    }
    return obj;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? Object(arguments[i]) : {};
      var ownKeys = Object.keys(source);
      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }
      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }
    return target;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct.bind();
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }
    return _construct.apply(null, arguments);
  }
  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
        _cache.set(Class, Wrapper);
      }
      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
  }
  function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
      return !!right[Symbol.hasInstance](left);
    } else {
      return left instanceof right;
    }
  }
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function (nodeInterop) {
      return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
  }
  function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
      return {
        default: obj
      };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj.default = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function _newArrowCheck(innerThis, boundThis) {
    if (innerThis !== boundThis) {
      throw new TypeError("Cannot instantiate an arrow function");
    }
  }
  function _objectDestructuringEmpty(obj) {
    if (obj == null) throw new TypeError("Cannot destructure " + obj);
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }
  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }
    return object;
  }
  function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get.bind();
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }
        return desc.value;
      };
    }
    return _get.apply(this, arguments);
  }
  function set(target, property, value, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.set) {
      set = Reflect.set;
    } else {
      set = function set(target, property, value, receiver) {
        var base = _superPropBase(target, property);
        var desc;
        if (base) {
          desc = Object.getOwnPropertyDescriptor(base, property);
          if (desc.set) {
            desc.set.call(receiver, value);
            return true;
          } else if (!desc.writable) {
            return false;
          }
        }
        desc = Object.getOwnPropertyDescriptor(receiver, property);
        if (desc) {
          if (!desc.writable) {
            return false;
          }
          desc.value = value;
          Object.defineProperty(receiver, property, desc);
        } else {
          _defineProperty(receiver, property, value);
        }
        return true;
      };
    }
    return set(target, property, value, receiver);
  }
  function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);
    if (!s && isStrict) {
      throw new TypeError('failed to set property');
    }
    return value;
  }
  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }
  function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  function _readOnlyError(name) {
    throw new TypeError("\"" + name + "\" is read-only");
  }
  function _writeOnlyError(name) {
    throw new TypeError("\"" + name + "\" is write-only");
  }
  function _classNameTDZError(name) {
    throw new ReferenceError("Class \"" + name + "\" cannot be referenced in computed property keys.");
  }
  function _temporalUndefined() {}
  function _tdz(name) {
    throw new ReferenceError(name + " is not defined - temporal dead zone");
  }
  function _temporalRef(val, name) {
    return val === _temporalUndefined ? _tdz(name) : val;
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _slicedToArrayLoose(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimitLoose(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toArray(arr) {
    return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _maybeArrayLike(next, arr, i) {
    if (arr && !Array.isArray(arr) && typeof arr.length === "number") {
      var len = arr.length;
      return _arrayLikeToArray(arr, i !== void 0 && i < len ? i : len);
    }
    return next(arr, i);
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        var F = function () {};
        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true,
      didErr = false,
      err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }
  function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it) return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _skipFirstGeneratorNext(fn) {
    return function () {
      var it = fn.apply(this, arguments);
      it.next();
      return it;
    };
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.');
  }
  function _initializerDefineProperty(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object.keys(descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;
    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }
    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);
    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }
    if (desc.initializer === void 0) {
      Object.defineProperty(target, property, desc);
      desc = null;
    }
    return desc;
  }
  var id = 0;
  function _classPrivateFieldLooseKey(name) {
    return "__private_" + id++ + "_" + name;
  }
  function _classPrivateFieldLooseBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
      throw new TypeError("attempted to use private field on non-instance");
    }
    return receiver;
  }
  function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");
    return _classApplyDescriptorGet(receiver, descriptor);
  }
  function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");
    _classApplyDescriptorSet(receiver, descriptor, value);
    return value;
  }
  function _classPrivateFieldDestructureSet(receiver, privateMap) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");
    return _classApplyDescriptorDestructureSet(receiver, descriptor);
  }
  function _classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
  }
  function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
    _classCheckPrivateStaticAccess(receiver, classConstructor);
    _classCheckPrivateStaticFieldDescriptor(descriptor, "get");
    return _classApplyDescriptorGet(receiver, descriptor);
  }
  function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
    _classCheckPrivateStaticAccess(receiver, classConstructor);
    _classCheckPrivateStaticFieldDescriptor(descriptor, "set");
    _classApplyDescriptorSet(receiver, descriptor, value);
    return value;
  }
  function _classStaticPrivateMethodGet(receiver, classConstructor, method) {
    _classCheckPrivateStaticAccess(receiver, classConstructor);
    return method;
  }
  function _classStaticPrivateMethodSet() {
    throw new TypeError("attempted to set read only static private field");
  }
  function _classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }
    return descriptor.value;
  }
  function _classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) {
      descriptor.set.call(receiver, value);
    } else {
      if (!descriptor.writable) {
        throw new TypeError("attempted to set read only private field");
      }
      descriptor.value = value;
    }
  }
  function _classApplyDescriptorDestructureSet(receiver, descriptor) {
    if (descriptor.set) {
      if (!("__destrObj" in descriptor)) {
        descriptor.__destrObj = {
          set value(v) {
            descriptor.set.call(receiver, v);
          }
        };
      }
      return descriptor.__destrObj;
    } else {
      if (!descriptor.writable) {
        throw new TypeError("attempted to set read only private field");
      }
      return descriptor;
    }
  }
  function _classStaticPrivateFieldDestructureSet(receiver, classConstructor, descriptor) {
    _classCheckPrivateStaticAccess(receiver, classConstructor);
    _classCheckPrivateStaticFieldDescriptor(descriptor, "set");
    return _classApplyDescriptorDestructureSet(receiver, descriptor);
  }
  function _classCheckPrivateStaticAccess(receiver, classConstructor) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }
  }
  function _classCheckPrivateStaticFieldDescriptor(descriptor, action) {
    if (descriptor === undefined) {
      throw new TypeError("attempted to " + action + " private static field before its declaration");
    }
  }
  function _decorate(decorators, factory, superClass, mixins) {
    var api = _getDecoratorsApi();
    if (mixins) {
      for (var i = 0; i < mixins.length; i++) {
        api = mixins[i](api);
      }
    }
    var r = factory(function initialize(O) {
      api.initializeInstanceElements(O, decorated.elements);
    }, superClass);
    var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators);
    api.initializeClassElements(r.F, decorated.elements);
    return api.runClassFinishers(r.F, decorated.finishers);
  }
  function _getDecoratorsApi() {
    _getDecoratorsApi = function () {
      return api;
    };
    var api = {
      elementsDefinitionOrder: [["method"], ["field"]],
      initializeInstanceElements: function (O, elements) {
        ["method", "field"].forEach(function (kind) {
          elements.forEach(function (element) {
            if (element.kind === kind && element.placement === "own") {
              this.defineClassElement(O, element);
            }
          }, this);
        }, this);
      },
      initializeClassElements: function (F, elements) {
        var proto = F.prototype;
        ["method", "field"].forEach(function (kind) {
          elements.forEach(function (element) {
            var placement = element.placement;
            if (element.kind === kind && (placement === "static" || placement === "prototype")) {
              var receiver = placement === "static" ? F : proto;
              this.defineClassElement(receiver, element);
            }
          }, this);
        }, this);
      },
      defineClassElement: function (receiver, element) {
        var descriptor = element.descriptor;
        if (element.kind === "field") {
          var initializer = element.initializer;
          descriptor = {
            enumerable: descriptor.enumerable,
            writable: descriptor.writable,
            configurable: descriptor.configurable,
            value: initializer === void 0 ? void 0 : initializer.call(receiver)
          };
        }
        Object.defineProperty(receiver, element.key, descriptor);
      },
      decorateClass: function (elements, decorators) {
        var newElements = [];
        var finishers = [];
        var placements = {
          static: [],
          prototype: [],
          own: []
        };
        elements.forEach(function (element) {
          this.addElementPlacement(element, placements);
        }, this);
        elements.forEach(function (element) {
          if (!_hasDecorators(element)) return newElements.push(element);
          var elementFinishersExtras = this.decorateElement(element, placements);
          newElements.push(elementFinishersExtras.element);
          newElements.push.apply(newElements, elementFinishersExtras.extras);
          finishers.push.apply(finishers, elementFinishersExtras.finishers);
        }, this);
        if (!decorators) {
          return {
            elements: newElements,
            finishers: finishers
          };
        }
        var result = this.decorateConstructor(newElements, decorators);
        finishers.push.apply(finishers, result.finishers);
        result.finishers = finishers;
        return result;
      },
      addElementPlacement: function (element, placements, silent) {
        var keys = placements[element.placement];
        if (!silent && keys.indexOf(element.key) !== -1) {
          throw new TypeError("Duplicated element (" + element.key + ")");
        }
        keys.push(element.key);
      },
      decorateElement: function (element, placements) {
        var extras = [];
        var finishers = [];
        for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) {
          var keys = placements[element.placement];
          keys.splice(keys.indexOf(element.key), 1);
          var elementObject = this.fromElementDescriptor(element);
          var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject);
          element = elementFinisherExtras.element;
          this.addElementPlacement(element, placements);
          if (elementFinisherExtras.finisher) {
            finishers.push(elementFinisherExtras.finisher);
          }
          var newExtras = elementFinisherExtras.extras;
          if (newExtras) {
            for (var j = 0; j < newExtras.length; j++) {
              this.addElementPlacement(newExtras[j], placements);
            }
            extras.push.apply(extras, newExtras);
          }
        }
        return {
          element: element,
          finishers: finishers,
          extras: extras
        };
      },
      decorateConstructor: function (elements, decorators) {
        var finishers = [];
        for (var i = decorators.length - 1; i >= 0; i--) {
          var obj = this.fromClassDescriptor(elements);
          var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj);
          if (elementsAndFinisher.finisher !== undefined) {
            finishers.push(elementsAndFinisher.finisher);
          }
          if (elementsAndFinisher.elements !== undefined) {
            elements = elementsAndFinisher.elements;
            for (var j = 0; j < elements.length - 1; j++) {
              for (var k = j + 1; k < elements.length; k++) {
                if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) {
                  throw new TypeError("Duplicated element (" + elements[j].key + ")");
                }
              }
            }
          }
        }
        return {
          elements: elements,
          finishers: finishers
        };
      },
      fromElementDescriptor: function (element) {
        var obj = {
          kind: element.kind,
          key: element.key,
          placement: element.placement,
          descriptor: element.descriptor
        };
        var desc = {
          value: "Descriptor",
          configurable: true
        };
        Object.defineProperty(obj, Symbol.toStringTag, desc);
        if (element.kind === "field") obj.initializer = element.initializer;
        return obj;
      },
      toElementDescriptors: function (elementObjects) {
        if (elementObjects === undefined) return;
        return _toArray(elementObjects).map(function (elementObject) {
          var element = this.toElementDescriptor(elementObject);
          this.disallowProperty(elementObject, "finisher", "An element descriptor");
          this.disallowProperty(elementObject, "extras", "An element descriptor");
          return element;
        }, this);
      },
      toElementDescriptor: function (elementObject) {
        var kind = String(elementObject.kind);
        if (kind !== "method" && kind !== "field") {
          throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"');
        }
        var key = _toPropertyKey(elementObject.key);
        var placement = String(elementObject.placement);
        if (placement !== "static" && placement !== "prototype" && placement !== "own") {
          throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"');
        }
        var descriptor = elementObject.descriptor;
        this.disallowProperty(elementObject, "elements", "An element descriptor");
        var element = {
          kind: kind,
          key: key,
          placement: placement,
          descriptor: Object.assign({}, descriptor)
        };
        if (kind !== "field") {
          this.disallowProperty(elementObject, "initializer", "A method descriptor");
        } else {
          this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor");
          this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor");
          this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor");
          element.initializer = elementObject.initializer;
        }
        return element;
      },
      toElementFinisherExtras: function (elementObject) {
        var element = this.toElementDescriptor(elementObject);
        var finisher = _optionalCallableProperty(elementObject, "finisher");
        var extras = this.toElementDescriptors(elementObject.extras);
        return {
          element: element,
          finisher: finisher,
          extras: extras
        };
      },
      fromClassDescriptor: function (elements) {
        var obj = {
          kind: "class",
          elements: elements.map(this.fromElementDescriptor, this)
        };
        var desc = {
          value: "Descriptor",
          configurable: true
        };
        Object.defineProperty(obj, Symbol.toStringTag, desc);
        return obj;
      },
      toClassDescriptor: function (obj) {
        var kind = String(obj.kind);
        if (kind !== "class") {
          throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"');
        }
        this.disallowProperty(obj, "key", "A class descriptor");
        this.disallowProperty(obj, "placement", "A class descriptor");
        this.disallowProperty(obj, "descriptor", "A class descriptor");
        this.disallowProperty(obj, "initializer", "A class descriptor");
        this.disallowProperty(obj, "extras", "A class descriptor");
        var finisher = _optionalCallableProperty(obj, "finisher");
        var elements = this.toElementDescriptors(obj.elements);
        return {
          elements: elements,
          finisher: finisher
        };
      },
      runClassFinishers: function (constructor, finishers) {
        for (var i = 0; i < finishers.length; i++) {
          var newConstructor = (0, finishers[i])(constructor);
          if (newConstructor !== undefined) {
            if (typeof newConstructor !== "function") {
              throw new TypeError("Finishers must return a constructor.");
            }
            constructor = newConstructor;
          }
        }
        return constructor;
      },
      disallowProperty: function (obj, name, objectType) {
        if (obj[name] !== undefined) {
          throw new TypeError(objectType + " can't have a ." + name + " property.");
        }
      }
    };
    return api;
  }
  function _createElementDescriptor(def) {
    var key = _toPropertyKey(def.key);
    var descriptor;
    if (def.kind === "method") {
      descriptor = {
        value: def.value,
        writable: true,
        configurable: true,
        enumerable: false
      };
    } else if (def.kind === "get") {
      descriptor = {
        get: def.value,
        configurable: true,
        enumerable: false
      };
    } else if (def.kind === "set") {
      descriptor = {
        set: def.value,
        configurable: true,
        enumerable: false
      };
    } else if (def.kind === "field") {
      descriptor = {
        configurable: true,
        writable: true,
        enumerable: true
      };
    }
    var element = {
      kind: def.kind === "field" ? "field" : "method",
      key: key,
      placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype",
      descriptor: descriptor
    };
    if (def.decorators) element.decorators = def.decorators;
    if (def.kind === "field") element.initializer = def.value;
    return element;
  }
  function _coalesceGetterSetter(element, other) {
    if (element.descriptor.get !== undefined) {
      other.descriptor.get = element.descriptor.get;
    } else {
      other.descriptor.set = element.descriptor.set;
    }
  }
  function _coalesceClassElements(elements) {
    var newElements = [];
    var isSameElement = function (other) {
      return other.kind === "method" && other.key === element.key && other.placement === element.placement;
    };
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var other;
      if (element.kind === "method" && (other = newElements.find(isSameElement))) {
        if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) {
          if (_hasDecorators(element) || _hasDecorators(other)) {
            throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated.");
          }
          other.descriptor = element.descriptor;
        } else {
          if (_hasDecorators(element)) {
            if (_hasDecorators(other)) {
              throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ").");
            }
            other.decorators = element.decorators;
          }
          _coalesceGetterSetter(element, other);
        }
      } else {
        newElements.push(element);
      }
    }
    return newElements;
  }
  function _hasDecorators(element) {
    return element.decorators && element.decorators.length;
  }
  function _isDataDescriptor(desc) {
    return desc !== undefined && !(desc.value === undefined && desc.writable === undefined);
  }
  function _optionalCallableProperty(obj, name) {
    var value = obj[name];
    if (value !== undefined && typeof value !== "function") {
      throw new TypeError("Expected '" + name + "' to be a function");
    }
    return value;
  }
  function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
  }
  function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
      throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
  }
  function _classPrivateFieldInitSpec(obj, privateMap, value) {
    _checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
  }
  function _classPrivateMethodInitSpec(obj, privateSet) {
    _checkPrivateRedeclaration(obj, privateSet);
    privateSet.add(obj);
  }
  function _classPrivateMethodSet() {
    throw new TypeError("attempted to reassign private method");
  }
  function _identity(x) {
    return x;
  }

  // Numbers represent type - 
  // 1:float 2:vec2 3:vec3 4:vec4

  var geometryFunctions = {
    sphere: {
      args: [1]
    },
    line: {
      args: [3, 3, 1]
    },
    cone: {
      args: [2]
    },
    roundCone: {
      args: [3, 3, 1, 1]
    },
    plane: {
      args: [1, 1, 1, 1]
    }
  };
  var mathFunctions = {
    nsin: {
      args: [1],
      ret: 1
    },
    ncos: {
      args: [1],
      ret: 1
    },
    round: {
      args: [1],
      ret: 1
    },
    hsv2rgb: {
      args: [3],
      ret: 3
    },
    rgb2hsv: {
      args: [3],
      ret: 3
    },
    rotateVec: {
      args: [3, 3, 1],
      ret: 3
    },
    toSpherical: {
      args: [3],
      ret: 3
    },
    fromSpherical: {
      args: [3],
      ret: 3
    },
    getRayDirection: {
      args: [],
      ret: 3
    },
    osc: {
      args: [1],
      ret: 1
    },
    _hash33: {
      args: [3],
      ret: 3
    },
    _hash13: {
      args: [3],
      ret: 1
    },
    noise: {
      args: [3],
      ret: 1
    },
    fractalNoise: {
      args: [3],
      ret: 1
    },
    sphericalDistribution: {
      args: [3, 1],
      ret: 4
    }
  };

  // these all have a single input/output and are overloaded for 
  // all types so a list of names is all we need to generate them
  var glslBuiltInOneToOne = ["sin", "cos", "tan", "asin", "acos", "exp", "log", "exp2", "log2", "sqrt", "inversesqrt", "abs", "sign", "floor", "ceil", "fract"];

  // need better overloading system
  var glslBuiltInOther = {
    // overload pow somehow?
    // pow: { args:[1,1], ret:1 },
    mod: {
      args: [1, 1],
      ret: 1
    },
    min: {
      args: [1, 1],
      ret: 1
    },
    max: {
      args: [1, 1],
      ret: 1
    },
    atan: {
      args: [1, 1],
      ret: 1
    },
    clamp: {
      args: [1, 1, 1],
      ret: 1
    },
    step: {
      args: [1, 1],
      ret: 1
    },
    smoothstep: {
      args: [1, 1, 1],
      ret: 1
    },
    // also overload length for vec3 and vec2?
    length: {
      args: [3],
      ret: 1
    },
    distance: {
      args: [3, 3],
      ret: 1
    },
    dot: {
      args: [3, 3],
      ret: 1
    },
    cross: {
      args: [3, 3],
      ret: 3
    },
    normalize: {
      args: [3],
      ret: 3
    },
    reflect: {
      args: [3, 3],
      ret: 3
    },
    refract: {
      args: [3, 3],
      ret: 3
    }
  };

  // let arg = {
  //     'mix' : (a, b, c) => (a.dim === b.dim && (c.dim === 1 || c.dim === a.dim))? a.dim: -1,
  // };

  function convertFunctionToString(source) {
    if (typeof source === "function") {
      source = source.toString();
      return source.slice(source.indexOf("{") + 1, source.lastIndexOf("}"));
    } else if (!(typeof source === "string")) {
      throw "your Shader Park code requires the source code to be a function, or a string";
    }
    return source;
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function getDefaultExportFromNamespaceIfPresent (n) {
  	return n && Object.prototype.hasOwnProperty.call(n, 'default') ? n['default'] : n;
  }

  function getDefaultExportFromNamespaceIfNotNamed (n) {
  	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
  }

  function getAugmentedNamespace(n) {
    if (n.__esModule) return n;
    var f = n.default;
  	if (typeof f == "function") {
  		var a = function a () {
  			if (this instanceof a) {
          return Reflect.construct(f, arguments, this.constructor);
  			}
  			return f.apply(this, arguments);
  		};
  		a.prototype = f.prototype;
    } else a = {};
    Object.defineProperty(a, '__esModule', {value: true});
  	Object.keys(n).forEach(function (k) {
  		var d = Object.getOwnPropertyDescriptor(n, k);
  		Object.defineProperty(a, k, d.get ? d : {
  			enumerable: true,
  			get: function () {
  				return n[k];
  			}
  		});
  	});
  	return a;
  }

  function commonjsRequire(path) {
  	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
  }

  var glslParser$1 = {exports: {}};

  var glslParser = glslParser$1.exports;
  (function (module, exports) {
    // Adapted from https://github.com/cimaron/cwebgl/blob/master/external/glsl2js/glsl.js

    /*
    Copyright (c) 2011 Cimaron Shanahan
    	Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    the Software, and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:
    	The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
    FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
    COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
    IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    */

    (function () {
      /*
      Copyright (c) 2011 Cimaron Shanahan
      
      Permission is hereby granted, free of charge, to any person obtaining a copy of
      this software and associated documentation files (the "Software"), to deal in
      the Software without restriction, including without limitation the rights to
      use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
      the Software, and to permit persons to whom the Software is furnished to do so,
      subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
      FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
      COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
      IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
      CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      */

      var glsl = {
        runParse: function runParse(src, options) {
          var state, result, irs;
          state = new GlslState(options);
          state.setSource(src);

          //Preprocess
          result = this.preprocessor.process(state);

          //Parse into AST
          if (result) {
            result = this.parser.parse(state);
          }

          /*
          //Generate IR
          if (result) {
          result = this.generate(state);
          }
          */

          if (result) {
            state.status = true;
          }
          return state;
        },
        /**
         * Compilation targets
         */
        target: {
          fragment: 0,
          'x-fragment': 0,
          'x-shader/x-fragment': 0,
          vertex: 1,
          'x-vertex': 1,
          'x-shader/x-vertex': 1
        }
      };

      // Copyright Joyent, Inc. and other Node contributors.
      //
      // Permission is hereby granted, free of charge, to any person obtaining a
      // copy of this software and associated documentation files (the
      // "Software"), to deal in the Software without restriction, including
      // without limitation the rights to use, copy, modify, merge, publish,
      // distribute, sublicense, and/or sell copies of the Software, and to permit
      // persons to whom the Software is furnished to do so, subject to the
      // following conditions:
      //
      // The above copyright notice and this permission notice shall be included
      // in all copies or substantial portions of the Software.
      //
      // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
      // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
      // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
      // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
      // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
      // USE OR OTHER DEALINGS IN THE SOFTWARE.

      /**
       * Select node.js util functions
       */

      var util = {};
      (function (exports) {
        var formatRegExp = /%[sdj%]/g;
        exports.format = function (f) {
          if (!isString(f)) {
            var objects = [];
            for (var i = 0; i < arguments.length; i++) {
              objects.push(inspect(arguments[i]));
            }
            return objects.join(' ');
          }
          var i = 1;
          var args = arguments;
          var len = args.length;
          var str = String(f).replace(formatRegExp, function (x) {
            if (x === '%%') return '%';
            if (i >= len) return x;
            switch (x) {
              case '%s':
                return String(args[i++]);
              case '%d':
                return Number(args[i++]);
              case '%j':
                try {
                  return JSON.stringify(args[i++]);
                } catch (_) {
                  return '[Circular]';
                }
              default:
                return x;
            }
          });
          for (var x = args[i]; i < len; x = args[++i]) {
            //if (isNull(x) || !isObject(x)) {
            str += ' ' + x;
            //} else {
            //  str += ' ' + inspect(x);
            //}
          }

          return str;
        };
        function isString(arg) {
          return typeof arg === 'string';
        }
        exports.isString = isString;

        /**
         * Inherit the prototype methods from one constructor into another.
         *
         * The Function.prototype.inherits from lang.js rewritten as a standalone
         * function (not on Function.prototype). NOTE: If this file is to be loaded
         * during bootstrapping this function needs to be rewritten using some native
         * functions as prototype setup using normal JavaScript does not work as
         * expected during bootstrapping (see mirror.js in r114903).
         *
         * @param {function} ctor Constructor function which needs to inherit the
         * prototype.
         * @param {function} superCtor Constructor function to inherit prototype from.
         */
        exports.inherits = function (ctor, superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        };
      })(util);

      /*
      Copyright (c) 2014 Cimaron Shanahan
      
      Permission is hereby granted, free of charge, to any person obtaining a copy of
      this software and associated documentation files (the "Software"), to deal in
      the Software without restriction, including without limitation the rights to
      use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
      the Software, and to permit persons to whom the Software is furnished to do so,
      subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
      FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
      COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
      IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
      CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      */

      function GlslState(options) {
        var i;
        this.options = {
          target: 0,
          language_version: 100,
          opt: {
            fold_constants: true
          }
        };
        for (i in options) {
          this.options[i] = options[i];
        }
        this.symbols = new SymbolTable();
        symbol_table_init(this.symbols, options.target);
        this.status = false;
        this.translation_unit = "";
        this.ast = [];
        this.ir = null;
        this.errors = [];
        this.warnings = [];
      }
      proto = GlslState.prototype = {};

      /**
       * Get identifier type
       *
       * @param   object   state   GLSL state
       * @param   string   name    Identifier name
       * Add error to state
       *
       * @return  string
       * @param   string   msg      Message
       * @param   int      line     Message
       * @param   int      column   Message
       */
      proto.classify_identifier = function (state, name) {
        if (this.symbols.get_variable(name) || this.symbols.get_function(name)) {
          return 'IDENTIFIER';
        } else if (this.symbols.get_type(name)) {
          return 'TYPE_IDENTIFIER';
        } else {
          return 'NEW_IDENTIFIER';
        }
      };
      proto.setSource = function (src) {
        this.src = src;
      };
      proto.getSource = function () {
        return this.src;
      };
      proto.setTranslationUnit = function (tu) {
        this.translation_unit = tu;
      };
      proto.getTranslationUnit = function () {
        return this.translation_unit;
      };
      proto.addAstNode = function (node) {
        this.ast.push(node);
      };
      proto.getAst = function () {
        return this.ast;
      };
      proto.setIR = function (ir) {
        this.ir = ir;
      };
      proto.getIR = function () {
        return this.ir;
      };
      proto.getStatus = function () {
        return this.status;
      };

      /**
       * Add error to state
       *
       * @param   string   msg      Message
       * @param   int      line     Message
       * @param   int      column   Message
       */
      proto.addError = function (msg, line, column) {
        var err;
        if (!line && !column) {
          this.errors.push(msg);
          return;
        }
        err = util.format("%s at line %s, column %s", msg, line, column);
        this.errors.push(err);
      };

      /**
       * Add warning to state
       *
       * @param   string   msg      Message
       * @param   int      line     Message
       * @param   int      column   Message
       */
      proto.addWarning = function (msg, line, column) {
        var warn;
        if (!line && !column) {
          this.warnings.push(msg);
          return;
        }
        warn = util.format("%s at line %s, column %s", msg, line, column);
        this.warnings.push(warn);
      };

      /**
       * Get compile errors
       *
       * @return  mixed
       */
      proto.getErrors = function () {
        return this.errors;
      };

      /**
       * Get compile errors
       *
       * @return  mixed
       */
      proto.getWarnings = function () {
        return this.warnings;
      };

      /*
      Copyright (c) 2014 Cimaron Shanahan
      
      Permission is hereby granted, free of charge, to any person obtaining a copy of
      this software and associated documentation files (the "Software"), to deal in
      the Software without restriction, including without limitation the rights to
      use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
      the Software, and to permit persons to whom the Software is furnished to do so,
      subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
      FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
      COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
      IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
      CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      */

      /**
       * Preprocessor Class
       */
      function Preprocessor() {}
      Preprocessor.modules = {};
      var proto = Preprocessor.prototype;
      proto.process = function (state) {
        var m,
          out = state.getSource();
        for (m in Preprocessor.modules) {
          try {
            out = Preprocessor.modules[m].process(out);
          } catch (e) {
            state.addError(e.message, e.lineNumber, e.columnNumber);
            return false;
          }
        }
        state.setTranslationUnit(out);
        return true;
      };
      glsl.preprocessor = new Preprocessor();

      /*
      Copyright (c) 2014 Cimaron Shanahan
      
      Permission is hereby granted, free of charge, to any person obtaining a copy of
      this software and associated documentation files (the "Software"), to deal in
      the Software without restriction, including without limitation the rights to
      use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
      the Software, and to permit persons to whom the Software is furnished to do so,
      subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
      FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
      COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
      IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
      CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      */

      Preprocessor.modules.comments = {
        process: function process(src) {
          var i,
            chr,
            la,
            out = "",
            line = 1,
            in_single = 0,
            in_multi = 0;
          for (i = 0; i < src.length; i++) {
            chr = src.substr(i, 1);
            la = src.substr(i + 1, 1);

            //Enter single line comment
            if (chr == '/' && la == '/' && !in_single && !in_multi) {
              in_single = line;
              i++;
              continue;
            }

            //Exit single line comment
            if (chr == "\n" && in_single) {
              in_single = 0;
            }

            //Enter multi line comment
            if (chr == '/' && la == '*' && !in_multi && !in_single) {
              in_multi = line;
              i++;
              continue;
            }

            //Exit multi line comment
            if (chr == '*' && la == '/' && in_multi) {
              //Treat single line multi-comment as space
              if (in_multi == line) {
                out += " ";
              }
              in_multi = 0;
              i++;
              continue;
            }

            //Newlines are preserved
            if (!in_multi && !in_single || chr == "\n") {
              out += chr;
              line++;
            }
          }
          return out;
        }
      };

      /*
      Copyright (c) 2014 Cimaron Shanahan
      
      Permission is hereby granted, free of charge, to any person obtaining a copy of
      this software and associated documentation files (the "Software"), to deal in
      the Software without restriction, including without limitation the rights to
      use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
      the Software, and to permit persons to whom the Software is furnished to do so,
      subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
      FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
      COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
      IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
      CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      */

      Preprocessor.modules.directives = {
        state: {
          lines: [],
          defines: {}
        },
        process: function process(src) {
          var i, l;
          this.state.lines = src.split("\n");
          this.state.defines = {
            GL_ES: '1',
            __FILE__: '0',
            __LINE__: '0',
            __VERSION__: '300'
          };
          this.state.cond_stack = [];
          i = 0;
          l = this.state.lines.length;
          while (i < l) {
            this.state.lines[i] = this.processLine(this.state.lines[i], i);
            i++;
          }
          return this.state.lines.join("\n");
        },
        processLine: function processLine(line, i) {
          var d, matches, raw, e, sub, cond;
          matches = line.match(/^([ \t]*)#(.*)$/);
          if (!matches) {
            if (this.state.cond_stack.length != 0 && !this.state.cond_stack.slice(-1)[0]) {
              return "";
            }
            line = this.processDefines(line, i);
            return line;
          }
          raw = matches[2];
          if (raw.match(/^\s*$/)) {
            return "";
          }
          var lmatches = raw.split(/\s+/);
          try {
            switch (lmatches[0]) {
              case 'define':
              case 'undef':
              case 'ifdef':
              case 'endif':
                this[lmatches[0]](line, lmatches);
                return "";
            }
            throw new Error("Invalid directive");
          } catch (e) {
            e.lineNumber = i + 1;
            e.columnNumber = matches[1].length + 1;
            throw e;
          }
        },
        processDefines: function processDefines(line, i) {
          this.state.defines.__LINE__ = i + 1;
          for (var d in this.state.defines) {
            //easy global replace
            line = line.split(d).join(this.state.defines[d]);
          }
          return line;
        },
        define: function define(line, matches) {
          if (matches.length <= 1 || matches.length > 3) {
            throw new Error("Syntax error in #define");
          }
          this.state.defines[matches[1]] = matches[2] || "";
        },
        undef: function undef(line, matches) {
          if (matches.length != 2) {
            throw new Error("Syntax error in #undef");
          }
          delete this.state.defines[matches[1]];
        },
        ifdef: function ifdef(line, matches) {
          var def;
          def = !!this.state.defines[matches[1]];
          this.state.cond_stack.push(def);
        },
        endif: function endif(line, matches) {
          if (this.state.cond_stack.length) {
            this.state.cond_stack.pop();
          } else {
            throw new Error("unmatched #endif");
          }
        }
      };

      /*
      Copyright (c) 2011 Cimaron Shanahan
      
      Permission is hereby granted, free of charge, to any person obtaining a copy of
      this software and associated documentation files (the "Software"), to deal in
      the Software without restriction, including without limitation the rights to
      use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
      the Software, and to permit persons to whom the Software is furnished to do so,
      subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
      FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
      COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
      IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
      CONNECTION WITH THE SOFTWARE OR THE USE		 OR OTHER DEALINGS IN THE SOFTWARE.
      */

      function Type(name, size, slots, base) {
        this.name = name;
        this.size = size;
        this.slots = slots;
        this.swizzle = size / slots != 4 ? "xyzw".slice(0, size / slots) : "";
        this.base = base || name;
      }

      /**
       * Do a cast on a constant
       *
       * @param   string   val    Value to cast
       * @param   string   from   From type
       * @param   string   to     To type
       *
       * @return  string
       */
      Type.castTo = function (val, from, to) {
        var f32;
        switch (to) {
          case 'int':
            return "" + parseInt(val);
          case 'float':
            //Should we keep maximum precision, or use the following to force to 32bit precision??
            /*
            f32 = new Float32Array(1);
            f32[0] = parseFloat(val);
            return "" + f32[0];
            */
            return "" + parseFloat(val);
          case 'bool':
            return parseFloat(val) ? "1" : "0";
        }
        return val;
      };

      /**
       * Determine if can cast from one type to another
       *
       * @param   string   from   From type
       * @param   string   to     To type
       *
       * @return  bool
       */
      Type.canCast = function (from, to) {
        var t1, t2;
        t1 = types[from];
        t2 = types[to];
        return t1.size === 1 && t2.size === 1;
      };
      var types = {
        _void: new Type("void", 1, 1),
        bool: new Type("bool", 1, 1),
        int: new Type("int", 1, 1),
        float: new Type("float", 1, 1),
        vec2: new Type("vec2", 2, 1, 'float'),
        vec3: new Type("vec3", 3, 1, 'float'),
        vec4: new Type("vec4", 4, 1, 'float'),
        bvec2: new Type("bvec2", 2, 1, 'bool'),
        bvec3: new Type("bvec3", 3, 1, 'bool'),
        bvec4: new Type("bvec4", 4, 1, 'bool'),
        ivec2: new Type("ivec2", 2, 1, 'int'),
        ivec3: new Type("ivec3", 3, 1, 'int'),
        ivec4: new Type("ivec4", 4, 1, 'int'),
        mat2: new Type("mat2", 4, 2, 'float'),
        mat3: new Type("mat3", 9, 3, 'float'),
        mat4: new Type("mat4", 16, 4, 'float'),
        sampler2D: new Type("sampler2D", 1, 1),
        samplerCube: new Type("samplerCube", 1, 1)
      };

      //Compatibility
      types['void'] = types._void;

      /*
      Copyright (c) 2011 Cimaron Shanahan
      
      Permission is hereby granted, free of charge, to any person obtaining a copy of
      this software and associated documentation files (the "Software"), to deal in
      the Software without restriction, including without limitation the rights to
      use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
      the Software, and to permit persons to whom the Software is furnished to do so,
      subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
      FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
      COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
      IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
      CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      */

      /**
       * SymbolTableEntry constructor
       */
      function SymbolTableEntry(name, typedef) {
        this.depth = null;
        this.typedef = typedef;

        //Variable name
        this.name = name;

        //Type
        this.type = null;

        //Base type (if array)
        this.base_type = null;

        //Function definition
        this.definition = [];

        //Qualifier
        this.qualifier = null;

        //IR name
        this.out = name;

        //Constant value
        this.constant = null;

        //Array size
        this.size = null;

        //Temp vars for IR generation
        this.code = null;
        this.Ast = null;
      }
      SymbolTableEntry.typedef = {
        variable: 0,
        func: 1,
        type: 2
      };
      SymbolTableEntry.prototype.getType = function () {
        return types[this.type];
      };

      /**
       * symbol_table constructor
       */
      function SymbolTable() {
        this.table = {};
        this.depth = 0;
      }
      SymbolTable.prototype = {};
      var proto = SymbolTable.prototype;

      /**
       * 
       */
      proto.push_scope = function () {
        this.depth++;
      };

      /**
       * 
       */
      proto.pop_scope = function () {
        var n, t;
        for (n in this.table) {
          if (this.table.hasOwnProperty(n)) {
            t = this.table[n];
            while (t[0] && t[0].depth === this.depth) {
              t.splice(0, 1);
            }
            if (t.length === 0) {
              delete this.table[n];
            }
          }
        }
        this.depth--;
      };

      /**
       * 
       */
      proto.name_declared_this_scope = function (name) {
        var e = this.get_entry(name);
        return e && e.depth === this.depth;
      };

      /**
       * 
       */
      proto.add_variable = function (name, type) {
        var entry = new SymbolTableEntry(name, SymbolTableEntry.typedef.variable);
        entry.type = type;
        return this._add_entry(entry);
      };

      /**
       * 
       */
      proto.add_type = function (name, t) {
        var entry = new SymbolTableEntry(name, SymbolTableEntry.typedef.type);
        entry.definition = t;
        return this._add_entry(entry);
      };

      /**
       * 
       */
      proto.add_function = function (name, type, def) {
        var entry;
        entry = new SymbolTableEntry(name, SymbolTableEntry.typedef.func);
        entry.type = type;
        if (def) {
          entry.definition = def;
        }
        return this._add_entry(entry);
      };

      /**
       * 
       */
      proto.get_variable = function (name) {
        var entry = this.get_entry(name, SymbolTableEntry.typedef.variable);
        return entry;
      };

      /**
       * 
       */
      proto.get_type = function (name) {
        var entry = this.get_entry(name, SymbolTableEntry.typedef.type);
        return entry;
      };

      /**
       * 
       */
      proto.get_function = function (name, def) {
        var entry = this.get_entry(name, SymbolTableEntry.typedef.func, def);
        return entry;
      };

      /**
       * @protected
       */
      proto._match_definition = function (def, entry) {
        var i;
        if (!def) {
          return true;
        }
        if (def.length !== entry.length) {
          return false;
        }
        for (i = 0; i < def.length; i++) {
          if (def[i] !== entry[i]) {
            return false;
          }
        }
        return true;
      };

      /**
       * @protected
       */
      proto._add_entry = function (entry) {
        if (!this.table[entry.name]) {
          this.table[entry.name] = [];
        }
        this.table[entry.name].splice(0, 0, entry);
        entry.depth = this.depth;
        return entry;
      };

      /**
       * @protected
       */
      proto.get_entry = function (name, typedef, def) {
        var t, i, entry;
        t = this.table[name] || [];

        //Look for 'void' instead of empty definition list
        if (def && def.length == 0) {
          def = ["void"];
        }
        for (i = 0; i < t.length; i++) {
          entry = t[i];

          //Not type of variable we're looking for
          if (entry.typedef !== typedef) {
            continue;
          }

          //Normal variable
          if (typedef !== SymbolTableEntry.typedef.func) {
            return entry;
          }

          //Match any function definition
          if (!def) {
            return entry;
          }

          //Match specific function definition
          if (def.join(',') === entry.definition.join(',')) {
            return entry;
          }
        }
        return null;
      };

      /*
      Copyright (c) 2011 Cimaron Shanahan
      
      Permission is hereby granted, free of charge, to any person obtaining a copy of
      this software and associated documentation files (the "Software"), to deal in
      the Software without restriction, including without limitation the rights to
      use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
      the Software, and to permit persons to whom the Software is furnished to do so,
      subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
      FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
      COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
      IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
      CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      */

      /**
       * Base class of all abstract syntax tree nodes
       */
      function AstNode() {
        //public:
        this.location = {
          first_line: 0,
          first_column: 0,
          last_line: 0,
          last_column: 0
        };

        //The following are used during IR generation
        this.Dest = null;
        this.Type = null;
        this.Const = false;
      }
      var proto = AstNode.prototype;

      //public:
      proto.getLocation = function () {
        return this.location;
      };
      proto.setLocation = function (loc) {
        this.location.first_line = loc.first_line;
        this.location.first_column = loc.first_column;
        this.location.last_line = loc.last_line;
        this.location.last_column = loc.last_column;
      };

      /**
       * Return string representation of node
       *
       * @return  string
       */
      proto.toString = function () {
        return this.constructor.name;
      };
      proto.ir = function (state, irs) {
        //throw new Error("Missing ir generator for node of type " + this.constructor.name);
      };

      //inverse of operators
      var ast_operators = ["=", "POS", "NEG", "+", "-", "*", "/", "%", "<<", ">>", "<", ">", "<=", ">=", "==", "!=", "&", "^", "|", "~", "&&", "^^", "||", "!", "*=", "/=", "%=", "+=", "-=", "<<=", ">>=", "&=", "^=", "|=", "?:", "++x", "--x", "x++", "x--", ".", "[]", "()", "ident", "float", "int", "bool"];
      var ast_precision = {
        none: 0,
        highp: 1,
        mediump: 2,
        lowp: 3
      };

      /**
       * AST Type Specifier Class
       */
      function AstTypeSpecifier(specifier) {
        AstNode.apply(this);
        this.type_specifier = null;
        this.type_name = null;
        this.structure = null;
        this.is_array = 0;
        this.array_size = null;
        this.precision = 2;
        this.is_precision_statement = null;
        if (AstTypeSpecifier[_typeof(specifier)]) {
          AstTypeSpecifier[_typeof(specifier)].call(this, specifier);
        }
      }
      util.inherits(AstTypeSpecifier, AstNode);
      proto = AstTypeSpecifier.prototype;

      //overloaded constructors
      AstTypeSpecifier.number = function (specifier) {
        this.type_specifier = specifier;
        this.precision = ast_precision.none;
        this.is_precision_statement = false;
        this.type_name = types[specifier].name;
      };
      AstTypeSpecifier.string = function (name) {
        this.type_specifier = types[name];
        this.type_name = name;
        this.is_array = false;
        this.precision = ast_precision.none;
        this.is_precision_statement = false;
      };
      AstTypeSpecifier.object = function (s) {
        this.type_specifier = types.struct;
        this.type_name = s.name;
        this.structure = s;
        this.is_array = false;
        this.precision = ast_precision.none;
        this.is_precision_statement = false;
      };

      /**
       * Return string representation of node
       *
       * @return  string
       */
      proto.toString = function () {
        var i, prec;
        if (this.is_precision_statement) {
          for (i in ast_precision) {
            if (ast_precision.hasOwnProperty(i) && ast_precision[i] === this.precision) {
              prec = i;
              break;
            }
          }
          return util.format("precision %s %s;\n", prec, this.type_name);
        }
        return (this.type_specifier === types.struct ? this.structure : this.type_name) + (this.is_array ? util.format("[%s]", this.array_size || "") : "");
      };

      /**
       * AST Function Class
       */
      function AstFunction() {
        AstNode.apply(this);
        this.return_type = null;
        this.identifier = null;
        this.parameters = [];
        this.entry = null;
      }
      util.inherits(AstFunction, AstNode);
      proto = AstFunction.prototype;

      /**
       * Return string representation of node
       *
       * @return  string
       */
      proto.toString = function () {
        return util.format("%s %s(%s)", this.return_type, this.identifier, this.parameters.join(", "));
      };

      /**
       * AST Expression Class
       */
      function AstExpression(oper, ex0, ex1, ex2) {
        AstNode.apply(this);
        this.oper = oper;
        this.grouped = false;
        this.subexpressions = [null, null, null];
        this.primary_expression = {};
        this.expressions = [];
        if (ast_operators.indexOf(this.oper) === -1) {
          this.oper = 'ident';
          this.primary_expression.identifier = oper;
        } else {
          this.subexpressions[0] = ex0;
          this.subexpressions[1] = ex1;
          this.subexpressions[2] = ex2;
        }
      }
      util.inherits(AstExpression, AstNode);
      proto = AstExpression.prototype;

      /**
       * Return string representation of node
       *
       * @return  string
       */
      proto.toString = function () {
        var output;
        switch (this.oper) {
          case '=':
          case '+':
          case '-':
          case '*':
          case '/':
          case '%':
          case "<<":
          case ">>":
          case "<":
          case ">":
          case "<=":
          case ">=":
          case "==":
          case "!=":
          case "&":
          case "^":
          case "|":
          case "~":
          case "&&":
          case "^^":
          case "||":
          case '*=':
          case '/=':
          case '%=':
          case '+=':
          case '-=':
          case '<<=':
          case '>>=':
          case '&=':
          case '^=':
          case '|=':
            output = util.format("%s %s %s", this.subexpressions[0], this.oper, this.subexpressions[1]);
            break;
          case '.':
            output = util.format("%s.%s", this.subexpressions[0], this.primary_expression.identifier);
            break;
          case 'POS':
            output = util.format("+%s", this.subexpressions[0]);
            break;
          case 'NEG':
            output = util.format("-%s", this.subexpressions[0]);
            break;
          case '~':
          case '!':
            output = util.format("%s%s", this.oper, this.subexpressions[0]);
            break;
          case '++x':
          case '--x':
            output = util.format("%s%s", this.oper.replace('x', ''), this.subexpressions[0]);
            break;
          case 'x++':
          case 'x--':
            output = util.format("%s%s", this.subexpressions[0], this.oper.replace('x', ''));
            break;
          case '?:':
            output = util.format("%s ? %s : %s", this.subexpressions[0], this.subexpressions[1], this.subexpressions[2]);
            break;
          case '[]':
            output = util.format("%s[%s]", this.subexpressions[0], this.subexpressions[1]);
            break;
          case '()':
            output = util.format("%s(%s)", this.subexpressions[0], this.expressions.join(", "));
            break;
          case 'ident':
            output = util.format("%s", this.primary_expression.identifier);
            break;
          case 'float':
            output = util.format("%s", this.primary_expression.float_constant);
            break;
          case 'int':
            output = util.format("%s", this.primary_expression.int_constant);
            break;
          case 'bool':
            output = util.format("%s", this.primary_expression.bool_constant ? 'true' : 'false');
            break;
        }
        return this.grouped ? util.format("(%s)", output) : output;
      };

      /**
       * AST Fully Specified Type Class
       */
      function AstFullySpecifiedType() {
        AstNode.apply(this);
        this.qualifier = [];
        this.specifier = null;
      }
      util.inherits(AstFullySpecifiedType, AstNode);
      proto = AstFullySpecifiedType.prototype;

      /**
       * Return string representation of node
       *
       * @return  string
       */
      proto.toString = function () {
        var output;
        output = this.qualifier.slice(0);
        output.push(this.specifier);
        return output.join(' ');
      };

      /**
       * AST Declaration Class
       */
      function AstDeclaration(identifier, is_array, array_size, initializer) {
        AstNode.apply(this);
        this.identifier = identifier;
        this.is_array = is_array;
        this.array_size = array_size;
        this.initializer = initializer;
      }
      util.inherits(AstDeclaration, AstNode);
      proto = AstDeclaration.prototype;

      /**
       * Return string representation of node
       *
       * @return  string
       */
      proto.toString = function () {
        return this.identifier + (this.is_array ? util.format("[%s]", this.array_size === undefined ? '' : this.array_size) : '') + (this.initializer ? util.format(" = %s", this.initializer) : "");
      };

      /**
       * AST Declarator List Class
       */
      function AstDeclaratorList(type) {
        AstNode.apply(this);
        this.type = type;
        this.declarations = [];
        this.invariant = 0;
      }
      util.inherits(AstDeclaratorList, AstNode);
      proto = AstDeclaratorList.prototype;

      /**
       * Return string representation of node
       *
       * @return  string
       */
      proto.toString = function () {
        return util.format("%s %s;\n", this.type || "invariant ", this.declarations.join(", "));
      };

      /**
       * AST Parameter Declarator Class
       */
      function AstParameterDeclarator() {
        AstNode.apply(this);
        this.type = null;
        this.identifier = null;
        this.is_array = false;
        this.array_size = 0;
        this.formal_parameter = null;
        this.is_void = null;
      }
      util.inherits(AstParameterDeclarator, AstNode);
      proto = AstParameterDeclarator.prototype;

      /**
       * Return string representation of node
       *
       * @return  string
       */
      proto.toString = function () {
        return this.type + (this.identifier ? " " + this.identifier : "") + (this.is_array ? util.format("[%s]", this.array_size) : "");
      };

      /**
       * AST Expression Statement Class
       */
      function AstExpressionStatement(ex) {
        AstNode.apply(this);
        this.expression = ex;
      }
      util.inherits(AstExpressionStatement, AstNode);
      proto = AstExpressionStatement.prototype;

      /**
       * Return string representation of node
       *
       * @return  string
       */
      proto.toString = function () {
        return util.format("%s;\n", this.expression || "");
      };

      /**
       * AST Compound Statement Class
       */
      function AstCompoundStatement(new_scope, statements) {
        AstNode.apply(this);
        this.new_scope = new_scope;
        if (statements) {
          this.statements = statements;
        } else {
          this.statements = [];
        }
      }
      util.inherits(AstCompoundStatement, AstNode);
      proto = AstCompoundStatement.prototype;

      /**
       * Return string representation of node
       *
       * @return  string
       */
      proto.toString = function () {
        var str, stmts, indent;
        AstCompoundStatement._depth++;
        indent = new Array(AstCompoundStatement._depth).join("  ");
        stmts = indent + "  " + this.statements.join(indent + "  ");
        str = "\n" + indent + "{\n" + stmts + indent + "}\n";
        AstCompoundStatement._depth--;
        return str;
      };

      //Used for toString indentation
      AstCompoundStatement._depth = 0;

      /**
       * AST Function Definition Class
       */
      function AstFunctionDefinition() {
        AstNode.apply(this);
        this.proto_type = null;
        this.body = null;
      }
      util.inherits(AstFunctionDefinition, AstNode);
      proto = AstFunctionDefinition.prototype;

      /**
       * Return string representation of node
       *
       * @return  string
       */
      proto.toString = function () {
        return util.format("%s %s", this.proto_type, this.body);
      };

      /**
       * AST Function Definition Class
       */
      function AstExpressionBin(oper, ex0, ex1) {
        AstExpression.apply(this, [oper, ex0, ex1]);
      }
      util.inherits(AstExpressionBin, AstExpression);
      proto = AstExpressionBin.prototype;

      /**
       * AST Function Expression Class
       */
      function AstFunctionExpression(arg) {
        AstExpression.apply(this);
        this.cons = false;
        if (arg.constructor.name === 'AstExpression') {
          this.cons = false;
          AstExpression.call(this, '()', arg);
        } else if (arg.constructor.name === 'AstTypeSpecifier') {
          this.cons = true;
          AstExpression.call(this, '()', arg);
        }
      }
      util.inherits(AstFunctionExpression, AstExpression);
      proto = AstFunctionExpression.prototype;
      proto.is_constructor = function () {
        return this.cons;
      };
      proto.toString = function () {
        return util.format("%s(%s)", this.subexpressions[0], this.expressions.join(", "));
      };

      /**
       * AST Selection Statement Class
       */
      function AstSelectionStatement(condition, then_statement, else_statement) {
        AstNode.apply(this);
        this.condition = condition;
        this.then_statement = then_statement;
        this.else_statement = else_statement;
      }
      util.inherits(AstSelectionStatement, AstNode);
      proto = AstSelectionStatement.prototype;

      /**
       * Return string representation of node
       *
       * @return  string
       */
      proto.toString = function () {
        return util.format("if (%s) %s %s", this.condition, this.then_statement, this.else_statement ? util.format("else %s", this.else_statement) : "");
      };

      /**
       * AST Struct Specifier Class
       */
      function AstStructSpecifier(identifier, declarator_list) {
        AstNode.apply(this);
        this.name = null;
        this.declarations = [];
        if (identifier === null) {
          identifier = util.format("#anon_struct%d", AstStructSpecifier.anon_count);
          AstStructSpecifier.anon_count++;
        }
        this.name = identifier;
        this.declarations = declarator_list.declarations;
      }
      AstStructSpecifier.anon_count = 1;
      util.inherits(AstStructSpecifier, AstNode);
      proto = AstStructSpecifier.prototype;

      /**
       * AST Jump 
       */
      function AstJumpStatement(mode, return_value) {
        AstNode.apply(this);
        this.opt_return_value = null;
        this.mode = mode;
        if (mode === 'return') {
          this.opt_return_value = return_value;
        }
      }
      util.inherits(AstJumpStatement, AstNode);
      proto = AstJumpStatement.prototype;

      /**
       * Return string representation of node
       *
       * @return  string
       */
      proto.toString = function () {
        switch (this.mode) {
          case 'continue':
          case 'break':
          case 'discard':
          case 'debugger':
            return this.mode + ";\n";
          case 'return':
            return util.format("return%s;\n", this.opt_return_value ? " " + this.opt_return_value : "");
        }
      };
      glsl.ast = {
        Node: AstNode,
        TypeSpecifier: AstTypeSpecifier,
        Function: AstFunction,
        Expression: AstExpression,
        FullySpecifiedType: AstFullySpecifiedType,
        Declaration: AstDeclaration,
        DeclaratorList: AstDeclaratorList,
        ParameterDeclarator: AstParameterDeclarator,
        ExpressionStatement: AstExpressionStatement,
        CompoundStatement: AstCompoundStatement,
        FunctionDefinition: AstFunctionDefinition,
        ExpressionBin: AstExpressionBin,
        FunctionExpression: AstFunctionExpression,
        SelectionStatement: AstSelectionStatement,
        StructSpecifier: AstStructSpecifier,
        JumpStatement: AstJumpStatement
      };

      /*
      Copyright (c) 2011 Cimaron Shanahan
      
      Permission is hereby granted, free of charge, to any person obtaining a copy of
      this software and associated documentation files (the "Software"), to deal in
      the Software without restriction, including without limitation the rights to
      use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
      the Software, and to permit persons to whom the Software is furnished to do so,
      subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
      FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
      COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
      IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
      CONNECTION WITH THE SOFTWARE OR THE USE		 OR OTHER DEALINGS IN THE SOFTWARE.
      */

      var builtin = {
        vars: {
          vertex: [{
            position: 0,
            type: 'vec4',
            name: 'gl_Position',
            out: 'result@0'
          }, {
            position: 1,
            type: 'float',
            name: 'gl_PointSize',
            out: 'result@1'
          }],
          fragment: [{
            position: 0,
            type: 'vec4',
            name: 'gl_FragColor',
            out: 'result@0'
          }]
        },
        /**
         * List of instructions for operators
         * 
         * Denoted by operator, then by definition of param types to output type
         */
        oper: {
          "!": {
            "bool:bool": ["SEQ %1.x %2.x 0.0"]
          },
          "+": {
            "int,int:int": ["ADD %1.x %2.x %3.x"],
            "float,float:float": ["ADD %1.x %2.x %3.x"],
            "float,vec2:vec2": ["ADD %1.xy %2.x %3.xy"],
            "float,vec3:vec3": ["ADD %1.xyz %2.x %3.xyz"],
            "float,vec4:vec4": ["ADD %1 %2.x %3"],
            "vec2,float:vec2": ["ADD %1.xy %2.xy %3.x"],
            "vec3,float:vec3": ["ADD %1.xyz %2.xyz %3.x"],
            "vec4,float:vec4": ["ADD %1 %2 %3.x"],
            "vec2,vec2:vec2": ["ADD %1.xy %2.xy %3.xy"],
            "vec3,vec3:vec3": ["ADD %1.xyz %2.xyz %3.xyz"],
            "vec4,vec4:vec4": ["ADD %1 %2 %3"]
          },
          "-": {
            "int,int:int": ["SUB %1.x %2.x %3.x"],
            "float,float:float": ["SUB %1.x %2.x %3.x"],
            "float,vec2:vec2": ["SUB %1.xy %2.x %3.xy"],
            "float,vec3:vec3": ["SUB %1.xyz %2.x %3.xyz"],
            "float,vec4:vec4": ["SUB %1 %2.x %3"],
            "vec2,float:vec2": ["SUB %1.xy %2.xy %3.x"],
            "vec3,float:vec3": ["SUB %1.xyz %2.xyz %3.x"],
            "vec4,float:vec4": ["SUB %1 %2 %3.x"],
            "vec2,vec2:vec2": ["SUB %1.xy %2.xy %3.xy"],
            "vec3,vec3:vec3": ["SUB %1.xyz %2.xyz %3.xyz"],
            "vec4,vec4:vec4": ["SUB %1 %2 %3"]
          },
          "*": {
            "int,int:int": ["MUL %1.x %2.x %3.x"],
            "float,float:float": ["MUL %1.x %2.x %3.x"],
            "float,vec2:vec2": ["MUL %1.xy %2.x %3.xy"],
            "float,vec3:vec3": ["MUL %1.xyz %2.x %3.xyz"],
            "float,vec4:vec4": ["MUL %1 %2.x %3"],
            "vec2,float:vec2": ["MUL %1.xy %2.xy %3.x"],
            "vec3,float:vec3": ["MUL %1.xyz %2.xyz %3.x"],
            "vec4,float:vec4": ["MUL %1 %2 %3.x"],
            "vec2,vec2:vec2": ["MUL %1.xy %2.xy %3.xy"],
            "vec3,vec3:vec3": ["MUL %1.xyz %2.xyz %3.xyz"],
            "vec4,vec4:vec4": ["MUL %1 %2 %3"],
            "mat3,vec3:vec3": ["MUL %1.xyz %2.xyz %3.x", "MAD %1.xyz %2@1.xyz %3.y %1", "MAD %1.xyz %2@2.xyz %3.z %1"],
            "mat4,vec4:vec4": ["MUL %1 %2 %3.x", "MAD %1 %2@1 %3.y %1", "MAD %1 %2@2 %3.z %1", "MAD %1 %2@3 %3.w %1"],
            "mat4,mat4:mat4": ["MUL %1 %2 %3.x", "MAD %1 %2@1 %3.y %1", "MAD %1 %2@2 %3.z %1", "MAD %1 %2@3 %3.w %1", "MUL %1@1 %2 %3@1.x", "MAD %1@1 %2@1 %3@1.y %1@1", "MAD %1@1 %2@2 %3@1.z %1@1", "MAD %1@1 %2@3 %3@1.w %1@1", "MUL %1@2 %2 %3@2.x", "MAD %1@2 %2@1 %3@2.y %1@2", "MAD %1@2 %2@2 %3@2.z %1@2", "MAD %1@2 %2@3 %3@2.w %1@2", "MUL %1@3 %2 %3@3.x", "MAD %1@3 %2@1 %3@3.y %1@3", "MAD %1@3 %2@2 %3@3.z %1@3", "MAD %1@3 %2@3 %3@3.w %1@3"]
          },
          "/": {
            "int,int:int": ["DIV %1.x %2.x %3.x"],
            "float,float:float": ["DIV %1.x %2.x %3.x"],
            "float,vec2:vec2": ["DIV %1.xy %2.x %3.xy"],
            "float,vec3:vec3": ["DIV %1.xyz %2.x %3.xyz"],
            "float,vec4:vec4": ["DIV %1 %2.x %3"],
            "vec2,float:vec2": ["DIV %1.xy %2.xy %3.x"],
            "vec3,float:vec3": ["DIV %1.xyz %2.xyz %3.x"],
            "vec4,float:vec4": ["DIV %1 %2 %3.x"],
            "vec2,vec2:vec2": ["DIV %1.xy %2.xy %3.xy"],
            "vec3,vec3:vec3": ["DIV %1.xyz %2.xyz %3.xyz"],
            "vec4,vec4:vec4": ["DIV %1 %2 %3"]
          },
          "<": {
            "int,int:bool": ["SLT %1.x %2.x %3.x"],
            "float,float:bool": ["SLT %1.x %2.x %3.x"]
          },
          ">": {
            "int,int:bool": ["SGT %1.x %2.x %3.x"],
            "float,float:bool": ["SGT %1.x %2.x %3.x"]
          },
          "<=": {
            "int,int:bool": ["SLE %1.x %2.x %3.x"],
            "float,float:bool": ["SLE %1.x %2.x %3.x"]
          },
          ">=": {
            "int,int:bool": ["SGE %1.x %2.x %3.x"],
            "float,float:bool": ["SGE %1.x %2.x %3.x"]
          },
          "==": {
            "int,int:bool": ["SEQ %1.x %2.x %3.x"],
            "float,float:bool": ["SEQ %1.x %2.x %3.x"]
          },
          "!=": {
            "int,int:bool": ["SNE %1.x %2.x %3.x"],
            "float,float:bool": ["SNE %1.x %2.x %3.x"]
          },
          "&&": {
            "bool,bool:bool": ["AND %1.x %2.x %3.x", "AND %1.x %1.x 1"]
          },
          "^^": {
            "bool,bool:bool": ["XOR %1.x %2.x %3.x", "AND %1.x %1.x 1"]
          },
          "||": {
            "bool,bool:bool": ["OR %1.x %2.x %3.x", "AND %1.x %1.x 1"]
          }
        },
        /**
         * List of instructions for built in functions
         * 
         * Denoted by function name, then by definition of param types to output type
         */
        func: {
          "abs": {
            "float:float": ["ABS %1.x %2.x"],
            "vec2:vec2": ["ABS %1.xy %2.xy"],
            "vec3:vec3": ["ABS %1.xyz %2.xyz"],
            "vec4:vec4": ["ABS %1 %2"]
          },
          "ceil": {
            "float:float": ["CEIL %1.x %2.x"],
            "vec2:vec2": ["CEIL %1.xy %2.xy"],
            "vec3:vec3": ["CEIL %1.xyz %2.xyz"],
            "vec4:vec4": ["CEIL %1 %2"]
          },
          "clamp": {
            "float,float,float:float": ["MAX %1.x %2.x %3.x", "MIN %1.x %1.x %4.x"],
            "vec2,float,float:vec2": ["MAX %1.xy %2.xy %3.x", "MIN %1.xy %1.xy %4.x"],
            "vec3,float,float:vec3": ["MAX %1.xyz %2.xyz %3.x", "MIN %1.xyz %1.xyz %4.x"],
            "vec4,float,float:vec4": ["MAX %1 %2 %3.x", "MIN %1 %1 %4.x"],
            "vec2,vec2,vec2:vec2": ["MAX %1.xy %2.xy %3.xy", "MIN %1.xy %1.xy %4.xy"],
            "vec3,vec3,vec3:vec3": ["MAX %1.xyz %2.xyz %3.xyz", "MIN %1.xyz %1.xyz %4.xyz"],
            "vec4,vec4,vec4:vec4": ["MAX %1 %2 %3", "MIN %1 %1 %4"]
          },
          "cos": {
            "float:float": ["COS %1.x %2.x"],
            "vec2:vec2": ["COS %1.xy %2.xy"],
            "vec3:vec3": ["COS %1.xyz %2.xyz"],
            "vec4:vec4": ["COS %1 %2"]
          },
          "degrees": {
            "float:float": ["MUL %1.x %2.x " + 180 / Math.PI],
            "vec2:vec2": ["MUL %1.xy %2.xy " + 180 / Math.PI],
            "vec3:vec3": ["MUL %1.xyz %2.xyz " + 180 / Math.PI],
            "vec4:vec4": ["MUL %1 %2 " + 180 / Math.PI]
          },
          "dot": {
            "vec2,vec2:float": ["DP2 %1.x %2.xy %3.xy"],
            "vec3,vec3:float": ["DP3 %1.x %2.xyz %3.xyz"],
            "vec4,vec4:float": ["DP4 %1.x %2 %3"]
          },
          "floor": {
            "float:float": ["FLR %1.x %2.x"],
            "vec2:vec2": ["FLR %1.xy %2.xy"],
            "vec3:vec3": ["FLR %1.xyz %2.xyz"],
            "vec4:vec4": ["FLR %1 %2"]
          },
          "fract": {
            "float:float": ["FRC %1.x %2.x"],
            "vec2:vec2": ["FRC %1.xy %2.xy"],
            "vec3:vec3": ["FRC %1.xyz %2.xyz"],
            "vec4:vec4": ["FRC %1 %2"]
          },
          "max": {
            "float,float:float": ["MAX %1.x %2.x %3.x"],
            "vec2,float:vec2": ["MAX %1.xy %2.xy %3.x"],
            "vec3,float:vec3": ["MAX %1.xyz %2.xyz %3.x"],
            "vec4,float:vec4": ["MAX %1 %2 %3.x"],
            "vec2,vec2:vec2": ["MAX %1.xy %2.xy %3.xy"],
            "vec3,vec3:vec3": ["MAX %1.xyz %2.xyz %3.xyz"],
            "vec4,vec4:vec4": ["MAX %1 %2 %3"]
          },
          "min": {
            "float,float:float": ["MIN %1.x %2.x %3.x"],
            "vec2,float:vec2": ["MIN %1.xy %2.xy %3.x"],
            "vec3,float:vec3": ["MIN %1.xyz %2.xyz %3.x"],
            "vec4,float:vec4": ["MIN %1 %2 %3.x"],
            "vec2,vec2:vec2": ["MIN %1.xy %2.xy %3.xy"],
            "vec3,vec3:vec3": ["MIN %1.xyz %2.xyz %3.xyz"],
            "vec4,vec4:vec4": ["MIN %1 %2 %3"]
          },
          "mix": {
            "float,float,float:float": ["MAD %1.x -%2.x %4.x %2.x", "MAD %1.x %3.x %4.x %1.x"],
            "vec2,vec2,float:vec2": ["MAD %1.xy -%2.xy %4.x %2.xy", "MAD %1.xy %3.xy %4.x %1.xy"],
            "vec3,vec3,float:vec3": ["MAD %1.xyz -%2.xyz %4.x %2.xyz", "MAD %1.xyz %3.xyz %4.x %1.xyz"],
            "vec4,vec4,float:vec4": ["MAD %1 -%2 %4.x %2", "MAD %1 %3 %4.x %1"],
            "vec2,vec2,vec2:vec2": ["MAD %1.xy -%2.xy %4.xy %2.xy", "MAD %1.xy %3.xy %4.xy %1.xy"],
            "vec3,vec3,vec3:vec3": ["MAD %1.xyz -%2.xyz %4.xyz %2.xyz", "MAD %1.xyz %3.xyz %4.xyz %1.xyz"],
            "vec4,vec4,vec4:vec4": ["MAD %1 -%2 %4 %2", "MAD %1 %3 %4 %1"]
          },
          "mod": {
            "float,float:float": ["MOD %1.x %2.x %3.x"],
            "vec2,float:vec2": ["MOD %1.xy %2.xy %3.x"],
            "vec3,float:vec3": ["MOD %1.xyz %2.xyz %3.x"],
            "vec4,float:vec4": ["MOD %1 %2 %3.x"],
            "vec2,vec2:vec2": ["MOD %1.xy %2.xy %3.xy"],
            "vec3,vec3:vec3": ["MOD %1.xyz %2.xyz %3.xyz"],
            "vec4,vec4:vec4": ["MOD %1 %2 %3"]
          },
          "normalize": {
            "vec3:vec3": ["DP3 %1.x %2 %2", "RSQ %1.x %1.x", "MUL %1.xyz %2.xyz %1.x"],
            "vec4:vec4": ["DP4 %1.x %2 %2", "RSQ %1.x %1.x", "MUL %1 %2 %1.x"]
          },
          "pow": {
            "float,float:float": ["POW %1.x %2.x %3.x"]
          },
          "reflect": {
            "vec3,vec3:vec3": ["DP3 %1.x %3 %2", "MUL %1.xyz %3 %1.x", "MAD %1.xyz -%1 2.0 %2"]
          },
          "radians": {
            "float:float": ["MUL %1.x %2.x " + Math.PI / 180],
            "vec2:vec2": ["MUL %1.xy %2.xy " + Math.PI / 180],
            "vec3:vec3": ["MUL %1.xyz %2.xyz " + Math.PI / 180],
            "vec4:vec4": ["MUL %1 %2 " + Math.PI / 180]
          },
          "sign": {
            "float:float": ["SGT %t1.x %2.x 0", "SLT %t1.y %2.x 0", "ADD %1.x %t1.x -%t1.y"],
            "vec2:vec2": ["SGT %t1.xy %2.xy 0", "SLT %t1.zw %2.zw 0", "ADD %1.xy %t1.xy -%t1.zw"],
            "vec3:vec3": ["SGT %t1.xyz %2.xyz 0", "SLT %t2.xyz %2.xyz 0", "ADD %1.xyz %t1.xyz -%t2.xyz"],
            "vec4:vec4": ["SGT %t1 %2 0", "SLT %t2 %2 0", "ADD %1 %t1 -%t2"]
          },
          "sin": {
            "float:float": ["SIN %1.x %2.x"],
            "vec2:vec2": ["SIN %1.xy %2.xy"],
            "vec3:vec3": ["SIN %1.xyz %2.xyz"],
            "vec4:vec4": ["SIN %1 %2"]
          },
          "step": {
            "float,float:float": ["SGE %1.x %3.x %2.x"],
            "float,vec2:vec2": ["SGE %1.xy %3.x %2.xy"],
            "float,vec3:vec3": ["SGE %1.xyz %3.x %2.xyz"],
            "float,vec4:vec4": ["SGE %1 %3.x %2"],
            "vec2,vec2:vec2": ["SGE %1.xy %3.xy %2.xy"],
            "vec3,vec3:vec3": ["SGE %1.xyz %3.xyz %2.xyz"],
            "vec4,vec4:vec4": ["SGE %1 %3 %3"]
          },
          "tan": {
            "float:float": ["TAN %1.x %2.x"],
            "vec2:vec2": ["TAN %1.xy %2.xy"],
            "vec3:vec3": ["TAN %1.xyz %2.xyz"],
            "vec4:vec4": ["TAN %1 %2"]
          },
          "texture2D": {
            "sampler2D,vec2:vec4": ["TEX %1 %3 %2 \"2D\""]
          }
        }
      };
      function _builtinParseType(str) {
        var parts, ret;
        parts = str.split(":");
        parts[0] = parts[0].split(",");
        ret = {
          src: parts[0],
          dest: parts[1]
        };
        return ret;
      }
      function symbol_table_init(table, target) {
        var i, j, vars, v, entry, types, name;
        vars = target === glsl.target.vertex ? builtin.vars.vertex : builtin.vars.fragment;
        for (i = 0; i < vars.length; i++) {
          v = vars[i];
          entry = table.add_variable(v.name, v.type);
          entry.position = v.position;
          entry.out = v.out;
        }
        vars = builtin.func;
        for (name in vars) {
          v = vars[name];
          for (j in v) {
            types = _builtinParseType(j);
            entry = table.add_function(name, types.dest, types.src);
            entry.code = v[j];
          }
        }
      }

      /* parser generated by jison 0.4.15 */
      /*
        Returns a Parser object of the following structure:
      
        Parser: {
          yy: {}
        }
      
        Parser.prototype: {
          yy: {},
          trace: function(),
          symbols_: {associative list: name ==> number},
          terminals_: {associative list: number ==> name},
          productions_: [...],
          performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
          table: [...],
          defaultActions: {...},
          parseError: function(str, hash),
          parse: function(input),
      
          lexer: {
              EOF: 1,
              parseError: function(str, hash),
              setInput: function(input),
              input: function(),
              unput: function(str),
              more: function(),
              less: function(n),
              pastInput: function(),
              upcomingInput: function(),
              showPosition: function(),
              test_match: function(regex_match_array, rule_index),
              next: function(),
              lex: function(),
              begin: function(condition),
              popState: function(),
              _currentRules: function(),
              topState: function(),
              pushState: function(condition),
      
              options: {
                  ranges: boolean           (optional: true ==> token location info will include a .range[] member)
                  flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
                  backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
              },
      
              performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
              rules: [...],
              conditions: {associative list: name ==> set},
          }
        }
      
      
        token location info (@$, _$, etc.): {
          first_line: n,
          last_line: n,
          first_column: n,
          last_column: n,
          range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
        }
      
      
        the parseError function receives a 'hash' object with these members for lexer and parser errors: {
          text:        (matched text)
          token:       (the produced terminal token, if any)
          line:        (yylineno)
        }
        while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
          loc:         (yylloc)
          expected:    (string describing the set of expected tokens)
          recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
        }
      */
      var parser = function () {
        var o = function o(k, v, _o, l) {
            for (_o = _o || {}, l = k.length; l--; _o[k[l]] = v);
            return _o;
          },
          $V0 = [13, 14, 15, 16, 17, 21, 22, 47, 108, 120, 121, 125, 128, 132, 133, 134, 135, 137, 138, 139, 140, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169],
          $V1 = [1, 18],
          $V2 = [1, 19],
          $V3 = [1, 20],
          $V4 = [1, 21],
          $V5 = [1, 22],
          $V6 = [1, 53],
          $V7 = [1, 54],
          $V8 = [1, 17],
          $V9 = [1, 44],
          $Va = [1, 45],
          $Vb = [1, 28],
          $Vc = [1, 47],
          $Vd = [1, 48],
          $Ve = [1, 49],
          $Vf = [1, 50],
          $Vg = [1, 40],
          $Vh = [1, 41],
          $Vi = [1, 42],
          $Vj = [1, 43],
          $Vk = [1, 46],
          $Vl = [1, 55],
          $Vm = [1, 56],
          $Vn = [1, 57],
          $Vo = [1, 58],
          $Vp = [1, 59],
          $Vq = [1, 60],
          $Vr = [1, 61],
          $Vs = [1, 62],
          $Vt = [1, 63],
          $Vu = [1, 64],
          $Vv = [1, 65],
          $Vw = [1, 66],
          $Vx = [1, 67],
          $Vy = [1, 68],
          $Vz = [1, 69],
          $VA = [1, 70],
          $VB = [1, 71],
          $VC = [1, 72],
          $VD = [1, 73],
          $VE = [1, 74],
          $VF = [1, 75],
          $VG = [1, 76],
          $VH = [1, 37],
          $VI = [1, 38],
          $VJ = [1, 39],
          $VK = [1, 77],
          $VL = [5, 13, 14, 15, 16, 17, 21, 47, 108, 120, 121, 125, 128, 132, 133, 134, 135, 137, 138, 139, 140, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169],
          $VM = [1, 82],
          $VN = [1, 83],
          $VO = [1, 84],
          $VP = [1, 86],
          $VQ = [1, 87],
          $VR = [49, 106],
          $VS = [21, 47, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169],
          $VT = [2, 121],
          $VU = [1, 101],
          $VV = [1, 102],
          $VW = [1, 103],
          $VX = [1, 100],
          $VY = [2, 159],
          $VZ = [21, 25, 26, 49, 106],
          $V_ = [2, 141],
          $V$ = [21, 25, 26, 30, 32, 49, 106],
          $V01 = [21, 47, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 169],
          $V11 = [21, 47, 120, 121, 135, 137, 138, 139, 140, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169],
          $V21 = [21, 25, 26, 30, 32, 34, 49, 106],
          $V31 = [2, 177],
          $V41 = [2, 12],
          $V51 = [11, 23, 30, 32, 34, 36, 38, 39, 40, 49, 57, 58, 62, 63, 64, 67, 68, 70, 71, 72, 73, 75, 76, 78, 80, 82, 84, 86, 88, 90, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 106, 170],
          $V61 = [5, 10, 13, 14, 15, 16, 17, 21, 25, 26, 28, 29, 30, 39, 40, 47, 51, 57, 58, 59, 60, 106, 108, 120, 121, 125, 128, 132, 133, 134, 135, 137, 138, 139, 140, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 172, 189, 191, 193, 194, 195, 196, 197, 198, 202, 203, 204, 205, 206],
          $V71 = [1, 169],
          $V81 = [1, 170],
          $V91 = [1, 171],
          $Va1 = [1, 172],
          $Vb1 = [1, 156],
          $Vc1 = [1, 157],
          $Vd1 = [1, 182],
          $Ve1 = [1, 163],
          $Vf1 = [1, 164],
          $Vg1 = [1, 165],
          $Vh1 = [1, 166],
          $Vi1 = [1, 136],
          $Vj1 = [1, 127],
          $Vk1 = [1, 138],
          $Vl1 = [1, 139],
          $Vm1 = [1, 140],
          $Vn1 = [1, 141],
          $Vo1 = [1, 142],
          $Vp1 = [1, 143],
          $Vq1 = [1, 144],
          $Vr1 = [1, 145],
          $Vs1 = [1, 146],
          $Vt1 = [1, 147],
          $Vu1 = [1, 148],
          $Vv1 = [1, 149],
          $Vw1 = [32, 49],
          $Vx1 = [10, 21, 25, 26, 28, 29, 30, 39, 40, 47, 51, 57, 58, 59, 60, 106, 108, 120, 121, 125, 128, 132, 133, 134, 135, 137, 138, 139, 140, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 172, 189, 193, 194, 195, 196, 197, 198, 202, 203, 204, 205, 206],
          $Vy1 = [10, 21, 25, 26, 28, 29, 30, 39, 40, 47, 51, 57, 58, 59, 60, 106, 108, 120, 121, 125, 128, 132, 133, 134, 135, 137, 138, 139, 140, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 172, 189, 191, 193, 194, 195, 196, 197, 198, 202, 203, 204, 205, 206],
          $Vz1 = [1, 216],
          $VA1 = [23, 32, 36, 49, 106],
          $VB1 = [23, 32, 36, 49, 57, 58, 62, 63, 64, 67, 68, 70, 71, 72, 73, 75, 76, 78, 80, 82, 84, 86, 88, 90, 106],
          $VC1 = [2, 58],
          $VD1 = [23, 32, 36, 49, 57, 58, 62, 63, 64, 67, 68, 70, 71, 72, 73, 75, 76, 78, 80, 82, 84, 86, 88, 90, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 106],
          $VE1 = [1, 251],
          $VF1 = [23, 32, 36, 49, 88, 90, 106],
          $VG1 = [1, 252],
          $VH1 = [23, 32, 34, 36, 38, 39, 40, 49, 57, 58, 62, 63, 64, 67, 68, 70, 71, 72, 73, 75, 76, 78, 80, 82, 84, 86, 88, 90, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 106],
          $VI1 = [10, 21, 25, 26, 28, 29, 30, 39, 40, 47, 51, 57, 58, 59, 60, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169],
          $VJ1 = [23, 32, 36, 49, 86, 88, 90, 106],
          $VK1 = [1, 253],
          $VL1 = [23, 32, 36, 49, 84, 86, 88, 90, 106],
          $VM1 = [1, 256],
          $VN1 = [23, 32, 36, 49, 82, 84, 86, 88, 90, 106],
          $VO1 = [1, 257],
          $VP1 = [23, 32, 36, 49, 80, 82, 84, 86, 88, 90, 106],
          $VQ1 = [1, 261],
          $VR1 = [23, 32, 36, 49, 78, 80, 82, 84, 86, 88, 90, 106],
          $VS1 = [1, 264],
          $VT1 = [1, 265],
          $VU1 = [10, 21, 25, 26, 28, 29, 30, 32, 39, 40, 47, 51, 57, 58, 59, 60, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169],
          $VV1 = [23, 32, 36, 49, 75, 76, 78, 80, 82, 84, 86, 88, 90, 106],
          $VW1 = [1, 266],
          $VX1 = [1, 267],
          $VY1 = [1, 268],
          $VZ1 = [1, 269],
          $V_1 = [23, 32, 36, 49, 70, 71, 72, 73, 75, 76, 78, 80, 82, 84, 86, 88, 90, 106],
          $V$1 = [1, 270],
          $V02 = [1, 271],
          $V12 = [23, 32, 36, 49, 67, 68, 70, 71, 72, 73, 75, 76, 78, 80, 82, 84, 86, 88, 90, 106],
          $V22 = [1, 272],
          $V32 = [1, 273],
          $V42 = [23, 32, 36, 49, 57, 58, 67, 68, 70, 71, 72, 73, 75, 76, 78, 80, 82, 84, 86, 88, 90, 106],
          $V52 = [1, 274],
          $V62 = [1, 275],
          $V72 = [1, 276],
          $V82 = [21, 47, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 172],
          $V92 = [1, 306],
          $Va2 = [30, 34],
          $Vb2 = [32, 106],
          $Vc2 = [10, 21, 25, 26, 28, 29, 30, 39, 40, 47, 51, 57, 58, 59, 60, 106, 120, 121, 125, 128, 132, 133, 134, 135, 137, 138, 139, 140, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169];
        var parser = {
          trace: function trace() {},
          yy: {},
          symbols_: {
            "error": 2,
            "glsl-start": 3,
            "translation_unit": 4,
            "EOF": 5,
            "version_statement": 6,
            "extension_statement_list": 7,
            "external_declaration_list": 8,
            "VERSION": 9,
            "INTCONSTANT": 10,
            "EOL": 11,
            "pragma_statement": 12,
            "PRAGMA_DEBUG_ON": 13,
            "PRAGMA_DEBUG_OFF": 14,
            "PRAGMA_OPTIMIZE_ON": 15,
            "PRAGMA_OPTIMIZE_OFF": 16,
            "PRAGMA_INVARIANT_ALL": 17,
            "extension_statement": 18,
            "any_identifier": 19,
            "variable_identifier": 20,
            "TYPE_IDENTIFIER": 21,
            "EXTENSION": 22,
            ":": 23,
            "external_declaration": 24,
            "IDENTIFIER": 25,
            "NEW_IDENTIFIER": 26,
            "primary_expression": 27,
            "FLOATCONSTANT": 28,
            "BOOLCONSTANT": 29,
            "(": 30,
            "expression": 31,
            ")": 32,
            "postfix_expression": 33,
            "[": 34,
            "integer_expression": 35,
            "]": 36,
            "function_call": 37,
            ".": 38,
            "++": 39,
            "--": 40,
            "function_call_or_method": 41,
            "function_call_generic": 42,
            "method_call_generic": 43,
            "function_call_header_with_parameters": 44,
            "function_call_header_no_parameters": 45,
            "function_call_header": 46,
            "VOID": 47,
            "assignment_expression": 48,
            ",": 49,
            "type_specifier": 50,
            "FIELD_SELECTION": 51,
            "method_call_header_with_parameters": 52,
            "method_call_header_no_parameters": 53,
            "method_call_header": 54,
            "unary_expression": 55,
            "unary_operator": 56,
            "+": 57,
            "-": 58,
            "!": 59,
            "~": 60,
            "multiplicative_expression": 61,
            "*": 62,
            "/": 63,
            "%": 64,
            "additive_expression": 65,
            "shift_expression": 66,
            "<<": 67,
            ">>": 68,
            "relational_expression": 69,
            "<": 70,
            ">": 71,
            "<=": 72,
            ">=": 73,
            "equality_expression": 74,
            "==": 75,
            "!=": 76,
            "and_expression": 77,
            "&": 78,
            "exclusive_or_expression": 79,
            "^": 80,
            "inclusive_or_expression": 81,
            "|": 82,
            "logical_and_expression": 83,
            "&&": 84,
            "logical_xor_expression": 85,
            "^^": 86,
            "logical_or_expression": 87,
            "||": 88,
            "conditional_expression": 89,
            "?": 90,
            "assignment_operator": 91,
            "=": 92,
            "*=": 93,
            "/=": 94,
            "%=": 95,
            "+=": 96,
            "-=": 97,
            "<<=": 98,
            ">>=": 99,
            "&=": 100,
            "^=": 101,
            "|=": 102,
            "constant_expression": 103,
            "declaration": 104,
            "function_prototype": 105,
            ";": 106,
            "init_declarator_list": 107,
            "PRECISION": 108,
            "precision_qualifier": 109,
            "type_specifier_no_prec": 110,
            "function_declarator": 111,
            "function_header": 112,
            "function_header_with_parameters": 113,
            "parameter_declaration": 114,
            "fully_specified_type": 115,
            "parameter_declarator": 116,
            "parameter_type_qualifier": 117,
            "parameter_qualifier": 118,
            "parameter_type_specifier": 119,
            "IN": 120,
            "OUT": 121,
            "INOUT": 122,
            "single_declaration": 123,
            "initializer": 124,
            "INVARIANT": 125,
            "type_qualifier": 126,
            "layout_qualifier": 127,
            "LAYOUT": 128,
            "layout_qualifier_id_list": 129,
            "layout_qualifier_id": 130,
            "interpolation_qualifier": 131,
            "SMOOTH": 132,
            "FLAT": 133,
            "NOPERSPECTIVE": 134,
            "CONST": 135,
            "storage_qualifier": 136,
            "ATTRIBUTE": 137,
            "VARYING": 138,
            "CENTROID": 139,
            "UNIFORM": 140,
            "type_specifier_nonarray": 141,
            "basic_type_specifier_nonarray": 142,
            "struct_specifier": 143,
            "FLOAT": 144,
            "DOUBLE": 145,
            "INT": 146,
            "BOOL": 147,
            "VEC2": 148,
            "VEC3": 149,
            "VEC4": 150,
            "BVEC2": 151,
            "BVEC3": 152,
            "BVEC4": 153,
            "IVEC2": 154,
            "IVEC3": 155,
            "IVEC4": 156,
            "MAT2X2": 157,
            "MAT3X3": 158,
            "MAT4X4": 159,
            "SAMPLER1D": 160,
            "SAMPLER2D": 161,
            "SAMPLER3D": 162,
            "SAMPLERCUBE": 163,
            "SAMPLER1DSHADOW": 164,
            "SAMPLER2DSHADOW": 165,
            "HIGHP": 166,
            "MEDIUMP": 167,
            "LOWP": 168,
            "STRUCT": 169,
            "{": 170,
            "struct_declaration_list": 171,
            "}": 172,
            "struct_declaration": 173,
            "struct_declarator_list": 174,
            "struct_declarator": 175,
            "declaration_statement": 176,
            "statement": 177,
            "compound_statement": 178,
            "simple_statement": 179,
            "expression_statement": 180,
            "selection_statement": 181,
            "switch_statement": 182,
            "case_label": 183,
            "iteration_statement": 184,
            "jump_statement": 185,
            "statement_list": 186,
            "statement_no_new_scope": 187,
            "compound_statement_no_new_scope": 188,
            "IF": 189,
            "selection_rest_statement": 190,
            "ELSE": 191,
            "condition": 192,
            "SWITCH": 193,
            "CASE": 194,
            "DEFAULT": 195,
            "WHILE": 196,
            "DO": 197,
            "FOR": 198,
            "for_init_statement": 199,
            "for_rest_statement": 200,
            "conditionopt": 201,
            "CONTINUE": 202,
            "BREAK": 203,
            "RETURN": 204,
            "DISCARD": 205,
            "DEBUGGER": 206,
            "function_definition": 207,
            "$accept": 0,
            "$end": 1
          },
          terminals_: {
            2: "error",
            5: "EOF",
            9: "VERSION",
            10: "INTCONSTANT",
            11: "EOL",
            13: "PRAGMA_DEBUG_ON",
            14: "PRAGMA_DEBUG_OFF",
            15: "PRAGMA_OPTIMIZE_ON",
            16: "PRAGMA_OPTIMIZE_OFF",
            17: "PRAGMA_INVARIANT_ALL",
            21: "TYPE_IDENTIFIER",
            22: "EXTENSION",
            23: ":",
            25: "IDENTIFIER",
            26: "NEW_IDENTIFIER",
            28: "FLOATCONSTANT",
            29: "BOOLCONSTANT",
            30: "(",
            32: ")",
            34: "[",
            36: "]",
            38: ".",
            39: "++",
            40: "--",
            47: "VOID",
            49: ",",
            51: "FIELD_SELECTION",
            57: "+",
            58: "-",
            59: "!",
            60: "~",
            62: "*",
            63: "/",
            64: "%",
            67: "<<",
            68: ">>",
            70: "<",
            71: ">",
            72: "<=",
            73: ">=",
            75: "==",
            76: "!=",
            78: "&",
            80: "^",
            82: "|",
            84: "&&",
            86: "^^",
            88: "||",
            90: "?",
            92: "=",
            93: "*=",
            94: "/=",
            95: "%=",
            96: "+=",
            97: "-=",
            98: "<<=",
            99: ">>=",
            100: "&=",
            101: "^=",
            102: "|=",
            106: ";",
            108: "PRECISION",
            120: "IN",
            121: "OUT",
            122: "INOUT",
            125: "INVARIANT",
            128: "LAYOUT",
            132: "SMOOTH",
            133: "FLAT",
            134: "NOPERSPECTIVE",
            135: "CONST",
            137: "ATTRIBUTE",
            138: "VARYING",
            139: "CENTROID",
            140: "UNIFORM",
            144: "FLOAT",
            145: "DOUBLE",
            146: "INT",
            147: "BOOL",
            148: "VEC2",
            149: "VEC3",
            150: "VEC4",
            151: "BVEC2",
            152: "BVEC3",
            153: "BVEC4",
            154: "IVEC2",
            155: "IVEC3",
            156: "IVEC4",
            157: "MAT2X2",
            158: "MAT3X3",
            159: "MAT4X4",
            160: "SAMPLER1D",
            161: "SAMPLER2D",
            162: "SAMPLER3D",
            163: "SAMPLERCUBE",
            164: "SAMPLER1DSHADOW",
            165: "SAMPLER2DSHADOW",
            166: "HIGHP",
            167: "MEDIUMP",
            168: "LOWP",
            169: "STRUCT",
            170: "{",
            172: "}",
            189: "IF",
            191: "ELSE",
            193: "SWITCH",
            194: "CASE",
            195: "DEFAULT",
            196: "WHILE",
            197: "DO",
            198: "FOR",
            202: "CONTINUE",
            203: "BREAK",
            204: "RETURN",
            205: "DISCARD",
            206: "DEBUGGER"
          },
          productions_: [0, [3, 2], [4, 3], [6, 0], [6, 3], [12, 2], [12, 2], [12, 2], [12, 2], [12, 2], [7, 0], [7, 2], [19, 1], [19, 1], [18, 5], [8, 1], [8, 2], [20, 1], [20, 1], [27, 1], [27, 1], [27, 1], [27, 1], [27, 3], [33, 1], [33, 4], [33, 1], [33, 3], [33, 2], [33, 2], [35, 1], [37, 1], [41, 1], [41, 3], [42, 2], [42, 2], [45, 2], [45, 1], [44, 2], [44, 3], [46, 2], [46, 2], [46, 1], [43, 2], [43, 2], [53, 2], [53, 1], [52, 2], [52, 3], [54, 2], [55, 1], [55, 2], [55, 2], [55, 2], [56, 1], [56, 1], [56, 1], [56, 1], [61, 1], [61, 3], [61, 3], [61, 3], [65, 1], [65, 3], [65, 3], [66, 1], [66, 3], [66, 3], [69, 1], [69, 3], [69, 3], [69, 3], [69, 3], [74, 1], [74, 3], [74, 3], [77, 1], [77, 3], [79, 1], [79, 3], [81, 1], [81, 3], [83, 1], [83, 3], [85, 1], [85, 3], [87, 1], [87, 3], [89, 1], [89, 5], [48, 1], [48, 3], [91, 1], [91, 1], [91, 1], [91, 1], [91, 1], [91, 1], [91, 1], [91, 1], [91, 1], [91, 1], [91, 1], [31, 1], [31, 3], [103, 1], [104, 2], [104, 2], [104, 4], [105, 2], [111, 1], [111, 1], [113, 2], [113, 3], [112, 3], [116, 2], [116, 5], [114, 3], [114, 2], [114, 3], [114, 2], [118, 0], [118, 1], [118, 1], [118, 1], [119, 1], [107, 1], [107, 3], [107, 5], [107, 6], [107, 7], [107, 8], [107, 5], [123, 1], [123, 2], [123, 4], [123, 5], [123, 6], [123, 7], [123, 4], [123, 2], [115, 1], [115, 2], [127, 4], [129, 1], [129, 3], [130, 1], [130, 3], [131, 1], [131, 1], [131, 1], [117, 1], [126, 1], [126, 1], [126, 2], [126, 1], [126, 2], [126, 2], [126, 3], [126, 1], [136, 1], [136, 1], [136, 1], [136, 2], [136, 1], [136, 1], [136, 2], [136, 2], [136, 1], [50, 1], [50, 2], [110, 1], [110, 3], [110, 4], [141, 1], [141, 1], [141, 1], [142, 1], [142, 1], [142, 1], [142, 1], [142, 1], [142, 1], [142, 1], [142, 1], [142, 1], [142, 1], [142, 1], [142, 1], [142, 1], [142, 1], [142, 1], [142, 1], [142, 1], [142, 1], [142, 1], [142, 1], [142, 1], [142, 1], [142, 1], [109, 1], [109, 1], [109, 1], [143, 5], [143, 4], [171, 1], [171, 2], [173, 3], [174, 1], [174, 3], [175, 1], [175, 4], [124, 1], [176, 1], [177, 1], [177, 1], [179, 1], [179, 1], [179, 1], [179, 1], [179, 1], [179, 1], [179, 1], [178, 2], [178, 3], [187, 1], [187, 1], [188, 2], [188, 3], [186, 1], [186, 2], [180, 1], [180, 2], [181, 5], [190, 3], [190, 1], [192, 1], [192, 4], [182, 5], [183, 3], [183, 2], [184, 5], [184, 7], [184, 6], [199, 1], [199, 1], [201, 1], [201, 0], [200, 2], [200, 3], [185, 2], [185, 2], [185, 2], [185, 3], [185, 2], [185, 2], [24, 1], [24, 1], [24, 1], [207, 2]],
          performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
            /* this == yyval */

            var $0 = $$.length - 1;
            switch (yystate) {
              case 1:
                return $$[$0 - 1];
                break;
              case 15:
              case 16:
                if ($$[$0] !== null) {
                  yy.state.addAstNode($$[$0]);
                }
                break;
              case 19:
                this.$ = new AstExpression('ident');
                this.$.setLocation(_$[$0]);
                this.$.primary_expression.identifier = $$[$0];
                break;
              case 20:
                this.$ = new AstExpression('int');
                this.$.setLocation(_$[$0]);
                this.$.primary_expression.int_constant = $$[$0];
                this.$.primary_expression.type = 'int';
                break;
              case 21:
                this.$ = new AstExpression('float');
                this.$.setLocation(_$[$0]);
                this.$.primary_expression.float_constant = $$[$0];
                this.$.primary_expression.type = 'float';
                break;
              case 22:
                this.$ = new AstExpression('bool');
                this.$.setLocation(_$[$0]);
                this.$.primary_expression.bool_constant = $$[$0];
                this.$.primary_expression.type = 'bool';
                break;
              case 23:
                this.$ = $$[$0 - 1];
                this.$.grouped = true;
                break;
              case 25:
                this.$ = new AstExpression('[]', $$[$0 - 3], $$[$0 - 1]);
                this.$.setLocation(_$[$0 - 3]);
                break;
              case 27:
                this.$ = new AstExpression('.', $$[$0 - 2]);
                this.$.setLocation(_$[$0 - 2]);
                this.$.primary_expression.identifier = $$[$0];
                break;
              case 28:
                this.$ = new AstExpression('x++', $$[$0 - 1]);
                this.$.setLocation(_$[$0 - 1]);
                break;
              case 29:
                this.$ = new AstExpression('x--', $$[$0 - 1]);
                this.$.setLocation(_$[$0 - 1]);
                break;
              case 38:
                this.$ = $$[$0 - 1];
                this.$.setLocation(_$[$0 - 1]);
                this.$.expressions.push($$[$0]);
                break;
              case 39:
                this.$ = $$[$0 - 2];
                this.$.setLocation(_$[$0 - 2]);
                this.$.expressions.push($$[$0]);
                break;
              case 40:
                this.$ = new AstFunctionExpression($$[$0 - 1]);
                this.$.setLocation(_$[$0 - 1]);
                break;
              case 41:
                var callee = new AstExpression($$[$0 - 1]);
                this.$ = new AstFunctionExpression(callee);
                this.$.setLocation(_$[$0 - 1]);
                break;
              case 51:
                this.$ = new AstExpression('++x', $$[$0]);
                this.$.setLocation(_$[$0 - 1]);
                break;
              case 52:
                this.$ = new AstExpression('--x', $$[$0]);
                this.$.setLocation(_$[$0 - 1]);
                break;
              case 53:
                this.$ = new AstExpression($$[$0 - 1], $$[$0]);
                this.$.setLocation(_$[$0 - 1]);
                break;
              case 54:
                this.$ = 'POS';
                break;
              case 55:
                this.$ = 'NEG';
                break;
              case 59:
              case 60:
              case 61:
              case 63:
              case 64:
              case 66:
              case 67:
              case 69:
              case 70:
              case 71:
              case 72:
              case 74:
              case 75:
              case 77:
              case 79:
              case 81:
              case 83:
              case 85:
              case 87:
                this.$ = new AstExpressionBin($$[$0 - 1], $$[$0 - 2], $$[$0]);
                this.$.setLocation(_$[$0 - 2]);
                break;
              case 89:
                this.$ = new AstExpression($$[$0 - 3], $$[$0 - 4], $$[$0 - 2], $$[$0]);
                this.$.setLocation(_$[$0 - 4]);
                break;
              case 91:
                this.$ = new AstExpression($$[$0 - 1], $$[$0 - 2], $$[$0]);
                this.$.setLocation(_$[$0 - 2]);
                break;
              case 103:
                this.$ = $$[$0];
                break;
              case 104:
                if ($$[$0 - 2].oper !== $$[$0 - 1]) {
                  this.$ = new AstExpression($$[$0 - 1]);
                  this.$.setLocation(_$[$0 - 2]);
                  this.$.expressions.push($$[$0 - 2]);
                } else {
                  this.$ = $$[$0 - 2];
                }
                this.$.expressions.push($$[$0]);
                break;
              case 106:
                yy.state.symbols.pop_scope();
                this.$ = $$[$0 - 1];
                break;
              case 107:
                this.$ = $$[$0 - 1];
                break;
              case 108:
                $$[$0 - 1].precision = $$[$0 - 2];
                $$[$0 - 1].is_precision_statement = true;
                this.$ = $$[$0 - 1];
                break;
              case 112:
                this.$ = $$[$0 - 1];
                this.$.parameters.push($$[$0]);
                break;
              case 113:
                this.$ = $$[$0 - 2];
                this.$.parameters.push($$[$0]);
                break;
              case 114:
                this.$ = new AstFunction();
                this.$.setLocation(_$[$0 - 2]);
                this.$.return_type = $$[$0 - 2];
                this.$.identifier = $$[$0 - 1];

                //Check for duplicates
                if ($$[$0 - 1] == 'main') {
                  if (yy.state.symbols.get_function($$[$0 - 1])) {
                    var e = new Error("Cannot define main() more than once");
                    e.lineNumber = _$[$0 - 2].first_line;
                    e.columnNumber = _$[$0 - 2].first_column;
                    throw e;
                  }
                }
                this.$.entry = yy.state.symbols.add_function($$[$0 - 1], $$[$0 - 2].specifier.type_name);
                this.$.entry.Ast = this.$;
                yy.state.symbols.push_scope();
                break;
              case 115:
                this.$ = new AstParameterDeclarator();
                this.$.setLocation(_$[$0 - 1]);
                this.$.type = new AstFullySpecifiedType();
                this.$.type.setLocation(_$[$0 - 1]);
                this.$.type.specifier = $$[$0 - 1];
                this.$.identifier = $$[$0];
                break;
              case 117:
                $$[$0 - 2].concat($$[$0 - 1]);
                this.$ = $$[$0];
                this.$.type.qualifier = $$[$0 - 2];
                break;
              case 118:
                this.$ = $$[$0];
                this.$.type.qualifier = $$[$0 - 1];
                break;
              case 119:
                $$[$0 - 2].concat($$[$0 - 1]);
                this.$ = new AstParameterDeclarator();
                this.$.setLocation(_$[$0 - 2]);
                this.$.type = new AstFullySpecifiedType();
                this.$.type.qualifier = $$[$0 - 2];
                this.$.type.specifier = $$[$0];
                break;
              case 120:
                this.$ = new AstParameterDeclarator();
                this.$.setLocation(_$[$0 - 1]);
                this.$.type = new AstFullySpecifiedType();
                this.$.type.qualifier = $$[$0 - 1];
                this.$.type.specifier = $$[$0];
                break;
              case 121:
                this.$ = [];
                break;
              case 122:
                this.$ = ['in'];
                break;
              case 123:
                this.$ = ['out'];
                break;
              case 124:
                this.$ = ['inout'];
                break;
              case 127:
                var decl = new AstDeclaration($$[$0], false);
                decl.setLocation(_$[$0 - 2]);
                this.$ = $$[$0 - 2];
                this.$.declarations.push(decl);
                /*yy.state.symbols.add_variable($$[$0]);*/
                break;
              case 129:
                var decl = new AstDeclaration($$[$0 - 3], true, $$[$0 - 1]);
                decl.setLocation(_$[$0 - 5]);
                this.$ = $$[$0 - 5];
                this.$.declarations.push(decl);
                /*yy.state.symbols.add_variable($$[$0-3]);*/
                break;
              case 132:
                var decl = new AstDeclaration($$[$0 - 2], false, null, $$[$0]);
                decl.setLocation(_$[$0 - 4]);
                this.$ = $$[$0 - 4];
                this.$.declarations.push(decl);
                /*yy.state.symbols.add_variable($$[$0-2]);*/
                break;
              case 133:
                if ($$[$0].specifier.type_specifier !== types.struct) {
                  yy.state.addError("empty declaration list", _$[$0].first_line, _$[$0].first_column);
                  return 0;
                }
                this.$ = new AstDeclaratorList($$[$0]);
                this.$.setLocation(_$[$0]);
                break;
              case 134:
                var decl = new AstDeclaration($$[$0], false);
                decl.setLocation(_$[$0]);
                this.$ = new AstDeclaratorList($$[$0 - 1]);
                this.$.setLocation(_$[$0 - 1]);
                this.$.declarations.push(decl);
                break;
              case 135:
                var decl = new AstDeclaration($$[$0 - 2], true);
                decl.setLocation(_$[$0 - 2]);
                this.$ = new AstDeclaratorList($$[$0 - 3]);
                this.$.setLocation(_$[$0 - 3]);
                this.$.declarations.push(decl);
                break;
              case 136:
                var decl = new AstDeclaration($$[$0 - 3], true, $$[$0 - 1]);
                decl.setLocation(_$[$0 - 3]);
                this.$ = new AstDeclaratorList($$[$0 - 4]);
                this.$.setLocation(_$[$0 - 4]);
                this.$.declarations.push(decl);
                break;
              case 137:
                var decl = new AstDeclaration($$[$0 - 4], true, null, $$[$0]);
                decl.setLocation(_$[$0 - 4]);
                this.$ = new AstDeclaratorList($$[$0 - 5]);
                this.$.setLocation(_$[$0 - 5]);
                this.$.declarations.push(decl);
                break;
              case 138:
                var decl = new AstDeclaration($$[$0 - 5], true, $$[$0 - 3], $$[$0]);
                decl.setLocation(_$[$0 - 5]);
                this.$ = new AstDeclaratorList($$[$0 - 6]);
                this.$.setLocation(_$[$0 - 6]);
                this.$.declarations.push(decl);
                break;
              case 139:
                var decl = new AstDeclaration($$[$0 - 2], false, null, $$[$0]);
                decl.setLocation(_$[$0 - 2]);
                this.$ = new AstDeclaratorList($$[$0 - 3]);
                this.$.setLocation(_$[$0 - 3]);
                this.$.declarations.push(decl);
                break;
              case 141:
                this.$ = new AstFullySpecifiedType();
                this.$.setLocation(_$[$0]);
                this.$.specifier = $$[$0];
                break;
              case 142:
                this.$ = new AstFullySpecifiedType();
                this.$.setLocation(_$[$0 - 1]);
                this.$.qualifier = $$[$0 - 1];
                this.$.specifier = $$[$0];
                break;
              case 143:
                this.$ = $$[$0 - 1];
                break;
              case 151:
              case 160:
                this.$ = ['const'];
                break;
              case 161:
                this.$ = ['attribute'];
                break;
              case 162:
                this.$ = ['varying'];
                break;
              case 163:
                this.$ = ['centroid', 'varying'];
                break;
              case 164:
                this.$ = ['in'];
                break;
              case 165:
                this.$ = ['out'];
                break;
              case 166:
                this.$ = ['centroid', 'in'];
                break;
              case 167:
                this.$ = ['centroid', 'out'];
                break;
              case 168:
                this.$ = ['uniform'];
                break;
              case 169:
                this.$ = $$[$0];
                break;
              case 170:
                this.$ = $$[$0];
                this.$.precision = $$[$0 - 1];
                break;
              case 174:
              case 175:
              case 176:
                this.$ = new AstTypeSpecifier($$[$0]);
                this.$.setLocation(_$[$0]);
                break;
              case 200:
                this.$ = ast_precision.highp;
                break;
              case 201:
                this.$ = ast_precision.mediump;
                break;
              case 202:
                this.$ = ast_precision.lowp;
                break;
              case 203:
                this.$ = new AstStructSpecifier($$[$0 - 3], $$[$0 - 1]);
                this.$.setLocation(_$[$0 - 4]);
                yy.state.symbols.add_type($$[$0 - 3], types._void);
                break;
              case 205:
                this.$ = [$$[$0]];
                break;
              case 206:
                this.$ = $$[$0 - 1];
                this.$.push($$[$0]);
                break;
              case 207:
                var type = new AstFullySpecifiedType();
                type.setLocation(_$[$0 - 2]);
                type.specifier = $$[$0 - 2];
                this.$ = new AstDeclaratorList(type);
                this.$.setLocation(_$[$0 - 2]);
                this.$.declarations = $$[$0 - 1];
                break;
              case 210:
                this.$ = new AstDeclaration($$[$0], false);
                this.$.setLocation(_$[$0]);
                yy.state.symbols.add_variable($$[$0]);
                break;
              case 219:
              case 220:
              case 258:
                this.$ = null;
                break;
              case 223:
                this.$ = new AstCompoundStatement(true);
                this.$.setLocation(_$[$0 - 1]);
                break;
              case 224:
                yy.state.symbols.push_scope();
                this.$ = new AstCompoundStatement(true, $$[$0 - 1]);
                this.$.setLocation(_$[$0 - 2]);
                yy.state.symbols.pop_scope();
                break;
              case 228:
                this.$ = new AstCompoundStatement(false, $$[$0 - 1]);
                this.$.setLocation(_$[$0 - 2]);
                break;
              case 229:
                if ($$[$0] === null) {
                  yy.state.addError("<nil> statement", _$[$0].first_line, _$[$0].first_column);
                } else {
                  this.$ = [$$[$0]];
                }
                break;
              case 230:
                if ($$[$0] === null) {
                  yy.state.addError("<nil> statement", _$[$0 - 1].first_line, _$[$0 - 1].first_column);
                }
                this.$ = $$[$0 - 1];
                this.$.push($$[$0]);
                break;
              case 232:
                this.$ = new AstExpressionStatement($$[$0 - 1]);
                this.$.setLocation(_$[$0 - 1]);
                break;
              case 233:
                this.$ = new AstSelectionStatement($$[$0 - 2], $$[$0].then_statement, $$[$0].else_statement);
                this.$.setLocation(_$[$0 - 4]);
                break;
              case 234:
                this.$ = {};
                this.$.then_statement = $$[$0 - 2];
                this.$.else_statement = $$[$0];
                break;
              case 235:
                this.$.then_statement = $$[$0];
                break;
              case 250:
                this.$ = new AstJumpStatement('continue');
                this.$.setLocation(_$[$0 - 1]);
                break;
              case 251:
                this.$ = new AstJumpStatement('break');
                this.$.setLocation(_$[$0 - 1]);
                break;
              case 252:
                this.$ = new AstJumpStatement('return');
                this.$.setLocation(_$[$0 - 1]);
                break;
              case 253:
                this.$ = new AstJumpStatement('return', $$[$0 - 1]);
                this.$.setLocation(_$[$0 - 2]);
                break;
              case 254:
                /* Fragment shader only.*/
                this.$ = new AstJumpStatement('discard');
                this.$.setLocation(_$[$0 - 1]);
                break;
              case 255:
                this.$ = new AstJumpStatement('debugger');
                this.$.setLocation(_$[$0 - 1]);
                break;
              case 256:
              case 257:
                this.$ = $$[$0];
                break;
              case 259:
                this.$ = new AstFunctionDefinition();
                this.$.setLocation(_$[$0 - 1]);
                this.$.proto_type = $$[$0 - 1];
                this.$.body = $$[$0];
                yy.state.symbols.pop_scope();
                break;
            }
          },
          table: [o($V0, [2, 3], {
            3: 1,
            4: 2,
            6: 3,
            9: [1, 4]
          }), {
            1: [3]
          }, {
            5: [1, 5]
          }, o($V0, [2, 10], {
            7: 6
          }), {
            10: [1, 7]
          }, {
            1: [2, 1]
          }, {
            8: 8,
            12: 14,
            13: $V1,
            14: $V2,
            15: $V3,
            16: $V4,
            17: $V5,
            18: 9,
            21: $V6,
            22: [1, 11],
            24: 10,
            47: $V7,
            50: 29,
            104: 13,
            105: 15,
            107: 16,
            108: $V8,
            109: 32,
            110: 31,
            111: 23,
            112: 25,
            113: 26,
            115: 27,
            120: $V9,
            121: $Va,
            123: 24,
            125: $Vb,
            126: 30,
            127: 34,
            128: $Vc,
            131: 35,
            132: $Vd,
            133: $Ve,
            134: $Vf,
            135: $Vg,
            136: 33,
            137: $Vh,
            138: $Vi,
            139: $Vj,
            140: $Vk,
            141: 36,
            142: 51,
            143: 52,
            144: $Vl,
            145: $Vm,
            146: $Vn,
            147: $Vo,
            148: $Vp,
            149: $Vq,
            150: $Vr,
            151: $Vs,
            152: $Vt,
            153: $Vu,
            154: $Vv,
            155: $Vw,
            156: $Vx,
            157: $Vy,
            158: $Vz,
            159: $VA,
            160: $VB,
            161: $VC,
            162: $VD,
            163: $VE,
            164: $VF,
            165: $VG,
            166: $VH,
            167: $VI,
            168: $VJ,
            169: $VK,
            207: 12
          }, {
            11: [1, 78]
          }, {
            5: [2, 2],
            12: 14,
            13: $V1,
            14: $V2,
            15: $V3,
            16: $V4,
            17: $V5,
            21: $V6,
            24: 79,
            47: $V7,
            50: 29,
            104: 13,
            105: 15,
            107: 16,
            108: $V8,
            109: 32,
            110: 31,
            111: 23,
            112: 25,
            113: 26,
            115: 27,
            120: $V9,
            121: $Va,
            123: 24,
            125: $Vb,
            126: 30,
            127: 34,
            128: $Vc,
            131: 35,
            132: $Vd,
            133: $Ve,
            134: $Vf,
            135: $Vg,
            136: 33,
            137: $Vh,
            138: $Vi,
            139: $Vj,
            140: $Vk,
            141: 36,
            142: 51,
            143: 52,
            144: $Vl,
            145: $Vm,
            146: $Vn,
            147: $Vo,
            148: $Vp,
            149: $Vq,
            150: $Vr,
            151: $Vs,
            152: $Vt,
            153: $Vu,
            154: $Vv,
            155: $Vw,
            156: $Vx,
            157: $Vy,
            158: $Vz,
            159: $VA,
            160: $VB,
            161: $VC,
            162: $VD,
            163: $VE,
            164: $VF,
            165: $VG,
            166: $VH,
            167: $VI,
            168: $VJ,
            169: $VK,
            207: 12
          }, o($V0, [2, 11]), o($VL, [2, 15]), {
            19: 80,
            20: 81,
            21: $VM,
            25: $VN,
            26: $VO
          }, o($VL, [2, 256]), o($VL, [2, 257]), o($VL, [2, 258]), {
            106: $VP,
            170: $VQ,
            188: 85
          }, {
            49: [1, 89],
            106: [1, 88]
          }, {
            109: 90,
            166: $VH,
            167: $VI,
            168: $VJ
          }, {
            11: [1, 91]
          }, {
            11: [1, 92]
          }, {
            11: [1, 93]
          }, {
            11: [1, 94]
          }, {
            11: [1, 95]
          }, {
            32: [1, 96]
          }, o($VR, [2, 126]), o($VS, $VT, {
            114: 97,
            117: 98,
            118: 99,
            32: [2, 110],
            120: $VU,
            121: $VV,
            122: $VW,
            135: $VX
          }), {
            32: [2, 111],
            49: [1, 104]
          }, o($VR, [2, 133], {
            19: 105,
            20: 106,
            21: $VM,
            25: $VN,
            26: $VO
          }), o($VS, $VY, {
            20: 107,
            136: 108,
            131: 109,
            25: $VN,
            26: $VO,
            120: $V9,
            121: $Va,
            132: $Vd,
            133: $Ve,
            134: $Vf,
            135: $Vg,
            137: $Vh,
            138: $Vi,
            139: $Vj,
            140: $Vk
          }), o($VZ, $V_), {
            21: $V6,
            47: $V7,
            50: 110,
            109: 32,
            110: 31,
            141: 36,
            142: 51,
            143: 52,
            144: $Vl,
            145: $Vm,
            146: $Vn,
            147: $Vo,
            148: $Vp,
            149: $Vq,
            150: $Vr,
            151: $Vs,
            152: $Vt,
            153: $Vu,
            154: $Vv,
            155: $Vw,
            156: $Vx,
            157: $Vy,
            158: $Vz,
            159: $VA,
            160: $VB,
            161: $VC,
            162: $VD,
            163: $VE,
            164: $VF,
            165: $VG,
            166: $VH,
            167: $VI,
            168: $VJ,
            169: $VK
          }, o($V$, [2, 169]), {
            21: $V6,
            47: $V7,
            110: 111,
            141: 36,
            142: 51,
            143: 52,
            144: $Vl,
            145: $Vm,
            146: $Vn,
            147: $Vo,
            148: $Vp,
            149: $Vq,
            150: $Vr,
            151: $Vs,
            152: $Vt,
            153: $Vu,
            154: $Vv,
            155: $Vw,
            156: $Vx,
            157: $Vy,
            158: $Vz,
            159: $VA,
            160: $VB,
            161: $VC,
            162: $VD,
            163: $VE,
            164: $VF,
            165: $VG,
            169: $VK
          }, o($VS, [2, 152]), o($VS, [2, 153], {
            136: 112,
            120: $V9,
            121: $Va,
            135: $Vg,
            137: $Vh,
            138: $Vi,
            139: $Vj,
            140: $Vk
          }), o($VS, [2, 155], {
            136: 113,
            120: $V9,
            121: $Va,
            135: $Vg,
            137: $Vh,
            138: $Vi,
            139: $Vj,
            140: $Vk
          }), o($V$, [2, 171], {
            34: [1, 114]
          }), o($V01, [2, 200]), o($V01, [2, 201]), o($V01, [2, 202]), o($VS, [2, 160]), o($VS, [2, 161]), o($VS, [2, 162]), {
            120: [1, 116],
            121: [1, 117],
            138: [1, 115]
          }, o($VS, [2, 164]), o($VS, [2, 165]), o($VS, [2, 168]), {
            30: [1, 118]
          }, o($V11, [2, 148]), o($V11, [2, 149]), o($V11, [2, 150]), o($V21, [2, 174]), o($V21, [2, 175]), o($V21, [2, 176]), o($V21, $V31), o($V21, [2, 178]), o($V21, [2, 179]), o($V21, [2, 180]), o($V21, [2, 181]), o($V21, [2, 182]), o($V21, [2, 183]), o($V21, [2, 184]), o($V21, [2, 185]), o($V21, [2, 186]), o($V21, [2, 187]), o($V21, [2, 188]), o($V21, [2, 189]), o($V21, [2, 190]), o($V21, [2, 191]), o($V21, [2, 192]), o($V21, [2, 193]), o($V21, [2, 194]), o($V21, [2, 195]), o($V21, [2, 196]), o($V21, [2, 197]), o($V21, [2, 198]), o($V21, [2, 199]), {
            19: 119,
            20: 81,
            21: $VM,
            25: $VN,
            26: $VO,
            170: [1, 120]
          }, o($V0, [2, 4]), o($VL, [2, 16]), {
            23: [1, 121]
          }, o([11, 23, 32, 34, 49, 92, 106, 170], $V41), o([11, 23, 32, 34, 36, 38, 39, 40, 49, 57, 58, 62, 63, 64, 67, 68, 70, 71, 72, 73, 75, 76, 78, 80, 82, 84, 86, 88, 90, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 106, 170], [2, 13]), o($V51, [2, 17]), o($V51, [2, 18]), o($VL, [2, 259]), o($V61, [2, 106]), {
            10: $V71,
            20: 168,
            21: $V6,
            25: $VN,
            26: $VO,
            27: 161,
            28: $V81,
            29: $V91,
            30: $Va1,
            31: 137,
            33: 155,
            37: 162,
            39: $Vb1,
            40: $Vc1,
            41: 173,
            42: 175,
            44: 177,
            45: 178,
            46: 180,
            47: $V7,
            48: 151,
            50: 159,
            51: $Vd1,
            55: 153,
            56: 158,
            57: $Ve1,
            58: $Vf1,
            59: $Vg1,
            60: $Vh1,
            61: 186,
            65: 185,
            66: 184,
            69: 183,
            74: 181,
            77: 179,
            79: 176,
            81: 174,
            83: 167,
            85: 160,
            87: 154,
            89: 152,
            104: 135,
            105: 150,
            106: $Vi1,
            107: 16,
            108: $V8,
            109: 32,
            110: 31,
            111: 23,
            112: 25,
            113: 26,
            115: 27,
            120: $V9,
            121: $Va,
            123: 24,
            125: $Vb,
            126: 30,
            127: 34,
            128: $Vc,
            131: 35,
            132: $Vd,
            133: $Ve,
            134: $Vf,
            135: $Vg,
            136: 33,
            137: $Vh,
            138: $Vi,
            139: $Vj,
            140: $Vk,
            141: 36,
            142: 51,
            143: 52,
            144: $Vl,
            145: $Vm,
            146: $Vn,
            147: $Vo,
            148: $Vp,
            149: $Vq,
            150: $Vr,
            151: $Vs,
            152: $Vt,
            153: $Vu,
            154: $Vv,
            155: $Vw,
            156: $Vx,
            157: $Vy,
            158: $Vz,
            159: $VA,
            160: $VB,
            161: $VC,
            162: $VD,
            163: $VE,
            164: $VF,
            165: $VG,
            166: $VH,
            167: $VI,
            168: $VJ,
            169: $VK,
            170: $Vj1,
            172: [1, 122],
            176: 128,
            177: 124,
            178: 125,
            179: 126,
            180: 129,
            181: 130,
            182: 131,
            183: 132,
            184: 133,
            185: 134,
            186: 123,
            189: $Vk1,
            193: $Vl1,
            194: $Vm1,
            195: $Vn1,
            196: $Vo1,
            197: $Vp1,
            198: $Vq1,
            202: $Vr1,
            203: $Vs1,
            204: $Vt1,
            205: $Vu1,
            206: $Vv1
          }, o($V61, [2, 107]), {
            19: 187,
            20: 81,
            21: $VM,
            25: $VN,
            26: $VO
          }, {
            21: $V6,
            47: $V7,
            110: 188,
            141: 36,
            142: 51,
            143: 52,
            144: $Vl,
            145: $Vm,
            146: $Vn,
            147: $Vo,
            148: $Vp,
            149: $Vq,
            150: $Vr,
            151: $Vs,
            152: $Vt,
            153: $Vu,
            154: $Vv,
            155: $Vw,
            156: $Vx,
            157: $Vy,
            158: $Vz,
            159: $VA,
            160: $VB,
            161: $VC,
            162: $VD,
            163: $VE,
            164: $VF,
            165: $VG,
            169: $VK
          }, o($VL, [2, 5]), o($VL, [2, 6]), o($VL, [2, 7]), o($VL, [2, 8]), o($VL, [2, 9]), o([106, 170], [2, 109]), o($Vw1, [2, 112]), o($VS, $VT, {
            118: 189,
            120: $VU,
            121: $VV,
            122: $VW
          }), {
            21: $V6,
            47: $V7,
            50: 192,
            109: 32,
            110: 31,
            116: 190,
            119: 191,
            141: 36,
            142: 51,
            143: 52,
            144: $Vl,
            145: $Vm,
            146: $Vn,
            147: $Vo,
            148: $Vp,
            149: $Vq,
            150: $Vr,
            151: $Vs,
            152: $Vt,
            153: $Vu,
            154: $Vv,
            155: $Vw,
            156: $Vx,
            157: $Vy,
            158: $Vz,
            159: $VA,
            160: $VB,
            161: $VC,
            162: $VD,
            163: $VE,
            164: $VF,
            165: $VG,
            166: $VH,
            167: $VI,
            168: $VJ,
            169: $VK
          }, o([21, 47, 120, 121, 122, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169], [2, 151]), o($VS, [2, 122]), o($VS, [2, 123]), o($VS, [2, 124]), o($VS, $VT, {
            117: 98,
            118: 99,
            114: 193,
            120: $VU,
            121: $VV,
            122: $VW,
            135: $VX
          }), o($VR, [2, 134], {
            34: [1, 194],
            92: [1, 195]
          }), o([34, 49, 92, 106], $V41, {
            30: [1, 196]
          }), o($VR, [2, 140]), o($VS, [2, 157]), {
            120: $V9,
            121: $Va,
            135: $Vg,
            136: 197,
            137: $Vh,
            138: $Vi,
            139: $Vj,
            140: $Vk
          }, o($VZ, [2, 142]), o($V$, [2, 170]), o($VS, [2, 154]), o($VS, [2, 156]), {
            10: $V71,
            20: 168,
            21: $V6,
            25: $VN,
            26: $VO,
            27: 161,
            28: $V81,
            29: $V91,
            30: $Va1,
            33: 155,
            36: [1, 198],
            37: 162,
            39: $Vb1,
            40: $Vc1,
            41: 173,
            42: 175,
            44: 177,
            45: 178,
            46: 180,
            47: $V7,
            50: 202,
            51: $Vd1,
            55: 201,
            56: 158,
            57: $Ve1,
            58: $Vf1,
            59: $Vg1,
            60: $Vh1,
            61: 186,
            65: 185,
            66: 184,
            69: 183,
            74: 181,
            77: 179,
            79: 176,
            81: 174,
            83: 167,
            85: 160,
            87: 154,
            89: 200,
            103: 199,
            109: 32,
            110: 31,
            141: 36,
            142: 51,
            143: 52,
            144: $Vl,
            145: $Vm,
            146: $Vn,
            147: $Vo,
            148: $Vp,
            149: $Vq,
            150: $Vr,
            151: $Vs,
            152: $Vt,
            153: $Vu,
            154: $Vv,
            155: $Vw,
            156: $Vx,
            157: $Vy,
            158: $Vz,
            159: $VA,
            160: $VB,
            161: $VC,
            162: $VD,
            163: $VE,
            164: $VF,
            165: $VG,
            166: $VH,
            167: $VI,
            168: $VJ,
            169: $VK
          }, o($VS, [2, 163]), o($VS, [2, 166]), o($VS, [2, 167]), {
            19: 205,
            20: 81,
            21: $VM,
            25: $VN,
            26: $VO,
            129: 203,
            130: 204
          }, {
            170: [1, 206]
          }, {
            21: $V6,
            47: $V7,
            50: 209,
            109: 32,
            110: 31,
            141: 36,
            142: 51,
            143: 52,
            144: $Vl,
            145: $Vm,
            146: $Vn,
            147: $Vo,
            148: $Vp,
            149: $Vq,
            150: $Vr,
            151: $Vs,
            152: $Vt,
            153: $Vu,
            154: $Vv,
            155: $Vw,
            156: $Vx,
            157: $Vy,
            158: $Vz,
            159: $VA,
            160: $VB,
            161: $VC,
            162: $VD,
            163: $VE,
            164: $VF,
            165: $VG,
            166: $VH,
            167: $VI,
            168: $VJ,
            169: $VK,
            171: 207,
            173: 208
          }, {
            19: 210,
            20: 81,
            21: $VM,
            25: $VN,
            26: $VO
          }, o($V61, [2, 227]), {
            10: $V71,
            20: 168,
            21: $V6,
            25: $VN,
            26: $VO,
            27: 161,
            28: $V81,
            29: $V91,
            30: $Va1,
            31: 137,
            33: 155,
            37: 162,
            39: $Vb1,
            40: $Vc1,
            41: 173,
            42: 175,
            44: 177,
            45: 178,
            46: 180,
            47: $V7,
            48: 151,
            50: 159,
            51: $Vd1,
            55: 153,
            56: 158,
            57: $Ve1,
            58: $Vf1,
            59: $Vg1,
            60: $Vh1,
            61: 186,
            65: 185,
            66: 184,
            69: 183,
            74: 181,
            77: 179,
            79: 176,
            81: 174,
            83: 167,
            85: 160,
            87: 154,
            89: 152,
            104: 135,
            105: 150,
            106: $Vi1,
            107: 16,
            108: $V8,
            109: 32,
            110: 31,
            111: 23,
            112: 25,
            113: 26,
            115: 27,
            120: $V9,
            121: $Va,
            123: 24,
            125: $Vb,
            126: 30,
            127: 34,
            128: $Vc,
            131: 35,
            132: $Vd,
            133: $Ve,
            134: $Vf,
            135: $Vg,
            136: 33,
            137: $Vh,
            138: $Vi,
            139: $Vj,
            140: $Vk,
            141: 36,
            142: 51,
            143: 52,
            144: $Vl,
            145: $Vm,
            146: $Vn,
            147: $Vo,
            148: $Vp,
            149: $Vq,
            150: $Vr,
            151: $Vs,
            152: $Vt,
            153: $Vu,
            154: $Vv,
            155: $Vw,
            156: $Vx,
            157: $Vy,
            158: $Vz,
            159: $VA,
            160: $VB,
            161: $VC,
            162: $VD,
            163: $VE,
            164: $VF,
            165: $VG,
            166: $VH,
            167: $VI,
            168: $VJ,
            169: $VK,
            170: $Vj1,
            172: [1, 211],
            176: 128,
            177: 212,
            178: 125,
            179: 126,
            180: 129,
            181: 130,
            182: 131,
            183: 132,
            184: 133,
            185: 134,
            189: $Vk1,
            193: $Vl1,
            194: $Vm1,
            195: $Vn1,
            196: $Vo1,
            197: $Vp1,
            198: $Vq1,
            202: $Vr1,
            203: $Vs1,
            204: $Vt1,
            205: $Vu1,
            206: $Vv1
          }, o($Vx1, [2, 229]), o($Vy1, [2, 214]), o($Vy1, [2, 215]), {
            10: $V71,
            20: 168,
            21: $V6,
            25: $VN,
            26: $VO,
            27: 161,
            28: $V81,
            29: $V91,
            30: $Va1,
            31: 137,
            33: 155,
            37: 162,
            39: $Vb1,
            40: $Vc1,
            41: 173,
            42: 175,
            44: 177,
            45: 178,
            46: 180,
            47: $V7,
            48: 151,
            50: 159,
            51: $Vd1,
            55: 153,
            56: 158,
            57: $Ve1,
            58: $Vf1,
            59: $Vg1,
            60: $Vh1,
            61: 186,
            65: 185,
            66: 184,
            69: 183,
            74: 181,
            77: 179,
            79: 176,
            81: 174,
            83: 167,
            85: 160,
            87: 154,
            89: 152,
            104: 135,
            105: 150,
            106: $Vi1,
            107: 16,
            108: $V8,
            109: 32,
            110: 31,
            111: 23,
            112: 25,
            113: 26,
            115: 27,
            120: $V9,
            121: $Va,
            123: 24,
            125: $Vb,
            126: 30,
            127: 34,
            128: $Vc,
            131: 35,
            132: $Vd,
            133: $Ve,
            134: $Vf,
            135: $Vg,
            136: 33,
            137: $Vh,
            138: $Vi,
            139: $Vj,
            140: $Vk,
            141: 36,
            142: 51,
            143: 52,
            144: $Vl,
            145: $Vm,
            146: $Vn,
            147: $Vo,
            148: $Vp,
            149: $Vq,
            150: $Vr,
            151: $Vs,
            152: $Vt,
            153: $Vu,
            154: $Vv,
            155: $Vw,
            156: $Vx,
            157: $Vy,
            158: $Vz,
            159: $VA,
            160: $VB,
            161: $VC,
            162: $VD,
            163: $VE,
            164: $VF,
            165: $VG,
            166: $VH,
            167: $VI,
            168: $VJ,
            169: $VK,
            170: $Vj1,
            172: [1, 213],
            176: 128,
            177: 124,
            178: 125,
            179: 126,
            180: 129,
            181: 130,
            182: 131,
            183: 132,
            184: 133,
            185: 134,
            186: 214,
            189: $Vk1,
            193: $Vl1,
            194: $Vm1,
            195: $Vn1,
            196: $Vo1,
            197: $Vp1,
            198: $Vq1,
            202: $Vr1,
            203: $Vs1,
            204: $Vt1,
            205: $Vu1,
            206: $Vv1
          }, o($Vy1, [2, 216]), o($Vy1, [2, 217]), o($Vy1, [2, 218]), o($Vy1, [2, 219]), o($Vy1, [2, 220]), o($Vy1, [2, 221]), o($Vy1, [2, 222]), o($Vy1, [2, 213]), o($Vy1, [2, 231]), {
            49: $Vz1,
            106: [1, 215]
          }, {
            30: [1, 217]
          }, {
            30: [1, 218]
          }, {
            10: $V71,
            20: 168,
            21: $V6,
            25: $VN,
            26: $VO,
            27: 161,
            28: $V81,
            29: $V91,
            30: $Va1,
            31: 219,
            33: 155,
            37: 162,
            39: $Vb1,
            40: $Vc1,
            41: 173,
            42: 175,
            44: 177,
            45: 178,
            46: 180,
            47: $V7,
            48: 151,
            50: 202,
            51: $Vd1,
            55: 153,
            56: 158,
            57: $Ve1,
            58: $Vf1,
            59: $Vg1,
            60: $Vh1,
            61: 186,
            65: 185,
            66: 184,
            69: 183,
            74: 181,
            77: 179,
            79: 176,
            81: 174,
            83: 167,
            85: 160,
            87: 154,
            89: 152,
            109: 32,
            110: 31,
            141: 36,
            142: 51,
            143: 52,
            144: $Vl,
            145: $Vm,
            146: $Vn,
            147: $Vo,
            148: $Vp,
            149: $Vq,
            150: $Vr,
            151: $Vs,
            152: $Vt,
            153: $Vu,
            154: $Vv,
            155: $Vw,
            156: $Vx,
            157: $Vy,
            158: $Vz,
            159: $VA,
            160: $VB,
            161: $VC,
            162: $VD,
            163: $VE,
            164: $VF,
            165: $VG,
            166: $VH,
            167: $VI,
            168: $VJ,
            169: $VK
          }, {
            23: [1, 220]
          }, {
            30: [1, 221]
          }, {
            10: $V71,
            20: 168,
            21: $V6,
            25: $VN,
            26: $VO,
            27: 161,
            28: $V81,
            29: $V91,
            30: $Va1,
            31: 137,
            33: 155,
            37: 162,
            39: $Vb1,
            40: $Vc1,
            41: 173,
            42: 175,
            44: 177,
            45: 178,
            46: 180,
            47: $V7,
            48: 151,
            50: 159,
            51: $Vd1,
            55: 153,
            56: 158,
            57: $Ve1,
            58: $Vf1,
            59: $Vg1,
            60: $Vh1,
            61: 186,
            65: 185,
            66: 184,
            69: 183,
            74: 181,
            77: 179,
            79: 176,
            81: 174,
            83: 167,
            85: 160,
            87: 154,
            89: 152,
            104: 135,
            105: 150,
            106: $Vi1,
            107: 16,
            108: $V8,
            109: 32,
            110: 31,
            111: 23,
            112: 25,
            113: 26,
            115: 27,
            120: $V9,
            121: $Va,
            123: 24,
            125: $Vb,
            126: 30,
            127: 34,
            128: $Vc,
            131: 35,
            132: $Vd,
            133: $Ve,
            134: $Vf,
            135: $Vg,
            136: 33,
            137: $Vh,
            138: $Vi,
            139: $Vj,
            140: $Vk,
            141: 36,
            142: 51,
            143: 52,
            144: $Vl,
            145: $Vm,
            146: $Vn,
            147: $Vo,
            148: $Vp,
            149: $Vq,
            150: $Vr,
            151: $Vs,
            152: $Vt,
            153: $Vu,
            154: $Vv,
            155: $Vw,
            156: $Vx,
            157: $Vy,
            158: $Vz,
            159: $VA,
            160: $VB,
            161: $VC,
            162: $VD,
            163: $VE,
            164: $VF,
            165: $VG,
            166: $VH,
            167: $VI,
            168: $VJ,
            169: $VK,
            170: $Vj1,
            176: 128,
            177: 222,
            178: 125,
            179: 126,
            180: 129,
            181: 130,
            182: 131,
            183: 132,
            184: 133,
            185: 134,
            189: $Vk1,
            193: $Vl1,
            194: $Vm1,
            195: $Vn1,
            196: $Vo1,
            197: $Vp1,
            198: $Vq1,
            202: $Vr1,
            203: $Vs1,
            204: $Vt1,
            205: $Vu1,
            206: $Vv1
          }, {
            30: [1, 223]
          }, {
            106: [1, 224]
          }, {
            106: [1, 225]
          }, {
            10: $V71,
            20: 168,
            21: $V6,
            25: $VN,
            26: $VO,
            27: 161,
            28: $V81,
            29: $V91,
            30: $Va1,
            31: 227,
            33: 155,
            37: 162,
            39: $Vb1,
            40: $Vc1,
            41: 173,
            42: 175,
            44: 177,
            45: 178,
            46: 180,
            47: $V7,
            48: 151,
            50: 202,
            51: $Vd1,
            55: 153,
            56: 158,
            57: $Ve1,
            58: $Vf1,
            59: $Vg1,
            60: $Vh1,
            61: 186,
            65: 185,
            66: 184,
            69: 183,
            74: 181,
            77: 179,
            79: 176,
            81: 174,
            83: 167,
            85: 160,
            87: 154,
            89: 152,
            106: [1, 226],
            109: 32,
            110: 31,
            141: 36,
            142: 51,
            143: 52,
            144: $Vl,
            145: $Vm,
            146: $Vn,
            147: $Vo,
            148: $Vp,
            149: $Vq,
            150: $Vr,
            151: $Vs,
            152: $Vt,
            153: $Vu,
            154: $Vv,
            155: $Vw,
            156: $Vx,
            157: $Vy,
            158: $Vz,
            159: $VA,
            160: $VB,
            161: $VC,
            162: $VD,
            163: $VE,
            164: $VF,
            165: $VG,
            166: $VH,
            167: $VI,
            168: $VJ,
            169: $VK
          }, {
            106: [1, 228]
          }, {
            106: [1, 229]
          }, {
            106: $VP
          }, o($VA1, [2, 103]), o($VA1, [2, 90]), o($VB1, $VC1, {
            91: 230,
            92: [1, 231],
            93: [1, 232],
            94: [1, 233],
            95: [1, 234],
            96: [1, 235],
            97: [1, 236],
            98: [1, 237],
            99: [1, 238],
            100: [1, 239],
            101: [1, 240],
            102: [1, 241]
          }), o($VA1, [2, 88], {
            88: [1, 243],
            90: [1, 242]
          }), o($VD1, [2, 50], {
            34: [1, 244],
            38: [1, 245],
            39: [1, 246],
            40: [1, 247]
          }), {
            10: $V71,
            20: 168,
            21: $V6,
            25: $VN,
            26: $VO,
            27: 161,
            28: $V81,
            29: $V91,
            30: $Va1,
            33: 155,
            37: 162,
            39: $Vb1,
            40: $Vc1,
            41: 173,
            42: 175,
            44: 177,
            45: 178,
            46: 180,
            47: $V7,
            50: 202,
            51: $Vd1,
            55: 248,
            56: 158,
            57: $Ve1,
            58: $Vf1,
            59: $Vg1,
            60: $Vh1,
            109: 32,
            110: 31,
            141: 36,
            142: 51,
            143: 52,
            144: $Vl,
            145: $Vm,
            146: $Vn,
            147: $Vo,
            148: $Vp,
            149: $Vq,
            150: $Vr,
            151: $Vs,
            152: $Vt,
            153: $Vu,
            154: $Vv,
            155: $Vw,
            156: $Vx,
            157: $Vy,
            158: $Vz,
            159: $VA,
            160: $VB,
            161: $VC,
            162: $VD,
            163: $VE,
            164: $VF,
            165: $VG,
            166: $VH,
            167: $VI,
            168: $VJ,
            169: $VK
          }, {
            10: $V71,
            20: 168,
            21: $V6,
            25: $VN,
            26: $VO,
            27: 161,
            28: $V81,
            29: $V91,
            30: $Va1,
            33: 155,
            37: 162,
            39: $Vb1,
            40: $Vc1,
            41: 173,
            42: 175,
            44: 177,
            45: 178,
            46: 180,
            47: $V7,
            50: 202,
            51: $Vd1,
            55: 249,
            56: 158,
            57: $Ve1,
            58: $Vf1,
            59: $Vg1,
            60: $Vh1,
            109: 32,
            110: 31,
            141: 36,
            142: 51,
            143: 52,
            144: $Vl,
            145: $Vm,
            146: $Vn,
            147: $Vo,
            148: $Vp,
            149: $Vq,
            150: $Vr,
            151: $Vs,
            152: $Vt,
            153: $Vu,
            154: $Vv,
            155: $Vw,
            156: $Vx,
            157: $Vy,
            158: $Vz,
            159: $VA,
            160: $VB,
            161: $VC,
            162: $VD,
            163: $VE,
            164: $VF,
            165: $VG,
            166: $VH,
            167: $VI,
            168: $VJ,
            169: $VK
          }, {
            10: $V71,
            20: 168,
            21: $V6,
            25: $VN,
            26: $VO,
            27: 161,
            28: $V81,
            29: $V91,
            30: $Va1,
            33: 155,
            37: 162,
            39: $Vb1,
            40: $Vc1,
            41: 173,
            42: 175,
            44: 177,
            45: 178,
            46: 180,
            47: $V7,
            50: 202,
            51: $Vd1,
            55: 250,
            56: 158,
            57: $Ve1,
            58: $Vf1,
            59: $Vg1,
            60: $Vh1,
            109: 32,
            110: 31,
            141: 36,
            142: 51,
            143: 52,
            144: $Vl,
            145: $Vm,
            146: $Vn,
            147: $Vo,
            148: $Vp,
            149: $Vq,
            150: $Vr,
            151: $Vs,
            152: $Vt,
            153: $Vu,
            154: $Vv,
            155: $Vw,
            156: $Vx,
            157: $Vy,
            158: $Vz,
            159: $VA,
            160: $VB,
            161: $VC,
            162: $VD,
            163: $VE,
            164: $VF,
            165: $VG,
            166: $VH,
            167: $VI,
            168: $VJ,
            169: $VK
          }, o($VZ, $V_, {
            30: $VE1
          }), o($VF1, [2, 86], {
            86: $VG1
          }), o($VH1, [2, 24]), o($VH1, [2, 26]), o($VI1, [2, 54]), o($VI1, [2, 55]), o($VI1, [2, 56]), o($VI1, [2, 57]), o($VJ1, [2, 84], {
            84: $VK1
          }), o($VH1, [2, 19], {
            30: [1, 254]
          }), o($VH1, [2, 20]), o($VH1, [2, 21]), o($VH1, [2, 22]), {
            10: $V71,
            20: 168,
            21: $V6,
            25: $VN,
            26: $VO,
            27: 161,
            28: $V81,
            29: $V91,
            30: $Va1,
            31: 255,
            33: 155,
            37: 162,
            39: $Vb1,
            40: $Vc1,
            41: 173,
            42: 175,
            44: 177,
            45: 178,
            46: 180,
            47: $V7,
            48: 151,
            50: 202,
            51: $Vd1,
            55: 153,
            56: 158,
            57: $Ve1,
            58: $Vf1,
            59: $Vg1,
            60: $Vh1,
            61: 186,
            65: 185,
            66: 184,
            69: 183,
            74: 181,
            77: 179,
            79: 176,
            81: 174,
            83: 167,
            85: 160,
            87: 154,
            89: 152,
            109: 32,
            110: 31,
            141: 36,
            142: 51,
            143: 52,
            144: $Vl,
            145: $Vm,
            146: $Vn,
            147: $Vo,
            148: $Vp,
            149: $Vq,
            150: $Vr,
            151: $Vs,
            152: $Vt,
            153: $Vu,
            154: $Vv,
            155: $Vw,
            156: $Vx,
            157: $Vy,
            158: $Vz,
            159: $VA,
            160: $VB,
            161: $VC,
            162: $VD,
            163: $VE,
            164: $VF,
            165: $VG,
            166: $VH,
            167: $VI,
            168: $VJ,
            169: $VK
          }, o($VH1, [2, 31]), o($VL1, [2, 82], {
            82: $VM1
          }), o($VH1, [2, 32]), o($VN1, [2, 80], {
            80: $VO1
          }), {
            32: [1, 258],
            49: [1, 259]
          }, {
            32: [1, 260]
          }, o($VP1, [2, 78], {
            78: $VQ1
          }), {
            10: $V71,
            20: 168,
            21: $V6,
            25: $VN,
            26: $VO,
            27: 161,
            28: $V81,
            29: $V91,
            30: $Va1,
            32: [2, 37],
            33: 155,
            37: 162,
            39: $Vb1,
            40: $Vc1,
            41: 173,
            42: 175,
            44: 177,
            45: 178,
            46: 180,
            47: [1, 263],
            48: 262,
            50: 202,
            51: $Vd1,
            55: 153,
            56: 158,
            57: $Ve1,
            58: $Vf1,
            59: $Vg1,
            60: $Vh1,
            61: 186,
            65: 185,
            66: 184,
            69: 183,
            74: 181,
            77: 179,
            79: 176,
            81: 174,
            83: 167,
            85: 160,
            87: 154,
            89: 152,
            109: 32,
            110: 31,
            141: 36,
            142: 51,
            143: 52,
            144: $Vl,
            145: $Vm,
            146: $Vn,
            147: $Vo,
            148: $Vp,
            149: $Vq,
            150: $Vr,
            151: $Vs,
            152: $Vt,
            153: $Vu,
            154: $Vv,
            155: $Vw,
            156: $Vx,
            157: $Vy,
            158: $Vz,
            159: $VA,
            160: $VB,
            161: $VC,
            162: $VD,
            163: $VE,
            164: $VF,
            165: $VG,
            166: $VH,
            167: $VI,
            168: $VJ,
            169: $VK
          }, o($VR1, [2, 76], {
            75: $VS1,
            76: $VT1
          }), o($VU1, [2, 42]), o($VV1, [2, 73], {
            70: $VW1,
            71: $VX1,
            72: $VY1,
            73: $VZ1
          }), o($V_1, [2, 68], {
            67: $V$1,
            68: $V02
          }), o($V12, [2, 65], {
            57: $V22,
            58: $V32
          }), o($V42, [2, 62], {
            62: $V52,
            63: $V62,
            64: $V72
          }), o($VR, [2, 127], {
            34: [1, 277],
            92: [1, 278]
          }), {
            106: [1, 279]
          }, {
            21: $V6,
            47: $V7,
            50: 192,
            109: 32,
            110: 31,
            116: 280,
            119: 281,
            141: 36,
            142: 51,
            143: 52,
            144: $Vl,
            145: $Vm,
            146: $Vn,
            147: $Vo,
            148: $Vp,
            149: $Vq,
            150: $Vr,
            151: $Vs,
            152: $Vt,
            153: $Vu,
            154: $Vv,
            155: $Vw,
            156: $Vx,
            157: $Vy,
            158: $Vz,
            159: $VA,
            160: $VB,
            161: $VC,
            162: $VD,
            163: $VE,
            164: $VF,
            165: $VG,
            166: $VH,
            167: $VI,
            168: $VJ,
            169: $VK
          }, o($Vw1, [2, 118]), o($Vw1, [2, 120]), o($Vw1, [2, 125], {
            20: 81,
            19: 282,
            21: $VM,
            25: $VN,
            26: $VO
          }), o($Vw1, [2, 113]), {
            10: $V71,
            20: 168,
            21: $V6,
            25: $VN,
            26: $VO,
            27: 161,
            28: $V81,
            29: $V91,
            30: $Va1,
            33: 155,
            36: [1, 283],
            37: 162,
            39: $Vb1,
            40: $Vc1,
            41: 173,
            42: 175,
            44: 177,
            45: 178,
            46: 180,
            47: $V7,
            50: 202,
            51: $Vd1,
            55: 201,
            56: 158,
            57: $Ve1,
            58: $Vf1,
            59: $Vg1,
            60: $Vh1,
            61: 186,
            65: 185,
            66: 184,
            69: 183,
            74: 181,
            77: 179,
            79: 176,
            81: 174,
            83: 167,
            85: 160,
            87: 154,
            89: 200,
            103: 284,
            109: 32,
            110: 31,
            141: 36,
            142: 51,
            143: 52,
            144: $Vl,
            145: $Vm,
            146: $Vn,
            147: $Vo,
            148: $Vp,
            149: $Vq,
            150: $Vr,
            151: $Vs,
            152: $Vt,
            153: $Vu,
            154: $Vv,
            155: $Vw,
            156: $Vx,
            157: $Vy,
            158: $Vz,
            159: $VA,
            160: $VB,
            161: $VC,
            162: $VD,
            163: $VE,
            164: $VF,
            165: $VG,
            166: $VH,
            167: $VI,
            168: $VJ,
            169: $VK
          }, {
            10: $V71,
            20: 168,
            21: $V6,
            25: $VN,
            26: $VO,
            27: 161,
            28: $V81,
            29: $V91,
            30: $Va1,
            33: 155,
            37: 162,
            39: $Vb1,
            40: $Vc1,
            41: 173,
            42: 175,
            44: 177,
            45: 178,
            46: 180,
            47: $V7,
            48: 286,
            50: 202,
            51: $Vd1,
            55: 153,
            56: 158,
            57: $Ve1,
            58: $Vf1,
            59: $Vg1,
            60: $Vh1,
            61: 186,
            65: 185,
            66: 184,
            69: 183,
            74: 181,
            77: 179,
            79: 176,
            81: 174,
            83: 167,
            85: 160,
            87: 154,
            89: 152,
            109: 32,
            110: 31,
            124: 285,
            141: 36,
            142: 51,
            143: 52,
            144: $Vl,
            145: $Vm,
            146: $Vn,
            147: $Vo,
            148: $Vp,
            149: $Vq,
            150: $Vr,
            151: $Vs,
            152: $Vt,
            153: $Vu,
            154: $Vv,
            155: $Vw,
            156: $Vx,
            157: $Vy,
            158: $Vz,
            159: $VA,
            160: $VB,
            161: $VC,
            162: $VD,
            163: $VE,
            164: $VF,
            165: $VG,
            166: $VH,
            167: $VI,
            168: $VJ,
            169: $VK
          }, o([21, 32, 47, 120, 121, 122, 135, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169], [2, 114]), o($VS, [2, 158]), o($V$, [2, 172]), {
            36: [1, 287]
          }, {
            36: [2, 105]
          }, o($VB1, $VC1), {
            30: $VE1
          }, {
            32: [1, 288],
            49: [1, 289]
          }, o($Vw1, [2, 144]), o($Vw1, [2, 146], {
            92: [1, 290]
          }), {
            21: $V6,
            47: $V7,
            50: 209,
            109: 32,
            110: 31,
            141: 36,
            142: 51,
            143: 52,
            144: $Vl,
            145: $Vm,
            146: $Vn,
            147: $Vo,
            148: $Vp,
            149: $Vq,
            150: $Vr,
            151: $Vs,
            152: $Vt,
            153: $Vu,
            154: $Vv,
            155: $Vw,
            156: $Vx,
            157: $Vy,
            158: $Vz,
            159: $VA,
            160: $VB,
            161: $VC,
            162: $VD,
            163: $VE,
            164: $VF,
            165: $VG,
            166: $VH,
            167: $VI,
            168: $VJ,
            169: $VK,
            171: 291,
            173: 208
          }, {
            21: $V6,
            47: $V7,
            50: 209,
            109: 32,
            110: 31,
            141: 36,
            142: 51,
            143: 52,
            144: $Vl,
            145: $Vm,
            146: $Vn,
            147: $Vo,
            148: $Vp,
            149: $Vq,
            150: $Vr,
            151: $Vs,
            152: $Vt,
            153: $Vu,
            154: $Vv,
            155: $Vw,
            156: $Vx,
            157: $Vy,
            158: $Vz,
            159: $VA,
            160: $VB,
            161: $VC,
            162: $VD,
            163: $VE,
            164: $VF,
            165: $VG,
            166: $VH,
            167: $VI,
            168: $VJ,
            169: $VK,
            172: [1, 292],
            173: 293
          }, o($V82, [2, 205]), {
            19: 296,
            20: 81,
            21: $VM,
            25: $VN,
            26: $VO,
            174: 294,
            175: 295
          }, {
            11: [1, 297]
          }, o($V61, [2, 228]), o($Vx1, [2, 230]), o($Vy1, [2, 223]), {
            10: $V71,
            20: 168,
            21: $V6,
            25: $VN,
            26: $VO,
            27: 161,
            28: $V81,
            29: $V91,
            30: $Va1,
            31: 137,
            33: 155,
            37: 162,
            39: $Vb1,
            40: $Vc1,
            41: 173,
            42: 175,
            44: 177,
            45: 178,
            46: 180,
            47: $V7,
            48: 151,
            50: 159,
            51: $Vd1,
            55: 153,
            56: 158,
            57: $Ve1,
            58: $Vf1,
            59: $Vg1,
            60: $Vh1,
            61: 186,
            65: 185,
            66: 184,
            69: 183,
            74: 181,
            77: 179,
            79: 176,
            81: 174,
            83: 167,
            85: 160,
            87: 154,
            89: 152,
            104: 135,
            105: 150,
            106: $Vi1,
            107: 16,
            108: $V8,
            109: 32,
            110: 31,
            111: 23,
            112: 25,
            113: 26,
            115: 27,
            120: $V9,
            121: $Va,
            123: 24,
            125: $Vb,
            126: 30,
            127: 34,
            128: $Vc,
            131: 35,
            132: $Vd,
            133: $Ve,
            134: $Vf,
            135: $Vg,
            136: 33,
            137: $Vh,
            138: $Vi,
            139: $Vj,
            140: $Vk,
            141: 36,
            142: 51,
            143: 52,
            144: $Vl,
            145: $Vm,
            146: $Vn,
            147: $Vo,
            148: $Vp,
            149: $Vq,
            150: $Vr,
            151: $Vs,
            152: $Vt,
            153: $Vu,
            154: $Vv,
            155: $Vw,
            156: $Vx,
            157: $Vy,
            158: $Vz,
            159: $VA,
            160: $VB,
            161: $VC,
            162: $VD,
            163: $VE,
            164: $VF,
            165: $VG,
            166: $VH,
            167: $VI,
            168: $VJ,
            169: $VK,
            170: $Vj1,
            172: [1, 298],
            176: 128,
            177: 212,
            178: 125,
            179: 126,
            180: 129,
            181: 130,
            182: 131,
            183: 132,
            184: 133,
            185: 134,
            189: $Vk1,
            193: $Vl1,
            194: $Vm1,
            195: $Vn1,
            196: $Vo1,
            197: $Vp1,
            198: $Vq1,
            202: $Vr1,
            203: $Vs1,
            204: $Vt1,
            205: $Vu1,
            206: $Vv1
          }, o($Vy1, [2, 232]), {
            10: $V71,
            20: 168,
            21: $V6,
            25: $VN,
            26: $VO,
            27: 161,
            28: $V81,
            29: $V91,
            30: $Va1,
            33: 155,
            37: 162,
            39: $Vb1,
            40: $Vc1,
            41: 173,
            42: 175,
            44: 177,
            45: 178,
            46: 180,
            47: $V7,
            48: 299,
            50: 202,
            51: $Vd1,
            55: 153,
            56: 158,
            57: $Ve1,
            58: $Vf1,
            59: $Vg1,
            60: $Vh1,
            61: 186,
            65: 185,
            66: 184,
            69: 183,
            74: 181,
            77: 179,
            79: 176,
            81: 174,
            83: 167,
            85: 160,
            87: 154,
            89: 152,
            109: 32,
            110: 31,
            141: 36,
            142: 51,
            143: 52,
            144: $Vl,
            145: $Vm,
            146: $Vn,
            147: $Vo,
            148: $Vp,
            149: $Vq,
            150: $Vr,
            151: $Vs,
            152: $Vt,
            153: $Vu,
            154: $Vv,
            155: $Vw,
            156: $Vx,
            157: $Vy,
            158: $Vz,
            159: $VA,
            160: $VB,
            161: $VC,
            162: $VD,
            163: $VE,
            164: $VF,
            165: $VG,
            166: $VH,
            167: $VI,
            168: $VJ,
            169: $VK
          }, {
            10: $V71,
            20: 168,
            21: $V6,
            25: $VN,
            26: $VO,
            27: 161,
            28: $V81,
            29: $V91,
            30: $Va1,
            31: 300,
            33: 155,
            37: 162,
            39: $Vb1,
            40: $Vc1,
            41: 173,
            42: 175,
            44: 177,
            45: 178,
            46: 180,
            47: $V7,
            48: 151,
            50: 202,
            51: $Vd1,
            55: 153,
            56: 158,
            57: $Ve1,
            58: $Vf1,
            59: $Vg1,
            60: $Vh1,
            61: 186,
            65: 185,
            66: 184,
            69: 183,
            74: 181,
            77: 179,
            79: 176,
            81: 174,
            83: 167,
            85: 160,
            87: 154,
            89: 152,
            109: 32,
            110: 31,
            141: 36,
            142: 51,
            143: 52,
            144: $Vl,
            145: $Vm,
            146: $Vn,
            147: $Vo,
            148: $Vp,
            149: $Vq,
            150: $Vr,
            151: $Vs,
            152: $Vt,
            153: $Vu,
            154: $Vv,
            155: $Vw,
            156: $Vx,
            157: $Vy,
            158: $Vz,
            159: $VA,
            160: $VB,
            161: $VC,
            162: $VD,
            163: $VE,
            164: $VF,
            165: $VG,
            166: $VH,
            167: $VI,
            168: $VJ,
            169: $VK
          }, {
            10: $V71,
            20: 168,
            21: $V6,
            25: $VN,
            26: $VO,
            27: 161,
            28: $V81,
            29: $V91,
            30: $Va1,
            31: 301,
            33: 155,
            37: 162,
            39: $Vb1,
            40: $Vc1,
            41: 173,
            42: 175,
            44: 177,
            45: 178,
            46: 180,
            47: $V7,
            48: 151,
            50: 202,
            51: $Vd1,
            55: 153,
            56: 158,
            57: $Ve1,
            58: $Vf1,
            59: $Vg1,
            60: $Vh1,
            61: 186,
            65: 185,
            66: 184,
            69: 183,
            74: 181,
            77: 179,
            79: 176,
            81: 174,
            83: 167,
            85: 160,
            87: 154,
            89: 152,
            109: 32,
            110: 31,
            141: 36,
            142: 51,
            143: 52,
            144: $Vl,
            145: $Vm,
            146: $Vn,
            147: $Vo,
            148: $Vp,
            149: $Vq,
            150: $Vr,
            151: $Vs,
            152: $Vt,
            153: $Vu,
            154: $Vv,
            155: $Vw,
            156: $Vx,
            157: $Vy,
            158: $Vz,
            159: $VA,
            160: $VB,
            161: $VC,
            162: $VD,
            163: $VE,
            164: $VF,
            165: $VG,
            166: $VH,
            167: $VI,
            168: $VJ,
            169: $VK
          }, {
            23: [1, 302],
            49: $Vz1
          }, o($Vy1, [2, 240]), {
            10: $V71,
            20: 168,
            21: $V6,
            25: $VN,
            26: $VO,
            27: 161,
            28: $V81,
            29: $V91,
            30: $Va1,
            31: 304,
            33: 155,
            37: 162,
            39: $Vb1,
            40: $Vc1,
            41: 173,
            42: 175,
            44: 177,
            45: 178,
            46: 180,
            47: $V7,
            48: 151,
            50: 159,
            51: $Vd1,
            55: 153,
            56: 158,
            57: $Ve1,
            58: $Vf1,
            59: $Vg1,
            60: $Vh1,
            61: 186,
            65: 185,
            66: 184,
            69: 183,
            74: 181,
            77: 179,
            79: 176,
            81: 174,
            83: 167,
            85: 160,
            87: 154,
            89: 152,
            109: 32,
            110: 31,
            115: 305,
            120: $V9,
            121: $Va,
            125: $V92,
            126: 30,
            127: 34,
            128: $Vc,
            131: 35,
            132: $Vd,
            133: $Ve,
            134: $Vf,
            135: $Vg,
            136: 33,
            137: $Vh,
            138: $Vi,
            139: $Vj,
            140: $Vk,
            141: 36,
            142: 51,
            143: 52,
            144: $Vl,
            145: $Vm,
            146: $Vn,
            147: $Vo,
            148: $Vp,
            149: $Vq,
            150: $Vr,
            151: $Vs,
            152: $Vt,
            153: $Vu,
            154: $Vv,
            155: $Vw,
            156: $Vx,
            157: $Vy,
            158: $Vz,
            159: $VA,
            160: $VB,
            161: $VC,
            162: $VD,
            163: $VE,
            164: $VF,
            165: $VG,
            166: $VH,
            167: $VI,
            168: $VJ,
            169: $VK,
            192: 303
          }, {
            196: [1, 307]
          }, {
            10: $V71,
            20: 168,
            21: $V6,
            25: $VN,
            26: $VO,
            27: 161,
            28: $V81,
            29: $V91,
            30: $Va1,
            31: 137,
            33: 155,
            37: 162,
            39: $Vb1,
            40: $Vc1,
            41: 173,
            42: 175,
            44: 177,
            45: 178,
            46: 180,
            47: $V7,
            48: 151,
            50: 159,
            51: $Vd1,
            55: 153,
            56: 158,
            57: $Ve1,
            58: $Vf1,
            59: $Vg1,
            60: $Vh1,
            61: 186,
            65: 185,
            66: 184,
            69: 183,
            74: 181,
            77: 179,
            79: 176,
            81: 174,
            83: 167,
            85: 160,
            87: 154,
            89: 152,
            104: 135,
            105: 150,
            106: $Vi1,
            107: 16,
            108: $V8,
            109: 32,
            110: 31,
            111: 23,
            112: 25,
            113: 26,
            115: 27,
            120: $V9,
            121: $Va,
            123: 24,
            125: $Vb,
            126: 30,
            127: 34,
            128: $Vc,
            131: 35,
            132: $Vd,
            133: $Ve,
            134: $Vf,
            135: $Vg,
            136: 33,
            137: $Vh,
            138: $Vi,
            139: $Vj,
            140: $Vk,
            141: 36,
            142: 51,
            143: 52,
            144: $Vl,
            145: $Vm,
            146: $Vn,
            147: $Vo,
            148: $Vp,
            149: $Vq,
            150: $Vr,
            151: $Vs,
            152: $Vt,
            153: $Vu,
            154: $Vv,
            155: $Vw,
            156: $Vx,
            157: $Vy,
            158: $Vz,
            159: $VA,
            160: $VB,
            161: $VC,
            162: $VD,
            163: $VE,
            164: $VF,
            165: $VG,
            166: $VH,
            167: $VI,
            168: $VJ,
            169: $VK,
            176: 310,
            180: 309,
            199: 308
          }, o($Vy1, [2, 250]), o($Vy1, [2, 251]), o($Vy1, [2, 252]), {
            49: $Vz1,
            106: [1, 311]
          }, o($Vy1, [2, 254]), o($Vy1, [2, 255]), {
            10: $V71,
            20: 168,
            21: $V6,
            25: $VN,
            26: $VO,
            27: 161,
            28: $V81,
            29: $V91,
            30: $Va1,
            33: 155,
            37: 162,
            39: $Vb1,
            40: $Vc1,
            41: 173,
            42: 175,
            44: 177,
            45: 178,
            46: 180,
            47: $V7,
            48: 312,
            50: 202,
            51: $Vd1,
            55: 153,
            56: 158,
            57: $Ve1,
            58: $Vf1,
            59: $Vg1,
            60: $Vh1,
            61: 186,
            65: 185,
            66: 184,
            69: 183,
            74: 181,
            77: 179,
            79: 176,
            81: 174,
            83: 167,
            85: 160,
            87: 154,
            89: 152,
            109: 32,
            110: 31,
            141: 36,
            142: 51,
            143: 52,
            144: $Vl,
            145: $Vm,
            146: $Vn,
            147: $Vo,
            148: $Vp,
            149: $Vq,
            150: $Vr,
            151: $Vs,
            152: $Vt,
            153: $Vu,
            154: $Vv,
            155: $Vw,
            156: $Vx,
            157: $Vy,
            158: $Vz,
            159: $VA,
            160: $VB,
            161: $VC,
            162: $VD,
            163: $VE,
            164: $VF,
            165: $VG,
            166: $VH,
            167: $VI,
            168: $VJ,
            169: $VK
          }, o($VI1, [2, 92]), o($VI1, [2, 93]), o($VI1, [2, 94]), o($VI1, [2, 95]), o($VI1, [2, 96]), o($VI1, [2, 97]), o($VI1, [2, 98]), o($VI1, [2, 99]), o($VI1, [2, 100]), o($VI1, [2, 101]), o($VI1, [2, 102]), {
            10: $V71,
            20: 168,
            21: $V6,
            25: $VN,
            26: $VO,
            27: 161,
            28: $V81,
            29: $V91,
            30: $Va1,
            31: 313,
            33: 155,
            37: 162,
            39: $Vb1,
            40: $Vc1,
            41: 173,
            42: 175,
            44: 177,
            45: 178,
            46: 180,
            47: $V7,
            48: 151,
            50: 202,
            51: $Vd1,
            55: 153,
            56: 158,
            57: $Ve1,
            58: $Vf1,
            59: $Vg1,
            60: $Vh1,
            61: 186,
            65: 185,
            66: 184,
            69: 183,
            74: 181,
            77: 179,
            79: 176,
            81: 174,
            83: 167,
            85: 160,
            87: 154,
            89: 152,
            109: 32,
            110: 31,
            141: 36,
            142: 51,
            143: 52,
            144: $Vl,
            145: $Vm,
            146: $Vn,
            147: $Vo,
            148: $Vp,
            149: $Vq,
            150: $Vr,
            151: $Vs,
            152: $Vt,
            153: $Vu,
            154: $Vv,
            155: $Vw,
            156: $Vx,
            157: $Vy,
            158: $Vz,
            159: $VA,
            160: $VB,
            161: $VC,
            162: $VD,
            163: $VE,
            164: $VF,
            165: $VG,
            166: $VH,
            167: $VI,
            168: $VJ,
            169: $VK
          }, {
            10: $V71,
            20: 168,
            21: $V6,
            25: $VN,
            26: $VO,
            27: 161,
            28: $V81,
            29: $V91,
            30: $Va1,
            33: 155,
            37: 162,
            39: $Vb1,
            40: $Vc1,
            41: 173,
            42: 175,
            44: 177,
            45: 178,
            46: 180,
            47: $V7,
            50: 202,
            51: $Vd1,
            55: 201,
            56: 158,
            57: $Ve1,
            58: $Vf1,
            59: $Vg1,
            60: $Vh1,
            61: 186,
            65: 185,
            66: 184,
            69: 183,
            74: 181,
            77: 179,
            79: 176,
            81: 174,
            83: 167,
            85: 314,
            109: 32,
            110: 31,
            141: 36,
            142: 51,
            143: 52,
            144: $Vl,
            145: $Vm,
            146: $Vn,
            147: $Vo,
            148: $Vp,
            149: $Vq,
            150: $Vr,
            151: $Vs,
            152: $Vt,
            153: $Vu,
            154: $Vv,
            155: $Vw,
            156: $Vx,
            157: $Vy,
            158: $Vz,
            159: $VA,
            160: $VB,
            161: $VC,
            162: $VD,
            163: $VE,
            164: $VF,
            165: $VG,
            166: $VH,
            167: $VI,
            168: $VJ,
            169: $VK
          }, {
            10: $V71,
            20: 168,
            21: $V6,
            25: $VN,
            26: $VO,
            27: 161,
            28: $V81,
            29: $V91,
            30: $Va1,
            31: 316,
            33: 155,
            35: 315,
            37: 162,
            39: $Vb1,
            40: $Vc1,
            41: 173,
            42: 175,
            44: 177,
            45: 178,
            46: 180,
            47: $V7,
            48: 151,
            50: 202,
            51: $Vd1,
            55: 153,
            56: 158,
            57: $Ve1,
            58: $Vf1,
            59: $Vg1,
            60: $