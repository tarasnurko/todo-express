import axios from "axios";

export async function createTodo() {
  const createBtn = document.querySelector(".create-block__btn-create");

  createBtn.addEventListener("click", async (event) => {
    event.preventDefault();

    const title = document.querySelector(".create-input__title").value;
    const description = document.querySelector(
      ".create-input__description"
    ).value;
    const difficulty = document.querySelector(".create-input__select").value;
    const finished = document.querySelector("#isFinished").checked;
    const important = document.querySelector("#isImportant").checked;

    const data = {
      title,
      description,
      difficulty,
      finished,
      important,
    };

    try {
      const res = await axios({
        method: "POST",
        url: "http://127.0.0.1:3000/create",
        data,
      });

      if (res.data.status === "success") {
        alert("ToDo was created successfully");
        location.assign("/");
      }
    } catch (err) {
      alert(err.response.data.message.message);
    }
  });
}

export async function updateTodo() {
  const updateBtn = document.querySelector(".create__btn-update");

  updateBtn.addEventListener("click", async (event) => {
    event.preventDefault();

    const title = document.querySelector(".create-input__title").value;
    const description = document.querySelector(
      ".create-input__description"
    ).value;
    const difficulty = document.querySelector(".create-input__select").value;
    const finished = document.querySelector("#isFinished").checked;
    const important = document.querySelector("#isImportant").checked;

    const data = {
      title,
      description,
      difficulty,
      finished,
      important,
    };

    const todoId = window.location.href.split("/")[4];
    const url = `http://127.0.0.1:3000/todo/${todoId}/update`;

    try {
      const res = await axios({
        method: "PATCH",
        url,
        data,
      });

      if (res.data.status === "success") {
        alert("ToDo was updated successfully");
        location.assign("/");
      }
    } catch (err) {
      alert(err.response.data.message.message);
    }
  });
}

export async function deleteTodo() {
  const deleteBtn = document.querySelector(".create__btn-delete");

  deleteBtn.addEventListener("click", async (event) => {
    event.preventDefault();

    const todoId = window.location.href.split("/")[4];
    const url = `http://127.0.0.1:3000/todo/${todoId}/update`;

    try {
      const res = await axios({
        method: "DELETE",
        url,
      });

      if (res.status === 204) {
        alert("ToDo was deleted successfully");
        location.assign("/");
      }
    } catch (err) {
      alert(err.response.data.message.message);
    }
  });
}
