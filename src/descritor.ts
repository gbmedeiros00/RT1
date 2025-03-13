export default class Descritor{
    public descrever(empresa){
        let descritor = `Razão Social: ${empresa.razaoSocial}\nNome Fantasia: ${empresa.nomeFantasia}\nCnpj: ${empresa.cnpj}\nEndereço rua: ${empresa.endereco.rua} bairro: ${empresa.endereco.bairro} cidade: ${empresa.endereco.cidade} numero: ${empresa.endereco.numero}\n\nFuncionarios:\n`;
        empresa.funcionarios.forEach(funcionario => {
            descritor += `Nome: ${funcionario.nome}\n`;
            descritor += `matricula: ${funcionario.matricula}\n`;
            descritor += `cpf: ${funcionario.cpf}\n`;
            descritor += `rua: ${funcionario.endereco.rua} bairro: ${funcionario.endereco.bairro} cidade: ${funcionario.endereco.cidade} numero: ${funcionario.endereco.numero}\n`;
        });        
        return descritor
    }
}