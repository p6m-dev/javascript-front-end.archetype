import { exec } from 'child_process';

function stripIndent(str) {
  const match = str.match(/^[ \t]*(?=\S)/gm);
  if (!match) {
    return str;
  }
  const indent = match.reduce((r, a) => Math.min(r, a.length), Infinity);
  const regex = new RegExp(`^[ \\t]{${indent}}`, 'gm');
  return str.replace(regex, '');
}

// const {dependencies, devDependencies} = readPackageJson();
// const allDependencies = Object.assign(dependencies, devDependencies);

// const dependenciesToUpdate = Object.keys(allDependencies)
//   .filter(dependency => dependency.includes('@nax-tech/'));

// if (dependenciesToUpdate.length === 0) {
//   console.log('No dependencies to update.');
//   process.exit();
// }

// console.log(`Updating ${dependenciesToUpdate.length} dependencies...`);

exec(`pnpm outdated "@nax-tech/*" --format json`, (error, stdout, stderr) => {
  // if (error) {
  //   console.error(`Error updating dependencies: ${error}`);
  // } else {
  //   console.log('Dependencies updated successfully!');
  // }
  if (stdout) {
    // console.log(`stdout: ${stdout}`);
    const needToUpdate = JSON.parse(stdout);
    Object.keys(needToUpdate)
      .forEach(dependency => {
        console.log(
          stripIndent(`Dependency "${dependency}" needs to be updated to ${needToUpdate[dependency].latest}`)
        );
      });
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
  }
});
