import data from "./es-results.json" assert { type: "json" };
import fs from "node:fs";

const ids = data.hits.hits.map(({ _id }) => `"${_id}"`).join(",");

fs.writeFile("./ids.txt", ids, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("DONE");
  }
});
