"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RootController_1 = __importDefault(require("../controllers/RootController"));
const express_1 = __importDefault(require("express"));
// Get the express router instance.
const router = express_1.default.Router();
router.get('/', RootController_1.default.home);
exports.default = router;
