# Front-End Ecosystem Archetype
## Usage
To get started, [install archetect](https://archetect.github.io/getting_started.html)
and render this template to your current working directory:
```bash
$ archetect render git@gitlab.com:victoryurkin/archetype-front-end.git
```
For information about interacting with the service, refer to the README at the generated
project's root.

## Prompts
When rendering the archetype, you'll be prompted for the following values:

| Property | Description | Example |
|----------| ----------- | ------- |
| `project`| General name that represents the project that is used to set the entity, service, and RPC stub names. | WaterColor

For a list of all derived properties and examples of the property relationships, see [archetype.yml](./archetype.yml).

## What's Inside
This archetype is based on the [NX Monorepo](https://nx.dev) template and uses [YARN](https://yarnpkg.com)
as its package manager.
