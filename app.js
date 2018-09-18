const Koa = require("koa")
const static = require("koa-static")
const Router = require("koa-router")
const shell = require("shelljs")
const token = "S4A^87pZ3=}&QP?r"
const app = new Koa()
const router = new Router()


router.post("/webhook", function (ctx, next) {
    if (shell.exec('git pull origin master"').code !== 0) {
        ctx.body = "更新失败!"
        shell.exit(1);
    } else {
        ctx.body = "更新成功!"
    }

    next()
})

app.use(router.routes())

app.use(static(__dirname + '/www'));

app.listen(9001, function () {
    console.log("启动成功")
})
