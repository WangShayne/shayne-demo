const Koa = require("koa")
const static = require("koa-static")
const Router = require("koa-router")

const app = new Koa()
const router = new Router()

router.post("/webhook",function(ctx,next){
    ctx.body="接收到请求"
    next()
})
app.use(router.routes())

app.use(static(__dirname + '/www'));

app.listen(9001, function () {
    console.log("启动成功")
})
