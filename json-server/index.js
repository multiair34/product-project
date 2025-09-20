const fs = require('fs');
const jsonServer = require('json-server');
// const jwt = require('jsonwebtoken');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

// задержка, имитация АПИ
server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
});

// проверка авторизации

server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({message: 'Authorization error'});
    }
    next();
});

server.use(jsonServer.defaults());
server.use(router);

server.post('/login', (req, res) => {
    const { username, password } = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf8'));
    const { users } = db;
    const userFromBd = users.find(
        (user) => user.username === username && user.password === password
    );
    if (userFromBd) {
        return res.json(userFromBd);
    };
    return res.status(403).json({message: 'Invalid username or password'});
});

server.listen(8000, () => {
    console.log('Server started on port 8000');
});
