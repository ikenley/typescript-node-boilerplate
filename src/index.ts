import app from "./app";
import config from "./config";

const port = config.port;

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
