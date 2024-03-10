"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RootController {
    static home(_, res) {
        return res.sendFile('index.html', { root: 'public' });
    }
}
exports.default = RootController;
