"use strict";

const TRANSLATIONS = {
  en: {
    "a11y.skip":"Skip to content","lang.label":"Language",
    "nav.home":"Home","nav.projects":"Projects","nav.proof":"Engineering Proof","nav.capabilities":"Capabilities","nav.experience":"Experience","nav.about":"About","nav.credentials":"Credentials","nav.contact":"Contact",
    "resume.button":"Resume TH / EN","resume.eyebrow":"RESUME","resume.title":"Thai & English Resumes","resume.note":"View or download image and PDF versions of my Thai and English resumes.","resume.noteShort":"View my Thai and English resumes.","resume.th":"Resume TH","resume.en":"Resume EN","resume.thLabel":"Thai Resume","resume.enLabel":"English Resume","resume.viewImage":"View Image","resume.downloadImage":"Download Image","resume.viewPdf":"View PDF","resume.downloadPdf":"Download PDF",
    "status.available":"Available for opportunities",
    "hero.badge":"DATA ENGINEER","hero.motto":"Build • Operate • Improve","hero.summary":"I build reliable, scalable, production-style data systems that turn real business data into trusted, actionable information.","hero.ctaProjects":"View My Projects",
    "featured.badge":"FEATURED PROJECT","featured.summary":"Databricks Lakehouse built on Apache Spark with Bronze-Silver-Gold, Delta Lake, CDC, SCD Type 2, data quality, reliability labs, monitoring, CI, and measured performance tuning.","featured.quality":"Quality","featured.recovery":"Recovery","featured.monitoring":"Monitoring","featured.view":"View Project Details","featured.evidence":"Engineering Evidence",
    "flow.source":"Source","flow.raw":"Raw","flow.clean":"Clean","flow.business":"Business","flow.trusted":"Trusted",
    "metric.completedProjects":"Completed Projects","metric.verifiedRepositories":"Verified repositories","metric.reliabilityLabs":"Reliability Labs","metric.automatedTests":"Automated Tests","metric.lineageEdges":"Lineage Edges","metric.governanceAssets":"Governance Assets","metric.factRows":"Fact Rows","metric.performanceEvidence":"Perf. Evidence","metric.tables":"Tables","metric.views":"Views","metric.indexes":"Indexes","metric.tests":"Tests","metric.labs":"Labs","metric.rows":"Rows","metric.evidence":"Evidence","metric.master":"Master","metric.aliases":"Aliases","metric.core":"Core","metric.records":"Records","metric.outputs":"Outputs","metric.gates":"Gates","metric.privacy":"Privacy","metric.flow":"Flow",
    "tech.title":"Tech Stack",
    "projects.eyebrow":"FEATURED PROJECTS","projects.heading":"Completed Projects","projects.lead":"Production-style data engineering projects with real-world business context and verified evidence.","projects.viewAll":"View All Projects","projects.viewProject":"View Project","projects.privateRepo":"Private Repo • Verified Evidence","projects.fullHeading":"Engineering solutions to real data challenges.","projects.fullHeading.pre":"Engineering solutions to","projects.fullHeading.accent":"real data","projects.fullHeading.post":"challenges","projects.fullLead":"Eight portfolio projects with different evidence scopes. Metrics are recorded checkpoints, not a claim that every system is running live. Reviewed 18 September 2026; see the linked repositories for evidence and limitations.",
    "project.sql.summary":"Reliable SQL data platform with incremental load, data quality, monitoring, API serving, and recovery.","project.sql.detail":"A reliability-focused SQL platform with incremental loading, idempotency, quality and freshness gates, monitoring, recovery, Airflow, read-only API serving, Docker, and CI.",
    "project.databricks.summary":"Databricks Lakehouse on Apache Spark with Delta Lake, Bronze-Silver-Gold, CDC, SCD2, data quality, reliability labs, CI, and measured Spark optimization.","project.databricks.detail":"A Databricks Lakehouse built on Apache Spark that demonstrates Delta Lake medallion architecture, CDC, SCD Type 2, data quality, controlled failure labs, monitoring, troubleshooting, CI, and measured Spark performance tuning.",
    "project.influencer.summary":"Governed influencer master data connecting source provenance, campaign history, and explainable matching decisions.","project.influencer.detail":"A deterministic Master Data and PostgreSQL project that resolves fragmented influencer identities into a traceable Golden Master, preserves campaign and performance history, and supports explainable human-reviewed matching.",
    "project.marketing.summary":"Payment-data validation, rejected-record routing, SQLite analytics, and privacy-safe portfolio outputs.","project.marketing.detail":"Python/SQLite payment pipeline with rejected-record routing and six published outputs. Recorded DQ: 268 rows, 97 missing post dates, and 35 missing payment statuses; these are reported, not silently filled. Private source data is required for a full rerun; no hosted CI is configured.",
    "project.ecommerce.summary":"Multi-source Excel pipeline with validation, transformation, SQLite analytics, and portfolio-safe outputs.","project.ecommerce.detail":"Python/Pandas Excel ETL with SQLite analytics and five published outputs. The recorded 105-row sample has zero findings in its configured DQ report. Raw Excel files are private; Docker and hosted CI are not configured in this repository.",
    "project.bigquery.summary":"Production-oriented GCP/BigQuery platform with layered warehouse modeling, dbt, reconciliation, security, Terraform, and CI/CD.","project.bigquery.detail":"GCP/BigQuery warehouse with dbt, Terraform, incremental processing, reconciliation, governance and synthetic financial operations. Published runtime evidence records 12/12 checks and eight RAW tables. Public CI checks publication safety, Python syntax and Terraform formatting; it does not rerun the cloud workload.",
    "project.aws.summary":"AWS data platform for retail, vending, and payment workflows with SQL, Python, Glue, S3, Redshift, orchestration, data quality, and reliability engineering.","project.aws.detail":"A production-style AWS data engineering platform covering retail, vending, and payment data with SQL/Python pipelines, Glue and PySpark transformations, S3 landing, Redshift warehousing, dbt, Airflow, Terraform, data quality, monitoring, security, recovery, and CI/CD evidence.",
    "project.airflow.summary":"Production-oriented e-commerce platform with Airflow orchestration, PostgreSQL, dbt warehouse layers, data quality, monitoring, recovery drills, Docker, and CI.","project.airflow.detail":"Eight source contracts, PostgreSQL, Airflow and dbt with monitoring, recovery drills and Docker. Hosted CI checkpoint: 370 service-free tests, 37 PostgreSQL tests and 257 dbt build results passed. AWS infrastructure is reference/plan evidence; live ECS/RDS/ALB runtime is not deployed.",
    "proof.title":"Engineering Proof","proof.teaser":"Build beyond the happy path: data quality, monitoring, recovery, lineage, CI/CD, and performance evidence.","proof.viewAll":"View All Evidence","proof.fullHeading":"I don't only build the happy path.","proof.fullLead":"The portfolio proves that systems can be tested, observed, diagnosed, recovered, and verified — not only executed successfully.","proof.dq.title":"Data Quality","proof.dq.text":"Contracts, thresholds, reconciliation, quarantine, validation, and regression checks.","proof.lineage.title":"Lineage & Governance","proof.lineage.text":"Dataset lineage, runtime lineage, asset registry, PII classification, masking, and hashing.","proof.monitoring.title":"Monitoring & Alerts","proof.monitoring.text":"Run audits, step telemetry, SLA signals, alert fingerprints, occurrence history, and lifecycle.","proof.recovery.title":"Recovery & Reliability","proof.recovery.text":"Controlled failures, retry, RCA, recovery contracts, backfill, and recovery validation.","proof.performance.title":"Performance Tuning","proof.performance.text":"Query plans, benchmark evidence, indexing, Spark tuning, and regression protection.","proof.cicd.title":"CI/CD & Reproducibility","proof.cicd.text":"GitHub Actions, automated tests, Docker validation, reproducible runtime checks, and release evidence before delivery.","proof.loopTitle":"DATA ENGINEERING OPERATING LOOP",
    "cap.title":"Core Capabilities","cap.teaser":"Capabilities grounded in completed projects, from ETL and modeling to reliability and serving.","cap.viewAll":"View Capabilities","cap.fullHeading":"Core tools backed by completed project evidence.","cap.fullLead":"Capability cards describe what I can build and operate today — not a future learning roadmap.","cap.pipeline.title":"Data Pipeline Development","cap.pipeline.text":"Batch • Incremental • CDC • SCD","cap.modeling.title":"Data Modeling","cap.modeling.text":"Relational • Warehouse • Medallion","cap.orchestration.title":"Orchestration","cap.orchestration.text":"Airflow • Scheduling • Recovery","cap.quality.title":"Data Quality","cap.quality.text":"Validation • Reconciliation • Freshness","cap.api.title":"API & Serving","cap.api.text":"FastAPI • Read-only access • Safe outputs","cap.devops.title":"DevOps & CI/CD","cap.devops.text":"Docker • GitHub Actions • Reproducibility","cap.db.title":"Databases","cap.analytics.title":"Analytics & Business Context","cap.analytics.text":"E-commerce • Influencer • Campaign • Payment","cap.reliability.title":"Observability & Reliability","cap.reliability.text":"Monitoring • Alerts • Retry • Recovery","cap.cloud.title":"Cloud & Infrastructure as Code","cap.cloud.text":"GCP/BigQuery • AWS • Terraform",
    "exp.title":"Experience","exp.role":"Data Engineer — E-commerce","exp.teaser":"Real operational context across e-commerce, influencer, campaign, payment, and reporting workflows.","exp.viewFull":"View Full Experience","exp.fullHeading":"Real business context behind the engineering projects.","exp.fullLead":"Portfolio projects extend recurring operational data pain points into engineering labs. They do not claim that every portfolio technology is deployed in production at the company.","exp.present":"PRESENT","exp.current":"CURRENT","exp.bullet1":"Work with recurring e-commerce, influencer, campaign, payment, and reporting data.","exp.bullet2":"Reduce repetitive preparation by structuring reusable data workflows and validation steps.","exp.bullet3":"Connect project engineering decisions back to real business pain points instead of isolated demos.","exp.bullet4":"Keep public portfolio evidence privacy-safe and separate from private company data.","exp.domains":"DATA DOMAINS",
    "about.heading":"Business context first. Engineering tools second.","about.p1":"My portfolio connects hands-on e-commerce, influencer, campaign, payment, and reporting work with reliable data engineering. The goal is to reduce repetitive preparation, improve data trust, and give more time back to analysis and better decisions.","about.p2":"I prefer systems that are observable, recoverable, testable, and explainable — not just pipelines that happen to finish successfully.","about.problem.title":"Problem Solver","about.problem.text":"Start with the business problem and the data pain behind it.","about.builder.title":"Builder","about.builder.text":"Create reusable systems that can be operated and extended.","about.owner.title":"Owner","about.owner.text":"Trace failures through evidence and verify recovery.","about.learner.title":"Learner","about.learner.text":"Keep future learning separate from verified capability.",
    "cred.title":"Credentials","cred.verified":"Verified Certificate","cred.view":"View Certificate","cred.fullHeading":"Credentials that can be opened and verified","cred.fullLead":"Only credentials with a confirmed public link are shown here.",
    "contact.title":"Let's Connect","contact.teaser":"Open to Data Engineering opportunities and technical conversations.","contact.open":"Open Contact","contact.send":"Send Message","contact.heading":"Let's build reliable data systems.","contact.fullLead":"For Data Engineering opportunities, portfolio review, or technical conversations, use the channels below.","contact.openLinkedIn":"Open LinkedIn profile","contact.line":"LINE","contact.lineAction":"Add me on LINE","contact.certificate":"Certificate",

    "featured.productionStyle":"PRODUCTION-STYLE","section.projects":"02 / PROJECTS","section.proof":"03 / ENGINEERING PROOF","section.capabilities":"04 / CAPABILITIES","section.experience":"05 / EXPERIENCE","section.about":"06 / ABOUT","section.credentials":"07 / CREDENTIALS","section.contact":"08 / CONTACT",
    "exp.location":"Bangkok, Thailand · Hybrid","exp.period":"Aug 2025 – Present","exp.summary":"I connect recurring operational data work with reusable engineering practices that reduce manual preparation and improve trust in analysis.",
    "exp.group1.title":"Data Integration & Organization","exp.group1.text":"Consolidate recurring TikTok Shop, Shopee, and Lazada exports into reusable reporting datasets and workflows.","exp.group2.title":"Data Quality & Reusable Data","exp.group2.text":"Clean, standardize, validate, and deduplicate influencer, campaign, compensation, sales, and payment data.","exp.group3.title":"Analysis & Operational Improvement","exp.group3.text":"Track sales, ads, SKU, and campaign performance to identify trends, issues, and optimization opportunities.","exp.group4.title":"Insight & Stakeholder Communication","exp.group4.text":"Turn campaign and commerce data into insights, dashboards, presentations, and business recommendations.","exp.group5.title":"Payments & Cross-functional Operations","exp.group5.text":"Prepare and reconcile payment data while supporting e-commerce, influencer, and project operations in a small team.",
    "exp.modalEyebrow":"Experience Details","exp.detail1.title":"Multi-platform data consolidation","exp.detail1.text":"Collected and aligned e-commerce, sales, and advertising data from TikTok Shop, Shopee, and Lazada for operational monitoring, campaign analysis, and monthly reporting.","exp.detail2.title":"Reusable datasets and workflow structuring","exp.detail2.text":"Turned scattered spreadsheet and export-based operational data into reusable datasets and repeatable workflows using Excel, Google Sheets, SQLite, SQL, and Python.","exp.detail3.title":"Cleaning, standardization, and deduplication","exp.detail3.text":"Cleaned, standardized, validated, and deduplicated influencer, campaign, compensation, sales, and payment data to increase consistency and improve downstream trust.","exp.detail4.title":"Influencer Data Management & Campaign Matching","exp.detail4.text":"Maintained reusable influencer profiles and campaign history, including demographics, follower counts, engagement rates, compensation, and prior brand activities, to support campaign matching and reduce repeated sourcing work.","exp.detail5.title":"Sales and ad performance analysis","exp.detail5.text":"Tracked and analyzed revenue, orders, ad spend, product performance, and related efficiency metrics to identify issues, trends, and opportunities for improvement.","exp.detail6.title":"Product, SKU, and campaign performance insight","exp.detail6.text":"Analyzed product, SKU, and campaign performance to identify best sellers, assess ad efficiency, detect underperforming campaigns, and support budget or focus adjustments.","exp.detail7.title":"Client Insights & Business Recommendations","exp.detail7.text":"Translated campaign, sales, advertising, and product data into actionable insights and recommendations for monthly client reviews, helping brands identify performance issues, opportunities, and next actions.","exp.detail8.title":"Management Reporting & Presentations","exp.detail8.text":"Prepared monthly performance reports, presentation decks, dashboards, and brand progress summaries for client meetings and management reviews, communicating results and business implications to stakeholders.","exp.detail9.title":"Payment Data Preparation & Reconciliation","exp.detail9.text":"Prepared and reconciled influencer and live-commerce payment data by brand and individual, checking duplicate records, payment status, work dates, compensation, and payment-cycle requirements before management processing.","exp.detail10.title":"Cross-functional data and operations support","exp.detail10.text":"Supported e-commerce, advertising, influencer, payment, and project operations in a small startup environment by using structured workflows to reduce manual effort and improve shared access to organized data.",
    "contact.phone":"Phone","contact.location":"Location","contact.locationValue":"Bangkok, Thailand",
    "quote.text":"Data is not only numbers — it is better decision-making."
  },
  th: {
    "a11y.skip":"ข้ามไปยังเนื้อหาหลัก","lang.label":"ภาษา",
    "nav.home":"หน้าแรก","nav.projects":"โปรเจกต์","nav.proof":"หลักฐานวิศวกรรม","nav.capabilities":"ความสามารถ","nav.experience":"ประสบการณ์","nav.about":"เกี่ยวกับฉัน","nav.credentials":"ประกาศนียบัตร","nav.contact":"ติดต่อ",
    "resume.button":"Resume ไทย / อังกฤษ","resume.eyebrow":"เรซูเม่","resume.title":"เรซูเม่ภาษาไทยและภาษาอังกฤษ","resume.note":"เปิดดูหรือดาวน์โหลดเรซูเม่ทั้งฉบับรูปภาพและ PDF ภาษาไทยและภาษาอังกฤษได้ด้านล่าง","resume.noteShort":"เปิดดูเรซูเม่ภาษาไทยและภาษาอังกฤษได้ที่นี่","resume.th":"Resume ไทย","resume.en":"Resume อังกฤษ","resume.thLabel":"เรซูเม่ภาษาไทย","resume.enLabel":"เรซูเม่ภาษาอังกฤษ","resume.viewImage":"เปิดรูปภาพ","resume.downloadImage":"ดาวน์โหลดรูปภาพ","resume.viewPdf":"เปิด PDF","resume.downloadPdf":"ดาวน์โหลด PDF",
    "status.available":"เปิดรับโอกาสงาน",
    "hero.badge":"DATA ENGINEER","hero.motto":"สร้าง • ดูแล • ปรับปรุง","hero.summary":"ผมสร้างระบบข้อมูลที่เชื่อถือได้ ขยายต่อได้ และมีแนวคิดแบบ production-style เพื่อเปลี่ยนข้อมูลธุรกิจจริงให้เป็นข้อมูลที่พร้อมใช้และช่วยการตัดสินใจ","hero.ctaProjects":"ดูโปรเจกต์ของฉัน",
    "featured.badge":"โปรเจกต์เด่น","featured.summary":"Databricks Lakehouse บน Apache Spark ที่มี Bronze-Silver-Gold, Delta Lake, CDC, SCD Type 2, Data Quality, Reliability Labs, Monitoring, CI และ Performance Tuning พร้อมหลักฐานวัดผล","featured.quality":"คุณภาพข้อมูล","featured.recovery":"การกู้คืน","featured.monitoring":"การมอนิเตอร์","featured.view":"ดูรายละเอียดโปรเจกต์","featured.evidence":"ดูหลักฐานวิศวกรรม",
    "flow.source":"แหล่งข้อมูล","flow.raw":"ข้อมูลดิบ","flow.clean":"ทำความสะอาดแล้ว","flow.business":"พร้อมใช้เชิงธุรกิจ","flow.trusted":"ข้อมูลที่เชื่อถือได้",
    "metric.completedProjects":"โปรเจกต์ที่เสร็จแล้ว","metric.verifiedRepositories":"Repository ที่ตรวจสอบได้","metric.reliabilityLabs":"Lab ทดสอบ Reliability","metric.automatedTests":"การทดสอบอัตโนมัติ","metric.lineageEdges":"เส้นทาง Lineage","metric.governanceAssets":"สินทรัพย์ Governance","metric.factRows":"แถวข้อมูล Fact","metric.performanceEvidence":"หลักฐาน Performance","metric.tables":"ตาราง","metric.views":"วิว","metric.indexes":"ดัชนี","metric.tests":"เทสต์","metric.labs":"แล็บ","metric.rows":"แถว","metric.evidence":"หลักฐาน","metric.master":"Master","metric.aliases":"Aliases","metric.core":"Core","metric.records":"เรคคอร์ด","metric.outputs":"Outputs","metric.gates":"Gates","metric.privacy":"Privacy","metric.flow":"Flow",
    "tech.title":"เทคโนโลยีหลัก",
    "projects.eyebrow":"โปรเจกต์เด่น","projects.heading":"โปรเจกต์ที่ทำเสร็จแล้ว","projects.lead":"โปรเจกต์ Data Engineering แบบ production-style ที่เชื่อมกับบริบทธุรกิจจริงและมีหลักฐานรองรับชัดเจน","projects.viewAll":"ดูโปรเจกต์ทั้งหมด","projects.viewProject":"ดูโปรเจกต์","projects.privateRepo":"Private Repo • Verified Evidence","projects.fullHeading":"Engineering solutions to real data challenges.","projects.fullHeading.pre":"Engineering solutions to","projects.fullHeading.accent":"real data","projects.fullHeading.post":"challenges","projects.fullLead":"8 โปรเจกต์ Portfolio มีขอบเขตหลักฐานต่างกัน ตัวเลขเป็นผลที่บันทึกไว้ ไม่ได้หมายความว่าทุกระบบเปิดใช้งานจริงอยู่ ตรวจทาน 18 กันยายน 2026 ดูหลักฐานและข้อจำกัดได้ใน GitHub ของแต่ละโปรเจกต์",
    "project.sql.summary":"แพลตฟอร์ม SQL ที่เน้น incremental load, data quality, monitoring, API serving และ recovery","project.sql.detail":"แพลตฟอร์ม SQL ที่เน้นความน่าเชื่อถือ รองรับ incremental loading, idempotency, quality/freshness gates, monitoring และ recovery พร้อม Airflow, read-only API, Docker และ CI","project.databricks.summary":"Databricks Lakehouse บน Apache Spark พร้อม Delta Lake, Bronze-Silver-Gold, CDC, SCD2, Data Quality, Reliability Labs, CI และการปรับ Spark ที่มีผลวัดจริง","project.databricks.detail":"Databricks Lakehouse บน Apache Spark ที่พิสูจน์ Delta Lake Medallion Architecture, CDC, SCD Type 2, Data Quality, Controlled Failure Labs, Monitoring, Troubleshooting, CI และ Spark Performance Tuning ที่มีผลวัดจริง","project.influencer.summary":"Influencer Master Data ที่เชื่อม source provenance, campaign history และ explainable matching decision ให้ตรวจสอบย้อนกลับได้","project.influencer.detail":"โปรเจกต์ Master Data + PostgreSQL ที่ resolve identity จากข้อมูล Influencer ที่กระจัดกระจายเป็น Golden Master ที่ trace กลับ source ได้ เก็บ campaign/performance history และรองรับ explainable matching พร้อม human review","project.marketing.summary":"Pipeline ข้อมูล payment ที่มี validation, rejected-record routing, SQLite analytics และผลลัพธ์ที่ปลอดภัยต่อ Portfolio","project.marketing.detail":"Pipeline Python/SQLite แยกรายการที่ไม่ผ่านการตรวจสอบและเผยแพร่ผลลัพธ์ 6 ชุด รายงาน DQ ที่บันทึกไว้มี 268 แถว ขาดวันที่โพสต์ 97 แถวและสถานะจ่ายเงิน 35 แถว โดยรายงานตามจริง การรันครบต้องใช้ข้อมูลส่วนตัว และยังไม่มี hosted CI","project.ecommerce.summary":"Pipeline Excel หลายแหล่งที่มี validation, transformation, SQLite analytics และ portfolio-safe outputs","project.ecommerce.detail":"ETL Excel ด้วย Python/Pandas และ SQLite พร้อมผลลัพธ์ 5 ชุด ชุดข้อมูลที่บันทึกไว้ 105 แถวไม่พบข้อผิดพลาดตามกฎ DQ ที่กำหนด ไฟล์ Excel ต้นฉบับเป็นข้อมูลส่วนตัว repo นี้ยังไม่มี Docker และ hosted CI",
    "project.bigquery.summary":"แพลตฟอร์ม GCP/BigQuery แบบ production-oriented ที่มี layered warehouse, dbt, reconciliation, security, Terraform และ CI/CD","project.bigquery.detail":"คลังข้อมูล GCP/BigQuery พร้อม dbt, Terraform, incremental processing, reconciliation, governance และ Financial Operations แบบ synthetic หลักฐาน runtime บันทึก 12/12 checks และ RAW 8 ตาราง ส่วน public CI ตรวจความปลอดภัย ไวยากรณ์ Python และรูปแบบ Terraform ไม่ได้รันคลาวด์ทั้งหมดใหม่",
    "project.aws.summary":"แพลตฟอร์ม Data Engineering บน AWS สำหรับข้อมูล retail, vending และ payment โดยใช้ SQL, Python, Glue, S3, Redshift, orchestration, data quality และ reliability engineering","project.aws.detail":"แพลตฟอร์ม Data Engineering บน AWS แบบ production-style ครอบคลุม SQL/Python pipelines, Glue/PySpark transformations, S3 landing, Redshift warehouse, dbt, Airflow, Terraform, data quality, monitoring, security, recovery และหลักฐาน CI/CD โดยใช้ข้อมูล synthetic/sanitized สำหรับส่วนที่เผยแพร่สาธารณะ",
    "project.airflow.summary":"แพลตฟอร์ม e-commerce แบบ production-oriented ที่มี Airflow orchestration, PostgreSQL, dbt warehouse layers, data quality, monitoring, recovery drills, Docker และ CI","project.airflow.detail":"ข้อมูล 8 source contracts บน PostgreSQL, Airflow และ dbt พร้อม monitoring, recovery drills และ Docker หลักฐาน hosted CI: service-free tests 370, PostgreSQL tests 37 และ dbt build results 257 ผ่าน ส่วน AWS เป็น reference/plan ยังไม่ได้ deploy ECS/RDS/ALB runtime จริง",
    "proof.title":"หลักฐานวิศวกรรม","proof.teaser":"ไม่ได้สร้างแค่ happy path แต่รวม data quality, monitoring, recovery, lineage, CI/CD และ performance evidence","proof.viewAll":"ดูหลักฐานทั้งหมด","proof.fullHeading":"ไม่ใช่แค่รันผ่าน แต่พิสูจน์ได้ว่าระบบรับมือปัญหาได้","proof.fullLead":"Portfolio นี้แสดงให้เห็นว่าระบบสามารถถูกทดสอบ สังเกตอาการ วินิจฉัย กู้คืน และตรวจยืนยันผลได้ ไม่ใช่เพียงแค่รันสำเร็จ","proof.dq.title":"Data Quality","proof.dq.text":"มี contracts, thresholds, reconciliation, quarantine, validation และ regression checks","proof.lineage.title":"Lineage & Governance","proof.lineage.text":"มี dataset lineage, runtime lineage, asset registry, PII classification, masking และ hashing","proof.monitoring.title":"Monitoring & Alerts","proof.monitoring.text":"มี run audits, step telemetry, SLA signals, alert fingerprints, occurrence history และ lifecycle","proof.recovery.title":"Recovery & Reliability","proof.recovery.text":"มี controlled failures, retry, RCA, recovery contracts, backfill และ recovery validation","proof.performance.title":"Performance Tuning","proof.performance.text":"มี query plans, benchmark evidence, indexing, Spark tuning และ regression protection","proof.cicd.title":"CI/CD & Reproducibility","proof.cicd.text":"มี GitHub Actions, automated tests, Docker validation, การตรวจ runtime ที่ทำซ้ำได้ และหลักฐานก่อนส่งมอบ","proof.loopTitle":"DATA ENGINEERING OPERATING LOOP",
    "cap.title":"ความสามารถหลัก","cap.teaser":"ความสามารถที่อ้างอิงจากโปรเจกต์ที่ทำเสร็จแล้ว ตั้งแต่ ETL และ data modeling ไปจนถึง reliability และ serving","cap.viewAll":"ดูความสามารถทั้งหมด","cap.fullHeading":"เครื่องมือหลักที่มีหลักฐานรองรับจากโปรเจกต์ที่ทำเสร็จแล้ว","cap.fullLead":"การ์ดความสามารถอธิบายสิ่งที่ผมสร้างและดูแลได้ในปัจจุบัน ไม่ใช่ roadmap ที่จะเรียนในอนาคต","cap.pipeline.title":"Data Pipeline Development","cap.pipeline.text":"Batch • Incremental • CDC • SCD","cap.modeling.title":"Data Modeling","cap.modeling.text":"Relational • Warehouse • Medallion","cap.orchestration.title":"Orchestration","cap.orchestration.text":"Airflow • Scheduling • Recovery","cap.quality.title":"Data Quality","cap.quality.text":"Validation • Reconciliation • Freshness","cap.api.title":"API & Serving","cap.api.text":"FastAPI • Read-only access • Safe outputs","cap.devops.title":"DevOps & CI/CD","cap.devops.text":"Docker • GitHub Actions • Reproducibility","cap.db.title":"Databases","cap.analytics.title":"Analytics & Business Context","cap.analytics.text":"E-commerce • Influencer • Campaign • Payment","cap.reliability.title":"Observability & Reliability","cap.reliability.text":"Monitoring • Alerts • Retry • Recovery","cap.cloud.title":"Cloud & Infrastructure as Code","cap.cloud.text":"GCP/BigQuery • AWS • Terraform",
    "exp.title":"ประสบการณ์","exp.role":"Data Engineer — E-commerce","exp.teaser":"บริบทการทำงานจริงครอบคลุมข้อมูล e-commerce, influencer, campaign, payment และ reporting","exp.viewFull":"ดูประสบการณ์เต็ม","exp.fullHeading":"บริบทงานจริงที่อยู่เบื้องหลังโปรเจกต์วิศวกรรมข้อมูล","exp.fullLead":"โปรเจกต์ใน Portfolio ต่อยอดจากปัญหาข้อมูลในการทำงานจริงไปเป็น engineering labs และไม่ได้อ้างว่าเทคโนโลยีทุกอย่างใน Portfolio ถูกใช้ใน production ที่บริษัท","exp.present":"ปัจจุบัน","exp.current":"CURRENT","exp.bullet1":"ทำงานกับข้อมูล e-commerce, influencer, campaign, payment และ reporting ที่เกิดซ้ำในงานประจำ","exp.bullet2":"ลดงานเตรียมข้อมูลซ้ำด้วย workflow และ validation ที่นำกลับมาใช้ซ้ำได้","exp.bullet3":"เชื่อมการตัดสินใจด้าน engineering กลับไปยัง pain point ของธุรกิจจริง ไม่ใช่ demo ที่แยกขาดบริบท","exp.bullet4":"แยก portfolio evidence สาธารณะออกจากข้อมูลบริษัทที่เป็นส่วนตัว","exp.domains":"โดเมนข้อมูล",
    "about.heading":"เริ่มจากบริบทธุรกิจ ก่อนค่อยเลือกเครื่องมือวิศวกรรม","about.p1":"Portfolio ของผมเชื่อมงาน e-commerce, influencer, campaign, payment และ reporting ที่ได้ลงมือทำจริงเข้ากับ data engineering ที่เชื่อถือได้ เป้าหมายคือช่วยลดงานเตรียมข้อมูลซ้ำ เพิ่มความน่าเชื่อถือของข้อมูล และคืนเวลาให้การวิเคราะห์และการตัดสินใจที่ดีขึ้น","about.p2":"ผมชอบระบบที่สังเกตอาการได้ กู้คืนได้ ทดสอบได้ และอธิบายได้ ไม่ใช่แค่ pipeline ที่รันสำเร็จเท่านั้น","about.problem.title":"แก้ปัญหา","about.problem.text":"เริ่มจากปัญหาธุรกิจและ data pain ที่แท้จริง","about.builder.title":"ผู้สร้าง","about.builder.text":"สร้างระบบที่นำกลับมาใช้ ดูแล และต่อยอดได้","about.owner.title":"เจ้าของปัญหา","about.owner.text":"ติดตามความผิดพลาดจากหลักฐานและยืนยันการกู้คืน","about.learner.title":"ผู้เรียนรู้","about.learner.text":"แยกสิ่งที่จะเรียนในอนาคตออกจากความสามารถที่พิสูจน์แล้ว",
    "cred.title":"ประกาศนียบัตร","cred.verified":"ประกาศนียบัตรที่ตรวจสอบได้","cred.view":"ดูประกาศนียบัตร","cred.fullHeading":"ประกาศนียบัตรที่สามารถเปิดดูและตรวจสอบได้จริง","cred.fullLead":"แสดงเฉพาะประกาศนียบัตรที่มี public link ยืนยันได้เท่านั้น",
    "contact.title":"ติดต่อ","contact.teaser":"เปิดรับโอกาสงาน Data Engineering และการพูดคุยเชิงเทคนิค","contact.open":"เปิดส่วนติดต่อ","contact.send":"ส่งข้อความ","contact.heading":"มาสร้างระบบข้อมูลที่เชื่อถือได้กัน","contact.fullLead":"หากเป็นโอกาสงาน Data Engineering การรีวิว Portfolio หรือการพูดคุยเชิงเทคนิค สามารถติดต่อผ่านช่องทางด้านล่างได้","contact.openLinkedIn":"เปิดโปรไฟล์ LinkedIn","contact.line":"LINE","contact.lineAction":"เพิ่มเพื่อนผ่าน LINE","contact.certificate":"ประกาศนียบัตร",
    "featured.productionStyle":"PRODUCTION-STYLE","section.projects":"02 / โปรเจกต์","section.proof":"03 / หลักฐานวิศวกรรม","section.capabilities":"04 / ความสามารถ","section.experience":"05 / ประสบการณ์","section.about":"06 / เกี่ยวกับฉัน","section.credentials":"07 / ประกาศนียบัตร","section.contact":"08 / ติดต่อ",
    "exp.location":"กรุงเทพฯ ประเทศไทย · Hybrid","exp.period":"ส.ค. 2025 – ปัจจุบัน","exp.summary":"ผมเชื่อมงานข้อมูลเชิงปฏิบัติการที่เกิดซ้ำเข้ากับแนวทางวิศวกรรมที่นำกลับมาใช้ได้ เพื่อลดงานเตรียมข้อมูลแบบ manual และเพิ่มความน่าเชื่อถือของการวิเคราะห์",
    "exp.group1.title":"การรวมและจัดระบบข้อมูล","exp.group1.text":"รวมข้อมูลจาก TikTok Shop, Shopee และ Lazada ให้เป็นชุดข้อมูลและ workflow สำหรับ reporting ที่นำกลับมาใช้ซ้ำได้","exp.group2.title":"Data Quality และข้อมูลที่นำกลับมาใช้ซ้ำ","exp.group2.text":"ทำความสะอาด จัดมาตรฐาน ตรวจสอบ และลดข้อมูลซ้ำของ influencer, campaign, sales, compensation และ payment","exp.group3.title":"การวิเคราะห์และปรับปรุงประสิทธิภาพ","exp.group3.text":"วิเคราะห์ยอดขาย โฆษณา สินค้า SKU และ campaign เพื่อค้นหาแนวโน้ม ปัญหา และโอกาสในการปรับปรุง","exp.group4.title":"Insight และการสื่อสารกับ Stakeholder","exp.group4.text":"แปลงข้อมูล campaign และ commerce เป็น insight, dashboard, presentation และข้อเสนอแนะสำหรับการดำเนินงานรอบถัดไป","exp.group5.title":"Payment และงาน Operations ข้ามฝ่าย","exp.group5.text":"เตรียมและกระทบยอดข้อมูล payment พร้อมสนับสนุนงาน e-commerce, influencer และ project operations ในทีมขนาดเล็ก",
    "exp.modalEyebrow":"ประสบการณ์ทำงาน","exp.detail1.title":"การรวมข้อมูลจากหลายแพลตฟอร์ม","exp.detail1.text":"รวบรวมและเชื่อมโยงข้อมูล E-commerce ยอดขาย และโฆษณาจาก TikTok Shop, Shopee และ Lazada เพื่อใช้ติดตามผลการดำเนินงาน วิเคราะห์แคมเปญ และจัดทำรายงานประจำเดือน","exp.detail2.title":"การจัดระบบข้อมูลและสร้างชุดข้อมูลที่นำกลับมาใช้ซ้ำได้","exp.detail2.text":"จัดโครงสร้างข้อมูลการดำเนินงานที่กระจัดกระจายจาก Spreadsheet และข้อมูลที่ส่งออกจากแพลตฟอร์มต่าง ๆ ให้เป็นชุดข้อมูลที่นำกลับมาใช้ซ้ำได้ โดยใช้ Excel, Google Sheets, SQLite, SQL และ Python ช่วยลดเวลาการเตรียมข้อมูลซ้ำ","exp.detail3.title":"การทำความสะอาด จัดมาตรฐาน และลดข้อมูลซ้ำ","exp.detail3.text":"ทำความสะอาด จัดมาตรฐาน ตรวจสอบ และลดข้อมูลซ้ำของข้อมูล Influencer, Campaign, ค่าตอบแทน, ยอดขาย และการชำระเงิน เพื่อเพิ่มความสม่ำเสมอของข้อมูลและทำให้การวิเคราะห์ขั้นต่อไปมีความน่าเชื่อถือมากขึ้น","exp.detail4.title":"การจัดการข้อมูล Influencer และการจับคู่กับ Campaign","exp.detail4.text":"ดูแลข้อมูล Influencer และประวัติ Campaign ที่สามารถนำกลับมาใช้ซ้ำ เช่น ข้อมูลประชากร จำนวนผู้ติดตาม Engagement Rate ค่าตอบแทน และประวัติการทำงานกับแบรนด์ เพื่อช่วยคัดเลือก Influencer ให้ตรงโจทย์และลดการค้นหาข้อมูลเดิมซ้ำ","exp.detail5.title":"การวิเคราะห์ยอดขายและประสิทธิภาพโฆษณา","exp.detail5.text":"ติดตามและวิเคราะห์ผลการขายและโฆษณาจาก Revenue, Orders, Ad Spend, Product Performance และตัวชี้วัดที่เกี่ยวข้องกับ ROAS เพื่อค้นหาแนวโน้ม ปัญหาด้านประสิทธิภาพ และโอกาสในการปรับปรุง Campaign","exp.detail6.title":"การวิเคราะห์ Product, SKU และ Campaign Performance","exp.detail6.text":"วิเคราะห์ประสิทธิภาพสินค้า SKU และ Campaign เพื่อค้นหาสินค้าที่ขายดีที่สุด ประเมินความคุ้มค่าของการใช้โฆษณา ระบุ Campaign ที่มีผลลัพธ์ต่ำ และหาโอกาสในการปรับ Budget หรือ Product Focus","exp.detail7.title":"การหา Insight และ Solution ให้แบรนด์ลูกค้า","exp.detail7.text":"แปลงข้อมูล Campaign, Sales, Advertising และ Product ให้เป็น Insight และข้อเสนอแนะที่นำไปปฏิบัติได้สำหรับการประชุมลูกค้าประจำเดือน เพื่อช่วยระบุปัญหา โอกาส และแนวทางดำเนินงานในรอบถัดไป","exp.detail8.title":"การจัดทำรายงานและ Presentation สำหรับลูกค้าและผู้บริหาร","exp.detail8.text":"จัดทำ Monthly Performance Report, Presentation, Dashboard และสรุปความคืบหน้าของแต่ละแบรนด์สำหรับการประชุมกับลูกค้าและผู้บริหาร พร้อมสื่อสารผลลัพธ์และผลกระทบทางธุรกิจจากข้อมูล","exp.detail9.title":"การเตรียมและกระทบยอดข้อมูลการชำระเงิน","exp.detail9.text":"เตรียมและตรวจสอบข้อมูลการชำระเงินของ Influencer และงาน Live Commerce แยกตามแบรนด์และบุคคล โดยตรวจข้อมูลซ้ำ สถานะการจ่าย วันที่ทำงาน ค่าตอบแทน และเงื่อนไขรอบการชำระเงินก่อนส่งต่อให้ผู้บริหารดำเนินการ","exp.detail10.title":"การสนับสนุนงานข้อมูลและ Operations ข้ามฝ่าย","exp.detail10.text":"สนับสนุนงาน E-commerce, Advertising, Influencer, Payment และ Project Operations ในสภาพแวดล้อม Startup ที่มีทีมขนาดเล็ก โดยนำ Workflow ที่ขับเคลื่อนด้วยข้อมูลมาช่วยลดงาน Manual ลดเวลาการทำงาน และทำให้ทีมสามารถใช้ข้อมูลที่ผ่านการจัดระบบแล้วร่วมกันได้",
    "contact.phone":"โทรศัพท์","contact.location":"สถานที่","contact.locationValue":"กรุงเทพฯ ประเทศไทย",
    "quote.text":"ข้อมูลไม่ใช่แค่ตัวเลข แต่คือการตัดสินใจที่ดีขึ้น"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const sidebar = document.getElementById("sidebar");
  const overlay = document.querySelector(".sidebar-overlay");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = [...document.querySelectorAll('.side-nav-link[href^="#"]')];
  const sections = [...document.querySelectorAll("main section[id]")];
  const langButtons = [...document.querySelectorAll("[data-lang]")];
  const year = document.getElementById("current-year");
  const resumePopover = document.querySelector("[data-resume-popover]");
  const experiencePopover = document.querySelector("[data-experience-popover]");
  const contactSection = document.getElementById("contact");
  const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)");

  const scrollState = { targetId: null, targetY: null, releaseAt: 0, ticking: false };

  const replayClass = (element, className, duration = 900) => {
    if (!element) return;
    element.classList.remove(className);
    void element.offsetWidth;
    element.classList.add(className);
    window.setTimeout(() => element.classList.remove(className), duration);
  };

  const triggerContactArrival = () => {
    if (!contactSection) return;
    replayClass(contactSection, "contact-arrival", 1400);
  };

  if (year) year.textContent = String(new Date().getFullYear());

  const setMenu = (open) => {
    if (!sidebar || !menuToggle || !overlay) return;
    sidebar.classList.toggle("open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    overlay.hidden = !open;
    body.classList.toggle("menu-open", open);
  };

  const setActive = (sectionId) => {
    navLinks.forEach((link) => {
      const active = link.getAttribute("href") === `#${sectionId}`;
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "page"); else link.removeAttribute("aria-current");
    });
  };

  const getSectionProbeOffset = () => {
    const vhOffset = Math.round(window.innerHeight * 0.16);
    return Math.max(72, Math.min(138, vhOffset));
  };

  const getTargetScrollTop = (target) => {
    if (!target) return 0;
    const margin = target.id === "contact" ? 10 : 8;
    return Math.max(0, Math.round(target.getBoundingClientRect().top + window.scrollY - margin));
  };

  const resolveActiveSection = () => {
    const probeY = window.scrollY + getSectionProbeOffset();
    let currentId = sections[0]?.id || "home";
    sections.forEach((section) => {
      if (probeY >= section.offsetTop - 1) currentId = section.id;
    });
    return currentId;
  };

  const syncActiveSection = () => {
    if (scrollState.targetId) {
      const closeEnough = Math.abs(window.scrollY - (scrollState.targetY ?? 0)) <= 24;
      const expired = performance.now() > scrollState.releaseAt;
      if (!closeEnough && !expired) {
        setActive(scrollState.targetId);
        return;
      }
      scrollState.targetId = null;
      scrollState.targetY = null;
      scrollState.releaseAt = 0;
    }
    setActive(resolveActiveSection());
  };

  const requestActiveSync = () => {
    if (scrollState.ticking) return;
    scrollState.ticking = true;
    window.requestAnimationFrame(() => {
      scrollState.ticking = false;
      syncActiveSection();
    });
  };

  menuToggle?.addEventListener("click", () => setMenu(!sidebar?.classList.contains("open")));
  overlay?.addEventListener("click", () => setMenu(false));

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();

      if (link.classList.contains("side-nav-link")) {
        replayClass(link, "neon-activate", 820);
      }
      if (target.id === "contact") {
        triggerContactArrival();
      }

      const destination = getTargetScrollTop(target);
      scrollState.targetId = target.id;
      scrollState.targetY = destination;
      scrollState.releaseAt = performance.now() + (prefersReducedMotion?.matches ? 120 : 1800);
      setActive(target.id);

      window.scrollTo({
        top: destination,
        behavior: prefersReducedMotion?.matches ? "auto" : "smooth"
      });
      history.replaceState(null, "", `#${target.id}`);
      setMenu(false);
      requestActiveSync();
    });
  });

  document.querySelectorAll(".neon-cta, .contact-list a, .contact-mini-list a").forEach((control) => {
    control.addEventListener("pointerdown", () => replayClass(control, "is-neon-press", 760));
    control.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") replayClass(control, "is-neon-press", 760);
    });
  });

  const handleScroll = () => requestActiveSync();
  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) setMenu(false);
    requestActiveSync();
  });

  const applyLanguage = (lang) => {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (Object.prototype.hasOwnProperty.call(dict, key)) el.textContent = dict[key];
    });
    const splitContactHeading = document.querySelector("[data-contact-heading]");
    if (splitContactHeading) {
      splitContactHeading.innerHTML = lang === "th"
        ? 'มาสร้างระบบข้อมูลที่<br><span class="accent">เชื่อถือได้</span>กัน<span class="accent-dot">.</span>'
        : 'Let\'s build <span class="accent">reliable</span><br>data systems<span class="accent-dot">.</span>';
    }
    langButtons.forEach((button) => button.classList.toggle("active", button.dataset.lang === lang));
    document.title = lang === "th" ? "Bodin Krongchon | Portfolio Data Engineer" : "Bodin Krongchon | Data Engineer Portfolio";
    try { localStorage.setItem("portfolio-language", lang); } catch (_) {}
    requestActiveSync();
  };

  langButtons.forEach((button) => button.addEventListener("click", () => applyLanguage(button.dataset.lang)));
  let savedLanguage = null;
  try { savedLanguage = localStorage.getItem("portfolio-language"); } catch (_) {}
  applyLanguage(savedLanguage || "en");

  const setResume = (open) => {
    if (!resumePopover) return;
    resumePopover.hidden = !open;
    body.classList.toggle("menu-open", open);
  };
  document.querySelectorAll("[data-resume-toggle]").forEach((button) => button.addEventListener("click", () => setResume(true)));
  document.querySelector("[data-resume-close]")?.addEventListener("click", () => setResume(false));
  resumePopover?.addEventListener("click", (event) => { if (event.target === resumePopover) setResume(false); });

  const setExperience = (open) => {
    if (!experiencePopover) return;
    experiencePopover.hidden = !open;
    body.classList.toggle("menu-open", open);
  };
  document.querySelectorAll("[data-experience-toggle]").forEach((button) => button.addEventListener("click", () => setExperience(true)));
  document.querySelector("[data-experience-close]")?.addEventListener("click", () => setExperience(false));
  experiencePopover?.addEventListener("click", (event) => { if (event.target === experiencePopover) setExperience(false); });

  window.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    setMenu(false);
    setResume(false);
    setExperience(false);
  });

  const detailProjectIds = ["sql-ecommerce", "databricks-lakehouse", "influencer-intelligence", "marketing-campaign", "ecommerce-pipeline", "bigquery-enterprise", "aws-reliability", "airflow-dbt"];
  document.querySelectorAll(".v213-projects .project-detail-grid article").forEach((card, index) => {
    if (!detailProjectIds[index]) return;
    card.dataset.projectId = detailProjectIds[index];
    card.querySelectorAll("a.card-cta").forEach((link) => {
      link.href = `project.html?id=${encodeURIComponent(detailProjectIds[index])}`;
      link.removeAttribute("target");
      link.removeAttribute("rel");
    });
  });
  document.querySelectorAll(".project-card[data-project-id], .v213-projects .project-detail-grid article[data-project-id]").forEach((card) => {
    card.tabIndex = 0;
    card.setAttribute("role", "link");
    card.setAttribute("aria-label", `${card.querySelector("h3")?.textContent?.trim() || "Project"}: view details`);
    const openDetail = () => { window.location.href = `project.html?id=${encodeURIComponent(card.dataset.projectId)}`; };
    card.addEventListener("click", (event) => {
      if (event.target.closest("a, button")) return;
      openDetail();
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openDetail();
      }
    });
  });

  requestActiveSync();
});


