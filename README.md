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

| Property | Description | Example | Default |
|----------| ----------- | ------- | ------- |
| `Org Prefix`| Organization name | ashley | 
| `Org Suffix (Project)`| Project name  | dp | 
| `Front-end application`| Create front-end application to get started | 4 | `4`
| `Front-end applications root directory`| Front-end applications root directory | front-end-apps | `front-end-apps`

For a list of all derived properties and examples of the property relationships, see [archetype.yml](./archetype.yml).

## What's Inside
This archetype is based on the [NX Monorepo](https://nx.dev) template and uses [PNPM](https://pnpm.io)
as its package manager.
