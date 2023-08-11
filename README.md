# EdgeExt-DinksNewTab

Building a browser extension for Microsoft Edge (chromium).

## Live Extension Marketplace App

[Dinks New Tab](https://microsoftedge.microsoft.com/addons/detail/dinks-new-tab/kpjhoedlohmjcmmjhbpigommekpamkaa)

### TODO

- HighContrast Theme
- Custom Sort

## Developing

Running this app locally will fail because you won't have access to the Chrome APIs.  
Instead, build the app and [load the extension as an unpacked extension](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked).

```bash
# Install the dependencies.
C:\GitHub\EdgeExt-DinksNewTab> npm i

# Build the app.
C:\GitHub\EdgeExt-DinksNewTab> npm run build
```

## Info

This app is built with [Sveltekit](https://kit.svelte.dev/), [sveltekit-adapter-chrome-extension](https://github.com/michmich112/sveltekit-adapter-chrome-extension), [Tailwind CSS](https://tailwindcss.com/docs/installation), and [Daisy UI](https://daisyui.com/components/).
