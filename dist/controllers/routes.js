"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ytdl_1 = __importDefault(require("./ytdl"));
const router = express_1.default.Router();
router.use('/ytdl', ytdl_1.default);
exports.default = router;
