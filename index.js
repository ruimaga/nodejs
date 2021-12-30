//configuração inicial
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const DBPASSWORD = 'Admin02';


//fora de ler JSON / middlewers
app.use(
  express.urlencoded({
      extended:true,
  }),
    
)

app.use(express.json());
//as rotas da API
const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);

//criar uma rota inicial / endpoint
app.get('/', (req, res) => {

    //exibir requisição
    res.json({message: 'Oi Express'});
})

//Admin02
//String de conexão 
//mongodb+srv://ruimaga:<password>@aptrestcluster.sn7vd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//entregar uma porta 
mongoose.connect('mongodb+srv://ruimaga:' + DBPASSWORD + '@aptrestcluster.sn7vd.mongodb.net/bancodaapi?retryWrites=true&w=majority'
)

.then(() => {
  console.log('MongoDB Conectado com Sucesso');
  app.listen(3000);
})
.catch((err) => {
  console.log(err);
})
