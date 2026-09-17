import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

test("Project 08 Airflow and dbt is shown in both portfolio project grids", () => {
  const html = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");

  assert.match(html, /<span class="project-no">08<\/span>[\s\S]*?Airflow \+ dbt E-commerce[\s\S]*?href="https:\/\/github\.com\/bodinkc30-Pete\/airflow-dbt-ecommerce-data-platform"/);
  assert.match(html, /<article class="project-detail-08">[\s\S]*?<span>08<\/span>[\s\S]*?Airflow \+ dbt E-commerce[\s\S]*?href="https:\/\/github\.com\/bodinkc30-Pete\/airflow-dbt-ecommerce-data-platform"/);
});

test("Project 08 uses the transparent Airflow illustration", () => {
  const html = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../style.css", import.meta.url), "utf8");

  assert.match(html, /assets\/illustrations\/projects\/project-08-airflow-dbt-ecommerce-platform\.webp/);
  assert.match(css, /\.v213-projects \.project-detail-08/);
});
