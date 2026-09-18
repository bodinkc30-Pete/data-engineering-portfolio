# Bodin Krongchon - Data Engineering Portfolio

Production-style Data Engineering portfolio focused on reliable data systems, real business context, and verifiable project evidence.

## Live Portfolio

https://bodinkc30-pete.github.io/data-engineering-portfolio/

## Resume Downloads

- Thai PDF: https://bodinkc30-pete.github.io/data-engineering-portfolio/assets/resume/Bodin_Krongchon_Resume_TH.pdf
- English PDF: https://bodinkc30-pete.github.io/data-engineering-portfolio/assets/resume/Bodin_Krongchon_Resume_EN.pdf

## Contact

- Email: bodin.kc30@gmail.com
- GitHub: https://github.com/bodinkc30-Pete
- LinkedIn: https://www.linkedin.com/in/bodin-krongchon-a52831418
- LINE ID: `soul_peat`
- LINE Add Friend: https://line.me/ti/p/0fYRPVciDe


## Evidence audit — 18 September 2026

Metrics in the live site are dated evidence checkpoints, not a statement that every platform is running live. This review inspected public READMEs, tracked files, workflows, selected evidence files, and recorded hosted CI; it did not rerun private data or deploy cloud infrastructure.

| Display | Repository | Scope verified |
|---|---|---|
| 01 | [sql-ecommerce-data-engineering](https://github.com/bodinkc30-Pete/sql-ecommerce-data-engineering) | 193 tests, 4 expected private-data skips |
| 02 | [databricks-lakehouse-medallion-pipeline](https://github.com/bodinkc30-Pete/databricks-lakehouse-medallion-pipeline) | repository CI; Databricks runtime evidence is recorded separately |
| 03 | [influencer-campaign-intelligence-pipeline](https://github.com/bodinkc30-Pete/influencer-campaign-intelligence-pipeline) | 161 regression tests plus synthetic PostgreSQL integration |
| 04 | [marketing-campaign-data-platform](https://github.com/bodinkc30-Pete/marketing-campaign-data-platform) | recorded DQ includes 97 missing dates and 35 missing statuses; no hosted CI |
| 05 | [ecommerce-data-pipeline](https://github.com/bodinkc30-Pete/ecommerce-data-pipeline) | 105-row DQ snapshot; no Docker or hosted CI |
| 06 | [bigquery-enterprise-data-platform](https://github.com/bodinkc30-Pete/bigquery-enterprise-data-platform) | 12/12 recorded runtime checks; public CI is static/publication scope |
| 07 | [aws-production-data-engineering-reliability-platform](https://github.com/bodinkc30-Pete/aws-production-data-engineering-reliability-platform) | 640 passed at public CI checkpoint; AWS evidence is historical |
| 08 | [airflow-dbt-ecommerce-data-platform](https://github.com/bodinkc30-Pete/airflow-dbt-ecommerce-data-platform) | 370 + 37 tests and 257 dbt build results at hosted checkpoint |

Small projects remain deliberately local, source-backed ETL projects. Do not label a recorded DQ output as hosted CI. Public cloud claims are limited to the evidence and workflows actually documented in each repository.
