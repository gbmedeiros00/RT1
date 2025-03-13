"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var empresa_1 = __importDefault(require("./empresa"));
var endereco_1 = __importDefault(require("./endereco"));
var funcionario_1 = __importDefault(require("./funcionario"));
var telefone_1 = __importDefault(require("./telefone"));
var descritor_1 = __importDefault(require("./descritor"));
var endereco = new endereco_1.default(123, 'Av. Paulista', 'Jardim Paulista', 'São Paulo');
var telefone = new telefone_1.default('011', '9-9999-9999');
var funcionario = new funcionario_1.default('Tony Stark', '123456789', '999.999.999-99', endereco, telefone);
var funcionarios = [funcionario];
var telefones = [telefone];
var empresa = new empresa_1.default(funcionarios, endereco, 'ABC LTDA', 'Mercado Online', '999-999-999-999-99');
var descritor = new descritor_1.default;
console.log(descritor.descrever(empresa));
