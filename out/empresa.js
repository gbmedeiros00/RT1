"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Empresa = /** @class */ (function () {
    function Empresa(funcionarios, endereco, razaoSocial, nomeFantasia, cnpj) {
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.cnpj = cnpj;
        this.endereco = endereco;
        this.funcionarios = funcionarios;
    }
    return Empresa;
}());
exports.default = Empresa;
