import Avaliacao from '../models/avaliacaoModel.js';
import Jogo from '../models/jogoModel.js';

export const listarAvaliacoes = async (req, res) => {
  try {
    const avaliacoes = await Avaliacao.find().populate('jogo');
    res.json(avaliacoes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const criarAvaliacao = async (req, res) => {
  try {
    const avaliacao = new Avaliacao(req.body);
    const novaAvaliacao = await avaliacao.save();

    const avaliacoes = await Avaliacao.find({ jogo: avaliacao.jogo });
    const media =
      avaliacoes.reduce((acc, a) => acc + a.nota, 0) / avaliacoes.length;

    await Jogo.findByIdAndUpdate(avaliacao.jogo, { notaMedia: media.toFixed(1) });

    res.status(201).json(novaAvaliacao);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const listarAvaliacoesPorJogo = async (req, res) => {
  try {
    const avaliacoes = await Avaliacao.find({ jogo: req.params.id });
    res.json(avaliacoes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletarAvaliacao = async (req, res) => {
  try {
    await Avaliacao.findByIdAndDelete(req.params.id);
    res.json({ message: "Avaliação removida com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
