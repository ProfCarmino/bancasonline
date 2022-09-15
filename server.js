import express from "express"
import cors from "cors"

import database from "./firebase-db.js"
import { ref, get, set } from "firebase/database"

// iniciando o express
const app = express();
const port = process.env.PORT ||  3000; 


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota raiz direciona para a pasta front
// app.use("/", express.static("./front"))


app.get('/bandas', function (req, res) {
    // Pega uma referência para o caminho /bandas
    let bandasRef = ref(database, "/bandas")
    get(bandasRef).then((snap) => {
        let listaBandas = snap.val()
        console.log("listaBandas", listaBandas);
        return res.status(200).json(listaBandas)
    })
})

//
//criar um novo registro não há parametro a ser pasado 
// 
app.post('/bandas', function (req, res) {
    console.log("recebi requisição POST com body: ",req.body);
    //pega os dados enviados na requisição
    let dados = req.body
    let id = dados.id
    // Pega uma referência para o caminho /bandas/<ID>
    let novaBandaRef = ref(database, "/bandas/" + id)
    // Adiciona dados no firebase no caminho /bandas/<ID>
    set(novaBandaRef, dados).then(() => {
        console.log("Adicionado")
        return res.status(200).json(dados)
    })
})


//
//criar um novo registro com um parametro a ser passado 
//
app.put('/bandas/:id', function (req, res) {
    console.log("recebi requisição PUT com body: ",req.body);
    //pega os dados enviados na requisição
    let dados = req.body
    let id = req.params.id
    // Pega uma referência para o caminho /bandas/<ID>
    let novaBandaRef = ref(database, "/bandas/" + id)
    // Adiciona dados no firebase no caminho /bandas/<ID>
    set(novaBandaRef, dados).then(() => {
        console.log("Adicionado")
        return res.status(200).json(dados)
    })
})

//
// excluir um registro com o parametro passado
//
app.delete('/bandas/:id', function (req, res) {
    console.log("recebi requisição POST com body: ",req.body);
    let dados = req.body           // le os dados enviados na requisião
    let id = req.params.id         // le o caminho para a referencia
    let novaBandaRef = ref(database, "/bandas/" + id)
    // Remove /bandas/<ID>
    set(novaBandaRef, null).then(() => {
        console.log("Excluido")
        return res.status(200).json(dados)
    })
})


app.listen(port, function () {
    console.log("Aplicação está rodando ...");
})