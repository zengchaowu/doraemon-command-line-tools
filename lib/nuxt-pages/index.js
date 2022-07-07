import fs from "fs";
import path from "path";
import ts from "typescript";
import mkdirp from "@doraemon-module/nuxt-functions/lib/mkdirp.js";
import camelcase from "camelcase";
import { exec } from "child_process";

export default async () => {
  const pages = mkdirp(path.join(process.cwd(), "pages"));

  const files = fs.readdirSync(pages);
  for (const file of files) {
    if (fs.statSync(path.join(pages, file)).isDirectory()) {
      const index = path.join(pages, file, "index.vue");

      const code = fs.readFileSync(index, "utf8");
      const regex = /(?<=<script.*?>)[\s\S]*(?=<\/script>)/;
      const script = code.match(regex);

      let source = ts.createSourceFile(
        "index.vue",
        script[0],
        ts.ScriptTarget.Latest
      );
      const properties = source.statements[0].expression.properties;
      const name = "icon";
      let isExist = false;
      for (let propertie of properties) {
        if (propertie.name.escapedText === name) {
          isExist = true;
          break;
        }
      }
      if (!isExist) {
        properties.unshift({
          kind: 296,
          name: {
            kind: 79,
            escapedText: name,
          },
          initializer: {
            kind: 208,
            expression: {
              kind: 79,
              escapedText: "require",
            },
            arguments: [
              {
                kind: 10,
                text: `~/assets/images/icons/${file}.svg`,
              },
            ],
          },
        });
        fs.writeFileSync(
          index,
          code.replace(regex, ts.createPrinter().printFile(source)),
          "utf8"
        );
      }
    }
  }
  exec("yarn lintfix");
};
