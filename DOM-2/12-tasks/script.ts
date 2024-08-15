import { $, addError } from "../lib/utils";

document.addEventListener("DOMContentLoaded", main);

type Task = {
  id: number;
  descricao: string;
  dataInicio: Date;
  dataConclusao?: Date;
};

const tasks: Task[] = [];

function main() {
  const button = $("adicionarBtn");
  button?.addEventListener("click", addTask);
}

function updateRows() {
  const tbody = $("tabelaTarefas")?.querySelector("tbody");
  const trows: HTMLTableRowElement[] = [];
  for (let task of tasks) {
    const trow = document.createElement("tr");
    const id = document.createElement("td");
    const descricao = document.createElement("td");
    const dataInicio = document.createElement("td");
    const dataConclusao = document.createElement("td");
    id.textContent = `${task.id}`;
    descricao.textContent = `${task.descricao}`;
    dataInicio.textContent = `${task.dataInicio.toLocaleDateString()}`;
    dataConclusao.textContent = `${task.dataConclusao?.toLocaleDateString()}`;
    trow.appendChild(id);
    trow.appendChild(descricao);
    trow.appendChild(dataInicio);
    trow.appendChild(dataConclusao);
    trows.push(trow);
  }
  if (trows.length) {
    trows.forEach((tr) => tbody?.appendChild(tr));
  }
}

function addTask() {
  const input = $("descricaoTarefa") as HTMLInputElement;
  if (input?.value) {
    const newTask: Task = {
      id: tasks.length + 1,
      descricao: input.value.trim(),
      dataInicio: new Date(),
    };
    tasks.push(newTask);
    updateRows();
  } else {
    addError("descricaoTarefa", "Passa alguma coisa homem...💔");
  }
}
