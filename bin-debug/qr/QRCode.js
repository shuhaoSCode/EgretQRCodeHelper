var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by qingzhu on 15/7/1.
 */
var qr;
(function (qr) {
    var QRCode = (function () {
        function QRCode() {
        }
        /**
         * msg
         * width,height 二维码宽度，高度
         * color 颜色
         * */
        QRCode.create = function (msg, width, height, color, errorCorrectLevel) {
            if (width === void 0) { width = 200; }
            if (height === void 0) { height = 200; }
            if (color === void 0) { color = 0; }
            if (errorCorrectLevel === void 0) { errorCorrectLevel = 2; }
            var _htOption = {
                width: width,
                height: height,
                correctLevel: qr.QRErrorCorrectLevel.H,
                color: color
            };
            var _oQRCode = new qr.QRCodeModel(qr.QRUtil._getTypeNumber(msg, _htOption.correctLevel), _htOption.correctLevel);
            _oQRCode.addData(msg);
            _oQRCode.make();
            return QRCode.draw(_oQRCode, _htOption);
        };
        QRCode.draw = function (m, _htOption) {
            var sc = new egret.Sprite();
            var _htOption = _htOption;
            var nCount = m.getModuleCount();
            var nWidth = Math.floor(_htOption.width / nCount);
            var nHeight = Math.floor(_htOption.height / nCount);
            sc.graphics.beginFill(_htOption.color);
            for (var row = 0; row < nCount; row++) {
                for (var col = 0; col < nCount; col++) {
                    var b = m.isDark(row, col);
                    if (b) {
                        sc.graphics.drawRect(col * nWidth, row * nHeight, nWidth, nHeight);
                    }
                }
            }
            sc.graphics.endFill();
            return sc;
        };
        return QRCode;
    }());
    qr.QRCode = QRCode;
    __reflect(QRCode.prototype, "qr.QRCode");
})(qr || (qr = {}));
//# sourceMappingURL=QRCode.js.map