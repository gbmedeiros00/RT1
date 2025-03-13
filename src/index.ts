import Empresa from "./empresa";
import Endereco from "./endereco";
import Funcionario from "./funcionario";
import Telefone from "./telefone";
import Descritor from "./descritor";

let endereco = new Endereco(123,'Av. Paulista', 'Jardim Paulista', 'São Paulo')
let telefone = new Telefone('011', '9-9999-9999')
let funcionario = new Funcionario('Tony Stark','123456789','999.999.999-99',endereco,telefone)
let funcionarios = [funcionario]
let telefones = [telefone]
let empresa = new Empresa(funcionarios,endereco,'ABC LTDA','Mercado Online','999-999-999-999-99')

let descritor = new Descritor
console.log(descritor.descrever(empresa))