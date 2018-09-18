const Koa = require("koa")
const static = require("koa-static")
const Router = require("koa-router")
const shelljs = require("shelljs")
const token = "S4A^87pZ3=}&QP?r"
const app = new Koa()
const router = new Router()


router.post("/webhook",function(ctx,next){
    console.log(ctx.headers)
    console.log(ctx.request)
    ctx.body="接收到请求"
    next()
})

app.use(router.routes())

app.use(static(__dirname + '/www'));

app.listen(9001, function () {
    console.log("启动成功")
})
