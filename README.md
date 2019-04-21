# Worktips Electron GUI Wallet

### Introduction
Worktips is a private cryptocurrency based on Monero. Worktips aims to provide a private data transmission layer using a second layer of Service Nodes.
More information on the project can be found on the [website](https://Worktips.network) and in the [whitepaper](https://Worktips.network/whitepaper). Worktips is an open source project, and we encourage contributions from anyone with something to offer.
<p align="center">
 <img src="https://raw.githubusercontent.com/KeeJef/Worktips-electron-gui-wallet/master/src-electron/icons/mrcuug.PNG" width="600">
</p>



### About this project

This is the new electron GUI for Worktips. It is open source and completely free to use without restrictions, anyone may create an alternative implementation of the Worktips Electron GUI that uses the protocol and network in a compatible manner.

Please submit any changes as pull requests to the development branch, all changes are assessed in the development branch before being merged to master, release tags are considered stable builds for the GUI.

#### Pre-requisites
- Download latest [Worktipsd](https://github.com/Worktips-project/Worktips/releases/latest)

#### Commands
```
nvm use 11.9.0
npm install -g quasar-cli
git clone https://github.com/Worktips-project/Worktips-electron-wallet
cd Worktips-electron-wallet
cp path_to_Worktips_binaries/Worktipsd bin/
cp path_to_Worktips_binaries/Worktips-wallet-rpc bin/
npm install
quasar build -m electron -t mat
```

### Adding language support

Adding a new language is fairly simple.

1. Duplicate the language file `src/i18n/en-us.js` and rename it to the relevant language code.
2. Translate all the strings in that duplicated file. Take note that capitalization matters.
3. Add the language to the `languages` array in `src/i18n/index.js`. The `flag` property is the [ISO 3166-1-alpha-2 code](https://www.iso.org/obp/ui/#search/code/) of a country.
   - **NOTE: DO NOT ADD THE LANGUAGE TO `export default`**. Dynamic language loading is handled by the application.
4. Add your language locale to Vue Timeago. Add it in `src/plugins/timeago.js` under `locales`.
   - Ref: https://github.com/egoist/vue-timeago#update-locale-globally
5. Submit a PR with your changes.


## Developed with support from ESN.
- ESN의 지원을 받아 개발되었습니다.
- https://ethersocial.org
