# 🎮 API de Avaliação de Jogos

Uma API RESTful desenvolvida para gerenciar **jogos e avaliações**, permitindo que jogadores cadastrem, listem e avaliem títulos, além de autenticação de usuários via **JWT**.

---

## 🧠 Objetivo central

Centralizar informações sobre jogos e avaliações, oferecendo uma API moderna e organizada para integrar com um front-end ou aplicação móvel.

---

## 🧰 Tecnologias Utilizadas

### 💻 Back-end
- Node.js  
- Express.js 
- MongoDB + Mongoose
- dotenv
- bcryptjs (criptografia de senha)  
- jsonwebtoken (JWT) (autenticação de usuários)  
- Cors

### 🧩 Ferramentas de Desenvolvimento
- Visual Studio Code  
- **Git & GitHub  
- Postman (para testar os endpoints da API)

---

## ⚙️ Como Executar o Projeto Localmente

1. **Clonar o repositório**
   ```bash
   git clone https://github.com/seu-usuario/black_end.git
   cd black_end
2. **Instalar as dependências**

npm install


3. **Criar o arquivo .env na raiz do projeto**

PORT=3000
MONGO_URI=mongodb://localhost:27017/black_end
JWT_SECRET=sua_chave_secreta


4. **Iniciar o servidor**

npm start


O servidor estará rodando em:

http://localhost:3000

📁 Estrutura do Projeto:


black_end/

node_modules


src/
  config/
    db.js
  controllers/
    jogoController.js
    avaliacaoController.js
    authController.js
  models/
    jogoModel.js
    avaliacaoModel.js
    usuarioModel.js
  routes/
    jogoRoutes.js
    avaliacaoRoutes.js
    authRoutes.js
  app.js
.env
package.json
README.md

🚀 Endpoints da API
🧍‍♂️ Usuários (Autenticação)

│Método	│        Endpoint      │Descrição                      

│POST	│api/auth/registrar	   │Registra um novo usuário       
│POST	│api/auth/login	       │Faz login e retorna token JWT  



🎮 Jogos

│Método	│   Endpoint	       │ Descrição                          
│POST	  │api/jogos	         │Cadastra um novo jogo                                  
│GET	  │api/jogos	         │Lista todos os jogos                                   
│GET	  │api/jogos/:id	     │Mostra detalhes de um jogo (com média das avaliações)  
│PUT	  │api/jogos/:id	     │Atualiza informações de um jogo                        
│DELETE	│api/jogos/:id	     │Remove um jogo                                         

🌟 Avaliações
│Método	│       Endpoint	   │  Descrição                    
│POST	  │/api/avaliacoes	   │Cria uma nova avaliação                   
│GET	  │/api/avaliacoes	   │Lista todas as avaliações                 
│GET	  │/api/avaliacoes/:id │Lista avaliações de um jogo específico   
│DELETE	│/api/avaliacoes/:id │Remove uma avaliação                      


🧾 Exemplos de Corpo JSON
Criar Jogo
{
  "titulo": "God of War Ragnarok",
  "genero": "Ação e Aventura",
  "plataforma": "PlayStation 5",
  "imagem": "https://exemplo.com/imagem.jpg",
  "dataLancamento": "2022-11-09"
}

Criar Avaliação
{
  "jogo": "id_do_jogo",
  "nota": 9.5,
  "comentario": "Jogo incrível, trilha sonora espetacular!"
}

Registro de Usuário
{
  "primeiroNome": "Pedro",
  "sobreNome": "Henrique",
  "email": "pedro@email.com",
  "senha": "123456"
}

Login
{
  "email": "pedro@email.com",
  "senha": "123456"
}


💬 Status Codes Utilizados

│Código	                        │Significado                               

│200 OK	               │Requisição bem-sucedida                   
│201 Created	Recurso  │criado com sucesso                        
│400 Bad Request	     │Erro de validação ou dados incorretos     
│401 Unauthorized	     │Acesso negado (token ausente ou inválido) 
│404 Not Found	       │Recurso não encontrado                    
│500 Internal Server Error │Erro no servidor                          


Autor
Pedro Henrique Araújo de Lavor

Projeto desenvolvido como parte de um desafio técnico para a Include🧡🧡🧡.