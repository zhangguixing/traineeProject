
!
function(window, undefined) {
    function _isArray(a) {
        return a ? "[object Array]" === Object.prototype.toString.call(a) : !1
    }
    function _isFunction(a) {
        return a ? "[object Function]" === Object.prototype.toString.call(a) : !1
    }
    function _inArray(a, b) {
        for (var c = 0,
        d = b.length; d > c; c++) if (a === b[c]) return c;
        return - 1
    }
    function _each(a, b) {
        if (_isArray(a)) for (var c = 0,
        d = a.length; d > c && b.call(a[c], c, a[c]) !== !1; c++);
        else for (var e in a) if (a.hasOwnProperty(e) && b.call(a[e], e, a[e]) === !1) 
        	break
    }
    function _trim(a) {
        return a.replace(/(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g, "")
    }
    function _inString(a, b, c) {
        return c = c === undefined ? ",": c,
        (c + b + c).indexOf(c + a + c) >= 0
    }
    function _addUnit(a, b) {
        return b = b || "px",
        a && /^-?\d+(?:\.\d+)?$/.test(a) ? a + b: a
    }
    function _removeUnit(a) {
        var b;
        return a && (b = /(\d+)/.exec(a)) ? parseInt(b[1], 10) : 0
    }
    function _escape(a) {
        return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
    }
    function _unescape(a) {
        return a.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&amp;/g, "&")
    }
    function _toCamel(a) {
        var b = a.split("-");
        return a = "",
        _each(b,
        function(b, c) {
            a += b > 0 ? c.charAt(0).toUpperCase() + c.substr(1) : c
        }),
        a
    }
    function _toHex(a) {
        function b(a) {
            var b = parseInt(a, 10).toString(16).toUpperCase();
            return b.length > 1 ? b: "0" + b
        }
        return a.replace(/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/gi,
        function(a, c, d, e) {
            return "#" + b(c) + b(d) + b(e)
        })
    }
    function _toMap(a, b) {
        b = b === undefined ? ",": b;
        var c, d = {},
        e = _isArray(a) ? a: a.split(b);
        return _each(e,
        function(a, b) {
            if (c = /^(\d+)\.\.(\d+)$/.exec(b)) for (var e = parseInt(c[1], 10); e <= parseInt(c[2], 10); e++) d[e.toString()] = !0;
            else d[b] = !0
        }),
        d
    }
    function _toArray(a, b) {
        return Array.prototype.slice.call(a, b || 0)
    }
    function _undef(a, b) {
        return a === undefined ? b: a
    }
    function _invalidUrl(a) {
        return ! a || /[<>"]/.test(a)
    }
    function _addParam(a, b) {
        return a.indexOf("?") >= 0 ? a + "&" + b: a + "?" + b
    }
    function _extend(a, b, c) {
        c || (c = b, b = null);
        var d;
        if (b) {
            var e = function() {};
            e.prototype = b.prototype,
            d = new e,
            _each(c,
            function(a, b) {
                d[a] = b
            })
        } else d = c;
        d.constructor = a,
        a.prototype = d,
        a.parent = b ? b.prototype: null
    }
    function _json(text) {
        var match; (match = /\{[\s\S]*\}|\[[\s\S]*\]/.exec(text)) && (text = match[0]);
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        if (cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx,
        function(a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
        })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return eval("(" + text + ")");
        throw "JSON parse error"
    }
    function _getBasePath() {
        for (var a, b = document.getElementsByTagName("script"), c = 0, d = b.length; d > c; c++) if (a = b[c].src || "", /QingEditor[\w\-\.]*\.js/.test(a)) return a.substring(0, a.lastIndexOf("/") + 1);
        return ""
    }
    function _bindEvent(a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, _useCapture) : a.attachEvent && a.attachEvent("on" + b, c)
    }
    function _unbindEvent(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, _useCapture) : a.detachEvent && a.detachEvent("on" + b, c)
    }
    function KEvent(a, b) {
        this.init(a, b)
    }
    function _getId(a) {
        return a[_eventExpendo] || null
    }
    function _setId(a) {
        return a[_eventExpendo] = ++_eventId,
        _eventId
    }
    function _removeId(a) {
        try {
            delete a[_eventExpendo]
        } catch(b) {
            a.removeAttribute && a.removeAttribute(_eventExpendo)
        }
    }
    function _bind(a, b, c) {
        if (b.indexOf(",") >= 0) return void _each(b.split(","),
        function() {
            _bind(a, this, c)
        });
        var d = _getId(a);
        d || (d = _setId(a)),
        _eventData[d] === undefined && (_eventData[d] = {});
        var e = _eventData[d][b];
        e && e.length > 0 ? _unbindEvent(a, b, e[0]) : (_eventData[d][b] = [], _eventData[d].el = a),
        e = _eventData[d][b],
        0 === e.length && (e[0] = function(b) {
            var c = b ? new KEvent(a, b) : undefined;
            _each(e,
            function(b, d) {
                b > 0 && d && d.call(a, c)
            })
        }),
        _inArray(c, e) < 0 && e.push(c),
        _bindEvent(a, b, e[0])
    }
    function _unbind(a, b, c) {
        if (b && b.indexOf(",") >= 0) return void _each(b.split(","),
        function() {
            _unbind(a, this, c)
        });
        var d = _getId(a);
        if (d) {
            if (b === undefined) return void(d in _eventData && (_each(_eventData[d],
            function(b, c) {
                "el" != b && c.length > 0 && _unbindEvent(a, b, c[0])
            }), delete _eventData[d], _removeId(a)));
            if (_eventData[d]) {
                var e = _eventData[d][b];
                if (e && e.length > 0) {
                    c === undefined ? (_unbindEvent(a, b, e[0]), delete _eventData[d][b]) : (_each(e,
                    function(a, b) {
                        a > 0 && b === c && e.splice(a, 1)
                    }), 1 == e.length && (_unbindEvent(a, b, e[0]), delete _eventData[d][b]));
                    var f = 0;
                    _each(_eventData[d],
                    function() {
                        f++
                    }),
                    2 > f && (delete _eventData[d], _removeId(a))
                }
            }
        }
    }
    function _fire(a, b) {
        if (b.indexOf(",") >= 0) return void _each(b.split(","),
        function() {
            _fire(a, this)
        });
        var c = _getId(a);
        if (c) {
            var d = _eventData[c][b];
            _eventData[c] && d && d.length > 0 && d[0]()
        }
    }
    function _ctrl(a, b, c) {
        b = /^\d{2,}$/.test(b) ? b: b.toUpperCase().charCodeAt(0),
        _bind(a, "keydown",
        function(d) { ! d.ctrlKey || d.which != b || d.shiftKey || d.altKey || (c.call(a), d.stop())
        })
    }
    function _ready(a) {
        function b() {
            e || (e = !0, a(QingEditor), _readyFinished = !0)
        }
        function c() {
            if (!e) {
                try {
                    document.documentElement.doScroll("left")
                } catch(a) {
                    return void setTimeout(c, 100)
                }
                b()
            }
        }
        function d() {
            "complete" === document.readyState && b()
        }
        if (_readyFinished) return void a(QingEditor);
        var e = !1;
        if (document.addEventListener) _bind(document, "DOMContentLoaded", b);
        else if (document.attachEvent) {
            _bind(document, "readystatechange", d);
            var f = !1;
            try {
                f = null == window.frameElement
            } catch(g) {}
            document.documentElement.doScroll && f && c()
        }
        _bind(window, "load", b)
    }
    function _getCssList(a) {
        for (var b, c = {},
        d = /\s*([\w\-]+)\s*:([^;]*)(;|$)/g; b = d.exec(a);) {
            var e = _trim(b[1].toLowerCase()),
            f = _trim(_toHex(b[2]));
            c[e] = f
        }
        return c
    }
    function _getAttrList(a) {
        for (var b, c = {},
        d = /\s+(?:([\w\-:]+)|(?:([\w\-:]+)=([^\s"'<>]+))|(?:([\w\-:"]+)="([^"]*)")|(?:([\w\-:"]+)='([^']*)'))(?=(?:\s|\/|>)+)/g; b = d.exec(a);) {
            var e = (b[1] || b[2] || b[4] || b[6]).toLowerCase(),
            f = (b[2] ? b[3] : b[4] ? b[5] : b[7]) || "";
            c[e] = f
        }
        return c
    }
    function _addClassToTag(a, b) {
        return a = /\s+class\s*=/.test(a) ? a.replace(/(\s+class=["']?)([^"']*)(["']?[\s>])/,
        function(a, c, d, e) {
            return (" " + d + " ").indexOf(" " + b + " ") < 0 ? "" === d ? c + b + e: c + d + " " + b + e: a
        }) : a.substr(0, a.length - 1) + ' class="' + b + '">'
    }
    function _formatCss(a) {
        var b = "";
        return _each(_getCssList(a),
        function(a, c) {
            b += a + ":" + c + ";"
        }),
        b
    }
    function _formatUrl(a, b, c, d) {
        function e(a) {
            for (var b = a.split("/"), c = [], d = 0, e = b.length; e > d; d++) {
                var f = b[d];
                ".." == f ? c.length > 0 && c.pop() : "" !== f && "." != f && c.push(f)
            }
            return "/" + c.join("/")
        }
        function f(b, c) {
            if (a.substr(0, b.length) === b) {
                for (var e = [], g = 0; c > g; g++) e.push("..");
                var i = ".";
                return e.length > 0 && (i += "/" + e.join("/")),
                "/" == d && (i += "/"),
                i + a.substr(b.length)
            }
            return (h = /^(.*)\//.exec(b)) ? f(h[1], ++c) : void 0
        }
        if (b = _undef(b, "").toLowerCase(), "data:" != a.substr(0, 5) && (a = a.replace(/([^:])\/\//g, "$1/")), _inArray(b, ["absolute", "relative", "domain"]) < 0) return a;
        if (c = c || location.protocol + "//" + location.host, d === undefined) {
            var g = location.pathname.match(/^(\/.*)\//);
            d = g ? g[1] : ""
        }
        var h;
        if (h = /^(\w+:\/\/[^\/]*)/.exec(a)) {
            if (h[1] !== c) return a
        } else if (/^\w+:/.test(a)) return a;
        return /^\//.test(a) ? a = c + e(a.substr(1)) : /^\w+:\/\//.test(a) || (a = c + e(d + "/" + a)),
        "relative" === b ? a = f(c + d, 0).substr(2) : "absolute" === b && a.substr(0, c.length) === c && (a = a.substr(c.length)),
        a
    }
    function _formatHtml(a, b, c, d, e) {
        null == a && (a = ""),
        c = c || "",
        d = _undef(d, !1),
        e = _undef(e, "	");
        var f = "xx-small,x-small,small,medium,large,x-large,xx-large".split(",");
        a = a.replace(/(<(?:pre|pre\s[^>]*)>)([\s\S]*?)(<\/pre>)/gi,
        function(a, b, c, d) {
            return b + c.replace(/<(?:br|br\s[^>]*)>/gi, "\n") + d
        }),
        a = a.replace(/<(?:br|br\s[^>]*)\s*\/?>\s*<\/p>/gi, "</p>"),
        a = a.replace(/(<(?:p|p\s[^>]*)>)\s*(<\/p>)/gi, "$1<br />$2"),
        a = a.replace(/\u200B/g, ""),
        a = a.replace(/\u00A9/g, "&copy;"),
        a = a.replace(/\u00AE/g, "&reg;"),
        a = a.replace(/\u2003/g, "&emsp;"),
        a = a.replace(/\u3000/g, "&emsp;"),
        a = a.replace(/<[^>]+/g,
        function(a) {
            return a.replace(/\s+/g, " ")
        });
        var g = {};
        b && (_each(b,
        function(a, b) {
            for (var c = a.split(","), d = 0, e = c.length; e > d; d++) g[c[d]] = _toMap(b)
        }), g.script || (a = a.replace(/(<(?:script|script\s[^>]*)>)([\s\S]*?)(<\/script>)/gi, "")), g.style || (a = a.replace(/(<(?:style|style\s[^>]*)>)([\s\S]*?)(<\/style>)/gi, "")));
        var h = /(\s*)<(\/)?([\w\-:]+)((?:\s+|(?:\s+[\w\-:]+)|(?:\s+[\w\-:]+=[^\s"'<>]+)|(?:\s+[\w\-:"]+="[^"]*")|(?:\s+[\w\-:"]+='[^']*'))*)(\/)?>(\s*)/g,
        i = [];
        return a = a.replace(h,
        function(a, h, j, k, l, m, n) {
            var o = a,
            p = h || "",
            q = j || "",
            r = k.toLowerCase(),
            s = l || "",
            t = m ? " " + m: "",
            u = n || "";
            if (b && !g[r]) return "";
            if ("" === t && _SINGLE_TAG_MAP[r] && (t = " /"), _INLINE_TAG_MAP[r] && (p && (p = " "), u && (u = " ")), _PRE_TAG_MAP[r] && (q ? u = "\n": p = "\n"), d && "br" == r && (u = "\n"), _BLOCK_TAG_MAP[r] && !_PRE_TAG_MAP[r]) if (d) {
                q && i.length > 0 && i[i.length - 1] === r ? i.pop() : i.push(r),
                p = "\n",
                u = "\n";
                for (var v = 0,
                w = q ? i.length: i.length - 1; w > v; v++) p += e,
                q || (u += e);
                t ? i.pop() : q || (u += e)
            } else p = u = "";
            if ("" !== s) {
                var x = _getAttrList(o);
                if ("font" === r) {
                    var y = {},
                    z = "";
                    _each(x,
                    function(a, b) {
                        "color" === a && (y.color = b, delete x[a]),
                        "size" === a && (y["font-size"] = f[parseInt(b, 10) - 1] || "", delete x[a]),
                        "face" === a && (y["font-family"] = b, delete x[a]),
                        "style" === a && (z = b)
                    }),
                    z && !/;$/.test(z) && (z += ";"),
                    _each(y,
                    function(a, b) {
                        "" !== b && (/\s/.test(b) && (b = "'" + b + "'"), z += a + ":" + b + ";")
                    }),
                    x.style = z
                }
                _each(x,
                function(a, d) {
                    if (_FILL_ATTR_MAP[a] && (x[a] = a), _inArray(a, ["src", "href"]) >= 0 && (x[a] = _formatUrl(d, c)), (b && "style" !== a && !g[r]["*"] && !g[r][a] || "body" === r && "contenteditable" === a || /^QingEditor_\d+$/.test(a)) && delete x[a], "style" === a && "" !== d) {
                        var e = _getCssList(d);
                        _each(e,
                        function(a, c) { ! b || g[r].style || g[r]["." + a] || delete e[a]
                        });
                        var f = "";
                        _each(e,
                        function(a, b) {
                            f += a + ":" + b + ";"
                        }),
                        x.style = f
                    }
                }),
                s = "",
                _each(x,
                function(a, b) { ("style" !== a || "" !== b) && (b = b.replace(/"/g, "&quot;"), s += " " + a + '="' + b + '"')
                })
            }
            return "font" === r && (r = "span"),
            p + "<" + q + r + s + t + ">" + u
        }),
        a = a.replace(/(<(?:pre|pre\s[^>]*)>)([\s\S]*?)(<\/pre>)/gi,
        function(a, b, c, d) {
            return b + c.replace(/\n/g, '<span id="__QingEditor_pre_newline__">\n') + d
        }),
        a = a.replace(/\n\s*\n/g, "\n"),
        a = a.replace(/<span id="__QingEditor_pre_newline__">\n/g, "\n"),
        _trim(a)
    }
    function _clearMsWord(a, b) {
        return a = a.replace(/<meta[\s\S]*?>/gi, "").replace(/<![\s\S]*?>/gi, "").replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "").replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "").replace(/<w:[^>]+>[\s\S]*?<\/w:[^>]+>/gi, "").replace(/<o:[^>]+>[\s\S]*?<\/o:[^>]+>/gi, "").replace(/<xml>[\s\S]*?<\/xml>/gi, "").replace(/<(?:table|td)[^>]*>/gi,
        function(a) {
            return a.replace(/border-bottom:([#\w\s]+)/gi, "border:$1")
        }),
        _formatHtml(a, b)
    }
    function _mediaType(a) {
        return /\.(rm|rmvb)(\?|$)/i.test(a) ? "audio/x-pn-realaudio-plugin": /\.(swf|flv)(\?|$)/i.test(a) ? "application/x-shockwave-flash": "video/x-ms-asf-plugin"
    }
    function _mediaClass(a) {
        return /realaudio/i.test(a) ? "ke-rm": /flash/i.test(a) ? "ke-flash": "ke-media"
    }
    function _mediaAttrs(a) {
        return _getAttrList(unescape(a))
    }
    function _mediaEmbed(a) {
        var b = "<embed ";
        return _each(a,
        function(a, c) {
            b += a + '="' + c + '" '
        }),
        b += "/>"
    }
    function _mediaImg(a, b) {
        var c = b.width,
        d = b.height,
        e = b.type || _mediaType(b.src),
        f = _mediaEmbed(b),
        g = "";
        /\D/.test(c) ? g += "width:" + c + ";": c > 0 && (g += "width:" + c + "px;"),
        /\D/.test(d) ? g += "height:" + d + ";": d > 0 && (g += "height:" + d + "px;");
        var h = '<img class="' + _mediaClass(e) + '" src="' + a + '" ';
        return "" !== g && (h += 'style="' + g + '" '),
        h += 'data-ke-tag="' + escape(f) + '" alt="" />'
    }
    function _tmpl(a, b) {
        var c = new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + a.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');");
        return b ? c(b) : c
    }
    function _contains(a, b) {
        if (9 == a.nodeType && 9 != b.nodeType) return ! 0;
        for (; b = b.parentNode;) if (b == a) return ! 0;
        return ! 1
    }
    function _getAttr(a, b) {
        b = b.toLowerCase();
        var c = null;
        if (_GET_SET_ATTRIBUTE || "script" == a.nodeName.toLowerCase()) try {
            c = a.getAttribute(b, 2)
        } catch(d) {
            c = a.getAttribute(b, 1)
        } else {
            var e = a.ownerDocument.createElement("div");
            e.appendChild(a.cloneNode(!1));
            var f = _getAttrList(_unescape(e.innerHTML));
            b in f && (c = f[b])
        }
        return "style" === b && null !== c && (c = _formatCss(c)),
        c
    }
    function _queryAll(a, b) {
        function c(a) {
            return "string" != typeof a ? a: a.replace(/([^\w\-])/g, "\\$1")
        }
        function d(a) {
            return a.replace(/\\/g, "")
        }
        function e(a, b) {
            return "*" === a || a.toLowerCase() === c(b.toLowerCase())
        }
        function f(a, b, c) {
            var f = [],
            g = c.ownerDocument || c,
            h = g.getElementById(d(a));
            return h && e(b, h.nodeName) && _contains(c, h) && f.push(h),
            f
        }
        function g(a, b, c) {
            var f, g, h, i, j = c.ownerDocument || c,
            k = [];
            if (c.getElementsByClassName) for (f = c.getElementsByClassName(d(a)), g = 0, h = f.length; h > g; g++) i = f[g],
            e(b, i.nodeName) && k.push(i);
            else if (j.querySelectorAll) for (f = j.querySelectorAll(("#document" !== c.nodeName ? c.nodeName + " ": "") + b + "." + a), g = 0, h = f.length; h > g; g++) i = f[g],
            _contains(c, i) && k.push(i);
            else for (f = c.getElementsByTagName(b), a = " " + a + " ", g = 0, h = f.length; h > g; g++) if (i = f[g], 1 == i.nodeType) {
                var l = i.className;
                l && (" " + l + " ").indexOf(a) > -1 && k.push(i)
            }
            return k
        }
        function h(a, b, c) {
            for (var f, g = [], h = c.ownerDocument || c, i = h.getElementsByName(d(a)), j = 0, k = i.length; k > j; j++) f = i[j],
            e(b, f.nodeName) && _contains(c, f) && null !== f.getAttribute("name") && g.push(f);
            return g
        }
        function i(a, b, d, e) {
            for (var f, g = [], h = e.getElementsByTagName(d), i = 0, j = h.length; j > i; i++) f = h[i],
            1 == f.nodeType && (null === b ? null !== _getAttr(f, a) && g.push(f) : b === c(_getAttr(f, a)) && g.push(f));
            return g
        }
        function j(a, b) {
            var c, d = [];
            c = /^((?:\\.|[^.#\s\[<>])+)/.exec(a);
            var e = c ? c[1] : "*";
            if (c = /#((?:[\w\-]|\\.)+)$/.exec(a)) d = f(c[1], e, b);
            else if (c = /\.((?:[\w\-]|\\.)+)$/.exec(a)) d = g(c[1], e, b);
            else if (c = /\[((?:[\w\-]|\\.)+)\]/.exec(a)) d = i(c[1].toLowerCase(), null, e, b);
            else if (c = /\[((?:[\w\-]|\\.)+)\s*=\s*['"]?((?:\\.|[^'"]+)+)['"]?\]/.exec(a)) {
                var j = c[1].toLowerCase(),
                k = c[2];
                d = "id" === j ? f(k, e, b) : "class" === j ? g(k, e, b) : "name" === j ? h(k, e, b) : i(j, k, e, b)
            } else for (var l, m = b.getElementsByTagName(e), n = 0, o = m.length; o > n; n++) l = m[n],
            1 == l.nodeType && d.push(l);
            return d
        }
        var k = a.split(",");
        if (k.length > 1) {
            var l = [];
            return _each(k,
            function() {
                _each(_queryAll(this, b),
                function() {
                    _inArray(this, l) < 0 && l.push(this)
                })
            }),
            l
        }
        b = b || document;
        for (var m, n = [], o = /((?:\\.|[^\s>])+|[\s>])/g; m = o.exec(a);)" " !== m[1] && n.push(m[1]);
        var p = [];
        if (1 == n.length) return j(n[0], b);
        var q, r, s, t, u, v, w, x, y, z, A = !1;
        for (v = 0, lenth = n.length; v < lenth; v++) if (q = n[v], ">" !== q) {
            if (v > 0) {
                for (r = [], w = 0, y = p.length; y > w; w++) for (t = p[w], s = j(q, t), x = 0, z = s.length; z > x; x++) u = s[x],
                A ? t === u.parentNode && r.push(u) : r.push(u);
                p = r
            } else p = j(q, b);
            if (0 === p.length) return []
        } else A = !0;
        return p
    }
    function _query(a, b) {
        var c = _queryAll(a, b);
        return c.length > 0 ? c[0] : null
    }
    function _get(a) {
        return K(a)[0]
    }
    function _getDoc(a) {
        return a ? a.ownerDocument || a.document || a: document
    }
    function _getWin(a) {
        if (!a) return window;
        var b = _getDoc(a);
        return b.parentWindow || b.defaultView
    }
    function _setHtml(a, b) {
        if (1 == a.nodeType) {
            var c = _getDoc(a);
            try {
                a.innerHTML = '<img id="__QingEditor_temp_tag__" width="0" height="0" style="display:none;" />' + b;
                var d = c.getElementById("__QingEditor_temp_tag__");
                d.parentNode.removeChild(d)
            } catch(e) {
                K(a).empty(),
                K("@" + b, c).each(function() {
                    a.appendChild(this)
                })
            }
        }
    }
    function _hasClass(a, b) {
        return _inString(b, a.className, " ")
    }
    function _setAttr(a, b, c) {
        _IE && 8 > _V && "class" == b.toLowerCase() && (b = "className"),
        a.setAttribute(b, "" + c)
    }
    function _removeAttr(a, b) {
        _IE && 8 > _V && "class" == b.toLowerCase() && (b = "className"),
        _setAttr(a, b, ""),
        a.removeAttribute(b)
    }
    function _getNodeName(a) {
        return a && a.nodeName ? a.nodeName.toLowerCase() : ""
    }
    function _computedCss(a, b) {
        var c = _getWin(a),
        d = _toCamel(b),
        e = "";
        if (c.getComputedStyle) {
            var f = c.getComputedStyle(a, null);
            e = f[d] || f.getPropertyValue(b) || a.style[d]
        } else a.currentStyle && (e = a.currentStyle[d] || a.style[d]);
        return e
    }
    function _hasVal(a) {
        return !! _VALUE_TAG_MAP[_getNodeName(a)]
    }
    function _docElement(a) {
        return a = a || document,
        _QUIRKS ? a.body: a.documentElement
    }
    function _docHeight(a) {
        var b = _docElement(a);
        return Math.max(b.scrollHeight, b.clientHeight)
    }
    function _docWidth(a) {
        var b = _docElement(a);

        return Math.max(b.scrollWidth, b.clientWidth)
    }
    function _getScrollPos(a) {
        a = a || document;
        var b, c;
        return _IE || _NEWIE || _OPERA ? (b = _docElement(a).scrollLeft, c = _docElement(a).scrollTop) : (b = _getWin(a).scrollX, c = _getWin(a).scrollY),
        {
            x: b,
            y: c
        }
    }
    function KNode(a) {
        this.init(a)
    }
    function _updateCollapsed(a) {
        return a.collapsed = a.startContainer === a.endContainer && a.startOffset === a.endOffset,
        a
    }
    function _copyAndDelete(a, b, c) {
        function d(d, e, f) {
            var g, i = d.nodeValue.length;
            if (b) {
                var j = d.cloneNode(!0);
                g = e > 0 ? j.splitText(e) : j,
                i > f && g.splitText(f - e)
            }
            if (c) {
                var k = d;
                if (e > 0 && (k = d.splitText(e), a.setStart(d, e)), i > f) {
                    var l = k.splitText(f - e);
                    a.setEnd(l, 0)
                }
                h.push(k)
            }
            return g
        }
        function e() {
            c && a.up().collapse(!0);
            for (var b = 0,
            d = h.length; d > b; b++) {
                var e = h[b];
                e.parentNode && e.parentNode.removeChild(e)
            }
        }
        function f(e, n) {
            for (var o, p = e.firstChild; p;) {
                var q = new KRange(g).selectNode(p);
                if (j = q.compareBoundaryPoints(_START_TO_END, a), j >= 0 && 0 >= k && (k = q.compareBoundaryPoints(_START_TO_START, a)), k >= 0 && 0 >= l && (l = q.compareBoundaryPoints(_END_TO_END, a)), l >= 0 && 0 >= m && (m = q.compareBoundaryPoints(_END_TO_START, a)), m >= 0) return ! 1;
                if (o = p.nextSibling, j > 0) if (1 == p.nodeType) if (k >= 0 && 0 >= l) b && n.appendChild(p.cloneNode(!0)),
                c && h.push(p);
                else {
                    var r;
                    if (b && (r = p.cloneNode(!1), n.appendChild(r)), f(p, r) === !1) return ! 1
                } else if (3 == p.nodeType) {
                    var s;
                    if (s = p == i.startContainer ? d(p, i.startOffset, p.nodeValue.length) : p == i.endContainer ? d(p, 0, i.endOffset) : d(p, 0, p.nodeValue.length), b) try {
                        n.appendChild(s)
                    } catch(t) {}
                }
                p = o
            }
        }
        var g = a.doc,
        h = [],
        i = a.cloneRange().down(),
        j = -1,
        k = -1,
        l = -1,
        m = -1,
        n = a.commonAncestor(),
        o = g.createDocumentFragment();
        if (3 == n.nodeType) {
            var p = d(n, a.startOffset, a.endOffset);
            return b && o.appendChild(p),
            e(),
            b ? o: a
        }
        f(n, o),
        c && a.up().collapse(!0);
        for (var q = 0,
        r = h.length; r > q; q++) {
            var s = h[q];
            s.parentNode && s.parentNode.removeChild(s)
        }
        return b ? o: a
    }
    function _moveToElementText(a, b) {
        for (var c = b; c;) {
            var d = K(c);
            if ("marquee" == d.name || "select" == d.name) return;
            c = c.parentNode
        }
        try {
            a.moveToElementText(b)
        } catch(e) {}
    }
    function _getStartEnd(a, b) {
        var c = a.parentElement().ownerDocument,
        d = a.duplicate();
        d.collapse(b);
        var e = d.parentElement(),
        f = e.childNodes;
        if (0 === f.length) return {
            node: e.parentNode,
            offset: K(e).index()
        };
        var g = c,
        h = 0,
        i = -1,
        j = a.duplicate();
        _moveToElementText(j, e);
        for (var k = 0,
        l = f.length; l > k; k++) {
            var m = f[k];
            if (i = j.compareEndPoints("StartToStart", d), 0 === i) return {
                node: m.parentNode,
                offset: k
            };
            if (1 == m.nodeType) {
                var n, o = a.duplicate(),
                p = K(m),
                q = m;
                p.isControl() && (n = c.createElement("span"), p.after(n), q = n, h += p.text().replace(/\r\n|\n|\r/g, "").length),
                _moveToElementText(o, q),
                j.setEndPoint("StartToEnd", o),
                i > 0 ? h += o.text.replace(/\r\n|\n|\r/g, "").length: h = 0,
                n && K(n).remove()
            } else 3 == m.nodeType && (j.moveStart("character", m.nodeValue.length), h += m.nodeValue.length);
            0 > i && (g = m)
        }
        if (0 > i && 1 == g.nodeType) return {
            node: e,
            offset: K(e.lastChild).index() + 1
        };
        if (i > 0) for (; g.nextSibling && 1 == g.nodeType;) g = g.nextSibling;
        if (j = a.duplicate(), _moveToElementText(j, e), j.setEndPoint("StartToEnd", d), h -= j.text.replace(/\r\n|\n|\r/g, "").length, i > 0 && 3 == g.nodeType) for (var r = g.previousSibling; r && 3 == r.nodeType;) h -= r.nodeValue.length,
        r = r.previousSibling;
        return {
            node: g,
            offset: h
        }
    }
    function _getEndRange(a, b) {
        var c = a.ownerDocument || a,
        d = c.body.createTextRange();
        if (c == a) return d.collapse(!0),
        d;
        if (1 == a.nodeType && a.childNodes.length > 0) {
            var e, f, g = a.childNodes;
            if (0 === b ? (f = g[0], e = !0) : (f = g[b - 1], e = !1), !f) return d;
            if ("head" === K(f).name) return 1 === b && (e = !0),
            2 === b && (e = !1),
            d.collapse(e),
            d;
            if (1 == f.nodeType) {
                var h, i = K(f);
                return i.isControl() && (h = c.createElement("span"), e ? i.before(h) : i.after(h), f = h),
                _moveToElementText(d, f),
                d.collapse(e),
                h && K(h).remove(),
                d
            }
            a = f,
            b = e ? 0 : f.nodeValue.length
        }
        var j = c.createElement("span");
        return K(a).before(j),
        _moveToElementText(d, j),
        d.moveStart("character", b),
        K(j).remove(),
        d
    }
    function _toRange(a) {
        function b(a) {
            "tr" == K(a.node).name && (a.node = a.node.cells[a.offset], a.offset = 0)
        }
        var c, d;
        if (_IERANGE) {
            if (a.item) return c = _getDoc(a.item(0)),
            d = new KRange(c),
            d.selectNode(a.item(0)),
            d;
            c = a.parentElement().ownerDocument;
            var e = _getStartEnd(a, !0),
            f = _getStartEnd(a, !1);
            return b(e),
            b(f),
            d = new KRange(c),
            d.setStart(e.node, e.offset),
            d.setEnd(f.node, f.offset),
            d
        }
        var g = a.startContainer;
        return c = g.ownerDocument || g,
        d = new KRange(c),
        d.setStart(g, a.startOffset),
        d.setEnd(a.endContainer, a.endOffset),
        d
    }
    function KRange(a) {
        this.init(a)
    }
    function _range(a) {
        return a.nodeName ? new KRange(a) : a.constructor === KRange ? a: _toRange(a)
    }
    function _nativeCommand(a, b, c) {
        try {
            a.execCommand(b, !1, c)
        } catch(d) {}
    }
    function _nativeCommandValue(a, b) {
        var c = "";
        try {
            c = a.queryCommandValue(b)
        } catch(d) {}
        return "string" != typeof c && (c = ""),
        c
    }
    function _getSel(a) {
        var b = _getWin(a);
        return _IERANGE ? a.selection: b.getSelection()
    }
    function _getRng(a) {
        var b, c = _getSel(a);
        try {
            b = c.rangeCount > 0 ? c.getRangeAt(0) : c.createRange()
        } catch(d) {}
        return ! _IERANGE || b && (b.item || b.parentElement().ownerDocument === a) ? b: null
    }
    function _singleKeyMap(a) {
        var b, c, d = {};
        return _each(a,
        function(a, e) {
            b = a.split(",");
            for (var f = 0,
            g = b.length; g > f; f++) c = b[f],
            d[c] = e
        }),
        d
    }
    function _hasAttrOrCss(a, b) {
        return _hasAttrOrCssByKey(a, b, "*") || _hasAttrOrCssByKey(a, b)
    }
    function _hasAttrOrCssByKey(a, b, c) {
        if (c = c || a.name, 1 !== a.type) return ! 1;
        var d = _singleKeyMap(b);
        if (!d[c]) return ! 1;
        for (var e = d[c].split(","), f = 0, g = e.length; g > f; f++) {
            var h = e[f];
            if ("*" === h) return ! 0;
            var i = /^(\.?)([^=]+)(?:=([^=]*))?$/.exec(h),
            j = i[1] ? "css": "attr";
            h = i[2];
            var k = i[3] || "";
            if ("" === k && "" !== a[j](h)) return ! 0;
            if ("" !== k && a[j](h) === k) return ! 0
        }
        return ! 1
    }
    function _removeAttrOrCss(a, b) {
        1 == a.type && (_removeAttrOrCssByKey(a, b, "*"), _removeAttrOrCssByKey(a, b))
    }
    function _removeAttrOrCssByKey(a, b, c) {
        if (c = c || a.name, 1 === a.type) {
            var d = _singleKeyMap(b);
            if (d[c]) {
                for (var e = d[c].split(","), f = !1, g = 0, h = e.length; h > g; g++) {
                    var i = e[g];
                    if ("*" === i) {
                        f = !0;
                        break
                    }
                    var j = /^(\.?)([^=]+)(?:=([^=]*))?$/.exec(i);
                    i = j[2],
                    j[1] ? (i = _toCamel(i), a[0].style[i] && (a[0].style[i] = "")) : a.removeAttr(i)
                }
                f && a.remove(!0)
            }
        }
    }
    function _getInnerNode(a) {
        for (var b = a; b.first();) b = b.first();
        return b
    }
    function _isEmptyNode(a) {
        return 1 != a.type || a.isSingle() ? !1 : "" === a.html().replace(/<[^>]+>/g, "")
    }
    function _mergeWrapper(a, b) {
        a = a.clone(!0);
        for (var c = _getInnerNode(a), d = a, e = !1; b;) {
            for (; d;) d.name === b.name && (_mergeAttrs(d, b.attr(), b.css()), e = !0),
            d = d.first();
            e || c.append(b.clone(!1)),
            e = !1,
            b = b.first()
        }
        return a
    }
    function _wrapNode(a, b) {
        if (b = b.clone(!0), 3 == a.type) return _getInnerNode(b).append(a.clone(!1)),
        a.replaceWith(b),
        b;
        for (var c, d = a; (c = a.first()) && 1 == c.children().length;) a = c;
        c = a.first();
        for (var e = a.doc.createDocumentFragment(); c;) e.appendChild(c[0]),
        c = c.next();
        return b = _mergeWrapper(d, b),
        e.firstChild && _getInnerNode(b).append(e),
        d.replaceWith(b),
        b
    }
    function _mergeAttrs(a, b, c) {
        _each(b,
        function(b, c) {
            "style" !== b && a.attr(b, c)
        }),
        _each(c,
        function(b, c) {
            a.css(b, c)
        })
    }
    function _inPreElement(a) {
        for (; a && "body" != a.name;) {
            if (_PRE_TAG_MAP[a.name] || "div" == a.name && a.hasClass("ke-script")) return ! 0;
            a = a.parent()
        }
        return ! 1
    }
    function KCmd(a) {
        this.init(a)
    }
    function _cmd(a) {
        if (a.nodeName) {
            var b = _getDoc(a);
            a = _range(b).selectNodeContents(b.body).collapse(!1)
        }
        return new KCmd(a)
    }
    function _drag(a) {
        var b = a.moveEl,
        c = a.moveFn,
        d = a.clickEl || b,
        e = a.beforeDrag,
        f = a.iframeFix === undefined ? !0 : a.iframeFix,
        g = [document];
        f && K("iframe").each(function() {
            var a = _formatUrl(this.src || "", "absolute");
            if (!/^https?:\/\//.test(a)) {
                var b;
                try {
                    b = _iframeDoc(this)
                } catch(c) {}
                if (b) {
                    var d = K(this).pos();
                    K(b).data("pos-x", d.x),
                    K(b).data("pos-y", d.y),
                    g.push(b)
                }
            }
        }),
        d.mousedown(function(a) {
            function f(a) {
                a.preventDefault();
                var b = K(_getDoc(a.target)),
                e = _round((b.data("pos-x") || 0) + a.pageX - o),
                f = _round((b.data("pos-y") || 0) + a.pageY - p);
                c.call(d, k, l, m, n, e, f)
            }
            function h(a) {
                a.preventDefault()
            }
            function i(a) {
                a.preventDefault(),
                K(g).unbind("mousemove", f).unbind("mouseup", i).unbind("selectstart", h),
                j.releaseCapture && j.releaseCapture()
            }
            if (0 === a.button || 1 === a.button) {
                a.stopPropagation();
                var j = d.get(),
                k = _removeUnit(b.css("left")),
                l = _removeUnit(b.css("top")),
                m = b.width(),
                n = b.height(),
                o = a.pageX,
                p = a.pageY;
                e && e(),
                K(g).mousemove(f).mouseup(i).bind("selectstart", h),
                j.setCapture && j.setCapture()
            }
        })
    }
    function KWidget(a) {
        this.init(a)
    }
    function _widget(a) {
        return new KWidget(a)
    }
    function _iframeDoc(a) {
        return a = _get(a),
        a.contentDocument || a.contentWindow.document
    }
    function _getInitHtml(a, b, c, d) {
        var e = ["" === _direction ? "<html>": '<html dir="' + _direction + '">', '<head><meta charset="utf-8" /><title></title>', "<style>", "html {margin:0;padding:0;}", "body {margin:0;padding:5px;}", 'body, td {font:12px/1.5 "sans serif",tahoma,verdana,helvetica;}', "body, p, div {word-wrap: break-word;}", "p {margin:5px 0;}", "table {border-collapse:collapse;}", "img {border:0;}", "noscript {display:none;}", "table.ke-zeroborder td {border:1px dotted #AAA;}", "img.ke-flash {", "	border:1px solid #AAA;", "	background-image:url(" + a + "common/flash.gif);", "	background-position:center center;", "	background-repeat:no-repeat;", "	width:100px;", "	height:100px;", "}", "img.ke-rm {", "	border:1px solid #AAA;", "	background-image:url(" + a + "common/rm.gif);", "	background-position:center center;", "	background-repeat:no-repeat;", "	width:100px;", "	height:100px;", "}", "img.ke-media {", "	border:1px solid #AAA;", "	background-image:url(" + a + "common/media.gif);", "	background-position:center center;", "	background-repeat:no-repeat;", "	width:100px;", "	height:100px;", "}", "img.ke-anchor {", "	border:1px dashed #666;", "	width:16px;", "	height:16px;", "}", ".ke-script, .ke-noscript, .ke-display-none {", "	display:none;", "	font-size:0;", "	width:0;", "	height:0;", "}", ".ke-pagebreak {", "	border:1px dotted #AAA;", "	font-size:0;", "	height:2px;", "}", "</style>"];
        return _isArray(c) || (c = [c]),
        _each(c,
        function(a, b) {
            b && e.push('<link href="' + b + '" rel="stylesheet" />')
        }),
        d && e.push("<style>" + d + "</style>"),
        e.push("</head><body " + (b ? 'class="' + b + '"': "") + "></body></html>"),
        e.join("\n")
    }
    function _elementVal(a, b) {
        if (a.hasVal()) {
            if (b === undefined) {
                var c = a.val();
                return c = c.replace(/(<(?:p|p\s[^>]*)>) *(<\/p>)/gi, "")
            }
            return a.val(b)
        }
        return a.html(b)
    }
    function KEdit(a) {
        this.init(a)
    }
    function _edit(a) {
        return new KEdit(a)
    }
    function _selectToolbar(a, b) {
        var c = this,
        d = c.get(a);
        if (d) {
            if (d.hasClass("ke-disabled")) return;
            b(d)
        }
    }
    function KToolbar(a) {
        this.init(a)
    }
    function _toolbar(a) {
        return new KToolbar(a)
    }
    function KMenu(a) {
        this.init(a)
    }
    function _menu(a) {
        return new KMenu(a)
    }
    function KColorPicker(a) {
        this.init(a)
    }
    function _colorpicker(a) {
        return new KColorPicker(a)
    }
    function KUploadButton(a) {
        this.init(a)
    }
    function _uploadbutton(a) {
        return new KUploadButton(a)
    }
    function _createButton(a) {
        a = a || {};
        var b = a.name || "",
        c = K('<span class="ke-button-common ke-button-outer" title="' + b + '"></span>'),
        d = K('<input class="ke-button-common ke-button" type="button" value="' + b + '" />');
        return a.click && d.click(a.click),
        c.append(d),
        c
    }
    function KDialog(a) {
        this.init(a)
    }
    function _dialog(a) {
        return new KDialog(a)
    }
    function _tabs(a) {
        var b = _widget(a),
        c = b.remove,
        d = a.afterSelect,
        e = b.div,
        f = [];
        e.addClass("ke-tabs").bind("contextmenu,mousedown,mousemove",
        function(a) {
            a.preventDefault()
        });
        var g = K('<ul class="ke-tabs-ul ke-clearfix"></ul>');
        return e.append(g),
        b.add = function(a) {
            var b = K('<li class="ke-tabs-li">' + a.title + "</li>");
            b.data("tab", a),
            f.push(b),
            g.append(b)
        },
        b.selectedIndex = 0,
        b.select = function(a) {
            b.selectedIndex = a,
            _each(f,
            function(c, d) {
                d.unbind(),
                c === a ? (d.addClass("ke-tabs-li-selected"), K(d.data("tab").panel).show("")) : (d.removeClass("ke-tabs-li-selected").removeClass("ke-tabs-li-on").mouseover(function() {
                    K(this).addClass("ke-tabs-li-on")
                }).mouseout(function() {
                    K(this).removeClass("ke-tabs-li-on")
                }).click(function() {
                    b.select(c)
                }), K(d.data("tab").panel).hide())
            }),
            d && d.call(b, a)
        },
        b.remove = function() {
            _each(f,
            function() {
                this.remove()
            }),
            g.remove(),
            c.call(b)
        },
        b
    }
    function _loadScript(a, b) {
        var c = document.getElementsByTagName("head")[0] || (_QUIRKS ? document.body: document.documentElement),
        d = document.createElement("script");
        c.appendChild(d),
        d.src = a,
        d.charset = "utf-8",
        d.onload = d.onreadystatechange = function() {
            this.readyState && "loaded" !== this.readyState || (b && b(), d.onload = d.onreadystatechange = null, c.removeChild(d))
        }
    }
    function _chopQuery(a) {
        var b = a.indexOf("?");
        return b > 0 ? a.substr(0, b) : a
    }
    function _loadStyle(a) {
        for (var b = document.getElementsByTagName("head")[0] || (_QUIRKS ? document.body: document.documentElement), c = document.createElement("link"), d = _chopQuery(_formatUrl(a, "absolute")), e = K('link[rel="stylesheet"]', b), f = 0, g = e.length; g > f; f++) if (_chopQuery(_formatUrl(e[f].href, "absolute")) === d) return;
        b.appendChild(c),
        c.href = a,
        c.rel = "stylesheet"
    }
    function _ajax(a, b, c, d, e) {
        c = c || "GET",
        e = e || "json";
        var f = window.XMLHttpRequest ? new window.XMLHttpRequest: new ActiveXObject("Microsoft.XMLHTTP");
        if (f.open(c, a, !0), f.onreadystatechange = function() {
            if (4 == f.readyState && 200 == f.status && b) {
                var a = _trim(f.responseText);
                "json" == e && (a = _json(a)),
                b(a)
            }
        },
        "POST" == c) {
            var g = [];
            _each(d,
            function(a, b) {
                g.push(encodeURIComponent(a) + "=" + encodeURIComponent(b))
            });
            try {
                f.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
            } catch(h) {}
            f.send(g.join("&"))
        } else f.send(null)
    }
    function _plugin(a, b) {
        return a === undefined ? _plugins: b ? void(_plugins[a] = b) : _plugins[a]
    }
    function _parseLangKey(a) {
        var b, c = "core";
        return (b = /^(\w+)\.(\w+)$/.exec(a)) && (c = b[1], a = b[2]),
        {
            ns: c,
            key: a
        }
    }
    function _lang(a, b) {
        if (b = b === undefined ? K.options.langType: b, "string" == typeof a) {
            if (!_language[b]) return "no language";
            var c = a.length - 1;
            if ("." === a.substr(c)) return _language[b][a.substr(0, c)];
            var d = _parseLangKey(a);
            return _language[b][d.ns][d.key]
        }
        _each(a,
        function(a, c) {
            var d = _parseLangKey(a);
            _language[b] || (_language[b] = {}),
            _language[b][d.ns] || (_language[b][d.ns] = {}),
            _language[b][d.ns][d.key] = c
        })
    }
    function _getImageFromRange(a, b) {
        if (!a.collapsed) {
            a = a.cloneRange().up();
            var c = a.startContainer,
            d = a.startOffset;
            if (_WEBKIT || a.isControl()) {
                var e = K(c.childNodes[d]);
                if (e && "img" == e.name) return b(e) ? e: void 0
            }
        }
    }
    function _bindContextmenuEvent() {
        var a = this,
        b = a.edit.doc;
        K(b).contextmenu(function(b) {
            if (a.menu && a.hideMenu(), !a.useContextmenu) return void b.preventDefault();
            if (0 !== a._contextmenus.length) {
                var c = 0,
                d = [];
                for (_each(a._contextmenus,
                function() {
                    return "-" == this.title ? void d.push(this) : void(this.cond && this.cond() && (d.push(this), this.width && this.width > c && (c = this.width)))
                }); d.length > 0 && "-" == d[0].title;) d.shift();
                for (; d.length > 0 && "-" == d[d.length - 1].title;) d.pop();
                var e = null;
                if (_each(d,
                function(a) {
                    "-" == this.title && "-" == e.title && delete d[a],
                    e = this
                }), d.length > 0) {
                    b.preventDefault();
                    var f = K(a.edit.iframe).pos(),
                    g = _menu({
                        x: f.x + b.clientX,
                        y: f.y + b.clientY,
                        width: c,
                        css: {
                            visibility: "hidden"
                        },
                        shadowMode: a.shadowMode
                    });
                    _each(d,
                    function() {
                        this.title && g.addItem(this)
                    });
                    var h = _docElement(g.doc),
                    i = g.div.height();
                    b.clientY + i >= h.clientHeight - 100 && g.pos(g.x, _removeUnit(g.y) - i),
                    g.div.css("visibility", "visible"),
                    a.menu = g
                }
            }
        })
    }
    function _bindNewlineEvent() {
        function a(a) {
            for (var b = K(a.commonAncestor()); b && (1 != b.type || b.isStyle());) b = b.parent();
            return b.name
        }
        var b = this,
        c = b.edit.doc,
        d = b.newlineTag;
        if (! (_IE && "br" !== d || _GECKO && 3 > _V && "p" !== d || _OPERA && 9 > _V)) {
            var e = _toMap("h1,h2,h3,h4,h5,h6,pre,li"),
            f = _toMap("p,h1,h2,h3,h4,h5,h6,pre,li,blockquote");
            K(c).keydown(function(g) {
                if (! (13 != g.which || g.shiftKey || g.ctrlKey || g.altKey)) {
                    b.cmd.selection();
                    var h = a(b.cmd.range);
                    if ("marquee" != h && "select" != h) return "br" !== d || e[h] ? void(f[h] || _nativeCommand(c, "formatblock", "<p>")) : (g.preventDefault(), void b.insertHtml("<br />" + (_IE && 9 > _V ? "": "​")))
                }
            }),
            K(c).keyup(function(e) {
                if (! (13 != e.which || e.shiftKey || e.ctrlKey || e.altKey) && "br" != d) {
                    if (_GECKO) {
                        var g = b.cmd.commonAncestor("p"),
                        h = b.cmd.commonAncestor("a");
                        return void(h && "" == h.text() && (h.remove(!0), b.cmd.range.selectNodeContents(g[0]).collapse(!0), b.cmd.select()))
                    }
                    b.cmd.selection();
                    var i = a(b.cmd.range);
                    if ("marquee" != i && "select" != i) {
                        f[i] || _nativeCommand(c, "formatblock", "<p>");
                        var j = b.cmd.commonAncestor("div");
                        if (j) {
                            for (var k = K("<p></p>"), l = j[0].firstChild; l;) {
                                var m = l.nextSibling;
                                k.append(l),
                                l = m
                            }
                            j.before(k),
                            j.remove(),
                            b.cmd.range.selectNodeContents(k[0]),
                            b.cmd.select()
                        }
                    }
                }
            })
        }
    }
    function _bindTabEvent() {
        var a = this,
        b = a.edit.doc;
        K(b).keydown(function(c) {
            if (9 == c.which) {
                if (c.preventDefault(), a.afterTab) return void a.afterTab.call(a, c);
                var d = a.cmd,
                e = d.range;
                e.shrink(),
                e.collapsed && 1 == e.startContainer.nodeType && (e.insertNode(K("@&nbsp;", b)[0]), d.select()),
                a.insertHtml("&nbsp;&nbsp;&nbsp;&nbsp;")
            }
        })
    }
    function _bindFocusEvent() {
        var a = this;
        K(a.edit.textarea[0], a.edit.win).focus(function(b) {
            a.afterFocus && a.afterFocus.call(a, b)
        }).blur(function(b) {
            a.afterBlur && a.afterBlur.call(a, b)
        })
    }
    function _removeBookmarkTag(a) {
        return _trim(a.replace(/<span [^>]*id="?__QingEditor_bookmark_\w+_\d+__"?[^>]*><\/span>/gi, ""))
    }
    function _removeTempTag(a) {
        return a.replace(/<div[^>]+class="?__QingEditor_paste__"?[^>]*>[\s\S]*?<\/div>/gi, "")
    }
    function _addBookmarkToStack(a, b) {
        if (0 === a.length) return void a.push(b);
        var c = a[a.length - 1];
        _removeBookmarkTag(b.html) !== _removeBookmarkTag(c.html) && a.push(b)
    }
    function _undoToRedo(a, b) {
        var c, d, e = this,
        f = e.edit,
        g = f.doc.body;
        if (0 === a.length) return e;
        f.designMode ? (c = e.cmd.range, d = c.createBookmark(!0), d.html = g.innerHTML) : d = {
            html: g.innerHTML
        },
        _addBookmarkToStack(b, d);
        var h = a.pop();
        return _removeBookmarkTag(d.html) === _removeBookmarkTag(h.html) && a.length > 0 && (h = a.pop()),
        f.designMode ? (f.html(h.html), h.start && (c.moveToBookmark(h), e.select())) : K(g).html(_removeBookmarkTag(h.html)),
        e
    }
    function KEditor(a) {
        function b(a, b) {
            KEditor.prototype[a] === undefined && (c[a] = b),
            c.options[a] = b
        }
        var c = this;
        c.options = {},
        _each(a,
        function(c, d) {
            b(c, a[c])
        }),
        _each(K.options,
        function(a, d) {
            c[a] === undefined && b(a, d)
        });
        var d = K(c.srcElement || "<textarea/>");
        c.width || (c.width = d[0].style.width || d.width()),
        c.height || (c.height = d[0].style.height || d.height()),
        b("width", _undef(c.width, c.minWidth)),
        b("height", _undef(c.height, c.minHeight)),
        b("width", _addUnit(c.width)),
        b("height", _addUnit(c.height)),
        _MOBILE && (!_IOS || 534 > _V) && (c.designMode = !1),
        c.srcElement = d,
        c.initContent = "",
        c.plugin = {},
        c.isCreated = !1,
        c._handlers = {},
        c._contextmenus = [],
        c._undoStack = [],
        c._redoStack = [],
        c._firstAddBookmark = !0,
        c.menu = c.contextmenu = null,
        c.dialogs = []
    }
    function _editor(a) {
        return new KEditor(a)
    }
    function _create(a, b) {
        function c(a) {
            return _each(_plugins,
            function(b, c) {
                _isFunction(c) && (c.call(a, QingEditor), a._pluginStatus || (a._pluginStatus = {}), a._pluginStatus[b] = "inited")
            }),
            a.create()
        }
        if (b = b || {},
        b.basePath = _undef(b.basePath, K.basePath) + "qingeditor/", b.themesPath = _undef(b.themesPath, b.basePath + "qingeditor/"), b.langPath = _undef(b.langPath, b.basePath + "lang/"), b.pluginsPath = _undef(b.pluginsPath, b.basePath + "plugins/"), _undef(b.loadStyleMode, K.options.loadStyleMode)) {
            var d = _undef(b.themeType, K.options.themeType);
            _loadStyle(b.themesPath + "qingstyle.css"),
            _loadStyle(b.themesPath + d + "/" + d + ".css")
        }
        var e = K(a);
        if (e && 0 !== e.length) {
            if (e.length > 1) return e.each(function() {
                _create(this, b)
            }),
            _instances[0];
            b.srcElement = e[0];
            var f = new KEditor(b);
            return _instances.push(f),
            _language[f.langType] ? c(f) : (_loadScript(f.langPath + f.langType + ".js?ver=" + encodeURIComponent(K.DEBUG ? _TIME: _VERSION),
            function() {
                c(f)
            }), f)
        }
    }
    function _eachEditor(a, b) {
        K(a).each(function(a, c) {
            K.each(_instances,
            function(a, d) {
                return d && d.srcElement[0] == c ? (b.call(d, a), !1) : void 0
            })
        })
    }
    if (!window.QingEditor) {
        window.console || (window.console = {}),
        console.log || (console.log = function() {});
        var _VERSION = "4.1.11 (2016-05-26)",
        _ua = navigator.userAgent.toLowerCase(),
        _IE = _ua.indexOf("msie") > -1 && -1 == _ua.indexOf("opera"),
        _NEWIE = -1 == _ua.indexOf("msie") && _ua.indexOf("trident") > -1,
        _GECKO = _ua.indexOf("gecko") > -1 && -1 == _ua.indexOf("khtml"),
        _WEBKIT = _ua.indexOf("applewebkit") > -1,
        _OPERA = _ua.indexOf("opera") > -1,
        _MOBILE = _ua.indexOf("mobile") > -1,
        _IOS = /ipad|iphone|ipod/.test(_ua),
        _QUIRKS = "CSS1Compat" != document.compatMode,
        _IERANGE = !window.getSelection,
        _matches = /(?:msie|firefox|webkit|opera)[\/:\s](\d+)/.exec(_ua),
        _V = _matches ? _matches[1] : "0",
        _TIME = (new Date).getTime(),
        _round = Math.round,
        K = {
            DEBUG: !1,
            VERSION: _VERSION,
            IE: _IE,
            GECKO: _GECKO,
            WEBKIT: _WEBKIT,
            OPERA: _OPERA,
            V: _V,
            TIME: _TIME,
            each: _each,
            isArray: _isArray,
            isFunction: _isFunction,
            inArray: _inArray,
            inString: _inString,
            trim: _trim,
            addUnit: _addUnit,
            removeUnit: _removeUnit,
            escape: _escape,
            unescape: _unescape,
            toCamel: _toCamel,
            toHex: _toHex,
            toMap: _toMap,
            toArray: _toArray,
            undef: _undef,
            invalidUrl: _invalidUrl,
            addParam: _addParam,
            extend: _extend,
            json: _json
        },
        _INLINE_TAG_MAP = _toMap("a,abbr,acronym,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,img,input,ins,kbd,label,map,q,s,samp,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),
        _BLOCK_TAG_MAP = _toMap("address,applet,blockquote,body,center,dd,dir,div,dl,dt,fieldset,form,frameset,h1,h2,h3,h4,h5,h6,head,hr,html,iframe,ins,isindex,li,map,menu,meta,noframes,noscript,object,ol,p,pre,script,style,table,tbody,td,tfoot,th,thead,title,tr,ul"),
        _SINGLE_TAG_MAP = _toMap("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed"),
        _STYLE_TAG_MAP = _toMap("b,basefont,big,del,em,font,i,s,small,span,strike,strong,sub,sup,u"),
        _CONTROL_TAG_MAP = _toMap("img,table,input,textarea,button"),
        _PRE_TAG_MAP = _toMap("pre,style,script"),
        _NOSPLIT_TAG_MAP = _toMap("html,head,body,td,tr,table,ol,ul,li"),
        _AUTOCLOSE_TAG_MAP = _toMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),
        _FILL_ATTR_MAP = _toMap("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),
        _VALUE_TAG_MAP = _toMap("input,button,textarea,select");
        K.basePath = _getBasePath(),
        K.options = {
            designMode: !0,
            fullscreenMode: !1,
            filterMode: !0,
            wellFormatMode: !0,
            shadowMode: !0,
            loadStyleMode: !0,
            basePath: K.basePath,
            themesPath: K.basePath + "themes/",
            langPath: K.basePath + "lang/",
            pluginsPath: K.basePath + "plugins/",
            themeType: "default",
            langType: "zh-CN",
            urlType: "",
            newlineTag: "p",
            resizeType: 2,
            syncType: "form",
            pasteType: 2,
            dialogAlignType: "page",
            useContextmenu: !0,
            fullscreenShortcut: !1,
            bodyClass: "ke-content",
            indentChar: "	",
            cssPath: "",
            cssData: "",
            minWidth: 650,
            minHeight: 100,
            minChangeSize: 50,
            zIndex: 811213,
            items: ["source", "|", "undo", "redo", "|", "preview", "print", "template", "code", "cut", "copy", "paste", "plainpaste", "wordpaste", "|", "justifyleft", "justifycenter", "justifyright", "justifyfull", "insertorderedlist", "insertunorderedlist", "indent", "outdent", "subscript", "superscript", "clearhtml", "quickformat", "selectall", "|", "fullscreen", "/", "formatblock", "fontname", "fontsize", "|", "forecolor", "hilitecolor", "bold", "italic", "underline", "strikethrough", "lineheight", "removeformat", "|", "image", "multiimage", "flash", "media", "insertfile", "table", "hr", "emoticons", "baidumap", "pagebreak", "anchor", "link", "unlink", "|", "about"],
            noDisableItems: ["source", "fullscreen"],
            colorTable: [["#E53333", "#E56600", "#FF9900", "#64451D", "#DFC5A4", "#FFE500"], ["#009900", "#006600", "#99BB00", "#B8D100", "#60D978", "#00D5FF"], ["#337FE5", "#003399", "#4C33E5", "#9933E5", "#CC33E5", "#EE33EE"], ["#FFFFFF", "#CCCCCC", "#999999", "#666666", "#333333", "#000000"]],
            fontSizeTable: ["9px", "10px", "12px", "14px", "16px", "18px", "24px", "32px"],
            htmlTags: {
                font: ["id", "class", "color", "size", "face", ".background-color"],
                span: ["id", "class", ".color", ".background-color", ".font-size", ".font-family", ".background", ".font-weight", ".font-style", ".text-decoration", ".vertical-align", ".line-height"],
                div: ["id", "class", "align", ".border", ".margin", ".padding", ".text-align", ".color", ".background-color", ".font-size", ".font-family", ".font-weight", ".background", ".font-style", ".text-decoration", ".vertical-align", ".margin-left"],
                table: ["id", "class", "border", "cellspacing", "cellpadding", "width", "height", "align", "bordercolor", ".padding", ".margin", ".border", "bgcolor", ".text-align", ".color", ".background-color", ".font-size", ".font-family", ".font-weight", ".font-style", ".text-decoration", ".background", ".width", ".height", ".border-collapse"],
                "td,th": ["id", "class", "align", "valign", "width", "height", "colspan", "rowspan", "bgcolor", ".text-align", ".color", ".background-color", ".font-size", ".font-family", ".font-weight", ".font-style", ".text-decoration", ".vertical-align", ".background", ".border"],
                a: ["id", "class", "href", "target", "name"],
                embed: ["id", "class", "src", "width", "height", "type", "loop", "autostart", "quality", ".width", ".height", "align", "allowscriptaccess", "wmode"],
                img: ["id", "class", "src", "width", "height", "border", "alt", "title", "align", ".width", ".height", ".border"],
                "p,ol,ul,li,blockquote,h1,h2,h3,h4,h5,h6": ["id", "class", "align", ".text-align", ".color", ".background-color", ".font-size", ".font-family", ".background", ".font-weight", ".font-style", ".text-decoration", ".vertical-align", ".text-indent", ".margin-left"],
                pre: ["id", "class"],
                hr: ["id", "class", ".page-break-after"],
                "br,tbody,tr,strong,b,sub,sup,em,i,u,strike,s,del": ["id", "class"],
                iframe: ["id", "class", "src", "frameborder", "width", "height", ".width", ".height"]
            },
            layout: '<div class="container"><div class="toolbar"></div><div class="edit"></div><div class="statusbar"></div></div>'
        };
        var _useCapture = !1,
        _INPUT_KEY_MAP = _toMap("8,9,13,32,46,48..57,59,61,65..90,106,109..111,188,190..192,219..222"),
        _CURSORMOVE_KEY_MAP = _toMap("33..40"),
        _CHANGE_KEY_MAP = {};
        _each(_INPUT_KEY_MAP,
        function(a, b) {
            _CHANGE_KEY_MAP[a] = b
        }),
        _each(_CURSORMOVE_KEY_MAP,
        function(a, b) {
            _CHANGE_KEY_MAP[a] = b
        });
        var _EVENT_PROPS = "altKey,attrChange,attrName,bubbles,button,cancelable,charCode,clientX,clientY,ctrlKey,currentTarget,data,detail,eventPhase,fromElement,handler,keyCode,metaKey,newValue,offsetX,offsetY,originalTarget,pageX,pageY,prevValue,relatedNode,relatedTarget,screenX,screenY,shiftKey,srcElement,target,toElement,view,wheelDelta,which".split(",");
        _extend(KEvent, {
            init: function(a, b) {
                var c = this,
                d = a.ownerDocument || a.document || a;
                if (c.event = b, _each(_EVENT_PROPS,
                function(a, d) {
                    c[d] = b[d]
                }), c.target || (c.target = c.srcElement || d), 3 === c.target.nodeType && (c.target = c.target.parentNode), !c.relatedTarget && c.fromElement && (c.relatedTarget = c.fromElement === c.target ? c.toElement: c.fromElement), null == c.pageX && null != c.clientX) {
                    var e = d.documentElement,
                    f = d.body;
                    c.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0),
                    c.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)
                }
                switch (!c.which && (c.charCode || 0 === c.charCode ? c.charCode: c.keyCode) && (c.which = c.charCode || c.keyCode), !c.metaKey && c.ctrlKey && (c.metaKey = c.ctrlKey), c.which || c.button === undefined || (c.which = 1 & c.button ? 1 : 2 & c.button ? 3 : 4 & c.button ? 2 : 0), c.which) {
                case 186:
                    c.which = 59;
                    break;
                case 187:
                case 107:
                case 43:
                    c.which = 61;
                    break;
                case 189:
                case 45:
                    c.which = 109;
                    break;
                case 42:
                    c.which = 106;
                    break;
                case 47:
                    c.which = 111;
                    break;
                case 78:
                    c.which = 110
                }
                c.which >= 96 && c.which <= 105 && (c.which -= 48)
            },
            preventDefault: function() {
                var a = this.event;
                a.preventDefault ? a.preventDefault() : a.returnValue = !1
            },
            stopPropagation: function() {
                var a = this.event;
                a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0
            },
            stop: function() {
                this.preventDefault(),
                this.stopPropagation()
            }
        });
        var _eventExpendo = "QingEditor_" + _TIME,
        _eventId = 0,
        _eventData = {},
        _readyFinished = !1;
        window.attachEvent && window.attachEvent("onunload",
        function() {
            _each(_eventData,
            function(a, b) {
                b.el && _unbind(b.el)
            })
        }),
        K.ctrl = _ctrl,
        K.ready = _ready,
        K.formatUrl = _formatUrl,
        K.formatHtml = _formatHtml,
        K.getCssList = _getCssList,
        K.getAttrList = _getAttrList,
        K.mediaType = _mediaType,
        K.mediaAttrs = _mediaAttrs,
        K.mediaEmbed = _mediaEmbed,
        K.mediaImg = _mediaImg,
        K.clearMsWord = _clearMsWord,
        K.tmpl = _tmpl;
        var _getSetAttrDiv = document.createElement("div");
        _getSetAttrDiv.setAttribute("className", "t");
        var _GET_SET_ATTRIBUTE = "t" !== _getSetAttrDiv.className;
        K.query = _query,
        K.queryAll = _queryAll,
        _extend(KNode, {
            init: function(a) {
                var b = this;
                a = _isArray(a) ? a: [a];
                for (var c = 0,
                d = 0,
                e = a.length; e > d; d++) a[d] && (b[d] = a[d].constructor === KNode ? a[d][0] : a[d], c++);
                b.length = c,
                b.doc = _getDoc(b[0]),
                b.name = _getNodeName(b[0]),
                b.type = b.length > 0 ? b[0].nodeType: null,
                b.win = _getWin(b[0])
            },
            each: function(a) {
                for (var b = this,
                c = 0; c < b.length; c++) if (a.call(b[c], c, b[c]) === !1) return b;
                return b
            },
            bind: function(a, b) {
                return this.each(function() {
                    _bind(this, a, b)
                }),
                this
            },
            unbind: function(a, b) {
                return this.each(function() {
                    _unbind(this, a, b)
                }),
                this
            },
            fire: function(a) {
                return this.length < 1 ? this: (_fire(this[0], a), this)
            },
            hasAttr: function(a) {
                return this.length < 1 ? !1 : !!_getAttr(this[0], a)
            },
            attr: function(a, b) {
                var c = this;
                return a === undefined ? _getAttrList(c.outer()) : "object" == typeof a ? (_each(a,
                function(a, b) {
                    c.attr(a, b)
                }), c) : b === undefined ? (b = c.length < 1 ? null: _getAttr(c[0], a), null === b ? "": b) : (c.each(function() {
                    _setAttr(this, a, b)
                }), c)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    _removeAttr(this, a)
                }),
                this
            },
            get: function(a) {
                return this.length < 1 ? null: this[a || 0]
            },
            eq: function(a) {
                return this.length < 1 ? null: this[a] ? new KNode(this[a]) : null
            },
            hasClass: function(a) {
                return this.length < 1 ? !1 : _hasClass(this[0], a)
            },
            addClass: function(a) {
                return this.each(function() {
                    _hasClass(this, a) || (this.className = _trim(this.className + " " + a))
                }),
                this
            },
            removeClass: function(a) {
                return this.each(function() {
                    _hasClass(this, a) && (this.className = _trim(this.className.replace(new RegExp("(^|\\s)" + a + "(\\s|$)"), " ")))
                }),
                this
            },
            html: function(a) {
                var b = this;
                return a === undefined ? b.length < 1 || 1 != b.type ? "": _formatHtml(b[0].innerHTML) : (b.each(function() {
                    _setHtml(this, a)
                }), b)
            },
            text: function() {
                var a = this;
                return a.length < 1 ? "": _IE ? a[0].innerText: a[0].textContent
            },
            hasVal: function() {
                return this.length < 1 ? !1 : _hasVal(this[0])
            },
            val: function(a) {
                var b = this;
                return a === undefined ? b.length < 1 ? "": b.hasVal() ? b[0].value: b.attr("value") : (b.each(function() {
                    _hasVal(this) ? this.value = a: _setAttr(this, "value", a)
                }), b)
            },
            css: function(a, b) {
                var c = this;
                return a === undefined ? _getCssList(c.attr("style")) : "object" == typeof a ? (_each(a,
                function(a, b) {
                    c.css(a, b)
                }), c) : b === undefined ? c.length < 1 ? "": c[0].style[_toCamel(a)] || _computedCss(c[0], a) || "": (c.each(function() {
                    this.style[_toCamel(a)] = b
                }), c)
            },
            width: function(a) {
                var b = this;
                return a === undefined ? b.length < 1 ? 0 : b[0].offsetWidth: b.css("width", _addUnit(a))
            },
            height: function(a) {
                var b = this;
                return a === undefined ? b.length < 1 ? 0 : b[0].offsetHeight: b.css("height", _addUnit(a))
            },
            opacity: function(a) {
                return this.each(function() {
                    this.style.opacity === undefined ? this.style.filter = 1 == a ? "": "alpha(opacity=" + 100 * a + ")": this.style.opacity = 1 == a ? "": a
                }),
                this
            },
            data: function(a, b) {
                var c = this;
                return a = "QingEditor_data_" + a,
                b === undefined ? c.length < 1 ? null: c[0][a] : (this.each(function() {
                    this[a] = b
                }), c)
            },
            pos: function() {
                var a = this,
                b = a[0],
                c = 0,
                d = 0;
                if (b) if (b.getBoundingClientRect) {
                    var e = b.getBoundingClientRect(),
                    f = _getScrollPos(a.doc);
                    c = e.left + f.x,
                    d = e.top + f.y
                } else for (; b;) c += b.offsetLeft,
                d += b.offsetTop,
                b = b.offsetParent;
                return {
                    x: _round(c),
                    y: _round(d)
                }
            },
            clone: function(a) {
                return new KNode(this.length < 1 ? [] : this[0].cloneNode(a))
            },
            append: function(a) {
                return this.each(function() {
                    this.appendChild && this.appendChild(_get(a))
                }),
                this
            },
            appendTo: function(a) {
                return this.each(function() {
                    _get(a).appendChild(this)
                }),
                this
            },
            before: function(a) {
                return this.each(function() {
                    this.parentNode.insertBefore(_get(a), this)
                }),
                this
            },
            after: function(a) {
                return this.each(function() {
                    this.nextSibling ? this.parentNode.insertBefore(_get(a), this.nextSibling) : this.parentNode.appendChild(_get(a))
                }),
                this
            },
            replaceWith: function(a) {
                var b = [];
                return this.each(function(c, d) {
                    _unbind(d);
                    var e = _get(a);
                    d.parentNode.replaceChild(e, d),
                    b.push(e)
                }),
                K(b)
            },
            empty: function() {
                var a = this;
                return a.each(function(a, b) {
                    for (var c = b.firstChild; c;) {
                        if (!b.parentNode) return;
                        var d = c.nextSibling;
                        c.parentNode.removeChild(c),
                        c = d
                    }
                }),
                a
            },
            remove: function(a) {
                var b = this;
                return b.each(function(c, d) {
                    if (d.parentNode) {
                        if (_unbind(d), a) for (var e = d.firstChild; e;) {
                            var f = e.nextSibling;
                            d.parentNode.insertBefore(e, d),
                            e = f
                        }
                        d.parentNode.removeChild(d),
                        delete b[c]
                    }
                }),
                b.length = 0,
                b
            },
            show: function(a) {
                var b = this;
                return a === undefined && (a = b._originDisplay || ""),
                "none" != b.css("display") ? b: b.css("display", a)
            },
            hide: function() {
                var a = this;
                return a.length < 1 ? a: (a._originDisplay = a[0].style.display, a.css("display", "none"))
            },
            outer: function() {
                var a = this;
                if (a.length < 1) return "";
                var b, c = a.doc.createElement("div");
                return c.appendChild(a[0].cloneNode(!0)),
                b = _formatHtml(c.innerHTML),
                c = null,
                b
            },
            isSingle: function() {
                return !! _SINGLE_TAG_MAP[this.name]
            },
            isInline: function() {
                return !! _INLINE_TAG_MAP[this.name]
            },
            isBlock: function() {
                return !! _BLOCK_TAG_MAP[this.name]
            },
            isStyle: function() {
                return !! _STYLE_TAG_MAP[this.name]
            },
            isControl: function() {
                return !! _CONTROL_TAG_MAP[this.name]
            },
            contains: function(a) {
                return this.length < 1 ? !1 : _contains(this[0], _get(a))
            },
            parent: function() {
                if (this.length < 1) return null;
                var a = this[0].parentNode;
                return a ? new KNode(a) : null
            },
            children: function() {
                if (this.length < 1) return new KNode([]);
                for (var a = [], b = this[0].firstChild; b;)(3 != b.nodeType || "" !== _trim(b.nodeValue)) && a.push(b),
                b = b.nextSibling;
                return new KNode(a)
            },
            first: function() {
                var a = this.children();
                return a.length > 0 ? a.eq(0) : null
            },
            last: function() {
                var a = this.children();
                return a.length > 0 ? a.eq(a.length - 1) : null
            },
            index: function() {
                if (this.length < 1) return - 1;
                for (var a = -1,
                b = this[0]; b;) a++,
                b = b.previousSibling;
                return a
            },
            prev: function() {
                if (this.length < 1) return null;
                var a = this[0].previousSibling;
                return a ? new KNode(a) : null
            },
            next: function() {
                if (this.length < 1) return null;
                var a = this[0].nextSibling;
                return a ? new KNode(a) : null
            },
            scan: function(a, b) {
                function c(d) {
                    for (var e = b ? d.firstChild: d.lastChild; e;) {
                        var f = b ? e.nextSibling: e.previousSibling;
                        if (a(e) === !1) return ! 1;
                        if (c(e) === !1) return ! 1;
                        e = f
                    }
                }
                if (! (this.length < 1)) return b = b === undefined ? !0 : b,
                c(this[0]),
                this
            }
        }),
        _each("blur,focus,focusin,focusout,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error,contextmenu".split(","),
        function(a, b) {
            KNode.prototype[b] = function(a) {
                return a ? this.bind(b, a) : this.fire(b)
            }
        });
        var _K = K;
        K = function(a, b) {
            function c(a) {
                return a[0] || (a = []),
                new KNode(a)
            }
            if (a !== undefined && null !== a) {
                if ("string" == typeof a) {
                    b && (b = _get(b));
                    var d = a.length;
                    if ("@" === a.charAt(0) && (a = a.substr(1)), a.length !== d || /<.+>/.test(a)) {
                        var e = b ? b.ownerDocument || b: document,
                        f = e.createElement("div"),
                        g = [];
                        f.innerHTML = '<img id="__QingEditor_temp_tag__" width="0" height="0" style="display:none;" />' + a;
                        for (var h = 0,
                        i = f.childNodes.length; i > h; h++) {
                            var j = f.childNodes[h];
                            "__QingEditor_temp_tag__" != j.id && g.push(j)
                        }
                        return c(g)
                    }
                    return c(_queryAll(a, b))
                }
                return a && a.constructor === KNode ? a: (a.toArray && (a = a.toArray()), c(_isArray(a) ? a: _toArray(arguments)))
            }
        },
        _each(_K,
        function(a, b) {
            K[a] = b
        }),
        K.NodeClass = KNode,
        window.QingEditor = K;
        var _START_TO_START = 0,
        _START_TO_END = 1,
        _END_TO_END = 2,
        _END_TO_START = 3,
        _BOOKMARK_ID = 0;
        _extend(KRange, {
            init: function(a) {
                var b = this;
                b.startContainer = a,
                b.startOffset = 0,
                b.endContainer = a,
                b.endOffset = 0,
                b.collapsed = !0,
                b.doc = a
            },
            commonAncestor: function() {
                function a(a) {
                    for (var b = []; a;) b.push(a),
                    a = a.parentNode;
                    return b
                }
                for (var b, c, d = a(this.startContainer), e = a(this.endContainer), f = 0, g = d.length, h = e.length; ++f && (b = d[g - f], c = e[h - f], b && c && b === c););
                return d[g - f + 1]
            },
            setStart: function(a, b) {
                var c = this,
                d = c.doc;
                return c.startContainer = a,
                c.startOffset = b,
                c.endContainer === d && (c.endContainer = a, c.endOffset = b),
                _updateCollapsed(this)
            },
            setEnd: function(a, b) {
                var c = this,
                d = c.doc;
                return c.endContainer = a,
                c.endOffset = b,
                c.startContainer === d && (c.startContainer = a, c.startOffset = b),
                _updateCollapsed(this)
            },
            setStartBefore: function(a) {
                return this.setStart(a.parentNode || this.doc, K(a).index())
            },
            setStartAfter: function(a) {
                return this.setStart(a.parentNode || this.doc, K(a).index() + 1)
            },
            setEndBefore: function(a) {
                return this.setEnd(a.parentNode || this.doc, K(a).index())
            },
            setEndAfter: function(a) {
                return this.setEnd(a.parentNode || this.doc, K(a).index() + 1)
            },
            selectNode: function(a) {
                return this.setStartBefore(a).setEndAfter(a)
            },
            selectNodeContents: function(a) {
                var b = K(a);
                if (3 == b.type || b.isSingle()) return this.selectNode(a);
                var c = b.children();
                return c.length > 0 ? this.setStartBefore(c[0]).setEndAfter(c[c.length - 1]) : this.setStart(a, 0).setEnd(a, 0)
            },
            collapse: function(a) {
                return a ? this.setEnd(this.startContainer, this.startOffset) : this.setStart(this.endContainer, this.endOffset)
            },
            compareBoundaryPoints: function(a, b) {
                var c = this.get(),
                d = b.get();
                if (!_IERANGE) return c.compareBoundaryPoints(a, d);
                var e = {};
                e[_START_TO_START] = "StartToStart",
                e[_START_TO_END] = "EndToStart",
                e[_END_TO_END] = "EndToEnd",
                e[_END_TO_START] = "StartToEnd";
                var f = c.compareEndPoints(e[a], d);
                if (0 !== f) return f;
                var g, h, i, j, k;
                if ((a === _START_TO_START || a === _END_TO_START) && (g = this.startContainer, j = this.startOffset), (a === _START_TO_END || a === _END_TO_END) && (g = this.endContainer, j = this.endOffset), (a === _START_TO_START || a === _START_TO_END) && (h = b.startContainer, k = b.startOffset), (a === _END_TO_END || a === _END_TO_START) && (h = b.endContainer, k = b.endOffset), g === h) {
                    var l = j - k;
                    return l > 0 ? 1 : 0 > l ? -1 : 0
                }
                for (i = h; i && i.parentNode !== g;) i = i.parentNode;
                if (i) return K(i).index() >= j ? -1 : 1;
                for (i = g; i && i.parentNode !== h;) i = i.parentNode;
                return i ? K(i).index() >= k ? 1 : -1 : (i = K(h).next(), i && i.contains(g) ? 1 : (i = K(g).next(), i && i.contains(h) ? -1 : void 0))
            },
            cloneRange: function() {
                return new KRange(this.doc).setStart(this.startContainer, this.startOffset).setEnd(this.endContainer, this.endOffset)
            },
            toString: function() {
                var a = this.get(),
                b = _IERANGE ? a.text: a.toString();
                return b.replace(/\r\n|\n|\r/g, "")
            },
            cloneContents: function() {
                return _copyAndDelete(this, !0, !1)
            },
            deleteContents: function() {
                return _copyAndDelete(this, !1, !0)
            },
            extractContents: function() {
                return _copyAndDelete(this, !0, !0)
            },
            insertNode: function(a) {
                var b, c, d, e = this,
                f = e.startContainer,
                g = e.startOffset,
                h = e.endContainer,
                i = e.endOffset,
                j = 1;
                return "#document-fragment" === a.nodeName.toLowerCase() && (b = a.firstChild, c = a.lastChild, j = a.childNodes.length),
                1 == f.nodeType ? (d = f.childNodes[g], d ? (f.insertBefore(a, d), f === h && (i += j)) : f.appendChild(a)) : 3 == f.nodeType && (0 === g ? (f.parentNode.insertBefore(a, f), f.parentNode === h && (i += j)) : g >= f.nodeValue.length ? f.nextSibling ? f.parentNode.insertBefore(a, f.nextSibling) : f.parentNode.appendChild(a) : (d = g > 0 ? f.splitText(g) : f, f.parentNode.insertBefore(a, d), f === h && (h = d, i -= g))),
                b ? e.setStartBefore(b).setEndAfter(c) : e.selectNode(a),
                e.compareBoundaryPoints(_END_TO_END, e.cloneRange().setEnd(h, i)) >= 1 ? e: e.setEnd(h, i)
            },
            surroundContents: function(a) {
                return a.appendChild(this.extractContents()),
                this.insertNode(a).selectNode(a)
            },
            isControl: function() {
                var a = this,
                b = a.startContainer,
                c = a.startOffset,
                d = a.endContainer,
                e = a.endOffset;
                return 1 == b.nodeType && b === d && c + 1 === e && K(b.childNodes[c]).isControl()
            },
            get: function(a) {
                var b, c = this,
                d = c.doc;
                if (!_IERANGE) {
                    b = d.createRange();
                    try {
                        b.setStart(c.startContainer, c.startOffset),
                        b.setEnd(c.endContainer, c.endOffset)
                    } catch(e) {}
                    return b
                }
                if (a && c.isControl()) return b = d.body.createControlRange(),
                b.addElement(c.startContainer.childNodes[c.startOffset]),
                b;
                var f = c.cloneRange().down();
                return b = d.body.createTextRange(),
                b.setEndPoint("StartToStart", _getEndRange(f.startContainer, f.startOffset)),
                b.setEndPoint("EndToStart", _getEndRange(f.endContainer, f.endOffset)),
                b
            },
            html: function() {
                return K(this.cloneContents()).outer()
            },
            down: function() {
                function a(a, c, d) {
                    if (1 == a.nodeType) {
                        var e = K(a).children();
                        if (0 !== e.length) {
                            var f, g, h, i;
                            c > 0 && (f = e.eq(c - 1)),
                            c < e.length && (g = e.eq(c)),
                            f && 3 == f.type && (h = f[0], i = h.nodeValue.length),
                            g && 3 == g.type && (h = g[0], i = 0),
                            h && (d ? b.setStart(h, i) : b.setEnd(h, i))
                        }
                    }
                }
                var b = this;
                return a(b.startContainer, b.startOffset, !0),
                a(b.endContainer, b.endOffset, !1),
                b
            },
            up: function() {
                function a(a, c, d) {
                    3 == a.nodeType && (0 === c ? d ? b.setStartBefore(a) : b.setEndBefore(a) : c == a.nodeValue.length && (d ? b.setStartAfter(a) : b.setEndAfter(a)))
                }
                var b = this;
                return a(b.startContainer, b.startOffset, !0),
                a(b.endContainer, b.endOffset, !1),
                b
            },
            enlarge: function(a) {
                function b(b, d, e) {
                    var f, g = K(b);
                    if (! (3 == g.type || _NOSPLIT_TAG_MAP[g.name] || !a && g.isBlock())) if (0 === d) {
                        for (; ! g.prev() && (f = g.parent(), f && !_NOSPLIT_TAG_MAP[f.name] && (a || !f.isBlock()));) g = f;
                        e ? c.setStartBefore(g[0]) : c.setEndBefore(g[0])
                    } else if (d == g.children().length) {
                        for (; ! g.next() && (f = g.parent(), f && !_NOSPLIT_TAG_MAP[f.name] && (a || !f.isBlock()));) g = f;
                        e ? c.setStartAfter(g[0]) : c.setEndAfter(g[0])
                    }
                }
                var c = this;
                return c.up(),
                b(c.startContainer, c.startOffset, !0),
                b(c.endContainer, c.endOffset, !1),
                c
            },
            shrink: function() {
                for (var a, b = this,
                c = b.collapsed; 1 == b.startContainer.nodeType && (a = b.startContainer.childNodes[b.startOffset]) && 1 == a.nodeType && !K(a).isSingle();) b.setStart(a, 0);
                if (c) return b.collapse(c);
                for (; 1 == b.endContainer.nodeType && b.endOffset > 0 && (a = b.endContainer.childNodes[b.endOffset - 1]) && 1 == a.nodeType && !K(a).isSingle();) b.setEnd(a, a.childNodes.length);
                return b
            },
            createBookmark: function(a) {
                var b, c = this,
                d = c.doc,
                e = K('<span style="display:none;"></span>', d)[0];
                return e.id = "__QingEditor_bookmark_start_" + _BOOKMARK_ID+++"__",
                c.collapsed || (b = e.cloneNode(!0), b.id = "__QingEditor_bookmark_end_" + _BOOKMARK_ID+++"__"),
                b && c.cloneRange().collapse(!1).insertNode(b).setEndBefore(b),
                c.insertNode(e).setStartAfter(e),
                {
                    start: a ? "#" + e.id: e,
                    end: b ? a ? "#" + b.id: b: null
                }
            },
            moveToBookmark: function(a) {
                var b = this,
                c = b.doc,
                d = K(a.start, c),
                e = a.end ? K(a.end, c) : null;
                return ! d || d.length < 1 ? b: (b.setStartBefore(d[0]), d.remove(), e && e.length > 0 ? (b.setEndBefore(e[0]), e.remove()) : b.collapse(!0), b)
            },
            dump: function() {
                console.log("--------------------"),
                console.log(3 == this.startContainer.nodeType ? this.startContainer.nodeValue: this.startContainer, this.startOffset),
                console.log(3 == this.endContainer.nodeType ? this.endContainer.nodeValue: this.endContainer, this.endOffset)
            }
        }),
        K.RangeClass = KRange,
        K.range = _range,
        K.START_TO_START = _START_TO_START,
        K.START_TO_END = _START_TO_END,
        K.END_TO_END = _END_TO_END,
        K.END_TO_START = _END_TO_START,
        _extend(KCmd, {
            init: function(a) {
                var b = this,
                c = a.doc;
                b.doc = c,
                b.win = _getWin(c),
                b.sel = _getSel(c),
                b.range = a
            },
            selection: function(a) {
                var b = this,
                c = b.doc,
                d = _getRng(c);
                return b.sel = _getSel(c),
                d ? (b.range = _range(d), "html" == K(b.range.startContainer).name && b.range.selectNodeContents(c.body).collapse(!1), b) : (a && b.range.selectNodeContents(c.body).collapse(!1), b)
            },
            select: function(a) {
                a = _undef(a, !0);
                var b, c = this,
                d = c.sel,
                e = c.range.cloneRange().shrink(),
                f = e.startContainer,
                g = e.startOffset,
                h = (e.endContainer, e.endOffset, _getDoc(f)),
                i = c.win,
                j = !1;
                if (a && 1 == f.nodeType && e.collapsed) {
                    if (_IERANGE) {
                        var k = K("<span>&nbsp;</span>", h);
                        e.insertNode(k[0]),
                        b = h.body.createTextRange();
                        try {
                            b.moveToElementText(k[0])
                        } catch(l) {}
                        return b.collapse(!1),
                        b.select(),
                        k.remove(),
                        i.focus(),
                        c
                    }
                    if (_WEBKIT) {
                        var m = f.childNodes; (K(f).isInline() || g > 0 && K(m[g - 1]).isInline() || m[g] && K(m[g]).isInline()) && (e.insertNode(h.createTextNode("​")), j = !0)
                    }
                }
                if (_IERANGE) try {
                    b = e.get(!0),
                    b.select()
                } catch(n) {} else if (j && e.collapse(!1), b = e.get(!0), d.removeAllRanges(), d.addRange(b), h !== document) {
                    var o = K(b.endContainer).pos();
                    i.scrollTo(o.x, o.y)
                }
                return i.focus(),
                c
            },
            wrap: function(a) {
                var b, c = this,
                d = c.doc,
                e = c.range;
                if (b = K(a, d), e.collapsed) return e.shrink(),
                e.insertNode(b[0]).selectNodeContents(b[0]),
                c;
                if (b.isBlock()) {
                    for (var f = b.clone(!0), g = f; g.first();) g = g.first();
                    return g.append(e.extractContents()),
                    e.insertNode(f[0]).selectNode(f[0]),
                    c
                }
                e.enlarge();
                var h = e.createBookmark(),
                i = e.commonAncestor(),
                j = !1;
                return K(i).scan(function(a) {
                    if (!j && a == h.start) return void(j = !0);
                    if (j) {
                        if (a == h.end) return ! 1;
                        var c = K(a);
                        if (_inPreElement(c)) return;
                        if (3 == c.type && _trim(a.nodeValue).length > 0) {
                            for (var d; (d = c.parent()) && d.isStyle() && 1 == d.children().length;) c = d;
                            _wrapNode(c, b)
                        }
                    }
                }),
                e.moveToBookmark(h),
                c
            },
            split: function(a, b) {
                for (var c, d = this.range,
                e = d.doc,
                f = d.cloneRange().collapse(a), g = f.startContainer, h = f.startOffset, i = 3 == g.nodeType ? g.parentNode: g, j = !1; i && i.parentNode;) {
                    if (c = K(i), b) {
                        if (!c.isStyle()) break;
                        if (!_hasAttrOrCss(c, b)) break
                    } else if (_NOSPLIT_TAG_MAP[c.name]) break;
                    j = !0,
                    i = i.parentNode
                }
                if (j) {
                    var k = e.createElement("span");
                    d.cloneRange().collapse(!a).insertNode(k),
                    a ? f.setStartBefore(i.firstChild).setEnd(g, h) : f.setStart(g, h).setEndAfter(i.lastChild);
                    var l = f.extractContents(),
                    m = l.firstChild,
                    n = l.lastChild;
                    a ? (f.insertNode(l), d.setStartAfter(n).setEndBefore(k)) : (i.appendChild(l), d.setStartBefore(k).setEndBefore(m));
                    var o = k.parentNode;
                    if (o == d.endContainer) {
                        var p = K(k).prev(),
                        q = K(k).next();
                        p && q && 3 == p.type && 3 == q.type ? d.setEnd(p[0], p[0].nodeValue.length) : a || d.setEnd(d.endContainer, d.endOffset - 1)
                    }
                    o.removeChild(k)
                }
                return this
            },
            remove: function(a) {
                var b = this,
                c = b.doc,
                d = b.range;
                if (d.enlarge(), 0 === d.startOffset) {
                    for (var e, f = K(d.startContainer); (e = f.parent()) && e.isStyle() && 1 == e.children().length;) f = e;
                    d.setStart(f[0], 0),
                    f = K(d.startContainer),
                    f.isBlock() && _removeAttrOrCss(f, a);
                    var g = f.parent();
                    g && g.isBlock() && _removeAttrOrCss(g, a)
                }
                var h, i;
                if (d.collapsed) {
                    if (b.split(!0, a), h = d.startContainer, i = d.startOffset, i > 0) {
                        var j = K(h.childNodes[i - 1]);
                        j && _isEmptyNode(j) && (j.remove(), d.setStart(h, i - 1))
                    }
                    var k = K(h.childNodes[i]);
                    return k && _isEmptyNode(k) && k.remove(),
                    _isEmptyNode(h) && (d.startBefore(h), h.remove()),
                    d.collapse(!0),
                    b
                }
                b.split(!0, a),
                b.split(!1, a);
                var l = c.createElement("span"),
                m = c.createElement("span");
                d.cloneRange().collapse(!1).insertNode(m),
                d.cloneRange().collapse(!0).insertNode(l);
                var n = [],
                o = !1;
                K(d.commonAncestor()).scan(function(a) {
                    return o || a != l ? a == m ? !1 : void(o && n.push(a)) : void(o = !0)
                }),
                K(l).remove(),
                K(m).remove(),
                h = d.startContainer,
                i = d.startOffset;
                var p = d.endContainer,
                q = d.endOffset;
                if (i > 0) {
                    var r = K(h.childNodes[i - 1]);
                    r && _isEmptyNode(r) && (r.remove(), d.setStart(h, i - 1), h == p && d.setEnd(p, q - 1));
                    var s = K(h.childNodes[i]);
                    s && _isEmptyNode(s) && (s.remove(), h == p && d.setEnd(p, q - 1))
                }
                var t = K(p.childNodes[d.endOffset]);
                t && _isEmptyNode(t) && t.remove();
                var u = d.createBookmark(!0);
                return _each(n,
                function(b, c) {
                    _removeAttrOrCss(K(c), a)
                }),
                d.moveToBookmark(u),
                b
            },
            commonNode: function(a) {
                function b(b) {
                    for (var c = b,
                    d = b; d;) {
                        if (_hasAttrOrCss(K(d), a)) return K(d);
                        d = d.parentNode
                    }
                    for (; c && (c = c.lastChild);) if (_hasAttrOrCss(K(c), a)) return K(c);
                    return null
                }
                var c = this.range,
                d = c.endContainer,
                e = c.endOffset,
                f = 3 == d.nodeType || 0 === e ? d: d.childNodes[e - 1],
                g = b(f);
                if (g) return g;
                if (1 == f.nodeType || 3 == d.nodeType && 0 === e) {
                    var h = K(f).prev();
                    if (h) return b(h)
                }
                return null
            },
            commonAncestor: function(a) {
                function b(b) {
                    for (; b;) {
                        if (1 == b.nodeType && b.tagName.toLowerCase() === a) return b;
                        b = b.parentNode
                    }
                    return null
                }
                var c = this.range,
                d = c.startContainer,
                e = c.startOffset,
                f = c.endContainer,
                g = c.endOffset,
                h = 3 == d.nodeType || 0 === e ? d: d.childNodes[e - 1],
                i = 3 == f.nodeType || 0 === g ? f: f.childNodes[g - 1],
                j = b(h),
                k = b(i);
                return j && k && j === k ? K(j) : null
            },
            state: function(a) {
                var b = this,
                c = b.doc,
                d = !1;
                try {
                    d = c.queryCommandState(a)
                } catch(e) {}
                return d
            },
            val: function(a) {
                function b(a) {
                    return a.toLowerCase()
                }
                var c = this,
                d = c.doc;
                c.range;
                a = b(a);
                var e, f = "";
                return "fontfamily" === a || "fontname" === a ? (f = _nativeCommandValue(d, "fontname"), f = f.replace(/['"]/g, ""), b(f)) : "formatblock" === a ? (f = _nativeCommandValue(d, a), "" === f && (e = c.commonNode({
                    "h1,h2,h3,h4,h5,h6,p,div,pre,address": "*"
                }), e && (f = e.name)), "Normal" === f && (f = "p"), b(f)) : "fontsize" === a ? (e = c.commonNode({
                    "*": ".font-size"
                }), e && (f = e.css("font-size")), b(f)) : "forecolor" === a ? (e = c.commonNode({
                    "*": ".color"
                }), e && (f = e.css("color")), f = _toHex(f), "" === f && (f = "default"), b(f)) : "hilitecolor" === a ? (e = c.commonNode({
                    "*": ".background-color"
                }), e && (f = e.css("background-color")), f = _toHex(f), "" === f && (f = "default"), b(f)) : f
            },
            toggle: function(a, b) {
                var c = this;
                return c.commonNode(b) ? c.remove(b) : c.wrap(a),
                c.select()
            },
            bold: function() {
                return this.toggle("<strong></strong>", {
                    span: ".font-weight=bold",
                    strong: "*",
                    b: "*"
                })
            },
            italic: function() {
                return this.toggle("<em></em>", {
                    span: ".font-style=italic",
                    em: "*",
                    i: "*"
                })
            },
            underline: function() {
                return this.toggle("<u></u>", {
                    span: ".text-decoration=underline",
                    u: "*"
                })
            },
            strikethrough: function() {
                return this.toggle("<s></s>", {
                    span: ".text-decoration=line-through",
                    s: "*"
                })
            },
            forecolor: function(a) {
                return this.wrap('<span style="color:' + a + ';"></span>').select()
            },
            hilitecolor: function(a) {
                return this.wrap('<span style="background-color:' + a + ';"></span>').select()
            },
            fontsize: function(a) {
                return this.wrap('<span style="font-size:' + a + ';"></span>').select()
            },
            fontname: function(a) {
                return this.fontfamily(a)
            },
            fontfamily: function(a) {
                return this.wrap('<span style="font-family:' + a + ';"></span>').select()
            },
            removeformat: function() {
                var a = {
                    "*": ".font-weight,.font-style,.text-decoration,.color,.background-color,.font-size,.font-family,.text-indent"
                },
                b = _STYLE_TAG_MAP;
                return _each(b,
                function(b, c) {
                    a[b] = "*"
                }),
                this.remove(a),
                this.select()
            },
            inserthtml: function(a, b) {
                function c(a, b) {
                    b = '<img id="__QingEditor_temp_tag__" width="0" height="0" style="display:none;" />' + b;
                    var c = a.get();
                    c.item ? c.item(0).outerHTML = b: c.pasteHTML(b);
                    var d = a.doc.getElementById("__QingEditor_temp_tag__");
                    d.parentNode.removeChild(d);
                    var f = _toRange(c);
                    a.setEnd(f.endContainer, f.endOffset),
                    a.collapse(!1),
                    e.select(!1)
                }
                function d(a, b) {
                    var c = a.doc,
                    d = c.createDocumentFragment();
                    K("@" + b, c).each(function() {
                        d.appendChild(this)
                    }),
                    a.deleteContents(),
                    a.insertNode(d),
                    a.collapse(!1),
                    e.select(!1)
                }
                var e = this,
                f = e.range;
                if ("" === a) return e;
                if (_IERANGE && b) {
                    try {
                        c(f, a)
                    } catch(g) {
                        d(f, a)
                    }
                    return e
                }
                return d(f, a),
                e
            },
            hr: function() {
                return this.inserthtml("<hr />")
            },
            print: function() {
                return this.win.print(),
                this
            },
            insertimage: function(a, b, c, d, e, f) {
                b = _undef(b, ""),
                e = _undef(e, 0);
                var g = '<img src="' + _escape(a) + '" data-ke-src="' + _escape(a) + '" ';
                return c && (g += 'width="' + _escape(c) + '" '),
                d && (g += 'height="' + _escape(d) + '" '),
                b && (g += 'title="' + _escape(b) + '" '),
                f && (g += 'align="' + _escape(f) + '" '),
                g += 'alt="' + _escape(b) + '" ',
                g += "/>",
                this.inserthtml(g)
            },
            createlink: function(a, b) {
                function c(a, b, c) {
                    K(a).attr("href", b).attr("data-ke-src", b),
                    c ? K(a).attr("target", c) : K(a).removeAttr("target")
                }
                var d = this,
                e = d.doc,
                f = d.range;
                d.select();
                var g = d.commonNode({
                    a: "*"
                });
                g && !f.isControl() && (f.selectNode(g.get()), d.select());
                var h = '<a href="' + _escape(a) + '" data-ke-src="' + _escape(a) + '" ';
                if (b && (h += ' target="' + _escape(b) + '"'), f.collapsed) return h += ">" + _escape(a) + "</a>",
                d.inserthtml(h);
                if (f.isControl()) {
                    var i = K(f.startContainer.childNodes[f.startOffset]);
                    return h += "></a>",
                    i.after(K(h, e)),
                    i.next().append(i),
                    f.selectNode(i[0]),
                    d.select()
                }
                var j = f.startContainer,
                k = f.startOffset,
                l = f.endContainer,
                m = f.endOffset;
                if (1 == j.nodeType && j === l && k + 1 === m) {
                    var n = j.childNodes[k];
                    if ("a" == n.nodeName.toLowerCase()) return c(n, a, b),
                    d
                }
                return _nativeCommand(e, "createlink", "__QingEditor_temp_url__"),
                K('a[href="__QingEditor_temp_url__"]', e).each(function() {
                    c(this, a, b)
                }),
                d
            },
            unlink: function() {
                var a = this,
                b = a.doc,
                c = a.range;
                if (a.select(), c.collapsed) {
                    var d = a.commonNode({
                        a: "*"
                    });
                    if (d && (c.selectNode(d.get()), a.select()), _nativeCommand(b, "unlink", null), _WEBKIT && "img" === K(c.startContainer).name) {
                        var e = K(c.startContainer).parent();
                        "a" === e.name && e.remove(!0)
                    }
                } else _nativeCommand(b, "unlink", null);
                return a
            }
        }),
        _each("formatblock,selectall,justifyleft,justifycenter,justifyright,justifyfull,insertorderedlist,insertunorderedlist,indent,outdent,subscript,superscript".split(","),
        function(a, b) {
            KCmd.prototype[b] = function(a) {
                var c = this;
                return c.select(),
                _nativeCommand(c.doc, b, a),
                _IERANGE && _inArray(b, "justifyleft,justifycenter,justifyright,justifyfull".split(",")) >= 0 && c.selection(),
                (!_IERANGE || _inArray(b, "formatblock,selectall,insertorderedlist,insertunorderedlist".split(",")) >= 0) && c.selection(),
                c
            }
        }),
        _each("cut,copy,paste".split(","),
        function(a, b) {
            KCmd.prototype[b] = function() {
                var a = this;
                if (!a.doc.queryCommandSupported(b)) throw "not supported";
                return a.select(),
                _nativeCommand(a.doc, b, null),
                a
            }
        }),
        K.CmdClass = KCmd,
        K.cmd = _cmd,
        _extend(KWidget, {
            init: function(a) {
                var b = this;
                if (b.name = a.name || "", b.doc = a.doc || document, b.win = _getWin(b.doc), b.x = _addUnit(a.x), b.y = _addUnit(a.y), b.z = a.z, b.width = _addUnit(a.width), b.height = _addUnit(a.height), b.div = K('<div style="display:block;"></div>'), b.options = a, b._alignEl = a.alignEl, b.width && b.div.css("width", b.width), b.height && b.div.css("height", b.height), b.z && b.div.css({
                    position: "absolute",
                    left: b.x,
                    top: b.y,
                    "z-index": b.z
                }), !b.z || b.x !== undefined && b.y !== undefined || b.autoPos(b.width, b.height), a.cls && b.div.addClass(a.cls), a.shadowMode && b.div.addClass("ke-shadow"), a.css && b.div.css(a.css), a.src ? K(a.src).replaceWith(b.div) : K(b.doc.body).append(b.div), a.html && b.div.html(a.html), a.autoScroll) if (_IE && 7 > _V || _QUIRKS) {
                    var c = _getScrollPos();
                    K(b.win).bind("scroll",
                    function(a) {
                        var d = _getScrollPos(),
                        e = d.x - c.x,
                        f = d.y - c.y;
                        b.pos(_removeUnit(b.x) + e, _removeUnit(b.y) + f, !1)
                    })
                } else b.div.css("position", "fixed")
            },
            pos: function(a, b, c) {
                var d = this;
                return c = _undef(c, !0),
                null !== a && (a = 0 > a ? 0 : _addUnit(a), d.div.css("left", a), c && (d.x = a)),
                null !== b && (b = 0 > b ? 0 : _addUnit(b), d.div.css("top", b), c && (d.y = b)),
                d
            },
            autoPos: function(a, b) {
                var c, d, e = this,
                f = _removeUnit(a) || 0,
                g = _removeUnit(b) || 0,
                h = _getScrollPos();
                if (e._alignEl) {
                    var i = K(e._alignEl),
                    j = i.pos(),
                    k = _round(i[0].clientWidth / 2 - f / 2),
                    l = _round(i[0].clientHeight / 2 - g / 2);
                    c = 0 > k ? j.x: j.x + k,
                    d = 0 > l ? j.y: j.y + l
                } else {
                    var m = _docElement(e.doc);
                    c = _round(h.x + (m.clientWidth - f) / 2),
                    d = _round(h.y + (m.clientHeight - g) / 2)
                }
                return _IE && 7 > _V || _QUIRKS || (c -= h.x, d -= h.y),
                e.pos(c, d)
            },
            remove: function() {
                var a = this;
                return (_IE && 7 > _V || _QUIRKS) && K(a.win).unbind("scroll"),
                a.div.remove(),
                _each(a,
                function(b) {
                    a[b] = null
                }),
                this
            },
            show: function() {
                return this.div.show(),
                this
            },
            hide: function() {
                return this.div.hide(),
                this
            },
            draggable: function(a) {
                var b = this;
                return a = a || {},
                a.moveEl = b.div,
                a.moveFn = function(a, c, d, e, f, g) { (a += f) < 0 && (a = 0),
                    (c += g) < 0 && (c = 0),
                    b.pos(a, c)
                },
                _drag(a),
                b
            }
        }),
        K.WidgetClass = KWidget,
        K.widget = _widget;
        var html, _direction = ""; (html = document.getElementsByTagName("html")) && (_direction = html[0].dir),
        _extend(KEdit, KWidget, {
            init: function(a) {
                function b() {
                    var b = _iframeDoc(c.iframe);
                    b.open(),
                    h && (b.domain = document.domain),
                    b.write(_getInitHtml(d, e, f, g)),
                    b.close(),
                    c.win = c.iframe[0].contentWindow,
                    c.doc = b;
                    var i = _cmd(b);
                    c.afterChange(function(a) {
                        i.selection()
                    }),
                    _WEBKIT && K(b).click(function(a) {
                        "img" === K(a.target).name && (i.selection(!0), i.range.selectNode(a.target), i.select())
                    }),
                    _IE && (c._mousedownHandler = function() {
                        var a = i.range.cloneRange();
                        a.shrink(),
                        a.isControl() && c.blur()
                    },
                    K(document).mousedown(c._mousedownHandler), K(b).keydown(function(a) {
                        if (8 == a.which) {
                            i.selection();
                            var b = i.range;
                            b.isControl() && (b.collapse(!0), K(b.startContainer.childNodes[b.startOffset]).remove(), a.preventDefault())
                        }
                    })),
                    c.cmd = i,
                    c.html(_elementVal(c.srcElement)),
                    _IE ? (b.body.disabled = !0, b.body.contentEditable = !0, b.body.removeAttribute("disabled")) : b.designMode = "on",
                    a.afterCreate && a.afterCreate.call(c)
                }
                var c = this;
                KEdit.parent.init.call(c, a),
                c.srcElement = K(a.srcElement),
                c.div.addClass("ke-edit"),
                c.designMode = _undef(a.designMode, !0),
                c.beforeGetHtml = a.beforeGetHtml,
                c.beforeSetHtml = a.beforeSetHtml,
                c.afterSetHtml = a.afterSetHtml;
                var d = _undef(a.themesPath, ""),
                e = a.bodyClass,
                f = a.cssPath,
                g = a.cssData,
                h = "res:" != location.protocol && location.host.replace(/:\d+/, "") !== document.domain,
                i = "document.open();" + (h ? 'document.domain="' + document.domain + '";': "") + "document.close();",
                j = _IE ? ' src="javascript:void(function(){' + encodeURIComponent(i) + '}())"': "";
                c.iframe = K('<iframe class="ke-edit-iframe" hidefocus="true" frameborder="0"' + j + "></iframe>").css("width", "100%"),
                c.textarea = K('<textarea class="ke-edit-textarea" hidefocus="true"></textarea>').css("width", "100%"),
                c.tabIndex = isNaN(parseInt(a.tabIndex, 10)) ? c.srcElement.attr("tabindex") : parseInt(a.tabIndex, 10),
                c.iframe.attr("tabindex", c.tabIndex),
                c.textarea.attr("tabindex", c.tabIndex),
                c.width && c.setWidth(c.width),
                c.height && c.setHeight(c.height),
                c.designMode ? c.textarea.hide() : c.iframe.hide(),
                h && c.iframe.bind("load",
                function(a) {
                    c.iframe.unbind("load"),
                    _IE ? b() : setTimeout(b, 0)
                }),
                c.div.append(c.iframe),
                c.div.append(c.textarea),
                c.srcElement.hide(),
                !h && b()
            },
            setWidth: function(a) {
                var b = this;
                return a = _addUnit(a),
                b.width = a,
                b.div.css("width", a),
                b
            },
            setHeight: function(a) {
                var b = this;
                return a = _addUnit(a),
                b.height = a,
                b.div.css("height", a),
                b.iframe.css("height", a),
                (_IE && 8 > _V || _QUIRKS) && (a = _addUnit(_removeUnit(a) - 2)),
                b.textarea.css("height", a),
                b
            },
            remove: function() {
                var a = this,
                b = a.doc;
                K(b.body).unbind(),
                K(b).unbind(),
                K(a.win).unbind(),
                a._mousedownHandler && K(document).unbind("mousedown", a._mousedownHandler),
                _elementVal(a.srcElement, a.html()),
                a.srcElement.show(),
                a.iframe.unbind(),
                a.textarea.unbind(),
                KEdit.parent.remove.call(a)
            },
            html: function(a, b) {
                var c = this,
                d = c.doc;
                if (c.designMode) {
                    var e = d.body;
                    return a === undefined ? (a = b ? "<!doctype html><html>" + e.parentNode.innerHTML + "</html>": e.innerHTML, c.beforeGetHtml && (a = c.beforeGetHtml(a)), _GECKO && "<br />" == a && (a = ""), a) : (c.beforeSetHtml && (a = c.beforeSetHtml(a)), _IE && _V >= 9 && (a = a.replace(/(<.*?checked=")checked(".*>)/gi, "$1$2")), K(e).html(a), c.afterSetHtml && c.afterSetHtml(), c)
                }
                return a === undefined ? c.textarea.val() : (c.textarea.val(a), c)
            },
            design: function(a) {
                var b, c = this;
                if (a === undefined ? !c.designMode: a) {
                    if (!c.designMode) {
                        b = c.html(),
                        c.designMode = !0,
                        c.textarea.hide(),
                        c.html(b);
                        var d = c.iframe,
                        e = _removeUnit(c.height);
                        d.height(e - 2),
                        d.show(),
                        setTimeout(function() {
                            d.height(e)
                        },
                        0)
                    }
                } else c.designMode && (b = c.html(), c.designMode = !1, c.html(b), c.iframe.hide(), c.textarea.show());
                return c.focus()
            },
            focus: function() {
                var a = this;
                return a.designMode ? a.win.focus() : a.textarea[0].focus(),
                a
            },
            blur: function() {
                var a = this;
                if (_IE) {
                    var b = K('<input type="text" style="float:left;width:0;height:0;padding:0;margin:0;border:0;" value="" />', a.div);
                    a.div.append(b),
                    b[0].focus(),
                    b.remove()
                } else a.designMode ? a.win.blur() : a.textarea[0].blur();
                return a
            },
            afterChange: function(a) {
                function b(b) {
                    setTimeout(function() {
                        a(b)
                    },
                    1)
                }
                var c = this,
                d = c.doc,
                e = d.body;
                return K(d).keyup(function(b) {
                    b.ctrlKey || b.altKey || !_CHANGE_KEY_MAP[b.which] || a(b)
                }),
                K(d).mouseup(a).contextmenu(a),
                K(c.win).blur(a),
                K(e).bind("paste", b),
                K(e).bind("cut", b),
                c
            }
        }),
        K.EditClass = KEdit,
        K.edit = _edit,
        K.iframeDoc = _iframeDoc,
        _extend(KToolbar, KWidget, {
            init: function(a) {
                function b(a) {
                    var b = K(a);
                    return b.hasClass("ke-outline") ? b: b.hasClass("ke-toolbar-icon") ? b.parent() : void 0
                }
                function c(a, c) {
                    var d = b(a.target);
                    if (d) {
                        if (d.hasClass("ke-disabled")) return;
                        if (d.hasClass("ke-selected")) return;
                        d[c]("ke-on")
                    }
                }
                var d = this;
                KToolbar.parent.init.call(d, a),
                d.disableMode = _undef(a.disableMode, !1),
                d.noDisableItemMap = _toMap(_undef(a.noDisableItems, [])),
                d._itemMap = {},
                d.div.addClass("ke-toolbar").bind("contextmenu,mousedown,mousemove",
                function(a) {
                    a.preventDefault()
                }).attr("unselectable", "on"),
                d.div.mouseover(function(a) {
                    c(a, "addClass")
                }).mouseout(function(a) {
                    c(a, "removeClass")
                }).click(function(a) {
                    var c = b(a.target);
                    if (c) {
                        if (c.hasClass("ke-disabled")) return;
                        d.options.click.call(this, a, c.attr("data-name"))
                    }
                })
            },
            get: function(a) {
                return this._itemMap[a] ? this._itemMap[a] : this._itemMap[a] = K("span.ke-icon-" + a, this.div).parent()
            },
            select: function(a) {
                return _selectToolbar.call(this, a,
                function(a) {
                    a.addClass("ke-selected")
                }),
                self
            },
            unselect: function(a) {
                return _selectToolbar.call(this, a,
                function(a) {
                    a.removeClass("ke-selected").removeClass("ke-on")
                }),
                self
            },
            enable: function(a) {
                var b = this,
                c = a.get ? a: b.get(a);
                return c && (c.removeClass("ke-disabled"), c.opacity(1)),
                b
            },
            disable: function(a) {
                var b = this,
                c = a.get ? a: b.get(a);
                return c && (c.removeClass("ke-selected").addClass("ke-disabled"), c.opacity(.5)),
                b
            },
            disableAll: function(a, b) {
                var c = this,
                d = c.noDisableItemMap;
                return b && (d = _toMap(b)),
                (a === undefined ? !c.disableMode: a) ? (K("span.ke-outline", c.div).each(function() {
                    var a = K(this),
                    b = a[0].getAttribute("data-name", 2);
                    d[b] || c.disable(a)
                }), c.disableMode = !0) : (K("span.ke-outline", c.div).each(function() {
                    var a = K(this),
                    b = a[0].getAttribute("data-name", 2);
                    d[b] || c.enable(a)
                }), c.disableMode = !1),
                c
            }
        }),
        K.ToolbarClass = KToolbar,
        K.toolbar = _toolbar,
        _extend(KMenu, KWidget, {
            init: function(a) {
                var b = this;
                a.z = a.z || 811213,
                KMenu.parent.init.call(b, a),
                b.centerLineMode = _undef(a.centerLineMode, !0),
                b.div.addClass("ke-menu").bind("click,mousedown",
                function(a) {
                    a.stopPropagation()
                }).attr("unselectable", "on")
            },
            addItem: function(a) {
                var b = this;
                if ("-" === a.title) return void b.div.append(K('<div class="ke-menu-separator"></div>'));
                var c = K('<div class="ke-menu-item" unselectable="on"></div>'),
                d = K('<div class="ke-inline-block ke-menu-item-left"></div>'),
                e = K('<div class="ke-inline-block ke-menu-item-right"></div>'),
                f = _addUnit(a.height),
                g = _undef(a.iconClass, "");
                b.div.append(c),
                f && (c.css("height", f), e.css("line-height", f));
                var h;
                return b.centerLineMode && (h = K('<div class="ke-inline-block ke-menu-item-center"></div>'), f && h.css("height", f)),
                c.mouseover(function(a) {
                    K(this).addClass("ke-menu-item-on"),
                    h && h.addClass("ke-menu-item-center-on")
                }).mouseout(function(a) {
                    K(this).removeClass("ke-menu-item-on"),
                    h && h.removeClass("ke-menu-item-center-on")
                }).click(function(b) {
                    a.click.call(K(this)),
                    b.stopPropagation()
                }).append(d),
                h && c.append(h),
                c.append(e),
                a.checked && (g = "ke-icon-checked"),
                "" !== g && d.html('<span class="ke-inline-block ke-toolbar-icon ke-toolbar-icon-url ' + g + '"></span>'),
                e.html(a.title),
                b
            },
            remove: function() {
                var a = this;
                return a.options.beforeRemove && a.options.beforeRemove.call(a),
                K(".ke-menu-item", a.div[0]).unbind(),
                KMenu.parent.remove.call(a),
                a
            }
        }),
        K.MenuClass = KMenu,
        K.menu = _menu,
        _extend(KColorPicker, KWidget, {
            init: function(a) {
                var b = this;
                a.z = a.z || 811213,
                KColorPicker.parent.init.call(b, a);
                var c = a.colors || [["#E53333", "#E56600", "#FF9900", "#64451D", "#DFC5A4", "#FFE500"], ["#009900", "#006600", "#99BB00", "#B8D100", "#60D978", "#00D5FF"], ["#337FE5", "#003399", "#4C33E5", "#9933E5", "#CC33E5", "#EE33EE"], ["#FFFFFF", "#CCCCCC", "#999999", "#666666", "#333333", "#000000"]];
                b.selectedColor = (a.selectedColor || "").toLowerCase(),
                b._cells = [],
                b.div.addClass("ke-colorpicker").bind("click,mousedown",
                function(a) {
                    a.stopPropagation()
                }).attr("unselectable", "on");
                var d = b.doc.createElement("table");
                b.div.append(d),
                d.className = "ke-colorpicker-table",
                d.cellPadding = 0,
                d.cellSpacing = 0,
                d.border = 0;
                var e = d.insertRow(0),
                f = e.insertCell(0);
                f.colSpan = c[0].length,
                b._addAttr(f, "", "ke-colorpicker-cell-top");
                for (var g = 0; g < c.length; g++) {
                    e = d.insertRow(g + 1);
                    for (var h = 0; h < c[g].length; h++) f = e.insertCell(h),
                    b._addAttr(f, c[g][h], "ke-colorpicker-cell")
                }
            },
            _addAttr: function(a, b, c) {
                var d = this;
                a = K(a).addClass(c),
                d.selectedColor === b.toLowerCase() && a.addClass("ke-colorpicker-cell-selected"),
                a.attr("title", b || d.options.noColor),
                a.mouseover(function(a) {
                    K(this).addClass("ke-colorpicker-cell-on")
                }),
                a.mouseout(function(a) {
                    K(this).removeClass("ke-colorpicker-cell-on")
                }),
                a.click(function(a) {
                    a.stop(),
                    d.options.click.call(K(this), b)
                }),
                b ? a.append(K('<div class="ke-colorpicker-cell-color" unselectable="on"></div>').css("background-color", b)) : a.html(d.options.noColor),
                K(a).attr("unselectable", "on"),
                d._cells.push(a)
            },
            remove: function() {
                var a = this;
                return _each(a._cells,
                function() {
                    this.unbind()
                }),
                KColorPicker.parent.remove.call(a),
                a
            }
        }),
        K.ColorPickerClass = KColorPicker,
        K.colorpicker = _colorpicker,
        _extend(KUploadButton, {
            init: function(a) {
                var b = this,
                c = K(a.button),
                d = a.fieldName || "file",
                e = a.url || "",
                f = c.val(),
                g = a.extraParams || {},
                h = c[0].className || "",
                i = a.target || "QingEditor_upload_iframe_" + (new Date).getTime();
                a.afterError = a.afterError ||
                function(a) {
                    alert(a)
                };
                var j = [];
                for (var k in g) j.push('<input type="hidden" name="' + k + '" value="' + g[k] + '" />');
                var l = ['<div class="ke-inline-block ' + h + '">', a.target ? "": '<iframe name="' + i + '" style="display:none;"></iframe>', a.form ? '<div class="ke-upload-area">': '<form class="ke-upload-area ke-form" method="post" enctype="multipart/form-data" target="' + i + '" action="' + e + '">', '<span class="ke-button-common">', j.join(""), '<input type="button" class="ke-button-common ke-button" value="' + f + '" />', "</span>", '<input type="file" class="ke-upload-file" name="' + d + '" tabindex="-1" />', a.form ? "</div>": "</form>", "</div>"].join(""),
                m = K(l, c.doc);
                c.hide(),
                c.before(m),
                b.div = m,
                b.button = c,
                b.iframe = a.target ? K('iframe[name="' + i + '"]') : K("iframe", m),
                b.form = a.form ? K(a.form) : K("form", m),
                b.fileBox = K(".ke-upload-file", m);
                var n = a.width || K(".ke-button-common", m).width();
                K(".ke-upload-area", m).width(n),
                b.options = a
            },
            submit: function() {
                var a = this,
                b = a.iframe;
                return b.bind("load",
                function() {
                    b.unbind();
                    var c = document.createElement("form");
                    a.fileBox.before(c),
                    K(c).append(a.fileBox),
                    c.reset(),
                    K(c).remove(!0);
                    var d, e = K.iframeDoc(b),
                    f = e.getElementsByTagName("pre")[0],
                    g = "";
                    g = f ? f.innerHTML: e.body.innerHTML,
                    g = _unescape(g),
                    b[0].src = "javascript:false";
                    try {
                        d = K.json(g)
                    } catch(h) {
                        a.options.afterError.call(a, "<!doctype html><html>" + e.body.parentNode.innerHTML + "</html>")
                    }
                    d && a.options.afterUpload.call(a, d)
                }),
                a.form[0].submit(),
                a
            },
            remove: function() {
                var a = this;
                return a.fileBox && a.fileBox.unbind(),
                a.iframe.remove(),
                a.div.remove(),
                a.button.show(),
                a
            }
        }),
        K.UploadButtonClass = KUploadButton,
        K.uploadbutton = _uploadbutton,
        _extend(KDialog, KWidget, {
            init: function(a) {
                var b = this,
                c = _undef(a.shadowMode, !0);
                a.z = a.z || 811213,
                a.shadowMode = !1,
                a.autoScroll = _undef(a.autoScroll, !0),
                KDialog.parent.init.call(b, a);
                var d = a.title,
                e = K(a.body, b.doc),
                f = a.previewBtn,
                g = a.yesBtn,
                h = a.noBtn,
                i = a.closeBtn,
                j = _undef(a.showMask, !0);
                b.div.addClass("ke-dialog").bind("click,mousedown",
                function(a) {
                    a.stopPropagation()
                });
                var k = K('<div class="ke-dialog-content"></div>').appendTo(b.div);
                _IE && 7 > _V ? b.iframeMask = K('<iframe src="about:blank" class="ke-dialog-shadow"></iframe>').appendTo(b.div) : c && K('<div class="ke-dialog-shadow"></div>').appendTo(b.div);
                var l = K('<div class="ke-dialog-header"></div>');
                k.append(l),
                l.html(d),
                b.closeIcon = K('<span class="ke-dialog-icon-close" title="' + i.name + '"></span>').click(i.click),
                l.append(b.closeIcon),
                b.draggable({
                    clickEl: l,
                    beforeDrag: a.beforeDrag
                });
                var m = K('<div class="ke-dialog-body"></div>');
                k.append(m),
                m.append(e);
                var n = K('<div class="ke-dialog-footer"></div>');
                if ((f || g || h) && k.append(n), _each([{
                    btn: f,
                    name: "preview"
                },
                {
                    btn: g,
                    name: "yes"
                },
                {
                    btn: h,
                    name: "no"
                }],
                function() {
                    if (this.btn) {
                        var a = _createButton(this.btn);
                        a.addClass("ke-dialog-" + this.name),
                        n.append(a)
                    }
                }), b.height && m.height(_removeUnit(b.height) - l.height() - n.height()), b.div.width(b.div.width()), b.div.height(b.div.height()), b.mask = null, j) {
                    var o = _docElement(b.doc),
                    p = Math.max(o.scrollWidth, o.clientWidth),
                    q = Math.max(o.scrollHeight, o.clientHeight);
                    b.mask = _widget({
                        x: 0,
                        y: 0,
                        z: b.z - 1,
                        cls: "ke-dialog-mask",
                        width: p,
                        height: q
                    })
                }
                b.autoPos(b.div.width(), b.div.height()),
                b.footerDiv = n,
                b.bodyDiv = m,
                b.headerDiv = l,
                b.isLoading = !1
            },
            setMaskIndex: function(a) {
                var b = this;
                b.mask.div.css("z-index", a)
            },
            showLoading: function(a) {
                a = _undef(a, "");
                var b = this,
                c = b.bodyDiv;
                return b.loading = K('<div class="ke-dialog-loading"><div class="ke-inline-block ke-dialog-loading-content" style="margin-top:' + Math.round(c.height() / 3) + 'px;">' + a + "</div></div>").width(c.width()).height(c.height()).css("top", b.headerDiv.height() + "px"),
                c.css("visibility", "hidden").after(b.loading),
                b.isLoading = !0,
                b
            },
            hideLoading: function() {
                return this.loading && this.loading.remove(),
                this.bodyDiv.css("visibility", "visible"),
                this.isLoading = !1,
                this
            },
            remove: function() {
                var a = this;
                return a.options.beforeRemove && a.options.beforeRemove.call(a),
                a.mask && a.mask.remove(),
                a.iframeMask && a.iframeMask.remove(),
                a.closeIcon.unbind(),
                K("input", a.div).unbind(),
                K("button", a.div).unbind(),
                a.footerDiv.unbind(),
                a.bodyDiv.unbind(),
                a.headerDiv.unbind(),
                K("iframe", a.div).each(function() {
                    K(this).remove()
                }),
                KDialog.parent.remove.call(a),
                a
            }
        }),
        K.DialogClass = KDialog,
        K.dialog = _dialog,
        K.tabs = _tabs,
        K.loadScript = _loadScript,
        K.loadStyle = _loadStyle,
        K.ajax = _ajax;
        var _plugins = {},
        _language = {};
        KEditor.prototype = {
            lang: function(a) {
                return _lang(a, this.langType)
            },
            loadPlugin: function(a, b) {
                var c = this,
                d = this._pluginStatus;
                return d || (d = this._pluginStatus = {}),
                _plugins[a] ? _isFunction(_plugins[a]) ? (d[a] || (_plugins[a].call(c, QingEditor), d[a] = "inited"), b && b.call(c), c) : (setTimeout(function() {
                    c.loadPlugin(a, b)
                },
                100), c) : (_plugins[a] = "loading", _loadScript(c.pluginsPath + a + "/" + a + ".js?ver=" + encodeURIComponent(K.DEBUG ? _TIME: _VERSION),
                function() {
                    setTimeout(function() {
                        _plugins[a] && c.loadPlugin(a, b)
                    },
                    0)
                }), c)
            },
            handler: function(a, b) {
                var c = this;
                return c._handlers[a] || (c._handlers[a] = []),
                _isFunction(b) ? (c._handlers[a].push(b), c) : (_each(c._handlers[a],
                function() {
                    b = this.call(c, b)
                }), b)
            },
            clickToolbar: function(a, b) {
                var c = this,
                d = "clickToolbar" + a;
                return b === undefined ? c._handlers[d] ? c.handler(d) : (c.loadPlugin(a,
                function() {
                    c.handler(d)
                }), c) : c.handler(d, b)
            },
            updateState: function() {
                var a = this;
                return _each("justifyleft,justifycenter,justifyright,justifyfull,insertorderedlist,insertunorderedlist,subscript,superscript,bold,italic,underline,strikethrough".split(","),
                function(b, c) {
                    a.cmd.state(c) ? a.toolbar.select(c) : a.toolbar.unselect(c)
                }),
                a
            },
            addContextmenu: function(a) {
                return this._contextmenus.push(a),
                this
            },
            afterCreate: function(a) {
                return this.handler("afterCreate", a)
            },
            beforeRemove: function(a) {
                return this.handler("beforeRemove", a)
            },
            beforeGetHtml: function(a) {
                return this.handler("beforeGetHtml", a)
            },
            beforeSetHtml: function(a) {
                return this.handler("beforeSetHtml", a)
            },
            afterSetHtml: function(a) {
                return this.handler("afterSetHtml", a)
            },
            create: function() {
                function a() {
                    return 0 === i.height() ? void setTimeout(a, 100) : void b.resize(d, e, !1)
                }
                var b = this,
                c = b.fullscreenMode;
                if (b.isCreated) return b;
                if (b.srcElement.data("QingEditor")) return b;
                b.srcElement.data("QingEditor", "true"),
                c ? _docElement().style.overflow = "hidden": _docElement().style.overflow = "";
                var d = c ? _docElement().clientWidth + "px": b.width,
                e = c ? _docElement().clientHeight + "px": b.height; (_IE && 8 > _V || _QUIRKS) && (e = _addUnit(_removeUnit(e) + 2));
                var f = b.container = K(b.layout);
                c ? K(document.body).append(f) : b.srcElement.before(f);
                var g = K(".toolbar", f),
                h = K(".edit", f),
                i = b.statusbar = K(".statusbar", f);
                f.removeClass("container").addClass("ke-container ke-container-" + b.themeType).css("width", d),
                c ? (f.css({
                    position: "absolute",
                    left: 0,
                    top: 0,
                    "z-index": 811211
                }), _GECKO || (b._scrollPos = _getScrollPos()), window.scrollTo(0, 0), K(document.body).css({
                    height: "1px",
                    overflow: "hidden"
                }), K(document.body.parentNode).css("overflow", "hidden"), b._fullscreenExecuted = !0) : (b._fullscreenExecuted && (K(document.body).css({
                    height: "",
                    overflow: ""
                }), K(document.body.parentNode).css("overflow", "")), b._scrollPos && window.scrollTo(b._scrollPos.x, b._scrollPos.y));
                var j = [];
                K.each(b.items,
                function(a, c) {
                    "|" == c ? j.push('<span class="ke-inline-block ke-separator"></span>') : "/" == c ? j.push('<div class="ke-hr"></div>') : (j.push('<span class="ke-outline" data-name="' + c + '" title="' + b.lang(c) + '" unselectable="on">'), j.push('<span class="ke-toolbar-icon ke-toolbar-icon-url ke-icon-' + c + '" unselectable="on"></span></span>'))
                });
                var k = b.toolbar = _toolbar({
                    src: g,
                    html: j.join(""),
                    noDisableItems: b.noDisableItems,
                    click: function(a, c) {
                        if (a.stop(), b.menu) {
                            var d = b.menu.name;
                            if (b.hideMenu(), d === c) return
                        }
                        b.clickToolbar(c)
                    }
                }),
                l = _removeUnit(e) - k.div.height(),
                m = b.edit = _edit({
                    height: l > 0 && _removeUnit(e) > b.minHeight ? l: b.minHeight,
                    src: h,
                    srcElement: b.srcElement,
                    designMode: b.designMode,
                    themesPath: b.themesPath,
                    bodyClass: b.bodyClass,
                    cssPath: b.cssPath,
                    cssData: b.cssData,
                    beforeGetHtml: function(a) {
                        return a = b.beforeGetHtml(a),
                        a = _removeBookmarkTag(_removeTempTag(a)),
                        _formatHtml(a, b.filterMode ? b.htmlTags: null, b.urlType, b.wellFormatMode, b.indentChar)
                    },
                    beforeSetHtml: function(a) {
                        return a = _formatHtml(a, b.filterMode ? b.htmlTags: null, "", !1),
                        b.beforeSetHtml(a)
                    },
                    afterSetHtml: function() {
                        b.edit = m = this,
                        b.afterSetHtml()
                    },
                    afterCreate: function() {
                        if (b.edit = m = this, b.cmd = m.cmd, b._docMousedownFn = function(a) {
                            b.menu && b.hideMenu()
                        },
                        K(m.doc, document).mousedown(b._docMousedownFn), _bindContextmenuEvent.call(b), _bindNewlineEvent.call(b), _bindTabEvent.call(b), _bindFocusEvent.call(b), m.afterChange(function(a) {
                            m.designMode && (b.updateState(), b.addBookmark(), b.options.afterChange && b.options.afterChange.call(b))
                        }), m.textarea.keyup(function(a) {
                            a.ctrlKey || a.altKey || !_INPUT_KEY_MAP[a.which] || b.options.afterChange && b.options.afterChange.call(b)
                        }), b.readonlyMode && b.readonly(), b.isCreated = !0, "" === b.initContent && (b.initContent = b.html()), b._undoStack.length > 0) {
                            var a = b._undoStack.pop();
                            a.start && (b.html(a.html), m.cmd.range.moveToBookmark(a), b.select())
                        }
                        b.afterCreate(),
                        b.options.afterCreate && b.options.afterCreate.call(b)
                    }
                });
                return i.removeClass("statusbar").addClass("ke-statusbar").append('<span class="ke-inline-block ke-statusbar-center-icon"></span>').append('<span class="ke-inline-block ke-statusbar-right-icon"></span>'),
                b._fullscreenResizeHandler && (K(window).unbind("resize", b._fullscreenResizeHandler), b._fullscreenResizeHandler = null),
                a(),
                c ? (b._fullscreenResizeHandler = function(a) {
                    b.isCreated && b.resize(_docElement().clientWidth, _docElement().clientHeight, !1)
                },
                K(window).bind("resize", b._fullscreenResizeHandler), k.select("fullscreen"), i.first().css("visibility", "hidden"), i.last().css("visibility", "hidden")) : (_GECKO && K(window).bind("scroll",
                function(a) {
                    b._scrollPos = _getScrollPos()
                }), b.resizeType > 0 ? _drag({
                    moveEl: f,
                    clickEl: i,
                    moveFn: function(a, c, d, e, f, g) {
                        e += g,
                        b.resize(null, e)
                    }
                }) : i.first().css("visibility", "hidden"), 2 === b.resizeType ? _drag({
                    moveEl: f,
                    clickEl: i.last(),
                    moveFn: function(a, c, d, e, f, g) {
                        d += f,
                        e += g,
                        b.resize(d, e)
                    }
                }) : i.last().css("visibility", "hidden")),
                b
            },
            remove: function() {
                var a = this;
                return a.isCreated ? (a.beforeRemove(), a.srcElement.data("QingEditor", ""), a.menu && a.hideMenu(), _each(a.dialogs,
                function() {
                    a.hideDialog()
                }), K(document).unbind("mousedown", a._docMousedownFn), a.toolbar.remove(), a.edit.remove(), a.statusbar.last().unbind(), a.statusbar.unbind(), a.container.remove(), a.container = a.toolbar = a.edit = a.menu = null, a.dialogs = [], a.isCreated = !1, a) : a
            },
            resize: function(a, b, c) {
                var d = this;
                if (c = _undef(c, !0), a && (/%/.test(a) || (a = _removeUnit(a), a = a < d.minWidth ? d.minWidth: a), d.container.css("width", _addUnit(a)), c && (d.width = _addUnit(a))), b) {
                    b = _removeUnit(b);
                    var e = _removeUnit(b) - d.toolbar.div.height() - d.statusbar.height();
                    e = e < d.minHeight ? d.minHeight: e,
                    d.edit.setHeight(e),
                    c && (d.height = _addUnit(b))
                }
                return d
            },
            select: function() {
                return this.isCreated && this.cmd.select(),
                this
            },
            html: function(a) {
                var b = this;
                return a === undefined ? b.isCreated ? b.edit.html() : _elementVal(b.srcElement) : (b.isCreated ? b.edit.html(a) : _elementVal(b.srcElement, a), b.isCreated && b.cmd.selection(), b)
            },
            fullHtml: function() {
                return this.isCreated ? this.edit.html(undefined, !0) : ""
            },
            text: function(a) {
                var b = this;
                return a === undefined ? _trim(b.html().replace(/<(?!img|embed).*?>/gi, "").replace(/&nbsp;/gi, " ")) : b.html(_escape(a))
            },
            isEmpty: function() {
                return "" === _trim(this.text().replace(/\r\n|\n|\r/, ""))
            },
            isDirty: function() {
                return _trim(this.initContent.replace(/\r\n|\n|\r|t/g, "")) !== _trim(this.html().replace(/\r\n|\n|\r|t/g, ""))
            },
            selectedHtml: function() {
                var a = this.isCreated ? this.cmd.range.html() : "";
                return a = _removeBookmarkTag(_removeTempTag(a))
            },
            count: function(a) {
                var b = this;
                return a = (a || "html").toLowerCase(),
                "html" === a ? b.html().length: "text" === a ? b.text().replace(/<(?:img|embed).*?>/gi, "K").replace(/\r\n|\n|\r/g, "").length: 0
            },
            exec: function(a) {
                a = a.toLowerCase();
                var b = this,
                c = b.cmd,
                d = _inArray(a, "selectall,copy,paste,print".split(",")) < 0;
                return d && b.addBookmark(!1),
                c[a].apply(c, _toArray(arguments, 1)),
                d && (b.updateState(), b.addBookmark(!1), b.options.afterChange && b.options.afterChange.call(b)),
                b
            },
            insertHtml: function(a, b) {
                return this.isCreated ? (a = this.beforeSetHtml(a), this.exec("inserthtml", a, b), this) : this
            },
            appendHtml: function(a) {
                if (this.html(this.html() + a), this.isCreated) {
                    var b = this.cmd;
                    b.range.selectNodeContents(b.doc.body).collapse(!1),
                    b.select()
                }
                return this
            },
            sync: function() {
                return _elementVal(this.srcElement, this.html()),
                this
            },
            focus: function() {
                return this.isCreated ? this.edit.focus() : this.srcElement[0].focus(),
                this
            },
            blur: function() {
                return this.isCreated ? this.edit.blur() : this.srcElement[0].blur(),
                this
            },
            addBookmark: function(a) {
                a = _undef(a, !0);
                var b, c = this,
                d = c.edit,
                e = d.doc.body,
                f = _removeTempTag(e.innerHTML);
                if (a && c._undoStack.length > 0) {
                    var g = c._undoStack[c._undoStack.length - 1];
                    if (Math.abs(f.length - _removeBookmarkTag(g.html).length) < c.minChangeSize) return c
                }
                if (d.designMode && !c._firstAddBookmark) {
                    var h = c.cmd.range;
                    b = h.createBookmark(!0),
                    b.html = _removeTempTag(e.innerHTML),
                    h.moveToBookmark(b)
                } else b = {
                    html: f
                };
                return c._firstAddBookmark = !1,
                _addBookmarkToStack(c._undoStack, b),
                c
            },
            undo: function() {
                return _undoToRedo.call(this, this._undoStack, this._redoStack)
            },
            redo: function() {
                return _undoToRedo.call(this, this._redoStack, this._undoStack)
            },
            fullscreen: function(a) {
                return this.fullscreenMode = a === undefined ? !this.fullscreenMode: a,
                this.addBookmark(!1),
                this.remove().create()
            },
            readonly: function(a) {
                a = _undef(a, !0);
                var b = this,
                c = b.edit,
                d = c.doc;
                b.designMode ? b.toolbar.disableAll(a, []) : _each(b.noDisableItems,
                function() {
                    b.toolbar[a ? "disable": "enable"](this)
                }),
                _IE ? d.body.contentEditable = !a: d.designMode = a ? "off": "on",
                c.textarea[0].disabled = a
            },
            createMenu: function(a) {
                var b = this,
                c = a.name,
                d = b.toolbar.get(c),
                e = d.pos();
                return a.x = e.x,
                a.y = e.y + d.height(),
                a.z = b.options.zIndex,
                a.shadowMode = _undef(a.shadowMode, b.shadowMode),
                a.selectedColor !== undefined ? (a.cls = "ke-colorpicker-" + b.themeType, a.noColor = b.lang("noColor"), b.menu = _colorpicker(a)) : (a.cls = "ke-menu-" + b.themeType, a.centerLineMode = !1, b.menu = _menu(a)),
                b.menu
            },
            hideMenu: function() {
                return this.menu.remove(),
                this.menu = null,
                this
            },
            hideContextmenu: function() {
                return this.contextmenu.remove(),
                this.contextmenu = null,
                this
            },
            createDialog: function(a) {
                var b = this;
                a.name;
                if (a.z = b.options.zIndex, a.shadowMode = _undef(a.shadowMode, b.shadowMode), a.closeBtn = _undef(a.closeBtn, {
                    name: b.lang("close"),
                    click: function(a) {
                        b.hideDialog(),
                        _IE && b.cmd && b.cmd.select()
                    }
                }), a.noBtn = _undef(a.noBtn, {
                    name: b.lang(a.yesBtn ? "no": "close"),
                    click: function(a) {
                        b.hideDialog(),
                        _IE && b.cmd && b.cmd.select()
                    }
                }), "page" != b.dialogAlignType && (a.alignEl = b.container), a.cls = "ke-dialog-" + b.themeType, b.dialogs.length > 0) {
                    var c = b.dialogs[0],
                    d = b.dialogs[b.dialogs.length - 1];
                    c.setMaskIndex(d.z + 2),
                    a.z = d.z + 3,
                    a.showMask = !1
                }
                var e = _dialog(a);
                return b.dialogs.push(e),
                e
            },
            hideDialog: function() {
                var a = this;
                if (a.dialogs.length > 0 && a.dialogs.pop().remove(), a.dialogs.length > 0) {
                    var b = a.dialogs[0],
                    c = a.dialogs[a.dialogs.length - 1];
                    b.setMaskIndex(c.z - 1)
                }
                return a
            },
            errorDialog: function(a) {
                var b = this,
                c = b.createDialog({
                    width: 750,
                    title: b.lang("uploadError"),
                    body: '<div style="padding:10px 20px;"><iframe frameborder="0" style="width:708px;height:400px;"></iframe></div>'
                }),
                d = K("iframe", c.div),
                e = K.iframeDoc(d);
                return e.open(),
                e.write(a),
                e.close(),
                K(e.body).css("background-color", "#FFF"),
                d[0].contentWindow.focus(),
                b
            }
        };
        var _instances = [];
        K.remove = function(a) {
            _eachEditor(a,
            function(a) {
                this.remove(),
                _instances.splice(a, 1)
            })
        },
        K.sync = function(a) {
            _eachEditor(a,
            function() {
                this.sync()
            })
        },
        K.html = function(a, b) {
            _eachEditor(a,
            function() {
                this.html(b)
            })
        },
        K.insertHtml = function(a, b) {
            _eachEditor(a,
            function() {
                this.insertHtml(b)
            })
        },
        K.appendHtml = function(a, b) {
            _eachEditor(a,
            function() {
                this.appendHtml(b)
            })
        },
        _IE && 7 > _V && _nativeCommand(document, "BackgroundImageCache", !0),
        K.EditorClass = KEditor,
        K.editor = _editor,
        K.create = _create,
        K.instances = _instances,
        K.plugin = _plugin,
        K.lang = _lang,
        _plugin("core",
        function(a) {
            var b = this,
            c = {
                undo: "Z",
                redo: "Y",
                bold: "B",
                italic: "I",
                underline: "U",
                print: "P",
                selectall: "A"
            };
            if (b.afterSetHtml(function() {
                b.options.afterChange && b.options.afterChange.call(b)
            }), b.afterCreate(function() {
                if ("form" == b.syncType) {
                    for (var c = a(b.srcElement), d = !1; c = c.parent();) if ("form" == c.name) {
                        d = !0;
                        break
                    }
                    if (d) {
                        c.bind("submit",
                        function(c) {
                            b.sync(),
                            a(window).bind("unload",
                            function() {
                                b.edit.textarea.remove()
                            })
                        });
                        var e = a('[type="reset"]', c);
                        e.click(function() {
                            b.html(b.initContent),
                            b.cmd.selection()
                        }),
                        b.beforeRemove(function() {
                            c.unbind(),
                            e.unbind()
                        })
                    }
                }
            }), b.clickToolbar("source",
            function() {
                b.edit.designMode ? (b.toolbar.disableAll(!0), b.edit.design(!1), b.toolbar.select("source")) : (b.toolbar.disableAll(!1), b.edit.design(!0), b.toolbar.unselect("source"), _GECKO ? setTimeout(function() {
                    b.cmd.selection()
                },
                0) : b.cmd.selection()),
                b.designMode = b.edit.designMode
            }), b.afterCreate(function() {
                b.designMode || b.toolbar.disableAll(!0).select("source")
            }), b.clickToolbar("fullscreen",
            function() {
                b.fullscreen()
            }), b.fullscreenShortcut) {
                var d = !1;
                b.afterCreate(function() {
                    if (a(b.edit.doc, b.edit.textarea).keyup(function(a) {
                        27 == a.which && setTimeout(function() {
                            b.fullscreen()
                        },
                        0)
                    }), d) {
                        if (_IE && !b.designMode) return;
                        b.focus()
                    }
                    d || (d = !0)
                })
            }
            _each("undo,redo".split(","),
            function(a, d) {
                c[d] && b.afterCreate(function() {
                    _ctrl(this.edit.doc, c[d],
                    function() {
                        b.clickToolbar(d)
                    })
                }),
                b.clickToolbar(d,
                function() {
                    b[d]()
                })
            }),
            b.clickToolbar("formatblock",
            function() {
                var a = b.lang("formatblock.formatBlock"),
                c = {
                    h1: 28,
                    h2: 24,
                    h3: 18,
                    H4: 14,
                    p: 12
                },
                d = b.cmd.val("formatblock"),
                e = b.createMenu({
                    name: "formatblock",
                    width: "en" == b.langType ? 200 : 150
                });
                _each(a,
                function(a, f) {
                    var g = "font-size:" + c[a] + "px;";
                    "h" === a.charAt(0) && (g += "font-weight:bold;"),
                    e.addItem({
                        title: '<span style="' + g + '" unselectable="on">' + f + "</span>",
                        height: c[a] + 12,
                        checked: d === a || d === f,
                        click: function() {
                            b.select().exec("formatblock", "<" + a + ">").hideMenu()
                        }
                    })
                })
            }),
            b.clickToolbar("fontname",
            function() {
                var a = b.cmd.val("fontname"),
                c = b.createMenu({
                    name: "fontname",
                    width: 150
                });
                _each(b.lang("fontname.fontName"),
                function(d, e) {
                    c.addItem({
                        title: '<span style="font-family: ' + d + ';" unselectable="on">' + e + "</span>",
                        checked: a === d.toLowerCase() || a === e.toLowerCase(),
                        click: function() {
                            b.exec("fontname", d).hideMenu()
                        }
                    })
                })
            }),
            b.clickToolbar("fontsize",
            function() {
                var a = b.cmd.val("fontsize"),
                c = b.createMenu({
                    name: "fontsize",
                    width: 150
                });
                _each(b.fontSizeTable,
                function(d, e) {
                    c.addItem({
                        title: '<span style="font-size:' + e + ';" unselectable="on">' + e + "</span>",
                        height: _removeUnit(e) + 12,
                        checked: a === e,
                        click: function() {
                            b.exec("fontsize", e).hideMenu()
                        }
                    })
                })
            }),
            _each("forecolor,hilitecolor".split(","),
            function(a, c) {
                b.clickToolbar(c,
                function() {
                    b.createMenu({
                        name: c,
                        selectedColor: b.cmd.val(c) || "default",
                        colors: b.colorTable,
                        click: function(a) {
                            b.exec(c, a).hideMenu()
                        }
                    })
                })
            }),
            _each("cut,copy,paste".split(","),
            function(a, c) {
                b.clickToolbar(c,
                function() {
                    b.focus();
                    try {
                        b.exec(c, null)
                    } catch(a) {
                        alert(b.lang(c + "Error"))
                    }
                })
            }),
            b.clickToolbar("about",
            function() {
                var a = '<div style="margin:20px;"><div>QingEditor ' + _VERSION + '</div><div>Copyright &copy; <a href="http://www.kindsoft.net/" target="_blank">kindsoft.net</a> All rights reserved.</div></div>';
                b.createDialog({
                    name: "about",
                    width: 350,
                    title: b.lang("about"),
                    body: a
                })
            }),
            b.plugin.getSelectedLink = function() {
                return b.cmd.commonAncestor("a")
            },
            b.plugin.getSelectedImage = function() {
                return _getImageFromRange(b.edit.cmd.range,
                function(a) {
                    return ! /^ke-\w+$/i.test(a[0].className)
                })
            },
            b.plugin.getSelectedFlash = function() {
                return _getImageFromRange(b.edit.cmd.range,
                function(a) {
                    return "ke-flash" == a[0].className
                })
            },
            b.plugin.getSelectedMedia = function() {
                return _getImageFromRange(b.edit.cmd.range,
                function(a) {
                    return "ke-media" == a[0].className || "ke-rm" == a[0].className
                })
            },
            b.plugin.getSelectedAnchor = function() {
                return _getImageFromRange(b.edit.cmd.range,
                function(a) {
                    return "ke-anchor" == a[0].className
                })
            },
            _each("link,image,flash,media,anchor".split(","),
            function(a, c) {
                var d = c.charAt(0).toUpperCase() + c.substr(1);
                _each("edit,delete".split(","),
                function(a, e) {
                    b.addContextmenu({
                        title: b.lang(e + d),
                        click: function() {
                            b.loadPlugin(c,
                            function() {
                                b.plugin[c][e](),
                                b.hideMenu()
                            })
                        },
                        cond: b.plugin["getSelected" + d],
                        width: 150,
                        iconClass: "edit" == e ? "ke-icon-" + c: undefined
                    })
                }),
                b.addContextmenu({
                    title: "-"
                })
            }),
            b.plugin.getSelectedTable = function() {
                return b.cmd.commonAncestor("table")
            },
            b.plugin.getSelectedRow = function() {
                return b.cmd.commonAncestor("tr")
            },
            b.plugin.getSelectedCell = function() {
                return b.cmd.commonAncestor("td")
            },
            _each("prop,cellprop,colinsertleft,colinsertright,rowinsertabove,rowinsertbelow,rowmerge,colmerge,rowsplit,colsplit,coldelete,rowdelete,insert,delete".split(","),
            function(a, c) {
                var d = _inArray(c, ["prop", "delete"]) < 0 ? b.plugin.getSelectedCell: b.plugin.getSelectedTable;
                b.addContextmenu({
                    title: b.lang("table" + c),
                    click: function() {
                        b.loadPlugin("table",
                        function() {
                            b.plugin.table[c](),
                            b.hideMenu()
                        })
                    },
                    cond: d,
                    width: 170,
                    iconClass: "ke-icon-table" + c
                })
            }),
            b.addContextmenu({
                title: "-"
            }),
            _each("selectall,justifyleft,justifycenter,justifyright,justifyfull,insertorderedlist,insertunorderedlist,indent,outdent,subscript,superscript,hr,print,bold,italic,underline,strikethrough,removeformat,unlink".split(","),
            function(a, d) {
                c[d] && b.afterCreate(function() {
                    _ctrl(this.edit.doc, c[d],
                    function() {
                        b.cmd.selection(),
                        b.clickToolbar(d)
                    })
                }),
                b.clickToolbar(d,
                function() {
                    b.focus().exec(d, null)
                })
            }),
            b.afterCreate(function() {
                function c() {
                    d.range.moveToBookmark(e),
                    d.select(),
                    _WEBKIT && (a("div." + h, f).each(function() {
                        a(this).after("<br />").remove(!0)
                    }), a("span.Apple-style-span", f).remove(!0), a("span.Apple-tab-span", f).remove(!0), a("span[style]", f).each(function() {
                        "nowrap" == a(this).css("white-space") && a(this).remove(!0)
                    }), a("meta", f).remove());
                    var c = f[0].innerHTML;
                    f.remove(),
                    "" !== c && (_WEBKIT && (c = c.replace(/(<br>)\1/gi, "$1")), 2 === b.pasteType && (c = c.replace(/(<(?:p|p\s[^>]*)>) *(<\/p>)/gi, ""), /schemas-microsoft-com|worddocument|mso-\w+/i.test(c) ? c = _clearMsWord(c, b.filterMode ? b.htmlTags: a.options.htmlTags) : (c = _formatHtml(c, b.filterMode ? b.htmlTags: null), c = b.beforeSetHtml(c))), 1 === b.pasteType && (c = c.replace(/&nbsp;/gi, " "), c = c.replace(/\n\s*\n/g, "\n"), c = c.replace(/<br[^>]*>/gi, "\n"), c = c.replace(/<\/p><p[^>]*>/gi, "\n"), c = c.replace(/<[^>]+>/g, ""), c = c.replace(/ {2}/g, " &nbsp;"), "p" == b.newlineTag ? /\n/.test(c) && (c = c.replace(/^/, "<p>").replace(/$/, "<br /></p>").replace(/\n/g, "<br /></p><p>")) : c = c.replace(/\n/g, "<br />$&")), b.insertHtml(c, !0))
                }
                var d, e, f, g = b.edit.doc,
                h = "__QingEditor_paste__",
                i = !1;
                a(g.body).bind("paste",
                function(j) {
                    if (0 === b.pasteType) return void j.stop();
                    if (!i) {
                        if (i = !0, a("div." + h, g).remove(), d = b.cmd.selection(), e = d.range.createBookmark(), f = a('<div class="' + h + '"></div>', g).css({
                            position: "absolute",
                            width: "1px",
                            height: "1px",
                            overflow: "hidden",
                            left: "-1981px",
                            top: a(e.start).pos().y + "px",
                            "white-space": "nowrap"
                        }), a(g.body).append(f), _IE) {
                            var k = d.range.get(!0);
                            k.moveToElementText(f[0]),
                            k.select(),
                            k.execCommand("paste"),
                            j.preventDefault()
                        } else d.range.selectNodeContents(f[0]),
                        d.select(),
                        f[0].tabIndex = -1,
                        f[0].focus();
                        setTimeout(function() {
                            c(),
                            i = !1
                        },
                        0)
                    }
                })
            }),
            b.beforeGetHtml(function(a) {
                return _IE && 8 >= _V && (a = a.replace(/<div\s+[^>]*data-ke-input-tag="([^"]*)"[^>]*>([\s\S]*?)<\/div>/gi,
                function(a, b) {
                    return unescape(b)
                }), a = a.replace(/(<input)((?:\s+[^>]*)?>)/gi,
                function(a, b, c) {
                    return /\s+type="[^"]+"/i.test(a) ? a: b + ' type="text"' + c
                })),
                a.replace(/(<(?:noscript|noscript\s[^>]*)>)([\s\S]*?)(<\/noscript>)/gi,
                function(a, b, c, d) {
                    return b + _unescape(c).replace(/\s+/g, " ") + d
                }).replace(/<img[^>]*class="?ke-(flash|rm|media)"?[^>]*>/gi,
                function(a) {
                    var b = _getAttrList(a),
                    c = _getCssList(b.style || ""),
                    d = _mediaAttrs(b["data-ke-tag"]),
                    e = _undef(c.width, ""),
                    f = _undef(c.height, "");
                    return /px/i.test(e) && (e = _removeUnit(e)),
                    /px/i.test(f) && (f = _removeUnit(f)),
                    d.width = _undef(b.width, e),
                    d.height = _undef(b.height, f),
                    _mediaEmbed(d)
                }).replace(/<img[^>]*class="?ke-anchor"?[^>]*>/gi,
                function(a) {
                    var b = _getAttrList(a);
                    return '<a name="' + unescape(b["data-ke-name"]) + '"></a>'
                }).replace(/<div\s+[^>]*data-ke-script-attr="([^"]*)"[^>]*>([\s\S]*?)<\/div>/gi,
                function(a, b, c) {
                    return "<script" + unescape(b) + ">" + unescape(c) + "</script>"
                }).replace(/<div\s+[^>]*data-ke-noscript-attr="([^"]*)"[^>]*>([\s\S]*?)<\/div>/gi,
                function(a, b, c) {
                    return "<noscript" + unescape(b) + ">" + unescape(c) + "</noscript>"
                }).replace(/(<[^>]*)data-ke-src="([^"]*)"([^>]*>)/gi,
                function(a, b, c, d) {
                    return a = a.replace(/(\s+(?:href|src)=")[^"]*(")/i,
                    function(a, b, d) {
                        return b + _unescape(c) + d
                    }),
                    a = a.replace(/\s+data-ke-src="[^"]*"/i, "")
                }).replace(/(<[^>]+\s)data-ke-(on\w+="[^"]*"[^>]*>)/gi,
                function(a, b, c) {
                    return b + c
                })
            }),
            b.beforeSetHtml(function(a) {
                return _IE && 8 >= _V && (a = a.replace(/<input[^>]*>|<(select|button)[^>]*>[\s\S]*?<\/\1>/gi,
                function(a) {
                    var b = _getAttrList(a),
                    c = _getCssList(b.style || "");
                    return "none" == c.display ? '<div class="ke-display-none" data-ke-input-tag="' + escape(a) + '"></div>': a
                })),
                a.replace(/<embed[^>]*type="([^"]+)"[^>]*>(?:<\/embed>)?/gi,
                function(a) {
                    var c = _getAttrList(a);
                    return c.src = _undef(c.src, ""),
                    c.width = _undef(c.width, 0),
                    c.height = _undef(c.height, 0),
                    _mediaImg(b.themesPath + "common/blank.gif", c)
                }).replace(/<a[^>]*name="([^"]+)"[^>]*>(?:<\/a>)?/gi,
                function(a) {
                    var c = _getAttrList(a);
                    return c.href !== undefined ? a: '<img class="ke-anchor" src="' + b.themesPath + 'common/anchor.gif" data-ke-name="' + escape(c.name) + '" />'
                }).replace(/<script([^>]*)>([\s\S]*?)<\/script>/gi,
                function(a, b, c) {
                    return '<div class="ke-script" data-ke-script-attr="' + escape(b) + '">' + escape(c) + "</div>"
                }).replace(/<noscript([^>]*)>([\s\S]*?)<\/noscript>/gi,
                function(a, b, c) {
                    return '<div class="ke-noscript" data-ke-noscript-attr="' + escape(b) + '">' + escape(c) + "</div>"
                }).replace(/(<[^>]*)(href|src)="([^"]*)"([^>]*>)/gi,
                function(a, b, c, d, e) {
                    return a.match(/\sdata-ke-src="[^"]*"/i) ? a: a = b + c + '="' + d + '" data-ke-src="' + _escape(d) + '"' + e
                }).replace(/(<[^>]+\s)(on\w+="[^"]*"[^>]*>)/gi,
                function(a, b, c) {
                    return b + "data-ke-" + c
                }).replace(/<table[^>]*\s+border="0"[^>]*>/gi,
                function(a) {
                    return a.indexOf("ke-zeroborder") >= 0 ? a: _addClassToTag(a, "ke-zeroborder")
                })
            })
        })
    }
} (window),
QingEditor.lang({
    source: "HTML代码",
    preview: "预览",
    undo: "后退(Ctrl+Z)",
    redo: "前进(Ctrl+Y)",
    cut: "剪切(Ctrl+X)",
    copy: "复制(Ctrl+C)",
    paste: "粘贴(Ctrl+V)",
    plainpaste: "粘贴为无格式文本",
    wordpaste: "从Word粘贴",
    selectall: "全选(Ctrl+A)",
    justifyleft: "左对齐",
    justifycenter: "居中",
    justifyright: "右对齐",
    justifyfull: "两端对齐",
    insertorderedlist: "编号",
    insertunorderedlist: "项目符号",
    indent: "增加缩进",
    outdent: "减少缩进",
    subscript: "下标",
    superscript: "上标",
    formatblock: "段落",
    fontname: "字体",
    fontsize: "文字大小",
    forecolor: "文字颜色",
    hilitecolor: "文字背景",
    bold: "粗体(Ctrl+B)",
    italic: "斜体(Ctrl+I)",
    underline: "下划线(Ctrl+U)",
    strikethrough: "删除线",
    removeformat: "删除格式",
    image: "图片",
    multiimage: "批量图片上传",
    flash: "Flash",
    media: "视音频",
    table: "表格",
    tablecell: "单元格",
    hr: "插入横线",
    emoticons: "插入表情",
    link: "超级链接",
    unlink: "取消超级链接",
    fullscreen: "全屏显示",
    about: "关于",
    print: "打印(Ctrl+P)",
    filemanager: "文件空间",
    code: "插入程序代码",
    map: "Google地图",
    baidumap: "百度地图",
    lineheight: "行距",
    clearhtml: "清理HTML代码",
    pagebreak: "插入分页符",
    quickformat: "一键排版",
    insertfile: "插入文件",
    template: "插入模板",
    anchor: "锚点",
    yes: "确定",
    no: "取消",
    close: "关闭",
    editImage: "图片属性",
    deleteImage: "删除图片",
    editFlash: "Flash属性",
    deleteFlash: "删除Flash",
    editMedia: "视音频属性",
    deleteMedia: "删除视音频",
    editLink: "超级链接属性",
    deleteLink: "取消超级链接",
    editAnchor: "锚点属性",
    deleteAnchor: "删除锚点",
    tableprop: "表格属性",
    tablecellprop: "单元格属性",
    tableinsert: "插入表格",
    tabledelete: "删除表格",
    tablecolinsertleft: "左侧插入列",
    tablecolinsertright: "右侧插入列",
    tablerowinsertabove: "上方插入行",
    tablerowinsertbelow: "下方插入行",
    tablerowmerge: "向下合并单元格",
    tablecolmerge: "向右合并单元格",
    tablerowsplit: "拆分行",
    tablecolsplit: "拆分列",
    tablecoldelete: "删除列",
    tablerowdelete: "删除行",
    noColor: "无颜色",
    pleaseSelectFile: "请选择文件。",
    invalidImg: "请输入有效的URL地址。\n只允许jpg,gif,bmp,png格式。",
    invalidMedia: "请输入有效的URL地址。\n只允许swf,flv,mp3,wav,wma,wmv,mid,avi,mpg,asf,rm,rmvb格式。",
    invalidWidth: "宽度必须为数字。",
    invalidHeight: "高度必须为数字。",
    invalidBorder: "边框必须为数字。",
    invalidUrl: "请输入有效的URL地址。",
    invalidRows: "行数为必选项，只允许输入大于0的数字。",
    invalidCols: "列数为必选项，只允许输入大于0的数字。",
    invalidPadding: "边距必须为数字。",
    invalidSpacing: "间距必须为数字。",
    invalidJson: "服务器发生故障。",
    uploadSuccess: "上传成功。",
    cutError: "您的浏览器安全设置不允许使用剪切操作，请使用快捷键(Ctrl+X)来完成。",
    copyError: "您的浏览器安全设置不允许使用复制操作，请使用快捷键(Ctrl+C)来完成。",
    pasteError: "您的浏览器安全设置不允许使用粘贴操作，请使用快捷键(Ctrl+V)来完成。",
    ajaxLoading: "加载中，请稍候 ...",
    uploadLoading: "上传中，请稍候 ...",
    uploadError: "上传错误",
    "plainpaste.comment": "请使用快捷键(Ctrl+V)把内容粘贴到下面的方框里。",
    "wordpaste.comment": "请使用快捷键(Ctrl+V)把内容粘贴到下面的方框里。",
    "code.pleaseInput": "请输入程序代码。",
    "link.url": "URL",
    "link.linkType": "打开类型",
    "link.newWindow": "新窗口",
    "link.selfWindow": "当前窗口",
    "flash.url": "URL",
    "flash.width": "宽度",
    "flash.height": "高度",
    "flash.upload": "上传",
    "flash.viewServer": "文件空间",
    "media.url": "URL",
    "media.width": "宽度",
    "media.height": "高度",
    "media.autostart": "自动播放",
    "media.upload": "上传",
    "media.viewServer": "文件空间",
    "image.remoteImage": "网络图片",
    "image.localImage": "本地上传",
    "image.remoteUrl": "图片地址",
    "image.localUrl": "上传文件",
    "image.size": "图片大小",
    "image.width": "宽",
    "image.height": "高",
    "image.resetSize": "重置大小",
    "image.align": "对齐方式",
    "image.defaultAlign": "默认方式",
    "image.leftAlign": "左对齐",
    "image.rightAlign": "右对齐",
    "image.imgTitle": "图片说明",
    "image.upload": "浏览...",
    "image.viewServer": "图片空间",
    "multiimage.uploadDesc": "允许用户同时上传<%=uploadLimit%>张图片，单张图片容量不超过<%=sizeLimit%>",
    "multiimage.startUpload": "开始上传",
    "multiimage.clearAll": "全部清空",
    "multiimage.insertAll": "全部插入",
    "multiimage.queueLimitExceeded": "文件数量超过限制。",
    "multiimage.fileExceedsSizeLimit": "文件大小超过限制。",
    "multiimage.zeroByteFile": "无法上传空文件。",
    "multiimage.invalidFiletype": "文件类型不正确。",
    "multiimage.unknownError": "发生异常，无法上传。",
    "multiimage.pending": "等待上传",
    "multiimage.uploadError": "上传失败",
    "filemanager.emptyFolder": "空文件夹",
    "filemanager.moveup": "移到上一级文件夹",
    "filemanager.viewType": "显示方式：",
    "filemanager.viewImage": "缩略图",
    "filemanager.listImage": "详细信息",
    "filemanager.orderType": "排序方式：",
    "filemanager.fileName": "名称",
    "filemanager.fileSize": "大小",
    "filemanager.fileType": "类型",
    "insertfile.url": "URL",
    "insertfile.title": "文件说明",
    "insertfile.upload": "上传",
    "insertfile.viewServer": "文件空间",
    "table.cells": "单元格数",
    "table.rows": "行数",
    "table.cols": "列数",
    "table.size": "大小",
    "table.width": "宽度",
    "table.height": "高度",
    "table.percent": "%",
    "table.px": "px",
    "table.space": "边距间距",
    "table.padding": "边距",
    "table.spacing": "间距",
    "table.align": "对齐方式",
    "table.textAlign": "水平对齐",
    "table.verticalAlign": "垂直对齐",
    "table.alignDefault": "默认",
    "table.alignLeft": "左对齐",
    "table.alignCenter": "居中",
    "table.alignRight": "右对齐",
    "table.alignTop": "顶部",
    "table.alignMiddle": "中部",
    "table.alignBottom": "底部",
    "table.alignBaseline": "基线",
    "table.border": "边框",
    "table.borderWidth": "边框",
    "table.borderColor": "颜色",
    "table.backgroundColor": "背景颜色",
    "map.address": "地址: ",
    "map.search": "搜索",
    "baidumap.address": "地址: ",
    "baidumap.search": "搜索",
    "baidumap.insertDynamicMap": "插入动态地图",
    "anchor.name": "锚点名称",
    "formatblock.formatBlock": {
        h1: "标题 1",
        h2: "标题 2",
        h3: "标题 3",
        h4: "标题 4",
        p: "正 文"
    },
    "fontname.fontName": {
        SimSun: "宋体",
        NSimSun: "新宋体",
        FangSong_GB2312: "仿宋_GB2312",
        KaiTi_GB2312: "楷体_GB2312",
        SimHei: "黑体",
        "Microsoft YaHei": "微软雅黑",
        Arial: "Arial",
        "Arial Black": "Arial Black",
        "Times New Roman": "Times New Roman",
        "Courier New": "Courier New",
        Tahoma: "Tahoma",
        Verdana: "Verdana"
    },
    "lineheight.lineHeight": [{
        1 : "单倍行距"
    },
    {
        1.5 : "1.5倍行距"
    },
    {
        2 : "2倍行距"
    },
    {
        2.5 : "2.5倍行距"
    },
    {
        3 : "3倍行距"
    }],
    "template.selectTemplate": "可选模板",
    "template.replaceContent": "替换当前内容",
    "template.fileList": {
        "1.html": "图片和文字",
        "2.html": "表格",
        "3.html": "项目编号"
    }
},
"zh-CN"),
QingEditor.options.langType = "zh-CN",
QingEditor.plugin("anchor",
function(a) {
    var b = this,
    c = "anchor",
    d = b.lang(c + ".");
    b.plugin.anchor = {
        edit: function() {
            var e = ['<div style="padding:20px;">', '<div class="ke-dialog-row">', '<label for="keName">' + d.name + "</label>", '<input class="ke-input-text" type="text" id="keName" name="name" value="" style="width:100px;" />', "</div>", "</div>"].join(""),
            f = b.createDialog({
                name: c,
                width: 300,
                title: b.lang(c),
                body: e,
                yesBtn: {
                    name: b.lang("yes"),
                    click: function(a) {
                        b.insertHtml('<a name="' + h.val() + '">').hideDialog().focus()
                    }
                }
            }),
            g = f.div,
            h = a('input[name="name"]', g),
            i = b.plugin.getSelectedAnchor();
            i && h.val(unescape(i.attr("data-ke-name"))),
            h[0].focus(),
            h[0].select()
        },
        "delete": function() {
            b.plugin.getSelectedAnchor().remove()
        }
    },
    b.clickToolbar(c, b.plugin.anchor.edit)
}),
QingEditor.plugin("autoheight",
function(a) {
    function b() {
        var a = e.edit,
        b = a.doc.body;
        a.iframe[0].scroll = "no",
        b.style.overflowY = "hidden"
    }
    function c() {
        var b = e.edit,
        c = b.doc.body;
        b.iframe.height(f),
        e.resize(null, Math.max((a.IE ? c.scrollHeight: c.offsetHeight) + 76, f))
    }
    function d() {
        f = a.removeUnit(e.height),
        e.edit.afterChange(c),
        b(),
        c()
    }
    var e = this;
    if (e.autoHeightMode) {
        var f;
        e.isCreated ? d() : e.afterCreate(d)
    }
}),
QingEditor.plugin("baidumap",
function(a) {
    var b = this,
    c = "baidumap",
    d = b.lang(c + "."),
    e = a.undef(b.mapWidth, 558),
    f = a.undef(b.mapHeight, 360);
    b.clickToolbar(c,
    function() {
        function g() {
            h = p[0].contentWindow,
            i = a.iframeDoc(p)
        }
        var h, i, j = ['<div style="padding:10px 20px;">', '<div class="ke-header">', '<div class="ke-left">', d.address + ' <input id="QingEditor_plugin_map_address" name="address" class="ke-input-text" value="" style="width:200px;" /> ', '<span class="ke-button-common ke-button-outer">', '<input type="button" name="searchBtn" class="ke-button-common ke-button" value="' + d.search + '" />', "</span>", "</div>", '<div class="ke-right">', '<input type="checkbox" id="keInsertDynamicMap" name="insertDynamicMap" value="1" /> <label for="keInsertDynamicMap">' + d.insertDynamicMap + "</label>", "</div>", '<div class="ke-clearfix"></div>', "</div>", '<div class="ke-map" style="width:' + e + "px;height:" + f + 'px;"></div>', "</div>"].join(""),
        k = b.createDialog({
            name: c,
            width: e + 42,
            title: b.lang(c),
            body: j,
            yesBtn: {
                name: b.lang("yes"),
                click: function(a) {
                    var c = h.map,
                    d = c.getCenter(),
                    g = d.lng + "," + d.lat,
                    i = c.getZoom(),
                    j = [o[0].checked ? b.pluginsPath + "baidumap/index.html": "http://api.map.baidu.com/staticimage", "?center=" + encodeURIComponent(g), "&zoom=" + encodeURIComponent(i), "&width=" + e, "&height=" + f, "&markers=" + encodeURIComponent(g), "&markerStyles=" + encodeURIComponent("l,A")].join("");
                    o[0].checked ? b.insertHtml('<iframe src="' + j + '" frameborder="0" style="width:' + (e + 2) + "px;height:" + (f + 2) + 'px;"></iframe>') : b.exec("insertimage", j),
                    b.hideDialog().focus()
                }
            },
            beforeRemove: function() {
                n.remove(),
                i && i.write(""),
                p.remove()
            }
        }),
        l = k.div,
        m = a('[name="address"]', l),
        n = a('[name="searchBtn"]', l),
        o = a('[name="insertDynamicMap"]', k.div),
        p = a('<iframe class="ke-textarea" frameborder="0" src="' + b.pluginsPath + 'baidumap/map.html" style="width:' + e + "px;height:" + f + 'px;"></iframe>');
        p.bind("load",
        function() {
            p.unbind("load"),
            a.IE ? g() : setTimeout(g, 0)
        }),
        a(".ke-map", l).replaceWith(p),
        n.click(function() {
            h.search(m.val())
        })
    })
}),
QingEditor.plugin("map",
function(a) {
    var b = this,
    c = "map",
    d = b.lang(c + ".");
    b.clickToolbar(c,
    function() {
        function e() {
            f = m[0].contentWindow,
            g = a.iframeDoc(m)
        }
        var f, g, h = ['<div style="padding:10px 20px;">', '<div class="ke-dialog-row">', d.address + ' <input id="QingEditor_plugin_map_address" name="address" class="ke-input-text" value="" style="width:200px;" /> ', '<span class="ke-button-common ke-button-outer">', '<input type="button" name="searchBtn" class="ke-button-common ke-button" value="' + d.search + '" />', "</span>", "</div>", '<div class="ke-map" style="width:558px;height:360px;"></div>', "</div>"].join(""),
        i = b.createDialog({
            name: c,
            width: 600,
            title: b.lang(c),
            body: h,
            yesBtn: {
                name: b.lang("yes"),
                click: function(a) {
                    var c = (f.geocoder, f.map),
                    d = c.getCenter().lat() + "," + c.getCenter().lng(),
                    e = c.getZoom(),
                    g = c.getMapTypeId(),
                    h = "http://maps.googleapis.com/maps/api/staticmap";
                    h += "?center=" + encodeURIComponent(d),
                    h += "&zoom=" + encodeURIComponent(e),
                    h += "&size=558x360",
                    h += "&maptype=" + encodeURIComponent(g),
                    h += "&markers=" + encodeURIComponent(d),
                    h += "&language=" + b.langType,
                    h += "&sensor=false",
                    b.exec("insertimage", h).hideDialog().focus()
                }
            },
            beforeRemove: function() {
                l.remove(),
                g && g.write(""),
                m.remove()
            }
        }),
        j = i.div,
        k = a('[name="address"]', j),
        l = a('[name="searchBtn"]', j),
        m = (["<!doctype html><html><head>", '<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />', "<style>", "	html { height: 100% }", "	body { height: 100%; margin: 0; padding: 0; background-color: #FFF }", "	#map_canvas { height: 100% }", "</style>", '<script src="http://maps.googleapis.com/maps/api/js?sensor=false&language=' + b.langType + '"></script>', "<script>", "var map, geocoder;", "function initialize() {", "	var latlng = new google.maps.LatLng(31.230393, 121.473704);", "	var options = {", "		zoom: 11,", "		center: latlng,", "		disableDefaultUI: true,", "		panControl: true,", "		zoomControl: true,", "		mapTypeControl: true,", "		scaleControl: true,", "		streetViewControl: false,", "		overviewMapControl: true,", "		mapTypeId: google.maps.MapTypeId.ROADMAP", "	};", '	map = new google.maps.Map(document.getElementById("map_canvas"), options);', "	geocoder = new google.maps.Geocoder();", "	geocoder.geocode({latLng: latlng}, function(results, status) {", "		if (status == google.maps.GeocoderStatus.OK) {", "			if (results[3]) {", '				parent.document.getElementById("QingEditor_plugin_map_address").value = results[3].formatted_address;', "			}", "		}", "	});", "}", "function search(address) {", "	if (!map) return;", "	geocoder.geocode({address : address}, function(results, status) {", "		if (status == google.maps.GeocoderStatus.OK) {", "			map.setZoom(11);", "			map.setCenter(results[0].geometry.location);", "			var marker = new google.maps.Marker({", "				map: map,", "				position: results[0].geometry.location", "			});", "		} else {", '			alert("Invalid address: " + address);', "		}", "	});", "}", "</script>", "</head>", '<body onload="initialize();">', '<div id="map_canvas" style="width:100%; height:100%"></div>', "</body></html>"].join("\n"), a('<iframe class="ke-textarea" frameborder="0" src="' + b.pluginsPath + 'map/map.html" style="width:558px;height:360px;"></iframe>'));
        m.bind("load",
        function() {
            m.unbind("load"),
            a.IE ? e() : setTimeout(e, 0)
        }),
        a(".ke-map", j).replaceWith(m),
        l.click(function() {
            f.search(k.val())
        })
    })
}),
QingEditor.plugin("clearhtml",
function(a) {
    var b = this,
    c = "clearhtml";
    b.clickToolbar(c,
    function() {
        b.focus();
        var c = b.html();
        c = c.replace(/(<script[^>]*>)([\s\S]*?)(<\/script>)/gi, ""),
        c = c.replace(/(<style[^>]*>)([\s\S]*?)(<\/style>)/gi, ""),
        c = a.formatHtml(c, {
            a: ["href", "target"],
            embed: ["src", "width", "height", "type", "loop", "autostart", "quality", ".width", ".height", "align", "allowscriptaccess"],
            img: ["src", "width", "height", "border", "alt", "title", ".width", ".height"],
            table: ["border"],
            "td,th": ["rowspan", "colspan"],
            "div,hr,br,tbody,tr,p,ol,ul,li,blockquote,h1,h2,h3,h4,h5,h6": []
        }),
        b.html(c),
        b.cmd.selection(!0),
        b.addBookmark()
    })
}),
QingEditor.plugin("code",
function(a) {
    var b = this,
    c = "code";
    b.clickToolbar(c,
    function() {
        var d = b.lang(c + "."),
        e = ['<div style="padding:10px 20px;">', '<div class="ke-dialog-row">', '<select class="ke-code-type">', '<option value="js">JavaScript</option>', '<option value="html">HTML</option>', '<option value="css">CSS</option>', '<option value="php">PHP</option>', '<option value="pl">Perl</option>', '<option value="py">Python</option>', '<option value="rb">Ruby</option>', '<option value="java">Java</option>', '<option value="vb">ASP/VB</option>', '<option value="cpp">C/C++</option>', '<option value="cs">C#</option>', '<option value="xml">XML</option>', '<option value="bsh">Shell</option>', '<option value="">Other</option>', "</select>", "</div>", '<textarea class="ke-textarea" style="width:408px;height:260px;"></textarea>', "</div>"].join(""),
        f = b.createDialog({
            name: c,
            width: 450,
            title: b.lang(c),
            body: e,
            yesBtn: {
                name: b.lang("yes"),
                click: function(c) {
                    var e = a(".ke-code-type", f.div).val(),
                    h = g.val(),
                    i = "" === e ? "": " lang-" + e,
                    j = '<pre class="prettyprint' + i + '">\n' + a.escape(h) + "</pre> ";
                    return "" === a.trim(h) ? (alert(d.pleaseInput), void g[0].focus()) : void b.insertHtml(j).hideDialog().focus()
                }
            }
        }),
        g = a("textarea", f.div);
        g[0].focus()
    })
}),
QingEditor.plugin("emoticons",
function(a) {
    var b = this,
    c = "emoticons",
    d = b.emoticonsPath || b.pluginsPath + "emoticons/images/",
    e = void 0 === b.allowPreviewEmoticons ? !0 : b.allowPreviewEmoticons,
    f = 1;
    b.clickToolbar(c,
    function() {
        function g(c, e, f) {
            v ? c.mouseover(function() {
                e > r ? (v.css("left", 0), v.css("right", "")) : (v.css("left", ""), v.css("right", 0)),
                w.attr("src", d + f + ".gif"),
                a(this).addClass("ke-on")
            }) : c.mouseover(function() {
                a(this).addClass("ke-on")
            }),
            c.mouseout(function() {
                a(this).removeClass("ke-on")
            }),
            c.click(function(a) {
                b.insertHtml('<img src="' + d + f + '.gif" border="0" alt="" />').hideMenu().focus(),
                a.stop()
            })
        }
        function h(b, c) {
            var e = document.createElement("table");
            c.append(e),
            v && (a(e).mouseover(function() {
                v.show("block")
            }), a(e).mouseout(function() {
                v.hide()
            }), t.push(a(e))),
            e.className = "ke-table",
            e.cellPadding = 0,
            e.cellSpacing = 0,
            e.border = 0;
            for (var f = (b - 1) * p + o, h = 0; l > h; h++) for (var i = e.insertRow(h), j = 0; m > j; j++) {
                var k = a(i.insertCell(j));
                k.addClass("ke-cell"),
                g(k, j, f);
                var n = a('<span class="ke-img"></span>').css("background-position", "-" + 24 * f + "px 0px").css("background-image", "url(" + d + "static.gif)");
                k.append(n),
                t.push(k),
                f++
            }
            return e
        }
        function i() {
            a.each(t,
            function() {
                this.unbind()
            })
        }
        function j(a, b) {
            a.click(function(a) {
                i(),
                y.parentNode.removeChild(y),
                x.remove(),
                y = h(b, s),
                k(b),
                f = b,
                a.stop()
            })
        }
        function k(b) {
            x = a('<div class="ke-page"></div>'),
            s.append(x);
            for (var c = 1; q >= c; c++) {
                if (b !== c) {
                    var d = a('<a href="javascript:;">[' + c + "]</a>");
                    j(d, c),
                    x.append(d),
                    t.push(d)
                } else x.append(a("@[" + c + "]"));
                x.append(a("@&nbsp;"))
            }
        }
        var l = 5,
        m = 9,
        n = 135,
        o = 0,
        p = l * m,
        q = Math.ceil(n / p),
        r = Math.floor(m / 2),
        s = a('<div class="ke-plugin-emoticons"></div>'),
        t = [],
        u = b.createMenu({
            name: c,
            beforeRemove: function() {
                i()
            }
        });
        u.div.append(s);
        var v, w;
        e && (v = a('<div class="ke-preview"></div>').css("right", 0), w = a('<img class="ke-preview-img" src="' + d + o + '.gif" />'), s.append(v), v.append(w));
        var x, y = h(f, s);
        k(f)
    })
}),
QingEditor.plugin("filemanager",
function(a) {
    function b(a, b, c) {
        return a + " (" + Math.ceil(b / 1024) + "KB, " + c + ")"
    }
    function c(a, c) {
        c.is_dir ? a.attr("title", c.filename) : a.attr("title", b(c.filename, c.filesize, c.datetime))
    }
    var d = this,
    e = "filemanager",
    f = a.undef(d.fileManagerJson, d.basePath + "php/file_manager_json.php"),
    g = d.pluginsPath + e + "/images/",
    h = d.lang(e + ".");
    d.plugin.filemanagerDialog = function(b) {
        function i(b, c, e) {
            var g = "path=" + b + "&order=" + c + "&dir=" + p;
            t.showLoading(d.lang("ajaxLoading")),
            a.ajax(a.addParam(f, g + "&" + (new Date).getTime()),
            function(a) {
                t.hideLoading(),
                e(a)
            })
        }
        function j(b, c, d, e) {
            var f = a.formatUrl(c.current_url + d.filename, "absolute"),
            g = encodeURIComponent(c.current_dir_path + d.filename + "/");
            d.is_dir ? b.click(function(a) {
                i(g, y.val(), e)
            }) : d.is_photo ? b.click(function(a) {
                r.call(this, f, d.filename)
            }) : b.click(function(a) {
                r.call(this, f, d.filename)
            }),
            z.push(b)
        }
        function k(b, c) {
            function d() {
                "VIEW" == x.val() ? i(b.current_dir_path, y.val(), m) : i(b.current_dir_path, y.val(), l)
            }
            a.each(z,
            function() {
                this.unbind()
            }),
            w.unbind(),
            x.unbind(),
            y.unbind(),
            b.current_dir_path && w.click(function(a) {
                i(b.moveup_dir_path, y.val(), c)
            }),
            x.change(d),
            y.change(d),
            v.html("")
        }
        function l(b) {
            k(b, l);
            var c = document.createElement("table");
            c.className = "ke-table",
            c.cellPadding = 0,
            c.cellSpacing = 0,
            c.border = 0,
            v.append(c);
            for (var d = b.file_list,
            e = 0,
            f = d.length; f > e; e++) {
                var i = d[e],
                m = a(c.insertRow(e));
                m.mouseover(function(b) {
                    a(this).addClass("ke-on")
                }).mouseout(function(b) {
                    a(this).removeClass("ke-on")
                });
                var n = g + (i.is_dir ? "folder-16.gif": "file-16.gif"),
                o = a('<img src="' + n + '" width="16" height="16" alt="' + i.filename + '" align="absmiddle" />'),
                p = a(m[0].insertCell(0)).addClass("ke-cell ke-name").append(o).append(document.createTextNode(" " + i.filename)); ! i.is_dir || i.has_file ? (m.css("cursor", "pointer"), p.attr("title", i.filename), j(p, b, i, l)) : p.attr("title", h.emptyFolder),
                a(m[0].insertCell(1)).addClass("ke-cell ke-size").html(i.is_dir ? "-": Math.ceil(i.filesize / 1024) + "KB"),
                a(m[0].insertCell(2)).addClass("ke-cell ke-datetime").html(i.datetime)
            }
        }
        function m(b) {
            k(b, m);
            for (var d = b.file_list,
            e = 0,
            f = d.length; f > e; e++) {
                var i = d[e],
                l = a('<div class="ke-inline-block ke-item"></div>');
                v.append(l);
                var n = a('<div class="ke-inline-block ke-photo"></div>').mouseover(function(b) {
                    a(this).addClass("ke-on")
                }).mouseout(function(b) {
                    a(this).removeClass("ke-on")
                });
                l.append(n);
                var o = b.current_url + i.filename,
                p = i.is_dir ? g + "folder-64.gif": i.is_photo ? o: g + "file-64.gif",
                q = a('<img src="' + p + '" width="80" height="80" alt="' + i.filename + '" />'); ! i.is_dir || i.has_file ? (n.css("cursor", "pointer"), c(n, i), j(n, b, i, m)) : n.attr("title", h.emptyFolder),
                n.append(q),
                l.append('<div class="ke-name" title="' + i.filename + '">' + i.filename + "</div>")
            }
        }
        var n = a.undef(b.width, 650),
        o = a.undef(b.height, 510),
        p = a.undef(b.dirName, ""),
        q = a.undef(b.viewType, "VIEW").toUpperCase(),
        r = b.clickFn,
        s = ['<div style="padding:10px 20px;">', '<div class="ke-plugin-filemanager-header">', '<div class="ke-left">', '<img class="ke-inline-block" name="moveupImg" src="' + g + 'go-up.gif" width="16" height="16" border="0" alt="" /> ', '<a class="ke-inline-block" name="moveupLink" href="javascript:;">' + h.moveup + "</a>", "</div>", '<div class="ke-right">', h.viewType + ' <select class="ke-inline-block" name="viewType">', '<option value="VIEW">' + h.viewImage + "</option>", '<option value="LIST">' + h.listImage + "</option>", "</select> ", h.orderType + ' <select class="ke-inline-block" name="orderType">', '<option value="NAME">' + h.fileName + "</option>", '<option value="SIZE">' + h.fileSize + "</option>", '<option value="TYPE">' + h.fileType + "</option>", "</select>", "</div>", '<div class="ke-clearfix"></div>', "</div>", '<div class="ke-plugin-filemanager-body"></div>', "</div>"].join(""),
        t = d.createDialog({
            name: e,
            width: n,
            height: o,
            title: d.lang(e),
            body: s
        }),
        u = t.div,
        v = a(".ke-plugin-filemanager-body", u),
        w = (a('[name="moveupImg"]', u), a('[name="moveupLink"]', u)),
        x = (a('[name="viewServer"]', u), a('[name="viewType"]', u)),
        y = a('[name="orderType"]', u),
        z = [];
        return x.val(q),
        i("", y.val(), "VIEW" == q ? m: l),
        t
    }
}),
QingEditor.plugin("flash",
function(a) {
    var b = this,
    c = "flash",
    d = b.lang(c + "."),
    e = a.undef(b.allowFlashUpload, !0),
    f = a.undef(b.allowFileManager, !1),
    g = a.undef(b.formatUploadUrl, !0),
    h = a.undef(b.extraFileUploadParams, {}),
    i = a.undef(b.filePostName, "imgFile"),
    j = a.undef(b.uploadJson, b.basePath + "php/upload_json.php");
    b.plugin.flash = {
        edit: function() {
            var k = ['<div style="padding:20px;">', '<div class="ke-dialog-row">', '<label for="keUrl" style="width:60px;">' + d.url + "</label>", '<input class="ke-input-text" type="text" id="keUrl" name="url" value="" style="width:160px;" /> &nbsp;', '<input type="button" class="ke-upload-button" value="' + d.upload + '" /> &nbsp;', '<span class="ke-button-common ke-button-outer">', '<input type="button" class="ke-button-common ke-button" name="viewServer" value="' + d.viewServer + '" />', "</span>", "</div>", '<div class="ke-dialog-row">', '<label for="keWidth" style="width:60px;">' + d.width + "</label>", '<input type="text" id="keWidth" class="ke-input-text ke-input-number" name="width" value="550" maxlength="4" /> ', "</div>", '<div class="ke-dialog-row">', '<label for="keHeight" style="width:60px;">' + d.height + "</label>", '<input type="text" id="keHeight" class="ke-input-text ke-input-number" name="height" value="400" maxlength="4" /> ', "</div>", "</div>"].join(""),
            l = b.createDialog({
                name: c,
                width: 450,
                title: b.lang(c),
                body: k,
                yesBtn: {
                    name: b.lang("yes"),
                    click: function(c) {
                        var d = a.trim(n.val()),
                        e = p.val(),
                        f = q.val();
                        if ("http://" == d || a.invalidUrl(d)) return alert(b.lang("invalidUrl")),
                        void n[0].focus();
                        if (!/^\d*$/.test(e)) return alert(b.lang("invalidWidth")),
                        void p[0].focus();
                        if (!/^\d*$/.test(f)) return alert(b.lang("invalidHeight")),
                        void q[0].focus();
                        var g = a.mediaImg(b.themesPath + "common/blank.gif", {
                            src: d,
                            type: a.mediaType(".swf"),
                            width: e,
                            height: f,
                            quality: "high"
                        });
                        b.insertHtml(g).hideDialog().focus()
                    }
                }
            }),
            m = l.div,
            n = a('[name="url"]', m),
            o = a('[name="viewServer"]', m),
            p = a('[name="width"]', m),
            q = a('[name="height"]', m);
            if (n.val("http://"), e) {
                var r = a.uploadbutton({
                    button: a(".ke-upload-button", m)[0],
                    fieldName: i,
                    extraParams: h,
                    url: a.addParam(j, "dir=flash"),
                    afterUpload: function(d) {
                        if (l.hideLoading(), 0 === d.error) {
                            var e = d.url;
                            g && (e = a.formatUrl(e, "absolute")),
                            n.val(e),
                            b.afterUpload && b.afterUpload.call(b, e, d, c),
                            alert(b.lang("uploadSuccess"))
                        } else alert(d.message)
                    },
                    afterError: function(a) {
                        l.hideLoading(),
                        b.errorDialog(a)
                    }
                });
                r.fileBox.change(function(a) {
                    l.showLoading(b.lang("uploadLoading")),
                    r.submit()
                })
            } else a(".ke-upload-button", m).hide();
            f ? o.click(function(c) {
                b.loadPlugin("filemanager",
                function() {
                    b.plugin.filemanagerDialog({
                        viewType: "LIST",
                        dirName: "flash",
                        clickFn: function(c, d) {
                            b.dialogs.length > 1 && (a('[name="url"]', m).val(c), b.afterSelectFile && b.afterSelectFile.call(b, c), b.hideDialog())
                        }
                    })
                })
            }) : o.hide();
            var s = b.plugin.getSelectedFlash();
            if (s) {
                var t = a.mediaAttrs(s.attr("data-ke-tag"));
                n.val(t.src),
                p.val(a.removeUnit(s.css("width")) || t.width || 0),
                q.val(a.removeUnit(s.css("height")) || t.height || 0)
            }
            n[0].focus(),
            n[0].select()
        },
        "delete": function() {
            b.plugin.getSelectedFlash().remove(),
            b.addBookmark()
        }
    },
    b.clickToolbar(c, b.plugin.flash.edit)
}),
QingEditor.plugin("image",
function(a) {
    var b = this,
    c = "image",
    d = a.undef(b.allowImageUpload, !0),
    e = a.undef(b.allowImageRemote, !0),
    f = a.undef(b.formatUploadUrl, !0),
    g = a.undef(b.allowFileManager, !1),
    h = a.undef(b.uploadJson, b.basePath + "php/upload_json.php"),
    i = a.undef(b.imageTabIndex, 0),
    j = b.pluginsPath + "image/images/",
    k = a.undef(b.extraFileUploadParams, {}),
    l = a.undef(b.filePostName, "imgFile"),
    m = a.undef(b.fillDescAfterUploadImage, !1),
    n = b.lang(c + ".");
    b.plugin.imageDialog = function(d) {
        function e(a, b) {
            D.val(a),
            E.val(b),
            J = a,
            K = b
        }
        var i = (d.imageUrl, a.undef(d.imageWidth, ""), a.undef(d.imageHeight, ""), a.undef(d.imageTitle, ""), a.undef(d.imageAlign, ""), a.undef(d.showRemote, !0)),
        o = a.undef(d.showLocal, !0),
        p = a.undef(d.tabIndex, 0),
        q = d.clickFn,
        r = "QingEditor_upload_iframe_" + (new Date).getTime(),
        s = [];
        for (var t in k) s.push('<input type="hidden" name="' + t + '" value="' + k[t] + '" />');
        var u, v = ['<div style="padding:20px;">', '<div class="tabs"></div>', '<div class="tab1" style="display:none;">', '<div class="ke-dialog-row">', '<label for="remoteUrl" style="width:60px;">' + n.remoteUrl + "</label>", '<input type="text" id="remoteUrl" class="ke-input-text" name="url" value="" style="width:200px;" /> &nbsp;', '<span class="ke-button-common ke-button-outer">', '<input type="button" class="ke-button-common ke-button" name="viewServer" value="' + n.viewServer + '" />', "</span>", "</div>", '<div class="ke-dialog-row">', '<label for="remoteWidth" style="width:60px;">' + n.size + "</label>", n.width + ' <input type="text" id="remoteWidth" class="ke-input-text ke-input-number" name="width" value="" maxlength="4" /> ', n.height + ' <input type="text" class="ke-input-text ke-input-number" name="height" value="" maxlength="4" /> ', '<img class="ke-refresh-btn" src="' + j + 'refresh.png" width="16" height="16" alt="" style="cursor:pointer;" title="' + n.resetSize + '" />', "</div>", '<div class="ke-dialog-row">', '<label style="width:60px;">' + n.align + "</label>", '<input type="radio" name="align" class="ke-inline-block" value="" checked="checked" /> <img name="defaultImg" src="' + j + 'align_top.gif" width="23" height="25" alt="" />', ' <input type="radio" name="align" class="ke-inline-block" value="left" /> <img name="leftImg" src="' + j + 'align_left.gif" width="23" height="25" alt="" />', ' <input type="radio" name="align" class="ke-inline-block" value="right" /> <img name="rightImg" src="' + j + 'align_right.gif" width="23" height="25" alt="" />', "</div>", '<div class="ke-dialog-row">', '<label for="remoteTitle" style="width:60px;">' + n.imgTitle + "</label>", '<input type="text" id="remoteTitle" class="ke-input-text" name="title" value="" style="width:200px;" />', "</div>", "</div>", '<div class="tab2" style="display:none;">', '<iframe name="' + r + '" style="display:none;"></iframe>', '<form class="ke-upload-area ke-form" method="post" enctype="multipart/form-data" target="' + r + '" action="' + a.addParam(h, "dir=image") + '">', '<div class="ke-dialog-row">', s.join(""), '<label style="width:60px;">' + n.localUrl + "</label>", '<input type="text" name="localUrl" class="ke-input-text" tabindex="-1" style="width:200px;" readonly="true" /> &nbsp;', '<input type="button" class="ke-upload-button" value="' + n.upload + '" />', "</div>", "</form>", "</div>", "</div>"].join(""),
        w = o || g ? 450 : 400,
        x = o && i ? 300 : 250,
        y = b.createDialog({
            name: c,
            width: w,
            height: x,
            title: b.lang(c),
            body: v,
            yesBtn: {
                name: b.lang("yes"),
                click: function(c) {
                    if (!y.isLoading) {
                        if (o && i && u && 1 === u.selectedIndex || !i) return "" == I.fileBox.val() ? void alert(b.lang("pleaseSelectFile")) : (y.showLoading(b.lang("uploadLoading")), I.submit(), void B.val(""));
                        var d = a.trim(A.val()),
                        e = D.val(),
                        f = E.val(),
                        g = G.val(),
                        h = "";
                        return H.each(function() {
                            return this.checked ? (h = this.value, !1) : void 0
                        }),
                        "http://" == d || a.invalidUrl(d) ? (alert(b.lang("invalidUrl")), void A[0].focus()) : /^\d*$/.test(e) ? /^\d*$/.test(f) ? void q.call(b, d, g, e, f, 0, h) : (alert(b.lang("invalidHeight")), void E[0].focus()) : (alert(b.lang("invalidWidth")), void D[0].focus())
                    }
                }
            },
            beforeRemove: function() {
                C.unbind(),
                D.unbind(),
                E.unbind(),
                F.unbind()
            }
        }),
        z = y.div,
        A = a('[name="url"]', z),
        B = a('[name="localUrl"]', z),
        C = a('[name="viewServer"]', z),
        D = a('.tab1 [name="width"]', z),
        E = a('.tab1 [name="height"]', z),
        F = a(".ke-refresh-btn", z),
        G = a('.tab1 [name="title"]', z),
        H = a('.tab1 [name="align"]', z);
        i && o ? (u = a.tabs({
            src: a(".tabs", z),
            afterSelect: function(a) {}
        }), u.add({
            title: n.remoteImage,
            panel: a(".tab1", z)
        }), u.add({
            title: n.localImage,
            panel: a(".tab2", z)
        }), u.select(p)) : i ? a(".tab1", z).show() : o && a(".tab2", z).show();
        var I = a.uploadbutton({
            button: a(".ke-upload-button", z)[0],
            fieldName: l,
            form: a(".ke-form", z),
            target: r,
            width: 60,
            afterUpload: function(d) {
                if (y.hideLoading(), 0 === d.error) {
                    var e = d.url;
                    f && (e = a.formatUrl(e, "absolute")),
                    b.afterUpload && b.afterUpload.call(b, e, d, c),
                    m ? (a(".ke-dialog-row #remoteUrl", z).val(e), a(".ke-tabs-li", z)[0].click(), a(".ke-refresh-btn", z).click()) : q.call(b, e, d.title, d.width, d.height, d.border, d.align)
                } else alert(d.message)
            },
            afterError: function(a) {
                y.hideLoading(),
                b.errorDialog(a)
            }
        });
        I.fileBox.change(function(a) {
            B.val(I.fileBox.val())
        }),
        g ? C.click(function(c) {
            b.loadPlugin("filemanager",
            function() {
                b.plugin.filemanagerDialog({
                    viewType: "VIEW",
                    dirName: "image",
                    clickFn: function(c, d) {
                        b.dialogs.length > 1 && (a('[name="url"]', z).val(c), b.afterSelectFile && b.afterSelectFile.call(b, c), b.hideDialog())
                    }
                })
            })
        }) : C.hide();
        var J = 0,
        K = 0;
        return F.click(function(b) {
            var c = a('<img src="' + A.val() + '" />', document).css({
                position: "absolute",
                visibility: "hidden",
                top: 0,
                left: "-1000px"
            });
            c.bind("load",
            function() {
                e(c.width(), c.height()),
                c.remove()
            }),
            a(document.body).append(c)
        }),
        D.change(function(a) {
            J > 0 && E.val(Math.round(K / J * parseInt(this.value, 10)))
        }),
        E.change(function(a) {
            K > 0 && D.val(Math.round(J / K * parseInt(this.value, 10)))
        }),
        A.val(d.imageUrl),
        e(d.imageWidth, d.imageHeight),
        G.val(d.imageTitle),
        H.each(function() {
            return this.value === d.imageAlign ? (this.checked = !0, !1) : void 0
        }),
        i && 0 === p && (A[0].focus(), A[0].select()),
        y
    },
    b.plugin.image = {
        edit: function() {
            var a = b.plugin.getSelectedImage();
            b.plugin.imageDialog({
                imageUrl: a ? a.attr("data-ke-src") : "http://",
                imageWidth: a ? a.width() : "",
                imageHeight: a ? a.height() : "",
                imageTitle: a ? a.attr("title") : "",
                imageAlign: a ? a.attr("align") : "",
                showRemote: e,
                showLocal: d,
                tabIndex: a ? 0 : i,
                clickFn: function(c, d, e, f, g, h) {
                    a ? (a.attr("src", c), a.attr("data-ke-src", c), a.attr("width", e), a.attr("height", f), a.attr("title", d), a.attr("align", h), a.attr("alt", d)) : b.exec("insertimage", c, d, e, f, g, h),
                    setTimeout(function() {
                        b.hideDialog().focus()
                    },
                    0)
                }
            })
        },
        "delete": function() {
            var a = b.plugin.getSelectedImage();
            "a" == a.parent().name && (a = a.parent()),
            a.remove(),
            b.addBookmark()
        }
    },
    b.clickToolbar(c, b.plugin.image.edit)
}),
QingEditor.plugin("insertfile",
function(a) {
    var b = this,
    c = "insertfile",
    d = a.undef(b.allowFileUpload, !0),
    e = a.undef(b.allowFileManager, !1),
    f = a.undef(b.formatUploadUrl, !0),
    g = a.undef(b.uploadJson, b.basePath + "php/upload_json.php"),
    h = a.undef(b.extraFileUploadParams, {}),
    i = a.undef(b.filePostName, "imgFile"),
    j = b.lang(c + ".");
    b.plugin.fileDialog = function(k) {
        var l = a.undef(k.fileUrl, "http://"),
        m = a.undef(k.fileTitle, ""),
        n = k.clickFn,
        o = ['<div style="padding:20px;">', '<div class="ke-dialog-row">', '<label for="keUrl" style="width:60px;">' + j.url + "</label>", '<input type="text" id="keUrl" name="url" class="ke-input-text" style="width:160px;" /> &nbsp;', '<input type="button" class="ke-upload-button" value="' + j.upload + '" /> &nbsp;', '<span class="ke-button-common ke-button-outer">', '<input type="button" class="ke-button-common ke-button" name="viewServer" value="' + j.viewServer + '" />', "</span>", "</div>", '<div class="ke-dialog-row">', '<label for="keTitle" style="width:60px;">' + j.title + "</label>", '<input type="text" id="keTitle" class="ke-input-text" name="title" value="" style="width:160px;" /></div>', "</div>", "</form>", "</div>"].join(""),
        p = b.createDialog({
            name: c,
            width: 450,
            title: b.lang(c),
            body: o,
            yesBtn: {
                name: b.lang("yes"),
                click: function(c) {
                    var d = a.trim(r.val()),
                    e = t.val();
                    return "http://" == d || a.invalidUrl(d) ? (alert(b.lang("invalidUrl")), void r[0].focus()) : ("" === a.trim(e) && (e = d), void n.call(b, d, e))
                }
            }
        }),
        q = p.div,
        r = a('[name="url"]', q),
        s = a('[name="viewServer"]', q),
        t = a('[name="title"]', q);
        if (d) {
            var u = a.uploadbutton({
                button: a(".ke-upload-button", q)[0],
                fieldName: i,
                url: a.addParam(g, "dir=file"),
                extraParams: h,
                afterUpload: function(d) {
                    if (p.hideLoading(), 0 === d.error) {
                        var e = d.url;
                        f && (e = a.formatUrl(e, "absolute")),
                        r.val(e),
                        b.afterUpload && b.afterUpload.call(b, e, d, c),
                        alert(b.lang("uploadSuccess"))
                    } else alert(d.message)
                },
                afterError: function(a) {
                    p.hideLoading(),
                    b.errorDialog(a)
                }
            });
            u.fileBox.change(function(a) {
                p.showLoading(b.lang("uploadLoading")),
                u.submit()
            })
        } else a(".ke-upload-button", q).hide();
        e ? s.click(function(c) {
            b.loadPlugin("filemanager",
            function() {
                b.plugin.filemanagerDialog({
                    viewType: "LIST",
                    dirName: "file",
                    clickFn: function(c, d) {
                        b.dialogs.length > 1 && (a('[name="url"]', q).val(c), b.afterSelectFile && b.afterSelectFile.call(b, c), b.hideDialog())
                    }
                })
            })
        }) : s.hide(),
        r.val(l),
        t.val(m),
        r[0].focus(),
        r[0].select()
    },
    b.clickToolbar(c,
    function() {
        b.plugin.fileDialog({
            clickFn: function(a, c) {
                var d = '<a class="ke-insertfile" href="' + a + '" data-ke-src="' + a + '" target="_blank">' + c + "</a>";
                b.insertHtml(d).hideDialog().focus()
            }
        })
    })
}),
QingEditor.plugin("lineheight",
function(a) {
    var b = this,
    c = "lineheight",
    d = b.lang(c + ".");
    b.clickToolbar(c,
    function() {
        var e = "",
        f = b.cmd.commonNode({
            "*": ".line-height"
        });
        f && (e = f.css("line-height"));
        var g = b.createMenu({
            name: c,
            width: 150
        });
        a.each(d.lineHeight,
        function(c, d) {
            a.each(d,
            function(a, c) {
                g.addItem({
                    title: c,
                    checked: e === a,
                    click: function() {
                        b.cmd.toggle('<span style="line-height:' + a + ';"></span>', {
                            span: ".line-height=" + a
                        }),
                        b.updateState(),
                        b.addBookmark(),
                        b.hideMenu()
                    }
                })
            })
        })
    })
}),
QingEditor.plugin("link",
function(a) {
    var b = this,
    c = "link";
    b.plugin.link = {
        edit: function() {
            var d = b.lang(c + "."),
            e = '<div style="padding:20px;"><div class="ke-dialog-row"><label for="keUrl" style="width:60px;">' + d.url + '</label><input class="ke-input-text" type="text" id="keUrl" name="url" value="" style="width:260px;" /></div><div class="ke-dialog-row""><label for="keType" style="width:60px;">' + d.linkType + '</label><select id="keType" name="type"></select></div></div>',
            f = b.createDialog({
                name: c,
                width: 450,
                title: b.lang(c),
                body: e,
                yesBtn: {
                    name: b.lang("yes"),
                    click: function(c) {
                        var d = a.trim(h.val());
                        return "http://" == d || a.invalidUrl(d) ? (alert(b.lang("invalidUrl")), void h[0].focus()) : void b.exec("createlink", d, i.val()).hideDialog().focus()
                    }
                }
            }),
            g = f.div,
            h = a('input[name="url"]', g),
            i = a('select[name="type"]', g);
            h.val("http://"),
            i[0].options[0] = new Option(d.newWindow, "_blank"),
            i[0].options[1] = new Option(d.selfWindow, ""),
            b.cmd.selection();
            var j = b.plugin.getSelectedLink();
            j && (b.cmd.range.selectNode(j[0]), b.cmd.select(), h.val(j.attr("data-ke-src")), i.val(j.attr("target"))),
            h[0].focus(),
            h[0].select()
        },
        "delete": function() {
            b.exec("unlink", null)
        }
    },
    b.clickToolbar(c, b.plugin.link.edit)
}),
QingEditor.plugin("media",
function(a) {
    var b = this,
    c = "media",
    d = b.lang(c + "."),
    e = a.undef(b.allowMediaUpload, !0),
    f = a.undef(b.allowFileManager, !1),
    g = a.undef(b.formatUploadUrl, !0),
    h = a.undef(b.extraFileUploadParams, {}),
    i = a.undef(b.filePostName, "imgFile"),
    j = a.undef(b.uploadJson, b.basePath + "php/upload_json.php");
    b.plugin.media = {
        edit: function() {
            var k = ['<div style="padding:20px;">', '<div class="ke-dialog-row">', '<label for="keUrl" style="width:60px;">' + d.url + "</label>", '<input class="ke-input-text" type="text" id="keUrl" name="url" value="" style="width:160px;" /> &nbsp;', '<input type="button" class="ke-upload-button" value="' + d.upload + '" /> &nbsp;', '<span class="ke-button-common ke-button-outer">', '<input type="button" class="ke-button-common ke-button" name="viewServer" value="' + d.viewServer + '" />', "</span>", "</div>", '<div class="ke-dialog-row">', '<label for="keWidth" style="width:60px;">' + d.width + "</label>", '<input type="text" id="keWidth" class="ke-input-text ke-input-number" name="width" value="550" maxlength="4" />', "</div>", '<div class="ke-dialog-row">', '<label for="keHeight" style="width:60px;">' + d.height + "</label>", '<input type="text" id="keHeight" class="ke-input-text ke-input-number" name="height" value="400" maxlength="4" />', "</div>", '<div class="ke-dialog-row">', '<label for="keAutostart">' + d.autostart + "</label>", '<input type="checkbox" id="keAutostart" name="autostart" value="" /> ', "</div>", "</div>"].join(""),
            l = b.createDialog({
                name: c,
                width: 450,
                height: 230,
                title: b.lang(c),
                body: k,
                yesBtn: {
                    name: b.lang("yes"),
                    click: function(c) {
                        var d = a.trim(n.val()),
                        e = p.val(),
                        f = q.val();
                        if ("http://" == d || a.invalidUrl(d)) return alert(b.lang("invalidUrl")),
                        void n[0].focus();
                        if (!/^\d*$/.test(e)) return alert(b.lang("invalidWidth")),
                        void p[0].focus();
                        if (!/^\d*$/.test(f)) return alert(b.lang("invalidHeight")),
                        void q[0].focus();
                        var g = a.mediaImg(b.themesPath + "common/blank.gif", {
                            src: d,
                            type: a.mediaType(d),
                            width: e,
                            height: f,
                            autostart: r[0].checked ? "true": "false",
                            loop: "true"
                        });
                        b.insertHtml(g).hideDialog().focus()
                    }
                }
            }),
            m = l.div,
            n = a('[name="url"]', m),
            o = a('[name="viewServer"]', m),
            p = a('[name="width"]', m),
            q = a('[name="height"]', m),
            r = a('[name="autostart"]', m);
            if (n.val("http://"), e) {
                var s = a.uploadbutton({
                    button: a(".ke-upload-button", m)[0],
                    fieldName: i,
                    extraParams: h,
                    url: a.addParam(j, "dir=media"),
                    afterUpload: function(d) {
                        if (l.hideLoading(), 0 === d.error) {
                            var e = d.url;
                            g && (e = a.formatUrl(e, "absolute")),
                            n.val(e),
                            b.afterUpload && b.afterUpload.call(b, e, d, c),
                            alert(b.lang("uploadSuccess"))
                        } else alert(d.message)
                    },
                    afterError: function(a) {
                        l.hideLoading(),
                        b.errorDialog(a)
                    }
                });
                s.fileBox.change(function(a) {
                    l.showLoading(b.lang("uploadLoading")),
                    s.submit()
                })
            } else a(".ke-upload-button", m).hide();
            f ? o.click(function(c) {
                b.loadPlugin("filemanager",
                function() {
                    b.plugin.filemanagerDialog({
                        viewType: "LIST",
                        dirName: "media",
                        clickFn: function(c, d) {
                            b.dialogs.length > 1 && (a('[name="url"]', m).val(c), b.afterSelectFile && b.afterSelectFile.call(b, c), b.hideDialog())
                        }
                    })
                })
            }) : o.hide();
            var t = b.plugin.getSelectedMedia();
            if (t) {
                var u = a.mediaAttrs(t.attr("data-ke-tag"));
                n.val(u.src),
                p.val(a.removeUnit(t.css("width")) || u.width || 0),
                q.val(a.removeUnit(t.css("height")) || u.height || 0),
                r[0].checked = "true" === u.autostart
            }
            n[0].focus(),
            n[0].select()
        },
        "delete": function() {
            b.plugin.getSelectedMedia().remove(),
            b.addBookmark()
        }
    },
    b.clickToolbar(c, b.plugin.media.edit)
}),
function(a) {
    function b(a) {
        this.init(a)
    }
    a.extend(b, {
        init: function(b) {
            function c(b, c) {
                a(".ke-status > div", b).hide(),
                a(".ke-message", b).addClass("ke-error").show().html(a.escape(c))
            }
            var d = this;
            b.afterError = b.afterError ||
            function(a) {
                alert(a)
            },
            d.options = b,
            d.progressbars = {},
            d.div = a(b.container).html(['<div class="ke-swfupload">', '<div class="ke-swfupload-top">', '<div class="ke-inline-block ke-swfupload-button">', '<input type="button" value="Browse" />', "</div>", '<div class="ke-inline-block ke-swfupload-desc">' + b.uploadDesc + "</div>", '<span class="ke-button-common ke-button-outer ke-swfupload-startupload">', '<input type="button" class="ke-button-common ke-button" value="' + b.startButtonValue + '" />', "</span>", "</div>", '<div class="ke-swfupload-body"></div>', "</div>"].join("")),
            d.bodyDiv = a(".ke-swfupload-body", d.div);
            var e = {
                debug: !1,
                upload_url: b.uploadUrl,
                flash_url: b.flashUrl,
                file_post_name: b.filePostName,
                button_placeholder: a(".ke-swfupload-button > input", d.div)[0],
                button_image_url: b.buttonImageUrl,
                button_width: b.buttonWidth,
                button_height: b.buttonHeight,
                button_cursor: SWFUpload.CURSOR.HAND,
                file_types: b.fileTypes,
                file_types_description: b.fileTypesDesc,
                file_upload_limit: b.fileUploadLimit,
                file_size_limit: b.fileSizeLimit,
                post_params: b.postParams,
                file_queued_handler: function(a) {
                    a.url = d.options.fileIconUrl,
                    d.appendFile(a)
                },
                file_queue_error_handler: function(c, d, e) {
                    var f = "";
                    switch (d) {
                    case SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED:
                        f = b.queueLimitExceeded;
                        break;
                    case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
                        f = b.fileExceedsSizeLimit;
                        break;
                    case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:
                        f = b.zeroByteFile;
                        break;
                    case SWFUpload.QUEUE_ERROR.INVALID_FILETYPE:
                        f = b.invalidFiletype;
                        break;
                    default:
                        f = b.unknownError
                    }
                    a.DEBUG && alert(f)
                },
                upload_start_handler: function(b) {
                    var c = this,
                    d = a('div[data-id="' + b.id + '"]', c.bodyDiv);
                    a(".ke-status > div", d).hide(),
                    a(".ke-progressbar", d).show()
                },
                upload_progress_handler: function(a, b, c) {
                    var e = Math.round(100 * b / c),
                    f = d.progressbars[a.id];
                    f.bar.css("width", Math.round(80 * e / 100) + "px"),
                    f.percent.html(e + "%")
                },
                upload_error_handler: function(b, e, f) {
                    if (b && b.filestatus == SWFUpload.FILE_STATUS.ERROR) {
                        var g = a('div[data-id="' + b.id + '"]', d.bodyDiv).eq(0);
                        c(g, d.options.errorMessage)
                    }
                },
                upload_success_handler: function(b, e) {
                    var f = a('div[data-id="' + b.id + '"]', d.bodyDiv).eq(0),
                    g = {};
                    try {
                        g = a.json(e)
                    } catch(h) {
                        d.options.afterError.call(this, "<!doctype html><html>" + e + "</html>")
                    }
                    return 0 !== g.error ? void c(f, a.DEBUG ? g.message: d.options.errorMessage) : (b.url = g.url, a(".ke-img", f).attr("src", b.url).attr("data-status", b.filestatus).data("data", g), void a(".ke-status > div", f).hide())
                }
            };
            d.swfu = new SWFUpload(e),
            a(".ke-swfupload-startupload input", d.div).click(function() {
                d.swfu.startUpload()
            })
        },
        getUrlList: function() {
            var b = [];
            return a(".ke-img", self.bodyDiv).each(function() {
                var c = a(this),
                d = c.attr("data-status");
                d == SWFUpload.FILE_STATUS.COMPLETE && b.push(c.data("data"))
            }),
            b
        },
        removeFile: function(b) {
            var c = this;
            c.swfu.cancelUpload(b);
            var d = a('div[data-id="' + b + '"]', c.bodyDiv);
            a(".ke-photo", d).unbind(),
            a(".ke-delete", d).unbind(),
            d.remove()
        },
        removeFiles: function() {
            var b = this;
            a(".ke-item", b.bodyDiv).each(function() {
                b.removeFile(a(this).attr("data-id"))
            })
        },
        appendFile: function(b) {
            var c = this,
            d = a('<div class="ke-inline-block ke-item" data-id="' + b.id + '"></div>');
            c.bodyDiv.append(d);
            var e = a('<div class="ke-inline-block ke-photo"></div>').mouseover(function(b) {
                a(this).addClass("ke-on")
            }).mouseout(function(b) {
                a(this).removeClass("ke-on")
            });
            d.append(e);
            var f = a('<img src="' + b.url + '" class="ke-img" data-status="' + b.filestatus + '" width="80" height="80" alt="' + b.name + '" />');
            e.append(f),
            a('<span class="ke-delete"></span>').appendTo(e).click(function() {
                c.removeFile(b.id)
            });
            var g = a('<div class="ke-status"></div>').appendTo(e);
            a(['<div class="ke-progressbar">', '<div class="ke-progressbar-bar"><div class="ke-progressbar-bar-inner"></div></div>', '<div class="ke-progressbar-percent">0%</div></div>'].join("")).hide().appendTo(g),
            a('<div class="ke-message">' + c.options.pendingMessage + "</div>").appendTo(g),
            d.append('<div class="ke-name">' + b.name + "</div>"),
            c.progressbars[b.id] = {
                bar: a(".ke-progressbar-bar-inner", e),
                percent: a(".ke-progressbar-percent", e)
            }
        },
        remove: function() {
            this.removeFiles(),
            this.swfu.destroy(),
            this.div.html("")
        }
    }),
    a.swfupload = function(a, c) {
        return new b(a, c)
    }
} (QingEditor),
QingEditor.plugin("multiimage",
function(a) {
    var b = this,
    c = "multiimage",
    d = (a.undef(b.formatUploadUrl, !0), a.undef(b.uploadJson, b.basePath + "php/upload_json.php")),
    e = b.pluginsPath + "multiimage/images/",
    f = a.undef(b.imageSizeLimit, "1MB"),
    g = (a.undef(b.imageFileTypes, "*.jpg;*.gif;*.png"), a.undef(b.imageUploadLimit, 20)),
    h = a.undef(b.filePostName, "imgFile"),
    i = b.lang(c + ".");
    b.plugin.multiImageDialog = function(j) {
        var k = j.clickFn,
        l = a.tmpl(i.uploadDesc, {
            uploadLimit: g,
            sizeLimit: f
        }),
        m = ['<div style="padding:20px;">', '<div class="swfupload">', "</div>", "</div>"].join(""),
        n = b.createDialog({
            name: c,
            width: 650,
            height: 510,
            title: b.lang(c),
            body: m,
            previewBtn: {
                name: i.insertAll,
                click: function(a) {
                    k.call(b, p.getUrlList())
                }
            },
            yesBtn: {
                name: i.clearAll,
                click: function(a) {
                    p.removeFiles()
                }
            },
            beforeRemove: function() { (!a.IE || a.V <= 8) && p.remove()
            }
        }),
        o = n.div,
        p = a.swfupload({
            container: a(".swfupload", o),
            buttonImageUrl: e + ("zh-CN" == b.langType ? "select-files-zh-CN.png": "select-files-en.png"),
            buttonWidth: "zh-CN" == b.langType ? 72 : 88,
            buttonHeight: 23,
            fileIconUrl: e + "image.png",
            uploadDesc: l,
            startButtonValue: i.startUpload,
            uploadUrl: a.addParam(d, "dir=image"),
            flashUrl: e + "swfupload.swf",
            filePostName: h,
            fileTypes: "*.jpg;*.jpeg;*.gif;*.png;*.bmp",
            fileTypesDesc: "Image Files",
            fileUploadLimit: g,
            fileSizeLimit: f,
            postParams: a.undef(b.extraFileUploadParams, {}),
            queueLimitExceeded: i.queueLimitExceeded,
            fileExceedsSizeLimit: i.fileExceedsSizeLimit,
            zeroByteFile: i.zeroByteFile,
            invalidFiletype: i.invalidFiletype,
            unknownError: i.unknownError,
            pendingMessage: i.pending,
            errorMessage: i.uploadError,
            afterError: function(a) {
                b.errorDialog(a)
            }
        });
        return n
    },
    b.clickToolbar(c,
    function() {
        b.plugin.multiImageDialog({
            clickFn: function(c) {
                0 !== c.length && (a.each(c,
                function(a, c) {
                    b.afterUpload && b.afterUpload.call(b, c.url, c, "multiimage"),
                    b.exec("insertimage", c.url, c.title, c.width, c.height, c.border, c.align)
                }), setTimeout(function() {
                    b.hideDialog().focus()
                },
                0))
            }
        })
    })
}),
function() {
    window.SWFUpload = function(a) {
        this.initSWFUpload(a)
    },
    SWFUpload.prototype.initSWFUpload = function(a) {
        try {
            this.customSettings = {},
            this.settings = a,
            this.eventQueue = [],
            this.movieName = "QingEditor_SWFUpload_" + SWFUpload.movieCount++,
            this.movieElement = null,
            SWFUpload.instances[this.movieName] = this,
            this.initSettings(),
            this.loadFlash(),
            this.displayDebugInfo()
        } catch(b) {
            throw delete SWFUpload.instances[this.movieName],
            b
        }
    },
    SWFUpload.instances = {},
    SWFUpload.movieCount = 0,
    SWFUpload.version = "2.2.0 2009-03-25",
    SWFUpload.QUEUE_ERROR = {
        QUEUE_LIMIT_EXCEEDED: -100,
        FILE_EXCEEDS_SIZE_LIMIT: -110,
        ZERO_BYTE_FILE: -120,
        INVALID_FILETYPE: -130
    },
    SWFUpload.UPLOAD_ERROR = {
        HTTP_ERROR: -200,
        MISSING_UPLOAD_URL: -210,
        IO_ERROR: -220,
        SECURITY_ERROR: -230,
        UPLOAD_LIMIT_EXCEEDED: -240,
        UPLOAD_FAILED: -250,
        SPECIFIED_FILE_ID_NOT_FOUND: -260,
        FILE_VALIDATION_FAILED: -270,
        FILE_CANCELLED: -280,
        UPLOAD_STOPPED: -290
    },
    SWFUpload.FILE_STATUS = {
        QUEUED: -1,
        IN_PROGRESS: -2,
        ERROR: -3,
        COMPLETE: -4,
        CANCELLED: -5
    },
    SWFUpload.BUTTON_ACTION = {
        SELECT_FILE: -100,
        SELECT_FILES: -110,
        START_UPLOAD: -120
    },
    SWFUpload.CURSOR = {
        ARROW: -1,
        HAND: -2
    },
    SWFUpload.WINDOW_MODE = {
        WINDOW: "window",
        TRANSPARENT: "transparent",
        OPAQUE: "opaque"
    },
    SWFUpload.completeURL = function(a) {
        if ("string" != typeof a || a.match(/^https?:\/\//i) || a.match(/^\//)) return a;
        var b, c = (window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port: ""), window.location.pathname.lastIndexOf("/"));
        return b = 0 >= c ? "/": window.location.pathname.substr(0, c) + "/",
        b + a
    },
    SWFUpload.prototype.initSettings = function() {
        this.ensureDefault = function(a, b) {
            this.settings[a] = void 0 == this.settings[a] ? b: this.settings[a]
        },
        this.ensureDefault("upload_url", ""),
        this.ensureDefault("preserve_relative_urls", !1),
        this.ensureDefault("file_post_name", "Filedata"),
        this.ensureDefault("post_params", {}),
        this.ensureDefault("use_query_string", !1),
        this.ensureDefault("requeue_on_error", !1),
        this.ensureDefault("http_success", []),
        this.ensureDefault("assume_success_timeout", 0),
        this.ensureDefault("file_types", "*.*"),
        this.ensureDefault("file_types_description", "All Files"),
        this.ensureDefault("file_size_limit", 0),
        this.ensureDefault("file_upload_limit", 0),
        this.ensureDefault("file_queue_limit", 0),
        this.ensureDefault("flash_url", "swfupload.swf"),
        this.ensureDefault("prevent_swf_caching", !0),
        this.ensureDefault("button_image_url", ""),
        this.ensureDefault("button_width", 1),
        this.ensureDefault("button_height", 1),
        this.ensureDefault("button_text", ""),
        this.ensureDefault("button_text_style", "color: #000000; font-size: 16pt;"),
        this.ensureDefault("button_text_top_padding", 0),
        this.ensureDefault("button_text_left_padding", 0),
        this.ensureDefault("button_action", SWFUpload.BUTTON_ACTION.SELECT_FILES),
        this.ensureDefault("button_disabled", !1),
        this.ensureDefault("button_placeholder_id", ""),
        this.ensureDefault("button_placeholder", null),
        this.ensureDefault("button_cursor", SWFUpload.CURSOR.ARROW),
        this.ensureDefault("button_window_mode", SWFUpload.WINDOW_MODE.WINDOW),
        this.ensureDefault("debug", !1),
        this.settings.debug_enabled = this.settings.debug,
        this.settings.return_upload_start_handler = this.returnUploadStart,
        this.ensureDefault("swfupload_loaded_handler", null),
        this.ensureDefault("file_dialog_start_handler", null),
        this.ensureDefault("file_queued_handler", null),
        this.ensureDefault("file_queue_error_handler", null),
        this.ensureDefault("file_dialog_complete_handler", null),
        this.ensureDefault("upload_start_handler", null),
        this.ensureDefault("upload_progress_handler", null),
        this.ensureDefault("upload_error_handler", null),
        this.ensureDefault("upload_success_handler", null),
        this.ensureDefault("upload_complete_handler", null),
        this.ensureDefault("debug_handler", this.debugMessage),
        this.ensureDefault("custom_settings", {}),
        this.customSettings = this.settings.custom_settings,
        this.settings.prevent_swf_caching && (this.settings.flash_url = this.settings.flash_url + (this.settings.flash_url.indexOf("?") < 0 ? "?": "&") + "preventswfcaching=" + (new Date).getTime()),
        this.settings.preserve_relative_urls || (this.settings.upload_url = SWFUpload.completeURL(this.settings.upload_url), this.settings.button_image_url = SWFUpload.completeURL(this.settings.button_image_url)),
        delete this.ensureDefault
    },
    SWFUpload.prototype.loadFlash = function() {
        var a, b;
        if (null !== document.getElementById(this.movieName)) throw "ID " + this.movieName + " is already in use. The Flash Object could not be added";
        if (a = document.getElementById(this.settings.button_placeholder_id) || this.settings.button_placeholder, void 0 == a) throw "Could not find the placeholder element: " + this.settings.button_placeholder_id;
        b = document.createElement("div"),
        b.innerHTML = this.getFlashHTML(),
        a.parentNode.replaceChild(b.firstChild, a),
        void 0 == window[this.movieName] && (window[this.movieName] = this.getMovieElement())
    },
    SWFUpload.prototype.getFlashHTML = function() {
        var a = "";
        return QingEditor.IE && QingEditor.V > 8 && (a = ' classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"'),
        ['<object id="', this.movieName, '"' + a + ' type="application/x-shockwave-flash" data="', this.settings.flash_url, '" width="', this.settings.button_width, '" height="', this.settings.button_height, '" class="swfupload">', '<param name="wmode" value="', this.settings.button_window_mode, '" />', '<param name="movie" value="', this.settings.flash_url, '" />', '<param name="quality" value="high" />', '<param name="menu" value="false" />', '<param name="allowScriptAccess" value="always" />', '<param name="flashvars" value="' + this.getFlashVars() + '" />', "</object>"].join("")
    },
    SWFUpload.prototype.getFlashVars = function() {
        var a = this.buildParamString(),
        b = this.settings.http_success.join(",");
        return ["movieName=", encodeURIComponent(this.movieName), "&amp;uploadURL=", encodeURIComponent(this.settings.upload_url), "&amp;useQueryString=", encodeURIComponent(this.settings.use_query_string), "&amp;requeueOnError=", encodeURIComponent(this.settings.requeue_on_error), "&amp;httpSuccess=", encodeURIComponent(b), "&amp;assumeSuccessTimeout=", encodeURIComponent(this.settings.assume_success_timeout), "&amp;params=", encodeURIComponent(a), "&amp;filePostName=", encodeURIComponent(this.settings.file_post_name), "&amp;fileTypes=", encodeURIComponent(this.settings.file_types), "&amp;fileTypesDescription=", encodeURIComponent(this.settings.file_types_description), "&amp;fileSizeLimit=", encodeURIComponent(this.settings.file_size_limit), "&amp;fileUploadLimit=", encodeURIComponent(this.settings.file_upload_limit), "&amp;fileQueueLimit=", encodeURIComponent(this.settings.file_queue_limit), "&amp;debugEnabled=", encodeURIComponent(this.settings.debug_enabled), "&amp;buttonImageURL=", encodeURIComponent(this.settings.button_image_url), "&amp;buttonWidth=", encodeURIComponent(this.settings.button_width), "&amp;buttonHeight=", encodeURIComponent(this.settings.button_height), "&amp;buttonText=", encodeURIComponent(this.settings.button_text), "&amp;buttonTextTopPadding=", encodeURIComponent(this.settings.button_text_top_padding), "&amp;buttonTextLeftPadding=", encodeURIComponent(this.settings.button_text_left_padding), "&amp;buttonTextStyle=", encodeURIComponent(this.settings.button_text_style), "&amp;buttonAction=", encodeURIComponent(this.settings.button_action), "&amp;buttonDisabled=", encodeURIComponent(this.settings.button_disabled), "&amp;buttonCursor=", encodeURIComponent(this.settings.button_cursor)].join("")
    },
    SWFUpload.prototype.getMovieElement = function() {
        if (void 0 == this.movieElement && (this.movieElement = document.getElementById(this.movieName)), null === this.movieElement) throw "Could not find Flash element";
        return this.movieElement
    },
    SWFUpload.prototype.buildParamString = function() {
        var a = this.settings.post_params,
        b = [];
        if ("object" == typeof a) for (var c in a) a.hasOwnProperty(c) && b.push(encodeURIComponent(c.toString()) + "=" + encodeURIComponent(a[c].toString()));
        return b.join("&amp;")
    },
    SWFUpload.prototype.destroy = function() {
        try {
            this.cancelUpload(null, !1);
            var a = null;
            if (a = this.getMovieElement(), a && "unknown" == typeof a.CallFunction) {
                for (var b in a) try {
                    "function" == typeof a[b] && (a[b] = null)
                } catch(c) {}
                try {
                    a.parentNode.removeChild(a)
                } catch(d) {}
            }
            return window[this.movieName] = null,
            SWFUpload.instances[this.movieName] = null,
            delete SWFUpload.instances[this.movieName],
            this.movieElement = null,
            this.settings = null,
            this.customSettings = null,
            this.eventQueue = null,
            this.movieName = null,
            !0
        } catch(e) {
            return ! 1
        }
    },
    SWFUpload.prototype.displayDebugInfo = function() {
        this.debug(["---SWFUpload Instance Info---\n", "Version: ", SWFUpload.version, "\n", "Movie Name: ", this.movieName, "\n", "Settings:\n", "	", "upload_url:               ", this.settings.upload_url, "\n", "	", "flash_url:                ", this.settings.flash_url, "\n", "	", "use_query_string:         ", this.settings.use_query_string.toString(), "\n", "	", "requeue_on_error:         ", this.settings.requeue_on_error.toString(), "\n", "	", "http_success:             ", this.settings.http_success.join(", "), "\n", "	", "assume_success_timeout:   ", this.settings.assume_success_timeout, "\n", "	", "file_post_name:           ", this.settings.file_post_name, "\n", "	", "post_params:              ", this.settings.post_params.toString(), "\n", "	", "file_types:               ", this.settings.file_types, "\n", "	", "file_types_description:   ", this.settings.file_types_description, "\n", "	", "file_size_limit:          ", this.settings.file_size_limit, "\n", "	", "file_upload_limit:        ", this.settings.file_upload_limit, "\n", "	", "file_queue_limit:         ", this.settings.file_queue_limit, "\n", "	", "debug:                    ", this.settings.debug.toString(), "\n", "	", "prevent_swf_caching:      ", this.settings.prevent_swf_caching.toString(), "\n", "	", "button_placeholder_id:    ", this.settings.button_placeholder_id.toString(), "\n", "	", "button_placeholder:       ", this.settings.button_placeholder ? "Set": "Not Set", "\n", "	", "button_image_url:         ", this.settings.button_image_url.toString(), "\n", "	", "button_width:             ", this.settings.button_width.toString(), "\n", "	", "button_height:            ", this.settings.button_height.toString(), "\n", "	", "button_text:              ", this.settings.button_text.toString(), "\n", "	", "button_text_style:        ", this.settings.button_text_style.toString(), "\n", "	", "button_text_top_padding:  ", this.settings.button_text_top_padding.toString(), "\n", "	", "button_text_left_padding: ", this.settings.button_text_left_padding.toString(), "\n", "	", "button_action:            ", this.settings.button_action.toString(), "\n", "	", "button_disabled:          ", this.settings.button_disabled.toString(), "\n", "	", "custom_settings:          ", this.settings.custom_settings.toString(), "\n", "Event Handlers:\n", "	", "swfupload_loaded_handler assigned:  ", ("function" == typeof this.settings.swfupload_loaded_handler).toString(), "\n", "	", "file_dialog_start_handler assigned: ", ("function" == typeof this.settings.file_dialog_start_handler).toString(), "\n", "	", "file_queued_handler assigned:       ", ("function" == typeof this.settings.file_queued_handler).toString(), "\n", "	", "file_queue_error_handler assigned:  ", ("function" == typeof this.settings.file_queue_error_handler).toString(), "\n", "	", "upload_start_handler assigned:      ", ("function" == typeof this.settings.upload_start_handler).toString(), "\n", "	", "upload_progress_handler assigned:   ", ("function" == typeof this.settings.upload_progress_handler).toString(), "\n", "	", "upload_error_handler assigned:      ", ("function" == typeof this.settings.upload_error_handler).toString(), "\n", "	", "upload_success_handler assigned:    ", ("function" == typeof this.settings.upload_success_handler).toString(), "\n", "	", "upload_complete_handler assigned:   ", ("function" == typeof this.settings.upload_complete_handler).toString(), "\n", "	", "debug_handler assigned:             ", ("function" == typeof this.settings.debug_handler).toString(), "\n"].join(""))
    },
    SWFUpload.prototype.addSetting = function(a, b, c) {
        return void 0 == b ? this.settings[a] = c: this.settings[a] = b
    },
    SWFUpload.prototype.getSetting = function(a) {
        return void 0 != this.settings[a] ? this.settings[a] : ""
    },
    SWFUpload.prototype.callFlash = function(functionName, argumentArray) {
        argumentArray = argumentArray || [];
        var movieElement = this.getMovieElement(),
        returnValue,
        returnString;
        try {
            returnString = movieElement.CallFunction('<invoke name="' + functionName + '" returntype="javascript">' + __flash__argumentsToXML(argumentArray, 0) + "</invoke>"),
            returnValue = eval(returnString)
        } catch(ex) {
            throw "Call to " + functionName + " failed"
        }
        return void 0 != returnValue && "object" == typeof returnValue.post && (returnValue = this.unescapeFilePostParams(returnValue)),
        returnValue
    },
    SWFUpload.prototype.selectFile = function() {
        this.callFlash("SelectFile")
    },
    SWFUpload.prototype.selectFiles = function() {
        this.callFlash("SelectFiles")
    },
    SWFUpload.prototype.startUpload = function(a) {
        this.callFlash("StartUpload", [a])
    },
    SWFUpload.prototype.cancelUpload = function(a, b) {
        b !== !1 && (b = !0),
        this.callFlash("CancelUpload", [a, b])
    },
    SWFUpload.prototype.stopUpload = function() {
        this.callFlash("StopUpload")
    },
    SWFUpload.prototype.getStats = function() {
        return this.callFlash("GetStats")
    },
    SWFUpload.prototype.setStats = function(a) {
        this.callFlash("SetStats", [a])
    },
    SWFUpload.prototype.getFile = function(a) {
        return "number" == typeof a ? this.callFlash("GetFileByIndex", [a]) : this.callFlash("GetFile", [a])
    },
    SWFUpload.prototype.addFileParam = function(a, b, c) {
        return this.callFlash("AddFileParam", [a, b, c])
    },
    SWFUpload.prototype.removeFileParam = function(a, b) {
        this.callFlash("RemoveFileParam", [a, b])
    },
    SWFUpload.prototype.setUploadURL = function(a) {
        this.settings.upload_url = a.toString(),
        this.callFlash("SetUploadURL", [a])
    },
    SWFUpload.prototype.setPostParams = function(a) {
        this.settings.post_params = a,
        this.callFlash("SetPostParams", [a])
    },
    SWFUpload.prototype.addPostParam = function(a, b) {
        this.settings.post_params[a] = b,
        this.callFlash("SetPostParams", [this.settings.post_params])
    },
    SWFUpload.prototype.removePostParam = function(a) {
        delete this.settings.post_params[a],
        this.callFlash("SetPostParams", [this.settings.post_params])
    },
    SWFUpload.prototype.setFileTypes = function(a, b) {
        this.settings.file_types = a,
        this.settings.file_types_description = b,
        this.callFlash("SetFileTypes", [a, b])
    },
    SWFUpload.prototype.setFileSizeLimit = function(a) {
        this.settings.file_size_limit = a,
        this.callFlash("SetFileSizeLimit", [a])
    },
    SWFUpload.prototype.setFileUploadLimit = function(a) {
        this.settings.file_upload_limit = a,
        this.callFlash("SetFileUploadLimit", [a])
    },
    SWFUpload.prototype.setFileQueueLimit = function(a) {
        this.settings.file_queue_limit = a,
        this.callFlash("SetFileQueueLimit", [a])
    },
    SWFUpload.prototype.setFilePostName = function(a) {
        this.settings.file_post_name = a,
        this.callFlash("SetFilePostName", [a])
    },
    SWFUpload.prototype.setUseQueryString = function(a) {
        this.settings.use_query_string = a,
        this.callFlash("SetUseQueryString", [a])
    },
    SWFUpload.prototype.setRequeueOnError = function(a) {
        this.settings.requeue_on_error = a,
        this.callFlash("SetRequeueOnError", [a])
    },
    SWFUpload.prototype.setHTTPSuccess = function(a) {
        "string" == typeof a && (a = a.replace(" ", "").split(",")),
        this.settings.http_success = a,
        this.callFlash("SetHTTPSuccess", [a])
    },
    SWFUpload.prototype.setAssumeSuccessTimeout = function(a) {
        this.settings.assume_success_timeout = a,
        this.callFlash("SetAssumeSuccessTimeout", [a])
    },
    SWFUpload.prototype.setDebugEnabled = function(a) {
        this.settings.debug_enabled = a,
        this.callFlash("SetDebugEnabled", [a])
    },
    SWFUpload.prototype.setButtonImageURL = function(a) {
        void 0 == a && (a = ""),
        this.settings.button_image_url = a,
        this.callFlash("SetButtonImageURL", [a])
    },
    SWFUpload.prototype.setButtonDimensions = function(a, b) {
        this.settings.button_width = a,
        this.settings.button_height = b;
        var c = this.getMovieElement();
        void 0 != c && (c.style.width = a + "px", c.style.height = b + "px"),
        this.callFlash("SetButtonDimensions", [a, b])
    },
    SWFUpload.prototype.setButtonText = function(a) {
        this.settings.button_text = a,
        this.callFlash("SetButtonText", [a])
    },
    SWFUpload.prototype.setButtonTextPadding = function(a, b) {
        this.settings.button_text_top_padding = b,
        this.settings.button_text_left_padding = a,
        this.callFlash("SetButtonTextPadding", [a, b])
    },
    SWFUpload.prototype.setButtonTextStyle = function(a) {
        this.settings.button_text_style = a,
        this.callFlash("SetButtonTextStyle", [a])
    },
    SWFUpload.prototype.setButtonDisabled = function(a) {
        this.settings.button_disabled = a,
        this.callFlash("SetButtonDisabled", [a])
    },
    SWFUpload.prototype.setButtonAction = function(a) {
        this.settings.button_action = a,
        this.callFlash("SetButtonAction", [a]);
    },
    SWFUpload.prototype.setButtonCursor = function(a) {
        this.settings.button_cursor = a,
        this.callFlash("SetButtonCursor", [a])
    },
    SWFUpload.prototype.queueEvent = function(a, b) {
        void 0 == b ? b = [] : b instanceof Array || (b = [b]);
        var c = this;
        if ("function" == typeof this.settings[a]) this.eventQueue.push(function() {
            this.settings[a].apply(this, b)
        }),
        setTimeout(function() {
            c.executeNextEvent()
        },
        0);
        else if (null !== this.settings[a]) throw "Event handler " + a + " is unknown or is not a function"
    },
    SWFUpload.prototype.executeNextEvent = function() {
        var a = this.eventQueue ? this.eventQueue.shift() : null;
        "function" == typeof a && a.apply(this)
    },
    SWFUpload.prototype.unescapeFilePostParams = function(a) {
        var b, c = /[$]([0-9a-f]{4})/i,
        d = {};
        if (void 0 != a) {
            for (var e in a.post) if (a.post.hasOwnProperty(e)) {
                b = e;
                for (var f; null !== (f = c.exec(b));) b = b.replace(f[0], String.fromCharCode(parseInt("0x" + f[1], 16)));
                d[b] = a.post[e]
            }
            a.post = d
        }
        return a
    },
    SWFUpload.prototype.testExternalInterface = function() {
        try {
            return this.callFlash("TestExternalInterface")
        } catch(a) {
            return ! 1
        }
    },
    SWFUpload.prototype.flashReady = function() {
        var a = this.getMovieElement();
        return a ? (this.cleanUp(a), void this.queueEvent("swfupload_loaded_handler")) : void this.debug("Flash called back ready but the flash movie can't be found.")
    },
    SWFUpload.prototype.cleanUp = function(a) {
        try {
            if (this.movieElement && "unknown" == typeof a.CallFunction) {
                this.debug("Removing Flash functions hooks (this should only run in IE and should prevent memory leaks)");
                for (var b in a) try {
                    "function" == typeof a[b] && (a[b] = null)
                } catch(c) {}
            }
        } catch(d) {}
        window.__flash__removeCallback = function(a, b) {
            try {
                a && (a[b] = null)
            } catch(c) {}
        }
    },
    SWFUpload.prototype.fileDialogStart = function() {
        this.queueEvent("file_dialog_start_handler")
    },
    SWFUpload.prototype.fileQueued = function(a) {
        a = this.unescapeFilePostParams(a),
        this.queueEvent("file_queued_handler", a)
    },
    SWFUpload.prototype.fileQueueError = function(a, b, c) {
        a = this.unescapeFilePostParams(a),
        this.queueEvent("file_queue_error_handler", [a, b, c])
    },
    SWFUpload.prototype.fileDialogComplete = function(a, b, c) {
        this.queueEvent("file_dialog_complete_handler", [a, b, c])
    },
    SWFUpload.prototype.uploadStart = function(a) {
        a = this.unescapeFilePostParams(a),
        this.queueEvent("return_upload_start_handler", a)
    },
    SWFUpload.prototype.returnUploadStart = function(a) {
        var b;
        if ("function" == typeof this.settings.upload_start_handler) a = this.unescapeFilePostParams(a),
        b = this.settings.upload_start_handler.call(this, a);
        else if (void 0 != this.settings.upload_start_handler) throw "upload_start_handler must be a function";
        void 0 === b && (b = !0),
        b = !!b,
        this.callFlash("ReturnUploadStart", [b])
    },
    SWFUpload.prototype.uploadProgress = function(a, b, c) {
        a = this.unescapeFilePostParams(a),
        this.queueEvent("upload_progress_handler", [a, b, c])
    },
    SWFUpload.prototype.uploadError = function(a, b, c) {
        a = this.unescapeFilePostParams(a),
        this.queueEvent("upload_error_handler", [a, b, c])
    },
    SWFUpload.prototype.uploadSuccess = function(a, b, c) {
        a = this.unescapeFilePostParams(a),
        this.queueEvent("upload_success_handler", [a, b, c])
    },
    SWFUpload.prototype.uploadComplete = function(a) {
        a = this.unescapeFilePostParams(a),
        this.queueEvent("upload_complete_handler", a)
    },
    SWFUpload.prototype.debug = function(a) {
        this.queueEvent("debug_handler", a)
    },
    SWFUpload.prototype.debugMessage = function(a) {
        if (this.settings.debug) {
            var b, c = [];
            if ("object" == typeof a && "string" == typeof a.name && "string" == typeof a.message) {
                for (var d in a) a.hasOwnProperty(d) && c.push(d + ": " + a[d]);
                b = c.join("\n") || "",
                c = b.split("\n"),
                b = "EXCEPTION: " + c.join("\nEXCEPTION: "),
                SWFUpload.Console.writeLine(b)
            } else SWFUpload.Console.writeLine(a)
        }
    },
    SWFUpload.Console = {},
    SWFUpload.Console.writeLine = function(a) {
        var b, c;
        try {
            b = document.getElementById("SWFUpload_Console"),
            b || (c = document.createElement("form"), document.getElementsByTagName("body")[0].appendChild(c), b = document.createElement("textarea"), b.id = "SWFUpload_Console", b.style.fontFamily = "monospace", b.setAttribute("wrap", "off"), b.wrap = "off", b.style.overflow = "auto", b.style.width = "700px", b.style.height = "350px", b.style.margin = "5px", c.appendChild(b)),
            b.value += a + "\n",
            b.scrollTop = b.scrollHeight - b.clientHeight
        } catch(d) {
            alert("Exception: " + d.name + " Message: " + d.message)
        }
    }
} (),
function() {
    "function" == typeof SWFUpload && (SWFUpload.queue = {},
    SWFUpload.prototype.initSettings = function(a) {
        return function() {
            "function" == typeof a && a.call(this),
            this.queueSettings = {},
            this.queueSettings.queue_cancelled_flag = !1,
            this.queueSettings.queue_upload_count = 0,
            this.queueSettings.user_upload_complete_handler = this.settings.upload_complete_handler,
            this.queueSettings.user_upload_start_handler = this.settings.upload_start_handler,
            this.settings.upload_complete_handler = SWFUpload.queue.uploadCompleteHandler,
            this.settings.upload_start_handler = SWFUpload.queue.uploadStartHandler,
            this.settings.queue_complete_handler = this.settings.queue_complete_handler || null
        }
    } (SWFUpload.prototype.initSettings), SWFUpload.prototype.startUpload = function(a) {
        this.queueSettings.queue_cancelled_flag = !1,
        this.callFlash("StartUpload", [a])
    },
    SWFUpload.prototype.cancelQueue = function() {
        this.queueSettings.queue_cancelled_flag = !0,
        this.stopUpload();
        for (var a = this.getStats(); a.files_queued > 0;) this.cancelUpload(),
        a = this.getStats()
    },
    SWFUpload.queue.uploadStartHandler = function(a) {
        var b;
        return "function" == typeof this.queueSettings.user_upload_start_handler && (b = this.queueSettings.user_upload_start_handler.call(this, a)),
        b = b === !1 ? !1 : !0,
        this.queueSettings.queue_cancelled_flag = !b,
        b
    },
    SWFUpload.queue.uploadCompleteHandler = function(a) {
        var b, c = this.queueSettings.user_upload_complete_handler;
        if (a.filestatus === SWFUpload.FILE_STATUS.COMPLETE && this.queueSettings.queue_upload_count++, b = "function" == typeof c ? c.call(this, a) === !1 ? !1 : !0 : a.filestatus === SWFUpload.FILE_STATUS.QUEUED ? !1 : !0) {
            var d = this.getStats();
            d.files_queued > 0 && this.queueSettings.queue_cancelled_flag === !1 ? this.startUpload() : this.queueSettings.queue_cancelled_flag === !1 ? (this.queueEvent("queue_complete_handler", [this.queueSettings.queue_upload_count]), this.queueSettings.queue_upload_count = 0) : (this.queueSettings.queue_cancelled_flag = !1, this.queueSettings.queue_upload_count = 0)
        }
    })
} (),
QingEditor.plugin("pagebreak",
function(a) {
    var b = this,
    c = "pagebreak",
    d = a.undef(b.pagebreakHtml, '<hr style="page-break-after: always;" class="ke-pagebreak" />');
    b.clickToolbar(c,
    function() {
        var c = b.cmd,
        e = c.range;
        b.focus();
        var f = "br" == b.newlineTag || a.WEBKIT ? "": '<span id="__QingEditor_tail_tag__"></span>';
        if (b.insertHtml(d + f), "" !== f) {
            var g = a("#__QingEditor_tail_tag__", b.edit.doc);
            e.selectNodeContents(g[0]),
            g.removeAttr("id"),
            c.select()
        }
    })
}),
QingEditor.plugin("plainpaste",
function(a) {
    var b = this,
    c = "plainpaste";
    b.clickToolbar(c,
    function() {
        var d = b.lang(c + "."),
        e = '<div style="padding:10px 20px;"><div style="margin-bottom:10px;">' + d.comment + '</div><textarea class="ke-textarea" style="width:408px;height:260px;"></textarea></div>',
        f = b.createDialog({
            name: c,
            width: 450,
            title: b.lang(c),
            body: e,
            yesBtn: {
                name: b.lang("yes"),
                click: function(c) {
                    var d = g.val();
                    d = a.escape(d),
                    d = d.replace(/ {2}/g, " &nbsp;"),
                    d = "p" == b.newlineTag ? d.replace(/^/, "<p>").replace(/$/, "</p>").replace(/\n/g, "</p><p>") : d.replace(/\n/g, "<br />$&"),
                    b.insertHtml(d).hideDialog().focus()
                }
            }
        }),
        g = a("textarea", f.div);
        g[0].focus()
    })
}),
QingEditor.plugin("preview",
function(a) {
    var b = this,
    c = "preview";
    b.clickToolbar(c,
    function() {
        var d = (b.lang(c + "."), '<div style="padding:10px 20px;"><iframe class="ke-textarea" frameborder="0" style="width:708px;height:400px;"></iframe></div>'),
        e = b.createDialog({
            name: c,
            width: 750,
            title: b.lang(c),
            body: d
        }),
        f = a("iframe", e.div),
        g = a.iframeDoc(f);
        g.open(),
        g.write(b.fullHtml()),
        g.close(),
        a(g.body).css("background-color", "#FFF"),
        f[0].contentWindow.focus()
    })
}),
QingEditor.plugin("quickformat",
function(a) {
    function b(a) {
        for (var b = a.first(); b && b.first();) b = b.first();
        return b
    }
    var c = this,
    d = "quickformat",
    e = a.toMap("blockquote,center,div,h1,h2,h3,h4,h5,h6,p");
    c.clickToolbar(d,
    function() {
        c.focus();
        for (var d, f = c.edit.doc,
        g = c.cmd.range,
        h = a(f.body).first(), i = [], j = [], k = g.createBookmark(!0); h;) {
            d = h.next();
            var l = b(h);
            l && "img" == l.name || (e[h.name] ? (h.html(h.html().replace(/^(\s|&nbsp;|　)+/gi, "")), h.css("text-indent", "2em")) : j.push(h), (!d || e[d.name] || e[h.name] && !e[d.name]) && (j.length > 0 && i.push(j), j = [])),
            h = d
        }
        a.each(i,
        function(b, c) {
            var d = a('<p style="text-indent:2em;"></p>', f);
            c[0].before(d),
            a.each(c,
            function(a, b) {
                d.append(b)
            })
        }),
        g.moveToBookmark(k),
        c.addBookmark()
    })
}),
QingEditor.plugin("table",
function(a) {
    function b(a, b) {
        b = b.toUpperCase(),
        a.css("background-color", b),
        a.css("color", "#000000" === b ? "#FFFFFF": "#000000"),
        a.html(b)
    }
    function c(c, d) {
        function f() {
            a.each(i,
            function() {
                this.remove()
            }),
            i = [],
            a(document).unbind("click,mousedown", f),
            c.unbind("click,mousedown", f)
        }
        d.bind("click,mousedown",
        function(a) {
            a.stopPropagation()
        }),
        d.click(function(d) {
            f();
            var g = a(this),
            h = g.pos(),
            j = a.colorpicker({
                x: h.x,
                y: h.y + g.height(),
                z: 811214,
                selectedColor: a(this).html(),
                colors: e.colorTable,
                noColor: e.lang("noColor"),
                shadowMode: e.shadowMode,
                click: function(a) {
                    b(g, a),
                    f()
                }
            });
            i.push(j),
            a(document).bind("click,mousedown", f),
            c.bind("click,mousedown", f)
        })
    }
    function d(a, b, c) {
        for (var d = 0,
        e = 0,
        f = b.cells.length; f > e && b.cells[e] != c; e++) d += b.cells[e].rowSpan - 1;
        return c.cellIndex - d
    }
    var e = this,
    f = "table",
    g = e.lang(f + "."),
    h = "ke-zeroborder",
    i = [];
    e.plugin.table = {
        prop: function(d) {
            var i = ['<div style="padding:20px;">', '<div class="ke-dialog-row">', '<label for="keRows" style="width:90px;">' + g.cells + "</label>", g.rows + ' <input type="text" id="keRows" class="ke-input-text ke-input-number" name="rows" value="" maxlength="4" /> &nbsp; ', g.cols + ' <input type="text" class="ke-input-text ke-input-number" name="cols" value="" maxlength="4" />', "</div>", '<div class="ke-dialog-row">', '<label for="keWidth" style="width:90px;">' + g.size + "</label>", g.width + ' <input type="text" id="keWidth" class="ke-input-text ke-input-number" name="width" value="" maxlength="4" /> &nbsp; ', '<select name="widthType">', '<option value="%">' + g.percent + "</option>", '<option value="px">' + g.px + "</option>", "</select> &nbsp; ", g.height + ' <input type="text" class="ke-input-text ke-input-number" name="height" value="" maxlength="4" /> &nbsp; ', '<select name="heightType">', '<option value="%">' + g.percent + "</option>", '<option value="px">' + g.px + "</option>", "</select>", "</div>", '<div class="ke-dialog-row">', '<label for="kePadding" style="width:90px;">' + g.space + "</label>", g.padding + ' <input type="text" id="kePadding" class="ke-input-text ke-input-number" name="padding" value="" maxlength="4" /> &nbsp; ', g.spacing + ' <input type="text" class="ke-input-text ke-input-number" name="spacing" value="" maxlength="4" />', "</div>", '<div class="ke-dialog-row">', '<label for="keAlign" style="width:90px;">' + g.align + "</label>", '<select id="keAlign" name="align">', '<option value="">' + g.alignDefault + "</option>", '<option value="left">' + g.alignLeft + "</option>", '<option value="center">' + g.alignCenter + "</option>", '<option value="right">' + g.alignRight + "</option>", "</select>", "</div>", '<div class="ke-dialog-row">', '<label for="keBorder" style="width:90px;">' + g.border + "</label>", g.borderWidth + ' <input type="text" id="keBorder" class="ke-input-text ke-input-number" name="border" value="" maxlength="4" /> &nbsp; ', g.borderColor + ' <span class="ke-inline-block ke-input-color"></span>', "</div>", '<div class="ke-dialog-row">', '<label for="keBgColor" style="width:90px;">' + g.backgroundColor + "</label>", '<span class="ke-inline-block ke-input-color"></span>', "</div>", "</div>"].join(""),
            j = e.cmd.range.createBookmark(),
            k = e.createDialog({
                name: f,
                width: 500,
                title: e.lang(f),
                body: i,
                beforeRemove: function() {
                    w.unbind()
                },
                yesBtn: {
                    name: e.lang("yes"),
                    click: function(b) {
                        var c = m.val(),
                        d = n.val(),
                        f = o.val(),
                        g = p.val(),
                        i = q.val(),
                        k = r.val(),
                        l = s.val(),
                        y = t.val(),
                        z = u.val(),
                        A = v.val(),
                        B = a(w[0]).html() || "",
                        C = a(w[1]).html() || "";
                        if (0 == c || !/^\d+$/.test(c)) return alert(e.lang("invalidRows")),
                        void m[0].focus();
                        if (0 == d || !/^\d+$/.test(d)) return alert(e.lang("invalidRows")),
                        void n[0].focus();
                        if (!/^\d*$/.test(f)) return alert(e.lang("invalidWidth")),
                        void o[0].focus();
                        if (!/^\d*$/.test(g)) return alert(e.lang("invalidHeight")),
                        void p[0].focus();
                        if (!/^\d*$/.test(l)) return alert(e.lang("invalidPadding")),
                        void s[0].focus();
                        if (!/^\d*$/.test(y)) return alert(e.lang("invalidSpacing")),
                        void t[0].focus();
                        if (!/^\d*$/.test(A)) return alert(e.lang("invalidBorder")),
                        void v[0].focus();
                        if (x) return "" !== f ? x.width(f + i) : x.css("width", ""),
                        void 0 !== x[0].width && x.removeAttr("width"),
                        "" !== g ? x.height(g + k) : x.css("height", ""),
                        void 0 !== x[0].height && x.removeAttr("height"),
                        x.css("background-color", C),
                        void 0 !== x[0].bgColor && x.removeAttr("bgColor"),
                        "" !== l ? x[0].cellPadding = l: x.removeAttr("cellPadding"),
                        "" !== y ? x[0].cellSpacing = y: x.removeAttr("cellSpacing"),
                        "" !== z ? x[0].align = z: x.removeAttr("align"),
                        "" !== A ? x.attr("border", A) : x.removeAttr("border"),
                        "" === A || "0" === A ? x.addClass(h) : x.removeClass(h),
                        "" !== B ? x.attr("borderColor", B) : x.removeAttr("borderColor"),
                        e.hideDialog().focus(),
                        e.cmd.range.moveToBookmark(j),
                        e.cmd.select(),
                        void e.addBookmark();
                        var D = "";
                        "" !== f && (D += "width:" + f + i + ";"),
                        "" !== g && (D += "height:" + g + k + ";"),
                        "" !== C && (D += "background-color:" + C + ";");
                        var E = "<table";
                        "" !== D && (E += ' style="' + D + '"'),
                        "" !== l && (E += ' cellpadding="' + l + '"'),
                        "" !== y && (E += ' cellspacing="' + y + '"'),
                        "" !== z && (E += ' align="' + z + '"'),
                        "" !== A && (E += ' border="' + A + '"'),
                        ("" === A || "0" === A) && (E += ' class="' + h + '"'),
                        "" !== B && (E += ' bordercolor="' + B + '"'),
                        E += ">";
                        for (var F = 0; c > F; F++) {
                            E += "<tr>";
                            for (var G = 0; d > G; G++) E += "<td>" + (a.IE ? "&nbsp;": "<br />") + "</td>";
                            E += "</tr>"
                        }
                        E += "</table>",
                        a.IE || (E += "<br />"),
                        e.insertHtml(E),
                        e.select().hideDialog().focus(),
                        e.addBookmark()
                    }
                }
            }),
            l = k.div,
            m = a('[name="rows"]', l).val(3),
            n = a('[name="cols"]', l).val(2),
            o = a('[name="width"]', l).val(100),
            p = a('[name="height"]', l),
            q = a('[name="widthType"]', l),
            r = a('[name="heightType"]', l),
            s = a('[name="padding"]', l).val(2),
            t = a('[name="spacing"]', l).val(0),
            u = a('[name="align"]', l),
            v = a('[name="border"]', l).val(1),
            w = a(".ke-input-color", l);
            c(l, w.eq(0)),
            c(l, w.eq(1)),
            b(w.eq(0), "#000000"),
            b(w.eq(1), ""),
            m[0].focus(),
            m[0].select();
            var x;
            if (!d && (x = e.plugin.getSelectedTable())) {
                m.val(x[0].rows.length),
                n.val(x[0].rows.length > 0 ? x[0].rows[0].cells.length: 0),
                m.attr("disabled", !0),
                n.attr("disabled", !0);
                var y, z = x[0].style.width || x[0].width,
                A = x[0].style.height || x[0].height;
                void 0 !== z && (y = /^(\d+)((?:px|%)*)$/.exec(z)) ? (o.val(y[1]), q.val(y[2])) : o.val(""),
                void 0 !== A && (y = /^(\d+)((?:px|%)*)$/.exec(A)) && (p.val(y[1]), r.val(y[2])),
                s.val(x[0].cellPadding || ""),
                t.val(x[0].cellSpacing || ""),
                u.val(x[0].align || ""),
                v.val(void 0 === x[0].border ? "": x[0].border),
                b(w.eq(0), a.toHex(x.attr("borderColor") || "")),
                b(w.eq(1), a.toHex(x[0].style.backgroundColor || x[0].bgColor || "")),
                o[0].focus(),
                o[0].select()
            }
        },
        cellprop: function() {
            var d = ['<div style="padding:20px;">', '<div class="ke-dialog-row">', '<label for="keWidth" style="width:90px;">' + g.size + "</label>", g.width + ' <input type="text" id="keWidth" class="ke-input-text ke-input-number" name="width" value="" maxlength="4" /> &nbsp; ', '<select name="widthType">', '<option value="%">' + g.percent + "</option>", '<option value="px">' + g.px + "</option>", "</select> &nbsp; ", g.height + ' <input type="text" class="ke-input-text ke-input-number" name="height" value="" maxlength="4" /> &nbsp; ', '<select name="heightType">', '<option value="%">' + g.percent + "</option>", '<option value="px">' + g.px + "</option>", "</select>", "</div>", '<div class="ke-dialog-row">', '<label for="keAlign" style="width:90px;">' + g.align + "</label>", g.textAlign + ' <select id="keAlign" name="textAlign">', '<option value="">' + g.alignDefault + "</option>", '<option value="left">' + g.alignLeft + "</option>", '<option value="center">' + g.alignCenter + "</option>", '<option value="right">' + g.alignRight + "</option>", "</select> ", g.verticalAlign + ' <select name="verticalAlign">', '<option value="">' + g.alignDefault + "</option>", '<option value="top">' + g.alignTop + "</option>", '<option value="middle">' + g.alignMiddle + "</option>", '<option value="bottom">' + g.alignBottom + "</option>", '<option value="baseline">' + g.alignBaseline + "</option>", "</select>", "</div>", '<div class="ke-dialog-row">', '<label for="keBorder" style="width:90px;">' + g.border + "</label>", g.borderWidth + ' <input type="text" id="keBorder" class="ke-input-text ke-input-number" name="border" value="" maxlength="4" /> &nbsp; ', g.borderColor + ' <span class="ke-inline-block ke-input-color"></span>', "</div>", '<div class="ke-dialog-row">', '<label for="keBgColor" style="width:90px;">' + g.backgroundColor + "</label>", '<span class="ke-inline-block ke-input-color"></span>', "</div>", "</div>"].join(""),
            h = e.cmd.range.createBookmark(),
            i = e.createDialog({
                name: f,
                width: 500,
                title: e.lang("tablecell"),
                body: d,
                beforeRemove: function() {
                    t.unbind()
                },
                yesBtn: {
                    name: e.lang("yes"),
                    click: function(b) {
                        var c = k.val(),
                        d = l.val(),
                        f = m.val(),
                        g = n.val(),
                        i = (o.val(), p.val(), q.val()),
                        j = r.val(),
                        u = s.val(),
                        w = a(t[0]).html() || "",
                        x = a(t[1]).html() || "";
                        return /^\d*$/.test(c) ? /^\d*$/.test(d) ? /^\d*$/.test(u) ? (v.css({
                            width: "" !== c ? c + f: "",
                            height: "" !== d ? d + g: "",
                            "background-color": x,
                            "text-align": i,
                            "vertical-align": j,
                            "border-width": u,
                            "border-style": "" !== u ? "solid": "",
                            "border-color": w
                        }), e.hideDialog().focus(), e.cmd.range.moveToBookmark(h), e.cmd.select(), void e.addBookmark()) : (alert(e.lang("invalidBorder")), void s[0].focus()) : (alert(e.lang("invalidHeight")), void l[0].focus()) : (alert(e.lang("invalidWidth")), void k[0].focus())
                    }
                }
            }),
            j = i.div,
            k = a('[name="width"]', j).val(100),
            l = a('[name="height"]', j),
            m = a('[name="widthType"]', j),
            n = a('[name="heightType"]', j),
            o = a('[name="padding"]', j).val(2),
            p = a('[name="spacing"]', j).val(0),
            q = a('[name="textAlign"]', j),
            r = a('[name="verticalAlign"]', j),
            s = a('[name="border"]', j).val(1),
            t = a(".ke-input-color", j);
            c(j, t.eq(0)),
            c(j, t.eq(1)),
            b(t.eq(0), "#000000"),
            b(t.eq(1), ""),
            k[0].focus(),
            k[0].select();
            var u, v = e.plugin.getSelectedCell(),
            w = v[0].style.width || v[0].width || "",
            x = v[0].style.height || v[0].height || ""; (u = /^(\d+)((?:px|%)*)$/.exec(w)) ? (k.val(u[1]), m.val(u[2])) : k.val(""),
            (u = /^(\d+)((?:px|%)*)$/.exec(x)) && (l.val(u[1]), n.val(u[2])),
            q.val(v[0].style.textAlign || ""),
            r.val(v[0].style.verticalAlign || "");
            var y = v[0].style.borderWidth || "";
            y && (y = parseInt(y)),
            s.val(y),
            b(t.eq(0), a.toHex(v[0].style.borderColor || "")),
            b(t.eq(1), a.toHex(v[0].style.backgroundColor || "")),
            k[0].focus(),
            k[0].select()
        },
        insert: function() {
            this.prop(!0)
        },
        "delete": function() {
            var a = e.plugin.getSelectedTable();
            e.cmd.range.setStartBefore(a[0]).collapse(!0),
            e.cmd.select(),
            a.remove(),
            e.addBookmark()
        },
        colinsert: function(b) {
            var c = e.plugin.getSelectedTable()[0],
            f = e.plugin.getSelectedRow()[0],
            g = e.plugin.getSelectedCell()[0],
            h = g.cellIndex + b;
            h += c.rows[0].cells.length - f.cells.length;
            for (var i = 0,
            j = c.rows.length; j > i; i++) {
                var k = c.rows[i],
                l = k.insertCell(h);
                l.innerHTML = a.IE ? "": "<br />",
                h = d(c, k, l)
            }
            e.cmd.range.selectNodeContents(g).collapse(!0),
            e.cmd.select(),
            e.addBookmark()
        },
        colinsertleft: function() {
            this.colinsert(0)
        },
        colinsertright: function() {
            this.colinsert(1)
        },
        rowinsert: function(b) {
            var c = e.plugin.getSelectedTable()[0],
            d = e.plugin.getSelectedRow()[0],
            f = e.plugin.getSelectedCell()[0],
            g = d.rowIndex;
            1 === b && (g = d.rowIndex + (f.rowSpan - 1) + b);
            for (var h = c.insertRow(g), i = 0, j = d.cells.length; j > i; i++) {
                d.cells[i].rowSpan > 1 && (j -= d.cells[i].rowSpan - 1);
                var k = h.insertCell(i);
                1 === b && d.cells[i].colSpan > 1 && (k.colSpan = d.cells[i].colSpan),
                k.innerHTML = a.IE ? "": "<br />"
            }
            for (var l = g; l >= 0; l--) {
                var m = c.rows[l].cells;
                if (m.length > i) {
                    for (var n = f.cellIndex; n >= 0; n--) m[n].rowSpan > 1 && (m[n].rowSpan += 1);
                    break
                }
            }
            e.cmd.range.selectNodeContents(f).collapse(!0),
            e.cmd.select(),
            e.addBookmark()
        },
        rowinsertabove: function() {
            this.rowinsert(0)
        },
        rowinsertbelow: function() {
            this.rowinsert(1)
        },
        rowmerge: function() {
            var a = e.plugin.getSelectedTable()[0],
            b = e.plugin.getSelectedRow()[0],
            c = e.plugin.getSelectedCell()[0],
            d = b.rowIndex,
            f = d + c.rowSpan,
            g = a.rows[f];
            if (! (a.rows.length <= f)) {
                var h = c.cellIndex;
                if (! (g.cells.length <= h)) {
                    var i = g.cells[h];
                    c.colSpan === i.colSpan && (c.rowSpan += i.rowSpan, g.deleteCell(h), e.cmd.range.selectNodeContents(c).collapse(!0), e.cmd.select(), e.addBookmark())
                }
            }
        },
        colmerge: function() {
            var a = (e.plugin.getSelectedTable()[0], e.plugin.getSelectedRow()[0]),
            b = e.plugin.getSelectedCell()[0],
            c = (a.rowIndex, b.cellIndex),
            d = c + 1;
            if (! (a.cells.length <= d)) {
                var f = a.cells[d];
                b.rowSpan === f.rowSpan && (b.colSpan += f.colSpan, a.deleteCell(d), e.cmd.range.selectNodeContents(b).collapse(!0), e.cmd.select(), e.addBookmark())
            }
        },
        rowsplit: function() {
            var b = e.plugin.getSelectedTable()[0],
            c = e.plugin.getSelectedRow()[0],
            f = e.plugin.getSelectedCell()[0],
            g = c.rowIndex;
            if (1 !== f.rowSpan) {
                for (var h = d(b, c, f), i = 1, j = f.rowSpan; j > i; i++) {
                    var k = b.rows[g + i],
                    l = k.insertCell(h);
                    f.colSpan > 1 && (l.colSpan = f.colSpan),
                    l.innerHTML = a.IE ? "": "<br />",
                    h = d(b, k, l)
                }
                a(f).removeAttr("rowSpan"),
                e.cmd.range.selectNodeContents(f).collapse(!0),
                e.cmd.select(),
                e.addBookmark()
            }
        },
        colsplit: function() {
            var b = (e.plugin.getSelectedTable()[0], e.plugin.getSelectedRow()[0]),
            c = e.plugin.getSelectedCell()[0],
            d = c.cellIndex;
            if (1 !== c.colSpan) {
                for (var f = 1,
                g = c.colSpan; g > f; f++) {
                    var h = b.insertCell(d + f);
                    c.rowSpan > 1 && (h.rowSpan = c.rowSpan),
                    h.innerHTML = a.IE ? "": "<br />"
                }
                a(c).removeAttr("colSpan"),
                e.cmd.range.selectNodeContents(c).collapse(!0),
                e.cmd.select(),
                e.addBookmark()
            }
        },
        coldelete: function() {
            for (var b = e.plugin.getSelectedTable()[0], c = e.plugin.getSelectedRow()[0], d = e.plugin.getSelectedCell()[0], f = d.cellIndex, g = 0, h = b.rows.length; h > g; g++) {
                var i = b.rows[g],
                j = i.cells[f];
                j.colSpan > 1 ? (j.colSpan -= 1, 1 === j.colSpan && a(j).removeAttr("colSpan")) : i.deleteCell(f),
                j.rowSpan > 1 && (g += j.rowSpan - 1)
            }
            0 === c.cells.length ? (e.cmd.range.setStartBefore(b).collapse(!0), e.cmd.select(), a(b).remove()) : e.cmd.selection(!0),
            e.addBookmark()
        },
        rowdelete: function() {
            for (var b = e.plugin.getSelectedTable()[0], c = e.plugin.getSelectedRow()[0], d = e.plugin.getSelectedCell()[0], f = c.rowIndex, g = d.rowSpan - 1; g >= 0; g--) b.deleteRow(f + g);
            0 === b.rows.length ? (e.cmd.range.setStartBefore(b).collapse(!0), e.cmd.select(), a(b).remove()) : e.cmd.selection(!0),
            e.addBookmark()
        }
    },
    e.clickToolbar(f, e.plugin.table.prop)
}),
QingEditor.plugin("template",
function(a) {
    function b(b) {
        return e + b + "?ver=" + encodeURIComponent(a.DEBUG ? a.TIME: a.VERSION)
    }
    var c = this,
    d = "template",
    e = (c.lang(d + "."), c.pluginsPath + d + "/html/");
    c.clickToolbar(d,
    function() {
        var e = c.lang(d + "."),
        f = ['<div style="padding:10px 20px;">', '<div class="ke-header">', '<div class="ke-left">', e.selectTemplate + " <select>"];
        a.each(e.fileList,
        function(a, b) {
            f.push('<option value="' + a + '">' + b + "</option>")
        }),
        html = [f.join(""), "</select></div>", '<div class="ke-right">', '<input type="checkbox" id="keReplaceFlag" name="replaceFlag" value="1" /> <label for="keReplaceFlag">' + e.replaceContent + "</label>", "</div>", '<div class="ke-clearfix"></div>', "</div>", '<iframe class="ke-textarea" frameborder="0" style="width:458px;height:260px;background-color:#FFF;"></iframe>', "</div>"].join("");
        var g = c.createDialog({
            name: d,
            width: 500,
            title: c.lang(d),
            body: html,
            yesBtn: {
                name: c.lang("yes"),
                click: function(b) {
                    var d = a.iframeDoc(j);
                    c[i[0].checked ? "html": "insertHtml"](d.body.innerHTML).hideDialog().focus()
                }
            }
        }),
        h = a("select", g.div),
        i = a('[name="replaceFlag"]', g.div),
        j = a("iframe", g.div);
        i[0].checked = !0,
        j.attr("src", b(h.val())),
        h.change(function() {
            j.attr("src", b(this.value))
        })
    })
}),
QingEditor.plugin("wordpaste",
function(a) {
    var b = this,
    c = "wordpaste";
    b.clickToolbar(c,
    function() {
        var d = b.lang(c + "."),
        e = '<div style="padding:10px 20px;"><div style="margin-bottom:10px;">' + d.comment + '</div><iframe class="ke-textarea" frameborder="0" style="width:408px;height:260px;"></iframe></div>',
        f = b.createDialog({
            name: c,
            width: 450,
            title: b.lang(c),
            body: e,
            yesBtn: {
                name: b.lang("yes"),
                click: function(c) {
                    var d = i.body.innerHTML;
                    d = a.clearMsWord(d, b.filterMode ? b.htmlTags: a.options.htmlTags),
                    b.insertHtml(d).hideDialog().focus()
                }
            }
        }),
        g = f.div,
        h = a("iframe", g),
        i = a.iframeDoc(h);
        a.IE || (i.designMode = "on"),
        i.open(),
        i.write("<!doctype html><html><head><title>WordPaste</title></head>"),
        i.write('<body style="background-color:#FFF;font-size:12px;margin:2px;">'),
        a.IE || i.write("<br />"),
        i.write("</body></html>"),
        i.close(),
        a.IE && (i.body.contentEditable = "true"),
        h[0].contentWindow.focus()
    })
}),
QingEditor.plugin("fixtoolbar",
function(a) {
    function b() {
        var b = a(".ke-toolbar"),
        c = b.pos().y;
        a(window).bind("scroll",
        function() {
            "fixed" == b.css("position") ? document.body.scrollTop - c < 0 && (b.css("position", "static"), b.css("top", "auto")) : b.pos().y - document.body.scrollTop < 0 && (b.css("position", "fixed"), b.css("top", 0))
        })
    }
    var c = this;
    c.fixToolBar && (c.isCreated ? b() : c.afterCreate(b))
});






