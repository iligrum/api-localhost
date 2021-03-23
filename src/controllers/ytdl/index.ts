import express from 'express';
import ytdl from 'ytdl-core';

const route = express.Router();

route.route('/audio/:id')
  .get(async (req, res) => {
    if(!req.params.id) return res.status(400).json({error: "Necessita-se de pelo menos um parâmetro."});
    let id = req.params.id

    if(!ytdl.validateID(id)) return res.status(400).json({error: 'URL ou ID inválido.'});
    id = 'http://www.youtube.com/watch?v=' + id
  
    const info = await ytdl.getInfo(id);

    const audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
    res.json(audioFormats)
  })
  .post(async (req, res) => {
    if(!req.params.id) return res.status(400).json({error: "Necessita-se de pelo menos um parâmetro."});
    let id = req.params.id

    if(!ytdl.validateID(id)) return res.status(400).json({error: 'URL ou ID inválido.'});
    id = 'http://www.youtube.com/watch?v=' + id
  
    const info = await ytdl.getInfo(id);

    const audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
    res.json(audioFormats)
  });


route.route('/video/:id')
  .get(async (req, res) => {
    if(!req.params.id) return res.status(400).json({error: "Necessita-se de pelo menos um parâmetro."});
    let id = req.params.id;

    if(!ytdl.validateID(id)) return res.status(400).json({error: 'URL ou ID inválido.'});
    id = 'http://www.youtube.com/watch?v=' + id;
  
    const info = await ytdl.getInfo(id);

    const videoFormats = ytdl.filterFormats(info.formats, 'videoandaudio');
    res.json(videoFormats);
  })
  .post(async (req, res) => {
    if(!req.params.id) return res.status(400).json({error: "Necessita-se de pelo menos um parâmetro."});
    let id = req.params.id;

    if(!ytdl.validateID(id)) return res.status(400).json({error: 'URL ou ID inválido.'});
    id = 'http://www.youtube.com/watch?v=' + id;
  
    const info = await ytdl.getInfo(id);
    
    const videoFormats = ytdl.filterFormats(info.formats, 'videoandaudio');
    res.json(videoFormats);
  });


export default route;