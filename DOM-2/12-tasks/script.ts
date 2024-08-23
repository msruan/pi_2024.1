document.addEventListener("DOMContentLoaded", main);

type Task = {
  id: number;
  descricao: string;
  dataInicio: Date;
  dataConclusao?: Date;
};

const tasks: Task[] = [];
let contadorId = 1;

function main() {
  console.log("entrei na main");
  const button = $("adicionarBtn");
  button?.addEventListener("click", addTask);
}

function concludeTask(button: HTMLElement) {
  console.log("lindinho");
  const trow = button.parentElement?.parentElement;
  const id = Array.from(trow?.getElementsByClassName("taskId") ?? []).at(0);
  console.log(id?.textContent);
  const task = tasks.find((task) => task.id === Number(id?.textContent));
  console.log(task);
  if (task) {
    task.dataConclusao = new Date();
    updateRows();
  }
}

function updateRows() {
  const tbody = $("tabelaTarefas")?.querySelector("tbody");
  const existingTrows = Array.from(
    document.getElementsByClassName("taskId") ?? []
  ).map((id) => Number(id.textContent) ?? NaN);
  const filteredTasks = tasks.filter(
    (task) => !existingTrows.find((id) => id === task.id)
  );
  const trows: HTMLTableRowElement[] = [];
  for (let task of filteredTasks) {
    const trow = document.createElement("tr");
    const id = document.createElement("td");
    const descricao = document.createElement("td");
    const dataInicio = document.createElement("td");
    const dataConclusao = document.createElement("td");
    const actionsButtons = document.createElement("td");
    const finishButton = document.createElement("button");
    const excludeButton = document.createElement("button");

    id.className = "taskId";
    id.textContent = `${task.id}`;
    descricao.textContent = `${task.descricao}`;
    dataInicio.textContent = `${task.dataInicio.toLocaleDateString()}`;
    dataConclusao.textContent = `${
      task.dataConclusao?.toLocaleDateString() ?? "----"
    }`;
    finishButton.textContent = "Concluir";
    finishButton.addEventListener("click", () => concludeTask(finishButton));
    excludeButton.textContent = "Excluir";
    actionsButtons.appendChild(finishButton);
    actionsButtons.appendChild(excludeButton);
    trow.appendChild(id);
    trow.appendChild(descricao);
    trow.appendChild(dataInicio);
    trow.appendChild(dataConclusao);
    trow.appendChild(actionsButtons);
    trows.push(trow);
  }
  if (trows.length) {
    trows.forEach((tr) => tbody?.appendChild(tr));
  }
}

function addTask() {
  console.log("chamei da");
  const input = $("descricaoTarefa") as HTMLInputElement;
  if (input?.value) {
    const newTask: Task = {
      id: contadorId++,
      descricao: input.value.trim(),
      dataInicio: new Date(),
    };
    tasks.push(newTask);
    updateRows();
  } else {
    addError("descricaoTarefa", "Passa alguma coisa homem...💔");
  }
}

/* -------------------------------------------------------------------------- */
/*                                    UTILS                                   */
/* -------------------------------------------------------------------------- */

function $(id: string) {
  return document.getElementById(id);
}

function addError(id: string, message: string, time: number = 1500) {
  var errorElement = document.createElement("div");
  var errorsArea = document.getElementById(id);
  errorsArea!.appendChild(errorElement);
  errorElement.classList.add("mensagemErro");
  errorElement.textContent = message;
  setTimeout(function () {
    errorsArea!.removeChild(errorElement);
  }, time);
}
