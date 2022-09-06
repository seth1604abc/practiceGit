"use strict";
let aaa = "eric";
console.log("aaa : " + aaa);
var LiveStatus;
(function (LiveStatus) {
    LiveStatus[LiveStatus["SUCCESS"] = 1] = "SUCCESS";
    LiveStatus[LiveStatus["FAIL"] = -1] = "FAIL";
    LiveStatus[LiveStatus["STREAMING"] = 0] = "STREAMING";
})(LiveStatus || (LiveStatus = {}));
const staus = LiveStatus.STREAMING;
console.log(staus);
