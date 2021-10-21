const express = require("express");

function createRouter(db) {
  const router = express.Router();
  const owner = "";

  // the routes are defined here
    router.post("/event", (req, res, next) => {
    db.query(
        "INSERT INTO events (owner, name, description, date) VALUES (?,?,?,?)",
        [owner, req.body.name, req.body.description, new Date(req.body.date)],
        (error) => {
        if (error) {
            console.error(error);
            res.status(500).json({ status: "error" });
        } else {
            res.status(200).json({ status: "ok" });
        }
        }
    );
    });

    router.get("/event", function (req, res, next) {
        db.query(
        "SELECT id, name, description, date FROM events WHERE owner=? ORDER BY date LIMIT 10 OFFSET ?",
        [owner, 10 * (req.params.page || 0)],
        (error, results) => {
            if (error) {
            console.log(error);
            res.status(500).json({ status: "error" });
            } else {
            res.status(200).json(results);
            }
        }
        );
    });
  return router;
}

module.exports = createRouter;
