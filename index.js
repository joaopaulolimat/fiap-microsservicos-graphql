const {ApolloServer, gql} = require("apollo-server")

const typeDefs = gql`
    type Produto{
        id: Int
        nome: String,
        categoria: String
        preco: Float
    }
    type Query{
        produto: Produto
    }
`

const resolvers = {
    Query: {
        produto(){
            return {
                id:10,
                nome: "Lápis",
                categoria: "Escritório",
                preco: 50.25
            }
        }
    }
}

const server = new ApolloServer({typeDefs, resolvers})

server.listen().then(({url})=>{
    console.log(`Servidor on-line ${url}`)
})