import app from "./App";
import { env } from "./environment";

app.listen(env.PORT, () => {
    console.log(`server is running on http://localhost:${env.PORT}`)
}); 