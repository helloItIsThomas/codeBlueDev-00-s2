/* Version: 0.2.8 - May 28, 2024 15:12:53 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.shaderPark = {}));
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
            19: 317,
            20: 319,
            21: $VM,
            25: $VN,
            26: $VO,
            43: 318,
            52: 320,
            53: 321,
            54: 322
          }, o($VH1, [2, 28]), o($VH1, [2, 29]), o($VD1, [2, 51]), o($VD1, [2, 52]), o($VD1, [2, 53]), o($VU1, [2, 40]), {
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
            83: 323,
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
            81: 324,
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
          }, o($VU1, [2, 41]), {
            32: [1, 325],
            49: $Vz1
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
            79: 326,
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
            77: 327,
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
          }, o($VH1, [2, 34]), {
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
            48: 328,
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
          }, o($VH1, [2, 35]), {
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
            74: 329,
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
          }, o($Vw1, [2, 38]), o($Va2, $V31, {
            32: [2, 36]
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
            55: 201,
            56: 158,
            57: $Ve1,
            58: $Vf1,
            59: $Vg1,
            60: $Vh1,
            61: 186,
            65: 185,
            66: 184,
            69: 330,
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
            69: 331,
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
            66: 332,
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
            66: 333,
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
            66: 334,
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
            66: 335,
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
            65: 336,
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
            65: 337,
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
            61: 338,
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
            61: 339,
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
            55: 340,
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
            55: 341,
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
            55: 342,
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
            36: [1, 343],
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
            103: 344,
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
            124: 345,
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
          }, o($V61, [2, 108]), o($Vw1, [2, 117]), o($Vw1, [2, 119]), o($Vw1, [2, 115], {
            34: [1, 346]
          }), o($VR, [2, 135], {
            92: [1, 347]
          }), {
            36: [1, 348]
          }, o($VR, [2, 139]), o([32, 49, 106], [2, 212]), o($V$, [2, 173]), o($V11, [2, 143]), {
            19: 205,
            20: 81,
            21: $VM,
            25: $VN,
            26: $VO,
            130: 349
          }, {
            10: [1, 350]
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
            172: [1, 351],
            173: 293
          }, o($V21, [2, 204]), o($V82, [2, 206]), {
            49: [1, 353],
            106: [1, 352]
          }, o($VR, [2, 208]), o($VR, [2, 210], {
            34: [1, 354]
          }), o($V0, [2, 14]), o($Vy1, [2, 224]), o($VA1, [2, 104]), {
            32: [1, 355],
            49: $Vz1
          }, {
            32: [1, 356],
            49: $Vz1
          }, o($Vy1, [2, 239]), {
            32: [1, 357]
          }, o($Vb2, [2, 236], {
            49: $Vz1
          }), {
            19: 358,
            20: 81,
            21: $VM,
            25: $VN,
            26: $VO
          }, o($VS, $VY, {
            136: 108,
            131: 109,
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
          }), {
            30: [1, 359]
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
            106: [2, 247],
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
            192: 362,
            200: 360,
            201: 361
          }, o($Vc2, [2, 244]), o($Vc2, [2, 245]), o($Vy1, [2, 253]), o($VA1, [2, 91]), {
            23: [1, 363],
            49: $Vz1
          }, o($VF1, [2, 87], {
            86: $VG1
          }), {
            36: [1, 364]
          }, {
            36: [2, 30],
            49: $Vz1
          }, o($VH1, [2, 27]), o($VH1, [2, 33]), o($VH1, $V41, {
            30: [1, 365]
          }), {
            32: [1, 366],
            49: [1, 367]
          }, {
            32: [1, 368]
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
            32: [2, 46],
            33: 155,
            37: 162,
            39: $Vb1,
            40: $Vc1,
            41: 173,
            42: 175,
            44: 177,
            45: 178,
            46: 180,
            47: [1, 370],
            48: 369,
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
          }, o($VJ1, [2, 85], {
            84: $VK1
          }), o($VL1, [2, 83], {
            82: $VM1
          }), o($VH1, [2, 23]), o($VN1, [2, 81], {
            80: $VO1
          }), o($VP1, [2, 79], {
            78: $VQ1
          }), o($Vw1, [2, 39]), o($VR1, [2, 77], {
            75: $VS1,
            76: $VT1
          }), o($VV1, [2, 74], {
            70: $VW1,
            71: $VX1,
            72: $VY1,
            73: $VZ1
          }), o($VV1, [2, 75], {
            70: $VW1,
            71: $VX1,
            72: $VY1,
            73: $VZ1
          }), o($V_1, [2, 69], {
            67: $V$1,
            68: $V02
          }), o($V_1, [2, 70], {
            67: $V$1,
            68: $V02
          }), o($V_1, [2, 71], {
            67: $V$1,
            68: $V02
          }), o($V_1, [2, 72], {
            67: $V$1,
            68: $V02
          }), o($V12, [2, 66], {
            57: $V22,
            58: $V32
          }), o($V12, [2, 67], {
            57: $V22,
            58: $V32
          }), o($V42, [2, 63], {
            62: $V52,
            63: $V62,
            64: $V72
          }), o($V42, [2, 64], {
            62: $V52,
            63: $V62,
            64: $V72
          }), o($VB1, [2, 59]), o($VB1, [2, 60]), o($VB1, [2, 61]), o($VR, [2, 128], {
            92: [1, 371]
          }), {
            36: [1, 372]
          }, o($VR, [2, 132]), {
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
            85: 160,
            87: 154,
            89: 200,
            103: 373,
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
            124: 374,
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
          }, o($VR, [2, 136], {
            92: [1, 375]
          }), o($Vw1, [2, 145]), o($Vw1, [2, 147]), o($V21, [2, 203]), o($V82, [2, 207]), {
            19: 296,
            20: 81,
            21: $VM,
            25: $VN,
            26: $VO,
            175: 376
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
            85: 160,
            87: 154,
            89: 200,
            103: 377,
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
            177: 379,
            178: 125,
            179: 126,
            180: 129,
            181: 130,
            182: 131,
            183: 132,
            184: 133,
            185: 134,
            189: $Vk1,
            190: 378,
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
            170: $Vj1,
            178: 380
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
            170: $VQ,
            176: 128,
            179: 383,
            180: 129,
            181: 130,
            182: 131,
            183: 132,
            184: 133,
            185: 134,
            187: 381,
            188: 382,
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
            92: [1, 384]
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
            31: 385,
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
            32: [1, 386]
          }, {
            106: [1, 387]
          }, {
            106: [2, 246]
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
            48: 388,
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
          }, o($VH1, [2, 25]), o($VU1, [2, 49]), o($VH1, [2, 43]), {
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
            48: 389,
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
          }, o($VH1, [2, 44]), o($Vw1, [2, 47]), o($Va2, $V31, {
            32: [2, 45]
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
            124: 390,
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
          }, o($VR, [2, 129], {
            92: [1, 391]
          }), {
            36: [1, 392]
          }, o($VR, [2, 137]), {
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
            124: 393,
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
          }, o($VR, [2, 209]), {
            36: [1, 394]
          }, o($Vy1, [2, 233]), o($Vx1, [2, 235], {
            191: [1, 395]
          }), o($Vy1, [2, 238]), o($Vy1, [2, 241]), o($Vy1, [2, 225]), o($Vy1, [2, 226]), {
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
            124: 396,
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
            32: [1, 397],
            49: $Vz1
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
            170: $VQ,
            176: 128,
            179: 383,
            180: 129,
            181: 130,
            182: 131,
            183: 132,
            184: 133,
            185: 134,
            187: 398,
            188: 382,
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
            10: $V71,
            20: 168,
            21: $V6,
            25: $VN,
            26: $VO,
            27: 161,
            28: $V81,
            29: $V91,
            30: $Va1,
            31: 399,
            32: [2, 248],
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
          }, o($VA1, [2, 89]), o($Vw1, [2, 48]), o($VR, [2, 130]), {
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
            124: 400,
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
          }, o($Vw1, [2, 116]), o($VR, [2, 138]), o($VR, [2, 211]), {
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
            177: 401,
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
          }, o($Vb2, [2, 237]), {
            106: [1, 402]
          }, o($Vy1, [2, 243]), {
            32: [2, 249],
            49: $Vz1
          }, o($VR, [2, 131]), o($Vy1, [2, 234]), o($Vy1, [2, 242])],
          defaultActions: {
            5: [2, 1],
            200: [2, 105],
            362: [2, 246]
          },
          parseError: function parseError(str, hash) {
            if (hash.recoverable) {
              this.trace(str);
            } else {
              throw new Error(str);
            }
          },
          parse: function parse(input) {
            var self = this,
              stack = [0],
              tstack = [],
              vstack = [null],
              lstack = [],
              table = this.table,
              yytext = '',
              yylineno = 0,
              yyleng = 0,
              recovering = 0,
              TERROR = 2,
              EOF = 1;
            var args = lstack.slice.call(arguments, 1);
            var lexer = Object.create(this.lexer);
            var sharedState = {
              yy: {}
            };
            for (var k in this.yy) {
              if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
                sharedState.yy[k] = this.yy[k];
              }
            }
            lexer.setInput(input, sharedState.yy);
            sharedState.yy.lexer = lexer;
            sharedState.yy.parser = this;
            if (typeof lexer.yylloc == 'undefined') {
              lexer.yylloc = {};
            }
            var yyloc = lexer.yylloc;
            lstack.push(yyloc);
            var ranges = lexer.options && lexer.options.ranges;
            if (typeof sharedState.yy.parseError === 'function') {
              this.parseError = sharedState.yy.parseError;
            } else {
              this.parseError = Object.getPrototypeOf(this).parseError;
            }
            function popStack(n) {
              stack.length = stack.length - 2 * n;
              vstack.length = vstack.length - n;
              lstack.length = lstack.length - n;
            }
            function lex() {
              var token;
              token = lexer.lex() || EOF;
              if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
              }
              return token;
            }
            var symbol,
              preErrorSymbol,
              state,
              action,
              a,
              r,
              yyval = {},
              p,
              len,
              newState,
              expected;
            while (true) {
              state = stack[stack.length - 1];
              if (this.defaultActions[state]) {
                action = this.defaultActions[state];
              } else {
                if (symbol === null || typeof symbol == 'undefined') {
                  symbol = lex();
                }
                action = table[state] && table[state][symbol];
              }
              if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                  if (this.terminals_[p] && p > TERROR) {
                    expected.push('\'' + this.terminals_[p] + '\'');
                  }
                }
                if (lexer.showPosition) {
                  errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                  errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                  text: lexer.match,
                  token: this.terminals_[symbol] || symbol,
                  line: lexer.yylineno,
                  loc: yyloc,
                  expected: expected
                });
              }
              if (action[0] instanceof Array && action.length > 1) {
                throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
              }
              switch (action[0]) {
                case 1:
                  stack.push(symbol);
                  vstack.push(lexer.yytext);
                  lstack.push(lexer.yylloc);
                  stack.push(action[1]);
                  symbol = null;
                  if (!preErrorSymbol) {
                    yyleng = lexer.yyleng;
                    yytext = lexer.yytext;
                    yylineno = lexer.yylineno;
                    yyloc = lexer.yylloc;
                    if (recovering > 0) {
                      recovering--;
                    }
                  } else {
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                  }
                  break;
                case 2:
                  len = this.productions_[action[1]][1];
                  yyval.$ = vstack[vstack.length - len];
                  yyval._$ = {
                    first_line: lstack[lstack.length - (len || 1)].first_line,
                    last_line: lstack[lstack.length - 1].last_line,
                    first_column: lstack[lstack.length - (len || 1)].first_column,
                    last_column: lstack[lstack.length - 1].last_column
                  };
                  if (ranges) {
                    yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
                  }
                  r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));
                  if (typeof r !== 'undefined') {
                    return r;
                  }
                  if (len) {
                    stack = stack.slice(0, -1 * len * 2);
                    vstack = vstack.slice(0, -1 * len);
                    lstack = lstack.slice(0, -1 * len);
                  }
                  stack.push(this.productions_[action[1]][0]);
                  vstack.push(yyval.$);
                  lstack.push(yyval._$);
                  newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
                  stack.push(newState);
                  break;
                case 3:
                  return true;
              }
            }
            return true;
          }
        };
        function Parser() {
          this.yy = {};
        }
        Parser.prototype = parser;
        parser.Parser = Parser;
        return new Parser();
      }();
      if (typeof commonjsRequire !== 'undefined' && 'object' !== 'undefined') {
        exports.parser = parser;
        exports.Parser = parser.Parser;
        exports.parse = function () {
          return parser.parse.apply(parser, arguments);
        };
      }
      /* generated by jison-lex 0.3.4 */
      var lexer = function () {
        var lexer = {
          EOF: 1,
          parseError: function parseError(str, hash) {
            if (this.yy.parser) {
              this.yy.parser.parseError(str, hash);
            } else {
              throw new Error(str);
            }
          },
          // resets the lexer, sets new input
          setInput: function setInput(input, yy) {
            this.yy = yy || this.yy || {};
            this._input = input;
            this._more = this._backtrack = this.done = false;
            this.yylineno = this.yyleng = 0;
            this.yytext = this.matched = this.match = '';
            this.conditionStack = ['INITIAL'];
            this.yylloc = {
              first_line: 1,
              first_column: 0,
              last_line: 1,
              last_column: 0
            };
            if (this.options.ranges) {
              this.yylloc.range = [0, 0];
            }
            this.offset = 0;
            return this;
          },
          // consumes and returns one char from the input
          input: function input() {
            var ch = this._input[0];
            this.yytext += ch;
            this.yyleng++;
            this.offset++;
            this.match += ch;
            this.matched += ch;
            var lines = ch.match(/(?:\r\n?|\n).*/g);
            if (lines) {
              this.yylineno++;
              this.yylloc.last_line++;
            } else {
              this.yylloc.last_column++;
            }
            if (this.options.ranges) {
              this.yylloc.range[1]++;
            }
            this._input = this._input.slice(1);
            return ch;
          },
          // unshifts one char (or a string) into the input
          unput: function unput(ch) {
            var len = ch.length;
            var lines = ch.split(/(?:\r\n?|\n)/g);
            this._input = ch + this._input;
            this.yytext = this.yytext.substr(0, this.yytext.length - len);
            //this.yyleng -= len;
            this.offset -= len;
            var oldLines = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1);
            this.matched = this.matched.substr(0, this.matched.length - 1);
            if (lines.length - 1) {
              this.yylineno -= lines.length - 1;
            }
            var r = this.yylloc.range;
            this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
            };
            if (this.options.ranges) {
              this.yylloc.range = [r[0], r[0] + this.yyleng - len];
            }
            this.yyleng = this.yytext.length;
            return this;
          },
          // When called from action, caches matched text and appends it on next action
          more: function more() {
            this._more = true;
            return this;
          },
          // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
          reject: function reject() {
            if (this.options.backtrack_lexer) {
              this._backtrack = true;
            } else {
              return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
              });
            }
            return this;
          },
          // retain first n characters of the match
          less: function less(n) {
            this.unput(this.match.slice(n));
          },
          // displays already matched input, i.e. for error messages
          pastInput: function pastInput() {
            var past = this.matched.substr(0, this.matched.length - this.match.length);
            return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
          },
          // displays upcoming input, i.e. for error messages
          upcomingInput: function upcomingInput() {
            var next = this.match;
            if (next.length < 20) {
              next += this._input.substr(0, 20 - next.length);
            }
            return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
          },
          // displays the character position where the lexing error occurred, i.e. for error messages
          showPosition: function showPosition() {
            var pre = this.pastInput();
            var c = new Array(pre.length + 1).join("-");
            return pre + this.upcomingInput() + "\n" + c + "^";
          },
          // test the lexed token: return FALSE when not a match, otherwise return token
          test_match: function test_match(match, indexed_rule) {
            var token, lines, backup;
            if (this.options.backtrack_lexer) {
              // save context
              backup = {
                yylineno: this.yylineno,
                yylloc: {
                  first_line: this.yylloc.first_line,
                  last_line: this.last_line,
                  first_column: this.yylloc.first_column,
                  last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
              };
              if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
              }
            }
            lines = match[0].match(/(?:\r\n?|\n).*/g);
            if (lines) {
              this.yylineno += lines.length;
            }
            this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
            };
            this.yytext += match[0];
            this.match += match[0];
            this.matches = match;
            this.yyleng = this.yytext.length;
            if (this.options.ranges) {
              this.yylloc.range = [this.offset, this.offset += this.yyleng];
            }
            this._more = false;
            this._backtrack = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
            if (this.done && this._input) {
              this.done = false;
            }
            if (token) {
              return token;
            } else if (this._backtrack) {
              // recover context
              for (var k in backup) {
                this[k] = backup[k];
              }
              return false; // rule action called reject() implying the next rule should be tested instead.
            }

            return false;
          },
          // return next match in input
          next: function next() {
            if (this.done) {
              return this.EOF;
            }
            if (!this._input) {
              this.done = true;
            }
            var token, match, tempMatch, index;
            if (!this._more) {
              this.yytext = '';
              this.match = '';
            }
            var rules = this._currentRules();
            for (var i = 0; i < rules.length; i++) {
              tempMatch = this._input.match(this.rules[rules[i]]);
              if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                  token = this.test_match(tempMatch, rules[i]);
                  if (token !== false) {
                    return token;
                  } else if (this._backtrack) {
                    match = false;
                    continue; // rule action called reject() implying a rule MISmatch.
                  } else {
                    // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                    return false;
                  }
                } else if (!this.options.flex) {
                  break;
                }
              }
            }
            if (match) {
              token = this.test_match(match, rules[index]);
              if (token !== false) {
                return token;
              }
              // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
              return false;
            }
            if (this._input === "") {
              return this.EOF;
            } else {
              return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
              });
            }
          },
          // return next match that has a token
          lex: function lex() {
            var r = this.next();
            if (r) {
              return r;
            } else {
              return this.lex();
            }
          },
          // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
          begin: function begin(condition) {
            this.conditionStack.push(condition);
          },
          // pop the previously active lexer condition state off the condition stack
          popState: function popState() {
            var n = this.conditionStack.length - 1;
            if (n > 0) {
              return this.conditionStack.pop();
            } else {
              return this.conditionStack[0];
            }
          },
          // produce the lexer rule set which is active for the currently active lexer condition state
          _currentRules: function _currentRules() {
            if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
              return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
            } else {
              return this.conditions["INITIAL"].rules;
            }
          },
          // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
          topState: function topState(n) {
            n = this.conditionStack.length - 1 - Math.abs(n || 0);
            if (n >= 0) {
              return this.conditionStack[n];
            } else {
              return "INITIAL";
            }
          },
          // alias for begin(condition)
          pushState: function pushState(condition) {
            this.begin(condition);
          },
          // return the number of states currently on the stack
          stateStackSize: function stateStackSize() {
            return this.conditionStack.length;
          },
          options: {
            "moduleName": ""
          },
          performAction: function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
            var YYSTATE = YY_START;
            switch ($avoiding_name_collisions) {
              case 0:
                ;
                break;
              case 1:
                break;
              case 2:
                this.begin('PP');
                return 'VERSION';
                break;
              case 3:
                this.begin('PP');
                return 'EXTENSION';
                break;
              case 4:
                /* Eat characters until the first digit is
                 * encountered
                 */

                var ptr = 0;
                while (yy_.yytext.slice(0, 1) < '0' || yy_.yytext.slice(0, 1) > '9') {
                  ptr++;
                }

                /* Subtract one from the line number because
                 * yy_.yylineno is zero-based instead of
                 * one-based.
                 */
                yy_.yylineno = parseInt(yy_.yytext.slice(0, 1), 10) - 1;
                yy_.yylloc.source = parseInt(yy_.yytext.slice(0), 10);
                break;
              case 5:
                /* Eat characters until the first digit is
                 * encountered
                 */
                var ptr = 0;
                while (yy_.yytext.slice(0, 1) < '0' || yy_.yytext.slice(0, 1) > '9') ptr++;

                /* Subtract one from the line number because
                 * yy_.yylineno is zero-based instead of
                 * one-based.
                 */
                yy_.yylineno = parseInt(yy_.yytext.slice(0, 1), 10) - 1;
                break;
              case 6:
                this.begin('PP');
                return 'PRAGMA_DEBUG_ON';
                break;
              case 7:
                this.begin('PP');
                return 'PRAGMA_DEBUG_OFF';
                break;
              case 8:
                this.begin('PP');
                return 'PRAGMA_OPTIMIZE_ON';
                break;
              case 9:
                this.begin('PP');
                return 'PRAGMA_OPTIMIZE_OFF';
                break;
              case 10:
                this.begin('PP');
                return 'PRAGMA_INVARIANT_ALL';
                break;
              case 11:
                this.begin('PRAGMA');
                break;
              case 12:
                this.begin('INITIAL');
                yy_.yylineno++;
                yycolumn = 0;
                break;
              case 13:
                break;
              case 14:
                break;
              case 15:
                break;
              case 16:
                return ":";
                break;
              case 17:
                yylval.identifier = strdup(yy_.yytext);
                return 'IDENTIFIER';
                break;
              case 18:
                yylval.n = parseInt(yy_.yytext);
                return 'INTCONSTANT';
                break;
              case 19:
                this.begin('INITIAL');
                yy_.yylineno++;
                yycolumn = 0;
                return 'EOL';
                break;
              case 20:
                /*yy_.yylineno++; yycolumn = 0;*/
                break;
              case 21:
                return 'ATTRIBUTE';
                break;
              case 22:
                return 'CONST';
                break;
              case 23:
                return 'BOOL';
                break;
              case 24:
                return 'FLOAT';
                break;
              case 25:
                return 'INT';
                break;
              case 26:
                return 'BREAK';
                break;
              case 27:
                return 'CONTINUE';
                break;
              case 28:
                return 'DO';
                break;
              case 29:
                return 'WHILE';
                break;
              case 30:
                return 'ELSE';
                break;
              case 31:
                return 'FOR';
                break;
              case 32:
                return 'IF';
                break;
              case 33:
                return 'DISCARD';
                break;
              case 34:
                return 'RETURN';
                break;
              case 35:
                return 'DEBUGGER';
                break;
              case 36:
                return 'BVEC2';
                break;
              case 37:
                return 'BVEC3';
                break;
              case 38:
                return 'BVEC4';
                break;
              case 39:
                return 'IVEC2';
                break;
              case 40:
                return 'IVEC3';
                break;
              case 41:
                return 'IVEC4';
                break;
              case 42:
                return 'VEC2';
                break;
              case 43:
                return 'VEC3';
                break;
              case 44:
                return 'VEC4';
                break;
              case 45:
                return 'MAT2X2';
                break;
              case 46:
                return 'MAT3X3';
                break;
              case 47:
                return 'MAT4X4';
                break;
              case 48:
                return 'IN';
                break;
              case 49:
                return 'OUT';
                break;
              case 50:
                return 'INOUT';
                break;
              case 51:
                return 'UNIFORM';
                break;
              case 52:
                return 'VARYING';
                break;
              case 53:
                return 'INVARIANT';
                break;
              case 54:
                return 'FLAT';
                break;
              case 55:
                return 'SMOOTH';
                break;
              case 56:
                return 'SAMPLER1D';
                break;
              case 57:
                return 'SAMPLER2D';
                break;
              case 58:
                return 'SAMPLER3D';
                break;
              case 59:
                return 'SAMPLERCUBE';
                break;
              case 60:
                return 'SAMPLER1DSHADOW';
                break;
              case 61:
                return 'SAMPLER2DSHADOW';
                break;
              case 62:
                return 'STRUCT';
                break;
              case 63:
                return 'VOID';
                break;
              case 64:
                /*copy manually*/
                break;
              case 65:
                return '++';
                break;
              case 66:
                return '--';
                break;
              case 67:
                return '<=';
                break;
              case 68:
                return '>=';
                break;
              case 69:
                return '==';
                break;
              case 70:
                return '!=';
                break;
              case 71:
                return '&&';
                break;
              case 72:
                return '||';
                break;
              case 73:
                return '^^';
                break;
              case 74:
                return '<<';
                break;
              case 75:
                return '>>';
                break;
              case 76:
                return '*=';
                break;
              case 77:
                return '/=';
                break;
              case 78:
                return '+=';
                break;
              case 79:
                return '%=';
                break;
              case 80:
                return '<<=';
                break;
              case 81:
                return '>>=';
                break;
              case 82:
                return '&=';
                break;
              case 83:
                return '^=';
                break;
              case 84:
                return '|=';
                break;
              case 85:
                return '-=';
                break;
              case 86:
                this.yylval = parseFloat(yy_.yytext);
                return 'FLOATCONSTANT';
                break;
              case 87:
                this.yylval = parseFloat(yy_.yytext);
                return 'FLOATCONSTANT';
                break;
              case 88:
                this.yylval = parseFloat(yy_.yytext);
                return 'FLOATCONSTANT';
                break;
              case 89:
                this.yylval = parseFloat(yy_.yytext);
                return 'FLOATCONSTANT';
                break;
              case 90:
                this.yylval = parseFloat(yy_.yytext);
                return 'FLOATCONSTANT';
                break;
              case 91:
                this.yylval = parseInt(yy_.yytext + 2, 16);
                return 'INTCONSTANT';
                break;
              case 92:
                this.yylval = parseInt(yy_.yytext, 8);
                return 'INTCONSTANT';
                break;
              case 93:
                this.yylval = parseInt(yy_.yytext);
                return 'INTCONSTANT';
                break;
              case 94:
                this.yylval = 1;
                return 'BOOLCONSTANT';
                break;
              case 95:
                this.yylval = 0;
                return 'BOOLCONSTANT';
                break;
              case 96:
                return 'ASM';
                break;
              case 97:
                return 'CLASS';
                break;
              case 98:
                return 'UNION';
                break;
              case 99:
                return 'ENUM';
                break;
              case 100:
                return 'TYPEDEF';
                break;
              case 101:
                return 'TEMPLATE';
                break;
              case 102:
                return 'THIS';
                break;
              case 103:
                return 'PACKED';
                break;
              case 104:
                return 'GOTO';
                break;
              case 105:
                return 'SWITCH';
                break;
              case 106:
                return 'DEFAULT';
                break;
              case 107:
                return 'INLINE';
                break;
              case 108:
                return 'NOINLINE';
                break;
              case 109:
                return 'VOLATILE';
                break;
              case 110:
                return 'PUBLIC';
                break;
              case 111:
                return 'STATIC';
                break;
              case 112:
                return 'EXTERN';
                break;
              case 113:
                return 'EXTERNAL';
                break;
              case 114:
                return 'INTERFACE';
                break;
              case 115:
                return 'LONG';
                break;
              case 116:
                return 'SHORT';
                break;
              case 117:
                return 'DOUBLE';
                break;
              case 118:
                return 'HALF';
                break;
              case 119:
                return 'FIXED';
                break;
              case 120:
                return 'UNSIGNED';
                break;
              case 121:
                return 'INPUT';
                break;
              case 122:
                return 'OUTPUT';
                break;
              case 123:
                return 'HVEC2';
                break;
              case 124:
                return 'HVEC3';
                break;
              case 125:
                return 'HVEC4';
                break;
              case 126:
                return 'DVEC2';
                break;
              case 127:
                return 'DVEC3';
                break;
              case 128:
                return 'DVEC4';
                break;
              case 129:
                return 'FVEC2';
                break;
              case 130:
                return 'FVEC3';
                break;
              case 131:
                return 'FVEC4';
                break;
              case 132:
                return 'SAMPLER2DRECT';
                break;
              case 133:
                return 'SAMPLER3DRECT';
                break;
              case 134:
                return 'SAMPLER2DRECTSHADOW';
                break;
              case 135:
                return 'SIZEOF';
                break;
              case 136:
                return 'CAST';
                break;
              case 137:
                return 'NAMESPACE';
                break;
              case 138:
                return 'USING';
                break;
              case 139:
                return 'LOWP';
                break;
              case 140:
                return 'MEDIUMP';
                break;
              case 141:
                return 'HIGHP';
                break;
              case 142:
                return 'PRECISION';
                break;
              case 143:
                yy.yylval = yy_.yytext;
                return yy.state.classify_identifier(yy.state, yy_.yytext);
                break;
              case 144:
                return yy_.yytext;
                break;
              case 145:
                return 'EOF';
                break;
            }
          },
          rules: [/^(?:[ \r\t]+)/, /^(?:[ \t]*#[ \t]*$)/, /^(?:[ \t]*#[ \t]*version\b)/, /^(?:[ \t]*#[ \t]*extension\b)/, /^(?:(^([ \t]*)([ \t]*))line([ \t]+)((([1-9][0-9]*)|([xX][0-9a-fA-F]+)|([0-7]*)))([ \t]+)((([1-9][0-9]*)|([xX][0-9a-fA-F]+)|([0-7]*)))([ \t]*)$)/, /^(?:(^([ \t]*)([ \t]*))line([ \t]+)((([1-9][0-9]*)|([xX][0-9a-fA-F]+)|([0-7]*)))([ \t]*)$)/, /^(?:([ \t]*)#([ \t]*)pragma([ \t]+)debug([ \t]*)\(([ \t]*)on([ \t]*)\))/, /^(?:([ \t]*)#([ \t]*)pragma([ \t]+)debug([ \t]*)\(([ \t]*)off([ \t]*)\))/, /^(?:([ \t]*)#([ \t]*)pragma([ \t]+)optimize([ \t]*)\(([ \t]*)on([ \t]*)\))/, /^(?:([ \t]*)#([ \t]*)pragma([ \t]+)optimize([ \t]*)\(([ \t]*)off([ \t]*)\))/, /^(?:([ \t]*)#([ \t]*)pragma([ \t]+)STDGL([ \t]+)invariant([ \t]*)\(([ \t]*)all([ \t]*)\))/, /^(?:([ \t]*)#([ \t]*)pragma([ \t]+))/, /^(?:[\n])/, /^(?:.)/, /^(?:\/\/[^\n]*)/, /^(?:[ \t\r]*)/, /^(?::)/, /^(?:[_a-zA-Z][_a-zA-Z0-9]*)/, /^(?:[1-9][0-9]*)/, /^(?:[\n])/, /^(?:[\n])/, /^(?:attribute\b)/, /^(?:const\b)/, /^(?:bool\b)/, /^(?:float\b)/, /^(?:int\b)/, /^(?:break\b)/, /^(?:continue\b)/, /^(?:do\b)/, /^(?:while\b)/, /^(?:else\b)/, /^(?:for\b)/, /^(?:if\b)/, /^(?:discard\b)/, /^(?:return\b)/, /^(?:debugger\b)/, /^(?:bvec2\b)/, /^(?:bvec3\b)/, /^(?:bvec4\b)/, /^(?:ivec2\b)/, /^(?:ivec3\b)/, /^(?:ivec4\b)/, /^(?:vec2\b)/, /^(?:vec3\b)/, /^(?:vec4\b)/, /^(?:mat2\b)/, /^(?:mat3\b)/, /^(?:mat4\b)/, /^(?:in\b)/, /^(?:out\b)/, /^(?:inout\b)/, /^(?:uniform\b)/, /^(?:varying\b)/, /^(?:invariant\b)/, /^(?:flat\b)/, /^(?:smooth\b)/, /^(?:sampler1D\b)/, /^(?:sampler2D\b)/, /^(?:sampler3D\b)/, /^(?:samplerCube\b)/, /^(?:sampler1DShadow\b)/, /^(?:sampler2DShadow\b)/, /^(?:struct\b)/, /^(?:void\b)/, /^(?:layout\b)/, /^(?:\+\+)/, /^(?:--)/, /^(?:<=)/, /^(?:>=)/, /^(?:==)/, /^(?:!=)/, /^(?:&&)/, /^(?:\|\|)/, /^(?:\^\^)/, /^(?:<<)/, /^(?:>>)/, /^(?:\*=)/, /^(?:\/=)/, /^(?:\+=)/, /^(?:%=)/, /^(?:<<=)/, /^(?:>>=)/, /^(?:&=)/, /^(?:\^=)/, /^(?:\|=)/, /^(?:-=)/, /^(?:[0-9]+\.[0-9]+([eE][+-]?[0-9]+)?[fF]?)/, /^(?:\.[0-9]+([eE][+-]?[0-9]+)?[fF]?)/, /^(?:[0-9]+\.([eE][+-]?[0-9]+)?[fF]?)/, /^(?:[0-9]+[eE][+-]?[0-9]+[fF]?)/, /^(?:[0-9]+[fF])/, /^(?:0[xX][0-9a-fA-F]+)/, /^(?:0[0-7]*)/, /^(?:[1-9][0-9]*)/, /^(?:true\b)/, /^(?:false\b)/, /^(?:asm\b)/, /^(?:class\b)/, /^(?:union\b)/, /^(?:enum\b)/, /^(?:typedef\b)/, /^(?:template\b)/, /^(?:this\b)/, /^(?:packed\b)/, /^(?:goto\b)/, /^(?:switch\b)/, /^(?:default\b)/, /^(?:inline\b)/, /^(?:noinline\b)/, /^(?:volatile\b)/, /^(?:public\b)/, /^(?:static\b)/, /^(?:extern\b)/, /^(?:external\b)/, /^(?:interface\b)/, /^(?:long\b)/, /^(?:short\b)/, /^(?:double\b)/, /^(?:half\b)/, /^(?:fixed\b)/, /^(?:unsigned\b)/, /^(?:input\b)/, /^(?:output\b)/, /^(?:hvec2\b)/, /^(?:hvec3\b)/, /^(?:hvec4\b)/, /^(?:dvec2\b)/, /^(?:dvec3\b)/, /^(?:dvec4\b)/, /^(?:fvec2\b)/, /^(?:fvec3\b)/, /^(?:fvec4\b)/, /^(?:sampler2DRect\b)/, /^(?:sampler3DRect\b)/, /^(?:sampler2DRectShadow\b)/, /^(?:sizeof\b)/, /^(?:cast\b)/, /^(?:namespace\b)/, /^(?:using\b)/, /^(?:lowp\b)/, /^(?:mediump\b)/, /^(?:highp\b)/, /^(?:precision\b)/, /^(?:[_a-zA-Z][_a-zA-Z0-9]*)/, /^(?:.)/, /^(?:$)/],
          conditions: {
            "PRAGMA": {
              "rules": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145],
              "inclusive": true
            },
            "PP": {
              "rules": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145],
              "inclusive": true
            },
            "INITIAL": {
              "rules": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145],
              "inclusive": true
            }
          }
        };
        return lexer;
      }();
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
       * GLSL Parser Class
       */
      function GlslParser() {
        //Jison Global
        this.jison = parser;
        this.jison.lexer = lexer;
      }
      var proto = GlslParser.prototype;

      /**
       * Parse Program
       */
      proto.parse = function (state) {
        var result;
        this.jison.yy = {
          test: 1,
          state: state
        };
        try {
          this.jison.parse(state.getTranslationUnit());
        } catch (e) {
          state.addError(e.message, e.lineNumber, e.columnNumber);
          return false;
        }
        return true;
      };
      glsl.parser = new GlslParser();

      /**
       * External Parse
       *
       * @param   string   src        Source code
       * @param   object   options    Compilation options
       *
       * @return  object
       */
      glsl.parse = function (src, options) {
        var state, result, irs;
        state = new GlslState(options);
        state.setSource(src);

        //Preprocess
        result = this.preprocessor.process(state);

        //Parse into AST
        if (result) {
          result = this.parser.parse(state);
        }
        if (result) {
          state.status = true;
        }
        return state;
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

      /**
       * Constructs a program's object code from an ast and symbol table
       *
       * @param   string     The error message
       * @param   AstNode    The error AstNode
       *
       * @return  string
       */
      glsl.generate = function (state) {
        var irs, ast, i, main;
        irs = new Ir(state.options.target);
        ast = state.getAst();
        try {
          for (i = 0; i < ast.length; i++) {
            ast[i].ir(state, irs);
          }
          main = state.symbols.get_function('main');

          //Accept main, but warn if params not void
          if (main.definition.join(",") !== "void") {
            state.addWarning("main() should take no parameters");
          }
          state.symbols.add_variable("<returned>", irs.getTemp(main.getType().slots));
          if (main.type != 'void') {
            state.addWarning("main() should be type void");
          }
          if (!main) {
            state.addError("main() is not defined");
            return false;
          }
          main.Ast.body.ir(state, irs);
        } catch (e) {
          if (!e.ir) {
            e.message = "compiler error: " + e.message;
          }
          state.addError(e.message, e.lineNumber, e.columnNumber);
          return false;
        }
        state.setIR(irs);
        return true;
      };

      /**
       * Constructs an error message
       *
       * @param   string     The error message
       * @param   AstNode    The error AstNode
       *
       * @return  string
       */
      AstNode.prototype.ir_error = function (message) {
        var e = new IrError();
        if (this.location) {
          e.lineNumber = this.location.first_line;
          e.columnNumber = this.location.first_column;
          e.message = message;
        }
        throw e;
      };

      /**
       * Default IR
       */
      AstNode.prototype.irx = function (state, irs) {
        this.ir_error(util.format("Can't generate ir for %s", this.typeOf()));
      };

      /**
       * Constructs a type specifier code block
       *
       * @param   object   state    parser state
       */
      AstTypeSpecifier.prototype.ir = function (state, irs) {
        if (this.is_precision_statement) {
          return;
        }

        //	this.ir_error("Cannot generate type specifier");
      };

      /**
       * Constructs a declaration list
       *
       * @param   object   state   GLSL state
       * @param   object   irs     IR representation
       */
      AstDeclaratorList.prototype.ir = function (state, irs) {
        var i;
        for (i = 0; i < this.declarations.length; i++) {
          this.declarations[i].ir(state, irs, this.type);
        }
      };

      /**
       * Constructs a declaration
       *
       * @param   object   state   GLSL state
       * @param   object   irs     IR representation
       */
      AstDeclaration.prototype.ir = function (state, irs, type) {
        var qualifier, name, entry, constant, assign, lhs, size;
        if (type.qualifier) {
          qualifier = type.qualifier;
        }
        name = this.identifier;

        //add symbol table entry
        entry = state.symbols.add_variable(name);
        entry.type = type.specifier.type_name;
        entry.qualifier = qualifier;
        if (qualifier.indexOf('uniform') !== -1) {
          entry.out = irs.getUniform(entry);
        } else if (qualifier.indexOf('attribute') !== -1) {
          entry.out = irs.getAttribute(entry);
        } else if (qualifier.indexOf('varying') !== -1) {
          entry.out = irs.getVarying(entry);
        } else {
          entry.out = irs.getTemp(entry.getType().slots);
        }
        constant = qualifier === 'const';
        if (this.is_array) {
          this.array_size.ir(state, irs);
          if (this.array_size.Type != 'int') {
            this.ir_error("array size must be an integer");
          }
          if (!this.array_size.Const) {
            this.ir_error("array size must be constant");
          }
          size = parseInt(this.array_size.Dest);
          if (size < 1) {
            this.ir_error("array size cannot be less than 1");
          }
          entry.size = size;

          //Change the type of the entry so that expressions without indexing will fail
          entry.base_type = entry.type;
          entry.type += '[]';
        }
        if (this.initializer) {
          //@todo: generate constants at compile time (this may be able to be taken care of in the generator)
          if (constant) {
            //entry.constant = this.initializer.Dest;
          } else {
            lhs = new AstExpression('ident');
            lhs.primary_expression.identifier = name;
            assign = new AstExpression('=', lhs, this.initializer);
            assign.setLocation(this.location);
            assign.ir(state, irs);
          }
        } else {
          if (constant) {
            this.ir_error("Declaring const without initialier");
          }
        }
      };

      /**
       * Constructs a function definition block
       *
       * @param   object   state   GLSL state
       * @param   object   irs     IR representation
       */
      AstFunctionDefinition.prototype.ir = function (state, irs) {
        //handle function proto
        this.proto_type.ir(state, irs);
        this.proto_type.entry.Ast = this;
      };

      /**
       * Constructs a function header code block
       *
       * @param   object   state   GLSL state
       * @param   object   irs     IR representation
       */
      AstFunction.prototype.ir = function (state, irs) {
        var i;
        if (this.parameters.length == 0) {
          this.entry.definition.push('void');
        }

        //generate param list
        for (i = 0; i < this.parameters.length; i++) {
          this.entry.definition.push(this.parameters[i].type.specifier.type_name);
        }
      };

      /**
       * Constructs a compound statement code block
       *
       * @param   object   state   GLSL state
       * @param   object   irs     IR representation
       */
      AstCompoundStatement.prototype.ir = function (state, irs) {
        var i, stmt, retd_entry, maybe_returned;
        retd_entry = state.symbols.get_variable("<returned>");
        maybe_returned = false;
        for (i = 0; i < this.statements.length; i++) {
          stmt = this.statements[i];
          stmt.ir(state, irs);
          if (stmt instanceof AstJumpStatement && stmt.mode == 'return') {
            //Returning from block, set return status, and skip following instructions in block (unreachable)
            retd_entry.Passed = true;
            irs.push(new IrInstruction("MOV", retd_entry.out + ".x", "1.0"));
            break;
          }
          if (!maybe_returned && retd_entry.Passed) {
            maybe_returned = true;
            irs.push(new IrInstruction("IF", retd_entry.out + ".x"));
          }
        }
        if (maybe_returned) {
          irs.push(new IrInstruction("ENDIF"));
        }
      };

      /**
       * Constructs an expression statement code block
       *
       * @param   object   state   GLSL state
       * @param   object   irs     IR representation
       */
      AstExpressionStatement.prototype.ir = function (state, irs) {
        this.expression.ir(state, irs);
      };

      /**
       * Constructs an expression code block
       *
       * @param   object   state   GLSL state
       * @param   object   irs     IR representation
       */
      AstExpression.prototype.ir = function (state, irs) {
        var i;

        //simple (variable, or value)
        for (i in this.primary_expression) {
          return this.ir_simple(state, irs);
        }

        //operator
        if (this.oper) {
          return this.ir_op(state, irs);
        }

        //cast
        if (this.constructor.name == 'AstTypeSpecifier') {
          this.Type = this.type_specifier;
          return;
        }
        this.ir_error("Could not translate unknown expression type");
      };

      /**
       * Constructs an operator expression code block
       *
       * @param   object   state   GLSL state
       * @param   object   irs     IR representation
       */
      AstExpression.prototype.ir_op = function (state, irs) {
        var se, temp, ops;
        if (se = this.subexpressions) {
          se[0] ? se[0].ir(state, irs) : null;
          se[1] ? se[1].ir(state, irs) : null;
          se[2] ? se[2].ir(state, irs) : null;
        }
        switch (this.oper) {
          //case '+=':
          case '=':
            this.ir_assign(state, irs);
            break;
          case 'POS':
            //useless
            this.Dest = se[0].Dest;
            this.Type = se[0].Type;
            break;
          case 'NEG':
            if (se[0].Dest.substring(0, 1) != '-') {
              this.Dest = "-" + se[0].Dest;
            } else {
              this.Dest = se[0].Dest.substring(1);
            }
            this.Type = se[0].Type;
            if (se[0].Const) {
              this.Const = se[0].Const;
            }
            break;

          //Arithmetic
          case '+':
          case '-':
          case '*':
          case '/':
          case '%':
          case '&':
          case '^':
          case '|':
          case '~':
          case '<<':
          case '>>':
            this.ir_generate(state, irs, 2, true);
            break;

          //Boolean
          case '<':
          case '>':
          case '<=':
          case '>=':
          case '==':
          case '!=':
          case '&&':
          case '^^':
          case '||':
            this.ir_generate(state, irs, 2);
            break;
          case '!':
            this.ir_generate(state, irs, 1);
            break;

          /*
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
          	break;
          case '?:':
          	break;
          */

          //Increment / Decrement
          case '++x':
          case '--x':
          case 'x++':
          case 'x--':
            this.ir_incdec(state, irs);
            break;
          //case '.': break;
          case '[]':
            this.ir_arr_index(state, irs);
            break;
          /*
          case 'VAR':
          case 'int':
          case 'float':
          case 'bool':
          	ir_expression_simple(e, se);
          	break;
          */
          default:
            this.ir_error(util.format("Could not translate unknown expression %s (%s)", this, this.oper));
        }
      };

      /**
       * Constructs an assignment expression
       *
       * @param   object   state   GLSL state
       * @param   object   irs     IR representation
       */
      AstExpression.prototype.ir_assign = function (state, irs, skip_comment /*, local*/) {
        var cond, ir, temp, size, slots, swz, i, entry, lhs, rhs, com;
        lhs = this.subexpressions[0];
        rhs = this.subexpressions[1];
        if (lhs.Type != rhs.Type || rhs.Const) {
          this.ir_cast.apply(rhs, [state, irs, lhs.Type]);
        }
        this.Type = lhs.Type;
        if (lhs.Entry && lhs.Entry.constant) {
          this.ir_error(util.format("Cannot assign value to constant %s", lhs.Dest));
        }
        if (!skip_comment) {
          com = util.format("%s => %s %s <%s>", rhs.Dest, lhs.Type, lhs.Dest, lhs.toString());
          irs.push(new IrComment(com, this.location));
        }
        size = types[this.Type].size;
        slots = types[this.Type].slots;

        //get the swizzle for each slot
        swz = Ir.swizzles[0].substring(0, 4 - (slots * 4 - size) / slots);

        //all components are used up in all slots
        if (swz == Ir.swizzles[0]) {
          swz = "";
        }
        for (i = 0; i < slots; i++) {
          /*
          if (cond && !local) {
          	ir = new IR('CMP', se[0].Dest, "-" + cond, se[1].Dest, se[0].Dest);
          	ir.addOffset(i);
          	ir.setSwizzle(swz);
          	irs.push(ir);
          			} else {
          */
          ir = new IrInstruction('MOV', lhs.Dest, rhs.Dest);
          ir.addOffset(i);
          ir.setSwizzle(swz);
          irs.push(ir);
          /*
          }
          */
        }
      };

      /**
       * Constructs a cast operation
       */
      AstExpression.prototype.ir_cast = function (state, irs, type) {
        //Can cast to type?
        if (Type.canCast(this.Type, type)) {
          //Simple case, constant
          if (this.Const) {
            this.Dest = Type.castTo(this.Dest, this.Type, type);
            this.Type = type;
          } else {
            //@todo: generate cast instructions
            this.ir_error(util.format("Could not assign value of type %s to %s", this.Type, type));
          }
        } else {
          this.ir_error(util.format("Could not assign value of type %s to %s", this.Type, type));
        }
      };

      /**
       * Constructs a simple expression code block
       *
       * @param   object   state   GLSL state
       * @param   object   irs     IR representation
       */
      AstExpression.prototype.ir_simple = function (state, irs) {
        var name, entry, t;
        if (this.oper == '.') {
          this.ir_field(state, irs);
          return;
        }

        //identifier
        if (name = this.primary_expression.identifier) {
          //lookup identifier in symbol table
          entry = state.symbols.get_variable(name) || state.symbols.get_function(name);
          if (!entry /*|| !entry.type*/) {
            this.ir_error(util.format("%s is undefined", name));
          }
          this.Type = entry.type;
          this.Entry = entry;
          if (entry.constant) {
            this.Dest = entry.constant;
          } else {
            this.Dest = entry.out;
          }
          return;
        }

        //float constant
        if (this.primary_expression.type == 'float') {
          this.Type = 'float';
          this.Dest = this.primary_expression.float_constant;
          this.Const = true;
          return;
        }

        //int constant
        if (this.primary_expression.type == 'int') {
          this.Type = 'int';
          this.Dest = this.primary_expression.int_constant;
          this.Const = true;
          return;
        }
        this.ir_error("Cannot translate unknown simple expression type");
      };

      /**
       * Constructs the code for an expression
       *
       * @param   object   state   GLSL state
       * @param   object   irs     IR representation
       */
      AstExpression.prototype.ir_generate = function (state, irs, len, arith) {
        var table, se, oprd_types, dest, i, j, def, match, comment, cnst;
        if (!(table = builtin.oper[this.oper])) {
          this.ir_error(util.format("Could not generate operation %s", this.oper));
        }
        se = this.subexpressions;

        //Fold constants
        if (state.options.opt.fold_constants && arith) {
          if (se[0].Const && se[1].Const) {
            cnst = eval(se[0].Dest + this.oper + se[1].Dest);

            //If the calculation results in an error, resume normal IR generation and let it be handled at runtime
            if (Number.isFinite(cnst)) {
              this.Dest = "" + cnst;
              this.Type = 'float';
              this.Const = true;
              return;
            }
          }
        }
        oprd_types = [];
        dest = [];
        for (i = 0; i < len; i++) {
          oprd_types.push(se[i].Type);
          dest.push(se[i].Dest);
        }
        def = new RegExp(oprd_types.join(",") + "\:(.*)");
        for (j in table) {
          if (match = j.match(def)) {
            break;
          }
        }
        if (!match) {
          this.ir_error(util.format("Could not apply operation %s to %s", this.oper, oprd_types.join(", ")));
        }
        this.Type = match[1];
        this.Dest = irs.getTemp(types[this.Type].slots);
        dest.splice(0, 0, this.Dest);
        if (len <= 4) {
          //this.Dest += util.format(".%s", swizzles[0].substring(0, glsl.type.size[this.Type]));
        }
        if (len == 1) {
          comment = util.format("(%s %s %s) => %s %s", this.oper, se[0].Type, se[0].Dest, this.Type, this.Dest);
        } else if (len == 2) {
          comment = util.format("(%s %s %s %s %s) => %s %s", se[0].Type, se[0].Dest, this.oper, se[1].Type, se[1].Dest, this.Type, this.Dest);
        } else if (len == 3) {
          comment = util.format("(%s %s ? %s %s : %s %s) => %s %s", se[0].Type, se[0].Dest, se[1].Type, se[1].Dest, se[2].Type, se[2].Dest, this.Type, this.Dest);
        }
        irs.push(new IrComment(comment, this.location));
        irs.build(table[j], dest);
      };

      /**
       * Constructs an pre/post increment/decrement expression
       *
       * @param   object   state   GLSL state
       * @param   object   irs     IR representation
       */
      AstExpression.prototype.ir_incdec = function (state, irs) {
        var se, op, ins, post, type, i, ir;
        se = this.subexpressions[0];
        op = this.oper.replace('x', '');
        ins = op === '++' ? 'ADD' : 'SUB';
        post = this.oper.indexOf('x') === 0;
        type = types[se.Type];

        //Type check: base type must be int or float
        if (type.base != 'int' && type.base != 'float') {
          this.ir_error(util.format("Could not apply operation %s to %s", op, se.Type));
        }
        this.Type = se.Type;
        if (post) {
          //For post increment, the returned happens before the increment, so we need a temp to store it
          this.Dest = irs.getTemp(type.slots);
        } else {
          this.Dest = se.Dest;
        }
        irs.push(new IrComment(util.format("(%s%s) => %s %s", post ? se.Dest : op, post ? op : se.Dest, this.Type, this.Dest), this.location));
        for (i = 0; i < type.slots; i++) {
          if (post) {
            this.Dest = irs.getTemp(type.slots);
            ir = new IrInstruction('MOV', this.Dest, se.Dest);
            ir.addOffset(i);
            ir.setSwizzle(type.swizzle);
            irs.push(ir);
          }
          ir = new IrInstruction(ins, se.Dest, se.Dest, "1.0");
          ir.addOffset(i);
          ir.setSwizzle(type.swizzle);
          irs.push(ir);
        }
      };

      /**
       * Constructs an array index expression
       *
       * @param   object   state   GLSL state
       * @param   object   irs     IR representation
       */
      AstExpression.prototype.ir_arr_index = function (state, irs) {
        var arr, idx, entry, size, cnst, oprd;
        arr = this.subexpressions[0];
        idx = this.subexpressions[1];
        entry = arr.Entry;

        //Ensure array index is integer
        if (idx.Type != 'int') {
          this.ir_error("array index out of bounds");
        }

        //@todo: Need to implement array indexing syntax for vector components
        if (!entry.size) {
          this.ir_error("cannot index a non-array value");
        }

        //@todo: Need to implement array indexing for matrices
        if (types[entry.base_type].slots > 1) {
          this.ir_error("array indexing for matrices not implemented yet");
        }
        this.Type = entry.base_type;

        //If constant index, we can do some additional error checking
        if (idx.Const) {
          cnst = parseInt(idx.Dest);
          if (cnst < 0 || cnst >= entry.size) {
            this.ir_error("array index out of bounds");
          }
          oprd = new IrOperand(arr.Dest);
          oprd.index = cnst;
          this.Dest = oprd.toString();
        } else {
          //@todo: variable indexing is permitted by spec, but behavior is undefined for out of bounds

          this.ir_error("variable indexing not implemented yet");
        }
      };

      /**
       * Constructs a function expression
       *
       * @param   object   state   GLSL state
       * @param   object   irs     IR representation
       */
      AstFunctionExpression.prototype.ir = function (state, irs) {
        var i, e, name, entry, ret_entry, retd_entry, call_types, operands, param, proto, loc;
        if (this.cons) {
          return this.ir_constructor(state, irs);
        }
        name = this.subexpressions[0].primary_expression.identifier;
        operands = [];
        call_types = [];
        for (i = 0; i < this.expressions.length; i++) {
          e = this.expressions[i];
          e.ir(state, irs);
          call_types.push(e.Type);
          operands.push(e.Dest);
        }
        entry = state.symbols.get_function(name, call_types);
        if (!entry) {
          this.ir_error(util.format("Function %s(%s) is not defined", name, call_types.join(", ")));
        }
        this.Type = entry.type;
        this.Dest = irs.getTemp(entry.getType().slots);
        irs.push(new IrComment(util.format("%s(%s) => %s %s", name, operands.join(", "), this.Type, this.Dest), this.location));
        if (entry.code) {
          //Use function template
          operands.unshift(this.Dest);
          irs.build(entry.code, operands);
        } else if (entry.Ast) {
          //Rebuild inline function from AST
          state.symbols.push_scope();

          //Enter vars into local symbol table
          proto = entry.Ast.proto_type;
          for (i = 0; i < proto.parameters.length; i++) {
            param = proto.parameters[i];
            loc = state.symbols.add_variable(param.identifier, param.type.specifier.type_name);
            loc.out = irs.getTemp(loc.getType().slots);

            //Add MOV operation from called param to local param
            irs.push(new IrComment(util.format("PARAM %s => %s %s", operands[i], loc.out, param.type.specifier.type_name), param.location));

            //Piggy-back off assignment generation
            lhs = new AstExpression('<param>');
            lhs.setLocation(this.getLocation());
            lhs.Type = loc.type;
            lhs.Dest = loc.out;
            assign = new AstExpression('=', lhs, this.expressions[i]);
            assign.setLocation(this.getLocation());
            assign.ir_assign(state, irs, true);
          }

          //Create a return entry for the new call scope
          ret_entry = state.symbols.add_variable("<return>", this.Type);
          ret_entry.out = this.Dest;
          retd_entry = state.symbols.add_variable("<returned>", "bool");
          retd_entry.out = irs.getTemp(retd_entry.getType().slots);
          entry.Ast.body.ir(state, irs);
          state.symbols.pop_scope();
        }
      };

      /**
       * Constructs a type constructor
       *
       * @param   object   state   GLSL state
       * @param   object   irs     IR representation
       */
      AstFunctionExpression.prototype.ir_constructor = function (state, irs) {
        var type, comment_text, comment, i, expr, src_expr, src_i, src_c, oprd, dest;
        type = this.subexpressions[0].type_specifier;
        this.Type = type.name;
        this.Dest = irs.getTemp(type.slots);
        comment_text = [];
        comment = new IrComment("", this.location);
        irs.push(comment);

        //Prepare components
        for (i = 0; i < this.expressions.length; i++) {
          expr = this.expressions[i];
          if (expr) {
            expr.ir(state, irs);
            comment_text.push(expr.Dest);
          }
        }
        src_expr = this.expressions[0];
        src_i = 0; //Source expression index
        src_c = 0; //Component of source expression

        for (dest_i = 0; dest_i < type.size; dest_i++) {
          if (!src_expr) {
            this.ir_error("Not enough parameters to constructor");
          }

          //@todo: need to add support for > vec4
          if (types[src_expr.Type].size > 4) {
            this.ir_error("Matrix components not implemented yet");
          }

          //compute destination
          dest = util.format("%s.%s", this.Dest, Ir.swizzles[0][dest_i]);

          //compute source
          oprd = new IrOperand(src_expr.Dest);
          if (!oprd.swizzle) {
            oprd.swizzle = Ir.swizzles[0][src_c];
          }
          irs.push(new IrInstruction('MOV', dest, oprd.toString()));
          src_c++;

          //Get next source component expression
          if (src_c >= types[src_expr.Type].size) {
            if (this.expressions[src_i + 1]) {
              src_i++;
              src_expr = this.expressions[src_i];
              src_c = 0;
            }
          }
        }
        comment.comment = util.format("%s(%s) => %s %s", this.Type, comment_text.join(", "), this.Type, this.Dest);
      };

      /**
       * Constructs a field selection code block
       *
       * @param   object   state   GLSL state
       * @param   object   irs     IR representation
       */
      AstExpression.prototype.ir_field = function (state, irs) {
        var field, swz, base, se;

        //pick swizzle set
        field = this.primary_expression.identifier;
        se = this.subexpressions[0];
        se.ir(state, irs);
        if (Ir.isSwizzle(field)) {
          base = types[se.Type].base;
          if (field.length > 1) {
            if (base == 'int') {
              base = 'ivec' + field.length;
            }
            if (base == 'bool') {
              base = 'bvec' + field.length;
            }
            if (base == 'float') {
              base = 'vec' + field.length;
            }
          }
          this.Type = base;
          if (field.length > 4 || !this.Type) {
            this.ir_error(util.format("Invalid field selection %s.%s", se, field));
          }
          this.Dest = util.format("%s.%s", se.Dest, Ir.normalizeSwizzle(field));
        }
      };

      /**
       * Constructs a selection statement
       *
       * @param   ast_node    Statement
       */
      AstSelectionStatement.prototype.ir = function (state, irs) {
        var ir, cond;
        this.condition.ir(state, irs);
        //@todo: add a check that condition is bool type?

        irs.push(new IrComment(util.format("if %s then", this.condition.Dest), this.location));

        //set a flag based on the result
        ir = new IrInstruction('IF', this.condition.Dest);
        if (['bool', 'int', 'float'].indexOf(this.condition.Type) === -1) {
          this.ir_error("boolean expression expected");
        }
        if (!ir.d.swizzle) {
          ir.d.swizzle = 'x';
        }
        irs.push(ir);
        this.then_statement.ir(state, irs);
        if (this.else_statement) {
          irs.push(new IrInstruction('ELSE'));
          this.else_statement.ir(state, irs);
        }
        irs.push(new IrInstruction('ENDIF'));
      };

      /**
       * Constructs a jump statement
       *
       * Note: jump semantics are a bit different in glsl as there is no true "jumping":
       * functions are inlined, loops are unrolled, etc.
       *
       * @param   ast_node    Statement
       */
      AstJumpStatement.prototype.ir = function (state, irs) {
        var ret, ret_entry, assign, lhs;
        switch (this.mode) {
          case 'return':
            ret = this.opt_return_value;
            if (ret) {
              ret.ir(state, irs);
              ret_entry = state.symbols.get_variable('<return>');

              //@todo: need to compare return value type with current function type

              irs.push(new IrComment(util.format("return => %s %s", ret.Dest, ret.Type), this.location));

              //Piggy-back off assignment generation
              lhs = new AstExpression('<return>');
              lhs.setLocation(this.getLocation());
              lhs.Type = ret.Type;
              lhs.Dest = ret_entry.out;
              assign = new AstExpression('=', lhs, ret);
              assign.setLocation(this.getLocation());
              assign.ir_assign(state, irs, true);
            } else {
              irs.push(new IrComment("return", this.location));
            }
            break;
          case 'debugger':
            irs.push(new IrComment("debugger", this.location));
            irs.push(new IrInstruction("DBGR"));
            break;
          default:
          //@todo:
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

      /**
       * IR Class
       *
       * Stores IR code tree
       */
      function Ir(target) {
        this.target = target;
        this.symbols = {
          uniform: {
            next: 0,
            entries: {}
          },
          attribute: {
            next: 0,
            entries: {}
          },
          varying: {
            next: 0,
            entries: {}
          },
          temp: {
            next: 0
          }
        };
        this.code = [];
        this.last = null;
      }
      Ir.prototype.getTemp = function (n) {
        var t;
        n = n || 1;
        t = 'temp@' + this.symbols.temp.next;
        this.symbols.temp.next += n;
        return t;
      };

      /**
       * Add a symbol table entry into the local symbol table and return a new IR identifier
       *
       * @param   object   entry   Symbol table entry
       *
       * @return  string
       */
      Ir.prototype.getUniform = function (entry) {
        var table = this.symbols.uniform,
          out;
        if (!table.entries[entry.name]) {
          table.entries[entry.name] = entry;
          entry.out = 'uniform@' + table.next;
          table.next += entry.getType().slots;
        }
        return entry.out;
      };

      /**
       * Add a symbol table entry into the local symbol table and return a new IR identifier
       *
       * @param   object   entry   Symbol table entry
       *
       * @return  string
       */
      Ir.prototype.getAttribute = function (entry) {
        var table = this.symbols.attribute,
          out;
        if (!table.entries[entry.name]) {
          table.entries[entry.name] = entry;
          entry.out = 'attribute@' + table.next;
          table.next += entry.getType().slots;
        }
        return entry.out;
      };

      /**
       * Add a symbol table entry into the local symbol table and return a new IR identifier
       *
       * @param   object   entry   Symbol table entry
       *
       * @return  string
       */
      Ir.prototype.getVarying = function (entry) {
        var table = this.symbols.varying,
          out;
        if (!table.entries[entry.name]) {
          table.entries[entry.name] = entry;
          entry.out = 'varying@' + table.next;
          table.next += entry.getType().slots;
        }
        return entry.out;
      };
      Ir.prototype.get = function (i) {
        return this.code[i];
      };
      Ir.prototype.push = function (ir) {
        this.code.push(ir);
        this.last = ir;
      };
      Ir.isSwizzle = function (swz) {
        if (swz.match(/[xyzw]+/)) {
          return true;
        }
        if (swz.match(/[rgba]+/)) {
          return true;
        }
        if (swz.match(/[stpq]+/)) {
          return true;
        }
      };
      Ir.normalizeSwizzle = function (swz) {
        var n;
        if (!this.isSwizzle(swz)) {
          return null;
        }
        n = swz.replace(/[rs]/g, 'x').replace(/[gt]/g, 'y').replace(/[bp]/g, 'z').replace(/[aq]/g, 'w');
        return n;
      };
      Ir.swizzles = ["xyzw", "rgba", "stpq"];

      /**
       * Replaces all instances of an operand name and base index in all instructions after start
       *
       * @param   integer     Starting instruction number
       * @param   string      Old name to search for
       * @param   string      New name to replace with
       * @param   integer     Add offset
       * @param   boolean     True if replacing with a completely new operand
       */
      Ir.prototype.replaceName = function (start, old, nw, index, repl) {
        var i, j, ir, f, name, neg_const;
        neg_const = old.match(/^\-([0-9]+\.[0-9]+)/);
        if (neg_const) {
          old = neg_const[1];
          neg_const = true;
        }
        for (i = start; i < this.code.length; i++) {
          ir = this.code[i];

          //foreach each operand field
          for (j = 0; j < IR.operands.length; j++) {
            f = IR.operands[j];
            if (ir[f] && ir[f].name == old) {
              if (repl) {
                ir[f] = new Ir.Operand(ir[f].neg + nw);
              } else {
                ir[f].name = nw;
                ir[f].addOffset(index);
              }
              if (neg_const && ir[f].neg) {
                ir[f].neg = "";
              }
            }
          }
        }
      };
      Ir.prototype.toString = function () {
        return this.code.join("\n");
      };

      /**
       * Builds instructions from code table record
       *
       * @param   array       List of instruction strings
       * @param   array       List of operands
       */
      Ir.prototype.build = function (code, oprds) {
        var dest, i, j, k, o, n, t, oprd, ir, new_swz, temps;

        //Parse operands
        for (i = 0; i < oprds.length; i++) {
          oprd = new IrOperand(oprds[i]);
          if (oprd.swizzle) {
            //need a new temp to move the swizzle so our code pattern works
            new_swz = Ir.swizzles[0].substring(0, oprd.swizzle.length);
            if (oprd.swizzle != new_swz) {
              dest = this.getTemp();
              ir = new IrInstruction('MOV', util.format("%s.%s", dest, new_swz), oprd.full);
              this.push(ir);
              oprd = new IrOperand(dest);
            }
          }
          oprds[i] = oprd;
        }
        temps = [];

        //Merge template with passed operands
        for (i = 0; i < code.length; i++) {
          ir = new IrInstruction(code[i]);

          //For each operand
          for (j = 0; j < IrInstruction.operands.length; j++) {
            o = IrInstruction.operands[j];
            oprd = ir[o];
            if (!oprd) {
              break;
            }

            //Normal src/dest
            n = oprd.name.match(/%(\d+)/);
            if (n) {
              n = parseInt(n[1]);
              ir[o] = new IrOperand(oprds[n - 1].toString());
              ir[o].addOffset(oprd.address);
              ir[o].swizzle = oprd.swizzle;
              ir[o].neg = oprd.neg;
            }

            //Need temp
            t = oprd.name.match(/%t(\d+)/);
            if (t) {
              //Build up enough temps
              t = parseInt(t[1]);
              while (temps.length < t) {
                temps.push(this.getTemp());
              }
              t = temps[t - 1].split('@');
              oprd.name = t[0];
              oprd.address = t[1];
              oprd.full = oprd.toString();
            }
          }
          this.push(ir);
        }
      };

      /**
       * Ir Error Class
       *
       * Used to differentiate between a compilation error and a compiler error
       */
      function IrError(msg) {
        this.msg = msg;
        this.ir = true;
      }
      IrError.prototype = Error.prototype;

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
       * IR Instruction Class
       *
       * Represents a single assembly-like instruction
       */
      function IrInstruction(op, d, s1, s2, s3) {
        var args;
        this.str = null;
        this.line = null;
        if (arguments.length == 1) {
          args = op.split(/[\s,]/);
          op = args[0];
          d = args[1];
          s1 = args[2];
          s2 = args[3];
          s3 = args[4];
        }
        this.op = op;
        this.d = this.operand(d);
        this.s1 = this.operand(s1);
        this.s2 = this.operand(s2);
        this.s3 = this.operand(s3);
      }
      IrInstruction.operands = ['d', 's1', 's2', 's3'];
      IrInstruction.prototype.operand = function (opr) {
        return opr ? new IrOperand(opr) : "";
      };

      /**
       * Adds the offset to all operands
       *
       * @param   integer    The offset to set
       */
      IrInstruction.prototype.addOffset = function (offset) {
        var i, o;
        for (i = 0; i < IrInstruction.operands.length; i++) {
          o = IrInstruction.operands[i];
          if (this[o]) {
            this[o].addOffset(offset);
          }
        }
      };

      /**
       * Set the swizzle components on all operands
       *
       * @param   string    The swizzle to set
       */
      IrInstruction.prototype.setSwizzle = function (swz) {
        var i, o;
        for (i = 0; i < IrInstruction.operands.length; i++) {
          o = IrInstruction.operands[i];
          if (this[o] && !this[o].swizzle) {
            this[o].swizzle = swz;
          }
        }
      };

      /**
       * toString method
       *
       * @return  string
       */
      IrInstruction.prototype.toString = function () {
        var out;
        out = util.format("%s%s%s%s%s;", this.op, this.d ? ' ' + this.d : '', this.s1 ? ', ' + this.s1 : '', this.s2 ? ', ' + this.s2 : '', this.s3 ? ', ' + this.s3 : '');
        return out;
      };

      /**
       * IR Comment Class
       *
       * Represents a single comment
       */
      function IrComment(comment, loc) {
        this.comment = comment;
        this.loc = loc;
      }
      IrComment.prototype.toString = function () {
        var c = this.comment;
        if (this.loc) {
          c = util.format("%s [%s:%s-%s:%s]", c, this.loc.first_line, this.loc.first_column, this.loc.last_line, this.loc.last_column);
        }
        c = "\n# " + c;
        return c;
      };

      /**
       * IR Operand Class
       *
       * Represents a single operand
       */
      function IrOperand(str, raw) {
        this.full = "";
        this.neg = "";
        this.name = "";
        this.address = "";
        this.swizzle = "";
        this.number = "";
        this.raw = "";
        this.index = "";
        if (raw) {
          this.full = str;
          this.raw = str;
        } else {
          this.parse(str);
        }
      }

      /**
       * Parses operand string
       *
       * @param   string    string that represents a single variable
       */
      IrOperand.prototype.parse = function (str) {
        var parts, regex;
        if (!str) {
          return;
        }
        if (!isNaN(parseFloat(str))) {
          this.raw = str;
          return;
        }

        //neg
        regex = "(\-)?";

        //name (include '%' for our code substitution rules)
        regex += "([\\w%]+)";

        //number
        regex += "(?:@(\\d+))?";

        //index
        regex += "(?:\\[(\\d+)\\])?";

        //swizzle
        regex += "(?:\\.([xyzw]+))?";
        regex = new RegExp("^" + regex + "$");
        if (parts = str.match(regex)) {
          this.neg = parts[1] || "";
          this.name = parts[2];
          this.address = parseInt(parts[3]) || 0;
          this.index = parseInt(parts[4]) || 0;
          this.swizzle = parts[5] || "";
        } else {
          if (parts = str.match(/^"(.*)"$/)) {
            this.raw = parts[1];
          } else {
            this.raw = str;
          }
        }
        this.full = this.toString();
      };

      /**
       * Adds an offset
       *
       * @param   integer    Offset to add
       */
      IrOperand.prototype.addOffset = function (offset) {
        this.address = this.address || 0;
        this.address += offset;
      };

      /**
       * toString method
       *
       * @return  string
       */
      IrOperand.prototype.toString = function () {
        var str;
        if (this.raw) {
          str = this.raw;
        } else {
          str = this.neg + this.name + ("@" + this.address) + (this.index !== "" ? "[" + this.index + "]" : "") + (this.swizzle ? "." + this.swizzle : "");
        }
        return str;
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
       * GlslProgramJavascript class
       */
      function GlslProgramJavascript() {
        this.vertex_code = [];
        this.fragment_code = [];
        this.symbols = new GlslProgramJavascriptVars();
        this.context = new GlslProgramJavascriptContext();
        this.library = {
          tex: function tex(dest, i, sampler, src, j, dim) {
            dest[i] = 0;
            dest[i + 1] = 0;
            dest[i + 2] = 0;
            dest[i + 3] = 1;
          }
        };
        this.vertex = null;
        this.shader = null;
      }
      var proto = GlslProgramJavascript.prototype;
      GlslProgramJavascript.translation_table = {
        'ABS': '%1.* = Math.abs(%2.*);',
        'ADD': '%1.* = %2.* + %3.*;',
        'AND': '%1.* = %2.* & %3.*;',
        //'ARL' : false,
        'CEIL': '%1.* = Math.ceil(%2.*);',
        'CMP': '%1.* = (%2.* < 0.0) ? %3.* : %4.*;',
        'COS': '%1.* = Math.cos(%2.*);',
        'DIV': '%1.* = %2.* / %3.*;',
        'DBGR': 'debugger;',
        'DP2': '%1.x = (%2.x * %3.x) + (%2.y * %3.y);',
        'DP3': '%1.x = (%2.x * %3.x) + (%2.y * %3.y) + (%2.z * %3.z);',
        'DP4': '%1.x = (%2.x * %3.x) + (%2.y * %3.y) + (%2.z * %3.z) + (%2.w * %3.w);',
        //'DPH' : '%1.* = (%2.x * %3.x + %2.y * %3.y + %2.z + %3.z + %3.w);',
        //'DST' : '%1.* = [1, %2.y * %3.y, %2.z, %3.w];',
        'ELSE': '} else {',
        'ENDIF': '}',
        'FLR': '%1.* = Math.floor(%2.*);',
        'FRC': '%1.* = %2.* - Math.floor(%2.*);',
        'IF': 'if (%1.x) {',
        'MAD': '%1.* = (%2.* * %3.*) + %4.*;',
        'MAX': '%1.* = Math.max(%2.*, %3.*);',
        'MIN': '%1.* = Math.min(%2.*, %3.*);',
        'MOD': '%1.* = %2.* % %3.*;',
        'MOV': '%1.* = %2.*;',
        'MUL': '%1.* = %2.* * %3.*;',
        'OR': '%1.* = %2.* | %3.*;',
        'POW': '%1.x = Math.pow(%2.x, %3.x);',
        'RET': 'return;',
        'RSQ': '%1.* = (1.0 / Math.sqrt(%2.*));',
        'SEQ': '%1.* = (%2.* === %3.*) ? 1.0 : 0.0;',
        'SGE': '%1.* = (%2.* >=  %3.*) ? 1.0 : 0.0;',
        'SGT': '%1.* = (%2.* >   %3.*) ? 1.0 : 0.0;',
        'SIN': '%1.* = Math.sin(%2.*);',
        'SLE': '%1.* = (%2.* <=  %3.*) ? 1.0 : 0.0;',
        'SLT': '%1.* = (%2.* <   %3.*) ? 1.0 : 0.0;',
        'SNE': '%1.* = (%2.* !== %3.*) ? 1.0 : 0.0;',
        'SUB': '%1.* = %2.* - %3.*;',
        'TAN': '%1.* = Math.tan(%2.*);',
        //Non-standard opcode for NV_gpu
        'TEX': 'tex(%1, %4, %2, %5, %3.x, 0);',
        //%4 = address of %1, %5 = address of %2
        'XOR': '%1.* = %2.* ^ %3.*;'
      };

      /**
       * Return string representation of program
       *
       * @param   int   target   target
       *
       * @return  string
       */
      proto.toString = function (target) {
        if (target === glsl.target.fragment) {
          return this.fragment_code.join("\n");
        } else if (target === glsl.target.vertex) {
          return this.vertex_code.join("\n");
        } else {
          return this.current.join("\n");
        }
      };

      /**
       * Translates IR code into a javascript representation
       *
       * @return  bool      true if there were no errors
       */
      proto.addObjectCode = function (object, target) {
        var i, errors;

        //optimize(irs, symbols);

        this.mergeSymbols(object);
        this.current = [];
        for (i = 0; i < object.code.length; i++) {
          try {
            this.instruction(object.code[i]);
          } catch (e) {
            this.error = util.format("%s at %s:%s", e.message, e.lineNumber, e.columnNumber);
            return false;
          }
        }
        if (target == glsl.target.vertex) {
          this.vertex_code = this.current;
        } else if (target == glsl.target.fragment) {
          this.fragment_code = this.current;
        }
        return true;
      };

      /**
       * Merge symbol code into program table
       */
      proto.mergeSymbols = function (object) {
        var s, t, n, entry, sym, start, slots, comp;
        for (s in object.symbols) {
          t = object.symbols[s].entries;
          for (n in t) {
            entry = t[n];
            start = parseInt(entry.out.split('@')[1]);
            slots = entry.getType().slots;
            comp = entry.getType().size / slots;
            if (s == 'uniform') {
              sym = this.symbols.addUniform(entry.name, start, slots, comp);
              if (this.findSymbolCollision(this.symbols.uniform, sym)) {
                this.rewriteSymbol(this.symbols.uniform, sym, object);
              }
            } else if (s == 'attribute') {
              this.symbols.addAttribute(entry.name, start, slots, comp);
            } else if (s == 'varying') {
              this.symbols.addVarying(entry.name, start, slots, comp);
            }
          }
        }
      };

      /**
       * Scan symbol table to find collisions
       */
      proto.findSymbolCollision = function (table, symbol) {
        var i, my_start, my_end, start, end;
        my_start = symbol.pos;
        my_end = my_start + symbol.slots - 1;
        for (i in table) {
          if (i == symbol.name) {
            continue;
          }
          start = table[i].pos;
          end = start + table[i].slots - 1;
          if (my_start >= start && my_start <= end || my_end >= start && my_end <= end) {
            return true;
          }
        }
        return false;
      };

      /**
       * Rewrite symbol table entry position in code
       */
      proto.findNewSymbolPosition = function (table, symbol) {
        var i, size, addresses, last, next;
        addresses = [];

        //find new address
        for (i in table) {
          if (symbol.name == i) {
            continue;
          }

          //start address
          addresses.push(table[i].pos);

          //end address
          addresses.push(table[i].pos + table[i].slots - 1);
        }
        addresses.sort();

        //Can insert at beginning
        if (addresses[0] >= symbol.slots) {
          return 0;
        }

        //Can insert in between
        for (i = 1; i < addresses.length; i += 2) {
          last = addresses[i];
          next = addresses[i];
          if (next - last - 1 > symbol.slots) {
            return last + 1;
          }
        }

        //Can insert at end

        return addresses.slice(-1)[0] + 1;
      };

      /**
       * Rewrite symbol table entry position in code
       */
      proto.rewriteSymbol = function (table, symbol, object) {
        var pos, old_start, old_end, diff, i, ins;
        old_start = symbol.pos;
        old_end = old_start + symbol.slots - 1;
        symbol.pos = this.findNewSymbolPosition(table, symbol);
        diff = symbol.pos - old_start;
        for (i = 0; i < object.code.length; i++) {
          ins = object.code[i];
          if (!(ins instanceof IrInstruction)) {
            continue;
          }
          this.rewriteOperandAddress(ins.d, old_start, old_end, diff, symbol);
          this.rewriteOperandAddress(ins.s1, old_start, old_end, diff, symbol);
          this.rewriteOperandAddress(ins.s2, old_start, old_end, diff, symbol);
          this.rewriteOperandAddress(ins.s3, old_start, old_end, diff, symbol);
        }
      };

      /**
       * Rewrite symbol table entry position in code
       */
      proto.rewriteOperandAddress = function (oprd, old_start, old_end, diff, symbol) {
        var diff;
        if (!oprd) {
          return;
        }
        if (oprd.name != symbol.type) {
          return;
        }
        if (oprd.address >= old_start && oprd.address <= old_end) {
          oprd.address += diff;
        }
      };

      /**
       * Build a program
       *
       * @return  function
       */
      proto.build = function () {
        var module, shaders;
        module = new Function("stdlib", "foreign", "heap", "//\"use asm\";\n" + "var\n" + "uniform_f32   = new stdlib.Float32Array(heap,   0, 128),\n" + "attribute_f32 = new stdlib.Float32Array(heap, 512, 128),\n" + "varying_f32   = new stdlib.Float32Array(heap, 1024, 128),\n" + "result_f32    = new stdlib.Float32Array(heap, 1536, 128),\n" + "temp_f32      = new stdlib.Float32Array(heap, 2048, 128),\n" + "jstemp        = new stdlib.Float32Array(heap, 2544,   4),\n" + "tex           = foreign.tex;\n" + ";\n" + "function vs() {\n" + this.vertex_code.join("\n") + "\n" + "}\n" + "function fs() {\n" + this.fragment_code.join("\n") + "\n" + "}\n" + "return { fragment : fs, vertex : vs };");
        shaders = module(window, this.library, this.context.heap);
        this.vertex = shaders.vertex;
        this.fragment = shaders.fragment;
      };

      /**
       * Translates ASM instruction into output format
       *
       * @param   string    string that represents a single instruction
       */
      proto.instruction = function (ins) {
        var tpl, dest, src, i, j, k, code, js;
        if (ins instanceof IrComment) {
          this.current.push('// ' + ins.toString().replace("\n", ""));
          return;
        }
        this.current.push('// ' + ins.toString());
        if (!(tpl = GlslProgramJavascript.translation_table[ins.op])) {
          throw new Error(util.format("Could not translate opcode '%s'", ins.op));
        }

        //variables
        dest = this.buildComponents(ins.d, true);
        if (!dest) {
          this.current.push(tpl);
          return;
        }
        src = [];
        src.push(this.buildComponents(ins.s1));
        src.push(this.buildComponents(ins.s2));
        src.push(this.buildComponents(ins.s3));
        if (ins.op == 'TEX') {
          js = tpl.replace(/%1/g, dest.name);
          js = js.replace(/%2/g, src[0].name);
          js = this.replaceOperand(js, '%3', src[1], 0);
          js = js.replace(/%4/g, dest.start);
          js = js.replace(/%5/g, src[0].start);
          this.current.push(js);
          this.current.push("");
          return;
        }
        this.generateTemp(dest, src, tpl);
        for (i = 0; i < dest.components.length; i++) {
          js = this.replaceOperand(tpl, '%1', dest, i);
          for (j = 0; j < 3; j++) {
            if (src[j]) {
              js = this.replaceOperand(js, '%' + (j + 2), src[j], i);
            }
          }
          this.current.push(js);
        }
        this.current.push("");
      };

      /**
       * Replace an operand into code template
       *
       * @param   string   tpl    Template
       * @param   string   from   Template operand
       * @param   object   op     Operand info
       * @param   int      n      Current component iteration  
       */
      proto.replaceOperand = function (tpl, from, op, n) {
        var i,
          out,
          name,
          addr,
          swz = ['x', 'y', 'z', 'w'];
        if (op.raw) {
          name = op.name;
        } else {
          if (op.jstemp && op.jstemp[n]) {
            name = 'jstemp';
            addr = n;
          } else {
            name = op.name;
            if (op.components) {
              addr = op.start + op.components[n];
            }
          }
        }
        if (op.components) {
          out = tpl.replace(from + '.*', util.format("%s[%s]", name, addr));
        } else {
          out = tpl.replace(from + '.*', name);
        }
        for (i = 0; i < swz.length; i++) {
          out = out.replace(new RegExp(from + '\.' + swz[i], 'g'), util.format("%s[%s]", name, op.start + i));
        }
        return out;
      };

      /**
       * Prepares info on IR operand
       *
       * @param   IrOperand   opr    Operand
       * @param   bool        dest   Is destination?
       *
       * @return  object
       */
      proto.buildComponents = function (opr, dest) {
        var i, swz, out;
        if (!opr) {
          return null;
        }
        out = {};
        if (opr.raw) {
          out.name = opr.raw;
          out.raw = true;
          return out;
        }
        out.name = opr.neg + opr.name + '_f32';
        out.start = 4 * opr.address + 4 * opr.index;
        out.components = [];
        out.jstemp = [];

        //generate array representation of swizzle components, expanding if necessary
        swz = opr.swizzle || "xyzw";
        swz = swz.split("");
        for (i = 0; i < 4; i++) {
          //exact swizzle specified and less than 4 components, grab last one
          if (swz.length <= i) {
            if (!dest) {
              //repeat last one
              out.components.push(out.components[i - 1]);
              out.jstemp.push(null);
            }
          } else {
            out.components.push("xyzw".indexOf(swz[i]));
            out.jstemp.push(null);
          }
        }
        return out;
      };
      proto.generateTemp = function (dest, src, tpl) {
        var i, c, op, written;
        for (i = 0; i < dest.components.length; i++) {
          written = dest.components.slice(0, i);
          for (c = 0; c < src.length; c++) {
            op = src[c];
            if (op && op.name == dest.name && op.start == dest.start && written.indexOf(op.components[i]) != -1) {
              op.jstemp[i] = true;
              this.current.push(util.format("jstemp[%s] = %s[%s]", i, op.name, op.start + op.components[i]));
            }
          }
        }

        //console.log(tpl, dest, src);
        //debugger;
      };

      /**
       * Get Uniform Location
       *
       * @param   string   name   Name
       *
       * @return  int
       */
      proto.getUniformLocation = function (name) {
        if (this.symbols.uniform[name]) {
          return this.symbols.uniform[name].start;
        }
        return false;
      };

      /**
       * Get Uniform Size
       *
       * @param   string   name   Name
       *
       * @return  int
       */
      proto.getUniformSize = function (name) {
        if (this.symbols.uniform[name]) {
          return this.symbols.uniform[name].size;
        }
        return false;
      };

      /**
       * Set Uniform data
       * 
       * @param   string   name   Name
       * @param   array    data   Data
       */
      proto.setUniformData = function (name, data) {
        var i, l, s, d;
        d = data.length;
        l = this.getUniformSize(name);
        s = this.getUniformLocation(name);
        if (l === false) {
          return;
        }
        this.context.uniform_f32.set(data, i + s);
      };

      /**
       * Get Attribute Location
       *
       * @param   string   name   Name
       *
       * @return  int
       */
      proto.getAttributeLocation = function (name) {
        if (this.symbols.attribute[name]) {
          return this.symbols.attribute[name].start;
        }
        return false;
      };

      /**
       * Get Attribute Size
       *
       * @param   string   name   Name
       *
       * @return  int
       */
      proto.getAttributeSize = function (name) {
        if (this.symbols.attribute[name]) {
          return this.symbols.attribute[name].size;
        }
        return false;
      };

      /**
       * Set Attribute data
       * 
       * @param   string   name   Name
       * @param   array    data   Data
       */
      proto.setAttributeData = function (name, data) {
        var i, l, s, d;
        d = data.length;
        l = this.getAttributeSize(name);
        s = this.getAttributeLocation(name);
        if (l === false) {
          return;
        }
        this.context.attribute_f32.set(data, i + s);
      };

      /**
       * Get result data
       *
       * @param   int   start   Start pos
       * @param   int   size    Size
       *
       * @return  array
       */
      proto.getResultData = function (start, size) {
        var res;
        res = Array.prototype.slice.apply(this.context.result_f32, [start, size]);
        return res;
      };

      /**
       * Set TEX lookup function
       *
       * 
       */
      proto.setTexFunction = function (func) {
        this.library.tex = func;
      };
      glsl.program = GlslProgramJavascript;

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
       * GlslProgramJavascriptContext class
       */
      function GlslProgramJavascriptContext() {
        this.heap = new ArrayBuffer(640 * 4);
        this.uniform_f32 = new Float32Array(this.heap, 0, 128);
        this.attribute_f32 = new Float32Array(this.heap, 128 * 4, 128);
        this.varying_f32 = new Float32Array(this.heap, 256 * 4, 128);
        this.result_f32 = new Float32Array(this.heap, 384 * 4, 128);
      }
      var proto = GlslProgramJavascriptContext.prototype;

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
       * GlslProgramJavascriptVars Class
       */
      function GlslProgramJavascriptVars() {
        this.uniform = {};
        this.attribute = {};
        this.varying = {};
      }
      var proto = GlslProgramJavascriptVars.prototype;

      /**
       * Add uniform variable
       */
      proto.addUniform = function (name, pos, slots, comp) {
        this.uniform[name] = new GlslProgramJavascriptVar(name, pos, slots, comp, 'uniform');
        return this.uniform[name];
      };

      /**
       * Add attribute variable
       */
      proto.addAttribute = function (name, pos, slots, comp) {
        this.attribute[name] = new GlslProgramJavascriptVar(name, pos, slots, comp, 'attribute');
        return this.attribute[name];
      };

      /**
       * Add varying variable
       */
      proto.addVarying = function (name, pos, slots, comp) {
        this.varying[name] = new GlslProgramJavascriptVar(name, pos, slots, comp, 'varying');
        return this.varying[name];
      };

      /**
       * GlslProgramJavascriptVar Class
       */
      function GlslProgramJavascriptVar(name, pos, slots, comp, type) {
        this.name = name;
        this.pos = pos;
        this.slots = slots;
        this.components = comp;
        this.type = type;
      }

      //this.glsl = glsl;

      if ('object' !== 'undefined') {
        module.exports = glsl;
      }
    })();
  })(glslParser$1, glslParser$1.exports);
  var glslParserExports = glslParser$1.exports;
  var glsl = /*@__PURE__*/getDefaultExportFromCjs(glslParserExports);

  var generator = {};

  var ast$4 = {};

  "use strict";
  Object.defineProperty(ast$4, "__esModule", { value: true });
  var makeEveryOtherGenerator_1 = ast$4.makeEveryOtherGenerator = makeGenerator_1 = ast$4.makeGenerator = visit_1 = ast$4.visit = evaluate_1 = ast$4.evaluate = void 0;
  var isNode = function (node) { return !!(node === null || node === void 0 ? void 0 : node.type); };
  var isTraversable = function (node) { return isNode(node) || Array.isArray(node); };
  var evaluate = function (ast, visitors) {
      var visit = function (node) {
          var visitor = visitors[node.type];
          if (!visitor) {
              throw new Error("No evaluate() visitor for " + node.type);
          }
          return visitors[node.type](node, visit);
      };
      return visit(ast);
  };
  var evaluate_1 = ast$4.evaluate = evaluate;
  var makePath = function (node, parent, parentPath, key, index) { return ({
      node: node,
      parent: parent,
      parentPath: parentPath,
      key: key,
      index: index,
      skip: function () {
          this.skipped = true;
      },
      remove: function () {
          this.removed = true;
      },
      replaceWith: function (replacer) {
          this.replaced = replacer;
      },
      findParent: function (test) {
          return !parentPath
              ? parentPath
              : test(parentPath)
                  ? parentPath
                  : parentPath.findParent(test);
      },
  }); };
  /**
   * Apply the visitor pattern to an AST that conforms to this compiler's spec
   */
  var visit = function (ast, visitors) {
      var visitNode = function (node, parent, parentPath, key, index) {
          var _a;
          var visitor = visitors[node.type];
          var path = makePath(node, parent, parentPath, key, index);
          if (visitor === null || visitor === void 0 ? void 0 : visitor.enter) {
              visitor.enter(path);
              if (path.removed) {
                  if (!key || !parent) {
                      throw new Error("Asked to remove " + node.id + " but no parent key was present in " + (parent === null || parent === void 0 ? void 0 : parent.id));
                  }
                  if (typeof index === 'number') {
                      parent[key].splice(index, 1);
                  }
                  else {
                      parent[key] = null;
                  }
                  return path;
              }
              if (path.replaced) {
                  if (!key || !parent) {
                      throw new Error("Asked to remove " + node.id + " but no parent key was present in " + (parent === null || parent === void 0 ? void 0 : parent.id));
                  }
                  if (typeof index === 'number') {
                      parent[key].splice(index, 1, path.replaced);
                  }
                  else {
                      parent[key] = path.replaced;
                  }
              }
              if (path.skipped) {
                  return path;
              }
          }
          Object.entries(node)
              .filter(function (_a) {
              var nodeKey = _a[0], nodeValue = _a[1];
              return isTraversable(nodeValue);
          })
              .forEach(function (_a) {
              var nodeKey = _a[0], nodeValue = _a[1];
              if (Array.isArray(nodeValue)) {
                  for (var i = 0, offset = 0; i - offset < nodeValue.length; i++) {
                      var child = nodeValue[i - offset];
                      var res = visitNode(child, node, path, nodeKey, i - offset);
                      if (res === null || res === void 0 ? void 0 : res.removed) {
                          offset += 1;
                      }
                  }
              }
              else {
                  visitNode(nodeValue, node, path, nodeKey);
              }
          });
          (_a = visitor === null || visitor === void 0 ? void 0 : visitor.exit) === null || _a === void 0 ? void 0 : _a.call(visitor, path);
          // visitor?.exit?.(node, parent, key, index);
      };
      return visitNode(ast);
  };
  var visit_1 = ast$4.visit = visit;
  /**
   * Stringify an AST
   */
  var makeGenerator = function (generators) {
      var gen = function (ast) {
          return typeof ast === 'string'
              ? ast
              : ast === null || ast === undefined
                  ? ''
                  : Array.isArray(ast)
                      ? ast.map(gen).join('')
                      : ast.type in generators
                          ? generators[ast.type](ast)
                          : "NO GENERATOR FOR " + ast.type + ast;
      };
      return gen;
  };
  var makeGenerator_1 = ast$4.makeGenerator = makeGenerator;
  var makeEveryOtherGenerator = function (generate) {
      var everyOther = function (nodes, eo) {
          return nodes.reduce(function (output, node, index) {
              return output +
                  generate(node) +
                  (index === nodes.length - 1 ? '' : generate(eo[index]));
          }, '');
      };
      return everyOther;
  };
  makeEveryOtherGenerator_1 = ast$4.makeEveryOtherGenerator = makeEveryOtherGenerator;

  "use strict";
  Object.defineProperty(generator, "__esModule", { value: true });
  var ast_1 = ast$4;
  var generators = {
      program: function (node) { return generate(node.ws) + generate(node.program); },
      preprocessor: function (node) { return generate(node.line) + generate(node._); },
      keyword: function (node) { return generate(node.token) + generate(node.whitespace); },
      precision: function (node) {
          return generate(node.prefix) + generate(node.qualifier) + generate(node.specifier);
      },
      // Statements
      expression_statement: function (node) {
          return generate(node.expression) + generate(node.semi);
      },
      if_statement: function (node) {
          return generate(node.if) +
              generate(node.lp) +
              generate(node.condition) +
              generate(node.rp) +
              generate(node.body) +
              generate(node.else);
      },
      switch_statement: function (node) {
          return generate(node.switch) +
              generate(node.lp) +
              generate(node.expression) +
              generate(node.rp) +
              generate(node.lb) +
              generate(node.cases) +
              generate(node.rb);
      },
      break_statement: function (node) { return generate(node.break) + generate(node.semi); },
      do_statement: function (node) {
          return generate(node.do) +
              generate(node.body) +
              generate(node.while) +
              generate(node.lp) +
              generate(node.expression) +
              generate(node.rp) +
              generate(node.semi);
      },
      continue_statement: function (node) { return generate(node.continue) + generate(node.semi); },
      return_statement: function (node) {
          return generate(node.return) + generate(node.expression) + generate(node.semi);
      },
      discard_statement: function (node) { return generate(node.discard) + generate(node.semi); },
      while_statement: function (node) {
          return generate(node.while) +
              generate(node.lp) +
              generate(node.condition) +
              generate(node.rp) +
              generate(node.body);
      },
      for_statement: function (node) {
          return generate(node.for) +
              generate(node.lp) +
              generate(node.init) +
              generate(node.initSemi) +
              generate(node.condition) +
              generate(node.conditionSemi) +
              generate(node.operation) +
              generate(node.rp) +
              generate(node.body);
      },
      condition_expression: function (node) {
          return generate(node.specified_type) +
              generate(node.identifier) +
              generate(node.declarator) +
              generate(node.op) +
              generate(node.initializer);
      },
      declaration_statement: function (node) {
          return generate(node.declaration) + generate(node.semi);
      },
      fully_specified_type: function (node) {
          return generate(node.qualifiers) + generate(node.specifier);
      },
      layout_qualifier: function (node) {
          return generate(node.layout) +
              generate(node.lp) +
              generateWithEveryOther(node.qualifiers, node.commas) +
              generate(node.rp);
      },
      layout_qualifier_id: function (node) {
          return generate(node.identifier) +
              generate(node.operator) +
              generate(node.expression);
      },
      switch_case: function (node) {
          return generate(node.case) +
              generate(node.test) +
              generate(node.colon) +
              generate(node.statements);
      },
      default_case: function (node) {
          return generate(node.default) + generate(node.colon) + generate(node.statements);
      },
      declaration: function (node) {
          return generate(node.specified_type) +
              generate(node.identifier) +
              generate(node.quantifier) +
              generate(node.operator) +
              generate(node.initializer);
      },
      declarator_list: function (node) {
          return generate(node.specified_type) +
              generateWithEveryOther(node.declarations, node.commas);
      },
      declarator: function (node) {
          return generate(node.specified_type) +
              generate(node.identifier) +
              generate(node.qualifiers) +
              generate(node.quantifier);
      },
      type_specifier: function (node) {
          return generate(node.specifier) +
              generate(node.quantifier) +
              generate(node.declarations);
      },
      array_specifiers: function (node) { return generate(node.specifiers); },
      array_specifier: function (node) {
          return generate(node.lb) + generate(node.expression) + generate(node.rb);
      },
      identifier: function (node) { return node.identifier + generate(node.whitespace); },
      function: function (node) {
          return generate(node['prototype']) + generate(node.body) + generate(node.rp);
      },
      function_header: function (node) {
          return generate(node.returnType) + generate(node.name) + generate(node.lp);
      },
      function_prototype: function (node) {
          return generate(node.header.returnType) +
              generate(node.header.name) +
              generate(node.header.lp) +
              (node.parameters
                  ? generateWithEveryOther(node.parameters, node.commas)
                  : '') +
              generate(node.rp);
      },
      parameter_declaration: function (node) {
          return generate(node.qualifier) + generate(node.declaration);
      },
      compound_statement: function (node) {
          return generate(node.lb) + generate(node.statements) + generate(node.rb);
      },
      function_call: function (node) {
          return generate(node.identifier) +
              generate(node.lp) +
              generate(node.args) +
              generate(node.rp);
      },
      parameter_declarator: function (node) {
          return generate(node.qualifier) +
              generate(node.specifier) +
              generate(node.identifier) +
              generate(node.quantifier);
      },
      postfix: function (node) { return generate(node.expr) + generate(node.postfix); },
      quantifier: function (node) {
          return generate(node.lb) + generate(node.expr) + generate(node.rb);
      },
      quantified_identifier: function (node) {
          return generate(node.identifier) + generate(node.quantifier);
      },
      field_selection: function (node) { return generate(node.dot) + generate(node.selection); },
      subroutine_qualifier: function (node) {
          return generate(node.subroutine) +
              generate(node.lp) +
              generate(node.type_names) +
              generate(node.commas) +
              generate(node.rp);
      },
      assignment: function (node) {
          return generate(node.left) + generate(node.operator) + generate(node.right);
      },
      ternary: function (node) {
          return generate(node.expr) +
              generate(node.question) +
              generate(node.left) +
              generate(node.colon) +
              generate(node.right);
      },
      binary: function (node) {
          return generate(node.left) + generate(node.operator) + generate(node.right);
      },
      group: function (node) {
          return generate(node.lp) + generate(node.expression) + generate(node.rp);
      },
      unary: function (node) { return generate(node.operator) + generate(node.expression); },
      float_constant: function (node) { return generate(node.token) + generate(node.whitespace); },
      double_constant: function (node) { return generate(node.token) + generate(node.whitespace); },
      int_constant: function (node) { return generate(node.token) + generate(node.whitespace); },
      uint_constant: function (node) { return generate(node.token) + generate(node.whitespace); },
      bool_constant: function (node) { return generate(node.token) + generate(node.whitespace); },
      literal: function (node) { return generate(node.literal) + generate(node.whitespace); },
      struct: function (node) {
          return generate(node.struct) +
              generate(node.typeName) +
              generate(node.lb) +
              generate(node.declarations) +
              generate(node.rb);
      },
      struct_declaration: function (node) {
          return generate(node.declaration) + generate(node.semi);
      },
      interface_declarator: function (node) {
          return generate(node.qualifiers) +
              generate(node.interface_type) +
              generate(node.lp) +
              generate(node.declarations) +
              generate(node.rp) +
              generate(node.identifier);
      },
      struct_declarator: function (node) {
          return generate(node.specified_type) +
              generateWithEveryOther(node.declarations, node.commas);
      },
      initializer_list: function (node) {
          return generate(node.lb) +
              generateWithEveryOther(node.initializers, node.commas) +
              generate(node.rb);
      },
      qualifier_declarator: function (node) {
          return generate(node.qualifiers) +
              generateWithEveryOther(node.declarations, node.commas);
      },
  };
  var generate = (0, ast_1.makeGenerator)(generators);
  var generateWithEveryOther = (0, ast_1.makeEveryOtherGenerator)(generate);
  var _default = generator.default = generate;

  // Generated by Peggy 1.2.0.
  //
  // https://peggyjs.org/

  "use strict";

  function peg$subclass(child, parent) {
    function C() { this.constructor = child; }
    C.prototype = parent.prototype;
    child.prototype = new C();
  }

  function peg$SyntaxError(message, expected, found, location) {
    var self = Error.call(this, message);
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(self, peg$SyntaxError.prototype);
    }
    self.expected = expected;
    self.found = found;
    self.location = location;
    self.name = "SyntaxError";
    return self;
  }

  peg$subclass(peg$SyntaxError, Error);

  function peg$padEnd(str, targetLength, padString) {
    padString = padString || " ";
    if (str.length > targetLength) { return str; }
    targetLength -= str.length;
    padString += padString.repeat(targetLength);
    return str + padString.slice(0, targetLength);
  }

  peg$SyntaxError.prototype.format = function(sources) {
    var str = "Error: " + this.message;
    if (this.location) {
      var src = null;
      var k;
      for (k = 0; k < sources.length; k++) {
        if (sources[k].source === this.location.source) {
          src = sources[k].text.split(/\r\n|\n|\r/g);
          break;
        }
      }
      var s = this.location.start;
      var loc = this.location.source + ":" + s.line + ":" + s.column;
      if (src) {
        var e = this.location.end;
        var filler = peg$padEnd("", s.line.toString().length);
        var line = src[s.line - 1];
        var last = s.line === e.line ? e.column : line.length + 1;
        str += "\n --> " + loc + "\n"
            + filler + " |\n"
            + s.line + " | " + line + "\n"
            + filler + " | " + peg$padEnd("", s.column - 1)
            + peg$padEnd("", last - s.column, "^");
      } else {
        str += "\n at " + loc;
      }
    }
    return str;
  };

  peg$SyntaxError.buildMessage = function(expected, found) {
    var DESCRIBE_EXPECTATION_FNS = {
      literal: function(expectation) {
        return "\"" + literalEscape(expectation.text) + "\"";
      },

      class: function(expectation) {
        var escapedParts = expectation.parts.map(function(part) {
          return Array.isArray(part)
            ? classEscape(part[0]) + "-" + classEscape(part[1])
            : classEscape(part);
        });

        return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
      },

      any: function() {
        return "any character";
      },

      end: function() {
        return "end of input";
      },

      other: function(expectation) {
        return expectation.description;
      }
    };

    function hex(ch) {
      return ch.charCodeAt(0).toString(16).toUpperCase();
    }

    function literalEscape(s) {
      return s
        .replace(/\\/g, "\\\\")
        .replace(/"/g,  "\\\"")
        .replace(/\0/g, "\\0")
        .replace(/\t/g, "\\t")
        .replace(/\n/g, "\\n")
        .replace(/\r/g, "\\r")
        .replace(/[\x00-\x0F]/g,          function(ch) { return "\\x0" + hex(ch); })
        .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return "\\x"  + hex(ch); });
    }

    function classEscape(s) {
      return s
        .replace(/\\/g, "\\\\")
        .replace(/\]/g, "\\]")
        .replace(/\^/g, "\\^")
        .replace(/-/g,  "\\-")
        .replace(/\0/g, "\\0")
        .replace(/\t/g, "\\t")
        .replace(/\n/g, "\\n")
        .replace(/\r/g, "\\r")
        .replace(/[\x00-\x0F]/g,          function(ch) { return "\\x0" + hex(ch); })
        .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return "\\x"  + hex(ch); });
    }

    function describeExpectation(expectation) {
      return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
    }

    function describeExpected(expected) {
      var descriptions = expected.map(describeExpectation);
      var i, j;

      descriptions.sort();

      if (descriptions.length > 0) {
        for (i = 1, j = 1; i < descriptions.length; i++) {
          if (descriptions[i - 1] !== descriptions[i]) {
            descriptions[j] = descriptions[i];
            j++;
          }
        }
        descriptions.length = j;
      }

      switch (descriptions.length) {
        case 1:
          return descriptions[0];

        case 2:
          return descriptions[0] + " or " + descriptions[1];

        default:
          return descriptions.slice(0, -1).join(", ")
            + ", or "
            + descriptions[descriptions.length - 1];
      }
    }

    function describeFound(found) {
      return found ? "\"" + literalEscape(found) + "\"" : "end of input";
    }

    return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
  };

  function peg$parse(input, options) {
    options = options !== undefined ? options : {};

    var peg$FAILED = {};
    var peg$source = options.grammarSource;

    var peg$startRuleFunctions = { start: peg$parsestart };
    var peg$startRuleFunction = peg$parsestart;

    var peg$c0 = "attribute";
    var peg$c1 = "varying";
    var peg$c2 = "const";
    var peg$c3 = "bool";
    var peg$c4 = "float";
    var peg$c5 = "double";
    var peg$c6 = "int";
    var peg$c7 = "uint";
    var peg$c8 = "break";
    var peg$c9 = "continue";
    var peg$c10 = "do";
    var peg$c11 = "else";
    var peg$c12 = "for";
    var peg$c13 = "if";
    var peg$c14 = "discard";
    var peg$c15 = "return";
    var peg$c16 = "switch";
    var peg$c17 = "case";
    var peg$c18 = "default";
    var peg$c19 = "subroutine";
    var peg$c20 = "bvec2";
    var peg$c21 = "bvec3";
    var peg$c22 = "bvec4";
    var peg$c23 = "ivec2";
    var peg$c24 = "ivec3";
    var peg$c25 = "ivec4";
    var peg$c26 = "uvec2";
    var peg$c27 = "uvec3";
    var peg$c28 = "uvec4";
    var peg$c29 = "vec2";
    var peg$c30 = "vec3";
    var peg$c31 = "vec4";
    var peg$c32 = "mat2";
    var peg$c33 = "mat3";
    var peg$c34 = "mat4";
    var peg$c35 = "centroid";
    var peg$c36 = "in";
    var peg$c37 = "out";
    var peg$c38 = "inout";
    var peg$c39 = "uniform";
    var peg$c40 = "patch";
    var peg$c41 = "sample";
    var peg$c42 = "buffer";
    var peg$c43 = "shared";
    var peg$c44 = "coherent";
    var peg$c45 = "volatile";
    var peg$c46 = "restrict";
    var peg$c47 = "readonly";
    var peg$c48 = "writeonly";
    var peg$c49 = "dvec2";
    var peg$c50 = "dvec3";
    var peg$c51 = "dvec4";
    var peg$c52 = "dmat2";
    var peg$c53 = "dmat3";
    var peg$c54 = "dmat4";
    var peg$c55 = "noperspective";
    var peg$c56 = "flat";
    var peg$c57 = "smooth";
    var peg$c58 = "layout";
    var peg$c59 = "mat2x2";
    var peg$c60 = "mat2x3";
    var peg$c61 = "mat2x4";
    var peg$c62 = "mat3x2";
    var peg$c63 = "mat3x3";
    var peg$c64 = "mat3x4";
    var peg$c65 = "mat4x2";
    var peg$c66 = "mat4x3";
    var peg$c67 = "mat4x4";
    var peg$c68 = "dmat2x2";
    var peg$c69 = "dmat2x3";
    var peg$c70 = "dmat2x4";
    var peg$c71 = "dmat3x2";
    var peg$c72 = "dmat3x3";
    var peg$c73 = "dmat3x4";
    var peg$c74 = "dmat4x2";
    var peg$c75 = "dmat4x3";
    var peg$c76 = "dmat4x4";
    var peg$c77 = "atomic_uint";
    var peg$c78 = "sampler1D";
    var peg$c79 = "sampler2D";
    var peg$c80 = "sampler3D";
    var peg$c81 = "samplerCube";
    var peg$c82 = "sampler1DShadow";
    var peg$c83 = "sampler2DShadow";
    var peg$c84 = "samplerCubeShadow";
    var peg$c85 = "sampler1DArray";
    var peg$c86 = "sampler2DArray";
    var peg$c87 = "sampler1DArrayShadow";
    var peg$c88 = "sampler2DArrayshadow";
    var peg$c89 = "isampler1D";
    var peg$c90 = "isampler2D";
    var peg$c91 = "isampler3D";
    var peg$c92 = "isamplerCube";
    var peg$c93 = "isampler1Darray";
    var peg$c94 = "isampler2DArray";
    var peg$c95 = "usampler1D";
    var peg$c96 = "usampler2D";
    var peg$c97 = "usampler3D";
    var peg$c98 = "usamplerCube";
    var peg$c99 = "usampler1DArray";
    var peg$c100 = "usampler2DArray";
    var peg$c101 = "sampler2DRect";
    var peg$c102 = "sampler2DRectshadow";
    var peg$c103 = "isampler2DRect";
    var peg$c104 = "usampler2DRect";
    var peg$c105 = "samplerBuffer";
    var peg$c106 = "isamplerBuffer";
    var peg$c107 = "usamplerBuffer";
    var peg$c108 = "samplerCubeArray";
    var peg$c109 = "samplerCubeArrayShadow";
    var peg$c110 = "isamplerCubeArray";
    var peg$c111 = "usamplerCubeArray";
    var peg$c112 = "sampler2DMS";
    var peg$c113 = "isampler2DMS";
    var peg$c114 = "usampler2DMS";
    var peg$c115 = "sampler2DMSArray";
    var peg$c116 = "isampler2DMSArray";
    var peg$c117 = "usampler2DMSArray";
    var peg$c118 = "image1D";
    var peg$c119 = "iimage1D";
    var peg$c120 = "uimage1D";
    var peg$c121 = "image2D";
    var peg$c122 = "iimage2D";
    var peg$c123 = "uimage2D";
    var peg$c124 = "image3D";
    var peg$c125 = "iimage3D";
    var peg$c126 = "uimage3D";
    var peg$c127 = "image2DRect";
    var peg$c128 = "iimage2DRect";
    var peg$c129 = "uimage2DRect";
    var peg$c130 = "imageCube";
    var peg$c131 = "iimageCube";
    var peg$c132 = "uimageCube";
    var peg$c133 = "imageBuffer";
    var peg$c134 = "iimageBuffer";
    var peg$c135 = "uimageBuffer";
    var peg$c136 = "image1DArray";
    var peg$c137 = "iimage1DArray";
    var peg$c138 = "uimage1DArray";
    var peg$c139 = "image2DArray";
    var peg$c140 = "iimage2DArray";
    var peg$c141 = "uimage2DArray";
    var peg$c142 = "imageCubeArray";
    var peg$c143 = "iimageCubeArray";
    var peg$c144 = "uimageCubeArray";
    var peg$c145 = "image2DMS";
    var peg$c146 = "iimage2DMS";
    var peg$c147 = "uimage2DMS";
    var peg$c148 = "image2DMArray";
    var peg$c149 = "iimage2DMSArray";
    var peg$c150 = "uimage2DMSArray";
    var peg$c151 = "struct";
    var peg$c152 = "void";
    var peg$c153 = "while";
    var peg$c154 = "invariant";
    var peg$c155 = "precise";
    var peg$c156 = "highp";
    var peg$c157 = "mediump";
    var peg$c158 = "lowp";
    var peg$c159 = "precision";
    var peg$c160 = "true";
    var peg$c161 = "false";
    var peg$c162 = "<<";
    var peg$c163 = ">>";
    var peg$c164 = "++";
    var peg$c165 = "--";
    var peg$c166 = "<=";
    var peg$c167 = ">=";
    var peg$c168 = "==";
    var peg$c169 = "!=";
    var peg$c170 = "&&";
    var peg$c171 = "||";
    var peg$c172 = "^^";
    var peg$c173 = "*=";
    var peg$c174 = "/=";
    var peg$c175 = "+=";
    var peg$c176 = "%=";
    var peg$c177 = "<<=";
    var peg$c178 = ">>=";
    var peg$c179 = "&=";
    var peg$c180 = "^=";
    var peg$c181 = "|=";
    var peg$c182 = "-=";
    var peg$c183 = "(";
    var peg$c184 = ")";
    var peg$c185 = "[";
    var peg$c186 = "]";
    var peg$c187 = "{";
    var peg$c188 = "}";
    var peg$c189 = ".";
    var peg$c190 = ",";
    var peg$c191 = ":";
    var peg$c192 = "=";
    var peg$c193 = ";";
    var peg$c194 = "!";
    var peg$c195 = "-";
    var peg$c196 = "~";
    var peg$c197 = "+";
    var peg$c198 = "*";
    var peg$c199 = "/";
    var peg$c200 = "%";
    var peg$c201 = "<";
    var peg$c202 = ">";
    var peg$c203 = "|";
    var peg$c204 = "^";
    var peg$c205 = "&";
    var peg$c206 = "?";
    var peg$c207 = "0";
    var peg$c208 = "lf";
    var peg$c209 = "LF";
    var peg$c210 = "#";
    var peg$c211 = "//";
    var peg$c212 = "/*";
    var peg$c213 = "*/";

    var peg$r0 = /^[A-Za-z_]/;
    var peg$r1 = /^[A-Za-z_0-9]/;
    var peg$r2 = /^[uU]/;
    var peg$r3 = /^[1-9]/;
    var peg$r4 = /^[0-7]/;
    var peg$r5 = /^[xX]/;
    var peg$r6 = /^[0-9a-fA-F]/;
    var peg$r7 = /^[0-9]/;
    var peg$r8 = /^[eE]/;
    var peg$r9 = /^[+\-]/;
    var peg$r10 = /^[fF]/;
    var peg$r11 = /^[^\n]/;
    var peg$r12 = /^[ \t\n\r]/;

    var peg$e0 = peg$literalExpectation("attribute", false);
    var peg$e1 = peg$literalExpectation("varying", false);
    var peg$e2 = peg$literalExpectation("const", false);
    var peg$e3 = peg$literalExpectation("bool", false);
    var peg$e4 = peg$literalExpectation("float", false);
    var peg$e5 = peg$literalExpectation("double", false);
    var peg$e6 = peg$literalExpectation("int", false);
    var peg$e7 = peg$literalExpectation("uint", false);
    var peg$e8 = peg$literalExpectation("break", false);
    var peg$e9 = peg$literalExpectation("continue", false);
    var peg$e10 = peg$literalExpectation("do", false);
    var peg$e11 = peg$literalExpectation("else", false);
    var peg$e12 = peg$literalExpectation("for", false);
    var peg$e13 = peg$literalExpectation("if", false);
    var peg$e14 = peg$literalExpectation("discard", false);
    var peg$e15 = peg$literalExpectation("return", false);
    var peg$e16 = peg$literalExpectation("switch", false);
    var peg$e17 = peg$literalExpectation("case", false);
    var peg$e18 = peg$literalExpectation("default", false);
    var peg$e19 = peg$literalExpectation("subroutine", false);
    var peg$e20 = peg$literalExpectation("bvec2", false);
    var peg$e21 = peg$literalExpectation("bvec3", false);
    var peg$e22 = peg$literalExpectation("bvec4", false);
    var peg$e23 = peg$literalExpectation("ivec2", false);
    var peg$e24 = peg$literalExpectation("ivec3", false);
    var peg$e25 = peg$literalExpectation("ivec4", false);
    var peg$e26 = peg$literalExpectation("uvec2", false);
    var peg$e27 = peg$literalExpectation("uvec3", false);
    var peg$e28 = peg$literalExpectation("uvec4", false);
    var peg$e29 = peg$literalExpectation("vec2", false);
    var peg$e30 = peg$literalExpectation("vec3", false);
    var peg$e31 = peg$literalExpectation("vec4", false);
    var peg$e32 = peg$literalExpectation("mat2", false);
    var peg$e33 = peg$literalExpectation("mat3", false);
    var peg$e34 = peg$literalExpectation("mat4", false);
    var peg$e35 = peg$literalExpectation("centroid", false);
    var peg$e36 = peg$literalExpectation("in", false);
    var peg$e37 = peg$literalExpectation("out", false);
    var peg$e38 = peg$literalExpectation("inout", false);
    var peg$e39 = peg$literalExpectation("uniform", false);
    var peg$e40 = peg$literalExpectation("patch", false);
    var peg$e41 = peg$literalExpectation("sample", false);
    var peg$e42 = peg$literalExpectation("buffer", false);
    var peg$e43 = peg$literalExpectation("shared", false);
    var peg$e44 = peg$literalExpectation("coherent", false);
    var peg$e45 = peg$literalExpectation("volatile", false);
    var peg$e46 = peg$literalExpectation("restrict", false);
    var peg$e47 = peg$literalExpectation("readonly", false);
    var peg$e48 = peg$literalExpectation("writeonly", false);
    var peg$e49 = peg$literalExpectation("dvec2", false);
    var peg$e50 = peg$literalExpectation("dvec3", false);
    var peg$e51 = peg$literalExpectation("dvec4", false);
    var peg$e52 = peg$literalExpectation("dmat2", false);
    var peg$e53 = peg$literalExpectation("dmat3", false);
    var peg$e54 = peg$literalExpectation("dmat4", false);
    var peg$e55 = peg$literalExpectation("noperspective", false);
    var peg$e56 = peg$literalExpectation("flat", false);
    var peg$e57 = peg$literalExpectation("smooth", false);
    var peg$e58 = peg$literalExpectation("layout", false);
    var peg$e59 = peg$literalExpectation("mat2x2", false);
    var peg$e60 = peg$literalExpectation("mat2x3", false);
    var peg$e61 = peg$literalExpectation("mat2x4", false);
    var peg$e62 = peg$literalExpectation("mat3x2", false);
    var peg$e63 = peg$literalExpectation("mat3x3", false);
    var peg$e64 = peg$literalExpectation("mat3x4", false);
    var peg$e65 = peg$literalExpectation("mat4x2", false);
    var peg$e66 = peg$literalExpectation("mat4x3", false);
    var peg$e67 = peg$literalExpectation("mat4x4", false);
    var peg$e68 = peg$literalExpectation("dmat2x2", false);
    var peg$e69 = peg$literalExpectation("dmat2x3", false);
    var peg$e70 = peg$literalExpectation("dmat2x4", false);
    var peg$e71 = peg$literalExpectation("dmat3x2", false);
    var peg$e72 = peg$literalExpectation("dmat3x3", false);
    var peg$e73 = peg$literalExpectation("dmat3x4", false);
    var peg$e74 = peg$literalExpectation("dmat4x2", false);
    var peg$e75 = peg$literalExpectation("dmat4x3", false);
    var peg$e76 = peg$literalExpectation("dmat4x4", false);
    var peg$e77 = peg$literalExpectation("atomic_uint", false);
    var peg$e78 = peg$literalExpectation("sampler1D", false);
    var peg$e79 = peg$literalExpectation("sampler2D", false);
    var peg$e80 = peg$literalExpectation("sampler3D", false);
    var peg$e81 = peg$literalExpectation("samplerCube", false);
    var peg$e82 = peg$literalExpectation("sampler1DShadow", false);
    var peg$e83 = peg$literalExpectation("sampler2DShadow", false);
    var peg$e84 = peg$literalExpectation("samplerCubeShadow", false);
    var peg$e85 = peg$literalExpectation("sampler1DArray", false);
    var peg$e86 = peg$literalExpectation("sampler2DArray", false);
    var peg$e87 = peg$literalExpectation("sampler1DArrayShadow", false);
    var peg$e88 = peg$literalExpectation("sampler2DArrayshadow", false);
    var peg$e89 = peg$literalExpectation("isampler1D", false);
    var peg$e90 = peg$literalExpectation("isampler2D", false);
    var peg$e91 = peg$literalExpectation("isampler3D", false);
    var peg$e92 = peg$literalExpectation("isamplerCube", false);
    var peg$e93 = peg$literalExpectation("isampler1Darray", false);
    var peg$e94 = peg$literalExpectation("isampler2DArray", false);
    var peg$e95 = peg$literalExpectation("usampler1D", false);
    var peg$e96 = peg$literalExpectation("usampler2D", false);
    var peg$e97 = peg$literalExpectation("usampler3D", false);
    var peg$e98 = peg$literalExpectation("usamplerCube", false);
    var peg$e99 = peg$literalExpectation("usampler1DArray", false);
    var peg$e100 = peg$literalExpectation("usampler2DArray", false);
    var peg$e101 = peg$literalExpectation("sampler2DRect", false);
    var peg$e102 = peg$literalExpectation("sampler2DRectshadow", false);
    var peg$e103 = peg$literalExpectation("isampler2DRect", false);
    var peg$e104 = peg$literalExpectation("usampler2DRect", false);
    var peg$e105 = peg$literalExpectation("samplerBuffer", false);
    var peg$e106 = peg$literalExpectation("isamplerBuffer", false);
    var peg$e107 = peg$literalExpectation("usamplerBuffer", false);
    var peg$e108 = peg$literalExpectation("samplerCubeArray", false);
    var peg$e109 = peg$literalExpectation("samplerCubeArrayShadow", false);
    var peg$e110 = peg$literalExpectation("isamplerCubeArray", false);
    var peg$e111 = peg$literalExpectation("usamplerCubeArray", false);
    var peg$e112 = peg$literalExpectation("sampler2DMS", false);
    var peg$e113 = peg$literalExpectation("isampler2DMS", false);
    var peg$e114 = peg$literalExpectation("usampler2DMS", false);
    var peg$e115 = peg$literalExpectation("sampler2DMSArray", false);
    var peg$e116 = peg$literalExpectation("isampler2DMSArray", false);
    var peg$e117 = peg$literalExpectation("usampler2DMSArray", false);
    var peg$e118 = peg$literalExpectation("image1D", false);
    var peg$e119 = peg$literalExpectation("iimage1D", false);
    var peg$e120 = peg$literalExpectation("uimage1D", false);
    var peg$e121 = peg$literalExpectation("image2D", false);
    var peg$e122 = peg$literalExpectation("iimage2D", false);
    var peg$e123 = peg$literalExpectation("uimage2D", false);
    var peg$e124 = peg$literalExpectation("image3D", false);
    var peg$e125 = peg$literalExpectation("iimage3D", false);
    var peg$e126 = peg$literalExpectation("uimage3D", false);
    var peg$e127 = peg$literalExpectation("image2DRect", false);
    var peg$e128 = peg$literalExpectation("iimage2DRect", false);
    var peg$e129 = peg$literalExpectation("uimage2DRect", false);
    var peg$e130 = peg$literalExpectation("imageCube", false);
    var peg$e131 = peg$literalExpectation("iimageCube", false);
    var peg$e132 = peg$literalExpectation("uimageCube", false);
    var peg$e133 = peg$literalExpectation("imageBuffer", false);
    var peg$e134 = peg$literalExpectation("iimageBuffer", false);
    var peg$e135 = peg$literalExpectation("uimageBuffer", false);
    var peg$e136 = peg$literalExpectation("image1DArray", false);
    var peg$e137 = peg$literalExpectation("iimage1DArray", false);
    var peg$e138 = peg$literalExpectation("uimage1DArray", false);
    var peg$e139 = peg$literalExpectation("image2DArray", false);
    var peg$e140 = peg$literalExpectation("iimage2DArray", false);
    var peg$e141 = peg$literalExpectation("uimage2DArray", false);
    var peg$e142 = peg$literalExpectation("imageCubeArray", false);
    var peg$e143 = peg$literalExpectation("iimageCubeArray", false);
    var peg$e144 = peg$literalExpectation("uimageCubeArray", false);
    var peg$e145 = peg$literalExpectation("image2DMS", false);
    var peg$e146 = peg$literalExpectation("iimage2DMS", false);
    var peg$e147 = peg$literalExpectation("uimage2DMS", false);
    var peg$e148 = peg$literalExpectation("image2DMArray", false);
    var peg$e149 = peg$literalExpectation("iimage2DMSArray", false);
    var peg$e150 = peg$literalExpectation("uimage2DMSArray", false);
    var peg$e151 = peg$literalExpectation("struct", false);
    var peg$e152 = peg$literalExpectation("void", false);
    var peg$e153 = peg$literalExpectation("while", false);
    var peg$e154 = peg$literalExpectation("invariant", false);
    var peg$e155 = peg$literalExpectation("precise", false);
    var peg$e156 = peg$literalExpectation("highp", false);
    var peg$e157 = peg$literalExpectation("mediump", false);
    var peg$e158 = peg$literalExpectation("lowp", false);
    var peg$e159 = peg$literalExpectation("precision", false);
    var peg$e160 = peg$literalExpectation("true", false);
    var peg$e161 = peg$literalExpectation("false", false);
    var peg$e162 = peg$otherExpectation("keyword");
    var peg$e163 = peg$literalExpectation("<<", false);
    var peg$e164 = peg$literalExpectation(">>", false);
    var peg$e165 = peg$literalExpectation("++", false);
    var peg$e166 = peg$literalExpectation("--", false);
    var peg$e167 = peg$literalExpectation("<=", false);
    var peg$e168 = peg$literalExpectation(">=", false);
    var peg$e169 = peg$literalExpectation("==", false);
    var peg$e170 = peg$literalExpectation("!=", false);
    var peg$e171 = peg$literalExpectation("&&", false);
    var peg$e172 = peg$literalExpectation("||", false);
    var peg$e173 = peg$literalExpectation("^^", false);
    var peg$e174 = peg$literalExpectation("*=", false);
    var peg$e175 = peg$literalExpectation("/=", false);
    var peg$e176 = peg$literalExpectation("+=", false);
    var peg$e177 = peg$literalExpectation("%=", false);
    var peg$e178 = peg$literalExpectation("<<=", false);
    var peg$e179 = peg$literalExpectation(">>=", false);
    var peg$e180 = peg$literalExpectation("&=", false);
    var peg$e181 = peg$literalExpectation("^=", false);
    var peg$e182 = peg$literalExpectation("|=", false);
    var peg$e183 = peg$literalExpectation("-=", false);
    var peg$e184 = peg$literalExpectation("(", false);
    var peg$e185 = peg$literalExpectation(")", false);
    var peg$e186 = peg$literalExpectation("[", false);
    var peg$e187 = peg$literalExpectation("]", false);
    var peg$e188 = peg$literalExpectation("{", false);
    var peg$e189 = peg$literalExpectation("}", false);
    var peg$e190 = peg$literalExpectation(".", false);
    var peg$e191 = peg$literalExpectation(",", false);
    var peg$e192 = peg$literalExpectation(":", false);
    var peg$e193 = peg$literalExpectation("=", false);
    var peg$e194 = peg$literalExpectation(";", false);
    var peg$e195 = peg$literalExpectation("!", false);
    var peg$e196 = peg$literalExpectation("-", false);
    var peg$e197 = peg$literalExpectation("~", false);
    var peg$e198 = peg$literalExpectation("+", false);
    var peg$e199 = peg$literalExpectation("*", false);
    var peg$e200 = peg$literalExpectation("/", false);
    var peg$e201 = peg$literalExpectation("%", false);
    var peg$e202 = peg$literalExpectation("<", false);
    var peg$e203 = peg$literalExpectation(">", false);
    var peg$e204 = peg$literalExpectation("|", false);
    var peg$e205 = peg$literalExpectation("^", false);
    var peg$e206 = peg$literalExpectation("&", false);
    var peg$e207 = peg$literalExpectation("?", false);
    var peg$e208 = peg$classExpectation([["A", "Z"], ["a", "z"], "_"], false, false);
    var peg$e209 = peg$classExpectation([["A", "Z"], ["a", "z"], "_", ["0", "9"]], false, false);
    var peg$e210 = peg$classExpectation(["u", "U"], false, false);
    var peg$e211 = peg$classExpectation([["1", "9"]], false, false);
    var peg$e212 = peg$literalExpectation("0", false);
    var peg$e213 = peg$classExpectation([["0", "7"]], false, false);
    var peg$e214 = peg$classExpectation(["x", "X"], false, false);
    var peg$e215 = peg$classExpectation([["0", "9"], ["a", "f"], ["A", "F"]], false, false);
    var peg$e216 = peg$classExpectation([["0", "9"]], false, false);
    var peg$e217 = peg$otherExpectation("exponent");
    var peg$e218 = peg$classExpectation(["e", "E"], false, false);
    var peg$e219 = peg$classExpectation(["+", "-"], false, false);
    var peg$e220 = peg$classExpectation(["f", "F"], false, false);
    var peg$e221 = peg$literalExpectation("lf", false);
    var peg$e222 = peg$literalExpectation("LF", false);
    var peg$e223 = peg$otherExpectation("primary expression");
    var peg$e224 = peg$otherExpectation("unary expression");
    var peg$e225 = peg$otherExpectation("equality expression");
    var peg$e226 = peg$otherExpectation("and expression");
    var peg$e227 = peg$otherExpectation("asignment");
    var peg$e228 = peg$otherExpectation("expression");
    var peg$e229 = peg$otherExpectation("precision statement");
    var peg$e230 = peg$otherExpectation("function prototype");
    var peg$e231 = peg$otherExpectation("function header");
    var peg$e232 = peg$otherExpectation("function parameters");
    var peg$e233 = peg$otherExpectation("parameter declaration");
    var peg$e234 = peg$otherExpectation("parameter declarator");
    var peg$e235 = peg$otherExpectation("single type qualifier");
    var peg$e236 = peg$otherExpectation("interpolation qualifier");
    var peg$e237 = peg$otherExpectation("storage qualifier");
    var peg$e238 = peg$otherExpectation("type specifier");
    var peg$e239 = peg$otherExpectation("array specifier");
    var peg$e240 = peg$otherExpectation("precision qualifier");
    var peg$e241 = peg$otherExpectation("struct specifier");
    var peg$e242 = peg$otherExpectation("iteration statement");
    var peg$e243 = peg$otherExpectation("jump statement");
    var peg$e244 = peg$otherExpectation("prepocessor");
    var peg$e245 = peg$literalExpectation("#", false);
    var peg$e246 = peg$classExpectation(["\n"], true, false);
    var peg$e247 = peg$otherExpectation("whitespace");
    var peg$e248 = peg$literalExpectation("//", false);
    var peg$e249 = peg$literalExpectation("/*", false);
    var peg$e250 = peg$literalExpectation("*/", false);
    var peg$e251 = peg$anyExpectation();
    var peg$e252 = peg$classExpectation([" ", "\t", "\n", "\r"], false, false);

    var peg$f0 = function(ws, program) {
      return { type: 'program', ws, program, scopes };
    };
    var peg$f1 = function(token, t) { return node('keyword', { token, whitespace: t }); };
    var peg$f2 = function(token, _) { return node('float_constant', { token, whitespace: _ }); };
    var peg$f3 = function(token, _) { return node('double_constant', { token, whitespace: _ }); };
    var peg$f4 = function(token, _) { return node('int_constant', { token, whitespace: _ }); };
    var peg$f5 = function(token, _) { return node('uint_constant', { token, whitespace: _ }); };
    var peg$f6 = function(token, _) { return node('bool_constant', { token, whitespace:_ }); };
    var peg$f7 = function(token, _) { return node('literal', { literal: token, whitespace: _ }); };
    var peg$f8 = function(identifier, _) { return node('identifier', { identifier, whitespace: _ }); };
    var peg$f9 = function(ident) {
      const { identifier } = ident;

      // We do scope checking and parsing all in one pass. In the case of calling an
      // undefined function, here, we don't know that we're in a function, so we
      // can't warn appropriately. If we return false for the missing typename, the
      // program won't parse, since the function call node won't match since it uses
      // type_name for the function_identifier. So all we can do here is go on our
      // merry way if the type isn't known.

      // This only applies to structs. I'm not sure if it's right. Because TYPE_NAME
      // is used in lots of places, it's easier to put this check here.
      let found;
      if(found = findTypeScope(scope, identifier)) {
        addTypeReference(found, identifier, ident);
      // I removed this because a type name reference here can't be renamed because
      // it's just a string and we don't know the parent node. This might apply
      // to the type reference above as well
      // } else if(found = findFunctionScope(scope, identifier)) {
        // addFunctionReference(found, identifier, identifier);
      }
      
      return ident;
    };
    var peg$f10 = function(lp, expression, rp) {
        return node('group', { lp, expression, rp });
      };
    var peg$f11 = function(ident) {
        const { identifier } = ident;
        addBindingReference(scope, identifier, ident);
        return ident;
      };
    var peg$f12 = function(body) {
          // Postfix becomes a left associative tree
          return body.flat().reduceRight((postfix, expr) =>
              postfix ?
                node('postfix', { expr, postfix }) :
                expr
            );
        };
    var peg$f13 = function(lb, expr, rb) {
      return node('quantifier', { lb, expr, rb });
    };
    var peg$f14 = function(dot, selection) {
      return node('field_selection', { dot, selection });
    };
    var peg$f15 = function(identifier, args, rp) {
          // Warning: This may be brittle. The langauge spec says that a
          // function_call name is a "type_specifier" which can be "float[3](...)"
          // or a TYPE_NAME. If it's a TYPE_NAME, it will have an identifier, so
          // add it to the referenced scope. If it's a constructor (the "float"
          // case) it won't, so don't add a reference ot it
          const fnName = (identifier.identifier.type === 'postfix') ?
            identifier.identifier.expr.identifier.specifier.identifier :
            identifier.identifier.specifier.identifier;
          
          const n = node('function_call', { ...identifier, args, rp });

          // struct constructors are stored in scope types, not scope functions,
          // skip them (the isDeclaredType check)
          if(fnName && !isDeclaredType(scope, fnName) && !builtIns.has(fnName)) {
            if(!isDeclaredFunction(scope, fnName)) {
              warn(`Warning: Function "${fnName}" has not been declared`);
            }
            addFunctionReference(scope, fnName, n);
          }

          return n;
        };
    var peg$f16 = function(v) {
        return [v];
      };
    var peg$f17 = function(head, tail) {
          // For convenience, we don't store commas as trees, but rather flatten
          // into an array
          return [head, ...tail.flat()];
        };
    var peg$f18 = function(head, suffix, lp) {
          return { head: [head, suffix], lp };
        };
    var peg$f19 = function(identifier) {
        return {
          lp: identifier.lp,
          identifier: [identifier.head].flat().reduceRight((postfix, expr) =>
            postfix ?
              node('postfix', { expr, postfix }) :
              expr
          )
        };
        };
    var peg$f20 = function(identifier, lp, args, rp) {
          return node('function_call', { identifier, lp, args, rp });
        };
    var peg$f21 = function(operator, expression) {
          return node('unary', { operator, expression });
        };
    var peg$f22 = function(head, tail) {
          return leftAssociate(head, tail);
        };
    var peg$f23 = function(expr, question, left, colon, right) {
            return { question, left, right, colon };
          };
    var peg$f24 = function(expr, suffix) {
          // ? and : operators are right associative, which happens automatically
          // in pegjs grammar
          return suffix ?
            node('ternary', { expr, ...suffix }) :
            expr
        };
    var peg$f25 = function(left, operator, right) {
          return node('assignment', { left, operator, right });
        };
    var peg$f26 = function(declaration) {
      return node(
        'declaration_statement',
        {
            declaration: declaration[0],
            semi: declaration[1],
          }
      );
    };
    var peg$f27 = function(qualifiers, head, tail) {
        return node(
          'qualifier_declarator',
          {
            qualifiers,
            // Head is optional, so remove falsey
            declarations: xnil([head, ...tail.map(t => t[1])]),
            commas: tail.map(t => t[0])
          }
        );
      };
    var peg$f28 = function(qualifiers, interface_type, lp, declarations, rp, identifier) {
          const n = node(
            'interface_declarator',
            { qualifiers, interface_type, lp, declarations, rp, identifier }
          );
          createBindings(scope, [interface_type.identifier, n]);
          return n;
        };
    var peg$f29 = function(prefix, qualifier, specifier) {
        return node('precision', { prefix, qualifier, specifier });
      };
    var peg$f30 = function(header, params, rp) {
        const bindings = (params?.parameters || [])
          // Ignore any param without an identifier, aka main(void)
          .filter(p => !!p.declaration.identifier)
          .map(p => [p.declaration.identifier.identifier, p]);
        createBindings(scope, ...bindings);
        return node('function_prototype', { header, ...params, rp });
      };
    var peg$f31 = function(returnType, name, lp) {
          const n = node(
            'function_header',
            { returnType, name, lp }
          );
          addFunctionReference(scope, name.identifier, n);
          scope = pushScope(makeScope(name.identifier, scope));
          return n;
        };
    var peg$f32 = function(head, tail) {
        return {
          parameters: [head, ...tail.map(t => t[1])],
          commas: tail.map(t => t[0])
        }
      };
    var peg$f33 = function(qualifier, declaration) {
          return node(
            'parameter_declaration',
            { qualifier, declaration }
          );
        };
    var peg$f34 = function(specifier, identifier, quantifier) {
          return node(
            'parameter_declarator',
            { specifier, identifier, quantifier }
          );
        };
    var peg$f35 = function(head, tail) {
          const declarations = [
            head.declaration, ...tail.map(t => t[1])
          ].filter(decl => !!decl.identifier);

          createBindings(scope, ...declarations.map(decl => [decl.identifier.identifier, decl]));

          // TODO: I might need to start storing node parents for easy traversal
          return node(
            'declarator_list',
            {
              specified_type: head.specified_type,
              declarations,
              commas: tail.map(t => t[0])
            }
          );
        };
    var peg$f36 = function(identifier, quantifier, suffix) {
          const [operator, initializer] = suffix || [];
          return node(
            'declaration',
            { identifier, quantifier, operator, initializer }
          );
      };
    var peg$f37 = function(specified_type, suffix) {
          // No gaurantee of a suffix because fully_specified_type contains a
          // type_specifier which includes structs and type_names (IDENTIFIERs)
          const [identifier, quantifier, suffix_tail] = suffix || [];
          const [operator, initializer] = suffix_tail || [];

          // Break out the specified type so it can be grouped into the
          // declarator_list
          return {
            declaration: node(
              'declaration',
              { identifier, quantifier, operator, initializer }
            ),
            specified_type
          };
      };
    var peg$f38 = function(qualifiers, specifier) {
        return node(
          'fully_specified_type',
          { qualifiers, specifier }
        );
      };
    var peg$f39 = function(layout, lp, head, tail) {
            return {
              qualifiers: [head, ...tail.map(t => t[1])],
              commas: tail.map(t => t[0])
            };
          };
    var peg$f40 = function(layout, lp, qualifiers, rp) {
          return node(
            'layout_qualifier',
            { layout, lp, ...qualifiers, rp }
          );
        };
    var peg$f41 = function(identifier, tail) {
        const [operator, expression] = tail || [];
        return node('layout_qualifier_id', { identifier, operator, expression });
      };
    var peg$f42 = function(subroutine, lp, head, tail, rp) {
            return {
              lp,
              type_names: [head, ...tail.map(t => t[1])],
              commas: tail.map(t => t[0]),
              rp,
            };
          };
    var peg$f43 = function(subroutine, type_names) {
            return node(
              'subroutine_qualifier',
              {
                subroutine,
                ...type_names,
              }
            );
          };
    var peg$f44 = function(specifier, quantifier) {
        return node('type_specifier', { specifier, quantifier });
      };
    var peg$f45 = function(lb, expression, rb) {
            return node('array_specifier', { lb, expression, rb });
          };
    var peg$f46 = function(specifiers) {
          return node('array_specifiers', { specifiers });
        };
    var peg$f47 = function(struct, typeName, lb, declarations, rb) {
          const n = node('struct', { lb, declarations, rb, struct, typeName });
          // Anonymous structs don't get a type name
          if(typeName) {
            addTypes(scope, [typeName.identifier, n]);

            // Struct names also become constructors for functions. Needing to track
            // this as both a type and a function makes me think my scope data model
            // is probably wrong
            // addFunctionReference(scope, typeName.identifier, n);
          }
          return n;
        };
    var peg$f48 = function(declaration, semi) {
          return node('struct_declaration', { declaration, semi });
        };
    var peg$f49 = function(specified_type, head, tail) {
          return node(
            'struct_declarator', 
            {
              specified_type,
              declarations: [head, ...tail.map(t => t[1])],
              commas: tail.map(t => t[0])
            }
          );
        };
    var peg$f50 = function(identifier, quantifier) {
        return node('quantified_identifier', { identifier, quantifier });
      };
    var peg$f51 = function(lb, head, tail, trailing, rb) {
          // TODO: Scope
          return node(
            'initializer_list',
            {
              lb,
              initializers: [head, ...tail.map(t => t[1])],
              commas: xnil(tail.map(t => t[0]), trailing),
              rb
            }
          );
        };
    var peg$f52 = function(sym) {
        // Apparently peggy can't handle an open curly brace in a string
        scope = pushScope(makeScope(OPEN_CURLY, scope));
        return sym;
      };
    var peg$f53 = function(lb, statements, rb) {
        scope = popScope(scope);
        return node(
          'compound_statement',
          { lb, statements: (statements || []).flat(), rb }
        );
      };
    var peg$f54 = function(lb, statements, rb) {
        return node(
          'compound_statement',
          { lb, statements: (statements || []).flat(), rb }
        );
      };
    var peg$f55 = function(expression, semi) {
      return node('expression_statement', { expression, semi });
    };
    var peg$f56 = function(ifSymbol, lp, condition, rp, tail) {
          const [body, elseBranch] = tail;
          return node(
            'if_statement',
            {
              'if': ifSymbol,
              body,
              lp,
              condition,
              rp,
              ...elseBranch && { 'else': elseBranch.flat() },
            });
      };
    var peg$f57 = function(switchSymbol, lp, expression, rp, lb, statements, rb) {
          // TODO: Scope?
          return node(
            'switch_statement',
            {
              switch: switchSymbol,
              lp,
              expression,
              rp,
              lb,
              cases: groupCases(statements),
              rb
            }
          );
        };
    var peg$f58 = function(caseSymbol, test, colon) {
        return node('case_label', { 'case': caseSymbol, test, colon });
      };
    var peg$f59 = function(defaultSymbol, colon) {
        return node('default_label', { default: defaultSymbol, colon });
      };
    var peg$f60 = function(sym) {
          scope = pushScope(makeScope('while', scope));
          return sym;
        };
    var peg$f61 = function(whileSymbol, lp, condition, rp, body) {
          scope = popScope(scope);
          return node(
            'while_statement',
            {
              while: whileSymbol,
              lp,
              condition,
              rp,
              body
            }
          );
        };
    var peg$f62 = function(doSymbol, body, whileSymbol, lp, expression, rp, semi) {
          return node(
            'do_statement',
            {
              do: doSymbol,
              body,
              while: whileSymbol,
              lp,
              expression,
              rp,
              semi
            }
          );
        };
    var peg$f63 = function(sym) {
          scope = pushScope(makeScope('for', scope));
          return sym;
        };
    var peg$f64 = function(forSymbol, lp, init, condition, conditionSemi, operation, rp, body) {
          scope = popScope(scope);
          return node(
            'for_statement',
            {
              'for': forSymbol,
              body,
              lp,
              init: init.expression || init.declaration,
              initSemi: init.semi,
              condition,
              conditionSemi,
              operation,
              rp,
              body
            }
          );
        };
    var peg$f65 = function(specified_type, identifier, op, initializer) {
          const n = node(
            'condition_expression',
            { specified_type, identifier, op, initializer }
          );
          createBindings(scope, [identifier.identifier, n]);
          return n;
        };
    var peg$f66 = function(jump, semi) {
        return node('continue_statement', { continue: jump, semi });
      };
    var peg$f67 = function(jump, semi) {
        return node('break_statement', { break: jump, semi });
      };
    var peg$f68 = function(jump, expression, semi) {
        return node('return_statement', { return: jump, expression, semi });
      };
    var peg$f69 = function(jump, semi) { // Fragment shader only.
        return node('discard_statement', { discard: jump, semi });
      };
    var peg$f70 = function(line, _) { return node('preprocessor', { line, _ }); };
    var peg$f71 = function(prototype, body) {
      const n = node('function', { prototype, body });
      scope = popScope(scope);
      // addFunctionReference(scope, prototype.header.name.identifier, n);
      return n;
    };
    var peg$f72 = function(w, rest) {
      return collapse(w, rest);
    };
    var peg$f73 = function(a, x, cc) { return xnil(x, cc); };
    var peg$f74 = function(a, d) { return xnil(a, d.flat()); };
    var peg$f75 = function(i) { return i; };
    var peg$f76 = function(_) { return _; };

    var peg$currPos = 0;
    var peg$savedPos = 0;
    var peg$posDetailsCache = [{ line: 1, column: 1 }];
    var peg$maxFailPos = 0;
    var peg$maxFailExpected = [];
    var peg$silentFails = 0;

    var peg$resultsCache = {};

    var peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$savedPos, peg$currPos);
    }

    function offset() {
      return peg$savedPos;
    }

    function range() {
      return {
        source: peg$source,
        start: peg$savedPos,
        end: peg$currPos
      };
    }

    function location() {
      return peg$computeLocation(peg$savedPos, peg$currPos);
    }

    function expected(description, location) {
      location = location !== undefined
        ? location
        : peg$computeLocation(peg$savedPos, peg$currPos);

      throw peg$buildStructuredError(
        [peg$otherExpectation(description)],
        input.substring(peg$savedPos, peg$currPos),
        location
      );
    }

    function error(message, location) {
      location = location !== undefined
        ? location
        : peg$computeLocation(peg$savedPos, peg$currPos);

      throw peg$buildSimpleError(message, location);
    }

    function peg$literalExpectation(text, ignoreCase) {
      return { type: "literal", text: text, ignoreCase: ignoreCase };
    }

    function peg$classExpectation(parts, inverted, ignoreCase) {
      return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
    }

    function peg$anyExpectation() {
      return { type: "any" };
    }

    function peg$endExpectation() {
      return { type: "end" };
    }

    function peg$otherExpectation(description) {
      return { type: "other", description: description };
    }

    function peg$computePosDetails(pos) {
      var details = peg$posDetailsCache[pos];
      var p;

      if (details) {
        return details;
      } else {
        p = pos - 1;
        while (!peg$posDetailsCache[p]) {
          p--;
        }

        details = peg$posDetailsCache[p];
        details = {
          line: details.line,
          column: details.column
        };

        while (p < pos) {
          if (input.charCodeAt(p) === 10) {
            details.line++;
            details.column = 1;
          } else {
            details.column++;
          }

          p++;
        }

        peg$posDetailsCache[pos] = details;

        return details;
      }
    }

    function peg$computeLocation(startPos, endPos) {
      var startPosDetails = peg$computePosDetails(startPos);
      var endPosDetails = peg$computePosDetails(endPos);

      return {
        source: peg$source,
        start: {
          offset: startPos,
          line: startPosDetails.line,
          column: startPosDetails.column
        },
        end: {
          offset: endPos,
          line: endPosDetails.line,
          column: endPosDetails.column
        }
      };
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildSimpleError(message, location) {
      return new peg$SyntaxError(message, null, null, location);
    }

    function peg$buildStructuredError(expected, found, location) {
      return new peg$SyntaxError(
        peg$SyntaxError.buildMessage(expected, found),
        expected,
        found,
        location
      );
    }

    function peg$parsestart() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 0;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parse_();
      s2 = peg$parsetranslation_unit();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f0(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseATTRIBUTE() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 1;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 9) === peg$c0) {
        s1 = peg$c0;
        peg$currPos += 9;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e0); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseVARYING() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 2;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 7) === peg$c1) {
        s1 = peg$c1;
        peg$currPos += 7;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e1); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseCONST() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 3;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c2) {
        s1 = peg$c2;
        peg$currPos += 5;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e2); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseBOOL() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 4;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c3) {
        s1 = peg$c3;
        peg$currPos += 4;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e3); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseFLOAT() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 5;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c4) {
        s1 = peg$c4;
        peg$currPos += 5;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e4); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseDOUBLE() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 6;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c5) {
        s1 = peg$c5;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e5); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseINT() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 7;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c6) {
        s1 = peg$c6;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e6); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseUINT() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 8;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c7) {
        s1 = peg$c7;
        peg$currPos += 4;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e7); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseBREAK() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 9;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c8) {
        s1 = peg$c8;
        peg$currPos += 5;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e8); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseCONTINUE() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 10;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 8) === peg$c9) {
        s1 = peg$c9;
        peg$currPos += 8;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e9); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseDO() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 11;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c10) {
        s1 = peg$c10;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e10); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseELSE() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 12;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c11) {
        s1 = peg$c11;
        peg$currPos += 4;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e11); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseFOR() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 13;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c12) {
        s1 = peg$c12;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e12); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseIF() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 14;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c13) {
        s1 = peg$c13;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e13); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseDISCARD() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 15;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 7) === peg$c14) {
        s1 = peg$c14;
        peg$currPos += 7;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e14); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseRETURN() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 16;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c15) {
        s1 = peg$c15;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e15); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseSWITCH() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 17;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c16) {
        s1 = peg$c16;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e16); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseCASE() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 18;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c17) {
        s1 = peg$c17;
        peg$currPos += 4;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e17); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseDEFAULT() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 19;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 7) === peg$c18) {
        s1 = peg$c18;
        peg$currPos += 7;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e18); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseSUBROUTINE() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 20;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 10) === peg$c19) {
        s1 = peg$c19;
        peg$currPos += 10;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e19); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseBVEC2() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 21;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c20) {
        s1 = peg$c20;
        peg$currPos += 5;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e20); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseBVEC3() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 22;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c21) {
        s1 = peg$c21;
        peg$currPos += 5;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e21); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseBVEC4() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 23;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c22) {
        s1 = peg$c22;
        peg$currPos += 5;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e22); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseIVEC2() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 24;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c23) {
        s1 = peg$c23;
        peg$currPos += 5;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e23); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseIVEC3() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 25;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c24) {
        s1 = peg$c24;
        peg$currPos += 5;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e24); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseIVEC4() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 26;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c25) {
        s1 = peg$c25;
        peg$currPos += 5;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e25); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseUVEC2() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 27;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c26) {
        s1 = peg$c26;
        peg$currPos += 5;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e26); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseUVEC3() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 28;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c27) {
        s1 = peg$c27;
        peg$currPos += 5;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e27); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseUVEC4() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 29;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c28) {
        s1 = peg$c28;
        peg$currPos += 5;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e28); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseVEC2() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 30;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c29) {
        s1 = peg$c29;
        peg$currPos += 4;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e29); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseVEC3() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 31;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c30) {
        s1 = peg$c30;
        peg$currPos += 4;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e30); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseVEC4() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 32;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c31) {
        s1 = peg$c31;
        peg$currPos += 4;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e31); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseMAT2() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 33;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c32) {
        s1 = peg$c32;
        peg$currPos += 4;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e32); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseMAT3() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 34;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c33) {
        s1 = peg$c33;
        peg$currPos += 4;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e33); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseMAT4() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 35;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c34) {
        s1 = peg$c34;
        peg$currPos += 4;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e34); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseCENTROID() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 36;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 8) === peg$c35) {
        s1 = peg$c35;
        peg$currPos += 8;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e35); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseIN() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 37;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c36) {
        s1 = peg$c36;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e36); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseOUT() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 38;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c37) {
        s1 = peg$c37;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e37); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseINOUT() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 39;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c38) {
        s1 = peg$c38;
        peg$currPos += 5;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e38); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseUNIFORM() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 40;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 7) === peg$c39) {
        s1 = peg$c39;
        peg$currPos += 7;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e39); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsePATCH() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 41;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c40) {
        s1 = peg$c40;
        peg$currPos += 5;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e40); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseSAMPLE() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 42;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c41) {
        s1 = peg$c41;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e41); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseBUFFER() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 43;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c42) {
        s1 = peg$c42;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e42); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseSHARED() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 44;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c43) {
        s1 = peg$c43;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e43); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseCOHERENT() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 45;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 8) === peg$c44) {
        s1 = peg$c44;
        peg$currPos += 8;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e44); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseVOLATILE() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 46;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 8) === peg$c45) {
        s1 = peg$c45;
        peg$currPos += 8;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e45); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseRESTRICT() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 47;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 8) === peg$c46) {
        s1 = peg$c46;
        peg$currPos += 8;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e46); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseREADONLY() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 48;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 8) === peg$c47) {
        s1 = peg$c47;
        peg$currPos += 8;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e47); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseWRITEONLY() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 49;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 9) === peg$c48) {
        s1 = peg$c48;
        peg$currPos += 9;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e48); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseDVEC2() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 50;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c49) {
        s1 = peg$c49;
        peg$currPos += 5;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e49); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseDVEC3() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 51;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c50) {
        s1 = peg$c50;
        peg$currPos += 5;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e50); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseDVEC4() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 52;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c51) {
        s1 = peg$c51;
        peg$currPos += 5;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e51); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseDMAT2() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 53;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c52) {
        s1 = peg$c52;
        peg$currPos += 5;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e52); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseDMAT3() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 54;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c53) {
        s1 = peg$c53;
        peg$currPos += 5;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e53); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseDMAT4() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 55;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c54) {
        s1 = peg$c54;
        peg$currPos += 5;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e54); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseNOPERSPECTIVE() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 56;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 13) === peg$c55) {
        s1 = peg$c55;
        peg$currPos += 13;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e55); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseFLAT() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 57;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c56) {
        s1 = peg$c56;
        peg$currPos += 4;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e56); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseSMOOTH() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 58;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c57) {
        s1 = peg$c57;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e57); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseLAYOUT() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 59;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c58) {
        s1 = peg$c58;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e58); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseMAT2X2() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 60;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c59) {
        s1 = peg$c59;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e59); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseMAT2X3() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 61;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c60) {
        s1 = peg$c60;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e60); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseMAT2X4() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 62;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c61) {
        s1 = peg$c61;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e61); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseMAT3X2() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 63;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c62) {
        s1 = peg$c62;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e62); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseMAT3X3() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 64;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c63) {
        s1 = peg$c63;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e63); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseMAT3X4() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 65;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c64) {
        s1 = peg$c64;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e64); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseMAT4X2() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 66;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c65) {
        s1 = peg$c65;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e65); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseMAT4X3() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 67;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c66) {
        s1 = peg$c66;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e66); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseMAT4X4() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 68;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c67) {
        s1 = peg$c67;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e67); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseDMAT2X2() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 69;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 7) === peg$c68) {
        s1 = peg$c68;
        peg$currPos += 7;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e68); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseDMAT2X3() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 70;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 7) === peg$c69) {
        s1 = peg$c69;
        peg$currPos += 7;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e69); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseDMAT2X4() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 71;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 7) === peg$c70) {
        s1 = peg$c70;
        peg$currPos += 7;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e70); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseDMAT3X2() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 72;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 7) === peg$c71) {
        s1 = peg$c71;
        peg$currPos += 7;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e71); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseDMAT3X3() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 73;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 7) === peg$c72) {
        s1 = peg$c72;
        peg$currPos += 7;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e72); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseDMAT3X4() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 74;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 7) === peg$c73) {
        s1 = peg$c73;
        peg$currPos += 7;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e73); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseDMAT4X2() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 75;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 7) === peg$c74) {
        s1 = peg$c74;
        peg$currPos += 7;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e74); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseDMAT4X3() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 76;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 7) === peg$c75) {
        s1 = peg$c75;
        peg$currPos += 7;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e75); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseDMAT4X4() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 77;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 7) === peg$c76) {
        s1 = peg$c76;
        peg$currPos += 7;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e76); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseATOMIC_UINT() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 78;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 11) === peg$c77) {
        s1 = peg$c77;
        peg$currPos += 11;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e77); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseSAMPLER1D() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 79;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 9) === peg$c78) {
        s1 = peg$c78;
        peg$currPos += 9;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e78); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseSAMPLER2D() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 80;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 9) === peg$c79) {
        s1 = peg$c79;
        peg$currPos += 9;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e79); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseSAMPLER3D() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 81;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 9) === peg$c80) {
        s1 = peg$c80;
        peg$currPos += 9;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e80); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseSAMPLERCUBE() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 82;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 11) === peg$c81) {
        s1 = peg$c81;
        peg$currPos += 11;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e81); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseSAMPLER1DSHADOW() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 83;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 15) === peg$c82) {
        s1 = peg$c82;
        peg$currPos += 15;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e82); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseSAMPLER2DSHADOW() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 84;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 15) === peg$c83) {
        s1 = peg$c83;
        peg$currPos += 15;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e83); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseSAMPLERCUBESHADOW() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 85;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 17) === peg$c84) {
        s1 = peg$c84;
        peg$currPos += 17;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e84); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseSAMPLER1DARRAY() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 86;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 14) === peg$c85) {
        s1 = peg$c85;
        peg$currPos += 14;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e85); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseSAMPLER2DARRAY() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 87;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 14) === peg$c86) {
        s1 = peg$c86;
        peg$currPos += 14;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e86); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseSAMPLER1DARRAYSHADOW() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 88;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 20) === peg$c87) {
        s1 = peg$c87;
        peg$currPos += 20;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e87); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseSAMPLER2DARRAYSHADOW() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 89;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 20) === peg$c88) {
        s1 = peg$c88;
        peg$currPos += 20;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e88); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseISAMPLER1D() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 90;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 10) === peg$c89) {
        s1 = peg$c89;
        peg$currPos += 10;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e89); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseISAMPLER2D() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 91;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 10) === peg$c90) {
        s1 = peg$c90;
        peg$currPos += 10;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e90); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseISAMPLER3D() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 92;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 10) === peg$c91) {
        s1 = peg$c91;
        peg$currPos += 10;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e91); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseISAMPLERCUBE() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 93;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 12) === peg$c92) {
        s1 = peg$c92;
        peg$currPos += 12;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e92); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseISAMPLER1DARRAY() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 94;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 15) === peg$c93) {
        s1 = peg$c93;
        peg$currPos += 15;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e93); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseISAMPLER2DARRAY() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 95;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 15) === peg$c94) {
        s1 = peg$c94;
        peg$currPos += 15;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e94); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseUSAMPLER1D() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 96;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 10) === peg$c95) {
        s1 = peg$c95;
        peg$currPos += 10;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e95); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseUSAMPLER2D() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 97;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 10) === peg$c96) {
        s1 = peg$c96;
        peg$currPos += 10;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e96); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseUSAMPLER3D() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 98;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 10) === peg$c97) {
        s1 = peg$c97;
        peg$currPos += 10;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e97); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseUSAMPLERCUBE() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 99;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 12) === peg$c98) {
        s1 = peg$c98;
        peg$currPos += 12;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e98); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseUSAMPLER1DARRAY() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 100;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 15) === peg$c99) {
        s1 = peg$c99;
        peg$currPos += 15;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e99); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseUSAMPLER2DARRAY() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 101;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 15) === peg$c100) {
        s1 = peg$c100;
        peg$currPos += 15;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e100); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseSAMPLER2DRECT() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 102;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 13) === peg$c101) {
        s1 = peg$c101;
        peg$currPos += 13;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e101); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseSAMPLER2DRECTSHADOW() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 103;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 19) === peg$c102) {
        s1 = peg$c102;
        peg$currPos += 19;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e102); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseISAMPLER2DRECT() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 104;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 14) === peg$c103) {
        s1 = peg$c103;
        peg$currPos += 14;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e103); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseUSAMPLER2DRECT() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 105;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 14) === peg$c104) {
        s1 = peg$c104;
        peg$currPos += 14;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e104); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseSAMPLERBUFFER() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 106;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 13) === peg$c105) {
        s1 = peg$c105;
        peg$currPos += 13;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e105); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseISAMPLERBUFFER() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 107;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 14) === peg$c106) {
        s1 = peg$c106;
        peg$currPos += 14;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e106); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseUSAMPLERBUFFER() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 108;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 14) === peg$c107) {
        s1 = peg$c107;
        peg$currPos += 14;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e107); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseSAMPLERCUBEARRAY() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 109;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 16) === peg$c108) {
        s1 = peg$c108;
        peg$currPos += 16;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e108); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseSAMPLERCUBEARRAYSHADOW() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 110;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 22) === peg$c109) {
        s1 = peg$c109;
        peg$currPos += 22;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e109); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseISAMPLERCUBEARRAY() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 111;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 17) === peg$c110) {
        s1 = peg$c110;
        peg$currPos += 17;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e110); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseUSAMPLERCUBEARRAY() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 112;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 17) === peg$c111) {
        s1 = peg$c111;
        peg$currPos += 17;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e111); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseSAMPLER2DMS() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 113;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 11) === peg$c112) {
        s1 = peg$c112;
        peg$currPos += 11;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e112); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseISAMPLER2DMS() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 114;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 12) === peg$c113) {
        s1 = peg$c113;
        peg$currPos += 12;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e113); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseUSAMPLER2DMS() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 115;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 12) === peg$c114) {
        s1 = peg$c114;
        peg$currPos += 12;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e114); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseSAMPLER2DMSARRAY() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 116;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 16) === peg$c115) {
        s1 = peg$c115;
        peg$currPos += 16;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e115); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseISAMPLER2DMSARRAY() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 117;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 17) === peg$c116) {
        s1 = peg$c116;
        peg$currPos += 17;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e116); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseUSAMPLER2DMSARRAY() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 118;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 17) === peg$c117) {
        s1 = peg$c117;
        peg$currPos += 17;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e117); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseIMAGE1D() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 119;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 7) === peg$c118) {
        s1 = peg$c118;
        peg$currPos += 7;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e118); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseIIMAGE1D() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 120;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 8) === peg$c119) {
        s1 = peg$c119;
        peg$currPos += 8;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e119); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseUIMAGE1D() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 121;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 8) === peg$c120) {
        s1 = peg$c120;
        peg$currPos += 8;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e120); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseIMAGE2D() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 122;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 7) === peg$c121) {
        s1 = peg$c121;
        peg$currPos += 7;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e121); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseIIMAGE2D() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 123;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 8) === peg$c122) {
        s1 = peg$c122;
        peg$currPos += 8;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e122); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseUIMAGE2D() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 124;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 8) === peg$c123) {
        s1 = peg$c123;
        peg$currPos += 8;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e123); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseIMAGE3D() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 125;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 7) === peg$c124) {
        s1 = peg$c124;
        peg$currPos += 7;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e124); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseIIMAGE3D() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 126;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 8) === peg$c125) {
        s1 = peg$c125;
        peg$currPos += 8;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e125); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseUIMAGE3D() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 127;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 8) === peg$c126) {
        s1 = peg$c126;
        peg$currPos += 8;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e126); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseIMAGE2DRECT() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 128;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 11) === peg$c127) {
        s1 = peg$c127;
        peg$currPos += 11;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e127); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseIIMAGE2DRECT() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 129;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 12) === peg$c128) {
        s1 = peg$c128;
        peg$currPos += 12;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e128); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseUIMAGE2DRECT() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 130;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 12) === peg$c129) {
        s1 = peg$c129;
        peg$currPos += 12;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e129); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseIMAGECUBE() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 131;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 9) === peg$c130) {
        s1 = peg$c130;
        peg$currPos += 9;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e130); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseIIMAGECUBE() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 132;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 10) === peg$c131) {
        s1 = peg$c131;
        peg$currPos += 10;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e131); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseUIMAGECUBE() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 133;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 10) === peg$c132) {
        s1 = peg$c132;
        peg$currPos += 10;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e132); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseIMAGEBUFFER() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 134;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 11) === peg$c133) {
        s1 = peg$c133;
        peg$currPos += 11;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e133); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseIIMAGEBUFFER() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 135;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 12) === peg$c134) {
        s1 = peg$c134;
        peg$currPos += 12;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e134); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseUIMAGEBUFFER() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 136;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 12) === peg$c135) {
        s1 = peg$c135;
        peg$currPos += 12;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e135); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseIMAGE1DARRAY() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 137;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 12) === peg$c136) {
        s1 = peg$c136;
        peg$currPos += 12;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e136); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseIIMAGE1DARRAY() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 138;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 13) === peg$c137) {
        s1 = peg$c137;
        peg$currPos += 13;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e137); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseUIMAGE1DARRAY() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 139;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 13) === peg$c138) {
        s1 = peg$c138;
        peg$currPos += 13;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e138); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseIMAGE2DARRAY() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 140;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 12) === peg$c139) {
        s1 = peg$c139;
        peg$currPos += 12;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e139); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseIIMAGE2DARRAY() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 141;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 13) === peg$c140) {
        s1 = peg$c140;
        peg$currPos += 13;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e140); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseUIMAGE2DARRAY() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 142;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 13) === peg$c141) {
        s1 = peg$c141;
        peg$currPos += 13;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e141); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseIMAGECUBEARRAY() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 143;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 14) === peg$c142) {
        s1 = peg$c142;
        peg$currPos += 14;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e142); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseIIMAGECUBEARRAY() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 144;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 15) === peg$c143) {
        s1 = peg$c143;
        peg$currPos += 15;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e143); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseUIMAGECUBEARRAY() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 145;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 15) === peg$c144) {
        s1 = peg$c144;
        peg$currPos += 15;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e144); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseIMAGE2DMS() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 146;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 9) === peg$c145) {
        s1 = peg$c145;
        peg$currPos += 9;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e145); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseIIMAGE2DMS() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 147;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 10) === peg$c146) {
        s1 = peg$c146;
        peg$currPos += 10;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e146); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseUIMAGE2DMS() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 148;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 10) === peg$c147) {
        s1 = peg$c147;
        peg$currPos += 10;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e147); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseIMAGE2DMSARRAY() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 149;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 13) === peg$c148) {
        s1 = peg$c148;
        peg$currPos += 13;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e148); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseIIMAGE2DMSARRAY() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 150;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 15) === peg$c149) {
        s1 = peg$c149;
        peg$currPos += 15;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e149); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseUIMAGE2DMSARRAY() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 151;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 15) === peg$c150) {
        s1 = peg$c150;
        peg$currPos += 15;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e150); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseSTRUCT() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 152;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c151) {
        s1 = peg$c151;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e151); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseVOID() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 153;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c152) {
        s1 = peg$c152;
        peg$currPos += 4;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e152); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseWHILE() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 154;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c153) {
        s1 = peg$c153;
        peg$currPos += 5;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e153); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseINVARIANT() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 155;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 9) === peg$c154) {
        s1 = peg$c154;
        peg$currPos += 9;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e154); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsePRECISE() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 156;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 7) === peg$c155) {
        s1 = peg$c155;
        peg$currPos += 7;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e155); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseHIGH_PRECISION() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 157;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c156) {
        s1 = peg$c156;
        peg$currPos += 5;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e156); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseMEDIUM_PRECISION() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 158;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 7) === peg$c157) {
        s1 = peg$c157;
        peg$currPos += 7;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e157); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseLOW_PRECISION() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 159;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c158) {
        s1 = peg$c158;
        peg$currPos += 4;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e158); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsePRECISION() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 160;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 9) === peg$c159) {
        s1 = peg$c159;
        peg$currPos += 9;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e159); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseterminal();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseFLOATCONSTANT() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 161;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parsefloating_constant();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f2(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseDOUBLECONSTANT() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 162;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parsefloating_constant();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f3(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseINTCONSTANT() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 163;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseinteger_constant();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f4(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseUINTCONSTANT() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 164;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseinteger_constant();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f5(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseBOOLCONSTANT() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 165;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c160) {
        s1 = peg$c160;
        peg$currPos += 4;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e160); }
      }
      if (s1 === peg$FAILED) {
        if (input.substr(peg$currPos, 5) === peg$c161) {
          s1 = peg$c161;
          peg$currPos += 5;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e161); }
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f6(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsekeyword() {
      var s0, s1;

      var key = peg$currPos * 305 + 166;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$parseATTRIBUTE();
      if (s0 === peg$FAILED) {
        s0 = peg$parseVARYING();
        if (s0 === peg$FAILED) {
          s0 = peg$parseCONST();
          if (s0 === peg$FAILED) {
            s0 = peg$parseBOOL();
            if (s0 === peg$FAILED) {
              s0 = peg$parseFLOAT();
              if (s0 === peg$FAILED) {
                s0 = peg$parseDOUBLE();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseINT();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseUINT();
                    if (s0 === peg$FAILED) {
                      s0 = peg$parseBREAK();
                      if (s0 === peg$FAILED) {
                        s0 = peg$parseCONTINUE();
                        if (s0 === peg$FAILED) {
                          s0 = peg$parseDO();
                          if (s0 === peg$FAILED) {
                            s0 = peg$parseELSE();
                            if (s0 === peg$FAILED) {
                              s0 = peg$parseFOR();
                              if (s0 === peg$FAILED) {
                                s0 = peg$parseIF();
                                if (s0 === peg$FAILED) {
                                  s0 = peg$parseDISCARD();
                                  if (s0 === peg$FAILED) {
                                    s0 = peg$parseRETURN();
                                    if (s0 === peg$FAILED) {
                                      s0 = peg$parseSWITCH();
                                      if (s0 === peg$FAILED) {
                                        s0 = peg$parseCASE();
                                        if (s0 === peg$FAILED) {
                                          s0 = peg$parseDEFAULT();
                                          if (s0 === peg$FAILED) {
                                            s0 = peg$parseSUBROUTINE();
                                            if (s0 === peg$FAILED) {
                                              s0 = peg$parseBVEC2();
                                              if (s0 === peg$FAILED) {
                                                s0 = peg$parseBVEC3();
                                                if (s0 === peg$FAILED) {
                                                  s0 = peg$parseBVEC4();
                                                  if (s0 === peg$FAILED) {
                                                    s0 = peg$parseIVEC2();
                                                    if (s0 === peg$FAILED) {
                                                      s0 = peg$parseIVEC3();
                                                      if (s0 === peg$FAILED) {
                                                        s0 = peg$parseIVEC4();
                                                        if (s0 === peg$FAILED) {
                                                          s0 = peg$parseUVEC2();
                                                          if (s0 === peg$FAILED) {
                                                            s0 = peg$parseUVEC3();
                                                            if (s0 === peg$FAILED) {
                                                              s0 = peg$parseUVEC4();
                                                              if (s0 === peg$FAILED) {
                                                                s0 = peg$parseVEC2();
                                                                if (s0 === peg$FAILED) {
                                                                  s0 = peg$parseVEC3();
                                                                  if (s0 === peg$FAILED) {
                                                                    s0 = peg$parseVEC4();
                                                                    if (s0 === peg$FAILED) {
                                                                      s0 = peg$parseMAT2();
                                                                      if (s0 === peg$FAILED) {
                                                                        s0 = peg$parseMAT3();
                                                                        if (s0 === peg$FAILED) {
                                                                          s0 = peg$parseMAT4();
                                                                          if (s0 === peg$FAILED) {
                                                                            s0 = peg$parseCENTROID();
                                                                            if (s0 === peg$FAILED) {
                                                                              s0 = peg$parseIN();
                                                                              if (s0 === peg$FAILED) {
                                                                                s0 = peg$parseOUT();
                                                                                if (s0 === peg$FAILED) {
                                                                                  s0 = peg$parseINOUT();
                                                                                  if (s0 === peg$FAILED) {
                                                                                    s0 = peg$parseUNIFORM();
                                                                                    if (s0 === peg$FAILED) {
                                                                                      s0 = peg$parsePATCH();
                                                                                      if (s0 === peg$FAILED) {
                                                                                        s0 = peg$parseSAMPLE();
                                                                                        if (s0 === peg$FAILED) {
                                                                                          s0 = peg$parseBUFFER();
                                                                                          if (s0 === peg$FAILED) {
                                                                                            s0 = peg$parseSHARED();
                                                                                            if (s0 === peg$FAILED) {
                                                                                              s0 = peg$parseCOHERENT();
                                                                                              if (s0 === peg$FAILED) {
                                                                                                s0 = peg$parseVOLATILE();
                                                                                                if (s0 === peg$FAILED) {
                                                                                                  s0 = peg$parseRESTRICT();
                                                                                                  if (s0 === peg$FAILED) {
                                                                                                    s0 = peg$parseREADONLY();
                                                                                                    if (s0 === peg$FAILED) {
                                                                                                      s0 = peg$parseWRITEONLY();
                                                                                                      if (s0 === peg$FAILED) {
                                                                                                        s0 = peg$parseDVEC2();
                                                                                                        if (s0 === peg$FAILED) {
                                                                                                          s0 = peg$parseDVEC3();
                                                                                                          if (s0 === peg$FAILED) {
                                                                                                            s0 = peg$parseDVEC4();
                                                                                                            if (s0 === peg$FAILED) {
                                                                                                              s0 = peg$parseDMAT2();
                                                                                                              if (s0 === peg$FAILED) {
                                                                                                                s0 = peg$parseDMAT3();
                                                                                                                if (s0 === peg$FAILED) {
                                                                                                                  s0 = peg$parseDMAT4();
                                                                                                                  if (s0 === peg$FAILED) {
                                                                                                                    s0 = peg$parseNOPERSPECTIVE();
                                                                                                                    if (s0 === peg$FAILED) {
                                                                                                                      s0 = peg$parseFLAT();
                                                                                                                      if (s0 === peg$FAILED) {
                                                                                                                        s0 = peg$parseSMOOTH();
                                                                                                                        if (s0 === peg$FAILED) {
                                                                                                                          s0 = peg$parseLAYOUT();
                                                                                                                          if (s0 === peg$FAILED) {
                                                                                                                            s0 = peg$parseMAT2X2();
                                                                                                                            if (s0 === peg$FAILED) {
                                                                                                                              s0 = peg$parseMAT2X3();
                                                                                                                              if (s0 === peg$FAILED) {
                                                                                                                                s0 = peg$parseMAT2X4();
                                                                                                                                if (s0 === peg$FAILED) {
                                                                                                                                  s0 = peg$parseMAT3X2();
                                                                                                                                  if (s0 === peg$FAILED) {
                                                                                                                                    s0 = peg$parseMAT3X3();
                                                                                                                                    if (s0 === peg$FAILED) {
                                                                                                                                      s0 = peg$parseMAT3X4();
                                                                                                                                      if (s0 === peg$FAILED) {
                                                                                                                                        s0 = peg$parseMAT4X2();
                                                                                                                                        if (s0 === peg$FAILED) {
                                                                                                                                          s0 = peg$parseMAT4X3();
                                                                                                                                          if (s0 === peg$FAILED) {
                                                                                                                                            s0 = peg$parseMAT4X4();
                                                                                                                                            if (s0 === peg$FAILED) {
                                                                                                                                              s0 = peg$parseDMAT2X2();
                                                                                                                                              if (s0 === peg$FAILED) {
                                                                                                                                                s0 = peg$parseDMAT2X3();
                                                                                                                                                if (s0 === peg$FAILED) {
                                                                                                                                                  s0 = peg$parseDMAT2X4();
                                                                                                                                                  if (s0 === peg$FAILED) {
                                                                                                                                                    s0 = peg$parseDMAT3X2();
                                                                                                                                                    if (s0 === peg$FAILED) {
                                                                                                                                                      s0 = peg$parseDMAT3X3();
                                                                                                                                                      if (s0 === peg$FAILED) {
                                                                                                                                                        s0 = peg$parseDMAT3X4();
                                                                                                                                                        if (s0 === peg$FAILED) {
                                                                                                                                                          s0 = peg$parseDMAT4X2();
                                                                                                                                                          if (s0 === peg$FAILED) {
                                                                                                                                                            s0 = peg$parseDMAT4X3();
                                                                                                                                                            if (s0 === peg$FAILED) {
                                                                                                                                                              s0 = peg$parseDMAT4X4();
                                                                                                                                                              if (s0 === peg$FAILED) {
                                                                                                                                                                s0 = peg$parseATOMIC_UINT();
                                                                                                                                                                if (s0 === peg$FAILED) {
                                                                                                                                                                  s0 = peg$parseSAMPLER1D();
                                                                                                                                                                  if (s0 === peg$FAILED) {
                                                                                                                                                                    s0 = peg$parseSAMPLER2D();
                                                                                                                                                                    if (s0 === peg$FAILED) {
                                                                                                                                                                      s0 = peg$parseSAMPLER3D();
                                                                                                                                                                      if (s0 === peg$FAILED) {
                                                                                                                                                                        s0 = peg$parseSAMPLERCUBE();
                                                                                                                                                                        if (s0 === peg$FAILED) {
                                                                                                                                                                          s0 = peg$parseSAMPLER1DSHADOW();
                                                                                                                                                                          if (s0 === peg$FAILED) {
                                                                                                                                                                            s0 = peg$parseSAMPLER2DSHADOW();
                                                                                                                                                                            if (s0 === peg$FAILED) {
                                                                                                                                                                              s0 = peg$parseSAMPLERCUBESHADOW();
                                                                                                                                                                              if (s0 === peg$FAILED) {
                                                                                                                                                                                s0 = peg$parseSAMPLER1DARRAY();
                                                                                                                                                                                if (s0 === peg$FAILED) {
                                                                                                                                                                                  s0 = peg$parseSAMPLER2DARRAY();
                                                                                                                                                                                  if (s0 === peg$FAILED) {
                                                                                                                                                                                    s0 = peg$parseSAMPLER1DARRAYSHADOW();
                                                                                                                                                                                    if (s0 === peg$FAILED) {
                                                                                                                                                                                      s0 = peg$parseSAMPLER2DARRAYSHADOW();
                                                                                                                                                                                      if (s0 === peg$FAILED) {
                                                                                                                                                                                        s0 = peg$parseISAMPLER1D();
                                                                                                                                                                                        if (s0 === peg$FAILED) {
                                                                                                                                                                                          s0 = peg$parseISAMPLER2D();
                                                                                                                                                                                          if (s0 === peg$FAILED) {
                                                                                                                                                                                            s0 = peg$parseISAMPLER3D();
                                                                                                                                                                                            if (s0 === peg$FAILED) {
                                                                                                                                                                                              s0 = peg$parseISAMPLERCUBE();
                                                                                                                                                                                              if (s0 === peg$FAILED) {
                                                                                                                                                                                                s0 = peg$parseISAMPLER1DARRAY();
                                                                                                                                                                                                if (s0 === peg$FAILED) {
                                                                                                                                                                                                  s0 = peg$parseISAMPLER2DARRAY();
                                                                                                                                                                                                  if (s0 === peg$FAILED) {
                                                                                                                                                                                                    s0 = peg$parseUSAMPLER1D();
                                                                                                                                                                                                    if (s0 === peg$FAILED) {
                                                                                                                                                                                                      s0 = peg$parseUSAMPLER2D();
                                                                                                                                                                                                      if (s0 === peg$FAILED) {
                                                                                                                                                                                                        s0 = peg$parseUSAMPLER3D();
                                                                                                                                                                                                        if (s0 === peg$FAILED) {
                                                                                                                                                                                                          s0 = peg$parseUSAMPLERCUBE();
                                                                                                                                                                                                          if (s0 === peg$FAILED) {
                                                                                                                                                                                                            s0 = peg$parseUSAMPLER1DARRAY();
                                                                                                                                                                                                            if (s0 === peg$FAILED) {
                                                                                                                                                                                                              s0 = peg$parseUSAMPLER2DARRAY();
                                                                                                                                                                                                              if (s0 === peg$FAILED) {
                                                                                                                                                                                                                s0 = peg$parseSAMPLER2DRECT();
                                                                                                                                                                                                                if (s0 === peg$FAILED) {
                                                                                                                                                                                                                  s0 = peg$parseSAMPLER2DRECTSHADOW();
                                                                                                                                                                                                                  if (s0 === peg$FAILED) {
                                                                                                                                                                                                                    s0 = peg$parseISAMPLER2DRECT();
                                                                                                                                                                                                                    if (s0 === peg$FAILED) {
                                                                                                                                                                                                                      s0 = peg$parseUSAMPLER2DRECT();
                                                                                                                                                                                                                      if (s0 === peg$FAILED) {
                                                                                                                                                                                                                        s0 = peg$parseSAMPLERBUFFER();
                                                                                                                                                                                                                        if (s0 === peg$FAILED) {
                                                                                                                                                                                                                          s0 = peg$parseISAMPLERBUFFER();
                                                                                                                                                                                                                          if (s0 === peg$FAILED) {
                                                                                                                                                                                                                            s0 = peg$parseUSAMPLERBUFFER();
                                                                                                                                                                                                                            if (s0 === peg$FAILED) {
                                                                                                                                                                                                                              s0 = peg$parseSAMPLERCUBEARRAY();
                                                                                                                                                                                                                              if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                s0 = peg$parseSAMPLERCUBEARRAYSHADOW();
                                                                                                                                                                                                                                if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                  s0 = peg$parseISAMPLERCUBEARRAY();
                                                                                                                                                                                                                                  if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                    s0 = peg$parseUSAMPLERCUBEARRAY();
                                                                                                                                                                                                                                    if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                      s0 = peg$parseSAMPLER2DMS();
                                                                                                                                                                                                                                      if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                        s0 = peg$parseISAMPLER2DMS();
                                                                                                                                                                                                                                        if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                          s0 = peg$parseUSAMPLER2DMS();
                                                                                                                                                                                                                                          if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                            s0 = peg$parseSAMPLER2DMSARRAY();
                                                                                                                                                                                                                                            if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                              s0 = peg$parseISAMPLER2DMSARRAY();
                                                                                                                                                                                                                                              if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                s0 = peg$parseUSAMPLER2DMSARRAY();
                                                                                                                                                                                                                                                if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                  s0 = peg$parseIMAGE1D();
                                                                                                                                                                                                                                                  if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                    s0 = peg$parseIIMAGE1D();
                                                                                                                                                                                                                                                    if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                      s0 = peg$parseUIMAGE1D();
                                                                                                                                                                                                                                                      if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                        s0 = peg$parseIMAGE2D();
                                                                                                                                                                                                                                                        if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                          s0 = peg$parseIIMAGE2D();
                                                                                                                                                                                                                                                          if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                            s0 = peg$parseUIMAGE2D();
                                                                                                                                                                                                                                                            if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                              s0 = peg$parseIMAGE3D();
                                                                                                                                                                                                                                                              if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                                s0 = peg$parseIIMAGE3D();
                                                                                                                                                                                                                                                                if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                                  s0 = peg$parseUIMAGE3D();
                                                                                                                                                                                                                                                                  if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                                    s0 = peg$parseIMAGE2DRECT();
                                                                                                                                                                                                                                                                    if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                                      s0 = peg$parseIIMAGE2DRECT();
                                                                                                                                                                                                                                                                      if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                                        s0 = peg$parseUIMAGE2DRECT();
                                                                                                                                                                                                                                                                        if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                                          s0 = peg$parseIMAGECUBE();
                                                                                                                                                                                                                                                                          if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                                            s0 = peg$parseIIMAGECUBE();
                                                                                                                                                                                                                                                                            if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                                              s0 = peg$parseUIMAGECUBE();
                                                                                                                                                                                                                                                                              if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                                                s0 = peg$parseIMAGEBUFFER();
                                                                                                                                                                                                                                                                                if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                                                  s0 = peg$parseIIMAGEBUFFER();
                                                                                                                                                                                                                                                                                  if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                                                    s0 = peg$parseUIMAGEBUFFER();
                                                                                                                                                                                                                                                                                    if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                                                      s0 = peg$parseIMAGE1DARRAY();
                                                                                                                                                                                                                                                                                      if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                                                        s0 = peg$parseIIMAGE1DARRAY();
                                                                                                                                                                                                                                                                                        if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                                                          s0 = peg$parseUIMAGE1DARRAY();
                                                                                                                                                                                                                                                                                          if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                                                            s0 = peg$parseIMAGE2DARRAY();
                                                                                                                                                                                                                                                                                            if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                                                              s0 = peg$parseIIMAGE2DARRAY();
                                                                                                                                                                                                                                                                                              if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                                                                s0 = peg$parseUIMAGE2DARRAY();
                                                                                                                                                                                                                                                                                                if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                                                                  s0 = peg$parseIMAGECUBEARRAY();
                                                                                                                                                                                                                                                                                                  if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                                                                    s0 = peg$parseIIMAGECUBEARRAY();
                                                                                                                                                                                                                                                                                                    if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                                                                      s0 = peg$parseUIMAGECUBEARRAY();
                                                                                                                                                                                                                                                                                                      if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                                                                        s0 = peg$parseIMAGE2DMS();
                                                                                                                                                                                                                                                                                                        if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                                                                          s0 = peg$parseIIMAGE2DMS();
                                                                                                                                                                                                                                                                                                          if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                                                                            s0 = peg$parseUIMAGE2DMS();
                                                                                                                                                                                                                                                                                                            if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                                                                              s0 = peg$parseIMAGE2DMSARRAY();
                                                                                                                                                                                                                                                                                                              if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                                                                                s0 = peg$parseIIMAGE2DMSARRAY();
                                                                                                                                                                                                                                                                                                                if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                                                                                  s0 = peg$parseUIMAGE2DMSARRAY();
                                                                                                                                                                                                                                                                                                                  if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                                                                                    s0 = peg$parseSTRUCT();
                                                                                                                                                                                                                                                                                                                    if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                                                                                      s0 = peg$parseVOID();
                                                                                                                                                                                                                                                                                                                      if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                                                                                        s0 = peg$parseWHILE();
                                                                                                                                                                                                                                                                                                                        if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                                                                                          s0 = peg$parseINVARIANT();
                                                                                                                                                                                                                                                                                                                          if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                                                                                            s0 = peg$parsePRECISE();
                                                                                                                                                                                                                                                                                                                            if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                                                                                              s0 = peg$parseHIGH_PRECISION();
                                                                                                                                                                                                                                                                                                                              if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                                                                                                s0 = peg$parseMEDIUM_PRECISION();
                                                                                                                                                                                                                                                                                                                                if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                                                                                                  s0 = peg$parseLOW_PRECISION();
                                                                                                                                                                                                                                                                                                                                  if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                                                                                                    s0 = peg$parsePRECISION();
                                                                                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                              }
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                          }
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                      }
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                  }
                                                                                                                                                                                                                }
                                                                                                                                                                                                              }
                                                                                                                                                                                                            }
                                                                                                                                                                                                          }
                                                                                                                                                                                                        }
                                                                                                                                                                                                      }
                                                                                                                                                                                                    }
                                                                                                                                                                                                  }
                                                                                                                                                                                                }
                                                                                                                                                                                              }
                                                                                                                                                                                            }
                                                                                                                                                                                          }
                                                                                                                                                                                        }
                                                                                                                                                                                      }
                                                                                                                                                                                    }
                                                                                                                                                                                  }
                                                                                                                                                                                }
                                                                                                                                                                              }
                                                                                                                                                                            }
                                                                                                                                                                          }
                                                                                                                                                                        }
                                                                                                                                                                      }
                                                                                                                                                                    }
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e162); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseLEFT_OP() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 167;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c162) {
        s1 = peg$c162;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e163); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseRIGHT_OP() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 168;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c163) {
        s1 = peg$c163;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e164); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseINC_OP() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 169;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c164) {
        s1 = peg$c164;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e165); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseDEC_OP() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 170;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c165) {
        s1 = peg$c165;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e166); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseLE_OP() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 171;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c166) {
        s1 = peg$c166;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e167); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseGE_OP() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 172;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c167) {
        s1 = peg$c167;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e168); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseEQ_OP() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 173;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c168) {
        s1 = peg$c168;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e169); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseNE_OP() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 174;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c169) {
        s1 = peg$c169;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e170); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseAND_OP() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 175;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c170) {
        s1 = peg$c170;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e171); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseOR_OP() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 176;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c171) {
        s1 = peg$c171;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e172); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseXOR_OP() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 177;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c172) {
        s1 = peg$c172;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e173); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseMUL_ASSIGN() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 178;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c173) {
        s1 = peg$c173;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e174); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseDIV_ASSIGN() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 179;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c174) {
        s1 = peg$c174;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e175); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseADD_ASSIGN() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 180;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c175) {
        s1 = peg$c175;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e176); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseMOD_ASSIGN() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 181;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c176) {
        s1 = peg$c176;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e177); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseLEFT_ASSIGN() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 182;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c177) {
        s1 = peg$c177;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e178); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseRIGHT_ASSIGN() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 183;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c178) {
        s1 = peg$c178;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e179); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseAND_ASSIGN() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 184;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c179) {
        s1 = peg$c179;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e180); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseXOR_ASSIGN() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 185;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c180) {
        s1 = peg$c180;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e181); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseOR_ASSIGN() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 186;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c181) {
        s1 = peg$c181;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e182); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseSUB_ASSIGN() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 187;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c182) {
        s1 = peg$c182;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e183); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseLEFT_PAREN() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 188;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 40) {
        s1 = peg$c183;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e184); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseRIGHT_PAREN() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 189;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 41) {
        s1 = peg$c184;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e185); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseLEFT_BRACKET() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 190;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 91) {
        s1 = peg$c185;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e186); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseRIGHT_BRACKET() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 191;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 93) {
        s1 = peg$c186;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e187); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseLEFT_BRACE() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 192;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 123) {
        s1 = peg$c187;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e188); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseRIGHT_BRACE() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 193;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 125) {
        s1 = peg$c188;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e189); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseDOT() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 194;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 46) {
        s1 = peg$c189;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e190); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseCOMMA() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 195;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 44) {
        s1 = peg$c190;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e191); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseCOLON() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 196;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 58) {
        s1 = peg$c191;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e192); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseEQUAL() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 197;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 61) {
        s1 = peg$c192;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e193); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseSEMICOLON() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 198;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 59) {
        s1 = peg$c193;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e194); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseBANG() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 199;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 33) {
        s1 = peg$c194;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e195); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseDASH() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 200;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 45) {
        s1 = peg$c195;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e196); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseTILDE() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 201;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 126) {
        s1 = peg$c196;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e197); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsePLUS() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 202;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 43) {
        s1 = peg$c197;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e198); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseSTAR() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 203;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 42) {
        s1 = peg$c198;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e199); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseSLASH() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 204;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 47) {
        s1 = peg$c199;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e200); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsePERCENT() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 205;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 37) {
        s1 = peg$c200;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e201); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseLEFT_ANGLE() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 206;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 60) {
        s1 = peg$c201;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e202); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseRIGHT_ANGLE() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 207;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 62) {
        s1 = peg$c202;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e203); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseVERTICAL_BAR() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 208;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 124) {
        s1 = peg$c203;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e204); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseCARET() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 209;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 94) {
        s1 = peg$c204;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e205); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseAMPERSAND() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 210;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 38) {
        s1 = peg$c205;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e206); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseQUESTION() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 211;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 63) {
        s1 = peg$c206;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e207); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseIDENTIFIER() {
      var s0, s1, s2, s3, s4, s5, s6;

      var key = peg$currPos * 305 + 212;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      peg$silentFails++;
      s2 = peg$parsekeyword();
      peg$silentFails--;
      if (s2 === peg$FAILED) {
        s1 = undefined;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$currPos;
        if (peg$r0.test(input.charAt(peg$currPos))) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e208); }
        }
        if (s4 !== peg$FAILED) {
          s5 = [];
          if (peg$r1.test(input.charAt(peg$currPos))) {
            s6 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$e209); }
          }
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            if (peg$r1.test(input.charAt(peg$currPos))) {
              s6 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$e209); }
            }
          }
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s2 = input.substring(s2, peg$currPos);
        } else {
          s2 = s3;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          peg$savedPos = s0;
          s0 = peg$f8(s2, s3);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseTYPE_NAME() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 213;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      peg$silentFails++;
      s2 = peg$parsekeyword();
      peg$silentFails--;
      if (s2 === peg$FAILED) {
        s1 = undefined;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseIDENTIFIER();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f9(s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseinteger_constant() {
      var s0, s1, s2, s3;

      var key = peg$currPos * 305 + 214;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = peg$parsedecimal_constant();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseinteger_suffix();
        if (s3 === peg$FAILED) {
          s3 = null;
        }
        s2 = [s2, s3];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s0 = input.substring(s0, peg$currPos);
      } else {
        s0 = s1;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$currPos;
        s2 = peg$parseoctal_constant();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseinteger_suffix();
          if (s3 === peg$FAILED) {
            s3 = null;
          }
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          s0 = input.substring(s0, peg$currPos);
        } else {
          s0 = s1;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$currPos;
          s2 = peg$parsehexadecimal_constant();
          if (s2 !== peg$FAILED) {
            s3 = peg$parseinteger_suffix();
            if (s3 === peg$FAILED) {
              s3 = null;
            }
            s2 = [s2, s3];
            s1 = s2;
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
          if (s1 !== peg$FAILED) {
            s0 = input.substring(s0, peg$currPos);
          } else {
            s0 = s1;
          }
        }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseinteger_suffix() {
      var s0;

      var key = peg$currPos * 305 + 215;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      if (peg$r2.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e210); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsedecimal_constant() {
      var s0, s1, s2, s3, s4;

      var key = peg$currPos * 305 + 216;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (peg$r3.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e211); }
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parsedigit();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parsedigit();
        }
        s2 = [s2, s3];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s0 = input.substring(s0, peg$currPos);
      } else {
        s0 = s1;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseoctal_constant() {
      var s0, s1, s2, s3;

      var key = peg$currPos * 305 + 217;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 48) {
        s1 = peg$c207;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e212); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        if (peg$r4.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e213); }
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          if (peg$r4.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$e213); }
          }
        }
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsehexadecimal_constant() {
      var s0, s1, s2, s3, s4;

      var key = peg$currPos * 305 + 218;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 48) {
        s1 = peg$c207;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e212); }
      }
      if (s1 !== peg$FAILED) {
        if (peg$r5.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e214); }
        }
        if (s2 !== peg$FAILED) {
          s3 = [];
          if (peg$r6.test(input.charAt(peg$currPos))) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$e215); }
          }
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            if (peg$r6.test(input.charAt(peg$currPos))) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$e215); }
            }
          }
          s1 = [s1, s2, s3];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsedigit() {
      var s0;

      var key = peg$currPos * 305 + 219;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      if (peg$r7.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e216); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsefloating_constant() {
      var s0, s1, s2, s3, s4;

      var key = peg$currPos * 305 + 220;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = peg$parsefractional_constant();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseexponent_part();
        if (s3 === peg$FAILED) {
          s3 = null;
        }
        s4 = peg$parsefloating_suffix();
        if (s4 === peg$FAILED) {
          s4 = null;
        }
        s2 = [s2, s3, s4];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s0 = input.substring(s0, peg$currPos);
      } else {
        s0 = s1;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$currPos;
        s2 = peg$parsedigit_sequence();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseexponent_part();
          if (s3 !== peg$FAILED) {
            s4 = peg$parsefloating_suffix();
            if (s4 === peg$FAILED) {
              s4 = null;
            }
            s2 = [s2, s3, s4];
            s1 = s2;
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          s0 = input.substring(s0, peg$currPos);
        } else {
          s0 = s1;
        }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsefractional_constant() {
      var s0, s1, s2, s3, s4;

      var key = peg$currPos * 305 + 221;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = peg$parsedigit_sequence();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (input.charCodeAt(peg$currPos) === 46) {
        s3 = peg$c189;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e190); }
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$parsedigit_sequence();
        if (s4 === peg$FAILED) {
          s4 = null;
        }
        s2 = [s2, s3, s4];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s0 = input.substring(s0, peg$currPos);
      } else {
        s0 = s1;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexponent_part() {
      var s0, s1, s2, s3, s4;

      var key = peg$currPos * 305 + 222;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$currPos;
      if (peg$r8.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e218); }
      }
      if (s2 !== peg$FAILED) {
        if (peg$r9.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e219); }
        }
        if (s3 === peg$FAILED) {
          s3 = null;
        }
        s4 = peg$parsedigit_sequence();
        if (s4 !== peg$FAILED) {
          s2 = [s2, s3, s4];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s0 = input.substring(s0, peg$currPos);
      } else {
        s0 = s1;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e217); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsedigit_sequence() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 223;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsedigit();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parsedigit();
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s0 = input.substring(s0, peg$currPos);
      } else {
        s0 = s1;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsefloating_suffix() {
      var s0;

      var key = peg$currPos * 305 + 224;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      if (peg$r10.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e220); }
      }
      if (s0 === peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c208) {
          s0 = peg$c208;
          peg$currPos += 2;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e221); }
        }
        if (s0 === peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c209) {
            s0 = peg$c209;
            peg$currPos += 2;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$e222); }
          }
        }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseprimary_expression() {
      var s0, s1, s2, s3;

      var key = peg$currPos * 305 + 225;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$parseFLOATCONSTANT();
      if (s0 === peg$FAILED) {
        s0 = peg$parseINTCONSTANT();
        if (s0 === peg$FAILED) {
          s0 = peg$parseUINTCONSTANT();
          if (s0 === peg$FAILED) {
            s0 = peg$parseBOOLCONSTANT();
            if (s0 === peg$FAILED) {
              s0 = peg$parseDOUBLECONSTANT();
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                s1 = peg$parseLEFT_PAREN();
                if (s1 !== peg$FAILED) {
                  s2 = peg$parseexpression();
                  if (s2 !== peg$FAILED) {
                    s3 = peg$parseRIGHT_PAREN();
                    if (s3 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s0 = peg$f10(s1, s2, s3);
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
                if (s0 === peg$FAILED) {
                  s0 = peg$currPos;
                  s1 = peg$parseIDENTIFIER();
                  if (s1 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$f11(s1);
                  }
                  s0 = s1;
                }
              }
            }
          }
        }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e223); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsepostfix_expression() {
      var s0, s1, s2, s3, s4;

      var key = peg$currPos * 305 + 226;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = peg$parsefunction_call();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parsepostfix_expression_suffix();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parsepostfix_expression_suffix();
        }
        s2 = [s2, s3];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 === peg$FAILED) {
        s1 = peg$currPos;
        s2 = peg$parseprimary_expression();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parsepostfix_expression_suffix();
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parsepostfix_expression_suffix();
          }
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$f12(s1);
      }
      s0 = s1;

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsepostfix_expression_suffix() {
      var s0;

      var key = peg$currPos * 305 + 227;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$parseinteger_index();
      if (s0 === peg$FAILED) {
        s0 = peg$parsefield_selection();
        if (s0 === peg$FAILED) {
          s0 = peg$parseINC_OP();
          if (s0 === peg$FAILED) {
            s0 = peg$parseDEC_OP();
          }
        }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseinteger_index() {
      var s0, s1, s2, s3;

      var key = peg$currPos * 305 + 228;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseLEFT_BRACKET();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseexpression();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseRIGHT_BRACKET();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f13(s1, s2, s3);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsefield_selection() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 229;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseDOT();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseIDENTIFIER();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f14(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsefunction_call() {
      var s0, s1, s2, s3;

      var key = peg$currPos * 305 + 230;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parsefunction_identifier();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsefunction_arguments();
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        s3 = peg$parseRIGHT_PAREN();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f15(s1, s2, s3);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsefunction_arguments() {
      var s0, s1, s2, s3, s4, s5;

      var key = peg$currPos * 305 + 231;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseVOID();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$f16(s1);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseassignment_expression();
        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$currPos;
          s4 = peg$parseCOMMA();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseassignment_expression();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$currPos;
            s4 = peg$parseCOMMA();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseassignment_expression();
              if (s5 !== peg$FAILED) {
                s4 = [s4, s5];
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          }
          peg$savedPos = s0;
          s0 = peg$f17(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsefunction_identifier() {
      var s0, s1, s2, s3, s4;

      var key = peg$currPos * 305 + 232;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = peg$parsechained_function_call();
      if (s2 !== peg$FAILED) {
        s3 = peg$parsefunction_suffix();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseLEFT_PAREN();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s1;
            s1 = peg$f18(s2, s3, s4);
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 === peg$FAILED) {
        s1 = peg$currPos;
        s2 = peg$parsetype_specifier();
        if (s2 !== peg$FAILED) {
          s3 = peg$parsefunction_suffix();
          if (s3 === peg$FAILED) {
            s3 = null;
          }
          s4 = peg$parseLEFT_PAREN();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s1;
            s1 = peg$f18(s2, s3, s4);
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$f19(s1);
      }
      s0 = s1;

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsefunction_suffix() {
      var s0;

      var key = peg$currPos * 305 + 233;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$parseinteger_index();
      if (s0 === peg$FAILED) {
        s0 = peg$parsefield_selection();
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsechained_function_call() {
      var s0, s1, s2, s3, s4;

      var key = peg$currPos * 305 + 234;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parsetype_specifier();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseLEFT_PAREN();
        if (s2 !== peg$FAILED) {
          s3 = peg$parsefunction_arguments();
          if (s3 === peg$FAILED) {
            s3 = null;
          }
          s4 = peg$parseRIGHT_PAREN();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f20(s1, s2, s3, s4);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseunary_expression() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 235;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$parsepostfix_expression();
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseINC_OP();
        if (s1 === peg$FAILED) {
          s1 = peg$parseDEC_OP();
          if (s1 === peg$FAILED) {
            s1 = peg$parsePLUS();
            if (s1 === peg$FAILED) {
              s1 = peg$parseDASH();
              if (s1 === peg$FAILED) {
                s1 = peg$parseBANG();
                if (s1 === peg$FAILED) {
                  s1 = peg$parseTILDE();
                }
              }
            }
          }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parseunary_expression();
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f21(s1, s2);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e224); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsemultiplicative_expression() {
      var s0, s1, s2, s3, s4, s5;

      var key = peg$currPos * 305 + 236;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseunary_expression();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parseSTAR();
        if (s4 === peg$FAILED) {
          s4 = peg$parseSLASH();
          if (s4 === peg$FAILED) {
            s4 = peg$parsePERCENT();
          }
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parseunary_expression();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parseSTAR();
          if (s4 === peg$FAILED) {
            s4 = peg$parseSLASH();
            if (s4 === peg$FAILED) {
              s4 = peg$parsePERCENT();
            }
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseunary_expression();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        peg$savedPos = s0;
        s0 = peg$f22(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseadditive_expression() {
      var s0, s1, s2, s3, s4, s5;

      var key = peg$currPos * 305 + 237;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parsemultiplicative_expression();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parsePLUS();
        if (s4 === peg$FAILED) {
          s4 = peg$parseDASH();
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parsemultiplicative_expression();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parsePLUS();
          if (s4 === peg$FAILED) {
            s4 = peg$parseDASH();
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parsemultiplicative_expression();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        peg$savedPos = s0;
        s0 = peg$f22(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseshift_expression() {
      var s0, s1, s2, s3, s4, s5;

      var key = peg$currPos * 305 + 238;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseadditive_expression();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parseRIGHT_OP();
        if (s4 === peg$FAILED) {
          s4 = peg$parseLEFT_OP();
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parseadditive_expression();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parseRIGHT_OP();
          if (s4 === peg$FAILED) {
            s4 = peg$parseLEFT_OP();
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseadditive_expression();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        peg$savedPos = s0;
        s0 = peg$f22(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parserelational_expression() {
      var s0, s1, s2, s3, s4, s5;

      var key = peg$currPos * 305 + 239;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseshift_expression();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parseLE_OP();
        if (s4 === peg$FAILED) {
          s4 = peg$parseGE_OP();
          if (s4 === peg$FAILED) {
            s4 = peg$parseLEFT_ANGLE();
            if (s4 === peg$FAILED) {
              s4 = peg$parseRIGHT_ANGLE();
            }
          }
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parseshift_expression();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parseLE_OP();
          if (s4 === peg$FAILED) {
            s4 = peg$parseGE_OP();
            if (s4 === peg$FAILED) {
              s4 = peg$parseLEFT_ANGLE();
              if (s4 === peg$FAILED) {
                s4 = peg$parseRIGHT_ANGLE();
              }
            }
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseshift_expression();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        peg$savedPos = s0;
        s0 = peg$f22(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseequality_expression() {
      var s0, s1, s2, s3, s4, s5;

      var key = peg$currPos * 305 + 240;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$parserelational_expression();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parseEQ_OP();
        if (s4 === peg$FAILED) {
          s4 = peg$parseNE_OP();
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parserelational_expression();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parseEQ_OP();
          if (s4 === peg$FAILED) {
            s4 = peg$parseNE_OP();
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parserelational_expression();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        peg$savedPos = s0;
        s0 = peg$f22(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e225); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseand_expression() {
      var s0, s1, s2, s3, s4, s5;

      var key = peg$currPos * 305 + 241;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$parseequality_expression();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parseAMPERSAND();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseequality_expression();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parseAMPERSAND();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseequality_expression();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        peg$savedPos = s0;
        s0 = peg$f22(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e226); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexclusive_or_expression() {
      var s0, s1, s2, s3, s4, s5;

      var key = peg$currPos * 305 + 242;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseand_expression();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parseCARET();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseand_expression();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parseCARET();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseand_expression();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        peg$savedPos = s0;
        s0 = peg$f22(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseinclusive_or_expression() {
      var s0, s1, s2, s3, s4, s5;

      var key = peg$currPos * 305 + 243;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseexclusive_or_expression();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parseVERTICAL_BAR();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseexclusive_or_expression();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parseVERTICAL_BAR();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseexclusive_or_expression();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        peg$savedPos = s0;
        s0 = peg$f22(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parselogical_and_expression() {
      var s0, s1, s2, s3, s4, s5;

      var key = peg$currPos * 305 + 244;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseinclusive_or_expression();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parseAND_OP();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseinclusive_or_expression();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parseAND_OP();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseinclusive_or_expression();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        peg$savedPos = s0;
        s0 = peg$f22(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parselogical_xor_expression() {
      var s0, s1, s2, s3, s4, s5;

      var key = peg$currPos * 305 + 245;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parselogical_and_expression();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parseXOR_OP();
        if (s4 !== peg$FAILED) {
          s5 = peg$parselogical_and_expression();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parseXOR_OP();
          if (s4 !== peg$FAILED) {
            s5 = peg$parselogical_and_expression();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        peg$savedPos = s0;
        s0 = peg$f22(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parselogical_or_expression() {
      var s0, s1, s2, s3, s4, s5;

      var key = peg$currPos * 305 + 246;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parselogical_xor_expression();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parseOR_OP();
        if (s4 !== peg$FAILED) {
          s5 = peg$parselogical_xor_expression();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parseOR_OP();
          if (s4 !== peg$FAILED) {
            s5 = peg$parselogical_xor_expression();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        peg$savedPos = s0;
        s0 = peg$f22(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseternary_expression() {
      var s0, s1, s2, s3, s4, s5, s6;

      var key = peg$currPos * 305 + 247;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parselogical_or_expression();
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$parseQUESTION();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseexpression();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseCOLON();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseassignment_expression();
              if (s6 !== peg$FAILED) {
                peg$savedPos = s2;
                s2 = peg$f23(s1, s3, s4, s5, s6);
              } else {
                peg$currPos = s2;
                s2 = peg$FAILED;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        peg$savedPos = s0;
        s0 = peg$f24(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseassignment_expression() {
      var s0, s1, s2, s3;

      var key = peg$currPos * 305 + 248;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseunary_expression();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseassignment_operator();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseassignment_expression();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f25(s1, s2, s3);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseternary_expression();
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseassignment_operator() {
      var s0, s1;

      var key = peg$currPos * 305 + 249;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$parseEQUAL();
      if (s0 === peg$FAILED) {
        s0 = peg$parseMUL_ASSIGN();
        if (s0 === peg$FAILED) {
          s0 = peg$parseDIV_ASSIGN();
          if (s0 === peg$FAILED) {
            s0 = peg$parseMOD_ASSIGN();
            if (s0 === peg$FAILED) {
              s0 = peg$parseADD_ASSIGN();
              if (s0 === peg$FAILED) {
                s0 = peg$parseSUB_ASSIGN();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseLEFT_ASSIGN();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseRIGHT_ASSIGN();
                    if (s0 === peg$FAILED) {
                      s0 = peg$parseAND_ASSIGN();
                      if (s0 === peg$FAILED) {
                        s0 = peg$parseXOR_ASSIGN();
                        if (s0 === peg$FAILED) {
                          s0 = peg$parseOR_ASSIGN();
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e227); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexpression() {
      var s0, s1, s2, s3, s4, s5;

      var key = peg$currPos * 305 + 250;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$parseassignment_expression();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parseCOMMA();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseassignment_expression();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parseCOMMA();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseassignment_expression();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        peg$savedPos = s0;
        s0 = peg$f22(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e228); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsedeclaration_statement() {
      var s0, s1;

      var key = peg$currPos * 305 + 251;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parsedeclaration();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$f26(s1);
      }
      s0 = s1;

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsedeclaration() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 252;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parsefunction_prototype();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSEMICOLON();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseprecision_declarator();
        if (s1 !== peg$FAILED) {
          s2 = peg$parseSEMICOLON();
          if (s2 !== peg$FAILED) {
            s1 = [s1, s2];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parseinterface_declarator();
          if (s1 !== peg$FAILED) {
            s2 = peg$parseSEMICOLON();
            if (s2 !== peg$FAILED) {
              s1 = [s1, s2];
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$parsequalifier_declarator();
            if (s1 !== peg$FAILED) {
              s2 = peg$parseSEMICOLON();
              if (s2 !== peg$FAILED) {
                s1 = [s1, s2];
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              s1 = peg$parseinit_declarator_list();
              if (s1 !== peg$FAILED) {
                s2 = peg$parseSEMICOLON();
                if (s2 !== peg$FAILED) {
                  s1 = [s1, s2];
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            }
          }
        }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsequalifier_declarator() {
      var s0, s1, s2, s3, s4, s5, s6;

      var key = peg$currPos * 305 + 253;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parsetype_qualifiers();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseIDENTIFIER();
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        s3 = [];
        s4 = peg$currPos;
        s5 = peg$parseCOMMA();
        if (s5 !== peg$FAILED) {
          s6 = peg$parseIDENTIFIER();
          if (s6 !== peg$FAILED) {
            s5 = [s5, s6];
            s4 = s5;
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$currPos;
          s5 = peg$parseCOMMA();
          if (s5 !== peg$FAILED) {
            s6 = peg$parseIDENTIFIER();
            if (s6 !== peg$FAILED) {
              s5 = [s5, s6];
              s4 = s5;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        }
        peg$savedPos = s0;
        s0 = peg$f27(s1, s2, s3);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseinterface_declarator() {
      var s0, s1, s2, s3, s4, s5, s6;

      var key = peg$currPos * 305 + 254;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parsetype_qualifiers();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseIDENTIFIER();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseLEFT_BRACE();
          if (s3 !== peg$FAILED) {
            s4 = peg$parsestruct_declaration_list();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseRIGHT_BRACE();
              if (s5 !== peg$FAILED) {
                s6 = peg$parsequantified_identifier();
                if (s6 === peg$FAILED) {
                  s6 = null;
                }
                peg$savedPos = s0;
                s0 = peg$f28(s1, s2, s3, s4, s5, s6);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseprecision_declarator() {
      var s0, s1, s2, s3;

      var key = peg$currPos * 305 + 255;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$parsePRECISION();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseprecision_qualifier();
        if (s2 !== peg$FAILED) {
          s3 = peg$parsetype_specifier();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f29(s1, s2, s3);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e229); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsefunction_prototype() {
      var s0, s1, s2, s3;

      var key = peg$currPos * 305 + 256;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$parsefunction_header();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsefunction_parameters();
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        s3 = peg$parseRIGHT_PAREN();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f30(s1, s2, s3);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e230); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsefunction_header() {
      var s0, s1, s2, s3;

      var key = peg$currPos * 305 + 257;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$parsefully_specified_type();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseIDENTIFIER();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseLEFT_PAREN();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f31(s1, s2, s3);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e231); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsefunction_parameters() {
      var s0, s1, s2, s3, s4, s5;

      var key = peg$currPos * 305 + 258;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$parseparameter_declaration();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parseCOMMA();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseparameter_declaration();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parseCOMMA();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseparameter_declaration();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        peg$savedPos = s0;
        s0 = peg$f32(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e232); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseparameter_declaration() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 259;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseparameter_qualifier();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseparameter_qualifier();
      }
      s2 = peg$parseparameter_declarator();
      if (s2 === peg$FAILED) {
        s2 = peg$parsetype_specifier();
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f33(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e233); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseparameter_declarator() {
      var s0, s1, s2, s3;

      var key = peg$currPos * 305 + 260;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$parsetype_specifier();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseIDENTIFIER();
        if (s2 !== peg$FAILED) {
          s3 = peg$parsearray_specifier();
          if (s3 === peg$FAILED) {
            s3 = null;
          }
          peg$savedPos = s0;
          s0 = peg$f34(s1, s2, s3);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e234); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseparameter_qualifier() {
      var s0;

      var key = peg$currPos * 305 + 261;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$parseCONST();
      if (s0 === peg$FAILED) {
        s0 = peg$parseIN();
        if (s0 === peg$FAILED) {
          s0 = peg$parseOUT();
          if (s0 === peg$FAILED) {
            s0 = peg$parseINOUT();
            if (s0 === peg$FAILED) {
              s0 = peg$parsememory_qualifier();
              if (s0 === peg$FAILED) {
                s0 = peg$parseprecision_qualifier();
              }
            }
          }
        }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsememory_qualifier() {
      var s0;

      var key = peg$currPos * 305 + 262;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$parseCOHERENT();
      if (s0 === peg$FAILED) {
        s0 = peg$parseVOLATILE();
        if (s0 === peg$FAILED) {
          s0 = peg$parseRESTRICT();
          if (s0 === peg$FAILED) {
            s0 = peg$parseREADONLY();
            if (s0 === peg$FAILED) {
              s0 = peg$parseWRITEONLY();
            }
          }
        }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseinit_declarator_list() {
      var s0, s1, s2, s3, s4, s5;

      var key = peg$currPos * 305 + 263;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseinitial_declaration();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parseCOMMA();
        if (s4 !== peg$FAILED) {
          s5 = peg$parsesubsequent_declaration();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parseCOMMA();
          if (s4 !== peg$FAILED) {
            s5 = peg$parsesubsequent_declaration();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        peg$savedPos = s0;
        s0 = peg$f35(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsesubsequent_declaration() {
      var s0, s1, s2, s3, s4, s5;

      var key = peg$currPos * 305 + 264;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseIDENTIFIER();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsearray_specifier();
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        s3 = peg$currPos;
        s4 = peg$parseEQUAL();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseinitializer();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        if (s3 === peg$FAILED) {
          s3 = null;
        }
        peg$savedPos = s0;
        s0 = peg$f36(s1, s2, s3);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseinitial_declaration() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      var key = peg$currPos * 305 + 265;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parsefully_specified_type();
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$parseIDENTIFIER();
        if (s3 !== peg$FAILED) {
          s4 = peg$parsearray_specifier();
          if (s4 === peg$FAILED) {
            s4 = null;
          }
          s5 = peg$currPos;
          s6 = peg$parseEQUAL();
          if (s6 !== peg$FAILED) {
            s7 = peg$parseinitializer();
            if (s7 !== peg$FAILED) {
              s6 = [s6, s7];
              s5 = s6;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
          if (s5 === peg$FAILED) {
            s5 = null;
          }
          s3 = [s3, s4, s5];
          s2 = s3;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        peg$savedPos = s0;
        s0 = peg$f37(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsefully_specified_type() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 266;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parsetype_qualifiers();
      if (s1 === peg$FAILED) {
        s1 = null;
      }
      s2 = peg$parsetype_specifier();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f38(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parselayout_qualifier() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      var key = peg$currPos * 305 + 267;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseLAYOUT();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseLEFT_PAREN();
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          s4 = peg$parselayout_qualifier_id();
          if (s4 !== peg$FAILED) {
            s5 = [];
            s6 = peg$currPos;
            s7 = peg$parseCOMMA();
            if (s7 !== peg$FAILED) {
              s8 = peg$parselayout_qualifier_id();
              if (s8 !== peg$FAILED) {
                s7 = [s7, s8];
                s6 = s7;
              } else {
                peg$currPos = s6;
                s6 = peg$FAILED;
              }
            } else {
              peg$currPos = s6;
              s6 = peg$FAILED;
            }
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$currPos;
              s7 = peg$parseCOMMA();
              if (s7 !== peg$FAILED) {
                s8 = peg$parselayout_qualifier_id();
                if (s8 !== peg$FAILED) {
                  s7 = [s7, s8];
                  s6 = s7;
                } else {
                  peg$currPos = s6;
                  s6 = peg$FAILED;
                }
              } else {
                peg$currPos = s6;
                s6 = peg$FAILED;
              }
            }
            peg$savedPos = s3;
            s3 = peg$f39(s1, s2, s4, s5);
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseRIGHT_PAREN();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s0 = peg$f40(s1, s2, s3, s4);
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parselayout_qualifier_id() {
      var s0, s1, s2, s3, s4;

      var key = peg$currPos * 305 + 268;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseIDENTIFIER();
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$parseEQUAL();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseternary_expression();
          if (s4 !== peg$FAILED) {
            s3 = [s3, s4];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        peg$savedPos = s0;
        s0 = peg$f41(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseSHARED();
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsetype_qualifiers() {
      var s0, s1;

      var key = peg$currPos * 305 + 269;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = [];
      s1 = peg$parsesingle_type_qualifier();
      if (s1 !== peg$FAILED) {
        while (s1 !== peg$FAILED) {
          s0.push(s1);
          s1 = peg$parsesingle_type_qualifier();
        }
      } else {
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsesingle_type_qualifier() {
      var s0, s1;

      var key = peg$currPos * 305 + 270;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$parsestorage_qualifier();
      if (s0 === peg$FAILED) {
        s0 = peg$parselayout_qualifier();
        if (s0 === peg$FAILED) {
          s0 = peg$parseprecision_qualifier();
          if (s0 === peg$FAILED) {
            s0 = peg$parseinterpolation_qualifier();
            if (s0 === peg$FAILED) {
              s0 = peg$parseINVARIANT();
              if (s0 === peg$FAILED) {
                s0 = peg$parsePRECISE();
              }
            }
          }
        }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e235); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseinterpolation_qualifier() {
      var s0, s1;

      var key = peg$currPos * 305 + 271;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$parseSMOOTH();
      if (s0 === peg$FAILED) {
        s0 = peg$parseFLAT();
        if (s0 === peg$FAILED) {
          s0 = peg$parseNOPERSPECTIVE();
        }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e236); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsestorage_qualifier() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      var key = peg$currPos * 305 + 272;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$parseCONST();
      if (s0 === peg$FAILED) {
        s0 = peg$parseINOUT();
        if (s0 === peg$FAILED) {
          s0 = peg$parseIN();
          if (s0 === peg$FAILED) {
            s0 = peg$parseOUT();
            if (s0 === peg$FAILED) {
              s0 = peg$parseCENTROID();
              if (s0 === peg$FAILED) {
                s0 = peg$parsePATCH();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseSAMPLE();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseUNIFORM();
                    if (s0 === peg$FAILED) {
                      s0 = peg$parseBUFFER();
                      if (s0 === peg$FAILED) {
                        s0 = peg$parseSHARED();
                        if (s0 === peg$FAILED) {
                          s0 = peg$parseCOHERENT();
                          if (s0 === peg$FAILED) {
                            s0 = peg$parseVOLATILE();
                            if (s0 === peg$FAILED) {
                              s0 = peg$parseRESTRICT();
                              if (s0 === peg$FAILED) {
                                s0 = peg$parseREADONLY();
                                if (s0 === peg$FAILED) {
                                  s0 = peg$parseWRITEONLY();
                                  if (s0 === peg$FAILED) {
                                    s0 = peg$parseVARYING();
                                    if (s0 === peg$FAILED) {
                                      s0 = peg$parseATTRIBUTE();
                                      if (s0 === peg$FAILED) {
                                        s0 = peg$currPos;
                                        s1 = peg$parseSUBROUTINE();
                                        if (s1 !== peg$FAILED) {
                                          s2 = peg$currPos;
                                          s3 = peg$parseLEFT_PAREN();
                                          if (s3 !== peg$FAILED) {
                                            s4 = peg$parseTYPE_NAME();
                                            if (s4 !== peg$FAILED) {
                                              s5 = [];
                                              s6 = peg$currPos;
                                              s7 = peg$parseCOMMA();
                                              if (s7 !== peg$FAILED) {
                                                s8 = peg$parseTYPE_NAME();
                                                if (s8 !== peg$FAILED) {
                                                  s7 = [s7, s8];
                                                  s6 = s7;
                                                } else {
                                                  peg$currPos = s6;
                                                  s6 = peg$FAILED;
                                                }
                                              } else {
                                                peg$currPos = s6;
                                                s6 = peg$FAILED;
                                              }
                                              while (s6 !== peg$FAILED) {
                                                s5.push(s6);
                                                s6 = peg$currPos;
                                                s7 = peg$parseCOMMA();
                                                if (s7 !== peg$FAILED) {
                                                  s8 = peg$parseTYPE_NAME();
                                                  if (s8 !== peg$FAILED) {
                                                    s7 = [s7, s8];
                                                    s6 = s7;
                                                  } else {
                                                    peg$currPos = s6;
                                                    s6 = peg$FAILED;
                                                  }
                                                } else {
                                                  peg$currPos = s6;
                                                  s6 = peg$FAILED;
                                                }
                                              }
                                              s6 = peg$parseRIGHT_PAREN();
                                              if (s6 !== peg$FAILED) {
                                                peg$savedPos = s2;
                                                s2 = peg$f42(s1, s3, s4, s5, s6);
                                              } else {
                                                peg$currPos = s2;
                                                s2 = peg$FAILED;
                                              }
                                            } else {
                                              peg$currPos = s2;
                                              s2 = peg$FAILED;
                                            }
                                          } else {
                                            peg$currPos = s2;
                                            s2 = peg$FAILED;
                                          }
                                          if (s2 === peg$FAILED) {
                                            s2 = null;
                                          }
                                          peg$savedPos = s0;
                                          s0 = peg$f43(s1, s2);
                                        } else {
                                          peg$currPos = s0;
                                          s0 = peg$FAILED;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e237); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsetype_specifier() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 273;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$parsetype_specifier_nonarray();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsearray_specifier();
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        peg$savedPos = s0;
        s0 = peg$f44(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e238); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsetype_specifier_nonarray() {
      var s0, s1;

      var key = peg$currPos * 305 + 274;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$parseVOID();
      if (s0 === peg$FAILED) {
        s0 = peg$parseFLOAT();
        if (s0 === peg$FAILED) {
          s0 = peg$parseDOUBLE();
          if (s0 === peg$FAILED) {
            s0 = peg$parseINT();
            if (s0 === peg$FAILED) {
              s0 = peg$parseUINT();
              if (s0 === peg$FAILED) {
                s0 = peg$parseBOOL();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseVEC2();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseVEC3();
                    if (s0 === peg$FAILED) {
                      s0 = peg$parseVEC4();
                      if (s0 === peg$FAILED) {
                        s0 = peg$parseDVEC2();
                        if (s0 === peg$FAILED) {
                          s0 = peg$parseDVEC3();
                          if (s0 === peg$FAILED) {
                            s0 = peg$parseDVEC4();
                            if (s0 === peg$FAILED) {
                              s0 = peg$parseBVEC2();
                              if (s0 === peg$FAILED) {
                                s0 = peg$parseBVEC3();
                                if (s0 === peg$FAILED) {
                                  s0 = peg$parseBVEC4();
                                  if (s0 === peg$FAILED) {
                                    s0 = peg$parseIVEC2();
                                    if (s0 === peg$FAILED) {
                                      s0 = peg$parseIVEC3();
                                      if (s0 === peg$FAILED) {
                                        s0 = peg$parseIVEC4();
                                        if (s0 === peg$FAILED) {
                                          s0 = peg$parseUVEC2();
                                          if (s0 === peg$FAILED) {
                                            s0 = peg$parseUVEC3();
                                            if (s0 === peg$FAILED) {
                                              s0 = peg$parseUVEC4();
                                              if (s0 === peg$FAILED) {
                                                s0 = peg$parseMAT2();
                                                if (s0 === peg$FAILED) {
                                                  s0 = peg$parseMAT3();
                                                  if (s0 === peg$FAILED) {
                                                    s0 = peg$parseMAT4();
                                                    if (s0 === peg$FAILED) {
                                                      s0 = peg$parseMAT2X2();
                                                      if (s0 === peg$FAILED) {
                                                        s0 = peg$parseMAT2X3();
                                                        if (s0 === peg$FAILED) {
                                                          s0 = peg$parseMAT2X4();
                                                          if (s0 === peg$FAILED) {
                                                            s0 = peg$parseMAT3X2();
                                                            if (s0 === peg$FAILED) {
                                                              s0 = peg$parseMAT3X3();
                                                              if (s0 === peg$FAILED) {
                                                                s0 = peg$parseMAT3X4();
                                                                if (s0 === peg$FAILED) {
                                                                  s0 = peg$parseMAT4X2();
                                                                  if (s0 === peg$FAILED) {
                                                                    s0 = peg$parseMAT4X3();
                                                                    if (s0 === peg$FAILED) {
                                                                      s0 = peg$parseMAT4X4();
                                                                      if (s0 === peg$FAILED) {
                                                                        s0 = peg$parseDMAT2();
                                                                        if (s0 === peg$FAILED) {
                                                                          s0 = peg$parseDMAT3();
                                                                          if (s0 === peg$FAILED) {
                                                                            s0 = peg$parseDMAT4();
                                                                            if (s0 === peg$FAILED) {
                                                                              s0 = peg$parseDMAT2X2();
                                                                              if (s0 === peg$FAILED) {
                                                                                s0 = peg$parseDMAT2X3();
                                                                                if (s0 === peg$FAILED) {
                                                                                  s0 = peg$parseDMAT2X4();
                                                                                  if (s0 === peg$FAILED) {
                                                                                    s0 = peg$parseDMAT3X2();
                                                                                    if (s0 === peg$FAILED) {
                                                                                      s0 = peg$parseDMAT3X3();
                                                                                      if (s0 === peg$FAILED) {
                                                                                        s0 = peg$parseDMAT3X4();
                                                                                        if (s0 === peg$FAILED) {
                                                                                          s0 = peg$parseDMAT4X2();
                                                                                          if (s0 === peg$FAILED) {
                                                                                            s0 = peg$parseDMAT4X3();
                                                                                            if (s0 === peg$FAILED) {
                                                                                              s0 = peg$parseDMAT4X4();
                                                                                              if (s0 === peg$FAILED) {
                                                                                                s0 = peg$parseATOMIC_UINT();
                                                                                                if (s0 === peg$FAILED) {
                                                                                                  s0 = peg$parseSAMPLER1D();
                                                                                                  if (s0 === peg$FAILED) {
                                                                                                    s0 = peg$parseSAMPLER2D();
                                                                                                    if (s0 === peg$FAILED) {
                                                                                                      s0 = peg$parseSAMPLER3D();
                                                                                                      if (s0 === peg$FAILED) {
                                                                                                        s0 = peg$parseSAMPLERCUBE();
                                                                                                        if (s0 === peg$FAILED) {
                                                                                                          s0 = peg$parseSAMPLER1DSHADOW();
                                                                                                          if (s0 === peg$FAILED) {
                                                                                                            s0 = peg$parseSAMPLER2DSHADOW();
                                                                                                            if (s0 === peg$FAILED) {
                                                                                                              s0 = peg$parseSAMPLERCUBESHADOW();
                                                                                                              if (s0 === peg$FAILED) {
                                                                                                                s0 = peg$parseSAMPLER1DARRAY();
                                                                                                                if (s0 === peg$FAILED) {
                                                                                                                  s0 = peg$parseSAMPLER2DARRAY();
                                                                                                                  if (s0 === peg$FAILED) {
                                                                                                                    s0 = peg$parseSAMPLER1DARRAYSHADOW();
                                                                                                                    if (s0 === peg$FAILED) {
                                                                                                                      s0 = peg$parseSAMPLER2DARRAYSHADOW();
                                                                                                                      if (s0 === peg$FAILED) {
                                                                                                                        s0 = peg$parseSAMPLERCUBEARRAY();
                                                                                                                        if (s0 === peg$FAILED) {
                                                                                                                          s0 = peg$parseSAMPLERCUBEARRAYSHADOW();
                                                                                                                          if (s0 === peg$FAILED) {
                                                                                                                            s0 = peg$parseISAMPLER1D();
                                                                                                                            if (s0 === peg$FAILED) {
                                                                                                                              s0 = peg$parseISAMPLER2D();
                                                                                                                              if (s0 === peg$FAILED) {
                                                                                                                                s0 = peg$parseISAMPLER3D();
                                                                                                                                if (s0 === peg$FAILED) {
                                                                                                                                  s0 = peg$parseISAMPLERCUBE();
                                                                                                                                  if (s0 === peg$FAILED) {
                                                                                                                                    s0 = peg$parseISAMPLER1DARRAY();
                                                                                                                                    if (s0 === peg$FAILED) {
                                                                                                                                      s0 = peg$parseISAMPLER2DARRAY();
                                                                                                                                      if (s0 === peg$FAILED) {
                                                                                                                                        s0 = peg$parseISAMPLERCUBEARRAY();
                                                                                                                                        if (s0 === peg$FAILED) {
                                                                                                                                          s0 = peg$parseUSAMPLER1D();
                                                                                                                                          if (s0 === peg$FAILED) {
                                                                                                                                            s0 = peg$parseUSAMPLER2D();
                                                                                                                                            if (s0 === peg$FAILED) {
                                                                                                                                              s0 = peg$parseUSAMPLER3D();
                                                                                                                                              if (s0 === peg$FAILED) {
                                                                                                                                                s0 = peg$parseUSAMPLERCUBE();
                                                                                                                                                if (s0 === peg$FAILED) {
                                                                                                                                                  s0 = peg$parseUSAMPLER1DARRAY();
                                                                                                                                                  if (s0 === peg$FAILED) {
                                                                                                                                                    s0 = peg$parseUSAMPLER2DARRAY();
                                                                                                                                                    if (s0 === peg$FAILED) {
                                                                                                                                                      s0 = peg$parseUSAMPLERCUBEARRAY();
                                                                                                                                                      if (s0 === peg$FAILED) {
                                                                                                                                                        s0 = peg$parseSAMPLER2DRECT();
                                                                                                                                                        if (s0 === peg$FAILED) {
                                                                                                                                                          s0 = peg$parseSAMPLER2DRECTSHADOW();
                                                                                                                                                          if (s0 === peg$FAILED) {
                                                                                                                                                            s0 = peg$parseISAMPLER2DRECT();
                                                                                                                                                            if (s0 === peg$FAILED) {
                                                                                                                                                              s0 = peg$parseUSAMPLER2DRECT();
                                                                                                                                                              if (s0 === peg$FAILED) {
                                                                                                                                                                s0 = peg$parseSAMPLERBUFFER();
                                                                                                                                                                if (s0 === peg$FAILED) {
                                                                                                                                                                  s0 = peg$parseISAMPLERBUFFER();
                                                                                                                                                                  if (s0 === peg$FAILED) {
                                                                                                                                                                    s0 = peg$parseUSAMPLERBUFFER();
                                                                                                                                                                    if (s0 === peg$FAILED) {
                                                                                                                                                                      s0 = peg$parseSAMPLER2DMS();
                                                                                                                                                                      if (s0 === peg$FAILED) {
                                                                                                                                                                        s0 = peg$parseISAMPLER2DMS();
                                                                                                                                                                        if (s0 === peg$FAILED) {
                                                                                                                                                                          s0 = peg$parseUSAMPLER2DMS();
                                                                                                                                                                          if (s0 === peg$FAILED) {
                                                                                                                                                                            s0 = peg$parseSAMPLER2DMSARRAY();
                                                                                                                                                                            if (s0 === peg$FAILED) {
                                                                                                                                                                              s0 = peg$parseISAMPLER2DMSARRAY();
                                                                                                                                                                              if (s0 === peg$FAILED) {
                                                                                                                                                                                s0 = peg$parseUSAMPLER2DMSARRAY();
                                                                                                                                                                                if (s0 === peg$FAILED) {
                                                                                                                                                                                  s0 = peg$parseIMAGE1D();
                                                                                                                                                                                  if (s0 === peg$FAILED) {
                                                                                                                                                                                    s0 = peg$parseIIMAGE1D();
                                                                                                                                                                                    if (s0 === peg$FAILED) {
                                                                                                                                                                                      s0 = peg$parseUIMAGE1D();
                                                                                                                                                                                      if (s0 === peg$FAILED) {
                                                                                                                                                                                        s0 = peg$parseIMAGE2D();
                                                                                                                                                                                        if (s0 === peg$FAILED) {
                                                                                                                                                                                          s0 = peg$parseIIMAGE2D();
                                                                                                                                                                                          if (s0 === peg$FAILED) {
                                                                                                                                                                                            s0 = peg$parseUIMAGE2D();
                                                                                                                                                                                            if (s0 === peg$FAILED) {
                                                                                                                                                                                              s0 = peg$parseIMAGE3D();
                                                                                                                                                                                              if (s0 === peg$FAILED) {
                                                                                                                                                                                                s0 = peg$parseIIMAGE3D();
                                                                                                                                                                                                if (s0 === peg$FAILED) {
                                                                                                                                                                                                  s0 = peg$parseUIMAGE3D();
                                                                                                                                                                                                  if (s0 === peg$FAILED) {
                                                                                                                                                                                                    s0 = peg$parseIMAGE2DRECT();
                                                                                                                                                                                                    if (s0 === peg$FAILED) {
                                                                                                                                                                                                      s0 = peg$parseIIMAGE2DRECT();
                                                                                                                                                                                                      if (s0 === peg$FAILED) {
                                                                                                                                                                                                        s0 = peg$parseUIMAGE2DRECT();
                                                                                                                                                                                                        if (s0 === peg$FAILED) {
                                                                                                                                                                                                          s0 = peg$parseIMAGECUBE();
                                                                                                                                                                                                          if (s0 === peg$FAILED) {
                                                                                                                                                                                                            s0 = peg$parseIIMAGECUBE();
                                                                                                                                                                                                            if (s0 === peg$FAILED) {
                                                                                                                                                                                                              s0 = peg$parseUIMAGECUBE();
                                                                                                                                                                                                              if (s0 === peg$FAILED) {
                                                                                                                                                                                                                s0 = peg$parseIMAGEBUFFER();
                                                                                                                                                                                                                if (s0 === peg$FAILED) {
                                                                                                                                                                                                                  s0 = peg$parseIIMAGEBUFFER();
                                                                                                                                                                                                                  if (s0 === peg$FAILED) {
                                                                                                                                                                                                                    s0 = peg$parseUIMAGEBUFFER();
                                                                                                                                                                                                                    if (s0 === peg$FAILED) {
                                                                                                                                                                                                                      s0 = peg$parseIMAGE1DARRAY();
                                                                                                                                                                                                                      if (s0 === peg$FAILED) {
                                                                                                                                                                                                                        s0 = peg$parseIIMAGE1DARRAY();
                                                                                                                                                                                                                        if (s0 === peg$FAILED) {
                                                                                                                                                                                                                          s0 = peg$parseUIMAGE1DARRAY();
                                                                                                                                                                                                                          if (s0 === peg$FAILED) {
                                                                                                                                                                                                                            s0 = peg$parseIMAGE2DARRAY();
                                                                                                                                                                                                                            if (s0 === peg$FAILED) {
                                                                                                                                                                                                                              s0 = peg$parseIIMAGE2DARRAY();
                                                                                                                                                                                                                              if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                s0 = peg$parseUIMAGE2DARRAY();
                                                                                                                                                                                                                                if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                  s0 = peg$parseIMAGECUBEARRAY();
                                                                                                                                                                                                                                  if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                    s0 = peg$parseIIMAGECUBEARRAY();
                                                                                                                                                                                                                                    if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                      s0 = peg$parseUIMAGECUBEARRAY();
                                                                                                                                                                                                                                      if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                        s0 = peg$parseIMAGE2DMS();
                                                                                                                                                                                                                                        if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                          s0 = peg$parseIIMAGE2DMS();
                                                                                                                                                                                                                                          if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                            s0 = peg$parseUIMAGE2DMS();
                                                                                                                                                                                                                                            if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                              s0 = peg$parseIMAGE2DMSARRAY();
                                                                                                                                                                                                                                              if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                s0 = peg$parseIIMAGE2DMSARRAY();
                                                                                                                                                                                                                                                if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                  s0 = peg$parseUIMAGE2DMSARRAY();
                                                                                                                                                                                                                                                  if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                    s0 = peg$parsestruct_specifier();
                                                                                                                                                                                                                                                    if (s0 === peg$FAILED) {
                                                                                                                                                                                                                                                      s0 = peg$parseTYPE_NAME();
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                              }
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                          }
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                      }
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                  }
                                                                                                                                                                                                                }
                                                                                                                                                                                                              }
                                                                                                                                                                                                            }
                                                                                                                                                                                                          }
                                                                                                                                                                                                        }
                                                                                                                                                                                                      }
                                                                                                                                                                                                    }
                                                                                                                                                                                                  }
                                                                                                                                                                                                }
                                                                                                                                                                                              }
                                                                                                                                                                                            }
                                                                                                                                                                                          }
                                                                                                                                                                                        }
                                                                                                                                                                                      }
                                                                                                                                                                                    }
                                                                                                                                                                                  }
                                                                                                                                                                                }
                                                                                                                                                                              }
                                                                                                                                                                            }
                                                                                                                                                                          }
                                                                                                                                                                        }
                                                                                                                                                                      }
                                                                                                                                                                    }
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e238); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsearray_specifier() {
      var s0, s1, s2, s3, s4, s5;

      var key = peg$currPos * 305 + 275;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = [];
      s2 = peg$currPos;
      s3 = peg$parseLEFT_BRACKET();
      if (s3 !== peg$FAILED) {
        s4 = peg$parseternary_expression();
        if (s4 === peg$FAILED) {
          s4 = null;
        }
        s5 = peg$parseRIGHT_BRACKET();
        if (s5 !== peg$FAILED) {
          peg$savedPos = s2;
          s2 = peg$f45(s3, s4, s5);
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$currPos;
          s3 = peg$parseLEFT_BRACKET();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseternary_expression();
            if (s4 === peg$FAILED) {
              s4 = null;
            }
            s5 = peg$parseRIGHT_BRACKET();
            if (s5 !== peg$FAILED) {
              peg$savedPos = s2;
              s2 = peg$f45(s3, s4, s5);
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$f46(s1);
      }
      s0 = s1;
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e239); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseprecision_qualifier() {
      var s0, s1;

      var key = peg$currPos * 305 + 276;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$parseHIGH_PRECISION();
      if (s0 === peg$FAILED) {
        s0 = peg$parseMEDIUM_PRECISION();
        if (s0 === peg$FAILED) {
          s0 = peg$parseLOW_PRECISION();
        }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e240); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsestruct_specifier() {
      var s0, s1, s2, s3, s4, s5;

      var key = peg$currPos * 305 + 277;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$parseSTRUCT();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseIDENTIFIER();
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        s3 = peg$parseLEFT_BRACE();
        if (s3 !== peg$FAILED) {
          s4 = peg$parsestruct_declaration_list();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseRIGHT_BRACE();
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s0 = peg$f47(s1, s2, s3, s4, s5);
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e241); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsestruct_declaration_list() {
      var s0, s1, s2, s3;

      var key = peg$currPos * 305 + 278;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = [];
      s1 = peg$currPos;
      s2 = peg$parsestruct_declaration();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseSEMICOLON();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s1;
          s1 = peg$f48(s2, s3);
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        while (s1 !== peg$FAILED) {
          s0.push(s1);
          s1 = peg$currPos;
          s2 = peg$parsestruct_declaration();
          if (s2 !== peg$FAILED) {
            s3 = peg$parseSEMICOLON();
            if (s3 !== peg$FAILED) {
              peg$savedPos = s1;
              s1 = peg$f48(s2, s3);
            } else {
              peg$currPos = s1;
              s1 = peg$FAILED;
            }
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        }
      } else {
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsestruct_declaration() {
      var s0, s1, s2, s3, s4, s5, s6;

      var key = peg$currPos * 305 + 279;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parsefully_specified_type();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsequantified_identifier();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$currPos;
          s5 = peg$parseCOMMA();
          if (s5 !== peg$FAILED) {
            s6 = peg$parsequantified_identifier();
            if (s6 !== peg$FAILED) {
              s5 = [s5, s6];
              s4 = s5;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$currPos;
            s5 = peg$parseCOMMA();
            if (s5 !== peg$FAILED) {
              s6 = peg$parsequantified_identifier();
              if (s6 !== peg$FAILED) {
                s5 = [s5, s6];
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          }
          peg$savedPos = s0;
          s0 = peg$f49(s1, s2, s3);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsequantified_identifier() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 280;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseIDENTIFIER();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsearray_specifier();
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        peg$savedPos = s0;
        s0 = peg$f50(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseinitializer() {
      var s0, s1, s2, s3, s4, s5, s6;

      var key = peg$currPos * 305 + 281;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$parseassignment_expression();
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseLEFT_BRACE();
        if (s1 !== peg$FAILED) {
          s2 = peg$parseinitializer();
          if (s2 !== peg$FAILED) {
            s3 = [];
            s4 = peg$currPos;
            s5 = peg$parseCOMMA();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseinitializer();
              if (s6 !== peg$FAILED) {
                s5 = [s5, s6];
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
            while (s4 !== peg$FAILED) {
              s3.push(s4);
              s4 = peg$currPos;
              s5 = peg$parseCOMMA();
              if (s5 !== peg$FAILED) {
                s6 = peg$parseinitializer();
                if (s6 !== peg$FAILED) {
                  s5 = [s5, s6];
                  s4 = s5;
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            }
            s4 = peg$parseCOMMA();
            if (s4 === peg$FAILED) {
              s4 = null;
            }
            s5 = peg$parseRIGHT_BRACE();
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s0 = peg$f51(s1, s2, s3, s4, s5);
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsestatement() {
      var s0;

      var key = peg$currPos * 305 + 282;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$parsecompound_statement();
      if (s0 === peg$FAILED) {
        s0 = peg$parsesimple_statement();
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsesimple_statement() {
      var s0;

      var key = peg$currPos * 305 + 283;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$parsejump_statement();
      if (s0 === peg$FAILED) {
        s0 = peg$parsedeclaration_statement();
        if (s0 === peg$FAILED) {
          s0 = peg$parseexpression_statement();
          if (s0 === peg$FAILED) {
            s0 = peg$parseif_statement();
            if (s0 === peg$FAILED) {
              s0 = peg$parseswitch_statement();
              if (s0 === peg$FAILED) {
                s0 = peg$parsecase_label();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseiteration_statement();
                }
              }
            }
          }
        }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsecompound_statement() {
      var s0, s1, s2, s3;

      var key = peg$currPos * 305 + 284;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = peg$parseLEFT_BRACE();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s1;
        s2 = peg$f52(s2);
      }
      s1 = s2;
      if (s1 !== peg$FAILED) {
        s2 = peg$parsestatement_list();
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        s3 = peg$parseRIGHT_BRACE();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f53(s1, s2, s3);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsecompound_statement_no_new_scope() {
      var s0, s1, s2, s3;

      var key = peg$currPos * 305 + 285;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseLEFT_BRACE();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsestatement_list();
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        s3 = peg$parseRIGHT_BRACE();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f54(s1, s2, s3);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsestatement_no_new_scope() {
      var s0;

      var key = peg$currPos * 305 + 286;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$parsecompound_statement_no_new_scope();
      if (s0 === peg$FAILED) {
        s0 = peg$parsesimple_statement();
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsestatement_list() {
      var s0, s1;

      var key = peg$currPos * 305 + 287;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = [];
      s1 = peg$parsestatement();
      if (s1 === peg$FAILED) {
        s1 = peg$parsepreprocessor();
      }
      if (s1 !== peg$FAILED) {
        while (s1 !== peg$FAILED) {
          s0.push(s1);
          s1 = peg$parsestatement();
          if (s1 === peg$FAILED) {
            s1 = peg$parsepreprocessor();
          }
        }
      } else {
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexpression_statement() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 288;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseexpression();
      if (s1 === peg$FAILED) {
        s1 = null;
      }
      s2 = peg$parseSEMICOLON();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f55(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseif_statement() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

      var key = peg$currPos * 305 + 289;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseIF();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseLEFT_PAREN();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseexpression();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseRIGHT_PAREN();
            if (s4 !== peg$FAILED) {
              s5 = peg$currPos;
              s6 = peg$parsestatement();
              if (s6 !== peg$FAILED) {
                s7 = peg$currPos;
                s8 = peg$parseELSE();
                if (s8 !== peg$FAILED) {
                  s9 = peg$parsestatement();
                  if (s9 !== peg$FAILED) {
                    s8 = [s8, s9];
                    s7 = s8;
                  } else {
                    peg$currPos = s7;
                    s7 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s7;
                  s7 = peg$FAILED;
                }
                if (s7 === peg$FAILED) {
                  s7 = null;
                }
                s6 = [s6, s7];
                s5 = s6;
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s0 = peg$f56(s1, s2, s3, s4, s5);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseswitch_statement() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      var key = peg$currPos * 305 + 290;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseSWITCH();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseLEFT_PAREN();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseexpression();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseRIGHT_PAREN();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseLEFT_BRACE();
              if (s5 !== peg$FAILED) {
                s6 = peg$parsestatement_list();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parseRIGHT_BRACE();
                  if (s7 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s0 = peg$f57(s1, s2, s3, s4, s5, s6, s7);
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsecase_label() {
      var s0, s1, s2, s3;

      var key = peg$currPos * 305 + 291;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseCASE();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseexpression();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseCOLON();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f58(s1, s2, s3);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseDEFAULT();
        if (s1 !== peg$FAILED) {
          s2 = peg$parseCOLON();
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f59(s1, s2);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseiteration_statement() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      var key = peg$currPos * 305 + 292;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = peg$parseWHILE();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s1;
        s2 = peg$f60(s2);
      }
      s1 = s2;
      if (s1 !== peg$FAILED) {
        s2 = peg$parseLEFT_PAREN();
        if (s2 !== peg$FAILED) {
          s3 = peg$parsecondition();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseRIGHT_PAREN();
            if (s4 !== peg$FAILED) {
              s5 = peg$parsestatement_no_new_scope();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s0 = peg$f61(s1, s2, s3, s4, s5);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseDO();
        if (s1 !== peg$FAILED) {
          s2 = peg$parsestatement();
          if (s2 !== peg$FAILED) {
            s3 = peg$parseWHILE();
            if (s3 !== peg$FAILED) {
              s4 = peg$parseLEFT_PAREN();
              if (s4 !== peg$FAILED) {
                s5 = peg$parseexpression();
                if (s5 !== peg$FAILED) {
                  s6 = peg$parseRIGHT_PAREN();
                  if (s6 !== peg$FAILED) {
                    s7 = peg$parseSEMICOLON();
                    if (s7 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s0 = peg$f62(s1, s2, s3, s4, s5, s6, s7);
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$currPos;
          s2 = peg$parseFOR();
          if (s2 !== peg$FAILED) {
            peg$savedPos = s1;
            s2 = peg$f63(s2);
          }
          s1 = s2;
          if (s1 !== peg$FAILED) {
            s2 = peg$parseLEFT_PAREN();
            if (s2 !== peg$FAILED) {
              s3 = peg$parseexpression_statement();
              if (s3 === peg$FAILED) {
                s3 = peg$parsedeclaration_statement();
              }
              if (s3 === peg$FAILED) {
                s3 = null;
              }
              s4 = peg$parsecondition();
              if (s4 === peg$FAILED) {
                s4 = null;
              }
              s5 = peg$parseSEMICOLON();
              if (s5 !== peg$FAILED) {
                s6 = peg$parseexpression();
                if (s6 === peg$FAILED) {
                  s6 = null;
                }
                s7 = peg$parseRIGHT_PAREN();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parsestatement_no_new_scope();
                  if (s8 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s0 = peg$f64(s1, s2, s3, s4, s5, s6, s7, s8);
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e242); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsecondition() {
      var s0, s1, s2, s3, s4;

      var key = peg$currPos * 305 + 293;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parsefully_specified_type();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseIDENTIFIER();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseEQUAL();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseinitializer();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s0 = peg$f65(s1, s2, s3, s4);
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseexpression();
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsejump_statement() {
      var s0, s1, s2, s3;

      var key = peg$currPos * 305 + 294;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$parseCONTINUE();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSEMICOLON();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f66(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseBREAK();
        if (s1 !== peg$FAILED) {
          s2 = peg$parseSEMICOLON();
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f67(s1, s2);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parseRETURN();
          if (s1 !== peg$FAILED) {
            s2 = peg$parseexpression();
            if (s2 === peg$FAILED) {
              s2 = null;
            }
            s3 = peg$parseSEMICOLON();
            if (s3 !== peg$FAILED) {
              peg$savedPos = s0;
              s0 = peg$f68(s1, s2, s3);
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$parseDISCARD();
            if (s1 !== peg$FAILED) {
              s2 = peg$parseSEMICOLON();
              if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s0 = peg$f69(s1, s2);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          }
        }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e243); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsepreprocessor() {
      var s0, s1, s2, s3, s4, s5;

      var key = peg$currPos * 305 + 295;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 35) {
        s3 = peg$c210;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e245); }
      }
      if (s3 !== peg$FAILED) {
        s4 = [];
        if (peg$r11.test(input.charAt(peg$currPos))) {
          s5 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e246); }
        }
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          if (peg$r11.test(input.charAt(peg$currPos))) {
            s5 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$e246); }
          }
        }
        s3 = [s3, s4];
        s2 = s3;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s1 = input.substring(s1, peg$currPos);
      } else {
        s1 = s2;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f70(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e244); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsetranslation_unit() {
      var s0, s1;

      var key = peg$currPos * 305 + 296;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = [];
      s1 = peg$parseexternal_declaration();
      if (s1 === peg$FAILED) {
        s1 = peg$parsepreprocessor();
      }
      if (s1 !== peg$FAILED) {
        while (s1 !== peg$FAILED) {
          s0.push(s1);
          s1 = peg$parseexternal_declaration();
          if (s1 === peg$FAILED) {
            s1 = peg$parsepreprocessor();
          }
        }
      } else {
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexternal_declaration() {
      var s0;

      var key = peg$currPos * 305 + 297;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$parsefunction_definition();
      if (s0 === peg$FAILED) {
        s0 = peg$parsedeclaration_statement();
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsefunction_definition() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 298;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parsefunction_prototype();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsecompound_statement_no_new_scope();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f71(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parse_() {
      var s0, s1, s2, s3, s4, s5;

      var key = peg$currPos * 305 + 299;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$parsewhitespace();
      if (s1 === peg$FAILED) {
        s1 = null;
      }
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parsecomment();
      if (s4 !== peg$FAILED) {
        s5 = peg$parsewhitespace();
        if (s5 === peg$FAILED) {
          s5 = null;
        }
        s4 = [s4, s5];
        s3 = s4;
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parsecomment();
        if (s4 !== peg$FAILED) {
          s5 = peg$parsewhitespace();
          if (s5 === peg$FAILED) {
            s5 = null;
          }
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      peg$savedPos = s0;
      s0 = peg$f72(s1, s2);
      peg$silentFails--;
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e247); }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsecomment() {
      var s0, s1, s2, s3, s4, s5;

      var key = peg$currPos * 305 + 300;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$parsesingle_comment();
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parsemultiline_comment();
        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$currPos;
          s4 = peg$parsewhitespace();
          if (s4 !== peg$FAILED) {
            s5 = peg$parsecomment();
            if (s5 !== peg$FAILED) {
              peg$savedPos = s3;
              s3 = peg$f73(s1, s4, s5);
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$currPos;
            s4 = peg$parsewhitespace();
            if (s4 !== peg$FAILED) {
              s5 = peg$parsecomment();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s3;
                s3 = peg$f73(s1, s4, s5);
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          }
          peg$savedPos = s0;
          s0 = peg$f74(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsesingle_comment() {
      var s0, s1, s2, s3, s4;

      var key = peg$currPos * 305 + 301;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c211) {
        s2 = peg$c211;
        peg$currPos += 2;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e248); }
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        if (peg$r11.test(input.charAt(peg$currPos))) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e246); }
        }
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          if (peg$r11.test(input.charAt(peg$currPos))) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$e246); }
          }
        }
        s2 = [s2, s3];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s0 = input.substring(s0, peg$currPos);
      } else {
        s0 = s1;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsemultiline_comment() {
      var s0, s1, s2, s3, s4, s5, s6;

      var key = peg$currPos * 305 + 302;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c212) {
        s2 = peg$c212;
        peg$currPos += 2;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e249); }
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$currPos;
        s5 = peg$currPos;
        peg$silentFails++;
        if (input.substr(peg$currPos, 2) === peg$c213) {
          s6 = peg$c213;
          peg$currPos += 2;
        } else {
          s6 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e250); }
        }
        peg$silentFails--;
        if (s6 === peg$FAILED) {
          s5 = undefined;
        } else {
          peg$currPos = s5;
          s5 = peg$FAILED;
        }
        if (s5 !== peg$FAILED) {
          if (input.length > peg$currPos) {
            s6 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$e251); }
          }
          if (s6 !== peg$FAILED) {
            peg$savedPos = s4;
            s4 = peg$f75(s6);
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$currPos;
          s5 = peg$currPos;
          peg$silentFails++;
          if (input.substr(peg$currPos, 2) === peg$c213) {
            s6 = peg$c213;
            peg$currPos += 2;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$e250); }
          }
          peg$silentFails--;
          if (s6 === peg$FAILED) {
            s5 = undefined;
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
          if (s5 !== peg$FAILED) {
            if (input.length > peg$currPos) {
              s6 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$e251); }
            }
            if (s6 !== peg$FAILED) {
              peg$savedPos = s4;
              s4 = peg$f75(s6);
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        }
        if (input.substr(peg$currPos, 2) === peg$c213) {
          s4 = peg$c213;
          peg$currPos += 2;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e250); }
        }
        if (s4 !== peg$FAILED) {
          s2 = [s2, s3, s4];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s0 = input.substring(s0, peg$currPos);
      } else {
        s0 = s1;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsewhitespace() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 303;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = [];
      if (peg$r12.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e252); }
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          if (peg$r12.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$e252); }
          }
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s0 = input.substring(s0, peg$currPos);
      } else {
        s0 = s1;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseterminal() {
      var s0, s1, s2;

      var key = peg$currPos * 305 + 304;
      var cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      peg$silentFails++;
      if (peg$r1.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e209); }
      }
      peg$silentFails--;
      if (s2 === peg$FAILED) {
        s1 = undefined;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f76(s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }


      const OPEN_CURLY = String.fromCharCode(123);

      const makeScope = (name, parent) => ({
        name,
        parent,
        bindings: {},
        types: {},
        functions: {},
      });
      const pushScope = scope => {
        // console.log('pushing scope at ',text());
        scopes.push(scope);
        return scope;
      };
      const popScope = scope => {
        // console.log('popping scope at ',text());
        if(!scope.parent) {
          throw new Error('popped bad scope', scope, 'at', text());
        }
        return scope.parent;
      };

      const warn = (...args) => !options.quiet && console.warn(...args);

      // Types (aka struct) scope
      const addTypes = (scope, ...types) => {
        types.forEach(([identifier, type]) => {
          scope.types[identifier] = {
            references: [type]
          };
        });
      };
      const addTypeReference = (scope, name, reference) => {
        scope.types[name].references.push(reference);
      };
      const findTypeScope = (scope, typeName) => {
        if(!scope) {
          return null;
        }
        if(typeName in scope.types) {
          return scope;
        }
        return findTypeScope(scope.parent, typeName);
      };
      const isDeclaredType = (scope, typeName) => findTypeScope(scope, typeName) !== null;

      // Bindings (aka variables, parameters) scope
      const createBindings = (scope, ...bindings) => {
        bindings.forEach(([identifier, binding]) => {
          const newBinding = scope.bindings[identifier] || { references: [] };
          newBinding.initializer = binding;
          newBinding.references.unshift(binding);
          scope.bindings[identifier] = newBinding;
        });
      };
      const addBindingReference = (scope, name, reference) => {
        // In the case of "float a = 1, b = a;" we parse the final "a" before the
        // parent declarator list is parsed. So we might need to add the final "a"
        // to the scope first.
        const foundScope = findBindingScope(scope, name);
        if(foundScope) {
          foundScope.bindings[name].references.push(reference);
        } else {
          createBindings(scope, [name, reference]);
        }
      };
      const findBindingScope = (scope, name) => {
        if(!scope) {
          return null;
        }
        if(name in scope.bindings) {
          return scope;
        }
        return findBindingScope(scope.parent, name);
      };

      // Function scope
      const createFunction = (scope, name, declaration) => {
        scope.functions[name] = { references: [declaration] };
      };
      const addFunctionReference = (scope, name, reference) => {
        const global = findGlobalScope(scope);
        if(name in global.functions) {
          global.functions[name].references.push(reference);
        } else {
          createFunction(scope, name, reference);
        }
      };
      const findGlobalScope = scope => scope.parent ? findGlobalScope(scope.parent) : scope;
      const isDeclaredFunction = (scope, fnName) => fnName in findGlobalScope(scope).functions;

      let scopes = [makeScope('global')];
      let scope = scopes[0];

      const node = (type, attrs) => ({
        type,
        ...attrs
      });

      // Filter out "empty" elements from an array
      const xnil = (...args) => args.flat().filter(e =>
        e !== undefined && e !== null && e !== '' && e.length !== 0
      );

      // Given an array of nodes with potential null empty values, convert to text.
      // Kind of like $(rule) but filters out empty rules
      const toText = (...args) => xnil(args).join('');

      const ifOnly = arr => arr.length > 1 ? arr : arr[0];

      // Remove empty elements and return value if only 1 element remains
      const collapse = (...args) => ifOnly(xnil(args));

      // Create a left associative tree of nodes
    	const leftAssociate = (...nodes) =>
        nodes.flat().reduce((current, [operator, expr]) => ({
          type: "binary",
          operator: operator,
          left: current,
          right: expr
        }));

      // No longer needed?
      // const without = (obj, ...keys) => Object.entries(obj).reduce((acc, [key, value]) => ({
      //   ...acc,
      //   ...(!keys.includes(key) && { [key]: value })
      // }), {});

      // Group the statements in a switch statement into cases / default arrays
      const groupCases = (statements) => statements.reduce((cases, stmt) => {
        if(stmt.type === 'case_label') {
          return [
            ...cases,
            node(
              'switch_case',
              {
                statements: [],
                case: stmt.case,
                test: stmt.test,
                colon: stmt.colon,
              }
            )
          ];
        } else if(stmt.type === 'default_label') {
          return [
            ...cases,
            node(
              'default_case',
              {
                statements: [],
                default: stmt.default,
                colon: stmt.colon,
              }
            )
          ];
        // It would be nice to encode this in the grammar instead of a manual check
        } else if(!cases.length) {
          throw new Error('A switch statement body must start with a case or default label');
        } else {
          const tail = cases.slice(-1)[0];
          return [...cases.slice(0, -1), {
            ...tail,
            statements: [
              ...tail.statements,
              stmt
            ]
          }];
        }
      }, []);


      // From https://www.khronos.org/registry/OpenGL-Refpages/gl4/index.php
      // excluding gl_ prefixed builtins, which don't appear to be functions
      const builtIns = new Set([
        'abs',
        'acos',
        'acosh',
        'all',
        'any',
        'asin',
        'asinh',
        'atan',
        'atanh',
        'atomicAdd',
        'atomicAnd',
        'atomicCompSwap',
        'atomicCounter',
        'atomicCounterDecrement',
        'atomicCounterIncrement',
        'atomicExchange',
        'atomicMax',
        'atomicMin',
        'atomicOr',
        'atomicXor',
        'barrier',
        'bitCount',
        'bitfieldExtract',
        'bitfieldInsert',
        'bitfieldReverse',
        'ceil',
        'clamp',
        'cos',
        'cosh',
        'cross',
        'degrees',
        'determinant',
        'dFdx',
        'dFdxCoarse',
        'dFdxFine',
        'dFdy',
        'dFdyCoarse',
        'dFdyFine',
        'distance',
        'dot',
        'EmitStreamVertex',
        'EmitVertex',
        'EndPrimitive',
        'EndStreamPrimitive',
        'equal',
        'exp',
        'exp2',
        'faceforward',
        'findLSB',
        'findMSB',
        'floatBitsToInt',
        'floatBitsToUint',
        'floor',
        'fma',
        'fract',
        'frexp',
        'fwidth',
        'fwidthCoarse',
        'fwidthFine',
        'greaterThan',
        'greaterThanEqual',
        'groupMemoryBarrier',
        'imageAtomicAdd',
        'imageAtomicAnd',
        'imageAtomicCompSwap',
        'imageAtomicExchange',
        'imageAtomicMax',
        'imageAtomicMin',
        'imageAtomicOr',
        'imageAtomicXor',
        'imageLoad',
        'imageSamples',
        'imageSize',
        'imageStore',
        'imulExtended',
        'intBitsToFloat',
        'interpolateAtCentroid',
        'interpolateAtOffset',
        'interpolateAtSample',
        'inverse',
        'inversesqrt',
        'isinf',
        'isnan',
        'ldexp',
        'length',
        'lessThan',
        'lessThanEqual',
        'log',
        'log2',
        'matrixCompMult',
        'max',
        'memoryBarrier',
        'memoryBarrierAtomicCounter',
        'memoryBarrierBuffer',
        'memoryBarrierImage',
        'memoryBarrierShared',
        'min',
        'mix',
        'mod',
        'modf',
        'noise',
        'noise1',
        'noise2',
        'noise3',
        'noise4',
        'normalize',
        'not',
        'notEqual',
        'outerProduct',
        'packDouble2x32',
        'packHalf2x16',
        'packSnorm2x16',
        'packSnorm4x8',
        'packUnorm',
        'packUnorm2x16',
        'packUnorm4x8',
        'pow',
        'radians',
        'reflect',
        'refract',
        'round',
        'roundEven',
        'sign',
        'sin',
        'sinh',
        'smoothstep',
        'sqrt',
        'step',
        'tan',
        'tanh',
        'texelFetch',
        'texelFetchOffset',
        'texture',
        'textureGather',
        'textureGatherOffset',
        'textureGatherOffsets',
        'textureGrad',
        'textureGradOffset',
        'textureLod',
        'textureLodOffset',
        'textureOffset',
        'textureProj',
        'textureProjGrad',
        'textureProjGradOffset',
        'textureProjLod',
        'textureProjLodOffset',
        'textureProjOffset',
        'textureQueryLevels',
        'textureQueryLod',
        'textureSamples',
        'textureSize',
        'transpose',
        'trunc',
        'uaddCarry',
        'uintBitsToFloat',
        'umulExtended',
        'unpackDouble2x32',
        'unpackHalf2x16',
        'unpackSnorm2x16',
        'unpackSnorm4x8',
        'unpackUnorm',
        'unpackUnorm2x16',
        'unpackUnorm4x8',
        'usubBorrow',
        // GLSL ES 1.00
        'texture2D', 'textureCube'
      ]);


    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail(peg$endExpectation());
      }

      throw peg$buildStructuredError(
        peg$maxFailExpected,
        peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
        peg$maxFailPos < input.length
          ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
          : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
      );
    }
  }

  var parser = {
    SyntaxError: peg$SyntaxError,
    parse: peg$parse
  };

  var parser$1 = /*@__PURE__*/getDefaultExportFromCjs(parser);

  "use strict";
  var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
      return (mod && mod.__esModule) ? mod : { "default": mod };
  };
  var generator_1 = __importDefault(generator);
  var parser_1 = __importDefault(parser);
  var dist = { generate: generator_1.default, parser: parser_1.default };

  var index = /*@__PURE__*/getDefaultExportFromCjs(dist);

  // Format is Key (Javascript function name), Value: GLSL Source
  // SDFs from
  // https://iquilezles.org/www/articles/distfunctions/distfunctions.htm
  // Make sure to destruct the name in sculpt.js (search for DESTRUCT SDFs)

  var sdfs = {
    boxFrame: "float sdBoxFrame( vec3 p, vec3 b, float e )\n{\n    p = abs(p  )-b;\nvec3 q = abs(p+e)-e;\nreturn min(min(\n    length(max(vec3(p.x,q.y,q.z),0.0))+min(max(p.x,max(q.y,q.z)),0.0),\n    length(max(vec3(q.x,p.y,q.z),0.0))+min(max(q.x,max(p.y,q.z)),0.0)),\n    length(max(vec3(q.x,q.y,p.z),0.0))+min(max(q.x,max(q.y,p.z)),0.0));\n}",
    link: "float sdLink( vec3 p, float le, float r1, float r2 )\n{\n    vec3 q = vec3( p.x, max(abs(p.y)-le,0.0), p.z );\n    return length(vec2(length(q.xy)-r1,q.z)) - r2;\n}",
    cappedTorus: "\nfloat sdCappedTorus(in vec3 p, in vec2 sc, in float ra, in float rb)\n{\n    p.x = abs(p.x);\n    float k = (sc.y*p.x>sc.x*p.y) ? dot(p.xy,sc) : length(p.xy);\n    return sqrt( dot(p,p) + ra*ra - 2.0*ra*k ) - rb;\n}\n"
  };

  var escodegen$1 = {};

  var estraverse$1 = {};

  /*
    Copyright (C) 2012-2013 Yusuke Suzuki <utatane.tea@gmail.com>
    Copyright (C) 2012 Ariya Hidayat <ariya.hidayat@gmail.com>

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions are met:

      * Redistributions of source code must retain the above copyright
        notice, this list of conditions and the following disclaimer.
      * Redistributions in binary form must reproduce the above copyright
        notice, this list of conditions and the following disclaimer in the
        documentation and/or other materials provided with the distribution.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
    AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
    ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
    DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
    (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
    LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
    ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
    (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
    THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  */

  (function (exports) {
  	/*jslint vars:false, bitwise:true*/
  	/*jshint indent:4*/
  	/*global exports:true*/
  	(function clone(exports) {
  	    'use strict';

  	    var Syntax,
  	        VisitorOption,
  	        VisitorKeys,
  	        BREAK,
  	        SKIP,
  	        REMOVE;

  	    function deepCopy(obj) {
  	        var ret = {}, key, val;
  	        for (key in obj) {
  	            if (obj.hasOwnProperty(key)) {
  	                val = obj[key];
  	                if (typeof val === 'object' && val !== null) {
  	                    ret[key] = deepCopy(val);
  	                } else {
  	                    ret[key] = val;
  	                }
  	            }
  	        }
  	        return ret;
  	    }

  	    // based on LLVM libc++ upper_bound / lower_bound
  	    // MIT License

  	    function upperBound(array, func) {
  	        var diff, len, i, current;

  	        len = array.length;
  	        i = 0;

  	        while (len) {
  	            diff = len >>> 1;
  	            current = i + diff;
  	            if (func(array[current])) {
  	                len = diff;
  	            } else {
  	                i = current + 1;
  	                len -= diff + 1;
  	            }
  	        }
  	        return i;
  	    }

  	    Syntax = {
  	        AssignmentExpression: 'AssignmentExpression',
  	        AssignmentPattern: 'AssignmentPattern',
  	        ArrayExpression: 'ArrayExpression',
  	        ArrayPattern: 'ArrayPattern',
  	        ArrowFunctionExpression: 'ArrowFunctionExpression',
  	        AwaitExpression: 'AwaitExpression', // CAUTION: It's deferred to ES7.
  	        BlockStatement: 'BlockStatement',
  	        BinaryExpression: 'BinaryExpression',
  	        BreakStatement: 'BreakStatement',
  	        CallExpression: 'CallExpression',
  	        CatchClause: 'CatchClause',
  	        ChainExpression: 'ChainExpression',
  	        ClassBody: 'ClassBody',
  	        ClassDeclaration: 'ClassDeclaration',
  	        ClassExpression: 'ClassExpression',
  	        ComprehensionBlock: 'ComprehensionBlock',  // CAUTION: It's deferred to ES7.
  	        ComprehensionExpression: 'ComprehensionExpression',  // CAUTION: It's deferred to ES7.
  	        ConditionalExpression: 'ConditionalExpression',
  	        ContinueStatement: 'ContinueStatement',
  	        DebuggerStatement: 'DebuggerStatement',
  	        DirectiveStatement: 'DirectiveStatement',
  	        DoWhileStatement: 'DoWhileStatement',
  	        EmptyStatement: 'EmptyStatement',
  	        ExportAllDeclaration: 'ExportAllDeclaration',
  	        ExportDefaultDeclaration: 'ExportDefaultDeclaration',
  	        ExportNamedDeclaration: 'ExportNamedDeclaration',
  	        ExportSpecifier: 'ExportSpecifier',
  	        ExpressionStatement: 'ExpressionStatement',
  	        ForStatement: 'ForStatement',
  	        ForInStatement: 'ForInStatement',
  	        ForOfStatement: 'ForOfStatement',
  	        FunctionDeclaration: 'FunctionDeclaration',
  	        FunctionExpression: 'FunctionExpression',
  	        GeneratorExpression: 'GeneratorExpression',  // CAUTION: It's deferred to ES7.
  	        Identifier: 'Identifier',
  	        IfStatement: 'IfStatement',
  	        ImportExpression: 'ImportExpression',
  	        ImportDeclaration: 'ImportDeclaration',
  	        ImportDefaultSpecifier: 'ImportDefaultSpecifier',
  	        ImportNamespaceSpecifier: 'ImportNamespaceSpecifier',
  	        ImportSpecifier: 'ImportSpecifier',
  	        Literal: 'Literal',
  	        LabeledStatement: 'LabeledStatement',
  	        LogicalExpression: 'LogicalExpression',
  	        MemberExpression: 'MemberExpression',
  	        MetaProperty: 'MetaProperty',
  	        MethodDefinition: 'MethodDefinition',
  	        ModuleSpecifier: 'ModuleSpecifier',
  	        NewExpression: 'NewExpression',
  	        ObjectExpression: 'ObjectExpression',
  	        ObjectPattern: 'ObjectPattern',
  	        PrivateIdentifier: 'PrivateIdentifier',
  	        Program: 'Program',
  	        Property: 'Property',
  	        PropertyDefinition: 'PropertyDefinition',
  	        RestElement: 'RestElement',
  	        ReturnStatement: 'ReturnStatement',
  	        SequenceExpression: 'SequenceExpression',
  	        SpreadElement: 'SpreadElement',
  	        Super: 'Super',
  	        SwitchStatement: 'SwitchStatement',
  	        SwitchCase: 'SwitchCase',
  	        TaggedTemplateExpression: 'TaggedTemplateExpression',
  	        TemplateElement: 'TemplateElement',
  	        TemplateLiteral: 'TemplateLiteral',
  	        ThisExpression: 'ThisExpression',
  	        ThrowStatement: 'ThrowStatement',
  	        TryStatement: 'TryStatement',
  	        UnaryExpression: 'UnaryExpression',
  	        UpdateExpression: 'UpdateExpression',
  	        VariableDeclaration: 'VariableDeclaration',
  	        VariableDeclarator: 'VariableDeclarator',
  	        WhileStatement: 'WhileStatement',
  	        WithStatement: 'WithStatement',
  	        YieldExpression: 'YieldExpression'
  	    };

  	    VisitorKeys = {
  	        AssignmentExpression: ['left', 'right'],
  	        AssignmentPattern: ['left', 'right'],
  	        ArrayExpression: ['elements'],
  	        ArrayPattern: ['elements'],
  	        ArrowFunctionExpression: ['params', 'body'],
  	        AwaitExpression: ['argument'], // CAUTION: It's deferred to ES7.
  	        BlockStatement: ['body'],
  	        BinaryExpression: ['left', 'right'],
  	        BreakStatement: ['label'],
  	        CallExpression: ['callee', 'arguments'],
  	        CatchClause: ['param', 'body'],
  	        ChainExpression: ['expression'],
  	        ClassBody: ['body'],
  	        ClassDeclaration: ['id', 'superClass', 'body'],
  	        ClassExpression: ['id', 'superClass', 'body'],
  	        ComprehensionBlock: ['left', 'right'],  // CAUTION: It's deferred to ES7.
  	        ComprehensionExpression: ['blocks', 'filter', 'body'],  // CAUTION: It's deferred to ES7.
  	        ConditionalExpression: ['test', 'consequent', 'alternate'],
  	        ContinueStatement: ['label'],
  	        DebuggerStatement: [],
  	        DirectiveStatement: [],
  	        DoWhileStatement: ['body', 'test'],
  	        EmptyStatement: [],
  	        ExportAllDeclaration: ['source'],
  	        ExportDefaultDeclaration: ['declaration'],
  	        ExportNamedDeclaration: ['declaration', 'specifiers', 'source'],
  	        ExportSpecifier: ['exported', 'local'],
  	        ExpressionStatement: ['expression'],
  	        ForStatement: ['init', 'test', 'update', 'body'],
  	        ForInStatement: ['left', 'right', 'body'],
  	        ForOfStatement: ['left', 'right', 'body'],
  	        FunctionDeclaration: ['id', 'params', 'body'],
  	        FunctionExpression: ['id', 'params', 'body'],
  	        GeneratorExpression: ['blocks', 'filter', 'body'],  // CAUTION: It's deferred to ES7.
  	        Identifier: [],
  	        IfStatement: ['test', 'consequent', 'alternate'],
  	        ImportExpression: ['source'],
  	        ImportDeclaration: ['specifiers', 'source'],
  	        ImportDefaultSpecifier: ['local'],
  	        ImportNamespaceSpecifier: ['local'],
  	        ImportSpecifier: ['imported', 'local'],
  	        Literal: [],
  	        LabeledStatement: ['label', 'body'],
  	        LogicalExpression: ['left', 'right'],
  	        MemberExpression: ['object', 'property'],
  	        MetaProperty: ['meta', 'property'],
  	        MethodDefinition: ['key', 'value'],
  	        ModuleSpecifier: [],
  	        NewExpression: ['callee', 'arguments'],
  	        ObjectExpression: ['properties'],
  	        ObjectPattern: ['properties'],
  	        PrivateIdentifier: [],
  	        Program: ['body'],
  	        Property: ['key', 'value'],
  	        PropertyDefinition: ['key', 'value'],
  	        RestElement: [ 'argument' ],
  	        ReturnStatement: ['argument'],
  	        SequenceExpression: ['expressions'],
  	        SpreadElement: ['argument'],
  	        Super: [],
  	        SwitchStatement: ['discriminant', 'cases'],
  	        SwitchCase: ['test', 'consequent'],
  	        TaggedTemplateExpression: ['tag', 'quasi'],
  	        TemplateElement: [],
  	        TemplateLiteral: ['quasis', 'expressions'],
  	        ThisExpression: [],
  	        ThrowStatement: ['argument'],
  	        TryStatement: ['block', 'handler', 'finalizer'],
  	        UnaryExpression: ['argument'],
  	        UpdateExpression: ['argument'],
  	        VariableDeclaration: ['declarations'],
  	        VariableDeclarator: ['id', 'init'],
  	        WhileStatement: ['test', 'body'],
  	        WithStatement: ['object', 'body'],
  	        YieldExpression: ['argument']
  	    };

  	    // unique id
  	    BREAK = {};
  	    SKIP = {};
  	    REMOVE = {};

  	    VisitorOption = {
  	        Break: BREAK,
  	        Skip: SKIP,
  	        Remove: REMOVE
  	    };

  	    function Reference(parent, key) {
  	        this.parent = parent;
  	        this.key = key;
  	    }

  	    Reference.prototype.replace = function replace(node) {
  	        this.parent[this.key] = node;
  	    };

  	    Reference.prototype.remove = function remove() {
  	        if (Array.isArray(this.parent)) {
  	            this.parent.splice(this.key, 1);
  	            return true;
  	        } else {
  	            this.replace(null);
  	            return false;
  	        }
  	    };

  	    function Element(node, path, wrap, ref) {
  	        this.node = node;
  	        this.path = path;
  	        this.wrap = wrap;
  	        this.ref = ref;
  	    }

  	    function Controller() { }

  	    // API:
  	    // return property path array from root to current node
  	    Controller.prototype.path = function path() {
  	        var i, iz, j, jz, result, element;

  	        function addToPath(result, path) {
  	            if (Array.isArray(path)) {
  	                for (j = 0, jz = path.length; j < jz; ++j) {
  	                    result.push(path[j]);
  	                }
  	            } else {
  	                result.push(path);
  	            }
  	        }

  	        // root node
  	        if (!this.__current.path) {
  	            return null;
  	        }

  	        // first node is sentinel, second node is root element
  	        result = [];
  	        for (i = 2, iz = this.__leavelist.length; i < iz; ++i) {
  	            element = this.__leavelist[i];
  	            addToPath(result, element.path);
  	        }
  	        addToPath(result, this.__current.path);
  	        return result;
  	    };

  	    // API:
  	    // return type of current node
  	    Controller.prototype.type = function () {
  	        var node = this.current();
  	        return node.type || this.__current.wrap;
  	    };

  	    // API:
  	    // return array of parent elements
  	    Controller.prototype.parents = function parents() {
  	        var i, iz, result;

  	        // first node is sentinel
  	        result = [];
  	        for (i = 1, iz = this.__leavelist.length; i < iz; ++i) {
  	            result.push(this.__leavelist[i].node);
  	        }

  	        return result;
  	    };

  	    // API:
  	    // return current node
  	    Controller.prototype.current = function current() {
  	        return this.__current.node;
  	    };

  	    Controller.prototype.__execute = function __execute(callback, element) {
  	        var previous, result;

  	        result = undefined;

  	        previous  = this.__current;
  	        this.__current = element;
  	        this.__state = null;
  	        if (callback) {
  	            result = callback.call(this, element.node, this.__leavelist[this.__leavelist.length - 1].node);
  	        }
  	        this.__current = previous;

  	        return result;
  	    };

  	    // API:
  	    // notify control skip / break
  	    Controller.prototype.notify = function notify(flag) {
  	        this.__state = flag;
  	    };

  	    // API:
  	    // skip child nodes of current node
  	    Controller.prototype.skip = function () {
  	        this.notify(SKIP);
  	    };

  	    // API:
  	    // break traversals
  	    Controller.prototype['break'] = function () {
  	        this.notify(BREAK);
  	    };

  	    // API:
  	    // remove node
  	    Controller.prototype.remove = function () {
  	        this.notify(REMOVE);
  	    };

  	    Controller.prototype.__initialize = function(root, visitor) {
  	        this.visitor = visitor;
  	        this.root = root;
  	        this.__worklist = [];
  	        this.__leavelist = [];
  	        this.__current = null;
  	        this.__state = null;
  	        this.__fallback = null;
  	        if (visitor.fallback === 'iteration') {
  	            this.__fallback = Object.keys;
  	        } else if (typeof visitor.fallback === 'function') {
  	            this.__fallback = visitor.fallback;
  	        }

  	        this.__keys = VisitorKeys;
  	        if (visitor.keys) {
  	            this.__keys = Object.assign(Object.create(this.__keys), visitor.keys);
  	        }
  	    };

  	    function isNode(node) {
  	        if (node == null) {
  	            return false;
  	        }
  	        return typeof node === 'object' && typeof node.type === 'string';
  	    }

  	    function isProperty(nodeType, key) {
  	        return (nodeType === Syntax.ObjectExpression || nodeType === Syntax.ObjectPattern) && 'properties' === key;
  	    }
  	  
  	    function candidateExistsInLeaveList(leavelist, candidate) {
  	        for (var i = leavelist.length - 1; i >= 0; --i) {
  	            if (leavelist[i].node === candidate) {
  	                return true;
  	            }
  	        }
  	        return false;
  	    }

  	    Controller.prototype.traverse = function traverse(root, visitor) {
  	        var worklist,
  	            leavelist,
  	            element,
  	            node,
  	            nodeType,
  	            ret,
  	            key,
  	            current,
  	            current2,
  	            candidates,
  	            candidate,
  	            sentinel;

  	        this.__initialize(root, visitor);

  	        sentinel = {};

  	        // reference
  	        worklist = this.__worklist;
  	        leavelist = this.__leavelist;

  	        // initialize
  	        worklist.push(new Element(root, null, null, null));
  	        leavelist.push(new Element(null, null, null, null));

  	        while (worklist.length) {
  	            element = worklist.pop();

  	            if (element === sentinel) {
  	                element = leavelist.pop();

  	                ret = this.__execute(visitor.leave, element);

  	                if (this.__state === BREAK || ret === BREAK) {
  	                    return;
  	                }
  	                continue;
  	            }

  	            if (element.node) {

  	                ret = this.__execute(visitor.enter, element);

  	                if (this.__state === BREAK || ret === BREAK) {
  	                    return;
  	                }

  	                worklist.push(sentinel);
  	                leavelist.push(element);

  	                if (this.__state === SKIP || ret === SKIP) {
  	                    continue;
  	                }

  	                node = element.node;
  	                nodeType = node.type || element.wrap;
  	                candidates = this.__keys[nodeType];
  	                if (!candidates) {
  	                    if (this.__fallback) {
  	                        candidates = this.__fallback(node);
  	                    } else {
  	                        throw new Error('Unknown node type ' + nodeType + '.');
  	                    }
  	                }

  	                current = candidates.length;
  	                while ((current -= 1) >= 0) {
  	                    key = candidates[current];
  	                    candidate = node[key];
  	                    if (!candidate) {
  	                        continue;
  	                    }

  	                    if (Array.isArray(candidate)) {
  	                        current2 = candidate.length;
  	                        while ((current2 -= 1) >= 0) {
  	                            if (!candidate[current2]) {
  	                                continue;
  	                            }

  	                            if (candidateExistsInLeaveList(leavelist, candidate[current2])) {
  	                              continue;
  	                            }

  	                            if (isProperty(nodeType, candidates[current])) {
  	                                element = new Element(candidate[current2], [key, current2], 'Property', null);
  	                            } else if (isNode(candidate[current2])) {
  	                                element = new Element(candidate[current2], [key, current2], null, null);
  	                            } else {
  	                                continue;
  	                            }
  	                            worklist.push(element);
  	                        }
  	                    } else if (isNode(candidate)) {
  	                        if (candidateExistsInLeaveList(leavelist, candidate)) {
  	                          continue;
  	                        }

  	                        worklist.push(new Element(candidate, key, null, null));
  	                    }
  	                }
  	            }
  	        }
  	    };

  	    Controller.prototype.replace = function replace(root, visitor) {
  	        var worklist,
  	            leavelist,
  	            node,
  	            nodeType,
  	            target,
  	            element,
  	            current,
  	            current2,
  	            candidates,
  	            candidate,
  	            sentinel,
  	            outer,
  	            key;

  	        function removeElem(element) {
  	            var i,
  	                key,
  	                nextElem,
  	                parent;

  	            if (element.ref.remove()) {
  	                // When the reference is an element of an array.
  	                key = element.ref.key;
  	                parent = element.ref.parent;

  	                // If removed from array, then decrease following items' keys.
  	                i = worklist.length;
  	                while (i--) {
  	                    nextElem = worklist[i];
  	                    if (nextElem.ref && nextElem.ref.parent === parent) {
  	                        if  (nextElem.ref.key < key) {
  	                            break;
  	                        }
  	                        --nextElem.ref.key;
  	                    }
  	                }
  	            }
  	        }

  	        this.__initialize(root, visitor);

  	        sentinel = {};

  	        // reference
  	        worklist = this.__worklist;
  	        leavelist = this.__leavelist;

  	        // initialize
  	        outer = {
  	            root: root
  	        };
  	        element = new Element(root, null, null, new Reference(outer, 'root'));
  	        worklist.push(element);
  	        leavelist.push(element);

  	        while (worklist.length) {
  	            element = worklist.pop();

  	            if (element === sentinel) {
  	                element = leavelist.pop();

  	                target = this.__execute(visitor.leave, element);

  	                // node may be replaced with null,
  	                // so distinguish between undefined and null in this place
  	                if (target !== undefined && target !== BREAK && target !== SKIP && target !== REMOVE) {
  	                    // replace
  	                    element.ref.replace(target);
  	                }

  	                if (this.__state === REMOVE || target === REMOVE) {
  	                    removeElem(element);
  	                }

  	                if (this.__state === BREAK || target === BREAK) {
  	                    return outer.root;
  	                }
  	                continue;
  	            }

  	            target = this.__execute(visitor.enter, element);

  	            // node may be replaced with null,
  	            // so distinguish between undefined and null in this place
  	            if (target !== undefined && target !== BREAK && target !== SKIP && target !== REMOVE) {
  	                // replace
  	                element.ref.replace(target);
  	                element.node = target;
  	            }

  	            if (this.__state === REMOVE || target === REMOVE) {
  	                removeElem(element);
  	                element.node = null;
  	            }

  	            if (this.__state === BREAK || target === BREAK) {
  	                return outer.root;
  	            }

  	            // node may be null
  	            node = element.node;
  	            if (!node) {
  	                continue;
  	            }

  	            worklist.push(sentinel);
  	            leavelist.push(element);

  	            if (this.__state === SKIP || target === SKIP) {
  	                continue;
  	            }

  	            nodeType = node.type || element.wrap;
  	            candidates = this.__keys[nodeType];
  	            if (!candidates) {
  	                if (this.__fallback) {
  	                    candidates = this.__fallback(node);
  	                } else {
  	                    throw new Error('Unknown node type ' + nodeType + '.');
  	                }
  	            }

  	            current = candidates.length;
  	            while ((current -= 1) >= 0) {
  	                key = candidates[current];
  	                candidate = node[key];
  	                if (!candidate) {
  	                    continue;
  	                }

  	                if (Array.isArray(candidate)) {
  	                    current2 = candidate.length;
  	                    while ((current2 -= 1) >= 0) {
  	                        if (!candidate[current2]) {
  	                            continue;
  	                        }
  	                        if (isProperty(nodeType, candidates[current])) {
  	                            element = new Element(candidate[current2], [key, current2], 'Property', new Reference(candidate, current2));
  	                        } else if (isNode(candidate[current2])) {
  	                            element = new Element(candidate[current2], [key, current2], null, new Reference(candidate, current2));
  	                        } else {
  	                            continue;
  	                        }
  	                        worklist.push(element);
  	                    }
  	                } else if (isNode(candidate)) {
  	                    worklist.push(new Element(candidate, key, null, new Reference(node, key)));
  	                }
  	            }
  	        }

  	        return outer.root;
  	    };

  	    function traverse(root, visitor) {
  	        var controller = new Controller();
  	        return controller.traverse(root, visitor);
  	    }

  	    function replace(root, visitor) {
  	        var controller = new Controller();
  	        return controller.replace(root, visitor);
  	    }

  	    function extendCommentRange(comment, tokens) {
  	        var target;

  	        target = upperBound(tokens, function search(token) {
  	            return token.range[0] > comment.range[0];
  	        });

  	        comment.extendedRange = [comment.range[0], comment.range[1]];

  	        if (target !== tokens.length) {
  	            comment.extendedRange[1] = tokens[target].range[0];
  	        }

  	        target -= 1;
  	        if (target >= 0) {
  	            comment.extendedRange[0] = tokens[target].range[1];
  	        }

  	        return comment;
  	    }

  	    function attachComments(tree, providedComments, tokens) {
  	        // At first, we should calculate extended comment ranges.
  	        var comments = [], comment, len, i, cursor;

  	        if (!tree.range) {
  	            throw new Error('attachComments needs range information');
  	        }

  	        // tokens array is empty, we attach comments to tree as 'leadingComments'
  	        if (!tokens.length) {
  	            if (providedComments.length) {
  	                for (i = 0, len = providedComments.length; i < len; i += 1) {
  	                    comment = deepCopy(providedComments[i]);
  	                    comment.extendedRange = [0, tree.range[0]];
  	                    comments.push(comment);
  	                }
  	                tree.leadingComments = comments;
  	            }
  	            return tree;
  	        }

  	        for (i = 0, len = providedComments.length; i < len; i += 1) {
  	            comments.push(extendCommentRange(deepCopy(providedComments[i]), tokens));
  	        }

  	        // This is based on John Freeman's implementation.
  	        cursor = 0;
  	        traverse(tree, {
  	            enter: function (node) {
  	                var comment;

  	                while (cursor < comments.length) {
  	                    comment = comments[cursor];
  	                    if (comment.extendedRange[1] > node.range[0]) {
  	                        break;
  	                    }

  	                    if (comment.extendedRange[1] === node.range[0]) {
  	                        if (!node.leadingComments) {
  	                            node.leadingComments = [];
  	                        }
  	                        node.leadingComments.push(comment);
  	                        comments.splice(cursor, 1);
  	                    } else {
  	                        cursor += 1;
  	                    }
  	                }

  	                // already out of owned node
  	                if (cursor === comments.length) {
  	                    return VisitorOption.Break;
  	                }

  	                if (comments[cursor].extendedRange[0] > node.range[1]) {
  	                    return VisitorOption.Skip;
  	                }
  	            }
  	        });

  	        cursor = 0;
  	        traverse(tree, {
  	            leave: function (node) {
  	                var comment;

  	                while (cursor < comments.length) {
  	                    comment = comments[cursor];
  	                   