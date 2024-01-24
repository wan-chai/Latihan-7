const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
  };

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/', (req, res) => {
    res.send('Salam Muafakat!');
});

// READ API
app.get('/pengguna', async (req, res) => {
    const jawapan = await prisma.pengguna.findMany();
    res.json(jawapan);
});

// Find data based on nama
app.get('/pengguna/:nama', async (req, res) => {
    let username = req.params.nama
    const jawapan = await prisma.pengguna.findUnique({
        where: {
          nama: username,
        },
    })
    res.json(jawapan);

});

// Find data based on nama
app.get('/penggunadaerah/:daerah', async (req, res) => {
    let namadaerah = req.params.daerah
    const jawapan = await prisma.pengguna.findMany({
        where: {
          daerah: namadaerah,
        },
    })
    res.json(jawapan);

});

// CREATE / ADD API untuk satu data
app.post('/pengguna', async (req, res) => {
    const jawapan = await prisma.pengguna.create({ data: req.body });
    res.json(jawapan);
});

// CREATE / ADD API untuk banyak data
app.post('/penggunaramai', async (req, res) => {
    const jawapan = await prisma.pengguna.createMany({
        data: req.body,
        skipDuplicates: true, 
    })
    res.json(jawapan);
});

// Update API guna id
app.put('/pengguna/:userid', async (req, res) => {
    const userid = req.params.userid
    const jawapan = await prisma.pengguna.update({ 
        where: { id : Number(userid) },
        data: req.body
    });
    res.json(jawapan);
});

// Update API guna nama
app.put('/updatepengguna/:nama', async (req, res) => {
    let username = req.params.nama
    console.log(username);
    const jawapan = await prisma.pengguna.update({ 
        where: { nama : String(username) },
        data: req.body
    });
    res.json(jawapan);
});

// DELETE API
app.delete('/pengguna/:userid', async (req, res) => {
    const userid = req.params.userid
    const jawapan = await prisma.pengguna.delete({ 
        where: { id : Number(userid) },
    });
    res.json(jawapan);
});


app.listen(8080, () => {
    console.log('App listening on port 8080!');
});

//Run app, then load http://localhost:8080 in a browser to see the output.
