    ██╗  ██╗██╗   ██╗██████╗  ██████╗  ██████╗     
    ██║ ██╔╝██║   ██║██╔══██╗██╔═══██╗██╔═══██╗    
    █████╔╝ ██║   ██║██║  ██║██║   ██║██║   ██║    
    ██╔═██╗ ██║   ██║██║  ██║██║   ██║██║   ██║    
    ██║  ██╗╚██████╔╝██████╔╝╚██████╔╝╚██████╔╝    
    ╚═╝  ╚═╝ ╚═════╝ ╚═════╝  ╚═════╝  ╚═════╝     

The Portal will be written in `svelte` and `tailwind`

This means every svelte file will need to include the following:
```html
<script>
  import Tailwindcss from './Tailwindcss.svelte';
</script>
```

# Environmental variables
Since Svelte is a compiler we need to do environmental variables differently than if we were using pure Node. Since we use Rollup we have to define the environmental variables there.

So you'll need to open `rollup.config.js` and something like the below under `plugins`:

```javascript
replace({
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_DB_URL: process.env.FIREBASE_DB_URL,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MSG_SENDER_ID: process.env.FIREBASE_MSG_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID
    }),
```