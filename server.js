const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Enable CORS for all origins (allow *)
app.use(cors({origin:true}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/users', async (req, res) => {
    try {
        const dynamicUrl = `http://localhost:8083${req.originalUrl}`;
        console.log(`Redirecting to: ${dynamicUrl}`);

        const response = await axios({
            url: dynamicUrl,
            method: req.method,
            headers: req.headers,
            data: req.body,
            params: req.query
        });

        res.status(response.status).send(response.data);

    } catch (error) {
        console.error(`Error forwarding request: ${error.message}`);
        if (error.response) {
            res.status(error.response.status).send(error.response.data);
        } else {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
});

app.use('/inventory', async (req, res) => {
    try {
        const dynamicUrl = `http://localhost:8082${req.originalUrl}`;
        console.log(`Redirecting to: ${dynamicUrl}`);

        const response = await axios({
            url: dynamicUrl,
            method: req.method,
            headers: req.headers,
            data: req.body,
            params: req.query
        });

        res.status(response.status).send(response.data);

    } catch (error) {
        console.error(`Error forwarding request: ${error.message}`);
        if (error.response) {
            res.status(error.response.status).send(error.response.data);
        } else {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
});

app.use('/feedback', async (req, res) => {
    try {
        const dynamicUrl = `http://localhost:8081${req.originalUrl}`;
        console.log(`Redirecting to: ${dynamicUrl}`);

        const response = await axios({
            url: dynamicUrl,
            method: req.method,
            headers: req.headers,
            data: req.body,
            params: req.query
        });

        res.status(response.status).send(response.data);

    } catch (error) {
        console.error(`Error forwarding request: ${error.message}`);
        if (error.response) {
            res.status(error.response.status).send(error.response.data);
        } else {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
});

app.use('/orders', async (req, res) => {
    try {
        const dynamicUrl = `http://localhost:8084${req.originalUrl}`;
        console.log(`Redirecting to: ${dynamicUrl}`);

        const response = await axios({
            url: dynamicUrl,
            method: req.method,
            headers: req.headers,
            data: req.body,
            params: req.query
        });

        res.status(response.status).send(response.data);

    } catch (error) {
        console.error(`Error forwarding request: ${error.message}`);
        if (error.response) {
            res.status(error.response.status).send(error.response.data);
        } else {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
});
// Start the server
app.listen(PORT, () => {
    console.log(`API Gateway is running on port ${PORT}`);
});
