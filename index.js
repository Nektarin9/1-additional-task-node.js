const yargs = require("yargs");
const pkg = require("./package.json");
const chalk = require("chalk");
const {
  addNote,
  printNotes,
  removeNote,
  updateNotes,
} = require("./notes.controller");

yargs.version(pkg.version);

yargs.command({
  command: "add",
  describe: "Add new note to list",
  builder: {
    title: {
      type: "string",
      describe: "Note title",
      demandOption: true,
    },
  },
  handler({ title }) {
    addNote(title);
  },
});

yargs.command({
  command: "remove",
  describe: "remove notes",
  async handler({ id }) {
    removeNote(id);
  },
});

yargs.command({
  command: "list",
  describe: "Print all notes",
  async handler() {
    printNotes();
  },
});

yargs.command({
  command: "edit",
  describe: "Edit note by id",
  async handler({ id, title }) {
    updateNotes(id, title);
  },
});

yargs.parse();

const os = require("os");
const path = require("path");
console.log(chalk.green(path.extname(__filename)));
