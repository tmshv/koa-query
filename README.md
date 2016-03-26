# koa-query

Map query values.

FOR KOA 2 ONLY.

```js
import Koa from 'koa';
improt query from 'koa-query';

let app = new Koa();
app.use(query({
  num: parseInt,
  flag: i => i === 'true'
}))
```

## License

[MIT](LICENSE)
