const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

const obj = [
  { id: "1", name: "divya" },
  { id: "2", name: "mishra" },
  { id: "3", name: "mishra" },
  { id: "4", name: "mishra" },
  { id: "5", name: "divya" },
  { id: "6", name: "mishra" },
];

app.get("/elements", (req, res) => {
  let cursor = parseInt(req.query.cursor, 10);
  let limit = parseInt(req.query.limit, 10);
  const pagination = obj.slice(cursor, cursor + limit);
  const hasMore = cursor + limit < obj.length;
  cursor = hasMore ? cursor + limit : null;
  res.json({ pagination, cursor, hasMore });
});

app.listen(PORT, () => {
  console.log("server is running");
});
