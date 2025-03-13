"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Descritor = /** @class */ (function () {
    function Descritor() {
    }
    Descritor.prototype.descrever = function (empresa) {
        var descritor = "Raz\u00E3o Social: ".concat(empresa.razaoSocial, "\nNome Fantasia: ").concat(empresa.nomeFantasia, "\nCnpj: ").concat(empresa.cnpj, "\nEndere\u00E7o rua: ").concat(empresa.endereco.rua, " bairro: ").concat(empresa.endereco.bairro, " cidade: ").concat(empresa.endereco.cidade, " numero: ").concat(empresa.endereco.numero, "\n\nFuncionarios:\n");
        empresa.funcionarios.forEach(function (funcionario) {
            descritor += "Nome: ".concat(funcionario.nome, "\n");
            descritor += "matricula: ".concat(funcionario.matricula, "\n");
            descritor += "cpf: ".concat(funcionario.cpf, "\n");
            descritor += "rua: ".concat(funcionario.endereco.rua, " bairro: ").concat(funcionario.endereco.bairro, " cidade: ").concat(funcionario.endereco.cidade, " numero: ").concat(funcionario.endereco.numero, "\n");
        });
        return descritor;
    };
    return Descritor;
}());
exports.default = Descritor;
