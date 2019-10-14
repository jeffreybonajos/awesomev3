const express = require("express");
const next = require("next");
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const userRouter = require('./server/routers/user')



app.prepare().then(() => {
  const server = express();

  // server.use((req, res, next) => {
  //   if(req.method === 'GET'){
  //     res.send('disable')
  //   } else {
  //     next()
  //   }
  // })
  server.use(cookieParser());
  server.use(bodyParser.json())
  server.get('/', (req, res) => {
    res.redirect('/login')
  })
  server.use(userRouter);

  server.get("*", (req, res) => {
    return handle(req, res);
  });


  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });

});
  
