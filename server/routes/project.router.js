const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// will return data from project and tags table and join by id to get every project's tag"
router.get("/", (req, res) => {
  pool
    .query(
      `SELECT "projects"."id","projects"."name", "description", "thumbnail", "website", "github", "date_completed", "tag_id", "tags"."name" as "tag_name" FROM "projects"
    JOIN "tags" ON "tags"."id"="tag_id"
    ORDER BY "date_completed" DESC;`
    )
    .then(result => {
      projects = result.rows;
      console.log(projects);

      res.send(projects);
    })
    .catch(error => {
      console.log("errors with projects select", error);
      res.sendStatus(500);
    });
});

// will receive new project data and insert into the database on "projects" table .
router.post("/", (req, res) => {
  console.log("project POST route was hit", req.body);
  pool
    .query(
      `INSERT INTO "projects" (name, date_completed, tag_id, github, website, description) 
      VALUES ($1,$2, $3, $4, $5, $6);`,
      [
        req.body.name,
        req.body.selectedDate,
        req.body.selectedTag,
        req.body.gitHubUrl,
        req.body.websiteUrl,
        req.body.description
      ]
    )
    .then(() => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log("errors with feedback insert", error);
      res.sendStatus(500);
    });
});
// Will delete the project for the supplied id
router.delete("/:id", (req, res) => {
  console.log(req.params.id);
  pool
    .query(`DELETE FROM "projects" WHERE "id" IN ($1);`, [req.params.id])
    .then(() => {
      res.sendStatus(204);
    })
    .catch(error => {
      console.log("errors with project delete query", error);
      res.sendStatus(500);
    });
});
module.exports = router;
