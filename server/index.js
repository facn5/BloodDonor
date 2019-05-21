const app = require('./app');
const jobs = require('./backroundJob/clearCardsCol');

const port = app.get('port');

app.listen(port, () => {
  jobs.expiredCardsCleaner();
  console.log(`App is running on port ${port}`);
});
