!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.dayjs_plugin_customParseFormat=e()}(this,function(){"use strict";var t,e=/(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,o=/\d*[^\s\d-:/()]+/;var i=function(t){return function(e){this[t]=+e}},s=[/[+-]\d\d:?\d\d/,function(t){var e,n;(this.zone||(this.zone={})).offset=(e=t.match(/([+-]|\d\d)/g),0===(n=60*e[1]+ +e[2])?0:"+"===e[0]?-n:n)}],a=function(e){var n=t[e];return n&&(n.indexOf?n:n.s.concat(n.f))},h={A:[/[AP]M/,function(t){this.afternoon="PM"===t}],a:[/[ap]m/,function(t){this.afternoon="pm"===t}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[n,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[r,i("seconds")],ss:[r,i("seconds")],m:[r,i("minutes")],mm:[r,i("minutes")],H:[r,i("hours")],h:[r,i("hours")],HH:[r,i("hours")],hh:[r,i("hours")],D:[r,i("day")],DD:[n,i("day")],Do:[o,function(e){var n=t.ordinal,r=e.match(/\d+/);if(this.day=r[0],n)for(var o=1;o<=31;o+=1)n(o).replace(/\[|\]/g,"")===e&&(this.day=o)}],M:[r,i("month")],MM:[n,i("month")],MMM:[o,function(t){var e=a("months"),n=(a("monthsShort")||e.map(function(t){return t.substr(0,3)})).indexOf(t)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[o,function(t){var e=a("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,i("year")],YY:[n,function(t){t=+t,this.year=t+(t>68?1900:2e3)}],YYYY:[/\d{4}/,i("year")],Z:s,ZZ:s};var f=function(t,n,r){try{var o=function(t){for(var n=t.match(e),r=n.length,o=0;o<r;o+=1){var i=n[o],s=h[i],a=s&&s[0],f=s&&s[1];n[o]=f?{regex:a,parser:f}:i.replace(/^\[|\]$/g,"")}return function(t){for(var e={},o=0,i=0;o<r;o+=1){var s=n[o];if("string"==typeof s)i+=s.length;else{var a=s.regex,h=s.parser,f=t.substr(i),u=a.exec(f)[0];h.call(e,u),t=t.replace(u,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var n=t.hours;e?n<12&&(t.hours+=12):12===n&&(t.hours=0),delete t.afternoon}}(e),e}}(n)(t),i=o.year,s=o.month,a=o.day,f=o.hours,u=o.minutes,d=o.seconds,c=o.milliseconds,l=o.zone,m=new Date,v=a||(i||s?1:m.getDate()),p=i||m.getFullYear(),y=0;i&&!s||(y=s>0?s-1:m.getMonth());var D=f||0,M=u||0,g=d||0,Y=c||0;return l?new Date(Date.UTC(p,y,v,D,M,g,Y+60*l.offset*1e3)):r?new Date(Date.UTC(p,y,v,D,M,g,Y)):new Date(p,y,v,D,M,g,Y)}catch(t){return new Date("")}};return function(e,n,r){var o=n.prototype,i=o.parse;o.parse=function(e){var n=e.date,o=e.utc,s=e.args;this.$u=o;var a=s[1];if("string"==typeof a){var h=!0===s[2],u=!0===s[3],d=h||u,c=s[2];u&&(c=s[2]),h||(t=c?r.Ls[c]:this.$locale()),this.$d=f(n,a,o),this.init(),c&&!0!==c&&(this.$L=this.locale(c).$L),d&&n!==this.format(a)&&(this.$d=new Date(""))}else if(a instanceof Array)for(var l=a.length,m=1;m<=l;m+=1){s[1]=a[m-1];var v=r.apply(this,s);if(v.isValid()){this.$d=v.$d,this.$L=v.$L,this.init();break}m===l&&(this.$d=new Date(""))}else i.call(this,e)}}});
