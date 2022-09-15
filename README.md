Bancas on line Conexão com FIREBASE

marcação de bancas 
\bancas 
GET, POST, PUT, DELETE 


identificação do usuário
podem ser três tipos de usuários, visitante, coordenador, professor 
\login 
GET, POST, PUT, DELETE 

enviar mensagem de e-mail 
\send 
GET

login 
{
    "id": "prod-01",
    "nome": "O vento levou",
    "email": "email@email.com",
    "senha": "senha" 
    "usuario" : "V" | "C" | "P"
}

banca{
    "id" : "bancax",
    "titulo" : "titulo da banca", 
    "Tipo" : "qualificação" | "mestrado" | "doutorado"
    "data" : 01/01/2002, 
    [
        { 
            "orientador" : "login-01"
            [
                {
                    "banca1" : "dkdkdkdk"
                },
                {
                    "banca2" : "dkdkdkdk"
                },
                {
                    "banca3" : "dkdkdkdk"
                },
                {
                    "banca4" : "dkdkdkdk"
                }
            ]

        }
    ]
}