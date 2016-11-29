# koa-query

Map query values.

FOR KOA 2 ONLY.

```js
import Koa from 'koa'
import query from 'koa-query'

let app = new Koa()
app.use(query({
	num: parseInt,
	flag: i => i === 'true'
}))

app.use(async ctx => {
	ctx.body = [ctx.q.num, ctx.q.flag]
})
```

## License

[MIT](LICENSE)
