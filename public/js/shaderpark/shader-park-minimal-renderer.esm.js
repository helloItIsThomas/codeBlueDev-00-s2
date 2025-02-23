/* Version: 0.2.8 - May 28, 2024 15:12:55 */
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

function baseUniforms() {
  return [{
    name: "time",
    type: "float",
    value: 0.0
  }, {
    name: "opacity",
    type: "float",
    value: 1.0
  }, {
    name: "_scale",
    type: "float",
    value: 1.0
  },
  // {name:'sculptureCenter', type: 'vec3', value: [0,0,0]},
  {
    name: "mouse",
    type: "vec3",
    value: [0.5, 0.5, 0.5]
  }, {
    name: "stepSize",
    type: "float",
    value: 0.85
  }, {
    name: "resolution",
    type: "vec2",
    value: [800, 600]
  }];
}
function uniformsToGLSL(uniforms) {
  var uniformsHeader = "";
  for (var i = 0; i < uniforms.length; i++) {
    var uniform = uniforms[i];
    uniformsHeader += "uniform ".concat(uniform.type, " ").concat(uniform.name, ";\n");
  }
  return uniformsHeader;
}

// import {
//     baseUniforms,
//     uniformsToGLSL,
// } from "../generators/sculpt.js";

// import {
//     generatedGLSLToMinimalRenderer
// } from "./minimalRenderer";

