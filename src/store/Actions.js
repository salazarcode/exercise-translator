module.exports = {
    setRegistro(variable, valor){
       return {
           type: "SET_REGISTER",
           payload: {
               variable: variable,
               valor: valor
           }
       } 
    }
}