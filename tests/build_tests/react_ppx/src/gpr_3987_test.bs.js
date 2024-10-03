// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

let React = require("react");

function makeContainer(text) {
  let container = document.createElement("div");
  container.className = "container";
  let title = document.createElement("div");
  title.className = "containerTitle";
  title.innerText = text;
  let content = document.createElement("div");
  content.className = "containerContent";
  container.appendChild(title);
  container.appendChild(content);
  document.body.appendChild(container);
  return content;
}

function makeProps(value, onChange, param) {
  return {
    value: value,
    onChange: onChange
  };
}

function make(_props) {
  return null;
}

let Gpr3987ReproOk = {
  makeProps: makeProps,
  make: make
};

React.createElement(make, makeProps("test", (param, param$1) => {}, undefined));

function Gpr_3987_test$Gpr3987ReproOk2(Props) {
  return null;
}

let Gpr3987ReproOk2 = {
  make: Gpr_3987_test$Gpr3987ReproOk2
};

React.createElement(Gpr_3987_test$Gpr3987ReproOk2, {
  value: "test",
  onChange: (param, param$1) => {}
});

function Gpr_3987_test$Gpr3987ReproError(Props) {
  return null;
}

let Gpr3987ReproError = {
  make: Gpr_3987_test$Gpr3987ReproError
};

React.createElement(Gpr_3987_test$Gpr3987ReproError, {
  value: "test",
  onChange: (param, param$1) => {}
});

exports.makeContainer = makeContainer;
exports.Gpr3987ReproOk = Gpr3987ReproOk;
exports.Gpr3987ReproOk2 = Gpr3987ReproOk2;
exports.Gpr3987ReproError = Gpr3987ReproError;
/*  Not a pure module */