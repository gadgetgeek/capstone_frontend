/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: {url: '/', static: true},
    src: {url: '/dist'},
  },
  plugins: ['@snowpack/plugin-svelte', '@snowpack/plugin-dotenv'],
  routes: [
    /* Example: Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    knownEntrypoints: [
      'svelte/store',
      'svelte/internal',
      'svelte-hmr/runtime/hot-api-esm.js',
      'svelte-hmr/runtime/proxy-adapter-dom.js',
      'svelte/internal',
      'svelte-hmr/runtime/hot-api-esm.js',
      'svelte-hmr/runtime/proxy-adapter-dom.js'
    ]
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
