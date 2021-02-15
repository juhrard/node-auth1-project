const server = require('./routers/server');

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`\n*** Running Server on ${PORT} ***\n`));