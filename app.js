const Koa = require("koa")
const static = require("koa-static")

const app = new Koa()

app.use(static(__dirname + '/www'));

app.listen(9001, function () {
    console.log("启动成功a ")
})
