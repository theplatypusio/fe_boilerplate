### 🦦 The Platypus - Frontend Boilerplate

#### 📑 Table of Contents

- [🏎 Quick Start](#-quick-start)
  - [`yarn` or `yarn install`](#yarn-or-yarn-install)
  - [`yarn dev`](#yarn-dev)
  - [`yarn build` & `yarn start 3000`](#yarn-build--yarn-start-3000)
  - [`yarn test`](#yarn-test)

**Table of content created using VSCode extension: [yzhang.markdown-all-in-one](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)

# 🏎 Quick Start

Make sure you read our documentation thoroughly: https://theplatypusio.github.io/frontend/

Run the following command to get your project installed, and up and running.

```sh
git clone git@github.com:theplatypusio/frontend.git
cd frontend
yarn install
```

## `yarn` or `yarn install`

Install the modules defined in the `package.json`, with version from `yarn.lock`

## `yarn dev`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

## `yarn build` & `yarn start 3000`

Builds the app to the `.next` folder.<br>
Once you've runned `yarn build`, you can spin up the Next.js node server by running `yarn start`.
You'll need to suffix the `start` command with the Port (3000), due to our Hosting.

```sh
# Build the project and start the node server
yarn build && yarn start 3000
```

## `yarn test`

Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changed since the last commit.

[Read more about testing.]
https://reactjs.org/docs/testing.html
