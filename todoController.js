const ToDo = require("./todoModel");

exports.getAllTodos = async (req, res) => {
  const todos = await ToDo.find();

  res.status(200).render("mainPage", { todos });
};

exports.getTodo = async (req, res) => {
  const todo = await ToDo.findById(req.params.id);

  res.status(201).render("infoPage", { todo });
};

exports.getCreatePage = async (req, res) => {
  res.status(301).render("createPage");
};

exports.createTodo = async (req, res) => {
  try {
    const newTodo = await ToDo.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        newTodo,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getUpdatePage = async (req, res) => {
  const todo = await ToDo.findById(req.params.id);

  res.status(201).render("updatePage", { todo });
};

exports.updateTodo = async (req, res) => {
  try {
    const updatedToDo = await ToDo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedToDo) throw new Error("No ToDo with that ID");

    console.log(updatedToDo);

    res.status(200).json({
      status: "success",
      data: {
        updatedToDo,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const todo = await ToDo.findByIdAndDelete(req.params.id);
    if (!todo) throw new Error("No ToDo with that ID");

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
