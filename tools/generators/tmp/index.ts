import { Tree, installPackagesTask, updateProjectConfiguration, readProjectConfiguration } from '@nrwl/devkit';

export default async function (host: Tree, schema: {name: string}) {
  const configuration = readProjectConfiguration(host, schema.name);
  updateProjectConfiguration(host, schema.name, {
    ...configuration,
    targets: {
      ...configuration.targets,
      version: {
        executor: '@jscutlery/semver:version'
      },
    },
  });
  return () => {
    installPackagesTask(host);
  };
}
