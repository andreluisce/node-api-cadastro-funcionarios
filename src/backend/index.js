const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('Helo world')
})

app.get('/funcionarios',(re,res)=>{
    const lista_funcionarios=[{nome:'Lorena',
         data_nasc:'11/12/19'},
         {nome:'Elisa',
         data_nasc:'11/12/19'}     
    ]
    
res.json(lista_funcionarios);

})

app.listen(3000,()=>{
    console.log('Aplicação escutando na porta 3000')
})
