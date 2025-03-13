import Endereco from "./endereco"
import Funcionario from "./funcionario"

export default class Empresa{
    public razaoSocial: string
    public nomeFantasia: string
    public cnpj: string
    public endereco: Endereco
    public funcionarios: Funcionario[]
    constructor(funcionarios: Funcionario[],endereco: Endereco, razaoSocial: string, nomeFantasia : string, cnpj: string){
        this.razaoSocial = razaoSocial
        this.nomeFantasia = nomeFantasia
        this.cnpj = cnpj
        this.endereco = endereco
        this.funcionarios = funcionarios
    }
}