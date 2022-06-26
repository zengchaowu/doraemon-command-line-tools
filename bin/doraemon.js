#!/usr/bin/env node

const { Command } = require("commander");
const program = new Command();

program.name("doraemon");

program
  .command("add")
  .description("add module 2 project")
  .argument("<name>", "name")
  .action((name) => {
    require(`../lib/nuxt-${name}.js`).add();
  });

program.parse();
