## Getting Started


## How to buildN

NODE_ENV=production bun/npm run build

## Note
Make sure you have configure `meta-config.json`, inside baseUrl, DO NOT ADD '/' (slash) in the end.

DO
`https://gnfi.com/insight`

DON'T 
`https://gnfi.com/insight/`

`<img/>` src must start with baseUrl+'/assets/path/image-file'