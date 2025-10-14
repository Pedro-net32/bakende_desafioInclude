import mongoose from 'mongoose';

const jogoSchema= new mongoose.Schema({
    titulo: {type:String, required: true},
    genero: String,
    imagem: String,
    plataforma: String,
    dataLancamento: Date,
});

export default mongoose.model('Jogo', jogoSchema);