const http = require('http');
const fs = require('fs');
const ejs = require('ejs')

const server = http.createServer((req, res) => {
    fs.readFile('index.ejs', 'utf-8', (error, content) => {
        if (error) {
            res.writeHead(500);
            res.end('Erro no servidor');
            return;
        }

        const renderedHtml = ejs.render(content);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(renderedHtml);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
