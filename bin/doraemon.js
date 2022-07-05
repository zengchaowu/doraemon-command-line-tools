#!/usr/bin/env node

import { Command } from "commander";
const program = new Command();

program.name("doraemon");

program
  .command("nuxt")
  .description("nuxt tools")
  .argument("<add/remove>", "action")
  .argument("<name>", "name")
  .action((action,name) => {
    import(`../lib/nuxt-${name}/index.js`).then((result) => {
      result.default[action]();
    });
  });

program.parse();
