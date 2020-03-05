# Add Yarn to project

In this guide we will see how to install Yarn on Ubuntu 18.

## Install Yarn

Configure repository

```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```

Install Yarn:

```bash
sudo apt update && sudo apt install yarn
```

If you have error:

```
E: The repository 'http://ppa.launchpad.net/pinta-maintainers/pinta-stable/ubuntu bionic Release' does not have a Release file.
```

Remove `pinta-maintainers`:

```bash
sudo rm -rf /etc/apt/sources.list.d/pinta-maintainers-ubuntu-pinta-stable-bionic.list
```

Check installation:

```bash
yarn --version
> 1.22.0
```

## Enable Yarn in repository

Move to you repository

Set Yarn version:

```bash
yarn set version berry
```

## Initialize repository

```bash
yarn init
```

