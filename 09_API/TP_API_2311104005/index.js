const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const app = express();
const port = 3000; 

app.use(express.json());


let mahasiswaList = [
  { Nama: 'Nanta', Nim: '2311104005' },
  { Nama: 'Lemon', Nim: '2311104033' },
  { Nama: 'Maspe', Nim: '2311104040' }
];

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Mahasiswa-API',
      version: '1.0.0',
      description: 'API Buat manage mahasiswa uhuyy',
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: ['./index.js'], 
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * components:
 *   schemas:
 *     Mahasiswa:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         nim:
 *           type: string
 */

/**
 * @swagger
 * /api/mahasiswa:
 *   get:
 *     summary: Get all mahasiswa
 *     responses:
 *       200:
 *         description: List of mahasiswa
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Mahasiswa'
 *
 *   post:
 *     summary: Add a new mahasiswa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Mahasiswa'
 *     responses:
 *       201:
 *         description: Mahasiswa added
 *
 * /api/mahasiswa/{id}:
 *   get:
 *     summary: Get a mahasiswa by index
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Index of mahasiswa
 *     responses:
 *       200:
 *         description: Mahasiswa data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Mahasiswa'
 *       404:
 *         description: Mahasiswa not found
 *
 *   delete:
 *     summary: Delete a mahasiswa by index
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Index of mahasiswa
 *     responses:
 *       200:
 *         description: Mahasiswa deleted
 *       404:
 *         description: Mahasiswa not found
 */


app.get('/api/mahasiswa', (req, res) => {
  res.json(mahasiswaList);
});


app.get('/api/mahasiswa/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < mahasiswaList.length) {
    res.json(mahasiswaList[id]);
  } else {
    res.status(404).send('Mahasiswa not found');
  }
});


app.post('/api/mahasiswa', (req, res) => {
  const newMahasiswa = req.body;
  mahasiswaList.push(newMahasiswa);
  res.status(201).send('Mahasiswa added');
});


app.delete('/api/mahasiswa/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < mahasiswaList.length) {
    mahasiswaList.splice(id, 1);
    res.send('Mahasiswa deleted');
  } else {
    res.status(404).send('Mahasiswa not found');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Swagger docs at http://localhost:${port}/api-docs`);
});
