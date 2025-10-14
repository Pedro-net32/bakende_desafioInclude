import Jogo from '../models/jogoModel.js';
import Avaliacao from '../models/avaliacaoModel.js';

export const listarJogos = async (req, res) => {
  try {
    const jogos = await Jogo.find();
    res.json(jogos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const criarJogo = async (req, res) => {
  try {
    const jogo = new Jogo(req.body);
    const jogoSalvo = await jogo.save();
    res.status(201).json(jogoSalvo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const detalhesJogo = async (req, res) => {
  try {
    const jogo = await Jogo.findById(req.params.id);
    if (!jogo) {
      return res.status(404).json({ message: 'Jogo não encontrado' });
    }
    res.json(jogo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const atualizarJogo = async (req, res) => {
  try {
    const jogo = await Jogo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(jogo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deletarJogo = async (req, res) => {
  try {
    await Jogo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Jogo deletado com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const listarAvaliacoesDoJogo = async (req, res) => {
  try {
    const avaliacoes = await Avaliacao.find({ jogo: req.params.id });
    res.json(avaliacoes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
