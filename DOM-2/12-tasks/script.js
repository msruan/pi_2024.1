document.addEventListener("DOMContentLoaded", main);
var tasks = [];
var contadorId = 1;
function main() {
    console.log("entrei na main");
    var button = $("adicionarBtn");
    button === null || button === void 0 ? void 0 : button.addEventListener("click", addTask);
}
function concludeTask(button) {
    var _a, _b;
    console.log("lindinho");
    var trow = (_a = button.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
    var id = Array.from((_b = trow === null || trow === void 0 ? void 0 : trow.getElementsByClassName("taskId")) !== null && _b !== void 0 ? _b : []).at(0);
    console.log(id === null || id === void 0 ? void 0 : id.textContent);
    var task = tasks.find(function (task) { return task.id === Number(id === null || id === void 0 ? void 0 : id.textContent); });
    console.log(task);
    if (task) {
        task.dataConclusao = new Date();
        updateRows();
    }
}
function updateRows() {
    var _a, _b, _c, _d;
    var tbody = (_a = $("tabelaTarefas")) === null || _a === void 0 ? void 0 : _a.querySelector("tbody");
    var existingTrows = Array.from((_b = document.getElementsByClassName("taskId")) !== null && _b !== void 0 ? _b : []).map(function (id) { var _a; return (_a = Number(id.textContent)) !== null && _a !== void 0 ? _a : NaN; });
    var filteredTasks = tasks.filter(function (task) { return !existingTrows.find(function (id) { return id === task.id; }); });
    var trows = [];
    var _loop_1 = function (task) {
        var trow = document.createElement("tr");
        var id = document.createElement("td");
        var descricao = document.createElement("td");
        var dataInicio = document.createElement("td");
        var dataConclusao = document.createElement("td");
        var actionsButtons = document.createElement("td");
        var finishButton = document.createElement("button");
        var excludeButton = document.createElement("button");
        id.className = "taskId";
        id.textContent = "".concat(task.id);
        descricao.textContent = "".concat(task.descricao);
        dataInicio.textContent = "".concat(task.dataInicio.toLocaleDateString());
        dataConclusao.textContent = "".concat((_d = (_c = task.dataConclusao) === null || _c === void 0 ? void 0 : _c.toLocaleDateString()) !== null && _d !== void 0 ? _d : "----");
        finishButton.textContent = "Concluir";
        finishButton.addEventListener("click", function () { return concludeTask(finishButton); });
        excludeButton.textContent = "Excluir";
        actionsButtons.appendChild(finishButton);
        actionsButtons.appendChild(excludeButton);
        trow.appendChild(id);
        trow.appendChild(descricao);
        trow.appendChild(dataInicio);
        trow.appendChild(dataConclusao);
        trow.appendChild(actionsButtons);
        trows.push(trow);
    };
    for (var _i = 0, filteredTasks_1 = filteredTasks; _i < filteredTasks_1.length; _i++) {
        var task = filteredTasks_1[_i];
        _loop_1(task);
    }
    if (trows.length) {
        trows.forEach(function (tr) { return tbody === null || tbody === void 0 ? void 0 : tbody.appendChild(tr); });
    }
}
function addTask() {
    console.log("chamei da");
    var input = $("descricaoTarefa");
    if (input === null || input === void 0 ? void 0 : input.value) {
        var newTask = {
            id: contadorId++,
            descricao: input.value.trim(),
            dataInicio: new Date(),
        };
        tasks.push(newTask);
        updateRows();
    }
    else {
        addError("descricaoTarefa", "Passa alguma coisa homem...💔");
    }
}
/* -------------------------------------------------------------------------- */
/*                                    UTILS                                   */
/* -------------------------------------------------------------------------- */
function $(id) {
    return document.getElementById(id);
}
function addError(id, message, time) {
    if (time === void 0) { time = 1500; }
    var errorElement = document.createElement("div");
    var errorsArea = document.getElementById(id);
    errorsArea.appendChild(errorElement);
    errorElement.classList.add("mensagemErro");
    errorElement.textContent = message;
    setTimeout(function () {
        errorsArea.removeChild(errorElement);
    }, time);
}
