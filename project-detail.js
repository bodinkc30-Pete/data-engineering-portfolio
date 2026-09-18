"use strict";

const PROJECT_DETAILS = {
  "sql-ecommerce": {
    number: "01", tone: "orange", image: "assets/illustrations/projects/project-01-sql-ecommerce.png", github: "https://github.com/bodinkc30-Pete/sql-ecommerce-data-engineering", tools: ["SQL", "Python", "SQLite", "Airflow", "Docker", "GitHub Actions"], metrics: [["25", "Tables"], ["20", "Views"], ["57", "Indexes"], ["193", "Tests"]],
    en: { label: "SQL • ETL", title: "SQL E-commerce Data Engineering", summary: "A reliability-focused SQL platform for incremental e-commerce loading, validation, monitoring, recovery, and safe downstream serving.", problem: "Recurring shop exports need a repeatable path from raw files to trusted analytical tables without duplicate loading or silent data-quality loss.", scope: "Portfolio engineering project using public or synthetic-safe data. It is separate from company production systems.", flow: ["Source exports", "Staging", "Core SQL model", "Quality gates", "Read-only outputs"], delivered: ["Built staged, core, audit, rejected-record, and watermark layers.", "Implemented incremental and idempotent loading with freshness and quality checks.", "Added monitoring, recovery paths, API serving, Docker runtime, and CI evidence."] },
    th: { label: "SQL • ETL", title: "SQL E-commerce Data Engineering", summary: "แพลตฟอร์ม SQL ที่เน้นความเชื่อถือได้สำหรับการโหลดข้อมูล E-commerce แบบ incremental พร้อม validation, monitoring, recovery และการส่งต่อข้อมูลที่ปลอดภัย.", problem: "ไฟล์ export จากร้านค้าที่เกิดซ้ำต้องมีเส้นทางที่ทำซ้ำได้จากข้อมูลดิบสู่ตารางวิเคราะห์ โดยไม่โหลดซ้ำหรือปล่อยปัญหาคุณภาพข้อมูลผ่านไปเงียบ ๆ.", scope: "เป็นโปรเจกต์วิศวกรรมสำหรับ Portfolio ใช้ข้อมูลสาธารณะหรือข้อมูลสังเคราะห์ที่ปลอดภัย แยกจากระบบจริงของบริษัท.", flow: ["ไฟล์ต้นทาง", "Staging", "Core SQL model", "Quality gates", "ผลลัพธ์แบบอ่านอย่างเดียว"], delivered: ["สร้างชั้น staged, core, audit, rejected-record และ watermark.", "ทำ incremental และ idempotent loading พร้อม freshness และ quality checks.", "เพิ่ม monitoring, recovery, API serving, Docker runtime และหลักฐาน CI."] }
  },
  "databricks-lakehouse": {
    number: "02", tone: "purple", image: "assets/illustrations/projects/project-02-databricks-lakehouse.png", github: "https://github.com/bodinkc30-Pete/databricks-lakehouse-medallion-pipeline", tools: ["Databricks", "Apache Spark", "Delta Lake", "PySpark", "CDC", "CI"], metrics: [["7/7", "Reliability Labs"], ["5,249", "Rows"], ["25", "Evidence"], ["PASS", "Public CI"]],
    en: { label: "LAKEHOUSE", title: "Databricks Lakehouse Medallion Pipeline", summary: "A Databricks and Apache Spark Lakehouse demonstrating Bronze–Silver–Gold modeling, CDC, SCD Type 2, data quality, failure drills, and measured tuning.", problem: "A lakehouse needs more than a successful batch run: it must retain raw history, model change correctly, expose data-quality failures, and demonstrate recovery.", scope: "Portfolio engineering lab using synthetic data and documented reliability exercises; it does not represent a deployed RaveUp production platform.", flow: ["Raw events", "Bronze Delta", "Silver validated", "Gold business", "Evidence & monitoring"], delivered: ["Implemented Delta Lake medallion layers with CDC and SCD Type 2 handling.", "Created controlled failure labs for troubleshooting, monitoring, and recovery validation.", "Captured Spark performance evidence and automated CI checks."] },
    th: { label: "LAKEHOUSE", title: "Databricks Lakehouse Medallion Pipeline", summary: "Lakehouse บน Databricks และ Apache Spark ที่แสดง Bronze–Silver–Gold, CDC, SCD Type 2, Data Quality, failure drills และการปรับประสิทธิภาพที่วัดผลได้.", problem: "Lakehouse ไม่ควรพิสูจน์เพียงว่า batch รันสำเร็จ แต่ต้องเก็บประวัติข้อมูลดิบ จัดการการเปลี่ยนแปลง ตรวจพบปัญหาคุณภาพ และพิสูจน์การกู้คืนได้.", scope: "เป็น engineering lab ใน Portfolio ใช้ข้อมูลสังเคราะห์และแบบทดสอบ reliability ที่มีเอกสารกำกับ ไม่ใช่ระบบ production ของ RaveUp.", flow: ["ข้อมูลเหตุการณ์ดิบ", "Bronze Delta", "Silver ที่ตรวจสอบแล้ว", "Gold เชิงธุรกิจ", "หลักฐานและ monitoring"], delivered: ["ทำ Delta Lake medallion layers พร้อม CDC และ SCD Type 2.", "สร้าง controlled failure labs สำหรับ troubleshooting, monitoring และ recovery validation.", "เก็บหลักฐาน Spark performance และ automated CI checks."] }
  },
  "influencer-intelligence": {
    number: "03", tone: "pink", image: "assets/illustrations/projects/project-03-influencer-intelligence.png", github: "https://github.com/bodinkc30-Pete/influencer-campaign-intelligence-pipeline", tools: ["Python", "SQL", "PostgreSQL", "Entity Resolution", "Lineage", "Testing"], metrics: [["703", "Master"], ["2,519", "Aliases"], ["6,530", "Core Rows"], ["161", "Tests"]],
    en: { label: "MASTER DATA", title: "Influencer Master Data & Campaign Intelligence", summary: "A governed master-data workflow that resolves fragmented influencer identities into a traceable Golden Master with explainable matching.", problem: "Influencer and campaign information often arrives under inconsistent names and multiple source records, making matching, reporting, and historical analysis unreliable.", scope: "Portfolio project based on a realistic business data problem. All published data and outputs are privacy-safe and separate from company data.", flow: ["Source records", "Standardization", "Match review", "Golden Master", "Campaign history"], delivered: ["Built deterministic entity-resolution rules with a human-review path.", "Preserved source provenance, aliases, and campaign/performance history.", "Delivered PostgreSQL core models, quality checks, and reproducible tests."] },
    th: { label: "MASTER DATA", title: "Influencer Master Data & Campaign Intelligence", summary: "เวิร์กโฟลว์ Master Data ที่มี governance สำหรับรวม identity ของ influencer ที่กระจัดกระจายเป็น Golden Master ที่ตรวจสอบย้อนกลับและอธิบายการจับคู่ได้.", problem: "ข้อมูล influencer และ campaign มักมาจากหลายแหล่งและสะกดชื่อไม่เหมือนกัน ทำให้การจับคู่ รายงาน และวิเคราะห์ประวัติไม่น่าเชื่อถือ.", scope: "เป็นโปรเจกต์ Portfolio ที่ต่อยอดจากปัญหาข้อมูลธุรกิจจริง ข้อมูลและผลลัพธ์ที่เผยแพร่ปลอดภัยต่อความเป็นส่วนตัวและแยกจากข้อมูลบริษัท.", flow: ["ข้อมูลต้นทาง", "ทำมาตรฐาน", "ทบทวนการจับคู่", "Golden Master", "ประวัติ campaign"], delivered: ["สร้างกฎ entity resolution แบบ deterministic พร้อมเส้นทาง human review.", "เก็บ source provenance, aliases และประวัติ campaign/performance.", "ส่งมอบ PostgreSQL core models, quality checks และการทดสอบที่ทำซ้ำได้."] }
  },
  "marketing-campaign": {
    number: "04", tone: "cyan", image: "assets/illustrations/projects/project-04-marketing-analytics.png", github: "https://github.com/bodinkc30-Pete/marketing-campaign-data-platform", tools: ["SQL", "Python", "SQLite", "Validation", "Privacy", "Analytics"], metrics: [["268", "Records"], ["Rejected", "Routing"], ["SQLite", "Analytics"], ["6", "Outputs"]],
    en: { label: "MARKETING", title: "Marketing Campaign Data Platform", summary: "A privacy-aware campaign and payment pipeline that records validation findings, routes rejected records, uses SQLite analytics, and publishes public-safe outputs.", problem: "Campaign and payment records need clear validation, traceable reject handling, and analytics outputs that do not expose sensitive operational information.", scope: "Portfolio project. Published materials are sanitized; the recorded DQ report contains 268 rows, including 97 missing post dates and 35 missing payment statuses. A full run requires private source data and this repository has no hosted CI.", flow: ["Business files", "Validation", "Rejected route", "SQLite analytics", "Safe outputs"], delivered: ["Applied validation rules and recorded data-quality findings instead of claiming a clean source dataset.", "Separated rejected records for diagnosis instead of silently discarding them.", "Produced analytical summaries and six portfolio-safe output sets."] },
    th: { label: "MARKETING", title: "Marketing Campaign Data Platform", summary: "Pipeline ข้อมูล campaign และ payment ที่คำนึงถึง privacy บันทึกผล validation, แยก rejected records, ใช้ SQLite analytics และเผยแพร่ผลลัพธ์ที่ปลอดภัย.", problem: "ข้อมูล campaign และ payment ต้องมี validation ที่ชัดเจน จัดการ record ที่ไม่ผ่านอย่างตรวจสอบได้ และสร้าง analytics โดยไม่เปิดเผยข้อมูลปฏิบัติการที่อ่อนไหว.", scope: "เป็นโปรเจกต์ Portfolio เอกสารและผลลัพธ์ที่เผยแพร่ผ่านการ sanitize แล้ว รายงาน DQ ที่บันทึกไว้มี 268 แถว โดยพบวันที่โพสต์หาย 97 แถว และสถานะการจ่ายเงินหาย 35 แถว การรันครบต้องใช้ข้อมูลต้นทางส่วนตัว และ repo นี้ไม่มี hosted CI.", flow: ["ไฟล์ธุรกิจ", "Validation", "เส้นทาง rejected", "SQLite analytics", "ผลลัพธ์ปลอดภัย"], delivered: ["ใช้ validation rules และบันทึก data-quality findings ตามจริง แทนการอ้างว่าข้อมูลต้นทางสะอาดทั้งหมด.", "แยก rejected records สำหรับวิเคราะห์สาเหตุ แทนการทิ้งข้อมูลเงียบ ๆ.", "สร้าง analytical summaries และผลลัพธ์ที่ปลอดภัยสำหรับ Portfolio จำนวน 6 ชุด."] }
  },
  "ecommerce-pipeline": {
    number: "05", tone: "mint", image: "assets/illustrations/projects/project-05-ecommerce-pipeline.png", github: "https://github.com/bodinkc30-Pete/ecommerce-data-pipeline", tools: ["Python", "Pandas", "SQLite", "Excel", "Validation", "SQL"], metrics: [["105", "Records"], ["DQ", "Sample PASS"], ["SQLite", "Analytics"], ["5", "Outputs"]],
    en: { label: "PIPELINE", title: "E-commerce Data Pipeline", summary: "A multi-source Excel ETL pipeline that standardizes shop metrics, records configured data-quality results, loads SQLite, and publishes safe analytical samples.", problem: "Daily shop metrics from separate spreadsheets create repeated manual preparation and inconsistent formats before analysis can begin.", scope: "Portfolio ETL project using safe sample data; raw Excel files are private, and this repository does not claim Docker or hosted CI.", flow: ["Excel sources", "Standardize", "Validate", "SQLite", "SQL outputs"], delivered: ["Standardized multi-source daily shop metrics with Python and Pandas.", "Recorded configured DQ results for the 105-row sample before loading the analytical store.", "Published SQL analytics and five safe output samples."] },
    th: { label: "PIPELINE", title: "E-commerce Data Pipeline", summary: "ETL pipeline จาก Excel หลายแหล่งที่ทำมาตรฐาน shop metrics บันทึกผล Data Quality โหลด SQLite และเผยแพร่ตัวอย่างผลวิเคราะห์ที่ปลอดภัย.", problem: "ตัวเลขร้านค้ารายวันจากสเปรดชีตหลายไฟล์ทำให้ต้องเตรียมข้อมูลแบบ manual ซ้ำ ๆ และมีรูปแบบข้อมูลไม่สม่ำเสมอก่อนเริ่มวิเคราะห์.", scope: "เป็นโปรเจกต์ ETL ใน Portfolio ใช้ข้อมูลตัวอย่างที่ปลอดภัย ไฟล์ Excel ต้นฉบับเป็นข้อมูลส่วนตัว และ repo นี้ไม่ได้อ้างว่ามี Docker หรือ hosted CI.", flow: ["Excel sources", "ทำมาตรฐาน", "Validation", "SQLite", "SQL outputs"], delivered: ["ทำมาตรฐาน daily shop metrics จากหลายแหล่งด้วย Python และ Pandas.", "บันทึกผล DQ ตามกฎที่กำหนดสำหรับตัวอย่าง 105 records ก่อนโหลดเข้าสู่ analytical store.", "เผยแพร่ SQL analytics และตัวอย่างผลลัพธ์ที่ปลอดภัย 5 ชุด."] }
  },
  "bigquery-enterprise": {
    number: "06", tone: "blue", image: "assets/illustrations/projects/project-06-bigquery-gcp-platform.png", github: "https://github.com/bodinkc30-Pete/bigquery-enterprise-data-platform", tools: ["GCS", "BigQuery", "dbt", "Terraform", "IAM", "CI/CD"], metrics: [["32/32", "Definition of Done"], ["12/12", "Runtime Proof"], ["8", "RAW Tables"], ["PASS", "Public CI"]],
    en: { label: "GCP / BIGQUERY", title: "BigQuery Enterprise Data Platform", summary: "A Google Cloud warehouse with dbt, Terraform, reconciliation, governance, documented runtime proof, and public CI for publication safety.", problem: "A warehouse platform must make ingestion, transformation, access control, reconciliation, and deployment repeatable rather than relying on manual warehouse changes.", scope: "Portfolio platform using explicitly labeled synthetic financial-operations data. Public CI does not rerun the cloud workload; it checks publication safety, Python syntax, and Terraform formatting.", flow: ["GCS landing", "BigQuery raw", "dbt staging", "Core & mart", "Governed outputs"], delivered: ["Created layered warehouse datasets with incremental and idempotent processing.", "Added reconciliation, IAM/security, governance controls, and cost-aware infrastructure definitions.", "Recorded 12/12 runtime proof and automated public CI evidence with Terraform and dbt."] },
    th: { label: "GCP / BIGQUERY", title: "BigQuery Enterprise Data Platform", summary: "คลังข้อมูลบน Google Cloud ที่มี dbt, Terraform, reconciliation, governance, หลักฐาน runtime ที่บันทึกไว้ และ Public CI สำหรับตรวจความปลอดภัยของสิ่งที่เผยแพร่.", problem: "แพลตฟอร์ม warehouse ต้องทำให้การ ingest, transform, ควบคุมสิทธิ์, reconciliation และ deploy ทำซ้ำได้ แทนการเปลี่ยนแปลงคลังข้อมูลแบบ manual.", scope: "เป็น Portfolio ที่ใช้ข้อมูลการเงินเชิงสังเคราะห์ซึ่งระบุขอบเขตชัดเจน Public CI ไม่ได้รัน cloud workload ใหม่ แต่ตรวจ publication safety, Python syntax และ Terraform formatting.", flow: ["GCS landing", "BigQuery raw", "dbt staging", "Core และ mart", "Governed outputs"], delivered: ["สร้าง layered warehouse datasets ด้วย incremental และ idempotent processing.", "เพิ่ม reconciliation, IAM/security, governance และโครงสร้างพื้นฐานที่คำนึงถึง cost.", "บันทึก runtime proof 12/12 และทำ Public CI evidence ด้วย Terraform และ dbt."] }
  },
  "aws-reliability": {
    number: "07", tone: "orange", image: "assets/illustrations/projects/aws-production-data-engineering-transparent.webp", github: "https://github.com/bodinkc30-Pete/aws-production-data-engineering-reliability-platform", tools: ["AWS", "Glue", "PySpark", "S3", "Redshift", "Terraform"], metrics: [["640/640", "Tests"], ["PASS", "GitHub Actions"], ["0", "Safety Findings"], ["PUBLIC", "Sanitized"]],
    en: { label: "AWS / DATA PLATFORM", title: "AWS Production Data Engineering & Reliability Platform", summary: "A production-style AWS platform for retail, vending, and payment workflows with orchestration, quality controls, security, monitoring, recovery, and CI evidence.", problem: "Cross-domain operational data needs an architecture that makes failures observable, data quality measurable, and recovery procedures testable.", scope: "Production-style portfolio implementation using sanitized or synthetic data; it does not claim an AWS production deployment at RaveUp.", flow: ["S3 landing", "Glue / PySpark", "Redshift", "dbt & Airflow", "Monitoring & recovery"], delivered: ["Built SQL/Python and Glue/PySpark transformation paths for layered data processing.", "Defined quality, monitoring, security, recovery, and reliability controls.", "Published sanitized evidence and GitHub Actions verification."] },
    th: { label: "AWS / DATA PLATFORM", title: "AWS Production Data Engineering & Reliability Platform", summary: "แพลตฟอร์ม AWS แนว production-style สำหรับข้อมูล retail, vending และ payment ที่มี orchestration, quality controls, security, monitoring, recovery และหลักฐาน CI.", problem: "ข้อมูลปฏิบัติการข้ามโดเมนต้องมีสถาปัตยกรรมที่ทำให้เห็น failure วัดคุณภาพข้อมูล และทดสอบขั้นตอนการกู้คืนได้.", scope: "เป็น implementation แบบ production-style สำหรับ Portfolio ใช้ข้อมูล sanitized หรือ synthetic และไม่ได้อ้างว่า AWS ถูก deploy ใช้จริงที่ RaveUp.", flow: ["S3 landing", "Glue / PySpark", "Redshift", "dbt และ Airflow", "Monitoring และ recovery"], delivered: ["สร้างเส้นทาง transform ด้วย SQL/Python และ Glue/PySpark สำหรับ layered processing.", "กำหนด controls ด้าน quality, monitoring, security, recovery และ reliability.", "เผยแพร่หลักฐานที่ sanitize แล้วและการตรวจสอบจาก GitHub Actions."] }
  },
  "airflow-dbt": {
    number: "08", tone: "airflow", image: "assets/illustrations/projects/project-08-airflow-dbt-ecommerce-platform.webp", github: "https://github.com/bodinkc30-Pete/airflow-dbt-ecommerce-data-platform", tools: ["Airflow", "PostgreSQL", "dbt", "Docker", "Monitoring", "CI"], metrics: [["8", "Sources"], ["257", "dbt Pass"], ["37/37", "PostgreSQL Tests"], ["PASS", "Hosted CI"]],
    en: { label: "AIRFLOW / DBT", title: "Airflow + dbt E-commerce Data Platform", summary: "An e-commerce platform with eight source contracts, PostgreSQL, Airflow, dbt, monitoring, recovery drills, Docker, and hosted CI checkpoints.", problem: "An e-commerce warehouse needs enforceable source contracts, observable orchestration, quality checks, and recovery drills instead of one-off transformation scripts.", scope: "Portfolio platform using safe synthetic data and controlled failure drills. AWS infrastructure is reference/plan evidence; it does not claim a live ECS, RDS, or ALB deployment.", flow: ["8 source contracts", "PostgreSQL", "Airflow orchestration", "dbt warehouse", "Alert & recovery"], delivered: ["Ingested eight source contracts into PostgreSQL with validation.", "Orchestrated incremental warehouse layers using Airflow and dbt.", "Recorded 370 service-free tests, 37 PostgreSQL tests, 257 dbt build results, and hosted CI evidence."] },
    th: { label: "AIRFLOW / DBT", title: "Airflow + dbt E-commerce Data Platform", summary: "แพลตฟอร์ม E-commerce ที่มี 8 source contracts, PostgreSQL, Airflow, dbt, monitoring, recovery drills, Docker และ hosted CI checkpoints.", problem: "E-commerce warehouse ต้องมี source contracts ที่บังคับใช้ได้ orchestration ที่สังเกตได้ quality checks และ recovery drills ไม่ใช่เพียง script แปลงข้อมูลแบบครั้งเดียว.", scope: "เป็น Portfolio ที่ใช้ข้อมูลสังเคราะห์อย่างปลอดภัยและ controlled failure drills โครงสร้าง AWS เป็นหลักฐาน reference/plan ไม่ได้อ้างว่า deploy ECS, RDS หรือ ALB live runtime.", flow: ["8 source contracts", "PostgreSQL", "Airflow orchestration", "dbt warehouse", "Alert และ recovery"], delivered: ["รับ source contracts 8 ชุดเข้า PostgreSQL พร้อม validation.", "ควบคุม warehouse layers แบบ incremental ด้วย Airflow และ dbt.", "บันทึก service-free tests 370, PostgreSQL tests 37, dbt build results 257 และหลักฐาน hosted CI."] }
  }
};

