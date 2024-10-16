# {{package-name}} front-end applications

## **Getting Started**
1. Prerequisites (must have installed)
   - [Node.js](https://nodejs.org/en/) (Node v18+)
   - [PNpm](https://pnpm.js.org/en/installation)
2. [SSH Keys Setup](#ssh-keys-setup)
3. [Access Token Setup](#access-token-setup)
4. [Install Dependencies](#install-dependencies)
5. [Start local Web App](#start-local-web-app)

&nbsp;
## **SSH Keys Setup**
1. Generate a new SSH key pair 
> __HINT__ make note of the newly generated SSH key file name (we'll need it later!)
```bash
ssh-keygen -t rsa -b 4096 -C ""
```
2. Add the public key to your GitHub account (https://github.com/settings/keys)
3. Authorize your ssh key with SSO: click `Configure SSO` dropdown menu > find `{{package-name}}` > click `Authorize`
4. Now you can clone the repo with SSH:
```bash
git clone git@github.com:{{package-name}}/{{root-directory}}.git
```
> __NOTE__ if you came across the following error, follow the [**Multiple SSH Keys Setup**](#multiple-ssh-keys-setup) instructions
```
ERROR: Repository not found. 
fatal: Could not read from remote repository.
```
&nbsp;

## **Multiple SSH Keys Setup**
> __NOTE__ If you already have an existing Github SSH key set up from another Github account, you'll have to point this project to the correct Github host account
1. Open `~/.ssh/config` in your code editor (ie: for VSCode, run `code ~/.ssh/config`)
2. Add the following to the config file:
```bash
Host p6m
  HostName github.com
  AddKeysToAgent yes
  IdentityFile ~/.ssh/id_rsa # or replace 'id_rsa' with the newly generated ssh key file name from earlier
```
3. Run `ssh-add ~/.ssh/[new_generated_ssh_key_file_name]` 
4. Run `ssh-add -l` to confirm the newly generated ssh key file name was successfully added and listed
5. Now you can clone the repo with SSH:
```bash
git clone git@p6m:{{package-name}}/{{root-directory}}.git
```
&nbsp;

## **Access Token Setup**
1. Login to [JFrog Artifactory](https://p6m.jfrog.io/)
2. Once logged in, click the `Profile Icon` (top-right corner) > click `Edit Profile` > click `Generate an Identity Token`
3. Add a descriptive name (ie: PLATFORM_TOKEN-front-end-apps) > click `Next` > copy the `Username` and `Reference Token` (for the next step)
4. Add the `Username` and `Reference Token` to your local machine environment variables (for Macs, it usually goes to `~/.zshrc` or `~/.zprofile`)
```bash
export ARTIFACTORY_USERNAME="...."        # generated 'Username'
export ARTIFACTORY_IDENTITY_TOKEN="****"  # generated 'Reference Token'
export ARTIFACTORY_TOKEN=$(echo -n "$ARTIFACTORY_USERNAME:$ARTIFACTORY_IDENTITY_TOKEN" | base64)
```
   - If changes were made to `~/.zshrc`: run `source ~/.zshrc` and then `restart your terminal` to apply the new environment variable changes
   - If changes were made to `~/.zprofile`: run `source ~/.zprofile` and then `restart your terminal` to apply the new environment variable changes

&nbsp;
## **Install Dependencies**
Once you set up your `GITHUB_TOKEN` environment variable, install the project dependencies with:
```bash
pnpm install
```
&nbsp;

## **Start local app**
```bash
pnpm nx serve <app_name>
```
&nbsp;

## **Run Tests**
#### Web App
```bash
pnpm nx test <app_name>
```
#### Library
```bash
pnpm nx test <library_name>
```
#### All Test
```bash
pnpm nx run-many --target=test --all
```
&nbsp;
## Resources
### p6m Resources
- [p6m Front-End Documentation](https://front-end.docs.p6m.dev)
- [p6m Components Library Storybook](https://front-end.docs.p6m.dev/component-library/index.html)
&nbsp;
