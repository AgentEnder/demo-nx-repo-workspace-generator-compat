import { Tree, Rule, SchematicContext } from '@angular-devkit/schematics';

export function copyFileSchematic(options: {from: string, to: string}): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const content = tree.read(options.from);
    tree.create(options.to, content);
    return tree;
  }
}
