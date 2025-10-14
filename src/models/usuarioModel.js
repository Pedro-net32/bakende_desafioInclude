import mongoose from 'mongoose';

const usuarioSchema= new mongoose.Schema ({
    primeiroNome: {type: String, required: true},
    sobreNome: {type: String, required: true},
    email: {type: String, required: true},
    senha: {type: String, required: true},
});

export default mongoose.model('Usuario',usuarioSchema);