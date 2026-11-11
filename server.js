
const http = require("http");
const fs = require("fs");
const path = require("path");

const servidor = http.createServer((req, res) => {
    const arquivo = path.join(__dirname, "index.html");

    fs.readFile(arquivo, (erro, conteudo) => {
        if (erro) {
            res.writeHead(500);
            res.end("Erro ao carregar o site.");
            return;
        }

        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        });

        res.end(conteudo);
    });
});

servidor.listen(4173, () => {
    console.log("Site disponível em http://localhost:4173");
});