const PROJECT_EVIDENCE = {
  "sql-ecommerce": [
    ["sql-flow", "assets/evidence/project-01/staged-to-core.svg", { en: "Staged-to-core flow", th: "เส้นทาง Staging ไป Core" }, { en: "Shows how raw exports pass through quality gates before safe outputs.", th: "แสดงข้อมูลจาก export ผ่าน quality gates ก่อนสร้างผลลัพธ์ที่ปลอดภัย" }],
    ["sql-quality", "assets/evidence/project-01/dq-rejected.svg", { en: "DQ and rejected records", th: "DQ และข้อมูลที่ถูกแยก" }, { en: "Makes failed rows traceable instead of silently dropping them.", th: "ทำให้ติดตามแถวที่ไม่ผ่านได้ แทนการทิ้งข้อมูลแบบเงียบ ๆ" }]
  ],
  "databricks-lakehouse": [
    ["lakehouse-flow", "assets/evidence/project-02/medallion-flow.svg", { en: "Medallion layers", th: "ชั้น Medallion" }, { en: "Synthetic Bronze-Silver-Gold flow with a trusted analytics boundary.", th: "เส้นทาง Bronze-Silver-Gold จากข้อมูลสังเคราะห์สู่ analytics ที่เชื่อถือได้" }],
    ["lakehouse-recovery", "assets/evidence/project-02/reliability-lab.svg", { en: "Reliability lab outcome", th: "ผลลัพธ์ Reliability Lab" }, { en: "A controlled failure is observed, diagnosed, and recovered.", th: "แสดงการสังเกต วินิจฉัย และกู้คืนจาก failure ที่ควบคุมไว้" }]
  ],
  "influencer-intelligence": [
    ["identity-resolution", "assets/evidence/project-03/entity-resolution.svg", { en: "Identity resolution", th: "การรวมตัวตน" }, { en: "Aliases resolve to a Golden Master with a review path.", th: "รวม aliases เป็น Golden Master พร้อมเส้นทางทบทวน" }],
    ["lineage", "assets/evidence/project-03/lineage-chain.svg", { en: "Lineage and provenance", th: "Lineage และ Provenance" }, { en: "Source records remain traceable through the matching decision.", th: "ติดตามข้อมูลต้นทางจนถึงเหตุผลของการจับคู่ได้" }]
  ],
  "marketing-campaign": [
    ["safe-input", "assets/evidence/project-04/safe-input.svg", { en: "Sanitized sample input", th: "ตัวอย่างข้อมูลที่ Sanitized" }, { en: "Synthetic payment and campaign rows shaped like the real data problem.", th: "ข้อมูล payment และ campaign สังเคราะห์ที่มีโครงสร้างตามปัญหาจริง" }],
    ["dq-findings", "assets/evidence/project-04/dq-findings.svg", { en: "Data Quality findings", th: "ผลตรวจ Data Quality" }, { en: "Recorded missing post dates and payment statuses from the audited report.", th: "แสดง missing post dates และ payment statuses ตามรายงานที่ตรวจสอบแล้ว" }],
    ["rejected-routing", "assets/evidence/project-04/rejected-routing.svg", { en: "Rejected-record routing", th: "เส้นทางข้อมูลที่ถูกแยก" }, { en: "Rejected rows carry a reason for diagnosis and remediation.", th: "แถวที่ไม่ผ่านมีเหตุผลเพื่อวิเคราะห์และแก้ไขต่อ" }],
    ["sqlite-output", "assets/evidence/project-04/sqlite-output.svg", { en: "SQLite analytical output", th: "ผลลัพธ์วิเคราะห์จาก SQLite" }, { en: "A portfolio-safe summary demonstrates the final reporting shape.", th: "สรุปผลแบบปลอดภัยที่แสดงรูปแบบรายงานปลายทาง" }]
  ],
  "ecommerce-pipeline": [
    ["excel-flow", "assets/evidence/project-05/excel-to-sqlite.svg", { en: "Excel to SQLite flow", th: "เส้นทาง Excel ไป SQLite" }, { en: "Shows validation and transformation before the analytical store.", th: "แสดง validation และ transformation ก่อนเข้า analytical store" }],
    ["pipeline-output", "assets/evidence/project-05/safe-output.svg", { en: "Safe analytical output", th: "ผลลัพธ์วิเคราะห์ที่ปลอดภัย" }, { en: "The output is reproducible and contains no private source rows.", th: "ผลลัพธ์ทำซ้ำได้และไม่มีข้อมูลต้นทางส่วนตัว" }]
  ],
  "bigquery-enterprise": [
    ["gcp-layers", "assets/evidence/project-06/layered-warehouse.svg", { en: "Layered GCP warehouse", th: "คลังข้อมูล GCP แบบ Layered" }, { en: "GCS landing flows into governed BigQuery layers.", th: "ข้อมูลจาก GCS ไหลเข้าสู่ BigQuery layers ที่มี governance" }],
    ["reconciliation", "assets/evidence/project-06/reconciliation.svg", { en: "Reconciliation result", th: "ผลการกระทบยอด" }, { en: "Counts and control totals are compared before publication.", th: "เปรียบเทียบจำนวนและ control totals ก่อนเผยแพร่" }]
  ],
  "aws-reliability": [
    ["aws-flow", "assets/evidence/project-07/aws-flow.svg", { en: "AWS reference flow", th: "Reference flow ของ AWS" }, { en: "Shows the planned S3, Glue, and Redshift control path.", th: "แสดงเส้นทางควบคุม S3, Glue และ Redshift ตามแผน" }],
    ["recovery", "assets/evidence/project-07/recovery-drill.svg", { en: "Failure and recovery drill", th: "การทดสอบ Failure และ Recovery" }, { en: "A controlled failure produces evidence for recovery validation.", th: "failure ที่ควบคุมไว้สร้างหลักฐานสำหรับตรวจสอบ recovery" }]
  ],
  "airflow-dbt": [
    ["dag-run", "assets/evidence/project-08/dag-run.svg", { en: "Airflow DAG run", th: "การรัน Airflow DAG" }, { en: "Eight source contracts move through observable orchestration steps.", th: "source contracts 8 ชุดผ่าน orchestration ที่สังเกตได้" }],
    ["dbt-tests", "assets/evidence/project-08/dbt-tests.svg", { en: "dbt model and test summary", th: "สรุป dbt model และ test" }, { en: "The warehouse build records model and test outcomes.", th: "การสร้าง warehouse บันทึกผล model และ test" }]
  ]
};

