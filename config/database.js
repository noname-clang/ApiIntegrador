import dotenv from "dotenv"
dotenv.config()

let db = {
    db: process.env.BD_DB,
    user: process.env.BD_USER,
    password: process.env.BD_PASSWORD,

}

if(process.env.NODE_ENV === 'test')
{
    let db = {
        db: process.env.BD_TESTE_DB,
        user: process.env.BD_TESTE_USER,
        password: process.env.BD_TESTE_PASSWORD,
    }
    
}