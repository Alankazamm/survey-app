(function () {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const i of document.querySelectorAll('link[rel="modulepreload"]')) s(i);
	new MutationObserver((i) => {
		for (const r of i)
			if (r.type === "childList")
				for (const o of r.addedNodes)
					o.tagName === "LINK" && o.rel === "modulepreload" && s(o);
	}).observe(document, { childList: !0, subtree: !0 });
	function e(i) {
		const r = {};
		return (
			i.integrity && (r.integrity = i.integrity),
			i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy),
			i.crossOrigin === "use-credentials"
				? (r.credentials = "include")
				: i.crossOrigin === "anonymous"
				? (r.credentials = "omit")
				: (r.credentials = "same-origin"),
			r
		);
	}
	function s(i) {
		if (i.ep) return;
		i.ep = !0;
		const r = e(i);
		fetch(i.href, r);
	}
})();
const tp = [
		document.querySelector(".welcome-section"),
		document.querySelector(".start-section"),
		document.querySelector(".status-section"),
		document.querySelector(".invest-section"),
		document.querySelector(".details-section"),
		document.querySelector(".contact-section"),
		document.querySelector(".sucess-section"),
		document.querySelector(".dashboard-section"),
	],
	[qc, uo, fo, go, po, mo, Kc, Yc] = tp,
	Le = (n) => {
		switch ((console.log(n), n)) {
			case "welcome":
				(Yc.style.display = "none"),
					(qc.style.display = "flex"),
					(uo.style.display = "none");
				break;
			case "start":
				(qc.style.display = "none"),
					(uo.style.display = "flex"),
					(fo.style.display = "none");
				break;
			case "status":
				(uo.style.display = "none"),
					(fo.style.display = "flex"),
					(go.style.display = "none");
				break;
			case "invest":
				(fo.style.display = "none"),
					(go.style.display = "flex"),
					(po.style.display = "none");
				break;
			case "details":
				(go.style.display = "none"),
					(po.style.display = "flex"),
					(mo.style.display = "none");
				break;
			case "contact":
				(po.style.display = "none"), (mo.style.display = "flex");
				break;
			case "sucess":
				(mo.style.display = "none"), (Kc.style.display = "flex");
				break;
			case "dashboard":
				(Kc.style.display = "none"), (Yc.style.display = "flex");
				break;
		}
	};
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */ function ti(n) {
	return (n + 0.5) | 0;
}
const Oe = (n, t, e) => Math.max(Math.min(n, e), t);
function fs(n) {
	return Oe(ti(n * 2.55), 0, 255);
}
function Ne(n) {
	return Oe(ti(n * 255), 0, 255);
}
function ge(n) {
	return Oe(ti(n / 2.55) / 100, 0, 1);
}
function Gc(n) {
	return Oe(ti(n * 100), 0, 100);
}
const qt = {
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
		f: 15,
	},
	Yo = [..."0123456789ABCDEF"],
	ep = (n) => Yo[n & 15],
	np = (n) => Yo[(n & 240) >> 4] + Yo[n & 15],
	vi = (n) => (n & 240) >> 4 === (n & 15),
	sp = (n) => vi(n.r) && vi(n.g) && vi(n.b) && vi(n.a);
function ip(n) {
	var t = n.length,
		e;
	return (
		n[0] === "#" &&
			(t === 4 || t === 5
				? (e = {
						r: 255 & (qt[n[1]] * 17),
						g: 255 & (qt[n[2]] * 17),
						b: 255 & (qt[n[3]] * 17),
						a: t === 5 ? qt[n[4]] * 17 : 255,
				  })
				: (t === 7 || t === 9) &&
				  (e = {
						r: (qt[n[1]] << 4) | qt[n[2]],
						g: (qt[n[3]] << 4) | qt[n[4]],
						b: (qt[n[5]] << 4) | qt[n[6]],
						a: t === 9 ? (qt[n[7]] << 4) | qt[n[8]] : 255,
				  })),
		e
	);
}
const rp = (n, t) => (n < 255 ? t(n) : "");
function op(n) {
	var t = sp(n) ? ep : np;
	return n ? "#" + t(n.r) + t(n.g) + t(n.b) + rp(n.a, t) : void 0;
}
const ap =
	/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function _u(n, t, e) {
	const s = t * Math.min(e, 1 - e),
		i = (r, o = (r + n / 30) % 12) =>
			e - s * Math.max(Math.min(o - 3, 9 - o, 1), -1);
	return [i(0), i(8), i(4)];
}
function cp(n, t, e) {
	const s = (i, r = (i + n / 60) % 6) =>
		e - e * t * Math.max(Math.min(r, 4 - r, 1), 0);
	return [s(5), s(3), s(1)];
}
function lp(n, t, e) {
	const s = _u(n, 1, 0.5);
	let i;
	for (t + e > 1 && ((i = 1 / (t + e)), (t *= i), (e *= i)), i = 0; i < 3; i++)
		(s[i] *= 1 - t - e), (s[i] += t);
	return s;
}
function hp(n, t, e, s, i) {
	return n === i
		? (t - e) / s + (t < e ? 6 : 0)
		: t === i
		? (e - n) / s + 2
		: (n - t) / s + 4;
}
function Ra(n) {
	const e = n.r / 255,
		s = n.g / 255,
		i = n.b / 255,
		r = Math.max(e, s, i),
		o = Math.min(e, s, i),
		a = (r + o) / 2;
	let c, l, h;
	return (
		r !== o &&
			((h = r - o),
			(l = a > 0.5 ? h / (2 - r - o) : h / (r + o)),
			(c = hp(e, s, i, h, r)),
			(c = c * 60 + 0.5)),
		[c | 0, l || 0, a]
	);
}
function La(n, t, e, s) {
	return (Array.isArray(t) ? n(t[0], t[1], t[2]) : n(t, e, s)).map(Ne);
}
function Na(n, t, e) {
	return La(_u, n, t, e);
}
function up(n, t, e) {
	return La(lp, n, t, e);
}
function dp(n, t, e) {
	return La(cp, n, t, e);
}
function wu(n) {
	return ((n % 360) + 360) % 360;
}
function fp(n) {
	const t = ap.exec(n);
	let e = 255,
		s;
	if (!t) return;
	t[5] !== s && (e = t[6] ? fs(+t[5]) : Ne(+t[5]));
	const i = wu(+t[2]),
		r = +t[3] / 100,
		o = +t[4] / 100;
	return (
		t[1] === "hwb"
			? (s = up(i, r, o))
			: t[1] === "hsv"
			? (s = dp(i, r, o))
			: (s = Na(i, r, o)),
		{ r: s[0], g: s[1], b: s[2], a: e }
	);
}
function gp(n, t) {
	var e = Ra(n);
	(e[0] = wu(e[0] + t)), (e = Na(e)), (n.r = e[0]), (n.g = e[1]), (n.b = e[2]);
}
function pp(n) {
	if (!n) return;
	const t = Ra(n),
		e = t[0],
		s = Gc(t[1]),
		i = Gc(t[2]);
	return n.a < 255
		? `hsla(${e}, ${s}%, ${i}%, ${ge(n.a)})`
		: `hsl(${e}, ${s}%, ${i}%)`;
}
const Xc = {
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
		J: "wh",
	},
	Qc = {
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
		LwgYF: "9acd32",
	};
function mp() {
	const n = {},
		t = Object.keys(Qc),
		e = Object.keys(Xc);
	let s, i, r, o, a;
	for (s = 0; s < t.length; s++) {
		for (o = a = t[s], i = 0; i < e.length; i++)
			(r = e[i]), (a = a.replace(r, Xc[r]));
		(r = parseInt(Qc[o], 16)),
			(n[a] = [(r >> 16) & 255, (r >> 8) & 255, r & 255]);
	}
	return n;
}
let xi;
function yp(n) {
	xi || ((xi = mp()), (xi.transparent = [0, 0, 0, 0]));
	const t = xi[n.toLowerCase()];
	return t && { r: t[0], g: t[1], b: t[2], a: t.length === 4 ? t[3] : 255 };
}
const bp =
	/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function vp(n) {
	const t = bp.exec(n);
	let e = 255,
		s,
		i,
		r;
	if (t) {
		if (t[7] !== s) {
			const o = +t[7];
			e = t[8] ? fs(o) : Oe(o * 255, 0, 255);
		}
		return (
			(s = +t[1]),
			(i = +t[3]),
			(r = +t[5]),
			(s = 255 & (t[2] ? fs(s) : Oe(s, 0, 255))),
			(i = 255 & (t[4] ? fs(i) : Oe(i, 0, 255))),
			(r = 255 & (t[6] ? fs(r) : Oe(r, 0, 255))),
			{ r: s, g: i, b: r, a: e }
		);
	}
}
function xp(n) {
	return (
		n &&
		(n.a < 255
			? `rgba(${n.r}, ${n.g}, ${n.b}, ${ge(n.a)})`
			: `rgb(${n.r}, ${n.g}, ${n.b})`)
	);
}
const yo = (n) =>
		n <= 0.0031308 ? n * 12.92 : Math.pow(n, 1 / 2.4) * 1.055 - 0.055,
	Tn = (n) => (n <= 0.04045 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4));
function _p(n, t, e) {
	const s = Tn(ge(n.r)),
		i = Tn(ge(n.g)),
		r = Tn(ge(n.b));
	return {
		r: Ne(yo(s + e * (Tn(ge(t.r)) - s))),
		g: Ne(yo(i + e * (Tn(ge(t.g)) - i))),
		b: Ne(yo(r + e * (Tn(ge(t.b)) - r))),
		a: n.a + e * (t.a - n.a),
	};
}
function _i(n, t, e) {
	if (n) {
		let s = Ra(n);
		(s[t] = Math.max(0, Math.min(s[t] + s[t] * e, t === 0 ? 360 : 1))),
			(s = Na(s)),
			(n.r = s[0]),
			(n.g = s[1]),
			(n.b = s[2]);
	}
}
function Su(n, t) {
	return n && Object.assign(t || {}, n);
}
function Jc(n) {
	var t = { r: 0, g: 0, b: 0, a: 255 };
	return (
		Array.isArray(n)
			? n.length >= 3 &&
			  ((t = { r: n[0], g: n[1], b: n[2], a: 255 }),
			  n.length > 3 && (t.a = Ne(n[3])))
			: ((t = Su(n, { r: 0, g: 0, b: 0, a: 1 })), (t.a = Ne(t.a))),
		t
	);
}
function wp(n) {
	return n.charAt(0) === "r" ? vp(n) : fp(n);
}
class Ps {
	constructor(t) {
		if (t instanceof Ps) return t;
		const e = typeof t;
		let s;
		e === "object"
			? (s = Jc(t))
			: e === "string" && (s = ip(t) || yp(t) || wp(t)),
			(this._rgb = s),
			(this._valid = !!s);
	}
	get valid() {
		return this._valid;
	}
	get rgb() {
		var t = Su(this._rgb);
		return t && (t.a = ge(t.a)), t;
	}
	set rgb(t) {
		this._rgb = Jc(t);
	}
	rgbString() {
		return this._valid ? xp(this._rgb) : void 0;
	}
	hexString() {
		return this._valid ? op(this._rgb) : void 0;
	}
	hslString() {
		return this._valid ? pp(this._rgb) : void 0;
	}
	mix(t, e) {
		if (t) {
			const s = this.rgb,
				i = t.rgb;
			let r;
			const o = e === r ? 0.5 : e,
				a = 2 * o - 1,
				c = s.a - i.a,
				l = ((a * c === -1 ? a : (a + c) / (1 + a * c)) + 1) / 2;
			(r = 1 - l),
				(s.r = 255 & (l * s.r + r * i.r + 0.5)),
				(s.g = 255 & (l * s.g + r * i.g + 0.5)),
				(s.b = 255 & (l * s.b + r * i.b + 0.5)),
				(s.a = o * s.a + (1 - o) * i.a),
				(this.rgb = s);
		}
		return this;
	}
	interpolate(t, e) {
		return t && (this._rgb = _p(this._rgb, t._rgb, e)), this;
	}
	clone() {
		return new Ps(this.rgb);
	}
	alpha(t) {
		return (this._rgb.a = Ne(t)), this;
	}
	clearer(t) {
		const e = this._rgb;
		return (e.a *= 1 - t), this;
	}
	greyscale() {
		const t = this._rgb,
			e = ti(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
		return (t.r = t.g = t.b = e), this;
	}
	opaquer(t) {
		const e = this._rgb;
		return (e.a *= 1 + t), this;
	}
	negate() {
		const t = this._rgb;
		return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
	}
	lighten(t) {
		return _i(this._rgb, 2, t), this;
	}
	darken(t) {
		return _i(this._rgb, 2, -t), this;
	}
	saturate(t) {
		return _i(this._rgb, 1, t), this;
	}
	desaturate(t) {
		return _i(this._rgb, 1, -t), this;
	}
	rotate(t) {
		return gp(this._rgb, t), this;
	}
}
/*!
 * Chart.js v4.2.1
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */ function he() {}
const Sp = (() => {
	let n = 0;
	return () => n++;
})();
function q(n) {
	return n === null || typeof n > "u";
}
function J(n) {
	if (Array.isArray && Array.isArray(n)) return !0;
	const t = Object.prototype.toString.call(n);
	return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function U(n) {
	return n !== null && Object.prototype.toString.call(n) === "[object Object]";
}
function ot(n) {
	return (typeof n == "number" || n instanceof Number) && isFinite(+n);
}
function jt(n, t) {
	return ot(n) ? n : t;
}
function B(n, t) {
	return typeof n > "u" ? t : n;
}
const Ep = (n, t) =>
		typeof n == "string" && n.endsWith("%") ? parseFloat(n) / 100 : +n / t,
	Eu = (n, t) =>
		typeof n == "string" && n.endsWith("%") ? (parseFloat(n) / 100) * t : +n;
function Q(n, t, e) {
	if (n && typeof n.call == "function") return n.apply(e, t);
}
function G(n, t, e, s) {
	let i, r, o;
	if (J(n))
		if (((r = n.length), s)) for (i = r - 1; i >= 0; i--) t.call(e, n[i], i);
		else for (i = 0; i < r; i++) t.call(e, n[i], i);
	else if (U(n))
		for (o = Object.keys(n), r = o.length, i = 0; i < r; i++)
			t.call(e, n[o[i]], o[i]);
}
function er(n, t) {
	let e, s, i, r;
	if (!n || !t || n.length !== t.length) return !1;
	for (e = 0, s = n.length; e < s; ++e)
		if (
			((i = n[e]),
			(r = t[e]),
			i.datasetIndex !== r.datasetIndex || i.index !== r.index)
		)
			return !1;
	return !0;
}
function nr(n) {
	if (J(n)) return n.map(nr);
	if (U(n)) {
		const t = Object.create(null),
			e = Object.keys(n),
			s = e.length;
		let i = 0;
		for (; i < s; ++i) t[e[i]] = nr(n[e[i]]);
		return t;
	}
	return n;
}
function ku(n) {
	return ["__proto__", "prototype", "constructor"].indexOf(n) === -1;
}
function kp(n, t, e, s) {
	if (!ku(n)) return;
	const i = t[n],
		r = e[n];
	U(i) && U(r) ? Rs(i, r, s) : (t[n] = nr(r));
}
function Rs(n, t, e) {
	const s = J(t) ? t : [t],
		i = s.length;
	if (!U(n)) return n;
	e = e || {};
	const r = e.merger || kp;
	let o;
	for (let a = 0; a < i; ++a) {
		if (((o = s[a]), !U(o))) continue;
		const c = Object.keys(o);
		for (let l = 0, h = c.length; l < h; ++l) r(c[l], n, o, e);
	}
	return n;
}
function _s(n, t) {
	return Rs(n, t, { merger: Cp });
}
function Cp(n, t, e) {
	if (!ku(n)) return;
	const s = t[n],
		i = e[n];
	U(s) && U(i)
		? _s(s, i)
		: Object.prototype.hasOwnProperty.call(t, n) || (t[n] = nr(i));
}
const Zc = { "": (n) => n, x: (n) => n.x, y: (n) => n.y };
function Tp(n) {
	const t = n.split("."),
		e = [];
	let s = "";
	for (const i of t)
		(s += i),
			s.endsWith("\\") ? (s = s.slice(0, -1) + ".") : (e.push(s), (s = ""));
	return e;
}
function Ip(n) {
	const t = Tp(n);
	return (e) => {
		for (const s of t) {
			if (s === "") break;
			e = e && e[s];
		}
		return e;
	};
}
function je(n, t) {
	return (Zc[t] || (Zc[t] = Ip(t)))(n);
}
function Fa(n) {
	return n.charAt(0).toUpperCase() + n.slice(1);
}
const Yt = (n) => typeof n < "u",
	He = (n) => typeof n == "function",
	tl = (n, t) => {
		if (n.size !== t.size) return !1;
		for (const e of n) if (!t.has(e)) return !1;
		return !0;
	};
function Mp(n) {
	return n.type === "mouseup" || n.type === "click" || n.type === "contextmenu";
}
const it = Math.PI,
	Z = 2 * it,
	Ap = Z + it,
	sr = Number.POSITIVE_INFINITY,
	Dp = it / 180,
	at = it / 2,
	Ze = it / 4,
	el = (it * 2) / 3,
	Pe = Math.log10,
	ie = Math.sign;
function ws(n, t, e) {
	return Math.abs(n - t) < e;
}
function nl(n) {
	const t = Math.round(n);
	n = ws(n, t, n / 1e3) ? t : n;
	const e = Math.pow(10, Math.floor(Pe(n))),
		s = n / e;
	return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * e;
}
function Op(n) {
	const t = [],
		e = Math.sqrt(n);
	let s;
	for (s = 1; s < e; s++) n % s === 0 && (t.push(s), t.push(n / s));
	return e === (e | 0) && t.push(e), t.sort((i, r) => i - r).pop(), t;
}
function Fn(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}
function Pp(n, t) {
	const e = Math.round(n);
	return e - t <= n && e + t >= n;
}
function Cu(n, t, e) {
	let s, i, r;
	for (s = 0, i = n.length; s < i; s++)
		(r = n[s][e]),
			isNaN(r) || ((t.min = Math.min(t.min, r)), (t.max = Math.max(t.max, r)));
}
function Qt(n) {
	return n * (it / 180);
}
function Ba(n) {
	return n * (180 / it);
}
function sl(n) {
	if (!ot(n)) return;
	let t = 1,
		e = 0;
	for (; Math.round(n * t) / t !== n; ) (t *= 10), e++;
	return e;
}
function Tu(n, t) {
	const e = t.x - n.x,
		s = t.y - n.y,
		i = Math.sqrt(e * e + s * s);
	let r = Math.atan2(s, e);
	return r < -0.5 * it && (r += Z), { angle: r, distance: i };
}
function Go(n, t) {
	return Math.sqrt(Math.pow(t.x - n.x, 2) + Math.pow(t.y - n.y, 2));
}
function Rp(n, t) {
	return ((n - t + Ap) % Z) - it;
}
function Ht(n) {
	return ((n % Z) + Z) % Z;
}
function Ls(n, t, e, s) {
	const i = Ht(n),
		r = Ht(t),
		o = Ht(e),
		a = Ht(r - i),
		c = Ht(o - i),
		l = Ht(i - r),
		h = Ht(i - o);
	return i === r || i === o || (s && r === o) || (a > c && l < h);
}
function wt(n, t, e) {
	return Math.max(t, Math.min(e, n));
}
function Lp(n) {
	return wt(n, -32768, 32767);
}
function me(n, t, e, s = 1e-6) {
	return n >= Math.min(t, e) - s && n <= Math.max(t, e) + s;
}
function Va(n, t, e) {
	e = e || ((o) => n[o] < t);
	let s = n.length - 1,
		i = 0,
		r;
	for (; s - i > 1; ) (r = (i + s) >> 1), e(r) ? (i = r) : (s = r);
	return { lo: i, hi: s };
}
const ye = (n, t, e, s) =>
		Va(
			n,
			e,
			s
				? (i) => {
						const r = n[i][t];
						return r < e || (r === e && n[i + 1][t] === e);
				  }
				: (i) => n[i][t] < e,
		),
	Np = (n, t, e) => Va(n, e, (s) => n[s][t] >= e);
function Fp(n, t, e) {
	let s = 0,
		i = n.length;
	for (; s < i && n[s] < t; ) s++;
	for (; i > s && n[i - 1] > e; ) i--;
	return s > 0 || i < n.length ? n.slice(s, i) : n;
}
const Iu = ["push", "pop", "shift", "splice", "unshift"];
function Bp(n, t) {
	if (n._chartjs) {
		n._chartjs.listeners.push(t);
		return;
	}
	Object.defineProperty(n, "_chartjs", {
		configurable: !0,
		enumerable: !1,
		value: { listeners: [t] },
	}),
		Iu.forEach((e) => {
			const s = "_onData" + Fa(e),
				i = n[e];
			Object.defineProperty(n, e, {
				configurable: !0,
				enumerable: !1,
				value(...r) {
					const o = i.apply(this, r);
					return (
						n._chartjs.listeners.forEach((a) => {
							typeof a[s] == "function" && a[s](...r);
						}),
						o
					);
				},
			});
		});
}
function il(n, t) {
	const e = n._chartjs;
	if (!e) return;
	const s = e.listeners,
		i = s.indexOf(t);
	i !== -1 && s.splice(i, 1),
		!(s.length > 0) &&
			(Iu.forEach((r) => {
				delete n[r];
			}),
			delete n._chartjs);
}
function Mu(n) {
	const t = new Set();
	let e, s;
	for (e = 0, s = n.length; e < s; ++e) t.add(n[e]);
	return t.size === s ? n : Array.from(t);
}
const Au = (function () {
	return typeof window > "u"
		? function (n) {
				return n();
		  }
		: window.requestAnimationFrame;
})();
function Du(n, t) {
	let e = [],
		s = !1;
	return function (...i) {
		(e = i),
			s ||
				((s = !0),
				Au.call(window, () => {
					(s = !1), n.apply(t, e);
				}));
	};
}
function Vp(n, t) {
	let e;
	return function (...s) {
		return (
			t ? (clearTimeout(e), (e = setTimeout(n, t, s))) : n.apply(this, s), t
		);
	};
}
const za = (n) => (n === "start" ? "left" : n === "end" ? "right" : "center"),
	It = (n, t, e) => (n === "start" ? t : n === "end" ? e : (t + e) / 2),
	zp = (n, t, e, s) =>
		n === (s ? "left" : "right") ? e : n === "center" ? (t + e) / 2 : t;
function Ou(n, t, e) {
	const s = t.length;
	let i = 0,
		r = s;
	if (n._sorted) {
		const { iScale: o, _parsed: a } = n,
			c = o.axis,
			{ min: l, max: h, minDefined: u, maxDefined: d } = o.getUserBounds();
		u &&
			(i = wt(
				Math.min(
					ye(a, o.axis, l).lo,
					e ? s : ye(t, c, o.getPixelForValue(l)).lo,
				),
				0,
				s - 1,
			)),
			d
				? (r =
						wt(
							Math.max(
								ye(a, o.axis, h, !0).hi + 1,
								e ? 0 : ye(t, c, o.getPixelForValue(h), !0).hi + 1,
							),
							i,
							s,
						) - i)
				: (r = s - i);
	}
	return { start: i, count: r };
}
function Pu(n) {
	const { xScale: t, yScale: e, _scaleRanges: s } = n,
		i = { xmin: t.min, xmax: t.max, ymin: e.min, ymax: e.max };
	if (!s) return (n._scaleRanges = i), !0;
	const r =
		s.xmin !== t.min ||
		s.xmax !== t.max ||
		s.ymin !== e.min ||
		s.ymax !== e.max;
	return Object.assign(s, i), r;
}
const wi = (n) => n === 0 || n === 1,
	rl = (n, t, e) => -(Math.pow(2, 10 * (n -= 1)) * Math.sin(((n - t) * Z) / e)),
	ol = (n, t, e) => Math.pow(2, -10 * n) * Math.sin(((n - t) * Z) / e) + 1,
	Ss = {
		linear: (n) => n,
		easeInQuad: (n) => n * n,
		easeOutQuad: (n) => -n * (n - 2),
		easeInOutQuad: (n) =>
			(n /= 0.5) < 1 ? 0.5 * n * n : -0.5 * (--n * (n - 2) - 1),
		easeInCubic: (n) => n * n * n,
		easeOutCubic: (n) => (n -= 1) * n * n + 1,
		easeInOutCubic: (n) =>
			(n /= 0.5) < 1 ? 0.5 * n * n * n : 0.5 * ((n -= 2) * n * n + 2),
		easeInQuart: (n) => n * n * n * n,
		easeOutQuart: (n) => -((n -= 1) * n * n * n - 1),
		easeInOutQuart: (n) =>
			(n /= 0.5) < 1 ? 0.5 * n * n * n * n : -0.5 * ((n -= 2) * n * n * n - 2),
		easeInQuint: (n) => n * n * n * n * n,
		easeOutQuint: (n) => (n -= 1) * n * n * n * n + 1,
		easeInOutQuint: (n) =>
			(n /= 0.5) < 1
				? 0.5 * n * n * n * n * n
				: 0.5 * ((n -= 2) * n * n * n * n + 2),
		easeInSine: (n) => -Math.cos(n * at) + 1,
		easeOutSine: (n) => Math.sin(n * at),
		easeInOutSine: (n) => -0.5 * (Math.cos(it * n) - 1),
		easeInExpo: (n) => (n === 0 ? 0 : Math.pow(2, 10 * (n - 1))),
		easeOutExpo: (n) => (n === 1 ? 1 : -Math.pow(2, -10 * n) + 1),
		easeInOutExpo: (n) =>
			wi(n)
				? n
				: n < 0.5
				? 0.5 * Math.pow(2, 10 * (n * 2 - 1))
				: 0.5 * (-Math.pow(2, -10 * (n * 2 - 1)) + 2),
		easeInCirc: (n) => (n >= 1 ? n : -(Math.sqrt(1 - n * n) - 1)),
		easeOutCirc: (n) => Math.sqrt(1 - (n -= 1) * n),
		easeInOutCirc: (n) =>
			(n /= 0.5) < 1
				? -0.5 * (Math.sqrt(1 - n * n) - 1)
				: 0.5 * (Math.sqrt(1 - (n -= 2) * n) + 1),
		easeInElastic: (n) => (wi(n) ? n : rl(n, 0.075, 0.3)),
		easeOutElastic: (n) => (wi(n) ? n : ol(n, 0.075, 0.3)),
		easeInOutElastic(n) {
			return wi(n)
				? n
				: n < 0.5
				? 0.5 * rl(n * 2, 0.1125, 0.45)
				: 0.5 + 0.5 * ol(n * 2 - 1, 0.1125, 0.45);
		},
		easeInBack(n) {
			return n * n * ((1.70158 + 1) * n - 1.70158);
		},
		easeOutBack(n) {
			return (n -= 1) * n * ((1.70158 + 1) * n + 1.70158) + 1;
		},
		easeInOutBack(n) {
			let t = 1.70158;
			return (n /= 0.5) < 1
				? 0.5 * (n * n * (((t *= 1.525) + 1) * n - t))
				: 0.5 * ((n -= 2) * n * (((t *= 1.525) + 1) * n + t) + 2);
		},
		easeInBounce: (n) => 1 - Ss.easeOutBounce(1 - n),
		easeOutBounce(n) {
			return n < 1 / 2.75
				? 7.5625 * n * n
				: n < 2 / 2.75
				? 7.5625 * (n -= 1.5 / 2.75) * n + 0.75
				: n < 2.5 / 2.75
				? 7.5625 * (n -= 2.25 / 2.75) * n + 0.9375
				: 7.5625 * (n -= 2.625 / 2.75) * n + 0.984375;
		},
		easeInOutBounce: (n) =>
			n < 0.5
				? Ss.easeInBounce(n * 2) * 0.5
				: Ss.easeOutBounce(n * 2 - 1) * 0.5 + 0.5,
	};
function Ru(n) {
	if (n && typeof n == "object") {
		const t = n.toString();
		return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
	}
	return !1;
}
function al(n) {
	return Ru(n) ? n : new Ps(n);
}
function bo(n) {
	return Ru(n) ? n : new Ps(n).saturate(0.5).darken(0.1).hexString();
}
const $p = ["x", "y", "borderWidth", "radius", "tension"],
	Up = ["color", "borderColor", "backgroundColor"];
function jp(n) {
	n.set("animation", {
		delay: void 0,
		duration: 1e3,
		easing: "easeOutQuart",
		fn: void 0,
		from: void 0,
		loop: void 0,
		to: void 0,
		type: void 0,
	}),
		n.describe("animation", {
			_fallback: !1,
			_indexable: !1,
			_scriptable: (t) =>
				t !== "onProgress" && t !== "onComplete" && t !== "fn",
		}),
		n.set("animations", {
			colors: { type: "color", properties: Up },
			numbers: { type: "number", properties: $p },
		}),
		n.describe("animations", { _fallback: "animation" }),
		n.set("transitions", {
			active: { animation: { duration: 400 } },
			resize: { animation: { duration: 0 } },
			show: {
				animations: {
					colors: { from: "transparent" },
					visible: { type: "boolean", duration: 0 },
				},
			},
			hide: {
				animations: {
					colors: { to: "transparent" },
					visible: { type: "boolean", easing: "linear", fn: (t) => t | 0 },
				},
			},
		});
}
function Hp(n) {
	n.set("layout", {
		autoPadding: !0,
		padding: { top: 0, right: 0, bottom: 0, left: 0 },
	});
}
const cl = new Map();
function Wp(n, t) {
	t = t || {};
	const e = n + JSON.stringify(t);
	let s = cl.get(e);
	return s || ((s = new Intl.NumberFormat(n, t)), cl.set(e, s)), s;
}
function ei(n, t, e) {
	return Wp(t, e).format(n);
}
const Lu = {
	values(n) {
		return J(n) ? n : "" + n;
	},
	numeric(n, t, e) {
		if (n === 0) return "0";
		const s = this.chart.options.locale;
		let i,
			r = n;
		if (e.length > 1) {
			const l = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
			(l < 1e-4 || l > 1e15) && (i = "scientific"), (r = qp(n, e));
		}
		const o = Pe(Math.abs(r)),
			a = Math.max(Math.min(-1 * Math.floor(o), 20), 0),
			c = { notation: i, minimumFractionDigits: a, maximumFractionDigits: a };
		return Object.assign(c, this.options.ticks.format), ei(n, s, c);
	},
	logarithmic(n, t, e) {
		if (n === 0) return "0";
		const s = e[t].significand || n / Math.pow(10, Math.floor(Pe(n)));
		return [1, 2, 3, 5, 10, 15].includes(s) || t > 0.8 * e.length
			? Lu.numeric.call(this, n, t, e)
			: "";
	},
};
function qp(n, t) {
	let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
	return Math.abs(e) >= 1 && n !== Math.floor(n) && (e = n - Math.floor(n)), e;
}
var Or = { formatters: Lu };
function Kp(n) {
	n.set("scale", {
		display: !0,
		offset: !1,
		reverse: !1,
		beginAtZero: !1,
		bounds: "ticks",
		grace: 0,
		grid: {
			display: !0,
			lineWidth: 1,
			drawOnChartArea: !0,
			drawTicks: !0,
			tickLength: 8,
			tickWidth: (t, e) => e.lineWidth,
			tickColor: (t, e) => e.color,
			offset: !1,
		},
		border: { display: !0, dash: [], dashOffset: 0, width: 1 },
		title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
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
			callback: Or.formatters.values,
			minor: {},
			major: {},
			align: "center",
			crossAlign: "near",
			showLabelBackdrop: !1,
			backdropColor: "rgba(255, 255, 255, 0.75)",
			backdropPadding: 2,
		},
	}),
		n.route("scale.ticks", "color", "", "color"),
		n.route("scale.grid", "color", "", "borderColor"),
		n.route("scale.border", "color", "", "borderColor"),
		n.route("scale.title", "color", "", "color"),
		n.describe("scale", {
			_fallback: !1,
			_scriptable: (t) =>
				!t.startsWith("before") &&
				!t.startsWith("after") &&
				t !== "callback" &&
				t !== "parser",
			_indexable: (t) =>
				t !== "borderDash" && t !== "tickBorderDash" && t !== "dash",
		}),
		n.describe("scales", { _fallback: "scale" }),
		n.describe("scale.ticks", {
			_scriptable: (t) => t !== "backdropPadding" && t !== "callback",
			_indexable: (t) => t !== "backdropPadding",
		});
}
const pn = Object.create(null),
	Xo = Object.create(null);
function Es(n, t) {
	if (!t) return n;
	const e = t.split(".");
	for (let s = 0, i = e.length; s < i; ++s) {
		const r = e[s];
		n = n[r] || (n[r] = Object.create(null));
	}
	return n;
}
function vo(n, t, e) {
	return typeof t == "string" ? Rs(Es(n, t), e) : Rs(Es(n, ""), t);
}
class Yp {
	constructor(t, e) {
		(this.animation = void 0),
			(this.backgroundColor = "rgba(0,0,0,0.1)"),
			(this.borderColor = "rgba(0,0,0,0.1)"),
			(this.color = "#666"),
			(this.datasets = {}),
			(this.devicePixelRatio = (s) => s.chart.platform.getDevicePixelRatio()),
			(this.elements = {}),
			(this.events = [
				"mousemove",
				"mouseout",
				"click",
				"touchstart",
				"touchmove",
			]),
			(this.font = {
				family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
				size: 12,
				style: "normal",
				lineHeight: 1.2,
				weight: null,
			}),
			(this.hover = {}),
			(this.hoverBackgroundColor = (s, i) => bo(i.backgroundColor)),
			(this.hoverBorderColor = (s, i) => bo(i.borderColor)),
			(this.hoverColor = (s, i) => bo(i.color)),
			(this.indexAxis = "x"),
			(this.interaction = {
				mode: "nearest",
				intersect: !0,
				includeInvisible: !1,
			}),
			(this.maintainAspectRatio = !0),
			(this.onHover = null),
			(this.onClick = null),
			(this.parsing = !0),
			(this.plugins = {}),
			(this.responsive = !0),
			(this.scale = void 0),
			(this.scales = {}),
			(this.showLine = !0),
			(this.drawActiveElementsOnTop = !0),
			this.describe(t),
			this.apply(e);
	}
	set(t, e) {
		return vo(this, t, e);
	}
	get(t) {
		return Es(this, t);
	}
	describe(t, e) {
		return vo(Xo, t, e);
	}
	override(t, e) {
		return vo(pn, t, e);
	}
	route(t, e, s, i) {
		const r = Es(this, t),
			o = Es(this, s),
			a = "_" + e;
		Object.defineProperties(r, {
			[a]: { value: r[e], writable: !0 },
			[e]: {
				enumerable: !0,
				get() {
					const c = this[a],
						l = o[i];
					return U(c) ? Object.assign({}, l, c) : B(c, l);
				},
				set(c) {
					this[a] = c;
				},
			},
		});
	}
	apply(t) {
		t.forEach((e) => e(this));
	}
}
var ht = new Yp(
	{
		_scriptable: (n) => !n.startsWith("on"),
		_indexable: (n) => n !== "events",
		hover: { _fallback: "interaction" },
		interaction: { _scriptable: !1, _indexable: !1 },
	},
	[jp, Hp, Kp],
);
function Gp(n) {
	return !n || q(n.size) || q(n.family)
		? null
		: (n.style ? n.style + " " : "") +
				(n.weight ? n.weight + " " : "") +
				n.size +
				"px " +
				n.family;
}
function ir(n, t, e, s, i) {
	let r = t[i];
	return (
		r || ((r = t[i] = n.measureText(i).width), e.push(i)), r > s && (s = r), s
	);
}
function Xp(n, t, e, s) {
	s = s || {};
	let i = (s.data = s.data || {}),
		r = (s.garbageCollect = s.garbageCollect || []);
	s.font !== t &&
		((i = s.data = {}), (r = s.garbageCollect = []), (s.font = t)),
		n.save(),
		(n.font = t);
	let o = 0;
	const a = e.length;
	let c, l, h, u, d;
	for (c = 0; c < a; c++)
		if (((u = e[c]), u != null && J(u) !== !0)) o = ir(n, i, r, o, u);
		else if (J(u))
			for (l = 0, h = u.length; l < h; l++)
				(d = u[l]), d != null && !J(d) && (o = ir(n, i, r, o, d));
	n.restore();
	const f = r.length / 2;
	if (f > e.length) {
		for (c = 0; c < f; c++) delete i[r[c]];
		r.splice(0, f);
	}
	return o;
}
function tn(n, t, e) {
	const s = n.currentDevicePixelRatio,
		i = e !== 0 ? Math.max(e / 2, 0.5) : 0;
	return Math.round((t - i) * s) / s + i;
}
function ll(n, t) {
	(t = t || n.getContext("2d")),
		t.save(),
		t.resetTransform(),
		t.clearRect(0, 0, n.width, n.height),
		t.restore();
}
function Qo(n, t, e, s) {
	Nu(n, t, e, s, null);
}
function Nu(n, t, e, s, i) {
	let r, o, a, c, l, h, u, d;
	const f = t.pointStyle,
		g = t.rotation,
		p = t.radius;
	let m = (g || 0) * Dp;
	if (
		f &&
		typeof f == "object" &&
		((r = f.toString()),
		r === "[object HTMLImageElement]" || r === "[object HTMLCanvasElement]")
	) {
		n.save(),
			n.translate(e, s),
			n.rotate(m),
			n.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height),
			n.restore();
		return;
	}
	if (!(isNaN(p) || p <= 0)) {
		switch ((n.beginPath(), f)) {
			default:
				i ? n.ellipse(e, s, i / 2, p, 0, 0, Z) : n.arc(e, s, p, 0, Z),
					n.closePath();
				break;
			case "triangle":
				(h = i ? i / 2 : p),
					n.moveTo(e + Math.sin(m) * h, s - Math.cos(m) * p),
					(m += el),
					n.lineTo(e + Math.sin(m) * h, s - Math.cos(m) * p),
					(m += el),
					n.lineTo(e + Math.sin(m) * h, s - Math.cos(m) * p),
					n.closePath();
				break;
			case "rectRounded":
				(l = p * 0.516),
					(c = p - l),
					(o = Math.cos(m + Ze) * c),
					(u = Math.cos(m + Ze) * (i ? i / 2 - l : c)),
					(a = Math.sin(m + Ze) * c),
					(d = Math.sin(m + Ze) * (i ? i / 2 - l : c)),
					n.arc(e - u, s - a, l, m - it, m - at),
					n.arc(e + d, s - o, l, m - at, m),
					n.arc(e + u, s + a, l, m, m + at),
					n.arc(e - d, s + o, l, m + at, m + it),
					n.closePath();
				break;
			case "rect":
				if (!g) {
					(c = Math.SQRT1_2 * p),
						(h = i ? i / 2 : c),
						n.rect(e - h, s - c, 2 * h, 2 * c);
					break;
				}
				m += Ze;
			case "rectRot":
				(u = Math.cos(m) * (i ? i / 2 : p)),
					(o = Math.cos(m) * p),
					(a = Math.sin(m) * p),
					(d = Math.sin(m) * (i ? i / 2 : p)),
					n.moveTo(e - u, s - a),
					n.lineTo(e + d, s - o),
					n.lineTo(e + u, s + a),
					n.lineTo(e - d, s + o),
					n.closePath();
				break;
			case "crossRot":
				m += Ze;
			case "cross":
				(u = Math.cos(m) * (i ? i / 2 : p)),
					(o = Math.cos(m) * p),
					(a = Math.sin(m) * p),
					(d = Math.sin(m) * (i ? i / 2 : p)),
					n.moveTo(e - u, s - a),
					n.lineTo(e + u, s + a),
					n.moveTo(e + d, s - o),
					n.lineTo(e - d, s + o);
				break;
			case "star":
				(u = Math.cos(m) * (i ? i / 2 : p)),
					(o = Math.cos(m) * p),
					(a = Math.sin(m) * p),
					(d = Math.sin(m) * (i ? i / 2 : p)),
					n.moveTo(e - u, s - a),
					n.lineTo(e + u, s + a),
					n.moveTo(e + d, s - o),
					n.lineTo(e - d, s + o),
					(m += Ze),
					(u = Math.cos(m) * (i ? i / 2 : p)),
					(o = Math.cos(m) * p),
					(a = Math.sin(m) * p),
					(d = Math.sin(m) * (i ? i / 2 : p)),
					n.moveTo(e - u, s - a),
					n.lineTo(e + u, s + a),
					n.moveTo(e + d, s - o),
					n.lineTo(e - d, s + o);
				break;
			case "line":
				(o = i ? i / 2 : Math.cos(m) * p),
					(a = Math.sin(m) * p),
					n.moveTo(e - o, s - a),
					n.lineTo(e + o, s + a);
				break;
			case "dash":
				n.moveTo(e, s),
					n.lineTo(e + Math.cos(m) * (i ? i / 2 : p), s + Math.sin(m) * p);
				break;
			case !1:
				n.closePath();
				break;
		}
		n.fill(), t.borderWidth > 0 && n.stroke();
	}
}
function Ns(n, t, e) {
	return (
		(e = e || 0.5),
		!t ||
			(n &&
				n.x > t.left - e &&
				n.x < t.right + e &&
				n.y > t.top - e &&
				n.y < t.bottom + e)
	);
}
function Pr(n, t) {
	n.save(),
		n.beginPath(),
		n.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
		n.clip();
}
function Rr(n) {
	n.restore();
}
function Qp(n, t, e, s, i) {
	if (!t) return n.lineTo(e.x, e.y);
	if (i === "middle") {
		const r = (t.x + e.x) / 2;
		n.lineTo(r, t.y), n.lineTo(r, e.y);
	} else (i === "after") != !!s ? n.lineTo(t.x, e.y) : n.lineTo(e.x, t.y);
	n.lineTo(e.x, e.y);
}
function Jp(n, t, e, s) {
	if (!t) return n.lineTo(e.x, e.y);
	n.bezierCurveTo(
		s ? t.cp1x : t.cp2x,
		s ? t.cp1y : t.cp2y,
		s ? e.cp2x : e.cp1x,
		s ? e.cp2y : e.cp1y,
		e.x,
		e.y,
	);
}
function mn(n, t, e, s, i, r = {}) {
	const o = J(t) ? t : [t],
		a = r.strokeWidth > 0 && r.strokeColor !== "";
	let c, l;
	for (n.save(), n.font = i.string, Zp(n, r), c = 0; c < o.length; ++c)
		(l = o[c]),
			r.backdrop && em(n, r.backdrop),
			a &&
				(r.strokeColor && (n.strokeStyle = r.strokeColor),
				q(r.strokeWidth) || (n.lineWidth = r.strokeWidth),
				n.strokeText(l, e, s, r.maxWidth)),
			n.fillText(l, e, s, r.maxWidth),
			tm(n, e, s, l, r),
			(s += i.lineHeight);
	n.restore();
}
function Zp(n, t) {
	t.translation && n.translate(t.translation[0], t.translation[1]),
		q(t.rotation) || n.rotate(t.rotation),
		t.color && (n.fillStyle = t.color),
		t.textAlign && (n.textAlign = t.textAlign),
		t.textBaseline && (n.textBaseline = t.textBaseline);
}
function tm(n, t, e, s, i) {
	if (i.strikethrough || i.underline) {
		const r = n.measureText(s),
			o = t - r.actualBoundingBoxLeft,
			a = t + r.actualBoundingBoxRight,
			c = e - r.actualBoundingBoxAscent,
			l = e + r.actualBoundingBoxDescent,
			h = i.strikethrough ? (c + l) / 2 : l;
		(n.strokeStyle = n.fillStyle),
			n.beginPath(),
			(n.lineWidth = i.decorationWidth || 2),
			n.moveTo(o, h),
			n.lineTo(a, h),
			n.stroke();
	}
}
function em(n, t) {
	const e = n.fillStyle;
	(n.fillStyle = t.color),
		n.fillRect(t.left, t.top, t.width, t.height),
		(n.fillStyle = e);
}
function Fs(n, t) {
	const { x: e, y: s, w: i, h: r, radius: o } = t;
	n.arc(e + o.topLeft, s + o.topLeft, o.topLeft, -at, it, !0),
		n.lineTo(e, s + r - o.bottomLeft),
		n.arc(e + o.bottomLeft, s + r - o.bottomLeft, o.bottomLeft, it, at, !0),
		n.lineTo(e + i - o.bottomRight, s + r),
		n.arc(
			e + i - o.bottomRight,
			s + r - o.bottomRight,
			o.bottomRight,
			at,
			0,
			!0,
		),
		n.lineTo(e + i, s + o.topRight),
		n.arc(e + i - o.topRight, s + o.topRight, o.topRight, 0, -at, !0),
		n.lineTo(e + o.topLeft, s);
}
const nm = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
	sm = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function im(n, t) {
	const e = ("" + n).match(nm);
	if (!e || e[1] === "normal") return t * 1.2;
	switch (((n = +e[2]), e[3])) {
		case "px":
			return n;
		case "%":
			n /= 100;
			break;
	}
	return t * n;
}
const rm = (n) => +n || 0;
function $a(n, t) {
	const e = {},
		s = U(t),
		i = s ? Object.keys(t) : t,
		r = U(n) ? (s ? (o) => B(n[o], n[t[o]]) : (o) => n[o]) : () => n;
	for (const o of i) e[o] = rm(r(o));
	return e;
}
function Fu(n) {
	return $a(n, { top: "y", right: "x", bottom: "y", left: "x" });
}
function un(n) {
	return $a(n, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
}
function Lt(n) {
	const t = Fu(n);
	return (t.width = t.left + t.right), (t.height = t.top + t.bottom), t;
}
function ut(n, t) {
	(n = n || {}), (t = t || ht.font);
	let e = B(n.size, t.size);
	typeof e == "string" && (e = parseInt(e, 10));
	let s = B(n.style, t.style);
	s &&
		!("" + s).match(sm) &&
		(console.warn('Invalid font style specified: "' + s + '"'), (s = void 0));
	const i = {
		family: B(n.family, t.family),
		lineHeight: im(B(n.lineHeight, t.lineHeight), e),
		size: e,
		style: s,
		weight: B(n.weight, t.weight),
		string: "",
	};
	return (i.string = Gp(i)), i;
}
function gs(n, t, e, s) {
	let i = !0,
		r,
		o,
		a;
	for (r = 0, o = n.length; r < o; ++r)
		if (
			((a = n[r]),
			a !== void 0 &&
				(t !== void 0 && typeof a == "function" && ((a = a(t)), (i = !1)),
				e !== void 0 && J(a) && ((a = a[e % a.length]), (i = !1)),
				a !== void 0))
		)
			return s && !i && (s.cacheable = !1), a;
}
function om(n, t, e) {
	const { min: s, max: i } = n,
		r = Eu(t, (i - s) / 2),
		o = (a, c) => (e && a === 0 ? 0 : a + c);
	return { min: o(s, -Math.abs(r)), max: o(i, r) };
}
function Ye(n, t) {
	return Object.assign(Object.create(n), t);
}
function Ua(n, t = [""], e = n, s, i = () => n[0]) {
	Yt(s) || (s = $u("_fallback", n));
	const r = {
		[Symbol.toStringTag]: "Object",
		_cacheable: !0,
		_scopes: n,
		_rootScopes: e,
		_fallback: s,
		_getTarget: i,
		override: (o) => Ua([o, ...n], t, e, s),
	};
	return new Proxy(r, {
		deleteProperty(o, a) {
			return delete o[a], delete o._keys, delete n[0][a], !0;
		},
		get(o, a) {
			return Vu(o, a, () => gm(a, t, n, o));
		},
		getOwnPropertyDescriptor(o, a) {
			return Reflect.getOwnPropertyDescriptor(o._scopes[0], a);
		},
		getPrototypeOf() {
			return Reflect.getPrototypeOf(n[0]);
		},
		has(o, a) {
			return ul(o).includes(a);
		},
		ownKeys(o) {
			return ul(o);
		},
		set(o, a, c) {
			const l = o._storage || (o._storage = i());
			return (o[a] = l[a] = c), delete o._keys, !0;
		},
	});
}
function Bn(n, t, e, s) {
	const i = {
		_cacheable: !1,
		_proxy: n,
		_context: t,
		_subProxy: e,
		_stack: new Set(),
		_descriptors: Bu(n, s),
		setContext: (r) => Bn(n, r, e, s),
		override: (r) => Bn(n.override(r), t, e, s),
	};
	return new Proxy(i, {
		deleteProperty(r, o) {
			return delete r[o], delete n[o], !0;
		},
		get(r, o, a) {
			return Vu(r, o, () => cm(r, o, a));
		},
		getOwnPropertyDescriptor(r, o) {
			return r._descriptors.allKeys
				? Reflect.has(n, o)
					? { enumerable: !0, configurable: !0 }
					: void 0
				: Reflect.getOwnPropertyDescriptor(n, o);
		},
		getPrototypeOf() {
			return Reflect.getPrototypeOf(n);
		},
		has(r, o) {
			return Reflect.has(n, o);
		},
		ownKeys() {
			return Reflect.ownKeys(n);
		},
		set(r, o, a) {
			return (n[o] = a), delete r[o], !0;
		},
	});
}
function Bu(n, t = { scriptable: !0, indexable: !0 }) {
	const {
		_scriptable: e = t.scriptable,
		_indexable: s = t.indexable,
		_allKeys: i = t.allKeys,
	} = n;
	return {
		allKeys: i,
		scriptable: e,
		indexable: s,
		isScriptable: He(e) ? e : () => e,
		isIndexable: He(s) ? s : () => s,
	};
}
const am = (n, t) => (n ? n + Fa(t) : t),
	ja = (n, t) =>
		U(t) &&
		n !== "adapters" &&
		(Object.getPrototypeOf(t) === null || t.constructor === Object);
function Vu(n, t, e) {
	if (Object.prototype.hasOwnProperty.call(n, t)) return n[t];
	const s = e();
	return (n[t] = s), s;
}
function cm(n, t, e) {
	const { _proxy: s, _context: i, _subProxy: r, _descriptors: o } = n;
	let a = s[t];
	return (
		He(a) && o.isScriptable(t) && (a = lm(t, a, n, e)),
		J(a) && a.length && (a = hm(t, a, n, o.isIndexable)),
		ja(t, a) && (a = Bn(a, i, r && r[t], o)),
		a
	);
}
function lm(n, t, e, s) {
	const { _proxy: i, _context: r, _subProxy: o, _stack: a } = e;
	if (a.has(n))
		throw new Error(
			"Recursion detected: " + Array.from(a).join("->") + "->" + n,
		);
	return (
		a.add(n),
		(t = t(r, o || s)),
		a.delete(n),
		ja(n, t) && (t = Ha(i._scopes, i, n, t)),
		t
	);
}
function hm(n, t, e, s) {
	const { _proxy: i, _context: r, _subProxy: o, _descriptors: a } = e;
	if (Yt(r.index) && s(n)) t = t[r.index % t.length];
	else if (U(t[0])) {
		const c = t,
			l = i._scopes.filter((h) => h !== c);
		t = [];
		for (const h of c) {
			const u = Ha(l, i, n, h);
			t.push(Bn(u, r, o && o[n], a));
		}
	}
	return t;
}
function zu(n, t, e) {
	return He(n) ? n(t, e) : n;
}
const um = (n, t) => (n === !0 ? t : typeof n == "string" ? je(t, n) : void 0);
function dm(n, t, e, s, i) {
	for (const r of t) {
		const o = um(e, r);
		if (o) {
			n.add(o);
			const a = zu(o._fallback, e, i);
			if (Yt(a) && a !== e && a !== s) return a;
		} else if (o === !1 && Yt(s) && e !== s) return null;
	}
	return !1;
}
function Ha(n, t, e, s) {
	const i = t._rootScopes,
		r = zu(t._fallback, e, s),
		o = [...n, ...i],
		a = new Set();
	a.add(s);
	let c = hl(a, o, e, r || e, s);
	return c === null ||
		(Yt(r) && r !== e && ((c = hl(a, o, r, c, s)), c === null))
		? !1
		: Ua(Array.from(a), [""], i, r, () => fm(t, e, s));
}
function hl(n, t, e, s, i) {
	for (; e; ) e = dm(n, t, e, s, i);
	return e;
}
function fm(n, t, e) {
	const s = n._getTarget();
	t in s || (s[t] = {});
	const i = s[t];
	return J(i) && U(e) ? e : i || {};
}
function gm(n, t, e, s) {
	let i;
	for (const r of t)
		if (((i = $u(am(r, n), e)), Yt(i))) return ja(n, i) ? Ha(e, s, n, i) : i;
}
function $u(n, t) {
	for (const e of t) {
		if (!e) continue;
		const s = e[n];
		if (Yt(s)) return s;
	}
}
function ul(n) {
	let t = n._keys;
	return t || (t = n._keys = pm(n._scopes)), t;
}
function pm(n) {
	const t = new Set();
	for (const e of n)
		for (const s of Object.keys(e).filter((i) => !i.startsWith("_"))) t.add(s);
	return Array.from(t);
}
function Uu(n, t, e, s) {
	const { iScale: i } = n,
		{ key: r = "r" } = this._parsing,
		o = new Array(s);
	let a, c, l, h;
	for (a = 0, c = s; a < c; ++a)
		(l = a + e), (h = t[l]), (o[a] = { r: i.parse(je(h, r), l) });
	return o;
}
const mm = Number.EPSILON || 1e-14,
	Vn = (n, t) => t < n.length && !n[t].skip && n[t],
	ju = (n) => (n === "x" ? "y" : "x");
function ym(n, t, e, s) {
	const i = n.skip ? t : n,
		r = t,
		o = e.skip ? t : e,
		a = Go(r, i),
		c = Go(o, r);
	let l = a / (a + c),
		h = c / (a + c);
	(l = isNaN(l) ? 0 : l), (h = isNaN(h) ? 0 : h);
	const u = s * l,
		d = s * h;
	return {
		previous: { x: r.x - u * (o.x - i.x), y: r.y - u * (o.y - i.y) },
		next: { x: r.x + d * (o.x - i.x), y: r.y + d * (o.y - i.y) },
	};
}
function bm(n, t, e) {
	const s = n.length;
	let i,
		r,
		o,
		a,
		c,
		l = Vn(n, 0);
	for (let h = 0; h < s - 1; ++h)
		if (((c = l), (l = Vn(n, h + 1)), !(!c || !l))) {
			if (ws(t[h], 0, mm)) {
				e[h] = e[h + 1] = 0;
				continue;
			}
			(i = e[h] / t[h]),
				(r = e[h + 1] / t[h]),
				(a = Math.pow(i, 2) + Math.pow(r, 2)),
				!(a <= 9) &&
					((o = 3 / Math.sqrt(a)),
					(e[h] = i * o * t[h]),
					(e[h + 1] = r * o * t[h]));
		}
}
function vm(n, t, e = "x") {
	const s = ju(e),
		i = n.length;
	let r,
		o,
		a,
		c = Vn(n, 0);
	for (let l = 0; l < i; ++l) {
		if (((o = a), (a = c), (c = Vn(n, l + 1)), !a)) continue;
		const h = a[e],
			u = a[s];
		o &&
			((r = (h - o[e]) / 3),
			(a[`cp1${e}`] = h - r),
			(a[`cp1${s}`] = u - r * t[l])),
			c &&
				((r = (c[e] - h) / 3),
				(a[`cp2${e}`] = h + r),
				(a[`cp2${s}`] = u + r * t[l]));
	}
}
function xm(n, t = "x") {
	const e = ju(t),
		s = n.length,
		i = Array(s).fill(0),
		r = Array(s);
	let o,
		a,
		c,
		l = Vn(n, 0);
	for (o = 0; o < s; ++o)
		if (((a = c), (c = l), (l = Vn(n, o + 1)), !!c)) {
			if (l) {
				const h = l[t] - c[t];
				i[o] = h !== 0 ? (l[e] - c[e]) / h : 0;
			}
			r[o] = a
				? l
					? ie(i[o - 1]) !== ie(i[o])
						? 0
						: (i[o - 1] + i[o]) / 2
					: i[o - 1]
				: i[o];
		}
	bm(n, i, r), vm(n, r, t);
}
function Si(n, t, e) {
	return Math.max(Math.min(n, e), t);
}
function _m(n, t) {
	let e,
		s,
		i,
		r,
		o,
		a = Ns(n[0], t);
	for (e = 0, s = n.length; e < s; ++e)
		(o = r),
			(r = a),
			(a = e < s - 1 && Ns(n[e + 1], t)),
			r &&
				((i = n[e]),
				o &&
					((i.cp1x = Si(i.cp1x, t.left, t.right)),
					(i.cp1y = Si(i.cp1y, t.top, t.bottom))),
				a &&
					((i.cp2x = Si(i.cp2x, t.left, t.right)),
					(i.cp2y = Si(i.cp2y, t.top, t.bottom))));
}
function wm(n, t, e, s, i) {
	let r, o, a, c;
	if (
		(t.spanGaps && (n = n.filter((l) => !l.skip)),
		t.cubicInterpolationMode === "monotone")
	)
		xm(n, i);
	else {
		let l = s ? n[n.length - 1] : n[0];
		for (r = 0, o = n.length; r < o; ++r)
			(a = n[r]),
				(c = ym(l, a, n[Math.min(r + 1, o - (s ? 0 : 1)) % o], t.tension)),
				(a.cp1x = c.previous.x),
				(a.cp1y = c.previous.y),
				(a.cp2x = c.next.x),
				(a.cp2y = c.next.y),
				(l = a);
	}
	t.capBezierPoints && _m(n, e);
}
function Hu() {
	return typeof window < "u" && typeof document < "u";
}
function Wa(n) {
	let t = n.parentNode;
	return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function rr(n, t, e) {
	let s;
	return (
		typeof n == "string"
			? ((s = parseInt(n, 10)),
			  n.indexOf("%") !== -1 && (s = (s / 100) * t.parentNode[e]))
			: (s = n),
		s
	);
}
const Lr = (n) => n.ownerDocument.defaultView.getComputedStyle(n, null);
function Sm(n, t) {
	return Lr(n).getPropertyValue(t);
}
const Em = ["top", "right", "bottom", "left"];
function dn(n, t, e) {
	const s = {};
	e = e ? "-" + e : "";
	for (let i = 0; i < 4; i++) {
		const r = Em[i];
		s[r] = parseFloat(n[t + "-" + r + e]) || 0;
	}
	return (s.width = s.left + s.right), (s.height = s.top + s.bottom), s;
}
const km = (n, t, e) => (n > 0 || t > 0) && (!e || !e.shadowRoot);
function Cm(n, t) {
	const e = n.touches,
		s = e && e.length ? e[0] : n,
		{ offsetX: i, offsetY: r } = s;
	let o = !1,
		a,
		c;
	if (km(i, r, n.target)) (a = i), (c = r);
	else {
		const l = t.getBoundingClientRect();
		(a = s.clientX - l.left), (c = s.clientY - l.top), (o = !0);
	}
	return { x: a, y: c, box: o };
}
function sn(n, t) {
	if ("native" in n) return n;
	const { canvas: e, currentDevicePixelRatio: s } = t,
		i = Lr(e),
		r = i.boxSizing === "border-box",
		o = dn(i, "padding"),
		a = dn(i, "border", "width"),
		{ x: c, y: l, box: h } = Cm(n, e),
		u = o.left + (h && a.left),
		d = o.top + (h && a.top);
	let { width: f, height: g } = t;
	return (
		r && ((f -= o.width + a.width), (g -= o.height + a.height)),
		{
			x: Math.round((((c - u) / f) * e.width) / s),
			y: Math.round((((l - d) / g) * e.height) / s),
		}
	);
}
function Tm(n, t, e) {
	let s, i;
	if (t === void 0 || e === void 0) {
		const r = Wa(n);
		if (!r) (t = n.clientWidth), (e = n.clientHeight);
		else {
			const o = r.getBoundingClientRect(),
				a = Lr(r),
				c = dn(a, "border", "width"),
				l = dn(a, "padding");
			(t = o.width - l.width - c.width),
				(e = o.height - l.height - c.height),
				(s = rr(a.maxWidth, r, "clientWidth")),
				(i = rr(a.maxHeight, r, "clientHeight"));
		}
	}
	return { width: t, height: e, maxWidth: s || sr, maxHeight: i || sr };
}
const Ei = (n) => Math.round(n * 10) / 10;
function Im(n, t, e, s) {
	const i = Lr(n),
		r = dn(i, "margin"),
		o = rr(i.maxWidth, n, "clientWidth") || sr,
		a = rr(i.maxHeight, n, "clientHeight") || sr,
		c = Tm(n, t, e);
	let { width: l, height: h } = c;
	if (i.boxSizing === "content-box") {
		const d = dn(i, "border", "width"),
			f = dn(i, "padding");
		(l -= f.width + d.width), (h -= f.height + d.height);
	}
	return (
		(l = Math.max(0, l - r.width)),
		(h = Math.max(0, s ? l / s : h - r.height)),
		(l = Ei(Math.min(l, o, c.maxWidth))),
		(h = Ei(Math.min(h, a, c.maxHeight))),
		l && !h && (h = Ei(l / 2)),
		(t !== void 0 || e !== void 0) &&
			s &&
			c.height &&
			h > c.height &&
			((h = c.height), (l = Ei(Math.floor(h * s)))),
		{ width: l, height: h }
	);
}
function dl(n, t, e) {
	const s = t || 1,
		i = Math.floor(n.height * s),
		r = Math.floor(n.width * s);
	(n.height = Math.floor(n.height)), (n.width = Math.floor(n.width));
	const o = n.canvas;
	return (
		o.style &&
			(e || (!o.style.height && !o.style.width)) &&
			((o.style.height = `${n.height}px`), (o.style.width = `${n.width}px`)),
		n.currentDevicePixelRatio !== s || o.height !== i || o.width !== r
			? ((n.currentDevicePixelRatio = s),
			  (o.height = i),
			  (o.width = r),
			  n.ctx.setTransform(s, 0, 0, s, 0, 0),
			  !0)
			: !1
	);
}
const Mm = (function () {
	let n = !1;
	try {
		const t = {
			get passive() {
				return (n = !0), !1;
			},
		};
		window.addEventListener("test", null, t),
			window.removeEventListener("test", null, t);
	} catch {}
	return n;
})();
function fl(n, t) {
	const e = Sm(n, t),
		s = e && e.match(/^(\d+)(\.\d+)?px$/);
	return s ? +s[1] : void 0;
}
function rn(n, t, e, s) {
	return { x: n.x + e * (t.x - n.x), y: n.y + e * (t.y - n.y) };
}
function Am(n, t, e, s) {
	return {
		x: n.x + e * (t.x - n.x),
		y:
			s === "middle"
				? e < 0.5
					? n.y
					: t.y
				: s === "after"
				? e < 1
					? n.y
					: t.y
				: e > 0
				? t.y
				: n.y,
	};
}
function Dm(n, t, e, s) {
	const i = { x: n.cp2x, y: n.cp2y },
		r = { x: t.cp1x, y: t.cp1y },
		o = rn(n, i, e),
		a = rn(i, r, e),
		c = rn(r, t, e),
		l = rn(o, a, e),
		h = rn(a, c, e);
	return rn(l, h, e);
}
const Om = function (n, t) {
		return {
			x(e) {
				return n + n + t - e;
			},
			setWidth(e) {
				t = e;
			},
			textAlign(e) {
				return e === "center" ? e : e === "right" ? "left" : "right";
			},
			xPlus(e, s) {
				return e - s;
			},
			leftForLtr(e, s) {
				return e - s;
			},
		};
	},
	Pm = function () {
		return {
			x(n) {
				return n;
			},
			setWidth(n) {},
			textAlign(n) {
				return n;
			},
			xPlus(n, t) {
				return n + t;
			},
			leftForLtr(n, t) {
				return n;
			},
		};
	};
function Pn(n, t, e) {
	return n ? Om(t, e) : Pm();
}
function Wu(n, t) {
	let e, s;
	(t === "ltr" || t === "rtl") &&
		((e = n.canvas.style),
		(s = [e.getPropertyValue("direction"), e.getPropertyPriority("direction")]),
		e.setProperty("direction", t, "important"),
		(n.prevTextDirection = s));
}
function qu(n, t) {
	t !== void 0 &&
		(delete n.prevTextDirection,
		n.canvas.style.setProperty("direction", t[0], t[1]));
}
function Ku(n) {
	return n === "angle"
		? { between: Ls, compare: Rp, normalize: Ht }
		: { between: me, compare: (t, e) => t - e, normalize: (t) => t };
}
function gl({ start: n, end: t, count: e, loop: s, style: i }) {
	return {
		start: n % e,
		end: t % e,
		loop: s && (t - n + 1) % e === 0,
		style: i,
	};
}
function Rm(n, t, e) {
	const { property: s, start: i, end: r } = e,
		{ between: o, normalize: a } = Ku(s),
		c = t.length;
	let { start: l, end: h, loop: u } = n,
		d,
		f;
	if (u) {
		for (l += c, h += c, d = 0, f = c; d < f && o(a(t[l % c][s]), i, r); ++d)
			l--, h--;
		(l %= c), (h %= c);
	}
	return h < l && (h += c), { start: l, end: h, loop: u, style: n.style };
}
function Yu(n, t, e) {
	if (!e) return [n];
	const { property: s, start: i, end: r } = e,
		o = t.length,
		{ compare: a, between: c, normalize: l } = Ku(s),
		{ start: h, end: u, loop: d, style: f } = Rm(n, t, e),
		g = [];
	let p = !1,
		m = null,
		b,
		y,
		v;
	const _ = () => c(i, v, b) && a(i, v) !== 0,
		x = () => a(r, b) === 0 || c(r, v, b),
		k = () => p || _(),
		S = () => !p || x();
	for (let E = h, T = h; E <= u; ++E)
		(y = t[E % o]),
			!y.skip &&
				((b = l(y[s])),
				b !== v &&
					((p = c(b, i, r)),
					m === null && k() && (m = a(b, i) === 0 ? E : T),
					m !== null &&
						S() &&
						(g.push(gl({ start: m, end: E, loop: d, count: o, style: f })),
						(m = null)),
					(T = E),
					(v = b)));
	return (
		m !== null && g.push(gl({ start: m, end: u, loop: d, count: o, style: f })),
		g
	);
}
function Gu(n, t) {
	const e = [],
		s = n.segments;
	for (let i = 0; i < s.length; i++) {
		const r = Yu(s[i], n.points, t);
		r.length && e.push(...r);
	}
	return e;
}
function Lm(n, t, e, s) {
	let i = 0,
		r = t - 1;
	if (e && !s) for (; i < t && !n[i].skip; ) i++;
	for (; i < t && n[i].skip; ) i++;
	for (i %= t, e && (r += i); r > i && n[r % t].skip; ) r--;
	return (r %= t), { start: i, end: r };
}
function Nm(n, t, e, s) {
	const i = n.length,
		r = [];
	let o = t,
		a = n[t],
		c;
	for (c = t + 1; c <= e; ++c) {
		const l = n[c % i];
		l.skip || l.stop
			? a.skip ||
			  ((s = !1),
			  r.push({ start: t % i, end: (c - 1) % i, loop: s }),
			  (t = o = l.stop ? c : null))
			: ((o = c), a.skip && (t = c)),
			(a = l);
	}
	return o !== null && r.push({ start: t % i, end: o % i, loop: s }), r;
}
function Fm(n, t) {
	const e = n.points,
		s = n.options.spanGaps,
		i = e.length;
	if (!i) return [];
	const r = !!n._loop,
		{ start: o, end: a } = Lm(e, i, r, s);
	if (s === !0) return pl(n, [{ start: o, end: a, loop: r }], e, t);
	const c = a < o ? a + i : a,
		l = !!n._fullLoop && o === 0 && a === i - 1;
	return pl(n, Nm(e, o, c, l), e, t);
}
function pl(n, t, e, s) {
	return !s || !s.setContext || !e ? t : Bm(n, t, e, s);
}
function Bm(n, t, e, s) {
	const i = n._chart.getContext(),
		r = ml(n.options),
		{
			_datasetIndex: o,
			options: { spanGaps: a },
		} = n,
		c = e.length,
		l = [];
	let h = r,
		u = t[0].start,
		d = u;
	function f(g, p, m, b) {
		const y = a ? -1 : 1;
		if (g !== p) {
			for (g += c; e[g % c].skip; ) g -= y;
			for (; e[p % c].skip; ) p += y;
			g % c !== p % c &&
				(l.push({ start: g % c, end: p % c, loop: m, style: b }),
				(h = b),
				(u = p % c));
		}
	}
	for (const g of t) {
		u = a ? u : g.start;
		let p = e[u % c],
			m;
		for (d = u + 1; d <= g.end; d++) {
			const b = e[d % c];
			(m = ml(
				s.setContext(
					Ye(i, {
						type: "segment",
						p0: p,
						p1: b,
						p0DataIndex: (d - 1) % c,
						p1DataIndex: d % c,
						datasetIndex: o,
					}),
				),
			)),
				Vm(m, h) && f(u, d - 1, g.loop, h),
				(p = b),
				(h = m);
		}
		u < d - 1 && f(u, d - 1, g.loop, h);
	}
	return l;
}
function ml(n) {
	return {
		backgroundColor: n.backgroundColor,
		borderCapStyle: n.borderCapStyle,
		borderDash: n.borderDash,
		borderDashOffset: n.borderDashOffset,
		borderJoinStyle: n.borderJoinStyle,
		borderWidth: n.borderWidth,
		borderColor: n.borderColor,
	};
}
function Vm(n, t) {
	return t && JSON.stringify(n) !== JSON.stringify(t);
}
/*!
 * Chart.js v4.2.1
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */ class zm {
	constructor() {
		(this._request = null),
			(this._charts = new Map()),
			(this._running = !1),
			(this._lastDate = void 0);
	}
	_notify(t, e, s, i) {
		const r = e.listeners[i],
			o = e.duration;
		r.forEach((a) =>
			a({
				chart: t,
				initial: e.initial,
				numSteps: o,
				currentStep: Math.min(s - e.start, o),
			}),
		);
	}
	_refresh() {
		this._request ||
			((this._running = !0),
			(this._request = Au.call(window, () => {
				this._update(),
					(this._request = null),
					this._running && this._refresh();
			})));
	}
	_update(t = Date.now()) {
		let e = 0;
		this._charts.forEach((s, i) => {
			if (!s.running || !s.items.length) return;
			const r = s.items;
			let o = r.length - 1,
				a = !1,
				c;
			for (; o >= 0; --o)
				(c = r[o]),
					c._active
						? (c._total > s.duration && (s.duration = c._total),
						  c.tick(t),
						  (a = !0))
						: ((r[o] = r[r.length - 1]), r.pop());
			a && (i.draw(), this._notify(i, s, t, "progress")),
				r.length ||
					((s.running = !1),
					this._notify(i, s, t, "complete"),
					(s.initial = !1)),
				(e += r.length);
		}),
			(this._lastDate = t),
			e === 0 && (this._running = !1);
	}
	_getAnims(t) {
		const e = this._charts;
		let s = e.get(t);
		return (
			s ||
				((s = {
					running: !1,
					initial: !0,
					items: [],
					listeners: { complete: [], progress: [] },
				}),
				e.set(t, s)),
			s
		);
	}
	listen(t, e, s) {
		this._getAnims(t).listeners[e].push(s);
	}
	add(t, e) {
		!e || !e.length || this._getAnims(t).items.push(...e);
	}
	has(t) {
		return this._getAnims(t).items.length > 0;
	}
	start(t) {
		const e = this._charts.get(t);
		e &&
			((e.running = !0),
			(e.start = Date.now()),
			(e.duration = e.items.reduce((s, i) => Math.max(s, i._duration), 0)),
			this._refresh());
	}
	running(t) {
		if (!this._running) return !1;
		const e = this._charts.get(t);
		return !(!e || !e.running || !e.items.length);
	}
	stop(t) {
		const e = this._charts.get(t);
		if (!e || !e.items.length) return;
		const s = e.items;
		let i = s.length - 1;
		for (; i >= 0; --i) s[i].cancel();
		(e.items = []), this._notify(t, e, Date.now(), "complete");
	}
	remove(t) {
		return this._charts.delete(t);
	}
}
var ue = new zm();
const yl = "transparent",
	$m = {
		boolean(n, t, e) {
			return e > 0.5 ? t : n;
		},
		color(n, t, e) {
			const s = al(n || yl),
				i = s.valid && al(t || yl);
			return i && i.valid ? i.mix(s, e).hexString() : t;
		},
		number(n, t, e) {
			return n + (t - n) * e;
		},
	};
class Um {
	constructor(t, e, s, i) {
		const r = e[s];
		i = gs([t.to, i, r, t.from]);
		const o = gs([t.from, r, i]);
		(this._active = !0),
			(this._fn = t.fn || $m[t.type || typeof o]),
			(this._easing = Ss[t.easing] || Ss.linear),
			(this._start = Math.floor(Date.now() + (t.delay || 0))),
			(this._duration = this._total = Math.floor(t.duration)),
			(this._loop = !!t.loop),
			(this._target = e),
			(this._prop = s),
			(this._from = o),
			(this._to = i),
			(this._promises = void 0);
	}
	active() {
		return this._active;
	}
	update(t, e, s) {
		if (this._active) {
			this._notify(!1);
			const i = this._target[this._prop],
				r = s - this._start,
				o = this._duration - r;
			(this._start = s),
				(this._duration = Math.floor(Math.max(o, t.duration))),
				(this._total += r),
				(this._loop = !!t.loop),
				(this._to = gs([t.to, e, i, t.from])),
				(this._from = gs([t.from, i, e]));
		}
	}
	cancel() {
		this._active &&
			(this.tick(Date.now()), (this._active = !1), this._notify(!1));
	}
	tick(t) {
		const e = t - this._start,
			s = this._duration,
			i = this._prop,
			r = this._from,
			o = this._loop,
			a = this._to;
		let c;
		if (((this._active = r !== a && (o || e < s)), !this._active)) {
			(this._target[i] = a), this._notify(!0);
			return;
		}
		if (e < 0) {
			this._target[i] = r;
			return;
		}
		(c = (e / s) % 2),
			(c = o && c > 1 ? 2 - c : c),
			(c = this._easing(Math.min(1, Math.max(0, c)))),
			(this._target[i] = this._fn(r, a, c));
	}
	wait() {
		const t = this._promises || (this._promises = []);
		return new Promise((e, s) => {
			t.push({ res: e, rej: s });
		});
	}
	_notify(t) {
		const e = t ? "res" : "rej",
			s = this._promises || [];
		for (let i = 0; i < s.length; i++) s[i][e]();
	}
}
class Xu {
	constructor(t, e) {
		(this._chart = t), (this._properties = new Map()), this.configure(e);
	}
	configure(t) {
		if (!U(t)) return;
		const e = Object.keys(ht.animation),
			s = this._properties;
		Object.getOwnPropertyNames(t).forEach((i) => {
			const r = t[i];
			if (!U(r)) return;
			const o = {};
			for (const a of e) o[a] = r[a];
			((J(r.properties) && r.properties) || [i]).forEach((a) => {
				(a === i || !s.has(a)) && s.set(a, o);
			});
		});
	}
	_animateOptions(t, e) {
		const s = e.options,
			i = Hm(t, s);
		if (!i) return [];
		const r = this._createAnimations(i, s);
		return (
			s.$shared &&
				jm(t.options.$animations, s).then(
					() => {
						t.options = s;
					},
					() => {},
				),
			r
		);
	}
	_createAnimations(t, e) {
		const s = this._properties,
			i = [],
			r = t.$animations || (t.$animations = {}),
			o = Object.keys(e),
			a = Date.now();
		let c;
		for (c = o.length - 1; c >= 0; --c) {
			const l = o[c];
			if (l.charAt(0) === "$") continue;
			if (l === "options") {
				i.push(...this._animateOptions(t, e));
				continue;
			}
			const h = e[l];
			let u = r[l];
			const d = s.get(l);
			if (u)
				if (d && u.active()) {
					u.update(d, h, a);
					continue;
				} else u.cancel();
			if (!d || !d.duration) {
				t[l] = h;
				continue;
			}
			(r[l] = u = new Um(d, t, l, h)), i.push(u);
		}
		return i;
	}
	update(t, e) {
		if (this._properties.size === 0) {
			Object.assign(t, e);
			return;
		}
		const s = this._createAnimations(t, e);
		if (s.length) return ue.add(this._chart, s), !0;
	}
}
function jm(n, t) {
	const e = [],
		s = Object.keys(t);
	for (let i = 0; i < s.length; i++) {
		const r = n[s[i]];
		r && r.active() && e.push(r.wait());
	}
	return Promise.all(e);
}
function Hm(n, t) {
	if (!t) return;
	let e = n.options;
	if (!e) {
		n.options = t;
		return;
	}
	return (
		e.$shared &&
			(n.options = e = Object.assign({}, e, { $shared: !1, $animations: {} })),
		e
	);
}
function bl(n, t) {
	const e = (n && n.options) || {},
		s = e.reverse,
		i = e.min === void 0 ? t : 0,
		r = e.max === void 0 ? t : 0;
	return { start: s ? r : i, end: s ? i : r };
}
function Wm(n, t, e) {
	if (e === !1) return !1;
	const s = bl(n, e),
		i = bl(t, e);
	return { top: i.end, right: s.end, bottom: i.start, left: s.start };
}
function qm(n) {
	let t, e, s, i;
	return (
		U(n)
			? ((t = n.top), (e = n.right), (s = n.bottom), (i = n.left))
			: (t = e = s = i = n),
		{ top: t, right: e, bottom: s, left: i, disabled: n === !1 }
	);
}
function Qu(n, t) {
	const e = [],
		s = n._getSortedDatasetMetas(t);
	let i, r;
	for (i = 0, r = s.length; i < r; ++i) e.push(s[i].index);
	return e;
}
function vl(n, t, e, s = {}) {
	const i = n.keys,
		r = s.mode === "single";
	let o, a, c, l;
	if (t !== null) {
		for (o = 0, a = i.length; o < a; ++o) {
			if (((c = +i[o]), c === e)) {
				if (s.all) continue;
				break;
			}
			(l = n.values[c]), ot(l) && (r || t === 0 || ie(t) === ie(l)) && (t += l);
		}
		return t;
	}
}
function Km(n) {
	const t = Object.keys(n),
		e = new Array(t.length);
	let s, i, r;
	for (s = 0, i = t.length; s < i; ++s) (r = t[s]), (e[s] = { x: r, y: n[r] });
	return e;
}
function xl(n, t) {
	const e = n && n.options.stacked;
	return e || (e === void 0 && t.stack !== void 0);
}
function Ym(n, t, e) {
	return `${n.id}.${t.id}.${e.stack || e.type}`;
}
function Gm(n) {
	const { min: t, max: e, minDefined: s, maxDefined: i } = n.getUserBounds();
	return {
		min: s ? t : Number.NEGATIVE_INFINITY,
		max: i ? e : Number.POSITIVE_INFINITY,
	};
}
function Xm(n, t, e) {
	const s = n[t] || (n[t] = {});
	return s[e] || (s[e] = {});
}
function _l(n, t, e, s) {
	for (const i of t.getMatchingVisibleMetas(s).reverse()) {
		const r = n[i.index];
		if ((e && r > 0) || (!e && r < 0)) return i.index;
	}
	return null;
}
function wl(n, t) {
	const { chart: e, _cachedMeta: s } = n,
		i = e._stacks || (e._stacks = {}),
		{ iScale: r, vScale: o, index: a } = s,
		c = r.axis,
		l = o.axis,
		h = Ym(r, o, s),
		u = t.length;
	let d;
	for (let f = 0; f < u; ++f) {
		const g = t[f],
			{ [c]: p, [l]: m } = g,
			b = g._stacks || (g._stacks = {});
		(d = b[l] = Xm(i, h, p)),
			(d[a] = m),
			(d._top = _l(d, o, !0, s.type)),
			(d._bottom = _l(d, o, !1, s.type));
		const y = d._visualValues || (d._visualValues = {});
		y[a] = m;
	}
}
function xo(n, t) {
	const e = n.scales;
	return Object.keys(e)
		.filter((s) => e[s].axis === t)
		.shift();
}
function Qm(n, t) {
	return Ye(n, {
		active: !1,
		dataset: void 0,
		datasetIndex: t,
		index: t,
		mode: "default",
		type: "dataset",
	});
}
function Jm(n, t, e) {
	return Ye(n, {
		active: !1,
		dataIndex: t,
		parsed: void 0,
		raw: void 0,
		element: e,
		index: t,
		mode: "default",
		type: "data",
	});
}
function as(n, t) {
	const e = n.controller.index,
		s = n.vScale && n.vScale.axis;
	if (s) {
		t = t || n._parsed;
		for (const i of t) {
			const r = i._stacks;
			if (!r || r[s] === void 0 || r[s][e] === void 0) return;
			delete r[s][e],
				r[s]._visualValues !== void 0 &&
					r[s]._visualValues[e] !== void 0 &&
					delete r[s]._visualValues[e];
		}
	}
}
const _o = (n) => n === "reset" || n === "none",
	Sl = (n, t) => (t ? n : Object.assign({}, n)),
	Zm = (n, t, e) =>
		n && !t.hidden && t._stacked && { keys: Qu(e, !0), values: null };
class Ce {
	static defaults = {};
	static datasetElementType = null;
	static dataElementType = null;
	constructor(t, e) {
		(this.chart = t),
			(this._ctx = t.ctx),
			(this.index = e),
			(this._cachedDataOpts = {}),
			(this._cachedMeta = this.getMeta()),
			(this._type = this._cachedMeta.type),
			(this.options = void 0),
			(this._parsing = !1),
			(this._data = void 0),
			(this._objectData = void 0),
			(this._sharedOptions = void 0),
			(this._drawStart = void 0),
			(this._drawCount = void 0),
			(this.enableOptionSharing = !1),
			(this.supportsDecimation = !1),
			(this.$context = void 0),
			(this._syncList = []),
			(this.datasetElementType = new.target.datasetElementType),
			(this.dataElementType = new.target.dataElementType),
			this.initialize();
	}
	initialize() {
		const t = this._cachedMeta;
		this.configure(),
			this.linkScales(),
			(t._stacked = xl(t.vScale, t)),
			this.addElements(),
			this.options.fill &&
				!this.chart.isPluginEnabled("filler") &&
				console.warn(
					"Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options",
				);
	}
	updateIndex(t) {
		this.index !== t && as(this._cachedMeta), (this.index = t);
	}
	linkScales() {
		const t = this.chart,
			e = this._cachedMeta,
			s = this.getDataset(),
			i = (u, d, f, g) => (u === "x" ? d : u === "r" ? g : f),
			r = (e.xAxisID = B(s.xAxisID, xo(t, "x"))),
			o = (e.yAxisID = B(s.yAxisID, xo(t, "y"))),
			a = (e.rAxisID = B(s.rAxisID, xo(t, "r"))),
			c = e.indexAxis,
			l = (e.iAxisID = i(c, r, o, a)),
			h = (e.vAxisID = i(c, o, r, a));
		(e.xScale = this.getScaleForId(r)),
			(e.yScale = this.getScaleForId(o)),
			(e.rScale = this.getScaleForId(a)),
			(e.iScale = this.getScaleForId(l)),
			(e.vScale = this.getScaleForId(h));
	}
	getDataset() {
		return this.chart.data.datasets[this.index];
	}
	getMeta() {
		return this.chart.getDatasetMeta(this.index);
	}
	getScaleForId(t) {
		return this.chart.scales[t];
	}
	_getOtherScale(t) {
		const e = this._cachedMeta;
		return t === e.iScale ? e.vScale : e.iScale;
	}
	reset() {
		this._update("reset");
	}
	_destroy() {
		const t = this._cachedMeta;
		this._data && il(this._data, this), t._stacked && as(t);
	}
	_dataCheck() {
		const t = this.getDataset(),
			e = t.data || (t.data = []),
			s = this._data;
		if (U(e)) this._data = Km(e);
		else if (s !== e) {
			if (s) {
				il(s, this);
				const i = this._cachedMeta;
				as(i), (i._parsed = []);
			}
			e && Object.isExtensible(e) && Bp(e, this),
				(this._syncList = []),
				(this._data = e);
		}
	}
	addElements() {
		const t = this._cachedMeta;
		this._dataCheck(),
			this.datasetElementType && (t.dataset = new this.datasetElementType());
	}
	buildOrUpdateElements(t) {
		const e = this._cachedMeta,
			s = this.getDataset();
		let i = !1;
		this._dataCheck();
		const r = e._stacked;
		(e._stacked = xl(e.vScale, e)),
			e.stack !== s.stack && ((i = !0), as(e), (e.stack = s.stack)),
			this._resyncElements(t),
			(i || r !== e._stacked) && wl(this, e._parsed);
	}
	configure() {
		const t = this.chart.config,
			e = t.datasetScopeKeys(this._type),
			s = t.getOptionScopes(this.getDataset(), e, !0);
		(this.options = t.createResolver(s, this.getContext())),
			(this._parsing = this.options.parsing),
			(this._cachedDataOpts = {});
	}
	parse(t, e) {
		const { _cachedMeta: s, _data: i } = this,
			{ iScale: r, _stacked: o } = s,
			a = r.axis;
		let c = t === 0 && e === i.length ? !0 : s._sorted,
			l = t > 0 && s._parsed[t - 1],
			h,
			u,
			d;
		if (this._parsing === !1) (s._parsed = i), (s._sorted = !0), (d = i);
		else {
			J(i[t])
				? (d = this.parseArrayData(s, i, t, e))
				: U(i[t])
				? (d = this.parseObjectData(s, i, t, e))
				: (d = this.parsePrimitiveData(s, i, t, e));
			const f = () => u[a] === null || (l && u[a] < l[a]);
			for (h = 0; h < e; ++h)
				(s._parsed[h + t] = u = d[h]), c && (f() && (c = !1), (l = u));
			s._sorted = c;
		}
		o && wl(this, d);
	}
	parsePrimitiveData(t, e, s, i) {
		const { iScale: r, vScale: o } = t,
			a = r.axis,
			c = o.axis,
			l = r.getLabels(),
			h = r === o,
			u = new Array(i);
		let d, f, g;
		for (d = 0, f = i; d < f; ++d)
			(g = d + s),
				(u[d] = { [a]: h || r.parse(l[g], g), [c]: o.parse(e[g], g) });
		return u;
	}
	parseArrayData(t, e, s, i) {
		const { xScale: r, yScale: o } = t,
			a = new Array(i);
		let c, l, h, u;
		for (c = 0, l = i; c < l; ++c)
			(h = c + s),
				(u = e[h]),
				(a[c] = { x: r.parse(u[0], h), y: o.parse(u[1], h) });
		return a;
	}
	parseObjectData(t, e, s, i) {
		const { xScale: r, yScale: o } = t,
			{ xAxisKey: a = "x", yAxisKey: c = "y" } = this._parsing,
			l = new Array(i);
		let h, u, d, f;
		for (h = 0, u = i; h < u; ++h)
			(d = h + s),
				(f = e[d]),
				(l[h] = { x: r.parse(je(f, a), d), y: o.parse(je(f, c), d) });
		return l;
	}
	getParsed(t) {
		return this._cachedMeta._parsed[t];
	}
	getDataElement(t) {
		return this._cachedMeta.data[t];
	}
	applyStack(t, e, s) {
		const i = this.chart,
			r = this._cachedMeta,
			o = e[t.axis],
			a = { keys: Qu(i, !0), values: e._stacks[t.axis]._visualValues };
		return vl(a, o, r.index, { mode: s });
	}
	updateRangeFromParsed(t, e, s, i) {
		const r = s[e.axis];
		let o = r === null ? NaN : r;
		const a = i && s._stacks[e.axis];
		i && a && ((i.values = a), (o = vl(i, r, this._cachedMeta.index))),
			(t.min = Math.min(t.min, o)),
			(t.max = Math.max(t.max, o));
	}
	getMinMax(t, e) {
		const s = this._cachedMeta,
			i = s._parsed,
			r = s._sorted && t === s.iScale,
			o = i.length,
			a = this._getOtherScale(t),
			c = Zm(e, s, this.chart),
			l = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
			{ min: h, max: u } = Gm(a);
		let d, f;
		function g() {
			f = i[d];
			const p = f[a.axis];
			return !ot(f[t.axis]) || h > p || u < p;
		}
		for (
			d = 0;
			d < o && !(!g() && (this.updateRangeFromParsed(l, t, f, c), r));
			++d
		);
		if (r) {
			for (d = o - 1; d >= 0; --d)
				if (!g()) {
					this.updateRangeFromParsed(l, t, f, c);
					break;
				}
		}
		return l;
	}
	getAllParsedValues(t) {
		const e = this._cachedMeta._parsed,
			s = [];
		let i, r, o;
		for (i = 0, r = e.length; i < r; ++i)
			(o = e[i][t.axis]), ot(o) && s.push(o);
		return s;
	}
	getMaxOverflow() {
		return !1;
	}
	getLabelAndValue(t) {
		const e = this._cachedMeta,
			s = e.iScale,
			i = e.vScale,
			r = this.getParsed(t);
		return {
			label: s ? "" + s.getLabelForValue(r[s.axis]) : "",
			value: i ? "" + i.getLabelForValue(r[i.axis]) : "",
		};
	}
	_update(t) {
		const e = this._cachedMeta;
		this.update(t || "default"),
			(e._clip = qm(
				B(this.options.clip, Wm(e.xScale, e.yScale, this.getMaxOverflow())),
			));
	}
	update(t) {}
	draw() {
		const t = this._ctx,
			e = this.chart,
			s = this._cachedMeta,
			i = s.data || [],
			r = e.chartArea,
			o = [],
			a = this._drawStart || 0,
			c = this._drawCount || i.length - a,
			l = this.options.drawActiveElementsOnTop;
		let h;
		for (s.dataset && s.dataset.draw(t, r, a, c), h = a; h < a + c; ++h) {
			const u = i[h];
			u.hidden || (u.active && l ? o.push(u) : u.draw(t, r));
		}
		for (h = 0; h < o.length; ++h) o[h].draw(t, r);
	}
	getStyle(t, e) {
		const s = e ? "active" : "default";
		return t === void 0 && this._cachedMeta.dataset
			? this.resolveDatasetElementOptions(s)
			: this.resolveDataElementOptions(t || 0, s);
	}
	getContext(t, e, s) {
		const i = this.getDataset();
		let r;
		if (t >= 0 && t < this._cachedMeta.data.length) {
			const o = this._cachedMeta.data[t];
			(r = o.$context || (o.$context = Jm(this.getContext(), t, o))),
				(r.parsed = this.getParsed(t)),
				(r.raw = i.data[t]),
				(r.index = r.dataIndex = t);
		} else
			(r =
				this.$context ||
				(this.$context = Qm(this.chart.getContext(), this.index))),
				(r.dataset = i),
				(r.index = r.datasetIndex = this.index);
		return (r.active = !!e), (r.mode = s), r;
	}
	resolveDatasetElementOptions(t) {
		return this._resolveElementOptions(this.datasetElementType.id, t);
	}
	resolveDataElementOptions(t, e) {
		return this._resolveElementOptions(this.dataElementType.id, e, t);
	}
	_resolveElementOptions(t, e = "default", s) {
		const i = e === "active",
			r = this._cachedDataOpts,
			o = t + "-" + e,
			a = r[o],
			c = this.enableOptionSharing && Yt(s);
		if (a) return Sl(a, c);
		const l = this.chart.config,
			h = l.datasetElementScopeKeys(this._type, t),
			u = i ? [`${t}Hover`, "hover", t, ""] : [t, ""],
			d = l.getOptionScopes(this.getDataset(), h),
			f = Object.keys(ht.elements[t]),
			g = () => this.getContext(s, i, e),
			p = l.resolveNamedOptions(d, f, g, u);
		return p.$shared && ((p.$shared = c), (r[o] = Object.freeze(Sl(p, c)))), p;
	}
	_resolveAnimations(t, e, s) {
		const i = this.chart,
			r = this._cachedDataOpts,
			o = `animation-${e}`,
			a = r[o];
		if (a) return a;
		let c;
		if (i.options.animation !== !1) {
			const h = this.chart.config,
				u = h.datasetAnimationScopeKeys(this._type, e),
				d = h.getOptionScopes(this.getDataset(), u);
			c = h.createResolver(d, this.getContext(t, s, e));
		}
		const l = new Xu(i, c && c.animations);
		return c && c._cacheable && (r[o] = Object.freeze(l)), l;
	}
	getSharedOptions(t) {
		if (t.$shared)
			return (
				this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
			);
	}
	includeOptions(t, e) {
		return !e || _o(t) || this.chart._animationsDisabled;
	}
	_getSharedOptions(t, e) {
		const s = this.resolveDataElementOptions(t, e),
			i = this._sharedOptions,
			r = this.getSharedOptions(s),
			o = this.includeOptions(e, r) || r !== i;
		return (
			this.updateSharedOptions(r, e, s), { sharedOptions: r, includeOptions: o }
		);
	}
	updateElement(t, e, s, i) {
		_o(i) ? Object.assign(t, s) : this._resolveAnimations(e, i).update(t, s);
	}
	updateSharedOptions(t, e, s) {
		t && !_o(e) && this._resolveAnimations(void 0, e).update(t, s);
	}
	_setStyle(t, e, s, i) {
		t.active = i;
		const r = this.getStyle(e, i);
		this._resolveAnimations(e, s, i).update(t, {
			options: (!i && this.getSharedOptions(r)) || r,
		});
	}
	removeHoverStyle(t, e, s) {
		this._setStyle(t, s, "active", !1);
	}
	setHoverStyle(t, e, s) {
		this._setStyle(t, s, "active", !0);
	}
	_removeDatasetHoverStyle() {
		const t = this._cachedMeta.dataset;
		t && this._setStyle(t, void 0, "active", !1);
	}
	_setDatasetHoverStyle() {
		const t = this._cachedMeta.dataset;
		t && this._setStyle(t, void 0, "active", !0);
	}
	_resyncElements(t) {
		const e = this._data,
			s = this._cachedMeta.data;
		for (const [a, c, l] of this._syncList) this[a](c, l);
		this._syncList = [];
		const i = s.length,
			r = e.length,
			o = Math.min(r, i);
		o && this.parse(0, o),
			r > i
				? this._insertElements(i, r - i, t)
				: r < i && this._removeElements(r, i - r);
	}
	_insertElements(t, e, s = !0) {
		const i = this._cachedMeta,
			r = i.data,
			o = t + e;
		let a;
		const c = (l) => {
			for (l.length += e, a = l.length - 1; a >= o; a--) l[a] = l[a - e];
		};
		for (c(r), a = t; a < o; ++a) r[a] = new this.dataElementType();
		this._parsing && c(i._parsed),
			this.parse(t, e),
			s && this.updateElements(r, t, e, "reset");
	}
	updateElements(t, e, s, i) {}
	_removeElements(t, e) {
		const s = this._cachedMeta;
		if (this._parsing) {
			const i = s._parsed.splice(t, e);
			s._stacked && as(s, i);
		}
		s.data.splice(t, e);
	}
	_sync(t) {
		if (this._parsing) this._syncList.push(t);
		else {
			const [e, s, i] = t;
			this[e](s, i);
		}
		this.chart._dataChanges.push([this.index, ...t]);
	}
	_onDataPush() {
		const t = arguments.length;
		this._sync(["_insertElements", this.getDataset().data.length - t, t]);
	}
	_onDataPop() {
		this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
	}
	_onDataShift() {
		this._sync(["_removeElements", 0, 1]);
	}
	_onDataSplice(t, e) {
		e && this._sync(["_removeElements", t, e]);
		const s = arguments.length - 2;
		s && this._sync(["_insertElements", t, s]);
	}
	_onDataUnshift() {
		this._sync(["_insertElements", 0, arguments.length]);
	}
}
function ty(n, t) {
	if (!n._cache.$bar) {
		const e = n.getMatchingVisibleMetas(t);
		let s = [];
		for (let i = 0, r = e.length; i < r; i++)
			s = s.concat(e[i].controller.getAllParsedValues(n));
		n._cache.$bar = Mu(s.sort((i, r) => i - r));
	}
	return n._cache.$bar;
}
function ey(n) {
	const t = n.iScale,
		e = ty(t, n.type);
	let s = t._length,
		i,
		r,
		o,
		a;
	const c = () => {
		o === 32767 ||
			o === -32768 ||
			(Yt(a) && (s = Math.min(s, Math.abs(o - a) || s)), (a = o));
	};
	for (i = 0, r = e.length; i < r; ++i) (o = t.getPixelForValue(e[i])), c();
	for (a = void 0, i = 0, r = t.ticks.length; i < r; ++i)
		(o = t.getPixelForTick(i)), c();
	return s;
}
function ny(n, t, e, s) {
	const i = e.barThickness;
	let r, o;
	return (
		q(i)
			? ((r = t.min * e.categoryPercentage), (o = e.barPercentage))
			: ((r = i * s), (o = 1)),
		{ chunk: r / s, ratio: o, start: t.pixels[n] - r / 2 }
	);
}
function sy(n, t, e, s) {
	const i = t.pixels,
		r = i[n];
	let o = n > 0 ? i[n - 1] : null,
		a = n < i.length - 1 ? i[n + 1] : null;
	const c = e.categoryPercentage;
	o === null && (o = r - (a === null ? t.end - t.start : a - r)),
		a === null && (a = r + r - o);
	const l = r - ((r - Math.min(o, a)) / 2) * c;
	return {
		chunk: ((Math.abs(a - o) / 2) * c) / s,
		ratio: e.barPercentage,
		start: l,
	};
}
function iy(n, t, e, s) {
	const i = e.parse(n[0], s),
		r = e.parse(n[1], s),
		o = Math.min(i, r),
		a = Math.max(i, r);
	let c = o,
		l = a;
	Math.abs(o) > Math.abs(a) && ((c = a), (l = o)),
		(t[e.axis] = l),
		(t._custom = { barStart: c, barEnd: l, start: i, end: r, min: o, max: a });
}
function Ju(n, t, e, s) {
	return J(n) ? iy(n, t, e, s) : (t[e.axis] = e.parse(n, s)), t;
}
function El(n, t, e, s) {
	const i = n.iScale,
		r = n.vScale,
		o = i.getLabels(),
		a = i === r,
		c = [];
	let l, h, u, d;
	for (l = e, h = e + s; l < h; ++l)
		(d = t[l]),
			(u = {}),
			(u[i.axis] = a || i.parse(o[l], l)),
			c.push(Ju(d, u, r, l));
	return c;
}
function wo(n) {
	return n && n.barStart !== void 0 && n.barEnd !== void 0;
}
function ry(n, t, e) {
	return n !== 0 ? ie(n) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1);
}
function oy(n) {
	let t, e, s, i, r;
	return (
		n.horizontal
			? ((t = n.base > n.x), (e = "left"), (s = "right"))
			: ((t = n.base < n.y), (e = "bottom"), (s = "top")),
		t ? ((i = "end"), (r = "start")) : ((i = "start"), (r = "end")),
		{ start: e, end: s, reverse: t, top: i, bottom: r }
	);
}
function ay(n, t, e, s) {
	let i = t.borderSkipped;
	const r = {};
	if (!i) {
		n.borderSkipped = r;
		return;
	}
	if (i === !0) {
		n.borderSkipped = { top: !0, right: !0, bottom: !0, left: !0 };
		return;
	}
	const { start: o, end: a, reverse: c, top: l, bottom: h } = oy(n);
	i === "middle" &&
		e &&
		((n.enableBorderRadius = !0),
		(e._top || 0) === s
			? (i = l)
			: (e._bottom || 0) === s
			? (i = h)
			: ((r[kl(h, o, a, c)] = !0), (i = l))),
		(r[kl(i, o, a, c)] = !0),
		(n.borderSkipped = r);
}
function kl(n, t, e, s) {
	return s ? ((n = cy(n, t, e)), (n = Cl(n, e, t))) : (n = Cl(n, t, e)), n;
}
function cy(n, t, e) {
	return n === t ? e : n === e ? t : n;
}
function Cl(n, t, e) {
	return n === "start" ? t : n === "end" ? e : n;
}
function ly(n, { inflateAmount: t }, e) {
	n.inflateAmount = t === "auto" ? (e === 1 ? 0.33 : 0) : t;
}
class hy extends Ce {
	static id = "bar";
	static defaults = {
		datasetElementType: !1,
		dataElementType: "bar",
		categoryPercentage: 0.8,
		barPercentage: 0.9,
		grouped: !0,
		animations: {
			numbers: {
				type: "number",
				properties: ["x", "y", "base", "width", "height"],
			},
		},
	};
	static overrides = {
		scales: {
			_index_: { type: "category", offset: !0, grid: { offset: !0 } },
			_value_: { type: "linear", beginAtZero: !0 },
		},
	};
	parsePrimitiveData(t, e, s, i) {
		return El(t, e, s, i);
	}
	parseArrayData(t, e, s, i) {
		return El(t, e, s, i);
	}
	parseObjectData(t, e, s, i) {
		const { iScale: r, vScale: o } = t,
			{ xAxisKey: a = "x", yAxisKey: c = "y" } = this._parsing,
			l = r.axis === "x" ? a : c,
			h = o.axis === "x" ? a : c,
			u = [];
		let d, f, g, p;
		for (d = s, f = s + i; d < f; ++d)
			(p = e[d]),
				(g = {}),
				(g[r.axis] = r.parse(je(p, l), d)),
				u.push(Ju(je(p, h), g, o, d));
		return u;
	}
	updateRangeFromParsed(t, e, s, i) {
		super.updateRangeFromParsed(t, e, s, i);
		const r = s._custom;
		r &&
			e === this._cachedMeta.vScale &&
			((t.min = Math.min(t.min, r.min)), (t.max = Math.max(t.max, r.max)));
	}
	getMaxOverflow() {
		return 0;
	}
	getLabelAndValue(t) {
		const e = this._cachedMeta,
			{ iScale: s, vScale: i } = e,
			r = this.getParsed(t),
			o = r._custom,
			a = wo(o)
				? "[" + o.start + ", " + o.end + "]"
				: "" + i.getLabelForValue(r[i.axis]);
		return { label: "" + s.getLabelForValue(r[s.axis]), value: a };
	}
	initialize() {
		(this.enableOptionSharing = !0), super.initialize();
		const t = this._cachedMeta;
		t.stack = this.getDataset().stack;
	}
	update(t) {
		const e = this._cachedMeta;
		this.updateElements(e.data, 0, e.data.length, t);
	}
	updateElements(t, e, s, i) {
		const r = i === "reset",
			{
				index: o,
				_cachedMeta: { vScale: a },
			} = this,
			c = a.getBasePixel(),
			l = a.isHorizontal(),
			h = this._getRuler(),
			{ sharedOptions: u, includeOptions: d } = this._getSharedOptions(e, i);
		for (let f = e; f < e + s; f++) {
			const g = this.getParsed(f),
				p =
					r || q(g[a.axis])
						? { base: c, head: c }
						: this._calculateBarValuePixels(f),
				m = this._calculateBarIndexPixels(f, h),
				b = (g._stacks || {})[a.axis],
				y = {
					horizontal: l,
					base: p.base,
					enableBorderRadius:
						!b || wo(g._custom) || o === b._top || o === b._bottom,
					x: l ? p.head : m.center,
					y: l ? m.center : p.head,
					height: l ? m.size : Math.abs(p.size),
					width: l ? Math.abs(p.size) : m.size,
				};
			d &&
				(y.options =
					u || this.resolveDataElementOptions(f, t[f].active ? "active" : i));
			const v = y.options || t[f].options;
			ay(y, v, b, o), ly(y, v, h.ratio), this.updateElement(t[f], f, y, i);
		}
	}
	_getStacks(t, e) {
		const { iScale: s } = this._cachedMeta,
			i = s
				.getMatchingVisibleMetas(this._type)
				.filter((c) => c.controller.options.grouped),
			r = s.options.stacked,
			o = [],
			a = (c) => {
				const l = c.controller.getParsed(e),
					h = l && l[c.vScale.axis];
				if (q(h) || isNaN(h)) return !0;
			};
		for (const c of i)
			if (
				!(e !== void 0 && a(c)) &&
				((r === !1 ||
					o.indexOf(c.stack) === -1 ||
					(r === void 0 && c.stack === void 0)) &&
					o.push(c.stack),
				c.index === t)
			)
				break;
		return o.length || o.push(void 0), o;
	}
	_getStackCount(t) {
		return this._getStacks(void 0, t).length;
	}
	_getStackIndex(t, e, s) {
		const i = this._getStacks(t, s),
			r = e !== void 0 ? i.indexOf(e) : -1;
		return r === -1 ? i.length - 1 : r;
	}
	_getRuler() {
		const t = this.options,
			e = this._cachedMeta,
			s = e.iScale,
			i = [];
		let r, o;
		for (r = 0, o = e.data.length; r < o; ++r)
			i.push(s.getPixelForValue(this.getParsed(r)[s.axis], r));
		const a = t.barThickness;
		return {
			min: a || ey(e),
			pixels: i,
			start: s._startPixel,
			end: s._endPixel,
			stackCount: this._getStackCount(),
			scale: s,
			grouped: t.grouped,
			ratio: a ? 1 : t.categoryPercentage * t.barPercentage,
		};
	}
	_calculateBarValuePixels(t) {
		const {
				_cachedMeta: { vScale: e, _stacked: s, index: i },
				options: { base: r, minBarLength: o },
			} = this,
			a = r || 0,
			c = this.getParsed(t),
			l = c._custom,
			h = wo(l);
		let u = c[e.axis],
			d = 0,
			f = s ? this.applyStack(e, c, s) : u,
			g,
			p;
		f !== u && ((d = f - u), (f = u)),
			h &&
				((u = l.barStart),
				(f = l.barEnd - l.barStart),
				u !== 0 && ie(u) !== ie(l.barEnd) && (d = 0),
				(d += u));
		const m = !q(r) && !h ? r : d;
		let b = e.getPixelForValue(m);
		if (
			(this.chart.getDataVisibility(t)
				? (g = e.getPixelForValue(d + f))
				: (g = b),
			(p = g - b),
			Math.abs(p) < o)
		) {
			(p = ry(p, e, a) * o), u === a && (b -= p / 2);
			const y = e.getPixelForDecimal(0),
				v = e.getPixelForDecimal(1),
				_ = Math.min(y, v),
				x = Math.max(y, v);
			(b = Math.max(Math.min(b, x), _)),
				(g = b + p),
				s &&
					!h &&
					(c._stacks[e.axis]._visualValues[i] =
						e.getValueForPixel(g) - e.getValueForPixel(b));
		}
		if (b === e.getPixelForValue(a)) {
			const y = (ie(p) * e.getLineWidthForValue(a)) / 2;
			(b += y), (p -= y);
		}
		return { size: p, base: b, head: g, center: g + p / 2 };
	}
	_calculateBarIndexPixels(t, e) {
		const s = e.scale,
			i = this.options,
			r = i.skipNull,
			o = B(i.maxBarThickness, 1 / 0);
		let a, c;
		if (e.grouped) {
			const l = r ? this._getStackCount(t) : e.stackCount,
				h = i.barThickness === "flex" ? sy(t, e, i, l) : ny(t, e, i, l),
				u = this._getStackIndex(
					this.index,
					this._cachedMeta.stack,
					r ? t : void 0,
				);
			(a = h.start + h.chunk * u + h.chunk / 2),
				(c = Math.min(o, h.chunk * h.ratio));
		} else
			(a = s.getPixelForValue(this.getParsed(t)[s.axis], t)),
				(c = Math.min(o, e.min * e.ratio));
		return { base: a - c / 2, head: a + c / 2, center: a, size: c };
	}
	draw() {
		const t = this._cachedMeta,
			e = t.vScale,
			s = t.data,
			i = s.length;
		let r = 0;
		for (; r < i; ++r)
			this.getParsed(r)[e.axis] !== null && s[r].draw(this._ctx);
	}
}
class uy extends Ce {
	static id = "bubble";
	static defaults = {
		datasetElementType: !1,
		dataElementType: "point",
		animations: {
			numbers: {
				type: "number",
				properties: ["x", "y", "borderWidth", "radius"],
			},
		},
	};
	static overrides = {
		scales: { x: { type: "linear" }, y: { type: "linear" } },
	};
	initialize() {
		(this.enableOptionSharing = !0), super.initialize();
	}
	parsePrimitiveData(t, e, s, i) {
		const r = super.parsePrimitiveData(t, e, s, i);
		for (let o = 0; o < r.length; o++)
			r[o]._custom = this.resolveDataElementOptions(o + s).radius;
		return r;
	}
	parseArrayData(t, e, s, i) {
		const r = super.parseArrayData(t, e, s, i);
		for (let o = 0; o < r.length; o++) {
			const a = e[s + o];
			r[o]._custom = B(a[2], this.resolveDataElementOptions(o + s).radius);
		}
		return r;
	}
	parseObjectData(t, e, s, i) {
		const r = super.parseObjectData(t, e, s, i);
		for (let o = 0; o < r.length; o++) {
			const a = e[s + o];
			r[o]._custom = B(
				a && a.r && +a.r,
				this.resolveDataElementOptions(o + s).radius,
			);
		}
		return r;
	}
	getMaxOverflow() {
		const t = this._cachedMeta.data;
		let e = 0;
		for (let s = t.length - 1; s >= 0; --s)
			e = Math.max(e, t[s].size(this.resolveDataElementOptions(s)) / 2);
		return e > 0 && e;
	}
	getLabelAndValue(t) {
		const e = this._cachedMeta,
			s = this.chart.data.labels || [],
			{ xScale: i, yScale: r } = e,
			o = this.getParsed(t),
			a = i.getLabelForValue(o.x),
			c = r.getLabelForValue(o.y),
			l = o._custom;
		return {
			label: s[t] || "",
			value: "(" + a + ", " + c + (l ? ", " + l : "") + ")",
		};
	}
	update(t) {
		const e = this._cachedMeta.data;
		this.updateElements(e, 0, e.length, t);
	}
	updateElements(t, e, s, i) {
		const r = i === "reset",
			{ iScale: o, vScale: a } = this._cachedMeta,
			{ sharedOptions: c, includeOptions: l } = this._getSharedOptions(e, i),
			h = o.axis,
			u = a.axis;
		for (let d = e; d < e + s; d++) {
			const f = t[d],
				g = !r && this.getParsed(d),
				p = {},
				m = (p[h] = r ? o.getPixelForDecimal(0.5) : o.getPixelForValue(g[h])),
				b = (p[u] = r ? a.getBasePixel() : a.getPixelForValue(g[u]));
			(p.skip = isNaN(m) || isNaN(b)),
				l &&
					((p.options =
						c || this.resolveDataElementOptions(d, f.active ? "active" : i)),
					r && (p.options.radius = 0)),
				this.updateElement(f, d, p, i);
		}
	}
	resolveDataElementOptions(t, e) {
		const s = this.getParsed(t);
		let i = super.resolveDataElementOptions(t, e);
		i.$shared && (i = Object.assign({}, i, { $shared: !1 }));
		const r = i.radius;
		return (
			e !== "active" && (i.radius = 0), (i.radius += B(s && s._custom, r)), i
		);
	}
}
function dy(n, t, e) {
	let s = 1,
		i = 1,
		r = 0,
		o = 0;
	if (t < Z) {
		const a = n,
			c = a + t,
			l = Math.cos(a),
			h = Math.sin(a),
			u = Math.cos(c),
			d = Math.sin(c),
			f = (v, _, x) => (Ls(v, a, c, !0) ? 1 : Math.max(_, _ * e, x, x * e)),
			g = (v, _, x) => (Ls(v, a, c, !0) ? -1 : Math.min(_, _ * e, x, x * e)),
			p = f(0, l, u),
			m = f(at, h, d),
			b = g(it, l, u),
			y = g(it + at, h, d);
		(s = (p - b) / 2),
			(i = (m - y) / 2),
			(r = -(p + b) / 2),
			(o = -(m + y) / 2);
	}
	return { ratioX: s, ratioY: i, offsetX: r, offsetY: o };
}
class qa extends Ce {
	static id = "doughnut";
	static defaults = {
		datasetElementType: !1,
		dataElementType: "arc",
		animation: { animateRotate: !0, animateScale: !1 },
		animations: {
			numbers: {
				type: "number",
				properties: [
					"circumference",
					"endAngle",
					"innerRadius",
					"outerRadius",
					"startAngle",
					"x",
					"y",
					"offset",
					"borderWidth",
					"spacing",
				],
			},
		},
		cutout: "50%",
		rotation: 0,
		circumference: 360,
		radius: "100%",
		spacing: 0,
		indexAxis: "r",
	};
	static descriptors = {
		_scriptable: (t) => t !== "spacing",
		_indexable: (t) => t !== "spacing",
	};
	static overrides = {
		aspectRatio: 1,
		plugins: {
			legend: {
				labels: {
					generateLabels(t) {
						const e = t.data;
						if (e.labels.length && e.datasets.length) {
							const {
								labels: { pointStyle: s, color: i },
							} = t.legend.options;
							return e.labels.map((r, o) => {
								const c = t.getDatasetMeta(0).controller.getStyle(o);
								return {
									text: r,
									fillStyle: c.backgroundColor,
									strokeStyle: c.borderColor,
									fontColor: i,
									lineWidth: c.borderWidth,
									pointStyle: s,
									hidden: !t.getDataVisibility(o),
									index: o,
								};
							});
						}
						return [];
					},
				},
				onClick(t, e, s) {
					s.chart.toggleDataVisibility(e.index), s.chart.update();
				},
			},
		},
	};
	constructor(t, e) {
		super(t, e),
			(this.enableOptionSharing = !0),
			(this.innerRadius = void 0),
			(this.outerRadius = void 0),
			(this.offsetX = void 0),
			(this.offsetY = void 0);
	}
	linkScales() {}
	parse(t, e) {
		const s = this.getDataset().data,
			i = this._cachedMeta;
		if (this._parsing === !1) i._parsed = s;
		else {
			let r = (c) => +s[c];
			if (U(s[t])) {
				const { key: c = "value" } = this._parsing;
				r = (l) => +je(s[l], c);
			}
			let o, a;
			for (o = t, a = t + e; o < a; ++o) i._parsed[o] = r(o);
		}
	}
	_getRotation() {
		return Qt(this.options.rotation - 90);
	}
	_getCircumference() {
		return Qt(this.options.circumference);
	}
	_getRotationExtents() {
		let t = Z,
			e = -Z;
		for (let s = 0; s < this.chart.data.datasets.length; ++s)
			if (
				this.chart.isDatasetVisible(s) &&
				this.chart.getDatasetMeta(s).type === this._type
			) {
				const i = this.chart.getDatasetMeta(s).controller,
					r = i._getRotation(),
					o = i._getCircumference();
				(t = Math.min(t, r)), (e = Math.max(e, r + o));
			}
		return { rotation: t, circumference: e - t };
	}
	update(t) {
		const e = this.chart,
			{ chartArea: s } = e,
			i = this._cachedMeta,
			r = i.data,
			o =
				this.getMaxBorderWidth() + this.getMaxOffset(r) + this.options.spacing,
			a = Math.max((Math.min(s.width, s.height) - o) / 2, 0),
			c = Math.min(Ep(this.options.cutout, a), 1),
			l = this._getRingWeight(this.index),
			{ circumference: h, rotation: u } = this._getRotationExtents(),
			{ ratioX: d, ratioY: f, offsetX: g, offsetY: p } = dy(u, h, c),
			m = (s.width - o) / d,
			b = (s.height - o) / f,
			y = Math.max(Math.min(m, b) / 2, 0),
			v = Eu(this.options.radius, y),
			_ = Math.max(v * c, 0),
			x = (v - _) / this._getVisibleDatasetWeightTotal();
		(this.offsetX = g * v),
			(this.offsetY = p * v),
			(i.total = this.calculateTotal()),
			(this.outerRadius = v - x * this._getRingWeightOffset(this.index)),
			(this.innerRadius = Math.max(this.outerRadius - x * l, 0)),
			this.updateElements(r, 0, r.length, t);
	}
	_circumference(t, e) {
		const s = this.options,
			i = this._cachedMeta,
			r = this._getCircumference();
		return (e && s.animation.animateRotate) ||
			!this.chart.getDataVisibility(t) ||
			i._parsed[t] === null ||
			i.data[t].hidden
			? 0
			: this.calculateCircumference((i._parsed[t] * r) / Z);
	}
	updateElements(t, e, s, i) {
		const r = i === "reset",
			o = this.chart,
			a = o.chartArea,
			l = o.options.animation,
			h = (a.left + a.right) / 2,
			u = (a.top + a.bottom) / 2,
			d = r && l.animateScale,
			f = d ? 0 : this.innerRadius,
			g = d ? 0 : this.outerRadius,
			{ sharedOptions: p, includeOptions: m } = this._getSharedOptions(e, i);
		let b = this._getRotation(),
			y;
		for (y = 0; y < e; ++y) b += this._circumference(y, r);
		for (y = e; y < e + s; ++y) {
			const v = this._circumference(y, r),
				_ = t[y],
				x = {
					x: h + this.offsetX,
					y: u + this.offsetY,
					startAngle: b,
					endAngle: b + v,
					circumference: v,
					outerRadius: g,
					innerRadius: f,
				};
			m &&
				(x.options =
					p || this.resolveDataElementOptions(y, _.active ? "active" : i)),
				(b += v),
				this.updateElement(_, y, x, i);
		}
	}
	calculateTotal() {
		const t = this._cachedMeta,
			e = t.data;
		let s = 0,
			i;
		for (i = 0; i < e.length; i++) {
			const r = t._parsed[i];
			r !== null &&
				!isNaN(r) &&
				this.chart.getDataVisibility(i) &&
				!e[i].hidden &&
				(s += Math.abs(r));
		}
		return s;
	}
	calculateCircumference(t) {
		const e = this._cachedMeta.total;
		return e > 0 && !isNaN(t) ? Z * (Math.abs(t) / e) : 0;
	}
	getLabelAndValue(t) {
		const e = this._cachedMeta,
			s = this.chart,
			i = s.data.labels || [],
			r = ei(e._parsed[t], s.options.locale);
		return { label: i[t] || "", value: r };
	}
	getMaxBorderWidth(t) {
		let e = 0;
		const s = this.chart;
		let i, r, o, a, c;
		if (!t) {
			for (i = 0, r = s.data.datasets.length; i < r; ++i)
				if (s.isDatasetVisible(i)) {
					(o = s.getDatasetMeta(i)), (t = o.data), (a = o.controller);
					break;
				}
		}
		if (!t) return 0;
		for (i = 0, r = t.length; i < r; ++i)
			(c = a.resolveDataElementOptions(i)),
				c.borderAlign !== "inner" &&
					(e = Math.max(e, c.borderWidth || 0, c.hoverBorderWidth || 0));
		return e;
	}
	getMaxOffset(t) {
		let e = 0;
		for (let s = 0, i = t.length; s < i; ++s) {
			const r = this.resolveDataElementOptions(s);
			e = Math.max(e, r.offset || 0, r.hoverOffset || 0);
		}
		return e;
	}
	_getRingWeightOffset(t) {
		let e = 0;
		for (let s = 0; s < t; ++s)
			this.chart.isDatasetVisible(s) && (e += this._getRingWeight(s));
		return e;
	}
	_getRingWeight(t) {
		return Math.max(B(this.chart.data.datasets[t].weight, 1), 0);
	}
	_getVisibleDatasetWeightTotal() {
		return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
	}
}
class fy extends Ce {
	static id = "line";
	static defaults = {
		datasetElementType: "line",
		dataElementType: "point",
		showLine: !0,
		spanGaps: !1,
	};
	static overrides = {
		scales: { _index_: { type: "category" }, _value_: { type: "linear" } },
	};
	initialize() {
		(this.enableOptionSharing = !0),
			(this.supportsDecimation = !0),
			super.initialize();
	}
	update(t) {
		const e = this._cachedMeta,
			{ dataset: s, data: i = [], _dataset: r } = e,
			o = this.chart._animationsDisabled;
		let { start: a, count: c } = Ou(e, i, o);
		(this._drawStart = a),
			(this._drawCount = c),
			Pu(e) && ((a = 0), (c = i.length)),
			(s._chart = this.chart),
			(s._datasetIndex = this.index),
			(s._decimated = !!r._decimated),
			(s.points = i);
		const l = this.resolveDatasetElementOptions(t);
		this.options.showLine || (l.borderWidth = 0),
			(l.segment = this.options.segment),
			this.updateElement(s, void 0, { animated: !o, options: l }, t),
			this.updateElements(i, a, c, t);
	}
	updateElements(t, e, s, i) {
		const r = i === "reset",
			{ iScale: o, vScale: a, _stacked: c, _dataset: l } = this._cachedMeta,
			{ sharedOptions: h, includeOptions: u } = this._getSharedOptions(e, i),
			d = o.axis,
			f = a.axis,
			{ spanGaps: g, segment: p } = this.options,
			m = Fn(g) ? g : Number.POSITIVE_INFINITY,
			b = this.chart._animationsDisabled || r || i === "none",
			y = e + s,
			v = t.length;
		let _ = e > 0 && this.getParsed(e - 1);
		for (let x = 0; x < v; ++x) {
			const k = t[x],
				S = b ? k : {};
			if (x < e || x >= y) {
				S.skip = !0;
				continue;
			}
			const E = this.getParsed(x),
				T = q(E[f]),
				M = (S[d] = o.getPixelForValue(E[d], x)),
				I = (S[f] =
					r || T
						? a.getBasePixel()
						: a.getPixelForValue(c ? this.applyStack(a, E, c) : E[f], x));
			(S.skip = isNaN(M) || isNaN(I) || T),
				(S.stop = x > 0 && Math.abs(E[d] - _[d]) > m),
				p && ((S.parsed = E), (S.raw = l.data[x])),
				u &&
					(S.options =
						h || this.resolveDataElementOptions(x, k.active ? "active" : i)),
				b || this.updateElement(k, x, S, i),
				(_ = E);
		}
	}
	getMaxOverflow() {
		const t = this._cachedMeta,
			e = t.dataset,
			s = (e.options && e.options.borderWidth) || 0,
			i = t.data || [];
		if (!i.length) return s;
		const r = i[0].size(this.resolveDataElementOptions(0)),
			o = i[i.length - 1].size(this.resolveDataElementOptions(i.length - 1));
		return Math.max(s, r, o) / 2;
	}
	draw() {
		const t = this._cachedMeta;
		t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
			super.draw();
	}
}
class Zu extends Ce {
	static id = "polarArea";
	static defaults = {
		dataElementType: "arc",
		animation: { animateRotate: !0, animateScale: !0 },
		animations: {
			numbers: {
				type: "number",
				properties: [
					"x",
					"y",
					"startAngle",
					"endAngle",
					"innerRadius",
					"outerRadius",
				],
			},
		},
		indexAxis: "r",
		startAngle: 0,
	};
	static overrides = {
		aspectRatio: 1,
		plugins: {
			legend: {
				labels: {
					generateLabels(t) {
						const e = t.data;
						if (e.labels.length && e.datasets.length) {
							const {
								labels: { pointStyle: s, color: i },
							} = t.legend.options;
							return e.labels.map((r, o) => {
								const c = t.getDatasetMeta(0).controller.getStyle(o);
								return {
									text: r,
									fillStyle: c.backgroundColor,
									strokeStyle: c.borderColor,
									fontColor: i,
									lineWidth: c.borderWidth,
									pointStyle: s,
									hidden: !t.getDataVisibility(o),
									index: o,
								};
							});
						}
						return [];
					},
				},
				onClick(t, e, s) {
					s.chart.toggleDataVisibility(e.index), s.chart.update();
				},
			},
		},
		scales: {
			r: {
				type: "radialLinear",
				angleLines: { display: !1 },
				beginAtZero: !0,
				grid: { circular: !0 },
				pointLabels: { display: !1 },
				startAngle: 0,
			},
		},
	};
	constructor(t, e) {
		super(t, e), (this.innerRadius = void 0), (this.outerRadius = void 0);
	}
	getLabelAndValue(t) {
		const e = this._cachedMeta,
			s = this.chart,
			i = s.data.labels || [],
			r = ei(e._parsed[t].r, s.options.locale);
		return { label: i[t] || "", value: r };
	}
	parseObjectData(t, e, s, i) {
		return Uu.bind(this)(t, e, s, i);
	}
	update(t) {
		const e = this._cachedMeta.data;
		this._updateRadius(), this.updateElements(e, 0, e.length, t);
	}
	getMinMax() {
		const t = this._cachedMeta,
			e = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY };
		return (
			t.data.forEach((s, i) => {
				const r = this.getParsed(i).r;
				!isNaN(r) &&
					this.chart.getDataVisibility(i) &&
					(r < e.min && (e.min = r), r > e.max && (e.max = r));
			}),
			e
		);
	}
	_updateRadius() {
		const t = this.chart,
			e = t.chartArea,
			s = t.options,
			i = Math.min(e.right - e.left, e.bottom - e.top),
			r = Math.max(i / 2, 0),
			o = Math.max(s.cutoutPercentage ? (r / 100) * s.cutoutPercentage : 1, 0),
			a = (r - o) / t.getVisibleDatasetCount();
		(this.outerRadius = r - a * this.index),
			(this.innerRadius = this.outerRadius - a);
	}
	updateElements(t, e, s, i) {
		const r = i === "reset",
			o = this.chart,
			c = o.options.animation,
			l = this._cachedMeta.rScale,
			h = l.xCenter,
			u = l.yCenter,
			d = l.getIndexAngle(0) - 0.5 * it;
		let f = d,
			g;
		const p = 360 / this.countVisibleElements();
		for (g = 0; g < e; ++g) f += this._computeAngle(g, i, p);
		for (g = e; g < e + s; g++) {
			const m = t[g];
			let b = f,
				y = f + this._computeAngle(g, i, p),
				v = o.getDataVisibility(g)
					? l.getDistanceFromCenterForValue(this.getParsed(g).r)
					: 0;
			(f = y), r && (c.animateScale && (v = 0), c.animateRotate && (b = y = d));
			const _ = {
				x: h,
				y: u,
				innerRadius: 0,
				outerRadius: v,
				startAngle: b,
				endAngle: y,
				options: this.resolveDataElementOptions(g, m.active ? "active" : i),
			};
			this.updateElement(m, g, _, i);
		}
	}
	countVisibleElements() {
		const t = this._cachedMeta;
		let e = 0;
		return (
			t.data.forEach((s, i) => {
				!isNaN(this.getParsed(i).r) && this.chart.getDataVisibility(i) && e++;
			}),
			e
		);
	}
	_computeAngle(t, e, s) {
		return this.chart.getDataVisibility(t)
			? Qt(this.resolveDataElementOptions(t, e).angle || s)
			: 0;
	}
}
class gy extends qa {
	static id = "pie";
	static defaults = {
		cutout: 0,
		rotation: 0,
		circumference: 360,
		radius: "100%",
	};
}
class py extends Ce {
	static id = "radar";
	static defaults = {
		datasetElementType: "line",
		dataElementType: "point",
		indexAxis: "r",
		showLine: !0,
		elements: { line: { fill: "start" } },
	};
	static overrides = {
		aspectRatio: 1,
		scales: { r: { type: "radialLinear" } },
	};
	getLabelAndValue(t) {
		const e = this._cachedMeta.vScale,
			s = this.getParsed(t);
		return {
			label: e.getLabels()[t],
			value: "" + e.getLabelForValue(s[e.axis]),
		};
	}
	parseObjectData(t, e, s, i) {
		return Uu.bind(this)(t, e, s, i);
	}
	update(t) {
		const e = this._cachedMeta,
			s = e.dataset,
			i = e.data || [],
			r = e.iScale.getLabels();
		if (((s.points = i), t !== "resize")) {
			const o = this.resolveDatasetElementOptions(t);
			this.options.showLine || (o.borderWidth = 0);
			const a = { _loop: !0, _fullLoop: r.length === i.length, options: o };
			this.updateElement(s, void 0, a, t);
		}
		this.updateElements(i, 0, i.length, t);
	}
	updateElements(t, e, s, i) {
		const r = this._cachedMeta.rScale,
			o = i === "reset";
		for (let a = e; a < e + s; a++) {
			const c = t[a],
				l = this.resolveDataElementOptions(a, c.active ? "active" : i),
				h = r.getPointPositionForValue(a, this.getParsed(a).r),
				u = o ? r.xCenter : h.x,
				d = o ? r.yCenter : h.y,
				f = {
					x: u,
					y: d,
					angle: h.angle,
					skip: isNaN(u) || isNaN(d),
					options: l,
				};
			this.updateElement(c, a, f, i);
		}
	}
}
class my extends Ce {
	static id = "scatter";
	static defaults = {
		datasetElementType: !1,
		dataElementType: "point",
		showLine: !1,
		fill: !1,
	};
	static overrides = {
		interaction: { mode: "point" },
		scales: { x: { type: "linear" }, y: { type: "linear" } },
	};
	getLabelAndValue(t) {
		const e = this._cachedMeta,
			s = this.chart.data.labels || [],
			{ xScale: i, yScale: r } = e,
			o = this.getParsed(t),
			a = i.getLabelForValue(o.x),
			c = r.getLabelForValue(o.y);
		return { label: s[t] || "", value: "(" + a + ", " + c + ")" };
	}
	update(t) {
		const e = this._cachedMeta,
			{ data: s = [] } = e,
			i = this.chart._animationsDisabled;
		let { start: r, count: o } = Ou(e, s, i);
		if (
			((this._drawStart = r),
			(this._drawCount = o),
			Pu(e) && ((r = 0), (o = s.length)),
			this.options.showLine)
		) {
			const { dataset: a, _dataset: c } = e;
			(a._chart = this.chart),
				(a._datasetIndex = this.index),
				(a._decimated = !!c._decimated),
				(a.points = s);
			const l = this.resolveDatasetElementOptions(t);
			(l.segment = this.options.segment),
				this.updateElement(a, void 0, { animated: !i, options: l }, t);
		}
		this.updateElements(s, r, o, t);
	}
	addElements() {
		const { showLine: t } = this.options;
		!this.datasetElementType &&
			t &&
			(this.datasetElementType = this.chart.registry.getElement("line")),
			super.addElements();
	}
	updateElements(t, e, s, i) {
		const r = i === "reset",
			{ iScale: o, vScale: a, _stacked: c, _dataset: l } = this._cachedMeta,
			h = this.resolveDataElementOptions(e, i),
			u = this.getSharedOptions(h),
			d = this.includeOptions(i, u),
			f = o.axis,
			g = a.axis,
			{ spanGaps: p, segment: m } = this.options,
			b = Fn(p) ? p : Number.POSITIVE_INFINITY,
			y = this.chart._animationsDisabled || r || i === "none";
		let v = e > 0 && this.getParsed(e - 1);
		for (let _ = e; _ < e + s; ++_) {
			const x = t[_],
				k = this.getParsed(_),
				S = y ? x : {},
				E = q(k[g]),
				T = (S[f] = o.getPixelForValue(k[f], _)),
				M = (S[g] =
					r || E
						? a.getBasePixel()
						: a.getPixelForValue(c ? this.applyStack(a, k, c) : k[g], _));
			(S.skip = isNaN(T) || isNaN(M) || E),
				(S.stop = _ > 0 && Math.abs(k[f] - v[f]) > b),
				m && ((S.parsed = k), (S.raw = l.data[_])),
				d &&
					(S.options =
						u || this.resolveDataElementOptions(_, x.active ? "active" : i)),
				y || this.updateElement(x, _, S, i),
				(v = k);
		}
		this.updateSharedOptions(u, i, h);
	}
	getMaxOverflow() {
		const t = this._cachedMeta,
			e = t.data || [];
		if (!this.options.showLine) {
			let a = 0;
			for (let c = e.length - 1; c >= 0; --c)
				a = Math.max(a, e[c].size(this.resolveDataElementOptions(c)) / 2);
			return a > 0 && a;
		}
		const s = t.dataset,
			i = (s.options && s.options.borderWidth) || 0;
		if (!e.length) return i;
		const r = e[0].size(this.resolveDataElementOptions(0)),
			o = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1));
		return Math.max(i, r, o) / 2;
	}
}
var yy = Object.freeze({
	__proto__: null,
	BarController: hy,
	BubbleController: uy,
	DoughnutController: qa,
	LineController: fy,
	PolarAreaController: Zu,
	PieController: gy,
	RadarController: py,
	ScatterController: my,
});
function en() {
	throw new Error(
		"This method is not implemented: Check that a complete date adapter is provided.",
	);
}
class Ka {
	static override(t) {
		Object.assign(Ka.prototype, t);
	}
	constructor(t) {
		this.options = t || {};
	}
	init() {}
	formats() {
		return en();
	}
	parse() {
		return en();
	}
	format() {
		return en();
	}
	add() {
		return en();
	}
	diff() {
		return en();
	}
	startOf() {
		return en();
	}
	endOf() {
		return en();
	}
}
var by = { _date: Ka };
function vy(n, t, e, s) {
	const { controller: i, data: r, _sorted: o } = n,
		a = i._cachedMeta.iScale;
	if (a && t === a.axis && t !== "r" && o && r.length) {
		const c = a._reversePixels ? Np : ye;
		if (s) {
			if (i._sharedOptions) {
				const l = r[0],
					h = typeof l.getRange == "function" && l.getRange(t);
				if (h) {
					const u = c(r, t, e - h),
						d = c(r, t, e + h);
					return { lo: u.lo, hi: d.hi };
				}
			}
		} else return c(r, t, e);
	}
	return { lo: 0, hi: r.length - 1 };
}
function ni(n, t, e, s, i) {
	const r = n.getSortedVisibleDatasetMetas(),
		o = e[t];
	for (let a = 0, c = r.length; a < c; ++a) {
		const { index: l, data: h } = r[a],
			{ lo: u, hi: d } = vy(r[a], t, o, i);
		for (let f = u; f <= d; ++f) {
			const g = h[f];
			g.skip || s(g, l, f);
		}
	}
}
function xy(n) {
	const t = n.indexOf("x") !== -1,
		e = n.indexOf("y") !== -1;
	return function (s, i) {
		const r = t ? Math.abs(s.x - i.x) : 0,
			o = e ? Math.abs(s.y - i.y) : 0;
		return Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2));
	};
}
function So(n, t, e, s, i) {
	const r = [];
	return (
		(!i && !n.isPointInArea(t)) ||
			ni(
				n,
				e,
				t,
				function (a, c, l) {
					(!i && !Ns(a, n.chartArea, 0)) ||
						(a.inRange(t.x, t.y, s) &&
							r.push({ element: a, datasetIndex: c, index: l }));
				},
				!0,
			),
		r
	);
}
function _y(n, t, e, s) {
	let i = [];
	function r(o, a, c) {
		const { startAngle: l, endAngle: h } = o.getProps(
				["startAngle", "endAngle"],
				s,
			),
			{ angle: u } = Tu(o, { x: t.x, y: t.y });
		Ls(u, l, h) && i.push({ element: o, datasetIndex: a, index: c });
	}
	return ni(n, e, t, r), i;
}
function wy(n, t, e, s, i, r) {
	let o = [];
	const a = xy(e);
	let c = Number.POSITIVE_INFINITY;
	function l(h, u, d) {
		const f = h.inRange(t.x, t.y, i);
		if (s && !f) return;
		const g = h.getCenterPoint(i);
		if (!(!!r || n.isPointInArea(g)) && !f) return;
		const m = a(t, g);
		m < c
			? ((o = [{ element: h, datasetIndex: u, index: d }]), (c = m))
			: m === c && o.push({ element: h, datasetIndex: u, index: d });
	}
	return ni(n, e, t, l), o;
}
function Eo(n, t, e, s, i, r) {
	return !r && !n.isPointInArea(t)
		? []
		: e === "r" && !s
		? _y(n, t, e, i)
		: wy(n, t, e, s, i, r);
}
function Tl(n, t, e, s, i) {
	const r = [],
		o = e === "x" ? "inXRange" : "inYRange";
	let a = !1;
	return (
		ni(n, e, t, (c, l, h) => {
			c[o](t[e], i) &&
				(r.push({ element: c, datasetIndex: l, index: h }),
				(a = a || c.inRange(t.x, t.y, i)));
		}),
		s && !a ? [] : r
	);
}
var Sy = {
	evaluateInteractionItems: ni,
	modes: {
		index(n, t, e, s) {
			const i = sn(t, n),
				r = e.axis || "x",
				o = e.includeInvisible || !1,
				a = e.intersect ? So(n, i, r, s, o) : Eo(n, i, r, !1, s, o),
				c = [];
			return a.length
				? (n.getSortedVisibleDatasetMetas().forEach((l) => {
						const h = a[0].index,
							u = l.data[h];
						u &&
							!u.skip &&
							c.push({ element: u, datasetIndex: l.index, index: h });
				  }),
				  c)
				: [];
		},
		dataset(n, t, e, s) {
			const i = sn(t, n),
				r = e.axis || "xy",
				o = e.includeInvisible || !1;
			let a = e.intersect ? So(n, i, r, s, o) : Eo(n, i, r, !1, s, o);
			if (a.length > 0) {
				const c = a[0].datasetIndex,
					l = n.getDatasetMeta(c).data;
				a = [];
				for (let h = 0; h < l.length; ++h)
					a.push({ element: l[h], datasetIndex: c, index: h });
			}
			return a;
		},
		point(n, t, e, s) {
			const i = sn(t, n),
				r = e.axis || "xy",
				o = e.includeInvisible || !1;
			return So(n, i, r, s, o);
		},
		nearest(n, t, e, s) {
			const i = sn(t, n),
				r = e.axis || "xy",
				o = e.includeInvisible || !1;
			return Eo(n, i, r, e.intersect, s, o);
		},
		x(n, t, e, s) {
			const i = sn(t, n);
			return Tl(n, i, "x", e.intersect, s);
		},
		y(n, t, e, s) {
			const i = sn(t, n);
			return Tl(n, i, "y", e.intersect, s);
		},
	},
};
const td = ["left", "top", "right", "bottom"];
function cs(n, t) {
	return n.filter((e) => e.pos === t);
}
function Il(n, t) {
	return n.filter((e) => td.indexOf(e.pos) === -1 && e.box.axis === t);
}
function ls(n, t) {
	return n.sort((e, s) => {
		const i = t ? s : e,
			r = t ? e : s;
		return i.weight === r.weight ? i.index - r.index : i.weight - r.weight;
	});
}
function Ey(n) {
	const t = [];
	let e, s, i, r, o, a;
	for (e = 0, s = (n || []).length; e < s; ++e)
		(i = n[e]),
			({
				position: r,
				options: { stack: o, stackWeight: a = 1 },
			} = i),
			t.push({
				index: e,
				box: i,
				pos: r,
				horizontal: i.isHorizontal(),
				weight: i.weight,
				stack: o && r + o,
				stackWeight: a,
			});
	return t;
}
function ky(n) {
	const t = {};
	for (const e of n) {
		const { stack: s, pos: i, stackWeight: r } = e;
		if (!s || !td.includes(i)) continue;
		const o = t[s] || (t[s] = { count: 0, placed: 0, weight: 0, size: 0 });
		o.count++, (o.weight += r);
	}
	return t;
}
function Cy(n, t) {
	const e = ky(n),
		{ vBoxMaxWidth: s, hBoxMaxHeight: i } = t;
	let r, o, a;
	for (r = 0, o = n.length; r < o; ++r) {
		a = n[r];
		const { fullSize: c } = a.box,
			l = e[a.stack],
			h = l && a.stackWeight / l.weight;
		a.horizontal
			? ((a.width = h ? h * s : c && t.availableWidth), (a.height = i))
			: ((a.width = s), (a.height = h ? h * i : c && t.availableHeight));
	}
	return e;
}
function Ty(n) {
	const t = Ey(n),
		e = ls(
			t.filter((l) => l.box.fullSize),
			!0,
		),
		s = ls(cs(t, "left"), !0),
		i = ls(cs(t, "right")),
		r = ls(cs(t, "top"), !0),
		o = ls(cs(t, "bottom")),
		a = Il(t, "x"),
		c = Il(t, "y");
	return {
		fullSize: e,
		leftAndTop: s.concat(r),
		rightAndBottom: i.concat(c).concat(o).concat(a),
		chartArea: cs(t, "chartArea"),
		vertical: s.concat(i).concat(c),
		horizontal: r.concat(o).concat(a),
	};
}
function Ml(n, t, e, s) {
	return Math.max(n[e], t[e]) + Math.max(n[s], t[s]);
}
function ed(n, t) {
	(n.top = Math.max(n.top, t.top)),
		(n.left = Math.max(n.left, t.left)),
		(n.bottom = Math.max(n.bottom, t.bottom)),
		(n.right = Math.max(n.right, t.right));
}
function Iy(n, t, e, s) {
	const { pos: i, box: r } = e,
		o = n.maxPadding;
	if (!U(i)) {
		e.size && (n[i] -= e.size);
		const u = s[e.stack] || { size: 0, count: 1 };
		(u.size = Math.max(u.size, e.horizontal ? r.height : r.width)),
			(e.size = u.size / u.count),
			(n[i] += e.size);
	}
	r.getPadding && ed(o, r.getPadding());
	const a = Math.max(0, t.outerWidth - Ml(o, n, "left", "right")),
		c = Math.max(0, t.outerHeight - Ml(o, n, "top", "bottom")),
		l = a !== n.w,
		h = c !== n.h;
	return (
		(n.w = a),
		(n.h = c),
		e.horizontal ? { same: l, other: h } : { same: h, other: l }
	);
}
function My(n) {
	const t = n.maxPadding;
	function e(s) {
		const i = Math.max(t[s] - n[s], 0);
		return (n[s] += i), i;
	}
	(n.y += e("top")), (n.x += e("left")), e("right"), e("bottom");
}
function Ay(n, t) {
	const e = t.maxPadding;
	function s(i) {
		const r = { left: 0, top: 0, right: 0, bottom: 0 };
		return (
			i.forEach((o) => {
				r[o] = Math.max(t[o], e[o]);
			}),
			r
		);
	}
	return s(n ? ["left", "right"] : ["top", "bottom"]);
}
function ps(n, t, e, s) {
	const i = [];
	let r, o, a, c, l, h;
	for (r = 0, o = n.length, l = 0; r < o; ++r) {
		(a = n[r]),
			(c = a.box),
			c.update(a.width || t.w, a.height || t.h, Ay(a.horizontal, t));
		const { same: u, other: d } = Iy(t, e, a, s);
		(l |= u && i.length), (h = h || d), c.fullSize || i.push(a);
	}
	return (l && ps(i, t, e, s)) || h;
}
function ki(n, t, e, s, i) {
	(n.top = e),
		(n.left = t),
		(n.right = t + s),
		(n.bottom = e + i),
		(n.width = s),
		(n.height = i);
}
function Al(n, t, e, s) {
	const i = e.padding;
	let { x: r, y: o } = t;
	for (const a of n) {
		const c = a.box,
			l = s[a.stack] || { count: 1, placed: 0, weight: 1 },
			h = a.stackWeight / l.weight || 1;
		if (a.horizontal) {
			const u = t.w * h,
				d = l.size || c.height;
			Yt(l.start) && (o = l.start),
				c.fullSize
					? ki(c, i.left, o, e.outerWidth - i.right - i.left, d)
					: ki(c, t.left + l.placed, o, u, d),
				(l.start = o),
				(l.placed += u),
				(o = c.bottom);
		} else {
			const u = t.h * h,
				d = l.size || c.width;
			Yt(l.start) && (r = l.start),
				c.fullSize
					? ki(c, r, i.top, d, e.outerHeight - i.bottom - i.top)
					: ki(c, r, t.top + l.placed, d, u),
				(l.start = r),
				(l.placed += u),
				(r = c.right);
		}
	}
	(t.x = r), (t.y = o);
}
var Ot = {
	addBox(n, t) {
		n.boxes || (n.boxes = []),
			(t.fullSize = t.fullSize || !1),
			(t.position = t.position || "top"),
			(t.weight = t.weight || 0),
			(t._layers =
				t._layers ||
				function () {
					return [
						{
							z: 0,
							draw(e) {
								t.draw(e);
							},
						},
					];
				}),
			n.boxes.push(t);
	},
	removeBox(n, t) {
		const e = n.boxes ? n.boxes.indexOf(t) : -1;
		e !== -1 && n.boxes.splice(e, 1);
	},
	configure(n, t, e) {
		(t.fullSize = e.fullSize), (t.position = e.position), (t.weight = e.weight);
	},
	update(n, t, e, s) {
		if (!n) return;
		const i = Lt(n.options.layout.padding),
			r = Math.max(t - i.width, 0),
			o = Math.max(e - i.height, 0),
			a = Ty(n.boxes),
			c = a.vertical,
			l = a.horizontal;
		G(n.boxes, (p) => {
			typeof p.beforeLayout == "function" && p.beforeLayout();
		});
		const h =
				c.reduce(
					(p, m) => (m.box.options && m.box.options.display === !1 ? p : p + 1),
					0,
				) || 1,
			u = Object.freeze({
				outerWidth: t,
				outerHeight: e,
				padding: i,
				availableWidth: r,
				availableHeight: o,
				vBoxMaxWidth: r / 2 / h,
				hBoxMaxHeight: o / 2,
			}),
			d = Object.assign({}, i);
		ed(d, Lt(s));
		const f = Object.assign(
				{ maxPadding: d, w: r, h: o, x: i.left, y: i.top },
				i,
			),
			g = Cy(c.concat(l), u);
		ps(a.fullSize, f, u, g),
			ps(c, f, u, g),
			ps(l, f, u, g) && ps(c, f, u, g),
			My(f),
			Al(a.leftAndTop, f, u, g),
			(f.x += f.w),
			(f.y += f.h),
			Al(a.rightAndBottom, f, u, g),
			(n.chartArea = {
				left: f.left,
				top: f.top,
				right: f.left + f.w,
				bottom: f.top + f.h,
				height: f.h,
				width: f.w,
			}),
			G(a.chartArea, (p) => {
				const m = p.box;
				Object.assign(m, n.chartArea),
					m.update(f.w, f.h, { left: 0, top: 0, right: 0, bottom: 0 });
			});
	},
};
class nd {
	acquireContext(t, e) {}
	releaseContext(t) {
		return !1;
	}
	addEventListener(t, e, s) {}
	removeEventListener(t, e, s) {}
	getDevicePixelRatio() {
		return 1;
	}
	getMaximumSize(t, e, s, i) {
		return (
			(e = Math.max(0, e || t.width)),
			(s = s || t.height),
			{ width: e, height: Math.max(0, i ? Math.floor(e / i) : s) }
		);
	}
	isAttached(t) {
		return !0;
	}
	updateConfig(t) {}
}
class Dy extends nd {
	acquireContext(t) {
		return (t && t.getContext && t.getContext("2d")) || null;
	}
	updateConfig(t) {
		t.options.animation = !1;
	}
}
const Hi = "$chartjs",
	Oy = {
		touchstart: "mousedown",
		touchmove: "mousemove",
		touchend: "mouseup",
		pointerenter: "mouseenter",
		pointerdown: "mousedown",
		pointermove: "mousemove",
		pointerup: "mouseup",
		pointerleave: "mouseout",
		pointerout: "mouseout",
	},
	Dl = (n) => n === null || n === "";
function Py(n, t) {
	const e = n.style,
		s = n.getAttribute("height"),
		i = n.getAttribute("width");
	if (
		((n[Hi] = {
			initial: {
				height: s,
				width: i,
				style: { display: e.display, height: e.height, width: e.width },
			},
		}),
		(e.display = e.display || "block"),
		(e.boxSizing = e.boxSizing || "border-box"),
		Dl(i))
	) {
		const r = fl(n, "width");
		r !== void 0 && (n.width = r);
	}
	if (Dl(s))
		if (n.style.height === "") n.height = n.width / (t || 2);
		else {
			const r = fl(n, "height");
			r !== void 0 && (n.height = r);
		}
	return n;
}
const sd = Mm ? { passive: !0 } : !1;
function Ry(n, t, e) {
	n.addEventListener(t, e, sd);
}
function Ly(n, t, e) {
	n.canvas.removeEventListener(t, e, sd);
}
function Ny(n, t) {
	const e = Oy[n.type] || n.type,
		{ x: s, y: i } = sn(n, t);
	return {
		type: e,
		chart: t,
		native: n,
		x: s !== void 0 ? s : null,
		y: i !== void 0 ? i : null,
	};
}
function or(n, t) {
	for (const e of n) if (e === t || e.contains(t)) return !0;
}
function Fy(n, t, e) {
	const s = n.canvas,
		i = new MutationObserver((r) => {
			let o = !1;
			for (const a of r)
				(o = o || or(a.addedNodes, s)), (o = o && !or(a.removedNodes, s));
			o && e();
		});
	return i.observe(document, { childList: !0, subtree: !0 }), i;
}
function By(n, t, e) {
	const s = n.canvas,
		i = new MutationObserver((r) => {
			let o = !1;
			for (const a of r)
				(o = o || or(a.removedNodes, s)), (o = o && !or(a.addedNodes, s));
			o && e();
		});
	return i.observe(document, { childList: !0, subtree: !0 }), i;
}
const Bs = new Map();
let Ol = 0;
function id() {
	const n = window.devicePixelRatio;
	n !== Ol &&
		((Ol = n),
		Bs.forEach((t, e) => {
			e.currentDevicePixelRatio !== n && t();
		}));
}
function Vy(n, t) {
	Bs.size || window.addEventListener("resize", id), Bs.set(n, t);
}
function zy(n) {
	Bs.delete(n), Bs.size || window.removeEventListener("resize", id);
}
function $y(n, t, e) {
	const s = n.canvas,
		i = s && Wa(s);
	if (!i) return;
	const r = Du((a, c) => {
			const l = i.clientWidth;
			e(a, c), l < i.clientWidth && e();
		}, window),
		o = new ResizeObserver((a) => {
			const c = a[0],
				l = c.contentRect.width,
				h = c.contentRect.height;
			(l === 0 && h === 0) || r(l, h);
		});
	return o.observe(i), Vy(n, r), o;
}
function ko(n, t, e) {
	e && e.disconnect(), t === "resize" && zy(n);
}
function Uy(n, t, e) {
	const s = n.canvas,
		i = Du((r) => {
			n.ctx !== null && e(Ny(r, n));
		}, n);
	return Ry(s, t, i), i;
}
class jy extends nd {
	acquireContext(t, e) {
		const s = t && t.getContext && t.getContext("2d");
		return s && s.canvas === t ? (Py(t, e), s) : null;
	}
	releaseContext(t) {
		const e = t.canvas;
		if (!e[Hi]) return !1;
		const s = e[Hi].initial;
		["height", "width"].forEach((r) => {
			const o = s[r];
			q(o) ? e.removeAttribute(r) : e.setAttribute(r, o);
		});
		const i = s.style || {};
		return (
			Object.keys(i).forEach((r) => {
				e.style[r] = i[r];
			}),
			(e.width = e.width),
			delete e[Hi],
			!0
		);
	}
	addEventListener(t, e, s) {
		this.removeEventListener(t, e);
		const i = t.$proxies || (t.$proxies = {}),
			o = { attach: Fy, detach: By, resize: $y }[e] || Uy;
		i[e] = o(t, e, s);
	}
	removeEventListener(t, e) {
		const s = t.$proxies || (t.$proxies = {}),
			i = s[e];
		if (!i) return;
		(({ attach: ko, detach: ko, resize: ko }[e] || Ly)(t, e, i),
			(s[e] = void 0));
	}
	getDevicePixelRatio() {
		return window.devicePixelRatio;
	}
	getMaximumSize(t, e, s, i) {
		return Im(t, e, s, i);
	}
	isAttached(t) {
		const e = Wa(t);
		return !!(e && e.isConnected);
	}
}
function Hy(n) {
	return !Hu() || (typeof OffscreenCanvas < "u" && n instanceof OffscreenCanvas)
		? Dy
		: jy;
}
class ce {
	static defaults = {};
	static defaultRoutes = void 0;
	active = !1;
	tooltipPosition(t) {
		const { x: e, y: s } = this.getProps(["x", "y"], t);
		return { x: e, y: s };
	}
	hasValue() {
		return Fn(this.x) && Fn(this.y);
	}
	getProps(t, e) {
		const s = this.$animations;
		if (!e || !s) return this;
		const i = {};
		return (
			t.forEach((r) => {
				i[r] = s[r] && s[r].active() ? s[r]._to : this[r];
			}),
			i
		);
	}
}
function Wy(n, t) {
	const e = n.options.ticks,
		s = qy(n),
		i = Math.min(e.maxTicksLimit || s, s),
		r = e.major.enabled ? Yy(t) : [],
		o = r.length,
		a = r[0],
		c = r[o - 1],
		l = [];
	if (o > i) return Gy(t, l, r, o / i), l;
	const h = Ky(r, t, i);
	if (o > 0) {
		let u, d;
		const f = o > 1 ? Math.round((c - a) / (o - 1)) : null;
		for (Ci(t, l, h, q(f) ? 0 : a - f, a), u = 0, d = o - 1; u < d; u++)
			Ci(t, l, h, r[u], r[u + 1]);
		return Ci(t, l, h, c, q(f) ? t.length : c + f), l;
	}
	return Ci(t, l, h), l;
}
function qy(n) {
	const t = n.options.offset,
		e = n._tickSize(),
		s = n._length / e + (t ? 0 : 1),
		i = n._maxLength / e;
	return Math.floor(Math.min(s, i));
}
function Ky(n, t, e) {
	const s = Xy(n),
		i = t.length / e;
	if (!s) return Math.max(i, 1);
	const r = Op(s);
	for (let o = 0, a = r.length - 1; o < a; o++) {
		const c = r[o];
		if (c > i) return c;
	}
	return Math.max(i, 1);
}
function Yy(n) {
	const t = [];
	let e, s;
	for (e = 0, s = n.length; e < s; e++) n[e].major && t.push(e);
	return t;
}
function Gy(n, t, e, s) {
	let i = 0,
		r = e[0],
		o;
	for (s = Math.ceil(s), o = 0; o < n.length; o++)
		o === r && (t.push(n[o]), i++, (r = e[i * s]));
}
function Ci(n, t, e, s, i) {
	const r = B(s, 0),
		o = Math.min(B(i, n.length), n.length);
	let a = 0,
		c,
		l,
		h;
	for (
		e = Math.ceil(e), i && ((c = i - s), (e = c / Math.floor(c / e))), h = r;
		h < 0;

	)
		a++, (h = Math.round(r + a * e));
	for (l = Math.max(r, 0); l < o; l++)
		l === h && (t.push(n[l]), a++, (h = Math.round(r + a * e)));
}
function Xy(n) {
	const t = n.length;
	let e, s;
	if (t < 2) return !1;
	for (s = n[0], e = 1; e < t; ++e) if (n[e] - n[e - 1] !== s) return !1;
	return s;
}
const Qy = (n) => (n === "left" ? "right" : n === "right" ? "left" : n),
	Pl = (n, t, e) => (t === "top" || t === "left" ? n[t] + e : n[t] - e),
	Rl = (n, t) => Math.min(t || n, n);
function Ll(n, t) {
	const e = [],
		s = n.length / t,
		i = n.length;
	let r = 0;
	for (; r < i; r += s) e.push(n[Math.floor(r)]);
	return e;
}
function Jy(n, t, e) {
	const s = n.ticks.length,
		i = Math.min(t, s - 1),
		r = n._startPixel,
		o = n._endPixel,
		a = 1e-6;
	let c = n.getPixelForTick(i),
		l;
	if (
		!(
			e &&
			(s === 1
				? (l = Math.max(c - r, o - c))
				: t === 0
				? (l = (n.getPixelForTick(1) - c) / 2)
				: (l = (c - n.getPixelForTick(i - 1)) / 2),
			(c += i < t ? l : -l),
			c < r - a || c > o + a)
		)
	)
		return c;
}
function Zy(n, t) {
	G(n, (e) => {
		const s = e.gc,
			i = s.length / 2;
		let r;
		if (i > t) {
			for (r = 0; r < i; ++r) delete e.data[s[r]];
			s.splice(0, i);
		}
	});
}
function hs(n) {
	return n.drawTicks ? n.tickLength : 0;
}
function Nl(n, t) {
	if (!n.display) return 0;
	const e = ut(n.font, t),
		s = Lt(n.padding);
	return (J(n.text) ? n.text.length : 1) * e.lineHeight + s.height;
}
function tb(n, t) {
	return Ye(n, { scale: t, type: "scale" });
}
function eb(n, t, e) {
	return Ye(n, { tick: e, index: t, type: "tick" });
}
function nb(n, t, e) {
	let s = za(n);
	return ((e && t !== "right") || (!e && t === "right")) && (s = Qy(s)), s;
}
function sb(n, t, e, s) {
	const { top: i, left: r, bottom: o, right: a, chart: c } = n,
		{ chartArea: l, scales: h } = c;
	let u = 0,
		d,
		f,
		g;
	const p = o - i,
		m = a - r;
	if (n.isHorizontal()) {
		if (((f = It(s, r, a)), U(e))) {
			const b = Object.keys(e)[0],
				y = e[b];
			g = h[b].getPixelForValue(y) + p - t;
		} else
			e === "center" ? (g = (l.bottom + l.top) / 2 + p - t) : (g = Pl(n, e, t));
		d = a - r;
	} else {
		if (U(e)) {
			const b = Object.keys(e)[0],
				y = e[b];
			f = h[b].getPixelForValue(y) - m + t;
		} else
			e === "center" ? (f = (l.left + l.right) / 2 - m + t) : (f = Pl(n, e, t));
		(g = It(s, o, i)), (u = e === "left" ? -at : at);
	}
	return { titleX: f, titleY: g, maxWidth: d, rotation: u };
}
class wn extends ce {
	constructor(t) {
		super(),
			(this.id = t.id),
			(this.type = t.type),
			(this.options = void 0),
			(this.ctx = t.ctx),
			(this.chart = t.chart),
			(this.top = void 0),
			(this.bottom = void 0),
			(this.left = void 0),
			(this.right = void 0),
			(this.width = void 0),
			(this.height = void 0),
			(this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
			(this.maxWidth = void 0),
			(this.maxHeight = void 0),
			(this.paddingTop = void 0),
			(this.paddingBottom = void 0),
			(this.paddingLeft = void 0),
			(this.paddingRight = void 0),
			(this.axis = void 0),
			(this.labelRotation = void 0),
			(this.min = void 0),
			(this.max = void 0),
			(this._range = void 0),
			(this.ticks = []),
			(this._gridLineItems = null),
			(this._labelItems = null),
			(this._labelSizes = null),
			(this._length = 0),
			(this._maxLength = 0),
			(this._longestTextCache = {}),
			(this._startPixel = void 0),
			(this._endPixel = void 0),
			(this._reversePixels = !1),
			(this._userMax = void 0),
			(this._userMin = void 0),
			(this._suggestedMax = void 0),
			(this._suggestedMin = void 0),
			(this._ticksLength = 0),
			(this._borderValue = 0),
			(this._cache = {}),
			(this._dataLimitsCached = !1),
			(this.$context = void 0);
	}
	init(t) {
		(this.options = t.setContext(this.getContext())),
			(this.axis = t.axis),
			(this._userMin = this.parse(t.min)),
			(this._userMax = this.parse(t.max)),
			(this._suggestedMin = this.parse(t.suggestedMin)),
			(this._suggestedMax = this.parse(t.suggestedMax));
	}
	parse(t, e) {
		return t;
	}
	getUserBounds() {
		let { _userMin: t, _userMax: e, _suggestedMin: s, _suggestedMax: i } = this;
		return (
			(t = jt(t, Number.POSITIVE_INFINITY)),
			(e = jt(e, Number.NEGATIVE_INFINITY)),
			(s = jt(s, Number.POSITIVE_INFINITY)),
			(i = jt(i, Number.NEGATIVE_INFINITY)),
			{ min: jt(t, s), max: jt(e, i), minDefined: ot(t), maxDefined: ot(e) }
		);
	}
	getMinMax(t) {
		let { min: e, max: s, minDefined: i, maxDefined: r } = this.getUserBounds(),
			o;
		if (i && r) return { min: e, max: s };
		const a = this.getMatchingVisibleMetas();
		for (let c = 0, l = a.length; c < l; ++c)
			(o = a[c].controller.getMinMax(this, t)),
				i || (e = Math.min(e, o.min)),
				r || (s = Math.max(s, o.max));
		return (
			(e = r && e > s ? s : e),
			(s = i && e > s ? e : s),
			{ min: jt(e, jt(s, e)), max: jt(s, jt(e, s)) }
		);
	}
	getPadding() {
		return {
			left: this.paddingLeft || 0,
			top: this.paddingTop || 0,
			right: this.paddingRight || 0,
			bottom: this.paddingBottom || 0,
		};
	}
	getTicks() {
		return this.ticks;
	}
	getLabels() {
		const t = this.chart.data;
		return (
			this.options.labels ||
			(this.isHorizontal() ? t.xLabels : t.yLabels) ||
			t.labels ||
			[]
		);
	}
	getLabelItems(t = this.chart.chartArea) {
		return this._labelItems || (this._labelItems = this._computeLabelItems(t));
	}
	beforeLayout() {
		(this._cache = {}), (this._dataLimitsCached = !1);
	}
	beforeUpdate() {
		Q(this.options.beforeUpdate, [this]);
	}
	update(t, e, s) {
		const { beginAtZero: i, grace: r, ticks: o } = this.options,
			a = o.sampleSize;
		this.beforeUpdate(),
			(this.maxWidth = t),
			(this.maxHeight = e),
			(this._margins = s =
				Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, s)),
			(this.ticks = null),
			(this._labelSizes = null),
			(this._gridLineItems = null),
			(this._labelItems = null),
			this.beforeSetDimensions(),
			this.setDimensions(),
			this.afterSetDimensions(),
			(this._maxLength = this.isHorizontal()
				? this.width + s.left + s.right
				: this.height + s.top + s.bottom),
			this._dataLimitsCached ||
				(this.beforeDataLimits(),
				this.determineDataLimits(),
				this.afterDataLimits(),
				(this._range = om(this, r, i)),
				(this._dataLimitsCached = !0)),
			this.beforeBuildTicks(),
			(this.ticks = this.buildTicks() || []),
			this.afterBuildTicks();
		const c = a < this.ticks.length;
		this._convertTicksToLabels(c ? Ll(this.ticks, a) : this.ticks),
			this.configure(),
			this.beforeCalculateLabelRotation(),
			this.calculateLabelRotation(),
			this.afterCalculateLabelRotation(),
			o.display &&
				(o.autoSkip || o.source === "auto") &&
				((this.ticks = Wy(this, this.ticks)),
				(this._labelSizes = null),
				this.afterAutoSkip()),
			c && this._convertTicksToLabels(this.ticks),
			this.beforeFit(),
			this.fit(),
			this.afterFit(),
			this.afterUpdate();
	}
	configure() {
		let t = this.options.reverse,
			e,
			s;
		this.isHorizontal()
			? ((e = this.left), (s = this.right))
			: ((e = this.top), (s = this.bottom), (t = !t)),
			(this._startPixel = e),
			(this._endPixel = s),
			(this._reversePixels = t),
			(this._length = s - e),
			(this._alignToPixels = this.options.alignToPixels);
	}
	afterUpdate() {
		Q(this.options.afterUpdate, [this]);
	}
	beforeSetDimensions() {
		Q(this.options.beforeSetDimensions, [this]);
	}
	setDimensions() {
		this.isHorizontal()
			? ((this.width = this.maxWidth),
			  (this.left = 0),
			  (this.right = this.width))
			: ((this.height = this.maxHeight),
			  (this.top = 0),
			  (this.bottom = this.height)),
			(this.paddingLeft = 0),
			(this.paddingTop = 0),
			(this.paddingRight = 0),
			(this.paddingBottom = 0);
	}
	afterSetDimensions() {
		Q(this.options.afterSetDimensions, [this]);
	}
	_callHooks(t) {
		this.chart.notifyPlugins(t, this.getContext()), Q(this.options[t], [this]);
	}
	beforeDataLimits() {
		this._callHooks("beforeDataLimits");
	}
	determineDataLimits() {}
	afterDataLimits() {
		this._callHooks("afterDataLimits");
	}
	beforeBuildTicks() {
		this._callHooks("beforeBuildTicks");
	}
	buildTicks() {
		return [];
	}
	afterBuildTicks() {
		this._callHooks("afterBuildTicks");
	}
	beforeTickToLabelConversion() {
		Q(this.options.beforeTickToLabelConversion, [this]);
	}
	generateTickLabels(t) {
		const e = this.options.ticks;
		let s, i, r;
		for (s = 0, i = t.length; s < i; s++)
			(r = t[s]), (r.label = Q(e.callback, [r.value, s, t], this));
	}
	afterTickToLabelConversion() {
		Q(this.options.afterTickToLabelConversion, [this]);
	}
	beforeCalculateLabelRotation() {
		Q(this.options.beforeCalculateLabelRotation, [this]);
	}
	calculateLabelRotation() {
		const t = this.options,
			e = t.ticks,
			s = Rl(this.ticks.length, t.ticks.maxTicksLimit),
			i = e.minRotation || 0,
			r = e.maxRotation;
		let o = i,
			a,
			c,
			l;
		if (
			!this._isVisible() ||
			!e.display ||
			i >= r ||
			s <= 1 ||
			!this.isHorizontal()
		) {
			this.labelRotation = i;
			return;
		}
		const h = this._getLabelSizes(),
			u = h.widest.width,
			d = h.highest.height,
			f = wt(this.chart.width - u, 0, this.maxWidth);
		(a = t.offset ? this.maxWidth / s : f / (s - 1)),
			u + 6 > a &&
				((a = f / (s - (t.offset ? 0.5 : 1))),
				(c =
					this.maxHeight -
					hs(t.grid) -
					e.padding -
					Nl(t.title, this.chart.options.font)),
				(l = Math.sqrt(u * u + d * d)),
				(o = Ba(
					Math.min(
						Math.asin(wt((h.highest.height + 6) / a, -1, 1)),
						Math.asin(wt(c / l, -1, 1)) - Math.asin(wt(d / l, -1, 1)),
					),
				)),
				(o = Math.max(i, Math.min(r, o)))),
			(this.labelRotation = o);
	}
	afterCalculateLabelRotation() {
		Q(this.options.afterCalculateLabelRotation, [this]);
	}
	afterAutoSkip() {}
	beforeFit() {
		Q(this.options.beforeFit, [this]);
	}
	fit() {
		const t = { width: 0, height: 0 },
			{
				chart: e,
				options: { ticks: s, title: i, grid: r },
			} = this,
			o = this._isVisible(),
			a = this.isHorizontal();
		if (o) {
			const c = Nl(i, e.options.font);
			if (
				(a
					? ((t.width = this.maxWidth), (t.height = hs(r) + c))
					: ((t.height = this.maxHeight), (t.width = hs(r) + c)),
				s.display && this.ticks.length)
			) {
				const {
						first: l,
						last: h,
						widest: u,
						highest: d,
					} = this._getLabelSizes(),
					f = s.padding * 2,
					g = Qt(this.labelRotation),
					p = Math.cos(g),
					m = Math.sin(g);
				if (a) {
					const b = s.mirror ? 0 : m * u.width + p * d.height;
					t.height = Math.min(this.maxHeight, t.height + b + f);
				} else {
					const b = s.mirror ? 0 : p * u.width + m * d.height;
					t.width = Math.min(this.maxWidth, t.width + b + f);
				}
				this._calculatePadding(l, h, m, p);
			}
		}
		this._handleMargins(),
			a
				? ((this.width = this._length =
						e.width - this._margins.left - this._margins.right),
				  (this.height = t.height))
				: ((this.width = t.width),
				  (this.height = this._length =
						e.height - this._margins.top - this._margins.bottom));
	}
	_calculatePadding(t, e, s, i) {
		const {
				ticks: { align: r, padding: o },
				position: a,
			} = this.options,
			c = this.labelRotation !== 0,
			l = a !== "top" && this.axis === "x";
		if (this.isHorizontal()) {
			const h = this.getPixelForTick(0) - this.left,
				u = this.right - this.getPixelForTick(this.ticks.length - 1);
			let d = 0,
				f = 0;
			c
				? l
					? ((d = i * t.width), (f = s * e.height))
					: ((d = s * t.height), (f = i * e.width))
				: r === "start"
				? (f = e.width)
				: r === "end"
				? (d = t.width)
				: r !== "inner" && ((d = t.width / 2), (f = e.width / 2)),
				(this.paddingLeft = Math.max(
					((d - h + o) * this.width) / (this.width - h),
					0,
				)),
				(this.paddingRight = Math.max(
					((f - u + o) * this.width) / (this.width - u),
					0,
				));
		} else {
			let h = e.height / 2,
				u = t.height / 2;
			r === "start"
				? ((h = 0), (u = t.height))
				: r === "end" && ((h = e.height), (u = 0)),
				(this.paddingTop = h + o),
				(this.paddingBottom = u + o);
		}
	}
	_handleMargins() {
		this._margins &&
			((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
			(this._margins.top = Math.max(this.paddingTop, this._margins.top)),
			(this._margins.right = Math.max(this.paddingRight, this._margins.right)),
			(this._margins.bottom = Math.max(
				this.paddingBottom,
				this._margins.bottom,
			)));
	}
	afterFit() {
		Q(this.options.afterFit, [this]);
	}
	isHorizontal() {
		const { axis: t, position: e } = this.options;
		return e === "top" || e === "bottom" || t === "x";
	}
	isFullSize() {
		return this.options.fullSize;
	}
	_convertTicksToLabels(t) {
		this.beforeTickToLabelConversion(), this.generateTickLabels(t);
		let e, s;
		for (e = 0, s = t.length; e < s; e++)
			q(t[e].label) && (t.splice(e, 1), s--, e--);
		this.afterTickToLabelConversion();
	}
	_getLabelSizes() {
		let t = this._labelSizes;
		if (!t) {
			const e = this.options.ticks.sampleSize;
			let s = this.ticks;
			e < s.length && (s = Ll(s, e)),
				(this._labelSizes = t =
					this._computeLabelSizes(
						s,
						s.length,
						this.options.ticks.maxTicksLimit,
					));
		}
		return t;
	}
	_computeLabelSizes(t, e, s) {
		const { ctx: i, _longestTextCache: r } = this,
			o = [],
			a = [],
			c = Math.floor(e / Rl(e, s));
		let l = 0,
			h = 0,
			u,
			d,
			f,
			g,
			p,
			m,
			b,
			y,
			v,
			_,
			x;
		for (u = 0; u < e; u += c) {
			if (
				((g = t[u].label),
				(p = this._resolveTickFontOptions(u)),
				(i.font = m = p.string),
				(b = r[m] = r[m] || { data: {}, gc: [] }),
				(y = p.lineHeight),
				(v = _ = 0),
				!q(g) && !J(g))
			)
				(v = ir(i, b.data, b.gc, v, g)), (_ = y);
			else if (J(g))
				for (d = 0, f = g.length; d < f; ++d)
					(x = g[d]),
						!q(x) && !J(x) && ((v = ir(i, b.data, b.gc, v, x)), (_ += y));
			o.push(v), a.push(_), (l = Math.max(v, l)), (h = Math.max(_, h));
		}
		Zy(r, e);
		const k = o.indexOf(l),
			S = a.indexOf(h),
			E = (T) => ({ width: o[T] || 0, height: a[T] || 0 });
		return {
			first: E(0),
			last: E(e - 1),
			widest: E(k),
			highest: E(S),
			widths: o,
			heights: a,
		};
	}
	getLabelForValue(t) {
		return t;
	}
	getPixelForValue(t, e) {
		return NaN;
	}
	getValueForPixel(t) {}
	getPixelForTick(t) {
		const e = this.ticks;
		return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
	}
	getPixelForDecimal(t) {
		this._reversePixels && (t = 1 - t);
		const e = this._startPixel + t * this._length;
		return Lp(this._alignToPixels ? tn(this.chart, e, 0) : e);
	}
	getDecimalForPixel(t) {
		const e = (t - this._startPixel) / this._length;
		return this._reversePixels ? 1 - e : e;
	}
	getBasePixel() {
		return this.getPixelForValue(this.getBaseValue());
	}
	getBaseValue() {
		const { min: t, max: e } = this;
		return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
	}
	getContext(t) {
		const e = this.ticks || [];
		if (t >= 0 && t < e.length) {
			const s = e[t];
			return s.$context || (s.$context = eb(this.getContext(), t, s));
		}
		return this.$context || (this.$context = tb(this.chart.getContext(), this));
	}
	_tickSize() {
		const t = this.options.ticks,
			e = Qt(this.labelRotation),
			s = Math.abs(Math.cos(e)),
			i = Math.abs(Math.sin(e)),
			r = this._getLabelSizes(),
			o = t.autoSkipPadding || 0,
			a = r ? r.widest.width + o : 0,
			c = r ? r.highest.height + o : 0;
		return this.isHorizontal()
			? c * s > a * i
				? a / s
				: c / i
			: c * i < a * s
			? c / s
			: a / i;
	}
	_isVisible() {
		const t = this.options.display;
		return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
	}
	_computeGridLineItems(t) {
		const e = this.axis,
			s = this.chart,
			i = this.options,
			{ grid: r, position: o, border: a } = i,
			c = r.offset,
			l = this.isHorizontal(),
			u = this.ticks.length + (c ? 1 : 0),
			d = hs(r),
			f = [],
			g = a.setContext(this.getContext()),
			p = g.display ? g.width : 0,
			m = p / 2,
			b = function (X) {
				return tn(s, X, p);
			};
		let y, v, _, x, k, S, E, T, M, I, j, lt;
		if (o === "top")
			(y = b(this.bottom)),
				(S = this.bottom - d),
				(T = y - m),
				(I = b(t.top) + m),
				(lt = t.bottom);
		else if (o === "bottom")
			(y = b(this.top)),
				(I = t.top),
				(lt = b(t.bottom) - m),
				(S = y + m),
				(T = this.top + d);
		else if (o === "left")
			(y = b(this.right)),
				(k = this.right - d),
				(E = y - m),
				(M = b(t.left) + m),
				(j = t.right);
		else if (o === "right")
			(y = b(this.left)),
				(M = t.left),
				(j = b(t.right) - m),
				(k = y + m),
				(E = this.left + d);
		else if (e === "x") {
			if (o === "center") y = b((t.top + t.bottom) / 2 + 0.5);
			else if (U(o)) {
				const X = Object.keys(o)[0],
					et = o[X];
				y = b(this.chart.scales[X].getPixelForValue(et));
			}
			(I = t.top), (lt = t.bottom), (S = y + m), (T = S + d);
		} else if (e === "y") {
			if (o === "center") y = b((t.left + t.right) / 2);
			else if (U(o)) {
				const X = Object.keys(o)[0],
					et = o[X];
				y = b(this.chart.scales[X].getPixelForValue(et));
			}
			(k = y - m), (E = k - d), (M = t.left), (j = t.right);
		}
		const Ft = B(i.ticks.maxTicksLimit, u),
			W = Math.max(1, Math.ceil(u / Ft));
		for (v = 0; v < u; v += W) {
			const X = this.getContext(v),
				et = r.setContext(X),
				zt = a.setContext(X),
				xt = et.lineWidth,
				Te = et.color,
				Je = zt.dash || [],
				te = zt.dashOffset,
				le = et.tickWidth,
				Gt = et.tickColor,
				rs = et.tickBorderDash || [],
				os = et.tickBorderDashOffset;
			(_ = Jy(this, v, c)),
				_ !== void 0 &&
					((x = tn(s, _, xt)),
					l ? (k = E = M = j = x) : (S = T = I = lt = x),
					f.push({
						tx1: k,
						ty1: S,
						tx2: E,
						ty2: T,
						x1: M,
						y1: I,
						x2: j,
						y2: lt,
						width: xt,
						color: Te,
						borderDash: Je,
						borderDashOffset: te,
						tickWidth: le,
						tickColor: Gt,
						tickBorderDash: rs,
						tickBorderDashOffset: os,
					}));
		}
		return (this._ticksLength = u), (this._borderValue = y), f;
	}
	_computeLabelItems(t) {
		const e = this.axis,
			s = this.options,
			{ position: i, ticks: r } = s,
			o = this.isHorizontal(),
			a = this.ticks,
			{ align: c, crossAlign: l, padding: h, mirror: u } = r,
			d = hs(s.grid),
			f = d + h,
			g = u ? -h : f,
			p = -Qt(this.labelRotation),
			m = [];
		let b,
			y,
			v,
			_,
			x,
			k,
			S,
			E,
			T,
			M,
			I,
			j,
			lt = "middle";
		if (i === "top")
			(k = this.bottom - g), (S = this._getXAxisLabelAlignment());
		else if (i === "bottom")
			(k = this.top + g), (S = this._getXAxisLabelAlignment());
		else if (i === "left") {
			const W = this._getYAxisLabelAlignment(d);
			(S = W.textAlign), (x = W.x);
		} else if (i === "right") {
			const W = this._getYAxisLabelAlignment(d);
			(S = W.textAlign), (x = W.x);
		} else if (e === "x") {
			if (i === "center") k = (t.top + t.bottom) / 2 + f;
			else if (U(i)) {
				const W = Object.keys(i)[0],
					X = i[W];
				k = this.chart.scales[W].getPixelForValue(X) + f;
			}
			S = this._getXAxisLabelAlignment();
		} else if (e === "y") {
			if (i === "center") x = (t.left + t.right) / 2 - f;
			else if (U(i)) {
				const W = Object.keys(i)[0],
					X = i[W];
				x = this.chart.scales[W].getPixelForValue(X);
			}
			S = this._getYAxisLabelAlignment(d).textAlign;
		}
		e === "y" &&
			(c === "start" ? (lt = "top") : c === "end" && (lt = "bottom"));
		const Ft = this._getLabelSizes();
		for (b = 0, y = a.length; b < y; ++b) {
			(v = a[b]), (_ = v.label);
			const W = r.setContext(this.getContext(b));
			(E = this.getPixelForTick(b) + r.labelOffset),
				(T = this._resolveTickFontOptions(b)),
				(M = T.lineHeight),
				(I = J(_) ? _.length : 1);
			const X = I / 2,
				et = W.color,
				zt = W.textStrokeColor,
				xt = W.textStrokeWidth;
			let Te = S;
			o
				? ((x = E),
				  S === "inner" &&
						(b === y - 1
							? (Te = this.options.reverse ? "left" : "right")
							: b === 0
							? (Te = this.options.reverse ? "right" : "left")
							: (Te = "center")),
				  i === "top"
						? l === "near" || p !== 0
							? (j = -I * M + M / 2)
							: l === "center"
							? (j = -Ft.highest.height / 2 - X * M + M)
							: (j = -Ft.highest.height + M / 2)
						: l === "near" || p !== 0
						? (j = M / 2)
						: l === "center"
						? (j = Ft.highest.height / 2 - X * M)
						: (j = Ft.highest.height - I * M),
				  u && (j *= -1),
				  p !== 0 && !W.showLabelBackdrop && (x += (M / 2) * Math.sin(p)))
				: ((k = E), (j = ((1 - I) * M) / 2));
			let Je;
			if (W.showLabelBackdrop) {
				const te = Lt(W.backdropPadding),
					le = Ft.heights[b],
					Gt = Ft.widths[b];
				let rs = j - te.top,
					os = 0 - te.left;
				switch (lt) {
					case "middle":
						rs -= le / 2;
						break;
					case "bottom":
						rs -= le;
						break;
				}
				switch (S) {
					case "center":
						os -= Gt / 2;
						break;
					case "right":
						os -= Gt;
						break;
				}
				Je = {
					left: os,
					top: rs,
					width: Gt + te.width,
					height: le + te.height,
					color: W.backdropColor,
				};
			}
			m.push({
				label: _,
				font: T,
				textOffset: j,
				options: {
					rotation: p,
					color: et,
					strokeColor: zt,
					strokeWidth: xt,
					textAlign: Te,
					textBaseline: lt,
					translation: [x, k],
					backdrop: Je,
				},
			});
		}
		return m;
	}
	_getXAxisLabelAlignment() {
		const { position: t, ticks: e } = this.options;
		if (-Qt(this.labelRotation)) return t === "top" ? "left" : "right";
		let i = "center";
		return (
			e.align === "start"
				? (i = "left")
				: e.align === "end"
				? (i = "right")
				: e.align === "inner" && (i = "inner"),
			i
		);
	}
	_getYAxisLabelAlignment(t) {
		const {
				position: e,
				ticks: { crossAlign: s, mirror: i, padding: r },
			} = this.options,
			o = this._getLabelSizes(),
			a = t + r,
			c = o.widest.width;
		let l, h;
		return (
			e === "left"
				? i
					? ((h = this.right + r),
					  s === "near"
							? (l = "left")
							: s === "center"
							? ((l = "center"), (h += c / 2))
							: ((l = "right"), (h += c)))
					: ((h = this.right - a),
					  s === "near"
							? (l = "right")
							: s === "center"
							? ((l = "center"), (h -= c / 2))
							: ((l = "left"), (h = this.left)))
				: e === "right"
				? i
					? ((h = this.left + r),
					  s === "near"
							? (l = "right")
							: s === "center"
							? ((l = "center"), (h -= c / 2))
							: ((l = "left"), (h -= c)))
					: ((h = this.left + a),
					  s === "near"
							? (l = "left")
							: s === "center"
							? ((l = "center"), (h += c / 2))
							: ((l = "right"), (h = this.right)))
				: (l = "right"),
			{ textAlign: l, x: h }
		);
	}
	_computeLabelArea() {
		if (this.options.ticks.mirror) return;
		const t = this.chart,
			e = this.options.position;
		if (e === "left" || e === "right")
			return { top: 0, left: this.left, bottom: t.height, right: this.right };
		if (e === "top" || e === "bottom")
			return { top: this.top, left: 0, bottom: this.bottom, right: t.width };
	}
	drawBackground() {
		const {
			ctx: t,
			options: { backgroundColor: e },
			left: s,
			top: i,
			width: r,
			height: o,
		} = this;
		e && (t.save(), (t.fillStyle = e), t.fillRect(s, i, r, o), t.restore());
	}
	getLineWidthForValue(t) {
		const e = this.options.grid;
		if (!this._isVisible() || !e.display) return 0;
		const i = this.ticks.findIndex((r) => r.value === t);
		return i >= 0 ? e.setContext(this.getContext(i)).lineWidth : 0;
	}
	drawGrid(t) {
		const e = this.options.grid,
			s = this.ctx,
			i =
				this._gridLineItems ||
				(this._gridLineItems = this._computeGridLineItems(t));
		let r, o;
		const a = (c, l, h) => {
			!h.width ||
				!h.color ||
				(s.save(),
				(s.lineWidth = h.width),
				(s.strokeStyle = h.color),
				s.setLineDash(h.borderDash || []),
				(s.lineDashOffset = h.borderDashOffset),
				s.beginPath(),
				s.moveTo(c.x, c.y),
				s.lineTo(l.x, l.y),
				s.stroke(),
				s.restore());
		};
		if (e.display)
			for (r = 0, o = i.length; r < o; ++r) {
				const c = i[r];
				e.drawOnChartArea && a({ x: c.x1, y: c.y1 }, { x: c.x2, y: c.y2 }, c),
					e.drawTicks &&
						a(
							{ x: c.tx1, y: c.ty1 },
							{ x: c.tx2, y: c.ty2 },
							{
								color: c.tickColor,
								width: c.tickWidth,
								borderDash: c.tickBorderDash,
								borderDashOffset: c.tickBorderDashOffset,
							},
						);
			}
	}
	drawBorder() {
		const {
				chart: t,
				ctx: e,
				options: { border: s, grid: i },
			} = this,
			r = s.setContext(this.getContext()),
			o = s.display ? r.width : 0;
		if (!o) return;
		const a = i.setContext(this.getContext(0)).lineWidth,
			c = this._borderValue;
		let l, h, u, d;
		this.isHorizontal()
			? ((l = tn(t, this.left, o) - o / 2),
			  (h = tn(t, this.right, a) + a / 2),
			  (u = d = c))
			: ((u = tn(t, this.top, o) - o / 2),
			  (d = tn(t, this.bottom, a) + a / 2),
			  (l = h = c)),
			e.save(),
			(e.lineWidth = r.width),
			(e.strokeStyle = r.color),
			e.beginPath(),
			e.moveTo(l, u),
			e.lineTo(h, d),
			e.stroke(),
			e.restore();
	}
	drawLabels(t) {
		if (!this.options.ticks.display) return;
		const s = this.ctx,
			i = this._computeLabelArea();
		i && Pr(s, i);
		const r = this.getLabelItems(t);
		for (const o of r) {
			const a = o.options,
				c = o.font,
				l = o.label,
				h = o.textOffset;
			mn(s, l, 0, h, c, a);
		}
		i && Rr(s);
	}
	drawTitle() {
		const {
			ctx: t,
			options: { position: e, title: s, reverse: i },
		} = this;
		if (!s.display) return;
		const r = ut(s.font),
			o = Lt(s.padding),
			a = s.align;
		let c = r.lineHeight / 2;
		e === "bottom" || e === "center" || U(e)
			? ((c += o.bottom),
			  J(s.text) && (c += r.lineHeight * (s.text.length - 1)))
			: (c += o.top);
		const {
			titleX: l,
			titleY: h,
			maxWidth: u,
			rotation: d,
		} = sb(this, c, e, a);
		mn(t, s.text, 0, 0, r, {
			color: s.color,
			maxWidth: u,
			rotation: d,
			textAlign: nb(a, e, i),
			textBaseline: "middle",
			translation: [l, h],
		});
	}
	draw(t) {
		this._isVisible() &&
			(this.drawBackground(),
			this.drawGrid(t),
			this.drawBorder(),
			this.drawTitle(),
			this.drawLabels(t));
	}
	_layers() {
		const t = this.options,
			e = (t.ticks && t.ticks.z) || 0,
			s = B(t.grid && t.grid.z, -1),
			i = B(t.border && t.border.z, 0);
		return !this._isVisible() || this.draw !== wn.prototype.draw
			? [
					{
						z: e,
						draw: (r) => {
							this.draw(r);
						},
					},
			  ]
			: [
					{
						z: s,
						draw: (r) => {
							this.drawBackground(), this.drawGrid(r), this.drawTitle();
						},
					},
					{
						z: i,
						draw: () => {
							this.drawBorder();
						},
					},
					{
						z: e,
						draw: (r) => {
							this.drawLabels(r);
						},
					},
			  ];
	}
	getMatchingVisibleMetas(t) {
		const e = this.chart.getSortedVisibleDatasetMetas(),
			s = this.axis + "AxisID",
			i = [];
		let r, o;
		for (r = 0, o = e.length; r < o; ++r) {
			const a = e[r];
			a[s] === this.id && (!t || a.type === t) && i.push(a);
		}
		return i;
	}
	_resolveTickFontOptions(t) {
		const e = this.options.ticks.setContext(this.getContext(t));
		return ut(e.font);
	}
	_maxDigits() {
		const t = this._resolveTickFontOptions(0).lineHeight;
		return (this.isHorizontal() ? this.width : this.height) / t;
	}
}
class Ti {
	constructor(t, e, s) {
		(this.type = t),
			(this.scope = e),
			(this.override = s),
			(this.items = Object.create(null));
	}
	isForType(t) {
		return Object.prototype.isPrototypeOf.call(
			this.type.prototype,
			t.prototype,
		);
	}
	register(t) {
		const e = Object.getPrototypeOf(t);
		let s;
		ob(e) && (s = this.register(e));
		const i = this.items,
			r = t.id,
			o = this.scope + "." + r;
		if (!r) throw new Error("class does not have id: " + t);
		return (
			r in i ||
				((i[r] = t),
				ib(t, o, s),
				this.override && ht.override(t.id, t.overrides)),
			o
		);
	}
	get(t) {
		return this.items[t];
	}
	unregister(t) {
		const e = this.items,
			s = t.id,
			i = this.scope;
		s in e && delete e[s],
			i && s in ht[i] && (delete ht[i][s], this.override && delete pn[s]);
	}
}
function ib(n, t, e) {
	const s = Rs(Object.create(null), [
		e ? ht.get(e) : {},
		ht.get(t),
		n.defaults,
	]);
	ht.set(t, s),
		n.defaultRoutes && rb(t, n.defaultRoutes),
		n.descriptors && ht.describe(t, n.descriptors);
}
function rb(n, t) {
	Object.keys(t).forEach((e) => {
		const s = e.split("."),
			i = s.pop(),
			r = [n].concat(s).join("."),
			o = t[e].split("."),
			a = o.pop(),
			c = o.join(".");
		ht.route(r, i, c, a);
	});
}
function ob(n) {
	return "id" in n && "defaults" in n;
}
class ab {
	constructor() {
		(this.controllers = new Ti(Ce, "datasets", !0)),
			(this.elements = new Ti(ce, "elements")),
			(this.plugins = new Ti(Object, "plugins")),
			(this.scales = new Ti(wn, "scales")),
			(this._typedRegistries = [this.controllers, this.scales, this.elements]);
	}
	add(...t) {
		this._each("register", t);
	}
	remove(...t) {
		this._each("unregister", t);
	}
	addControllers(...t) {
		this._each("register", t, this.controllers);
	}
	addElements(...t) {
		this._each("register", t, this.elements);
	}
	addPlugins(...t) {
		this._each("register", t, this.plugins);
	}
	addScales(...t) {
		this._each("register", t, this.scales);
	}
	getController(t) {
		return this._get(t, this.controllers, "controller");
	}
	getElement(t) {
		return this._get(t, this.elements, "element");
	}
	getPlugin(t) {
		return this._get(t, this.plugins, "plugin");
	}
	getScale(t) {
		return this._get(t, this.scales, "scale");
	}
	removeControllers(...t) {
		this._each("unregister", t, this.controllers);
	}
	removeElements(...t) {
		this._each("unregister", t, this.elements);
	}
	removePlugins(...t) {
		this._each("unregister", t, this.plugins);
	}
	removeScales(...t) {
		this._each("unregister", t, this.scales);
	}
	_each(t, e, s) {
		[...e].forEach((i) => {
			const r = s || this._getRegistryForType(i);
			s || r.isForType(i) || (r === this.plugins && i.id)
				? this._exec(t, r, i)
				: G(i, (o) => {
						const a = s || this._getRegistryForType(o);
						this._exec(t, a, o);
				  });
		});
	}
	_exec(t, e, s) {
		const i = Fa(t);
		Q(s["before" + i], [], s), e[t](s), Q(s["after" + i], [], s);
	}
	_getRegistryForType(t) {
		for (let e = 0; e < this._typedRegistries.length; e++) {
			const s = this._typedRegistries[e];
			if (s.isForType(t)) return s;
		}
		return this.plugins;
	}
	_get(t, e, s) {
		const i = e.get(t);
		if (i === void 0)
			throw new Error('"' + t + '" is not a registered ' + s + ".");
		return i;
	}
}
var Bt = new ab();
class cb {
	constructor() {
		this._init = [];
	}
	notify(t, e, s, i) {
		e === "beforeInit" &&
			((this._init = this._createDescriptors(t, !0)),
			this._notify(this._init, t, "install"));
		const r = i ? this._descriptors(t).filter(i) : this._descriptors(t),
			o = this._notify(r, t, e, s);
		return (
			e === "afterDestroy" &&
				(this._notify(r, t, "stop"), this._notify(this._init, t, "uninstall")),
			o
		);
	}
	_notify(t, e, s, i) {
		i = i || {};
		for (const r of t) {
			const o = r.plugin,
				a = o[s],
				c = [e, i, r.options];
			if (Q(a, c, o) === !1 && i.cancelable) return !1;
		}
		return !0;
	}
	invalidate() {
		q(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
	}
	_descriptors(t) {
		if (this._cache) return this._cache;
		const e = (this._cache = this._createDescriptors(t));
		return this._notifyStateChanges(t), e;
	}
	_createDescriptors(t, e) {
		const s = t && t.config,
			i = B(s.options && s.options.plugins, {}),
			r = lb(s);
		return i === !1 && !e ? [] : ub(t, r, i, e);
	}
	_notifyStateChanges(t) {
		const e = this._oldCache || [],
			s = this._cache,
			i = (r, o) =>
				r.filter((a) => !o.some((c) => a.plugin.id === c.plugin.id));
		this._notify(i(e, s), t, "stop"), this._notify(i(s, e), t, "start");
	}
}
function lb(n) {
	const t = {},
		e = [],
		s = Object.keys(Bt.plugins.items);
	for (let r = 0; r < s.length; r++) e.push(Bt.getPlugin(s[r]));
	const i = n.plugins || [];
	for (let r = 0; r < i.length; r++) {
		const o = i[r];
		e.indexOf(o) === -1 && (e.push(o), (t[o.id] = !0));
	}
	return { plugins: e, localIds: t };
}
function hb(n, t) {
	return !t && n === !1 ? null : n === !0 ? {} : n;
}
function ub(n, { plugins: t, localIds: e }, s, i) {
	const r = [],
		o = n.getContext();
	for (const a of t) {
		const c = a.id,
			l = hb(s[c], i);
		l !== null &&
			r.push({
				plugin: a,
				options: db(n.config, { plugin: a, local: e[c] }, l, o),
			});
	}
	return r;
}
function db(n, { plugin: t, local: e }, s, i) {
	const r = n.pluginScopeKeys(t),
		o = n.getOptionScopes(s, r);
	return (
		e && t.defaults && o.push(t.defaults),
		n.createResolver(o, i, [""], { scriptable: !1, indexable: !1, allKeys: !0 })
	);
}
function Jo(n, t) {
	const e = ht.datasets[n] || {};
	return (
		((t.datasets || {})[n] || {}).indexAxis || t.indexAxis || e.indexAxis || "x"
	);
}
function fb(n, t) {
	let e = n;
	return (
		n === "_index_" ? (e = t) : n === "_value_" && (e = t === "x" ? "y" : "x"),
		e
	);
}
function gb(n, t) {
	return n === t ? "_index_" : "_value_";
}
function pb(n) {
	if (n === "top" || n === "bottom") return "x";
	if (n === "left" || n === "right") return "y";
}
function ar(n, t) {
	if (
		n === "x" ||
		n === "y" ||
		n === "r" ||
		((n =
			t.axis || pb(t.position) || (n.length > 1 && ar(n[0].toLowerCase(), t))),
		n)
	)
		return n;
	throw new Error(
		`Cannot determine type of '${name}' axis. Please provide 'axis' or 'position' option.`,
	);
}
function mb(n, t) {
	const e = pn[n.type] || { scales: {} },
		s = t.scales || {},
		i = Jo(n.type, t),
		r = Object.create(null);
	return (
		Object.keys(s).forEach((o) => {
			const a = s[o];
			if (!U(a))
				return console.error(`Invalid scale configuration for scale: ${o}`);
			if (a._proxy)
				return console.warn(
					`Ignoring resolver passed as options for scale: ${o}`,
				);
			const c = ar(o, a),
				l = gb(c, i),
				h = e.scales || {};
			r[o] = _s(Object.create(null), [{ axis: c }, a, h[c], h[l]]);
		}),
		n.data.datasets.forEach((o) => {
			const a = o.type || n.type,
				c = o.indexAxis || Jo(a, t),
				h = (pn[a] || {}).scales || {};
			Object.keys(h).forEach((u) => {
				const d = fb(u, c),
					f = o[d + "AxisID"] || d;
				(r[f] = r[f] || Object.create(null)),
					_s(r[f], [{ axis: d }, s[f], h[u]]);
			});
		}),
		Object.keys(r).forEach((o) => {
			const a = r[o];
			_s(a, [ht.scales[a.type], ht.scale]);
		}),
		r
	);
}
function rd(n) {
	const t = n.options || (n.options = {});
	(t.plugins = B(t.plugins, {})), (t.scales = mb(n, t));
}
function od(n) {
	return (
		(n = n || {}),
		(n.datasets = n.datasets || []),
		(n.labels = n.labels || []),
		n
	);
}
function yb(n) {
	return (n = n || {}), (n.data = od(n.data)), rd(n), n;
}
const Fl = new Map(),
	ad = new Set();
function Ii(n, t) {
	let e = Fl.get(n);
	return e || ((e = t()), Fl.set(n, e), ad.add(e)), e;
}
const us = (n, t, e) => {
	const s = je(t, e);
	s !== void 0 && n.add(s);
};
class bb {
	constructor(t) {
		(this._config = yb(t)),
			(this._scopeCache = new Map()),
			(this._resolverCache = new Map());
	}
	get platform() {
		return this._config.platform;
	}
	get type() {
		return this._config.type;
	}
	set type(t) {
		this._config.type = t;
	}
	get data() {
		return this._config.data;
	}
	set data(t) {
		this._config.data = od(t);
	}
	get options() {
		return this._config.options;
	}
	set options(t) {
		this._config.options = t;
	}
	get plugins() {
		return this._config.plugins;
	}
	update() {
		const t = this._config;
		this.clearCache(), rd(t);
	}
	clearCache() {
		this._scopeCache.clear(), this._resolverCache.clear();
	}
	datasetScopeKeys(t) {
		return Ii(t, () => [[`datasets.${t}`, ""]]);
	}
	datasetAnimationScopeKeys(t, e) {
		return Ii(`${t}.transition.${e}`, () => [
			[`datasets.${t}.transitions.${e}`, `transitions.${e}`],
			[`datasets.${t}`, ""],
		]);
	}
	datasetElementScopeKeys(t, e) {
		return Ii(`${t}-${e}`, () => [
			[`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ""],
		]);
	}
	pluginScopeKeys(t) {
		const e = t.id,
			s = this.type;
		return Ii(`${s}-plugin-${e}`, () => [
			[`plugins.${e}`, ...(t.additionalOptionScopes || [])],
		]);
	}
	_cachedScopes(t, e) {
		const s = this._scopeCache;
		let i = s.get(t);
		return (!i || e) && ((i = new Map()), s.set(t, i)), i;
	}
	getOptionScopes(t, e, s) {
		const { options: i, type: r } = this,
			o = this._cachedScopes(t, s),
			a = o.get(e);
		if (a) return a;
		const c = new Set();
		e.forEach((h) => {
			t && (c.add(t), h.forEach((u) => us(c, t, u))),
				h.forEach((u) => us(c, i, u)),
				h.forEach((u) => us(c, pn[r] || {}, u)),
				h.forEach((u) => us(c, ht, u)),
				h.forEach((u) => us(c, Xo, u));
		});
		const l = Array.from(c);
		return (
			l.length === 0 && l.push(Object.create(null)), ad.has(e) && o.set(e, l), l
		);
	}
	chartOptionScopes() {
		const { options: t, type: e } = this;
		return [t, pn[e] || {}, ht.datasets[e] || {}, { type: e }, ht, Xo];
	}
	resolveNamedOptions(t, e, s, i = [""]) {
		const r = { $shared: !0 },
			{ resolver: o, subPrefixes: a } = Bl(this._resolverCache, t, i);
		let c = o;
		if (xb(o, e)) {
			(r.$shared = !1), (s = He(s) ? s() : s);
			const l = this.createResolver(t, s, a);
			c = Bn(o, s, l);
		}
		for (const l of e) r[l] = c[l];
		return r;
	}
	createResolver(t, e, s = [""], i) {
		const { resolver: r } = Bl(this._resolverCache, t, s);
		return U(e) ? Bn(r, e, void 0, i) : r;
	}
}
function Bl(n, t, e) {
	let s = n.get(t);
	s || ((s = new Map()), n.set(t, s));
	const i = e.join();
	let r = s.get(i);
	return (
		r ||
			((r = {
				resolver: Ua(t, e),
				subPrefixes: e.filter((a) => !a.toLowerCase().includes("hover")),
			}),
			s.set(i, r)),
		r
	);
}
const vb = (n) =>
	U(n) && Object.getOwnPropertyNames(n).reduce((t, e) => t || He(n[e]), !1);
function xb(n, t) {
	const { isScriptable: e, isIndexable: s } = Bu(n);
	for (const i of t) {
		const r = e(i),
			o = s(i),
			a = (o || r) && n[i];
		if ((r && (He(a) || vb(a))) || (o && J(a))) return !0;
	}
	return !1;
}
var _b = "4.2.1";
const wb = ["top", "bottom", "left", "right", "chartArea"];
function Vl(n, t) {
	return n === "top" || n === "bottom" || (wb.indexOf(n) === -1 && t === "x");
}
function zl(n, t) {
	return function (e, s) {
		return e[n] === s[n] ? e[t] - s[t] : e[n] - s[n];
	};
}
function $l(n) {
	const t = n.chart,
		e = t.options.animation;
	t.notifyPlugins("afterRender"), Q(e && e.onComplete, [n], t);
}
function Sb(n) {
	const t = n.chart,
		e = t.options.animation;
	Q(e && e.onProgress, [n], t);
}
function cd(n) {
	return (
		Hu() && typeof n == "string"
			? (n = document.getElementById(n))
			: n && n.length && (n = n[0]),
		n && n.canvas && (n = n.canvas),
		n
	);
}
const Wi = {},
	Ul = (n) => {
		const t = cd(n);
		return Object.values(Wi)
			.filter((e) => e.canvas === t)
			.pop();
	};
function Eb(n, t, e) {
	const s = Object.keys(n);
	for (const i of s) {
		const r = +i;
		if (r >= t) {
			const o = n[i];
			delete n[i], (e > 0 || r > t) && (n[r + e] = o);
		}
	}
}
function kb(n, t, e, s) {
	return !e || n.type === "mouseout" ? null : s ? t : n;
}
function Cb(n) {
	const { xScale: t, yScale: e } = n;
	if (t && e)
		return { left: t.left, right: t.right, top: e.top, bottom: e.bottom };
}
class De {
	static defaults = ht;
	static instances = Wi;
	static overrides = pn;
	static registry = Bt;
	static version = _b;
	static getChart = Ul;
	static register(...t) {
		Bt.add(...t), jl();
	}
	static unregister(...t) {
		Bt.remove(...t), jl();
	}
	constructor(t, e) {
		const s = (this.config = new bb(e)),
			i = cd(t),
			r = Ul(i);
		if (r)
			throw new Error(
				"Canvas is already in use. Chart with ID '" +
					r.id +
					"' must be destroyed before the canvas with ID '" +
					r.canvas.id +
					"' can be reused.",
			);
		const o = s.createResolver(s.chartOptionScopes(), this.getContext());
		(this.platform = new (s.platform || Hy(i))()),
			this.platform.updateConfig(s);
		const a = this.platform.acquireContext(i, o.aspectRatio),
			c = a && a.canvas,
			l = c && c.height,
			h = c && c.width;
		if (
			((this.id = Sp()),
			(this.ctx = a),
			(this.canvas = c),
			(this.width = h),
			(this.height = l),
			(this._options = o),
			(this._aspectRatio = this.aspectRatio),
			(this._layers = []),
			(this._metasets = []),
			(this._stacks = void 0),
			(this.boxes = []),
			(this.currentDevicePixelRatio = void 0),
			(this.chartArea = void 0),
			(this._active = []),
			(this._lastEvent = void 0),
			(this._listeners = {}),
			(this._responsiveListeners = void 0),
			(this._sortedMetasets = []),
			(this.scales = {}),
			(this._plugins = new cb()),
			(this.$proxies = {}),
			(this._hiddenIndices = {}),
			(this.attached = !1),
			(this._animationsDisabled = void 0),
			(this.$context = void 0),
			(this._doResize = Vp((u) => this.update(u), o.resizeDelay || 0)),
			(this._dataChanges = []),
			(Wi[this.id] = this),
			!a || !c)
		) {
			console.error(
				"Failed to create chart: can't acquire context from the given item",
			);
			return;
		}
		ue.listen(this, "complete", $l),
			ue.listen(this, "progress", Sb),
			this._initialize(),
			this.attached && this.update();
	}
	get aspectRatio() {
		const {
			options: { aspectRatio: t, maintainAspectRatio: e },
			width: s,
			height: i,
			_aspectRatio: r,
		} = this;
		return q(t) ? (e && r ? r : i ? s / i : null) : t;
	}
	get data() {
		return this.config.data;
	}
	set data(t) {
		this.config.data = t;
	}
	get options() {
		return this._options;
	}
	set options(t) {
		this.config.options = t;
	}
	get registry() {
		return Bt;
	}
	_initialize() {
		return (
			this.notifyPlugins("beforeInit"),
			this.options.responsive
				? this.resize()
				: dl(this, this.options.devicePixelRatio),
			this.bindEvents(),
			this.notifyPlugins("afterInit"),
			this
		);
	}
	clear() {
		return ll(this.canvas, this.ctx), this;
	}
	stop() {
		return ue.stop(this), this;
	}
	resize(t, e) {
		ue.running(this)
			? (this._resizeBeforeDraw = { width: t, height: e })
			: this._resize(t, e);
	}
	_resize(t, e) {
		const s = this.options,
			i = this.canvas,
			r = s.maintainAspectRatio && this.aspectRatio,
			o = this.platform.getMaximumSize(i, t, e, r),
			a = s.devicePixelRatio || this.platform.getDevicePixelRatio(),
			c = this.width ? "resize" : "attach";
		(this.width = o.width),
			(this.height = o.height),
			(this._aspectRatio = this.aspectRatio),
			dl(this, a, !0) &&
				(this.notifyPlugins("resize", { size: o }),
				Q(s.onResize, [this, o], this),
				this.attached && this._doResize(c) && this.render());
	}
	ensureScalesHaveIDs() {
		const e = this.options.scales || {};
		G(e, (s, i) => {
			s.id = i;
		});
	}
	buildOrUpdateScales() {
		const t = this.options,
			e = t.scales,
			s = this.scales,
			i = Object.keys(s).reduce((o, a) => ((o[a] = !1), o), {});
		let r = [];
		e &&
			(r = r.concat(
				Object.keys(e).map((o) => {
					const a = e[o],
						c = ar(o, a),
						l = c === "r",
						h = c === "x";
					return {
						options: a,
						dposition: l ? "chartArea" : h ? "bottom" : "left",
						dtype: l ? "radialLinear" : h ? "category" : "linear",
					};
				}),
			)),
			G(r, (o) => {
				const a = o.options,
					c = a.id,
					l = ar(c, a),
					h = B(a.type, o.dtype);
				(a.position === void 0 || Vl(a.position, l) !== Vl(o.dposition)) &&
					(a.position = o.dposition),
					(i[c] = !0);
				let u = null;
				if (c in s && s[c].type === h) u = s[c];
				else {
					const d = Bt.getScale(h);
					(u = new d({ id: c, type: h, ctx: this.ctx, chart: this })),
						(s[u.id] = u);
				}
				u.init(a, t);
			}),
			G(i, (o, a) => {
				o || delete s[a];
			}),
			G(s, (o) => {
				Ot.configure(this, o, o.options), Ot.addBox(this, o);
			});
	}
	_updateMetasets() {
		const t = this._metasets,
			e = this.data.datasets.length,
			s = t.length;
		if ((t.sort((i, r) => i.index - r.index), s > e)) {
			for (let i = e; i < s; ++i) this._destroyDatasetMeta(i);
			t.splice(e, s - e);
		}
		this._sortedMetasets = t.slice(0).sort(zl("order", "index"));
	}
	_removeUnreferencedMetasets() {
		const {
			_metasets: t,
			data: { datasets: e },
		} = this;
		t.length > e.length && delete this._stacks,
			t.forEach((s, i) => {
				e.filter((r) => r === s._dataset).length === 0 &&
					this._destroyDatasetMeta(i);
			});
	}
	buildOrUpdateControllers() {
		const t = [],
			e = this.data.datasets;
		let s, i;
		for (this._removeUnreferencedMetasets(), s = 0, i = e.length; s < i; s++) {
			const r = e[s];
			let o = this.getDatasetMeta(s);
			const a = r.type || this.config.type;
			if (
				(o.type &&
					o.type !== a &&
					(this._destroyDatasetMeta(s), (o = this.getDatasetMeta(s))),
				(o.type = a),
				(o.indexAxis = r.indexAxis || Jo(a, this.options)),
				(o.order = r.order || 0),
				(o.index = s),
				(o.label = "" + r.label),
				(o.visible = this.isDatasetVisible(s)),
				o.controller)
			)
				o.controller.updateIndex(s), o.controller.linkScales();
			else {
				const c = Bt.getController(a),
					{ datasetElementType: l, dataElementType: h } = ht.datasets[a];
				Object.assign(c, {
					dataElementType: Bt.getElement(h),
					datasetElementType: l && Bt.getElement(l),
				}),
					(o.controller = new c(this, s)),
					t.push(o.controller);
			}
		}
		return this._updateMetasets(), t;
	}
	_resetElements() {
		G(
			this.data.datasets,
			(t, e) => {
				this.getDatasetMeta(e).controller.reset();
			},
			this,
		);
	}
	reset() {
		this._resetElements(), this.notifyPlugins("reset");
	}
	update(t) {
		const e = this.config;
		e.update();
		const s = (this._options = e.createResolver(
				e.chartOptionScopes(),
				this.getContext(),
			)),
			i = (this._animationsDisabled = !s.animation);
		if (
			(this._updateScales(),
			this._checkEventBindings(),
			this._updateHiddenIndices(),
			this._plugins.invalidate(),
			this.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 }) === !1)
		)
			return;
		const r = this.buildOrUpdateControllers();
		this.notifyPlugins("beforeElementsUpdate");
		let o = 0;
		for (let l = 0, h = this.data.datasets.length; l < h; l++) {
			const { controller: u } = this.getDatasetMeta(l),
				d = !i && r.indexOf(u) === -1;
			u.buildOrUpdateElements(d), (o = Math.max(+u.getMaxOverflow(), o));
		}
		(o = this._minPadding = s.layout.autoPadding ? o : 0),
			this._updateLayout(o),
			i ||
				G(r, (l) => {
					l.reset();
				}),
			this._updateDatasets(t),
			this.notifyPlugins("afterUpdate", { mode: t }),
			this._layers.sort(zl("z", "_idx"));
		const { _active: a, _lastEvent: c } = this;
		c
			? this._eventHandler(c, !0)
			: a.length && this._updateHoverStyles(a, a, !0),
			this.render();
	}
	_updateScales() {
		G(this.scales, (t) => {
			Ot.removeBox(this, t);
		}),
			this.ensureScalesHaveIDs(),
			this.buildOrUpdateScales();
	}
	_checkEventBindings() {
		const t = this.options,
			e = new Set(Object.keys(this._listeners)),
			s = new Set(t.events);
		(!tl(e, s) || !!this._responsiveListeners !== t.responsive) &&
			(this.unbindEvents(), this.bindEvents());
	}
	_updateHiddenIndices() {
		const { _hiddenIndices: t } = this,
			e = this._getUniformDataChanges() || [];
		for (const { method: s, start: i, count: r } of e) {
			const o = s === "_removeElements" ? -r : r;
			Eb(t, i, o);
		}
	}
	_getUniformDataChanges() {
		const t = this._dataChanges;
		if (!t || !t.length) return;
		this._dataChanges = [];
		const e = this.data.datasets.length,
			s = (r) =>
				new Set(
					t
						.filter((o) => o[0] === r)
						.map((o, a) => a + "," + o.splice(1).join(",")),
				),
			i = s(0);
		for (let r = 1; r < e; r++) if (!tl(i, s(r))) return;
		return Array.from(i)
			.map((r) => r.split(","))
			.map((r) => ({ method: r[1], start: +r[2], count: +r[3] }));
	}
	_updateLayout(t) {
		if (this.notifyPlugins("beforeLayout", { cancelable: !0 }) === !1) return;
		Ot.update(this, this.width, this.height, t);
		const e = this.chartArea,
			s = e.width <= 0 || e.height <= 0;
		(this._layers = []),
			G(
				this.boxes,
				(i) => {
					(s && i.position === "chartArea") ||
						(i.configure && i.configure(), this._layers.push(...i._layers()));
				},
				this,
			),
			this._layers.forEach((i, r) => {
				i._idx = r;
			}),
			this.notifyPlugins("afterLayout");
	}
	_updateDatasets(t) {
		if (
			this.notifyPlugins("beforeDatasetsUpdate", {
				mode: t,
				cancelable: !0,
			}) !== !1
		) {
			for (let e = 0, s = this.data.datasets.length; e < s; ++e)
				this.getDatasetMeta(e).controller.configure();
			for (let e = 0, s = this.data.datasets.length; e < s; ++e)
				this._updateDataset(e, He(t) ? t({ datasetIndex: e }) : t);
			this.notifyPlugins("afterDatasetsUpdate", { mode: t });
		}
	}
	_updateDataset(t, e) {
		const s = this.getDatasetMeta(t),
			i = { meta: s, index: t, mode: e, cancelable: !0 };
		this.notifyPlugins("beforeDatasetUpdate", i) !== !1 &&
			(s.controller._update(e),
			(i.cancelable = !1),
			this.notifyPlugins("afterDatasetUpdate", i));
	}
	render() {
		this.notifyPlugins("beforeRender", { cancelable: !0 }) !== !1 &&
			(ue.has(this)
				? this.attached && !ue.running(this) && ue.start(this)
				: (this.draw(), $l({ chart: this })));
	}
	draw() {
		let t;
		if (this._resizeBeforeDraw) {
			const { width: s, height: i } = this._resizeBeforeDraw;
			this._resize(s, i), (this._resizeBeforeDraw = null);
		}
		if (
			(this.clear(),
			this.width <= 0 ||
				this.height <= 0 ||
				this.notifyPlugins("beforeDraw", { cancelable: !0 }) === !1)
		)
			return;
		const e = this._layers;
		for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea);
		for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea);
		this.notifyPlugins("afterDraw");
	}
	_getSortedDatasetMetas(t) {
		const e = this._sortedMetasets,
			s = [];
		let i, r;
		for (i = 0, r = e.length; i < r; ++i) {
			const o = e[i];
			(!t || o.visible) && s.push(o);
		}
		return s;
	}
	getSortedVisibleDatasetMetas() {
		return this._getSortedDatasetMetas(!0);
	}
	_drawDatasets() {
		if (this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 }) === !1)
			return;
		const t = this.getSortedVisibleDatasetMetas();
		for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
		this.notifyPlugins("afterDatasetsDraw");
	}
	_drawDataset(t) {
		const e = this.ctx,
			s = t._clip,
			i = !s.disabled,
			r = Cb(t) || this.chartArea,
			o = { meta: t, index: t.index, cancelable: !0 };
		this.notifyPlugins("beforeDatasetDraw", o) !== !1 &&
			(i &&
				Pr(e, {
					left: s.left === !1 ? 0 : r.left - s.left,
					right: s.right === !1 ? this.width : r.right + s.right,
					top: s.top === !1 ? 0 : r.top - s.top,
					bottom: s.bottom === !1 ? this.height : r.bottom + s.bottom,
				}),
			t.controller.draw(),
			i && Rr(e),
			(o.cancelable = !1),
			this.notifyPlugins("afterDatasetDraw", o));
	}
	isPointInArea(t) {
		return Ns(t, this.chartArea, this._minPadding);
	}
	getElementsAtEventForMode(t, e, s, i) {
		const r = Sy.modes[e];
		return typeof r == "function" ? r(this, t, s, i) : [];
	}
	getDatasetMeta(t) {
		const e = this.data.datasets[t],
			s = this._metasets;
		let i = s.filter((r) => r && r._dataset === e).pop();
		return (
			i ||
				((i = {
					type: null,
					data: [],
					dataset: null,
					controller: null,
					hidden: null,
					xAxisID: null,
					yAxisID: null,
					order: (e && e.order) || 0,
					index: t,
					_dataset: e,
					_parsed: [],
					_sorted: !1,
				}),
				s.push(i)),
			i
		);
	}
	getContext() {
		return (
			this.$context ||
			(this.$context = Ye(null, { chart: this, type: "chart" }))
		);
	}
	getVisibleDatasetCount() {
		return this.getSortedVisibleDatasetMetas().length;
	}
	isDatasetVisible(t) {
		const e = this.data.datasets[t];
		if (!e) return !1;
		const s = this.getDatasetMeta(t);
		return typeof s.hidden == "boolean" ? !s.hidden : !e.hidden;
	}
	setDatasetVisibility(t, e) {
		const s = this.getDatasetMeta(t);
		s.hidden = !e;
	}
	toggleDataVisibility(t) {
		this._hiddenIndices[t] = !this._hiddenIndices[t];
	}
	getDataVisibility(t) {
		return !this._hiddenIndices[t];
	}
	_updateVisibility(t, e, s) {
		const i = s ? "show" : "hide",
			r = this.getDatasetMeta(t),
			o = r.controller._resolveAnimations(void 0, i);
		Yt(e)
			? ((r.data[e].hidden = !s), this.update())
			: (this.setDatasetVisibility(t, s),
			  o.update(r, { visible: s }),
			  this.update((a) => (a.datasetIndex === t ? i : void 0)));
	}
	hide(t, e) {
		this._updateVisibility(t, e, !1);
	}
	show(t, e) {
		this._updateVisibility(t, e, !0);
	}
	_destroyDatasetMeta(t) {
		const e = this._metasets[t];
		e && e.controller && e.controller._destroy(), delete this._metasets[t];
	}
	_stop() {
		let t, e;
		for (
			this.stop(), ue.remove(this), t = 0, e = this.data.datasets.length;
			t < e;
			++t
		)
			this._destroyDatasetMeta(t);
	}
	destroy() {
		this.notifyPlugins("beforeDestroy");
		const { canvas: t, ctx: e } = this;
		this._stop(),
			this.config.clearCache(),
			t &&
				(this.unbindEvents(),
				ll(t, e),
				this.platform.releaseContext(e),
				(this.canvas = null),
				(this.ctx = null)),
			delete Wi[this.id],
			this.notifyPlugins("afterDestroy");
	}
	toBase64Image(...t) {
		return this.canvas.toDataURL(...t);
	}
	bindEvents() {
		this.bindUserEvents(),
			this.options.responsive
				? this.bindResponsiveEvents()
				: (this.attached = !0);
	}
	bindUserEvents() {
		const t = this._listeners,
			e = this.platform,
			s = (r, o) => {
				e.addEventListener(this, r, o), (t[r] = o);
			},
			i = (r, o, a) => {
				(r.offsetX = o), (r.offsetY = a), this._eventHandler(r);
			};
		G(this.options.events, (r) => s(r, i));
	}
	bindResponsiveEvents() {
		this._responsiveListeners || (this._responsiveListeners = {});
		const t = this._responsiveListeners,
			e = this.platform,
			s = (c, l) => {
				e.addEventListener(this, c, l), (t[c] = l);
			},
			i = (c, l) => {
				t[c] && (e.removeEventListener(this, c, l), delete t[c]);
			},
			r = (c, l) => {
				this.canvas && this.resize(c, l);
			};
		let o;
		const a = () => {
			i("attach", a),
				(this.attached = !0),
				this.resize(),
				s("resize", r),
				s("detach", o);
		};
		(o = () => {
			(this.attached = !1),
				i("resize", r),
				this._stop(),
				this._resize(0, 0),
				s("attach", a);
		}),
			e.isAttached(this.canvas) ? a() : o();
	}
	unbindEvents() {
		G(this._listeners, (t, e) => {
			this.platform.removeEventListener(this, e, t);
		}),
			(this._listeners = {}),
			G(this._responsiveListeners, (t, e) => {
				this.platform.removeEventListener(this, e, t);
			}),
			(this._responsiveListeners = void 0);
	}
	updateHoverStyle(t, e, s) {
		const i = s ? "set" : "remove";
		let r, o, a, c;
		for (
			e === "dataset" &&
				((r = this.getDatasetMeta(t[0].datasetIndex)),
				r.controller["_" + i + "DatasetHoverStyle"]()),
				a = 0,
				c = t.length;
			a < c;
			++a
		) {
			o = t[a];
			const l = o && this.getDatasetMeta(o.datasetIndex).controller;
			l && l[i + "HoverStyle"](o.element, o.datasetIndex, o.index);
		}
	}
	getActiveElements() {
		return this._active || [];
	}
	setActiveElements(t) {
		const e = this._active || [],
			s = t.map(({ datasetIndex: r, index: o }) => {
				const a = this.getDatasetMeta(r);
				if (!a) throw new Error("No dataset found at index " + r);
				return { datasetIndex: r, element: a.data[o], index: o };
			});
		!er(s, e) &&
			((this._active = s),
			(this._lastEvent = null),
			this._updateHoverStyles(s, e));
	}
	notifyPlugins(t, e, s) {
		return this._plugins.notify(this, t, e, s);
	}
	isPluginEnabled(t) {
		return this._plugins._cache.filter((e) => e.plugin.id === t).length === 1;
	}
	_updateHoverStyles(t, e, s) {
		const i = this.options.hover,
			r = (c, l) =>
				c.filter(
					(h) =>
						!l.some(
							(u) => h.datasetIndex === u.datasetIndex && h.index === u.index,
						),
				),
			o = r(e, t),
			a = s ? t : r(t, e);
		o.length && this.updateHoverStyle(o, i.mode, !1),
			a.length && i.mode && this.updateHoverStyle(a, i.mode, !0);
	}
	_eventHandler(t, e) {
		const s = {
				event: t,
				replay: e,
				cancelable: !0,
				inChartArea: this.isPointInArea(t),
			},
			i = (o) =>
				(o.options.events || this.options.events).includes(t.native.type);
		if (this.notifyPlugins("beforeEvent", s, i) === !1) return;
		const r = this._handleEvent(t, e, s.inChartArea);
		return (
			(s.cancelable = !1),
			this.notifyPlugins("afterEvent", s, i),
			(r || s.changed) && this.render(),
			this
		);
	}
	_handleEvent(t, e, s) {
		const { _active: i = [], options: r } = this,
			o = e,
			a = this._getActiveElements(t, i, s, o),
			c = Mp(t),
			l = kb(t, this._lastEvent, s, c);
		s &&
			((this._lastEvent = null),
			Q(r.onHover, [t, a, this], this),
			c && Q(r.onClick, [t, a, this], this));
		const h = !er(a, i);
		return (
			(h || e) && ((this._active = a), this._updateHoverStyles(a, i, e)),
			(this._lastEvent = l),
			h
		);
	}
	_getActiveElements(t, e, s, i) {
		if (t.type === "mouseout") return [];
		if (!s) return e;
		const r = this.options.hover;
		return this.getElementsAtEventForMode(t, r.mode, r, i);
	}
}
function jl() {
	return G(De.instances, (n) => n._plugins.invalidate());
}
function Tb(n, t, e) {
	const {
		startAngle: s,
		pixelMargin: i,
		x: r,
		y: o,
		outerRadius: a,
		innerRadius: c,
	} = t;
	let l = i / a;
	n.beginPath(),
		n.arc(r, o, a, s - l, e + l),
		c > i
			? ((l = i / c), n.arc(r, o, c, e + l, s - l, !0))
			: n.arc(r, o, i, e + at, s - at),
		n.closePath(),
		n.clip();
}
function Ib(n) {
	return $a(n, ["outerStart", "outerEnd", "innerStart", "innerEnd"]);
}
function Mb(n, t, e, s) {
	const i = Ib(n.options.borderRadius),
		r = (e - t) / 2,
		o = Math.min(r, (s * t) / 2),
		a = (c) => {
			const l = ((e - Math.min(r, c)) * s) / 2;
			return wt(c, 0, Math.min(r, l));
		};
	return {
		outerStart: a(i.outerStart),
		outerEnd: a(i.outerEnd),
		innerStart: wt(i.innerStart, 0, o),
		innerEnd: wt(i.innerEnd, 0, o),
	};
}
function In(n, t, e, s) {
	return { x: e + n * Math.cos(t), y: s + n * Math.sin(t) };
}
function cr(n, t, e, s, i, r) {
	const { x: o, y: a, startAngle: c, pixelMargin: l, innerRadius: h } = t,
		u = Math.max(t.outerRadius + s + e - l, 0),
		d = h > 0 ? h + s + e + l : 0;
	let f = 0;
	const g = i - c;
	if (s) {
		const W = h > 0 ? h - s : 0,
			X = u > 0 ? u - s : 0,
			et = (W + X) / 2,
			zt = et !== 0 ? (g * et) / (et + s) : g;
		f = (g - zt) / 2;
	}
	const p = Math.max(0.001, g * u - e / it) / u,
		m = (g - p) / 2,
		b = c + m + f,
		y = i - m - f,
		{
			outerStart: v,
			outerEnd: _,
			innerStart: x,
			innerEnd: k,
		} = Mb(t, d, u, y - b),
		S = u - v,
		E = u - _,
		T = b + v / S,
		M = y - _ / E,
		I = d + x,
		j = d + k,
		lt = b + x / I,
		Ft = y - k / j;
	if ((n.beginPath(), r)) {
		const W = (T + M) / 2;
		if ((n.arc(o, a, u, T, W), n.arc(o, a, u, W, M), _ > 0)) {
			const xt = In(E, M, o, a);
			n.arc(xt.x, xt.y, _, M, y + at);
		}
		const X = In(j, y, o, a);
		if ((n.lineTo(X.x, X.y), k > 0)) {
			const xt = In(j, Ft, o, a);
			n.arc(xt.x, xt.y, k, y + at, Ft + Math.PI);
		}
		const et = (y - k / d + (b + x / d)) / 2;
		if (
			(n.arc(o, a, d, y - k / d, et, !0),
			n.arc(o, a, d, et, b + x / d, !0),
			x > 0)
		) {
			const xt = In(I, lt, o, a);
			n.arc(xt.x, xt.y, x, lt + Math.PI, b - at);
		}
		const zt = In(S, b, o, a);
		if ((n.lineTo(zt.x, zt.y), v > 0)) {
			const xt = In(S, T, o, a);
			n.arc(xt.x, xt.y, v, b - at, T);
		}
	} else {
		n.moveTo(o, a);
		const W = Math.cos(T) * u + o,
			X = Math.sin(T) * u + a;
		n.lineTo(W, X);
		const et = Math.cos(M) * u + o,
			zt = Math.sin(M) * u + a;
		n.lineTo(et, zt);
	}
	n.closePath();
}
function Ab(n, t, e, s, i) {
	const { fullCircles: r, startAngle: o, circumference: a } = t;
	let c = t.endAngle;
	if (r) {
		cr(n, t, e, s, c, i);
		for (let l = 0; l < r; ++l) n.fill();
		isNaN(a) || (c = o + (a % Z || Z));
	}
	return cr(n, t, e, s, c, i), n.fill(), c;
}
function Db(n, t, e, s, i) {
	const { fullCircles: r, startAngle: o, circumference: a, options: c } = t,
		{ borderWidth: l, borderJoinStyle: h } = c,
		u = c.borderAlign === "inner";
	if (!l) return;
	u
		? ((n.lineWidth = l * 2), (n.lineJoin = h || "round"))
		: ((n.lineWidth = l), (n.lineJoin = h || "bevel"));
	let d = t.endAngle;
	if (r) {
		cr(n, t, e, s, d, i);
		for (let f = 0; f < r; ++f) n.stroke();
		isNaN(a) || (d = o + (a % Z || Z));
	}
	u && Tb(n, t, d), r || (cr(n, t, e, s, d, i), n.stroke());
}
class Ob extends ce {
	static id = "arc";
	static defaults = {
		borderAlign: "center",
		borderColor: "#fff",
		borderJoinStyle: void 0,
		borderRadius: 0,
		borderWidth: 2,
		offset: 0,
		spacing: 0,
		angle: void 0,
		circular: !0,
	};
	static defaultRoutes = { backgroundColor: "backgroundColor" };
	constructor(t) {
		super(),
			(this.options = void 0),
			(this.circumference = void 0),
			(this.startAngle = void 0),
			(this.endAngle = void 0),
			(this.innerRadius = void 0),
			(this.outerRadius = void 0),
			(this.pixelMargin = 0),
			(this.fullCircles = 0),
			t && Object.assign(this, t);
	}
	inRange(t, e, s) {
		const i = this.getProps(["x", "y"], s),
			{ angle: r, distance: o } = Tu(i, { x: t, y: e }),
			{
				startAngle: a,
				endAngle: c,
				innerRadius: l,
				outerRadius: h,
				circumference: u,
			} = this.getProps(
				[
					"startAngle",
					"endAngle",
					"innerRadius",
					"outerRadius",
					"circumference",
				],
				s,
			),
			d = this.options.spacing / 2,
			g = B(u, c - a) >= Z || Ls(r, a, c),
			p = me(o, l + d, h + d);
		return g && p;
	}
	getCenterPoint(t) {
		const {
				x: e,
				y: s,
				startAngle: i,
				endAngle: r,
				innerRadius: o,
				outerRadius: a,
			} = this.getProps(
				["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"],
				t,
			),
			{ offset: c, spacing: l } = this.options,
			h = (i + r) / 2,
			u = (o + a + l + c) / 2;
		return { x: e + Math.cos(h) * u, y: s + Math.sin(h) * u };
	}
	tooltipPosition(t) {
		return this.getCenterPoint(t);
	}
	draw(t) {
		const { options: e, circumference: s } = this,
			i = (e.offset || 0) / 4,
			r = (e.spacing || 0) / 2,
			o = e.circular;
		if (
			((this.pixelMargin = e.borderAlign === "inner" ? 0.33 : 0),
			(this.fullCircles = s > Z ? Math.floor(s / Z) : 0),
			s === 0 || this.innerRadius < 0 || this.outerRadius < 0)
		)
			return;
		t.save();
		const a = (this.startAngle + this.endAngle) / 2;
		t.translate(Math.cos(a) * i, Math.sin(a) * i);
		const c = 1 - Math.sin(Math.min(it, s || 0)),
			l = i * c;
		(t.fillStyle = e.backgroundColor),
			(t.strokeStyle = e.borderColor),
			Ab(t, this, l, r, o),
			Db(t, this, l, r, o),
			t.restore();
	}
}
function ld(n, t, e = t) {
	(n.lineCap = B(e.borderCapStyle, t.borderCapStyle)),
		n.setLineDash(B(e.borderDash, t.borderDash)),
		(n.lineDashOffset = B(e.borderDashOffset, t.borderDashOffset)),
		(n.lineJoin = B(e.borderJoinStyle, t.borderJoinStyle)),
		(n.lineWidth = B(e.borderWidth, t.borderWidth)),
		(n.strokeStyle = B(e.borderColor, t.borderColor));
}
function Pb(n, t, e) {
	n.lineTo(e.x, e.y);
}
function Rb(n) {
	return n.stepped
		? Qp
		: n.tension || n.cubicInterpolationMode === "monotone"
		? Jp
		: Pb;
}
function hd(n, t, e = {}) {
	const s = n.length,
		{ start: i = 0, end: r = s - 1 } = e,
		{ start: o, end: a } = t,
		c = Math.max(i, o),
		l = Math.min(r, a),
		h = (i < o && r < o) || (i > a && r > a);
	return {
		count: s,
		start: c,
		loop: t.loop,
		ilen: l < c && !h ? s + l - c : l - c,
	};
}
function Lb(n, t, e, s) {
	const { points: i, options: r } = t,
		{ count: o, start: a, loop: c, ilen: l } = hd(i, e, s),
		h = Rb(r);
	let { move: u = !0, reverse: d } = s || {},
		f,
		g,
		p;
	for (f = 0; f <= l; ++f)
		(g = i[(a + (d ? l - f : f)) % o]),
			!g.skip &&
				(u ? (n.moveTo(g.x, g.y), (u = !1)) : h(n, p, g, d, r.stepped),
				(p = g));
	return c && ((g = i[(a + (d ? l : 0)) % o]), h(n, p, g, d, r.stepped)), !!c;
}
function Nb(n, t, e, s) {
	const i = t.points,
		{ count: r, start: o, ilen: a } = hd(i, e, s),
		{ move: c = !0, reverse: l } = s || {};
	let h = 0,
		u = 0,
		d,
		f,
		g,
		p,
		m,
		b;
	const y = (_) => (o + (l ? a - _ : _)) % r,
		v = () => {
			p !== m && (n.lineTo(h, m), n.lineTo(h, p), n.lineTo(h, b));
		};
	for (c && ((f = i[y(0)]), n.moveTo(f.x, f.y)), d = 0; d <= a; ++d) {
		if (((f = i[y(d)]), f.skip)) continue;
		const _ = f.x,
			x = f.y,
			k = _ | 0;
		k === g
			? (x < p ? (p = x) : x > m && (m = x), (h = (u * h + _) / ++u))
			: (v(), n.lineTo(_, x), (g = k), (u = 0), (p = m = x)),
			(b = x);
	}
	v();
}
function Zo(n) {
	const t = n.options,
		e = t.borderDash && t.borderDash.length;
	return !n._decimated &&
		!n._loop &&
		!t.tension &&
		t.cubicInterpolationMode !== "monotone" &&
		!t.stepped &&
		!e
		? Nb
		: Lb;
}
function Fb(n) {
	return n.stepped
		? Am
		: n.tension || n.cubicInterpolationMode === "monotone"
		? Dm
		: rn;
}
function Bb(n, t, e, s) {
	let i = t._path;
	i || ((i = t._path = new Path2D()), t.path(i, e, s) && i.closePath()),
		ld(n, t.options),
		n.stroke(i);
}
function Vb(n, t, e, s) {
	const { segments: i, options: r } = t,
		o = Zo(t);
	for (const a of i)
		ld(n, r, a.style),
			n.beginPath(),
			o(n, t, a, { start: e, end: e + s - 1 }) && n.closePath(),
			n.stroke();
}
const zb = typeof Path2D == "function";
function $b(n, t, e, s) {
	zb && !t.options.segment ? Bb(n, t, e, s) : Vb(n, t, e, s);
}
class Nr extends ce {
	static id = "line";
	static defaults = {
		borderCapStyle: "butt",
		borderDash: [],
		borderDashOffset: 0,
		borderJoinStyle: "miter",
		borderWidth: 3,
		capBezierPoints: !0,
		cubicInterpolationMode: "default",
		fill: !1,
		spanGaps: !1,
		stepped: !1,
		tension: 0,
	};
	static defaultRoutes = {
		backgroundColor: "backgroundColor",
		borderColor: "borderColor",
	};
	static descriptors = {
		_scriptable: !0,
		_indexable: (t) => t !== "borderDash" && t !== "fill",
	};
	constructor(t) {
		super(),
			(this.animated = !0),
			(this.options = void 0),
			(this._chart = void 0),
			(this._loop = void 0),
			(this._fullLoop = void 0),
			(this._path = void 0),
			(this._points = void 0),
			(this._segments = void 0),
			(this._decimated = !1),
			(this._pointsUpdated = !1),
			(this._datasetIndex = void 0),
			t && Object.assign(this, t);
	}
	updateControlPoints(t, e) {
		const s = this.options;
		if (
			(s.tension || s.cubicInterpolationMode === "monotone") &&
			!s.stepped &&
			!this._pointsUpdated
		) {
			const i = s.spanGaps ? this._loop : this._fullLoop;
			wm(this._points, s, t, i, e), (this._pointsUpdated = !0);
		}
	}
	set points(t) {
		(this._points = t),
			delete this._segments,
			delete this._path,
			(this._pointsUpdated = !1);
	}
	get points() {
		return this._points;
	}
	get segments() {
		return this._segments || (this._segments = Fm(this, this.options.segment));
	}
	first() {
		const t = this.segments,
			e = this.points;
		return t.length && e[t[0].start];
	}
	last() {
		const t = this.segments,
			e = this.points,
			s = t.length;
		return s && e[t[s - 1].end];
	}
	interpolate(t, e) {
		const s = this.options,
			i = t[e],
			r = this.points,
			o = Gu(this, { property: e, start: i, end: i });
		if (!o.length) return;
		const a = [],
			c = Fb(s);
		let l, h;
		for (l = 0, h = o.length; l < h; ++l) {
			const { start: u, end: d } = o[l],
				f = r[u],
				g = r[d];
			if (f === g) {
				a.push(f);
				continue;
			}
			const p = Math.abs((i - f[e]) / (g[e] - f[e])),
				m = c(f, g, p, s.stepped);
			(m[e] = t[e]), a.push(m);
		}
		return a.length === 1 ? a[0] : a;
	}
	pathSegment(t, e, s) {
		return Zo(this)(t, this, e, s);
	}
	path(t, e, s) {
		const i = this.segments,
			r = Zo(this);
		let o = this._loop;
		(e = e || 0), (s = s || this.points.length - e);
		for (const a of i) o &= r(t, this, a, { start: e, end: e + s - 1 });
		return !!o;
	}
	draw(t, e, s, i) {
		const r = this.options || {};
		(this.points || []).length &&
			r.borderWidth &&
			(t.save(), $b(t, this, s, i), t.restore()),
			this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
	}
}
function Hl(n, t, e, s) {
	const i = n.options,
		{ [e]: r } = n.getProps([e], s);
	return Math.abs(t - r) < i.radius + i.hitRadius;
}
class Ub extends ce {
	static id = "point";
	static defaults = {
		borderWidth: 1,
		hitRadius: 1,
		hoverBorderWidth: 1,
		hoverRadius: 4,
		pointStyle: "circle",
		radius: 3,
		rotation: 0,
	};
	static defaultRoutes = {
		backgroundColor: "backgroundColor",
		borderColor: "borderColor",
	};
	constructor(t) {
		super(),
			(this.options = void 0),
			(this.parsed = void 0),
			(this.skip = void 0),
			(this.stop = void 0),
			t && Object.assign(this, t);
	}
	inRange(t, e, s) {
		const i = this.options,
			{ x: r, y: o } = this.getProps(["x", "y"], s);
		return (
			Math.pow(t - r, 2) + Math.pow(e - o, 2) <
			Math.pow(i.hitRadius + i.radius, 2)
		);
	}
	inXRange(t, e) {
		return Hl(this, t, "x", e);
	}
	inYRange(t, e) {
		return Hl(this, t, "y", e);
	}
	getCenterPoint(t) {
		const { x: e, y: s } = this.getProps(["x", "y"], t);
		return { x: e, y: s };
	}
	size(t) {
		t = t || this.options || {};
		let e = t.radius || 0;
		e = Math.max(e, (e && t.hoverRadius) || 0);
		const s = (e && t.borderWidth) || 0;
		return (e + s) * 2;
	}
	draw(t, e) {
		const s = this.options;
		this.skip ||
			s.radius < 0.1 ||
			!Ns(this, e, this.size(s) / 2) ||
			((t.strokeStyle = s.borderColor),
			(t.lineWidth = s.borderWidth),
			(t.fillStyle = s.backgroundColor),
			Qo(t, s, this.x, this.y));
	}
	getRange() {
		const t = this.options || {};
		return t.radius + t.hitRadius;
	}
}
function ud(n, t) {
	const {
		x: e,
		y: s,
		base: i,
		width: r,
		height: o,
	} = n.getProps(["x", "y", "base", "width", "height"], t);
	let a, c, l, h, u;
	return (
		n.horizontal
			? ((u = o / 2),
			  (a = Math.min(e, i)),
			  (c = Math.max(e, i)),
			  (l = s - u),
			  (h = s + u))
			: ((u = r / 2),
			  (a = e - u),
			  (c = e + u),
			  (l = Math.min(s, i)),
			  (h = Math.max(s, i))),
		{ left: a, top: l, right: c, bottom: h }
	);
}
function Re(n, t, e, s) {
	return n ? 0 : wt(t, e, s);
}
function jb(n, t, e) {
	const s = n.options.borderWidth,
		i = n.borderSkipped,
		r = Fu(s);
	return {
		t: Re(i.top, r.top, 0, e),
		r: Re(i.right, r.right, 0, t),
		b: Re(i.bottom, r.bottom, 0, e),
		l: Re(i.left, r.left, 0, t),
	};
}
function Hb(n, t, e) {
	const { enableBorderRadius: s } = n.getProps(["enableBorderRadius"]),
		i = n.options.borderRadius,
		r = un(i),
		o = Math.min(t, e),
		a = n.borderSkipped,
		c = s || U(i);
	return {
		topLeft: Re(!c || a.top || a.left, r.topLeft, 0, o),
		topRight: Re(!c || a.top || a.right, r.topRight, 0, o),
		bottomLeft: Re(!c || a.bottom || a.left, r.bottomLeft, 0, o),
		bottomRight: Re(!c || a.bottom || a.right, r.bottomRight, 0, o),
	};
}
function Wb(n) {
	const t = ud(n),
		e = t.right - t.left,
		s = t.bottom - t.top,
		i = jb(n, e / 2, s / 2),
		r = Hb(n, e / 2, s / 2);
	return {
		outer: { x: t.left, y: t.top, w: e, h: s, radius: r },
		inner: {
			x: t.left + i.l,
			y: t.top + i.t,
			w: e - i.l - i.r,
			h: s - i.t - i.b,
			radius: {
				topLeft: Math.max(0, r.topLeft - Math.max(i.t, i.l)),
				topRight: Math.max(0, r.topRight - Math.max(i.t, i.r)),
				bottomLeft: Math.max(0, r.bottomLeft - Math.max(i.b, i.l)),
				bottomRight: Math.max(0, r.bottomRight - Math.max(i.b, i.r)),
			},
		},
	};
}
function Co(n, t, e, s) {
	const i = t === null,
		r = e === null,
		a = n && !(i && r) && ud(n, s);
	return a && (i || me(t, a.left, a.right)) && (r || me(e, a.top, a.bottom));
}
function qb(n) {
	return n.topLeft || n.topRight || n.bottomLeft || n.bottomRight;
}
function Kb(n, t) {
	n.rect(t.x, t.y, t.w, t.h);
}
function To(n, t, e = {}) {
	const s = n.x !== e.x ? -t : 0,
		i = n.y !== e.y ? -t : 0,
		r = (n.x + n.w !== e.x + e.w ? t : 0) - s,
		o = (n.y + n.h !== e.y + e.h ? t : 0) - i;
	return { x: n.x + s, y: n.y + i, w: n.w + r, h: n.h + o, radius: n.radius };
}
class Yb extends ce {
	static id = "bar";
	static defaults = {
		borderSkipped: "start",
		borderWidth: 0,
		borderRadius: 0,
		inflateAmount: "auto",
		pointStyle: void 0,
	};
	static defaultRoutes = {
		backgroundColor: "backgroundColor",
		borderColor: "borderColor",
	};
	constructor(t) {
		super(),
			(this.options = void 0),
			(this.horizontal = void 0),
			(this.base = void 0),
			(this.width = void 0),
			(this.height = void 0),
			(this.inflateAmount = void 0),
			t && Object.assign(this, t);
	}
	draw(t) {
		const {
				inflateAmount: e,
				options: { borderColor: s, backgroundColor: i },
			} = this,
			{ inner: r, outer: o } = Wb(this),
			a = qb(o.radius) ? Fs : Kb;
		t.save(),
			(o.w !== r.w || o.h !== r.h) &&
				(t.beginPath(),
				a(t, To(o, e, r)),
				t.clip(),
				a(t, To(r, -e, o)),
				(t.fillStyle = s),
				t.fill("evenodd")),
			t.beginPath(),
			a(t, To(r, e)),
			(t.fillStyle = i),
			t.fill(),
			t.restore();
	}
	inRange(t, e, s) {
		return Co(this, t, e, s);
	}
	inXRange(t, e) {
		return Co(this, t, null, e);
	}
	inYRange(t, e) {
		return Co(this, null, t, e);
	}
	getCenterPoint(t) {
		const {
			x: e,
			y: s,
			base: i,
			horizontal: r,
		} = this.getProps(["x", "y", "base", "horizontal"], t);
		return { x: r ? (e + i) / 2 : e, y: r ? s : (s + i) / 2 };
	}
	getRange(t) {
		return t === "x" ? this.width / 2 : this.height / 2;
	}
}
var Gb = Object.freeze({
	__proto__: null,
	ArcElement: Ob,
	LineElement: Nr,
	PointElement: Ub,
	BarElement: Yb,
});
const ta = [
		"rgb(54, 162, 235)",
		"rgb(255, 99, 132)",
		"rgb(255, 159, 64)",
		"rgb(255, 205, 86)",
		"rgb(75, 192, 192)",
		"rgb(153, 102, 255)",
		"rgb(201, 203, 207)",
	],
	Wl = ta.map((n) => n.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
function dd(n) {
	return ta[n % ta.length];
}
function fd(n) {
	return Wl[n % Wl.length];
}
function Xb(n, t) {
	return (n.borderColor = dd(t)), (n.backgroundColor = fd(t)), ++t;
}
function Qb(n, t) {
	return (n.backgroundColor = n.data.map(() => dd(t++))), t;
}
function Jb(n, t) {
	return (n.backgroundColor = n.data.map(() => fd(t++))), t;
}
function Zb(n) {
	let t = 0;
	return (e, s) => {
		const i = n.getDatasetMeta(s).controller;
		i instanceof qa
			? (t = Qb(e, t))
			: i instanceof Zu
			? (t = Jb(e, t))
			: i && (t = Xb(e, t));
	};
}
function ql(n) {
	let t;
	for (t in n) if (n[t].borderColor || n[t].backgroundColor) return !0;
	return !1;
}
function t0(n) {
	return n && (n.borderColor || n.backgroundColor);
}
var e0 = {
	id: "colors",
	defaults: { enabled: !0, forceOverride: !1 },
	beforeLayout(n, t, e) {
		if (!e.enabled) return;
		const {
				data: { datasets: s },
				options: i,
			} = n.config,
			{ elements: r } = i;
		if (!e.forceOverride && (ql(s) || t0(i) || (r && ql(r)))) return;
		const o = Zb(n);
		s.forEach(o);
	},
};
function n0(n, t, e, s, i) {
	const r = i.samples || s;
	if (r >= e) return n.slice(t, t + e);
	const o = [],
		a = (e - 2) / (r - 2);
	let c = 0;
	const l = t + e - 1;
	let h = t,
		u,
		d,
		f,
		g,
		p;
	for (o[c++] = n[h], u = 0; u < r - 2; u++) {
		let m = 0,
			b = 0,
			y;
		const v = Math.floor((u + 1) * a) + 1 + t,
			_ = Math.min(Math.floor((u + 2) * a) + 1, e) + t,
			x = _ - v;
		for (y = v; y < _; y++) (m += n[y].x), (b += n[y].y);
		(m /= x), (b /= x);
		const k = Math.floor(u * a) + 1 + t,
			S = Math.min(Math.floor((u + 1) * a) + 1, e) + t,
			{ x: E, y: T } = n[h];
		for (f = g = -1, y = k; y < S; y++)
			(g = 0.5 * Math.abs((E - m) * (n[y].y - T) - (E - n[y].x) * (b - T))),
				g > f && ((f = g), (d = n[y]), (p = y));
		(o[c++] = d), (h = p);
	}
	return (o[c++] = n[l]), o;
}
function s0(n, t, e, s) {
	let i = 0,
		r = 0,
		o,
		a,
		c,
		l,
		h,
		u,
		d,
		f,
		g,
		p;
	const m = [],
		b = t + e - 1,
		y = n[t].x,
		_ = n[b].x - y;
	for (o = t; o < t + e; ++o) {
		(a = n[o]), (c = ((a.x - y) / _) * s), (l = a.y);
		const x = c | 0;
		if (x === h)
			l < g ? ((g = l), (u = o)) : l > p && ((p = l), (d = o)),
				(i = (r * i + a.x) / ++r);
		else {
			const k = o - 1;
			if (!q(u) && !q(d)) {
				const S = Math.min(u, d),
					E = Math.max(u, d);
				S !== f && S !== k && m.push({ ...n[S], x: i }),
					E !== f && E !== k && m.push({ ...n[E], x: i });
			}
			o > 0 && k !== f && m.push(n[k]),
				m.push(a),
				(h = x),
				(r = 0),
				(g = p = l),
				(u = d = f = o);
		}
	}
	return m;
}
function gd(n) {
	if (n._decimated) {
		const t = n._data;
		delete n._decimated,
			delete n._data,
			Object.defineProperty(n, "data", {
				configurable: !0,
				enumerable: !0,
				writable: !0,
				value: t,
			});
	}
}
function Kl(n) {
	n.data.datasets.forEach((t) => {
		gd(t);
	});
}
function i0(n, t) {
	const e = t.length;
	let s = 0,
		i;
	const { iScale: r } = n,
		{ min: o, max: a, minDefined: c, maxDefined: l } = r.getUserBounds();
	return (
		c && (s = wt(ye(t, r.axis, o).lo, 0, e - 1)),
		l ? (i = wt(ye(t, r.axis, a).hi + 1, s, e) - s) : (i = e - s),
		{ start: s, count: i }
	);
}
var r0 = {
	id: "decimation",
	defaults: { algorithm: "min-max", enabled: !1 },
	beforeElementsUpdate: (n, t, e) => {
		if (!e.enabled) {
			Kl(n);
			return;
		}
		const s = n.width;
		n.data.datasets.forEach((i, r) => {
			const { _data: o, indexAxis: a } = i,
				c = n.getDatasetMeta(r),
				l = o || i.data;
			if (
				gs([a, n.options.indexAxis]) === "y" ||
				!c.controller.supportsDecimation
			)
				return;
			const h = n.scales[c.xAxisID];
			if ((h.type !== "linear" && h.type !== "time") || n.options.parsing)
				return;
			let { start: u, count: d } = i0(c, l);
			const f = e.threshold || 4 * s;
			if (d <= f) {
				gd(i);
				return;
			}
			q(o) &&
				((i._data = l),
				delete i.data,
				Object.defineProperty(i, "data", {
					configurable: !0,
					enumerable: !0,
					get: function () {
						return this._decimated;
					},
					set: function (p) {
						this._data = p;
					},
				}));
			let g;
			switch (e.algorithm) {
				case "lttb":
					g = n0(l, u, d, s, e);
					break;
				case "min-max":
					g = s0(l, u, d, s);
					break;
				default:
					throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`);
			}
			i._decimated = g;
		});
	},
	destroy(n) {
		Kl(n);
	},
};
function o0(n, t, e) {
	const s = n.segments,
		i = n.points,
		r = t.points,
		o = [];
	for (const a of s) {
		let { start: c, end: l } = a;
		l = Ya(c, l, i);
		const h = ea(e, i[c], i[l], a.loop);
		if (!t.segments) {
			o.push({ source: a, target: h, start: i[c], end: i[l] });
			continue;
		}
		const u = Gu(t, h);
		for (const d of u) {
			const f = ea(e, r[d.start], r[d.end], d.loop),
				g = Yu(a, i, f);
			for (const p of g)
				o.push({
					source: p,
					target: d,
					start: { [e]: Yl(h, f, "start", Math.max) },
					end: { [e]: Yl(h, f, "end", Math.min) },
				});
		}
	}
	return o;
}
function ea(n, t, e, s) {
	if (s) return;
	let i = t[n],
		r = e[n];
	return (
		n === "angle" && ((i = Ht(i)), (r = Ht(r))),
		{ property: n, start: i, end: r }
	);
}
function a0(n, t) {
	const { x: e = null, y: s = null } = n || {},
		i = t.points,
		r = [];
	return (
		t.segments.forEach(({ start: o, end: a }) => {
			a = Ya(o, a, i);
			const c = i[o],
				l = i[a];
			s !== null
				? (r.push({ x: c.x, y: s }), r.push({ x: l.x, y: s }))
				: e !== null && (r.push({ x: e, y: c.y }), r.push({ x: e, y: l.y }));
		}),
		r
	);
}
function Ya(n, t, e) {
	for (; t > n; t--) {
		const s = e[t];
		if (!isNaN(s.x) && !isNaN(s.y)) break;
	}
	return t;
}
function Yl(n, t, e, s) {
	return n && t ? s(n[e], t[e]) : n ? n[e] : t ? t[e] : 0;
}
function pd(n, t) {
	let e = [],
		s = !1;
	return (
		J(n) ? ((s = !0), (e = n)) : (e = a0(n, t)),
		e.length
			? new Nr({ points: e, options: { tension: 0 }, _loop: s, _fullLoop: s })
			: null
	);
}
function Gl(n) {
	return n && n.fill !== !1;
}
function c0(n, t, e) {
	let i = n[t].fill;
	const r = [t];
	let o;
	if (!e) return i;
	for (; i !== !1 && r.indexOf(i) === -1; ) {
		if (!ot(i)) return i;
		if (((o = n[i]), !o)) return !1;
		if (o.visible) return i;
		r.push(i), (i = o.fill);
	}
	return !1;
}
function l0(n, t, e) {
	const s = f0(n);
	if (U(s)) return isNaN(s.value) ? !1 : s;
	let i = parseFloat(s);
	return ot(i) && Math.floor(i) === i
		? h0(s[0], t, i, e)
		: ["origin", "start", "end", "stack", "shape"].indexOf(s) >= 0 && s;
}
function h0(n, t, e, s) {
	return (
		(n === "-" || n === "+") && (e = t + e), e === t || e < 0 || e >= s ? !1 : e
	);
}
function u0(n, t) {
	let e = null;
	return (
		n === "start"
			? (e = t.bottom)
			: n === "end"
			? (e = t.top)
			: U(n)
			? (e = t.getPixelForValue(n.value))
			: t.getBasePixel && (e = t.getBasePixel()),
		e
	);
}
function d0(n, t, e) {
	let s;
	return (
		n === "start"
			? (s = e)
			: n === "end"
			? (s = t.options.reverse ? t.min : t.max)
			: U(n)
			? (s = n.value)
			: (s = t.getBaseValue()),
		s
	);
}
function f0(n) {
	const t = n.options,
		e = t.fill;
	let s = B(e && e.target, e);
	return (
		s === void 0 && (s = !!t.backgroundColor),
		s === !1 || s === null ? !1 : s === !0 ? "origin" : s
	);
}
function g0(n) {
	const { scale: t, index: e, line: s } = n,
		i = [],
		r = s.segments,
		o = s.points,
		a = p0(t, e);
	a.push(pd({ x: null, y: t.bottom }, s));
	for (let c = 0; c < r.length; c++) {
		const l = r[c];
		for (let h = l.start; h <= l.end; h++) m0(i, o[h], a);
	}
	return new Nr({ points: i, options: {} });
}
function p0(n, t) {
	const e = [],
		s = n.getMatchingVisibleMetas("line");
	for (let i = 0; i < s.length; i++) {
		const r = s[i];
		if (r.index === t) break;
		r.hidden || e.unshift(r.dataset);
	}
	return e;
}
function m0(n, t, e) {
	const s = [];
	for (let i = 0; i < e.length; i++) {
		const r = e[i],
			{ first: o, last: a, point: c } = y0(r, t, "x");
		if (!(!c || (o && a))) {
			if (o) s.unshift(c);
			else if ((n.push(c), !a)) break;
		}
	}
	n.push(...s);
}
function y0(n, t, e) {
	const s = n.interpolate(t, e);
	if (!s) return {};
	const i = s[e],
		r = n.segments,
		o = n.points;
	let a = !1,
		c = !1;
	for (let l = 0; l < r.length; l++) {
		const h = r[l],
			u = o[h.start][e],
			d = o[h.end][e];
		if (me(i, u, d)) {
			(a = i === u), (c = i === d);
			break;
		}
	}
	return { first: a, last: c, point: s };
}
class md {
	constructor(t) {
		(this.x = t.x), (this.y = t.y), (this.radius = t.radius);
	}
	pathSegment(t, e, s) {
		const { x: i, y: r, radius: o } = this;
		return (
			(e = e || { start: 0, end: Z }),
			t.arc(i, r, o, e.end, e.start, !0),
			!s.bounds
		);
	}
	interpolate(t) {
		const { x: e, y: s, radius: i } = this,
			r = t.angle;
		return { x: e + Math.cos(r) * i, y: s + Math.sin(r) * i, angle: r };
	}
}
function b0(n) {
	const { chart: t, fill: e, line: s } = n;
	if (ot(e)) return v0(t, e);
	if (e === "stack") return g0(n);
	if (e === "shape") return !0;
	const i = x0(n);
	return i instanceof md ? i : pd(i, s);
}
function v0(n, t) {
	const e = n.getDatasetMeta(t);
	return e && n.isDatasetVisible(t) ? e.dataset : null;
}
function x0(n) {
	return (n.scale || {}).getPointPositionForValue ? w0(n) : _0(n);
}
function _0(n) {
	const { scale: t = {}, fill: e } = n,
		s = u0(e, t);
	if (ot(s)) {
		const i = t.isHorizontal();
		return { x: i ? s : null, y: i ? null : s };
	}
	return null;
}
function w0(n) {
	const { scale: t, fill: e } = n,
		s = t.options,
		i = t.getLabels().length,
		r = s.reverse ? t.max : t.min,
		o = d0(e, t, r),
		a = [];
	if (s.grid.circular) {
		const c = t.getPointPositionForValue(0, r);
		return new md({
			x: c.x,
			y: c.y,
			radius: t.getDistanceFromCenterForValue(o),
		});
	}
	for (let c = 0; c < i; ++c) a.push(t.getPointPositionForValue(c, o));
	return a;
}
function Io(n, t, e) {
	const s = b0(t),
		{ line: i, scale: r, axis: o } = t,
		a = i.options,
		c = a.fill,
		l = a.backgroundColor,
		{ above: h = l, below: u = l } = c || {};
	s &&
		i.points.length &&
		(Pr(n, e),
		S0(n, {
			line: i,
			target: s,
			above: h,
			below: u,
			area: e,
			scale: r,
			axis: o,
		}),
		Rr(n));
}
function S0(n, t) {
	const { line: e, target: s, above: i, below: r, area: o, scale: a } = t,
		c = e._loop ? "angle" : t.axis;
	n.save(),
		c === "x" &&
			r !== i &&
			(Xl(n, s, o.top),
			Ql(n, { line: e, target: s, color: i, scale: a, property: c }),
			n.restore(),
			n.save(),
			Xl(n, s, o.bottom)),
		Ql(n, { line: e, target: s, color: r, scale: a, property: c }),
		n.restore();
}
function Xl(n, t, e) {
	const { segments: s, points: i } = t;
	let r = !0,
		o = !1;
	n.beginPath();
	for (const a of s) {
		const { start: c, end: l } = a,
			h = i[c],
			u = i[Ya(c, l, i)];
		r ? (n.moveTo(h.x, h.y), (r = !1)) : (n.lineTo(h.x, e), n.lineTo(h.x, h.y)),
			(o = !!t.pathSegment(n, a, { move: o })),
			o ? n.closePath() : n.lineTo(u.x, e);
	}
	n.lineTo(t.first().x, e), n.closePath(), n.clip();
}
function Ql(n, t) {
	const { line: e, target: s, property: i, color: r, scale: o } = t,
		a = o0(e, s, i);
	for (const { source: c, target: l, start: h, end: u } of a) {
		const { style: { backgroundColor: d = r } = {} } = c,
			f = s !== !0;
		n.save(), (n.fillStyle = d), E0(n, o, f && ea(i, h, u)), n.beginPath();
		const g = !!e.pathSegment(n, c);
		let p;
		if (f) {
			g ? n.closePath() : Jl(n, s, u, i);
			const m = !!s.pathSegment(n, l, { move: g, reverse: !0 });
			(p = g && m), p || Jl(n, s, h, i);
		}
		n.closePath(), n.fill(p ? "evenodd" : "nonzero"), n.restore();
	}
}
function E0(n, t, e) {
	const { top: s, bottom: i } = t.chart.chartArea,
		{ property: r, start: o, end: a } = e || {};
	r === "x" && (n.beginPath(), n.rect(o, s, a - o, i - s), n.clip());
}
function Jl(n, t, e, s) {
	const i = t.interpolate(e, s);
	i && n.lineTo(i.x, i.y);
}
var k0 = {
	id: "filler",
	afterDatasetsUpdate(n, t, e) {
		const s = (n.data.datasets || []).length,
			i = [];
		let r, o, a, c;
		for (o = 0; o < s; ++o)
			(r = n.getDatasetMeta(o)),
				(a = r.dataset),
				(c = null),
				a &&
					a.options &&
					a instanceof Nr &&
					(c = {
						visible: n.isDatasetVisible(o),
						index: o,
						fill: l0(a, o, s),
						chart: n,
						axis: r.controller.options.indexAxis,
						scale: r.vScale,
						line: a,
					}),
				(r.$filler = c),
				i.push(c);
		for (o = 0; o < s; ++o)
			(c = i[o]), !(!c || c.fill === !1) && (c.fill = c0(i, o, e.propagate));
	},
	beforeDraw(n, t, e) {
		const s = e.drawTime === "beforeDraw",
			i = n.getSortedVisibleDatasetMetas(),
			r = n.chartArea;
		for (let o = i.length - 1; o >= 0; --o) {
			const a = i[o].$filler;
			a &&
				(a.line.updateControlPoints(r, a.axis), s && a.fill && Io(n.ctx, a, r));
		}
	},
	beforeDatasetsDraw(n, t, e) {
		if (e.drawTime !== "beforeDatasetsDraw") return;
		const s = n.getSortedVisibleDatasetMetas();
		for (let i = s.length - 1; i >= 0; --i) {
			const r = s[i].$filler;
			Gl(r) && Io(n.ctx, r, n.chartArea);
		}
	},
	beforeDatasetDraw(n, t, e) {
		const s = t.meta.$filler;
		!Gl(s) || e.drawTime !== "beforeDatasetDraw" || Io(n.ctx, s, n.chartArea);
	},
	defaults: { propagate: !0, drawTime: "beforeDatasetDraw" },
};
const Zl = (n, t) => {
		let { boxHeight: e = t, boxWidth: s = t } = n;
		return (
			n.usePointStyle &&
				((e = Math.min(e, t)), (s = n.pointStyleWidth || Math.min(s, t))),
			{ boxWidth: s, boxHeight: e, itemHeight: Math.max(t, e) }
		);
	},
	C0 = (n, t) =>
		n !== null &&
		t !== null &&
		n.datasetIndex === t.datasetIndex &&
		n.index === t.index;
class th extends ce {
	constructor(t) {
		super(),
			(this._added = !1),
			(this.legendHitBoxes = []),
			(this._hoveredItem = null),
			(this.doughnutMode = !1),
			(this.chart = t.chart),
			(this.options = t.options),
			(this.ctx = t.ctx),
			(this.legendItems = void 0),
			(this.columnSizes = void 0),
			(this.lineWidths = void 0),
			(this.maxHeight = void 0),
			(this.maxWidth = void 0),
			(this.top = void 0),
			(this.bottom = void 0),
			(this.left = void 0),
			(this.right = void 0),
			(this.height = void 0),
			(this.width = void 0),
			(this._margins = void 0),
			(this.position = void 0),
			(this.weight = void 0),
			(this.fullSize = void 0);
	}
	update(t, e, s) {
		(this.maxWidth = t),
			(this.maxHeight = e),
			(this._margins = s),
			this.setDimensions(),
			this.buildLabels(),
			this.fit();
	}
	setDimensions() {
		this.isHorizontal()
			? ((this.width = this.maxWidth),
			  (this.left = this._margins.left),
			  (this.right = this.width))
			: ((this.height = this.maxHeight),
			  (this.top = this._margins.top),
			  (this.bottom = this.height));
	}
	buildLabels() {
		const t = this.options.labels || {};
		let e = Q(t.generateLabels, [this.chart], this) || [];
		t.filter && (e = e.filter((s) => t.filter(s, this.chart.data))),
			t.sort && (e = e.sort((s, i) => t.sort(s, i, this.chart.data))),
			this.options.reverse && e.reverse(),
			(this.legendItems = e);
	}
	fit() {
		const { options: t, ctx: e } = this;
		if (!t.display) {
			this.width = this.height = 0;
			return;
		}
		const s = t.labels,
			i = ut(s.font),
			r = i.size,
			o = this._computeTitleHeight(),
			{ boxWidth: a, itemHeight: c } = Zl(s, r);
		let l, h;
		(e.font = i.string),
			this.isHorizontal()
				? ((l = this.maxWidth), (h = this._fitRows(o, r, a, c) + 10))
				: ((h = this.maxHeight), (l = this._fitCols(o, i, a, c) + 10)),
			(this.width = Math.min(l, t.maxWidth || this.maxWidth)),
			(this.height = Math.min(h, t.maxHeight || this.maxHeight));
	}
	_fitRows(t, e, s, i) {
		const {
				ctx: r,
				maxWidth: o,
				options: {
					labels: { padding: a },
				},
			} = this,
			c = (this.legendHitBoxes = []),
			l = (this.lineWidths = [0]),
			h = i + a;
		let u = t;
		(r.textAlign = "left"), (r.textBaseline = "middle");
		let d = -1,
			f = -h;
		return (
			this.legendItems.forEach((g, p) => {
				const m = s + e / 2 + r.measureText(g.text).width;
				(p === 0 || l[l.length - 1] + m + 2 * a > o) &&
					((u += h), (l[l.length - (p > 0 ? 0 : 1)] = 0), (f += h), d++),
					(c[p] = { left: 0, top: f, row: d, width: m, height: i }),
					(l[l.length - 1] += m + a);
			}),
			u
		);
	}
	_fitCols(t, e, s, i) {
		const {
				ctx: r,
				maxHeight: o,
				options: {
					labels: { padding: a },
				},
			} = this,
			c = (this.legendHitBoxes = []),
			l = (this.columnSizes = []),
			h = o - t;
		let u = a,
			d = 0,
			f = 0,
			g = 0,
			p = 0;
		return (
			this.legendItems.forEach((m, b) => {
				const { itemWidth: y, itemHeight: v } = T0(s, e, r, m, i);
				b > 0 &&
					f + v + 2 * a > h &&
					((u += d + a),
					l.push({ width: d, height: f }),
					(g += d + a),
					p++,
					(d = f = 0)),
					(c[b] = { left: g, top: f, col: p, width: y, height: v }),
					(d = Math.max(d, y)),
					(f += v + a);
			}),
			(u += d),
			l.push({ width: d, height: f }),
			u
		);
	}
	adjustHitBoxes() {
		if (!this.options.display) return;
		const t = this._computeTitleHeight(),
			{
				legendHitBoxes: e,
				options: {
					align: s,
					labels: { padding: i },
					rtl: r,
				},
			} = this,
			o = Pn(r, this.left, this.width);
		if (this.isHorizontal()) {
			let a = 0,
				c = It(s, this.left + i, this.right - this.lineWidths[a]);
			for (const l of e)
				a !== l.row &&
					((a = l.row),
					(c = It(s, this.left + i, this.right - this.lineWidths[a]))),
					(l.top += this.top + t + i),
					(l.left = o.leftForLtr(o.x(c), l.width)),
					(c += l.width + i);
		} else {
			let a = 0,
				c = It(s, this.top + t + i, this.bottom - this.columnSizes[a].height);
			for (const l of e)
				l.col !== a &&
					((a = l.col),
					(c = It(
						s,
						this.top + t + i,
						this.bottom - this.columnSizes[a].height,
					))),
					(l.top = c),
					(l.left += this.left + i),
					(l.left = o.leftForLtr(o.x(l.left), l.width)),
					(c += l.height + i);
		}
	}
	isHorizontal() {
		return (
			this.options.position === "top" || this.options.position === "bottom"
		);
	}
	draw() {
		if (this.options.display) {
			const t = this.ctx;
			Pr(t, this), this._draw(), Rr(t);
		}
	}
	_draw() {
		const { options: t, columnSizes: e, lineWidths: s, ctx: i } = this,
			{ align: r, labels: o } = t,
			a = ht.color,
			c = Pn(t.rtl, this.left, this.width),
			l = ut(o.font),
			{ padding: h } = o,
			u = l.size,
			d = u / 2;
		let f;
		this.drawTitle(),
			(i.textAlign = c.textAlign("left")),
			(i.textBaseline = "middle"),
			(i.lineWidth = 0.5),
			(i.font = l.string);
		const { boxWidth: g, boxHeight: p, itemHeight: m } = Zl(o, u),
			b = function (k, S, E) {
				if (isNaN(g) || g <= 0 || isNaN(p) || p < 0) return;
				i.save();
				const T = B(E.lineWidth, 1);
				if (
					((i.fillStyle = B(E.fillStyle, a)),
					(i.lineCap = B(E.lineCap, "butt")),
					(i.lineDashOffset = B(E.lineDashOffset, 0)),
					(i.lineJoin = B(E.lineJoin, "miter")),
					(i.lineWidth = T),
					(i.strokeStyle = B(E.strokeStyle, a)),
					i.setLineDash(B(E.lineDash, [])),
					o.usePointStyle)
				) {
					const M = {
							radius: (p * Math.SQRT2) / 2,
							pointStyle: E.pointStyle,
							rotation: E.rotation,
							borderWidth: T,
						},
						I = c.xPlus(k, g / 2),
						j = S + d;
					Nu(i, M, I, j, o.pointStyleWidth && g);
				} else {
					const M = S + Math.max((u - p) / 2, 0),
						I = c.leftForLtr(k, g),
						j = un(E.borderRadius);
					i.beginPath(),
						Object.values(j).some((lt) => lt !== 0)
							? Fs(i, { x: I, y: M, w: g, h: p, radius: j })
							: i.rect(I, M, g, p),
						i.fill(),
						T !== 0 && i.stroke();
				}
				i.restore();
			},
			y = function (k, S, E) {
				mn(i, E.text, k, S + m / 2, l, {
					strikethrough: E.hidden,
					textAlign: c.textAlign(E.textAlign),
				});
			},
			v = this.isHorizontal(),
			_ = this._computeTitleHeight();
		v
			? (f = {
					x: It(r, this.left + h, this.right - s[0]),
					y: this.top + h + _,
					line: 0,
			  })
			: (f = {
					x: this.left + h,
					y: It(r, this.top + _ + h, this.bottom - e[0].height),
					line: 0,
			  }),
			Wu(this.ctx, t.textDirection);
		const x = m + h;
		this.legendItems.forEach((k, S) => {
			(i.strokeStyle = k.fontColor), (i.fillStyle = k.fontColor);
			const E = i.measureText(k.text).width,
				T = c.textAlign(k.textAlign || (k.textAlign = o.textAlign)),
				M = g + d + E;
			let I = f.x,
				j = f.y;
			c.setWidth(this.width),
				v
					? S > 0 &&
					  I + M + h > this.right &&
					  ((j = f.y += x),
					  f.line++,
					  (I = f.x = It(r, this.left + h, this.right - s[f.line])))
					: S > 0 &&
					  j + x > this.bottom &&
					  ((I = f.x = I + e[f.line].width + h),
					  f.line++,
					  (j = f.y =
							It(r, this.top + _ + h, this.bottom - e[f.line].height)));
			const lt = c.x(I);
			if (
				(b(lt, j, k),
				(I = zp(T, I + g + d, v ? I + M : this.right, t.rtl)),
				y(c.x(I), j, k),
				v)
			)
				f.x += M + h;
			else if (typeof k.text != "string") {
				const Ft = l.lineHeight;
				f.y += yd(k, Ft);
			} else f.y += x;
		}),
			qu(this.ctx, t.textDirection);
	}
	drawTitle() {
		const t = this.options,
			e = t.title,
			s = ut(e.font),
			i = Lt(e.padding);
		if (!e.display) return;
		const r = Pn(t.rtl, this.left, this.width),
			o = this.ctx,
			a = e.position,
			c = s.size / 2,
			l = i.top + c;
		let h,
			u = this.left,
			d = this.width;
		if (this.isHorizontal())
			(d = Math.max(...this.lineWidths)),
				(h = this.top + l),
				(u = It(t.align, u, this.right - d));
		else {
			const g = this.columnSizes.reduce((p, m) => Math.max(p, m.height), 0);
			h =
				l +
				It(
					t.align,
					this.top,
					this.bottom - g - t.labels.padding - this._computeTitleHeight(),
				);
		}
		const f = It(a, u, u + d);
		(o.textAlign = r.textAlign(za(a))),
			(o.textBaseline = "middle"),
			(o.strokeStyle = e.color),
			(o.fillStyle = e.color),
			(o.font = s.string),
			mn(o, e.text, f, h, s);
	}
	_computeTitleHeight() {
		const t = this.options.title,
			e = ut(t.font),
			s = Lt(t.padding);
		return t.display ? e.lineHeight + s.height : 0;
	}
	_getLegendItemAt(t, e) {
		let s, i, r;
		if (me(t, this.left, this.right) && me(e, this.top, this.bottom)) {
			for (r = this.legendHitBoxes, s = 0; s < r.length; ++s)
				if (
					((i = r[s]),
					me(t, i.left, i.left + i.width) && me(e, i.top, i.top + i.height))
				)
					return this.legendItems[s];
		}
		return null;
	}
	handleEvent(t) {
		const e = this.options;
		if (!A0(t.type, e)) return;
		const s = this._getLegendItemAt(t.x, t.y);
		if (t.type === "mousemove" || t.type === "mouseout") {
			const i = this._hoveredItem,
				r = C0(i, s);
			i && !r && Q(e.onLeave, [t, i, this], this),
				(this._hoveredItem = s),
				s && !r && Q(e.onHover, [t, s, this], this);
		} else s && Q(e.onClick, [t, s, this], this);
	}
}
function T0(n, t, e, s, i) {
	const r = I0(s, n, t, e),
		o = M0(i, s, t.lineHeight);
	return { itemWidth: r, itemHeight: o };
}
function I0(n, t, e, s) {
	let i = n.text;
	return (
		i &&
			typeof i != "string" &&
			(i = i.reduce((r, o) => (r.length > o.length ? r : o))),
		t + e.size / 2 + s.measureText(i).width
	);
}
function M0(n, t, e) {
	let s = n;
	return typeof t.text != "string" && (s = yd(t, e)), s;
}
function yd(n, t) {
	const e = n.text ? n.text.length + 0.5 : 0;
	return t * e;
}
function A0(n, t) {
	return !!(
		((n === "mousemove" || n === "mouseout") && (t.onHover || t.onLeave)) ||
		(t.onClick && (n === "click" || n === "mouseup"))
	);
}
var D0 = {
	id: "legend",
	_element: th,
	start(n, t, e) {
		const s = (n.legend = new th({ ctx: n.ctx, options: e, chart: n }));
		Ot.configure(n, s, e), Ot.addBox(n, s);
	},
	stop(n) {
		Ot.removeBox(n, n.legend), delete n.legend;
	},
	beforeUpdate(n, t, e) {
		const s = n.legend;
		Ot.configure(n, s, e), (s.options = e);
	},
	afterUpdate(n) {
		const t = n.legend;
		t.buildLabels(), t.adjustHitBoxes();
	},
	afterEvent(n, t) {
		t.replay || n.legend.handleEvent(t.event);
	},
	defaults: {
		display: !0,
		position: "top",
		align: "center",
		fullSize: !0,
		reverse: !1,
		weight: 1e3,
		onClick(n, t, e) {
			const s = t.datasetIndex,
				i = e.chart;
			i.isDatasetVisible(s)
				? (i.hide(s), (t.hidden = !0))
				: (i.show(s), (t.hidden = !1));
		},
		onHover: null,
		onLeave: null,
		labels: {
			color: (n) => n.chart.options.color,
			boxWidth: 40,
			padding: 10,
			generateLabels(n) {
				const t = n.data.datasets,
					{
						labels: {
							usePointStyle: e,
							pointStyle: s,
							textAlign: i,
							color: r,
							useBorderRadius: o,
							borderRadius: a,
						},
					} = n.legend.options;
				return n._getSortedDatasetMetas().map((c) => {
					const l = c.controller.getStyle(e ? 0 : void 0),
						h = Lt(l.borderWidth);
					return {
						text: t[c.index].label,
						fillStyle: l.backgroundColor,
						fontColor: r,
						hidden: !c.visible,
						lineCap: l.borderCapStyle,
						lineDash: l.borderDash,
						lineDashOffset: l.borderDashOffset,
						lineJoin: l.borderJoinStyle,
						lineWidth: (h.width + h.height) / 4,
						strokeStyle: l.borderColor,
						pointStyle: s || l.pointStyle,
						rotation: l.rotation,
						textAlign: i || l.textAlign,
						borderRadius: o && (a || l.borderRadius),
						datasetIndex: c.index,
					};
				}, this);
			},
		},
		title: {
			color: (n) => n.chart.options.color,
			display: !1,
			position: "center",
			text: "",
		},
	},
	descriptors: {
		_scriptable: (n) => !n.startsWith("on"),
		labels: {
			_scriptable: (n) => !["generateLabels", "filter", "sort"].includes(n),
		},
	},
};
class Ga extends ce {
	constructor(t) {
		super(),
			(this.chart = t.chart),
			(this.options = t.options),
			(this.ctx = t.ctx),
			(this._padding = void 0),
			(this.top = void 0),
			(this.bottom = void 0),
			(this.left = void 0),
			(this.right = void 0),
			(this.width = void 0),
			(this.height = void 0),
			(this.position = void 0),
			(this.weight = void 0),
			(this.fullSize = void 0);
	}
	update(t, e) {
		const s = this.options;
		if (((this.left = 0), (this.top = 0), !s.display)) {
			this.width = this.height = this.right = this.bottom = 0;
			return;
		}
		(this.width = this.right = t), (this.height = this.bottom = e);
		const i = J(s.text) ? s.text.length : 1;
		this._padding = Lt(s.padding);
		const r = i * ut(s.font).lineHeight + this._padding.height;
		this.isHorizontal() ? (this.height = r) : (this.width = r);
	}
	isHorizontal() {
		const t = this.options.position;
		return t === "top" || t === "bottom";
	}
	_drawArgs(t) {
		const { top: e, left: s, bottom: i, right: r, options: o } = this,
			a = o.align;
		let c = 0,
			l,
			h,
			u;
		return (
			this.isHorizontal()
				? ((h = It(a, s, r)), (u = e + t), (l = r - s))
				: (o.position === "left"
						? ((h = s + t), (u = It(a, i, e)), (c = it * -0.5))
						: ((h = r - t), (u = It(a, e, i)), (c = it * 0.5)),
				  (l = i - e)),
			{ titleX: h, titleY: u, maxWidth: l, rotation: c }
		);
	}
	draw() {
		const t = this.ctx,
			e = this.options;
		if (!e.display) return;
		const s = ut(e.font),
			r = s.lineHeight / 2 + this._padding.top,
			{ titleX: o, titleY: a, maxWidth: c, rotation: l } = this._drawArgs(r);
		mn(t, e.text, 0, 0, s, {
			color: e.color,
			maxWidth: c,
			rotation: l,
			textAlign: za(e.align),
			textBaseline: "middle",
			translation: [o, a],
		});
	}
}
function O0(n, t) {
	const e = new Ga({ ctx: n.ctx, options: t, chart: n });
	Ot.configure(n, e, t), Ot.addBox(n, e), (n.titleBlock = e);
}
var P0 = {
	id: "title",
	_element: Ga,
	start(n, t, e) {
		O0(n, e);
	},
	stop(n) {
		const t = n.titleBlock;
		Ot.removeBox(n, t), delete n.titleBlock;
	},
	beforeUpdate(n, t, e) {
		const s = n.titleBlock;
		Ot.configure(n, s, e), (s.options = e);
	},
	defaults: {
		align: "center",
		display: !1,
		font: { weight: "bold" },
		fullSize: !0,
		padding: 10,
		position: "top",
		text: "",
		weight: 2e3,
	},
	defaultRoutes: { color: "color" },
	descriptors: { _scriptable: !0, _indexable: !1 },
};
const Mi = new WeakMap();
var R0 = {
	id: "subtitle",
	start(n, t, e) {
		const s = new Ga({ ctx: n.ctx, options: e, chart: n });
		Ot.configure(n, s, e), Ot.addBox(n, s), Mi.set(n, s);
	},
	stop(n) {
		Ot.removeBox(n, Mi.get(n)), Mi.delete(n);
	},
	beforeUpdate(n, t, e) {
		const s = Mi.get(n);
		Ot.configure(n, s, e), (s.options = e);
	},
	defaults: {
		align: "center",
		display: !1,
		font: { weight: "normal" },
		fullSize: !0,
		padding: 0,
		position: "top",
		text: "",
		weight: 1500,
	},
	defaultRoutes: { color: "color" },
	descriptors: { _scriptable: !0, _indexable: !1 },
};
const ms = {
	average(n) {
		if (!n.length) return !1;
		let t,
			e,
			s = 0,
			i = 0,
			r = 0;
		for (t = 0, e = n.length; t < e; ++t) {
			const o = n[t].element;
			if (o && o.hasValue()) {
				const a = o.tooltipPosition();
				(s += a.x), (i += a.y), ++r;
			}
		}
		return { x: s / r, y: i / r };
	},
	nearest(n, t) {
		if (!n.length) return !1;
		let e = t.x,
			s = t.y,
			i = Number.POSITIVE_INFINITY,
			r,
			o,
			a;
		for (r = 0, o = n.length; r < o; ++r) {
			const c = n[r].element;
			if (c && c.hasValue()) {
				const l = c.getCenterPoint(),
					h = Go(t, l);
				h < i && ((i = h), (a = c));
			}
		}
		if (a) {
			const c = a.tooltipPosition();
			(e = c.x), (s = c.y);
		}
		return { x: e, y: s };
	},
};
function ne(n, t) {
	return t && (J(t) ? Array.prototype.push.apply(n, t) : n.push(t)), n;
}
function de(n) {
	return (typeof n == "string" || n instanceof String) &&
		n.indexOf(`
`) > -1
		? n.split(`
`)
		: n;
}
function L0(n, t) {
	const { element: e, datasetIndex: s, index: i } = t,
		r = n.getDatasetMeta(s).controller,
		{ label: o, value: a } = r.getLabelAndValue(i);
	return {
		chart: n,
		label: o,
		parsed: r.getParsed(i),
		raw: n.data.datasets[s].data[i],
		formattedValue: a,
		dataset: r.getDataset(),
		dataIndex: i,
		datasetIndex: s,
		element: e,
	};
}
function eh(n, t) {
	const e = n.chart.ctx,
		{ body: s, footer: i, title: r } = n,
		{ boxWidth: o, boxHeight: a } = t,
		c = ut(t.bodyFont),
		l = ut(t.titleFont),
		h = ut(t.footerFont),
		u = r.length,
		d = i.length,
		f = s.length,
		g = Lt(t.padding);
	let p = g.height,
		m = 0,
		b = s.reduce(
			(_, x) => _ + x.before.length + x.lines.length + x.after.length,
			0,
		);
	if (
		((b += n.beforeBody.length + n.afterBody.length),
		u &&
			(p += u * l.lineHeight + (u - 1) * t.titleSpacing + t.titleMarginBottom),
		b)
	) {
		const _ = t.displayColors ? Math.max(a, c.lineHeight) : c.lineHeight;
		p += f * _ + (b - f) * c.lineHeight + (b - 1) * t.bodySpacing;
	}
	d && (p += t.footerMarginTop + d * h.lineHeight + (d - 1) * t.footerSpacing);
	let y = 0;
	const v = function (_) {
		m = Math.max(m, e.measureText(_).width + y);
	};
	return (
		e.save(),
		(e.font = l.string),
		G(n.title, v),
		(e.font = c.string),
		G(n.beforeBody.concat(n.afterBody), v),
		(y = t.displayColors ? o + 2 + t.boxPadding : 0),
		G(s, (_) => {
			G(_.before, v), G(_.lines, v), G(_.after, v);
		}),
		(y = 0),
		(e.font = h.string),
		G(n.footer, v),
		e.restore(),
		(m += g.width),
		{ width: m, height: p }
	);
}
function N0(n, t) {
	const { y: e, height: s } = t;
	return e < s / 2 ? "top" : e > n.height - s / 2 ? "bottom" : "center";
}
function F0(n, t, e, s) {
	const { x: i, width: r } = s,
		o = e.caretSize + e.caretPadding;
	if ((n === "left" && i + r + o > t.width) || (n === "right" && i - r - o < 0))
		return !0;
}
function B0(n, t, e, s) {
	const { x: i, width: r } = e,
		{
			width: o,
			chartArea: { left: a, right: c },
		} = n;
	let l = "center";
	return (
		s === "center"
			? (l = i <= (a + c) / 2 ? "left" : "right")
			: i <= r / 2
			? (l = "left")
			: i >= o - r / 2 && (l = "right"),
		F0(l, n, t, e) && (l = "center"),
		l
	);
}
function nh(n, t, e) {
	const s = e.yAlign || t.yAlign || N0(n, e);
	return { xAlign: e.xAlign || t.xAlign || B0(n, t, e, s), yAlign: s };
}
function V0(n, t) {
	let { x: e, width: s } = n;
	return t === "right" ? (e -= s) : t === "center" && (e -= s / 2), e;
}
function z0(n, t, e) {
	let { y: s, height: i } = n;
	return (
		t === "top" ? (s += e) : t === "bottom" ? (s -= i + e) : (s -= i / 2), s
	);
}
function sh(n, t, e, s) {
	const { caretSize: i, caretPadding: r, cornerRadius: o } = n,
		{ xAlign: a, yAlign: c } = e,
		l = i + r,
		{ topLeft: h, topRight: u, bottomLeft: d, bottomRight: f } = un(o);
	let g = V0(t, a);
	const p = z0(t, c, l);
	return (
		c === "center"
			? a === "left"
				? (g += l)
				: a === "right" && (g -= l)
			: a === "left"
			? (g -= Math.max(h, d) + i)
			: a === "right" && (g += Math.max(u, f) + i),
		{ x: wt(g, 0, s.width - t.width), y: wt(p, 0, s.height - t.height) }
	);
}
function Ai(n, t, e) {
	const s = Lt(e.padding);
	return t === "center"
		? n.x + n.width / 2
		: t === "right"
		? n.x + n.width - s.right
		: n.x + s.left;
}
function ih(n) {
	return ne([], de(n));
}
function $0(n, t, e) {
	return Ye(n, { tooltip: t, tooltipItems: e, type: "tooltip" });
}
function rh(n, t) {
	const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
	return e ? n.override(e) : n;
}
const bd = {
	beforeTitle: he,
	title(n) {
		if (n.length > 0) {
			const t = n[0],
				e = t.chart.data.labels,
				s = e ? e.length : 0;
			if (this && this.options && this.options.mode === "dataset")
				return t.dataset.label || "";
			if (t.label) return t.label;
			if (s > 0 && t.dataIndex < s) return e[t.dataIndex];
		}
		return "";
	},
	afterTitle: he,
	beforeBody: he,
	beforeLabel: he,
	label(n) {
		if (this && this.options && this.options.mode === "dataset")
			return n.label + ": " + n.formattedValue || n.formattedValue;
		let t = n.dataset.label || "";
		t && (t += ": ");
		const e = n.formattedValue;
		return q(e) || (t += e), t;
	},
	labelColor(n) {
		const e = n.chart
			.getDatasetMeta(n.datasetIndex)
			.controller.getStyle(n.dataIndex);
		return {
			borderColor: e.borderColor,
			backgroundColor: e.backgroundColor,
			borderWidth: e.borderWidth,
			borderDash: e.borderDash,
			borderDashOffset: e.borderDashOffset,
			borderRadius: 0,
		};
	},
	labelTextColor() {
		return this.options.bodyColor;
	},
	labelPointStyle(n) {
		const e = n.chart
			.getDatasetMeta(n.datasetIndex)
			.controller.getStyle(n.dataIndex);
		return { pointStyle: e.pointStyle, rotation: e.rotation };
	},
	afterLabel: he,
	afterBody: he,
	beforeFooter: he,
	footer: he,
	afterFooter: he,
};
function $t(n, t, e, s) {
	const i = n[t].call(e, s);
	return typeof i > "u" ? bd[t].call(e, s) : i;
}
class oh extends ce {
	static positioners = ms;
	constructor(t) {
		super(),
			(this.opacity = 0),
			(this._active = []),
			(this._eventPosition = void 0),
			(this._size = void 0),
			(this._cachedAnimations = void 0),
			(this._tooltipItems = []),
			(this.$animations = void 0),
			(this.$context = void 0),
			(this.chart = t.chart),
			(this.options = t.options),
			(this.dataPoints = void 0),
			(this.title = void 0),
			(this.beforeBody = void 0),
			(this.body = void 0),
			(this.afterBody = void 0),
			(this.footer = void 0),
			(this.xAlign = void 0),
			(this.yAlign = void 0),
			(this.x = void 0),
			(this.y = void 0),
			(this.height = void 0),
			(this.width = void 0),
			(this.caretX = void 0),
			(this.caretY = void 0),
			(this.labelColors = void 0),
			(this.labelPointStyles = void 0),
			(this.labelTextColors = void 0);
	}
	initialize(t) {
		(this.options = t),
			(this._cachedAnimations = void 0),
			(this.$context = void 0);
	}
	_resolveAnimations() {
		const t = this._cachedAnimations;
		if (t) return t;
		const e = this.chart,
			s = this.options.setContext(this.getContext()),
			i = s.enabled && e.options.animation && s.animations,
			r = new Xu(this.chart, i);
		return i._cacheable && (this._cachedAnimations = Object.freeze(r)), r;
	}
	getContext() {
		return (
			this.$context ||
			(this.$context = $0(this.chart.getContext(), this, this._tooltipItems))
		);
	}
	getTitle(t, e) {
		const { callbacks: s } = e,
			i = $t(s, "beforeTitle", this, t),
			r = $t(s, "title", this, t),
			o = $t(s, "afterTitle", this, t);
		let a = [];
		return (a = ne(a, de(i))), (a = ne(a, de(r))), (a = ne(a, de(o))), a;
	}
	getBeforeBody(t, e) {
		return ih($t(e.callbacks, "beforeBody", this, t));
	}
	getBody(t, e) {
		const { callbacks: s } = e,
			i = [];
		return (
			G(t, (r) => {
				const o = { before: [], lines: [], after: [] },
					a = rh(s, r);
				ne(o.before, de($t(a, "beforeLabel", this, r))),
					ne(o.lines, $t(a, "label", this, r)),
					ne(o.after, de($t(a, "afterLabel", this, r))),
					i.push(o);
			}),
			i
		);
	}
	getAfterBody(t, e) {
		return ih($t(e.callbacks, "afterBody", this, t));
	}
	getFooter(t, e) {
		const { callbacks: s } = e,
			i = $t(s, "beforeFooter", this, t),
			r = $t(s, "footer", this, t),
			o = $t(s, "afterFooter", this, t);
		let a = [];
		return (a = ne(a, de(i))), (a = ne(a, de(r))), (a = ne(a, de(o))), a;
	}
	_createItems(t) {
		const e = this._active,
			s = this.chart.data,
			i = [],
			r = [],
			o = [];
		let a = [],
			c,
			l;
		for (c = 0, l = e.length; c < l; ++c) a.push(L0(this.chart, e[c]));
		return (
			t.filter && (a = a.filter((h, u, d) => t.filter(h, u, d, s))),
			t.itemSort && (a = a.sort((h, u) => t.itemSort(h, u, s))),
			G(a, (h) => {
				const u = rh(t.callbacks, h);
				i.push($t(u, "labelColor", this, h)),
					r.push($t(u, "labelPointStyle", this, h)),
					o.push($t(u, "labelTextColor", this, h));
			}),
			(this.labelColors = i),
			(this.labelPointStyles = r),
			(this.labelTextColors = o),
			(this.dataPoints = a),
			a
		);
	}
	update(t, e) {
		const s = this.options.setContext(this.getContext()),
			i = this._active;
		let r,
			o = [];
		if (!i.length) this.opacity !== 0 && (r = { opacity: 0 });
		else {
			const a = ms[s.position].call(this, i, this._eventPosition);
			(o = this._createItems(s)),
				(this.title = this.getTitle(o, s)),
				(this.beforeBody = this.getBeforeBody(o, s)),
				(this.body = this.getBody(o, s)),
				(this.afterBody = this.getAfterBody(o, s)),
				(this.footer = this.getFooter(o, s));
			const c = (this._size = eh(this, s)),
				l = Object.assign({}, a, c),
				h = nh(this.chart, s, l),
				u = sh(s, l, h, this.chart);
			(this.xAlign = h.xAlign),
				(this.yAlign = h.yAlign),
				(r = {
					opacity: 1,
					x: u.x,
					y: u.y,
					width: c.width,
					height: c.height,
					caretX: a.x,
					caretY: a.y,
				});
		}
		(this._tooltipItems = o),
			(this.$context = void 0),
			r && this._resolveAnimations().update(this, r),
			t &&
				s.external &&
				s.external.call(this, { chart: this.chart, tooltip: this, replay: e });
	}
	drawCaret(t, e, s, i) {
		const r = this.getCaretPosition(t, s, i);
		e.lineTo(r.x1, r.y1), e.lineTo(r.x2, r.y2), e.lineTo(r.x3, r.y3);
	}
	getCaretPosition(t, e, s) {
		const { xAlign: i, yAlign: r } = this,
			{ caretSize: o, cornerRadius: a } = s,
			{ topLeft: c, topRight: l, bottomLeft: h, bottomRight: u } = un(a),
			{ x: d, y: f } = t,
			{ width: g, height: p } = e;
		let m, b, y, v, _, x;
		return (
			r === "center"
				? ((_ = f + p / 2),
				  i === "left"
						? ((m = d), (b = m - o), (v = _ + o), (x = _ - o))
						: ((m = d + g), (b = m + o), (v = _ - o), (x = _ + o)),
				  (y = m))
				: (i === "left"
						? (b = d + Math.max(c, h) + o)
						: i === "right"
						? (b = d + g - Math.max(l, u) - o)
						: (b = this.caretX),
				  r === "top"
						? ((v = f), (_ = v - o), (m = b - o), (y = b + o))
						: ((v = f + p), (_ = v + o), (m = b + o), (y = b - o)),
				  (x = v)),
			{ x1: m, x2: b, x3: y, y1: v, y2: _, y3: x }
		);
	}
	drawTitle(t, e, s) {
		const i = this.title,
			r = i.length;
		let o, a, c;
		if (r) {
			const l = Pn(s.rtl, this.x, this.width);
			for (
				t.x = Ai(this, s.titleAlign, s),
					e.textAlign = l.textAlign(s.titleAlign),
					e.textBaseline = "middle",
					o = ut(s.titleFont),
					a = s.titleSpacing,
					e.fillStyle = s.titleColor,
					e.font = o.string,
					c = 0;
				c < r;
				++c
			)
				e.fillText(i[c], l.x(t.x), t.y + o.lineHeight / 2),
					(t.y += o.lineHeight + a),
					c + 1 === r && (t.y += s.titleMarginBottom - a);
		}
	}
	_drawColorBox(t, e, s, i, r) {
		const o = this.labelColors[s],
			a = this.labelPointStyles[s],
			{ boxHeight: c, boxWidth: l, boxPadding: h } = r,
			u = ut(r.bodyFont),
			d = Ai(this, "left", r),
			f = i.x(d),
			g = c < u.lineHeight ? (u.lineHeight - c) / 2 : 0,
			p = e.y + g;
		if (r.usePointStyle) {
			const m = {
					radius: Math.min(l, c) / 2,
					pointStyle: a.pointStyle,
					rotation: a.rotation,
					borderWidth: 1,
				},
				b = i.leftForLtr(f, l) + l / 2,
				y = p + c / 2;
			(t.strokeStyle = r.multiKeyBackground),
				(t.fillStyle = r.multiKeyBackground),
				Qo(t, m, b, y),
				(t.strokeStyle = o.borderColor),
				(t.fillStyle = o.backgroundColor),
				Qo(t, m, b, y);
		} else {
			(t.lineWidth = U(o.borderWidth)
				? Math.max(...Object.values(o.borderWidth))
				: o.borderWidth || 1),
				(t.strokeStyle = o.borderColor),
				t.setLineDash(o.borderDash || []),
				(t.lineDashOffset = o.borderDashOffset || 0);
			const m = i.leftForLtr(f, l - h),
				b = i.leftForLtr(i.xPlus(f, 1), l - h - 2),
				y = un(o.borderRadius);
			Object.values(y).some((v) => v !== 0)
				? (t.beginPath(),
				  (t.fillStyle = r.multiKeyBackground),
				  Fs(t, { x: m, y: p, w: l, h: c, radius: y }),
				  t.fill(),
				  t.stroke(),
				  (t.fillStyle = o.backgroundColor),
				  t.beginPath(),
				  Fs(t, { x: b, y: p + 1, w: l - 2, h: c - 2, radius: y }),
				  t.fill())
				: ((t.fillStyle = r.multiKeyBackground),
				  t.fillRect(m, p, l, c),
				  t.strokeRect(m, p, l, c),
				  (t.fillStyle = o.backgroundColor),
				  t.fillRect(b, p + 1, l - 2, c - 2));
		}
		t.fillStyle = this.labelTextColors[s];
	}
	drawBody(t, e, s) {
		const { body: i } = this,
			{
				bodySpacing: r,
				bodyAlign: o,
				displayColors: a,
				boxHeight: c,
				boxWidth: l,
				boxPadding: h,
			} = s,
			u = ut(s.bodyFont);
		let d = u.lineHeight,
			f = 0;
		const g = Pn(s.rtl, this.x, this.width),
			p = function (E) {
				e.fillText(E, g.x(t.x + f), t.y + d / 2), (t.y += d + r);
			},
			m = g.textAlign(o);
		let b, y, v, _, x, k, S;
		for (
			e.textAlign = o,
				e.textBaseline = "middle",
				e.font = u.string,
				t.x = Ai(this, m, s),
				e.fillStyle = s.bodyColor,
				G(this.beforeBody, p),
				f = a && m !== "right" ? (o === "center" ? l / 2 + h : l + 2 + h) : 0,
				_ = 0,
				k = i.length;
			_ < k;
			++_
		) {
			for (
				b = i[_],
					y = this.labelTextColors[_],
					e.fillStyle = y,
					G(b.before, p),
					v = b.lines,
					a &&
						v.length &&
						(this._drawColorBox(e, t, _, g, s),
						(d = Math.max(u.lineHeight, c))),
					x = 0,
					S = v.length;
				x < S;
				++x
			)
				p(v[x]), (d = u.lineHeight);
			G(b.after, p);
		}
		(f = 0), (d = u.lineHeight), G(this.afterBody, p), (t.y -= r);
	}
	drawFooter(t, e, s) {
		const i = this.footer,
			r = i.length;
		let o, a;
		if (r) {
			const c = Pn(s.rtl, this.x, this.width);
			for (
				t.x = Ai(this, s.footerAlign, s),
					t.y += s.footerMarginTop,
					e.textAlign = c.textAlign(s.footerAlign),
					e.textBaseline = "middle",
					o = ut(s.footerFont),
					e.fillStyle = s.footerColor,
					e.font = o.string,
					a = 0;
				a < r;
				++a
			)
				e.fillText(i[a], c.x(t.x), t.y + o.lineHeight / 2),
					(t.y += o.lineHeight + s.footerSpacing);
		}
	}
	drawBackground(t, e, s, i) {
		const { xAlign: r, yAlign: o } = this,
			{ x: a, y: c } = t,
			{ width: l, height: h } = s,
			{
				topLeft: u,
				topRight: d,
				bottomLeft: f,
				bottomRight: g,
			} = un(i.cornerRadius);
		(e.fillStyle = i.backgroundColor),
			(e.strokeStyle = i.borderColor),
			(e.lineWidth = i.borderWidth),
			e.beginPath(),
			e.moveTo(a + u, c),
			o === "top" && this.drawCaret(t, e, s, i),
			e.lineTo(a + l - d, c),
			e.quadraticCurveTo(a + l, c, a + l, c + d),
			o === "center" && r === "right" && this.drawCaret(t, e, s, i),
			e.lineTo(a + l, c + h - g),
			e.quadraticCurveTo(a + l, c + h, a + l - g, c + h),
			o === "bottom" && this.drawCaret(t, e, s, i),
			e.lineTo(a + f, c + h),
			e.quadraticCurveTo(a, c + h, a, c + h - f),
			o === "center" && r === "left" && this.drawCaret(t, e, s, i),
			e.lineTo(a, c + u),
			e.quadraticCurveTo(a, c, a + u, c),
			e.closePath(),
			e.fill(),
			i.borderWidth > 0 && e.stroke();
	}
	_updateAnimationTarget(t) {
		const e = this.chart,
			s = this.$animations,
			i = s && s.x,
			r = s && s.y;
		if (i || r) {
			const o = ms[t.position].call(this, this._active, this._eventPosition);
			if (!o) return;
			const a = (this._size = eh(this, t)),
				c = Object.assign({}, o, this._size),
				l = nh(e, t, c),
				h = sh(t, c, l, e);
			(i._to !== h.x || r._to !== h.y) &&
				((this.xAlign = l.xAlign),
				(this.yAlign = l.yAlign),
				(this.width = a.width),
				(this.height = a.height),
				(this.caretX = o.x),
				(this.caretY = o.y),
				this._resolveAnimations().update(this, h));
		}
	}
	_willRender() {
		return !!this.opacity;
	}
	draw(t) {
		const e = this.options.setContext(this.getContext());
		let s = this.opacity;
		if (!s) return;
		this._updateAnimationTarget(e);
		const i = { width: this.width, height: this.height },
			r = { x: this.x, y: this.y };
		s = Math.abs(s) < 0.001 ? 0 : s;
		const o = Lt(e.padding),
			a =
				this.title.length ||
				this.beforeBody.length ||
				this.body.length ||
				this.afterBody.length ||
				this.footer.length;
		e.enabled &&
			a &&
			(t.save(),
			(t.globalAlpha = s),
			this.drawBackground(r, t, i, e),
			Wu(t, e.textDirection),
			(r.y += o.top),
			this.drawTitle(r, t, e),
			this.drawBody(r, t, e),
			this.drawFooter(r, t, e),
			qu(t, e.textDirection),
			t.restore());
	}
	getActiveElements() {
		return this._active || [];
	}
	setActiveElements(t, e) {
		const s = this._active,
			i = t.map(({ datasetIndex: a, index: c }) => {
				const l = this.chart.getDatasetMeta(a);
				if (!l) throw new Error("Cannot find a dataset at index " + a);
				return { datasetIndex: a, element: l.data[c], index: c };
			}),
			r = !er(s, i),
			o = this._positionChanged(i, e);
		(r || o) &&
			((this._active = i),
			(this._eventPosition = e),
			(this._ignoreReplayEvents = !0),
			this.update(!0));
	}
	handleEvent(t, e, s = !0) {
		if (e && this._ignoreReplayEvents) return !1;
		this._ignoreReplayEvents = !1;
		const i = this.options,
			r = this._active || [],
			o = this._getActiveElements(t, r, e, s),
			a = this._positionChanged(o, t),
			c = e || !er(o, r) || a;
		return (
			c &&
				((this._active = o),
				(i.enabled || i.external) &&
					((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, e))),
			c
		);
	}
	_getActiveElements(t, e, s, i) {
		const r = this.options;
		if (t.type === "mouseout") return [];
		if (!i) return e;
		const o = this.chart.getElementsAtEventForMode(t, r.mode, r, s);
		return r.reverse && o.reverse(), o;
	}
	_positionChanged(t, e) {
		const { caretX: s, caretY: i, options: r } = this,
			o = ms[r.position].call(this, t, e);
		return o !== !1 && (s !== o.x || i !== o.y);
	}
}
var U0 = {
		id: "tooltip",
		_element: oh,
		positioners: ms,
		afterInit(n, t, e) {
			e && (n.tooltip = new oh({ chart: n, options: e }));
		},
		beforeUpdate(n, t, e) {
			n.tooltip && n.tooltip.initialize(e);
		},
		reset(n, t, e) {
			n.tooltip && n.tooltip.initialize(e);
		},
		afterDraw(n) {
			const t = n.tooltip;
			if (t && t._willRender()) {
				const e = { tooltip: t };
				if (
					n.notifyPlugins("beforeTooltipDraw", { ...e, cancelable: !0 }) === !1
				)
					return;
				t.draw(n.ctx), n.notifyPlugins("afterTooltipDraw", e);
			}
		},
		afterEvent(n, t) {
			if (n.tooltip) {
				const e = t.replay;
				n.tooltip.handleEvent(t.event, e, t.inChartArea) && (t.changed = !0);
			}
		},
		defaults: {
			enabled: !0,
			external: null,
			position: "average",
			backgroundColor: "rgba(0,0,0,0.8)",
			titleColor: "#fff",
			titleFont: { weight: "bold" },
			titleSpacing: 2,
			titleMarginBottom: 6,
			titleAlign: "left",
			bodyColor: "#fff",
			bodySpacing: 2,
			bodyFont: {},
			bodyAlign: "left",
			footerColor: "#fff",
			footerSpacing: 2,
			footerMarginTop: 6,
			footerFont: { weight: "bold" },
			footerAlign: "left",
			padding: 6,
			caretPadding: 2,
			caretSize: 5,
			cornerRadius: 6,
			boxHeight: (n, t) => t.bodyFont.size,
			boxWidth: (n, t) => t.bodyFont.size,
			multiKeyBackground: "#fff",
			displayColors: !0,
			boxPadding: 0,
			borderColor: "rgba(0,0,0,0)",
			borderWidth: 0,
			animation: { duration: 400, easing: "easeOutQuart" },
			animations: {
				numbers: {
					type: "number",
					properties: ["x", "y", "width", "height", "caretX", "caretY"],
				},
				opacity: { easing: "linear", duration: 200 },
			},
			callbacks: bd,
		},
		defaultRoutes: { bodyFont: "font", footerFont: "font", titleFont: "font" },
		descriptors: {
			_scriptable: (n) =>
				n !== "filter" && n !== "itemSort" && n !== "external",
			_indexable: !1,
			callbacks: { _scriptable: !1, _indexable: !1 },
			animation: { _fallback: !1 },
			animations: { _fallback: "animation" },
		},
		additionalOptionScopes: ["interaction"],
	},
	j0 = Object.freeze({
		__proto__: null,
		Colors: e0,
		Decimation: r0,
		Filler: k0,
		Legend: D0,
		SubTitle: R0,
		Title: P0,
		Tooltip: U0,
	});
const H0 = (n, t, e, s) => (
	typeof t == "string"
		? ((e = n.push(t) - 1), s.unshift({ index: e, label: t }))
		: isNaN(t) && (e = null),
	e
);
function W0(n, t, e, s) {
	const i = n.indexOf(t);
	if (i === -1) return H0(n, t, e, s);
	const r = n.lastIndexOf(t);
	return i !== r ? e : i;
}
const q0 = (n, t) => (n === null ? null : wt(Math.round(n), 0, t));
function ah(n) {
	const t = this.getLabels();
	return n >= 0 && n < t.length ? t[n] : n;
}
class K0 extends wn {
	static id = "category";
	static defaults = { ticks: { callback: ah } };
	constructor(t) {
		super(t),
			(this._startValue = void 0),
			(this._valueRange = 0),
			(this._addedLabels = []);
	}
	init(t) {
		const e = this._addedLabels;
		if (e.length) {
			const s = this.getLabels();
			for (const { index: i, label: r } of e) s[i] === r && s.splice(i, 1);
			this._addedLabels = [];
		}
		super.init(t);
	}
	parse(t, e) {
		if (q(t)) return null;
		const s = this.getLabels();
		return (
			(e =
				isFinite(e) && s[e] === t ? e : W0(s, t, B(e, t), this._addedLabels)),
			q0(e, s.length - 1)
		);
	}
	determineDataLimits() {
		const { minDefined: t, maxDefined: e } = this.getUserBounds();
		let { min: s, max: i } = this.getMinMax(!0);
		this.options.bounds === "ticks" &&
			(t || (s = 0), e || (i = this.getLabels().length - 1)),
			(this.min = s),
			(this.max = i);
	}
	buildTicks() {
		const t = this.min,
			e = this.max,
			s = this.options.offset,
			i = [];
		let r = this.getLabels();
		(r = t === 0 && e === r.length - 1 ? r : r.slice(t, e + 1)),
			(this._valueRange = Math.max(r.length - (s ? 0 : 1), 1)),
			(this._startValue = this.min - (s ? 0.5 : 0));
		for (let o = t; o <= e; o++) i.push({ value: o });
		return i;
	}
	getLabelForValue(t) {
		return ah.call(this, t);
	}
	configure() {
		super.configure(),
			this.isHorizontal() || (this._reversePixels = !this._reversePixels);
	}
	getPixelForValue(t) {
		return (
			typeof t != "number" && (t = this.parse(t)),
			t === null
				? NaN
				: this.getPixelForDecimal((t - this._startValue) / this._valueRange)
		);
	}
	getPixelForTick(t) {
		const e = this.ticks;
		return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
	}
	getValueForPixel(t) {
		return Math.round(
			this._startValue + this.getDecimalForPixel(t) * this._valueRange,
		);
	}
	getBasePixel() {
		return this.bottom;
	}
}
function Y0(n, t) {
	const e = [],
		{
			bounds: i,
			step: r,
			min: o,
			max: a,
			precision: c,
			count: l,
			maxTicks: h,
			maxDigits: u,
			includeBounds: d,
		} = n,
		f = r || 1,
		g = h - 1,
		{ min: p, max: m } = t,
		b = !q(o),
		y = !q(a),
		v = !q(l),
		_ = (m - p) / (u + 1);
	let x = nl((m - p) / g / f) * f,
		k,
		S,
		E,
		T;
	if (x < 1e-14 && !b && !y) return [{ value: p }, { value: m }];
	(T = Math.ceil(m / x) - Math.floor(p / x)),
		T > g && (x = nl((T * x) / g / f) * f),
		q(c) || ((k = Math.pow(10, c)), (x = Math.ceil(x * k) / k)),
		i === "ticks"
			? ((S = Math.floor(p / x) * x), (E = Math.ceil(m / x) * x))
			: ((S = p), (E = m)),
		b && y && r && Pp((a - o) / r, x / 1e3)
			? ((T = Math.round(Math.min((a - o) / x, h))),
			  (x = (a - o) / T),
			  (S = o),
			  (E = a))
			: v
			? ((S = b ? o : S), (E = y ? a : E), (T = l - 1), (x = (E - S) / T))
			: ((T = (E - S) / x),
			  ws(T, Math.round(T), x / 1e3)
					? (T = Math.round(T))
					: (T = Math.ceil(T)));
	const M = Math.max(sl(x), sl(S));
	(k = Math.pow(10, q(c) ? M : c)),
		(S = Math.round(S * k) / k),
		(E = Math.round(E * k) / k);
	let I = 0;
	for (
		b &&
		(d && S !== o
			? (e.push({ value: o }),
			  S < o && I++,
			  ws(Math.round((S + I * x) * k) / k, o, ch(o, _, n)) && I++)
			: S < o && I++);
		I < T;
		++I
	)
		e.push({ value: Math.round((S + I * x) * k) / k });
	return (
		y && d && E !== a
			? e.length && ws(e[e.length - 1].value, a, ch(a, _, n))
				? (e[e.length - 1].value = a)
				: e.push({ value: a })
			: (!y || E === a) && e.push({ value: E }),
		e
	);
}
function ch(n, t, { horizontal: e, minRotation: s }) {
	const i = Qt(s),
		r = (e ? Math.sin(i) : Math.cos(i)) || 0.001,
		o = 0.75 * t * ("" + n).length;
	return Math.min(t / r, o);
}
class lr extends wn {
	constructor(t) {
		super(t),
			(this.start = void 0),
			(this.end = void 0),
			(this._startValue = void 0),
			(this._endValue = void 0),
			(this._valueRange = 0);
	}
	parse(t, e) {
		return q(t) ||
			((typeof t == "number" || t instanceof Number) && !isFinite(+t))
			? null
			: +t;
	}
	handleTickRangeOptions() {
		const { beginAtZero: t } = this.options,
			{ minDefined: e, maxDefined: s } = this.getUserBounds();
		let { min: i, max: r } = this;
		const o = (c) => (i = e ? i : c),
			a = (c) => (r = s ? r : c);
		if (t) {
			const c = ie(i),
				l = ie(r);
			c < 0 && l < 0 ? a(0) : c > 0 && l > 0 && o(0);
		}
		if (i === r) {
			let c = r === 0 ? 1 : Math.abs(r * 0.05);
			a(r + c), t || o(i - c);
		}
		(this.min = i), (this.max = r);
	}
	getTickLimit() {
		const t = this.options.ticks;
		let { maxTicksLimit: e, stepSize: s } = t,
			i;
		return (
			s
				? ((i = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1),
				  i > 1e3 &&
						(console.warn(
							`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${i} ticks. Limiting to 1000.`,
						),
						(i = 1e3)))
				: ((i = this.computeTickLimit()), (e = e || 11)),
			e && (i = Math.min(e, i)),
			i
		);
	}
	computeTickLimit() {
		return Number.POSITIVE_INFINITY;
	}
	buildTicks() {
		const t = this.options,
			e = t.ticks;
		let s = this.getTickLimit();
		s = Math.max(2, s);
		const i = {
				maxTicks: s,
				bounds: t.bounds,
				min: t.min,
				max: t.max,
				precision: e.precision,
				step: e.stepSize,
				count: e.count,
				maxDigits: this._maxDigits(),
				horizontal: this.isHorizontal(),
				minRotation: e.minRotation || 0,
				includeBounds: e.includeBounds !== !1,
			},
			r = this._range || this,
			o = Y0(i, r);
		return (
			t.bounds === "ticks" && Cu(o, this, "value"),
			t.reverse
				? (o.reverse(), (this.start = this.max), (this.end = this.min))
				: ((this.start = this.min), (this.end = this.max)),
			o
		);
	}
	configure() {
		const t = this.ticks;
		let e = this.min,
			s = this.max;
		if ((super.configure(), this.options.offset && t.length)) {
			const i = (s - e) / Math.max(t.length - 1, 1) / 2;
			(e -= i), (s += i);
		}
		(this._startValue = e), (this._endValue = s), (this._valueRange = s - e);
	}
	getLabelForValue(t) {
		return ei(t, this.chart.options.locale, this.options.ticks.format);
	}
}
class G0 extends lr {
	static id = "linear";
	static defaults = { ticks: { callback: Or.formatters.numeric } };
	determineDataLimits() {
		const { min: t, max: e } = this.getMinMax(!0);
		(this.min = ot(t) ? t : 0),
			(this.max = ot(e) ? e : 1),
			this.handleTickRangeOptions();
	}
	computeTickLimit() {
		const t = this.isHorizontal(),
			e = t ? this.width : this.height,
			s = Qt(this.options.ticks.minRotation),
			i = (t ? Math.sin(s) : Math.cos(s)) || 0.001,
			r = this._resolveTickFontOptions(0);
		return Math.ceil(e / Math.min(40, r.lineHeight / i));
	}
	getPixelForValue(t) {
		return t === null
			? NaN
			: this.getPixelForDecimal((t - this._startValue) / this._valueRange);
	}
	getValueForPixel(t) {
		return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
	}
}
const Vs = (n) => Math.floor(Pe(n)),
	nn = (n, t) => Math.pow(10, Vs(n) + t);
function lh(n) {
	return n / Math.pow(10, Vs(n)) === 1;
}
function hh(n, t, e) {
	const s = Math.pow(10, e),
		i = Math.floor(n / s);
	return Math.ceil(t / s) - i;
}
function X0(n, t) {
	const e = t - n;
	let s = Vs(e);
	for (; hh(n, t, s) > 10; ) s++;
	for (; hh(n, t, s) < 10; ) s--;
	return Math.min(s, Vs(n));
}
function Q0(n, { min: t, max: e }) {
	t = jt(n.min, t);
	const s = [],
		i = Vs(t);
	let r = X0(t, e),
		o = r < 0 ? Math.pow(10, Math.abs(r)) : 1;
	const a = Math.pow(10, r),
		c = i > r ? Math.pow(10, i) : 0,
		l = Math.round((t - c) * o) / o,
		h = Math.floor((t - c) / a / 10) * a * 10;
	let u = Math.floor((l - h) / Math.pow(10, r)),
		d = jt(n.min, Math.round((c + h + u * Math.pow(10, r)) * o) / o);
	for (; d < e; )
		s.push({ value: d, major: lh(d), significand: u }),
			u >= 10 ? (u = u < 15 ? 15 : 20) : u++,
			u >= 20 && (r++, (u = 2), (o = r >= 0 ? 1 : o)),
			(d = Math.round((c + h + u * Math.pow(10, r)) * o) / o);
	const f = jt(n.max, d);
	return s.push({ value: f, major: lh(f), significand: u }), s;
}
class J0 extends wn {
	static id = "logarithmic";
	static defaults = {
		ticks: { callback: Or.formatters.logarithmic, major: { enabled: !0 } },
	};
	constructor(t) {
		super(t),
			(this.start = void 0),
			(this.end = void 0),
			(this._startValue = void 0),
			(this._valueRange = 0);
	}
	parse(t, e) {
		const s = lr.prototype.parse.apply(this, [t, e]);
		if (s === 0) {
			this._zero = !0;
			return;
		}
		return ot(s) && s > 0 ? s : null;
	}
	determineDataLimits() {
		const { min: t, max: e } = this.getMinMax(!0);
		(this.min = ot(t) ? Math.max(0, t) : null),
			(this.max = ot(e) ? Math.max(0, e) : null),
			this.options.beginAtZero && (this._zero = !0),
			this._zero &&
				this.min !== this._suggestedMin &&
				!ot(this._userMin) &&
				(this.min = t === nn(this.min, 0) ? nn(this.min, -1) : nn(this.min, 0)),
			this.handleTickRangeOptions();
	}
	handleTickRangeOptions() {
		const { minDefined: t, maxDefined: e } = this.getUserBounds();
		let s = this.min,
			i = this.max;
		const r = (a) => (s = t ? s : a),
			o = (a) => (i = e ? i : a);
		s === i && (s <= 0 ? (r(1), o(10)) : (r(nn(s, -1)), o(nn(i, 1)))),
			s <= 0 && r(nn(i, -1)),
			i <= 0 && o(nn(s, 1)),
			(this.min = s),
			(this.max = i);
	}
	buildTicks() {
		const t = this.options,
			e = { min: this._userMin, max: this._userMax },
			s = Q0(e, this);
		return (
			t.bounds === "ticks" && Cu(s, this, "value"),
			t.reverse
				? (s.reverse(), (this.start = this.max), (this.end = this.min))
				: ((this.start = this.min), (this.end = this.max)),
			s
		);
	}
	getLabelForValue(t) {
		return t === void 0
			? "0"
			: ei(t, this.chart.options.locale, this.options.ticks.format);
	}
	configure() {
		const t = this.min;
		super.configure(),
			(this._startValue = Pe(t)),
			(this._valueRange = Pe(this.max) - Pe(t));
	}
	getPixelForValue(t) {
		return (
			(t === void 0 || t === 0) && (t = this.min),
			t === null || isNaN(t)
				? NaN
				: this.getPixelForDecimal(
						t === this.min ? 0 : (Pe(t) - this._startValue) / this._valueRange,
				  )
		);
	}
	getValueForPixel(t) {
		const e = this.getDecimalForPixel(t);
		return Math.pow(10, this._startValue + e * this._valueRange);
	}
}
function na(n) {
	const t = n.ticks;
	if (t.display && n.display) {
		const e = Lt(t.backdropPadding);
		return B(t.font && t.font.size, ht.font.size) + e.height;
	}
	return 0;
}
function Z0(n, t, e) {
	return (
		(e = J(e) ? e : [e]), { w: Xp(n, t.string, e), h: e.length * t.lineHeight }
	);
}
function uh(n, t, e, s, i) {
	return n === s || n === i
		? { start: t - e / 2, end: t + e / 2 }
		: n < s || n > i
		? { start: t - e, end: t }
		: { start: t, end: t + e };
}
function tv(n) {
	const t = {
			l: n.left + n._padding.left,
			r: n.right - n._padding.right,
			t: n.top + n._padding.top,
			b: n.bottom - n._padding.bottom,
		},
		e = Object.assign({}, t),
		s = [],
		i = [],
		r = n._pointLabels.length,
		o = n.options.pointLabels,
		a = o.centerPointLabels ? it / r : 0;
	for (let c = 0; c < r; c++) {
		const l = o.setContext(n.getPointLabelContext(c));
		i[c] = l.padding;
		const h = n.getPointPosition(c, n.drawingArea + i[c], a),
			u = ut(l.font),
			d = Z0(n.ctx, u, n._pointLabels[c]);
		s[c] = d;
		const f = Ht(n.getIndexAngle(c) + a),
			g = Math.round(Ba(f)),
			p = uh(g, h.x, d.w, 0, 180),
			m = uh(g, h.y, d.h, 90, 270);
		ev(e, t, f, p, m);
	}
	n.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b),
		(n._pointLabelItems = nv(n, s, i));
}
function ev(n, t, e, s, i) {
	const r = Math.abs(Math.sin(e)),
		o = Math.abs(Math.cos(e));
	let a = 0,
		c = 0;
	s.start < t.l
		? ((a = (t.l - s.start) / r), (n.l = Math.min(n.l, t.l - a)))
		: s.end > t.r && ((a = (s.end - t.r) / r), (n.r = Math.max(n.r, t.r + a))),
		i.start < t.t
			? ((c = (t.t - i.start) / o), (n.t = Math.min(n.t, t.t - c)))
			: i.end > t.b &&
			  ((c = (i.end - t.b) / o), (n.b = Math.max(n.b, t.b + c)));
}
function nv(n, t, e) {
	const s = [],
		i = n._pointLabels.length,
		r = n.options,
		o = na(r) / 2,
		a = n.drawingArea,
		c = r.pointLabels.centerPointLabels ? it / i : 0;
	for (let l = 0; l < i; l++) {
		const h = n.getPointPosition(l, a + o + e[l], c),
			u = Math.round(Ba(Ht(h.angle + at))),
			d = t[l],
			f = rv(h.y, d.h, u),
			g = sv(u),
			p = iv(h.x, d.w, g);
		s.push({
			x: h.x,
			y: f,
			textAlign: g,
			left: p,
			top: f,
			right: p + d.w,
			bottom: f + d.h,
		});
	}
	return s;
}
function sv(n) {
	return n === 0 || n === 180 ? "center" : n < 180 ? "left" : "right";
}
function iv(n, t, e) {
	return e === "right" ? (n -= t) : e === "center" && (n -= t / 2), n;
}
function rv(n, t, e) {
	return (
		e === 90 || e === 270 ? (n -= t / 2) : (e > 270 || e < 90) && (n -= t), n
	);
}
function ov(n, t) {
	const {
		ctx: e,
		options: { pointLabels: s },
	} = n;
	for (let i = t - 1; i >= 0; i--) {
		const r = s.setContext(n.getPointLabelContext(i)),
			o = ut(r.font),
			{
				x: a,
				y: c,
				textAlign: l,
				left: h,
				top: u,
				right: d,
				bottom: f,
			} = n._pointLabelItems[i],
			{ backdropColor: g } = r;
		if (!q(g)) {
			const p = un(r.borderRadius),
				m = Lt(r.backdropPadding);
			e.fillStyle = g;
			const b = h - m.left,
				y = u - m.top,
				v = d - h + m.width,
				_ = f - u + m.height;
			Object.values(p).some((x) => x !== 0)
				? (e.beginPath(), Fs(e, { x: b, y, w: v, h: _, radius: p }), e.fill())
				: e.fillRect(b, y, v, _);
		}
		mn(e, n._pointLabels[i], a, c + o.lineHeight / 2, o, {
			color: r.color,
			textAlign: l,
			textBaseline: "middle",
		});
	}
}
function vd(n, t, e, s) {
	const { ctx: i } = n;
	if (e) i.arc(n.xCenter, n.yCenter, t, 0, Z);
	else {
		let r = n.getPointPosition(0, t);
		i.moveTo(r.x, r.y);
		for (let o = 1; o < s; o++)
			(r = n.getPointPosition(o, t)), i.lineTo(r.x, r.y);
	}
}
function av(n, t, e, s, i) {
	const r = n.ctx,
		o = t.circular,
		{ color: a, lineWidth: c } = t;
	(!o && !s) ||
		!a ||
		!c ||
		e < 0 ||
		(r.save(),
		(r.strokeStyle = a),
		(r.lineWidth = c),
		r.setLineDash(i.dash),
		(r.lineDashOffset = i.dashOffset),
		r.beginPath(),
		vd(n, e, o, s),
		r.closePath(),
		r.stroke(),
		r.restore());
}
function cv(n, t, e) {
	return Ye(n, { label: e, index: t, type: "pointLabel" });
}
class lv extends lr {
	static id = "radialLinear";
	static defaults = {
		display: !0,
		animate: !0,
		position: "chartArea",
		angleLines: {
			display: !0,
			lineWidth: 1,
			borderDash: [],
			borderDashOffset: 0,
		},
		grid: { circular: !1 },
		startAngle: 0,
		ticks: { showLabelBackdrop: !0, callback: Or.formatters.numeric },
		pointLabels: {
			backdropColor: void 0,
			backdropPadding: 2,
			display: !0,
			font: { size: 10 },
			callback(t) {
				return t;
			},
			padding: 5,
			centerPointLabels: !1,
		},
	};
	static defaultRoutes = {
		"angleLines.color": "borderColor",
		"pointLabels.color": "color",
		"ticks.color": "color",
	};
	static descriptors = { angleLines: { _fallback: "grid" } };
	constructor(t) {
		super(t),
			(this.xCenter = void 0),
			(this.yCenter = void 0),
			(this.drawingArea = void 0),
			(this._pointLabels = []),
			(this._pointLabelItems = []);
	}
	setDimensions() {
		const t = (this._padding = Lt(na(this.options) / 2)),
			e = (this.width = this.maxWidth - t.width),
			s = (this.height = this.maxHeight - t.height);
		(this.xCenter = Math.floor(this.left + e / 2 + t.left)),
			(this.yCenter = Math.floor(this.top + s / 2 + t.top)),
			(this.drawingArea = Math.floor(Math.min(e, s) / 2));
	}
	determineDataLimits() {
		const { min: t, max: e } = this.getMinMax(!1);
		(this.min = ot(t) && !isNaN(t) ? t : 0),
			(this.max = ot(e) && !isNaN(e) ? e : 0),
			this.handleTickRangeOptions();
	}
	computeTickLimit() {
		return Math.ceil(this.drawingArea / na(this.options));
	}
	generateTickLabels(t) {
		lr.prototype.generateTickLabels.call(this, t),
			(this._pointLabels = this.getLabels()
				.map((e, s) => {
					const i = Q(this.options.pointLabels.callback, [e, s], this);
					return i || i === 0 ? i : "";
				})
				.filter((e, s) => this.chart.getDataVisibility(s)));
	}
	fit() {
		const t = this.options;
		t.display && t.pointLabels.display
			? tv(this)
			: this.setCenterPoint(0, 0, 0, 0);
	}
	setCenterPoint(t, e, s, i) {
		(this.xCenter += Math.floor((t - e) / 2)),
			(this.yCenter += Math.floor((s - i) / 2)),
			(this.drawingArea -= Math.min(
				this.drawingArea / 2,
				Math.max(t, e, s, i),
			));
	}
	getIndexAngle(t) {
		const e = Z / (this._pointLabels.length || 1),
			s = this.options.startAngle || 0;
		return Ht(t * e + Qt(s));
	}
	getDistanceFromCenterForValue(t) {
		if (q(t)) return NaN;
		const e = this.drawingArea / (this.max - this.min);
		return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
	}
	getValueForDistanceFromCenter(t) {
		if (q(t)) return NaN;
		const e = t / (this.drawingArea / (this.max - this.min));
		return this.options.reverse ? this.max - e : this.min + e;
	}
	getPointLabelContext(t) {
		const e = this._pointLabels || [];
		if (t >= 0 && t < e.length) {
			const s = e[t];
			return cv(this.getContext(), t, s);
		}
	}
	getPointPosition(t, e, s = 0) {
		const i = this.getIndexAngle(t) - at + s;
		return {
			x: Math.cos(i) * e + this.xCenter,
			y: Math.sin(i) * e + this.yCenter,
			angle: i,
		};
	}
	getPointPositionForValue(t, e) {
		return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
	}
	getBasePosition(t) {
		return this.getPointPositionForValue(t || 0, this.getBaseValue());
	}
	getPointLabelPosition(t) {
		const { left: e, top: s, right: i, bottom: r } = this._pointLabelItems[t];
		return { left: e, top: s, right: i, bottom: r };
	}
	drawBackground() {
		const {
			backgroundColor: t,
			grid: { circular: e },
		} = this.options;
		if (t) {
			const s = this.ctx;
			s.save(),
				s.beginPath(),
				vd(
					this,
					this.getDistanceFromCenterForValue(this._endValue),
					e,
					this._pointLabels.length,
				),
				s.closePath(),
				(s.fillStyle = t),
				s.fill(),
				s.restore();
		}
	}
	drawGrid() {
		const t = this.ctx,
			e = this.options,
			{ angleLines: s, grid: i, border: r } = e,
			o = this._pointLabels.length;
		let a, c, l;
		if (
			(e.pointLabels.display && ov(this, o),
			i.display &&
				this.ticks.forEach((h, u) => {
					if (u !== 0) {
						c = this.getDistanceFromCenterForValue(h.value);
						const d = this.getContext(u),
							f = i.setContext(d),
							g = r.setContext(d);
						av(this, f, c, o, g);
					}
				}),
			s.display)
		) {
			for (t.save(), a = o - 1; a >= 0; a--) {
				const h = s.setContext(this.getPointLabelContext(a)),
					{ color: u, lineWidth: d } = h;
				!d ||
					!u ||
					((t.lineWidth = d),
					(t.strokeStyle = u),
					t.setLineDash(h.borderDash),
					(t.lineDashOffset = h.borderDashOffset),
					(c = this.getDistanceFromCenterForValue(
						e.ticks.reverse ? this.min : this.max,
					)),
					(l = this.getPointPosition(a, c)),
					t.beginPath(),
					t.moveTo(this.xCenter, this.yCenter),
					t.lineTo(l.x, l.y),
					t.stroke());
			}
			t.restore();
		}
	}
	drawBorder() {}
	drawLabels() {
		const t = this.ctx,
			e = this.options,
			s = e.ticks;
		if (!s.display) return;
		const i = this.getIndexAngle(0);
		let r, o;
		t.save(),
			t.translate(this.xCenter, this.yCenter),
			t.rotate(i),
			(t.textAlign = "center"),
			(t.textBaseline = "middle"),
			this.ticks.forEach((a, c) => {
				if (c === 0 && !e.reverse) return;
				const l = s.setContext(this.getContext(c)),
					h = ut(l.font);
				if (
					((r = this.getDistanceFromCenterForValue(this.ticks[c].value)),
					l.showLabelBackdrop)
				) {
					(t.font = h.string),
						(o = t.measureText(a.label).width),
						(t.fillStyle = l.backdropColor);
					const u = Lt(l.backdropPadding);
					t.fillRect(
						-o / 2 - u.left,
						-r - h.size / 2 - u.top,
						o + u.width,
						h.size + u.height,
					);
				}
				mn(t, a.label, 0, -r, h, { color: l.color });
			}),
			t.restore();
	}
	drawTitle() {}
}
const Fr = {
		millisecond: { common: !0, size: 1, steps: 1e3 },
		second: { common: !0, size: 1e3, steps: 60 },
		minute: { common: !0, size: 6e4, steps: 60 },
		hour: { common: !0, size: 36e5, steps: 24 },
		day: { common: !0, size: 864e5, steps: 30 },
		week: { common: !1, size: 6048e5, steps: 4 },
		month: { common: !0, size: 2628e6, steps: 12 },
		quarter: { common: !1, size: 7884e6, steps: 4 },
		year: { common: !0, size: 3154e7 },
	},
	Ut = Object.keys(Fr);
function hv(n, t) {
	return n - t;
}
function dh(n, t) {
	if (q(t)) return null;
	const e = n._adapter,
		{ parser: s, round: i, isoWeekday: r } = n._parseOpts;
	let o = t;
	return (
		typeof s == "function" && (o = s(o)),
		ot(o) || (o = typeof s == "string" ? e.parse(o, s) : e.parse(o)),
		o === null
			? null
			: (i &&
					(o =
						i === "week" && (Fn(r) || r === !0)
							? e.startOf(o, "isoWeek", r)
							: e.startOf(o, i)),
			  +o)
	);
}
function fh(n, t, e, s) {
	const i = Ut.length;
	for (let r = Ut.indexOf(n); r < i - 1; ++r) {
		const o = Fr[Ut[r]],
			a = o.steps ? o.steps : Number.MAX_SAFE_INTEGER;
		if (o.common && Math.ceil((e - t) / (a * o.size)) <= s) return Ut[r];
	}
	return Ut[i - 1];
}
function uv(n, t, e, s, i) {
	for (let r = Ut.length - 1; r >= Ut.indexOf(e); r--) {
		const o = Ut[r];
		if (Fr[o].common && n._adapter.diff(i, s, o) >= t - 1) return o;
	}
	return Ut[e ? Ut.indexOf(e) : 0];
}
function dv(n) {
	for (let t = Ut.indexOf(n) + 1, e = Ut.length; t < e; ++t)
		if (Fr[Ut[t]].common) return Ut[t];
}
function gh(n, t, e) {
	if (!e) n[t] = !0;
	else if (e.length) {
		const { lo: s, hi: i } = Va(e, t),
			r = e[s] >= t ? e[s] : e[i];
		n[r] = !0;
	}
}
function fv(n, t, e, s) {
	const i = n._adapter,
		r = +i.startOf(t[0].value, s),
		o = t[t.length - 1].value;
	let a, c;
	for (a = r; a <= o; a = +i.add(a, 1, s))
		(c = e[a]), c >= 0 && (t[c].major = !0);
	return t;
}
function ph(n, t, e) {
	const s = [],
		i = {},
		r = t.length;
	let o, a;
	for (o = 0; o < r; ++o)
		(a = t[o]), (i[a] = o), s.push({ value: a, major: !1 });
	return r === 0 || !e ? s : fv(n, s, i, e);
}
class sa extends wn {
	static id = "time";
	static defaults = {
		bounds: "data",
		adapters: {},
		time: {
			parser: !1,
			unit: !1,
			round: !1,
			isoWeekday: !1,
			minUnit: "millisecond",
			displayFormats: {},
		},
		ticks: { source: "auto", callback: !1, major: { enabled: !1 } },
	};
	constructor(t) {
		super(t),
			(this._cache = { data: [], labels: [], all: [] }),
			(this._unit = "day"),
			(this._majorUnit = void 0),
			(this._offsets = {}),
			(this._normalized = !1),
			(this._parseOpts = void 0);
	}
	init(t, e = {}) {
		const s = t.time || (t.time = {}),
			i = (this._adapter = new by._date(t.adapters.date));
		i.init(e),
			_s(s.displayFormats, i.formats()),
			(this._parseOpts = {
				parser: s.parser,
				round: s.round,
				isoWeekday: s.isoWeekday,
			}),
			super.init(t),
			(this._normalized = e.normalized);
	}
	parse(t, e) {
		return t === void 0 ? null : dh(this, t);
	}
	beforeLayout() {
		super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
	}
	determineDataLimits() {
		const t = this.options,
			e = this._adapter,
			s = t.time.unit || "day";
		let { min: i, max: r, minDefined: o, maxDefined: a } = this.getUserBounds();
		function c(l) {
			!o && !isNaN(l.min) && (i = Math.min(i, l.min)),
				!a && !isNaN(l.max) && (r = Math.max(r, l.max));
		}
		(!o || !a) &&
			(c(this._getLabelBounds()),
			(t.bounds !== "ticks" || t.ticks.source !== "labels") &&
				c(this.getMinMax(!1))),
			(i = ot(i) && !isNaN(i) ? i : +e.startOf(Date.now(), s)),
			(r = ot(r) && !isNaN(r) ? r : +e.endOf(Date.now(), s) + 1),
			(this.min = Math.min(i, r - 1)),
			(this.max = Math.max(i + 1, r));
	}
	_getLabelBounds() {
		const t = this.getLabelTimestamps();
		let e = Number.POSITIVE_INFINITY,
			s = Number.NEGATIVE_INFINITY;
		return t.length && ((e = t[0]), (s = t[t.length - 1])), { min: e, max: s };
	}
	buildTicks() {
		const t = this.options,
			e = t.time,
			s = t.ticks,
			i = s.source === "labels" ? this.getLabelTimestamps() : this._generate();
		t.bounds === "ticks" &&
			i.length &&
			((this.min = this._userMin || i[0]),
			(this.max = this._userMax || i[i.length - 1]));
		const r = this.min,
			o = this.max,
			a = Fp(i, r, o);
		return (
			(this._unit =
				e.unit ||
				(s.autoSkip
					? fh(e.minUnit, this.min, this.max, this._getLabelCapacity(r))
					: uv(this, a.length, e.minUnit, this.min, this.max))),
			(this._majorUnit =
				!s.major.enabled || this._unit === "year" ? void 0 : dv(this._unit)),
			this.initOffsets(i),
			t.reverse && a.reverse(),
			ph(this, a, this._majorUnit)
		);
	}
	afterAutoSkip() {
		this.options.offsetAfterAutoskip &&
			this.initOffsets(this.ticks.map((t) => +t.value));
	}
	initOffsets(t = []) {
		let e = 0,
			s = 0,
			i,
			r;
		this.options.offset &&
			t.length &&
			((i = this.getDecimalForValue(t[0])),
			t.length === 1
				? (e = 1 - i)
				: (e = (this.getDecimalForValue(t[1]) - i) / 2),
			(r = this.getDecimalForValue(t[t.length - 1])),
			t.length === 1
				? (s = r)
				: (s = (r - this.getDecimalForValue(t[t.length - 2])) / 2));
		const o = t.length < 3 ? 0.5 : 0.25;
		(e = wt(e, 0, o)),
			(s = wt(s, 0, o)),
			(this._offsets = { start: e, end: s, factor: 1 / (e + 1 + s) });
	}
	_generate() {
		const t = this._adapter,
			e = this.min,
			s = this.max,
			i = this.options,
			r = i.time,
			o = r.unit || fh(r.minUnit, e, s, this._getLabelCapacity(e)),
			a = B(i.ticks.stepSize, 1),
			c = o === "week" ? r.isoWeekday : !1,
			l = Fn(c) || c === !0,
			h = {};
		let u = e,
			d,
			f;
		if (
			(l && (u = +t.startOf(u, "isoWeek", c)),
			(u = +t.startOf(u, l ? "day" : o)),
			t.diff(s, e, o) > 1e5 * a)
		)
			throw new Error(
				e + " and " + s + " are too far apart with stepSize of " + a + " " + o,
			);
		const g = i.ticks.source === "data" && this.getDataTimestamps();
		for (d = u, f = 0; d < s; d = +t.add(d, a, o), f++) gh(h, d, g);
		return (
			(d === s || i.bounds === "ticks" || f === 1) && gh(h, d, g),
			Object.keys(h)
				.sort((p, m) => p - m)
				.map((p) => +p)
		);
	}
	getLabelForValue(t) {
		const e = this._adapter,
			s = this.options.time;
		return s.tooltipFormat
			? e.format(t, s.tooltipFormat)
			: e.format(t, s.displayFormats.datetime);
	}
	format(t, e) {
		const i = this.options.time.displayFormats,
			r = this._unit,
			o = e || i[r];
		return this._adapter.format(t, o);
	}
	_tickFormatFunction(t, e, s, i) {
		const r = this.options,
			o = r.ticks.callback;
		if (o) return Q(o, [t, e, s], this);
		const a = r.time.displayFormats,
			c = this._unit,
			l = this._majorUnit,
			h = c && a[c],
			u = l && a[l],
			d = s[e],
			f = l && u && d && d.major;
		return this._adapter.format(t, i || (f ? u : h));
	}
	generateTickLabels(t) {
		let e, s, i;
		for (e = 0, s = t.length; e < s; ++e)
			(i = t[e]), (i.label = this._tickFormatFunction(i.value, e, t));
	}
	getDecimalForValue(t) {
		return t === null ? NaN : (t - this.min) / (this.max - this.min);
	}
	getPixelForValue(t) {
		const e = this._offsets,
			s = this.getDecimalForValue(t);
		return this.getPixelForDecimal((e.start + s) * e.factor);
	}
	getValueForPixel(t) {
		const e = this._offsets,
			s = this.getDecimalForPixel(t) / e.factor - e.end;
		return this.min + s * (this.max - this.min);
	}
	_getLabelSize(t) {
		const e = this.options.ticks,
			s = this.ctx.measureText(t).width,
			i = Qt(this.isHorizontal() ? e.maxRotation : e.minRotation),
			r = Math.cos(i),
			o = Math.sin(i),
			a = this._resolveTickFontOptions(0).size;
		return { w: s * r + a * o, h: s * o + a * r };
	}
	_getLabelCapacity(t) {
		const e = this.options.time,
			s = e.displayFormats,
			i = s[e.unit] || s.millisecond,
			r = this._tickFormatFunction(t, 0, ph(this, [t], this._majorUnit), i),
			o = this._getLabelSize(r),
			a =
				Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) -
				1;
		return a > 0 ? a : 1;
	}
	getDataTimestamps() {
		let t = this._cache.data || [],
			e,
			s;
		if (t.length) return t;
		const i = this.getMatchingVisibleMetas();
		if (this._normalized && i.length)
			return (this._cache.data = i[0].controller.getAllParsedValues(this));
		for (e = 0, s = i.length; e < s; ++e)
			t = t.concat(i[e].controller.getAllParsedValues(this));
		return (this._cache.data = this.normalize(t));
	}
	getLabelTimestamps() {
		const t = this._cache.labels || [];
		let e, s;
		if (t.length) return t;
		const i = this.getLabels();
		for (e = 0, s = i.length; e < s; ++e) t.push(dh(this, i[e]));
		return (this._cache.labels = this._normalized ? t : this.normalize(t));
	}
	normalize(t) {
		return Mu(t.sort(hv));
	}
}
function Di(n, t, e) {
	let s = 0,
		i = n.length - 1,
		r,
		o,
		a,
		c;
	e
		? (t >= n[s].pos && t <= n[i].pos && ({ lo: s, hi: i } = ye(n, "pos", t)),
		  ({ pos: r, time: a } = n[s]),
		  ({ pos: o, time: c } = n[i]))
		: (t >= n[s].time &&
				t <= n[i].time &&
				({ lo: s, hi: i } = ye(n, "time", t)),
		  ({ time: r, pos: a } = n[s]),
		  ({ time: o, pos: c } = n[i]));
	const l = o - r;
	return l ? a + ((c - a) * (t - r)) / l : a;
}
class gv extends sa {
	static id = "timeseries";
	static defaults = sa.defaults;
	constructor(t) {
		super(t),
			(this._table = []),
			(this._minPos = void 0),
			(this._tableRange = void 0);
	}
	initOffsets() {
		const t = this._getTimestampsForTable(),
			e = (this._table = this.buildLookupTable(t));
		(this._minPos = Di(e, this.min)),
			(this._tableRange = Di(e, this.max) - this._minPos),
			super.initOffsets(t);
	}
	buildLookupTable(t) {
		const { min: e, max: s } = this,
			i = [],
			r = [];
		let o, a, c, l, h;
		for (o = 0, a = t.length; o < a; ++o)
			(l = t[o]), l >= e && l <= s && i.push(l);
		if (i.length < 2)
			return [
				{ time: e, pos: 0 },
				{ time: s, pos: 1 },
			];
		for (o = 0, a = i.length; o < a; ++o)
			(h = i[o + 1]),
				(c = i[o - 1]),
				(l = i[o]),
				Math.round((h + c) / 2) !== l && r.push({ time: l, pos: o / (a - 1) });
		return r;
	}
	_getTimestampsForTable() {
		let t = this._cache.all || [];
		if (t.length) return t;
		const e = this.getDataTimestamps(),
			s = this.getLabelTimestamps();
		return (
			e.length && s.length
				? (t = this.normalize(e.concat(s)))
				: (t = e.length ? e : s),
			(t = this._cache.all = t),
			t
		);
	}
	getDecimalForValue(t) {
		return (Di(this._table, t) - this._minPos) / this._tableRange;
	}
	getValueForPixel(t) {
		const e = this._offsets,
			s = this.getDecimalForPixel(t) / e.factor - e.end;
		return Di(this._table, s * this._tableRange + this._minPos, !0);
	}
}
var pv = Object.freeze({
	__proto__: null,
	CategoryScale: K0,
	LinearScale: G0,
	LogarithmicScale: J0,
	RadialLinearScale: lv,
	TimeScale: sa,
	TimeSeriesScale: gv,
});
const mv = [yy, Gb, j0, pv];
De.register(...mv);
function yv(n) {
	if (n.__esModule) return n;
	var t = n.default;
	if (typeof t == "function") {
		var e = function s() {
			if (this instanceof s) {
				var i = [null];
				i.push.apply(i, arguments);
				var r = Function.bind.apply(t, i);
				return new r();
			}
			return t.apply(this, arguments);
		};
		e.prototype = t.prototype;
	} else e = {};
	return (
		Object.defineProperty(e, "__esModule", { value: !0 }),
		Object.keys(n).forEach(function (s) {
			var i = Object.getOwnPropertyDescriptor(n, s);
			Object.defineProperty(
				e,
				s,
				i.get
					? i
					: {
							enumerable: !0,
							get: function () {
								return n[s];
							},
					  },
			);
		}),
		e
	);
}
var bv = { value: function () {} };
function xd() {
	for (var n = 0, t = arguments.length, e = {}, s; n < t; ++n) {
		if (!(s = arguments[n] + "") || s in e || /[\s.]/.test(s))
			throw new Error("illegal type: " + s);
		e[s] = [];
	}
	return new qi(e);
}
function qi(n) {
	this._ = n;
}
function vv(n, t) {
	return n
		.trim()
		.split(/^|\s+/)
		.map(function (e) {
			var s = "",
				i = e.indexOf(".");
			if (
				(i >= 0 && ((s = e.slice(i + 1)), (e = e.slice(0, i))),
				e && !t.hasOwnProperty(e))
			)
				throw new Error("unknown type: " + e);
			return { type: e, name: s };
		});
}
qi.prototype = xd.prototype = {
	constructor: qi,
	on: function (n, t) {
		var e = this._,
			s = vv(n + "", e),
			i,
			r = -1,
			o = s.length;
		if (arguments.length < 2) {
			for (; ++r < o; )
				if ((i = (n = s[r]).type) && (i = xv(e[i], n.name))) return i;
			return;
		}
		if (t != null && typeof t != "function")
			throw new Error("invalid callback: " + t);
		for (; ++r < o; )
			if ((i = (n = s[r]).type)) e[i] = mh(e[i], n.name, t);
			else if (t == null) for (i in e) e[i] = mh(e[i], n.name, null);
		return this;
	},
	copy: function () {
		var n = {},
			t = this._;
		for (var e in t) n[e] = t[e].slice();
		return new qi(n);
	},
	call: function (n, t) {
		if ((i = arguments.length - 2) > 0)
			for (var e = new Array(i), s = 0, i, r; s < i; ++s)
				e[s] = arguments[s + 2];
		if (!this._.hasOwnProperty(n)) throw new Error("unknown type: " + n);
		for (r = this._[n], s = 0, i = r.length; s < i; ++s) r[s].value.apply(t, e);
	},
	apply: function (n, t, e) {
		if (!this._.hasOwnProperty(n)) throw new Error("unknown type: " + n);
		for (var s = this._[n], i = 0, r = s.length; i < r; ++i)
			s[i].value.apply(t, e);
	},
};
function xv(n, t) {
	for (var e = 0, s = n.length, i; e < s; ++e)
		if ((i = n[e]).name === t) return i.value;
}
function mh(n, t, e) {
	for (var s = 0, i = n.length; s < i; ++s)
		if (n[s].name === t) {
			(n[s] = bv), (n = n.slice(0, s).concat(n.slice(s + 1)));
			break;
		}
	return e != null && n.push({ name: t, value: e }), n;
}
const _v = Object.freeze(
		Object.defineProperty(
			{ __proto__: null, dispatch: xd },
			Symbol.toStringTag,
			{ value: "Module" },
		),
	),
	wv = yv(_v);
var Sv = wv.dispatch,
	Mo = Math.PI / 180,
	ys = (1 << 11) >> 5,
	Ki = 1 << 11,
	Ev = function () {
		var n = [256, 256],
			t = kv,
			e = Cv,
			s = Tv,
			i = yh,
			r = yh,
			o = Iv,
			a = Mv,
			c = _d,
			l = [],
			h = 1 / 0,
			u = Sv("word", "end"),
			d = null,
			f = Math.random,
			g = {},
			p = Nv;
		(g.canvas = function (y) {
			return arguments.length ? ((p = Ie(y)), g) : p;
		}),
			(g.start = function () {
				var y = m(p()),
					v = Lv((n[0] >> 5) * n[1]),
					_ = null,
					x = l.length,
					k = -1,
					S = [],
					E = l
						.map(function (M, I) {
							return (
								(M.text = t.call(this, M, I)),
								(M.font = e.call(this, M, I)),
								(M.style = i.call(this, M, I)),
								(M.weight = r.call(this, M, I)),
								(M.rotate = o.call(this, M, I)),
								(M.size = ~~s.call(this, M, I)),
								(M.padding = a.call(this, M, I)),
								M
							);
						})
						.sort(function (M, I) {
							return I.size - M.size;
						});
				return d && clearInterval(d), (d = setInterval(T, 0)), T(), g;
				function T() {
					for (var M = Date.now(); Date.now() - M < h && ++k < x && d; ) {
						var I = E[k];
						(I.x = (n[0] * (f() + 0.5)) >> 1),
							(I.y = (n[1] * (f() + 0.5)) >> 1),
							Av(y, I, E, k),
							I.hasText &&
								b(v, I, _) &&
								(S.push(I),
								u.call("word", g, I),
								_
									? Ov(_, I)
									: (_ = [
											{ x: I.x + I.x0, y: I.y + I.y0 },
											{ x: I.x + I.x1, y: I.y + I.y1 },
									  ]),
								(I.x -= n[0] >> 1),
								(I.y -= n[1] >> 1));
					}
					k >= x && (g.stop(), u.call("end", g, S, _));
				}
			}),
			(g.stop = function () {
				return d && (clearInterval(d), (d = null)), g;
			});
		function m(y) {
			y.width = y.height = 1;
			var v = Math.sqrt(
				y.getContext("2d").getImageData(0, 0, 1, 1).data.length >> 2,
			);
			(y.width = (ys << 5) / v), (y.height = Ki / v);
			var _ = y.getContext("2d");
			return (
				(_.fillStyle = _.strokeStyle = "red"),
				(_.textAlign = "center"),
				{ context: _, ratio: v }
			);
		}
		function b(y, v, _) {
			n[0], n[1];
			for (
				var x = v.x,
					k = v.y,
					S = Math.sqrt(n[0] * n[0] + n[1] * n[1]),
					E = c(n),
					T = f() < 0.5 ? 1 : -1,
					M = -T,
					I,
					j,
					lt;
				(I = E((M += T))) &&
				((j = ~~I[0]),
				(lt = ~~I[1]),
				!(Math.min(Math.abs(j), Math.abs(lt)) >= S));

			)
				if (
					((v.x = x + j),
					(v.y = k + lt),
					!(
						v.x + v.x0 < 0 ||
						v.y + v.y0 < 0 ||
						v.x + v.x1 > n[0] ||
						v.y + v.y1 > n[1]
					) &&
						(!_ || !Dv(v, y, n[0])) &&
						(!_ || Pv(v, _)))
				) {
					for (
						var Ft = v.sprite,
							W = v.width >> 5,
							X = n[0] >> 5,
							et = v.x - (W << 4),
							zt = et & 127,
							xt = 32 - zt,
							Te = v.y1 - v.y0,
							Je = (v.y + v.y0) * X + (et >> 5),
							te,
							le = 0;
						le < Te;
						le++
					) {
						te = 0;
						for (var Gt = 0; Gt <= W; Gt++)
							y[Je + Gt] |=
								(te << xt) | (Gt < W ? (te = Ft[le * W + Gt]) >>> zt : 0);
						Je += X;
					}
					return delete v.sprite, !0;
				}
			return !1;
		}
		return (
			(g.timeInterval = function (y) {
				return arguments.length ? ((h = y ?? 1 / 0), g) : h;
			}),
			(g.words = function (y) {
				return arguments.length ? ((l = y), g) : l;
			}),
			(g.size = function (y) {
				return arguments.length ? ((n = [+y[0], +y[1]]), g) : n;
			}),
			(g.font = function (y) {
				return arguments.length ? ((e = Ie(y)), g) : e;
			}),
			(g.fontStyle = function (y) {
				return arguments.length ? ((i = Ie(y)), g) : i;
			}),
			(g.fontWeight = function (y) {
				return arguments.length ? ((r = Ie(y)), g) : r;
			}),
			(g.rotate = function (y) {
				return arguments.length ? ((o = Ie(y)), g) : o;
			}),
			(g.text = function (y) {
				return arguments.length ? ((t = Ie(y)), g) : t;
			}),
			(g.spiral = function (y) {
				return arguments.length ? ((c = Fv[y] || y), g) : c;
			}),
			(g.fontSize = function (y) {
				return arguments.length ? ((s = Ie(y)), g) : s;
			}),
			(g.padding = function (y) {
				return arguments.length ? ((a = Ie(y)), g) : a;
			}),
			(g.random = function (y) {
				return arguments.length ? ((f = y), g) : f;
			}),
			(g.on = function () {
				var y = u.on.apply(u, arguments);
				return y === u ? g : y;
			}),
			g
		);
	};
function kv(n) {
	return n.text;
}
function Cv() {
	return "serif";
}
function yh() {
	return "normal";
}
function Tv(n) {
	return Math.sqrt(n.value);
}
function Iv() {
	return (~~(Math.random() * 6) - 3) * 30;
}
function Mv() {
	return 1;
}
function Av(n, t, e, s) {
	if (!t.sprite) {
		var i = n.context,
			r = n.ratio;
		i.clearRect(0, 0, (ys << 5) / r, Ki / r);
		var o = 0,
			a = 0,
			c = 0,
			l = e.length;
		for (--s; ++s < l; ) {
			(t = e[s]),
				i.save(),
				(i.font =
					t.style +
					" " +
					t.weight +
					" " +
					~~((t.size + 1) / r) +
					"px " +
					t.font);
			var h = i.measureText(t.text + "m").width * r,
				u = t.size << 1;
			if (t.rotate) {
				var d = Math.sin(t.rotate * Mo),
					f = Math.cos(t.rotate * Mo),
					g = h * f,
					p = h * d,
					m = u * f,
					b = u * d;
				(h = ((Math.max(Math.abs(g + b), Math.abs(g - b)) + 31) >> 5) << 5),
					(u = ~~Math.max(Math.abs(p + m), Math.abs(p - m)));
			} else h = ((h + 31) >> 5) << 5;
			if (
				(u > c && (c = u),
				o + h >= ys << 5 && ((o = 0), (a += c), (c = 0)),
				a + u >= Ki)
			)
				break;
			i.translate((o + (h >> 1)) / r, (a + (u >> 1)) / r),
				t.rotate && i.rotate(t.rotate * Mo),
				i.fillText(t.text, 0, 0),
				t.padding &&
					((i.lineWidth = 2 * t.padding), i.strokeText(t.text, 0, 0)),
				i.restore(),
				(t.width = h),
				(t.height = u),
				(t.xoff = o),
				(t.yoff = a),
				(t.x1 = h >> 1),
				(t.y1 = u >> 1),
				(t.x0 = -t.x1),
				(t.y0 = -t.y1),
				(t.hasText = !0),
				(o += h);
		}
		for (
			var y = i.getImageData(0, 0, (ys << 5) / r, Ki / r).data, v = [];
			--s >= 0;

		)
			if (((t = e[s]), !!t.hasText)) {
				for (
					var h = t.width, _ = h >> 5, u = t.y1 - t.y0, x = 0;
					x < u * _;
					x++
				)
					v[x] = 0;
				if (((o = t.xoff), o == null)) return;
				a = t.yoff;
				for (var k = 0, S = -1, E = 0; E < u; E++) {
					for (var x = 0; x < h; x++) {
						var T = _ * E + (x >> 5),
							M = y[((a + E) * (ys << 5) + (o + x)) << 2]
								? 1 << (31 - (x % 32))
								: 0;
						(v[T] |= M), (k |= M);
					}
					k ? (S = E) : (t.y0++, u--, E--, a++);
				}
				(t.y1 = t.y0 + S), (t.sprite = v.slice(0, (t.y1 - t.y0) * _));
			}
	}
}
function Dv(n, t, e) {
	e >>= 5;
	for (
		var s = n.sprite,
			i = n.width >> 5,
			r = n.x - (i << 4),
			o = r & 127,
			a = 32 - o,
			c = n.y1 - n.y0,
			l = (n.y + n.y0) * e + (r >> 5),
			h,
			u = 0;
		u < c;
		u++
	) {
		h = 0;
		for (var d = 0; d <= i; d++)
			if (((h << a) | (d < i ? (h = s[u * i + d]) >>> o : 0)) & t[l + d])
				return !0;
		l += e;
	}
	return !1;
}
function Ov(n, t) {
	var e = n[0],
		s = n[1];
	t.x + t.x0 < e.x && (e.x = t.x + t.x0),
		t.y + t.y0 < e.y && (e.y = t.y + t.y0),
		t.x + t.x1 > s.x && (s.x = t.x + t.x1),
		t.y + t.y1 > s.y && (s.y = t.y + t.y1);
}
function Pv(n, t) {
	return (
		n.x + n.x1 > t[0].x &&
		n.x + n.x0 < t[1].x &&
		n.y + n.y1 > t[0].y &&
		n.y + n.y0 < t[1].y
	);
}
function _d(n) {
	var t = n[0] / n[1];
	return function (e) {
		return [t * (e *= 0.1) * Math.cos(e), e * Math.sin(e)];
	};
}
function Rv(n) {
	var t = 4,
		e = (t * n[0]) / n[1],
		s = 0,
		i = 0;
	return function (r) {
		var o = r < 0 ? -1 : 1;
		switch ((Math.sqrt(1 + 4 * o * r) - o) & 3) {
			case 0:
				s += e;
				break;
			case 1:
				i += t;
				break;
			case 2:
				s -= e;
				break;
			default:
				i -= t;
				break;
		}
		return [s, i];
	};
}
function Lv(n) {
	for (var t = [], e = -1; ++e < n; ) t[e] = 0;
	return t;
}
function Nv() {
	return document.createElement("canvas");
}
function Ie(n) {
	return typeof n == "function"
		? n
		: function () {
				return n;
		  };
}
var Fv = { archimedean: _d, rectangular: Rv };
class Sn extends ce {
	static computeRotation(t, e) {
		if (t.rotationSteps <= 1) return 0;
		if (t.minRotation === t.maxRotation) return t.minRotation;
		const s =
				Math.min(t.rotationSteps, Math.floor(e() * t.rotationSteps)) /
				(t.rotationSteps - 1),
			i = t.maxRotation - t.minRotation;
		return t.minRotation + s * i;
	}
	inRange(t, e) {
		const s = this.getProps(["x", "y", "width", "height", "scale"]);
		if (s.scale <= 0) return !1;
		const i = Number.isNaN(t) ? s.x : t,
			r = Number.isNaN(e) ? s.y : e;
		return (
			i >= s.x - s.width / 2 &&
			i <= s.x + s.width / 2 &&
			r >= s.y - s.height / 2 &&
			r <= s.y + s.height / 2
		);
	}
	inXRange(t) {
		return this.inRange(t, Number.NaN);
	}
	inYRange(t) {
		return this.inRange(Number.NaN, t);
	}
	getCenterPoint() {
		return this.getProps(["x", "y"]);
	}
	tooltipPosition() {
		return this.getCenterPoint();
	}
	draw(t) {
		const { options: e } = this,
			s = this.getProps(["x", "y", "width", "height", "text", "scale"]);
		if (s.scale <= 0) return;
		t.save();
		const i = ut({ ...e, size: e.size * s.scale });
		(t.font = i.string),
			(t.fillStyle = e.color),
			(t.textAlign = "center"),
			t.translate(s.x, s.y),
			t.rotate((e.rotate / 180) * Math.PI),
			e.strokeStyle &&
				((t.strokeStyle = e.strokeStyle), t.strokeText(s.text, 0, 0)),
			t.fillText(s.text, 0, 0),
			t.restore();
	}
}
Sn.id = "word";
Sn.defaults = {
	minRotation: -90,
	maxRotation: 0,
	rotationSteps: 2,
	padding: 1,
	strokeStyle: void 0,
	size: (n) => n.parsed.y,
	hoverColor: "#ababab",
};
Sn.defaultRoutes = {
	color: "color",
	family: "font.family",
	style: "font.style",
	weight: "font.weight",
	lineHeight: "font.lineHeight",
};
function Bv(n, t, e, s = [], i = []) {
	Bt.addControllers(e),
		Array.isArray(s) ? Bt.addElements(...s) : Bt.addElements(s),
		Array.isArray(i) ? Bt.addScales(...i) : Bt.addScales(i);
	const r = t;
	return (r.type = n), r;
}
function Vv(n = Date.now()) {
	let t =
		typeof n == "number"
			? n
			: Array.from(n).reduce((e, s) => e + s.charCodeAt(0), 0);
	return () => ((t = (t * 9301 + 49297) % 233280), t / 233280);
}
class Yn extends Ce {
	constructor() {
		super(...arguments),
			(this.wordLayout = Ev()
				.text((t) => t.text)
				.padding((t) => t.options.padding)
				.rotate((t) => t.options.rotate)
				.font((t) => t.options.family)
				.fontSize((t) => t.options.size)
				.fontStyle((t) => t.options.style)
				.fontWeight((t) => {
					var e;
					return (e = t.options.weight) !== null && e !== void 0 ? e : 1;
				})),
			(this.rand = Math.random);
	}
	update(t) {
		super.update(t), (this.rand = Vv(this.chart.id));
		const s = this._cachedMeta.data || [];
		this.updateElements(s, 0, s.length, t);
	}
	updateElements(t, e, s, i) {
		var r, o, a, c;
		this.wordLayout.stop();
		const l = this._cachedMeta.xScale,
			h = this._cachedMeta.yScale,
			u = l.right - l.left,
			d = h.bottom - h.top,
			f = this.chart.data.labels,
			g = [];
		for (let m = e; m < e + s; m += 1) {
			const b = this.resolveDataElementOptions(m, i);
			b.rotate == null && (b.rotate = Sn.computeRotation(b, this.rand));
			const y = {
				options: { ...ut(b), ...b },
				x:
					(o =
						(r = this._cachedMeta.xScale) === null || r === void 0
							? void 0
							: r.getPixelForDecimal(0.5)) !== null && o !== void 0
						? o
						: 0,
				y:
					(c =
						(a = this._cachedMeta.yScale) === null || a === void 0
							? void 0
							: a.getPixelForDecimal(0.5)) !== null && c !== void 0
						? c
						: 0,
				width: 10,
				height: 10,
				scale: 1,
				index: m,
				text: f[m],
			};
			g.push(y);
		}
		if (i === "reset") {
			g.forEach((m) => {
				this.updateElement(t[m.index], m.index, m, i);
			});
			return;
		}
		this.wordLayout.random(this.rand).words(g);
		const p = (m = 1, b = 3) => {
			this.wordLayout
				.size([u * m, d * m])
				.on("end", (y, v) => {
					if (y.length < f.length) {
						if (b > 0) {
							p(m * 1.2, b - 1);
							return;
						}
						console.warn("cannot fit all text elements in three tries");
					}
					const _ = v[1].x - v[0].x,
						x = v[1].y - v[0].y,
						S = this.options.fit ? Math.min(u / _, d / x) : 1,
						E = new Set(f.map((T, M) => M));
					y.forEach((T) => {
						E.delete(T.index),
							this.updateElement(
								t[T.index],
								T.index,
								{
									options: T.options,
									scale: S,
									x: l.left + S * T.x + u / 2,
									y: h.top + S * T.y + d / 2,
									width: S * T.width,
									height: S * T.height,
									text: T.text,
								},
								i,
							);
					}),
						E.forEach((T) => this.updateElement(t[T], T, { scale: 0 }, i));
				})
				.start();
		};
		p();
	}
	draw() {
		const t = this._cachedMeta.data,
			{ ctx: e } = this.chart;
		t.forEach((s) => s.draw(e));
	}
	getLabelAndValue(t) {
		const e = super.getLabelAndValue(t),
			s = this.chart.data.labels;
		return (e.label = s[t]), e;
	}
}
Yn.id = "wordCloud";
Yn.defaults = {
	datasets: {
		fit: !0,
		animation: {
			colors: { properties: ["color", "strokeStyle"] },
			numbers: { properties: ["x", "y", "size", "rotate"] },
		},
	},
	maintainAspectRatio: !1,
	dataElementType: Sn.id,
};
Yn.overrides = {
	scales: {
		x: { type: "linear", min: -1, max: 1, display: !1 },
		y: { type: "linear", min: -1, max: 1, display: !1 },
	},
};
class wd extends De {
	constructor(t, e) {
		super(t, Bv("wordCloud", e, Yn, Sn));
	}
}
wd.id = Yn.id;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Sd = function (n) {
		const t = [];
		let e = 0;
		for (let s = 0; s < n.length; s++) {
			let i = n.charCodeAt(s);
			i < 128
				? (t[e++] = i)
				: i < 2048
				? ((t[e++] = (i >> 6) | 192), (t[e++] = (i & 63) | 128))
				: (i & 64512) === 55296 &&
				  s + 1 < n.length &&
				  (n.charCodeAt(s + 1) & 64512) === 56320
				? ((i = 65536 + ((i & 1023) << 10) + (n.charCodeAt(++s) & 1023)),
				  (t[e++] = (i >> 18) | 240),
				  (t[e++] = ((i >> 12) & 63) | 128),
				  (t[e++] = ((i >> 6) & 63) | 128),
				  (t[e++] = (i & 63) | 128))
				: ((t[e++] = (i >> 12) | 224),
				  (t[e++] = ((i >> 6) & 63) | 128),
				  (t[e++] = (i & 63) | 128));
		}
		return t;
	},
	zv = function (n) {
		const t = [];
		let e = 0,
			s = 0;
		for (; e < n.length; ) {
			const i = n[e++];
			if (i < 128) t[s++] = String.fromCharCode(i);
			else if (i > 191 && i < 224) {
				const r = n[e++];
				t[s++] = String.fromCharCode(((i & 31) << 6) | (r & 63));
			} else if (i > 239 && i < 365) {
				const r = n[e++],
					o = n[e++],
					a = n[e++],
					c =
						(((i & 7) << 18) | ((r & 63) << 12) | ((o & 63) << 6) | (a & 63)) -
						65536;
				(t[s++] = String.fromCharCode(55296 + (c >> 10))),
					(t[s++] = String.fromCharCode(56320 + (c & 1023)));
			} else {
				const r = n[e++],
					o = n[e++];
				t[s++] = String.fromCharCode(
					((i & 15) << 12) | ((r & 63) << 6) | (o & 63),
				);
			}
		}
		return t.join("");
	},
	Ed = {
		byteToCharMap_: null,
		charToByteMap_: null,
		byteToCharMapWebSafe_: null,
		charToByteMapWebSafe_: null,
		ENCODED_VALS_BASE:
			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
		get ENCODED_VALS() {
			return this.ENCODED_VALS_BASE + "+/=";
		},
		get ENCODED_VALS_WEBSAFE() {
			return this.ENCODED_VALS_BASE + "-_.";
		},
		HAS_NATIVE_SUPPORT: typeof atob == "function",
		encodeByteArray(n, t) {
			if (!Array.isArray(n))
				throw Error("encodeByteArray takes an array as a parameter");
			this.init_();
			const e = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
				s = [];
			for (let i = 0; i < n.length; i += 3) {
				const r = n[i],
					o = i + 1 < n.length,
					a = o ? n[i + 1] : 0,
					c = i + 2 < n.length,
					l = c ? n[i + 2] : 0,
					h = r >> 2,
					u = ((r & 3) << 4) | (a >> 4);
				let d = ((a & 15) << 2) | (l >> 6),
					f = l & 63;
				c || ((f = 64), o || (d = 64)), s.push(e[h], e[u], e[d], e[f]);
			}
			return s.join("");
		},
		encodeString(n, t) {
			return this.HAS_NATIVE_SUPPORT && !t
				? btoa(n)
				: this.encodeByteArray(Sd(n), t);
		},
		decodeString(n, t) {
			return this.HAS_NATIVE_SUPPORT && !t
				? atob(n)
				: zv(this.decodeStringToByteArray(n, t));
		},
		decodeStringToByteArray(n, t) {
			this.init_();
			const e = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
				s = [];
			for (let i = 0; i < n.length; ) {
				const r = e[n.charAt(i++)],
					a = i < n.length ? e[n.charAt(i)] : 0;
				++i;
				const l = i < n.length ? e[n.charAt(i)] : 64;
				++i;
				const u = i < n.length ? e[n.charAt(i)] : 64;
				if ((++i, r == null || a == null || l == null || u == null))
					throw new $v();
				const d = (r << 2) | (a >> 4);
				if ((s.push(d), l !== 64)) {
					const f = ((a << 4) & 240) | (l >> 2);
					if ((s.push(f), u !== 64)) {
						const g = ((l << 6) & 192) | u;
						s.push(g);
					}
				}
			}
			return s;
		},
		init_() {
			if (!this.byteToCharMap_) {
				(this.byteToCharMap_ = {}),
					(this.charToByteMap_ = {}),
					(this.byteToCharMapWebSafe_ = {}),
					(this.charToByteMapWebSafe_ = {});
				for (let n = 0; n < this.ENCODED_VALS.length; n++)
					(this.byteToCharMap_[n] = this.ENCODED_VALS.charAt(n)),
						(this.charToByteMap_[this.byteToCharMap_[n]] = n),
						(this.byteToCharMapWebSafe_[n] =
							this.ENCODED_VALS_WEBSAFE.charAt(n)),
						(this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]] = n),
						n >= this.ENCODED_VALS_BASE.length &&
							((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)] = n),
							(this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)] = n));
			}
		},
	};
class $v extends Error {
	constructor() {
		super(...arguments), (this.name = "DecodeBase64StringError");
	}
}
const Uv = function (n) {
		const t = Sd(n);
		return Ed.encodeByteArray(t, !0);
	},
	hr = function (n) {
		return Uv(n).replace(/\./g, "");
	},
	jv = function (n) {
		try {
			return Ed.decodeString(n, !0);
		} catch (t) {
			console.error("base64Decode failed: ", t);
		}
		return null;
	};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Hv() {
	if (typeof self < "u") return self;
	if (typeof window < "u") return window;
	if (typeof global < "u") return global;
	throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Wv = () => Hv().__FIREBASE_DEFAULTS__,
	qv = () => {
		if (typeof process > "u" || typeof process.env > "u") return;
		const n = {}.__FIREBASE_DEFAULTS__;
		if (n) return JSON.parse(n);
	},
	Kv = () => {
		if (typeof document > "u") return;
		let n;
		try {
			n = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
		} catch {
			return;
		}
		const t = n && jv(n[1]);
		return t && JSON.parse(t);
	},
	kd = () => {
		try {
			return Wv() || qv() || Kv();
		} catch (n) {
			console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);
			return;
		}
	},
	Yv = (n) => {
		var t, e;
		return (e =
			(t = kd()) === null || t === void 0 ? void 0 : t.emulatorHosts) ===
			null || e === void 0
			? void 0
			: e[n];
	},
	Gv = (n) => {
		const t = Yv(n);
		if (!t) return;
		const e = t.lastIndexOf(":");
		if (e <= 0 || e + 1 === t.length)
			throw new Error(`Invalid host ${t} with no separate hostname and port!`);
		const s = parseInt(t.substring(e + 1), 10);
		return t[0] === "[" ? [t.substring(1, e - 1), s] : [t.substring(0, e), s];
	},
	Xv = () => {
		var n;
		return (n = kd()) === null || n === void 0 ? void 0 : n.config;
	};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Qv {
	constructor() {
		(this.reject = () => {}),
			(this.resolve = () => {}),
			(this.promise = new Promise((t, e) => {
				(this.resolve = t), (this.reject = e);
			}));
	}
	wrapCallback(t) {
		return (e, s) => {
			e ? this.reject(e) : this.resolve(s),
				typeof t == "function" &&
					(this.promise.catch(() => {}), t.length === 1 ? t(e) : t(e, s));
		};
	}
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Jv(n, t) {
	if (n.uid)
		throw new Error(
			'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.',
		);
	const e = { alg: "none", type: "JWT" },
		s = t || "demo-project",
		i = n.iat || 0,
		r = n.sub || n.user_id;
	if (!r)
		throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
	const o = Object.assign(
			{
				iss: `https://securetoken.google.com/${s}`,
				aud: s,
				iat: i,
				exp: i + 3600,
				auth_time: i,
				sub: r,
				user_id: r,
				firebase: { sign_in_provider: "custom", identities: {} },
			},
			n,
		),
		a = "";
	return [hr(JSON.stringify(e)), hr(JSON.stringify(o)), a].join(".");
}
function Zv() {
	try {
		return typeof indexedDB == "object";
	} catch {
		return !1;
	}
}
function tx() {
	return new Promise((n, t) => {
		try {
			let e = !0;
			const s = "validate-browser-context-for-indexeddb-analytics-module",
				i = self.indexedDB.open(s);
			(i.onsuccess = () => {
				i.result.close(), e || self.indexedDB.deleteDatabase(s), n(!0);
			}),
				(i.onupgradeneeded = () => {
					e = !1;
				}),
				(i.onerror = () => {
					var r;
					t(
						((r = i.error) === null || r === void 0 ? void 0 : r.message) || "",
					);
				});
		} catch (e) {
			t(e);
		}
	});
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ex = "FirebaseError";
class Gn extends Error {
	constructor(t, e, s) {
		super(e),
			(this.code = t),
			(this.customData = s),
			(this.name = ex),
			Object.setPrototypeOf(this, Gn.prototype),
			Error.captureStackTrace &&
				Error.captureStackTrace(this, Cd.prototype.create);
	}
}
class Cd {
	constructor(t, e, s) {
		(this.service = t), (this.serviceName = e), (this.errors = s);
	}
	create(t, ...e) {
		const s = e[0] || {},
			i = `${this.service}/${t}`,
			r = this.errors[t],
			o = r ? nx(r, s) : "Error",
			a = `${this.serviceName}: ${o} (${i}).`;
		return new Gn(i, a, s);
	}
}
function nx(n, t) {
	return n.replace(sx, (e, s) => {
		const i = t[s];
		return i != null ? String(i) : `<${s}?>`;
	});
}
const sx = /\{\$([^}]+)}/g;
function ia(n, t) {
	if (n === t) return !0;
	const e = Object.keys(n),
		s = Object.keys(t);
	for (const i of e) {
		if (!s.includes(i)) return !1;
		const r = n[i],
			o = t[i];
		if (bh(r) && bh(o)) {
			if (!ia(r, o)) return !1;
		} else if (r !== o) return !1;
	}
	for (const i of s) if (!e.includes(i)) return !1;
	return !0;
}
function bh(n) {
	return n !== null && typeof n == "object";
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function zs(n) {
	return n && n._delegate ? n._delegate : n;
}
class $s {
	constructor(t, e, s) {
		(this.name = t),
			(this.instanceFactory = e),
			(this.type = s),
			(this.multipleInstances = !1),
			(this.serviceProps = {}),
			(this.instantiationMode = "LAZY"),
			(this.onInstanceCreated = null);
	}
	setInstantiationMode(t) {
		return (this.instantiationMode = t), this;
	}
	setMultipleInstances(t) {
		return (this.multipleInstances = t), this;
	}
	setServiceProps(t) {
		return (this.serviceProps = t), this;
	}
	setInstanceCreatedCallback(t) {
		return (this.onInstanceCreated = t), this;
	}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const on = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ix {
	constructor(t, e) {
		(this.name = t),
			(this.container = e),
			(this.component = null),
			(this.instances = new Map()),
			(this.instancesDeferred = new Map()),
			(this.instancesOptions = new Map()),
			(this.onInitCallbacks = new Map());
	}
	get(t) {
		const e = this.normalizeInstanceIdentifier(t);
		if (!this.instancesDeferred.has(e)) {
			const s = new Qv();
			if (
				(this.instancesDeferred.set(e, s),
				this.isInitialized(e) || this.shouldAutoInitialize())
			)
				try {
					const i = this.getOrInitializeService({ instanceIdentifier: e });
					i && s.resolve(i);
				} catch {}
		}
		return this.instancesDeferred.get(e).promise;
	}
	getImmediate(t) {
		var e;
		const s = this.normalizeInstanceIdentifier(t?.identifier),
			i = (e = t?.optional) !== null && e !== void 0 ? e : !1;
		if (this.isInitialized(s) || this.shouldAutoInitialize())
			try {
				return this.getOrInitializeService({ instanceIdentifier: s });
			} catch (r) {
				if (i) return null;
				throw r;
			}
		else {
			if (i) return null;
			throw Error(`Service ${this.name} is not available`);
		}
	}
	getComponent() {
		return this.component;
	}
	setComponent(t) {
		if (t.name !== this.name)
			throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);
		if (this.component)
			throw Error(`Component for ${this.name} has already been provided`);
		if (((this.component = t), !!this.shouldAutoInitialize())) {
			if (ox(t))
				try {
					this.getOrInitializeService({ instanceIdentifier: on });
				} catch {}
			for (const [e, s] of this.instancesDeferred.entries()) {
				const i = this.normalizeInstanceIdentifier(e);
				try {
					const r = this.getOrInitializeService({ instanceIdentifier: i });
					s.resolve(r);
				} catch {}
			}
		}
	}
	clearInstance(t = on) {
		this.instancesDeferred.delete(t),
			this.instancesOptions.delete(t),
			this.instances.delete(t);
	}
	async delete() {
		const t = Array.from(this.instances.values());
		await Promise.all([
			...t.filter((e) => "INTERNAL" in e).map((e) => e.INTERNAL.delete()),
			...t.filter((e) => "_delete" in e).map((e) => e._delete()),
		]);
	}
	isComponentSet() {
		return this.component != null;
	}
	isInitialized(t = on) {
		return this.instances.has(t);
	}
	getOptions(t = on) {
		return this.instancesOptions.get(t) || {};
	}
	initialize(t = {}) {
		const { options: e = {} } = t,
			s = this.normalizeInstanceIdentifier(t.instanceIdentifier);
		if (this.isInitialized(s))
			throw Error(`${this.name}(${s}) has already been initialized`);
		if (!this.isComponentSet())
			throw Error(`Component ${this.name} has not been registered yet`);
		const i = this.getOrInitializeService({
			instanceIdentifier: s,
			options: e,
		});
		for (const [r, o] of this.instancesDeferred.entries()) {
			const a = this.normalizeInstanceIdentifier(r);
			s === a && o.resolve(i);
		}
		return i;
	}
	onInit(t, e) {
		var s;
		const i = this.normalizeInstanceIdentifier(e),
			r =
				(s = this.onInitCallbacks.get(i)) !== null && s !== void 0
					? s
					: new Set();
		r.add(t), this.onInitCallbacks.set(i, r);
		const o = this.instances.get(i);
		return (
			o && t(o, i),
			() => {
				r.delete(t);
			}
		);
	}
	invokeOnInitCallbacks(t, e) {
		const s = this.onInitCallbacks.get(e);
		if (s)
			for (const i of s)
				try {
					i(t, e);
				} catch {}
	}
	getOrInitializeService({ instanceIdentifier: t, options: e = {} }) {
		let s = this.instances.get(t);
		if (
			!s &&
			this.component &&
			((s = this.component.instanceFactory(this.container, {
				instanceIdentifier: rx(t),
				options: e,
			})),
			this.instances.set(t, s),
			this.instancesOptions.set(t, e),
			this.invokeOnInitCallbacks(s, t),
			this.component.onInstanceCreated)
		)
			try {
				this.component.onInstanceCreated(this.container, t, s);
			} catch {}
		return s || null;
	}
	normalizeInstanceIdentifier(t = on) {
		return this.component ? (this.component.multipleInstances ? t : on) : t;
	}
	shouldAutoInitialize() {
		return !!this.component && this.component.instantiationMode !== "EXPLICIT";
	}
}
function rx(n) {
	return n === on ? void 0 : n;
}
function ox(n) {
	return n.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ax {
	constructor(t) {
		(this.name = t), (this.providers = new Map());
	}
	addComponent(t) {
		const e = this.getProvider(t.name);
		if (e.isComponentSet())
			throw new Error(
				`Component ${t.name} has already been registered with ${this.name}`,
			);
		e.setComponent(t);
	}
	addOrOverwriteComponent(t) {
		this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name),
			this.addComponent(t);
	}
	getProvider(t) {
		if (this.providers.has(t)) return this.providers.get(t);
		const e = new ix(t, this);
		return this.providers.set(t, e), e;
	}
	getProviders() {
		return Array.from(this.providers.values());
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var K;
(function (n) {
	(n[(n.DEBUG = 0)] = "DEBUG"),
		(n[(n.VERBOSE = 1)] = "VERBOSE"),
		(n[(n.INFO = 2)] = "INFO"),
		(n[(n.WARN = 3)] = "WARN"),
		(n[(n.ERROR = 4)] = "ERROR"),
		(n[(n.SILENT = 5)] = "SILENT");
})(K || (K = {}));
const cx = {
		debug: K.DEBUG,
		verbose: K.VERBOSE,
		info: K.INFO,
		warn: K.WARN,
		error: K.ERROR,
		silent: K.SILENT,
	},
	lx = K.INFO,
	hx = {
		[K.DEBUG]: "log",
		[K.VERBOSE]: "log",
		[K.INFO]: "info",
		[K.WARN]: "warn",
		[K.ERROR]: "error",
	},
	ux = (n, t, ...e) => {
		if (t < n.logLevel) return;
		const s = new Date().toISOString(),
			i = hx[t];
		if (i) console[i](`[${s}]  ${n.name}:`, ...e);
		else
			throw new Error(
				`Attempted to log a message with an invalid logType (value: ${t})`,
			);
	};
class Td {
	constructor(t) {
		(this.name = t),
			(this._logLevel = lx),
			(this._logHandler = ux),
			(this._userLogHandler = null);
	}
	get logLevel() {
		return this._logLevel;
	}
	set logLevel(t) {
		if (!(t in K))
			throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
		this._logLevel = t;
	}
	setLogLevel(t) {
		this._logLevel = typeof t == "string" ? cx[t] : t;
	}
	get logHandler() {
		return this._logHandler;
	}
	set logHandler(t) {
		if (typeof t != "function")
			throw new TypeError("Value assigned to `logHandler` must be a function");
		this._logHandler = t;
	}
	get userLogHandler() {
		return this._userLogHandler;
	}
	set userLogHandler(t) {
		this._userLogHandler = t;
	}
	debug(...t) {
		this._userLogHandler && this._userLogHandler(this, K.DEBUG, ...t),
			this._logHandler(this, K.DEBUG, ...t);
	}
	log(...t) {
		this._userLogHandler && this._userLogHandler(this, K.VERBOSE, ...t),
			this._logHandler(this, K.VERBOSE, ...t);
	}
	info(...t) {
		this._userLogHandler && this._userLogHandler(this, K.INFO, ...t),
			this._logHandler(this, K.INFO, ...t);
	}
	warn(...t) {
		this._userLogHandler && this._userLogHandler(this, K.WARN, ...t),
			this._logHandler(this, K.WARN, ...t);
	}
	error(...t) {
		this._userLogHandler && this._userLogHandler(this, K.ERROR, ...t),
			this._logHandler(this, K.ERROR, ...t);
	}
}
const dx = (n, t) => t.some((e) => n instanceof e);
let vh, xh;
function fx() {
	return (
		vh ||
		(vh = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
	);
}
function gx() {
	return (
		xh ||
		(xh = [
			IDBCursor.prototype.advance,
			IDBCursor.prototype.continue,
			IDBCursor.prototype.continuePrimaryKey,
		])
	);
}
const Id = new WeakMap(),
	ra = new WeakMap(),
	Md = new WeakMap(),
	Ao = new WeakMap(),
	Xa = new WeakMap();
function px(n) {
	const t = new Promise((e, s) => {
		const i = () => {
				n.removeEventListener("success", r), n.removeEventListener("error", o);
			},
			r = () => {
				e(Fe(n.result)), i();
			},
			o = () => {
				s(n.error), i();
			};
		n.addEventListener("success", r), n.addEventListener("error", o);
	});
	return (
		t
			.then((e) => {
				e instanceof IDBCursor && Id.set(e, n);
			})
			.catch(() => {}),
		Xa.set(t, n),
		t
	);
}
function mx(n) {
	if (ra.has(n)) return;
	const t = new Promise((e, s) => {
		const i = () => {
				n.removeEventListener("complete", r),
					n.removeEventListener("error", o),
					n.removeEventListener("abort", o);
			},
			r = () => {
				e(), i();
			},
			o = () => {
				s(n.error || new DOMException("AbortError", "AbortError")), i();
			};
		n.addEventListener("complete", r),
			n.addEventListener("error", o),
			n.addEventListener("abort", o);
	});
	ra.set(n, t);
}
let oa = {
	get(n, t, e) {
		if (n instanceof IDBTransaction) {
			if (t === "done") return ra.get(n);
			if (t === "objectStoreNames") return n.objectStoreNames || Md.get(n);
			if (t === "store")
				return e.objectStoreNames[1]
					? void 0
					: e.objectStore(e.objectStoreNames[0]);
		}
		return Fe(n[t]);
	},
	set(n, t, e) {
		return (n[t] = e), !0;
	},
	has(n, t) {
		return n instanceof IDBTransaction && (t === "done" || t === "store")
			? !0
			: t in n;
	},
};
function yx(n) {
	oa = n(oa);
}
function bx(n) {
	return n === IDBDatabase.prototype.transaction &&
		!("objectStoreNames" in IDBTransaction.prototype)
		? function (t, ...e) {
				const s = n.call(Do(this), t, ...e);
				return Md.set(s, t.sort ? t.sort() : [t]), Fe(s);
		  }
		: gx().includes(n)
		? function (...t) {
				return n.apply(Do(this), t), Fe(Id.get(this));
		  }
		: function (...t) {
				return Fe(n.apply(Do(this), t));
		  };
}
function vx(n) {
	return typeof n == "function"
		? bx(n)
		: (n instanceof IDBTransaction && mx(n),
		  dx(n, fx()) ? new Proxy(n, oa) : n);
}
function Fe(n) {
	if (n instanceof IDBRequest) return px(n);
	if (Ao.has(n)) return Ao.get(n);
	const t = vx(n);
	return t !== n && (Ao.set(n, t), Xa.set(t, n)), t;
}
const Do = (n) => Xa.get(n);
function xx(n, t, { blocked: e, upgrade: s, blocking: i, terminated: r } = {}) {
	const o = indexedDB.open(n, t),
		a = Fe(o);
	return (
		s &&
			o.addEventListener("upgradeneeded", (c) => {
				s(Fe(o.result), c.oldVersion, c.newVersion, Fe(o.transaction));
			}),
		e && o.addEventListener("blocked", () => e()),
		a
			.then((c) => {
				r && c.addEventListener("close", () => r()),
					i && c.addEventListener("versionchange", () => i());
			})
			.catch(() => {}),
		a
	);
}
const _x = ["get", "getKey", "getAll", "getAllKeys", "count"],
	wx = ["put", "add", "delete", "clear"],
	Oo = new Map();
function _h(n, t) {
	if (!(n instanceof IDBDatabase && !(t in n) && typeof t == "string")) return;
	if (Oo.get(t)) return Oo.get(t);
	const e = t.replace(/FromIndex$/, ""),
		s = t !== e,
		i = wx.includes(e);
	if (
		!(e in (s ? IDBIndex : IDBObjectStore).prototype) ||
		!(i || _x.includes(e))
	)
		return;
	const r = async function (o, ...a) {
		const c = this.transaction(o, i ? "readwrite" : "readonly");
		let l = c.store;
		return (
			s && (l = l.index(a.shift())),
			(await Promise.all([l[e](...a), i && c.done]))[0]
		);
	};
	return Oo.set(t, r), r;
}
yx((n) => ({
	...n,
	get: (t, e, s) => _h(t, e) || n.get(t, e, s),
	has: (t, e) => !!_h(t, e) || n.has(t, e),
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Sx {
	constructor(t) {
		this.container = t;
	}
	getPlatformInfoString() {
		return this.container
			.getProviders()
			.map((e) => {
				if (Ex(e)) {
					const s = e.getImmediate();
					return `${s.library}/${s.version}`;
				} else return null;
			})
			.filter((e) => e)
			.join(" ");
	}
}
function Ex(n) {
	const t = n.getComponent();
	return t?.type === "VERSION";
}
const aa = "@firebase/app",
	wh = "0.9.7";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const yn = new Td("@firebase/app"),
	kx = "@firebase/app-compat",
	Cx = "@firebase/analytics-compat",
	Tx = "@firebase/analytics",
	Ix = "@firebase/app-check-compat",
	Mx = "@firebase/app-check",
	Ax = "@firebase/auth",
	Dx = "@firebase/auth-compat",
	Ox = "@firebase/database",
	Px = "@firebase/database-compat",
	Rx = "@firebase/functions",
	Lx = "@firebase/functions-compat",
	Nx = "@firebase/installations",
	Fx = "@firebase/installations-compat",
	Bx = "@firebase/messaging",
	Vx = "@firebase/messaging-compat",
	zx = "@firebase/performance",
	$x = "@firebase/performance-compat",
	Ux = "@firebase/remote-config",
	jx = "@firebase/remote-config-compat",
	Hx = "@firebase/storage",
	Wx = "@firebase/storage-compat",
	qx = "@firebase/firestore",
	Kx = "@firebase/firestore-compat",
	Yx = "firebase",
	Gx = "9.19.1";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ca = "[DEFAULT]",
	Xx = {
		[aa]: "fire-core",
		[kx]: "fire-core-compat",
		[Tx]: "fire-analytics",
		[Cx]: "fire-analytics-compat",
		[Mx]: "fire-app-check",
		[Ix]: "fire-app-check-compat",
		[Ax]: "fire-auth",
		[Dx]: "fire-auth-compat",
		[Ox]: "fire-rtdb",
		[Px]: "fire-rtdb-compat",
		[Rx]: "fire-fn",
		[Lx]: "fire-fn-compat",
		[Nx]: "fire-iid",
		[Fx]: "fire-iid-compat",
		[Bx]: "fire-fcm",
		[Vx]: "fire-fcm-compat",
		[zx]: "fire-perf",
		[$x]: "fire-perf-compat",
		[Ux]: "fire-rc",
		[jx]: "fire-rc-compat",
		[Hx]: "fire-gcs",
		[Wx]: "fire-gcs-compat",
		[qx]: "fire-fst",
		[Kx]: "fire-fst-compat",
		"fire-js": "fire-js",
		[Yx]: "fire-js-all",
	};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ur = new Map(),
	la = new Map();
function Qx(n, t) {
	try {
		n.container.addComponent(t);
	} catch (e) {
		yn.debug(
			`Component ${t.name} failed to register with FirebaseApp ${n.name}`,
			e,
		);
	}
}
function dr(n) {
	const t = n.name;
	if (la.has(t))
		return (
			yn.debug(`There were multiple attempts to register component ${t}.`), !1
		);
	la.set(t, n);
	for (const e of ur.values()) Qx(e, n);
	return !0;
}
function Jx(n, t) {
	const e = n.container.getProvider("heartbeat").getImmediate({ optional: !0 });
	return e && e.triggerHeartbeat(), n.container.getProvider(t);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Zx = {
		["no-app"]:
			"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
		["bad-app-name"]: "Illegal App name: '{$appName}",
		["duplicate-app"]:
			"Firebase App named '{$appName}' already exists with different options or config",
		["app-deleted"]: "Firebase App named '{$appName}' already deleted",
		["no-options"]:
			"Need to provide options, when not being deployed to hosting via source.",
		["invalid-app-argument"]:
			"firebase.{$appName}() takes either no argument or a Firebase App instance.",
		["invalid-log-argument"]:
			"First argument to `onLog` must be null or a function.",
		["idb-open"]:
			"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
		["idb-get"]:
			"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
		["idb-set"]:
			"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
		["idb-delete"]:
			"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
	},
	Be = new Cd("app", "Firebase", Zx);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class t_ {
	constructor(t, e, s) {
		(this._isDeleted = !1),
			(this._options = Object.assign({}, t)),
			(this._config = Object.assign({}, e)),
			(this._name = e.name),
			(this._automaticDataCollectionEnabled = e.automaticDataCollectionEnabled),
			(this._container = s),
			this.container.addComponent(new $s("app", () => this, "PUBLIC"));
	}
	get automaticDataCollectionEnabled() {
		return this.checkDestroyed(), this._automaticDataCollectionEnabled;
	}
	set automaticDataCollectionEnabled(t) {
		this.checkDestroyed(), (this._automaticDataCollectionEnabled = t);
	}
	get name() {
		return this.checkDestroyed(), this._name;
	}
	get options() {
		return this.checkDestroyed(), this._options;
	}
	get config() {
		return this.checkDestroyed(), this._config;
	}
	get container() {
		return this._container;
	}
	get isDeleted() {
		return this._isDeleted;
	}
	set isDeleted(t) {
		this._isDeleted = t;
	}
	checkDestroyed() {
		if (this.isDeleted) throw Be.create("app-deleted", { appName: this._name });
	}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const e_ = Gx;
function Ad(n, t = {}) {
	let e = n;
	typeof t != "object" && (t = { name: t });
	const s = Object.assign({ name: ca, automaticDataCollectionEnabled: !1 }, t),
		i = s.name;
	if (typeof i != "string" || !i)
		throw Be.create("bad-app-name", { appName: String(i) });
	if ((e || (e = Xv()), !e)) throw Be.create("no-options");
	const r = ur.get(i);
	if (r) {
		if (ia(e, r.options) && ia(s, r.config)) return r;
		throw Be.create("duplicate-app", { appName: i });
	}
	const o = new ax(i);
	for (const c of la.values()) o.addComponent(c);
	const a = new t_(e, s, o);
	return ur.set(i, a), a;
}
function n_(n = ca) {
	const t = ur.get(n);
	if (!t && n === ca) return Ad();
	if (!t) throw Be.create("no-app", { appName: n });
	return t;
}
function Rn(n, t, e) {
	var s;
	let i = (s = Xx[n]) !== null && s !== void 0 ? s : n;
	e && (i += `-${e}`);
	const r = i.match(/\s|\//),
		o = t.match(/\s|\//);
	if (r || o) {
		const a = [`Unable to register library "${i}" with version "${t}":`];
		r &&
			a.push(
				`library name "${i}" contains illegal characters (whitespace or "/")`,
			),
			r && o && a.push("and"),
			o &&
				a.push(
					`version name "${t}" contains illegal characters (whitespace or "/")`,
				),
			yn.warn(a.join(" "));
		return;
	}
	dr(new $s(`${i}-version`, () => ({ library: i, version: t }), "VERSION"));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const s_ = "firebase-heartbeat-database",
	i_ = 1,
	Us = "firebase-heartbeat-store";
let Po = null;
function Dd() {
	return (
		Po ||
			(Po = xx(s_, i_, {
				upgrade: (n, t) => {
					switch (t) {
						case 0:
							n.createObjectStore(Us);
					}
				},
			}).catch((n) => {
				throw Be.create("idb-open", { originalErrorMessage: n.message });
			})),
		Po
	);
}
async function r_(n) {
	try {
		return (await Dd()).transaction(Us).objectStore(Us).get(Od(n));
	} catch (t) {
		if (t instanceof Gn) yn.warn(t.message);
		else {
			const e = Be.create("idb-get", { originalErrorMessage: t?.message });
			yn.warn(e.message);
		}
	}
}
async function Sh(n, t) {
	try {
		const s = (await Dd()).transaction(Us, "readwrite");
		return await s.objectStore(Us).put(t, Od(n)), s.done;
	} catch (e) {
		if (e instanceof Gn) yn.warn(e.message);
		else {
			const s = Be.create("idb-set", { originalErrorMessage: e?.message });
			yn.warn(s.message);
		}
	}
}
function Od(n) {
	return `${n.name}!${n.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const o_ = 1024,
	a_ = 30 * 24 * 60 * 60 * 1e3;
class c_ {
	constructor(t) {
		(this.container = t), (this._heartbeatsCache = null);
		const e = this.container.getProvider("app").getImmediate();
		(this._storage = new h_(e)),
			(this._heartbeatsCachePromise = this._storage
				.read()
				.then((s) => ((this._heartbeatsCache = s), s)));
	}
	async triggerHeartbeat() {
		const e = this.container
				.getProvider("platform-logger")
				.getImmediate()
				.getPlatformInfoString(),
			s = Eh();
		if (
			(this._heartbeatsCache === null &&
				(this._heartbeatsCache = await this._heartbeatsCachePromise),
			!(
				this._heartbeatsCache.lastSentHeartbeatDate === s ||
				this._heartbeatsCache.heartbeats.some((i) => i.date === s)
			))
		)
			return (
				this._heartbeatsCache.heartbeats.push({ date: s, agent: e }),
				(this._heartbeatsCache.heartbeats =
					this._heartbeatsCache.heartbeats.filter((i) => {
						const r = new Date(i.date).valueOf();
						return Date.now() - r <= a_;
					})),
				this._storage.overwrite(this._heartbeatsCache)
			);
	}
	async getHeartbeatsHeader() {
		if (
			(this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
			this._heartbeatsCache === null ||
				this._heartbeatsCache.heartbeats.length === 0)
		)
			return "";
		const t = Eh(),
			{ heartbeatsToSend: e, unsentEntries: s } = l_(
				this._heartbeatsCache.heartbeats,
			),
			i = hr(JSON.stringify({ version: 2, heartbeats: e }));
		return (
			(this._heartbeatsCache.lastSentHeartbeatDate = t),
			s.length > 0
				? ((this._heartbeatsCache.heartbeats = s),
				  await this._storage.overwrite(this._heartbeatsCache))
				: ((this._heartbeatsCache.heartbeats = []),
				  this._storage.overwrite(this._heartbeatsCache)),
			i
		);
	}
}
function Eh() {
	return new Date().toISOString().substring(0, 10);
}
function l_(n, t = o_) {
	const e = [];
	let s = n.slice();
	for (const i of n) {
		const r = e.find((o) => o.agent === i.agent);
		if (r) {
			if ((r.dates.push(i.date), kh(e) > t)) {
				r.dates.pop();
				break;
			}
		} else if ((e.push({ agent: i.agent, dates: [i.date] }), kh(e) > t)) {
			e.pop();
			break;
		}
		s = s.slice(1);
	}
	return { heartbeatsToSend: e, unsentEntries: s };
}
class h_ {
	constructor(t) {
		(this.app = t),
			(this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
	}
	async runIndexedDBEnvironmentCheck() {
		return Zv()
			? tx()
					.then(() => !0)
					.catch(() => !1)
			: !1;
	}
	async read() {
		return (await this._canUseIndexedDBPromise)
			? (await r_(this.app)) || { heartbeats: [] }
			: { heartbeats: [] };
	}
	async overwrite(t) {
		var e;
		if (await this._canUseIndexedDBPromise) {
			const i = await this.read();
			return Sh(this.app, {
				lastSentHeartbeatDate:
					(e = t.lastSentHeartbeatDate) !== null && e !== void 0
						? e
						: i.lastSentHeartbeatDate,
				heartbeats: t.heartbeats,
			});
		} else return;
	}
	async add(t) {
		var e;
		if (await this._canUseIndexedDBPromise) {
			const i = await this.read();
			return Sh(this.app, {
				lastSentHeartbeatDate:
					(e = t.lastSentHeartbeatDate) !== null && e !== void 0
						? e
						: i.lastSentHeartbeatDate,
				heartbeats: [...i.heartbeats, ...t.heartbeats],
			});
		} else return;
	}
}
function kh(n) {
	return hr(JSON.stringify({ version: 2, heartbeats: n })).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function u_(n) {
	dr(new $s("platform-logger", (t) => new Sx(t), "PRIVATE")),
		dr(new $s("heartbeat", (t) => new c_(t), "PRIVATE")),
		Rn(aa, wh, n),
		Rn(aa, wh, "esm2017"),
		Rn("fire-js", "");
}
u_("");
var d_ = "firebase",
	f_ = "9.19.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ Rn(d_, f_, "app");
var g_ =
		typeof globalThis < "u"
			? globalThis
			: typeof window < "u"
			? window
			: typeof global < "u"
			? global
			: typeof self < "u"
			? self
			: {},
	A,
	Qa = Qa || {},
	L = g_ || self;
function fr() {}
function Br(n) {
	var t = typeof n;
	return (
		(t = t != "object" ? t : n ? (Array.isArray(n) ? "array" : t) : "null"),
		t == "array" || (t == "object" && typeof n.length == "number")
	);
}
function si(n) {
	var t = typeof n;
	return (t == "object" && n != null) || t == "function";
}
function p_(n) {
	return (
		(Object.prototype.hasOwnProperty.call(n, Ro) && n[Ro]) || (n[Ro] = ++m_)
	);
}
var Ro = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
	m_ = 0;
function y_(n, t, e) {
	return n.call.apply(n.bind, arguments);
}
function b_(n, t, e) {
	if (!n) throw Error();
	if (2 < arguments.length) {
		var s = Array.prototype.slice.call(arguments, 2);
		return function () {
			var i = Array.prototype.slice.call(arguments);
			return Array.prototype.unshift.apply(i, s), n.apply(t, i);
		};
	}
	return function () {
		return n.apply(t, arguments);
	};
}
function Pt(n, t, e) {
	return (
		Function.prototype.bind &&
		Function.prototype.bind.toString().indexOf("native code") != -1
			? (Pt = y_)
			: (Pt = b_),
		Pt.apply(null, arguments)
	);
}
function Oi(n, t) {
	var e = Array.prototype.slice.call(arguments, 1);
	return function () {
		var s = e.slice();
		return s.push.apply(s, arguments), n.apply(this, s);
	};
}
function Ct(n, t) {
	function e() {}
	(e.prototype = t.prototype),
		(n.X = t.prototype),
		(n.prototype = new e()),
		(n.prototype.constructor = n),
		(n.Wb = function (s, i, r) {
			for (
				var o = Array(arguments.length - 2), a = 2;
				a < arguments.length;
				a++
			)
				o[a - 2] = arguments[a];
			return t.prototype[i].apply(s, o);
		});
}
function Ge() {
	(this.s = this.s), (this.o = this.o);
}
var v_ = 0;
Ge.prototype.s = !1;
Ge.prototype.na = function () {
	!this.s && ((this.s = !0), this.M(), v_ != 0) && p_(this);
};
Ge.prototype.M = function () {
	if (this.o) for (; this.o.length; ) this.o.shift()();
};
const Pd = Array.prototype.indexOf
	? function (n, t) {
			return Array.prototype.indexOf.call(n, t, void 0);
	  }
	: function (n, t) {
			if (typeof n == "string")
				return typeof t != "string" || t.length != 1 ? -1 : n.indexOf(t, 0);
			for (let e = 0; e < n.length; e++) if (e in n && n[e] === t) return e;
			return -1;
	  };
function Ja(n) {
	const t = n.length;
	if (0 < t) {
		const e = Array(t);
		for (let s = 0; s < t; s++) e[s] = n[s];
		return e;
	}
	return [];
}
function Ch(n, t) {
	for (let e = 1; e < arguments.length; e++) {
		const s = arguments[e];
		if (Br(s)) {
			const i = n.length || 0,
				r = s.length || 0;
			n.length = i + r;
			for (let o = 0; o < r; o++) n[i + o] = s[o];
		} else n.push(s);
	}
}
function Rt(n, t) {
	(this.type = n), (this.g = this.target = t), (this.defaultPrevented = !1);
}
Rt.prototype.h = function () {
	this.defaultPrevented = !0;
};
var x_ = (function () {
	if (!L.addEventListener || !Object.defineProperty) return !1;
	var n = !1,
		t = Object.defineProperty({}, "passive", {
			get: function () {
				n = !0;
			},
		});
	try {
		L.addEventListener("test", fr, t), L.removeEventListener("test", fr, t);
	} catch {}
	return n;
})();
function gr(n) {
	return /^[\s\xa0]*$/.test(n);
}
var Th = String.prototype.trim
	? function (n) {
			return n.trim();
	  }
	: function (n) {
			return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1];
	  };
function Lo(n, t) {
	return n < t ? -1 : n > t ? 1 : 0;
}
function Vr() {
	var n = L.navigator;
	return n && (n = n.userAgent) ? n : "";
}
function se(n) {
	return Vr().indexOf(n) != -1;
}
function Za(n) {
	return Za[" "](n), n;
}
Za[" "] = fr;
function __(n) {
	var t = E_;
	return Object.prototype.hasOwnProperty.call(t, 9) ? t[9] : (t[9] = n(9));
}
var w_ = se("Opera"),
	zn = se("Trident") || se("MSIE"),
	Rd = se("Edge"),
	ha = Rd || zn,
	Ld =
		se("Gecko") &&
		!(Vr().toLowerCase().indexOf("webkit") != -1 && !se("Edge")) &&
		!(se("Trident") || se("MSIE")) &&
		!se("Edge"),
	S_ = Vr().toLowerCase().indexOf("webkit") != -1 && !se("Edge");
function Nd() {
	var n = L.document;
	return n ? n.documentMode : void 0;
}
var pr;
t: {
	var No = "",
		Fo = (function () {
			var n = Vr();
			if (Ld) return /rv:([^\);]+)(\)|;)/.exec(n);
			if (Rd) return /Edge\/([\d\.]+)/.exec(n);
			if (zn) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);
			if (S_) return /WebKit\/(\S+)/.exec(n);
			if (w_) return /(?:Version)[ \/]?(\S+)/.exec(n);
		})();
	if ((Fo && (No = Fo ? Fo[1] : ""), zn)) {
		var Bo = Nd();
		if (Bo != null && Bo > parseFloat(No)) {
			pr = String(Bo);
			break t;
		}
	}
	pr = No;
}
var E_ = {};
function k_() {
	return __(function () {
		let n = 0;
		const t = Th(String(pr)).split("."),
			e = Th("9").split("."),
			s = Math.max(t.length, e.length);
		for (let o = 0; n == 0 && o < s; o++) {
			var i = t[o] || "",
				r = e[o] || "";
			do {
				if (
					((i = /(\d*)(\D*)(.*)/.exec(i) || ["", "", "", ""]),
					(r = /(\d*)(\D*)(.*)/.exec(r) || ["", "", "", ""]),
					i[0].length == 0 && r[0].length == 0)
				)
					break;
				(n =
					Lo(
						i[1].length == 0 ? 0 : parseInt(i[1], 10),
						r[1].length == 0 ? 0 : parseInt(r[1], 10),
					) ||
					Lo(i[2].length == 0, r[2].length == 0) ||
					Lo(i[2], r[2])),
					(i = i[3]),
					(r = r[3]);
			} while (n == 0);
		}
		return 0 <= n;
	});
}
var ua;
if (L.document && zn) {
	var Ih = Nd();
	ua = Ih || parseInt(pr, 10) || void 0;
} else ua = void 0;
var C_ = ua;
function js(n, t) {
	if (
		(Rt.call(this, n ? n.type : ""),
		(this.relatedTarget = this.g = this.target = null),
		(this.button =
			this.screenY =
			this.screenX =
			this.clientY =
			this.clientX =
				0),
		(this.key = ""),
		(this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
		(this.state = null),
		(this.pointerId = 0),
		(this.pointerType = ""),
		(this.i = null),
		n)
	) {
		var e = (this.type = n.type),
			s =
				n.changedTouches && n.changedTouches.length
					? n.changedTouches[0]
					: null;
		if (
			((this.target = n.target || n.srcElement),
			(this.g = t),
			(t = n.relatedTarget))
		) {
			if (Ld) {
				t: {
					try {
						Za(t.nodeName);
						var i = !0;
						break t;
					} catch {}
					i = !1;
				}
				i || (t = null);
			}
		} else
			e == "mouseover"
				? (t = n.fromElement)
				: e == "mouseout" && (t = n.toElement);
		(this.relatedTarget = t),
			s
				? ((this.clientX = s.clientX !== void 0 ? s.clientX : s.pageX),
				  (this.clientY = s.clientY !== void 0 ? s.clientY : s.pageY),
				  (this.screenX = s.screenX || 0),
				  (this.screenY = s.screenY || 0))
				: ((this.clientX = n.clientX !== void 0 ? n.clientX : n.pageX),
				  (this.clientY = n.clientY !== void 0 ? n.clientY : n.pageY),
				  (this.screenX = n.screenX || 0),
				  (this.screenY = n.screenY || 0)),
			(this.button = n.button),
			(this.key = n.key || ""),
			(this.ctrlKey = n.ctrlKey),
			(this.altKey = n.altKey),
			(this.shiftKey = n.shiftKey),
			(this.metaKey = n.metaKey),
			(this.pointerId = n.pointerId || 0),
			(this.pointerType =
				typeof n.pointerType == "string"
					? n.pointerType
					: T_[n.pointerType] || ""),
			(this.state = n.state),
			(this.i = n),
			n.defaultPrevented && js.X.h.call(this);
	}
}
Ct(js, Rt);
var T_ = { 2: "touch", 3: "pen", 4: "mouse" };
js.prototype.h = function () {
	js.X.h.call(this);
	var n = this.i;
	n.preventDefault ? n.preventDefault() : (n.returnValue = !1);
};
var ii = "closure_listenable_" + ((1e6 * Math.random()) | 0),
	I_ = 0;
function M_(n, t, e, s, i) {
	(this.listener = n),
		(this.proxy = null),
		(this.src = t),
		(this.type = e),
		(this.capture = !!s),
		(this.ha = i),
		(this.key = ++I_),
		(this.ba = this.ea = !1);
}
function zr(n) {
	(n.ba = !0),
		(n.listener = null),
		(n.proxy = null),
		(n.src = null),
		(n.ha = null);
}
function tc(n, t, e) {
	for (const s in n) t.call(e, n[s], s, n);
}
function Fd(n) {
	const t = {};
	for (const e in n) t[e] = n[e];
	return t;
}
const Mh =
	"constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
		" ",
	);
function Bd(n, t) {
	let e, s;
	for (let i = 1; i < arguments.length; i++) {
		s = arguments[i];
		for (e in s) n[e] = s[e];
		for (let r = 0; r < Mh.length; r++)
			(e = Mh[r]), Object.prototype.hasOwnProperty.call(s, e) && (n[e] = s[e]);
	}
}
function $r(n) {
	(this.src = n), (this.g = {}), (this.h = 0);
}
$r.prototype.add = function (n, t, e, s, i) {
	var r = n.toString();
	(n = this.g[r]), n || ((n = this.g[r] = []), this.h++);
	var o = fa(n, t, s, i);
	return (
		-1 < o
			? ((t = n[o]), e || (t.ea = !1))
			: ((t = new M_(t, this.src, r, !!s, i)), (t.ea = e), n.push(t)),
		t
	);
};
function da(n, t) {
	var e = t.type;
	if (e in n.g) {
		var s = n.g[e],
			i = Pd(s, t),
			r;
		(r = 0 <= i) && Array.prototype.splice.call(s, i, 1),
			r && (zr(t), n.g[e].length == 0 && (delete n.g[e], n.h--));
	}
}
function fa(n, t, e, s) {
	for (var i = 0; i < n.length; ++i) {
		var r = n[i];
		if (!r.ba && r.listener == t && r.capture == !!e && r.ha == s) return i;
	}
	return -1;
}
var ec = "closure_lm_" + ((1e6 * Math.random()) | 0),
	Vo = {};
function Vd(n, t, e, s, i) {
	if (s && s.once) return $d(n, t, e, s, i);
	if (Array.isArray(t)) {
		for (var r = 0; r < t.length; r++) Vd(n, t[r], e, s, i);
		return null;
	}
	return (
		(e = ic(e)),
		n && n[ii] ? n.N(t, e, si(s) ? !!s.capture : !!s, i) : zd(n, t, e, !1, s, i)
	);
}
function zd(n, t, e, s, i, r) {
	if (!t) throw Error("Invalid event type");
	var o = si(i) ? !!i.capture : !!i,
		a = sc(n);
	if ((a || (n[ec] = a = new $r(n)), (e = a.add(t, e, s, o, r)), e.proxy))
		return e;
	if (
		((s = A_()),
		(e.proxy = s),
		(s.src = n),
		(s.listener = e),
		n.addEventListener)
	)
		x_ || (i = o),
			i === void 0 && (i = !1),
			n.addEventListener(t.toString(), s, i);
	else if (n.attachEvent) n.attachEvent(jd(t.toString()), s);
	else if (n.addListener && n.removeListener) n.addListener(s);
	else throw Error("addEventListener and attachEvent are unavailable.");
	return e;
}
function A_() {
	function n(e) {
		return t.call(n.src, n.listener, e);
	}
	const t = D_;
	return n;
}
function $d(n, t, e, s, i) {
	if (Array.isArray(t)) {
		for (var r = 0; r < t.length; r++) $d(n, t[r], e, s, i);
		return null;
	}
	return (
		(e = ic(e)),
		n && n[ii] ? n.O(t, e, si(s) ? !!s.capture : !!s, i) : zd(n, t, e, !0, s, i)
	);
}
function Ud(n, t, e, s, i) {
	if (Array.isArray(t)) for (var r = 0; r < t.length; r++) Ud(n, t[r], e, s, i);
	else
		(s = si(s) ? !!s.capture : !!s),
			(e = ic(e)),
			n && n[ii]
				? ((n = n.i),
				  (t = String(t).toString()),
				  t in n.g &&
						((r = n.g[t]),
						(e = fa(r, e, s, i)),
						-1 < e &&
							(zr(r[e]),
							Array.prototype.splice.call(r, e, 1),
							r.length == 0 && (delete n.g[t], n.h--))))
				: n &&
				  (n = sc(n)) &&
				  ((t = n.g[t.toString()]),
				  (n = -1),
				  t && (n = fa(t, e, s, i)),
				  (e = -1 < n ? t[n] : null) && nc(e));
}
function nc(n) {
	if (typeof n != "number" && n && !n.ba) {
		var t = n.src;
		if (t && t[ii]) da(t.i, n);
		else {
			var e = n.type,
				s = n.proxy;
			t.removeEventListener
				? t.removeEventListener(e, s, n.capture)
				: t.detachEvent
				? t.detachEvent(jd(e), s)
				: t.addListener && t.removeListener && t.removeListener(s),
				(e = sc(t))
					? (da(e, n), e.h == 0 && ((e.src = null), (t[ec] = null)))
					: zr(n);
		}
	}
}
function jd(n) {
	return n in Vo ? Vo[n] : (Vo[n] = "on" + n);
}
function D_(n, t) {
	if (n.ba) n = !0;
	else {
		t = new js(t, this);
		var e = n.listener,
			s = n.ha || n.src;
		n.ea && nc(n), (n = e.call(s, t));
	}
	return n;
}
function sc(n) {
	return (n = n[ec]), n instanceof $r ? n : null;
}
var zo = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
function ic(n) {
	return typeof n == "function"
		? n
		: (n[zo] ||
				(n[zo] = function (t) {
					return n.handleEvent(t);
				}),
		  n[zo]);
}
function St() {
	Ge.call(this), (this.i = new $r(this)), (this.P = this), (this.I = null);
}
Ct(St, Ge);
St.prototype[ii] = !0;
St.prototype.removeEventListener = function (n, t, e, s) {
	Ud(this, n, t, e, s);
};
function kt(n, t) {
	var e,
		s = n.I;
	if (s) for (e = []; s; s = s.I) e.push(s);
	if (((n = n.P), (s = t.type || t), typeof t == "string")) t = new Rt(t, n);
	else if (t instanceof Rt) t.target = t.target || n;
	else {
		var i = t;
		(t = new Rt(s, n)), Bd(t, i);
	}
	if (((i = !0), e))
		for (var r = e.length - 1; 0 <= r; r--) {
			var o = (t.g = e[r]);
			i = Pi(o, s, !0, t) && i;
		}
	if (
		((o = t.g = n), (i = Pi(o, s, !0, t) && i), (i = Pi(o, s, !1, t) && i), e)
	)
		for (r = 0; r < e.length; r++) (o = t.g = e[r]), (i = Pi(o, s, !1, t) && i);
}
St.prototype.M = function () {
	if ((St.X.M.call(this), this.i)) {
		var n = this.i,
			t;
		for (t in n.g) {
			for (var e = n.g[t], s = 0; s < e.length; s++) zr(e[s]);
			delete n.g[t], n.h--;
		}
	}
	this.I = null;
};
St.prototype.N = function (n, t, e, s) {
	return this.i.add(String(n), t, !1, e, s);
};
St.prototype.O = function (n, t, e, s) {
	return this.i.add(String(n), t, !0, e, s);
};
function Pi(n, t, e, s) {
	if (((t = n.i.g[String(t)]), !t)) return !0;
	t = t.concat();
	for (var i = !0, r = 0; r < t.length; ++r) {
		var o = t[r];
		if (o && !o.ba && o.capture == e) {
			var a = o.listener,
				c = o.ha || o.src;
			o.ea && da(n.i, o), (i = a.call(c, s) !== !1 && i);
		}
	}
	return i && !s.defaultPrevented;
}
var rc = L.JSON.stringify;
function O_() {
	var n = qd;
	let t = null;
	return (
		n.g && ((t = n.g), (n.g = n.g.next), n.g || (n.h = null), (t.next = null)),
		t
	);
}
class P_ {
	constructor() {
		this.h = this.g = null;
	}
	add(t, e) {
		const s = Hd.get();
		s.set(t, e), this.h ? (this.h.next = s) : (this.g = s), (this.h = s);
	}
}
var Hd = new (class {
	constructor(n, t) {
		(this.i = n), (this.j = t), (this.h = 0), (this.g = null);
	}
	get() {
		let n;
		return (
			0 < this.h
				? (this.h--, (n = this.g), (this.g = n.next), (n.next = null))
				: (n = this.i()),
			n
		);
	}
})(
	() => new R_(),
	(n) => n.reset(),
);
class R_ {
	constructor() {
		this.next = this.g = this.h = null;
	}
	set(t, e) {
		(this.h = t), (this.g = e), (this.next = null);
	}
	reset() {
		this.next = this.g = this.h = null;
	}
}
function L_(n) {
	L.setTimeout(() => {
		throw n;
	}, 0);
}
function Wd(n, t) {
	ga || N_(), pa || (ga(), (pa = !0)), qd.add(n, t);
}
var ga;
function N_() {
	var n = L.Promise.resolve(void 0);
	ga = function () {
		n.then(F_);
	};
}
var pa = !1,
	qd = new P_();
function F_() {
	for (var n; (n = O_()); ) {
		try {
			n.h.call(n.g);
		} catch (e) {
			L_(e);
		}
		var t = Hd;
		t.j(n), 100 > t.h && (t.h++, (n.next = t.g), (t.g = n));
	}
	pa = !1;
}
function Ur(n, t) {
	St.call(this),
		(this.h = n || 1),
		(this.g = t || L),
		(this.j = Pt(this.lb, this)),
		(this.l = Date.now());
}
Ct(Ur, St);
A = Ur.prototype;
A.ca = !1;
A.R = null;
A.lb = function () {
	if (this.ca) {
		var n = Date.now() - this.l;
		0 < n && n < 0.8 * this.h
			? (this.R = this.g.setTimeout(this.j, this.h - n))
			: (this.R && (this.g.clearTimeout(this.R), (this.R = null)),
			  kt(this, "tick"),
			  this.ca && (oc(this), this.start()));
	}
};
A.start = function () {
	(this.ca = !0),
		this.R ||
			((this.R = this.g.setTimeout(this.j, this.h)), (this.l = Date.now()));
};
function oc(n) {
	(n.ca = !1), n.R && (n.g.clearTimeout(n.R), (n.R = null));
}
A.M = function () {
	Ur.X.M.call(this), oc(this), delete this.g;
};
function ac(n, t, e) {
	if (typeof n == "function") e && (n = Pt(n, e));
	else if (n && typeof n.handleEvent == "function") n = Pt(n.handleEvent, n);
	else throw Error("Invalid listener argument");
	return 2147483647 < Number(t) ? -1 : L.setTimeout(n, t || 0);
}
function Kd(n) {
	n.g = ac(() => {
		(n.g = null), n.i && ((n.i = !1), Kd(n));
	}, n.j);
	const t = n.h;
	(n.h = null), n.m.apply(null, t);
}
class B_ extends Ge {
	constructor(t, e) {
		super(),
			(this.m = t),
			(this.j = e),
			(this.h = null),
			(this.i = !1),
			(this.g = null);
	}
	l(t) {
		(this.h = arguments), this.g ? (this.i = !0) : Kd(this);
	}
	M() {
		super.M(),
			this.g &&
				(L.clearTimeout(this.g),
				(this.g = null),
				(this.i = !1),
				(this.h = null));
	}
}
function Hs(n) {
	Ge.call(this), (this.h = n), (this.g = {});
}
Ct(Hs, Ge);
var Ah = [];
function Yd(n, t, e, s) {
	Array.isArray(e) || (e && (Ah[0] = e.toString()), (e = Ah));
	for (var i = 0; i < e.length; i++) {
		var r = Vd(t, e[i], s || n.handleEvent, !1, n.h || n);
		if (!r) break;
		n.g[r.key] = r;
	}
}
function Gd(n) {
	tc(
		n.g,
		function (t, e) {
			this.g.hasOwnProperty(e) && nc(t);
		},
		n,
	),
		(n.g = {});
}
Hs.prototype.M = function () {
	Hs.X.M.call(this), Gd(this);
};
Hs.prototype.handleEvent = function () {
	throw Error("EventHandler.handleEvent not implemented");
};
function jr() {
	this.g = !0;
}
jr.prototype.Aa = function () {
	this.g = !1;
};
function V_(n, t, e, s, i, r) {
	n.info(function () {
		if (n.g)
			if (r)
				for (var o = "", a = r.split("&"), c = 0; c < a.length; c++) {
					var l = a[c].split("=");
					if (1 < l.length) {
						var h = l[0];
						l = l[1];
						var u = h.split("_");
						o =
							2 <= u.length && u[1] == "type"
								? o + (h + "=" + l + "&")
								: o + (h + "=redacted&");
					}
				}
			else o = null;
		else o = r;
		return (
			"XMLHTTP REQ (" +
			s +
			") [attempt " +
			i +
			"]: " +
			t +
			`
` +
			e +
			`
` +
			o
		);
	});
}
function z_(n, t, e, s, i, r, o) {
	n.info(function () {
		return (
			"XMLHTTP RESP (" +
			s +
			") [ attempt " +
			i +
			"]: " +
			t +
			`
` +
			e +
			`
` +
			r +
			" " +
			o
		);
	});
}
function On(n, t, e, s) {
	n.info(function () {
		return "XMLHTTP TEXT (" + t + "): " + U_(n, e) + (s ? " " + s : "");
	});
}
function $_(n, t) {
	n.info(function () {
		return "TIMEOUT: " + t;
	});
}
jr.prototype.info = function () {};
function U_(n, t) {
	if (!n.g) return t;
	if (!t) return null;
	try {
		var e = JSON.parse(t);
		if (e) {
			for (n = 0; n < e.length; n++)
				if (Array.isArray(e[n])) {
					var s = e[n];
					if (!(2 > s.length)) {
						var i = s[1];
						if (Array.isArray(i) && !(1 > i.length)) {
							var r = i[0];
							if (r != "noop" && r != "stop" && r != "close")
								for (var o = 1; o < i.length; o++) i[o] = "";
						}
					}
				}
		}
		return rc(e);
	} catch {
		return t;
	}
}
var En = {},
	Dh = null;
function Hr() {
	return (Dh = Dh || new St());
}
En.Pa = "serverreachability";
function Xd(n) {
	Rt.call(this, En.Pa, n);
}
Ct(Xd, Rt);
function Ws(n) {
	const t = Hr();
	kt(t, new Xd(t));
}
En.STAT_EVENT = "statevent";
function Qd(n, t) {
	Rt.call(this, En.STAT_EVENT, n), (this.stat = t);
}
Ct(Qd, Rt);
function Vt(n) {
	const t = Hr();
	kt(t, new Qd(t, n));
}
En.Qa = "timingevent";
function Jd(n, t) {
	Rt.call(this, En.Qa, n), (this.size = t);
}
Ct(Jd, Rt);
function ri(n, t) {
	if (typeof n != "function")
		throw Error("Fn must not be null and must be a function");
	return L.setTimeout(function () {
		n();
	}, t);
}
var Wr = {
		NO_ERROR: 0,
		mb: 1,
		zb: 2,
		yb: 3,
		tb: 4,
		xb: 5,
		Ab: 6,
		Ma: 7,
		TIMEOUT: 8,
		Db: 9,
	},
	Zd = {
		rb: "complete",
		Nb: "success",
		Na: "error",
		Ma: "abort",
		Fb: "ready",
		Gb: "readystatechange",
		TIMEOUT: "timeout",
		Bb: "incrementaldata",
		Eb: "progress",
		ub: "downloadprogress",
		Vb: "uploadprogress",
	};
function cc() {}
cc.prototype.h = null;
function Oh(n) {
	return n.h || (n.h = n.i());
}
function tf() {}
var oi = { OPEN: "a", qb: "b", Na: "c", Cb: "d" };
function lc() {
	Rt.call(this, "d");
}
Ct(lc, Rt);
function hc() {
	Rt.call(this, "c");
}
Ct(hc, Rt);
var ma;
function qr() {}
Ct(qr, cc);
qr.prototype.g = function () {
	return new XMLHttpRequest();
};
qr.prototype.i = function () {
	return {};
};
ma = new qr();
function ai(n, t, e, s) {
	(this.l = n),
		(this.j = t),
		(this.m = e),
		(this.U = s || 1),
		(this.S = new Hs(this)),
		(this.O = j_),
		(n = ha ? 125 : void 0),
		(this.T = new Ur(n)),
		(this.H = null),
		(this.i = !1),
		(this.s = this.A = this.v = this.K = this.F = this.V = this.B = null),
		(this.D = []),
		(this.g = null),
		(this.C = 0),
		(this.o = this.u = null),
		(this.Y = -1),
		(this.I = !1),
		(this.N = 0),
		(this.L = null),
		(this.$ = this.J = this.Z = this.P = !1),
		(this.h = new ef());
}
function ef() {
	(this.i = null), (this.g = ""), (this.h = !1);
}
var j_ = 45e3,
	ya = {},
	mr = {};
A = ai.prototype;
A.setTimeout = function (n) {
	this.O = n;
};
function ba(n, t, e) {
	(n.K = 1), (n.v = Yr(we(t))), (n.s = e), (n.P = !0), nf(n, null);
}
function nf(n, t) {
	(n.F = Date.now()), ci(n), (n.A = we(n.v));
	var e = n.A,
		s = n.U;
	Array.isArray(s) || (s = [String(s)]),
		uf(e.i, "t", s),
		(n.C = 0),
		(e = n.l.H),
		(n.h = new ef()),
		(n.g = Of(n.l, e ? t : null, !n.s)),
		0 < n.N && (n.L = new B_(Pt(n.La, n, n.g), n.N)),
		Yd(n.S, n.g, "readystatechange", n.ib),
		(t = n.H ? Fd(n.H) : {}),
		n.s
			? (n.u || (n.u = "POST"),
			  (t["Content-Type"] = "application/x-www-form-urlencoded"),
			  n.g.da(n.A, n.u, n.s, t))
			: ((n.u = "GET"), n.g.da(n.A, n.u, null, t)),
		Ws(),
		V_(n.j, n.u, n.A, n.m, n.U, n.s);
}
A.ib = function (n) {
	n = n.target;
	const t = this.L;
	t && be(n) == 3 ? t.l() : this.La(n);
};
A.La = function (n) {
	try {
		if (n == this.g)
			t: {
				const h = be(this.g);
				var t = this.g.Ea();
				const u = this.g.aa();
				if (
					!(3 > h) &&
					(h != 3 || ha || (this.g && (this.h.h || this.g.fa() || Nh(this.g))))
				) {
					this.I || h != 4 || t == 7 || (t == 8 || 0 >= u ? Ws(3) : Ws(2)),
						Kr(this);
					var e = this.g.aa();
					this.Y = e;
					e: if (sf(this)) {
						var s = Nh(this.g);
						n = "";
						var i = s.length,
							r = be(this.g) == 4;
						if (!this.h.i) {
							if (typeof TextDecoder > "u") {
								cn(this), ks(this);
								var o = "";
								break e;
							}
							this.h.i = new L.TextDecoder();
						}
						for (t = 0; t < i; t++)
							(this.h.h = !0),
								(n += this.h.i.decode(s[t], { stream: r && t == i - 1 }));
						s.splice(0, i), (this.h.g += n), (this.C = 0), (o = this.h.g);
					} else o = this.g.fa();
					if (
						((this.i = e == 200),
						z_(this.j, this.u, this.A, this.m, this.U, h, e),
						this.i)
					) {
						if (this.Z && !this.J) {
							e: {
								if (this.g) {
									var a,
										c = this.g;
									if (
										(a = c.g
											? c.g.getResponseHeader("X-HTTP-Initial-Response")
											: null) &&
										!gr(a)
									) {
										var l = a;
										break e;
									}
								}
								l = null;
							}
							if ((e = l))
								On(
									this.j,
									this.m,
									e,
									"Initial handshake response via X-HTTP-Initial-Response",
								),
									(this.J = !0),
									va(this, e);
							else {
								(this.i = !1), (this.o = 3), Vt(12), cn(this), ks(this);
								break t;
							}
						}
						this.P
							? (rf(this, h, o),
							  ha &&
									this.i &&
									h == 3 &&
									(Yd(this.S, this.T, "tick", this.hb), this.T.start()))
							: (On(this.j, this.m, o, null), va(this, o)),
							h == 4 && cn(this),
							this.i &&
								!this.I &&
								(h == 4 ? If(this.l, this) : ((this.i = !1), ci(this)));
					} else
						e == 400 && 0 < o.indexOf("Unknown SID")
							? ((this.o = 3), Vt(12))
							: ((this.o = 0), Vt(13)),
							cn(this),
							ks(this);
				}
			}
	} catch {
	} finally {
	}
};
function sf(n) {
	return n.g ? n.u == "GET" && n.K != 2 && n.l.Da : !1;
}
function rf(n, t, e) {
	let s = !0,
		i;
	for (; !n.I && n.C < e.length; )
		if (((i = H_(n, e)), i == mr)) {
			t == 4 && ((n.o = 4), Vt(14), (s = !1)),
				On(n.j, n.m, null, "[Incomplete Response]");
			break;
		} else if (i == ya) {
			(n.o = 4), Vt(15), On(n.j, n.m, e, "[Invalid Chunk]"), (s = !1);
			break;
		} else On(n.j, n.m, i, null), va(n, i);
	sf(n) && i != mr && i != ya && ((n.h.g = ""), (n.C = 0)),
		t != 4 || e.length != 0 || n.h.h || ((n.o = 1), Vt(16), (s = !1)),
		(n.i = n.i && s),
		s
			? 0 < e.length &&
			  !n.$ &&
			  ((n.$ = !0),
			  (t = n.l),
			  t.g == n &&
					t.$ &&
					!t.K &&
					(t.j.info(
						"Great, no buffering proxy detected. Bytes received: " + e.length,
					),
					yc(t),
					(t.K = !0),
					Vt(11)))
			: (On(n.j, n.m, e, "[Invalid Chunked Response]"), cn(n), ks(n));
}
A.hb = function () {
	if (this.g) {
		var n = be(this.g),
			t = this.g.fa();
		this.C < t.length &&
			(Kr(this), rf(this, n, t), this.i && n != 4 && ci(this));
	}
};
function H_(n, t) {
	var e = n.C,
		s = t.indexOf(
			`
`,
			e,
		);
	return s == -1
		? mr
		: ((e = Number(t.substring(e, s))),
		  isNaN(e)
				? ya
				: ((s += 1),
				  s + e > t.length ? mr : ((t = t.substr(s, e)), (n.C = s + e), t)));
}
A.cancel = function () {
	(this.I = !0), cn(this);
};
function ci(n) {
	(n.V = Date.now() + n.O), of(n, n.O);
}
function of(n, t) {
	if (n.B != null) throw Error("WatchDog timer not null");
	n.B = ri(Pt(n.gb, n), t);
}
function Kr(n) {
	n.B && (L.clearTimeout(n.B), (n.B = null));
}
A.gb = function () {
	this.B = null;
	const n = Date.now();
	0 <= n - this.V
		? ($_(this.j, this.A),
		  this.K != 2 && (Ws(), Vt(17)),
		  cn(this),
		  (this.o = 2),
		  ks(this))
		: of(this, this.V - n);
};
function ks(n) {
	n.l.G == 0 || n.I || If(n.l, n);
}
function cn(n) {
	Kr(n);
	var t = n.L;
	t && typeof t.na == "function" && t.na(),
		(n.L = null),
		oc(n.T),
		Gd(n.S),
		n.g && ((t = n.g), (n.g = null), t.abort(), t.na());
}
function va(n, t) {
	try {
		var e = n.l;
		if (e.G != 0 && (e.g == n || xa(e.h, n))) {
			if (!n.J && xa(e.h, n) && e.G == 3) {
				try {
					var s = e.Fa.g.parse(t);
				} catch {
					s = null;
				}
				if (Array.isArray(s) && s.length == 3) {
					var i = s;
					if (i[0] == 0) {
						t: if (!e.u) {
							if (e.g)
								if (e.g.F + 3e3 < n.F) vr(e), Qr(e);
								else break t;
							mc(e), Vt(18);
						}
					} else
						(e.Ba = i[1]),
							0 < e.Ba - e.T &&
								37500 > i[2] &&
								e.L &&
								e.A == 0 &&
								!e.v &&
								(e.v = ri(Pt(e.cb, e), 6e3));
					if (1 >= gf(e.h) && e.ja) {
						try {
							e.ja();
						} catch {}
						e.ja = void 0;
					}
				} else ln(e, 11);
			} else if (((n.J || e.g == n) && vr(e), !gr(t)))
				for (i = e.Fa.g.parse(t), t = 0; t < i.length; t++) {
					let l = i[t];
					if (((e.T = l[0]), (l = l[1]), e.G == 2))
						if (l[0] == "c") {
							(e.I = l[1]), (e.ka = l[2]);
							const h = l[3];
							h != null && ((e.ma = h), e.j.info("VER=" + e.ma));
							const u = l[4];
							u != null && ((e.Ca = u), e.j.info("SVER=" + e.Ca));
							const d = l[5];
							d != null &&
								typeof d == "number" &&
								0 < d &&
								((s = 1.5 * d),
								(e.J = s),
								e.j.info("backChannelRequestTimeoutMs_=" + s)),
								(s = e);
							const f = n.g;
							if (f) {
								const g = f.g
									? f.g.getResponseHeader("X-Client-Wire-Protocol")
									: null;
								if (g) {
									var r = s.h;
									r.g ||
										(g.indexOf("spdy") == -1 &&
											g.indexOf("quic") == -1 &&
											g.indexOf("h2") == -1) ||
										((r.j = r.l),
										(r.g = new Set()),
										r.h && (uc(r, r.h), (r.h = null)));
								}
								if (s.D) {
									const p = f.g
										? f.g.getResponseHeader("X-HTTP-Session-Id")
										: null;
									p && ((s.za = p), nt(s.F, s.D, p));
								}
							}
							(e.G = 3),
								e.l && e.l.xa(),
								e.$ &&
									((e.P = Date.now() - n.F),
									e.j.info("Handshake RTT: " + e.P + "ms")),
								(s = e);
							var o = n;
							if (((s.sa = Df(s, s.H ? s.ka : null, s.V)), o.J)) {
								pf(s.h, o);
								var a = o,
									c = s.J;
								c && a.setTimeout(c), a.B && (Kr(a), ci(a)), (s.g = o);
							} else Cf(s);
							0 < e.i.length && Jr(e);
						} else (l[0] != "stop" && l[0] != "close") || ln(e, 7);
					else
						e.G == 3 &&
							(l[0] == "stop" || l[0] == "close"
								? l[0] == "stop"
									? ln(e, 7)
									: pc(e)
								: l[0] != "noop" && e.l && e.l.wa(l),
							(e.A = 0));
				}
		}
		Ws(4);
	} catch {}
}
function W_(n) {
	if (n.W && typeof n.W == "function") return n.W();
	if (
		(typeof Map < "u" && n instanceof Map) ||
		(typeof Set < "u" && n instanceof Set)
	)
		return Array.from(n.values());
	if (typeof n == "string") return n.split("");
	if (Br(n)) {
		for (var t = [], e = n.length, s = 0; s < e; s++) t.push(n[s]);
		return t;
	}
	(t = []), (e = 0);
	for (s in n) t[e++] = n[s];
	return t;
}
function q_(n) {
	if (n.oa && typeof n.oa == "function") return n.oa();
	if (!n.W || typeof n.W != "function") {
		if (typeof Map < "u" && n instanceof Map) return Array.from(n.keys());
		if (!(typeof Set < "u" && n instanceof Set)) {
			if (Br(n) || typeof n == "string") {
				var t = [];
				n = n.length;
				for (var e = 0; e < n; e++) t.push(e);
				return t;
			}
			(t = []), (e = 0);
			for (const s in n) t[e++] = s;
			return t;
		}
	}
}
function af(n, t) {
	if (n.forEach && typeof n.forEach == "function") n.forEach(t, void 0);
	else if (Br(n) || typeof n == "string")
		Array.prototype.forEach.call(n, t, void 0);
	else
		for (var e = q_(n), s = W_(n), i = s.length, r = 0; r < i; r++)
			t.call(void 0, s[r], e && e[r], n);
}
var cf = RegExp(
	"^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$",
);
function K_(n, t) {
	if (n) {
		n = n.split("&");
		for (var e = 0; e < n.length; e++) {
			var s = n[e].indexOf("="),
				i = null;
			if (0 <= s) {
				var r = n[e].substring(0, s);
				i = n[e].substring(s + 1);
			} else r = n[e];
			t(r, i ? decodeURIComponent(i.replace(/\+/g, " ")) : "");
		}
	}
}
function fn(n, t) {
	if (
		((this.g = this.s = this.j = ""),
		(this.m = null),
		(this.o = this.l = ""),
		(this.h = !1),
		n instanceof fn)
	) {
		(this.h = t !== void 0 ? t : n.h),
			yr(this, n.j),
			(this.s = n.s),
			(this.g = n.g),
			br(this, n.m),
			(this.l = n.l),
			(t = n.i);
		var e = new qs();
		(e.i = t.i),
			t.g && ((e.g = new Map(t.g)), (e.h = t.h)),
			Ph(this, e),
			(this.o = n.o);
	} else
		n && (e = String(n).match(cf))
			? ((this.h = !!t),
			  yr(this, e[1] || "", !0),
			  (this.s = bs(e[2] || "")),
			  (this.g = bs(e[3] || "", !0)),
			  br(this, e[4]),
			  (this.l = bs(e[5] || "", !0)),
			  Ph(this, e[6] || "", !0),
			  (this.o = bs(e[7] || "")))
			: ((this.h = !!t), (this.i = new qs(null, this.h)));
}
fn.prototype.toString = function () {
	var n = [],
		t = this.j;
	t && n.push(vs(t, Rh, !0), ":");
	var e = this.g;
	return (
		(e || t == "file") &&
			(n.push("//"),
			(t = this.s) && n.push(vs(t, Rh, !0), "@"),
			n.push(
				encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g, "%$1"),
			),
			(e = this.m),
			e != null && n.push(":", String(e))),
		(e = this.l) &&
			(this.g && e.charAt(0) != "/" && n.push("/"),
			n.push(vs(e, e.charAt(0) == "/" ? X_ : G_, !0))),
		(e = this.i.toString()) && n.push("?", e),
		(e = this.o) && n.push("#", vs(e, J_)),
		n.join("")
	);
};
function we(n) {
	return new fn(n);
}
function yr(n, t, e) {
	(n.j = e ? bs(t, !0) : t), n.j && (n.j = n.j.replace(/:$/, ""));
}
function br(n, t) {
	if (t) {
		if (((t = Number(t)), isNaN(t) || 0 > t))
			throw Error("Bad port number " + t);
		n.m = t;
	} else n.m = null;
}
function Ph(n, t, e) {
	t instanceof qs
		? ((n.i = t), Z_(n.i, n.h))
		: (e || (t = vs(t, Q_)), (n.i = new qs(t, n.h)));
}
function nt(n, t, e) {
	n.i.set(t, e);
}
function Yr(n) {
	return (
		nt(
			n,
			"zx",
			Math.floor(2147483648 * Math.random()).toString(36) +
				Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(
					36,
				),
		),
		n
	);
}
function bs(n, t) {
	return n
		? t
			? decodeURI(n.replace(/%25/g, "%2525"))
			: decodeURIComponent(n)
		: "";
}
function vs(n, t, e) {
	return typeof n == "string"
		? ((n = encodeURI(n).replace(t, Y_)),
		  e && (n = n.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
		  n)
		: null;
}
function Y_(n) {
	return (
		(n = n.charCodeAt(0)),
		"%" + ((n >> 4) & 15).toString(16) + (n & 15).toString(16)
	);
}
var Rh = /[#\/\?@]/g,
	G_ = /[#\?:]/g,
	X_ = /[#\?]/g,
	Q_ = /[#\?@]/g,
	J_ = /#/g;
function qs(n, t) {
	(this.h = this.g = null), (this.i = n || null), (this.j = !!t);
}
function Xe(n) {
	n.g ||
		((n.g = new Map()),
		(n.h = 0),
		n.i &&
			K_(n.i, function (t, e) {
				n.add(decodeURIComponent(t.replace(/\+/g, " ")), e);
			}));
}
A = qs.prototype;
A.add = function (n, t) {
	Xe(this), (this.i = null), (n = Xn(this, n));
	var e = this.g.get(n);
	return e || this.g.set(n, (e = [])), e.push(t), (this.h += 1), this;
};
function lf(n, t) {
	Xe(n),
		(t = Xn(n, t)),
		n.g.has(t) && ((n.i = null), (n.h -= n.g.get(t).length), n.g.delete(t));
}
function hf(n, t) {
	return Xe(n), (t = Xn(n, t)), n.g.has(t);
}
A.forEach = function (n, t) {
	Xe(this),
		this.g.forEach(function (e, s) {
			e.forEach(function (i) {
				n.call(t, i, s, this);
			}, this);
		}, this);
};
A.oa = function () {
	Xe(this);
	const n = Array.from(this.g.values()),
		t = Array.from(this.g.keys()),
		e = [];
	for (let s = 0; s < t.length; s++) {
		const i = n[s];
		for (let r = 0; r < i.length; r++) e.push(t[s]);
	}
	return e;
};
A.W = function (n) {
	Xe(this);
	let t = [];
	if (typeof n == "string")
		hf(this, n) && (t = t.concat(this.g.get(Xn(this, n))));
	else {
		n = Array.from(this.g.values());
		for (let e = 0; e < n.length; e++) t = t.concat(n[e]);
	}
	return t;
};
A.set = function (n, t) {
	return (
		Xe(this),
		(this.i = null),
		(n = Xn(this, n)),
		hf(this, n) && (this.h -= this.g.get(n).length),
		this.g.set(n, [t]),
		(this.h += 1),
		this
	);
};
A.get = function (n, t) {
	return n ? ((n = this.W(n)), 0 < n.length ? String(n[0]) : t) : t;
};
function uf(n, t, e) {
	lf(n, t),
		0 < e.length && ((n.i = null), n.g.set(Xn(n, t), Ja(e)), (n.h += e.length));
}
A.toString = function () {
	if (this.i) return this.i;
	if (!this.g) return "";
	const n = [],
		t = Array.from(this.g.keys());
	for (var e = 0; e < t.length; e++) {
		var s = t[e];
		const r = encodeURIComponent(String(s)),
			o = this.W(s);
		for (s = 0; s < o.length; s++) {
			var i = r;
			o[s] !== "" && (i += "=" + encodeURIComponent(String(o[s]))), n.push(i);
		}
	}
	return (this.i = n.join("&"));
};
function Xn(n, t) {
	return (t = String(t)), n.j && (t = t.toLowerCase()), t;
}
function Z_(n, t) {
	t &&
		!n.j &&
		(Xe(n),
		(n.i = null),
		n.g.forEach(function (e, s) {
			var i = s.toLowerCase();
			s != i && (lf(this, s), uf(this, i, e));
		}, n)),
		(n.j = t);
}
var tw = class {
	constructor(t, e) {
		(this.h = t), (this.g = e);
	}
};
function df(n) {
	(this.l = n || ew),
		L.PerformanceNavigationTiming
			? ((n = L.performance.getEntriesByType("navigation")),
			  (n =
					0 < n.length &&
					(n[0].nextHopProtocol == "hq" || n[0].nextHopProtocol == "h2")))
			: (n = !!(L.g && L.g.Ga && L.g.Ga() && L.g.Ga().$b)),
		(this.j = n ? this.l : 1),
		(this.g = null),
		1 < this.j && (this.g = new Set()),
		(this.h = null),
		(this.i = []);
}
var ew = 10;
function ff(n) {
	return n.h ? !0 : n.g ? n.g.size >= n.j : !1;
}
function gf(n) {
	return n.h ? 1 : n.g ? n.g.size : 0;
}
function xa(n, t) {
	return n.h ? n.h == t : n.g ? n.g.has(t) : !1;
}
function uc(n, t) {
	n.g ? n.g.add(t) : (n.h = t);
}
function pf(n, t) {
	n.h && n.h == t ? (n.h = null) : n.g && n.g.has(t) && n.g.delete(t);
}
df.prototype.cancel = function () {
	if (((this.i = mf(this)), this.h)) this.h.cancel(), (this.h = null);
	else if (this.g && this.g.size !== 0) {
		for (const n of this.g.values()) n.cancel();
		this.g.clear();
	}
};
function mf(n) {
	if (n.h != null) return n.i.concat(n.h.D);
	if (n.g != null && n.g.size !== 0) {
		let t = n.i;
		for (const e of n.g.values()) t = t.concat(e.D);
		return t;
	}
	return Ja(n.i);
}
function dc() {}
dc.prototype.stringify = function (n) {
	return L.JSON.stringify(n, void 0);
};
dc.prototype.parse = function (n) {
	return L.JSON.parse(n, void 0);
};
function nw() {
	this.g = new dc();
}
function sw(n, t, e) {
	const s = e || "";
	try {
		af(n, function (i, r) {
			let o = i;
			si(i) && (o = rc(i)), t.push(s + r + "=" + encodeURIComponent(o));
		});
	} catch (i) {
		throw (t.push(s + "type=" + encodeURIComponent("_badmap")), i);
	}
}
function iw(n, t) {
	const e = new jr();
	if (L.Image) {
		const s = new Image();
		(s.onload = Oi(Ri, e, s, "TestLoadImage: loaded", !0, t)),
			(s.onerror = Oi(Ri, e, s, "TestLoadImage: error", !1, t)),
			(s.onabort = Oi(Ri, e, s, "TestLoadImage: abort", !1, t)),
			(s.ontimeout = Oi(Ri, e, s, "TestLoadImage: timeout", !1, t)),
			L.setTimeout(function () {
				s.ontimeout && s.ontimeout();
			}, 1e4),
			(s.src = n);
	} else t(!1);
}
function Ri(n, t, e, s, i) {
	try {
		(t.onload = null),
			(t.onerror = null),
			(t.onabort = null),
			(t.ontimeout = null),
			i(s);
	} catch {}
}
function li(n) {
	(this.l = n.ac || null), (this.j = n.jb || !1);
}
Ct(li, cc);
li.prototype.g = function () {
	return new Gr(this.l, this.j);
};
li.prototype.i = (function (n) {
	return function () {
		return n;
	};
})({});
function Gr(n, t) {
	St.call(this),
		(this.D = n),
		(this.u = t),
		(this.m = void 0),
		(this.readyState = fc),
		(this.status = 0),
		(this.responseType =
			this.responseText =
			this.response =
			this.statusText =
				""),
		(this.onreadystatechange = null),
		(this.v = new Headers()),
		(this.h = null),
		(this.C = "GET"),
		(this.B = ""),
		(this.g = !1),
		(this.A = this.j = this.l = null);
}
Ct(Gr, St);
var fc = 0;
A = Gr.prototype;
A.open = function (n, t) {
	if (this.readyState != fc)
		throw (this.abort(), Error("Error reopening a connection"));
	(this.C = n), (this.B = t), (this.readyState = 1), Ks(this);
};
A.send = function (n) {
	if (this.readyState != 1)
		throw (this.abort(), Error("need to call open() first. "));
	this.g = !0;
	const t = {
		headers: this.v,
		method: this.C,
		credentials: this.m,
		cache: void 0,
	};
	n && (t.body = n),
		(this.D || L)
			.fetch(new Request(this.B, t))
			.then(this.Wa.bind(this), this.ga.bind(this));
};
A.abort = function () {
	(this.response = this.responseText = ""),
		(this.v = new Headers()),
		(this.status = 0),
		this.j && this.j.cancel("Request was aborted.").catch(() => {}),
		1 <= this.readyState &&
			this.g &&
			this.readyState != 4 &&
			((this.g = !1), hi(this)),
		(this.readyState = fc);
};
A.Wa = function (n) {
	if (
		this.g &&
		((this.l = n),
		this.h ||
			((this.status = this.l.status),
			(this.statusText = this.l.statusText),
			(this.h = n.headers),
			(this.readyState = 2),
			Ks(this)),
		this.g && ((this.readyState = 3), Ks(this), this.g))
	)
		if (this.responseType === "arraybuffer")
			n.arrayBuffer().then(this.Ua.bind(this), this.ga.bind(this));
		else if (typeof L.ReadableStream < "u" && "body" in n) {
			if (((this.j = n.body.getReader()), this.u)) {
				if (this.responseType)
					throw Error(
						'responseType must be empty for "streamBinaryChunks" mode responses.',
					);
				this.response = [];
			} else
				(this.response = this.responseText = ""), (this.A = new TextDecoder());
			yf(this);
		} else n.text().then(this.Va.bind(this), this.ga.bind(this));
};
function yf(n) {
	n.j.read().then(n.Ta.bind(n)).catch(n.ga.bind(n));
}
A.Ta = function (n) {
	if (this.g) {
		if (this.u && n.value) this.response.push(n.value);
		else if (!this.u) {
			var t = n.value ? n.value : new Uint8Array(0);
			(t = this.A.decode(t, { stream: !n.done })) &&
				(this.response = this.responseText += t);
		}
		n.done ? hi(this) : Ks(this), this.readyState == 3 && yf(this);
	}
};
A.Va = function (n) {
	this.g && ((this.response = this.responseText = n), hi(this));
};
A.Ua = function (n) {
	this.g && ((this.response = n), hi(this));
};
A.ga = function () {
	this.g && hi(this);
};
function hi(n) {
	(n.readyState = 4), (n.l = null), (n.j = null), (n.A = null), Ks(n);
}
A.setRequestHeader = function (n, t) {
	this.v.append(n, t);
};
A.getResponseHeader = function (n) {
	return (this.h && this.h.get(n.toLowerCase())) || "";
};
A.getAllResponseHeaders = function () {
	if (!this.h) return "";
	const n = [],
		t = this.h.entries();
	for (var e = t.next(); !e.done; )
		(e = e.value), n.push(e[0] + ": " + e[1]), (e = t.next());
	return n.join(`\r
`);
};
function Ks(n) {
	n.onreadystatechange && n.onreadystatechange.call(n);
}
Object.defineProperty(Gr.prototype, "withCredentials", {
	get: function () {
		return this.m === "include";
	},
	set: function (n) {
		this.m = n ? "include" : "same-origin";
	},
});
var rw = L.JSON.parse;
function ct(n) {
	St.call(this),
		(this.headers = new Map()),
		(this.u = n || null),
		(this.h = !1),
		(this.C = this.g = null),
		(this.H = ""),
		(this.m = 0),
		(this.j = ""),
		(this.l = this.F = this.v = this.D = !1),
		(this.B = 0),
		(this.A = null),
		(this.J = bf),
		(this.K = this.L = !1);
}
Ct(ct, St);
var bf = "",
	ow = /^https?$/i,
	aw = ["POST", "PUT"];
A = ct.prototype;
A.Ka = function (n) {
	this.L = n;
};
A.da = function (n, t, e, s) {
	if (this.g)
		throw Error(
			"[goog.net.XhrIo] Object is active with another request=" +
				this.H +
				"; newUri=" +
				n,
		);
	(t = t ? t.toUpperCase() : "GET"),
		(this.H = n),
		(this.j = ""),
		(this.m = 0),
		(this.D = !1),
		(this.h = !0),
		(this.g = this.u ? this.u.g() : ma.g()),
		(this.C = this.u ? Oh(this.u) : Oh(ma)),
		(this.g.onreadystatechange = Pt(this.Ha, this));
	try {
		(this.F = !0), this.g.open(t, String(n), !0), (this.F = !1);
	} catch (r) {
		Lh(this, r);
		return;
	}
	if (((n = e || ""), (e = new Map(this.headers)), s))
		if (Object.getPrototypeOf(s) === Object.prototype)
			for (var i in s) e.set(i, s[i]);
		else if (typeof s.keys == "function" && typeof s.get == "function")
			for (const r of s.keys()) e.set(r, s.get(r));
		else throw Error("Unknown input type for opt_headers: " + String(s));
	(s = Array.from(e.keys()).find((r) => r.toLowerCase() == "content-type")),
		(i = L.FormData && n instanceof L.FormData),
		!(0 <= Pd(aw, t)) ||
			s ||
			i ||
			e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
	for (const [r, o] of e) this.g.setRequestHeader(r, o);
	this.J && (this.g.responseType = this.J),
		"withCredentials" in this.g &&
			this.g.withCredentials !== this.L &&
			(this.g.withCredentials = this.L);
	try {
		_f(this),
			0 < this.B &&
				((this.K = cw(this.g))
					? ((this.g.timeout = this.B), (this.g.ontimeout = Pt(this.qa, this)))
					: (this.A = ac(this.qa, this.B, this))),
			(this.v = !0),
			this.g.send(n),
			(this.v = !1);
	} catch (r) {
		Lh(this, r);
	}
};
function cw(n) {
	return zn && k_() && typeof n.timeout == "number" && n.ontimeout !== void 0;
}
A.qa = function () {
	typeof Qa < "u" &&
		this.g &&
		((this.j = "Timed out after " + this.B + "ms, aborting"),
		(this.m = 8),
		kt(this, "timeout"),
		this.abort(8));
};
function Lh(n, t) {
	(n.h = !1),
		n.g && ((n.l = !0), n.g.abort(), (n.l = !1)),
		(n.j = t),
		(n.m = 5),
		vf(n),
		Xr(n);
}
function vf(n) {
	n.D || ((n.D = !0), kt(n, "complete"), kt(n, "error"));
}
A.abort = function (n) {
	this.g &&
		this.h &&
		((this.h = !1),
		(this.l = !0),
		this.g.abort(),
		(this.l = !1),
		(this.m = n || 7),
		kt(this, "complete"),
		kt(this, "abort"),
		Xr(this));
};
A.M = function () {
	this.g &&
		(this.h && ((this.h = !1), (this.l = !0), this.g.abort(), (this.l = !1)),
		Xr(this, !0)),
		ct.X.M.call(this);
};
A.Ha = function () {
	this.s || (this.F || this.v || this.l ? xf(this) : this.fb());
};
A.fb = function () {
	xf(this);
};
function xf(n) {
	if (n.h && typeof Qa < "u" && (!n.C[1] || be(n) != 4 || n.aa() != 2)) {
		if (n.v && be(n) == 4) ac(n.Ha, 0, n);
		else if ((kt(n, "readystatechange"), be(n) == 4)) {
			n.h = !1;
			try {
				const a = n.aa();
				t: switch (a) {
					case 200:
					case 201:
					case 202:
					case 204:
					case 206:
					case 304:
					case 1223:
						var t = !0;
						break t;
					default:
						t = !1;
				}
				var e;
				if (!(e = t)) {
					var s;
					if ((s = a === 0)) {
						var i = String(n.H).match(cf)[1] || null;
						if (!i && L.self && L.self.location) {
							var r = L.self.location.protocol;
							i = r.substr(0, r.length - 1);
						}
						s = !ow.test(i ? i.toLowerCase() : "");
					}
					e = s;
				}
				if (e) kt(n, "complete"), kt(n, "success");
				else {
					n.m = 6;
					try {
						var o = 2 < be(n) ? n.g.statusText : "";
					} catch {
						o = "";
					}
					(n.j = o + " [" + n.aa() + "]"), vf(n);
				}
			} finally {
				Xr(n);
			}
		}
	}
}
function Xr(n, t) {
	if (n.g) {
		_f(n);
		const e = n.g,
			s = n.C[0] ? fr : null;
		(n.g = null), (n.C = null), t || kt(n, "ready");
		try {
			e.onreadystatechange = s;
		} catch {}
	}
}
function _f(n) {
	n.g && n.K && (n.g.ontimeout = null),
		n.A && (L.clearTimeout(n.A), (n.A = null));
}
function be(n) {
	return n.g ? n.g.readyState : 0;
}
A.aa = function () {
	try {
		return 2 < be(this) ? this.g.status : -1;
	} catch {
		return -1;
	}
};
A.fa = function () {
	try {
		return this.g ? this.g.responseText : "";
	} catch {
		return "";
	}
};
A.Sa = function (n) {
	if (this.g) {
		var t = this.g.responseText;
		return n && t.indexOf(n) == 0 && (t = t.substring(n.length)), rw(t);
	}
};
function Nh(n) {
	try {
		if (!n.g) return null;
		if ("response" in n.g) return n.g.response;
		switch (n.J) {
			case bf:
			case "text":
				return n.g.responseText;
			case "arraybuffer":
				if ("mozResponseArrayBuffer" in n.g) return n.g.mozResponseArrayBuffer;
		}
		return null;
	} catch {
		return null;
	}
}
A.Ea = function () {
	return this.m;
};
A.Oa = function () {
	return typeof this.j == "string" ? this.j : String(this.j);
};
function wf(n) {
	let t = "";
	return (
		tc(n, function (e, s) {
			(t += s),
				(t += ":"),
				(t += e),
				(t += `\r
`);
		}),
		t
	);
}
function gc(n, t, e) {
	t: {
		for (s in e) {
			var s = !1;
			break t;
		}
		s = !0;
	}
	s ||
		((e = wf(e)),
		typeof n == "string"
			? e != null && encodeURIComponent(String(e))
			: nt(n, t, e));
}
function ds(n, t, e) {
	return (e && e.internalChannelParams && e.internalChannelParams[n]) || t;
}
function Sf(n) {
	(this.Ca = 0),
		(this.i = []),
		(this.j = new jr()),
		(this.ka =
			this.sa =
			this.F =
			this.V =
			this.g =
			this.za =
			this.D =
			this.ia =
			this.o =
			this.S =
			this.s =
				null),
		(this.ab = this.U = 0),
		(this.Za = ds("failFast", !1, n)),
		(this.L = this.v = this.u = this.m = this.l = null),
		(this.Y = !0),
		(this.pa = this.Ba = this.T = -1),
		(this.Z = this.A = this.C = 0),
		(this.Xa = ds("baseRetryDelayMs", 5e3, n)),
		(this.bb = ds("retryDelaySeedMs", 1e4, n)),
		(this.$a = ds("forwardChannelMaxRetries", 2, n)),
		(this.ta = ds("forwardChannelRequestTimeoutMs", 2e4, n)),
		(this.ra = (n && n.xmlHttpFactory) || void 0),
		(this.Da = (n && n.Zb) || !1),
		(this.J = void 0),
		(this.H = (n && n.supportsCrossDomainXhr) || !1),
		(this.I = ""),
		(this.h = new df(n && n.concurrentRequestLimit)),
		(this.Fa = new nw()),
		(this.O = (n && n.fastHandshake) || !1),
		(this.N = (n && n.encodeInitMessageHeaders) || !1),
		this.O && this.N && (this.N = !1),
		(this.Ya = (n && n.Xb) || !1),
		n && n.Aa && this.j.Aa(),
		n && n.forceLongPolling && (this.Y = !1),
		(this.$ = (!this.O && this.Y && n && n.detectBufferingProxy) || !1),
		(this.ja = void 0),
		(this.P = 0),
		(this.K = !1),
		(this.la = this.B = null);
}
A = Sf.prototype;
A.ma = 8;
A.G = 1;
function pc(n) {
	if ((Ef(n), n.G == 3)) {
		var t = n.U++,
			e = we(n.F);
		nt(e, "SID", n.I),
			nt(e, "RID", t),
			nt(e, "TYPE", "terminate"),
			ui(n, e),
			(t = new ai(n, n.j, t, void 0)),
			(t.K = 2),
			(t.v = Yr(we(e))),
			(e = !1),
			L.navigator &&
				L.navigator.sendBeacon &&
				(e = L.navigator.sendBeacon(t.v.toString(), "")),
			!e && L.Image && ((new Image().src = t.v), (e = !0)),
			e || ((t.g = Of(t.l, null)), t.g.da(t.v)),
			(t.F = Date.now()),
			ci(t);
	}
	Af(n);
}
function Qr(n) {
	n.g && (yc(n), n.g.cancel(), (n.g = null));
}
function Ef(n) {
	Qr(n),
		n.u && (L.clearTimeout(n.u), (n.u = null)),
		vr(n),
		n.h.cancel(),
		n.m && (typeof n.m == "number" && L.clearTimeout(n.m), (n.m = null));
}
function Jr(n) {
	ff(n.h) || n.m || ((n.m = !0), Wd(n.Ja, n), (n.C = 0));
}
function lw(n, t) {
	return gf(n.h) >= n.h.j - (n.m ? 1 : 0)
		? !1
		: n.m
		? ((n.i = t.D.concat(n.i)), !0)
		: n.G == 1 || n.G == 2 || n.C >= (n.Za ? 0 : n.$a)
		? !1
		: ((n.m = ri(Pt(n.Ja, n, t), Mf(n, n.C))), n.C++, !0);
}
A.Ja = function (n) {
	if (this.m)
		if (((this.m = null), this.G == 1)) {
			if (!n) {
				(this.U = Math.floor(1e5 * Math.random())), (n = this.U++);
				const i = new ai(this, this.j, n, void 0);
				let r = this.s;
				if (
					(this.S && (r ? ((r = Fd(r)), Bd(r, this.S)) : (r = this.S)),
					this.o !== null || this.N || ((i.H = r), (r = null)),
					this.O)
				)
					t: {
						for (var t = 0, e = 0; e < this.i.length; e++) {
							e: {
								var s = this.i[e];
								if (
									"__data__" in s.g &&
									((s = s.g.__data__), typeof s == "string")
								) {
									s = s.length;
									break e;
								}
								s = void 0;
							}
							if (s === void 0) break;
							if (((t += s), 4096 < t)) {
								t = e;
								break t;
							}
							if (t === 4096 || e === this.i.length - 1) {
								t = e + 1;
								break t;
							}
						}
						t = 1e3;
					}
				else t = 1e3;
				(t = kf(this, i, t)),
					(e = we(this.F)),
					nt(e, "RID", n),
					nt(e, "CVER", 22),
					this.D && nt(e, "X-HTTP-Session-Id", this.D),
					ui(this, e),
					r &&
						(this.N
							? (t = "headers=" + encodeURIComponent(String(wf(r))) + "&" + t)
							: this.o && gc(e, this.o, r)),
					uc(this.h, i),
					this.Ya && nt(e, "TYPE", "init"),
					this.O
						? (nt(e, "$req", t),
						  nt(e, "SID", "null"),
						  (i.Z = !0),
						  ba(i, e, null))
						: ba(i, e, t),
					(this.G = 2);
			}
		} else
			this.G == 3 &&
				(n ? Fh(this, n) : this.i.length == 0 || ff(this.h) || Fh(this));
};
function Fh(n, t) {
	var e;
	t ? (e = t.m) : (e = n.U++);
	const s = we(n.F);
	nt(s, "SID", n.I),
		nt(s, "RID", e),
		nt(s, "AID", n.T),
		ui(n, s),
		n.o && n.s && gc(s, n.o, n.s),
		(e = new ai(n, n.j, e, n.C + 1)),
		n.o === null && (e.H = n.s),
		t && (n.i = t.D.concat(n.i)),
		(t = kf(n, e, 1e3)),
		e.setTimeout(
			Math.round(0.5 * n.ta) + Math.round(0.5 * n.ta * Math.random()),
		),
		uc(n.h, e),
		ba(e, s, t);
}
function ui(n, t) {
	n.ia &&
		tc(n.ia, function (e, s) {
			nt(t, s, e);
		}),
		n.l &&
			af({}, function (e, s) {
				nt(t, s, e);
			});
}
function kf(n, t, e) {
	e = Math.min(n.i.length, e);
	var s = n.l ? Pt(n.l.Ra, n.l, n) : null;
	t: {
		var i = n.i;
		let r = -1;
		for (;;) {
			const o = ["count=" + e];
			r == -1
				? 0 < e
					? ((r = i[0].h), o.push("ofs=" + r))
					: (r = 0)
				: o.push("ofs=" + r);
			let a = !0;
			for (let c = 0; c < e; c++) {
				let l = i[c].h;
				const h = i[c].g;
				if (((l -= r), 0 > l)) (r = Math.max(0, i[c].h - 100)), (a = !1);
				else
					try {
						sw(h, o, "req" + l + "_");
					} catch {
						s && s(h);
					}
			}
			if (a) {
				s = o.join("&");
				break t;
			}
		}
	}
	return (n = n.i.splice(0, e)), (t.D = n), s;
}
function Cf(n) {
	n.g || n.u || ((n.Z = 1), Wd(n.Ia, n), (n.A = 0));
}
function mc(n) {
	return n.g || n.u || 3 <= n.A
		? !1
		: (n.Z++, (n.u = ri(Pt(n.Ia, n), Mf(n, n.A))), n.A++, !0);
}
A.Ia = function () {
	if (
		((this.u = null),
		Tf(this),
		this.$ && !(this.K || this.g == null || 0 >= this.P))
	) {
		var n = 2 * this.P;
		this.j.info("BP detection timer enabled: " + n),
			(this.B = ri(Pt(this.eb, this), n));
	}
};
A.eb = function () {
	this.B &&
		((this.B = null),
		this.j.info("BP detection timeout reached."),
		this.j.info("Buffering proxy detected and switch to long-polling!"),
		(this.L = !1),
		(this.K = !0),
		Vt(10),
		Qr(this),
		Tf(this));
};
function yc(n) {
	n.B != null && (L.clearTimeout(n.B), (n.B = null));
}
function Tf(n) {
	(n.g = new ai(n, n.j, "rpc", n.Z)),
		n.o === null && (n.g.H = n.s),
		(n.g.N = 0);
	var t = we(n.sa);
	nt(t, "RID", "rpc"),
		nt(t, "SID", n.I),
		nt(t, "CI", n.L ? "0" : "1"),
		nt(t, "AID", n.T),
		nt(t, "TYPE", "xmlhttp"),
		ui(n, t),
		n.o && n.s && gc(t, n.o, n.s),
		n.J && n.g.setTimeout(n.J);
	var e = n.g;
	(n = n.ka), (e.K = 1), (e.v = Yr(we(t))), (e.s = null), (e.P = !0), nf(e, n);
}
A.cb = function () {
	this.v != null && ((this.v = null), Qr(this), mc(this), Vt(19));
};
function vr(n) {
	n.v != null && (L.clearTimeout(n.v), (n.v = null));
}
function If(n, t) {
	var e = null;
	if (n.g == t) {
		vr(n), yc(n), (n.g = null);
		var s = 2;
	} else if (xa(n.h, t)) (e = t.D), pf(n.h, t), (s = 1);
	else return;
	if (n.G != 0) {
		if (((n.pa = t.Y), t.i))
			if (s == 1) {
				(e = t.s ? t.s.length : 0), (t = Date.now() - t.F);
				var i = n.C;
				(s = Hr()), kt(s, new Jd(s, e)), Jr(n);
			} else Cf(n);
		else if (
			((i = t.o),
			i == 3 ||
				(i == 0 && 0 < n.pa) ||
				!((s == 1 && lw(n, t)) || (s == 2 && mc(n))))
		)
			switch ((e && 0 < e.length && ((t = n.h), (t.i = t.i.concat(e))), i)) {
				case 1:
					ln(n, 5);
					break;
				case 4:
					ln(n, 10);
					break;
				case 3:
					ln(n, 6);
					break;
				default:
					ln(n, 2);
			}
	}
}
function Mf(n, t) {
	let e = n.Xa + Math.floor(Math.random() * n.bb);
	return n.l || (e *= 2), e * t;
}
function ln(n, t) {
	if ((n.j.info("Error code " + t), t == 2)) {
		var e = null;
		n.l && (e = null);
		var s = Pt(n.kb, n);
		e ||
			((e = new fn("//www.google.com/assets/cleardot.gif")),
			(L.location && L.location.protocol == "http") || yr(e, "https"),
			Yr(e)),
			iw(e.toString(), s);
	} else Vt(2);
	(n.G = 0), n.l && n.l.va(t), Af(n), Ef(n);
}
A.kb = function (n) {
	n
		? (this.j.info("Successfully pinged google.com"), Vt(2))
		: (this.j.info("Failed to ping google.com"), Vt(1));
};
function Af(n) {
	if (((n.G = 0), (n.la = []), n.l)) {
		const t = mf(n.h);
		(t.length != 0 || n.i.length != 0) &&
			(Ch(n.la, t),
			Ch(n.la, n.i),
			(n.h.i.length = 0),
			Ja(n.i),
			(n.i.length = 0)),
			n.l.ua();
	}
}
function Df(n, t, e) {
	var s = e instanceof fn ? we(e) : new fn(e, void 0);
	if (s.g != "") t && (s.g = t + "." + s.g), br(s, s.m);
	else {
		var i = L.location;
		(s = i.protocol),
			(t = t ? t + "." + i.hostname : i.hostname),
			(i = +i.port);
		var r = new fn(null, void 0);
		s && yr(r, s), t && (r.g = t), i && br(r, i), e && (r.l = e), (s = r);
	}
	return (
		(e = n.D),
		(t = n.za),
		e && t && nt(s, e, t),
		nt(s, "VER", n.ma),
		ui(n, s),
		s
	);
}
function Of(n, t, e) {
	if (t && !n.H)
		throw Error("Can't create secondary domain capable XhrIo object.");
	return (
		(t = e && n.Da && !n.ra ? new ct(new li({ jb: !0 })) : new ct(n.ra)),
		t.Ka(n.H),
		t
	);
}
function Pf() {}
A = Pf.prototype;
A.xa = function () {};
A.wa = function () {};
A.va = function () {};
A.ua = function () {};
A.Ra = function () {};
function xr() {
	if (zn && !(10 <= Number(C_)))
		throw Error("Environmental error: no available transport.");
}
xr.prototype.g = function (n, t) {
	return new Wt(n, t);
};
function Wt(n, t) {
	St.call(this),
		(this.g = new Sf(t)),
		(this.l = n),
		(this.h = (t && t.messageUrlParams) || null),
		(n = (t && t.messageHeaders) || null),
		t &&
			t.clientProtocolHeaderRequired &&
			(n
				? (n["X-Client-Protocol"] = "webchannel")
				: (n = { "X-Client-Protocol": "webchannel" })),
		(this.g.s = n),
		(n = (t && t.initMessageHeaders) || null),
		t &&
			t.messageContentType &&
			(n
				? (n["X-WebChannel-Content-Type"] = t.messageContentType)
				: (n = { "X-WebChannel-Content-Type": t.messageContentType })),
		t &&
			t.ya &&
			(n
				? (n["X-WebChannel-Client-Profile"] = t.ya)
				: (n = { "X-WebChannel-Client-Profile": t.ya })),
		(this.g.S = n),
		(n = t && t.Yb) && !gr(n) && (this.g.o = n),
		(this.A = (t && t.supportsCrossDomainXhr) || !1),
		(this.v = (t && t.sendRawJson) || !1),
		(t = t && t.httpSessionIdParam) &&
			!gr(t) &&
			((this.g.D = t),
			(n = this.h),
			n !== null && t in n && ((n = this.h), t in n && delete n[t])),
		(this.j = new Qn(this));
}
Ct(Wt, St);
Wt.prototype.m = function () {
	(this.g.l = this.j), this.A && (this.g.H = !0);
	var n = this.g,
		t = this.l,
		e = this.h || void 0;
	Vt(0),
		(n.V = t),
		(n.ia = e || {}),
		(n.L = n.Y),
		(n.F = Df(n, null, n.V)),
		Jr(n);
};
Wt.prototype.close = function () {
	pc(this.g);
};
Wt.prototype.u = function (n) {
	var t = this.g;
	if (typeof n == "string") {
		var e = {};
		(e.__data__ = n), (n = e);
	} else this.v && ((e = {}), (e.__data__ = rc(n)), (n = e));
	t.i.push(new tw(t.ab++, n)), t.G == 3 && Jr(t);
};
Wt.prototype.M = function () {
	(this.g.l = null),
		delete this.j,
		pc(this.g),
		delete this.g,
		Wt.X.M.call(this);
};
function Rf(n) {
	lc.call(this);
	var t = n.__sm__;
	if (t) {
		t: {
			for (const e in t) {
				n = e;
				break t;
			}
			n = void 0;
		}
		(this.i = n) && ((n = this.i), (t = t !== null && n in t ? t[n] : void 0)),
			(this.data = t);
	} else this.data = n;
}
Ct(Rf, lc);
function Lf() {
	hc.call(this), (this.status = 1);
}
Ct(Lf, hc);
function Qn(n) {
	this.g = n;
}
Ct(Qn, Pf);
Qn.prototype.xa = function () {
	kt(this.g, "a");
};
Qn.prototype.wa = function (n) {
	kt(this.g, new Rf(n));
};
Qn.prototype.va = function (n) {
	kt(this.g, new Lf());
};
Qn.prototype.ua = function () {
	kt(this.g, "b");
};
xr.prototype.createWebChannel = xr.prototype.g;
Wt.prototype.send = Wt.prototype.u;
Wt.prototype.open = Wt.prototype.m;
Wt.prototype.close = Wt.prototype.close;
Wr.NO_ERROR = 0;
Wr.TIMEOUT = 8;
Wr.HTTP_ERROR = 6;
Zd.COMPLETE = "complete";
tf.EventType = oi;
oi.OPEN = "a";
oi.CLOSE = "b";
oi.ERROR = "c";
oi.MESSAGE = "d";
St.prototype.listen = St.prototype.N;
ct.prototype.listenOnce = ct.prototype.O;
ct.prototype.getLastError = ct.prototype.Oa;
ct.prototype.getLastErrorCode = ct.prototype.Ea;
ct.prototype.getStatus = ct.prototype.aa;
ct.prototype.getResponseJson = ct.prototype.Sa;
ct.prototype.getResponseText = ct.prototype.fa;
ct.prototype.send = ct.prototype.da;
ct.prototype.setWithCredentials = ct.prototype.Ka;
var hw = function () {
		return new xr();
	},
	uw = function () {
		return Hr();
	},
	$o = Wr,
	dw = Zd,
	fw = En,
	Bh = {
		sb: 0,
		vb: 1,
		wb: 2,
		Pb: 3,
		Ub: 4,
		Rb: 5,
		Sb: 6,
		Qb: 7,
		Ob: 8,
		Tb: 9,
		PROXY: 10,
		NOPROXY: 11,
		Mb: 12,
		Ib: 13,
		Jb: 14,
		Hb: 15,
		Kb: 16,
		Lb: 17,
		ob: 18,
		nb: 19,
		pb: 20,
	},
	gw = li,
	Li = tf,
	pw = ct;
const Vh = "@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Mt {
	constructor(t) {
		this.uid = t;
	}
	isAuthenticated() {
		return this.uid != null;
	}
	toKey() {
		return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
	}
	isEqual(t) {
		return t.uid === this.uid;
	}
}
(Mt.UNAUTHENTICATED = new Mt(null)),
	(Mt.GOOGLE_CREDENTIALS = new Mt("google-credentials-uid")),
	(Mt.FIRST_PARTY = new Mt("first-party-uid")),
	(Mt.MOCK_USER = new Mt("mock-user"));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Jn = "9.19.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const bn = new Td("@firebase/firestore");
function zh() {
	return bn.logLevel;
}
function D(n, ...t) {
	if (bn.logLevel <= K.DEBUG) {
		const e = t.map(bc);
		bn.debug(`Firestore (${Jn}): ${n}`, ...e);
	}
}
function Se(n, ...t) {
	if (bn.logLevel <= K.ERROR) {
		const e = t.map(bc);
		bn.error(`Firestore (${Jn}): ${n}`, ...e);
	}
}
function _r(n, ...t) {
	if (bn.logLevel <= K.WARN) {
		const e = t.map(bc);
		bn.warn(`Firestore (${Jn}): ${n}`, ...e);
	}
}
function bc(n) {
	if (typeof n == "string") return n;
	try {
		return (t = n), JSON.stringify(t);
	} catch {
		return n;
	}
	/**
	 * @license
	 * Copyright 2020 Google LLC
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */ var t;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function R(n = "Unexpected state") {
	const t = `FIRESTORE (${Jn}) INTERNAL ASSERTION FAILED: ` + n;
	throw (Se(t), new Error(t));
}
function tt(n, t) {
	n || R();
}
function V(n, t) {
	return n;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const w = {
	OK: "ok",
	CANCELLED: "cancelled",
	UNKNOWN: "unknown",
	INVALID_ARGUMENT: "invalid-argument",
	DEADLINE_EXCEEDED: "deadline-exceeded",
	NOT_FOUND: "not-found",
	ALREADY_EXISTS: "already-exists",
	PERMISSION_DENIED: "permission-denied",
	UNAUTHENTICATED: "unauthenticated",
	RESOURCE_EXHAUSTED: "resource-exhausted",
	FAILED_PRECONDITION: "failed-precondition",
	ABORTED: "aborted",
	OUT_OF_RANGE: "out-of-range",
	UNIMPLEMENTED: "unimplemented",
	INTERNAL: "internal",
	UNAVAILABLE: "unavailable",
	DATA_LOSS: "data-loss",
};
class P extends Gn {
	constructor(t, e) {
		super(t, e),
			(this.code = t),
			(this.message = e),
			(this.toString = () =>
				`${this.name}: [code=${this.code}]: ${this.message}`);
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ve {
	constructor() {
		this.promise = new Promise((t, e) => {
			(this.resolve = t), (this.reject = e);
		});
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Nf {
	constructor(t, e) {
		(this.user = e),
			(this.type = "OAuth"),
			(this.headers = new Map()),
			this.headers.set("Authorization", `Bearer ${t}`);
	}
}
class mw {
	getToken() {
		return Promise.resolve(null);
	}
	invalidateToken() {}
	start(t, e) {
		t.enqueueRetryable(() => e(Mt.UNAUTHENTICATED));
	}
	shutdown() {}
}
class yw {
	constructor(t) {
		(this.token = t), (this.changeListener = null);
	}
	getToken() {
		return Promise.resolve(this.token);
	}
	invalidateToken() {}
	start(t, e) {
		(this.changeListener = e), t.enqueueRetryable(() => e(this.token.user));
	}
	shutdown() {
		this.changeListener = null;
	}
}
class bw {
	constructor(t) {
		(this.t = t),
			(this.currentUser = Mt.UNAUTHENTICATED),
			(this.i = 0),
			(this.forceRefresh = !1),
			(this.auth = null);
	}
	start(t, e) {
		let s = this.i;
		const i = (c) => (this.i !== s ? ((s = this.i), e(c)) : Promise.resolve());
		let r = new Ve();
		this.o = () => {
			this.i++,
				(this.currentUser = this.u()),
				r.resolve(),
				(r = new Ve()),
				t.enqueueRetryable(() => i(this.currentUser));
		};
		const o = () => {
				const c = r;
				t.enqueueRetryable(async () => {
					await c.promise, await i(this.currentUser);
				});
			},
			a = (c) => {
				D("FirebaseAuthCredentialsProvider", "Auth detected"),
					(this.auth = c),
					this.auth.addAuthTokenListener(this.o),
					o();
			};
		this.t.onInit((c) => a(c)),
			setTimeout(() => {
				if (!this.auth) {
					const c = this.t.getImmediate({ optional: !0 });
					c
						? a(c)
						: (D("FirebaseAuthCredentialsProvider", "Auth not yet detected"),
						  r.resolve(),
						  (r = new Ve()));
				}
			}, 0),
			o();
	}
	getToken() {
		const t = this.i,
			e = this.forceRefresh;
		return (
			(this.forceRefresh = !1),
			this.auth
				? this.auth
						.getToken(e)
						.then((s) =>
							this.i !== t
								? (D(
										"FirebaseAuthCredentialsProvider",
										"getToken aborted due to token change.",
								  ),
								  this.getToken())
								: s
								? (tt(typeof s.accessToken == "string"),
								  new Nf(s.accessToken, this.currentUser))
								: null,
						)
				: Promise.resolve(null)
		);
	}
	invalidateToken() {
		this.forceRefresh = !0;
	}
	shutdown() {
		this.auth && this.auth.removeAuthTokenListener(this.o);
	}
	u() {
		const t = this.auth && this.auth.getUid();
		return tt(t === null || typeof t == "string"), new Mt(t);
	}
}
class vw {
	constructor(t, e, s) {
		(this.h = t),
			(this.l = e),
			(this.m = s),
			(this.type = "FirstParty"),
			(this.user = Mt.FIRST_PARTY),
			(this.g = new Map());
	}
	p() {
		return this.m ? this.m() : null;
	}
	get headers() {
		this.g.set("X-Goog-AuthUser", this.h);
		const t = this.p();
		return (
			t && this.g.set("Authorization", t),
			this.l && this.g.set("X-Goog-Iam-Authorization-Token", this.l),
			this.g
		);
	}
}
class xw {
	constructor(t, e, s) {
		(this.h = t), (this.l = e), (this.m = s);
	}
	getToken() {
		return Promise.resolve(new vw(this.h, this.l, this.m));
	}
	start(t, e) {
		t.enqueueRetryable(() => e(Mt.FIRST_PARTY));
	}
	shutdown() {}
	invalidateToken() {}
}
class _w {
	constructor(t) {
		(this.value = t),
			(this.type = "AppCheck"),
			(this.headers = new Map()),
			t && t.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
	}
}
class ww {
	constructor(t) {
		(this.I = t),
			(this.forceRefresh = !1),
			(this.appCheck = null),
			(this.T = null);
	}
	start(t, e) {
		const s = (r) => {
			r.error != null &&
				D(
					"FirebaseAppCheckTokenProvider",
					`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`,
				);
			const o = r.token !== this.T;
			return (
				(this.T = r.token),
				D(
					"FirebaseAppCheckTokenProvider",
					`Received ${o ? "new" : "existing"} token.`,
				),
				o ? e(r.token) : Promise.resolve()
			);
		};
		this.o = (r) => {
			t.enqueueRetryable(() => s(r));
		};
		const i = (r) => {
			D("FirebaseAppCheckTokenProvider", "AppCheck detected"),
				(this.appCheck = r),
				this.appCheck.addTokenListener(this.o);
		};
		this.I.onInit((r) => i(r)),
			setTimeout(() => {
				if (!this.appCheck) {
					const r = this.I.getImmediate({ optional: !0 });
					r
						? i(r)
						: D("FirebaseAppCheckTokenProvider", "AppCheck not yet detected");
				}
			}, 0);
	}
	getToken() {
		const t = this.forceRefresh;
		return (
			(this.forceRefresh = !1),
			this.appCheck
				? this.appCheck
						.getToken(t)
						.then((e) =>
							e
								? (tt(typeof e.token == "string"),
								  (this.T = e.token),
								  new _w(e.token))
								: null,
						)
				: Promise.resolve(null)
		);
	}
	invalidateToken() {
		this.forceRefresh = !0;
	}
	shutdown() {
		this.appCheck && this.appCheck.removeTokenListener(this.o);
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Sw(n) {
	const t = typeof self < "u" && (self.crypto || self.msCrypto),
		e = new Uint8Array(n);
	if (t && typeof t.getRandomValues == "function") t.getRandomValues(e);
	else for (let s = 0; s < n; s++) e[s] = Math.floor(256 * Math.random());
	return e;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ff {
	static A() {
		const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
			e = Math.floor(256 / t.length) * t.length;
		let s = "";
		for (; s.length < 20; ) {
			const i = Sw(40);
			for (let r = 0; r < i.length; ++r)
				s.length < 20 && i[r] < e && (s += t.charAt(i[r] % t.length));
		}
		return s;
	}
}
function Y(n, t) {
	return n < t ? -1 : n > t ? 1 : 0;
}
function $n(n, t, e) {
	return n.length === t.length && n.every((s, i) => e(s, t[i]));
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yt {
	constructor(t, e) {
		if (((this.seconds = t), (this.nanoseconds = e), e < 0))
			throw new P(
				w.INVALID_ARGUMENT,
				"Timestamp nanoseconds out of range: " + e,
			);
		if (e >= 1e9)
			throw new P(
				w.INVALID_ARGUMENT,
				"Timestamp nanoseconds out of range: " + e,
			);
		if (t < -62135596800)
			throw new P(w.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
		if (t >= 253402300800)
			throw new P(w.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
	}
	static now() {
		return yt.fromMillis(Date.now());
	}
	static fromDate(t) {
		return yt.fromMillis(t.getTime());
	}
	static fromMillis(t) {
		const e = Math.floor(t / 1e3),
			s = Math.floor(1e6 * (t - 1e3 * e));
		return new yt(e, s);
	}
	toDate() {
		return new Date(this.toMillis());
	}
	toMillis() {
		return 1e3 * this.seconds + this.nanoseconds / 1e6;
	}
	_compareTo(t) {
		return this.seconds === t.seconds
			? Y(this.nanoseconds, t.nanoseconds)
			: Y(this.seconds, t.seconds);
	}
	isEqual(t) {
		return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
	}
	toString() {
		return (
			"Timestamp(seconds=" +
			this.seconds +
			", nanoseconds=" +
			this.nanoseconds +
			")"
		);
	}
	toJSON() {
		return { seconds: this.seconds, nanoseconds: this.nanoseconds };
	}
	valueOf() {
		const t = this.seconds - -62135596800;
		return (
			String(t).padStart(12, "0") +
			"." +
			String(this.nanoseconds).padStart(9, "0")
		);
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class N {
	constructor(t) {
		this.timestamp = t;
	}
	static fromTimestamp(t) {
		return new N(t);
	}
	static min() {
		return new N(new yt(0, 0));
	}
	static max() {
		return new N(new yt(253402300799, 999999999));
	}
	compareTo(t) {
		return this.timestamp._compareTo(t.timestamp);
	}
	isEqual(t) {
		return this.timestamp.isEqual(t.timestamp);
	}
	toMicroseconds() {
		return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
	}
	toString() {
		return "SnapshotVersion(" + this.timestamp.toString() + ")";
	}
	toTimestamp() {
		return this.timestamp;
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ys {
	constructor(t, e, s) {
		e === void 0 ? (e = 0) : e > t.length && R(),
			s === void 0 ? (s = t.length - e) : s > t.length - e && R(),
			(this.segments = t),
			(this.offset = e),
			(this.len = s);
	}
	get length() {
		return this.len;
	}
	isEqual(t) {
		return Ys.comparator(this, t) === 0;
	}
	child(t) {
		const e = this.segments.slice(this.offset, this.limit());
		return (
			t instanceof Ys
				? t.forEach((s) => {
						e.push(s);
				  })
				: e.push(t),
			this.construct(e)
		);
	}
	limit() {
		return this.offset + this.length;
	}
	popFirst(t) {
		return (
			(t = t === void 0 ? 1 : t),
			this.construct(this.segments, this.offset + t, this.length - t)
		);
	}
	popLast() {
		return this.construct(this.segments, this.offset, this.length - 1);
	}
	firstSegment() {
		return this.segments[this.offset];
	}
	lastSegment() {
		return this.get(this.length - 1);
	}
	get(t) {
		return this.segments[this.offset + t];
	}
	isEmpty() {
		return this.length === 0;
	}
	isPrefixOf(t) {
		if (t.length < this.length) return !1;
		for (let e = 0; e < this.length; e++)
			if (this.get(e) !== t.get(e)) return !1;
		return !0;
	}
	isImmediateParentOf(t) {
		if (this.length + 1 !== t.length) return !1;
		for (let e = 0; e < this.length; e++)
			if (this.get(e) !== t.get(e)) return !1;
		return !0;
	}
	forEach(t) {
		for (let e = this.offset, s = this.limit(); e < s; e++) t(this.segments[e]);
	}
	toArray() {
		return this.segments.slice(this.offset, this.limit());
	}
	static comparator(t, e) {
		const s = Math.min(t.length, e.length);
		for (let i = 0; i < s; i++) {
			const r = t.get(i),
				o = e.get(i);
			if (r < o) return -1;
			if (r > o) return 1;
		}
		return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
	}
}
class st extends Ys {
	construct(t, e, s) {
		return new st(t, e, s);
	}
	canonicalString() {
		return this.toArray().join("/");
	}
	toString() {
		return this.canonicalString();
	}
	static fromString(...t) {
		const e = [];
		for (const s of t) {
			if (s.indexOf("//") >= 0)
				throw new P(
					w.INVALID_ARGUMENT,
					`Invalid segment (${s}). Paths must not contain // in them.`,
				);
			e.push(...s.split("/").filter((i) => i.length > 0));
		}
		return new st(e);
	}
	static emptyPath() {
		return new st([]);
	}
}
const Ew = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
class Dt extends Ys {
	construct(t, e, s) {
		return new Dt(t, e, s);
	}
	static isValidIdentifier(t) {
		return Ew.test(t);
	}
	canonicalString() {
		return this.toArray()
			.map(
				(t) => (
					(t = t.replace(/\\/g, "\\\\").replace(/`/g, "\\`")),
					Dt.isValidIdentifier(t) || (t = "`" + t + "`"),
					t
				),
			)
			.join(".");
	}
	toString() {
		return this.canonicalString();
	}
	isKeyField() {
		return this.length === 1 && this.get(0) === "__name__";
	}
	static keyField() {
		return new Dt(["__name__"]);
	}
	static fromServerFormat(t) {
		const e = [];
		let s = "",
			i = 0;
		const r = () => {
			if (s.length === 0)
				throw new P(
					w.INVALID_ARGUMENT,
					`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
				);
			e.push(s), (s = "");
		};
		let o = !1;
		for (; i < t.length; ) {
			const a = t[i];
			if (a === "\\") {
				if (i + 1 === t.length)
					throw new P(
						w.INVALID_ARGUMENT,
						"Path has trailing escape character: " + t,
					);
				const c = t[i + 1];
				if (c !== "\\" && c !== "." && c !== "`")
					throw new P(
						w.INVALID_ARGUMENT,
						"Path has invalid escape sequence: " + t,
					);
				(s += c), (i += 2);
			} else
				a === "`"
					? ((o = !o), i++)
					: a !== "." || o
					? ((s += a), i++)
					: (r(), i++);
		}
		if ((r(), o))
			throw new P(w.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
		return new Dt(e);
	}
	static emptyPath() {
		return new Dt([]);
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class O {
	constructor(t) {
		this.path = t;
	}
	static fromPath(t) {
		return new O(st.fromString(t));
	}
	static fromName(t) {
		return new O(st.fromString(t).popFirst(5));
	}
	static empty() {
		return new O(st.emptyPath());
	}
	get collectionGroup() {
		return this.path.popLast().lastSegment();
	}
	hasCollectionId(t) {
		return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
	}
	getCollectionGroup() {
		return this.path.get(this.path.length - 2);
	}
	getCollectionPath() {
		return this.path.popLast();
	}
	isEqual(t) {
		return t !== null && st.comparator(this.path, t.path) === 0;
	}
	toString() {
		return this.path.toString();
	}
	static comparator(t, e) {
		return st.comparator(t.path, e.path);
	}
	static isDocumentKey(t) {
		return t.length % 2 == 0;
	}
	static fromSegments(t) {
		return new O(new st(t.slice()));
	}
}
function kw(n, t) {
	const e = n.toTimestamp().seconds,
		s = n.toTimestamp().nanoseconds + 1,
		i = N.fromTimestamp(s === 1e9 ? new yt(e + 1, 0) : new yt(e, s));
	return new We(i, O.empty(), t);
}
function Cw(n) {
	return new We(n.readTime, n.key, -1);
}
class We {
	constructor(t, e, s) {
		(this.readTime = t), (this.documentKey = e), (this.largestBatchId = s);
	}
	static min() {
		return new We(N.min(), O.empty(), -1);
	}
	static max() {
		return new We(N.max(), O.empty(), -1);
	}
}
function Tw(n, t) {
	let e = n.readTime.compareTo(t.readTime);
	return e !== 0
		? e
		: ((e = O.comparator(n.documentKey, t.documentKey)),
		  e !== 0 ? e : Y(n.largestBatchId, t.largestBatchId));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Iw =
	"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
class Mw {
	constructor() {
		this.onCommittedListeners = [];
	}
	addOnCommittedListener(t) {
		this.onCommittedListeners.push(t);
	}
	raiseOnCommittedEvent() {
		this.onCommittedListeners.forEach((t) => t());
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function di(n) {
	if (n.code !== w.FAILED_PRECONDITION || n.message !== Iw) throw n;
	D("LocalStore", "Unexpectedly lost primary lease");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class C {
	constructor(t) {
		(this.nextCallback = null),
			(this.catchCallback = null),
			(this.result = void 0),
			(this.error = void 0),
			(this.isDone = !1),
			(this.callbackAttached = !1),
			t(
				(e) => {
					(this.isDone = !0),
						(this.result = e),
						this.nextCallback && this.nextCallback(e);
				},
				(e) => {
					(this.isDone = !0),
						(this.error = e),
						this.catchCallback && this.catchCallback(e);
				},
			);
	}
	catch(t) {
		return this.next(void 0, t);
	}
	next(t, e) {
		return (
			this.callbackAttached && R(),
			(this.callbackAttached = !0),
			this.isDone
				? this.error
					? this.wrapFailure(e, this.error)
					: this.wrapSuccess(t, this.result)
				: new C((s, i) => {
						(this.nextCallback = (r) => {
							this.wrapSuccess(t, r).next(s, i);
						}),
							(this.catchCallback = (r) => {
								this.wrapFailure(e, r).next(s, i);
							});
				  })
		);
	}
	toPromise() {
		return new Promise((t, e) => {
			this.next(t, e);
		});
	}
	wrapUserFunction(t) {
		try {
			const e = t();
			return e instanceof C ? e : C.resolve(e);
		} catch (e) {
			return C.reject(e);
		}
	}
	wrapSuccess(t, e) {
		return t ? this.wrapUserFunction(() => t(e)) : C.resolve(e);
	}
	wrapFailure(t, e) {
		return t ? this.wrapUserFunction(() => t(e)) : C.reject(e);
	}
	static resolve(t) {
		return new C((e, s) => {
			e(t);
		});
	}
	static reject(t) {
		return new C((e, s) => {
			s(t);
		});
	}
	static waitFor(t) {
		return new C((e, s) => {
			let i = 0,
				r = 0,
				o = !1;
			t.forEach((a) => {
				++i,
					a.next(
						() => {
							++r, o && r === i && e();
						},
						(c) => s(c),
					);
			}),
				(o = !0),
				r === i && e();
		});
	}
	static or(t) {
		let e = C.resolve(!1);
		for (const s of t) e = e.next((i) => (i ? C.resolve(i) : s()));
		return e;
	}
	static forEach(t, e) {
		const s = [];
		return (
			t.forEach((i, r) => {
				s.push(e.call(this, i, r));
			}),
			this.waitFor(s)
		);
	}
	static mapArray(t, e) {
		return new C((s, i) => {
			const r = t.length,
				o = new Array(r);
			let a = 0;
			for (let c = 0; c < r; c++) {
				const l = c;
				e(t[l]).next(
					(h) => {
						(o[l] = h), ++a, a === r && s(o);
					},
					(h) => i(h),
				);
			}
		});
	}
	static doWhile(t, e) {
		return new C((s, i) => {
			const r = () => {
				t() === !0
					? e().next(() => {
							r();
					  }, i)
					: s();
			};
			r();
		});
	}
}
function fi(n) {
	return n.name === "IndexedDbTransactionError";
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vc {
	constructor(t, e) {
		(this.previousValue = t),
			e &&
				((e.sequenceNumberHandler = (s) => this.ot(s)),
				(this.ut = (s) => e.writeSequenceNumber(s)));
	}
	ot(t) {
		return (
			(this.previousValue = Math.max(t, this.previousValue)), this.previousValue
		);
	}
	next() {
		const t = ++this.previousValue;
		return this.ut && this.ut(t), t;
	}
}
vc.ct = -1;
function Zr(n) {
	return n == null;
}
function wr(n) {
	return n === 0 && 1 / n == -1 / 0;
}
function Aw(n) {
	return (
		typeof n == "number" &&
		Number.isInteger(n) &&
		!wr(n) &&
		n <= Number.MAX_SAFE_INTEGER &&
		n >= Number.MIN_SAFE_INTEGER
	);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function $h(n) {
	let t = 0;
	for (const e in n) Object.prototype.hasOwnProperty.call(n, e) && t++;
	return t;
}
function Zn(n, t) {
	for (const e in n) Object.prototype.hasOwnProperty.call(n, e) && t(e, n[e]);
}
function Bf(n) {
	for (const t in n) if (Object.prototype.hasOwnProperty.call(n, t)) return !1;
	return !0;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vt {
	constructor(t, e) {
		(this.comparator = t), (this.root = e || Et.EMPTY);
	}
	insert(t, e) {
		return new vt(
			this.comparator,
			this.root
				.insert(t, e, this.comparator)
				.copy(null, null, Et.BLACK, null, null),
		);
	}
	remove(t) {
		return new vt(
			this.comparator,
			this.root
				.remove(t, this.comparator)
				.copy(null, null, Et.BLACK, null, null),
		);
	}
	get(t) {
		let e = this.root;
		for (; !e.isEmpty(); ) {
			const s = this.comparator(t, e.key);
			if (s === 0) return e.value;
			s < 0 ? (e = e.left) : s > 0 && (e = e.right);
		}
		return null;
	}
	indexOf(t) {
		let e = 0,
			s = this.root;
		for (; !s.isEmpty(); ) {
			const i = this.comparator(t, s.key);
			if (i === 0) return e + s.left.size;
			i < 0 ? (s = s.left) : ((e += s.left.size + 1), (s = s.right));
		}
		return -1;
	}
	isEmpty() {
		return this.root.isEmpty();
	}
	get size() {
		return this.root.size;
	}
	minKey() {
		return this.root.minKey();
	}
	maxKey() {
		return this.root.maxKey();
	}
	inorderTraversal(t) {
		return this.root.inorderTraversal(t);
	}
	forEach(t) {
		this.inorderTraversal((e, s) => (t(e, s), !1));
	}
	toString() {
		const t = [];
		return (
			this.inorderTraversal((e, s) => (t.push(`${e}:${s}`), !1)),
			`{${t.join(", ")}}`
		);
	}
	reverseTraversal(t) {
		return this.root.reverseTraversal(t);
	}
	getIterator() {
		return new Ni(this.root, null, this.comparator, !1);
	}
	getIteratorFrom(t) {
		return new Ni(this.root, t, this.comparator, !1);
	}
	getReverseIterator() {
		return new Ni(this.root, null, this.comparator, !0);
	}
	getReverseIteratorFrom(t) {
		return new Ni(this.root, t, this.comparator, !0);
	}
}
class Ni {
	constructor(t, e, s, i) {
		(this.isReverse = i), (this.nodeStack = []);
		let r = 1;
		for (; !t.isEmpty(); )
			if (((r = e ? s(t.key, e) : 1), e && i && (r *= -1), r < 0))
				t = this.isReverse ? t.left : t.right;
			else {
				if (r === 0) {
					this.nodeStack.push(t);
					break;
				}
				this.nodeStack.push(t), (t = this.isReverse ? t.right : t.left);
			}
	}
	getNext() {
		let t = this.nodeStack.pop();
		const e = { key: t.key, value: t.value };
		if (this.isReverse)
			for (t = t.left; !t.isEmpty(); ) this.nodeStack.push(t), (t = t.right);
		else for (t = t.right; !t.isEmpty(); ) this.nodeStack.push(t), (t = t.left);
		return e;
	}
	hasNext() {
		return this.nodeStack.length > 0;
	}
	peek() {
		if (this.nodeStack.length === 0) return null;
		const t = this.nodeStack[this.nodeStack.length - 1];
		return { key: t.key, value: t.value };
	}
}
class Et {
	constructor(t, e, s, i, r) {
		(this.key = t),
			(this.value = e),
			(this.color = s ?? Et.RED),
			(this.left = i ?? Et.EMPTY),
			(this.right = r ?? Et.EMPTY),
			(this.size = this.left.size + 1 + this.right.size);
	}
	copy(t, e, s, i, r) {
		return new Et(
			t ?? this.key,
			e ?? this.value,
			s ?? this.color,
			i ?? this.left,
			r ?? this.right,
		);
	}
	isEmpty() {
		return !1;
	}
	inorderTraversal(t) {
		return (
			this.left.inorderTraversal(t) ||
			t(this.key, this.value) ||
			this.right.inorderTraversal(t)
		);
	}
	reverseTraversal(t) {
		return (
			this.right.reverseTraversal(t) ||
			t(this.key, this.value) ||
			this.left.reverseTraversal(t)
		);
	}
	min() {
		return this.left.isEmpty() ? this : this.left.min();
	}
	minKey() {
		return this.min().key;
	}
	maxKey() {
		return this.right.isEmpty() ? this.key : this.right.maxKey();
	}
	insert(t, e, s) {
		let i = this;
		const r = s(t, i.key);
		return (
			(i =
				r < 0
					? i.copy(null, null, null, i.left.insert(t, e, s), null)
					: r === 0
					? i.copy(null, e, null, null, null)
					: i.copy(null, null, null, null, i.right.insert(t, e, s))),
			i.fixUp()
		);
	}
	removeMin() {
		if (this.left.isEmpty()) return Et.EMPTY;
		let t = this;
		return (
			t.left.isRed() || t.left.left.isRed() || (t = t.moveRedLeft()),
			(t = t.copy(null, null, null, t.left.removeMin(), null)),
			t.fixUp()
		);
	}
	remove(t, e) {
		let s,
			i = this;
		if (e(t, i.key) < 0)
			i.left.isEmpty() ||
				i.left.isRed() ||
				i.left.left.isRed() ||
				(i = i.moveRedLeft()),
				(i = i.copy(null, null, null, i.left.remove(t, e), null));
		else {
			if (
				(i.left.isRed() && (i = i.rotateRight()),
				i.right.isEmpty() ||
					i.right.isRed() ||
					i.right.left.isRed() ||
					(i = i.moveRedRight()),
				e(t, i.key) === 0)
			) {
				if (i.right.isEmpty()) return Et.EMPTY;
				(s = i.right.min()),
					(i = i.copy(s.key, s.value, null, null, i.right.removeMin()));
			}
			i = i.copy(null, null, null, null, i.right.remove(t, e));
		}
		return i.fixUp();
	}
	isRed() {
		return this.color;
	}
	fixUp() {
		let t = this;
		return (
			t.right.isRed() && !t.left.isRed() && (t = t.rotateLeft()),
			t.left.isRed() && t.left.left.isRed() && (t = t.rotateRight()),
			t.left.isRed() && t.right.isRed() && (t = t.colorFlip()),
			t
		);
	}
	moveRedLeft() {
		let t = this.colorFlip();
		return (
			t.right.left.isRed() &&
				((t = t.copy(null, null, null, null, t.right.rotateRight())),
				(t = t.rotateLeft()),
				(t = t.colorFlip())),
			t
		);
	}
	moveRedRight() {
		let t = this.colorFlip();
		return (
			t.left.left.isRed() && ((t = t.rotateRight()), (t = t.colorFlip())), t
		);
	}
	rotateLeft() {
		const t = this.copy(null, null, Et.RED, null, this.right.left);
		return this.right.copy(null, null, this.color, t, null);
	}
	rotateRight() {
		const t = this.copy(null, null, Et.RED, this.left.right, null);
		return this.left.copy(null, null, this.color, null, t);
	}
	colorFlip() {
		const t = this.left.copy(null, null, !this.left.color, null, null),
			e = this.right.copy(null, null, !this.right.color, null, null);
		return this.copy(null, null, !this.color, t, e);
	}
	checkMaxDepth() {
		const t = this.check();
		return Math.pow(2, t) <= this.size + 1;
	}
	check() {
		if ((this.isRed() && this.left.isRed()) || this.right.isRed()) throw R();
		const t = this.left.check();
		if (t !== this.right.check()) throw R();
		return t + (this.isRed() ? 0 : 1);
	}
}
(Et.EMPTY = null), (Et.RED = !0), (Et.BLACK = !1);
Et.EMPTY = new (class {
	constructor() {
		this.size = 0;
	}
	get key() {
		throw R();
	}
	get value() {
		throw R();
	}
	get color() {
		throw R();
	}
	get left() {
		throw R();
	}
	get right() {
		throw R();
	}
	copy(n, t, e, s, i) {
		return this;
	}
	insert(n, t, e) {
		return new Et(n, t);
	}
	remove(n, t) {
		return this;
	}
	isEmpty() {
		return !0;
	}
	inorderTraversal(n) {
		return !1;
	}
	reverseTraversal(n) {
		return !1;
	}
	minKey() {
		return null;
	}
	maxKey() {
		return null;
	}
	isRed() {
		return !1;
	}
	checkMaxDepth() {
		return !0;
	}
	check() {
		return 0;
	}
})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bt {
	constructor(t) {
		(this.comparator = t), (this.data = new vt(this.comparator));
	}
	has(t) {
		return this.data.get(t) !== null;
	}
	first() {
		return this.data.minKey();
	}
	last() {
		return this.data.maxKey();
	}
	get size() {
		return this.data.size;
	}
	indexOf(t) {
		return this.data.indexOf(t);
	}
	forEach(t) {
		this.data.inorderTraversal((e, s) => (t(e), !1));
	}
	forEachInRange(t, e) {
		const s = this.data.getIteratorFrom(t[0]);
		for (; s.hasNext(); ) {
			const i = s.getNext();
			if (this.comparator(i.key, t[1]) >= 0) return;
			e(i.key);
		}
	}
	forEachWhile(t, e) {
		let s;
		for (
			s = e !== void 0 ? this.data.getIteratorFrom(e) : this.data.getIterator();
			s.hasNext();

		)
			if (!t(s.getNext().key)) return;
	}
	firstAfterOrEqual(t) {
		const e = this.data.getIteratorFrom(t);
		return e.hasNext() ? e.getNext().key : null;
	}
	getIterator() {
		return new Uh(this.data.getIterator());
	}
	getIteratorFrom(t) {
		return new Uh(this.data.getIteratorFrom(t));
	}
	add(t) {
		return this.copy(this.data.remove(t).insert(t, !0));
	}
	delete(t) {
		return this.has(t) ? this.copy(this.data.remove(t)) : this;
	}
	isEmpty() {
		return this.data.isEmpty();
	}
	unionWith(t) {
		let e = this;
		return (
			e.size < t.size && ((e = t), (t = this)),
			t.forEach((s) => {
				e = e.add(s);
			}),
			e
		);
	}
	isEqual(t) {
		if (!(t instanceof bt) || this.size !== t.size) return !1;
		const e = this.data.getIterator(),
			s = t.data.getIterator();
		for (; e.hasNext(); ) {
			const i = e.getNext().key,
				r = s.getNext().key;
			if (this.comparator(i, r) !== 0) return !1;
		}
		return !0;
	}
	toArray() {
		const t = [];
		return (
			this.forEach((e) => {
				t.push(e);
			}),
			t
		);
	}
	toString() {
		const t = [];
		return this.forEach((e) => t.push(e)), "SortedSet(" + t.toString() + ")";
	}
	copy(t) {
		const e = new bt(this.comparator);
		return (e.data = t), e;
	}
}
class Uh {
	constructor(t) {
		this.iter = t;
	}
	getNext() {
		return this.iter.getNext().key;
	}
	hasNext() {
		return this.iter.hasNext();
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Jt {
	constructor(t) {
		(this.fields = t), t.sort(Dt.comparator);
	}
	static empty() {
		return new Jt([]);
	}
	unionWith(t) {
		let e = new bt(Dt.comparator);
		for (const s of this.fields) e = e.add(s);
		for (const s of t) e = e.add(s);
		return new Jt(e.toArray());
	}
	covers(t) {
		for (const e of this.fields) if (e.isPrefixOf(t)) return !0;
		return !1;
	}
	isEqual(t) {
		return $n(this.fields, t.fields, (e, s) => e.isEqual(s));
	}
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Dw extends Error {
	constructor() {
		super(...arguments), (this.name = "Base64DecodeError");
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Nt {
	constructor(t) {
		this.binaryString = t;
	}
	static fromBase64String(t) {
		const e = (function (s) {
			try {
				return atob(s);
			} catch (i) {
				throw typeof DOMException < "u" && i instanceof DOMException
					? new Dw("Invalid base64 string: " + i)
					: i;
			}
		})(t);
		return new Nt(e);
	}
	static fromUint8Array(t) {
		const e = (function (s) {
			let i = "";
			for (let r = 0; r < s.length; ++r) i += String.fromCharCode(s[r]);
			return i;
		})(t);
		return new Nt(e);
	}
	[Symbol.iterator]() {
		let t = 0;
		return {
			next: () =>
				t < this.binaryString.length
					? { value: this.binaryString.charCodeAt(t++), done: !1 }
					: { value: void 0, done: !0 },
		};
	}
	toBase64() {
		return (t = this.binaryString), btoa(t);
		var t;
	}
	toUint8Array() {
		return (function (t) {
			const e = new Uint8Array(t.length);
			for (let s = 0; s < t.length; s++) e[s] = t.charCodeAt(s);
			return e;
		})(this.binaryString);
	}
	approximateByteSize() {
		return 2 * this.binaryString.length;
	}
	compareTo(t) {
		return Y(this.binaryString, t.binaryString);
	}
	isEqual(t) {
		return this.binaryString === t.binaryString;
	}
}
Nt.EMPTY_BYTE_STRING = new Nt("");
const Ow = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function qe(n) {
	if ((tt(!!n), typeof n == "string")) {
		let t = 0;
		const e = Ow.exec(n);
		if ((tt(!!e), e[1])) {
			let i = e[1];
			(i = (i + "000000000").substr(0, 9)), (t = Number(i));
		}
		const s = new Date(n);
		return { seconds: Math.floor(s.getTime() / 1e3), nanos: t };
	}
	return { seconds: pt(n.seconds), nanos: pt(n.nanos) };
}
function pt(n) {
	return typeof n == "number" ? n : typeof n == "string" ? Number(n) : 0;
}
function Un(n) {
	return typeof n == "string" ? Nt.fromBase64String(n) : Nt.fromUint8Array(n);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Vf(n) {
	var t, e;
	return (
		((e = (
			((t = n?.mapValue) === null || t === void 0 ? void 0 : t.fields) || {}
		).__type__) === null || e === void 0
			? void 0
			: e.stringValue) === "server_timestamp"
	);
}
function zf(n) {
	const t = n.mapValue.fields.__previous_value__;
	return Vf(t) ? zf(t) : t;
}
function Gs(n) {
	const t = qe(n.mapValue.fields.__local_write_time__.timestampValue);
	return new yt(t.seconds, t.nanos);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Pw {
	constructor(t, e, s, i, r, o, a, c) {
		(this.databaseId = t),
			(this.appId = e),
			(this.persistenceKey = s),
			(this.host = i),
			(this.ssl = r),
			(this.forceLongPolling = o),
			(this.autoDetectLongPolling = a),
			(this.useFetchStreams = c);
	}
}
class Xs {
	constructor(t, e) {
		(this.projectId = t), (this.database = e || "(default)");
	}
	static empty() {
		return new Xs("", "");
	}
	get isDefaultDatabase() {
		return this.database === "(default)";
	}
	isEqual(t) {
		return (
			t instanceof Xs &&
			t.projectId === this.projectId &&
			t.database === this.database
		);
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Fi = {
	mapValue: { fields: { __type__: { stringValue: "__max__" } } },
};
function vn(n) {
	return "nullValue" in n
		? 0
		: "booleanValue" in n
		? 1
		: "integerValue" in n || "doubleValue" in n
		? 2
		: "timestampValue" in n
		? 3
		: "stringValue" in n
		? 5
		: "bytesValue" in n
		? 6
		: "referenceValue" in n
		? 7
		: "geoPointValue" in n
		? 8
		: "arrayValue" in n
		? 9
		: "mapValue" in n
		? Vf(n)
			? 4
			: Rw(n)
			? 9007199254740991
			: 10
		: R();
}
function oe(n, t) {
	if (n === t) return !0;
	const e = vn(n);
	if (e !== vn(t)) return !1;
	switch (e) {
		case 0:
		case 9007199254740991:
			return !0;
		case 1:
			return n.booleanValue === t.booleanValue;
		case 4:
			return Gs(n).isEqual(Gs(t));
		case 3:
			return (function (s, i) {
				if (
					typeof s.timestampValue == "string" &&
					typeof i.timestampValue == "string" &&
					s.timestampValue.length === i.timestampValue.length
				)
					return s.timestampValue === i.timestampValue;
				const r = qe(s.timestampValue),
					o = qe(i.timestampValue);
				return r.seconds === o.seconds && r.nanos === o.nanos;
			})(n, t);
		case 5:
			return n.stringValue === t.stringValue;
		case 6:
			return (function (s, i) {
				return Un(s.bytesValue).isEqual(Un(i.bytesValue));
			})(n, t);
		case 7:
			return n.referenceValue === t.referenceValue;
		case 8:
			return (function (s, i) {
				return (
					pt(s.geoPointValue.latitude) === pt(i.geoPointValue.latitude) &&
					pt(s.geoPointValue.longitude) === pt(i.geoPointValue.longitude)
				);
			})(n, t);
		case 2:
			return (function (s, i) {
				if ("integerValue" in s && "integerValue" in i)
					return pt(s.integerValue) === pt(i.integerValue);
				if ("doubleValue" in s && "doubleValue" in i) {
					const r = pt(s.doubleValue),
						o = pt(i.doubleValue);
					return r === o ? wr(r) === wr(o) : isNaN(r) && isNaN(o);
				}
				return !1;
			})(n, t);
		case 9:
			return $n(n.arrayValue.values || [], t.arrayValue.values || [], oe);
		case 10:
			return (function (s, i) {
				const r = s.mapValue.fields || {},
					o = i.mapValue.fields || {};
				if ($h(r) !== $h(o)) return !1;
				for (const a in r)
					if (r.hasOwnProperty(a) && (o[a] === void 0 || !oe(r[a], o[a])))
						return !1;
				return !0;
			})(n, t);
		default:
			return R();
	}
}
function Qs(n, t) {
	return (n.values || []).find((e) => oe(e, t)) !== void 0;
}
function jn(n, t) {
	if (n === t) return 0;
	const e = vn(n),
		s = vn(t);
	if (e !== s) return Y(e, s);
	switch (e) {
		case 0:
		case 9007199254740991:
			return 0;
		case 1:
			return Y(n.booleanValue, t.booleanValue);
		case 2:
			return (function (i, r) {
				const o = pt(i.integerValue || i.doubleValue),
					a = pt(r.integerValue || r.doubleValue);
				return o < a
					? -1
					: o > a
					? 1
					: o === a
					? 0
					: isNaN(o)
					? isNaN(a)
						? 0
						: -1
					: 1;
			})(n, t);
		case 3:
			return jh(n.timestampValue, t.timestampValue);
		case 4:
			return jh(Gs(n), Gs(t));
		case 5:
			return Y(n.stringValue, t.stringValue);
		case 6:
			return (function (i, r) {
				const o = Un(i),
					a = Un(r);
				return o.compareTo(a);
			})(n.bytesValue, t.bytesValue);
		case 7:
			return (function (i, r) {
				const o = i.split("/"),
					a = r.split("/");
				for (let c = 0; c < o.length && c < a.length; c++) {
					const l = Y(o[c], a[c]);
					if (l !== 0) return l;
				}
				return Y(o.length, a.length);
			})(n.referenceValue, t.referenceValue);
		case 8:
			return (function (i, r) {
				const o = Y(pt(i.latitude), pt(r.latitude));
				return o !== 0 ? o : Y(pt(i.longitude), pt(r.longitude));
			})(n.geoPointValue, t.geoPointValue);
		case 9:
			return (function (i, r) {
				const o = i.values || [],
					a = r.values || [];
				for (let c = 0; c < o.length && c < a.length; ++c) {
					const l = jn(o[c], a[c]);
					if (l) return l;
				}
				return Y(o.length, a.length);
			})(n.arrayValue, t.arrayValue);
		case 10:
			return (function (i, r) {
				if (i === Fi.mapValue && r === Fi.mapValue) return 0;
				if (i === Fi.mapValue) return 1;
				if (r === Fi.mapValue) return -1;
				const o = i.fields || {},
					a = Object.keys(o),
					c = r.fields || {},
					l = Object.keys(c);
				a.sort(), l.sort();
				for (let h = 0; h < a.length && h < l.length; ++h) {
					const u = Y(a[h], l[h]);
					if (u !== 0) return u;
					const d = jn(o[a[h]], c[l[h]]);
					if (d !== 0) return d;
				}
				return Y(a.length, l.length);
			})(n.mapValue, t.mapValue);
		default:
			throw R();
	}
}
function jh(n, t) {
	if (typeof n == "string" && typeof t == "string" && n.length === t.length)
		return Y(n, t);
	const e = qe(n),
		s = qe(t),
		i = Y(e.seconds, s.seconds);
	return i !== 0 ? i : Y(e.nanos, s.nanos);
}
function Hn(n) {
	return _a(n);
}
function _a(n) {
	return "nullValue" in n
		? "null"
		: "booleanValue" in n
		? "" + n.booleanValue
		: "integerValue" in n
		? "" + n.integerValue
		: "doubleValue" in n
		? "" + n.doubleValue
		: "timestampValue" in n
		? (function (s) {
				const i = qe(s);
				return `time(${i.seconds},${i.nanos})`;
		  })(n.timestampValue)
		: "stringValue" in n
		? n.stringValue
		: "bytesValue" in n
		? Un(n.bytesValue).toBase64()
		: "referenceValue" in n
		? ((e = n.referenceValue), O.fromName(e).toString())
		: "geoPointValue" in n
		? `geo(${(t = n.geoPointValue).latitude},${t.longitude})`
		: "arrayValue" in n
		? (function (s) {
				let i = "[",
					r = !0;
				for (const o of s.values || []) r ? (r = !1) : (i += ","), (i += _a(o));
				return i + "]";
		  })(n.arrayValue)
		: "mapValue" in n
		? (function (s) {
				const i = Object.keys(s.fields || {}).sort();
				let r = "{",
					o = !0;
				for (const a of i)
					o ? (o = !1) : (r += ","), (r += `${a}:${_a(s.fields[a])}`);
				return r + "}";
		  })(n.mapValue)
		: R();
	var t, e;
}
function wa(n) {
	return !!n && "integerValue" in n;
}
function xc(n) {
	return !!n && "arrayValue" in n;
}
function Hh(n) {
	return !!n && "nullValue" in n;
}
function Wh(n) {
	return !!n && "doubleValue" in n && isNaN(Number(n.doubleValue));
}
function Yi(n) {
	return !!n && "mapValue" in n;
}
function Cs(n) {
	if (n.geoPointValue)
		return { geoPointValue: Object.assign({}, n.geoPointValue) };
	if (n.timestampValue && typeof n.timestampValue == "object")
		return { timestampValue: Object.assign({}, n.timestampValue) };
	if (n.mapValue) {
		const t = { mapValue: { fields: {} } };
		return Zn(n.mapValue.fields, (e, s) => (t.mapValue.fields[e] = Cs(s))), t;
	}
	if (n.arrayValue) {
		const t = { arrayValue: { values: [] } };
		for (let e = 0; e < (n.arrayValue.values || []).length; ++e)
			t.arrayValue.values[e] = Cs(n.arrayValue.values[e]);
		return t;
	}
	return Object.assign({}, n);
}
function Rw(n) {
	return (
		(((n.mapValue || {}).fields || {}).__type__ || {}).stringValue === "__max__"
	);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Kt {
	constructor(t) {
		this.value = t;
	}
	static empty() {
		return new Kt({ mapValue: {} });
	}
	field(t) {
		if (t.isEmpty()) return this.value;
		{
			let e = this.value;
			for (let s = 0; s < t.length - 1; ++s)
				if (((e = (e.mapValue.fields || {})[t.get(s)]), !Yi(e))) return null;
			return (e = (e.mapValue.fields || {})[t.lastSegment()]), e || null;
		}
	}
	set(t, e) {
		this.getFieldsMap(t.popLast())[t.lastSegment()] = Cs(e);
	}
	setAll(t) {
		let e = Dt.emptyPath(),
			s = {},
			i = [];
		t.forEach((o, a) => {
			if (!e.isImmediateParentOf(a)) {
				const c = this.getFieldsMap(e);
				this.applyChanges(c, s, i), (s = {}), (i = []), (e = a.popLast());
			}
			o ? (s[a.lastSegment()] = Cs(o)) : i.push(a.lastSegment());
		});
		const r = this.getFieldsMap(e);
		this.applyChanges(r, s, i);
	}
	delete(t) {
		const e = this.field(t.popLast());
		Yi(e) && e.mapValue.fields && delete e.mapValue.fields[t.lastSegment()];
	}
	isEqual(t) {
		return oe(this.value, t.value);
	}
	getFieldsMap(t) {
		let e = this.value;
		e.mapValue.fields || (e.mapValue = { fields: {} });
		for (let s = 0; s < t.length; ++s) {
			let i = e.mapValue.fields[t.get(s)];
			(Yi(i) && i.mapValue.fields) ||
				((i = { mapValue: { fields: {} } }), (e.mapValue.fields[t.get(s)] = i)),
				(e = i);
		}
		return e.mapValue.fields;
	}
	applyChanges(t, e, s) {
		Zn(e, (i, r) => (t[i] = r));
		for (const i of s) delete t[i];
	}
	clone() {
		return new Kt(Cs(this.value));
	}
}
function $f(n) {
	const t = [];
	return (
		Zn(n.fields, (e, s) => {
			const i = new Dt([e]);
			if (Yi(s)) {
				const r = $f(s.mapValue).fields;
				if (r.length === 0) t.push(i);
				else for (const o of r) t.push(i.child(o));
			} else t.push(i);
		}),
		new Jt(t)
	);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class At {
	constructor(t, e, s, i, r, o, a) {
		(this.key = t),
			(this.documentType = e),
			(this.version = s),
			(this.readTime = i),
			(this.createTime = r),
			(this.data = o),
			(this.documentState = a);
	}
	static newInvalidDocument(t) {
		return new At(t, 0, N.min(), N.min(), N.min(), Kt.empty(), 0);
	}
	static newFoundDocument(t, e, s, i) {
		return new At(t, 1, e, N.min(), s, i, 0);
	}
	static newNoDocument(t, e) {
		return new At(t, 2, e, N.min(), N.min(), Kt.empty(), 0);
	}
	static newUnknownDocument(t, e) {
		return new At(t, 3, e, N.min(), N.min(), Kt.empty(), 2);
	}
	convertToFoundDocument(t, e) {
		return (
			!this.createTime.isEqual(N.min()) ||
				(this.documentType !== 2 && this.documentType !== 0) ||
				(this.createTime = t),
			(this.version = t),
			(this.documentType = 1),
			(this.data = e),
			(this.documentState = 0),
			this
		);
	}
	convertToNoDocument(t) {
		return (
			(this.version = t),
			(this.documentType = 2),
			(this.data = Kt.empty()),
			(this.documentState = 0),
			this
		);
	}
	convertToUnknownDocument(t) {
		return (
			(this.version = t),
			(this.documentType = 3),
			(this.data = Kt.empty()),
			(this.documentState = 2),
			this
		);
	}
	setHasCommittedMutations() {
		return (this.documentState = 2), this;
	}
	setHasLocalMutations() {
		return (this.documentState = 1), (this.version = N.min()), this;
	}
	setReadTime(t) {
		return (this.readTime = t), this;
	}
	get hasLocalMutations() {
		return this.documentState === 1;
	}
	get hasCommittedMutations() {
		return this.documentState === 2;
	}
	get hasPendingWrites() {
		return this.hasLocalMutations || this.hasCommittedMutations;
	}
	isValidDocument() {
		return this.documentType !== 0;
	}
	isFoundDocument() {
		return this.documentType === 1;
	}
	isNoDocument() {
		return this.documentType === 2;
	}
	isUnknownDocument() {
		return this.documentType === 3;
	}
	isEqual(t) {
		return (
			t instanceof At &&
			this.key.isEqual(t.key) &&
			this.version.isEqual(t.version) &&
			this.documentType === t.documentType &&
			this.documentState === t.documentState &&
			this.data.isEqual(t.data)
		);
	}
	mutableCopy() {
		return new At(
			this.key,
			this.documentType,
			this.version,
			this.readTime,
			this.createTime,
			this.data.clone(),
			this.documentState,
		);
	}
	toString() {
		return `Document(${this.key}, ${this.version}, ${JSON.stringify(
			this.data.value,
		)}, {createTime: ${this.createTime}}), {documentType: ${
			this.documentType
		}}), {documentState: ${this.documentState}})`;
	}
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Sr {
	constructor(t, e) {
		(this.position = t), (this.inclusive = e);
	}
}
function qh(n, t, e) {
	let s = 0;
	for (let i = 0; i < n.position.length; i++) {
		const r = t[i],
			o = n.position[i];
		if (
			(r.field.isKeyField()
				? (s = O.comparator(O.fromName(o.referenceValue), e.key))
				: (s = jn(o, e.data.field(r.field))),
			r.dir === "desc" && (s *= -1),
			s !== 0)
		)
			break;
	}
	return s;
}
function Kh(n, t) {
	if (n === null) return t === null;
	if (
		t === null ||
		n.inclusive !== t.inclusive ||
		n.position.length !== t.position.length
	)
		return !1;
	for (let e = 0; e < n.position.length; e++)
		if (!oe(n.position[e], t.position[e])) return !1;
	return !0;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ts {
	constructor(t, e = "asc") {
		(this.field = t), (this.dir = e);
	}
}
function Lw(n, t) {
	return n.dir === t.dir && n.field.isEqual(t.field);
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Uf {}
class mt extends Uf {
	constructor(t, e, s) {
		super(), (this.field = t), (this.op = e), (this.value = s);
	}
	static create(t, e, s) {
		return t.isKeyField()
			? e === "in" || e === "not-in"
				? this.createKeyFieldInFilter(t, e, s)
				: new Fw(t, e, s)
			: e === "array-contains"
			? new zw(t, s)
			: e === "in"
			? new $w(t, s)
			: e === "not-in"
			? new Uw(t, s)
			: e === "array-contains-any"
			? new jw(t, s)
			: new mt(t, e, s);
	}
	static createKeyFieldInFilter(t, e, s) {
		return e === "in" ? new Bw(t, s) : new Vw(t, s);
	}
	matches(t) {
		const e = t.data.field(this.field);
		return this.op === "!="
			? e !== null && this.matchesComparison(jn(e, this.value))
			: e !== null &&
					vn(this.value) === vn(e) &&
					this.matchesComparison(jn(e, this.value));
	}
	matchesComparison(t) {
		switch (this.op) {
			case "<":
				return t < 0;
			case "<=":
				return t <= 0;
			case "==":
				return t === 0;
			case "!=":
				return t !== 0;
			case ">":
				return t > 0;
			case ">=":
				return t >= 0;
			default:
				return R();
		}
	}
	isInequality() {
		return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0;
	}
	getFlattenedFilters() {
		return [this];
	}
	getFilters() {
		return [this];
	}
	getFirstInequalityField() {
		return this.isInequality() ? this.field : null;
	}
}
class ae extends Uf {
	constructor(t, e) {
		super(), (this.filters = t), (this.op = e), (this.ht = null);
	}
	static create(t, e) {
		return new ae(t, e);
	}
	matches(t) {
		return jf(this)
			? this.filters.find((e) => !e.matches(t)) === void 0
			: this.filters.find((e) => e.matches(t)) !== void 0;
	}
	getFlattenedFilters() {
		return (
			this.ht !== null ||
				(this.ht = this.filters.reduce(
					(t, e) => t.concat(e.getFlattenedFilters()),
					[],
				)),
			this.ht
		);
	}
	getFilters() {
		return Object.assign([], this.filters);
	}
	getFirstInequalityField() {
		const t = this.lt((e) => e.isInequality());
		return t !== null ? t.field : null;
	}
	lt(t) {
		for (const e of this.getFlattenedFilters()) if (t(e)) return e;
		return null;
	}
}
function jf(n) {
	return n.op === "and";
}
function Hf(n) {
	return Nw(n) && jf(n);
}
function Nw(n) {
	for (const t of n.filters) if (t instanceof ae) return !1;
	return !0;
}
function Sa(n) {
	if (n instanceof mt)
		return n.field.canonicalString() + n.op.toString() + Hn(n.value);
	if (Hf(n)) return n.filters.map((t) => Sa(t)).join(",");
	{
		const t = n.filters.map((e) => Sa(e)).join(",");
		return `${n.op}(${t})`;
	}
}
function Wf(n, t) {
	return n instanceof mt
		? (function (e, s) {
				return (
					s instanceof mt &&
					e.op === s.op &&
					e.field.isEqual(s.field) &&
					oe(e.value, s.value)
				);
		  })(n, t)
		: n instanceof ae
		? (function (e, s) {
				return s instanceof ae &&
					e.op === s.op &&
					e.filters.length === s.filters.length
					? e.filters.reduce((i, r, o) => i && Wf(r, s.filters[o]), !0)
					: !1;
		  })(n, t)
		: void R();
}
function qf(n) {
	return n instanceof mt
		? (function (t) {
				return `${t.field.canonicalString()} ${t.op} ${Hn(t.value)}`;
		  })(n)
		: n instanceof ae
		? (function (t) {
				return t.op.toString() + " {" + t.getFilters().map(qf).join(" ,") + "}";
		  })(n)
		: "Filter";
}
class Fw extends mt {
	constructor(t, e, s) {
		super(t, e, s), (this.key = O.fromName(s.referenceValue));
	}
	matches(t) {
		const e = O.comparator(t.key, this.key);
		return this.matchesComparison(e);
	}
}
class Bw extends mt {
	constructor(t, e) {
		super(t, "in", e), (this.keys = Kf("in", e));
	}
	matches(t) {
		return this.keys.some((e) => e.isEqual(t.key));
	}
}
class Vw extends mt {
	constructor(t, e) {
		super(t, "not-in", e), (this.keys = Kf("not-in", e));
	}
	matches(t) {
		return !this.keys.some((e) => e.isEqual(t.key));
	}
}
function Kf(n, t) {
	var e;
	return (
		((e = t.arrayValue) === null || e === void 0 ? void 0 : e.values) || []
	).map((s) => O.fromName(s.referenceValue));
}
class zw extends mt {
	constructor(t, e) {
		super(t, "array-contains", e);
	}
	matches(t) {
		const e = t.data.field(this.field);
		return xc(e) && Qs(e.arrayValue, this.value);
	}
}
class $w extends mt {
	constructor(t, e) {
		super(t, "in", e);
	}
	matches(t) {
		const e = t.data.field(this.field);
		return e !== null && Qs(this.value.arrayValue, e);
	}
}
class Uw extends mt {
	constructor(t, e) {
		super(t, "not-in", e);
	}
	matches(t) {
		if (Qs(this.value.arrayValue, { nullValue: "NULL_VALUE" })) return !1;
		const e = t.data.field(this.field);
		return e !== null && !Qs(this.value.arrayValue, e);
	}
}
class jw extends mt {
	constructor(t, e) {
		super(t, "array-contains-any", e);
	}
	matches(t) {
		const e = t.data.field(this.field);
		return (
			!(!xc(e) || !e.arrayValue.values) &&
			e.arrayValue.values.some((s) => Qs(this.value.arrayValue, s))
		);
	}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Hw {
	constructor(t, e = null, s = [], i = [], r = null, o = null, a = null) {
		(this.path = t),
			(this.collectionGroup = e),
			(this.orderBy = s),
			(this.filters = i),
			(this.limit = r),
			(this.startAt = o),
			(this.endAt = a),
			(this.ft = null);
	}
}
function Yh(n, t = null, e = [], s = [], i = null, r = null, o = null) {
	return new Hw(n, t, e, s, i, r, o);
}
function _c(n) {
	const t = V(n);
	if (t.ft === null) {
		let e = t.path.canonicalString();
		t.collectionGroup !== null && (e += "|cg:" + t.collectionGroup),
			(e += "|f:"),
			(e += t.filters.map((s) => Sa(s)).join(",")),
			(e += "|ob:"),
			(e += t.orderBy
				.map((s) =>
					(function (i) {
						return i.field.canonicalString() + i.dir;
					})(s),
				)
				.join(",")),
			Zr(t.limit) || ((e += "|l:"), (e += t.limit)),
			t.startAt &&
				((e += "|lb:"),
				(e += t.startAt.inclusive ? "b:" : "a:"),
				(e += t.startAt.position.map((s) => Hn(s)).join(","))),
			t.endAt &&
				((e += "|ub:"),
				(e += t.endAt.inclusive ? "a:" : "b:"),
				(e += t.endAt.position.map((s) => Hn(s)).join(","))),
			(t.ft = e);
	}
	return t.ft;
}
function wc(n, t) {
	if (n.limit !== t.limit || n.orderBy.length !== t.orderBy.length) return !1;
	for (let e = 0; e < n.orderBy.length; e++)
		if (!Lw(n.orderBy[e], t.orderBy[e])) return !1;
	if (n.filters.length !== t.filters.length) return !1;
	for (let e = 0; e < n.filters.length; e++)
		if (!Wf(n.filters[e], t.filters[e])) return !1;
	return (
		n.collectionGroup === t.collectionGroup &&
		!!n.path.isEqual(t.path) &&
		!!Kh(n.startAt, t.startAt) &&
		Kh(n.endAt, t.endAt)
	);
}
function Ea(n) {
	return (
		O.isDocumentKey(n.path) &&
		n.collectionGroup === null &&
		n.filters.length === 0
	);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class to {
	constructor(
		t,
		e = null,
		s = [],
		i = [],
		r = null,
		o = "F",
		a = null,
		c = null,
	) {
		(this.path = t),
			(this.collectionGroup = e),
			(this.explicitOrderBy = s),
			(this.filters = i),
			(this.limit = r),
			(this.limitType = o),
			(this.startAt = a),
			(this.endAt = c),
			(this.dt = null),
			(this.wt = null),
			this.startAt,
			this.endAt;
	}
}
function Ww(n, t, e, s, i, r, o, a) {
	return new to(n, t, e, s, i, r, o, a);
}
function Yf(n) {
	return new to(n);
}
function Gh(n) {
	return (
		n.filters.length === 0 &&
		n.limit === null &&
		n.startAt == null &&
		n.endAt == null &&
		(n.explicitOrderBy.length === 0 ||
			(n.explicitOrderBy.length === 1 &&
				n.explicitOrderBy[0].field.isKeyField()))
	);
}
function qw(n) {
	return n.explicitOrderBy.length > 0 ? n.explicitOrderBy[0].field : null;
}
function Kw(n) {
	for (const t of n.filters) {
		const e = t.getFirstInequalityField();
		if (e !== null) return e;
	}
	return null;
}
function Yw(n) {
	return n.collectionGroup !== null;
}
function Ln(n) {
	const t = V(n);
	if (t.dt === null) {
		t.dt = [];
		const e = Kw(t),
			s = qw(t);
		if (e !== null && s === null)
			e.isKeyField() || t.dt.push(new Ts(e)),
				t.dt.push(new Ts(Dt.keyField(), "asc"));
		else {
			let i = !1;
			for (const r of t.explicitOrderBy)
				t.dt.push(r), r.field.isKeyField() && (i = !0);
			if (!i) {
				const r =
					t.explicitOrderBy.length > 0
						? t.explicitOrderBy[t.explicitOrderBy.length - 1].dir
						: "asc";
				t.dt.push(new Ts(Dt.keyField(), r));
			}
		}
	}
	return t.dt;
}
function Ee(n) {
	const t = V(n);
	if (!t.wt)
		if (t.limitType === "F")
			t.wt = Yh(
				t.path,
				t.collectionGroup,
				Ln(t),
				t.filters,
				t.limit,
				t.startAt,
				t.endAt,
			);
		else {
			const e = [];
			for (const r of Ln(t)) {
				const o = r.dir === "desc" ? "asc" : "desc";
				e.push(new Ts(r.field, o));
			}
			const s = t.endAt ? new Sr(t.endAt.position, t.endAt.inclusive) : null,
				i = t.startAt ? new Sr(t.startAt.position, t.startAt.inclusive) : null;
			t.wt = Yh(t.path, t.collectionGroup, e, t.filters, t.limit, s, i);
		}
	return t.wt;
}
function ka(n, t, e) {
	return new to(
		n.path,
		n.collectionGroup,
		n.explicitOrderBy.slice(),
		n.filters.slice(),
		t,
		e,
		n.startAt,
		n.endAt,
	);
}
function eo(n, t) {
	return wc(Ee(n), Ee(t)) && n.limitType === t.limitType;
}
function Gf(n) {
	return `${_c(Ee(n))}|lt:${n.limitType}`;
}
function Ca(n) {
	return `Query(target=${(function (t) {
		let e = t.path.canonicalString();
		return (
			t.collectionGroup !== null &&
				(e += " collectionGroup=" + t.collectionGroup),
			t.filters.length > 0 &&
				(e += `, filters: [${t.filters.map((s) => qf(s)).join(", ")}]`),
			Zr(t.limit) || (e += ", limit: " + t.limit),
			t.orderBy.length > 0 &&
				(e += `, orderBy: [${t.orderBy
					.map((s) =>
						(function (i) {
							return `${i.field.canonicalString()} (${i.dir})`;
						})(s),
					)
					.join(", ")}]`),
			t.startAt &&
				((e += ", startAt: "),
				(e += t.startAt.inclusive ? "b:" : "a:"),
				(e += t.startAt.position.map((s) => Hn(s)).join(","))),
			t.endAt &&
				((e += ", endAt: "),
				(e += t.endAt.inclusive ? "a:" : "b:"),
				(e += t.endAt.position.map((s) => Hn(s)).join(","))),
			`Target(${e})`
		);
	})(Ee(n))}; limitType=${n.limitType})`;
}
function no(n, t) {
	return (
		t.isFoundDocument() &&
		(function (e, s) {
			const i = s.key.path;
			return e.collectionGroup !== null
				? s.key.hasCollectionId(e.collectionGroup) && e.path.isPrefixOf(i)
				: O.isDocumentKey(e.path)
				? e.path.isEqual(i)
				: e.path.isImmediateParentOf(i);
		})(n, t) &&
		(function (e, s) {
			for (const i of Ln(e))
				if (!i.field.isKeyField() && s.data.field(i.field) === null) return !1;
			return !0;
		})(n, t) &&
		(function (e, s) {
			for (const i of e.filters) if (!i.matches(s)) return !1;
			return !0;
		})(n, t) &&
		(function (e, s) {
			return !(
				(e.startAt &&
					!(function (i, r, o) {
						const a = qh(i, r, o);
						return i.inclusive ? a <= 0 : a < 0;
					})(e.startAt, Ln(e), s)) ||
				(e.endAt &&
					!(function (i, r, o) {
						const a = qh(i, r, o);
						return i.inclusive ? a >= 0 : a > 0;
					})(e.endAt, Ln(e), s))
			);
		})(n, t)
	);
}
function Gw(n) {
	return (
		n.collectionGroup ||
		(n.path.length % 2 == 1
			? n.path.lastSegment()
			: n.path.get(n.path.length - 2))
	);
}
function Xf(n) {
	return (t, e) => {
		let s = !1;
		for (const i of Ln(n)) {
			const r = Xw(i, t, e);
			if (r !== 0) return r;
			s = s || i.field.isKeyField();
		}
		return 0;
	};
}
function Xw(n, t, e) {
	const s = n.field.isKeyField()
		? O.comparator(t.key, e.key)
		: (function (i, r, o) {
				const a = r.data.field(i),
					c = o.data.field(i);
				return a !== null && c !== null ? jn(a, c) : R();
		  })(n.field, t, e);
	switch (n.dir) {
		case "asc":
			return s;
		case "desc":
			return -1 * s;
		default:
			return R();
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ts {
	constructor(t, e) {
		(this.mapKeyFn = t),
			(this.equalsFn = e),
			(this.inner = {}),
			(this.innerSize = 0);
	}
	get(t) {
		const e = this.mapKeyFn(t),
			s = this.inner[e];
		if (s !== void 0) {
			for (const [i, r] of s) if (this.equalsFn(i, t)) return r;
		}
	}
	has(t) {
		return this.get(t) !== void 0;
	}
	set(t, e) {
		const s = this.mapKeyFn(t),
			i = this.inner[s];
		if (i === void 0) return (this.inner[s] = [[t, e]]), void this.innerSize++;
		for (let r = 0; r < i.length; r++)
			if (this.equalsFn(i[r][0], t)) return void (i[r] = [t, e]);
		i.push([t, e]), this.innerSize++;
	}
	delete(t) {
		const e = this.mapKeyFn(t),
			s = this.inner[e];
		if (s === void 0) return !1;
		for (let i = 0; i < s.length; i++)
			if (this.equalsFn(s[i][0], t))
				return (
					s.length === 1 ? delete this.inner[e] : s.splice(i, 1),
					this.innerSize--,
					!0
				);
		return !1;
	}
	forEach(t) {
		Zn(this.inner, (e, s) => {
			for (const [i, r] of s) t(i, r);
		});
	}
	isEmpty() {
		return Bf(this.inner);
	}
	size() {
		return this.innerSize;
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Qw = new vt(O.comparator);
function ke() {
	return Qw;
}
const Qf = new vt(O.comparator);
function xs(...n) {
	let t = Qf;
	for (const e of n) t = t.insert(e.key, e);
	return t;
}
function Jf(n) {
	let t = Qf;
	return n.forEach((e, s) => (t = t.insert(e, s.overlayedDocument))), t;
}
function hn() {
	return Is();
}
function Zf() {
	return Is();
}
function Is() {
	return new ts(
		(n) => n.toString(),
		(n, t) => n.isEqual(t),
	);
}
const Jw = new vt(O.comparator),
	Zw = new bt(O.comparator);
function $(...n) {
	let t = Zw;
	for (const e of n) t = t.add(e);
	return t;
}
const tS = new bt(Y);
function tg() {
	return tS;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function eg(n, t) {
	if (n.useProto3Json) {
		if (isNaN(t)) return { doubleValue: "NaN" };
		if (t === 1 / 0) return { doubleValue: "Infinity" };
		if (t === -1 / 0) return { doubleValue: "-Infinity" };
	}
	return { doubleValue: wr(t) ? "-0" : t };
}
function ng(n) {
	return { integerValue: "" + n };
}
function eS(n, t) {
	return Aw(t) ? ng(t) : eg(n, t);
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class so {
	constructor() {
		this._ = void 0;
	}
}
function nS(n, t, e) {
	return n instanceof Er
		? (function (s, i) {
				const r = {
					fields: {
						__type__: { stringValue: "server_timestamp" },
						__local_write_time__: {
							timestampValue: { seconds: s.seconds, nanos: s.nanoseconds },
						},
					},
				};
				return i && (r.fields.__previous_value__ = i), { mapValue: r };
		  })(e, t)
		: n instanceof Js
		? ig(n, t)
		: n instanceof Zs
		? rg(n, t)
		: (function (s, i) {
				const r = sg(s, i),
					o = Xh(r) + Xh(s._t);
				return wa(r) && wa(s._t) ? ng(o) : eg(s.serializer, o);
		  })(n, t);
}
function sS(n, t, e) {
	return n instanceof Js ? ig(n, t) : n instanceof Zs ? rg(n, t) : e;
}
function sg(n, t) {
	return n instanceof kr
		? wa((e = t)) ||
		  (function (s) {
				return !!s && "doubleValue" in s;
		  })(e)
			? t
			: { integerValue: 0 }
		: null;
	var e;
}
class Er extends so {}
class Js extends so {
	constructor(t) {
		super(), (this.elements = t);
	}
}
function ig(n, t) {
	const e = og(t);
	for (const s of n.elements) e.some((i) => oe(i, s)) || e.push(s);
	return { arrayValue: { values: e } };
}
class Zs extends so {
	constructor(t) {
		super(), (this.elements = t);
	}
}
function rg(n, t) {
	let e = og(t);
	for (const s of n.elements) e = e.filter((i) => !oe(i, s));
	return { arrayValue: { values: e } };
}
class kr extends so {
	constructor(t, e) {
		super(), (this.serializer = t), (this._t = e);
	}
}
function Xh(n) {
	return pt(n.integerValue || n.doubleValue);
}
function og(n) {
	return xc(n) && n.arrayValue.values ? n.arrayValue.values.slice() : [];
}
function iS(n, t) {
	return (
		n.field.isEqual(t.field) &&
		(function (e, s) {
			return (e instanceof Js && s instanceof Js) ||
				(e instanceof Zs && s instanceof Zs)
				? $n(e.elements, s.elements, oe)
				: e instanceof kr && s instanceof kr
				? oe(e._t, s._t)
				: e instanceof Er && s instanceof Er;
		})(n.transform, t.transform)
	);
}
class rS {
	constructor(t, e) {
		(this.version = t), (this.transformResults = e);
	}
}
class xe {
	constructor(t, e) {
		(this.updateTime = t), (this.exists = e);
	}
	static none() {
		return new xe();
	}
	static exists(t) {
		return new xe(void 0, t);
	}
	static updateTime(t) {
		return new xe(t);
	}
	get isNone() {
		return this.updateTime === void 0 && this.exists === void 0;
	}
	isEqual(t) {
		return (
			this.exists === t.exists &&
			(this.updateTime
				? !!t.updateTime && this.updateTime.isEqual(t.updateTime)
				: !t.updateTime)
		);
	}
}
function Gi(n, t) {
	return n.updateTime !== void 0
		? t.isFoundDocument() && t.version.isEqual(n.updateTime)
		: n.exists === void 0 || n.exists === t.isFoundDocument();
}
class io {}
function ag(n, t) {
	if (!n.hasLocalMutations || (t && t.fields.length === 0)) return null;
	if (t === null)
		return n.isNoDocument()
			? new lg(n.key, xe.none())
			: new gi(n.key, n.data, xe.none());
	{
		const e = n.data,
			s = Kt.empty();
		let i = new bt(Dt.comparator);
		for (let r of t.fields)
			if (!i.has(r)) {
				let o = e.field(r);
				o === null && r.length > 1 && ((r = r.popLast()), (o = e.field(r))),
					o === null ? s.delete(r) : s.set(r, o),
					(i = i.add(r));
			}
		return new kn(n.key, s, new Jt(i.toArray()), xe.none());
	}
}
function oS(n, t, e) {
	n instanceof gi
		? (function (s, i, r) {
				const o = s.value.clone(),
					a = Jh(s.fieldTransforms, i, r.transformResults);
				o.setAll(a),
					i.convertToFoundDocument(r.version, o).setHasCommittedMutations();
		  })(n, t, e)
		: n instanceof kn
		? (function (s, i, r) {
				if (!Gi(s.precondition, i))
					return void i.convertToUnknownDocument(r.version);
				const o = Jh(s.fieldTransforms, i, r.transformResults),
					a = i.data;
				a.setAll(cg(s)),
					a.setAll(o),
					i.convertToFoundDocument(r.version, a).setHasCommittedMutations();
		  })(n, t, e)
		: (function (s, i, r) {
				i.convertToNoDocument(r.version).setHasCommittedMutations();
		  })(0, t, e);
}
function Ms(n, t, e, s) {
	return n instanceof gi
		? (function (i, r, o, a) {
				if (!Gi(i.precondition, r)) return o;
				const c = i.value.clone(),
					l = Zh(i.fieldTransforms, a, r);
				return (
					c.setAll(l),
					r.convertToFoundDocument(r.version, c).setHasLocalMutations(),
					null
				);
		  })(n, t, e, s)
		: n instanceof kn
		? (function (i, r, o, a) {
				if (!Gi(i.precondition, r)) return o;
				const c = Zh(i.fieldTransforms, a, r),
					l = r.data;
				return (
					l.setAll(cg(i)),
					l.setAll(c),
					r.convertToFoundDocument(r.version, l).setHasLocalMutations(),
					o === null
						? null
						: o
								.unionWith(i.fieldMask.fields)
								.unionWith(i.fieldTransforms.map((h) => h.field))
				);
		  })(n, t, e, s)
		: (function (i, r, o) {
				return Gi(i.precondition, r)
					? (r.convertToNoDocument(r.version).setHasLocalMutations(), null)
					: o;
		  })(n, t, e);
}
function aS(n, t) {
	let e = null;
	for (const s of n.fieldTransforms) {
		const i = t.data.field(s.field),
			r = sg(s.transform, i || null);
		r != null && (e === null && (e = Kt.empty()), e.set(s.field, r));
	}
	return e || null;
}
function Qh(n, t) {
	return (
		n.type === t.type &&
		!!n.key.isEqual(t.key) &&
		!!n.precondition.isEqual(t.precondition) &&
		!!(function (e, s) {
			return (
				(e === void 0 && s === void 0) ||
				(!(!e || !s) && $n(e, s, (i, r) => iS(i, r)))
			);
		})(n.fieldTransforms, t.fieldTransforms) &&
		(n.type === 0
			? n.value.isEqual(t.value)
			: n.type !== 1 ||
			  (n.data.isEqual(t.data) && n.fieldMask.isEqual(t.fieldMask)))
	);
}
class gi extends io {
	constructor(t, e, s, i = []) {
		super(),
			(this.key = t),
			(this.value = e),
			(this.precondition = s),
			(this.fieldTransforms = i),
			(this.type = 0);
	}
	getFieldMask() {
		return null;
	}
}
class kn extends io {
	constructor(t, e, s, i, r = []) {
		super(),
			(this.key = t),
			(this.data = e),
			(this.fieldMask = s),
			(this.precondition = i),
			(this.fieldTransforms = r),
			(this.type = 1);
	}
	getFieldMask() {
		return this.fieldMask;
	}
}
function cg(n) {
	const t = new Map();
	return (
		n.fieldMask.fields.forEach((e) => {
			if (!e.isEmpty()) {
				const s = n.data.field(e);
				t.set(e, s);
			}
		}),
		t
	);
}
function Jh(n, t, e) {
	const s = new Map();
	tt(n.length === e.length);
	for (let i = 0; i < e.length; i++) {
		const r = n[i],
			o = r.transform,
			a = t.data.field(r.field);
		s.set(r.field, sS(o, a, e[i]));
	}
	return s;
}
function Zh(n, t, e) {
	const s = new Map();
	for (const i of n) {
		const r = i.transform,
			o = e.data.field(i.field);
		s.set(i.field, nS(r, o, t));
	}
	return s;
}
class lg extends io {
	constructor(t, e) {
		super(),
			(this.key = t),
			(this.precondition = e),
			(this.type = 2),
			(this.fieldTransforms = []);
	}
	getFieldMask() {
		return null;
	}
}
class cS extends io {
	constructor(t, e) {
		super(),
			(this.key = t),
			(this.precondition = e),
			(this.type = 3),
			(this.fieldTransforms = []);
	}
	getFieldMask() {
		return null;
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class lS {
	constructor(t, e, s, i) {
		(this.batchId = t),
			(this.localWriteTime = e),
			(this.baseMutations = s),
			(this.mutations = i);
	}
	applyToRemoteDocument(t, e) {
		const s = e.mutationResults;
		for (let i = 0; i < this.mutations.length; i++) {
			const r = this.mutations[i];
			r.key.isEqual(t.key) && oS(r, t, s[i]);
		}
	}
	applyToLocalView(t, e) {
		for (const s of this.baseMutations)
			s.key.isEqual(t.key) && (e = Ms(s, t, e, this.localWriteTime));
		for (const s of this.mutations)
			s.key.isEqual(t.key) && (e = Ms(s, t, e, this.localWriteTime));
		return e;
	}
	applyToLocalDocumentSet(t, e) {
		const s = Zf();
		return (
			this.mutations.forEach((i) => {
				const r = t.get(i.key),
					o = r.overlayedDocument;
				let a = this.applyToLocalView(o, r.mutatedFields);
				a = e.has(i.key) ? null : a;
				const c = ag(o, a);
				c !== null && s.set(i.key, c),
					o.isValidDocument() || o.convertToNoDocument(N.min());
			}),
			s
		);
	}
	keys() {
		return this.mutations.reduce((t, e) => t.add(e.key), $());
	}
	isEqual(t) {
		return (
			this.batchId === t.batchId &&
			$n(this.mutations, t.mutations, (e, s) => Qh(e, s)) &&
			$n(this.baseMutations, t.baseMutations, (e, s) => Qh(e, s))
		);
	}
}
class Sc {
	constructor(t, e, s, i) {
		(this.batch = t),
			(this.commitVersion = e),
			(this.mutationResults = s),
			(this.docVersions = i);
	}
	static from(t, e, s) {
		tt(t.mutations.length === s.length);
		let i = Jw;
		const r = t.mutations;
		for (let o = 0; o < r.length; o++) i = i.insert(r[o].key, s[o].version);
		return new Sc(t, e, s, i);
	}
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hS {
	constructor(t, e) {
		(this.largestBatchId = t), (this.mutation = e);
	}
	getKey() {
		return this.mutation.key;
	}
	isEqual(t) {
		return t !== null && this.mutation === t.mutation;
	}
	toString() {
		return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class uS {
	constructor(t) {
		this.count = t;
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var ft, H;
function dS(n) {
	switch (n) {
		default:
			return R();
		case w.CANCELLED:
		case w.UNKNOWN:
		case w.DEADLINE_EXCEEDED:
		case w.RESOURCE_EXHAUSTED:
		case w.INTERNAL:
		case w.UNAVAILABLE:
		case w.UNAUTHENTICATED:
			return !1;
		case w.INVALID_ARGUMENT:
		case w.NOT_FOUND:
		case w.ALREADY_EXISTS:
		case w.PERMISSION_DENIED:
		case w.FAILED_PRECONDITION:
		case w.ABORTED:
		case w.OUT_OF_RANGE:
		case w.UNIMPLEMENTED:
		case w.DATA_LOSS:
			return !0;
	}
}
function hg(n) {
	if (n === void 0) return Se("GRPC error has no .code"), w.UNKNOWN;
	switch (n) {
		case ft.OK:
			return w.OK;
		case ft.CANCELLED:
			return w.CANCELLED;
		case ft.UNKNOWN:
			return w.UNKNOWN;
		case ft.DEADLINE_EXCEEDED:
			return w.DEADLINE_EXCEEDED;
		case ft.RESOURCE_EXHAUSTED:
			return w.RESOURCE_EXHAUSTED;
		case ft.INTERNAL:
			return w.INTERNAL;
		case ft.UNAVAILABLE:
			return w.UNAVAILABLE;
		case ft.UNAUTHENTICATED:
			return w.UNAUTHENTICATED;
		case ft.INVALID_ARGUMENT:
			return w.INVALID_ARGUMENT;
		case ft.NOT_FOUND:
			return w.NOT_FOUND;
		case ft.ALREADY_EXISTS:
			return w.ALREADY_EXISTS;
		case ft.PERMISSION_DENIED:
			return w.PERMISSION_DENIED;
		case ft.FAILED_PRECONDITION:
			return w.FAILED_PRECONDITION;
		case ft.ABORTED:
			return w.ABORTED;
		case ft.OUT_OF_RANGE:
			return w.OUT_OF_RANGE;
		case ft.UNIMPLEMENTED:
			return w.UNIMPLEMENTED;
		case ft.DATA_LOSS:
			return w.DATA_LOSS;
		default:
			return R();
	}
}
((H = ft || (ft = {}))[(H.OK = 0)] = "OK"),
	(H[(H.CANCELLED = 1)] = "CANCELLED"),
	(H[(H.UNKNOWN = 2)] = "UNKNOWN"),
	(H[(H.INVALID_ARGUMENT = 3)] = "INVALID_ARGUMENT"),
	(H[(H.DEADLINE_EXCEEDED = 4)] = "DEADLINE_EXCEEDED"),
	(H[(H.NOT_FOUND = 5)] = "NOT_FOUND"),
	(H[(H.ALREADY_EXISTS = 6)] = "ALREADY_EXISTS"),
	(H[(H.PERMISSION_DENIED = 7)] = "PERMISSION_DENIED"),
	(H[(H.UNAUTHENTICATED = 16)] = "UNAUTHENTICATED"),
	(H[(H.RESOURCE_EXHAUSTED = 8)] = "RESOURCE_EXHAUSTED"),
	(H[(H.FAILED_PRECONDITION = 9)] = "FAILED_PRECONDITION"),
	(H[(H.ABORTED = 10)] = "ABORTED"),
	(H[(H.OUT_OF_RANGE = 11)] = "OUT_OF_RANGE"),
	(H[(H.UNIMPLEMENTED = 12)] = "UNIMPLEMENTED"),
	(H[(H.INTERNAL = 13)] = "INTERNAL"),
	(H[(H.UNAVAILABLE = 14)] = "UNAVAILABLE"),
	(H[(H.DATA_LOSS = 15)] = "DATA_LOSS");
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ec {
	constructor() {
		this.onExistenceFilterMismatchCallbacks = new Map();
	}
	static get instance() {
		return Bi;
	}
	static getOrCreateInstance() {
		return Bi === null && (Bi = new Ec()), Bi;
	}
	onExistenceFilterMismatch(t) {
		const e = Symbol();
		return (
			this.onExistenceFilterMismatchCallbacks.set(e, t),
			() => this.onExistenceFilterMismatchCallbacks.delete(e)
		);
	}
	notifyOnExistenceFilterMismatch(t) {
		this.onExistenceFilterMismatchCallbacks.forEach((e) => e(t));
	}
}
let Bi = null;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ro {
	constructor(t, e, s, i, r) {
		(this.snapshotVersion = t),
			(this.targetChanges = e),
			(this.targetMismatches = s),
			(this.documentUpdates = i),
			(this.resolvedLimboDocuments = r);
	}
	static createSynthesizedRemoteEventForCurrentChange(t, e, s) {
		const i = new Map();
		return (
			i.set(t, pi.createSynthesizedTargetChangeForCurrentChange(t, e, s)),
			new ro(N.min(), i, tg(), ke(), $())
		);
	}
}
class pi {
	constructor(t, e, s, i, r) {
		(this.resumeToken = t),
			(this.current = e),
			(this.addedDocuments = s),
			(this.modifiedDocuments = i),
			(this.removedDocuments = r);
	}
	static createSynthesizedTargetChangeForCurrentChange(t, e, s) {
		return new pi(s, e, $(), $(), $());
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Xi {
	constructor(t, e, s, i) {
		(this.It = t), (this.removedTargetIds = e), (this.key = s), (this.Tt = i);
	}
}
class ug {
	constructor(t, e) {
		(this.targetId = t), (this.Et = e);
	}
}
class dg {
	constructor(t, e, s = Nt.EMPTY_BYTE_STRING, i = null) {
		(this.state = t),
			(this.targetIds = e),
			(this.resumeToken = s),
			(this.cause = i);
	}
}
class tu {
	constructor() {
		(this.At = 0),
			(this.Rt = nu()),
			(this.vt = Nt.EMPTY_BYTE_STRING),
			(this.bt = !1),
			(this.Pt = !0);
	}
	get current() {
		return this.bt;
	}
	get resumeToken() {
		return this.vt;
	}
	get Vt() {
		return this.At !== 0;
	}
	get St() {
		return this.Pt;
	}
	Dt(t) {
		t.approximateByteSize() > 0 && ((this.Pt = !0), (this.vt = t));
	}
	Ct() {
		let t = $(),
			e = $(),
			s = $();
		return (
			this.Rt.forEach((i, r) => {
				switch (r) {
					case 0:
						t = t.add(i);
						break;
					case 2:
						e = e.add(i);
						break;
					case 1:
						s = s.add(i);
						break;
					default:
						R();
				}
			}),
			new pi(this.vt, this.bt, t, e, s)
		);
	}
	xt() {
		(this.Pt = !1), (this.Rt = nu());
	}
	Nt(t, e) {
		(this.Pt = !0), (this.Rt = this.Rt.insert(t, e));
	}
	kt(t) {
		(this.Pt = !0), (this.Rt = this.Rt.remove(t));
	}
	Ot() {
		this.At += 1;
	}
	$t() {
		this.At -= 1;
	}
	Mt() {
		(this.Pt = !0), (this.bt = !0);
	}
}
class fS {
	constructor(t) {
		(this.Ft = t),
			(this.Bt = new Map()),
			(this.Lt = ke()),
			(this.qt = eu()),
			(this.Ut = new bt(Y));
	}
	Kt(t) {
		for (const e of t.It)
			t.Tt && t.Tt.isFoundDocument()
				? this.Gt(e, t.Tt)
				: this.Qt(e, t.key, t.Tt);
		for (const e of t.removedTargetIds) this.Qt(e, t.key, t.Tt);
	}
	zt(t) {
		this.forEachTarget(t, (e) => {
			const s = this.jt(e);
			switch (t.state) {
				case 0:
					this.Wt(e) && s.Dt(t.resumeToken);
					break;
				case 1:
					s.$t(), s.Vt || s.xt(), s.Dt(t.resumeToken);
					break;
				case 2:
					s.$t(), s.Vt || this.removeTarget(e);
					break;
				case 3:
					this.Wt(e) && (s.Mt(), s.Dt(t.resumeToken));
					break;
				case 4:
					this.Wt(e) && (this.Ht(e), s.Dt(t.resumeToken));
					break;
				default:
					R();
			}
		});
	}
	forEachTarget(t, e) {
		t.targetIds.length > 0
			? t.targetIds.forEach(e)
			: this.Bt.forEach((s, i) => {
					this.Wt(i) && e(i);
			  });
	}
	Jt(t) {
		var e;
		const s = t.targetId,
			i = t.Et.count,
			r = this.Yt(s);
		if (r) {
			const o = r.target;
			if (Ea(o))
				if (i === 0) {
					const a = new O(o.path);
					this.Qt(s, a, At.newNoDocument(a, N.min()));
				} else tt(i === 1);
			else {
				const a = this.Zt(s);
				a !== i &&
					(this.Ht(s),
					(this.Ut = this.Ut.add(s)),
					(e = Ec.instance) === null ||
						e === void 0 ||
						e.notifyOnExistenceFilterMismatch({
							localCacheCount: a,
							existenceFilterCount: t.Et.count,
						}));
			}
		}
	}
	Xt(t) {
		const e = new Map();
		this.Bt.forEach((r, o) => {
			const a = this.Yt(o);
			if (a) {
				if (r.current && Ea(a.target)) {
					const c = new O(a.target.path);
					this.Lt.get(c) !== null ||
						this.te(o, c) ||
						this.Qt(o, c, At.newNoDocument(c, t));
				}
				r.St && (e.set(o, r.Ct()), r.xt());
			}
		});
		let s = $();
		this.qt.forEach((r, o) => {
			let a = !0;
			o.forEachWhile((c) => {
				const l = this.Yt(c);
				return !l || l.purpose === 2 || ((a = !1), !1);
			}),
				a && (s = s.add(r));
		}),
			this.Lt.forEach((r, o) => o.setReadTime(t));
		const i = new ro(t, e, this.Ut, this.Lt, s);
		return (this.Lt = ke()), (this.qt = eu()), (this.Ut = new bt(Y)), i;
	}
	Gt(t, e) {
		if (!this.Wt(t)) return;
		const s = this.te(t, e.key) ? 2 : 0;
		this.jt(t).Nt(e.key, s),
			(this.Lt = this.Lt.insert(e.key, e)),
			(this.qt = this.qt.insert(e.key, this.ee(e.key).add(t)));
	}
	Qt(t, e, s) {
		if (!this.Wt(t)) return;
		const i = this.jt(t);
		this.te(t, e) ? i.Nt(e, 1) : i.kt(e),
			(this.qt = this.qt.insert(e, this.ee(e).delete(t))),
			s && (this.Lt = this.Lt.insert(e, s));
	}
	removeTarget(t) {
		this.Bt.delete(t);
	}
	Zt(t) {
		const e = this.jt(t).Ct();
		return (
			this.Ft.getRemoteKeysForTarget(t).size +
			e.addedDocuments.size -
			e.removedDocuments.size
		);
	}
	Ot(t) {
		this.jt(t).Ot();
	}
	jt(t) {
		let e = this.Bt.get(t);
		return e || ((e = new tu()), this.Bt.set(t, e)), e;
	}
	ee(t) {
		let e = this.qt.get(t);
		return e || ((e = new bt(Y)), (this.qt = this.qt.insert(t, e))), e;
	}
	Wt(t) {
		const e = this.Yt(t) !== null;
		return e || D("WatchChangeAggregator", "Detected inactive target", t), e;
	}
	Yt(t) {
		const e = this.Bt.get(t);
		return e && e.Vt ? null : this.Ft.ne(t);
	}
	Ht(t) {
		this.Bt.set(t, new tu()),
			this.Ft.getRemoteKeysForTarget(t).forEach((e) => {
				this.Qt(t, e, null);
			});
	}
	te(t, e) {
		return this.Ft.getRemoteKeysForTarget(t).has(e);
	}
}
function eu() {
	return new vt(O.comparator);
}
function nu() {
	return new vt(O.comparator);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const gS = (() => ({ asc: "ASCENDING", desc: "DESCENDING" }))(),
	pS = (() => ({
		"<": "LESS_THAN",
		"<=": "LESS_THAN_OR_EQUAL",
		">": "GREATER_THAN",
		">=": "GREATER_THAN_OR_EQUAL",
		"==": "EQUAL",
		"!=": "NOT_EQUAL",
		"array-contains": "ARRAY_CONTAINS",
		in: "IN",
		"not-in": "NOT_IN",
		"array-contains-any": "ARRAY_CONTAINS_ANY",
	}))(),
	mS = (() => ({ and: "AND", or: "OR" }))();
class yS {
	constructor(t, e) {
		(this.databaseId = t), (this.useProto3Json = e);
	}
}
function Cr(n, t) {
	return n.useProto3Json
		? `${new Date(1e3 * t.seconds)
				.toISOString()
				.replace(/\.\d*/, "")
				.replace("Z", "")}.${("000000000" + t.nanoseconds).slice(-9)}Z`
		: { seconds: "" + t.seconds, nanos: t.nanoseconds };
}
function fg(n, t) {
	return n.useProto3Json ? t.toBase64() : t.toUint8Array();
}
function bS(n, t) {
	return Cr(n, t.toTimestamp());
}
function re(n) {
	return (
		tt(!!n),
		N.fromTimestamp(
			(function (t) {
				const e = qe(t);
				return new yt(e.seconds, e.nanos);
			})(n),
		)
	);
}
function kc(n, t) {
	return (function (e) {
		return new st(["projects", e.projectId, "databases", e.database]);
	})(n)
		.child("documents")
		.child(t)
		.canonicalString();
}
function gg(n) {
	const t = st.fromString(n);
	return tt(bg(t)), t;
}
function Ta(n, t) {
	return kc(n.databaseId, t.path);
}
function Uo(n, t) {
	const e = gg(t);
	if (e.get(1) !== n.databaseId.projectId)
		throw new P(
			w.INVALID_ARGUMENT,
			"Tried to deserialize key from different project: " +
				e.get(1) +
				" vs " +
				n.databaseId.projectId,
		);
	if (e.get(3) !== n.databaseId.database)
		throw new P(
			w.INVALID_ARGUMENT,
			"Tried to deserialize key from different database: " +
				e.get(3) +
				" vs " +
				n.databaseId.database,
		);
	return new O(pg(e));
}
function Ia(n, t) {
	return kc(n.databaseId, t);
}
function vS(n) {
	const t = gg(n);
	return t.length === 4 ? st.emptyPath() : pg(t);
}
function Ma(n) {
	return new st([
		"projects",
		n.databaseId.projectId,
		"databases",
		n.databaseId.database,
	]).canonicalString();
}
function pg(n) {
	return tt(n.length > 4 && n.get(4) === "documents"), n.popFirst(5);
}
function su(n, t, e) {
	return { name: Ta(n, t), fields: e.value.mapValue.fields };
}
function xS(n, t) {
	let e;
	if ("targetChange" in t) {
		t.targetChange;
		const s = (function (c) {
				return c === "NO_CHANGE"
					? 0
					: c === "ADD"
					? 1
					: c === "REMOVE"
					? 2
					: c === "CURRENT"
					? 3
					: c === "RESET"
					? 4
					: R();
			})(t.targetChange.targetChangeType || "NO_CHANGE"),
			i = t.targetChange.targetIds || [],
			r = (function (c, l) {
				return c.useProto3Json
					? (tt(l === void 0 || typeof l == "string"),
					  Nt.fromBase64String(l || ""))
					: (tt(l === void 0 || l instanceof Uint8Array),
					  Nt.fromUint8Array(l || new Uint8Array()));
			})(n, t.targetChange.resumeToken),
			o = t.targetChange.cause,
			a =
				o &&
				(function (c) {
					const l = c.code === void 0 ? w.UNKNOWN : hg(c.code);
					return new P(l, c.message || "");
				})(o);
		e = new dg(s, i, r, a || null);
	} else if ("documentChange" in t) {
		t.documentChange;
		const s = t.documentChange;
		s.document, s.document.name, s.document.updateTime;
		const i = Uo(n, s.document.name),
			r = re(s.document.updateTime),
			o = s.document.createTime ? re(s.document.createTime) : N.min(),
			a = new Kt({ mapValue: { fields: s.document.fields } }),
			c = At.newFoundDocument(i, r, o, a),
			l = s.targetIds || [],
			h = s.removedTargetIds || [];
		e = new Xi(l, h, c.key, c);
	} else if ("documentDelete" in t) {
		t.documentDelete;
		const s = t.documentDelete;
		s.document;
		const i = Uo(n, s.document),
			r = s.readTime ? re(s.readTime) : N.min(),
			o = At.newNoDocument(i, r),
			a = s.removedTargetIds || [];
		e = new Xi([], a, o.key, o);
	} else if ("documentRemove" in t) {
		t.documentRemove;
		const s = t.documentRemove;
		s.document;
		const i = Uo(n, s.document),
			r = s.removedTargetIds || [];
		e = new Xi([], r, i, null);
	} else {
		if (!("filter" in t)) return R();
		{
			t.filter;
			const s = t.filter;
			s.targetId;
			const i = s.count || 0,
				r = new uS(i),
				o = s.targetId;
			e = new ug(o, r);
		}
	}
	return e;
}
function _S(n, t) {
	let e;
	if (t instanceof gi) e = { update: su(n, t.key, t.value) };
	else if (t instanceof lg) e = { delete: Ta(n, t.key) };
	else if (t instanceof kn)
		e = { update: su(n, t.key, t.data), updateMask: AS(t.fieldMask) };
	else {
		if (!(t instanceof cS)) return R();
		e = { verify: Ta(n, t.key) };
	}
	return (
		t.fieldTransforms.length > 0 &&
			(e.updateTransforms = t.fieldTransforms.map((s) =>
				(function (i, r) {
					const o = r.transform;
					if (o instanceof Er)
						return {
							fieldPath: r.field.canonicalString(),
							setToServerValue: "REQUEST_TIME",
						};
					if (o instanceof Js)
						return {
							fieldPath: r.field.canonicalString(),
							appendMissingElements: { values: o.elements },
						};
					if (o instanceof Zs)
						return {
							fieldPath: r.field.canonicalString(),
							removeAllFromArray: { values: o.elements },
						};
					if (o instanceof kr)
						return { fieldPath: r.field.canonicalString(), increment: o._t };
					throw R();
				})(0, s),
			)),
		t.precondition.isNone ||
			(e.currentDocument = (function (s, i) {
				return i.updateTime !== void 0
					? { updateTime: bS(s, i.updateTime) }
					: i.exists !== void 0
					? { exists: i.exists }
					: R();
			})(n, t.precondition)),
		e
	);
}
function wS(n, t) {
	return n && n.length > 0
		? (tt(t !== void 0),
		  n.map((e) =>
				(function (s, i) {
					let r = s.updateTime ? re(s.updateTime) : re(i);
					return (
						r.isEqual(N.min()) && (r = re(i)),
						new rS(r, s.transformResults || [])
					);
				})(e, t),
		  ))
		: [];
}
function SS(n, t) {
	return { documents: [Ia(n, t.path)] };
}
function ES(n, t) {
	const e = { structuredQuery: {} },
		s = t.path;
	t.collectionGroup !== null
		? ((e.parent = Ia(n, s)),
		  (e.structuredQuery.from = [
				{ collectionId: t.collectionGroup, allDescendants: !0 },
		  ]))
		: ((e.parent = Ia(n, s.popLast())),
		  (e.structuredQuery.from = [{ collectionId: s.lastSegment() }]));
	const i = (function (c) {
		if (c.length !== 0) return yg(ae.create(c, "and"));
	})(t.filters);
	i && (e.structuredQuery.where = i);
	const r = (function (c) {
		if (c.length !== 0)
			return c.map((l) =>
				(function (h) {
					return { field: An(h.field), direction: TS(h.dir) };
				})(l),
			);
	})(t.orderBy);
	r && (e.structuredQuery.orderBy = r);
	const o = (function (c, l) {
		return c.useProto3Json || Zr(l) ? l : { value: l };
	})(n, t.limit);
	var a;
	return (
		o !== null && (e.structuredQuery.limit = o),
		t.startAt &&
			(e.structuredQuery.startAt = {
				before: (a = t.startAt).inclusive,
				values: a.position,
			}),
		t.endAt &&
			(e.structuredQuery.endAt = (function (c) {
				return { before: !c.inclusive, values: c.position };
			})(t.endAt)),
		e
	);
}
function kS(n) {
	let t = vS(n.parent);
	const e = n.structuredQuery,
		s = e.from ? e.from.length : 0;
	let i = null;
	if (s > 0) {
		tt(s === 1);
		const h = e.from[0];
		h.allDescendants ? (i = h.collectionId) : (t = t.child(h.collectionId));
	}
	let r = [];
	e.where &&
		(r = (function (h) {
			const u = mg(h);
			return u instanceof ae && Hf(u) ? u.getFilters() : [u];
		})(e.where));
	let o = [];
	e.orderBy &&
		(o = e.orderBy.map((h) =>
			(function (u) {
				return new Ts(
					Dn(u.field),
					(function (d) {
						switch (d) {
							case "ASCENDING":
								return "asc";
							case "DESCENDING":
								return "desc";
							default:
								return;
						}
					})(u.direction),
				);
			})(h),
		));
	let a = null;
	e.limit &&
		(a = (function (h) {
			let u;
			return (u = typeof h == "object" ? h.value : h), Zr(u) ? null : u;
		})(e.limit));
	let c = null;
	e.startAt &&
		(c = (function (h) {
			const u = !!h.before,
				d = h.values || [];
			return new Sr(d, u);
		})(e.startAt));
	let l = null;
	return (
		e.endAt &&
			(l = (function (h) {
				const u = !h.before,
					d = h.values || [];
				return new Sr(d, u);
			})(e.endAt)),
		Ww(t, i, o, r, a, "F", c, l)
	);
}
function CS(n, t) {
	const e = (function (s, i) {
		switch (i) {
			case 0:
				return null;
			case 1:
				return "existence-filter-mismatch";
			case 2:
				return "limbo-document";
			default:
				return R();
		}
	})(0, t.purpose);
	return e == null ? null : { "goog-listen-tags": e };
}
function mg(n) {
	return n.unaryFilter !== void 0
		? (function (t) {
				switch (t.unaryFilter.op) {
					case "IS_NAN":
						const e = Dn(t.unaryFilter.field);
						return mt.create(e, "==", { doubleValue: NaN });
					case "IS_NULL":
						const s = Dn(t.unaryFilter.field);
						return mt.create(s, "==", { nullValue: "NULL_VALUE" });
					case "IS_NOT_NAN":
						const i = Dn(t.unaryFilter.field);
						return mt.create(i, "!=", { doubleValue: NaN });
					case "IS_NOT_NULL":
						const r = Dn(t.unaryFilter.field);
						return mt.create(r, "!=", { nullValue: "NULL_VALUE" });
					default:
						return R();
				}
		  })(n)
		: n.fieldFilter !== void 0
		? (function (t) {
				return mt.create(
					Dn(t.fieldFilter.field),
					(function (e) {
						switch (e) {
							case "EQUAL":
								return "==";
							case "NOT_EQUAL":
								return "!=";
							case "GREATER_THAN":
								return ">";
							case "GREATER_THAN_OR_EQUAL":
								return ">=";
							case "LESS_THAN":
								return "<";
							case "LESS_THAN_OR_EQUAL":
								return "<=";
							case "ARRAY_CONTAINS":
								return "array-contains";
							case "IN":
								return "in";
							case "NOT_IN":
								return "not-in";
							case "ARRAY_CONTAINS_ANY":
								return "array-contains-any";
							default:
								return R();
						}
					})(t.fieldFilter.op),
					t.fieldFilter.value,
				);
		  })(n)
		: n.compositeFilter !== void 0
		? (function (t) {
				return ae.create(
					t.compositeFilter.filters.map((e) => mg(e)),
					(function (e) {
						switch (e) {
							case "AND":
								return "and";
							case "OR":
								return "or";
							default:
								return R();
						}
					})(t.compositeFilter.op),
				);
		  })(n)
		: R();
}
function TS(n) {
	return gS[n];
}
function IS(n) {
	return pS[n];
}
function MS(n) {
	return mS[n];
}
function An(n) {
	return { fieldPath: n.canonicalString() };
}
function Dn(n) {
	return Dt.fromServerFormat(n.fieldPath);
}
function yg(n) {
	return n instanceof mt
		? (function (t) {
				if (t.op === "==") {
					if (Wh(t.value))
						return { unaryFilter: { field: An(t.field), op: "IS_NAN" } };
					if (Hh(t.value))
						return { unaryFilter: { field: An(t.field), op: "IS_NULL" } };
				} else if (t.op === "!=") {
					if (Wh(t.value))
						return { unaryFilter: { field: An(t.field), op: "IS_NOT_NAN" } };
					if (Hh(t.value))
						return { unaryFilter: { field: An(t.field), op: "IS_NOT_NULL" } };
				}
				return {
					fieldFilter: { field: An(t.field), op: IS(t.op), value: t.value },
				};
		  })(n)
		: n instanceof ae
		? (function (t) {
				const e = t.getFilters().map((s) => yg(s));
				return e.length === 1
					? e[0]
					: { compositeFilter: { op: MS(t.op), filters: e } };
		  })(n)
		: R();
}
function AS(n) {
	const t = [];
	return (
		n.fields.forEach((e) => t.push(e.canonicalString())), { fieldPaths: t }
	);
}
function bg(n) {
	return n.length >= 4 && n.get(0) === "projects" && n.get(2) === "databases";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gn {
	constructor(t, e, s, i, r = N.min(), o = N.min(), a = Nt.EMPTY_BYTE_STRING) {
		(this.target = t),
			(this.targetId = e),
			(this.purpose = s),
			(this.sequenceNumber = i),
			(this.snapshotVersion = r),
			(this.lastLimboFreeSnapshotVersion = o),
			(this.resumeToken = a);
	}
	withSequenceNumber(t) {
		return new gn(
			this.target,
			this.targetId,
			this.purpose,
			t,
			this.snapshotVersion,
			this.lastLimboFreeSnapshotVersion,
			this.resumeToken,
		);
	}
	withResumeToken(t, e) {
		return new gn(
			this.target,
			this.targetId,
			this.purpose,
			this.sequenceNumber,
			e,
			this.lastLimboFreeSnapshotVersion,
			t,
		);
	}
	withLastLimboFreeSnapshotVersion(t) {
		return new gn(
			this.target,
			this.targetId,
			this.purpose,
			this.sequenceNumber,
			this.snapshotVersion,
			t,
			this.resumeToken,
		);
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class DS {
	constructor(t) {
		this.se = t;
	}
}
function OS(n) {
	const t = kS({ parent: n.parent, structuredQuery: n.structuredQuery });
	return n.limitType === "LAST" ? ka(t, t.limit, "L") : t;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class PS {
	constructor() {
		this.He = new RS();
	}
	addToCollectionParentIndex(t, e) {
		return this.He.add(e), C.resolve();
	}
	getCollectionParents(t, e) {
		return C.resolve(this.He.getEntries(e));
	}
	addFieldIndex(t, e) {
		return C.resolve();
	}
	deleteFieldIndex(t, e) {
		return C.resolve();
	}
	getDocumentsMatchingTarget(t, e) {
		return C.resolve(null);
	}
	getIndexType(t, e) {
		return C.resolve(0);
	}
	getFieldIndexes(t, e) {
		return C.resolve([]);
	}
	getNextCollectionGroupToUpdate(t) {
		return C.resolve(null);
	}
	getMinOffset(t, e) {
		return C.resolve(We.min());
	}
	getMinOffsetFromCollectionGroup(t, e) {
		return C.resolve(We.min());
	}
	updateCollectionGroup(t, e, s) {
		return C.resolve();
	}
	updateIndexEntries(t, e) {
		return C.resolve();
	}
}
class RS {
	constructor() {
		this.index = {};
	}
	add(t) {
		const e = t.lastSegment(),
			s = t.popLast(),
			i = this.index[e] || new bt(st.comparator),
			r = !i.has(s);
		return (this.index[e] = i.add(s)), r;
	}
	has(t) {
		const e = t.lastSegment(),
			s = t.popLast(),
			i = this.index[e];
		return i && i.has(s);
	}
	getEntries(t) {
		return (this.index[t] || new bt(st.comparator)).toArray();
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Wn {
	constructor(t) {
		this.Rn = t;
	}
	next() {
		return (this.Rn += 2), this.Rn;
	}
	static vn() {
		return new Wn(0);
	}
	static bn() {
		return new Wn(-1);
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class LS {
	constructor() {
		(this.changes = new ts(
			(t) => t.toString(),
			(t, e) => t.isEqual(e),
		)),
			(this.changesApplied = !1);
	}
	addEntry(t) {
		this.assertNotApplied(), this.changes.set(t.key, t);
	}
	removeEntry(t, e) {
		this.assertNotApplied(),
			this.changes.set(t, At.newInvalidDocument(t).setReadTime(e));
	}
	getEntry(t, e) {
		this.assertNotApplied();
		const s = this.changes.get(e);
		return s !== void 0 ? C.resolve(s) : this.getFromCache(t, e);
	}
	getEntries(t, e) {
		return this.getAllFromCache(t, e);
	}
	apply(t) {
		return (
			this.assertNotApplied(), (this.changesApplied = !0), this.applyChanges(t)
		);
	}
	assertNotApplied() {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class NS {
	constructor(t, e) {
		(this.overlayedDocument = t), (this.mutatedFields = e);
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class FS {
	constructor(t, e, s, i) {
		(this.remoteDocumentCache = t),
			(this.mutationQueue = e),
			(this.documentOverlayCache = s),
			(this.indexManager = i);
	}
	getDocument(t, e) {
		let s = null;
		return this.documentOverlayCache
			.getOverlay(t, e)
			.next((i) => ((s = i), this.remoteDocumentCache.getEntry(t, e)))
			.next((i) => (s !== null && Ms(s.mutation, i, Jt.empty(), yt.now()), i));
	}
	getDocuments(t, e) {
		return this.remoteDocumentCache
			.getEntries(t, e)
			.next((s) => this.getLocalViewOfDocuments(t, s, $()).next(() => s));
	}
	getLocalViewOfDocuments(t, e, s = $()) {
		const i = hn();
		return this.populateOverlays(t, i, e).next(() =>
			this.computeViews(t, e, i, s).next((r) => {
				let o = xs();
				return (
					r.forEach((a, c) => {
						o = o.insert(a, c.overlayedDocument);
					}),
					o
				);
			}),
		);
	}
	getOverlayedDocuments(t, e) {
		const s = hn();
		return this.populateOverlays(t, s, e).next(() =>
			this.computeViews(t, e, s, $()),
		);
	}
	populateOverlays(t, e, s) {
		const i = [];
		return (
			s.forEach((r) => {
				e.has(r) || i.push(r);
			}),
			this.documentOverlayCache.getOverlays(t, i).next((r) => {
				r.forEach((o, a) => {
					e.set(o, a);
				});
			})
		);
	}
	computeViews(t, e, s, i) {
		let r = ke();
		const o = Is(),
			a = Is();
		return (
			e.forEach((c, l) => {
				const h = s.get(l.key);
				i.has(l.key) && (h === void 0 || h.mutation instanceof kn)
					? (r = r.insert(l.key, l))
					: h !== void 0
					? (o.set(l.key, h.mutation.getFieldMask()),
					  Ms(h.mutation, l, h.mutation.getFieldMask(), yt.now()))
					: o.set(l.key, Jt.empty());
			}),
			this.recalculateAndSaveOverlays(t, r).next(
				(c) => (
					c.forEach((l, h) => o.set(l, h)),
					e.forEach((l, h) => {
						var u;
						return a.set(
							l,
							new NS(h, (u = o.get(l)) !== null && u !== void 0 ? u : null),
						);
					}),
					a
				),
			)
		);
	}
	recalculateAndSaveOverlays(t, e) {
		const s = Is();
		let i = new vt((o, a) => o - a),
			r = $();
		return this.mutationQueue
			.getAllMutationBatchesAffectingDocumentKeys(t, e)
			.next((o) => {
				for (const a of o)
					a.keys().forEach((c) => {
						const l = e.get(c);
						if (l === null) return;
						let h = s.get(c) || Jt.empty();
						(h = a.applyToLocalView(l, h)), s.set(c, h);
						const u = (i.get(a.batchId) || $()).add(c);
						i = i.insert(a.batchId, u);
					});
			})
			.next(() => {
				const o = [],
					a = i.getReverseIterator();
				for (; a.hasNext(); ) {
					const c = a.getNext(),
						l = c.key,
						h = c.value,
						u = Zf();
					h.forEach((d) => {
						if (!r.has(d)) {
							const f = ag(e.get(d), s.get(d));
							f !== null && u.set(d, f), (r = r.add(d));
						}
					}),
						o.push(this.documentOverlayCache.saveOverlays(t, l, u));
				}
				return C.waitFor(o);
			})
			.next(() => s);
	}
	recalculateAndSaveOverlaysForDocumentKeys(t, e) {
		return this.remoteDocumentCache
			.getEntries(t, e)
			.next((s) => this.recalculateAndSaveOverlays(t, s));
	}
	getDocumentsMatchingQuery(t, e, s) {
		return (function (i) {
			return (
				O.isDocumentKey(i.path) &&
				i.collectionGroup === null &&
				i.filters.length === 0
			);
		})(e)
			? this.getDocumentsMatchingDocumentQuery(t, e.path)
			: Yw(e)
			? this.getDocumentsMatchingCollectionGroupQuery(t, e, s)
			: this.getDocumentsMatchingCollectionQuery(t, e, s);
	}
	getNextDocuments(t, e, s, i) {
		return this.remoteDocumentCache
			.getAllFromCollectionGroup(t, e, s, i)
			.next((r) => {
				const o =
					i - r.size > 0
						? this.documentOverlayCache.getOverlaysForCollectionGroup(
								t,
								e,
								s.largestBatchId,
								i - r.size,
						  )
						: C.resolve(hn());
				let a = -1,
					c = r;
				return o.next((l) =>
					C.forEach(
						l,
						(h, u) => (
							a < u.largestBatchId && (a = u.largestBatchId),
							r.get(h)
								? C.resolve()
								: this.remoteDocumentCache.getEntry(t, h).next((d) => {
										c = c.insert(h, d);
								  })
						),
					)
						.next(() => this.populateOverlays(t, l, r))
						.next(() => this.computeViews(t, c, l, $()))
						.next((h) => ({ batchId: a, changes: Jf(h) })),
				);
			});
	}
	getDocumentsMatchingDocumentQuery(t, e) {
		return this.getDocument(t, new O(e)).next((s) => {
			let i = xs();
			return s.isFoundDocument() && (i = i.insert(s.key, s)), i;
		});
	}
	getDocumentsMatchingCollectionGroupQuery(t, e, s) {
		const i = e.collectionGroup;
		let r = xs();
		return this.indexManager.getCollectionParents(t, i).next((o) =>
			C.forEach(o, (a) => {
				const c = (function (l, h) {
					return new to(
						h,
						null,
						l.explicitOrderBy.slice(),
						l.filters.slice(),
						l.limit,
						l.limitType,
						l.startAt,
						l.endAt,
					);
				})(e, a.child(i));
				return this.getDocumentsMatchingCollectionQuery(t, c, s).next((l) => {
					l.forEach((h, u) => {
						r = r.insert(h, u);
					});
				});
			}).next(() => r),
		);
	}
	getDocumentsMatchingCollectionQuery(t, e, s) {
		let i;
		return this.documentOverlayCache
			.getOverlaysForCollection(t, e.path, s.largestBatchId)
			.next(
				(r) => (
					(i = r),
					this.remoteDocumentCache.getDocumentsMatchingQuery(t, e, s, i)
				),
			)
			.next((r) => {
				i.forEach((a, c) => {
					const l = c.getKey();
					r.get(l) === null && (r = r.insert(l, At.newInvalidDocument(l)));
				});
				let o = xs();
				return (
					r.forEach((a, c) => {
						const l = i.get(a);
						l !== void 0 && Ms(l.mutation, c, Jt.empty(), yt.now()),
							no(e, c) && (o = o.insert(a, c));
					}),
					o
				);
			});
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class BS {
	constructor(t) {
		(this.serializer = t), (this.Zn = new Map()), (this.Xn = new Map());
	}
	getBundleMetadata(t, e) {
		return C.resolve(this.Zn.get(e));
	}
	saveBundleMetadata(t, e) {
		var s;
		return (
			this.Zn.set(e.id, {
				id: (s = e).id,
				version: s.version,
				createTime: re(s.createTime),
			}),
			C.resolve()
		);
	}
	getNamedQuery(t, e) {
		return C.resolve(this.Xn.get(e));
	}
	saveNamedQuery(t, e) {
		return (
			this.Xn.set(
				e.name,
				(function (s) {
					return {
						name: s.name,
						query: OS(s.bundledQuery),
						readTime: re(s.readTime),
					};
				})(e),
			),
			C.resolve()
		);
	}
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class VS {
	constructor() {
		(this.overlays = new vt(O.comparator)), (this.ts = new Map());
	}
	getOverlay(t, e) {
		return C.resolve(this.overlays.get(e));
	}
	getOverlays(t, e) {
		const s = hn();
		return C.forEach(e, (i) =>
			this.getOverlay(t, i).next((r) => {
				r !== null && s.set(i, r);
			}),
		).next(() => s);
	}
	saveOverlays(t, e, s) {
		return (
			s.forEach((i, r) => {
				this.re(t, e, r);
			}),
			C.resolve()
		);
	}
	removeOverlaysForBatchId(t, e, s) {
		const i = this.ts.get(s);
		return (
			i !== void 0 &&
				(i.forEach((r) => (this.overlays = this.overlays.remove(r))),
				this.ts.delete(s)),
			C.resolve()
		);
	}
	getOverlaysForCollection(t, e, s) {
		const i = hn(),
			r = e.length + 1,
			o = new O(e.child("")),
			a = this.overlays.getIteratorFrom(o);
		for (; a.hasNext(); ) {
			const c = a.getNext().value,
				l = c.getKey();
			if (!e.isPrefixOf(l.path)) break;
			l.path.length === r && c.largestBatchId > s && i.set(c.getKey(), c);
		}
		return C.resolve(i);
	}
	getOverlaysForCollectionGroup(t, e, s, i) {
		let r = new vt((l, h) => l - h);
		const o = this.overlays.getIterator();
		for (; o.hasNext(); ) {
			const l = o.getNext().value;
			if (l.getKey().getCollectionGroup() === e && l.largestBatchId > s) {
				let h = r.get(l.largestBatchId);
				h === null && ((h = hn()), (r = r.insert(l.largestBatchId, h))),
					h.set(l.getKey(), l);
			}
		}
		const a = hn(),
			c = r.getIterator();
		for (
			;
			c.hasNext() &&
			(c.getNext().value.forEach((l, h) => a.set(l, h)), !(a.size() >= i));

		);
		return C.resolve(a);
	}
	re(t, e, s) {
		const i = this.overlays.get(s.key);
		if (i !== null) {
			const o = this.ts.get(i.largestBatchId).delete(s.key);
			this.ts.set(i.largestBatchId, o);
		}
		this.overlays = this.overlays.insert(s.key, new hS(e, s));
		let r = this.ts.get(e);
		r === void 0 && ((r = $()), this.ts.set(e, r)),
			this.ts.set(e, r.add(s.key));
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Cc {
	constructor() {
		(this.es = new bt(_t.ns)), (this.ss = new bt(_t.rs));
	}
	isEmpty() {
		return this.es.isEmpty();
	}
	addReference(t, e) {
		const s = new _t(t, e);
		(this.es = this.es.add(s)), (this.ss = this.ss.add(s));
	}
	os(t, e) {
		t.forEach((s) => this.addReference(s, e));
	}
	removeReference(t, e) {
		this.us(new _t(t, e));
	}
	cs(t, e) {
		t.forEach((s) => this.removeReference(s, e));
	}
	hs(t) {
		const e = new O(new st([])),
			s = new _t(e, t),
			i = new _t(e, t + 1),
			r = [];
		return (
			this.ss.forEachInRange([s, i], (o) => {
				this.us(o), r.push(o.key);
			}),
			r
		);
	}
	ls() {
		this.es.forEach((t) => this.us(t));
	}
	us(t) {
		(this.es = this.es.delete(t)), (this.ss = this.ss.delete(t));
	}
	fs(t) {
		const e = new O(new st([])),
			s = new _t(e, t),
			i = new _t(e, t + 1);
		let r = $();
		return (
			this.ss.forEachInRange([s, i], (o) => {
				r = r.add(o.key);
			}),
			r
		);
	}
	containsKey(t) {
		const e = new _t(t, 0),
			s = this.es.firstAfterOrEqual(e);
		return s !== null && t.isEqual(s.key);
	}
}
class _t {
	constructor(t, e) {
		(this.key = t), (this.ds = e);
	}
	static ns(t, e) {
		return O.comparator(t.key, e.key) || Y(t.ds, e.ds);
	}
	static rs(t, e) {
		return Y(t.ds, e.ds) || O.comparator(t.key, e.key);
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zS {
	constructor(t, e) {
		(this.indexManager = t),
			(this.referenceDelegate = e),
			(this.mutationQueue = []),
			(this.ws = 1),
			(this._s = new bt(_t.ns));
	}
	checkEmpty(t) {
		return C.resolve(this.mutationQueue.length === 0);
	}
	addMutationBatch(t, e, s, i) {
		const r = this.ws;
		this.ws++,
			this.mutationQueue.length > 0 &&
				this.mutationQueue[this.mutationQueue.length - 1];
		const o = new lS(r, e, s, i);
		this.mutationQueue.push(o);
		for (const a of i)
			(this._s = this._s.add(new _t(a.key, r))),
				this.indexManager.addToCollectionParentIndex(t, a.key.path.popLast());
		return C.resolve(o);
	}
	lookupMutationBatch(t, e) {
		return C.resolve(this.gs(e));
	}
	getNextMutationBatchAfterBatchId(t, e) {
		const s = e + 1,
			i = this.ys(s),
			r = i < 0 ? 0 : i;
		return C.resolve(
			this.mutationQueue.length > r ? this.mutationQueue[r] : null,
		);
	}
	getHighestUnacknowledgedBatchId() {
		return C.resolve(this.mutationQueue.length === 0 ? -1 : this.ws - 1);
	}
	getAllMutationBatches(t) {
		return C.resolve(this.mutationQueue.slice());
	}
	getAllMutationBatchesAffectingDocumentKey(t, e) {
		const s = new _t(e, 0),
			i = new _t(e, Number.POSITIVE_INFINITY),
			r = [];
		return (
			this._s.forEachInRange([s, i], (o) => {
				const a = this.gs(o.ds);
				r.push(a);
			}),
			C.resolve(r)
		);
	}
	getAllMutationBatchesAffectingDocumentKeys(t, e) {
		let s = new bt(Y);
		return (
			e.forEach((i) => {
				const r = new _t(i, 0),
					o = new _t(i, Number.POSITIVE_INFINITY);
				this._s.forEachInRange([r, o], (a) => {
					s = s.add(a.ds);
				});
			}),
			C.resolve(this.ps(s))
		);
	}
	getAllMutationBatchesAffectingQuery(t, e) {
		const s = e.path,
			i = s.length + 1;
		let r = s;
		O.isDocumentKey(r) || (r = r.child(""));
		const o = new _t(new O(r), 0);
		let a = new bt(Y);
		return (
			this._s.forEachWhile((c) => {
				const l = c.key.path;
				return !!s.isPrefixOf(l) && (l.length === i && (a = a.add(c.ds)), !0);
			}, o),
			C.resolve(this.ps(a))
		);
	}
	ps(t) {
		const e = [];
		return (
			t.forEach((s) => {
				const i = this.gs(s);
				i !== null && e.push(i);
			}),
			e
		);
	}
	removeMutationBatch(t, e) {
		tt(this.Is(e.batchId, "removed") === 0), this.mutationQueue.shift();
		let s = this._s;
		return C.forEach(e.mutations, (i) => {
			const r = new _t(i.key, e.batchId);
			return (
				(s = s.delete(r)),
				this.referenceDelegate.markPotentiallyOrphaned(t, i.key)
			);
		}).next(() => {
			this._s = s;
		});
	}
	En(t) {}
	containsKey(t, e) {
		const s = new _t(e, 0),
			i = this._s.firstAfterOrEqual(s);
		return C.resolve(e.isEqual(i && i.key));
	}
	performConsistencyCheck(t) {
		return this.mutationQueue.length, C.resolve();
	}
	Is(t, e) {
		return this.ys(t);
	}
	ys(t) {
		return this.mutationQueue.length === 0
			? 0
			: t - this.mutationQueue[0].batchId;
	}
	gs(t) {
		const e = this.ys(t);
		return e < 0 || e >= this.mutationQueue.length
			? null
			: this.mutationQueue[e];
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $S {
	constructor(t) {
		(this.Ts = t), (this.docs = new vt(O.comparator)), (this.size = 0);
	}
	setIndexManager(t) {
		this.indexManager = t;
	}
	addEntry(t, e) {
		const s = e.key,
			i = this.docs.get(s),
			r = i ? i.size : 0,
			o = this.Ts(e);
		return (
			(this.docs = this.docs.insert(s, { document: e.mutableCopy(), size: o })),
			(this.size += o - r),
			this.indexManager.addToCollectionParentIndex(t, s.path.popLast())
		);
	}
	removeEntry(t) {
		const e = this.docs.get(t);
		e && ((this.docs = this.docs.remove(t)), (this.size -= e.size));
	}
	getEntry(t, e) {
		const s = this.docs.get(e);
		return C.resolve(s ? s.document.mutableCopy() : At.newInvalidDocument(e));
	}
	getEntries(t, e) {
		let s = ke();
		return (
			e.forEach((i) => {
				const r = this.docs.get(i);
				s = s.insert(
					i,
					r ? r.document.mutableCopy() : At.newInvalidDocument(i),
				);
			}),
			C.resolve(s)
		);
	}
	getDocumentsMatchingQuery(t, e, s, i) {
		let r = ke();
		const o = e.path,
			a = new O(o.child("")),
			c = this.docs.getIteratorFrom(a);
		for (; c.hasNext(); ) {
			const {
				key: l,
				value: { document: h },
			} = c.getNext();
			if (!o.isPrefixOf(l.path)) break;
			l.path.length > o.length + 1 ||
				Tw(Cw(h), s) <= 0 ||
				((i.has(h.key) || no(e, h)) && (r = r.insert(h.key, h.mutableCopy())));
		}
		return C.resolve(r);
	}
	getAllFromCollectionGroup(t, e, s, i) {
		R();
	}
	Es(t, e) {
		return C.forEach(this.docs, (s) => e(s));
	}
	newChangeBuffer(t) {
		return new US(this);
	}
	getSize(t) {
		return C.resolve(this.size);
	}
}
class US extends LS {
	constructor(t) {
		super(), (this.Jn = t);
	}
	applyChanges(t) {
		const e = [];
		return (
			this.changes.forEach((s, i) => {
				i.isValidDocument()
					? e.push(this.Jn.addEntry(t, i))
					: this.Jn.removeEntry(s);
			}),
			C.waitFor(e)
		);
	}
	getFromCache(t, e) {
		return this.Jn.getEntry(t, e);
	}
	getAllFromCache(t, e) {
		return this.Jn.getEntries(t, e);
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class jS {
	constructor(t) {
		(this.persistence = t),
			(this.As = new ts((e) => _c(e), wc)),
			(this.lastRemoteSnapshotVersion = N.min()),
			(this.highestTargetId = 0),
			(this.Rs = 0),
			(this.vs = new Cc()),
			(this.targetCount = 0),
			(this.bs = Wn.vn());
	}
	forEachTarget(t, e) {
		return this.As.forEach((s, i) => e(i)), C.resolve();
	}
	getLastRemoteSnapshotVersion(t) {
		return C.resolve(this.lastRemoteSnapshotVersion);
	}
	getHighestSequenceNumber(t) {
		return C.resolve(this.Rs);
	}
	allocateTargetId(t) {
		return (
			(this.highestTargetId = this.bs.next()), C.resolve(this.highestTargetId)
		);
	}
	setTargetsMetadata(t, e, s) {
		return (
			s && (this.lastRemoteSnapshotVersion = s),
			e > this.Rs && (this.Rs = e),
			C.resolve()
		);
	}
	Sn(t) {
		this.As.set(t.target, t);
		const e = t.targetId;
		e > this.highestTargetId &&
			((this.bs = new Wn(e)), (this.highestTargetId = e)),
			t.sequenceNumber > this.Rs && (this.Rs = t.sequenceNumber);
	}
	addTargetData(t, e) {
		return this.Sn(e), (this.targetCount += 1), C.resolve();
	}
	updateTargetData(t, e) {
		return this.Sn(e), C.resolve();
	}
	removeTargetData(t, e) {
		return (
			this.As.delete(e.target),
			this.vs.hs(e.targetId),
			(this.targetCount -= 1),
			C.resolve()
		);
	}
	removeTargets(t, e, s) {
		let i = 0;
		const r = [];
		return (
			this.As.forEach((o, a) => {
				a.sequenceNumber <= e &&
					s.get(a.targetId) === null &&
					(this.As.delete(o),
					r.push(this.removeMatchingKeysForTargetId(t, a.targetId)),
					i++);
			}),
			C.waitFor(r).next(() => i)
		);
	}
	getTargetCount(t) {
		return C.resolve(this.targetCount);
	}
	getTargetData(t, e) {
		const s = this.As.get(e) || null;
		return C.resolve(s);
	}
	addMatchingKeys(t, e, s) {
		return this.vs.os(e, s), C.resolve();
	}
	removeMatchingKeys(t, e, s) {
		this.vs.cs(e, s);
		const i = this.persistence.referenceDelegate,
			r = [];
		return (
			i &&
				e.forEach((o) => {
					r.push(i.markPotentiallyOrphaned(t, o));
				}),
			C.waitFor(r)
		);
	}
	removeMatchingKeysForTargetId(t, e) {
		return this.vs.hs(e), C.resolve();
	}
	getMatchingKeysForTargetId(t, e) {
		const s = this.vs.fs(e);
		return C.resolve(s);
	}
	containsKey(t, e) {
		return C.resolve(this.vs.containsKey(e));
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class HS {
	constructor(t, e) {
		(this.Ps = {}),
			(this.overlays = {}),
			(this.Vs = new vc(0)),
			(this.Ss = !1),
			(this.Ss = !0),
			(this.referenceDelegate = t(this)),
			(this.Ds = new jS(this)),
			(this.indexManager = new PS()),
			(this.remoteDocumentCache = (function (s) {
				return new $S(s);
			})((s) => this.referenceDelegate.Cs(s))),
			(this.serializer = new DS(e)),
			(this.xs = new BS(this.serializer));
	}
	start() {
		return Promise.resolve();
	}
	shutdown() {
		return (this.Ss = !1), Promise.resolve();
	}
	get started() {
		return this.Ss;
	}
	setDatabaseDeletedListener() {}
	setNetworkEnabled() {}
	getIndexManager(t) {
		return this.indexManager;
	}
	getDocumentOverlayCache(t) {
		let e = this.overlays[t.toKey()];
		return e || ((e = new VS()), (this.overlays[t.toKey()] = e)), e;
	}
	getMutationQueue(t, e) {
		let s = this.Ps[t.toKey()];
		return (
			s || ((s = new zS(e, this.referenceDelegate)), (this.Ps[t.toKey()] = s)),
			s
		);
	}
	getTargetCache() {
		return this.Ds;
	}
	getRemoteDocumentCache() {
		return this.remoteDocumentCache;
	}
	getBundleCache() {
		return this.xs;
	}
	runTransaction(t, e, s) {
		D("MemoryPersistence", "Starting transaction:", t);
		const i = new WS(this.Vs.next());
		return (
			this.referenceDelegate.Ns(),
			s(i)
				.next((r) => this.referenceDelegate.ks(i).next(() => r))
				.toPromise()
				.then((r) => (i.raiseOnCommittedEvent(), r))
		);
	}
	Os(t, e) {
		return C.or(Object.values(this.Ps).map((s) => () => s.containsKey(t, e)));
	}
}
class WS extends Mw {
	constructor(t) {
		super(), (this.currentSequenceNumber = t);
	}
}
class Tc {
	constructor(t) {
		(this.persistence = t), (this.$s = new Cc()), (this.Ms = null);
	}
	static Fs(t) {
		return new Tc(t);
	}
	get Bs() {
		if (this.Ms) return this.Ms;
		throw R();
	}
	addReference(t, e, s) {
		return (
			this.$s.addReference(s, e), this.Bs.delete(s.toString()), C.resolve()
		);
	}
	removeReference(t, e, s) {
		return (
			this.$s.removeReference(s, e), this.Bs.add(s.toString()), C.resolve()
		);
	}
	markPotentiallyOrphaned(t, e) {
		return this.Bs.add(e.toString()), C.resolve();
	}
	removeTarget(t, e) {
		this.$s.hs(e.targetId).forEach((i) => this.Bs.add(i.toString()));
		const s = this.persistence.getTargetCache();
		return s
			.getMatchingKeysForTargetId(t, e.targetId)
			.next((i) => {
				i.forEach((r) => this.Bs.add(r.toString()));
			})
			.next(() => s.removeTargetData(t, e));
	}
	Ns() {
		this.Ms = new Set();
	}
	ks(t) {
		const e = this.persistence.getRemoteDocumentCache().newChangeBuffer();
		return C.forEach(this.Bs, (s) => {
			const i = O.fromPath(s);
			return this.Ls(t, i).next((r) => {
				r || e.removeEntry(i, N.min());
			});
		}).next(() => ((this.Ms = null), e.apply(t)));
	}
	updateLimboDocument(t, e) {
		return this.Ls(t, e).next((s) => {
			s ? this.Bs.delete(e.toString()) : this.Bs.add(e.toString());
		});
	}
	Cs(t) {
		return 0;
	}
	Ls(t, e) {
		return C.or([
			() => C.resolve(this.$s.containsKey(e)),
			() => this.persistence.getTargetCache().containsKey(t, e),
			() => this.persistence.Os(t, e),
		]);
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ic {
	constructor(t, e, s, i) {
		(this.targetId = t), (this.fromCache = e), (this.Vi = s), (this.Si = i);
	}
	static Di(t, e) {
		let s = $(),
			i = $();
		for (const r of e.docChanges)
			switch (r.type) {
				case 0:
					s = s.add(r.doc.key);
					break;
				case 1:
					i = i.add(r.doc.key);
			}
		return new Ic(t, e.fromCache, s, i);
	}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class qS {
	constructor() {
		this.Ci = !1;
	}
	initialize(t, e) {
		(this.xi = t), (this.indexManager = e), (this.Ci = !0);
	}
	getDocumentsMatchingQuery(t, e, s, i) {
		return this.Ni(t, e)
			.next((r) => r || this.ki(t, e, i, s))
			.next((r) => r || this.Oi(t, e));
	}
	Ni(t, e) {
		if (Gh(e)) return C.resolve(null);
		let s = Ee(e);
		return this.indexManager.getIndexType(t, s).next((i) =>
			i === 0
				? null
				: (e.limit !== null && i === 1 && ((e = ka(e, null, "F")), (s = Ee(e))),
				  this.indexManager.getDocumentsMatchingTarget(t, s).next((r) => {
						const o = $(...r);
						return this.xi.getDocuments(t, o).next((a) =>
							this.indexManager.getMinOffset(t, s).next((c) => {
								const l = this.$i(e, a);
								return this.Mi(e, l, o, c.readTime)
									? this.Ni(t, ka(e, null, "F"))
									: this.Fi(t, l, e, c);
							}),
						);
				  })),
		);
	}
	ki(t, e, s, i) {
		return Gh(e) || i.isEqual(N.min())
			? this.Oi(t, e)
			: this.xi.getDocuments(t, s).next((r) => {
					const o = this.$i(e, r);
					return this.Mi(e, o, s, i)
						? this.Oi(t, e)
						: (zh() <= K.DEBUG &&
								D(
									"QueryEngine",
									"Re-using previous result from %s to execute query: %s",
									i.toString(),
									Ca(e),
								),
						  this.Fi(t, o, e, kw(i, -1)));
			  });
	}
	$i(t, e) {
		let s = new bt(Xf(t));
		return (
			e.forEach((i, r) => {
				no(t, r) && (s = s.add(r));
			}),
			s
		);
	}
	Mi(t, e, s, i) {
		if (t.limit === null) return !1;
		if (s.size !== e.size) return !0;
		const r = t.limitType === "F" ? e.last() : e.first();
		return !!r && (r.hasPendingWrites || r.version.compareTo(i) > 0);
	}
	Oi(t, e) {
		return (
			zh() <= K.DEBUG &&
				D("QueryEngine", "Using full collection scan to execute query:", Ca(e)),
			this.xi.getDocumentsMatchingQuery(t, e, We.min())
		);
	}
	Fi(t, e, s, i) {
		return this.xi.getDocumentsMatchingQuery(t, s, i).next(
			(r) => (
				e.forEach((o) => {
					r = r.insert(o.key, o);
				}),
				r
			),
		);
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class KS {
	constructor(t, e, s, i) {
		(this.persistence = t),
			(this.Bi = e),
			(this.serializer = i),
			(this.Li = new vt(Y)),
			(this.qi = new ts((r) => _c(r), wc)),
			(this.Ui = new Map()),
			(this.Ki = t.getRemoteDocumentCache()),
			(this.Ds = t.getTargetCache()),
			(this.xs = t.getBundleCache()),
			this.Gi(s);
	}
	Gi(t) {
		(this.documentOverlayCache = this.persistence.getDocumentOverlayCache(t)),
			(this.indexManager = this.persistence.getIndexManager(t)),
			(this.mutationQueue = this.persistence.getMutationQueue(
				t,
				this.indexManager,
			)),
			(this.localDocuments = new FS(
				this.Ki,
				this.mutationQueue,
				this.documentOverlayCache,
				this.indexManager,
			)),
			this.Ki.setIndexManager(this.indexManager),
			this.Bi.initialize(this.localDocuments, this.indexManager);
	}
	collectGarbage(t) {
		return this.persistence.runTransaction(
			"Collect garbage",
			"readwrite-primary",
			(e) => t.collect(e, this.Li),
		);
	}
}
function YS(n, t, e, s) {
	return new KS(n, t, e, s);
}
async function vg(n, t) {
	const e = V(n);
	return await e.persistence.runTransaction(
		"Handle user change",
		"readonly",
		(s) => {
			let i;
			return e.mutationQueue
				.getAllMutationBatches(s)
				.next(
					(r) => ((i = r), e.Gi(t), e.mutationQueue.getAllMutationBatches(s)),
				)
				.next((r) => {
					const o = [],
						a = [];
					let c = $();
					for (const l of i) {
						o.push(l.batchId);
						for (const h of l.mutations) c = c.add(h.key);
					}
					for (const l of r) {
						a.push(l.batchId);
						for (const h of l.mutations) c = c.add(h.key);
					}
					return e.localDocuments
						.getDocuments(s, c)
						.next((l) => ({ Qi: l, removedBatchIds: o, addedBatchIds: a }));
				});
		},
	);
}
function GS(n, t) {
	const e = V(n);
	return e.persistence.runTransaction(
		"Acknowledge batch",
		"readwrite-primary",
		(s) => {
			const i = t.batch.keys(),
				r = e.Ki.newChangeBuffer({ trackRemovals: !0 });
			return (function (o, a, c, l) {
				const h = c.batch,
					u = h.keys();
				let d = C.resolve();
				return (
					u.forEach((f) => {
						d = d
							.next(() => l.getEntry(a, f))
							.next((g) => {
								const p = c.docVersions.get(f);
								tt(p !== null),
									g.version.compareTo(p) < 0 &&
										(h.applyToRemoteDocument(g, c),
										g.isValidDocument() &&
											(g.setReadTime(c.commitVersion), l.addEntry(g)));
							});
					}),
					d.next(() => o.mutationQueue.removeMutationBatch(a, h))
				);
			})(e, s, t, r)
				.next(() => r.apply(s))
				.next(() => e.mutationQueue.performConsistencyCheck(s))
				.next(() =>
					e.documentOverlayCache.removeOverlaysForBatchId(
						s,
						i,
						t.batch.batchId,
					),
				)
				.next(() =>
					e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(
						s,
						(function (o) {
							let a = $();
							for (let c = 0; c < o.mutationResults.length; ++c)
								o.mutationResults[c].transformResults.length > 0 &&
									(a = a.add(o.batch.mutations[c].key));
							return a;
						})(t),
					),
				)
				.next(() => e.localDocuments.getDocuments(s, i));
		},
	);
}
function xg(n) {
	const t = V(n);
	return t.persistence.runTransaction(
		"Get last remote snapshot version",
		"readonly",
		(e) => t.Ds.getLastRemoteSnapshotVersion(e),
	);
}
function XS(n, t) {
	const e = V(n),
		s = t.snapshotVersion;
	let i = e.Li;
	return e.persistence
		.runTransaction("Apply remote event", "readwrite-primary", (r) => {
			const o = e.Ki.newChangeBuffer({ trackRemovals: !0 });
			i = e.Li;
			const a = [];
			t.targetChanges.forEach((h, u) => {
				const d = i.get(u);
				if (!d) return;
				a.push(
					e.Ds.removeMatchingKeys(r, h.removedDocuments, u).next(() =>
						e.Ds.addMatchingKeys(r, h.addedDocuments, u),
					),
				);
				let f = d.withSequenceNumber(r.currentSequenceNumber);
				t.targetMismatches.has(u)
					? (f = f
							.withResumeToken(Nt.EMPTY_BYTE_STRING, N.min())
							.withLastLimboFreeSnapshotVersion(N.min()))
					: h.resumeToken.approximateByteSize() > 0 &&
					  (f = f.withResumeToken(h.resumeToken, s)),
					(i = i.insert(u, f)),
					(function (g, p, m) {
						return g.resumeToken.approximateByteSize() === 0 ||
							p.snapshotVersion.toMicroseconds() -
								g.snapshotVersion.toMicroseconds() >=
								3e8
							? !0
							: m.addedDocuments.size +
									m.modifiedDocuments.size +
									m.removedDocuments.size >
									0;
					})(d, f, h) && a.push(e.Ds.updateTargetData(r, f));
			});
			let c = ke(),
				l = $();
			if (
				(t.documentUpdates.forEach((h) => {
					t.resolvedLimboDocuments.has(h) &&
						a.push(e.persistence.referenceDelegate.updateLimboDocument(r, h));
				}),
				a.push(
					QS(r, o, t.documentUpdates).next((h) => {
						(c = h.zi), (l = h.ji);
					}),
				),
				!s.isEqual(N.min()))
			) {
				const h = e.Ds.getLastRemoteSnapshotVersion(r).next((u) =>
					e.Ds.setTargetsMetadata(r, r.currentSequenceNumber, s),
				);
				a.push(h);
			}
			return C.waitFor(a)
				.next(() => o.apply(r))
				.next(() => e.localDocuments.getLocalViewOfDocuments(r, c, l))
				.next(() => c);
		})
		.then((r) => ((e.Li = i), r));
}
function QS(n, t, e) {
	let s = $(),
		i = $();
	return (
		e.forEach((r) => (s = s.add(r))),
		t.getEntries(n, s).next((r) => {
			let o = ke();
			return (
				e.forEach((a, c) => {
					const l = r.get(a);
					c.isFoundDocument() !== l.isFoundDocument() && (i = i.add(a)),
						c.isNoDocument() && c.version.isEqual(N.min())
							? (t.removeEntry(a, c.readTime), (o = o.insert(a, c)))
							: !l.isValidDocument() ||
							  c.version.compareTo(l.version) > 0 ||
							  (c.version.compareTo(l.version) === 0 && l.hasPendingWrites)
							? (t.addEntry(c), (o = o.insert(a, c)))
							: D(
									"LocalStore",
									"Ignoring outdated watch update for ",
									a,
									". Current version:",
									l.version,
									" Watch version:",
									c.version,
							  );
				}),
				{ zi: o, ji: i }
			);
		})
	);
}
function JS(n, t) {
	const e = V(n);
	return e.persistence.runTransaction(
		"Get next mutation batch",
		"readonly",
		(s) => (
			t === void 0 && (t = -1),
			e.mutationQueue.getNextMutationBatchAfterBatchId(s, t)
		),
	);
}
function ZS(n, t) {
	const e = V(n);
	return e.persistence
		.runTransaction("Allocate target", "readwrite", (s) => {
			let i;
			return e.Ds.getTargetData(s, t).next((r) =>
				r
					? ((i = r), C.resolve(i))
					: e.Ds.allocateTargetId(s).next(
							(o) => (
								(i = new gn(t, o, 0, s.currentSequenceNumber)),
								e.Ds.addTargetData(s, i).next(() => i)
							),
					  ),
			);
		})
		.then((s) => {
			const i = e.Li.get(s.targetId);
			return (
				(i === null || s.snapshotVersion.compareTo(i.snapshotVersion) > 0) &&
					((e.Li = e.Li.insert(s.targetId, s)), e.qi.set(t, s.targetId)),
				s
			);
		});
}
async function Aa(n, t, e) {
	const s = V(n),
		i = s.Li.get(t),
		r = e ? "readwrite" : "readwrite-primary";
	try {
		e ||
			(await s.persistence.runTransaction("Release target", r, (o) =>
				s.persistence.referenceDelegate.removeTarget(o, i),
			));
	} catch (o) {
		if (!fi(o)) throw o;
		D("LocalStore", `Failed to update sequence numbers for target ${t}: ${o}`);
	}
	(s.Li = s.Li.remove(t)), s.qi.delete(i.target);
}
function iu(n, t, e) {
	const s = V(n);
	let i = N.min(),
		r = $();
	return s.persistence.runTransaction("Execute query", "readonly", (o) =>
		(function (a, c, l) {
			const h = V(a),
				u = h.qi.get(l);
			return u !== void 0 ? C.resolve(h.Li.get(u)) : h.Ds.getTargetData(c, l);
		})(s, o, Ee(t))
			.next((a) => {
				if (a)
					return (
						(i = a.lastLimboFreeSnapshotVersion),
						s.Ds.getMatchingKeysForTargetId(o, a.targetId).next((c) => {
							r = c;
						})
					);
			})
			.next(() =>
				s.Bi.getDocumentsMatchingQuery(o, t, e ? i : N.min(), e ? r : $()),
			)
			.next((a) => (tE(s, Gw(t), a), { documents: a, Wi: r })),
	);
}
function tE(n, t, e) {
	let s = n.Ui.get(t) || N.min();
	e.forEach((i, r) => {
		r.readTime.compareTo(s) > 0 && (s = r.readTime);
	}),
		n.Ui.set(t, s);
}
class ru {
	constructor() {
		this.activeTargetIds = tg();
	}
	tr(t) {
		this.activeTargetIds = this.activeTargetIds.add(t);
	}
	er(t) {
		this.activeTargetIds = this.activeTargetIds.delete(t);
	}
	Xi() {
		const t = {
			activeTargetIds: this.activeTargetIds.toArray(),
			updateTimeMs: Date.now(),
		};
		return JSON.stringify(t);
	}
}
class eE {
	constructor() {
		(this.Br = new ru()),
			(this.Lr = {}),
			(this.onlineStateHandler = null),
			(this.sequenceNumberHandler = null);
	}
	addPendingMutation(t) {}
	updateMutationState(t, e, s) {}
	addLocalQueryTarget(t) {
		return this.Br.tr(t), this.Lr[t] || "not-current";
	}
	updateQueryState(t, e, s) {
		this.Lr[t] = e;
	}
	removeLocalQueryTarget(t) {
		this.Br.er(t);
	}
	isLocalQueryTarget(t) {
		return this.Br.activeTargetIds.has(t);
	}
	clearQueryState(t) {
		delete this.Lr[t];
	}
	getAllActiveQueryTargets() {
		return this.Br.activeTargetIds;
	}
	isActiveQueryTarget(t) {
		return this.Br.activeTargetIds.has(t);
	}
	start() {
		return (this.Br = new ru()), Promise.resolve();
	}
	handleUserChange(t, e, s) {}
	setOnlineState(t) {}
	shutdown() {}
	writeSequenceNumber(t) {}
	notifyBundleLoaded(t) {}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nE {
	qr(t) {}
	shutdown() {}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ou {
	constructor() {
		(this.Ur = () => this.Kr()),
			(this.Gr = () => this.Qr()),
			(this.zr = []),
			this.jr();
	}
	qr(t) {
		this.zr.push(t);
	}
	shutdown() {
		window.removeEventListener("online", this.Ur),
			window.removeEventListener("offline", this.Gr);
	}
	jr() {
		window.addEventListener("online", this.Ur),
			window.addEventListener("offline", this.Gr);
	}
	Kr() {
		D("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
		for (const t of this.zr) t(0);
	}
	Qr() {
		D("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
		for (const t of this.zr) t(1);
	}
	static D() {
		return (
			typeof window < "u" &&
			window.addEventListener !== void 0 &&
			window.removeEventListener !== void 0
		);
	}
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Vi = null;
function jo() {
	return (
		Vi === null
			? (Vi = 268435456 + Math.round(2147483648 * Math.random()))
			: Vi++,
		"0x" + Vi.toString(16)
	);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const sE = {
	BatchGetDocuments: "batchGet",
	Commit: "commit",
	RunQuery: "runQuery",
	RunAggregationQuery: "runAggregationQuery",
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iE {
	constructor(t) {
		(this.Wr = t.Wr), (this.Hr = t.Hr);
	}
	Jr(t) {
		this.Yr = t;
	}
	Zr(t) {
		this.Xr = t;
	}
	onMessage(t) {
		this.eo = t;
	}
	close() {
		this.Hr();
	}
	send(t) {
		this.Wr(t);
	}
	no() {
		this.Yr();
	}
	so(t) {
		this.Xr(t);
	}
	io(t) {
		this.eo(t);
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Tt = "WebChannelConnection";
class rE extends class {
	constructor(t) {
		(this.databaseInfo = t), (this.databaseId = t.databaseId);
		const e = t.ssl ? "https" : "http";
		(this.ro = e + "://" + t.host),
			(this.oo =
				"projects/" +
				this.databaseId.projectId +
				"/databases/" +
				this.databaseId.database +
				"/documents");
	}
	get uo() {
		return !1;
	}
	co(t, e, s, i, r) {
		const o = jo(),
			a = this.ao(t, e);
		D("RestConnection", `Sending RPC '${t}' ${o}:`, a, s);
		const c = {};
		return (
			this.ho(c, i, r),
			this.lo(t, a, c, s).then(
				(l) => (D("RestConnection", `Received RPC '${t}' ${o}: `, l), l),
				(l) => {
					throw (
						(_r(
							"RestConnection",
							`RPC '${t}' ${o} failed with error: `,
							l,
							"url: ",
							a,
							"request:",
							s,
						),
						l)
					);
				},
			)
		);
	}
	fo(t, e, s, i, r, o) {
		return this.co(t, e, s, i, r);
	}
	ho(t, e, s) {
		(t["X-Goog-Api-Client"] = "gl-js/ fire/" + Jn),
			(t["Content-Type"] = "text/plain"),
			this.databaseInfo.appId &&
				(t["X-Firebase-GMPID"] = this.databaseInfo.appId),
			e && e.headers.forEach((i, r) => (t[r] = i)),
			s && s.headers.forEach((i, r) => (t[r] = i));
	}
	ao(t, e) {
		const s = sE[t];
		return `${this.ro}/v1/${e}:${s}`;
	}
} {
	constructor(t) {
		super(t),
			(this.forceLongPolling = t.forceLongPolling),
			(this.autoDetectLongPolling = t.autoDetectLongPolling),
			(this.useFetchStreams = t.useFetchStreams);
	}
	lo(t, e, s, i) {
		const r = jo();
		return new Promise((o, a) => {
			const c = new pw();
			c.setWithCredentials(!0),
				c.listenOnce(dw.COMPLETE, () => {
					try {
						switch (c.getLastErrorCode()) {
							case $o.NO_ERROR:
								const h = c.getResponseJson();
								D(Tt, `XHR for RPC '${t}' ${r} received:`, JSON.stringify(h)),
									o(h);
								break;
							case $o.TIMEOUT:
								D(Tt, `RPC '${t}' ${r} timed out`),
									a(new P(w.DEADLINE_EXCEEDED, "Request time out"));
								break;
							case $o.HTTP_ERROR:
								const u = c.getStatus();
								if (
									(D(
										Tt,
										`RPC '${t}' ${r} failed with status:`,
										u,
										"response text:",
										c.getResponseText(),
									),
									u > 0)
								) {
									let d = c.getResponseJson();
									Array.isArray(d) && (d = d[0]);
									const f = d?.error;
									if (f && f.status && f.message) {
										const g = (function (p) {
											const m = p.toLowerCase().replace(/_/g, "-");
											return Object.values(w).indexOf(m) >= 0 ? m : w.UNKNOWN;
										})(f.status);
										a(new P(g, f.message));
									} else
										a(
											new P(
												w.UNKNOWN,
												"Server responded with status " + c.getStatus(),
											),
										);
								} else a(new P(w.UNAVAILABLE, "Connection failed."));
								break;
							default:
								R();
						}
					} finally {
						D(Tt, `RPC '${t}' ${r} completed.`);
					}
				});
			const l = JSON.stringify(i);
			D(Tt, `RPC '${t}' ${r} sending request:`, i), c.send(e, "POST", l, s, 15);
		});
	}
	wo(t, e, s) {
		const i = jo(),
			r = [this.ro, "/", "google.firestore.v1.Firestore", "/", t, "/channel"],
			o = hw(),
			a = uw(),
			c = {
				httpSessionIdParam: "gsessionid",
				initMessageHeaders: {},
				messageUrlParams: {
					database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`,
				},
				sendRawJson: !0,
				supportsCrossDomainXhr: !0,
				internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
				forceLongPolling: this.forceLongPolling,
				detectBufferingProxy: this.autoDetectLongPolling,
			};
		this.useFetchStreams && (c.xmlHttpFactory = new gw({})),
			this.ho(c.initMessageHeaders, e, s),
			(c.encodeInitMessageHeaders = !0);
		const l = r.join("");
		D(Tt, `Creating RPC '${t}' stream ${i}: ${l}`, c);
		const h = o.createWebChannel(l, c);
		let u = !1,
			d = !1;
		const f = new iE({
				Wr: (p) => {
					d
						? D(Tt, `Not sending because RPC '${t}' stream ${i} is closed:`, p)
						: (u ||
								(D(Tt, `Opening RPC '${t}' stream ${i} transport.`),
								h.open(),
								(u = !0)),
						  D(Tt, `RPC '${t}' stream ${i} sending:`, p),
						  h.send(p));
				},
				Hr: () => h.close(),
			}),
			g = (p, m, b) => {
				p.listen(m, (y) => {
					try {
						b(y);
					} catch (v) {
						setTimeout(() => {
							throw v;
						}, 0);
					}
				});
			};
		return (
			g(h, Li.EventType.OPEN, () => {
				d || D(Tt, `RPC '${t}' stream ${i} transport opened.`);
			}),
			g(h, Li.EventType.CLOSE, () => {
				d ||
					((d = !0), D(Tt, `RPC '${t}' stream ${i} transport closed`), f.so());
			}),
			g(h, Li.EventType.ERROR, (p) => {
				d ||
					((d = !0),
					_r(Tt, `RPC '${t}' stream ${i} transport errored:`, p),
					f.so(new P(w.UNAVAILABLE, "The operation could not be completed")));
			}),
			g(h, Li.EventType.MESSAGE, (p) => {
				var m;
				if (!d) {
					const b = p.data[0];
					tt(!!b);
					const y = b,
						v =
							y.error ||
							((m = y[0]) === null || m === void 0 ? void 0 : m.error);
					if (v) {
						D(Tt, `RPC '${t}' stream ${i} received error:`, v);
						const _ = v.status;
						let x = (function (S) {
								const E = ft[S];
								if (E !== void 0) return hg(E);
							})(_),
							k = v.message;
						x === void 0 &&
							((x = w.INTERNAL),
							(k =
								"Unknown error status: " + _ + " with message " + v.message)),
							(d = !0),
							f.so(new P(x, k)),
							h.close();
					} else D(Tt, `RPC '${t}' stream ${i} received:`, b), f.io(b);
				}
			}),
			g(a, fw.STAT_EVENT, (p) => {
				p.stat === Bh.PROXY
					? D(Tt, `RPC '${t}' stream ${i} detected buffering proxy`)
					: p.stat === Bh.NOPROXY &&
					  D(Tt, `RPC '${t}' stream ${i} detected no buffering proxy`);
			}),
			setTimeout(() => {
				f.no();
			}, 0),
			f
		);
	}
}
function Ho() {
	return typeof document < "u" ? document : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function oo(n) {
	return new yS(n, !0);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _g {
	constructor(t, e, s = 1e3, i = 1.5, r = 6e4) {
		(this.Ws = t),
			(this.timerId = e),
			(this._o = s),
			(this.mo = i),
			(this.yo = r),
			(this.po = 0),
			(this.Io = null),
			(this.To = Date.now()),
			this.reset();
	}
	reset() {
		this.po = 0;
	}
	Eo() {
		this.po = this.yo;
	}
	Ao(t) {
		this.cancel();
		const e = Math.floor(this.po + this.Ro()),
			s = Math.max(0, Date.now() - this.To),
			i = Math.max(0, e - s);
		i > 0 &&
			D(
				"ExponentialBackoff",
				`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${e} ms, last attempt: ${s} ms ago)`,
			),
			(this.Io = this.Ws.enqueueAfterDelay(
				this.timerId,
				i,
				() => ((this.To = Date.now()), t()),
			)),
			(this.po *= this.mo),
			this.po < this._o && (this.po = this._o),
			this.po > this.yo && (this.po = this.yo);
	}
	vo() {
		this.Io !== null && (this.Io.skipDelay(), (this.Io = null));
	}
	cancel() {
		this.Io !== null && (this.Io.cancel(), (this.Io = null));
	}
	Ro() {
		return (Math.random() - 0.5) * this.po;
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wg {
	constructor(t, e, s, i, r, o, a, c) {
		(this.Ws = t),
			(this.bo = s),
			(this.Po = i),
			(this.connection = r),
			(this.authCredentialsProvider = o),
			(this.appCheckCredentialsProvider = a),
			(this.listener = c),
			(this.state = 0),
			(this.Vo = 0),
			(this.So = null),
			(this.Do = null),
			(this.stream = null),
			(this.Co = new _g(t, e));
	}
	xo() {
		return this.state === 1 || this.state === 5 || this.No();
	}
	No() {
		return this.state === 2 || this.state === 3;
	}
	start() {
		this.state !== 4 ? this.auth() : this.ko();
	}
	async stop() {
		this.xo() && (await this.close(0));
	}
	Oo() {
		(this.state = 0), this.Co.reset();
	}
	$o() {
		this.No() &&
			this.So === null &&
			(this.So = this.Ws.enqueueAfterDelay(this.bo, 6e4, () => this.Mo()));
	}
	Fo(t) {
		this.Bo(), this.stream.send(t);
	}
	async Mo() {
		if (this.No()) return this.close(0);
	}
	Bo() {
		this.So && (this.So.cancel(), (this.So = null));
	}
	Lo() {
		this.Do && (this.Do.cancel(), (this.Do = null));
	}
	async close(t, e) {
		this.Bo(),
			this.Lo(),
			this.Co.cancel(),
			this.Vo++,
			t !== 4
				? this.Co.reset()
				: e && e.code === w.RESOURCE_EXHAUSTED
				? (Se(e.toString()),
				  Se("Using maximum backoff delay to prevent overloading the backend."),
				  this.Co.Eo())
				: e &&
				  e.code === w.UNAUTHENTICATED &&
				  this.state !== 3 &&
				  (this.authCredentialsProvider.invalidateToken(),
				  this.appCheckCredentialsProvider.invalidateToken()),
			this.stream !== null &&
				(this.qo(), this.stream.close(), (this.stream = null)),
			(this.state = t),
			await this.listener.Zr(e);
	}
	qo() {}
	auth() {
		this.state = 1;
		const t = this.Uo(this.Vo),
			e = this.Vo;
		Promise.all([
			this.authCredentialsProvider.getToken(),
			this.appCheckCredentialsProvider.getToken(),
		]).then(
			([s, i]) => {
				this.Vo === e && this.Ko(s, i);
			},
			(s) => {
				t(() => {
					const i = new P(
						w.UNKNOWN,
						"Fetching auth token failed: " + s.message,
					);
					return this.Go(i);
				});
			},
		);
	}
	Ko(t, e) {
		const s = this.Uo(this.Vo);
		(this.stream = this.Qo(t, e)),
			this.stream.Jr(() => {
				s(
					() => (
						(this.state = 2),
						(this.Do = this.Ws.enqueueAfterDelay(
							this.Po,
							1e4,
							() => (this.No() && (this.state = 3), Promise.resolve()),
						)),
						this.listener.Jr()
					),
				);
			}),
			this.stream.Zr((i) => {
				s(() => this.Go(i));
			}),
			this.stream.onMessage((i) => {
				s(() => this.onMessage(i));
			});
	}
	ko() {
		(this.state = 5),
			this.Co.Ao(async () => {
				(this.state = 0), this.start();
			});
	}
	Go(t) {
		return (
			D("PersistentStream", `close with error: ${t}`),
			(this.stream = null),
			this.close(4, t)
		);
	}
	Uo(t) {
		return (e) => {
			this.Ws.enqueueAndForget(() =>
				this.Vo === t
					? e()
					: (D(
							"PersistentStream",
							"stream callback skipped by getCloseGuardedDispatcher.",
					  ),
					  Promise.resolve()),
			);
		};
	}
}
class oE extends wg {
	constructor(t, e, s, i, r, o) {
		super(
			t,
			"listen_stream_connection_backoff",
			"listen_stream_idle",
			"health_check_timeout",
			e,
			s,
			i,
			o,
		),
			(this.serializer = r);
	}
	Qo(t, e) {
		return this.connection.wo("Listen", t, e);
	}
	onMessage(t) {
		this.Co.reset();
		const e = xS(this.serializer, t),
			s = (function (i) {
				if (!("targetChange" in i)) return N.min();
				const r = i.targetChange;
				return r.targetIds && r.targetIds.length
					? N.min()
					: r.readTime
					? re(r.readTime)
					: N.min();
			})(t);
		return this.listener.zo(e, s);
	}
	jo(t) {
		const e = {};
		(e.database = Ma(this.serializer)),
			(e.addTarget = (function (i, r) {
				let o;
				const a = r.target;
				return (
					(o = Ea(a) ? { documents: SS(i, a) } : { query: ES(i, a) }),
					(o.targetId = r.targetId),
					r.resumeToken.approximateByteSize() > 0
						? (o.resumeToken = fg(i, r.resumeToken))
						: r.snapshotVersion.compareTo(N.min()) > 0 &&
						  (o.readTime = Cr(i, r.snapshotVersion.toTimestamp())),
					o
				);
			})(this.serializer, t));
		const s = CS(this.serializer, t);
		s && (e.labels = s), this.Fo(e);
	}
	Wo(t) {
		const e = {};
		(e.database = Ma(this.serializer)), (e.removeTarget = t), this.Fo(e);
	}
}
class aE extends wg {
	constructor(t, e, s, i, r, o) {
		super(
			t,
			"write_stream_connection_backoff",
			"write_stream_idle",
			"health_check_timeout",
			e,
			s,
			i,
			o,
		),
			(this.serializer = r),
			(this.Ho = !1);
	}
	get Jo() {
		return this.Ho;
	}
	start() {
		(this.Ho = !1), (this.lastStreamToken = void 0), super.start();
	}
	qo() {
		this.Ho && this.Yo([]);
	}
	Qo(t, e) {
		return this.connection.wo("Write", t, e);
	}
	onMessage(t) {
		if (
			(tt(!!t.streamToken), (this.lastStreamToken = t.streamToken), this.Ho)
		) {
			this.Co.reset();
			const e = wS(t.writeResults, t.commitTime),
				s = re(t.commitTime);
			return this.listener.Zo(s, e);
		}
		return (
			tt(!t.writeResults || t.writeResults.length === 0),
			(this.Ho = !0),
			this.listener.Xo()
		);
	}
	tu() {
		const t = {};
		(t.database = Ma(this.serializer)), this.Fo(t);
	}
	Yo(t) {
		const e = {
			streamToken: this.lastStreamToken,
			writes: t.map((s) => _S(this.serializer, s)),
		};
		this.Fo(e);
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cE extends class {} {
	constructor(t, e, s, i) {
		super(),
			(this.authCredentials = t),
			(this.appCheckCredentials = e),
			(this.connection = s),
			(this.serializer = i),
			(this.eu = !1);
	}
	nu() {
		if (this.eu)
			throw new P(
				w.FAILED_PRECONDITION,
				"The client has already been terminated.",
			);
	}
	co(t, e, s) {
		return (
			this.nu(),
			Promise.all([
				this.authCredentials.getToken(),
				this.appCheckCredentials.getToken(),
			])
				.then(([i, r]) => this.connection.co(t, e, s, i, r))
				.catch((i) => {
					throw i.name === "FirebaseError"
						? (i.code === w.UNAUTHENTICATED &&
								(this.authCredentials.invalidateToken(),
								this.appCheckCredentials.invalidateToken()),
						  i)
						: new P(w.UNKNOWN, i.toString());
				})
		);
	}
	fo(t, e, s, i) {
		return (
			this.nu(),
			Promise.all([
				this.authCredentials.getToken(),
				this.appCheckCredentials.getToken(),
			])
				.then(([r, o]) => this.connection.fo(t, e, s, r, o, i))
				.catch((r) => {
					throw r.name === "FirebaseError"
						? (r.code === w.UNAUTHENTICATED &&
								(this.authCredentials.invalidateToken(),
								this.appCheckCredentials.invalidateToken()),
						  r)
						: new P(w.UNKNOWN, r.toString());
				})
		);
	}
	terminate() {
		this.eu = !0;
	}
}
class lE {
	constructor(t, e) {
		(this.asyncQueue = t),
			(this.onlineStateHandler = e),
			(this.state = "Unknown"),
			(this.su = 0),
			(this.iu = null),
			(this.ru = !0);
	}
	ou() {
		this.su === 0 &&
			(this.uu("Unknown"),
			(this.iu = this.asyncQueue.enqueueAfterDelay(
				"online_state_timeout",
				1e4,
				() => (
					(this.iu = null),
					this.cu("Backend didn't respond within 10 seconds."),
					this.uu("Offline"),
					Promise.resolve()
				),
			)));
	}
	au(t) {
		this.state === "Online"
			? this.uu("Unknown")
			: (this.su++,
			  this.su >= 1 &&
					(this.hu(),
					this.cu(
						`Connection failed 1 times. Most recent error: ${t.toString()}`,
					),
					this.uu("Offline")));
	}
	set(t) {
		this.hu(), (this.su = 0), t === "Online" && (this.ru = !1), this.uu(t);
	}
	uu(t) {
		t !== this.state && ((this.state = t), this.onlineStateHandler(t));
	}
	cu(t) {
		const e = `Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
		this.ru ? (Se(e), (this.ru = !1)) : D("OnlineStateTracker", e);
	}
	hu() {
		this.iu !== null && (this.iu.cancel(), (this.iu = null));
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hE {
	constructor(t, e, s, i, r) {
		(this.localStore = t),
			(this.datastore = e),
			(this.asyncQueue = s),
			(this.remoteSyncer = {}),
			(this.lu = []),
			(this.fu = new Map()),
			(this.du = new Set()),
			(this.wu = []),
			(this._u = r),
			this._u.qr((o) => {
				s.enqueueAndForget(async () => {
					Cn(this) &&
						(D(
							"RemoteStore",
							"Restarting streams for network reachability change.",
						),
						await (async function (a) {
							const c = V(a);
							c.du.add(4),
								await mi(c),
								c.mu.set("Unknown"),
								c.du.delete(4),
								await ao(c);
						})(this));
				});
			}),
			(this.mu = new lE(s, i));
	}
}
async function ao(n) {
	if (Cn(n)) for (const t of n.wu) await t(!0);
}
async function mi(n) {
	for (const t of n.wu) await t(!1);
}
function Sg(n, t) {
	const e = V(n);
	e.fu.has(t.targetId) ||
		(e.fu.set(t.targetId, t), Dc(e) ? Ac(e) : es(e).No() && Mc(e, t));
}
function Eg(n, t) {
	const e = V(n),
		s = es(e);
	e.fu.delete(t),
		s.No() && kg(e, t),
		e.fu.size === 0 && (s.No() ? s.$o() : Cn(e) && e.mu.set("Unknown"));
}
function Mc(n, t) {
	n.gu.Ot(t.targetId), es(n).jo(t);
}
function kg(n, t) {
	n.gu.Ot(t), es(n).Wo(t);
}
function Ac(n) {
	(n.gu = new fS({
		getRemoteKeysForTarget: (t) => n.remoteSyncer.getRemoteKeysForTarget(t),
		ne: (t) => n.fu.get(t) || null,
	})),
		es(n).start(),
		n.mu.ou();
}
function Dc(n) {
	return Cn(n) && !es(n).xo() && n.fu.size > 0;
}
function Cn(n) {
	return V(n).du.size === 0;
}
function Cg(n) {
	n.gu = void 0;
}
async function uE(n) {
	n.fu.forEach((t, e) => {
		Mc(n, t);
	});
}
async function dE(n, t) {
	Cg(n), Dc(n) ? (n.mu.au(t), Ac(n)) : n.mu.set("Unknown");
}
async function fE(n, t, e) {
	if ((n.mu.set("Online"), t instanceof dg && t.state === 2 && t.cause))
		try {
			await (async function (s, i) {
				const r = i.cause;
				for (const o of i.targetIds)
					s.fu.has(o) &&
						(await s.remoteSyncer.rejectListen(o, r),
						s.fu.delete(o),
						s.gu.removeTarget(o));
			})(n, t);
		} catch (s) {
			D(
				"RemoteStore",
				"Failed to remove targets %s: %s ",
				t.targetIds.join(","),
				s,
			),
				await Tr(n, s);
		}
	else if (
		(t instanceof Xi ? n.gu.Kt(t) : t instanceof ug ? n.gu.Jt(t) : n.gu.zt(t),
		!e.isEqual(N.min()))
	)
		try {
			const s = await xg(n.localStore);
			e.compareTo(s) >= 0 &&
				(await (function (i, r) {
					const o = i.gu.Xt(r);
					return (
						o.targetChanges.forEach((a, c) => {
							if (a.resumeToken.approximateByteSize() > 0) {
								const l = i.fu.get(c);
								l && i.fu.set(c, l.withResumeToken(a.resumeToken, r));
							}
						}),
						o.targetMismatches.forEach((a) => {
							const c = i.fu.get(a);
							if (!c) return;
							i.fu.set(
								a,
								c.withResumeToken(Nt.EMPTY_BYTE_STRING, c.snapshotVersion),
							),
								kg(i, a);
							const l = new gn(c.target, a, 1, c.sequenceNumber);
							Mc(i, l);
						}),
						i.remoteSyncer.applyRemoteEvent(o)
					);
				})(n, e));
		} catch (s) {
			D("RemoteStore", "Failed to raise snapshot:", s), await Tr(n, s);
		}
}
async function Tr(n, t, e) {
	if (!fi(t)) throw t;
	n.du.add(1),
		await mi(n),
		n.mu.set("Offline"),
		e || (e = () => xg(n.localStore)),
		n.asyncQueue.enqueueRetryable(async () => {
			D("RemoteStore", "Retrying IndexedDB access"),
				await e(),
				n.du.delete(1),
				await ao(n);
		});
}
function Tg(n, t) {
	return t().catch((e) => Tr(n, e, t));
}
async function co(n) {
	const t = V(n),
		e = Ke(t);
	let s = t.lu.length > 0 ? t.lu[t.lu.length - 1].batchId : -1;
	for (; gE(t); )
		try {
			const i = await JS(t.localStore, s);
			if (i === null) {
				t.lu.length === 0 && e.$o();
				break;
			}
			(s = i.batchId), pE(t, i);
		} catch (i) {
			await Tr(t, i);
		}
	Ig(t) && Mg(t);
}
function gE(n) {
	return Cn(n) && n.lu.length < 10;
}
function pE(n, t) {
	n.lu.push(t);
	const e = Ke(n);
	e.No() && e.Jo && e.Yo(t.mutations);
}
function Ig(n) {
	return Cn(n) && !Ke(n).xo() && n.lu.length > 0;
}
function Mg(n) {
	Ke(n).start();
}
async function mE(n) {
	Ke(n).tu();
}
async function yE(n) {
	const t = Ke(n);
	for (const e of n.lu) t.Yo(e.mutations);
}
async function bE(n, t, e) {
	const s = n.lu.shift(),
		i = Sc.from(s, t, e);
	await Tg(n, () => n.remoteSyncer.applySuccessfulWrite(i)), await co(n);
}
async function vE(n, t) {
	t &&
		Ke(n).Jo &&
		(await (async function (e, s) {
			if (((i = s.code), dS(i) && i !== w.ABORTED)) {
				const r = e.lu.shift();
				Ke(e).Oo(),
					await Tg(e, () => e.remoteSyncer.rejectFailedWrite(r.batchId, s)),
					await co(e);
			}
			var i;
		})(n, t)),
		Ig(n) && Mg(n);
}
async function au(n, t) {
	const e = V(n);
	e.asyncQueue.verifyOperationInProgress(),
		D("RemoteStore", "RemoteStore received new credentials");
	const s = Cn(e);
	e.du.add(3),
		await mi(e),
		s && e.mu.set("Unknown"),
		await e.remoteSyncer.handleCredentialChange(t),
		e.du.delete(3),
		await ao(e);
}
async function xE(n, t) {
	const e = V(n);
	t
		? (e.du.delete(2), await ao(e))
		: t || (e.du.add(2), await mi(e), e.mu.set("Unknown"));
}
function es(n) {
	return (
		n.yu ||
			((n.yu = (function (t, e, s) {
				const i = V(t);
				return (
					i.nu(),
					new oE(
						e,
						i.connection,
						i.authCredentials,
						i.appCheckCredentials,
						i.serializer,
						s,
					)
				);
			})(n.datastore, n.asyncQueue, {
				Jr: uE.bind(null, n),
				Zr: dE.bind(null, n),
				zo: fE.bind(null, n),
			})),
			n.wu.push(async (t) => {
				t
					? (n.yu.Oo(), Dc(n) ? Ac(n) : n.mu.set("Unknown"))
					: (await n.yu.stop(), Cg(n));
			})),
		n.yu
	);
}
function Ke(n) {
	return (
		n.pu ||
			((n.pu = (function (t, e, s) {
				const i = V(t);
				return (
					i.nu(),
					new aE(
						e,
						i.connection,
						i.authCredentials,
						i.appCheckCredentials,
						i.serializer,
						s,
					)
				);
			})(n.datastore, n.asyncQueue, {
				Jr: mE.bind(null, n),
				Zr: vE.bind(null, n),
				Xo: yE.bind(null, n),
				Zo: bE.bind(null, n),
			})),
			n.wu.push(async (t) => {
				t
					? (n.pu.Oo(), await co(n))
					: (await n.pu.stop(),
					  n.lu.length > 0 &&
							(D(
								"RemoteStore",
								`Stopping write stream with ${n.lu.length} pending writes`,
							),
							(n.lu = [])));
			})),
		n.pu
	);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Oc {
	constructor(t, e, s, i, r) {
		(this.asyncQueue = t),
			(this.timerId = e),
			(this.targetTimeMs = s),
			(this.op = i),
			(this.removalCallback = r),
			(this.deferred = new Ve()),
			(this.then = this.deferred.promise.then.bind(this.deferred.promise)),
			this.deferred.promise.catch((o) => {});
	}
	static createAndSchedule(t, e, s, i, r) {
		const o = Date.now() + s,
			a = new Oc(t, e, o, i, r);
		return a.start(s), a;
	}
	start(t) {
		this.timerHandle = setTimeout(() => this.handleDelayElapsed(), t);
	}
	skipDelay() {
		return this.handleDelayElapsed();
	}
	cancel(t) {
		this.timerHandle !== null &&
			(this.clearTimeout(),
			this.deferred.reject(
				new P(w.CANCELLED, "Operation cancelled" + (t ? ": " + t : "")),
			));
	}
	handleDelayElapsed() {
		this.asyncQueue.enqueueAndForget(() =>
			this.timerHandle !== null
				? (this.clearTimeout(), this.op().then((t) => this.deferred.resolve(t)))
				: Promise.resolve(),
		);
	}
	clearTimeout() {
		this.timerHandle !== null &&
			(this.removalCallback(this),
			clearTimeout(this.timerHandle),
			(this.timerHandle = null));
	}
}
function Pc(n, t) {
	if ((Se("AsyncQueue", `${t}: ${n}`), fi(n)))
		return new P(w.UNAVAILABLE, `${t}: ${n}`);
	throw n;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Nn {
	constructor(t) {
		(this.comparator = t
			? (e, s) => t(e, s) || O.comparator(e.key, s.key)
			: (e, s) => O.comparator(e.key, s.key)),
			(this.keyedMap = xs()),
			(this.sortedSet = new vt(this.comparator));
	}
	static emptySet(t) {
		return new Nn(t.comparator);
	}
	has(t) {
		return this.keyedMap.get(t) != null;
	}
	get(t) {
		return this.keyedMap.get(t);
	}
	first() {
		return this.sortedSet.minKey();
	}
	last() {
		return this.sortedSet.maxKey();
	}
	isEmpty() {
		return this.sortedSet.isEmpty();
	}
	indexOf(t) {
		const e = this.keyedMap.get(t);
		return e ? this.sortedSet.indexOf(e) : -1;
	}
	get size() {
		return this.sortedSet.size;
	}
	forEach(t) {
		this.sortedSet.inorderTraversal((e, s) => (t(e), !1));
	}
	add(t) {
		const e = this.delete(t.key);
		return e.copy(e.keyedMap.insert(t.key, t), e.sortedSet.insert(t, null));
	}
	delete(t) {
		const e = this.get(t);
		return e
			? this.copy(this.keyedMap.remove(t), this.sortedSet.remove(e))
			: this;
	}
	isEqual(t) {
		if (!(t instanceof Nn) || this.size !== t.size) return !1;
		const e = this.sortedSet.getIterator(),
			s = t.sortedSet.getIterator();
		for (; e.hasNext(); ) {
			const i = e.getNext().key,
				r = s.getNext().key;
			if (!i.isEqual(r)) return !1;
		}
		return !0;
	}
	toString() {
		const t = [];
		return (
			this.forEach((e) => {
				t.push(e.toString());
			}),
			t.length === 0
				? "DocumentSet ()"
				: `DocumentSet (
  ` +
				  t.join(`  
`) +
				  `
)`
		);
	}
	copy(t, e) {
		const s = new Nn();
		return (
			(s.comparator = this.comparator), (s.keyedMap = t), (s.sortedSet = e), s
		);
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cu {
	constructor() {
		this.Iu = new vt(O.comparator);
	}
	track(t) {
		const e = t.doc.key,
			s = this.Iu.get(e);
		s
			? t.type !== 0 && s.type === 3
				? (this.Iu = this.Iu.insert(e, t))
				: t.type === 3 && s.type !== 1
				? (this.Iu = this.Iu.insert(e, { type: s.type, doc: t.doc }))
				: t.type === 2 && s.type === 2
				? (this.Iu = this.Iu.insert(e, { type: 2, doc: t.doc }))
				: t.type === 2 && s.type === 0
				? (this.Iu = this.Iu.insert(e, { type: 0, doc: t.doc }))
				: t.type === 1 && s.type === 0
				? (this.Iu = this.Iu.remove(e))
				: t.type === 1 && s.type === 2
				? (this.Iu = this.Iu.insert(e, { type: 1, doc: s.doc }))
				: t.type === 0 && s.type === 1
				? (this.Iu = this.Iu.insert(e, { type: 2, doc: t.doc }))
				: R()
			: (this.Iu = this.Iu.insert(e, t));
	}
	Tu() {
		const t = [];
		return (
			this.Iu.inorderTraversal((e, s) => {
				t.push(s);
			}),
			t
		);
	}
}
class qn {
	constructor(t, e, s, i, r, o, a, c, l) {
		(this.query = t),
			(this.docs = e),
			(this.oldDocs = s),
			(this.docChanges = i),
			(this.mutatedKeys = r),
			(this.fromCache = o),
			(this.syncStateChanged = a),
			(this.excludesMetadataChanges = c),
			(this.hasCachedResults = l);
	}
	static fromInitialDocuments(t, e, s, i, r) {
		const o = [];
		return (
			e.forEach((a) => {
				o.push({ type: 0, doc: a });
			}),
			new qn(t, e, Nn.emptySet(e), o, s, i, !0, !1, r)
		);
	}
	get hasPendingWrites() {
		return !this.mutatedKeys.isEmpty();
	}
	isEqual(t) {
		if (
			!(
				this.fromCache === t.fromCache &&
				this.hasCachedResults === t.hasCachedResults &&
				this.syncStateChanged === t.syncStateChanged &&
				this.mutatedKeys.isEqual(t.mutatedKeys) &&
				eo(this.query, t.query) &&
				this.docs.isEqual(t.docs) &&
				this.oldDocs.isEqual(t.oldDocs)
			)
		)
			return !1;
		const e = this.docChanges,
			s = t.docChanges;
		if (e.length !== s.length) return !1;
		for (let i = 0; i < e.length; i++)
			if (e[i].type !== s[i].type || !e[i].doc.isEqual(s[i].doc)) return !1;
		return !0;
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _E {
	constructor() {
		(this.Eu = void 0), (this.listeners = []);
	}
}
class wE {
	constructor() {
		(this.queries = new ts((t) => Gf(t), eo)),
			(this.onlineState = "Unknown"),
			(this.Au = new Set());
	}
}
async function SE(n, t) {
	const e = V(n),
		s = t.query;
	let i = !1,
		r = e.queries.get(s);
	if ((r || ((i = !0), (r = new _E())), i))
		try {
			r.Eu = await e.onListen(s);
		} catch (o) {
			const a = Pc(o, `Initialization of query '${Ca(t.query)}' failed`);
			return void t.onError(a);
		}
	e.queries.set(s, r),
		r.listeners.push(t),
		t.Ru(e.onlineState),
		r.Eu && t.vu(r.Eu) && Rc(e);
}
async function EE(n, t) {
	const e = V(n),
		s = t.query;
	let i = !1;
	const r = e.queries.get(s);
	if (r) {
		const o = r.listeners.indexOf(t);
		o >= 0 && (r.listeners.splice(o, 1), (i = r.listeners.length === 0));
	}
	if (i) return e.queries.delete(s), e.onUnlisten(s);
}
function kE(n, t) {
	const e = V(n);
	let s = !1;
	for (const i of t) {
		const r = i.query,
			o = e.queries.get(r);
		if (o) {
			for (const a of o.listeners) a.vu(i) && (s = !0);
			o.Eu = i;
		}
	}
	s && Rc(e);
}
function CE(n, t, e) {
	const s = V(n),
		i = s.queries.get(t);
	if (i) for (const r of i.listeners) r.onError(e);
	s.queries.delete(t);
}
function Rc(n) {
	n.Au.forEach((t) => {
		t.next();
	});
}
class TE {
	constructor(t, e, s) {
		(this.query = t),
			(this.bu = e),
			(this.Pu = !1),
			(this.Vu = null),
			(this.onlineState = "Unknown"),
			(this.options = s || {});
	}
	vu(t) {
		if (!this.options.includeMetadataChanges) {
			const s = [];
			for (const i of t.docChanges) i.type !== 3 && s.push(i);
			t = new qn(
				t.query,
				t.docs,
				t.oldDocs,
				s,
				t.mutatedKeys,
				t.fromCache,
				t.syncStateChanged,
				!0,
				t.hasCachedResults,
			);
		}
		let e = !1;
		return (
			this.Pu
				? this.Su(t) && (this.bu.next(t), (e = !0))
				: this.Du(t, this.onlineState) && (this.Cu(t), (e = !0)),
			(this.Vu = t),
			e
		);
	}
	onError(t) {
		this.bu.error(t);
	}
	Ru(t) {
		this.onlineState = t;
		let e = !1;
		return (
			this.Vu &&
				!this.Pu &&
				this.Du(this.Vu, t) &&
				(this.Cu(this.Vu), (e = !0)),
			e
		);
	}
	Du(t, e) {
		if (!t.fromCache) return !0;
		const s = e !== "Offline";
		return (
			(!this.options.xu || !s) &&
			(!t.docs.isEmpty() || t.hasCachedResults || e === "Offline")
		);
	}
	Su(t) {
		if (t.docChanges.length > 0) return !0;
		const e = this.Vu && this.Vu.hasPendingWrites !== t.hasPendingWrites;
		return (
			!(!t.syncStateChanged && !e) && this.options.includeMetadataChanges === !0
		);
	}
	Cu(t) {
		(t = qn.fromInitialDocuments(
			t.query,
			t.docs,
			t.mutatedKeys,
			t.fromCache,
			t.hasCachedResults,
		)),
			(this.Pu = !0),
			this.bu.next(t);
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ag {
	constructor(t) {
		this.key = t;
	}
}
class Dg {
	constructor(t) {
		this.key = t;
	}
}
class IE {
	constructor(t, e) {
		(this.query = t),
			(this.Lu = e),
			(this.qu = null),
			(this.hasCachedResults = !1),
			(this.current = !1),
			(this.Uu = $()),
			(this.mutatedKeys = $()),
			(this.Ku = Xf(t)),
			(this.Gu = new Nn(this.Ku));
	}
	get Qu() {
		return this.Lu;
	}
	zu(t, e) {
		const s = e ? e.ju : new cu(),
			i = e ? e.Gu : this.Gu;
		let r = e ? e.mutatedKeys : this.mutatedKeys,
			o = i,
			a = !1;
		const c =
				this.query.limitType === "F" && i.size === this.query.limit
					? i.last()
					: null,
			l =
				this.query.limitType === "L" && i.size === this.query.limit
					? i.first()
					: null;
		if (
			(t.inorderTraversal((h, u) => {
				const d = i.get(h),
					f = no(this.query, u) ? u : null,
					g = !!d && this.mutatedKeys.has(d.key),
					p =
						!!f &&
						(f.hasLocalMutations ||
							(this.mutatedKeys.has(f.key) && f.hasCommittedMutations));
				let m = !1;
				d && f
					? d.data.isEqual(f.data)
						? g !== p && (s.track({ type: 3, doc: f }), (m = !0))
						: this.Wu(d, f) ||
						  (s.track({ type: 2, doc: f }),
						  (m = !0),
						  ((c && this.Ku(f, c) > 0) || (l && this.Ku(f, l) < 0)) &&
								(a = !0))
					: !d && f
					? (s.track({ type: 0, doc: f }), (m = !0))
					: d &&
					  !f &&
					  (s.track({ type: 1, doc: d }), (m = !0), (c || l) && (a = !0)),
					m &&
						(f
							? ((o = o.add(f)), (r = p ? r.add(h) : r.delete(h)))
							: ((o = o.delete(h)), (r = r.delete(h))));
			}),
			this.query.limit !== null)
		)
			for (; o.size > this.query.limit; ) {
				const h = this.query.limitType === "F" ? o.last() : o.first();
				(o = o.delete(h.key)),
					(r = r.delete(h.key)),
					s.track({ type: 1, doc: h });
			}
		return { Gu: o, ju: s, Mi: a, mutatedKeys: r };
	}
	Wu(t, e) {
		return (
			t.hasLocalMutations && e.hasCommittedMutations && !e.hasLocalMutations
		);
	}
	applyChanges(t, e, s) {
		const i = this.Gu;
		(this.Gu = t.Gu), (this.mutatedKeys = t.mutatedKeys);
		const r = t.ju.Tu();
		r.sort(
			(l, h) =>
				(function (u, d) {
					const f = (g) => {
						switch (g) {
							case 0:
								return 1;
							case 2:
							case 3:
								return 2;
							case 1:
								return 0;
							default:
								return R();
						}
					};
					return f(u) - f(d);
				})(l.type, h.type) || this.Ku(l.doc, h.doc),
		),
			this.Hu(s);
		const o = e ? this.Ju() : [],
			a = this.Uu.size === 0 && this.current ? 1 : 0,
			c = a !== this.qu;
		return (
			(this.qu = a),
			r.length !== 0 || c
				? {
						snapshot: new qn(
							this.query,
							t.Gu,
							i,
							r,
							t.mutatedKeys,
							a === 0,
							c,
							!1,
							!!s && s.resumeToken.approximateByteSize() > 0,
						),
						Yu: o,
				  }
				: { Yu: o }
		);
	}
	Ru(t) {
		return this.current && t === "Offline"
			? ((this.current = !1),
			  this.applyChanges(
					{ Gu: this.Gu, ju: new cu(), mutatedKeys: this.mutatedKeys, Mi: !1 },
					!1,
			  ))
			: { Yu: [] };
	}
	Zu(t) {
		return (
			!this.Lu.has(t) && !!this.Gu.has(t) && !this.Gu.get(t).hasLocalMutations
		);
	}
	Hu(t) {
		t &&
			(t.addedDocuments.forEach((e) => (this.Lu = this.Lu.add(e))),
			t.modifiedDocuments.forEach((e) => {}),
			t.removedDocuments.forEach((e) => (this.Lu = this.Lu.delete(e))),
			(this.current = t.current));
	}
	Ju() {
		if (!this.current) return [];
		const t = this.Uu;
		(this.Uu = $()),
			this.Gu.forEach((s) => {
				this.Zu(s.key) && (this.Uu = this.Uu.add(s.key));
			});
		const e = [];
		return (
			t.forEach((s) => {
				this.Uu.has(s) || e.push(new Dg(s));
			}),
			this.Uu.forEach((s) => {
				t.has(s) || e.push(new Ag(s));
			}),
			e
		);
	}
	Xu(t) {
		(this.Lu = t.Wi), (this.Uu = $());
		const e = this.zu(t.documents);
		return this.applyChanges(e, !0);
	}
	tc() {
		return qn.fromInitialDocuments(
			this.query,
			this.Gu,
			this.mutatedKeys,
			this.qu === 0,
			this.hasCachedResults,
		);
	}
}
class ME {
	constructor(t, e, s) {
		(this.query = t), (this.targetId = e), (this.view = s);
	}
}
class AE {
	constructor(t) {
		(this.key = t), (this.ec = !1);
	}
}
class DE {
	constructor(t, e, s, i, r, o) {
		(this.localStore = t),
			(this.remoteStore = e),
			(this.eventManager = s),
			(this.sharedClientState = i),
			(this.currentUser = r),
			(this.maxConcurrentLimboResolutions = o),
			(this.nc = {}),
			(this.sc = new ts((a) => Gf(a), eo)),
			(this.ic = new Map()),
			(this.rc = new Set()),
			(this.oc = new vt(O.comparator)),
			(this.uc = new Map()),
			(this.cc = new Cc()),
			(this.ac = {}),
			(this.hc = new Map()),
			(this.lc = Wn.bn()),
			(this.onlineState = "Unknown"),
			(this.fc = void 0);
	}
	get isPrimaryClient() {
		return this.fc === !0;
	}
}
async function OE(n, t) {
	const e = UE(n);
	let s, i;
	const r = e.sc.get(t);
	if (r)
		(s = r.targetId),
			e.sharedClientState.addLocalQueryTarget(s),
			(i = r.view.tc());
	else {
		const o = await ZS(e.localStore, Ee(t));
		e.isPrimaryClient && Sg(e.remoteStore, o);
		const a = e.sharedClientState.addLocalQueryTarget(o.targetId);
		(s = o.targetId), (i = await PE(e, t, s, a === "current", o.resumeToken));
	}
	return i;
}
async function PE(n, t, e, s, i) {
	n.dc = (u, d, f) =>
		(async function (g, p, m, b) {
			let y = p.view.zu(m);
			y.Mi &&
				(y = await iu(g.localStore, p.query, !1).then(({ documents: x }) =>
					p.view.zu(x, y),
				));
			const v = b && b.targetChanges.get(p.targetId),
				_ = p.view.applyChanges(y, g.isPrimaryClient, v);
			return hu(g, p.targetId, _.Yu), _.snapshot;
		})(n, u, d, f);
	const r = await iu(n.localStore, t, !0),
		o = new IE(t, r.Wi),
		a = o.zu(r.documents),
		c = pi.createSynthesizedTargetChangeForCurrentChange(
			e,
			s && n.onlineState !== "Offline",
			i,
		),
		l = o.applyChanges(a, n.isPrimaryClient, c);
	hu(n, e, l.Yu);
	const h = new ME(t, e, o);
	return (
		n.sc.set(t, h),
		n.ic.has(e) ? n.ic.get(e).push(t) : n.ic.set(e, [t]),
		l.snapshot
	);
}
async function RE(n, t) {
	const e = V(n),
		s = e.sc.get(t),
		i = e.ic.get(s.targetId);
	if (i.length > 1)
		return (
			e.ic.set(
				s.targetId,
				i.filter((r) => !eo(r, t)),
			),
			void e.sc.delete(t)
		);
	e.isPrimaryClient
		? (e.sharedClientState.removeLocalQueryTarget(s.targetId),
		  e.sharedClientState.isActiveQueryTarget(s.targetId) ||
				(await Aa(e.localStore, s.targetId, !1)
					.then(() => {
						e.sharedClientState.clearQueryState(s.targetId),
							Eg(e.remoteStore, s.targetId),
							Da(e, s.targetId);
					})
					.catch(di)))
		: (Da(e, s.targetId), await Aa(e.localStore, s.targetId, !0));
}
async function LE(n, t, e) {
	const s = jE(n);
	try {
		const i = await (function (r, o) {
			const a = V(r),
				c = yt.now(),
				l = o.reduce((d, f) => d.add(f.key), $());
			let h, u;
			return a.persistence
				.runTransaction("Locally write mutations", "readwrite", (d) => {
					let f = ke(),
						g = $();
					return a.Ki.getEntries(d, l)
						.next((p) => {
							(f = p),
								f.forEach((m, b) => {
									b.isValidDocument() || (g = g.add(m));
								});
						})
						.next(() => a.localDocuments.getOverlayedDocuments(d, f))
						.next((p) => {
							h = p;
							const m = [];
							for (const b of o) {
								const y = aS(b, h.get(b.key).overlayedDocument);
								y != null &&
									m.push(new kn(b.key, y, $f(y.value.mapValue), xe.exists(!0)));
							}
							return a.mutationQueue.addMutationBatch(d, c, m, o);
						})
						.next((p) => {
							u = p;
							const m = p.applyToLocalDocumentSet(h, g);
							return a.documentOverlayCache.saveOverlays(d, p.batchId, m);
						});
				})
				.then(() => ({ batchId: u.batchId, changes: Jf(h) }));
		})(s.localStore, t);
		s.sharedClientState.addPendingMutation(i.batchId),
			(function (r, o, a) {
				let c = r.ac[r.currentUser.toKey()];
				c || (c = new vt(Y)),
					(c = c.insert(o, a)),
					(r.ac[r.currentUser.toKey()] = c);
			})(s, i.batchId, e),
			await yi(s, i.changes),
			await co(s.remoteStore);
	} catch (i) {
		const r = Pc(i, "Failed to persist write");
		e.reject(r);
	}
}
async function Og(n, t) {
	const e = V(n);
	try {
		const s = await XS(e.localStore, t);
		t.targetChanges.forEach((i, r) => {
			const o = e.uc.get(r);
			o &&
				(tt(
					i.addedDocuments.size +
						i.modifiedDocuments.size +
						i.removedDocuments.size <=
						1,
				),
				i.addedDocuments.size > 0
					? (o.ec = !0)
					: i.modifiedDocuments.size > 0
					? tt(o.ec)
					: i.removedDocuments.size > 0 && (tt(o.ec), (o.ec = !1)));
		}),
			await yi(e, s, t);
	} catch (s) {
		await di(s);
	}
}
function lu(n, t, e) {
	const s = V(n);
	if ((s.isPrimaryClient && e === 0) || (!s.isPrimaryClient && e === 1)) {
		const i = [];
		s.sc.forEach((r, o) => {
			const a = o.view.Ru(t);
			a.snapshot && i.push(a.snapshot);
		}),
			(function (r, o) {
				const a = V(r);
				a.onlineState = o;
				let c = !1;
				a.queries.forEach((l, h) => {
					for (const u of h.listeners) u.Ru(o) && (c = !0);
				}),
					c && Rc(a);
			})(s.eventManager, t),
			i.length && s.nc.zo(i),
			(s.onlineState = t),
			s.isPrimaryClient && s.sharedClientState.setOnlineState(t);
	}
}
async function NE(n, t, e) {
	const s = V(n);
	s.sharedClientState.updateQueryState(t, "rejected", e);
	const i = s.uc.get(t),
		r = i && i.key;
	if (r) {
		let o = new vt(O.comparator);
		o = o.insert(r, At.newNoDocument(r, N.min()));
		const a = $().add(r),
			c = new ro(N.min(), new Map(), new bt(Y), o, a);
		await Og(s, c), (s.oc = s.oc.remove(r)), s.uc.delete(t), Lc(s);
	} else
		await Aa(s.localStore, t, !1)
			.then(() => Da(s, t, e))
			.catch(di);
}
async function FE(n, t) {
	const e = V(n),
		s = t.batch.batchId;
	try {
		const i = await GS(e.localStore, t);
		Rg(e, s, null),
			Pg(e, s),
			e.sharedClientState.updateMutationState(s, "acknowledged"),
			await yi(e, i);
	} catch (i) {
		await di(i);
	}
}
async function BE(n, t, e) {
	const s = V(n);
	try {
		const i = await (function (r, o) {
			const a = V(r);
			return a.persistence.runTransaction(
				"Reject batch",
				"readwrite-primary",
				(c) => {
					let l;
					return a.mutationQueue
						.lookupMutationBatch(c, o)
						.next(
							(h) => (
								tt(h !== null),
								(l = h.keys()),
								a.mutationQueue.removeMutationBatch(c, h)
							),
						)
						.next(() => a.mutationQueue.performConsistencyCheck(c))
						.next(() =>
							a.documentOverlayCache.removeOverlaysForBatchId(c, l, o),
						)
						.next(() =>
							a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c, l),
						)
						.next(() => a.localDocuments.getDocuments(c, l));
				},
			);
		})(s.localStore, t);
		Rg(s, t, e),
			Pg(s, t),
			s.sharedClientState.updateMutationState(t, "rejected", e),
			await yi(s, i);
	} catch (i) {
		await di(i);
	}
}
function Pg(n, t) {
	(n.hc.get(t) || []).forEach((e) => {
		e.resolve();
	}),
		n.hc.delete(t);
}
function Rg(n, t, e) {
	const s = V(n);
	let i = s.ac[s.currentUser.toKey()];
	if (i) {
		const r = i.get(t);
		r && (e ? r.reject(e) : r.resolve(), (i = i.remove(t))),
			(s.ac[s.currentUser.toKey()] = i);
	}
}
function Da(n, t, e = null) {
	n.sharedClientState.removeLocalQueryTarget(t);
	for (const s of n.ic.get(t)) n.sc.delete(s), e && n.nc.wc(s, e);
	n.ic.delete(t),
		n.isPrimaryClient &&
			n.cc.hs(t).forEach((s) => {
				n.cc.containsKey(s) || Lg(n, s);
			});
}
function Lg(n, t) {
	n.rc.delete(t.path.canonicalString());
	const e = n.oc.get(t);
	e !== null &&
		(Eg(n.remoteStore, e), (n.oc = n.oc.remove(t)), n.uc.delete(e), Lc(n));
}
function hu(n, t, e) {
	for (const s of e)
		s instanceof Ag
			? (n.cc.addReference(s.key, t), VE(n, s))
			: s instanceof Dg
			? (D("SyncEngine", "Document no longer in limbo: " + s.key),
			  n.cc.removeReference(s.key, t),
			  n.cc.containsKey(s.key) || Lg(n, s.key))
			: R();
}
function VE(n, t) {
	const e = t.key,
		s = e.path.canonicalString();
	n.oc.get(e) ||
		n.rc.has(s) ||
		(D("SyncEngine", "New document in limbo: " + e), n.rc.add(s), Lc(n));
}
function Lc(n) {
	for (; n.rc.size > 0 && n.oc.size < n.maxConcurrentLimboResolutions; ) {
		const t = n.rc.values().next().value;
		n.rc.delete(t);
		const e = new O(st.fromString(t)),
			s = n.lc.next();
		n.uc.set(s, new AE(e)),
			(n.oc = n.oc.insert(e, s)),
			Sg(n.remoteStore, new gn(Ee(Yf(e.path)), s, 2, vc.ct));
	}
}
async function yi(n, t, e) {
	const s = V(n),
		i = [],
		r = [],
		o = [];
	s.sc.isEmpty() ||
		(s.sc.forEach((a, c) => {
			o.push(
				s.dc(c, t, e).then((l) => {
					if (
						((l || e) &&
							s.isPrimaryClient &&
							s.sharedClientState.updateQueryState(
								c.targetId,
								l?.fromCache ? "not-current" : "current",
							),
						l)
					) {
						i.push(l);
						const h = Ic.Di(c.targetId, l);
						r.push(h);
					}
				}),
			);
		}),
		await Promise.all(o),
		s.nc.zo(i),
		await (async function (a, c) {
			const l = V(a);
			try {
				await l.persistence.runTransaction(
					"notifyLocalViewChanges",
					"readwrite",
					(h) =>
						C.forEach(c, (u) =>
							C.forEach(u.Vi, (d) =>
								l.persistence.referenceDelegate.addReference(h, u.targetId, d),
							).next(() =>
								C.forEach(u.Si, (d) =>
									l.persistence.referenceDelegate.removeReference(
										h,
										u.targetId,
										d,
									),
								),
							),
						),
				);
			} catch (h) {
				if (!fi(h)) throw h;
				D("LocalStore", "Failed to update sequence numbers: " + h);
			}
			for (const h of c) {
				const u = h.targetId;
				if (!h.fromCache) {
					const d = l.Li.get(u),
						f = d.snapshotVersion,
						g = d.withLastLimboFreeSnapshotVersion(f);
					l.Li = l.Li.insert(u, g);
				}
			}
		})(s.localStore, r));
}
async function zE(n, t) {
	const e = V(n);
	if (!e.currentUser.isEqual(t)) {
		D("SyncEngine", "User change. New user:", t.toKey());
		const s = await vg(e.localStore, t);
		(e.currentUser = t),
			(function (i, r) {
				i.hc.forEach((o) => {
					o.forEach((a) => {
						a.reject(new P(w.CANCELLED, r));
					});
				}),
					i.hc.clear();
			})(e, "'waitForPendingWrites' promise is rejected due to a user change."),
			e.sharedClientState.handleUserChange(
				t,
				s.removedBatchIds,
				s.addedBatchIds,
			),
			await yi(e, s.Qi);
	}
}
function $E(n, t) {
	const e = V(n),
		s = e.uc.get(t);
	if (s && s.ec) return $().add(s.key);
	{
		let i = $();
		const r = e.ic.get(t);
		if (!r) return i;
		for (const o of r) {
			const a = e.sc.get(o);
			i = i.unionWith(a.view.Qu);
		}
		return i;
	}
}
function UE(n) {
	const t = V(n);
	return (
		(t.remoteStore.remoteSyncer.applyRemoteEvent = Og.bind(null, t)),
		(t.remoteStore.remoteSyncer.getRemoteKeysForTarget = $E.bind(null, t)),
		(t.remoteStore.remoteSyncer.rejectListen = NE.bind(null, t)),
		(t.nc.zo = kE.bind(null, t.eventManager)),
		(t.nc.wc = CE.bind(null, t.eventManager)),
		t
	);
}
function jE(n) {
	const t = V(n);
	return (
		(t.remoteStore.remoteSyncer.applySuccessfulWrite = FE.bind(null, t)),
		(t.remoteStore.remoteSyncer.rejectFailedWrite = BE.bind(null, t)),
		t
	);
}
class uu {
	constructor() {
		this.synchronizeTabs = !1;
	}
	async initialize(t) {
		(this.serializer = oo(t.databaseInfo.databaseId)),
			(this.sharedClientState = this.createSharedClientState(t)),
			(this.persistence = this.createPersistence(t)),
			await this.persistence.start(),
			(this.localStore = this.createLocalStore(t)),
			(this.gcScheduler = this.createGarbageCollectionScheduler(
				t,
				this.localStore,
			)),
			(this.indexBackfillerScheduler = this.createIndexBackfillerScheduler(
				t,
				this.localStore,
			));
	}
	createGarbageCollectionScheduler(t, e) {
		return null;
	}
	createIndexBackfillerScheduler(t, e) {
		return null;
	}
	createLocalStore(t) {
		return YS(this.persistence, new qS(), t.initialUser, this.serializer);
	}
	createPersistence(t) {
		return new HS(Tc.Fs, this.serializer);
	}
	createSharedClientState(t) {
		return new eE();
	}
	async terminate() {
		this.gcScheduler && this.gcScheduler.stop(),
			await this.sharedClientState.shutdown(),
			await this.persistence.shutdown();
	}
}
class HE {
	async initialize(t, e) {
		this.localStore ||
			((this.localStore = t.localStore),
			(this.sharedClientState = t.sharedClientState),
			(this.datastore = this.createDatastore(e)),
			(this.remoteStore = this.createRemoteStore(e)),
			(this.eventManager = this.createEventManager(e)),
			(this.syncEngine = this.createSyncEngine(e, !t.synchronizeTabs)),
			(this.sharedClientState.onlineStateHandler = (s) =>
				lu(this.syncEngine, s, 1)),
			(this.remoteStore.remoteSyncer.handleCredentialChange = zE.bind(
				null,
				this.syncEngine,
			)),
			await xE(this.remoteStore, this.syncEngine.isPrimaryClient));
	}
	createEventManager(t) {
		return new wE();
	}
	createDatastore(t) {
		const e = oo(t.databaseInfo.databaseId),
			s = ((i = t.databaseInfo), new rE(i));
		var i;
		return (function (r, o, a, c) {
			return new cE(r, o, a, c);
		})(t.authCredentials, t.appCheckCredentials, s, e);
	}
	createRemoteStore(t) {
		return (
			(e = this.localStore),
			(s = this.datastore),
			(i = t.asyncQueue),
			(r = (a) => lu(this.syncEngine, a, 0)),
			(o = ou.D() ? new ou() : new nE()),
			new hE(e, s, i, r, o)
		);
		var e, s, i, r, o;
	}
	createSyncEngine(t, e) {
		return (function (s, i, r, o, a, c, l) {
			const h = new DE(s, i, r, o, a, c);
			return l && (h.fc = !0), h;
		})(
			this.localStore,
			this.remoteStore,
			this.eventManager,
			this.sharedClientState,
			t.initialUser,
			t.maxConcurrentLimboResolutions,
			e,
		);
	}
	terminate() {
		return (async function (t) {
			const e = V(t);
			D("RemoteStore", "RemoteStore shutting down."),
				e.du.add(5),
				await mi(e),
				e._u.shutdown(),
				e.mu.set("Unknown");
		})(this.remoteStore);
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class WE {
	constructor(t) {
		(this.observer = t), (this.muted = !1);
	}
	next(t) {
		this.observer.next && this.gc(this.observer.next, t);
	}
	error(t) {
		this.observer.error
			? this.gc(this.observer.error, t)
			: Se("Uncaught Error in snapshot listener:", t.toString());
	}
	yc() {
		this.muted = !0;
	}
	gc(t, e) {
		this.muted ||
			setTimeout(() => {
				this.muted || t(e);
			}, 0);
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class qE {
	constructor(t, e, s, i) {
		(this.authCredentials = t),
			(this.appCheckCredentials = e),
			(this.asyncQueue = s),
			(this.databaseInfo = i),
			(this.user = Mt.UNAUTHENTICATED),
			(this.clientId = Ff.A()),
			(this.authCredentialListener = () => Promise.resolve()),
			(this.appCheckCredentialListener = () => Promise.resolve()),
			this.authCredentials.start(s, async (r) => {
				D("FirestoreClient", "Received user=", r.uid),
					await this.authCredentialListener(r),
					(this.user = r);
			}),
			this.appCheckCredentials.start(
				s,
				(r) => (
					D("FirestoreClient", "Received new app check token=", r),
					this.appCheckCredentialListener(r, this.user)
				),
			);
	}
	async getConfiguration() {
		return {
			asyncQueue: this.asyncQueue,
			databaseInfo: this.databaseInfo,
			clientId: this.clientId,
			authCredentials: this.authCredentials,
			appCheckCredentials: this.appCheckCredentials,
			initialUser: this.user,
			maxConcurrentLimboResolutions: 100,
		};
	}
	setCredentialChangeListener(t) {
		this.authCredentialListener = t;
	}
	setAppCheckTokenChangeListener(t) {
		this.appCheckCredentialListener = t;
	}
	verifyNotTerminated() {
		if (this.asyncQueue.isShuttingDown)
			throw new P(
				w.FAILED_PRECONDITION,
				"The client has already been terminated.",
			);
	}
	terminate() {
		this.asyncQueue.enterRestrictedMode();
		const t = new Ve();
		return (
			this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
				try {
					this._onlineComponents && (await this._onlineComponents.terminate()),
						this._offlineComponents &&
							(await this._offlineComponents.terminate()),
						this.authCredentials.shutdown(),
						this.appCheckCredentials.shutdown(),
						t.resolve();
				} catch (e) {
					const s = Pc(e, "Failed to shutdown persistence");
					t.reject(s);
				}
			}),
			t.promise
		);
	}
}
async function Wo(n, t) {
	n.asyncQueue.verifyOperationInProgress(),
		D("FirestoreClient", "Initializing OfflineComponentProvider");
	const e = await n.getConfiguration();
	await t.initialize(e);
	let s = e.initialUser;
	n.setCredentialChangeListener(async (i) => {
		s.isEqual(i) || (await vg(t.localStore, i), (s = i));
	}),
		t.persistence.setDatabaseDeletedListener(() => n.terminate()),
		(n._offlineComponents = t);
}
async function du(n, t) {
	n.asyncQueue.verifyOperationInProgress();
	const e = await YE(n);
	D("FirestoreClient", "Initializing OnlineComponentProvider");
	const s = await n.getConfiguration();
	await t.initialize(e, s),
		n.setCredentialChangeListener((i) => au(t.remoteStore, i)),
		n.setAppCheckTokenChangeListener((i, r) => au(t.remoteStore, r)),
		(n._onlineComponents = t);
}
function KE(n) {
	return n.name === "FirebaseError"
		? n.code === w.FAILED_PRECONDITION || n.code === w.UNIMPLEMENTED
		: !(typeof DOMException < "u" && n instanceof DOMException) ||
				n.code === 22 ||
				n.code === 20 ||
				n.code === 11;
}
async function YE(n) {
	if (!n._offlineComponents)
		if (n._uninitializedComponentsProvider) {
			D("FirestoreClient", "Using user provided OfflineComponentProvider");
			try {
				await Wo(n, n._uninitializedComponentsProvider._offline);
			} catch (t) {
				const e = t;
				if (!KE(e)) throw e;
				_r(
					"Error using user provided cache. Falling back to memory cache: " + e,
				),
					await Wo(n, new uu());
			}
		} else
			D("FirestoreClient", "Using default OfflineComponentProvider"),
				await Wo(n, new uu());
	return n._offlineComponents;
}
async function Ng(n) {
	return (
		n._onlineComponents ||
			(n._uninitializedComponentsProvider
				? (D("FirestoreClient", "Using user provided OnlineComponentProvider"),
				  await du(n, n._uninitializedComponentsProvider._online))
				: (D("FirestoreClient", "Using default OnlineComponentProvider"),
				  await du(n, new HE()))),
		n._onlineComponents
	);
}
function GE(n) {
	return Ng(n).then((t) => t.syncEngine);
}
async function XE(n) {
	const t = await Ng(n),
		e = t.eventManager;
	return (
		(e.onListen = OE.bind(null, t.syncEngine)),
		(e.onUnlisten = RE.bind(null, t.syncEngine)),
		e
	);
}
function QE(n, t, e = {}) {
	const s = new Ve();
	return (
		n.asyncQueue.enqueueAndForget(async () =>
			(function (i, r, o, a, c) {
				const l = new WE({
						next: (u) => {
							r.enqueueAndForget(() => EE(i, h)),
								u.fromCache && a.source === "server"
									? c.reject(
											new P(
												w.UNAVAILABLE,
												'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)',
											),
									  )
									: c.resolve(u);
						},
						error: (u) => c.reject(u),
					}),
					h = new TE(o, l, { includeMetadataChanges: !0, xu: !0 });
				return SE(i, h);
			})(await XE(n), n.asyncQueue, t, e, s),
		),
		s.promise
	);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const fu = new Map();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Fg(n, t, e) {
	if (!e)
		throw new P(
			w.INVALID_ARGUMENT,
			`Function ${n}() cannot be called with an empty ${t}.`,
		);
}
function JE(n, t, e, s) {
	if (t === !0 && s === !0)
		throw new P(w.INVALID_ARGUMENT, `${n} and ${e} cannot be used together.`);
}
function gu(n) {
	if (!O.isDocumentKey(n))
		throw new P(
			w.INVALID_ARGUMENT,
			`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`,
		);
}
function pu(n) {
	if (O.isDocumentKey(n))
		throw new P(
			w.INVALID_ARGUMENT,
			`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`,
		);
}
function Nc(n) {
	if (n === void 0) return "undefined";
	if (n === null) return "null";
	if (typeof n == "string")
		return n.length > 20 && (n = `${n.substring(0, 20)}...`), JSON.stringify(n);
	if (typeof n == "number" || typeof n == "boolean") return "" + n;
	if (typeof n == "object") {
		if (n instanceof Array) return "an array";
		{
			const t = (function (e) {
				return e.constructor ? e.constructor.name : null;
			})(n);
			return t ? `a custom ${t} object` : "an object";
		}
	}
	return typeof n == "function" ? "a function" : R();
}
function Ir(n, t) {
	if (("_delegate" in n && (n = n._delegate), !(n instanceof t))) {
		if (t.name === n.constructor.name)
			throw new P(
				w.INVALID_ARGUMENT,
				"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?",
			);
		{
			const e = Nc(n);
			throw new P(
				w.INVALID_ARGUMENT,
				`Expected type '${t.name}', but it was: ${e}`,
			);
		}
	}
	return n;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class mu {
	constructor(t) {
		var e;
		if (t.host === void 0) {
			if (t.ssl !== void 0)
				throw new P(
					w.INVALID_ARGUMENT,
					"Can't provide ssl option if host option is not set",
				);
			(this.host = "firestore.googleapis.com"), (this.ssl = !0);
		} else
			(this.host = t.host),
				(this.ssl = (e = t.ssl) === null || e === void 0 || e);
		if (
			((this.credentials = t.credentials),
			(this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties),
			(this.cache = t.localCache),
			t.cacheSizeBytes === void 0)
		)
			this.cacheSizeBytes = 41943040;
		else {
			if (t.cacheSizeBytes !== -1 && t.cacheSizeBytes < 1048576)
				throw new P(
					w.INVALID_ARGUMENT,
					"cacheSizeBytes must be at least 1048576",
				);
			this.cacheSizeBytes = t.cacheSizeBytes;
		}
		(this.experimentalForceLongPolling = !!t.experimentalForceLongPolling),
			(this.experimentalAutoDetectLongPolling =
				!!t.experimentalAutoDetectLongPolling),
			(this.useFetchStreams = !!t.useFetchStreams),
			JE(
				"experimentalForceLongPolling",
				t.experimentalForceLongPolling,
				"experimentalAutoDetectLongPolling",
				t.experimentalAutoDetectLongPolling,
			);
	}
	isEqual(t) {
		return (
			this.host === t.host &&
			this.ssl === t.ssl &&
			this.credentials === t.credentials &&
			this.cacheSizeBytes === t.cacheSizeBytes &&
			this.experimentalForceLongPolling === t.experimentalForceLongPolling &&
			this.experimentalAutoDetectLongPolling ===
				t.experimentalAutoDetectLongPolling &&
			this.ignoreUndefinedProperties === t.ignoreUndefinedProperties &&
			this.useFetchStreams === t.useFetchStreams
		);
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class lo {
	constructor(t, e, s, i) {
		(this._authCredentials = t),
			(this._appCheckCredentials = e),
			(this._databaseId = s),
			(this._app = i),
			(this.type = "firestore-lite"),
			(this._persistenceKey = "(lite)"),
			(this._settings = new mu({})),
			(this._settingsFrozen = !1);
	}
	get app() {
		if (!this._app)
			throw new P(
				w.FAILED_PRECONDITION,
				"Firestore was not initialized using the Firebase SDK. 'app' is not available",
			);
		return this._app;
	}
	get _initialized() {
		return this._settingsFrozen;
	}
	get _terminated() {
		return this._terminateTask !== void 0;
	}
	_setSettings(t) {
		if (this._settingsFrozen)
			throw new P(
				w.FAILED_PRECONDITION,
				"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.",
			);
		(this._settings = new mu(t)),
			t.credentials !== void 0 &&
				(this._authCredentials = (function (e) {
					if (!e) return new mw();
					switch (e.type) {
						case "firstParty":
							return new xw(
								e.sessionIndex || "0",
								e.iamToken || null,
								e.authTokenFactory || null,
							);
						case "provider":
							return e.client;
						default:
							throw new P(
								w.INVALID_ARGUMENT,
								"makeAuthCredentialsProvider failed due to invalid credential type",
							);
					}
				})(t.credentials));
	}
	_getSettings() {
		return this._settings;
	}
	_freezeSettings() {
		return (this._settingsFrozen = !0), this._settings;
	}
	_delete() {
		return (
			this._terminateTask || (this._terminateTask = this._terminate()),
			this._terminateTask
		);
	}
	toJSON() {
		return {
			app: this._app,
			databaseId: this._databaseId,
			settings: this._settings,
		};
	}
	_terminate() {
		return (
			(function (t) {
				const e = fu.get(t);
				e &&
					(D("ComponentProvider", "Removing Datastore"),
					fu.delete(t),
					e.terminate());
			})(this),
			Promise.resolve()
		);
	}
}
function ZE(n, t, e, s = {}) {
	var i;
	const r = (n = Ir(n, lo))._getSettings();
	if (
		(r.host !== "firestore.googleapis.com" &&
			r.host !== t &&
			_r(
				"Host has been set in both settings() and useEmulator(), emulator host will be used",
			),
		n._setSettings(
			Object.assign(Object.assign({}, r), { host: `${t}:${e}`, ssl: !1 }),
		),
		s.mockUserToken)
	) {
		let o, a;
		if (typeof s.mockUserToken == "string")
			(o = s.mockUserToken), (a = Mt.MOCK_USER);
		else {
			o = Jv(
				s.mockUserToken,
				(i = n._app) === null || i === void 0 ? void 0 : i.options.projectId,
			);
			const c = s.mockUserToken.sub || s.mockUserToken.user_id;
			if (!c)
				throw new P(
					w.INVALID_ARGUMENT,
					"mockUserToken must contain 'sub' or 'user_id' field!",
				);
			a = new Mt(c);
		}
		n._authCredentials = new yw(new Nf(o, a));
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Zt {
	constructor(t, e, s) {
		(this.converter = e),
			(this._key = s),
			(this.type = "document"),
			(this.firestore = t);
	}
	get _path() {
		return this._key.path;
	}
	get id() {
		return this._key.path.lastSegment();
	}
	get path() {
		return this._key.path.canonicalString();
	}
	get parent() {
		return new ze(this.firestore, this.converter, this._key.path.popLast());
	}
	withConverter(t) {
		return new Zt(this.firestore, t, this._key);
	}
}
class ho {
	constructor(t, e, s) {
		(this.converter = e),
			(this._query = s),
			(this.type = "query"),
			(this.firestore = t);
	}
	withConverter(t) {
		return new ho(this.firestore, t, this._query);
	}
}
class ze extends ho {
	constructor(t, e, s) {
		super(t, e, Yf(s)), (this._path = s), (this.type = "collection");
	}
	get id() {
		return this._query.path.lastSegment();
	}
	get path() {
		return this._query.path.canonicalString();
	}
	get parent() {
		const t = this._path.popLast();
		return t.isEmpty() ? null : new Zt(this.firestore, null, new O(t));
	}
	withConverter(t) {
		return new ze(this.firestore, t, this._path);
	}
}
function Fc(n, t, ...e) {
	if (((n = zs(n)), Fg("collection", "path", t), n instanceof lo)) {
		const s = st.fromString(t, ...e);
		return pu(s), new ze(n, null, s);
	}
	{
		if (!(n instanceof Zt || n instanceof ze))
			throw new P(
				w.INVALID_ARGUMENT,
				"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore",
			);
		const s = n._path.child(st.fromString(t, ...e));
		return pu(s), new ze(n.firestore, null, s);
	}
}
function tk(n, t, ...e) {
	if (
		((n = zs(n)),
		arguments.length === 1 && (t = Ff.A()),
		Fg("doc", "path", t),
		n instanceof lo)
	) {
		const s = st.fromString(t, ...e);
		return gu(s), new Zt(n, null, new O(s));
	}
	{
		if (!(n instanceof Zt || n instanceof ze))
			throw new P(
				w.INVALID_ARGUMENT,
				"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore",
			);
		const s = n._path.child(st.fromString(t, ...e));
		return (
			gu(s), new Zt(n.firestore, n instanceof ze ? n.converter : null, new O(s))
		);
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ek {
	constructor() {
		(this.Nc = Promise.resolve()),
			(this.kc = []),
			(this.Oc = !1),
			(this.$c = []),
			(this.Mc = null),
			(this.Fc = !1),
			(this.Bc = !1),
			(this.Lc = []),
			(this.Co = new _g(this, "async_queue_retry")),
			(this.qc = () => {
				const e = Ho();
				e &&
					D("AsyncQueue", "Visibility state changed to " + e.visibilityState),
					this.Co.vo();
			});
		const t = Ho();
		t &&
			typeof t.addEventListener == "function" &&
			t.addEventListener("visibilitychange", this.qc);
	}
	get isShuttingDown() {
		return this.Oc;
	}
	enqueueAndForget(t) {
		this.enqueue(t);
	}
	enqueueAndForgetEvenWhileRestricted(t) {
		this.Uc(), this.Kc(t);
	}
	enterRestrictedMode(t) {
		if (!this.Oc) {
			(this.Oc = !0), (this.Bc = t || !1);
			const e = Ho();
			e &&
				typeof e.removeEventListener == "function" &&
				e.removeEventListener("visibilitychange", this.qc);
		}
	}
	enqueue(t) {
		if ((this.Uc(), this.Oc)) return new Promise(() => {});
		const e = new Ve();
		return this.Kc(() =>
			this.Oc && this.Bc
				? Promise.resolve()
				: (t().then(e.resolve, e.reject), e.promise),
		).then(() => e.promise);
	}
	enqueueRetryable(t) {
		this.enqueueAndForget(() => (this.kc.push(t), this.Gc()));
	}
	async Gc() {
		if (this.kc.length !== 0) {
			try {
				await this.kc[0](), this.kc.shift(), this.Co.reset();
			} catch (t) {
				if (!fi(t)) throw t;
				D("AsyncQueue", "Operation failed with retryable error: " + t);
			}
			this.kc.length > 0 && this.Co.Ao(() => this.Gc());
		}
	}
	Kc(t) {
		const e = this.Nc.then(
			() => (
				(this.Fc = !0),
				t()
					.catch((s) => {
						(this.Mc = s), (this.Fc = !1);
						const i = (function (r) {
							let o = r.message || "";
							return (
								r.stack &&
									(o = r.stack.includes(r.message)
										? r.stack
										: r.message +
										  `
` +
										  r.stack),
								o
							);
						})(s);
						throw (Se("INTERNAL UNHANDLED ERROR: ", i), s);
					})
					.then((s) => ((this.Fc = !1), s))
			),
		);
		return (this.Nc = e), e;
	}
	enqueueAfterDelay(t, e, s) {
		this.Uc(), this.Lc.indexOf(t) > -1 && (e = 0);
		const i = Oc.createAndSchedule(this, t, e, s, (r) => this.Qc(r));
		return this.$c.push(i), i;
	}
	Uc() {
		this.Mc && R();
	}
	verifyOperationInProgress() {}
	async zc() {
		let t;
		do (t = this.Nc), await t;
		while (t !== this.Nc);
	}
	jc(t) {
		for (const e of this.$c) if (e.timerId === t) return !0;
		return !1;
	}
	Wc(t) {
		return this.zc().then(() => {
			this.$c.sort((e, s) => e.targetTimeMs - s.targetTimeMs);
			for (const e of this.$c)
				if ((e.skipDelay(), t !== "all" && e.timerId === t)) break;
			return this.zc();
		});
	}
	Hc(t) {
		this.Lc.push(t);
	}
	Qc(t) {
		const e = this.$c.indexOf(t);
		this.$c.splice(e, 1);
	}
}
class Bc extends lo {
	constructor(t, e, s, i) {
		super(t, e, s, i),
			(this.type = "firestore"),
			(this._queue = new ek()),
			(this._persistenceKey = i?.name || "[DEFAULT]");
	}
	_terminate() {
		return this._firestoreClient || Vg(this), this._firestoreClient.terminate();
	}
}
function nk(n, t) {
	const e = typeof n == "object" ? n : n_(),
		s = typeof n == "string" ? n : t || "(default)",
		i = Jx(e, "firestore").getImmediate({ identifier: s });
	if (!i._initialized) {
		const r = Gv("firestore");
		r && ZE(i, ...r);
	}
	return i;
}
function Bg(n) {
	return (
		n._firestoreClient || Vg(n),
		n._firestoreClient.verifyNotTerminated(),
		n._firestoreClient
	);
}
function Vg(n) {
	var t, e, s;
	const i = n._freezeSettings(),
		r = (function (o, a, c, l) {
			return new Pw(
				o,
				a,
				c,
				l.host,
				l.ssl,
				l.experimentalForceLongPolling,
				l.experimentalAutoDetectLongPolling,
				l.useFetchStreams,
			);
		})(
			n._databaseId,
			((t = n._app) === null || t === void 0 ? void 0 : t.options.appId) || "",
			n._persistenceKey,
			i,
		);
	(n._firestoreClient = new qE(
		n._authCredentials,
		n._appCheckCredentials,
		n._queue,
		r,
	)),
		!((e = i.cache) === null || e === void 0) &&
			e._offlineComponentProvider &&
			!((s = i.cache) === null || s === void 0) &&
			s._onlineComponentProvider &&
			(n._firestoreClient._uninitializedComponentsProvider = {
				_offlineKind: i.cache.kind,
				_offline: i.cache._offlineComponentProvider,
				_online: i.cache._onlineComponentProvider,
			});
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Kn {
	constructor(t) {
		this._byteString = t;
	}
	static fromBase64String(t) {
		try {
			return new Kn(Nt.fromBase64String(t));
		} catch (e) {
			throw new P(
				w.INVALID_ARGUMENT,
				"Failed to construct data from Base64 string: " + e,
			);
		}
	}
	static fromUint8Array(t) {
		return new Kn(Nt.fromUint8Array(t));
	}
	toBase64() {
		return this._byteString.toBase64();
	}
	toUint8Array() {
		return this._byteString.toUint8Array();
	}
	toString() {
		return "Bytes(base64: " + this.toBase64() + ")";
	}
	isEqual(t) {
		return this._byteString.isEqual(t._byteString);
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Vc {
	constructor(...t) {
		for (let e = 0; e < t.length; ++e)
			if (t[e].length === 0)
				throw new P(
					w.INVALID_ARGUMENT,
					"Invalid field name at argument $(i + 1). Field names must not be empty.",
				);
		this._internalPath = new Dt(t);
	}
	isEqual(t) {
		return this._internalPath.isEqual(t._internalPath);
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zg {
	constructor(t) {
		this._methodName = t;
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zc {
	constructor(t, e) {
		if (!isFinite(t) || t < -90 || t > 90)
			throw new P(
				w.INVALID_ARGUMENT,
				"Latitude must be a number between -90 and 90, but was: " + t,
			);
		if (!isFinite(e) || e < -180 || e > 180)
			throw new P(
				w.INVALID_ARGUMENT,
				"Longitude must be a number between -180 and 180, but was: " + e,
			);
		(this._lat = t), (this._long = e);
	}
	get latitude() {
		return this._lat;
	}
	get longitude() {
		return this._long;
	}
	isEqual(t) {
		return this._lat === t._lat && this._long === t._long;
	}
	toJSON() {
		return { latitude: this._lat, longitude: this._long };
	}
	_compareTo(t) {
		return Y(this._lat, t._lat) || Y(this._long, t._long);
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const sk = /^__.*__$/;
class ik {
	constructor(t, e, s) {
		(this.data = t), (this.fieldMask = e), (this.fieldTransforms = s);
	}
	toMutation(t, e) {
		return this.fieldMask !== null
			? new kn(t, this.data, this.fieldMask, e, this.fieldTransforms)
			: new gi(t, this.data, e, this.fieldTransforms);
	}
}
function $g(n) {
	switch (n) {
		case 0:
		case 2:
		case 1:
			return !0;
		case 3:
		case 4:
			return !1;
		default:
			throw R();
	}
}
class $c {
	constructor(t, e, s, i, r, o) {
		(this.settings = t),
			(this.databaseId = e),
			(this.serializer = s),
			(this.ignoreUndefinedProperties = i),
			r === void 0 && this.Jc(),
			(this.fieldTransforms = r || []),
			(this.fieldMask = o || []);
	}
	get path() {
		return this.settings.path;
	}
	get Yc() {
		return this.settings.Yc;
	}
	Zc(t) {
		return new $c(
			Object.assign(Object.assign({}, this.settings), t),
			this.databaseId,
			this.serializer,
			this.ignoreUndefinedProperties,
			this.fieldTransforms,
			this.fieldMask,
		);
	}
	Xc(t) {
		var e;
		const s = (e = this.path) === null || e === void 0 ? void 0 : e.child(t),
			i = this.Zc({ path: s, ta: !1 });
		return i.ea(t), i;
	}
	na(t) {
		var e;
		const s = (e = this.path) === null || e === void 0 ? void 0 : e.child(t),
			i = this.Zc({ path: s, ta: !1 });
		return i.Jc(), i;
	}
	sa(t) {
		return this.Zc({ path: void 0, ta: !0 });
	}
	ia(t) {
		return Mr(
			t,
			this.settings.methodName,
			this.settings.ra || !1,
			this.path,
			this.settings.oa,
		);
	}
	contains(t) {
		return (
			this.fieldMask.find((e) => t.isPrefixOf(e)) !== void 0 ||
			this.fieldTransforms.find((e) => t.isPrefixOf(e.field)) !== void 0
		);
	}
	Jc() {
		if (this.path)
			for (let t = 0; t < this.path.length; t++) this.ea(this.path.get(t));
	}
	ea(t) {
		if (t.length === 0) throw this.ia("Document fields must not be empty");
		if ($g(this.Yc) && sk.test(t))
			throw this.ia('Document fields cannot begin and end with "__"');
	}
}
class rk {
	constructor(t, e, s) {
		(this.databaseId = t),
			(this.ignoreUndefinedProperties = e),
			(this.serializer = s || oo(t));
	}
	ua(t, e, s, i = !1) {
		return new $c(
			{ Yc: t, methodName: e, oa: s, path: Dt.emptyPath(), ta: !1, ra: i },
			this.databaseId,
			this.serializer,
			this.ignoreUndefinedProperties,
		);
	}
}
function ok(n) {
	const t = n._freezeSettings(),
		e = oo(n._databaseId);
	return new rk(n._databaseId, !!t.ignoreUndefinedProperties, e);
}
function ak(n, t, e, s, i, r = {}) {
	const o = n.ua(r.merge || r.mergeFields ? 2 : 0, t, e, i);
	Wg("Data must be an object, but it was:", o, s);
	const a = jg(s, o);
	let c, l;
	if (r.merge) (c = new Jt(o.fieldMask)), (l = o.fieldTransforms);
	else if (r.mergeFields) {
		const h = [];
		for (const u of r.mergeFields) {
			const d = ck(t, u, e);
			if (!o.contains(d))
				throw new P(
					w.INVALID_ARGUMENT,
					`Field '${d}' is specified in your field mask but missing from your input data.`,
				);
			hk(h, d) || h.push(d);
		}
		(c = new Jt(h)), (l = o.fieldTransforms.filter((u) => c.covers(u.field)));
	} else (c = null), (l = o.fieldTransforms);
	return new ik(new Kt(a), c, l);
}
function Ug(n, t) {
	if (Hg((n = zs(n)))) return Wg("Unsupported field value:", t, n), jg(n, t);
	if (n instanceof zg)
		return (
			(function (e, s) {
				if (!$g(s.Yc))
					throw s.ia(
						`${e._methodName}() can only be used with update() and set()`,
					);
				if (!s.path)
					throw s.ia(
						`${e._methodName}() is not currently supported inside arrays`,
					);
				const i = e._toFieldTransform(s);
				i && s.fieldTransforms.push(i);
			})(n, t),
			null
		);
	if (n === void 0 && t.ignoreUndefinedProperties) return null;
	if ((t.path && t.fieldMask.push(t.path), n instanceof Array)) {
		if (t.settings.ta && t.Yc !== 4)
			throw t.ia("Nested arrays are not supported");
		return (function (e, s) {
			const i = [];
			let r = 0;
			for (const o of e) {
				let a = Ug(o, s.sa(r));
				a == null && (a = { nullValue: "NULL_VALUE" }), i.push(a), r++;
			}
			return { arrayValue: { values: i } };
		})(n, t);
	}
	return (function (e, s) {
		if ((e = zs(e)) === null) return { nullValue: "NULL_VALUE" };
		if (typeof e == "number") return eS(s.serializer, e);
		if (typeof e == "boolean") return { booleanValue: e };
		if (typeof e == "string") return { stringValue: e };
		if (e instanceof Date) {
			const i = yt.fromDate(e);
			return { timestampValue: Cr(s.serializer, i) };
		}
		if (e instanceof yt) {
			const i = new yt(e.seconds, 1e3 * Math.floor(e.nanoseconds / 1e3));
			return { timestampValue: Cr(s.serializer, i) };
		}
		if (e instanceof zc)
			return {
				geoPointValue: { latitude: e.latitude, longitude: e.longitude },
			};
		if (e instanceof Kn) return { bytesValue: fg(s.serializer, e._byteString) };
		if (e instanceof Zt) {
			const i = s.databaseId,
				r = e.firestore._databaseId;
			if (!r.isEqual(i))
				throw s.ia(
					`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`,
				);
			return {
				referenceValue: kc(
					e.firestore._databaseId || s.databaseId,
					e._key.path,
				),
			};
		}
		throw s.ia(`Unsupported field value: ${Nc(e)}`);
	})(n, t);
}
function jg(n, t) {
	const e = {};
	return (
		Bf(n)
			? t.path && t.path.length > 0 && t.fieldMask.push(t.path)
			: Zn(n, (s, i) => {
					const r = Ug(i, t.Xc(s));
					r != null && (e[s] = r);
			  }),
		{ mapValue: { fields: e } }
	);
}
function Hg(n) {
	return !(
		typeof n != "object" ||
		n === null ||
		n instanceof Array ||
		n instanceof Date ||
		n instanceof yt ||
		n instanceof zc ||
		n instanceof Kn ||
		n instanceof Zt ||
		n instanceof zg
	);
}
function Wg(n, t, e) {
	if (
		!Hg(e) ||
		!(function (s) {
			return (
				typeof s == "object" &&
				s !== null &&
				(Object.getPrototypeOf(s) === Object.prototype ||
					Object.getPrototypeOf(s) === null)
			);
		})(e)
	) {
		const s = Nc(e);
		throw s === "an object" ? t.ia(n + " a custom object") : t.ia(n + " " + s);
	}
}
function ck(n, t, e) {
	if ((t = zs(t)) instanceof Vc) return t._internalPath;
	if (typeof t == "string") return qg(n, t);
	throw Mr("Field path arguments must be of type string or ", n, !1, void 0, e);
}
const lk = new RegExp("[~\\*/\\[\\]]");
function qg(n, t, e) {
	if (t.search(lk) >= 0)
		throw Mr(
			`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,
			n,
			!1,
			void 0,
			e,
		);
	try {
		return new Vc(...t.split("."))._internalPath;
	} catch {
		throw Mr(
			`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
			n,
			!1,
			void 0,
			e,
		);
	}
}
function Mr(n, t, e, s, i) {
	const r = s && !s.isEmpty(),
		o = i !== void 0;
	let a = `Function ${t}() called with invalid data`;
	e && (a += " (via `toFirestore()`)"), (a += ". ");
	let c = "";
	return (
		(r || o) &&
			((c += " (found"),
			r && (c += ` in field ${s}`),
			o && (c += ` in document ${i}`),
			(c += ")")),
		new P(w.INVALID_ARGUMENT, a + n + c)
	);
}
function hk(n, t) {
	return n.some((e) => e.isEqual(t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Kg {
	constructor(t, e, s, i, r) {
		(this._firestore = t),
			(this._userDataWriter = e),
			(this._key = s),
			(this._document = i),
			(this._converter = r);
	}
	get id() {
		return this._key.path.lastSegment();
	}
	get ref() {
		return new Zt(this._firestore, this._converter, this._key);
	}
	exists() {
		return this._document !== null;
	}
	data() {
		if (this._document) {
			if (this._converter) {
				const t = new uk(
					this._firestore,
					this._userDataWriter,
					this._key,
					this._document,
					null,
				);
				return this._converter.fromFirestore(t);
			}
			return this._userDataWriter.convertValue(this._document.data.value);
		}
	}
	get(t) {
		if (this._document) {
			const e = this._document.data.field(Yg("DocumentSnapshot.get", t));
			if (e !== null) return this._userDataWriter.convertValue(e);
		}
	}
}
class uk extends Kg {
	data() {
		return super.data();
	}
}
function Yg(n, t) {
	return typeof t == "string"
		? qg(n, t)
		: t instanceof Vc
		? t._internalPath
		: t._delegate._internalPath;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function dk(n) {
	if (n.limitType === "L" && n.explicitOrderBy.length === 0)
		throw new P(
			w.UNIMPLEMENTED,
			"limitToLast() queries require specifying at least one orderBy() clause",
		);
}
class fk {
	convertValue(t, e = "none") {
		switch (vn(t)) {
			case 0:
				return null;
			case 1:
				return t.booleanValue;
			case 2:
				return pt(t.integerValue || t.doubleValue);
			case 3:
				return this.convertTimestamp(t.timestampValue);
			case 4:
				return this.convertServerTimestamp(t, e);
			case 5:
				return t.stringValue;
			case 6:
				return this.convertBytes(Un(t.bytesValue));
			case 7:
				return this.convertReference(t.referenceValue);
			case 8:
				return this.convertGeoPoint(t.geoPointValue);
			case 9:
				return this.convertArray(t.arrayValue, e);
			case 10:
				return this.convertObject(t.mapValue, e);
			default:
				throw R();
		}
	}
	convertObject(t, e) {
		const s = {};
		return (
			Zn(t.fields, (i, r) => {
				s[i] = this.convertValue(r, e);
			}),
			s
		);
	}
	convertGeoPoint(t) {
		return new zc(pt(t.latitude), pt(t.longitude));
	}
	convertArray(t, e) {
		return (t.values || []).map((s) => this.convertValue(s, e));
	}
	convertServerTimestamp(t, e) {
		switch (e) {
			case "previous":
				const s = zf(t);
				return s == null ? null : this.convertValue(s, e);
			case "estimate":
				return this.convertTimestamp(Gs(t));
			default:
				return null;
		}
	}
	convertTimestamp(t) {
		const e = qe(t);
		return new yt(e.seconds, e.nanos);
	}
	convertDocumentKey(t, e) {
		const s = st.fromString(t);
		tt(bg(s));
		const i = new Xs(s.get(1), s.get(3)),
			r = new O(s.popFirst(5));
		return (
			i.isEqual(e) ||
				Se(
					`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`,
				),
			r
		);
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function gk(n, t, e) {
	let s;
	return (
		(s = n
			? e && (e.merge || e.mergeFields)
				? n.toFirestore(t, e)
				: n.toFirestore(t)
			: t),
		s
	);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zi {
	constructor(t, e) {
		(this.hasPendingWrites = t), (this.fromCache = e);
	}
	isEqual(t) {
		return (
			this.hasPendingWrites === t.hasPendingWrites &&
			this.fromCache === t.fromCache
		);
	}
}
class pk extends Kg {
	constructor(t, e, s, i, r, o) {
		super(t, e, s, i, o),
			(this._firestore = t),
			(this._firestoreImpl = t),
			(this.metadata = r);
	}
	exists() {
		return super.exists();
	}
	data(t = {}) {
		if (this._document) {
			if (this._converter) {
				const e = new Qi(
					this._firestore,
					this._userDataWriter,
					this._key,
					this._document,
					this.metadata,
					null,
				);
				return this._converter.fromFirestore(e, t);
			}
			return this._userDataWriter.convertValue(
				this._document.data.value,
				t.serverTimestamps,
			);
		}
	}
	get(t, e = {}) {
		if (this._document) {
			const s = this._document.data.field(Yg("DocumentSnapshot.get", t));
			if (s !== null)
				return this._userDataWriter.convertValue(s, e.serverTimestamps);
		}
	}
}
class Qi extends pk {
	data(t = {}) {
		return super.data(t);
	}
}
class mk {
	constructor(t, e, s, i) {
		(this._firestore = t),
			(this._userDataWriter = e),
			(this._snapshot = i),
			(this.metadata = new zi(i.hasPendingWrites, i.fromCache)),
			(this.query = s);
	}
	get docs() {
		const t = [];
		return this.forEach((e) => t.push(e)), t;
	}
	get size() {
		return this._snapshot.docs.size;
	}
	get empty() {
		return this.size === 0;
	}
	forEach(t, e) {
		this._snapshot.docs.forEach((s) => {
			t.call(
				e,
				new Qi(
					this._firestore,
					this._userDataWriter,
					s.key,
					s,
					new zi(
						this._snapshot.mutatedKeys.has(s.key),
						this._snapshot.fromCache,
					),
					this.query.converter,
				),
			);
		});
	}
	docChanges(t = {}) {
		const e = !!t.includeMetadataChanges;
		if (e && this._snapshot.excludesMetadataChanges)
			throw new P(
				w.INVALID_ARGUMENT,
				"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().",
			);
		return (
			(this._cachedChanges &&
				this._cachedChangesIncludeMetadataChanges === e) ||
				((this._cachedChanges = (function (s, i) {
					if (s._snapshot.oldDocs.isEmpty()) {
						let r = 0;
						return s._snapshot.docChanges.map((o) => {
							const a = new Qi(
								s._firestore,
								s._userDataWriter,
								o.doc.key,
								o.doc,
								new zi(
									s._snapshot.mutatedKeys.has(o.doc.key),
									s._snapshot.fromCache,
								),
								s.query.converter,
							);
							return (
								o.doc, { type: "added", doc: a, oldIndex: -1, newIndex: r++ }
							);
						});
					}
					{
						let r = s._snapshot.oldDocs;
						return s._snapshot.docChanges
							.filter((o) => i || o.type !== 3)
							.map((o) => {
								const a = new Qi(
									s._firestore,
									s._userDataWriter,
									o.doc.key,
									o.doc,
									new zi(
										s._snapshot.mutatedKeys.has(o.doc.key),
										s._snapshot.fromCache,
									),
									s.query.converter,
								);
								let c = -1,
									l = -1;
								return (
									o.type !== 0 &&
										((c = r.indexOf(o.doc.key)), (r = r.delete(o.doc.key))),
									o.type !== 1 &&
										((r = r.add(o.doc)), (l = r.indexOf(o.doc.key))),
									{ type: yk(o.type), doc: a, oldIndex: c, newIndex: l }
								);
							});
					}
				})(this, e)),
				(this._cachedChangesIncludeMetadataChanges = e)),
			this._cachedChanges
		);
	}
}
function yk(n) {
	switch (n) {
		case 0:
			return "added";
		case 2:
		case 3:
			return "modified";
		case 1:
			return "removed";
		default:
			return R();
	}
}
class bk extends fk {
	constructor(t) {
		super(), (this.firestore = t);
	}
	convertBytes(t) {
		return new Kn(t);
	}
	convertReference(t) {
		const e = this.convertDocumentKey(t, this.firestore._databaseId);
		return new Zt(this.firestore, null, e);
	}
}
function Gg(n) {
	n = Ir(n, ho);
	const t = Ir(n.firestore, Bc),
		e = Bg(t),
		s = new bk(t);
	return dk(n._query), QE(e, n._query).then((i) => new mk(t, s, n, i));
}
function vk(n, t) {
	const e = Ir(n.firestore, Bc),
		s = tk(n),
		i = gk(n.converter, t);
	return xk(e, [
		ak(
			ok(n.firestore),
			"addDoc",
			s._key,
			i,
			n.converter !== null,
			{},
		).toMutation(s._key, xe.exists(!1)),
	]).then(() => s);
}
function xk(n, t) {
	return (function (e, s) {
		const i = new Ve();
		return (
			e.asyncQueue.enqueueAndForget(async () => LE(await GE(e), s, i)),
			i.promise
		);
	})(Bg(n), t);
}
(function (n, t = !0) {
	(function (e) {
		Jn = e;
	})(e_),
		dr(
			new $s(
				"firestore",
				(e, { instanceIdentifier: s, options: i }) => {
					const r = e.getProvider("app").getImmediate(),
						o = new Bc(
							new bw(e.getProvider("auth-internal")),
							new ww(e.getProvider("app-check-internal")),
							(function (a, c) {
								if (
									!Object.prototype.hasOwnProperty.apply(a.options, [
										"projectId",
									])
								)
									throw new P(
										w.INVALID_ARGUMENT,
										'"projectId" not provided in firebase.initializeApp.',
									);
								return new Xs(a.options.projectId, c);
							})(r, s),
							r,
						);
					return (
						(i = Object.assign({ useFetchStreams: t }, i)), o._setSettings(i), o
					);
				},
				"PUBLIC",
			).setMultipleInstances(!0),
		),
		Rn(Vh, "3.10.0", n),
		Rn(Vh, "3.10.0", "esm2017");
})();
const _k = '"AIzaSyDVukLd9kYt8ZdMlFABDu027nIHQSI7P9U";',
	wk = {
		apiKey: _k,
		authDomain: "survey-app-64e6f.firebaseapp.com",
		projectId: "survey-app-64e6f",
		storageBucket: "survey-app-64e6f.appspot.com",
		messagingSenderId: "191419324923",
		appId: "1:191419324923:web:0b48a35a01a62fb5c5d35e",
		measurementId: "G-5ZCE1C0N3L",
	},
	Sk = Ad(wk),
	Uc = nk(Sk),
	Ek = async (n) => {
		try {
			const t = await vk(Fc(Uc, "surveys"), n);
		} catch (t) {
			alert(`Error adding document: ${t}`);
		}
	},
	kk = async (n) => {
		let t = [];
		return (
			await Gg(Fc(Uc, "surveys")).then((e) => {
				e.forEach((s) => {
					s.data().email === n && t.push(s.data());
				});
			}),
			t
		);
	},
	Ck = async () => {
		let n = [];
		return (
			await Gg(Fc(Uc, "surveys")).then((t) => {
				t.forEach((e) => {
					n.push(e.data());
				});
			}),
			n
		);
	};
var gt;
(function (n) {
	(n.NOT_CREATED = "I have not created an account yet."),
		(n.OKAY = "My account status is okay."),
		(n.FINANCIAL_ISSUES = "I'm currently having financial issues.");
})(gt || (gt = {}));
var F;
(function (n) {
	(n.STOCK = "stock market"),
		(n.FOREIGN_EXCHANGE = "foreign exchange"),
		(n.COMMODITY = "commodity"),
		(n.BOND = "bond market"),
		(n.CRYPTOCURRENCY = "cryptocurrency market");
})(F || (F = {}));
var Xt;
(function (n) {
	(n.NOT_INVESTED = "I have not invested yet."),
		(n.BANK_MANAGER = "My bank's manager advices me."),
		(n.FLIP_COIN = "I flip a coin");
})(Xt || (Xt = {}));
const ns = await Ck(),
	an = {
		"stock market": 0,
		"foreign exchange": 0,
		commodity: 0,
		"bond market": 0,
		"cryptocurrency market": 0,
	},
	Tk = () => {
		let n = 0,
			t = 0,
			e = 0,
			s = 0,
			i = 0,
			r = 0,
			o = 0,
			a = 0,
			c = 0,
			l = 0;
		ns.forEach((h) => {
			switch (h.market) {
				case F.STOCK:
					(n += parseInt(h.age)), r++;
					break;
				case F.FOREIGN_EXCHANGE:
					(t += parseInt(h.age)), o++;
					break;
				case F.COMMODITY:
					(e += parseInt(h.age)), a++;
					break;
				case F.BOND:
					(s += parseInt(h.age)), c++;
					break;
				case F.CRYPTOCURRENCY:
					(i += parseInt(h.age)), l++;
					break;
			}
		}),
			(an[F.STOCK] = n / r),
			(an[F.FOREIGN_EXCHANGE] = t / o),
			(an[F.COMMODITY] = e / a),
			(an[F.BOND] = s / c),
			(an[F.CRYPTOCURRENCY] = i / l);
	};
Tk();
const As = {
	"I have not created an account yet.": 0,
	"My account status is okay.": 0,
	"I'm currently having financial issues.": 0,
};
ns.forEach((n) => {
	switch (n.status) {
		case gt.NOT_CREATED:
			As[gt.NOT_CREATED]++;
			break;
		case gt.OKAY:
			As[gt.OKAY]++;
			break;
		case gt.FINANCIAL_ISSUES:
			As[gt.FINANCIAL_ISSUES]++;
			break;
	}
});
const dt = {
	"stock market": {
		"Books and articles": 0,
		"YouTube tutorial videos": 0,
		"online or face to face courses": 0,
		"experience with little investment": 0,
	},
	"foreign exchange": {
		"Books and articles": 0,
		"YouTube tutorial videos": 0,
		"online or face to face courses": 0,
		"experience with little investment": 0,
	},
	commodity: {
		"Books and articles": 0,
		"YouTube tutorial videos": 0,
		"online or face to face courses": 0,
		"experience with little investment": 0,
	},
	"bond market": {
		"Books and articles": 0,
		"YouTube tutorial videos": 0,
		"online or face to face courses": 0,
		"experience with little investment": 0,
	},
	"cryptocurrency market": {
		"Books and articles": 0,
		"YouTube tutorial videos": 0,
		"online or face to face courses": 0,
		"experience with little investment": 0,
	},
};
ns.forEach((n) => {
	switch (n.market) {
		case F.STOCK:
			n.resources.forEach((t) => {
				(dt[F.STOCK]["Books and articles"] +=
					t === "Books and articles" ? 1 : 0),
					(dt[F.STOCK]["YouTube tutorial videos"] +=
						t === "YouTube tutorial videos" ? 1 : 0),
					(dt[F.STOCK]["online or face to face courses"] +=
						t === "online or face to face courses" ? 1 : 0),
					(dt[F.STOCK]["experience with little investment"] +=
						t === "experience with little investment" ? 1 : 0);
			});
			break;
		case F.FOREIGN_EXCHANGE:
			n.resources.forEach((t) => {
				(dt[F.FOREIGN_EXCHANGE]["Books and articles"] +=
					t === "Books and articles" ? 1 : 0),
					(dt[F.FOREIGN_EXCHANGE]["YouTube tutorial videos"] +=
						t === "YouTube tutorial videos" ? 1 : 0),
					(dt[F.FOREIGN_EXCHANGE]["online or face to face courses"] +=
						t === "online or face to face courses" ? 1 : 0),
					(dt[F.FOREIGN_EXCHANGE]["experience with little investment"] +=
						t === "experience with little investment" ? 1 : 0);
			});
			break;
		case F.COMMODITY:
			n.resources.forEach((t) => {
				(dt[F.COMMODITY]["Books and articles"] +=
					t === "Books and articles" ? 1 : 0),
					(dt[F.COMMODITY]["YouTube tutorial videos"] +=
						t === "YouTube tutorial videos" ? 1 : 0),
					(dt[F.COMMODITY]["online or face to face courses"] +=
						t === "online or face to face courses" ? 1 : 0),
					(dt[F.COMMODITY]["experience with little investment"] +=
						t === "experience with little investment" ? 1 : 0);
			});
			break;
		case F.BOND:
			n.resources.forEach((t) => {
				(dt[F.BOND]["Books and articles"] +=
					t === "Books and articles" ? 1 : 0),
					(dt[F.BOND]["YouTube tutorial videos"] +=
						t === "YouTube tutorial videos" ? 1 : 0),
					(dt[F.BOND]["online or face to face courses"] +=
						t === "online or face to face courses" ? 1 : 0),
					(dt[F.BOND]["experience with little investment"] +=
						t === "experience with little investment" ? 1 : 0);
			});
			break;
		case F.CRYPTOCURRENCY:
			n.resources.forEach((t) => {
				(dt[F.CRYPTOCURRENCY]["Books and articles"] +=
					t === "Books and articles" ? 1 : 0),
					(dt[F.CRYPTOCURRENCY]["YouTube tutorial videos"] +=
						t === "YouTube tutorial videos" ? 1 : 0),
					(dt[F.CRYPTOCURRENCY]["online or face to face courses"] +=
						t === "online or face to face courses" ? 1 : 0),
					(dt[F.CRYPTOCURRENCY]["experience with little investment"] +=
						t === "experience with little investment" ? 1 : 0);
			});
			break;
	}
});
const pe = {
	"I have not invested yet.": {
		"My account status is okay.": 0,
		"I'm currently having financial issues.": 0,
	},
	"My bank's manager advices me.": {
		"My account status is okay.": 0,
		"I'm currently having financial issues.": 0,
	},
	"I flip a coin": {
		"My account status is okay.": 0,
		"I'm currently having financial issues.": 0,
	},
};
ns.forEach((n) => {
	switch (n.invest) {
		case Xt.NOT_INVESTED:
			switch (n.status) {
				case gt.OKAY:
					pe[Xt.NOT_INVESTED][gt.OKAY]++;
					break;
				case gt.FINANCIAL_ISSUES:
					pe[Xt.NOT_INVESTED][gt.FINANCIAL_ISSUES]++;
					break;
			}
			break;
		case Xt.BANK_MANAGER:
			switch (n.status) {
				case gt.OKAY:
					pe[Xt.BANK_MANAGER][gt.OKAY]++;
					break;
				case gt.FINANCIAL_ISSUES:
					pe[Xt.BANK_MANAGER][gt.FINANCIAL_ISSUES]++;
					break;
			}
			break;
		case Xt.FLIP_COIN:
			switch (n.status) {
				case gt.OKAY:
					pe[Xt.FLIP_COIN][gt.OKAY]++;
					break;
				case gt.FINANCIAL_ISSUES:
					pe[Xt.FLIP_COIN][gt.FINANCIAL_ISSUES]++;
					break;
			}
			break;
	}
});
const Ik = [
		"o",
		"a",
		"de",
		"para",
		"em",
		"com",
		"é",
		"e",
		"ou",
		"que",
		"como",
		"a",
		"on",
		"the",
		"in",
		"of",
		"i",
		"he",
		"it",
		"no",
	],
	jc = [];
ns.forEach((n) => {
	const t = n.details?.toLocaleLowerCase();
	t &&
		t.split(" ").forEach((s) => {
			!Ik.includes(s) && s.length < 10 && jc.push(s);
		});
});
let Hc = {};
jc.forEach((n) => {
	Hc[n] = 0;
});
jc.forEach((n) => {
	Hc[n]++;
});
const yu = Hc,
	Oa = {
		[F.FOREIGN_EXCHANGE]: {},
		[F.STOCK]: {},
		[F.COMMODITY]: {},
		[F.BOND]: {},
		[F.CRYPTOCURRENCY]: {},
	};
Object.keys(Oa).forEach((n) => {
	let t = {};
	ns.forEach((e) => {
		const s = e.date?.split(" ")[0];
		if (s) {
			const i = t[s] || 0,
				r = e.market === n ? 1 : 0;
			(t[s] = i + r), (Oa[n][s] = t[s]);
		}
	});
});
const $i = Oa,
	Mk = () => {
		De.register(Yn, Sn);
		const t = document.getElementById("status-chart").getContext("2d");
		new De(t, {
			type: "pie",
			data: {
				datasets: [
					{
						data: Object.values(As),
						backgroundColor: [
							"rgb(255, 99, 132)",
							"rgb(54, 162, 235)",
							"rgb(255, 205, 86)",
						],
						label: "Account Status",
					},
				],
				labels: Object.keys(As),
			},
			options: {
				responsive: !0,
				plugins: {
					legend: { position: "top" },
					title: { display: !0, text: "Account Status" },
					datalabels: {
						color: "#fff",
						font: { weight: "bold", size: 126 },
						formatter: (p, m) => {
							const b = m;
							return `${b?.chart.data.labels?.[b.dataIndex]}: ${p}`;
						},
					},
				},
			},
		});
		const e = document.getElementById("invest-chart"),
			s = Object.keys(pe),
			i = Object.keys(pe[s[0]]),
			r = s.map((p) => Object.values(pe[p]));
		new De(e, {
			type: "bar",
			data: {
				labels: i,
				datasets: s.map((p, m) => ({
					label: p,
					data: r[m],
					backgroundColor:
						m === 0
							? "rgb(255, 99, 132)"
							: m === 1
							? "rgb(54, 162, 235)"
							: "rgb(255, 205, 86)",
				})),
			},
			options: {
				scales: {
					y: {
						beginAtZero: !0,
						axis: "y",
						display: !0,
						title: {
							display: !0,
							text: "Amount of answers",
							color: "black",
							font: { size: 16, weight: "bold" },
						},
					},
					x: {
						stacked: !1,
						axis: "x",
						display: !0,
						title: {
							display: !0,
							text: "Financial Status",
							color: "black",
							font: { size: 16, weight: "bold" },
						},
					},
				},
			},
		});
		const a = document.getElementById("age-chart").getContext("2d");
		new De(a, {
			type: "bar",
			data: {
				datasets: [
					{
						data: Object.values(an),
						backgroundColor: [
							"rgb(255, 99, 132)",
							"rgb(54, 162, 235)",
							"rgb(255, 205, 86)",
							"rgb(255, 159, 64)",
							"rgb(75, 192, 192)",
						],
						label: "Average Age per Market",
					},
				],
				labels: Object.keys(an),
			},
			options: {
				responsive: !0,
				plugins: {
					legend: {
						position: "bottom",
						labels: { color: "rgb(0, 0, 0)" },
						display: !1,
					},
					title: { display: !0, text: "Average Age per Market" },
					datalabels: {
						color: "rgb(0, 0, 0)",
						font: { weight: "bold" },
						formatter: (p, m) => {
							const b = m;
							return `${b?.chart.data.labels?.[b.dataIndex]}: ${p}`;
						},
					},
				},
			},
		});
		const c = Object.keys(yu).map((p) => ({ key: p, value: yu[p] }));
		console.log(c);
		const h = document.getElementById("wordcloud-chart").getContext("2d");
		new wd(h, {
			data: {
				labels: c.map((p) => p.key),
				datasets: [{ data: c.map((p) => p.value), label: "", size: 30 }],
			},
			options: {
				plugins: {
					legend: { display: !1 },
					title: { display: !0, text: "Most common investment loss reasons" },
					wordcloud: { minSize: 220, fontSize: { from: 220, to: 620 } },
				},
			},
		});
		let u = [];
		for (let p in $i) for (let m in $i[p]) u.includes(m) || u.push(m);
		u.sort((p, m) => new Date(p).getTime() - new Date(m).getTime());
		let d = [];
		for (let p in $i) {
			let m = [];
			for (let y of u) {
				let v = $i[p][y] || 0;
				m.push(v);
			}
			let b = { label: p, data: m, fill: !1 };
			d.push(b);
		}
		const g = document
			.getElementById("markets-trhough-time-chart")
			.getContext("2d");
		new De(g, {
			type: "line",
			data: { labels: u, datasets: d },
			options: {
				responsive: !0,
				plugins: {
					legend: {
						position: "bottom",
						labels: { color: "rgb(0, 0, 0)" },
						display: !0,
					},
					title: { display: !0, text: "Market engagement trend through time" },
					datalabels: {
						color: "rgb(0, 0, 0)",
						font: { weight: "bold" },
						formatter: (p, m) => {
							const b = m;
							return `${b?.chart.data.labels?.[b.dataIndex]}: ${p}`;
						},
					},
				},
			},
		});
	},
	Ak = (n) => ({
		name: n[0],
		email: n[1],
		age: n[2],
		status: n[3],
		market: n[4],
		invest: n[5],
		resources: n[6],
		details: n[7],
		date: n[8],
	}),
	Dk = document.querySelectorAll(".infoItem");
let rt = [];
const Ok = (n) => {
		switch (
			((rt = []), rt.push(n.name), rt.push(n.email), rt.push(n.age), n.status)
		) {
			case "2":
				rt.push("My account status is okay.");
				break;
			case "3":
				rt.push("I'm currently having financial issues.");
				break;
			case "4":
				rt.push("I have not created an account yet.");
			default:
				rt.push("Not answered.");
				break;
		}
		switch (n.market) {
			case "stk":
				rt.push("stock market");
				break;
			case "fx":
				rt.push("foreign exchange");
				break;
			case "cmd":
				rt.push("commodity");
				break;
			case "bond":
				rt.push("bond market");
				break;
			case "cripto":
				rt.push("cryptocurrency market");
				break;
			default:
				rt.push("Not answered.");
				break;
		}
		switch (n.invest) {
			case "2":
				rt.push("My bank's manager advices me.");
				break;
			case "3":
				rt.push("I flip a coin");
				break;
			default:
				rt.push("I have not invested yet.");
				break;
		}
		let t = [];
		n.resources?.forEach((d) => {
			switch (d) {
				case "books":
					t.push("Books and articles");
					break;
				case "ytb":
					t.push("YouTube tutorial videos");
					break;
				case "courses":
					t.push("online or face to face courses");
					break;
				case "exp":
					t.push("experience with little investment");
					break;
			}
		}),
			t.length > 0 ? rt.push(t) : rt.push(["not answered"]),
			n.details.length > 0 ? rt.push(n.details) : rt.push("Not filled");
		const e = new Date(),
			s = e.getDate(),
			i = e.getMonth() + 1,
			r = e.getFullYear(),
			o = e.getHours(),
			a = e.getMinutes(),
			c = e.getSeconds(),
			l = `${s}/${i}/${r} ${o}:${a}:${c}`,
			h = [...rt, l];
		Ek(Ak(h));
		const u = rt.map((d) =>
			Array.isArray(d)
				? `<div>${d.map((f) => `<br> ${f}`)}</div>`
				: `<p>${d}</p>`,
		);
		Dk.forEach((d, f) => {
			u.forEach((g, p) => {
				p === f && (d.innerHTML = g);
			});
		});
	},
	_e = document.getElementById("overlay"),
	bi = document.getElementById("invalid-form-modal"),
	Pk = document.getElementById("close-modal");
bi?.querySelector("h2");
const Rk = bi?.querySelector("p"),
	Ji = document.getElementById("see-surveys-modal"),
	Lk = document.getElementById("survey-modal-text"),
	Nk = document.getElementById("survey-email"),
	Fk = document.getElementById("submit-survey-email"),
	Bk = (n) => {
		Rk.innerText = n;
	},
	Vk = () => {
		(_e.style.display = "block"), (bi.style.display = "flex");
	},
	Xg = () => {
		(_e.style.display = "none"), (bi.style.display = "none");
	},
	Mn = (n) => {
		Bk(n), Vk();
	};
_e?.addEventListener("click", () => {
	_e.style.display === "block" && bi.style.display === "flex" && Xg();
});
const Me = "1px solid rgba(231, 90, 90, 0.65)";
var z;
(function (n) {
	(n.statusSelect = "statusSelect"),
		(n.radioInputs = "radioInputs"),
		(n.investSelect = "investSelect"),
		(n.checkboxInputs = "checkboxInputs"),
		(n.detailsTextArea = "detailsTextArea"),
		(n.emailInput = "emailInput"),
		(n.fullnameInput = "fullnameInput"),
		(n.ageInput = "ageInput");
})(z || (z = {}));
const Ds = document.getElementById("checkboxInputs"),
	Os = document.getElementById("radioInputs"),
	qo = (n) => {
		const t = document.getElementById("age-after"),
			e = document.getElementById("email-after"),
			s = document.getElementById("fullname-after");
		// switch (n) {
		// 	case z.emailInput:
		// 		(e.style.display = "block"),
		// 			setTimeout(() => {
		// 				e.style.display = "none";
		// 			}, 3e3);
		// 		break;
		// 	case z.fullnameInput:
		// 		(s.style.display = "block"),
		// 			setTimeout(() => {
		// 				s.style.display = "none";
		// 			}, 3e3);
		// 		break;
		// 	case z.ageInput:
		// 		(t.style.display = "block"),
		// 			setTimeout(() => {
		// 				t.style.display = "none";
		// 			}, 3e3);
		// 		break;
		// }
	},
	ee = (n) => {
		switch (n) {
			case z.statusSelect:
				$e.style.border = Me;
				break;
			case z.radioInputs:
				(Os.style.border = Me), (Os.style.borderRadius = "5px");
				break;
			case z.investSelect:
				ve.style.border = Me;
				break;
			case z.checkboxInputs:
				(Ds.style.border = Me), (Ds.style.borderRadius = "5px");
				break;
			case z.detailsTextArea:
				xn.style.border = Me;
				break;
			case z.emailInput:
				(ss.style.border = Me), qo(n);
				break;
			case z.fullnameInput:
				(is.style.border = Me), qo(n);
				break;
			case z.ageInput:
				(_n.style.border = Me), qo(n);
				break;
		}
	},
	$e = document.querySelector("#status-select"),
	Ar = document.querySelectorAll('input[name="markets"]'),
	ve = document.querySelector("#invest-select"),
	Wc = document.querySelectorAll('input[type="checkbox"]'),
	xn = document.querySelector("#details-textarea"),
	ss = document.querySelector("#email"),
	is = document.querySelector("#fullname"),
	_n = document.querySelector("#age");
var Ae;
(function (n) {
	(n.status =
		"Please select the status of your account and the market in which you operate, or click the skip button."),
		(n.invest =
			"Please select at least one resource you use for training and indicate how you decide to invest, or click the skip button."),
		(n.details =
			"Please send us more details in order to optimize the survey, or click the skip button."),
		(n.contact = "Please fill in your contact information correctly!"),
		(n.conflict =
			"You answered that haven't created an account yet, but you selected a market. Please check your answers and try again.");
})(Ae || (Ae = {}));
let fe = "",
	Zi = [];
const zk = () => {
		const n = {
			name: is.value,
			email: ss.value,
			age: _n.value,
			status: $e?.value || "",
			market: fe || "",
			invest: ve?.value || "",
			resources: Zi,
			details: xn?.value || "",
		};
		Ok(n), Le("sucess");
	},
	$k = (n) => {
		switch (n) {
			case "next-status":
				(fe = ""),
					Ar?.forEach((r) => (r.checked ? (fe = r.value) : null)),
					$e.value === "4" &&
						fe !== "" &&
						(Mn(Ae.conflict),
						Ar?.forEach((r) => (r.checked = !1)),
						(fe = ""),
						ee(z.radioInputs),
						ee(z.statusSelect)),
					$e.value === "1" && ee(z.statusSelect),
					fe === "" && ee(z.radioInputs),
					$e.value !== "1" && fe !== "" ? Le("invest") : Mn(Ae.status);
				break;
			case "next-invest":
				(Zi = []),
					Wc?.forEach((r) => (r.checked ? Zi.push(r.value) : null)),
					(fe === "" && ve?.value !== "1") || (fe !== "" && ve?.value === "1")
						? (ee(z.investSelect), Mn(Ae.conflict))
						: (ve?.value !== "1" && Zi.length > 0) || ve?.value === "1"
						? Le("details")
						: (Mn(Ae.invest), ee(z.checkboxInputs));
				break;
			case "next-details":
				let t = !1;
				typeof xn?.value?.length == "number" && xn?.value?.length > 0
					? (t = !0)
					: (t = !1),
					t && Le("contact"),
					t || (Mn(Ae.details), ee(z.detailsTextArea));
				break;
			case "next-contact":
				const e = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(is.value),
					s = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(ss.value),
					i = parseInt(_n.value) > 0 && parseInt(_n.value) < 100;
				!e && ee(z.fullnameInput),
					!s && ee(z.emailInput),
					!i && ee(z.ageInput),
					e && s && i ? zk() : Mn(Ae.contact);
		}
	},
	tr = document.getElementById("count-displayer"),
	Uk = (n) => {
		const e = n.value.length;
		(tr.textContent = `${e}/130`),
			e > 100 ? (tr.style.color = "red") : (tr.style.color = "black");
	},
	bu = document.getElementById("details-textarea");
bu.addEventListener("input", () => Uk(bu));
const jk = () => {
		($e.value = "1"),
			Ar.forEach((n) => (n.checked = !1)),
			(ve.value = "1"),
			Wc.forEach((n) => (n.checked = !1)),
			(xn.value = ""),
			(ss.value = ""),
			(is.value = ""),
			(_n.value = ""),
			(tr.textContent = "0/130");
	},
	Hk = document.querySelectorAll(".back-button"),
	Qg = document.querySelectorAll(".skip-button");
console.log(Qg.length);
const Wk = [
	document.querySelector("#next-status"),
	document.querySelector("#next-invest"),
	document.querySelector("#next-details"),
	document.querySelector("#next-contact"),
];
Wk.forEach((n) => n.addEventListener("click", () => $k(n.id)));
const Pa = [
	"welcome",
	"start",
	"status",
	"invest",
	"details",
	"contact",
	"sucess",
	"dashboard",
];
Hk.forEach((n, t) => {
	n.addEventListener("click", () => {
		Le(Pa[t]);
	});
});
Qg.forEach((n, t) => {
	n.addEventListener("click", () => {
		console.log(t),
			t === 5
				? (Le("dashboard"), Mk(), jk())
				: t + 1 < Pa.length - 1 && t !== 5
				? Le(Pa[t + 1])
				: Le("welcome");
	});
});
const Qe = (n) => {
	switch ((document.querySelectorAll(".after").forEach((t) => t.remove()), n)) {
		case z.statusSelect:
			$e.style.border = "";
			break;
		case z.radioInputs:
			(Os.style.border = ""),
				(Os.style.borderRadius = ""),
				(Os.style.padding = "");
			break;
		case z.investSelect:
			ve.style.border = "";
			break;
		case z.checkboxInputs:
			(Ds.style.border = ""),
				(Ds.style.borderRadius = ""),
				(Ds.style.padding = "");
			break;
		case z.detailsTextArea:
			xn.style.border = "";
			break;
		case z.emailInput:
			ss.style.border = "";
			break;
		case z.fullnameInput:
			is.style.border = "";
			break;
		case z.ageInput:
			_n.style.border = "";
			break;
	}
};
Wc.forEach((n) => {
	n.addEventListener("focus", () => {
		Qe(z.checkboxInputs);
	});
});
Ar.forEach((n) => {
	n.addEventListener("focus", () => {
		Qe(z.radioInputs);
	});
});
$e?.addEventListener("focus", () => {
	Qe(z.statusSelect);
});
ve?.addEventListener("focus", () => {
	Qe(z.investSelect);
});
xn?.addEventListener("focus", () => {
	Qe(z.detailsTextArea);
});
ss?.addEventListener("focus", () => {
	Qe(z.emailInput);
});
is?.addEventListener("focus", () => {
	Qe(z.fullnameInput);
});
_n?.addEventListener("focus", () => {
	Qe(z.ageInput);
});
const Ue = document.querySelector(".toggle-theme"),
	qk = () => {
		Ue?.className.includes("light")
			? Ue.classList.replace("light", "dark")
			: Ue?.classList.replace("dark", "light");
	},
	Ui = document.querySelector(".surveys-icon")?.querySelector("img"),
	ji = Ue?.querySelector("img"),
	Dr = (n) => {
		const t = document.querySelector("#reset-modal-icon")?.querySelector("img");
		n === "light"
			? ((Ui.src = "./assets/survey-light.svg"),
			  (Ui.alt = "light view survey icon"),
			  (ji.src = "./assets/sun.svg"),
			  (ji.alt = "light theme sun icon"),
			  (t.alt = "light reset spinner icon"),
			  (t.src = "./assets/spinner-dark.svg"))
			: ((Ui.src = "./assets/survey-dark.svg"),
			  (Ui.alt = "dark view survey icon"),
			  (ji.src = "./assets/moon.svg"),
			  (ji.alt = "dark theme moon icon"),
			  (t.src = "./assets/spinner-light.svg"),
			  (t.alt = "dark reset icon"));
	},
	vu = (n) => {
		n === "light"
			? (document.documentElement.style.setProperty(
					"--primary-color",
					"rgba(62, 178, 94, 1)",
			  ),
			  document.documentElement.style.setProperty(
					"--secondary-color",
					"white",
			  ),
			  document.documentElement.style.setProperty(
					"--primary-text-color",
					"black",
			  ),
			  document.documentElement.style.setProperty(
					"--secondary-text-color",
					"white",
			  ),
			  document.documentElement.style.setProperty(
					"--unselected-color",
					"rgba(62, 178, 94, 0.3)",
			  ),
			  document.documentElement.style.setProperty(
					"--selected-color",
					"rgba(62, 178, 94, 1)",
			  ))
			: (document.documentElement.style.setProperty("--primary-color", "white"),
			  document.documentElement.style.setProperty(
					"--secondary-color",
					"rgba(62, 178, 94, 1)",
			  ),
			  document.documentElement.style.setProperty(
					"--primary-text-color",
					"white",
			  ),
			  document.documentElement.style.setProperty(
					"--secondary-text-color",
					"black",
			  ),
			  document.documentElement.style.setProperty(
					"--unselected-color",
					"white",
			  ),
			  document.documentElement.style.setProperty(
					"--selected-color",
					"rgb(48, 109, 65)",
			  ));
	},
	Kk = new MutationObserver((n) => {
		for (let t of n)
			t.type === "attributes" &&
				t.attributeName === "class" &&
				(Ue.classList.contains("light")
					? (Dr("light"), vu("light"))
					: (Dr("dark"), vu("dark")));
	}),
	Yk = { attributes: !0, attributeFilter: ["class"] };
Kk.observe(Ue, Yk);
Ue?.addEventListener("click", () => {
	qk();
});
Pk?.addEventListener("click", () => {
	Xg();
});
const Gk = document.querySelector(".surveys-icon"),
	Ko = document.getElementById("result"),
	xu = document.getElementById("submission"),
	Jg = () => {
		if (_e.style.display === "block" && Ji.style.display === "flex") {
			(_e.style.display = "none"), (Ji.style.display = "none");
			return;
		}
		(_e.style.display = "block"), (Ji.style.display = "flex");
	},
	Xk = (n) => {
		if (n.length === 0) {
			Lk.innerText = "No surveys found, please try with a different email";
			return;
		} else {
			(xu.style.display = "none"),
				(Ko.innerHTML = `
        <span id="reset-modal-icon">
            <img src="./assets/spinner-dark.svg" alt="close icon" />
        </span>
        <div class="modal-content">
            <div class="modal-header">
                <h2>Surveys</h2>
                ${n
									.map(
										(e) => `
                    <div class="survey">
                        <h3>${e.name}</h3>
                        <p>Email: ${e.email}</p>
                        <p>Age: ${e.age}</p>
                        <p>Investment strategy: ${e.invest}</p>
                        <p>Operating market: ${e.market}</p>
                        <div><p>Training resources:</p> ${e.resources
													.map(
														(s) => `
                            <p>${s}</p>`,
													)
													.join("")}</div>
                        <p>Account status: ${e.status}</p>
                        <p>Report on losses: ${e.details}</p>
                        <p>Survey date: ${e.date}</p>
                    </div>
                    `,
									)
									.join("")}
        </div>`),
				(Ko.style.display = "block");
			const t = document.getElementById("reset-modal-icon");
			(t.style.display = "block"),
				Ue.classList.contains("light") ? Dr("light") : Dr("dark"),
				t?.addEventListener("click", () => {
					console.log("clicked"),
						t
							?.querySelector("img")
							?.setAttribute("style", "animation: spin 1s infinite linear ;"),
						setTimeout(() => {
							t?.querySelector("img")?.setAttribute("style", "animation: none"),
								(xu.style.display = "flex"),
								(Ko.style.display = "none");
						}, 1e3);
				});
		}
	};
Gk?.addEventListener("click", () => {
	Jg();
});
Fk.addEventListener("click", () => {
	const n = Nk.value;
	kk(n).then((t) => {
		Xk(t);
	});
});
_e?.addEventListener("click", () => {
	_e.style.display === "block" && Ji.style.display === "flex" && Jg();
});
document.getElementById("overlay");
const Zg = document.getElementById("invalid-form-modal");
document.getElementById("close-modal");
Zg?.querySelector("h2");
Zg?.querySelector("p");
document.getElementById("see-surveys-modal");
document.getElementById("survey-modal-text");
document.getElementById("survey-email");
document.getElementById("submit-survey-email");
