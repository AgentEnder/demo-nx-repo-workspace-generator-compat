import { Tree } from '@nrwl/devkit';
import {
  overrideCollectionResolutionForTesting,
  wrapAngularDevkitSchematic,
} from '@nrwl/devkit/ngcli-adapter';
import * as path from 'path';

interface Schema {
  name: string;
}

export default async function (tree: Tree, options: Schema) {

  tree.write('test-file.txt', 'lorem-ipsum')

  overrideCollectionResolutionForTesting({
    '@local/schematics': path.join(__dirname, '../collection.json'),
  });

  const schematicsAngularComponentGenerator = wrapAngularDevkitSchematic(
    '@local/schematics',
    'copy'
  );
  await schematicsAngularComponentGenerator(tree, {
    from: 'test-file.txt',
    to: 'copied-file.txt'
  });
}
