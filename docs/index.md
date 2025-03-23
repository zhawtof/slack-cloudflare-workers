## Slack Cloudflare Workers

[![npm version](https://badge.fury.io/js/slack-cloudflare-workers.svg)](https://badge.fury.io/js/slack-cloudflare-workers) 

The **slack-cloudflare-workers** library is a Slack app development framework designed specifically for **Cloudflare Workers**. This framework draws significant inspiration from Slack's [Bolt framework](https://api.slack.com/tools/bolt), but its design does not strictly follow the [bolt-js](https://github.com/slackapi/bolt-js) blueprint.

Key differences include:

* **TypeScript focused**: Enhances type safety and clarifies typings for developers
* **Lazy listener enabled**: [bolt-python's lazy listener feature](https://slack.dev/bolt-python/concepts#lazy-listeners) is provided out of the box
* **Zero additional dependencies**: No other dependencies required beyond TypeScript types

## Getting Started

Let's begin by using a Cloudflare Workers project template to kickstart our project:

```bash
npm install -g wrangler@latest
npx wrangler init my-slack-app
```

Next, you can integrate the slack-cloudflare-workers library to your project by following these steps:

```bash
cd my-slack-app
npm i slack-cloudflare-workers@latest
```

When you build a Slack app, there are two types. The next steps can be different depending on which type of app you want to build:

* [Simple app](./simple_app.md), which runs for a single Slack workspace
* [OAuth enabled app](./oauth_app.md), which can be installed into multiple workspaces

If you're new to Slack app development, we recommend starting with a simple app!
