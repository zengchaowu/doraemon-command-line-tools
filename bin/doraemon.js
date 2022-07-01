#!/usr/bin/env node

import { Command } from "commander";
const program = new Command();

program.name("doraemon");

program
  .command("add")
  .description("add module 2 project")
  .argument("<name>", "name")
  .action((name) => {
    import(`../lib/nuxt-${name}/index.js`).then((result) => {
      result.default.add();
    });
  });

program.parse();