console.log('using shader-park-core version: 0.2.8');
function glslToMinimalRenderer(canvas, source, updateUniforms) {
  var fullFrag = minimalHeader + usePBRHeader + useHemisphereLight + uniformsToGLSL(baseUniforms()) + "const float STEP_SIZE_CONSTANT = 0.9;\n" + "const int MAX_ITERATIONS = 300;\n" + "#define MAX_REFLECTIONS 0 \n" + sculptureStarterCode + source + glslFragFooter;
  return fragToMinimalRenderer(canvas, fullFrag, updateUniforms);
}
function fragToMinimalRenderer(canvas, fullFrag, updateUniforms) {
  // if no update function is provided assume no-op
  if (updateUniforms === undefined) {
    updateUniforms = function updateUniforms() {
      return {};
    };
  }
  function resizeCanvas() {
    var devicePixelRatio = window.devicePixelRatio || 1;
    // change this so canvas doesn't have to fill entire window
    var width = window.innerWidth * devicePixelRatio;
    var height = window.innerHeight * devicePixelRatio;
    if (canvas.width != width || canvas.height != height) {
      canvas.width = width;
      canvas.height = height;
    }
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);
  var gl = canvas.getContext("webgl2");
  // Learn more: https://github.com/mrdoob/three.js/pull/21358
  var vertices = [-1.0, -1.0, 0.0, 3.0, -1.0, 0.0, -1.0, 3.0, 0.0];
  var indices = [0, 1, 2];
  // const vertices = [
  //   -1.0, 1.0, 0.0, -1.0, -1.0, 0.0, 1.0, -1.0, 0.0, 1.0, 1.0, 0.0,
  // ];
  // const indices = [3, 2, 1, 3, 1, 0];
  var vertex_buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  var Index_Buffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Index_Buffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
  var vertShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertShader, minimalVertexSource);
  gl.compileShader(vertShader);
  var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragShader, fullFrag);
  gl.compileShader(fragShader);
  var logShaderComp = function logShaderComp(shader) {
    var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    console.log("Shader compiled successfully: " + compiled);
    var compilationLog = gl.getShaderInfoLog(shader);
    if (!compiled) console.error("Shader compiler log: " + compilationLog);
  };
  logShaderComp(vertShader);
  logShaderComp(fragShader);
  var shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertShader);
  gl.attachShader(shaderProgram, fragShader);
  gl.linkProgram(shaderProgram);

  // Check if it linked.
  var success = gl.getProgramParameter(shaderProgram, gl.LINK_STATUS);
  if (!success) {
    // something went wrong with the link; get the error
    console.error("program failed to link:" + gl.getProgramInfoLog(shaderProgram));
  }
  gl.useProgram(shaderProgram);
  gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Index_Buffer);
  var coord = gl.getAttribLocation(shaderProgram, "coordinates");
  gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(coord);
  gl.clearColor(1.0, 1.0, 1.0, 0.9);
  gl.enable(gl.DEPTH_TEST);
  var oTime = Date.now();
  var loc = gl.getUniformLocation(shaderProgram, "time");
  var _scale = gl.getUniformLocation(shaderProgram, "_scale");
  var resolution = gl.getUniformLocation(shaderProgram, "resolution");
  var opac = gl.getUniformLocation(shaderProgram, "opacity");
  var mouseloc = gl.getUniformLocation(shaderProgram, "mouse");
  gl.uniform1f(opac, 1.0);
  gl.uniform1f(_scale, 1.0);
  var userUniformUpdateFuncs = assignUniforms(updateUniforms);
  canvas.addEventListener("pointermove", function (e) {
    var devicePixelRatio = window.devicePixelRatio || 1;
    var canvasX = (e.pageX - canvas.offsetLeft) * devicePixelRatio;
    var canvasY = (e.pageY - canvas.offsetTop) * devicePixelRatio;
    gl.uniform3f(mouseloc, 2.0 * canvasX / canvas.width - 1.0, 2.0 * (1.0 - canvasY / canvas.height) - 1.0, -0.5);
  }, false);
  function updateDraw() {
    if (typeof updateUniforms === "function") {
      callUniformFuncs(userUniformUpdateFuncs, updateUniforms());
    }
    gl.uniform1f(loc, (Date.now() - oTime) * 0.001);
    var devicePixelRatio = window.devicePixelRatio || 1;
    var wwidth = window.innerWidth * devicePixelRatio;
    var wheight = window.innerHeight * devicePixelRatio;
    gl.uniform2fv(resolution, [wwidth, wheight]);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
    window.requestAnimationFrame(updateDraw);
  }
  updateDraw();

  // loops through a dictionary and calls the function sotred in the value
  function callUniformFuncs(uniformFuncs, updatedUniforms) {
    if (_typeof(updatedUniforms) !== "object") {
      console.error("updateUniforms must return a dictionary of uniform names and values. Instead got: ", updateUniforms);
      return;
    }
    Object.entries(uniformFuncs).forEach(function (keys) {
      var _keys = _slicedToArray(keys, 2),
        key = _keys[0],
        uniformUpdateFunc = _keys[1];
      if (key in updatedUniforms) {
        uniformUpdateFunc(updatedUniforms[key]);
      }
    });
  }
  function assignUniforms(updateUniforms) {
    if (typeof updateUniforms !== "function") {
      console.error("updateUniforms must be a function that returns a dictionary of uniform names and values");
      return {};
    }
    var userUniformUpdateFuncs = {};
    var uniformsDict = updateUniforms();
    if (uniformsDict !== undefined && _typeof(uniformsDict) === "object") {
      Object.entries(uniformsDict).forEach(function (keys) {
        var _keys2 = _slicedToArray(keys, 2),
          key = _keys2[0],
          val = _keys2[1];
        var unifLocation = gl.getUniformLocation(shaderProgram, key);
        if (typeof val === "number") {
          userUniformUpdateFuncs[key] = function (unif) {
            return gl.uniform1f(unifLocation, unif);
          };
        } else if (Array.isArray(val)) {
          if (val.length === 1) {
            userUniformUpdateFuncs[key] = function (unif) {
              return gl.uniform1f(unifLocation, unif[0]);
            };
          } else if (val.length === 2) {
            userUniformUpdateFuncs[key] = function (unif) {
              return gl.uniform2iv(unifLocation, unif);
            };
          } else if (val.length === 3) {
            userUniformUpdateFuncs[key] = function (unif) {
              return gl.uniform3iv(unifLocation, unif);
            };
          } else if (val.length === 4) {
            userUniformUpdateFuncs[key] = function (unif) {
              return gl.uniform4iv(unifLocation, unif);
            };
          } else {
            console.error("Uniforms must be either a float or an array with length 1, 2, 3 or 4");
          }
        } else {
          console.error("Uniforms must be either a float or an array with length 1, 2, 3 or 4");
        }
      });
    }
    return userUniformUpdateFuncs;
  }
}

export { baseUniforms, glslToMinimalRenderer, uniformsToGLSL };