/* V21.36 mobile loop pairing */
(() => {
  const BREAKPOINT = '(max-width: 760px)';
  const selector = '#proof .v226-engineering-loop > div, #proof .engineering-loop > div';

  function unwrap(flow) {
    [...flow.querySelectorAll(':scope > .mobile-loop-pair')].forEach((pair) => {
      const parent = pair.parentNode;
      while (pair.firstChild) parent.insertBefore(pair.firstChild, pair);
      pair.remove();
    });
  }

  function wrap(flow) {
    unwrap(flow);
    const nodes = [...flow.children];
    for (let i = 0; i < nodes.length - 1; i += 1) {
      const arrow = nodes[i];
      const step = nodes[i + 1];
      if (arrow && step && arrow.tagName === 'I' && step.tagName === 'SPAN') {
        const pair = document.createElement('span');
        pair.className = 'mobile-loop-pair';
        flow.insertBefore(pair, arrow);
        pair.appendChild(arrow);
        pair.appendChild(step);
        i += 1;
      }
    }
  }

  function sync() {
    const mobile = window.matchMedia(BREAKPOINT).matches;
    document.querySelectorAll(selector).forEach((flow) => mobile ? wrap(flow) : unwrap(flow));
  }

  const start = () => {
    sync();
    const mq = window.matchMedia(BREAKPOINT);
    if (mq.addEventListener) mq.addEventListener('change', sync);
    else if (mq.addListener) mq.addListener(sync);
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
