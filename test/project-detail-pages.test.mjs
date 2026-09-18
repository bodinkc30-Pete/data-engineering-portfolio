import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const root = new URL("..", import.meta.url);
const read = (file) => readFileSync(new URL(file, root), "utf8");
const index = read("index.html");
const detailPage = read("project.html");
const detailScript = read("project-detail.js");

const routes = [
  "sql-ecommerce",
  "databricks-lakehouse",
  "influencer-intelligence",
  "marketing-campaign",
  "ecommerce-pipeline",
  "bigquery-enterprise",
  "aws-reliability",
  "airflow-dbt"
];

test("each portfolio card has an internal project detail route", () => {
  for (const id of routes) {
    assert.match(index, new RegExp(`data-project-id=\"${id}\"`));
    assert.match(index, new RegExp(`href=\"project\\.html\\?id=${id}\"`));
  }
});

test("shared detail page supports all eight project records and separate GitHub access", () => {
  assert.match(detailPage, /data-project-detail/);
  assert.match(detailPage, /data-project-not-found/);
  assert.match(detailScript, /const PROJECT_DETAILS/);
  assert.match(detailScript, /target=\"_blank\"/);
  for (const id of routes) assert.match(detailScript, new RegExp(`\"${id}\"`));
});

test("project details provide Thai and English copy without a company deployment claim", () => {
  assert.match(detailScript, /const COPY/);
  assert.match(detailScript, /portfolio-language/);
  assert.match(detailScript, /does not represent a deployed RaveUp production platform/);
});

test("audited limitations remain visible in affected project details", () => {
  assert.match(detailScript, /97 missing post dates and 35 missing payment statuses/);
  assert.match(detailScript, /Public CI does not rerun the cloud workload/);
  assert.match(detailScript, /does not claim a live ECS, RDS, or ALB deployment/);
});
