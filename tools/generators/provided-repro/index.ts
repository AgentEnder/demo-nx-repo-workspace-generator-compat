import { strings } from "@angular-devkit/core";
import { libraryGenerator } from "@nrwl/angular/generators";
import { UnitTestRunner } from "@nrwl/angular/src/utils/test-runners";
import { normalizePath, Tree } from "@nrwl/devkit";
import { Linter } from "@nrwl/linter";
import { wrapAngularDevkitSchematic } from "@nrwl/tao/src/commands/ngcli-adapter";
import { join } from "path";

interface Schema {
  name: string;
}

export default async function (tree: Tree, options: Schema) {
  const { name } = options;
  const sharedComponentsDir = "shared/components";

  await libraryGenerator(tree, {
    name,
    directory: sharedComponentsDir,
    strict: true,
    linter: Linter.EsLint,
    unitTestRunner: UnitTestRunner.Jest,
    standaloneConfig: true, // <------------------------- key config for repro, use project.json
  });

  const createdProjectName = normalizePath(
    join(sharedComponentsDir, strings.dasherize(name))
  ).replace(/\//g, "-");

  const schematicsAngularComponentGenerator = wrapAngularDevkitSchematic(
    "@schematics/angular",
    "component"
  );
  await schematicsAngularComponentGenerator(tree, {
    name,
    module: `${createdProjectName}.module.ts`,
    project: createdProjectName,
    style: "scss",
    changeDetection: "OnPush",
    displayBlock: true,
    export: true,
  });
}