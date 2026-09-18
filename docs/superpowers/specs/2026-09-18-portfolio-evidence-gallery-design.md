# Portfolio Evidence Gallery Design

## Goal

Turn each project detail page into a concise case study with visible, privacy-safe evidence. The gallery uses synthetic or sanitized examples shaped by the real RaveUp data problems, without publishing company data.

## Design

`project-detail.js` owns an `evidence` array for each of the eight projects. Each item has a stable id, bilingual title/caption/label, and an SVG asset path. The page renders two to four cards and opens an accessible modal for the selected card. A visible label states that the evidence is synthetic or sanitized portfolio evidence. GitHub remains the source for code and long-form documentation.

## Matrix

| Project | Evidence |
| --- | --- |
| 01 SQL E-commerce | staged-to-core flow; DQ/rejected sample; test summary |
| 02 Databricks | Bronze-Silver-Gold flow; CDC/SCD2 example; reliability outcome |
| 03 Influencer | identity resolution; lineage/provenance; reconciliation |
| 04 Marketing | safe input; DQ findings; rejected routing; SQLite output |
| 05 E-commerce Pipeline | Excel-to-SQLite flow; validation; safe analytical output |
| 06 BigQuery | layered warehouse; reconciliation; Terraform/IAM plan |
| 07 AWS Reliability | S3-to-Redshift flow; failure/recovery; CI/safety summary |
| 08 Airflow/dbt | DAG run; dbt model/test summary; recovery drill |

## Safety and acceptance

- No raw RaveUp records, personal data, credentials, or customer identifiers.
- Metrics and limitations remain aligned with audited project records.
- SVG assets are static, crisp, versionable, and contain only safe sample values.
- Existing tests pass; a new test confirms eight projects have two to four evidence items and every referenced asset exists.
- Modal works with click, Enter/Space, Escape, visible focus, and focus return.
