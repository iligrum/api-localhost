"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ytdl_core_1 = __importDefault(require("ytdl-core"));
const route = express_1.default.Router();
route.route('/audio/:id')
    .get(async (req, res) => {
    if (!req.params.id)
        return res.status(400).json({ error: "Necessita-se de pelo menos um parâmetro." });
    let id = req.params.id;
    if (!ytdl_core_1.default.validateID(id))
        return res.status(400).json({ error: 'URL ou ID inválido.' });
    id = 'http://www.youtube.com/watch?v=' + id;
    const info = await ytdl_core_1.default.getInfo(id);
    const audioFormats = ytdl_core_1.default.filterFormats(info.formats, 'audioonly');
    res.json(audioFormats);
})
    .post(async (req, res) => {
    if (!req.params.id)
        return res.status(400).json({ error: "Necessita-se de pelo menos um parâmetro." });
    let id = req.params.id;
    if (!ytdl_core_1.default.validateID(id))
        return res.status(400).json({ error: 'URL ou ID inválido.' });
    id = 'http://www.youtube.com/watch?v=' + id;
    const info = await ytdl_core_1.default.getInfo(id);
    const audioFormats = ytdl_core_1.default.filterFormats(info.formats, 'audioonly');
    res.json(audioFormats);
});
route.route('/video/:id')
    .get(async (req, res) => {
    if (!req.params.id)
        return res.status(400).json({ error: "Necessita-se de pelo menos um parâmetro." });
    let id = req.params.id;
    if (!ytdl_core_1.default.validateID(id))
        return res.status(400).json({ error: 'URL ou ID inválido.' });
    id = 'http://www.youtube.com/watch?v=' + id;
    const info = await ytdl_core_1.default.getInfo(id);
    const videoFormats = ytdl_core_1.default.filterFormats(info.formats, 'videoandaudio');
    res.json(videoFormats);
})
    .post(async (req, res) => {
    if (!req.params.id)
        return res.status(400).json({ error: "Necessita-se de pelo menos um parâmetro." });
    let id = req.params.id;
    if (!ytdl_core_1.default.validateID(id))
        return res.status(400).json({ error: 'URL ou ID inválido.' });
    id = 'http://www.youtube.com/watch?v=' + id;
    const info = await ytdl_core_1.default.getInfo(id);
    const videoFormats = ytdl_core_1.default.filterFormats(info.formats, 'videoandaudio');
    res.json(videoFormats);
});
exports.default = route;
