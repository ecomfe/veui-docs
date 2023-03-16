import camelCase from 'camelcase';

/* eslint-disable no-control-regex */
// used to make CSS selectors remain scoped properly
function scoper(css, suffix) {
    var re = /([^\r\n,{}]+)(,(?=[^}]*{)|s*{)/g;
    // `after` is going to contain eithe a comma or an opening curly bracket
    css = css.replace(re, function (full, selector, after) {
        // if non-rule delimiter
        if (selector.match(/^\s*(@media|@keyframes|to|from|@font-face)/)) {
            return selector + after;
        }
        // don't scope the part of the selector after ::v-deep
        var arrayDeep = /(.*)(::v-deep|>>>|\/deep\/)(.*)/g.exec(selector);
        if (arrayDeep) {
            var beforeVDeep = arrayDeep[1], afterVDeep = arrayDeep[3];
            selector = beforeVDeep;
            after = (afterVDeep + after).trim();
        }
        // deal with :scope pseudo selectors
        if (selector && selector.match(/:scope/)) {
            selector = selector.replace(/([^\s]*):scope/, function (ful, cutSelector) {
                if (cutSelector === '') {
                    return '> *';
                }
                return '> ' + cutSelector;
            });
        }
        selector = selector.split(/\s+/).filter(function (part) { return !!part; }).map(function (part) {
            // combinators
            if (/^[>~+]$/.test(part)) {
                return part;
            }
            // deal with other pseudo selectors
            var _a = part.split(/:{1,2}/), main = _a[0], rest = _a.slice(1);
            var pseudo = rest.map(function (piece) { return ":".concat(piece); }).join('');
            return main + suffix + pseudo;
        }).join(' ');
        return selector + ' ' + after;
    });
    return css;
}

var noop = function () { };
/**
 * Adds a style block to the head to load the styles.
 * uses the suffix to scope the styles
 * @param {string} css css code to add the the head
 * @param {string} suffix string to add to each selector as a scoped style to avoid conflicts
 * @returns a function that discard the added style element (if there is one)
 */
function addScopedStyle(css, suffix) {
    // protect server side rendering
    if (typeof document === 'undefined') {
        return noop;
    }
    var head = document.head || document.getElementsByTagName('head')[0];
    var newstyle = document.createElement('style');
    newstyle.dataset.cssscoper = 'true';
    var csses = scoper(css, "[data-".concat(suffix, "]"));
    var styleany = newstyle;
    if (styleany.styleSheet) {
        styleany.styleSheet.cssText = csses;
    }
    else {
        newstyle.appendChild(document.createTextNode(csses));
    }
    head.appendChild(newstyle);
    return function () {
        if (head && newstyle && newstyle.parentNode === head) {
            head.removeChild(newstyle);
        }
    };
}

/**
 * Groups atributes passed to a React pragma to the VueJS fashion
 * @param h the VueJS createElement function passed in render functions
 * @returns pragma usable in buble rendered JSX for VueJS
 */
function adaptCreateElement(h) {
    return function (comp, attr) {
        var children = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            children[_i - 2] = arguments[_i];
        }
        if (attr === undefined) {
            return h(comp);
        }
        else if (!children.length) {
            return h(comp, groupAttr(attr));
        }
        return h(comp, groupAttr(attr), children);
    };
}
var rootAttributes = [
    'staticClass',
    'class',
    'style',
    'key',
    'ref',
    'refInFor',
    'slot',
    'scopedSlots',
    'model'
];
var prefixedRE = /^(on|nativeOn|props|domProps|hook|v)([A-Z][a-zA-Z]+)?$/;
var getRawName = function (name) {
    return name.replace(/^(on|native(On|-on)|props|dom(Props|-props)|hook|v)-?/, '');
};
/**
 * Make sure an object is an array
 * and if it is not wrap it inside one
 * @param a
 */
var makeArray = function (a) {
    return Array.isArray(a) ? a : [a];
};
/**
 * create a functoin out of two other
 * @param fn1
 * @param fn2
 */
var mergeFn = function (fn1, fn2) {
    return function () {
        var argzMain = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            argzMain[_i] = arguments[_i];
        }
        fn1 && fn1.apply(this, argzMain);
        fn2 && fn2.apply(this, argzMain);
    };
};
/**
 * merge two members of the spread
 * @param a
 * @param b
 */
var merge = function (a, b) {
    // initialization case
    if (a === undefined) {
        return b;
    }
    // merge of functions
    if (typeof a === 'function' && typeof b === 'function') {
        return mergeFn(a, b);
    }
    // merge of other options (like class)
    return makeArray(a).concat(b);
};
var concatenate = function (src) {
    var otherObj = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherObj[_i - 1] = arguments[_i];
    }
    src = src || {};
    otherObj.forEach(function (obj) {
        Object.keys(obj).forEach(function (key) {
            src[key] = merge(src[key], obj[key]);
        });
    });
    return src;
};
var groupAttr = function (attrsIn) {
    if (!attrsIn) {
        return undefined;
    }
    var attrsOut = {};
    Object.keys(attrsIn).forEach(function (name) {
        var value = attrsIn[name];
        var ccName = camelCase(name);
        if (rootAttributes.indexOf(ccName) > 0) {
            attrsOut[ccName] = value;
        }
        else if (name === 'attrs') {
            attrsOut.attrs = concatenate(attrsOut.attrs, value);
        }
        else if (prefixedRE.test(ccName)) {
            var foundName = prefixedRE.exec(ccName);
            if (foundName) {
                var prefix = foundName[1];
                var rawName = getRawName(name);
                var camelCasedName = rawName.length ? rawName[0].toLowerCase() + rawName.slice(1) : '';
                if (prefix === 'v') {
                    if (!attrsOut.directives) {
                        attrsOut.directives = [];
                    }
                    attrsOut.directives.push({
                        name: camelCasedName,
                        value: value
                    });
                }
                else {
                    if (!attrsOut[prefix]) {
                        attrsOut[prefix] = {};
                    }
                    if (camelCasedName.length) {
                        // if it is a litteral prefixed attribute
                        attrsOut[prefix][camelCasedName] = merge(attrsOut[prefix][camelCasedName], value);
                    }
                    else {
                        // if it is a spread
                        concatenate(attrsOut[prefix], value);
                    }
                }
            }
        }
        else {
            attrsOut.attrs = attrsOut.attrs || {};
            var finalName = /^data-/.test(name) ? name : ccName === 'xlinkHref' ? 'xlink:href' : ccName;
            attrsOut.attrs[finalName] = value;
        }
    });
    return attrsOut;
};

