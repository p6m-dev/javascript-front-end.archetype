<img src="logo.svg" width="128">

# Front-End Archetype

## Usage
To get started, [install archetect](https://archetect.github.io/getting_started.html)
and render this template to your current working directory:

```bash
archetect render git@github.com:p6m-dev/javascript-front-end.archetype.git
```
For information about interacting with the service, refer to the README at the generated project's root.

## Prompts
When rendering the archetype, you'll be prompted for the following values:

| Property | Description | Example | Default | Answer File Field | Optional |
|----------| ----------- | ------- | ------- | ---------------- | -------- |
| Organization Name | Organization identifier | ashley | - | org-name | No |
| Project Name | Solution identifier | dp | - | solution-name | No |
| Root Directory | Root directory name | front-end-apps | front-end-apps | project-name | Yes |
| Artifactory Host | Artifactory host URL | p6m.jfrog.io | p6m.jfrog.io | artifactory-host | Yes |
| Install Dependencies | Run pnpm install after setup | y | y | pnpm_install | Yes |
| Initialize Git | Initialize Git repository | y | y | git_init | Yes |
| Application Type | Initial application type | React | React | app_type | Yes |
| Application Name | Application name | web | - | app_name | No |

For a list of all derived properties and examples of the property relationships, see [archetype.yml](./archetype.yml).

## What's Inside
This archetype is based on the [NX Monorepo](https://nx.dev) template and uses [PNPM](https://pnpm.io)
as its package manager.