for (const [id, evidence] of Object.entries(PROJECT_EVIDENCE)) {
  PROJECT_DETAILS[id].evidence = evidence;
}

const COPY = {
  en: { back: "Back to projects", overview: "Project overview", problem: "Problem addressed", scope: "Portfolio scope", flow: "Architecture flow", delivered: "Engineering delivered", tools: "Tools used", evidence: "Verified evidence", evidenceLabel: "Synthetic / Sanitized portfolio evidence", closeEvidence: "Close evidence", github: "Open GitHub repository", notFoundTitle: "Project not found", notFoundText: "Please return to the project list and choose a project." },
  th: { back: "กลับไปหน้าโปรเจกต์", overview: "ภาพรวมโปรเจกต์", problem: "ปัญหาที่แก้", scope: "ขอบเขตของ Portfolio", flow: "ลำดับสถาปัตยกรรม", delivered: "สิ่งที่สร้างและพิสูจน์", tools: "เครื่องมือที่ใช้", evidence: "หลักฐานที่ตรวจสอบได้", evidenceLabel: "หลักฐาน Portfolio แบบสังเคราะห์ / Sanitized", closeEvidence: "ปิดหลักฐาน", github: "เปิด GitHub Repository", notFoundTitle: "ไม่พบโปรเจกต์", notFoundText: "กรุณากลับไปที่รายการโปรเจกต์แล้วเลือกโปรเจกต์อีกครั้ง" }
};

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
}

