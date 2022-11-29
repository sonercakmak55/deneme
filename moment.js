//! an.js

;(fonksiyon (genel, fabrika) {
    typeof export === 'nesne' && typeof modülü !== 'tanımsız' ? module.exports = fabrika() :
    typeof define === 'fonksiyon' && define.amd ? tanımla(fabrika):
    global.moment = fabrika()
}(bu, (işlev () { 'katı kullan';

    var hookCallback;

    işlev kancaları () {
        return hookCallback.apply(null, bağımsız değişkenler);
    }

    // Bu, moment() ile çağrılan yöntemi kaydetmek için yapılır.
    // döngüsel bağımlılıklar oluşturmadan.
    işlev setHookCallback (geri arama) {
        hookCallback = geri arama;
    }

    function Array(giriş) {
        dönüş girişi örneğiof Array || Object.prototype.toString.call(input) === '[nesne Dizisi]';
    }

    işlev Nesne(giriş) {
        // IE8, tanımsız ve null'u nesne olarak kabul edecek, eğer bu olmasaydı
        // giriş != boş
        dönüş girişi != null && Object.prototype.toString.call(input) === '[nesne Nesnesi]';
    }

    function isObjectEmpty(obj) {
        eğer (Object.getOwnPropertyNames) {
            dönüş (Object.getOwnPropertyNames(obj).length === 0);
        } başka {
            var k;
            için (nesnede k) {
                if (obj.hasOwnProperty(k)) {
                    yanlış dönüş;
                }
            }
            doğru dönüş;
        }
    }

    işlev Tanımsız(giriş) {
        dönüş girişi === geçersiz 0;
    }

    işlevSayı(giriş) {
        dönüş tipigiriş === 'sayı' || Object.prototype.toString.call(input) === '[nesne Numarası]';
    }

    işlevTarih(giriş) {
        dönüş girişi örneğiTarih || Object.prototype.toString.call(input) === '[nesne Tarihi]';
    }

    fonksiyon haritası(arr, fn) {
        var res = [], i;
        for (i = 0; i < dizi.uzunluk; ++i) {
            res.push(fn(dizi[i], i));
        }
        dönüş res;
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    fonksiyon genişletme(a, b) {
        için (b'de i var) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.değerOf = b.değerOf;
        }

        bir dönüş;
    }

    function createUTC (giriş, biçim, yerel ayar, katı) {
        return createLocalOrUTC(input, format, locale, solid, true).utc();
    }

    function defaultParsingFlags() {
        // Bu nesneyi derinlemesine klonlamamız gerekiyor.
        dönüş {
            boş: yanlış,
            kullanılmayanTokenlar : [],
            kullanılmayanGiriş: [],
            taşma : -2,
            charsLeftOver : 0,
            nullInput: yanlış,
            geçersizAy: boş,
            geçersizFormat: yanlış,
            userInvalidated: yanlış,
            iso: yanlış,
            ayrıştırılmışDateParts : [],
            meridiem : boş,
            rfc2822 : yanlış,
            hafta içiUyumsuzluk : yanlış
        };
    }

    getParsingFlags(m) işlevi {
        eğer (m._pf == boş) {
            m._pf = defaultParsingFlags();
        }
        dönüş m._pf;
    }

    biraz var;
    eğer (Array.prototype.some) {
        bazı = Array.prototype.bazı;
    } başka {
        bazıları = işlev (eğlence) {
            var t = Nesne(bu);
            var len = t.uzunluk >>> 0;

            for (var i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    doğru dönüş;
                }
            }

            yanlış dönüş;
        };
    }

    işlevGeçerlidir(m) {
        eğer (m._isValid == boş) {
            var işaretleri = getParsingFlags(m);
            var parsedParts = some.call(flags.parsedDateParts, function (i) {
                dönüş i != boş;
            });
            var isNowValid = !isNaN(m._d.getTime()) &&
                bayraklar.taşma < 0 &&
                !flags.boş &&
                !flags.invalidAy &&
                !flags.invalidHafta içi &&
                !flags.weekdayMismatch &&
                !flags.nullGirdi &&
                !flags.invalidFormat &&
                !flags.userGeçersiz &&
                (!flags.meridiem || (flags.meridiem && parsedParts));

            eğer (m._strict) {
                isNowValid = isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === tanımsız;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            }
            başka {
                dönüş isNowValid;
            }
        }
        dönüş m._isValid;
    }

    işlev createInvalid (işaretler) {
        var m = oluşturUTC(NaN);
        eğer (işaretler != boş) {
            genişlet(getParsingFlags(m), bayraklar);
        }
        başka {
            getParsingFlags(m).userInvalidated = true;
        }

        dönüş m;
    }

    // Özellik ekleyen eklentiler ayrıca anahtarı buraya eklemelidir (null değeri),
    // böylece kendimizi düzgün bir şekilde klonlayabiliriz.
    var momentProperties = hooks.momentProperties = [];

    function copyConfig(to, from) {
        var ben, pervane, val;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(den);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        eğer (momentProperties.length > 0) {
            for (i = 0; i < momentProperties.length; i++) {
                prop = momentProperties[i];
                val = [prop]'dan;
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        geri vermek;
    }

    var updateInProgress = yanlış;

    // Moment prototip nesnesi
    işlev Moment(yapılandırma) {
        copyConfig(bu, yapılandırma);
        this._d = yeni Tarih(config._d != null ? config._d.getTime() : NaN);
        eğer (!this.isValid()) {
            this._d = yeni Tarih(NaN);
        }
        // updateOffset'in yeni bir an oluşturması durumunda sonsuz döngüyü önleyin
        // nesneler.
        if (updateInProgress === yanlış) {
            updateInProgress = doğru;
            hooks.updateOffset(bu);
            updateInProgress = yanlış;
        }
    }

    işlev Moment (nesne) {
        dönüş nesnesi instanceof Moment || (obj != null && obj._isAMomentObject != null);
    }

    function absFloor (sayı) {
        eğer (sayı < 0) {
            // -0 -> 0
            dönüş Math.ceil(sayı) || 0;
        } başka {
            Math.floor(sayı) döndürür;
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            değer = 0;

        if (zorlanmışSayı !== 0 && isFinite(zorlanmışSayı)) {
            değer = absFloor(coercedNumber);
        }

        geri dönüş değeri;
    }

    // iki diziyi karşılaştır, farkların sayısını döndür
    function CompareArrays(dizi1, dizi2, dontConvert) {
        var len = Math.min(dizi1.uzunluk, dizi2.uzunluk),
            uzunlukDiff = Math.abs(dizi1.uzunluk - dizi2.uzunluk),
            farklar = 0,
            i;
        için (i = 0; ben < len; i++) {
            if ((dontConvert && dizi1[i] !== dizi2[i]) ||
                (!dontConvert && toInt(dizi1[i]) !== toInt(dizi2[i])))) {
                farklar++;
            }
        }
        dönüş farkları + uzunlukDiff;
    }

    fonksiyon uyar(mesaj) {
        if (hooks.suppressDeprecationWarnings === yanlış &&
                (konsol tipi !== 'tanımsız') && console.warn) {
            console.warn('Kullanımdan kaldırma uyarısı: ' + msg);
        }
    }

    işlev kullanımdan kaldırılıyor(msg, fn) {
        var firstTime = true;

        dönüş genişlet(işlev ()) {
            eğer (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, mesaj);
            }
            eğer (ilk Kez) {
                var bağımsız değişkenler = [];
                değişken argümanı;
                for (var i = 0; i < argümanlar.uzunluk; i++) {
                    argüman = '';
                    if (argümanların türü[i] === 'nesne') {
                        arg += '\n[' + i + ']';
                        for (argümanlardaki değişken anahtarı[0]) {
                            arg += tuş + ': ' + argümanlar[0][anahtar] + ', ';
                        }
                        arg = arg.slice(0, -2); // Sondaki virgül ve boşluğu kaldır
                    } başka {
                        arg = bağımsız değişkenler[i];
                    }
                    args.push(arg);
                }
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
                ilkZaman = yanlış;
            }
            fn.apply(bu, bağımsız değişkenler);
        }, fn);
    }

    var kullanımdan kaldırmalar = {};

    function deprecateSimple(isim, mesaj) {
        eğer (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(isim, mesaj);
        }
        if (!deprecations[ad]) {
            uyar(mesaj);
            itirazlar[isim] = true;
        }
    }

    hooks.suppressDeprecationWarnings = yanlış;
    hooks.deprecationHandler = boş;

    işlevFunction(giriş) {
        dönüş giriş örneğiFonksiyon || Object.prototype.toString.call(input) === '[nesne İşlevi]';
    }

    fonksiyon seti (yapılandırma) {
        var prop, i;
        için (yapılandırmada i) {
            destek = yapılandırma[i];
            if (isFunction(prop)) {
                bu[i] = destek;
            } başka {
                bu['_' + i] = destek;
            }
        }
        this._config = yapılandırma;
        // Hafif sıralı ayrıştırma, ek olarak yalnızca bir sayıyı kabul eder
        // sayı + (muhtemelen) _dayOfMonthOrdinalParse'den gelen şeyler.
        // YAPILACAKLAR: Bir sonraki büyük sürümde "ordinalParse" yedeğini kaldırın.
        this._dayOfMonthOrdinalParseLenient = yeni RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                '|' + (/\d{1,2}/).kaynak);
    }

    işlev birleştirmeYapılandırmaları(parentConfig, childConfig) {
        var res = extension({}, parentConfig), prop;
        for (childConfig'te pervane) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extension(res[prop], parentConfig[prop]);
                    genişlet(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } başka {
                    res[prop] sil;
                }
            }
        }
        for (parentConfig'te pervane) {
            if (hasOwnProp(parentConfig, prop) &&
                    !hasOwnProp(childConfig, destek) &&
                    isObject(parentConfig[prop])) {
                // özelliklerde yapılan değişikliklerin üst yapılandırmayı değiştirmediğinden emin olun
                res[prop] = genişlet({}, res[prop]);
            }
        }
        dönüş res;
    }

    işlev Yerel Ayar(yapılandırma) {
        eğer (yapılandırma != boş) {
            this.set(yapılandırma);
        }
    }

    değişken tuşları;

    eğer (Object.keys) {
        anahtarlar = Nesne.anahtarlar;
    } başka {
        tuşlar = fonksiyon (obj) {
            var i, res = [];
            için (nesnede i) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            dönüş res;
        };
    }

    var varsayılanTakvim = {
        sameDay : '[Bugün] LT',
        nextDay : '[Yarın] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Dün] LT',
        lastWeek : '[Last] dddd [at] LT',
        aynıBaşka : 'L'
    };

    işlev takvimi (anahtar, anne, şimdi) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        isFunction(çıktı) döndürür mü? output.call(anne, şimdi) : output;
    }

    var defaultLongDateFormat = {
        LTS : 's:dd:ss A',
        LT : 's:dd A',
        L : 'AA/GG/YYYY',
        LL : 'AAA G, YYYY',
        HBÖ : 'AAA G, YYYY s:dd A',
        LLLL : 'dddd, MMMM G, YYYY s:dd A'
    };

    function longDateFormat (anahtar) {
        var format = this._longDateFormat[anahtar],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            dönüş formatı;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (değer) {
            dönüş val.slice(1);
        });

        this._longDateFormat[key]'i döndür;
    }

    var defaultInvalidDate = 'Geçersiz tarih';

    işlev geçersizTarih () {
        this._invalidDate'i döndür;
    }

    var defaultOrdinal = '%d';
    var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    işlev sırası (sayı) {
        return this._ordinal.replace('%d', sayı);
    }

    var defaultRelativeTime = {
        gelecek : '%s içinde',
        geçmiş : '%s önce',
        s : 'birkaç saniye',
        ss : '%d saniye',
        m : 'bir dakika',
        mm : '%d dakika',
        h : 'bir saat',
        hh : '%d saat',
        d : 'bir gün',
        dd : '%d gün',
        M: 'bir ay',
        MM : '%d ay',
        y : 'bir yıl',
        yy : '%d yıl'
    };

    işlev göreliZaman (sayı, Sonek olmadan, dize, isFuture) {
        var çıktı = this._relativeTime[dize];
        dönüş (isFunction(output))?
            output(sayı, Soneki olmadan, dize, isFuture):
            output.replace(/%d/i, sayı);
    }

    function pastFuture (fark, çıktı) {
        var format = this._relativeTime[diff > 0 ? 'gelecek geçmiş'];
        isFunction(format) döndür? format(çıktı) : format.replace(/%s/i, output);
    }

    var takma adlar = {};

    function addUnitAlias ​​(birim, kısayol) {
        var lowerCase = unit.toLowerCase();
        takma adlar[alt Harf] = takma adlar[alt Harf + 's'] = takma adlar[kısa harf] = birim;
    }

    function normalizeUnits(units) {
        dönüş tipi birimleri === 'dize'? takma adlar[birimler] || takma adlar[units.toLowerCase()] : tanımsız;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalleştirilmişProp,
            destek;

        for (inputObject'te pervane) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        normalizedInput'u döndür;
    }

    var öncelikler = {};

    işlev addUnitPriority(birim, öncelik) {
        öncelikler[birim] = öncelik;
    }

    function getPrioritizedUnits(unitsObj) {
        var birimler = [];
        for (unitsObj'de u var) {
            birim.push({birim: u, öncelik: öncelikler[u]});
        }
        birimler.sort(işlev (a, b) {
            dönüş a.priority - b.priority;
        });
        dönüş birimleri;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(sayı),
            zerosToFill = hedefUzunluk - absNumber.uzunluk,
            işaret = sayı >= 0;
        dönüş (işaret ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill))).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D ?|dd?d?|do?|w[o|w]?|N[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)? |e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

    var formatFunctions = {};

    var formatTokenFunctions = {};

    // belirteç: 'M'
    // dolgulu: ['MM', 2]
    // sıra: 'Mo'
    // geri arama: function () { this.month() + 1 }
    function addFormatToken (belirteç, yastıklı, sıralı, geri arama) {
        var işlev = geri arama;
        if (geri arama türü === 'dize') {
            işlev = işlev () {
                bu[geri arama]();
            };
        }
        eğer (belirteç) {
            formatTokenFunctions[belirteç] = işlev;
        }
        eğer (dolgulu) {
            formatTokenFunctions[padded[0]] = işlev () {
                return zeroFill(func.apply(this, bağımsız değişkenler), dolgulu[1], dolgulu[2]);
            };
        }
        eğer (sıra) {
            formatTokenFunctions[sıra] = işlev () {
                return this.localeData().ordinal(func.apply(this, argümanlar), belirteç);
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        dönüş girişi.değiştir(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var dizi = format.match(formattingTokens), i, uzunluk;

        for (i = 0, uzunluk = dizi.uzunluk; i < uzunluk; i++) {
            if (formatTokenFunctions[dizi[i]]) {
                dizi[i] = formatTokenFunctions[dizi[i]];
            } başka {
                dizi[i] = kaldırFormattingTokens(dizi[i]);
            }
        }

        dönüş işlevi (anne) {
            var çıktı = '', i;
            for (i = 0; i < uzunluk; i++) {
                çıktı += isFunction(dizi[i])? dizi[i].call(anne, format) : dizi[i];
            }
            dönüş çıkışı;
        };
    }

    // yerel tarih nesnesini kullanarak tarihi biçimlendir
    function formatMoment(m, format) {
        eğer (!m.isValid()) {
            m.localeData().invalidDate();
        }

        format = genişletFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

        dönüş formatıFonksiyonlar[biçim](m);
    }

    function genişletFormat(biçim, yerel ayar) {
        var ben = 5;

        function replaceLongDateFormatTokens(giriş) {
            dönüş locale.longDateFormat(giriş) || giriş;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            ben -= 1;
        }

        dönüş formatı;
    }

    var eşleşme1 = /\d/; // 0 - 9
    var eşleşme2 = /\d\d/; // 00 - 99
    var eşleşme3 = /\d{3}/; // 000 - 999
    var eşleşme4 = /\d{4}/; // 0000 - 9999
    var match6 = /[+-]?\d{6}/; // -999999 - 999999
    var match1to2 = /\d\d?/; // 0 - 99
    var match3to4 = /\d\d\d\d?/; // 999 - 9999
    var match5to6 = /\d\d\d\d\d\d?/; // 99999 - 999999
    var match1to3 = /\d{1,3}/; // 0 - 999
    var match1to4 = /\d{1,4}/; // 0 - 9999
    var match1to6 = /[+-]?\d{1,6}/; // -999999 - 999999

    var matchUnsigned = /\d+/; // 0 - inf
    var matchSigned = /[+-]?\d+/; // -inf - inf

    var matchOffset = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 veya Z
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 veya Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

    // arapça iki/üç kelimelik ay dahil olmak üzere herhangi bir kelime (veya iki) karakter veya rakam.
    // İskoç Galcesi iki kelime ve tireli ayları içerir
    var matchWord = /[0-9]{0,256}['az\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\ u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

    var normal ifadeler = {};

    function addRegexToken (belirteç, normal ifade, katıRegex) {
        normal ifadeler[belirteç] = isFunction(normal ifade) ? normal ifade: işlev (isStrict, localeData) {
            dönüş (isStrict &&strictRegex) ? strictRegex : normal ifade;
        };
    }

    function getParseRegexForToken (belirteç, yapılandırma) {
        if (!hasOwnProp(normal ifadeler, simge)) {
            yeni RegExp(unescapeFormat(token)) döndür;
        }

        normal ifadeleri döndür[belirteç](config._strict, config._locale);
    }

    // http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript kodu
    unescapeFormat(lar) işlevi {
        regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\ (.)/g, işlev (eşleşen, p1, p2, p3, p4) {
            p1 dönüşü || p2 || p3 || p4;
        }));
    }

    function regexEscape(ler) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var belirteçler = {};

    function addParseToken (belirteç, geri arama) {
        var i, func = geri arama;
        if (belirteç türü === 'dize') {
            jeton = [jeton];
        }
        if (isNumber(geri arama)) {
            func = fonksiyon (giriş, dizi) {
                dizi[geri arama] = toInt(giriş);
            };
        }
        for (i = 0; i < belirteç.uzunluk; i++) {
            belirteçler[belirteç[i]] = işlev;
        }
    }

    addWeekParseToken işlevi (belirteç, geri arama) {
        addParseToken(belirteç, işlev (giriş, dizi, yapılandırma, belirteç) {
            yapılandırma._w = yapılandırma._w || {};
            geri arama(input, config._w, config, belirteç);
        });
    }

    function addTimeToArrayFromToken(belirteç, giriş, yapılandırma) {
        if (input != null && hasOwnProp(belirteçler, belirteç)) {
            belirteçler[belirteç](giriş, yapılandırma._a, yapılandırma, belirteç);
        }
    }

    var YIL = 0;
    var AY = 1;
    var TARİH = 2;
    var SAAT = 3;
    var DAKİKA = 4;
    var İKİNCİ = 5;
    var MİLİSANİYE = 6;
    var HAFTA = 7;
    var HAFTA GÜNÜ = 8;

    // BİÇİMLENDİRME

    addFormatToken('Y', 0, 0, işlev () {
        var y = this.year();
        dönüş y <= 9999 ? '' + y : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, işlev () {
        bu.yılı() döndür % 100;
    });

    addFormatToken(0, ['YYYY', 4], 0, 'yıl');
    addFormatToken(0, ['YYYYY', 5], 0, 'yıl');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASLAR

    addUnitAlias('yıl', 'y');

    // ÖNCELİKLER

    addUnitPriority('yıl', 1);

    // AYRIŞTIRMA

    addRegexToken('Y', MatchSigned);
    addRegexToken('YY', eşleşme1to2, eşleşme2);
    addRegexToken('YYYY', 1'e 4'ü eşleştir, 4'ü eşleştir);
    addRegexToken('YYYYY', 1'den 6'ya eşleştir, 6'yı eşleştir);
    addRegexToken('YYYYYY', 1'den 6'ya eşleştir, 6'yı eşleştir);

    addParseToken(['YYYYY', 'YYYYYY'], YIL);
    addParseToken('YYYY', işlev (giriş, dizi) {
        dizi[YIL] = girdi.uzunluk === 2 ? hooks.parseTwoDigitYear(giriş) : toInt(giriş);
    });
    addParseToken('YY', işlev (giriş, dizi) {
        dizi[YIL] = hooks.parseTwoDigitYear(giriş);
    });
    addParseToken('Y', işlev (giriş, dizi) {
        dizi[YIL] = ayrıştırma(giriş, 10);
    });

    // YARDIMCILAR

    fonksiyon günYılda(yıl) {
        dönüş artıkYıl(yıl) ? 366 : 365;
    }

    işlev ArtıkYıl(yıl) {
        dönüş (yıl % 4 === 0 && yıl % 100 !== 0) || yıl % 400 === 0;
    }

    // KANCALAR

    hooks.parseTwoDigitYear = işlev (giriş) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // ANLAR

    var getSetYear = makeGetSet('FullYear', true);

    getIsLeapYear () işlevi {
        dönüş isLeapYear(this.year());
    }

    function makeGetSet (birim, keepTime) {
        dönüş işlevi (değer) {
            eğer (değer != boş) {
                set$1(bu, birim, değer);
                hooks.updateOffset(bu, zamanı koru);
                bunu iade et;
            } başka {
                get(bu, birim);
            }
        };
    }

    get işlevi (anne, birim) {
        mom.isValid()'i döndür?
            mom._d['get' + (mom._isUTC ? 'UTC' : '') + birim]() : NaN;
    }

    function set$1 (anne, birim, değer) {
        if (mom.isValid() && !isNaN(değer)) {
            if (unit === 'FullYear' && isLeapYear(anne.yıl()) && anne.ay() === 1 && anne.tarih() === 29) {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + birim](değer, anne.ay(), günAy(değer, anne.ay()));
            }
            başka {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + birim](değer);
            }
        }
    }

    // ANLAR

    stringGet işlevi (birimler) {
        birimler = normalizeUnits(units);
        if (isFunction(bu[birimler])) {
            bu[birimleri]();
        }
        bunu iade et;
    }


    function stringSet (birimler, değer) {
        if (birimlerin türü === 'nesne') {
            birimler = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units);
            for (var i = 0; i < öncelikli.uzunluk; i++) {
                bu[öncelikli[i].birim](birimler[öncelikli[i].birim]);
            }
        } başka {
            birimler = normalizeUnits(units);
            if (isFunction(bu[birimler])) {
                bu[birimleri](değeri) döndür;
            }
        }
        bunu iade et;
    }

    fonksiyon mod(n, x) {
        dönüş ((n % x) + x) % x;
    }

    var indexOf;

    eğer (Dizi.prototip.indexOf) {
        indexOf = Dizi.prototip.indexOf;
    } başka {
        indexOf = işlev (o) {
            // Biliyorum
            var ben;
            için (i = 0; i < bu.uzunluk; ++i) {
                eğer (bu[i] === o) {
                    dönüş ben;
                }
            }
            -1 döndürür;
        };
    }

    fonksiyon günAyda(yıl, ay) {
        if (isNaN(yıl) || isNaN(ay)) {
            NaN'yi döndürür;
        }
        var modMonth = mod(ay, 12);
        yıl += (ay - modAy) / 12;
        dönüş modMonth === 1 ? (artıkYıl(yıl) ? 29 : 28) : (31 - modAy % 7 % 2);
    }

    // BİÇİMLENDİRME

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        bu.ayı döndür() + 1;
    });

    addFormatToken('MMM', 0, 0, işlev (biçim) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, işlev (biçim) {
        this.localeData().months(bu, format);
    });

    // ALIASLAR

    addUnitAlias('ay', 'A');

    // ÖNCELİK

    addUnitPriority('ay', 8);

    // AYRIŞTIRMA

    addRegexToken('M', maç1to2);
    addRegexToken('MM', eşleşme1to2, eşleşme2);
    addRegexToken('MMM', işlev (isStrict, yerel ayar) {
        dönüş locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', işlev (isStrict, yerel ayar) {
        locale.monthsRegex(isStrict) döndürür;
    });

    addParseToken(['M', 'MM'], işlev (giriş, dizi) {
        dizi[AY] = toInt(giriş) - 1;
    });

    addParseToken(['MMM', 'MMMM'], işlev (giriş, dizi, yapılandırma, belirteç) {
        var ay = config._locale.monthsParse(input, token, config._strict);
        // bir ay adı bulamadıysak, tarihi geçersiz olarak işaretle.
        eğer (ay != boş) {
            dizi[AY] = ay;
        } başka {
            getParsingFlags(config).invalidMonth = girdi;
        }
    });

    // YERELLER

    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths (m, biçim) {
        eğer (!m) {
            isArray(this._months) döndürülsün mü? bu._ay :
                this._months['bağımsız'];
        }
        isArray(this._months) döndürülsün mü? this._months[m.month()] :
            this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'biçim' : 'bağımsız'][m.ay()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function localeMonthsShort (m, biçim) {
        eğer (!m) {
            dönüş isArray(this._monthsShort)? this._monthsKısa :
                this._monthsShort['bağımsız'];
        }
        dönüş isArray(this._monthsShort)? this._monthsShort[m.month()] :
            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'biçim' : 'bağımsız'][m.ay()];
    }

    function handleStrictParse(ayAdı, format, katı) {
        var i, ii, anne, llc = ayAdı.toLocaleLowerCase();
        if (!this._monthsParse) {
            // bu kullanılmaz
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            için (i = 0; ben < 12; ++i) {
                anne = oluşturUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(anne, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(anne, '').toLocaleLowerCase();
            }
        }

        eğer (katı) {
            eğer (biçim === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                dönüş ii !== -1 ? ii : boş;
            } başka {
                ii = indexOf.call(this._longMonthsParse, llc);
                dönüş ii !== -1 ? ii : boş;
            }
        } başka {
            eğer (biçim === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                eğer (ii !== -1) {
                    dönüş ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                dönüş ii !== -1 ? ii : boş;
            } başka {
                ii = indexOf.call(this._longMonthsParse, llc);
                eğer (ii !== -1) {
                    dönüş ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                dönüş ii !== -1 ? ii : boş;
            }
        }
    }

    function localeMonthsParse (ayAdı, biçim, katı) {
        var i, anne, normal ifade;

        eğer (this._monthsParseExact) {
            return handleStrictParse.call(bu, ayAdı, biçim, katı);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // YAPILACAKLAR: sıralama ekle
        // Sıralama, bir ayın (veya kısaltmanın) başka bir ayın öneki olup olmadığından emin olur
        // computeMonthsParse içindeki sıralamaya bakın
        için (i = 0; ben < 12; i++) {
            // zaten sahip değilsek normal ifadeyi yaparız
            anne = oluşturUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(anne, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                normal ifade = '^' + this.months(anne, '') + '|^' + this.monthsShort(anne, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // normal ifadeyi test et
            if (katı && format === 'MMMM' && this._longMonthsParse[i].test(ayAdı)) {
                dönüş ben;
            } else if (katı && format === 'MMM' && this._shortMonthsParse[i].test(ayAdı)) {
                dönüş ben;
            } else if (!strict && this._monthsParse[i].test(ayAdı)) {
                dönüş ben;
            }
        }
    }

    // ANLAR

    function setMonth (anne, değer) {
        var dayOfMonth;

        eğer (!mom.isValid()) {
            // işlem yok
            anneye dön;
        }

        if (değer türü === 'dize') {
            if (/^\d+$/.test(değer)) {
                değer = toInt(değer);
            } başka {
                değer = mom.localeData().monthsParse(değer);
                // YAPILACAKLAR: Başka bir sessiz başarısızlık mı?
                if (!isNumber(değer)) {
                    anneye dön;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), değer));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Ay'](değer, dayOfMonth);
        anneye dön;
    }

    getSetMonth işlevi (değer) {
        eğer (değer != boş) {
            setMonth(bu, değer);
            hooks.updateOffset(bu, doğru);
            bunu iade et;
        } başka {
            return get(bu, 'Ay');
        }
    }

    getDaysInMonth işlevi () {
        dönüş günleriAyda(bu.yıl(), bu.ay());
    }

    var defaultMonthsShortRegex = matchWord;
    ay işlevi ShortRegex (isStrict) {
        eğer (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(bu);
            }
            eğer (Katı ise) {
                this._monthsShortStrictRegex'i döndür;
            } başka {
                this._monthsShortRegex'i döndür;
            }
        } başka {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            bunu döndür._aylarShortStrictRegex && isStrict ?
                this._monthsShortStrictRegex : this._monthsShortRegex;
        }
    }

    var defaultMonthsRegex = MatchWord;
    ay işleviRegex (isStrict) {
        eğer (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(bu);
            }
            eğer (Katı ise) {
                this._monthsStrictRegex'i döndür;
            } başka {
                this._monthsRegex'i döndür;
            }
        } başka {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            this._monthsStrictRegex'i döndür && isStrict ?
                this._monthsStrictRegex : this._monthsRegex;
        }
    }

    işlev hesaplaAylarParse () {
        işlev cmpLenRev(a, b) {
            dönüş b.uzunluk - a.uzunluk;
        }

        var kısa Parçalar = [], uzun Parçalar = [], karışık Parçalar = [],
            ben anne;
        için (i = 0; ben < 12; i++) {
            // zaten sahip değilsek normal ifadeyi yaparız
            anne = oluşturUTC([2000, i]);
            shortPieces.push(this.monthsShort(anne, ''));
            longPieces.push(bu.aylar(anne, ''));
            mixPieces.push(bu.aylar(anne, ''));
            mixPieces.push(this.monthsShort(anne, ''));
        }
        // Sıralama, bir ayın (veya kısaltmanın) başka bir ayın öneki olup olmadığından emin olur.
        // uzun parçayla eşleşecek.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixPieces.sort(cmpLenRev);
        için (i = 0; ben < 12; i++) {
            kısaParçalar[i] = normal ifadeEscape(kısaParçalar[i]);
            uzunParçalar[i] = normal ifadeEscape(uzunParçalar[i]);
        }
        için (i = 0; ben < 24; i++) {
            karışıkParçalar[i] = normal ifadeEscape(karışıkParçalar[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    }

    işlev oluşturmaTarihi (y, m, d, h, M, s, ms) {
        // sadece bir tarih oluşturmak için() uygulanamaz:
        // https://stackoverflow.com/q/181348
        var tarih = yeni Tarih(y, m, d, h, M, s, ms);

        // tarih yapıcısı 0-99 yıllarını 1900-1999 olarak yeniden eşler
        if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
            tarih.setTamYıl(y);
        }
        dönüş tarihi;
    }

    işlev oluşturUTCDate (y) {
        var tarih = yeni Tarih(Date.UTC.apply(null, bağımsız değişkenler));

        // Date.UTC işlevi, 0-99 yıllarını 1900-1999 yılları arasında yeniden eşler
        if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
            tarih.setUTCFullYear(y);
        }
        dönüş tarihi;
    }

    // ilk haftanın başı - yılın başı
    function firstWeekOffset(yıl, dow, doy) {
        var // birinci hafta günü -- hangi ocak her zaman ilk haftadadır (iso için 4, diğerleri için 1)
            fwd = 7 + dow - doy,
            // ilk hafta günü yerel hafta içi gün -- hangi yerel hafta içi gün ileri
            fwdlw = (7 + createUTCDate(yıl, 0, ileri).getUTCDay() - dow) % 7;

        dönüş -fwdlw + ileri - 1;
    }

    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    işlevi dayOfYearFromWeeks(yıl, hafta, haftanın günü, dow, doy) {
        var localWeekday = (7 + hafta içi - dow) % 7,
            haftaOffset = firstWeekOffset(yıl, dow, doy),
            dayOfYear = 1 + 7 * (hafta - 1) + yerelHafta içi + haftaOffset,
            resYear, resDayOfYear;

        eğer (yılıngünü <= 0) {
            resYear = yıl - 1;
            resDayOfYear = günlerInYear(resYear) + dayOfYear;
        } else if (YılınYılın Günü > GünlerinYılda(yıl)) {
            resYear = yıl + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } başka {
            resYear = yıl;
            resDayOfYear = dayOfYear;
        }

        dönüş {
            yıl: resYıl,
            yılıngünü: resYılınGünü
        };
    }

    function haftaOfYear(anne, dow, doy) {
        var haftaOffset = firstWeekOffset(mom.year(), dow, doy),
            hafta = Math.floor((mom.dayOfYear() - haftaOffset - 1) / 7) + 1,
            resWeek, resYear;

        eğer (hafta < 1) {
            resYear = anne.yıl() - 1;
            resWeek = hafta + haftalarInYear(resYear, dow, doy);
        } else if (hafta > hafta içindeYıl(anne.yıl(), dow, doy)) {
            resWeek = hafta - haftalarYılda(anne.yıl(), dow, doy);
            resYear = anne.yıl() + 1;
        } başka {
            resYear = anne.yıl();
            resWeek = hafta;
        }

        dönüş {
            hafta: resWeek,
            yıl: resYıl
        };
    }

    işlev haftalarYılda(yıl, dow, doy) {
        var haftaOffset = firstWeekOffset(yıl, dow, doy),
            haftaOffsetNext = firstWeekOffset(yıl + 1, dow, doy);
        dönüş (daysInYear(year) - haftaOffset + haftaOffsetSonraki) / 7;
    }

    // BİÇİMLENDİRME

    addFormatToken('w', ['ww', 2], 'wo', 'hafta');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASLAR

    addUnitAlias('hafta', 'w');
    addUnitAlias('isoWeek', 'W');

    // ÖNCELİKLER

    addUnitPriority('hafta', 5);
    addUnitPriority('isoWeek', 5);

    // AYRIŞTIRMA

    addRegexToken('w', match1to2);
    addRegexToken('ww', eşleşme1to2, eşleşme2);
    addRegexToken('W', maç1to2);
    addRegexToken('WW', maç1to2, maç2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (giriş, hafta, yapılandırma, belirteç) {
        hafta[token.substr(0, 1)] = toInt(input);
    });

    // YARDIMCILAR

    // YERELLER

    function localeWeek (anne) {
        return haftaOfYear(anne, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow : 0, // Pazar, haftanın ilk günüdür.
        doy : 6 // 1 Ocak'ı içeren hafta yılın ilk haftasıdır.
    };

    function yerelHaftanınİlkGünü () {
        this._week.dow'u döndür;
    }

    function localeFirstDayOfYear () {
        this._week.doy'u iade et;
    }

    // ANLAR

    function getSetWeek (giriş) {
        var hafta = this.localeData().week(this);
        dönüş girişi == boş? hafta : this.add((giriş - hafta) * 7, 'd');
    }

    getSetISOWeek işlevi (giriş) {
        var hafta = haftaOfYear(bu, 1, 4).hafta;
        dönüş girişi == boş? hafta : this.add((giriş - hafta) * 7, 'd');
    }

    // BİÇİMLENDİRME

    addFormatToken('d', 0, 'yap', 'gün');

    addFormatToken('dd', 0, 0, işlev (biçim) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, işlev (biçim) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, işlev (biçim) {
        this.localeData().weekdays(bu, format);
    });

    addFormatToken('e', 0, 0, 'hafta içi');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASLAR

    addUnitAlias('gün', 'd');
    addUnitAlias('hafta içi', 'e');
    addUnitAlias('isoWeekday', 'E');

    // ÖNCELİK
    addUnitPriority('gün', 11);
    addUnitPriority('hafta içi', 11);
    addUnitPriority('isoWeekday', 11);

    // AYRIŞTIRMA

    addRegexToken('d', match1to2);
    addRegexToken('e', maç1to2);
    addRegexToken('E', maç1to2);
    addRegexToken('dd', işlev (isStrict, yerel ayar) {
        dönüş locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd', işlev (isStrict, yerel ayar) {
        dönüş locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd', işlev (isStrict, yerel ayar) {
        dönüş locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], işlev (giriş, hafta, yapılandırma, belirteç) {
        var hafta içi = config._locale.weekdaysParse(input, token, config._strict);
        // hafta içi bir gün adı alamamışsak, tarihi geçersiz olarak işaretle
        if (hafta içi != boş) {
            hafta.d = hafta içi;
        } başka {
            getParsingFlags(config).invalidWeekday = girdi;
        }
    });

    addWeekParseToken(['d', 'e', ​​'E'], işlev (giriş, hafta, yapılandırma, belirteç) {
        hafta[belirteç] = toInt(giriş);
    });

    // YARDIMCILAR

    function parseWeekday(input, locale) {
        if (giriş türü !== 'dize') {
            dönüş girişi;
        }

        if (!isNaN(giriş)) {
            dönüş ayrıştırma(giriş, 10);
        }

        girdi = locale.weekdaysParse(giriş);
        if (giriş türü === 'sayı') {
            dönüş girişi;
        }

        boş dönüş;
    }

    function parseIsoWeekday(input, locale) {
        if (giriş türü === 'dize') {
            dönüş locale.weekdaysParse(input) % 7 || 7;
        }
        isNaN(giriş) döndürür mü? boş: giriş;
    }

    // YERELLER

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays (m, format) {
        eğer (!m) {
            isArray(this._weekdays) döndürülsün mü? this._weekdays :
                this._weekdays['bağımsız'];
        }
        isArray(this._weekdays) döndürülsün mü? this._weekdays[m.day()] :
            this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'bağımsız'][m.day()];
    }

    var defaultLocaleWeekdaysShort = 'Paz_Mon_Salı_Çar_Perşembe_Fri_Cumartesi'.split('_');
    function localeWeekdaysShort (m) {
        dönüş (m) ? this._weekdaysShort[m.days()] : this._weekdaysShort;
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin (dk) {
        dönüş (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }

    function handleStrictParse$1(hafta içiAdı, biçim, katı) {
        var i, ii, mom, llc = haftagünüAdı.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            için (i = 0; ben < 7; ++i) {
                anne = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(anne, '').toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(anne, '').toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(anne, '').toLocaleLowerCase();
            }
        }

        eğer (katı) {
            eğer (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                dönüş ii !== -1 ? ii : boş;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                dönüş ii !== -1 ? ii : boş;
            } başka {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                dönüş ii !== -1 ? ii : boş;
            }
        } başka {
            eğer (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                eğer (ii !== -1) {
                    dönüş ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                eğer (ii !== -1) {
                    dönüş ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                dönüş ii !== -1 ? ii : boş;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                eğer (ii !== -1) {
                    dönüş ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                eğer (ii !== -1) {
                    dönüş ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                dönüş ii !== -1 ? ii : boş;
            } başka {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                eğer (ii !== -1) {
                    dönüş ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                eğer (ii !== -1) {
                    dönüş ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                dönüş ii !== -1 ? ii : boş;
            }
        }
    }

    function localeWeekdaysParse (weekdayName, biçim, katı) {
        var i, anne, normal ifade;

        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(bu, haftaiçiAdı, biçim, katı);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        için (i = 0; ben < 7; i++) {
            // zaten sahip değilsek normal ifadeyi yaparız

            anne = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(anne, '').replace('.', '\\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(anne, '').replace('.', '\\.?') + '$', 'i');
            }
            if (!this._weekdaysParse[i]) {
                normal ifade = '^' + this.weekdays(anne, '') + '|^' + this.weekdaysShort(anne, '') + '|^' + this.weekdaysMin(anne, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // normal ifadeyi test et
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(haftagünüAdı)) {
                dönüş ben;
            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                dönüş ben;
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                dönüş ben;
            } else if (!strict && this._weekdaysParse[i].test(weekdaysName)) {
                dönüş ben;
            }
        }
    }

    // ANLAR

    function getSetDayOfWeek (giriş) {
        eğer (!this.isValid()) {
            dönüş girişi != boş ? bu : NaN;
        }
        var gün = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        eğer (giriş != boş) {
            girdi = parseWeekday(giriş, this.localeData());
            return this.add(giriş - gün, 'd');
        } başka {
            dönüş günü;
        }
    }

    function getSetLocaleDayOfWeek (giriş) {
        eğer (!this.isValid()) {
            dönüş girişi != boş ? bu : NaN;
        }
        var hafta içi = (bu.gün() + 7 - this.localeData()._week.dow) % 7;
        dönüş girişi == boş? hafta içi : this.add(input - hafta içi, 'd');
    }

    getSetISODayOfWeek işlevi (giriş) {
        eğer (!this.isValid()) {
            dönüş girişi != boş ? bu : NaN;
        }

        // moment#day ile aynı şekilde davranır, ancak
        // alıcı olarak 0 yerine 7 döndürür (0-6 yerine 1-7 aralığı)
        // pasör olarak pazar bir önceki haftaya ait olmalıdır.

        eğer (giriş != boş) {
            var hafta içi = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? hafta içi : hafta içi - 7);
        } başka {
            this.day() || 7;
        }
    }

    var defaultWeekdaysRegex = matchWord;
    işlev hafta içiRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            eğer (Katı ise) {
                this._weekdaysStrictRegex'i döndür;
            } başka {
                this._weekdaysRegex'i döndür;
            }
        } başka {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            this._weekdaysStrictRegex'i döndür && isStrict ?
                this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    }

    var defaultWeekdaysShortRegex = matchWord;
    işlev hafta içiShortRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            eğer (Katı ise) {
                this._weekdaysShortStrictRegex'i döndür;
            } başka {
                this._weekdaysShortRegex'i döndür;
            }
        } başka {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            this._weekdaysShortStrictRegex && isStrict?
                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    }

    var defaultWeekdaysMinRegex = matchWord;
    işlev hafta içiMinRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            eğer (Katı ise) {
                this._weekdaysMinStrictRegex'i döndür;
            } başka {
                this._weekdaysMinRegex'i döndür;
            }
        } başka {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            this._weekdaysMinStrictRegex && isStrict'i döndür?
                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    }


    function computeWeekdaysParse () {
        işlev cmpLenRev(a, b) {
            dönüş b.uzunluk - a.uzunluk;
        }

        var minParçalar = [], kısaParçalar = [], uzunParçalar = [], karmaParçalar = [],
            ben, anne, minp, kısap, uzunp;
        için (i = 0; ben < 7; i++) {
            // zaten sahip değilsek normal ifadeyi yaparız
            anne = createUTC([2000, 1]).day(i);
            minp = this.weekdaysMin(anne, '');
            kısap = this.weekdaysShort(anne, '');
            longp = this.weekdays(anne, '');
            minPieces.push(minp);
            kısaParçalar.push(kısa);
            uzunParçalar.push(uzunp);
            mixPieces.push(minp);
            mixPieces.push(kısa);
            karışıkParçalar.push(uzunp);
        }
        // Sıralama, haftanın bir gününün (veya kısaltmasının) başka bir günün öneki olup olmadığından emin olur.
        // uzun parçayla eşleşecek.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixPieces.sort(cmpLenRev);
        için (i = 0; ben < 7; i++) {
            kısaParçalar[i] = normal ifadeEscape(kısaParçalar[i]);
            uzunParçalar[i] = normal ifadeEscape(uzunParçalar[i]);
            karışıkParçalar[i] = normal ifadeEscape(karışıkParçalar[i]);
        }

        this._weekdaysRegex = new RegExp('^(' + mixPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
    }

    // BİÇİMLENDİRME

    işlev hFormat() {
        this.hours()'u döndür % 12 || 12;
    }

    işlev kFormat() {
        this.hours()'u döndür || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'saat');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, işlev () {
        dönüş '' + hFormat.apply(bu) + sıfırDoldur(bu.dakika(), 2);
    });

    addFormatToken('hmmss', 0, 0, işlev () {
        dönüş '' + hFormat.apply(bu) + sıfırDoldur(bu.dakika(), 2) +
            zeroFill(this.seconds(), 2);
    });

    addFormatToken('Hmm', 0, 0, işlev () {
        dönüş '' + this.hours() + zeroFill(this.dakika(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        dönüş '' + this.hours() + zeroFill(this. minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    function meridiem (belirteç, küçük harf) {
        addFormatToken(belirteç, 0, 0, işlev () {
            return this.localeData().meridiem(this.hours(), this. minutes(), küçük harf);
        });
    }

    meridiem('a', doğru);
    meridiem('A', yanlış);

    // ALIASLAR

    addUnitAlias('saat', 'h');

    // ÖNCELİK
    addUnitPriority('saat', 13);

    // AYRIŞTIRMA

    function matchMeridiem (isStrict, yerel ayar) {
        dönüş yerel ayarı._meridiemParse;
    }

    addRegexToken('a', matchMeridiem);
    addRegexToken('A', matchMeridiem);
    addRegexToken('H', eşleşme1to2);
    addRegexToken('h', maç1to2);
    addRegexToken('k', match1to2);
    addRegexToken('HH', eşleşme1to2, eşleşme2);
    addRegexToken('hh', eşleşme1to2, eşleşme2);
    addRegexToken('kk', eşleşme1to2, eşleşme2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], işlev (giriş, dizi, yapılandırma) {
        var kInput = toInt(giriş);
        dizi[SAAT] = kGiriş === 24 ? 0 : kGirdi;
    });
    addParseToken(['a', 'A'], işlev (giriş, dizi, yapılandırma) {
        config._isPm = config._locale.isPM(giriş);
        yapılandırma._meridiem = giriş;
    });
    addParseToken(['h', 'hh'], işlev (giriş, dizi, yapılandırma) {
        dizi[SAAT] = toInt(giriş);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', işlev (giriş, dizi, yapılandırma) {
        var konum = girdi.uzunluk - 2;
        dizi[SAAT] = toInt(input.substr(0, konum));
        dizi[DAKİKA] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', işlev (giriş, dizi, yapılandırma) {
        var konum1 = girdi.uzunluk - 4;
        var konum2 = giriş.uzunluk - 2;
        dizi[SAAT] = toInt(input.substr(0, konum1));
        dizi[DAKİKA] = toInt(input.substr(konum1, 2));
        dizi[İKİNCİ] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', işlev (giriş, dizi, yapılandırma) {
        var konum = girdi.uzunluk - 2;
        dizi[SAAT] = toInt(input.substr(0, konum));
        dizi[DAKİKA] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (giriş, dizi, yapılandırma) {
        var konum1 = girdi.uzunluk - 4;
        var konum2 = giriş.uzunluk - 2;
        dizi[SAAT] = toInt(input.substr(0, konum1));
        dizi[DAKİKA] = toInt(input.substr(konum1, 2));
        dizi[İKİNCİ] = toInt(input.substr(pos2));
    });

    // YERELLER

    function localeIsPM (giriş) {
        // IE8 Quirks Modu ve IE7 Standartları Modu, diziler gibi dizilere erişime izin vermez
        // charAt kullanmak daha uyumlu olmalıdır.
        dönüş ((input + '').toLowerCase().charAt(0) === 'p');
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem (saat, dakika, isLower) {
        eğer (saat > 11) {
            dönüş daha düşük mü? 'pm' : 'PM';
        } başka {
            dönüş daha düşük mü? 'am' : 'AM';
        }
    }


    // ANLAR

    // Saatin ayarlanması zamanı tutmalıdır, çünkü kullanıcı açıkça
    // hangi saati istediklerini belirttiler. Yani aynı saati korumaya çalışmak (içinde
    // yeni bir saat dilimi) anlamlıdır. Saat ekleme/çıkarma takip etmez
    // bu kural.
    var getSetHour = makeGetSet('Saat', doğru);

    var baseConfig = {
        takvim: varsayılanTakvim,
        uzunDateFormat: varsayılanLongDateFormat,
        geçersizTarih: varsayılanGeçersizTarih,
        sıralı: varsayılanSıralı,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,

        aylar: defaultLocaleMonths,
        ayKısa: defaultLocaleMonthsShort,

        hafta: defaultLocaleWeek,

        hafta içi: defaultLocaleWeekdays,
        hafta içiMin: defaultLocaleWeekdaysMin,
        hafta içi Kısa: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse
    };

    // yerel yapılandırma dosyaları için dahili depolama
    var yerel ayarlar = {};
    var localeFamilies = {};
    var globalLocale;

    function normalizeLocale(key) {
        Geri dönüş tuşu ? key.toLowerCase().replace('_', '-') : anahtar;
    }

    // diziden yerel ayarı seç
    // ['en-au', 'en-gb']'yi 'en-au', 'en-gb', 'en' olarak deneyin, her birini deneyerek listede gezinirken olduğu gibi
    // alt dize en belirginden en aza doğru, ancak mevcut kökten daha spesifik bir varyantsa sonraki dizi öğesine geç
    işlev seçLocale(isimler) {
        var i = 0, j, sonraki, yerel, bölünmüş;

        while (i < adlar.uzunluk) {
            split = normalizeLocale(isimler[i]).split('-');
            j = bölünmüş uzunluk;
            next = normalizeLocale(isimler[i + 1]);
            sonraki = sonraki? next.split('-') : boş;
            iken (j > 0) {
                yerel = loadLocale(split.slice(0, j).join('-'));
                eğer (yerel ayar) {
                    yerel ayara dönüş;
                }
                if (sonraki && sonraki.uzunluk >= j && CompareArrays(bölünmüş, sonraki, doğru) >= j - 1) {
                    //bir sonraki dizi öğesi, bunun daha sığ bir alt dizisinden daha iyidir
                    kırmak;
                }
                j--;
            }
            ben++;
        }
        globalLocale'i döndür;
    }

    işlev loadLocale(isim) {
        var eskiLocale = boş;
        // YAPILACAKLAR: Düğümdeki tüm yerel ayarları kaydetmenin ve yüklemenin daha iyi bir yolunu bulun
        if (!locales[ad] && (modül tipi !== 'tanımsız') &&
                modül && modül. ihracat) {
            denemek {
                eskiLocale = globalLocale._abbr;
                var aliasedRequire = gerektir;
                aliasedRequire('./locale/' + isim);
                getSetGlobalLocale(eskiLocale);
            } yakalamak (e) {}
        }
        yerel ayarları döndür[isim];
    }

    // Bu işlev yerel ayarı yükleyecek ve ardından genel yerel ayarı ayarlayacaktır. Eğer
    // hiçbir bağımsız değişken iletilmez, yalnızca geçerli global değeri döndürür
    // yerel ayar anahtarı.
    function getSetGlobalLocale (anahtar, değerler) {
        veri var;
        eğer (anahtar) {
            if (tanımsız(değerler)) {
                veri = getLocale(anahtar);
            }
            başka {
                veri = defineLocale(anahtar, değerler);
            }

            eğer (veri) {
                // moment.duration._locale = moment._locale = veri;
                globalLocale = veri;
            }
            başka {
                if ((konsol tipi !== 'tanımsız') && console.warn) {
                    //argümanlar iletilirse ancak yerel ayarlanamadıysa kullanıcıyı uyar
                    console.warn('Yerel ' + tuş + ' bulunamadı. Yüklemeyi mi unuttunuz?');
                }
            }
        }

        globalLocale._abbr'ı döndür;
    }

    function defineLocale (isim, yapılandırma) {
        eğer (yapılandırma !== boş) {
            var yerel ayar, parentConfig = baseConfig;
            yapılandırma.abbr = ad;
            if (yerel ayarlar[isim] != null) {
                deprecateSimple('defineLocaleOverride',
                        'değiştirmek için moment.updateLocale(localeName, config) kullanın' +
                        'mevcut bir yerel ayar. moment.defineLocale(yerelAdı, ' +
                        'config) yalnızca yeni bir yerel ayar oluşturmak için kullanılmalıdır' +
                        'Daha fazla bilgi için http://momentjs.com/guides/#/warnings/define-locale/ adresine bakın.');
                parentConfig = yerel ayarlar[ad]._config;
            } else if (config.parentLocale != null) {
                if (yerel ayarlar[config.parentLocale] != null) {
                    parentConfig = yerel ayarlar[config.parentLocale]._config;
                } başka {
                    yerel = loadLocale(config.parentLocale);
                    eğer (yerel ayar != boş) {
                        parentConfig = yerel ayar._config;
                    } başka {
                        if (!localeFamilies[config.parentLocale]) {
                            localeFamilies[config.parentLocale] = [];
                        }
                        localeFamilies[config.parentLocale].push({
                            isim: isim,
                            yapılandırma: yapılandırma
                        });
                        boş dönüş;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (yerelAileler[ad]) {
                localeFamilies[ad].forEach(işlev (x) {
                    defineLocale(x.name, x.config);
                });
            }

            // şimdilik geriye dönük uyumluluk: yerel ayarı da ayarla
            // yerel ayarı tüm alt yerel ayarlar yapıldıktan SONRA ayarladığımızdan emin olun
            // oluşturuldu, böylece alt yerel ayar setiyle bitmeyecek.
            getSetGlobalLocale(isim);


            yerel ayarları döndür[isim];
        } başka {
            // test için faydalı
            yerel ayarları sil[ad];
            boş dönüş;
        }
    }

    function updateLocale(isim, yapılandırma) {
        eğer (yapılandırma != boş) {
            var yerel ayar, tmpLocale, parentConfig = baseConfig;
            // BİRLEŞTİRMEK
            tmpLocale = loadLocale(isim);
            eğer (tmpLocale != boş) {
                parentConfig = tmpLocale._config;
            }
            yapılandırma = birleştirme Yapılandırmaları (parentConfig, yapılandırma);
            yerel ayar = yeni Yerel Ayar(yapılandırma);
            locale.parentLocale = yerel ayarlar[isim];
            yerel ayarlar[isim] = yerel ayar;

            // şimdilik geriye dönük uyumluluk: yerel ayarı da ayarla
            getSetGlobalLocale(isim);
        } başka {
            // config güncellemesini iptal etmek için null geçirin, testler için kullanışlıdır
            if (yerel ayarlar[isim] != null) {
                if (yerel ayarlar[ad].parentLocale != null) {
                    yerel ayarlar[isim] = yerel ayarlar[ad].parentLocale;
                } else if (yerel ayarlar[isim] != null) {
                    yerel ayarları sil[ad];
                }
            }
        }
        yerel ayarları döndür[isim];
    }

    // yerel verileri döndürür
    getLocale işlevi (anahtar) {
        var yerel ayar;

        if (key && key._locale && key._locale._abbr) {
            anahtar = key._locale._abbr;
        }

        eğer (!tuşu) {
            globalLocale'i döndür;
        }

        if (!isArray(anahtar)) {
            // diğer her şeyi kısa devre yap
            yerel ayar = loadLocale(anahtar);
            eğer (yerel ayar) {
                yerel ayara dönüş;
            }
            tuş = [tuş];
        }

        selectLocale(anahtar) döndürür;
    }

    işlev listesiLocales() {
        dönüş anahtarları (yerel ayarlar);
    }

    işlev kontrolüTaşma (m) {
        değişken taşması;
        var bir = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            taşma =
                a[AY] < 0 || a[AY] > 11 ? AY :
                a[TARİH] < 1 || a[TARİH] > günAy(a[YIL], a[AY]) ? TARİH :
                a[SAAT] < 0 || a[SAAT] > 24 || (a[SAAT] === 24 && (a[DAKİKA] !== 0 || a[SANİYE] !== 0 || a[MİLİSANİYE] !== 0)) ? SAAT :
                a[DAKİKA] < 0 || a[DAKİKA] > 59 ? DAKİKA :
                a[SANİYE] < 0 || a[SANİYE] > 59 ? İKİNCİ :
                a[MİLİSANİYE] < 0 || a[MİLİSANİYE] > 999 ? MİLİSANİYE :
                -1;

            if (getParsingFlags(m)._overflowDayOfYear && (taşma < YIL || taşma > TARİH)) {
                taşma = TARİH;
            }
            if (getParsingFlags(m)._overflowWeeks && taşma === -1) {
                taşma = HAFTA;
            }
            if (getParsingFlags(m)._overflowWeekday && taşma === -1) {
                taşma = HAFTA İÇİ;
            }

            getParsingFlags(m).overflow = taşma;
        }

        dönüş m;
    }

    // İki veya üç bağımsız değişkenden ilk tanımlananı seçin.
    işlev varsayılanları(a, b, c) {
        eğer (a != boş) {
            bir dönüş;
        }
        eğer (b != boş) {
            dönüş b;
        }
        dönüş c;
    }

    function currentDateArray(config) {
        // kancalar aslında dışa aktarılan moment nesnesidir
        var şimdiDeğer = yeni Tarih(hooks.now());
        eğer (config._useUTC) {
            dönüş [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }
        [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()] döndürür;
    }

    // bir diziyi tarihe dönüştür.
    // dizi aşağıdaki parametreleri yansıtmalıdır
    // not: yılı geçen tüm değerler isteğe bağlıdır ve varsayılan olarak mümkün olan en düşük değere ayarlanır.
    // [yıl, ay, gün, saat, dakika, saniye, milisaniye]
    işlev yapılandırmaFromArray (yapılandırma) {
        var i, tarih, giriş = [], geçerli Tarih, beklenen Hafta Günü, Kullanılacak Yıl;

        eğer (config._d) {
            dönüş;
        }

        currentDate = currentDateArray(config);

        //haftalar ve hafta içi günlerden yılın gününü hesapla
        if (config._w && config._a[DATE] == boş && config._a[AY] == boş) {
            dayOfYearFromWeekInfo(yapılandırma);
        }

        //yılın günü ayarlanmışsa, ne olduğunu bul
        if (config._dayOfYear != null) {
            YearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            tarih = createUTCDate(kullanılacakyıl, 0, config._dayOfYear);
            config._a[AY] = tarih.getUTCMay();
            config._a[DATE] = tarih.getUTCDate();
        }

        // Geçerli tarihe varsayılan.
        // * yıl, ay, ayın günü belirtilmemişse, varsayılan olarak bugün
        // * eğer ayın günü verilmişse varsayılan ay ve yıl
        // * eğer ay verilmişse, varsayılan sadece yıl
        // * yıl verilmişse, hiçbir şeyi varsayılan yapma
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = giriş[i] = geçerliTarih[i];
        }

        // Zaman dahil, varsayılan olmayan her şeyi sıfırlayın
        için (; i < 7; i++) {
            config._a[i] = girdi[i] = (config._a[i] == boş) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // 24:00:00.000 için kontrol edin
        if (config._a[HOUR] === 24 &&
                config._a[DAKİKA] === 0 &&
                config._a[İKİNCİ] === 0 &&
                config._a[MILLISANİYE] === 0) {
            config._nextDay = doğru;
            yapılandırma._a[SAAT] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, girdi);
        beklenenHafta Günü = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

        // Girişten saat dilimi farkını uygula. Gerçek utcOffset değiştirilebilir
        // parseZone ile.
        eğer (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        eğer (config._sonraki Gün) {
            yapılandırma._a[SAAT] = 24;
        }

        // haftanın gününün eşleşmediğini kontrol et
        if (config._w && typeof config._w.d !== 'tanımsız' && config._w.d !== beklenenHaftaiçi) {
            getParsingFlags(config).weekdayMismatch = true;
        }
    }

    işlev dayOfYearFromWeekInfo(config) {
        var w,weekYear,week,weekday,dow,doy,temp,weekdayOverflow;

        w = yapılandırma._w;
        if (w.GG != null || wW != null || wE != null) {
            alt = 1;
            doy = 4;

            // YAPILACAKLAR: Geçerli isoWeekYear'ı almamız gerekiyor, ancak bu,
            // şimdi nasıl yorumlayacağız (yerel, utc, sabit ofset). Öyleyse yarat
            // geçerli yapılandırmanın şimdi bir sürümü (yerel/utc/offset bayraklarını al ve
            // şimdi oluştur).
            haftaYıl = varsayılanlar(w.GG, config._a[YIL], haftaOfYıl(createLocal(), 1, 4).yıl);
            hafta = varsayılanlar(wW, 1);
            hafta içi = varsayılanlar(wE, 1);
            if (hafta içi < 1 || hafta içi > 7) {
                hafta içiOverflow = doğru;
            }
        } başka {
            dow = yapılandırma._locale._week.dow;
            doy = yapılandırma._locale._week.doy;

            var curWeek = haftaOfYear(createLocal(), dow, doy);

            haftaYıl = varsayılanlar(w.gg, config._a[YEAR], curWeek.year);

            // Geçerli hafta varsayılanı.
            hafta = varsayılanlar(ww, curWeek.week);

            eğer (wd != boş) {
                // hafta içi -- düşük gün sayıları gelecek hafta dikkate alınır
                hafta içi = wd;
                if (hafta içi < 0 || hafta içi > 6) {
                    hafta içiOverflow = doğru;
                }
            } else if (biz != null) {
                // yerel hafta içi gün -- sayım haftanın başından itibaren başlar
                hafta içi = biz + dow;
                eğer (biz < 0 || biz > 6) {
                    hafta içiOverflow = doğru;
                }
            } başka {
                // varsayılan olarak haftanın başlangıcı
                hafta içi = dow;
            }
        }
        if (hafta < 1 || hafta > hafta içindeYıl(haftaYıl, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } başka {
            temp = dayOfYearFromWeeks(weekYear, hafta, hafta içi, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // iso 8601 normal ifadesi
    // 0000-00-00 0000-W00 veya 0000-W00-0 + T + 00 veya 00:00 veya 00:00:00 veya 00:00:00.000 + +00:00 veya +0000 veya +00)
    var extensionIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d |W\d\d|\d\d\d|\d\d)(?:(T| )(\d\d(?::\d\d(?::\d\d(? :[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\ d\d|\d\d\d|\d\d)(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]) \d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

    var isoDates = [
        ['YYYYYY-AA-GG', /[+-]\d{6}-\d\d-\d\d/],
        ['YYYY-AA-GG', /\d{4}-\d\d-\d\d/],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
        ['YYYY-GG', /\d{4}-\d{3}/],
        ['YYYY-AA', /\d{4}-\d\d/, yanlış],
        ['YYYYYYAAGG', /[+-]\d{10}/],
        ['YYYYAAGG', /\d{8}/],
        // YYYYMM'ye standart tarafından izin VERİLMEZ
        ['GGGG[W]WWE', /\d{4}W\d{3}/],
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
        ['YYYYDDD', /\d{7}/]
    ];

    // iso zaman biçimleri ve normal ifadeler
    var isoTimes = [
        ['SS:dd:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['SS:dd:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['SS:dd:ss', /\d\d:\d\d:\d\d/],
        ['SS:dd', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/]
    ];

    var aspNetJsonRegex = /^\/?Tarih\((\-?\d+)/i;

    // iso biçiminden tarih
    işlev yapılandırmaISO'dan(yapılandırma) {
        var ben, l,
            dize = yapılandırma._i,
            eşleşme = genişletilmişIsoRegex.exec(dize) || basicIsoRegex.exec(dize),
            allowTime, dateFormat, timeFormat, tzFormat;

        eğer (eşleşirse) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; ben < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    tarihFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    kırmak;
                }
            }
            eğer (dateFormat == boş) {
                yapılandırma._isValid = yanlış;
                dönüş;
            }
            eğer (eşleşme[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(eşleşme[3])) {
                        // eşleşme[2] 'T' veya boşluk olmalıdır
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        kırmak;
                    }
                }
                eğer (timeFormat == boş) {
                    yapılandırma._isValid = yanlış;
                    dönüş;
                }
            }
            if (!allowTime && timeFormat != null) {
                yapılandırma._isValid = yanlış;
                dönüş;
            }
            eğer (eşleşme[4]) {
                if (tzRegex.exec(eşleşme[4])) {
                    tzFormat = 'Z';
                } başka {
                    yapılandırma._isValid = yanlış;
                    dönüş;
                }
            }
            config._f = tarihFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(yapılandırma);
        } başka {
            yapılandırma._isValid = yanlış;
        }
    }

    // RFC 2822 normal ifadesi: Ayrıntılar için bkz. https://tools.ietf.org/html/rfc2822#section-3.3
    var rfc2822 = /^(?:(Pzt|Sal|Çar|Per|Cum|Cmt|Paz),?\s)?(\d{1,2})\s(Ocak|Şub|Mar|Nisan|Mayıs) |Haziran|Temmuz|Ağu|Eyl|Eki|Kas|Ara)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d )?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var sonuç = [
            untruncateYear(yılStr),
            defaultLocaleMonthsShort.indexOf(ayStr),
            ayrıştırma(günStr, 10),
            ayrıştırma(saatStr, 10),
            ayrıştırma(dakikaStr, 10)
        ];

        eğer (ikinciStr) {
            sonuç.push(parseInt(ikinciStr, 10));
        }

        dönüş sonucu;
    }

    işlev untruncateYear(yearStr) {
        var yıl = parseInt(yearStr, 10);
        eğer (yıl <= 49) {
            dönüş 2000 + yıl;
        } else if (yıl <= 999) {
            dönüş 1900 + yıl;
        }
        dönüş yılı;
    }

    işlev önişlemRFC2822(ler) {
        // Yorumları ve katlanan boşlukları kaldırın ve çoklu boşlukları tek bir boşlukla değiştirin
        return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\ s\s*/, '').replace(/\s\s*$/, '');
    }

    işlev checkWeekday(weekdayStr, parsedInput, config) {
        eğer (hafta günüStr) {
            // YAPILACAKLAR: Normal JS Date nesnesini bağımsız bir haftanın günü denetimiyle değiştirin.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }

    var obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
    };

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        } else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        } else {
            var hm = parseInt(numOffset, 10);
            var m = hm % 100, h = (hm - m) / 100;
            return h * 60 + m;
        }
    }

    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i));
        if (match) {
            var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
            if (!checkWeekday(match[1], parsedArray, config)) {
                return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);

            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        // Final attempt, use Input Fallback
        hooks.createFromInputFallback(config);
    }

    hooks.createFromInputFallback = deprecate(
        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
        'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
        'discouraged and will be removed in an upcoming major release. Please refer to ' +
        'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // constant that refers to the ISO standard
    hooks.ISO_8601 = function () {};

    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            // console.log('token', token, 'parsedInput', parsedInput,
            //         'regex', getParseRegexForToken(token, config));
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                }
                else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

        configFromArray(config);
        checkOverflow(config);
    }


    function meridiemFixWrap (locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
            return obj && parseInt(obj, 10);
        });

        configFromArray(config);
    }

    function createFromConfig (config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig (config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return createInvalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
            config._d = input;
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        }  else {
            configFromInput(config);
        }

        if (!isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
            config._d = new Date(hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) {
            configFromObject(config);
        } else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        } else {
            hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC (input, format, locale, strict, isUTC) {
        var c = {};

        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }

        if ((isObject(input) && isObjectEmpty(input)) ||
                (isArray(input) && input.length === 0)) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function createLocal (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
        'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other < this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    var prototypeMax = deprecate(
        'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other > this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +(new Date());
    };

    var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

    function isDurationValid(m) {
        for (var key in m) {
            if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
                return false;
            }
        }

        var unitHasDecimal = false;
        for (var i = 0; i < ordering.length; ++i) {
            if (m[ordering[i]]) {
                if (unitHasDecimal) {
                    return false; // only allow non-integers for smallest unit
                }
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }

        return true;
    }

    function isValid$1() {
        return this._isValid;
    }

    function createInvalid$1() {
        return createDuration(NaN);
    }

    function Duration (duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        this._isValid = isDurationValid(normalizedInput);

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = getLocale();

        this._bubble();
    }

    function isDuration (obj) {
        return obj instanceof Duration;
    }

    function absRound (number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // FORMATTING

    function offset (token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z',  matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher);

        if (matches === null) {
            return null;
        }

        var chunk   = matches[matches.length - 1] || [];
        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return minutes === 0 ?
          0 :
          parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else {
            return createLocal(input).local();
        }
    }

    function getDateOffset (m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset (input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(this, createDuration(input - offset, 'm'), 1, false);
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone (input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC (keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal (keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset () {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            }
            else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }

    function hasAlignedHourOffset (input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime () {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted () {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() &&
                compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal () {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset () {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc () {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms : input._milliseconds,
                d  : input._days,
                M  : input._months
            };
        } else if (isNumber(input)) {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y  : 0,
                d  : toInt(match[DATE])                         * sign,
                h  : toInt(match[HOUR])                         * sign,
                m  : toInt(match[MINUTE])                       * sign,
                s  : toInt(match[SECOND])                       * sign,
                ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
            };
        } else if (!!(match = isoRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : (match[1] === '+') ? 1 : 1;
            duration = {
                y : parseIso(match[2], sign),
                M : parseIso(match[3], sign),
                w : parseIso(match[4], sign),
                d : parseIso(match[5], sign),
                h : parseIso(match[6], sign),
                m : parseIso(match[7], sign),
                s : parseIso(match[8], sign)
            };
        } else if (duration == null) {// checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso (inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {milliseconds: 0, months: 0};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return {milliseconds: 0, months: 0};
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
                'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }

    function addSubtract (mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }

    var add      = createAdder(1, 'add');
    var subtract = createAdder(-1, 'subtract');

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6 ? 'sameElse' :
                diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                diff < 1 ? 'sameDay' :
                diff < 2 ? 'nextDay' :
                diff < 7 ? 'nextWeek' : 'sameElse';
    }

    function calendar$1 (time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse';

        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

        return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
    }

    function clone () {
        return new Moment(this);
    }

    function isAfter (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween (from, to, units, inclusivity) {
        inclusivity = inclusivity || '()';
        return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
            (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
    }

    function isSame (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units || 'millisecond');
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
    }

    function isSameOrAfter (input, units) {
        return this.isSame(input, units) || this.isAfter(input,units);
    }

    function isSameOrBefore (input, units) {
        return this.isSame(input, units) || this.isBefore(input,units);
    }

    function diff (input, units, asFloat) {
        var that,
            zoneDelta,
            output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        switch (units) {
            case 'year': output = monthDiff(this, that) / 12; break;
            case 'month': output = monthDiff(this, that); break;
            case 'quarter': output = monthDiff(this, that) / 3; break;
            case 'second': output = (this - that) / 1e3; break; // 1000
            case 'minute': output = (this - that) / 6e4; break; // 1000 * 60
            case 'hour': output = (this - that) / 36e5; break; // 1000 * 60 * 60
            case 'day': output = (this - that - zoneDelta) / 864e5; break; // 1000 * 60 * 60 * 24, negate dst
            case 'week': output = (this - that - zoneDelta) / 6048e5; break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default: output = this - that;
        }

        return asFloat ? output : absFloor(output);
    }

    function monthDiff (a, b) {
        // difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2, adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString () {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
        if (!this.isValid()) {
            return null;
        }
        var utc = keepOffset !== true;
        var m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) {
                return this.toDate().toISOString();
            } else {
                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
            }
        }
        return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }

    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function inspect () {
        if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment';
        var zone = '';
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        var prefix = '[' + func + '("]';
        var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
        var datetime = '-MM-DD[T]HH:mm:ss.SSS';
        var suffix = zone + '[")]';

        return this.format(prefix + year + datetime + suffix);
    }

    function format (inputString) {
        if (!inputString) {
            inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow (withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }

    function to (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow (withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale (key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData () {
        return this._locale;
    }

    function startOf (units) {
        units = normalizeUnits(units);
        // the following switch intentionally omits break keywords
        // to utilize falling through the cases.
        switch (units) {
            case 'year':
                this.month(0);
                /* falls through */
            case 'quarter':
            case 'month':
                this.date(1);
                /* falls through */
            case 'week':
            case 'isoWeek':
            case 'day':
            case 'date':
                this.hours(0);
                /* falls through */
            case 'hour':
                this.minutes(0);
                /* falls through */
            case 'minute':
                this.seconds(0);
                /* falls through */
            case 'second':
                this.milliseconds(0);
        }

        // weeks are a special case
        if (units === 'week') {
            this.weekday(0);
        }
        if (units === 'isoWeek') {
            this.isoWeekday(1);
        }

        // quarters are also special
        if (units === 'quarter') {
            this.month(Math.floor(this.month() / 3) * 3);
        }

        return this;
    }

    function endOf (units) {
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond') {
            return this;
        }

        // 'date' is an alias for 'day', so it should be considered as such.
        if (units === 'date') {
            units = 'day';
        }

        return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
    }

    function valueOf () {
        return this._d.valueOf() - ((this._offset || 0) * 60000);
    }

    function unix () {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate () {
        return new Date(this.valueOf());
    }

    function toArray () {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject () {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }

    function toJSON () {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2 () {
        return isValid(this);
    }

    function parsingFlags () {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt () {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken (token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg',     'weekYear');
    addWeekYearFormatToken('ggggg',    'weekYear');
    addWeekYearFormatToken('GGGG',  'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);


    // PARSING

    addRegexToken('G',      matchSigned);
    addRegexToken('g',      matchSigned);
    addRegexToken('GG',     match1to2, match2);
    addRegexToken('gg',     match1to2, match2);
    addRegexToken('GGGG',   match1to4, match4);
    addRegexToken('gggg',   match1to4, match4);
    addRegexToken('GGGGG',  match1to6, match6);
    addRegexToken('ggggg',  match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input,
                this.week(),
                this.weekday(),
                this.localeData()._week.dow,
                this.localeData()._week.doy);
    }

    function getSetISOWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }

    function getISOWeeksInYear () {
        return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear () {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PRIORITY

    addUnitPriority('quarter', 7);

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter (input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PRIORITY
    addUnitPriority('date', 9);

    // PARSING

    addRegexToken('D',  match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict ?
          (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
          locale._dayOfMonthOrdinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PRIORITY
    addUnitPriority('dayOfYear', 4);

    // PARSING

    addRegexToken('DDD',  match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear (input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
    }

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PRIORITY

    addUnitPriority('minute', 14);

    // PARSING

    addRegexToken('m',  match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PRIORITY

    addUnitPriority('second', 15);

    // PARSING

    addRegexToken('s',  match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });


    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PRIORITY

    addUnitPriority('millisecond', 16);

    // PARSING

    addRegexToken('S',    match1to3, match1);
    addRegexToken('SS',   match1to3, match2);
    addRegexToken('SSS',  match1to3, match3);

    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS

    var getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z',  0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr () {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName () {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;

    proto.add               = add;
    proto.calendar          = calendar$1;
    proto.clone             = clone;
    proto.diff              = diff;
    proto.endOf             = endOf;
    proto.format            = format;
    proto.from              = from;
    proto.fromNow           = fromNow;
    proto.to                = to;
    proto.toNow             = toNow;
    proto.get               = stringGet;
    proto.invalidAt         = invalidAt;
    proto.isAfter           = isAfter;
    proto.isBefore          = isBefore;
    proto.isBetween         = isBetween;
    proto.isSame            = isSame;
    proto.isSameOrAfter     = isSameOrAfter;
    proto.isSameOrBefore    = isSameOrBefore;
    proto.isValid           = isValid$2;
    proto.lang              = lang;
    proto.locale            = locale;
    proto.localeData        = localeData;
    proto.max               = prototypeMax;
    proto.min               = prototypeMin;
    proto.parsingFlags      = parsingFlags;
    proto.set               = stringSet;
    proto.startOf           = startOf;
    proto.subtract          = subtract;
    proto.toArray           = toArray;
    proto.toObject          = toObject;
    proto.toDate            = toDate;
    proto.toISOString       = toISOString;
    proto.inspect           = inspect;
    proto.toJSON            = toJSON;
    proto.toString          = toString;
    proto.unix              = unix;
    proto.valueOf           = valueOf;
    proto.creationData      = creationData;
    proto.year       = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear    = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month       = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week           = proto.weeks        = getSetWeek;
    proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
    proto.weeksInYear    = getWeeksInYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.date       = getSetDayOfMonth;
    proto.day        = proto.days             = getSetDayOfWeek;
    proto.weekday    = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear  = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset            = getSetOffset;
    proto.utc                  = setOffsetToUTC;
    proto.local                = setOffsetToLocal;
    proto.parseZone            = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST                = isDaylightSavingTime;
    proto.isLocal              = isLocal;
    proto.isUtcOffset          = isUtcOffset;
    proto.isUtc                = isUtc;
    proto.isUTC                = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
    proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

    function createUnix (input) {
        return createLocal(input * 1000);
    }

    function createInZone () {
        return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat (string) {
        return string;
    }

    var proto$1 = Locale.prototype;

    proto$1.calendar        = calendar;
    proto$1.longDateFormat  = longDateFormat;
    proto$1.invalidDate     = invalidDate;
    proto$1.ordinal         = ordinal;
    proto$1.preparse        = preParsePostFormat;
    proto$1.postformat      = preParsePostFormat;
    proto$1.relativeTime    = relativeTime;
    proto$1.pastFuture      = pastFuture;
    proto$1.set             = set;

    proto$1.months            =        localeMonths;
    proto$1.monthsShort       =        localeMonthsShort;
    proto$1.monthsParse       =        localeMonthsParse;
    proto$1.monthsRegex       = monthsRegex;
    proto$1.monthsShortRegex  = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

    proto$1.weekdays       =        localeWeekdays;
    proto$1.weekdaysMin    =        localeWeekdaysMin;
    proto$1.weekdaysShort  =        localeWeekdaysShort;
    proto$1.weekdaysParse  =        localeWeekdaysParse;

    proto$1.weekdaysRegex       =        weekdaysRegex;
    proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
    proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1 (format, index, field, setter) {
        var locale = getLocale();
        var utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl (format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return get$1(format, index, field, 'month');
        }

        var i;
        var out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
        }
        return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl (localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0;

        if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
        }

        var i;
        var out = [];
        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function listMonths (format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort (format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    // Side effect imports

    hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
    hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

    var mathAbs = Math.abs;

    function abs () {
        var data           = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days         = mathAbs(this._days);
        this._months       = mathAbs(this._months);

        data.milliseconds  = mathAbs(data.milliseconds);
        data.seconds       = mathAbs(data.seconds);
        data.minutes       = mathAbs(data.minutes);
        data.hours         = mathAbs(data.hours);
        data.months        = mathAbs(data.months);
        data.years         = mathAbs(data.years);

        return this;
    }

    function addSubtract$1 (duration, input, value, direction) {
        var other = createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days         += direction * other._days;
        duration._months       += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1 (input, value) {
        return addSubtract$1(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1 (input, value) {
        return addSubtract$1(this, input, value, -1);
    }

    function absCeil (number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble () {
        var milliseconds = this._milliseconds;
        var days         = this._days;
        var months       = this._months;
        var data         = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0))) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds           = absFloor(milliseconds / 1000);
        data.seconds      = seconds % 60;

        minutes           = absFloor(seconds / 60);
        data.minutes      = minutes % 60;

        hours             = absFloor(minutes / 60);
        data.hours        = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days   = days;
        data.months = months;
        data.years  = years;

        return this;
    }

    function daysToMonths (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }

    function monthsToDays (months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }

    function as (units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'year') {
            days   = this._days   + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            return units === 'month' ? months : months / 12;
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week'   : return days / 7     + milliseconds / 6048e5;
                case 'day'    : return days         + milliseconds / 864e5;
                case 'hour'   : return days * 24    + milliseconds / 36e5;
                case 'minute' : return days * 1440  + milliseconds / 6e4;
                case 'second' : return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
                default: throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function valueOf$1 () {
        if (!this.isValid()) {
            return NaN;
        }
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs (alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds      = makeAs('s');
    var asMinutes      = makeAs('m');
    var asHours        = makeAs('h');
    var asDays         = makeAs('d');
    var asWeeks        = makeAs('w');
    var asMonths       = makeAs('M');
    var asYears        = makeAs('y');

    function clone$1 () {
        return createDuration(this);
    }

    function get$2 (units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
        return function () {
            return this.isValid() ? this._data[name] : NaN;
        };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds      = makeGetter('seconds');
    var minutes      = makeGetter('minutes');
    var hours        = makeGetter('hours');
    var days         = makeGetter('days');
    var months       = makeGetter('months');
    var years        = makeGetter('years');

    function weeks () {
        return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
        ss: 44,         // a few seconds to seconds
        s : 45,         // seconds to minute
        m : 45,         // minutes to hour
        h : 22,         // hours to day
        d : 26,         // days to month
        M : 11          // months to year
    };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
        var duration = createDuration(posNegDuration).abs();
        var seconds  = round(duration.as('s'));
        var minutes  = round(duration.as('m'));
        var hours    = round(duration.as('h'));
        var days     = round(duration.as('d'));
        var months   = round(duration.as('M'));
        var years    = round(duration.as('y'));

        var a = seconds <= thresholds.ss && ['s', seconds]  ||
                seconds < thresholds.s   && ['ss', seconds] ||
                minutes <= 1             && ['m']           ||
                minutes < thresholds.m   && ['mm', minutes] ||
                hours   <= 1             && ['h']           ||
                hours   < thresholds.h   && ['hh', hours]   ||
                days    <= 1             && ['d']           ||
                days    < thresholds.d   && ['dd', days]    ||
                months  <= 1             && ['M']           ||
                months  < thresholds.M   && ['MM', months]  ||
                years   <= 1             && ['y']           || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding (roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof(roundingFunction) === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }

    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold (threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === 's') {
            thresholds.ss = limit - 1;
        }
        return true;
    }

    function humanize (withSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var locale = this.localeData();
        var output = relativeTime$1(this, !withSuffix, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
        return ((x > 0) - (x < 0)) || +x;
    }

    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000;
        var days         = abs$1(this._days);
        var months       = abs$1(this._months);
        var minutes, hours, years;

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes           = absFloor(seconds / 60);
        hours             = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years  = absFloor(months / 12);
        months %= 12;


        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
        var total = this.asSeconds();

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        var totalSign = total < 0 ? '-' : '';
        var ymSign = sign(this._months) !== sign(total) ? '-' : '';
        var daysSign = sign(this._days) !== sign(total) ? '-' : '';
        var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

        return totalSign + 'P' +
            (Y ? ymSign + Y + 'Y' : '') +
            (M ? ymSign + M + 'M' : '') +
            (D ? daysSign + D + 'D' : '') +
            ((h || m || s) ? 'T' : '') +
            (h ? hmsSign + h + 'H' : '') +
            (m ? hmsSign + m + 'M' : '') +
            (s ? hmsSign + s + 'S' : '');
    }

    var proto$2 = Duration.prototype;

    proto$2.isValid        = isValid$1;
    proto$2.abs            = abs;
    proto$2.add            = add$1;
    proto$2.subtract       = subtract$1;
    proto$2.as             = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds      = asSeconds;
    proto$2.asMinutes      = asMinutes;
    proto$2.asHours        = asHours;
    proto$2.asDays         = asDays;
    proto$2.asWeeks        = asWeeks;
    proto$2.asMonths       = asMonths;
    proto$2.asYears        = asYears;
    proto$2.valueOf        = valueOf$1;
    proto$2._bubble        = bubble;
    proto$2.clone          = clone$1;
    proto$2.get            = get$2;
    proto$2.milliseconds   = milliseconds;
    proto$2.seconds        = seconds;
    proto$2.minutes        = minutes;
    proto$2.hours          = hours;
    proto$2.days           = days;
    proto$2.weeks          = weeks;
    proto$2.months         = months;
    proto$2.years          = years;
    proto$2.humanize       = humanize;
    proto$2.toISOString    = toISOString$1;
    proto$2.toString       = toISOString$1;
    proto$2.toJSON         = toISOString$1;
    proto$2.locale         = locale;
    proto$2.localeData     = localeData;

    proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
    proto$2.lang = lang;

    // Side effect imports

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    // Side effect imports


    hooks.version = '2.22.2';

    setHookCallback(createLocal);

    hooks.fn                    = proto;
    hooks.min                   = min;
    hooks.max                   = max;
    hooks.now                   = now;
    hooks.utc                   = createUTC;
    hooks.unix                  = createUnix;
    hooks.months                = listMonths;
    hooks.isDate                = isDate;
    hooks.locale                = getSetGlobalLocale;
    hooks.invalid               = createInvalid;
    hooks.duration              = createDuration;
    hooks.isMoment              = isMoment;
    hooks.weekdays              = listWeekdays;
    hooks.parseZone             = createInZone;
    hooks.localeData            = getLocale;
    hooks.isDuration            = isDuration;
    hooks.monthsShort           = listMonthsShort;
    hooks.weekdaysMin           = listWeekdaysMin;
    hooks.defineLocale          = defineLocale;
    hooks.updateLocale          = updateLocale;
    hooks.locales               = listLocales;
    hooks.weekdaysShort         = listWeekdaysShort;
    hooks.normalizeUnits        = normalizeUnits;
    hooks.relativeTimeRounding  = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat        = getCalendarFormat;
    hooks.prototype             = proto;

    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',             // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',  // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',   // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD',                             // <input type="date" />
        TIME: 'HH:mm',                                  // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss',                       // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS',                        // <input type="time" step="0.001" />
        WEEK: 'YYYY-[W]WW',                             // <input type="week" />
        MONTH: 'YYYY-MM'                                // <input type="month" />
    };

    return hooks;

})));
