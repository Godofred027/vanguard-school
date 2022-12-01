import app from "./app";
import "./connection";
import "./libs/initialSetup";

app.listen(app.get("port"), () => {
  console.log(`Server is running on port`, app.get("port"));
});