// highest priority first
var PARTS = ['script', 'template'];
function parseComponent(code) {
    // reinintialize regexp after each tour
    var partsRE = PARTS.reduce(function (ret, part) {
        ret[part] = new RegExp("<".concat(part, "[^>]*>((.|\\n|\\r)+)</").concat(part, ">"), 'g');
        return ret;
    }, {});
    var descriptor = {};
    var codeCleaned = code;
    // extract all parts
    PARTS.forEach(function (part) {
        var res = partsRE[part].exec(codeCleaned);
        if (res) {
            var partFound = res[0];
            var linesBeforePart = code.split(partFound)[0];
            var paddingLinesNumber = linesBeforePart.split('\n').length;
            descriptor[part] = Array(paddingLinesNumber).join('\n') + res[1];
            // once we have extracted one part,
            // remove it from the analyzed blob
            var linesOfPart = partFound.split('\n').length;
            codeCleaned = codeCleaned.replace(partFound, Array(linesOfPart).join('\n'));
        }
    });
    // we assume that
    var styleRE = /<style[^>]*>((.|\n|\r)*?)<\/style>/g;
    var styleAnalyzed = '';
    var stylesWithWrapper = [];
    var stylePart = styleRE.exec(codeCleaned);
    var styles;
    while (stylePart) {
        styleAnalyzed += stylePart[1];
        if (!styles) {
            styles = [];
        }
        var styleWithWrapper = stylePart[0];
        stylesWithWrapper.push(styleWithWrapper);
        var linesBeforePart = code.split(styleWithWrapper)[0];
        var paddingLinesNumber = linesBeforePart.split('\n').length;
        styles.push(Array(paddingLinesNumber).join('\n') + styleAnalyzed);
        stylePart = styleRE.exec(codeCleaned);
    }
    if (styles) {
        descriptor.styles = styles;
        var j = styles.length;
        while (j--) {
            codeCleaned = codeCleaned.replace(stylesWithWrapper[j], '').trim();
        }
    }
    return codeCleaned.trim().length ? {} : descriptor;
}

/**
 * Determines if the given code is a VueSfc file
 * It does not throw if the code is invalid, just returns `false`
 * @param code JavaScript or vue code to analyze
 */
function isCodeVueSfc(code) {
    var parts = parseComponent(code);
    return !!parts.script || !!parts.template;
}

function cleanName(name) {
    return name.replace(/[^A-Za-z0-9-]/g, '');
}

function getDefaultText() {
    return 'Default Example Usage';
}
function getDefaultNumber() {
    return '42';
}
function getDefaultBoolean() {
    return 'true';
}
function getDefaultArray() {
    return '[1, 2, 3]';
}
function getDefaultFunction() {
    return '() => void';
}
function getDefaultDate() {
    return 'new Date(\'2012-12-12\')';
}
function getDefaultObject() {
    return '{}';
}
function getDefault(prop) {
    if (!prop || !prop.type) {
        return getDefaultText();
    }
    else if (prop.values && prop.values.length) {
        return prop.values[0];
    }
    else if (prop.type.name === 'string') {
        return getDefaultText();
    }
    else if (prop.type.name === 'number') {
        return getDefaultNumber();
    }
    else if (prop.type.name === 'boolean') {
        return getDefaultBoolean();
    }
    else if (prop.type.name === 'object') {
        return getDefaultObject();
    }
    else if (prop.type.name === 'array') {
        return getDefaultArray();
    }
    else if (prop.type.name === 'func') {
        return getDefaultFunction();
    }
    else if (prop.type.name === 'date') {
        return getDefaultDate();
    }
    return getDefaultText();
}
var getDefaultExample = (function (doc) {
    var displayName = doc.displayName, props = doc.props, slots = doc.slots;
    var cleanedName = cleanName(displayName);
    var propsAttr = props
        ? props
            .filter(function (p) { return p.required; })
            .map(function (p) {
            return " ".concat(!p || !p.type || p.type.name === 'string' ? '' : ':').concat(p.name, "=\"").concat(getDefault(p), "\"");
        })
        : [];
    return "<".concat(cleanedName).concat(propsAttr.join(' ')).concat(!slots || !slots.filter(function (s) { return s.name === 'default'; })
        ? ' />'
        : ">".concat(getDefaultText(), "</").concat(cleanedName, ">"));
});

export { adaptCreateElement, addScopedStyle, cleanName, concatenate, getDefaultExample, isCodeVueSfc, parseComponent };
