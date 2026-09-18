import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { test } from "node:test";

const root = new URL("..", import.meta.url);
const detailScript = readFileSync(new URL("project-detail.js", root), "utf8");
const detailPage = readFileSync(new URL("project.html", root), "utf8");
const routes = [
  "sql-ecommerce", "databricks-lakehouse", "influencer-intelligence", "marketing-campaign",
  "ecommerce-pipeline", "bigquery-enterprise", "aws-reliability", "airflow-dbt"
];

test("every project declares two to four privacy-safe evidence items", () => {
  assert.match(detailScript, /const PROJECT_EVIDENCE\s*=\s*\{/, "project evidence catalog is required");
  const files = [...detailScript.matchAll(/assets\/evidence\/[^"']+\.svg/g)].map((match) => match[0]);
  assert.ok(files.length >= routes.length * 2);
  assert.ok(files.length <= routes.length * 4);
  for (const file of files) assert.equal(existsSync(new URL(file, root)), true, file);
  assert.match(detailScript, /Synthetic \/ Sanitized portfolio evidence/);
  assert.match(detailScript, /หลักฐาน Portfolio แบบสังเคราะห์/);
});

test("detail page provides a gallery mount and accessible modal mount", () => {
  assert.match(detailScript, /data-evidence-gallery/);
  assert.match(detailPage, /data-evidence-modal/);
});