function renderEvidence(project, lang) {
  const copy = COPY[lang];
  return `<section class="project-detail-section project-evidence-gallery" data-evidence-gallery><div class="project-evidence-heading"><h2>${copy.evidence}</h2><span>${copy.evidenceLabel}</span></div><div class="project-evidence-grid">${project.evidence.map(([id, file, title, caption]) => `<button class="project-evidence-card" type="button" data-evidence-id="${escapeHtml(id)}" data-evidence-file="${escapeHtml(file)}" data-evidence-title="${escapeHtml(title[lang])}" data-evidence-caption="${escapeHtml(caption[lang])}"><img src="${escapeHtml(file)}" alt="${escapeHtml(title[lang])}" loading="lazy"><strong>${escapeHtml(title[lang])}</strong><span>${escapeHtml(caption[lang])}</span><small>${copy.evidenceLabel}</small></button>`).join("")}</div></section>`;
}

function renderProject(project, lang) {
  const copy = COPY[lang];
  const content = project[lang];
  document.title = `${content.title} | Bodin Krongchon`;
  return `
    <article class="project-detail-content project-tone-${project.tone}">
      <section class="project-detail-hero">
        <div class="project-detail-hero-copy">
          <span class="project-detail-number">${project.number}</span>
          <span class="project-detail-label">${escapeHtml(content.label)}</span>
          <p class="project-detail-eyebrow">${copy.overview}</p>
          <h1>${escapeHtml(content.title)}</h1>
          <p class="project-detail-summary">${escapeHtml(content.summary)}</p>
          <a class="project-primary-action" href="${project.github}" target="_blank" rel="noopener noreferrer">${copy.github} <span aria-hidden="true">↗</span></a>
        </div>
        <div class="project-detail-image-wrap"><img src="${project.image}" alt="" aria-hidden="true"></div>
      </section>
      <div class="project-detail-evidence" aria-label="${copy.evidence}">${project.metrics.map(([value, label]) => `<div><strong>${escapeHtml(value)}</strong><span>${escapeHtml(label)}</span></div>`).join("")}</div>
      <section class="project-detail-grid">
        <article><h2>${copy.problem}</h2><p>${escapeHtml(content.problem)}</p></article>
        <article><h2>${copy.scope}</h2><p>${escapeHtml(content.scope)}</p></article>
      </section>
      <section class="project-detail-section"><h2>${copy.flow}</h2><ol class="project-flow">${content.flow.map((step, index) => `<li><span>${String(index + 1).padStart(2, "0")}</span>${escapeHtml(step)}</li>`).join("")}</ol></section>
      <section class="project-detail-section"><h2>${copy.delivered}</h2><ul class="project-delivered">${content.delivered.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></section>
      ${renderEvidence(project, lang)}
      <section class="project-detail-tools"><h2>${copy.tools}</h2><div>${project.tools.map((tool) => `<span>${escapeHtml(tool)}</span>`).join("")}</div></section>
    </article>`;
}

