import mongoose from 'mongoose';

const avaliacaoSchema= new mongoose.Schema({
    jogo: {type: mongoose.Schema.Types.ObjectId, ref: 'Jogo', required: true},
    nota: {type: Number, required: true, min:1, max: 10},
    comentario: String,
    autor: String,
    data: {type: Date, default: Date.now}
});

export default mongoose.model('Avaliação', avaliacaoSchema);