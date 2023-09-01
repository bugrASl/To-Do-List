import  express  from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const _dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.url({extended : true}));

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})