function updateStaticCopy(lang) {
  const copy = COPY[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-project-copy]").forEach((element) => { element.textContent = copy[element.dataset.projectCopy]; });
  document.querySelectorAll("[data-project-language]").forEach((button) => button.classList.toggle("active", button.dataset.projectLanguage === lang));
}

document.addEventListener("DOMContentLoaded", () => {
  const id = new URLSearchParams(window.location.search).get("id");
  const project = PROJECT_DETAILS[id];
  const mount = document.querySelector("[data-project-detail]");
  const notFound = document.querySelector("[data-project-not-found]");
  const modal = document.querySelector("[data-evidence-modal]");
  let lastEvidenceFocus = null;
  let language = "en";
  try { language = localStorage.getItem("portfolio-language") || "en"; } catch (_) {}
  if (!COPY[language]) language = "en";

  const show = () => {
    updateStaticCopy(language);
    if (!project) { mount.hidden = true; notFound.hidden = false; return; }
    notFound.hidden = true;
    mount.hidden = false;
    mount.innerHTML = renderProject(project, language);
  };
  const closeEvidence = () => { if (!modal) return; modal.hidden = true; modal.setAttribute("aria-hidden", "true"); lastEvidenceFocus?.focus(); };
  mount.addEventListener("click", (event) => {
    const card = event.target.closest("[data-evidence-id]");
    if (!card || !modal) return;
    lastEvidenceFocus = card;
    modal.querySelector("[data-evidence-modal-image]").src = card.dataset.evidenceFile;
    modal.querySelector("[data-evidence-modal-image]").alt = card.dataset.evidenceTitle;
    modal.querySelector("[data-evidence-modal-title]").textContent = card.dataset.evidenceTitle;
    modal.querySelector("[data-evidence-modal-caption]").textContent = card.dataset.evidenceCaption;
    modal.querySelector("[data-evidence-modal-label]").textContent = COPY[language].evidenceLabel;
    modal.hidden = false; modal.setAttribute("aria-hidden", "false"); modal.querySelector("[data-evidence-modal-close]").focus();
  });
  modal?.addEventListener("click", (event) => { if (event.target === modal || event.target.closest("[data-evidence-modal-close]")) closeEvidence(); });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape" && modal && !modal.hidden) closeEvidence(); });
  document.querySelectorAll("[data-project-language]").forEach((button) => button.addEventListener("click", () => {
    language = button.dataset.projectLanguage;
    try { localStorage.setItem("portfolio-language", language); } catch (_) {}
    show();
  }));
  show();
});
