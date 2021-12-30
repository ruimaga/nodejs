const router = require('express').Router();
const Person = require('../model/Person');

router.post('/', async (req,res) => {
 
    //req.body - Exemplo: {name: "rui", salary: 5000, approved: false}
    const {name,salary,approved} = req.body;
  
    if (!name) {
      res.status(422).json({error: 'O nome é obrigatório!'});
    }
  
    const person = {
      name,
      salary,
      approved
    }
  
    try {
  
      //criando dados
      await Person.create(person);
  
      res.status(201).json({message: 'Pessoa Inserida com sucesso!'});
  
    } catch (error) {
      res.status(500).json({erro: error})
    }
  
  })

  module.exports = router;