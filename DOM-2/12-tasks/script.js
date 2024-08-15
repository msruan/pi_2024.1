"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../lib/utils");
document.addEventListener("DOMContentLoaded", main);
var tasks = [];
function main() {
    var button = (0, utils_1.$)("adicionarBtn");
    button === null || button === void 0 ? void 0 : button.addEventListener("click", addTask);
}
function updateRows() {
    var _a, _b;
    var tbody = (_a = (0, utils_1.$)("tabelaTarefas")) === null || _a === void 0 ? void 0 : _a.querySelector("tbody");
    var trows = [];
    for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
        var task = tasks_1[_i];
        var trow = document.createElement("tr");
        var id = document.createElement("td");
        var descricao = document.createElement("td");
        var dataInicio = document.createElement("td");
        var dataConclusao = document.createElement("td");
        id.textContent = "".concat(task.id);
        descricao.textContent = "".concat(task.descricao);
        dataInicio.textContent = "".concat(task.dataInicio.toLocaleDateString());
        dataConclusao.textContent = "".concat((_b = task.dataConclusao) === null || _b === void 0 ? void 0 : _b.toLocaleDateString());
        trow.appendChild(id);
        trow.appendChild(descricao);
        trow.appendChild(dataInicio);
        trow.appendChild(dataConclusao);
        trows.push(trow);
    }
    if (trows.length) {
        trows.forEach(function (tr) { return tbody === null || tbody === void 0 ? void 0 : tbody.appendChild(tr); });
    }
}
function addTask() {
    var input = (0, utils_1.$)("descricaoTarefa");
    if (input === null || input === void 0 ? void 0 : input.value) {
        var newTask = {
            id: tasks.length + 1,
            descricao: input.value.trim(),
            dataInicio: new Date(),
        };
        tasks.push(newTask);
        updateRows();
    }
    else {
        (0, utils_1.addError)("descricaoTarefa", "Passa alguma coisa homem...💔");
    }
}
