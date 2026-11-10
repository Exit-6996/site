# Perimeter Academy — Advanced Information Security Curriculum

**Bilingual course:** English and Russian  
**Estimated workload:** 92 hours  
**Structure:** 16 modules · 96 lessons · 16 guided labs · 16 field guides · 32 knowledge-check questions

## Teaching model

Each module follows the same learning cycle: clear outcomes → six short lessons → a guided applied lab → concrete deliverables → a four-part reference guide → a two-question knowledge check with explanatory feedback. The public syllabus exposes the module and lesson map; detailed materials are returned only after server-side enrollment verification.

The structure adapts a lesson/task progression and frequent feedback model observed in Prosto DevOps. Perimeter Academy does **not** copy its text or claim to reproduce its browser terminal, prebuilt runtime environments, or automatic terminal-task grading. In this implementation, labs are guided assignments with evidence/deliverables; module checks are automatically scored in the site.

## Curriculum map

### Module 01 — Security foundations, ethics & the profession (3.5 hours)
- Explain confidentiality, integrity, availability, and how they relate to business risk.
- Identify assets, owners, threats, weaknesses, controls, and evidence.
- Distinguish defensive work, authorized assessment, incident response, and governance roles.
- Define written authorization, scope, safe handling, and responsible reporting before practical work.

**Lessons**
1. **What information security protects** — Identify the asset and the security property at risk. (20 min; read)
2. **The CIA triad and security objectives** — Classify confidentiality, integrity, availability, authenticity, and accountability needs. (25 min; interactive)
3. **Assets, threats, vulnerabilities, and risk** — Build a simple risk statement from a fictional business scenario. (30 min; scenario)
4. **Controls: prevent, detect, respond, recover** — Match safeguards to the stage of an incident and explain their limits. (25 min; matching)
5. **Security roles and the work of a security team** — Compare SOC, security engineering, application security, GRC, and response work. (25 min; case-study)
6. **Ethics, authorization, and evidence** — Write a safe scope statement and identify when work must stop. (30 min; mission)

**Lab:** Create a security baseline for a fictional organization. You have joined the security team of Northstar Library, a fictional service with a public website, staff laptops, a member database, and a small cloud account. Use only the supplied scenario facts. No live systems are involved.

**Lab deliverables**
- Asset and owner register
- Three evidence-based risk statements
- Control map and written scope note

**Reference guide:** Security fundamentals field guide — Think in assets and outcomes; Use a consistent risk model; Choose layered controls; Work professionally

### Module 02 — Linux, endpoints & system hardening (6 hours)
- Navigate Linux users, groups, files, permissions, processes, services, and logs.
- Explain endpoint security layers: updates, host firewall, disk encryption, and endpoint protection.
- Review a baseline for secure configuration and least privilege.
- Document a hardening change and verify that business functionality still works.

**Lessons**
1. **Linux layout and essential system concepts** — Locate configuration, logs, user data, services, and temporary files. (30 min; read)
2. **Users, groups, and file permissions** — Explain ownership and choose a least-privilege permission model. (35 min; interactive)
3. **Processes, services, and startup** — Recognize service ownership, startup behavior, and unexpected changes. (35 min; debug)
4. **System logs and audit events** — Read timestamps, event sources, severity, and identity context. (35 min; log-analysis)
5. **Endpoint protection baseline** — Review updates, host firewall, encryption, screen lock, and endpoint telemetry. (35 min; checklist)
6. **Hardening, change control, and rollback** — Plan a reversible baseline change and verify the result. (40 min; mission)

**Lab:** Review and harden a fictional Linux workstation. A supplied inventory and configuration snapshot describe a fictional staff workstation. You will assess the configuration on paper and in a prepared local training image if one is provided. Do not change your everyday device or a shared computer.

**Lab deliverables**
- Endpoint baseline checklist
- Permission review table
- Two change records with verification and rollback notes

**Reference guide:** Linux and endpoint hardening handbook — Understand the host before changing it; Apply least privilege; Protect and observe endpoints; Make changes safely

### Module 03 — Networks, protocols & traffic analysis (6 hours)
- Explain addressing, routing, DNS, TCP/UDP, TLS, HTTP, and common network boundaries.
- Read a supplied packet summary and network diagram without collecting third-party traffic.
- Recognize normal versus unusual patterns in synthetic network records.
- Recommend segmentation and logging controls from documented business needs.

**Lessons**
1. **How data moves across networks** — Trace a request from name resolution to application response. (30 min; diagram)
2. **IP addressing, subnets, and routing** — Interpret a network diagram and identify trust boundaries. (35 min; interactive)
3. **DNS, TCP, UDP, and common services** — Match protocol behavior to a synthetic event sequence. (35 min; matching)
4. **HTTP, TLS, certificates, and proxies** — Explain what encryption protects and what metadata may remain visible. (35 min; case-study)
5. **Reading network evidence safely** — Interpret a prepared packet summary and identify its limits. (35 min; analysis)
6. **Segmentation and network policy** — Design a simple access matrix between fictional network zones. (40 min; mission)

**Lab:** Reconstruct a fictional service request and review network zones. Use an instructor-supplied packet summary, DNS records, and network diagram. The data is synthetic and reserved for documentation. Do not capture traffic from public networks or other people.

**Lab deliverables**
- Annotated flow diagram
- Event timeline with evidence limitations
- Two prioritized network-control recommendations

**Reference guide:** Network security and traffic interpretation guide — Follow the complete path; Interpret evidence carefully; Design network boundaries; Make recommendations actionable

### Module 04 — Asset inventory & vulnerability management (5 hours)
- Maintain a reliable inventory of devices, applications, data stores, cloud services, and owners.
- Understand vulnerability advisories, severity, exposure, exploitability context, and business impact.
- Prioritize remediation using asset criticality, exposure, evidence, and available mitigations.
- Track exceptions, patch validation, and remediation deadlines.

**Lessons**
1. **Asset lifecycle and ownership** — Describe how assets are added, changed, retired, and assigned an owner. (30 min; checklist)
2. **Vulnerability advisories and identifiers** — Read an advisory and extract affected product, version, conditions, and fix. (35 min; analysis)
3. **Severity is not business priority** — Compare technical severity with business exposure and asset criticality. (35 min; scenario)
4. **Patch and configuration lifecycle** — Plan a maintenance window, validation, rollback, and exception process. (35 min; mission)
5. **Exposure and compensating controls** — Identify when temporary controls are needed while a fix is pending. (30 min; case-study)
6. **Reporting and remediation tracking** — Produce a clear owner-based remediation record with evidence. (35 min; debug)

**Lab:** Prioritize a fictional vulnerability backlog. Review a synthetic asset register and a set of fictional vulnerability advisories. No scanning or interaction with real systems is required.

**Lab deliverables**
- Normalized asset register
- Prioritized remediation backlog
- Owner-based remediation dashboard

**Reference guide:** Asset and vulnerability management guide — Build an accurate inventory; Read advisories in context; Prioritize and remediate; Prove closure

### Module 05 — Identity, authentication & access management (5 hours)
- Separate identity proofing, authentication, authorization, and audit/accountability.
- Apply MFA, SSO, role-based access, least privilege, and controlled service identities.
- Review sessions, account lifecycle, access changes, and privileged operations.
- Test allowed and denied access using fictional roles and records.

**Lessons**
1. **Identity lifecycle** — Map joiner, mover, and leaver processes and their approval points. (30 min; diagram)
2. **Authentication factors and MFA** — Compare factor types and identify where stronger authentication is justified. (30 min; matching)
3. **SSO, federation, and OAuth concepts** — Explain identity provider, client, resource owner, and API permissions. (35 min; interactive)
4. **Authorization and role design** — Build a deny-by-default role matrix and test object-level access. (35 min; debug)
5. **Sessions, secrets, and service accounts** — Review session expiry, cookie protections, and ownership of machine identities. (30 min; case-study)
6. **Access reviews and privileged access** — Perform a periodic access review and document removal of unnecessary rights. (35 min; mission)

**Lab:** Review a sample identity and access matrix. Use a fictional organization, role table, and access records. The task is to improve the design and verify business permissions, not to access a real account.

**Lab deliverables**
- Least-privilege role matrix
- Lifecycle test results
- Access-review record

**Reference guide:** Identity and access management handbook — Manage the full identity lifecycle; Strengthen authentication; Authorize every action; Govern privileged and machine access

### Module 06 — Cryptography, keys & public key infrastructure (5 hours)
- Distinguish encoding, hashing, encryption, message authentication, and digital signatures.
- Explain password hashing, salts, key storage, rotation, revocation, and recovery.
- Read certificate identity, issuer, validity, key usage, and trust-chain information.
- Choose a cryptographic control based on the property it is meant to provide.

**Lessons**
1. **Encoding, hashes, and encryption** — Choose the correct concept for a data-handling requirement. (25 min; matching)
2. **Password storage and salts** — Explain why password storage uses a dedicated, deliberately costly hash function. (30 min; interactive)
3. **Symmetric and public-key cryptography** — Compare key use, performance, and key-distribution requirements. (30 min; diagram)
4. **Digital signatures and message authentication** — Match signatures and message authentication to integrity and origin needs. (30 min; case-study)
5. **TLS certificates and trust chains** — Inspect certificate identity, issuer, dates, and trust status. (35 min; analysis)
6. **Key lifecycle and recovery** — Document key ownership, storage, rotation, revocation, and recovery. (35 min; mission)

**Lab:** Verify sample files and inspect a training certificate. Use non-sensitive sample files and a certificate prepared for the course. The exercise tests selection of controls and interpretation of evidence; it does not ask learners to create or deploy trust infrastructure.

**Lab deliverables**
- Checksum comparison table
- Certificate inspection record
- Key lifecycle inventory

**Reference guide:** Cryptography and PKI field guide — Choose the security property; Protect password verifiers; Manage keys and certificates; Record evidence and limits

### Module 07 — Web application and API security (7 hours)
- Understand browser/server trust boundaries, request lifecycles, and common web architecture.
- Review access control, input validation, output encoding, session handling, and error behavior.
- Recognize major classes of application risk using the OWASP Top 10 as a learning taxonomy.
- Write findings with safe evidence, impact, remediation, and regression tests.

**Lessons**
1. **Map a web request and trust boundaries** — Trace browser, API, application, and data-store responsibilities. (30 min; diagram)
2. **Authentication versus authorization** — Identify server-side checks required for each protected object. (35 min; debug)
3. **Input validation and output encoding** — Select validation and encoding controls for the data context. (35 min; matching)
4. **Session, cookie, and token handling** — Review expiry, rotation, storage, and revocation requirements. (35 min; checklist)
5. **Common web risk categories** — Classify design and implementation weaknesses without using live targets. (40 min; case-study)
6. **Secure code review and regression tests** — Connect a code-level root cause to a safe test and durable fix. (40 min; debug)

**Lab:** Review a deliberately vulnerable local training application. Use the provided source excerpts and test cases for a fictional application in a local training environment. Do not test public websites or services.

**Lab deliverables**
- Application data-flow diagram
- Finding and remediation table
- Regression test evidence

**Reference guide:** Secure web application review guide — Start with architecture; Enforce server-side authorization; Handle input, output, and secrets; Verify fixes and report

### Module 08 — Secure software delivery & DevSecOps (6 hours)
- Integrate security requirements into planning, design, coding, testing, release, and maintenance.
- Understand dependency, secret, code, and artifact risk at a conceptual level.
- Design a proportionate CI security gate with useful findings and ownership.
- Create a software bill of materials concept and a response path for vulnerable dependencies.

**Lessons**
1. **Secure requirements and threat modeling** — Turn business and privacy needs into testable acceptance criteria. (30 min; workshop)
2. **Code review and secure coding principles** — Review changes for trust boundaries, authorization, data handling, and error paths. (35 min; code-review)
3. **Dependency and component risk** — Interpret package inventory, version support, and advisory information. (30 min; analysis)
4. **Secrets and build artifact hygiene** — Define safe handling for secrets, build outputs, and release credentials. (30 min; checklist)
5. **Security checks in CI/CD** — Select checks, thresholds, exception ownership, and feedback loops. (35 min; pipeline-review)
6. **Release evidence and vulnerability response** — Build a traceable release decision and remediation workflow. (35 min; mission)

**Lab:** Review a fictional software delivery pipeline. Review a supplied CI pipeline summary, dependency inventory, and release checklist. All examples are static and synthetic; there is no live repository or service to attack.

**Lab deliverables**
- Annotated pipeline map
- Dependency review and exception register
- Release evidence checklist

**Reference guide:** Secure delivery lifecycle guide — Shift security into design; Review code and dependencies; Protect build and release systems; Make security checks actionable

### Module 09 — Network defense, architecture & secure remote access (6 hours)
- Design layered network zones for users, public services, administration, and sensitive data.
- Understand firewall policy, secure remote administration, VPN concepts, and network device management.
- Review secure network architecture using documented flows and change records.
- Assess resilience controls such as redundancy, backup connectivity, and configuration recovery.

**Lessons**
1. **Network security architecture** — Translate business services into zones, trust boundaries, and approved flows. (30 min; diagram)
2. **Firewall policy and rule ownership** — Review rule purpose, source, destination, service, owner, and expiry. (35 min; policy-review)
3. **Secure remote access** — Compare MFA, managed devices, restricted admin paths, and session controls. (30 min; case-study)
4. **Network device management** — Identify management-plane protections and configuration ownership. (30 min; checklist)
5. **Resilience and recovery** — Review redundancy, configuration backups, and recovery testing. (30 min; scenario)
6. **Architecture review mission** — Present a prioritized plan with operational trade-offs and validation. (35 min; mission)

**Lab:** Review a fictional enterprise network design. Use a supplied architecture diagram, firewall-rule table, and remote-access policy. This is a documentation review; do not connect to or probe any network.

**Lab deliverables**
- Revised network zone diagram
- Firewall policy review table
- Remote-access and recovery recommendations

**Reference guide:** Network architecture defense guide — Design zones around purpose; Govern firewall policy; Protect remote administration; Plan for recovery

### Module 10 — Cloud, containers & infrastructure security (6 hours)
- Understand shared responsibility and cloud identity, network, storage, and logging controls.
- Review configuration-as-code and change histories for security-relevant drift.
- Understand container image, runtime, secret, and orchestration security concepts.
- Create a practical cloud hardening and recovery checklist.

**Lessons**
1. **Shared responsibility and cloud identity** — Separate provider controls from customer configuration and access decisions. (30 min; matching)
2. **Cloud network and storage controls** — Review exposure, encryption, backup, and data-owner requirements. (35 min; config-review)
3. **Infrastructure as code review** — Review proposed changes for access, network, and data exposure. (35 min; code-review)
4. **Container image and runtime hygiene** — Understand base images, patching, privileges, and runtime boundaries. (35 min; checklist)
5. **Orchestration and secret management** — Review workload identity, namespace boundaries, and secret ownership. (35 min; case-study)
6. **Cloud incident readiness** — Define logs, backup ownership, evidence sources, and recovery actions. (35 min; mission)

**Lab:** Audit a synthetic cloud and container environment. Review a fictional cloud configuration export, storage policy, identity-role map, and container inventory. No cloud account or live cluster is required.

**Lab deliverables**
- Shared-responsibility matrix
- Cloud configuration findings
- Container and recovery hardening plan

**Reference guide:** Cloud and container security guide — Understand shared responsibility; Protect cloud identities and data; Harden containers and orchestration; Review infrastructure changes

### Module 11 — Logging, SIEM & detection engineering (7 hours)
- Understand endpoint, identity, network, application, and cloud telemetry sources.
- Normalize event fields and correlate timestamps while preserving original evidence.
- Build detection logic with a purpose, data source, threshold rationale, and false-positive analysis.
- Triage alerts using context, severity, confidence, and business impact.

**Lessons**
1. **Telemetry sources and event schemas** — Select sources needed to answer a defined security question. (30 min; matching)
2. **Time, identity, and normalization** — Normalize timestamps and fields without losing source context. (35 min; data-cleaning)
3. **Correlation and baselines** — Connect related events and distinguish expected operational activity. (35 min; analysis)
4. **Detection logic and alert quality** — Define event source, grouping, time window, threshold, and exceptions. (35 min; debug)
5. **Triage, severity, and escalation** — Write a concise evidence-based triage decision. (35 min; scenario)
6. **Detection tuning and metrics** — Improve signal quality and measure coverage, false positives, and response time. (35 min; mission)

**Lab:** Investigate a synthetic alert set. Use synthetic authentication, endpoint, and application events with fictional users and reserved addresses. The exercise is a defensive analysis of supplied logs.

**Lab deliverables**
- Normalized event timeline
- Detection hypothesis and test cases
- Triage note and tuning proposal

**Reference guide:** SOC monitoring and detection playbook — Know your telemetry; Build a defensible timeline; Design useful detections; Triage consistently

### Module 12 — Incident response & digital forensics (7 hours)
- Use a repeatable lifecycle: prepare, detect, analyze, contain, eradicate, recover, and learn.
- Preserve evidence with timestamps, provenance, access control, and chain-of-custody notes.
- Build timelines from synthetic endpoint, identity, and application records.
- Coordinate business owners, technical responders, legal/privacy contacts, and communications.

**Lessons**
1. **Incident roles and preparation** — Identify incident lead, technical owners, business decision-makers, and escalation contacts. (30 min; role-play)
2. **Evidence handling and preservation** — Record provenance, time, integrity, access, and handling decisions. (35 min; checklist)
3. **Timeline reconstruction** — Correlate synthetic records while stating assumptions and gaps. (35 min; analysis)
4. **Containment and eradication decisions** — Compare options by impact, reversibility, and evidence preservation. (35 min; scenario)
5. **Recovery and validation** — Define clean-state criteria, monitoring, and service-owner acceptance. (35 min; mission)
6. **Post-incident review and lessons** — Turn the incident into owned, measurable improvements. (30 min; workshop)

**Lab:** Run a tabletop incident with synthetic evidence. A fictional organization reports unusual account activity and a disrupted service. Use the supplied event bundle and role cards. This is a decision-making simulation; no real device is accessed.

**Lab deliverables**
- Incident timeline and evidence register
- Containment and recovery decision log
- Post-incident action register

**Reference guide:** Incident response and evidence handbook — Prepare before the alert; Preserve evidence; Contain with context; Recover and learn

### Module 13 — Threat modeling, threat intelligence & attack surfaces (5 hours)
- Use structured threat modeling to identify assets, trust boundaries, threat events, and mitigations.
- Distinguish threat intelligence sources, confidence, relevance, and expiration.
- Use behavior frameworks as a shared vocabulary for defensive coverage, not as instructions.
- Translate threat insights into architecture, logging, and prioritization decisions.

**Lessons**
1. **Assets, trust boundaries, and attack surface** — Map interfaces and data flows that change the risk picture. (30 min; diagram)
2. **STRIDE-style threat brainstorming** — Explore spoofing, tampering, repudiation, disclosure, denial, and elevation as design questions. (35 min; workshop)
3. **Threat intelligence quality** — Assess source, date, confidence, relevance, and handling restrictions. (30 min; analysis)
4. **Behavior frameworks for defenders** — Map observed behaviors to defensive telemetry and mitigations at a high level. (30 min; matching)
5. **Attack-surface change review** — Identify how product or supplier changes create new exposures. (30 min; case-study)
6. **Threat-informed improvement plan** — Prioritize mitigations and define evidence that coverage improved. (35 min; mission)

**Lab:** Threat-model a fictional member portal. Review a fictional service diagram, data classification, and business roles. Use threat categories to discuss design risks and defenses; do not attempt exploitation.

**Lab deliverables**
- Threat model and data-flow diagram
- Threat-to-control mapping
- Prioritized improvement plan

**Reference guide:** Threat modeling and intelligence guide — Model the system; Evaluate intelligence carefully; Use behavior frameworks defensively; Prioritize mitigation

### Module 14 — Governance, risk, compliance & privacy (5 hours)
- Translate business obligations into policies, standards, procedures, and measurable controls.
- Understand risk acceptance, supplier assurance, evidence, audit, and exception management.
- Map personal-data flows, purpose, retention, access, and deletion responsibilities.
- Communicate compliance gaps without confusing a checklist with actual security.

**Lessons**
1. **Governance documents and ownership** — Separate policy, standard, procedure, and evidence ownership. (25 min; matching)
2. **Risk treatment and acceptance** — Document reduce, avoid, transfer, or accept decisions and approvals. (30 min; scenario)
3. **Privacy and data lifecycle** — Map purpose, collection, use, sharing, retention, and deletion. (35 min; data-map)
4. **Supplier and third-party assurance** — Review data access, responsibilities, incident notice, and exit terms. (30 min; case-study)
5. **Audit evidence and control testing** — Select evidence that shows a control operates, not only that a document exists. (30 min; audit)
6. **Policy exceptions and continuous review** — Assign an owner, compensating control, expiry, and reapproval process. (30 min; mission)

**Lab:** Build a risk, privacy, and control register. Use a fictional service with synthetic customer data, supplier dependencies, and policy requirements. The exercise is a documentation and decision workshop, not legal advice.

**Lab deliverables**
- Risk and control register
- Personal-data flow map
- Supplier and policy-exception review

**Reference guide:** Governance, risk, compliance, and privacy guide — Turn obligations into controls; Treat risk transparently; Respect privacy and data lifecycle; Assess suppliers and evidence

### Module 15 — Security operations, automation & professional communication (4 hours)
- Run repeatable security workflows for tickets, escalations, evidence, and change.
- Understand where simple automation helps and where human approval is required.
- Write concise findings, runbooks, and status updates for technical and non-technical readers.
- Prepare a portfolio that demonstrates reasoning, documentation, and responsible practice.

**Lessons**
1. **Security tickets and workflow states** — Create a ticket with scope, owner, evidence, priority, and next action. (25 min; workflow)
2. **Automation boundaries and approvals** — Separate safe repeatable actions from high-impact actions requiring approval. (25 min; scenario)
3. **Runbooks and operational handover** — Write steps, preconditions, verification, escalation, and rollback. (25 min; writing)
4. **Metrics and service-level thinking** — Choose metrics that reveal quality, backlog health, and response outcomes. (25 min; analysis)
5. **Communicating findings and uncertainty** — Adapt the same evidence for technical owners and executives. (25 min; writing)
6. **Portfolio and interview preparation** — Present safe lab work, decisions, trade-offs, and lessons learned. (30 min; workshop)

**Lab:** Turn a synthetic alert into a complete security work item. Use a fictional alert and its evidence to create a ticket, runbook excerpt, escalation note, and management summary. No real notification or system integration is involved.

**Lab deliverables**
- Security ticket and triage record
- Runbook and escalation note
- Portfolio-ready incident summary

**Reference guide:** Security operations and communication guide — Make work traceable; Automate with guardrails; Write useful runbooks; Communicate with precision

### Module 16 — Capstone: end-to-end security assessment & response (8 hours)
- Combine asset, architecture, identity, application, cloud, and monitoring evidence in one scenario.
- Prioritize findings and distinguish confirmed issues from assumptions or missing evidence.
- Produce an executive summary, technical report, remediation roadmap, and response playbook.
- Present a defensible conclusion with scope, methods, limitations, and follow-up validation.

**Lessons**
1. **Capstone briefing and scope** — Understand the fictional organization, objectives, constraints, and evidence bundle. (30 min; briefing)
2. **Asset and architecture assessment** — Build the system map and identify owners and critical dependencies. (40 min; analysis)
3. **Identity, application, and cloud review** — Combine configuration and access evidence into defensible findings. (40 min; case-study)
4. **Detection and incident scenario** — Build a timeline from synthetic telemetry and recommend response decisions. (45 min; incident-mission)
5. **Risk prioritization and remediation plan** — Rank issues by impact, exposure, evidence, and feasibility. (40 min; workshop)
6. **Report writing and peer review** — Write clear findings, caveats, and management recommendations. (45 min; writing)

**Lab:** Integrated assessment of the fictional Northstar service. This final exercise combines a fictional architecture, asset register, access matrix, code-review excerpts, cloud configuration, synthetic event logs, and an incident timeline. All evidence is course-created. The goal is a professional defensive assessment, not to compromise a system.

**Lab deliverables**
- Scope and evidence register
- Prioritized technical findings and treatment plan
- Executive and technical report with presentation outline

**Reference guide:** Capstone delivery and assessment handbook — Start with scope and evidence; Connect findings across domains; Prioritize and plan remediation; Present and defend the result

## Capstone and completion

Module 16 is the capstone. Learners review one fictional organization using course-provided architecture, asset, access, application, cloud, and synthetic monitoring evidence. They submit a scope and evidence register, prioritized findings, a remediation roadmap, an incident note, and an executive/technical report. The assessment emphasizes defensible reasoning, scope discipline, evidence limitations, and useful recommendations—not exploiting a real target.

A module check is marked complete when all questions in that module are answered correctly. Incorrect answers show an explanation and can be retried. This browser-session progress indicator is a learning aid, not a formal certification record. Lab deliverables are not automatically graded in this version.

## Practice and safety boundaries

- Use course-created fictional scenarios and synthetic data, your own isolated training environment, or systems covered by explicit written authorization.
- Do not scan, test, access, or change third-party systems without written permission and a clearly defined scope.
- Keep evidence minimal, protect personal and confidential data, and report uncertainty honestly.
- Exercises focus on defensive design, secure configuration, detection, response, assessment reporting, and governance.

## Краткая карта курса на русском

**Объём:** около 92 часов · **Структура:** 16 модулей, 96 уроков, 16 лабораторных работ, 16 руководств и 32 вопроса для проверки знаний.

Каждый модуль состоит из результатов обучения, шести коротких уроков, практической лабораторной работы, списка сдаваемых материалов, четырёхчастного справочного руководства и проверки из двух вопросов с пояснениями.

### Модуль 01 — Основы безопасности, этика и профессия (3.5 ч)
- Объяснять конфиденциальность, целостность, доступность и их связь с бизнес-риском.
- Определять активы, владельцев, угрозы, слабые места, меры защиты и доказательства.
- Различать защитную работу, согласованную оценку, реагирование на инциденты и управление безопасностью.
- До практики определять письменное разрешение, границы работ, правила обращения с данными и порядок отчётности.

**Уроки**
1. **Что защищает информационная безопасность** — Определять актив и свойство безопасности, которому угрожает риск. (20 мин; read)
2. **Триада CIA и цели безопасности** — Различать конфиденциальность, целостность, доступность, подлинность и подотчётность. (25 мин; interactive)
3. **Активы, угрозы, уязвимости и риск** — Составлять простое описание риска по вымышленному сценарию. (30 мин; scenario)
4. **Меры защиты: предотвращение, обнаружение, реагирование и восстановление** — Соотносить меры с этапами инцидента и объяснять их ограничения. (25 мин; matching)
5. **Роли и работа команды безопасности** — Сравнивать работу SOC, инженеров безопасности, AppSec, GRC и специалистов по реагированию. (25 мин; case-study)
6. **Этика, разрешение и доказательства** — Составлять безопасное описание границ работ и определять, когда нужно остановиться. (30 мин; mission)

**Лабораторная работа:** Создание базового профиля безопасности вымышленной организации. Вы присоединились к команде безопасности Northstar Library — вымышленного сервиса с публичным сайтом, ноутбуками сотрудников, базой читателей и небольшим облачным аккаунтом. Используйте только факты из сценария. Реальных систем в задании нет.

**Результаты, которые нужно сдать**
- Реестр активов и владельцев
- Три обоснованных описания риска
- Карта мер защиты и описание границ работ

**Справочное руководство:** Практическое руководство по основам безопасности — Начинайте с активов и последствий; Используйте единую модель риска; Выбирайте эшелонированные меры; Работайте профессионально

### Модуль 02 — Linux, защита конечных устройств и усиление конфигурации (6 ч)
- Работать с пользователями, группами, файлами, правами, процессами, службами и журналами Linux.
- Объяснять уровни защиты конечного устройства: обновления, локальный межсетевой экран, шифрование диска и средства защиты.
- Проверять базовый профиль безопасной конфигурации и принцип наименьших привилегий.
- Документировать изменение конфигурации и проверять, что рабочие функции не нарушены.

**Уроки**
1. **Структура Linux и основные понятия** — Находить конфигурацию, журналы, данные пользователей, службы и временные файлы. (30 мин; read)
2. **Пользователи, группы и права файлов** — Объяснять владельцев и выбирать модель прав по принципу наименьших привилегий. (35 мин; interactive)
3. **Процессы, службы и запуск системы** — Распознавать владельцев служб, поведение при запуске и неожиданные изменения. (35 мин; debug)
4. **Системные журналы и события аудита** — Читать время, источник события, уровень важности и контекст учётной записи. (35 мин; log-analysis)
5. **Базовая защита конечного устройства** — Проверять обновления, локальный экран, шифрование, блокировку и телеметрию. (35 мин; checklist)
6. **Усиление конфигурации, изменения и откат** — Планировать обратимое изменение базовой конфигурации и проверять результат. (40 мин; mission)

**Лабораторная работа:** Проверка и усиление защиты вымышленной Linux-рабочей станции. В предоставленном инвентаре и снимке конфигурации описана вымышленная рабочая станция сотрудника. Проведите оценку конфигурации по материалам или в подготовленном локальном учебном образе, если он предоставлен. Не меняйте личное устройство или общий компьютер.

**Результаты, которые нужно сдать**
- Чек-лист базовой защиты устройства
- Таблица проверки прав
- Две записи об изменениях с проверкой и планом отката

**Справочное руководство:** Руководство по защите Linux и конечных устройств — Изучите устройство до изменений; Применяйте наименьшие привилегии; Защищайте и наблюдайте конечные устройства; Безопасно вносите изменения

### Модуль 03 — Сети, протоколы и анализ трафика (6 ч)
- Объяснять адресацию, маршрутизацию, DNS, TCP/UDP, TLS, HTTP и границы сетей.
- Читать предоставленную сводку пакетов и схему сети, не собирая трафик третьих лиц.
- Распознавать обычные и необычные последовательности в синтетических сетевых записях.
- Рекомендовать сегментацию и журналирование исходя из документированных бизнес-потребностей.

**Уроки**
1. **Как данные проходят через сеть** — Прослеживать запрос от разрешения имени до ответа приложения. (30 мин; diagram)
2. **IP-адресация, подсети и маршрутизация** — Читать схему сети и определять границы доверия. (35 мин; interactive)
3. **DNS, TCP, UDP и распространённые службы** — Соотносить поведение протоколов с синтетической последовательностью событий. (35 мин; matching)
4. **HTTP, TLS, сертификаты и прокси** — Объяснять, что защищает шифрование и какие метаданные могут оставаться видимыми. (35 мин; case-study)
5. **Безопасное чтение сетевых доказательств** — Анализировать подготовленную сводку пакетов и её ограничения. (35 мин; analysis)
6. **Сегментация и сетевые политики** — Проектировать простую матрицу доступа между вымышленными зонами сети. (40 мин; mission)

**Лабораторная работа:** Восстановление пути запроса и проверка сетевых зон. Используйте предоставленную преподавателем сводку пакетов, записи DNS и схему сети. Данные синтетические и зарезервированы для документации. Не собирайте трафик публичных сетей или других людей.

**Результаты, которые нужно сдать**
- Аннотированная схема потоков
- Хронология событий с ограничениями доказательств
- Две приоритетные рекомендации по сетевым мерам

**Справочное руководство:** Руководство по сетевой безопасности и интерпретации трафика — Прослеживайте весь путь; Осторожно интерпретируйте доказательства; Проектируйте сетевые границы; Делайте рекомендации применимыми

### Модуль 04 — Инвентаризация активов и управление уязвимостями (5 ч)
- Вести достоверный реестр устройств, приложений, хранилищ данных, облачных сервисов и владельцев.
- Понимать бюллетени безопасности, критичность, экспозицию, контекст эксплуатации и бизнес-ущерб.
- Расставлять приоритеты исправлений по критичности актива, экспозиции, доказательствам и доступным мерам.
- Отслеживать исключения, проверку обновлений и сроки устранения.

**Уроки**
1. **Жизненный цикл и владельцы активов** — Определять порядок добавления, изменения, вывода из эксплуатации и назначения владельца актива. (30 мин; checklist)
2. **Бюллетени безопасности и идентификаторы** — Читать бюллетень и выделять затронутый продукт, версию, условия и исправление. (35 мин; analysis)
3. **Критичность не равна бизнес-приоритету** — Сравнивать техническую критичность с бизнес-экспозицией и важностью актива. (35 мин; scenario)
4. **Жизненный цикл обновлений и конфигурации** — Планировать окно обслуживания, проверку, откат и процесс исключений. (35 мин; mission)
5. **Экспозиция и компенсирующие меры** — Определять временные меры защиты на период ожидания исправления. (30 мин; case-study)
6. **Отчётность и отслеживание исправлений** — Составлять понятную запись об исправлении с владельцем и доказательствами. (35 мин; debug)

**Лабораторная работа:** Приоритизация вымышленного списка уязвимостей. Изучите синтетический реестр активов и набор вымышленных бюллетеней безопасности. Сканирование и взаимодействие с реальными системами не требуются.

**Результаты, которые нужно сдать**
- Нормализованный реестр активов
- Приоритизированный список исправлений
- Сводка по исправлениям с назначенными владельцами

**Справочное руководство:** Руководство по инвентаризации активов и управлению уязвимостями — Создайте достоверный реестр; Читайте бюллетени с учётом контекста; Определяйте приоритет и устраняйте; Подтверждайте закрытие

### Модуль 05 — Идентификация, аутентификация и управление доступом (5 ч)
- Различать подтверждение личности, аутентификацию, авторизацию и аудит/подотчётность.
- Применять MFA, SSO, ролевой доступ, наименьшие привилегии и контролируемые сервисные учётные записи.
- Проверять сессии, жизненный цикл аккаунтов, изменения доступа и привилегированные операции.
- Тестировать разрешённый и запрещённый доступ на вымышленных ролях и записях.

**Уроки**
1. **Жизненный цикл идентификации** — Составлять схему процессов приёма, перевода и увольнения с точками согласования. (30 мин; diagram)
2. **Факторы аутентификации и MFA** — Сравнивать типы факторов и определять, где нужна усиленная аутентификация. (30 мин; matching)
3. **SSO, федерация и основы OAuth** — Объяснять роли поставщика идентификации, клиента, владельца ресурса и прав API. (35 мин; interactive)
4. **Авторизация и проектирование ролей** — Создавать матрицу ролей по принципу запрета по умолчанию и проверять доступ к объектам. (35 мин; debug)
5. **Сессии, секреты и сервисные учётные записи** — Проверять срок сессий, защиту cookie и владельцев машинных учётных записей. (30 мин; case-study)
6. **Пересмотр доступа и привилегированный доступ** — Проводить периодический пересмотр доступа и документировать снятие лишних прав. (35 мин; mission)

**Лабораторная работа:** Проверка вымышленной матрицы идентификации и доступа. Используйте вымышленную организацию, таблицу ролей и записи доступа. Задача — улучшить схему и проверить права для бизнес-процессов, а не входить в реальные аккаунты.

**Результаты, которые нужно сдать**
- Матрица ролей с минимальными правами
- Результаты проверки жизненного цикла
- Запись пересмотра доступа

**Справочное руководство:** Руководство по управлению идентификацией и доступом — Управляйте полным жизненным циклом; Усиливайте аутентификацию; Проверяйте каждое действие; Управляйте привилегиями и машинным доступом

### Модуль 06 — Криптография, ключи и инфраструктура открытых ключей (5 ч)
- Различать кодирование, хеширование, шифрование, аутентификацию сообщений и цифровые подписи.
- Объяснять хеширование паролей, соль, хранение, ротацию, отзыв и восстановление ключей.
- Читать имя, издателя, срок действия, назначение и цепочку доверия сертификата.
- Выбирать криптографическую меру исходя из требуемого свойства безопасности.

**Уроки**
1. **Кодирование, хеши и шифрование** — Выбирать правильное понятие для требования к обработке данных. (25 мин; matching)
2. **Хранение паролей и соль** — Объяснять, почему для паролей используют специальную вычислительно затратную хеш-функцию. (30 мин; interactive)
3. **Симметричная и асимметричная криптография** — Сравнивать применение ключей, производительность и требования к их распространению. (30 мин; diagram)
4. **Цифровые подписи и аутентификация сообщений** — Соотносить подписи и аутентификацию сообщений с задачами целостности и подтверждения источника. (30 мин; case-study)
5. **Сертификаты TLS и цепочки доверия** — Проверять идентификатор сертификата, издателя, даты и статус доверия. (35 мин; analysis)
6. **Жизненный цикл ключей и восстановление** — Документировать владельца ключа, хранение, ротацию, отзыв и восстановление. (35 мин; mission)

**Лабораторная работа:** Проверка учебных файлов и сертификата. Используйте несекретные примеры файлов и сертификат, подготовленный для курса. Задание проверяет выбор мер и интерпретацию доказательств; создавать или разворачивать инфраструктуру доверия не требуется.

**Результаты, которые нужно сдать**
- Таблица сравнения контрольных сумм
- Запись проверки сертификата
- Инвентарь жизненного цикла ключей

**Справочное руководство:** Практическое руководство по криптографии и PKI — Выбирайте свойство безопасности; Защищайте проверочные значения паролей; Управляйте ключами и сертификатами; Записывайте доказательства и ограничения

### Модуль 07 — Безопасность веб-приложений и API (7 ч)
- Понимать границы доверия браузера и сервера, жизненный цикл запроса и типовую веб-архитектуру.
- Проверять контроль доступа, валидацию ввода, кодирование вывода, сессии и обработку ошибок.
- Распознавать основные классы рисков приложений, используя OWASP Top 10 как учебную классификацию.
- Описывать находки с безопасными доказательствами, ущербом, исправлением и регрессионными тестами.

**Уроки**
1. **Схема веб-запроса и границ доверия** — Прослеживать обязанности браузера, API, приложения и хранилища данных. (30 мин; diagram)
2. **Аутентификация и авторизация** — Определять серверные проверки для каждого защищённого объекта. (35 мин; debug)
3. **Валидация ввода и кодирование вывода** — Выбирать валидацию и кодирование с учётом контекста данных. (35 мин; matching)
4. **Сессии, cookie и токены** — Проверять сроки действия, ротацию, хранение и отзыв. (35 мин; checklist)
5. **Распространённые категории веб-рисков** — Классифицировать слабости проектирования и реализации без реальных целей. (40 мин; case-study)
6. **Безопасное ревью кода и регрессионные тесты** — Связывать первопричину в коде с безопасным тестом и устойчивым исправлением. (40 мин; debug)

**Лабораторная работа:** Проверка намеренно уязвимого локального учебного приложения. Используйте предоставленные фрагменты исходного кода и тест-кейсы вымышленного приложения в локальной учебной среде. Не проверяйте публичные сайты или сервисы.

**Результаты, которые нужно сдать**
- Схема потоков данных приложения
- Таблица находок и исправлений
- Доказательства регрессионных тестов

**Справочное руководство:** Руководство по проверке безопасности веб-приложений — Начинайте с архитектуры; Проверяйте авторизацию на сервере; Обрабатывайте ввод, вывод и секреты; Проверяйте исправления и составляйте отчёт

### Модуль 08 — Безопасная разработка и DevSecOps (6 ч)
- Встраивать требования безопасности в планирование, проектирование, разработку, тестирование, выпуск и сопровождение.
- Понимать риски зависимостей, секретов, кода и артефактов на концептуальном уровне.
- Проектировать соразмерные проверки безопасности в CI с понятными результатами и ответственными.
- Понимать назначение перечня компонентов ПО и порядок реагирования на уязвимые зависимости.

**Уроки**
1. **Требования безопасности и моделирование угроз** — Преобразовывать бизнес- и privacy-требования в проверяемые критерии приёмки. (30 мин; workshop)
2. **Ревью кода и принципы безопасной разработки** — Проверять изменения с точки зрения границ доверия, авторизации, обработки данных и ошибок. (35 мин; code-review)
3. **Риски зависимостей и компонентов** — Анализировать инвентарь пакетов, поддержку версий и бюллетени безопасности. (30 мин; analysis)
4. **Секреты и безопасность артефактов сборки** — Определять безопасную работу с секретами, результатами сборки и учётными данными выпуска. (30 мин; checklist)
5. **Проверки безопасности в CI/CD** — Выбирать проверки, пороги, владельцев исключений и обратную связь. (35 мин; pipeline-review)
6. **Доказательства выпуска и реагирование на уязвимости** — Создавать проверяемое решение о выпуске и процесс исправления. (35 мин; mission)

**Лабораторная работа:** Проверка вымышленного конвейера доставки ПО. Изучите предоставленную сводку CI-конвейера, инвентарь зависимостей и чек-лист выпуска. Все примеры статические и синтетические; реального репозитория или сервиса для атак нет.

**Результаты, которые нужно сдать**
- Аннотированная схема конвейера
- Проверка зависимостей и реестр исключений
- Чек-лист доказательств выпуска

**Справочное руководство:** Руководство по безопасному жизненному циклу поставки ПО — Встраивайте безопасность в проектирование; Проверяйте код и зависимости; Защищайте сборку и выпуск; Делайте проверки полезными

### Модуль 09 — Сетевая защита, архитектура и безопасный удалённый доступ (6 ч)
- Проектировать эшелонированные сетевые зоны для пользователей, публичных сервисов, администрирования и чувствительных данных.
- Понимать политики межсетевых экранов, безопасное удалённое администрирование, принципы VPN и управление сетевыми устройствами.
- Проверять безопасную сетевую архитектуру по документированным потокам и журналам изменений.
- Оценивать устойчивость: резервирование, запасные каналы и восстановление конфигураций.

**Уроки**
1. **Архитектура сетевой безопасности** — Преобразовывать бизнес-сервисы в зоны, границы доверия и разрешённые потоки. (30 мин; diagram)
2. **Политика межсетевого экрана и владельцы правил** — Проверять цель правила, источник, назначение, сервис, владельца и срок действия. (35 мин; policy-review)
3. **Безопасный удалённый доступ** — Сравнивать MFA, управляемые устройства, ограниченные административные пути и контроль сессий. (30 мин; case-study)
4. **Управление сетевыми устройствами** — Определять защиту плоскости управления и владельцев конфигурации. (30 мин; checklist)
5. **Устойчивость и восстановление** — Проверять резервирование, копии конфигураций и испытания восстановления. (30 мин; scenario)
6. **Практическая проверка архитектуры** — Представлять приоритетный план с эксплуатационными компромиссами и проверкой. (35 мин; mission)

**Лабораторная работа:** Проверка схемы сети вымышленной организации. Используйте предоставленную схему архитектуры, таблицу правил межсетевого экрана и политику удалённого доступа. Это проверка документации; подключаться к сетям или проверять их не нужно.

**Результаты, которые нужно сдать**
- Обновлённая схема сетевых зон
- Таблица проверки правил межсетевого экрана
- Рекомендации по удалённому доступу и восстановлению

**Справочное руководство:** Руководство по защите сетевой архитектуры — Проектируйте зоны исходя из назначения; Управляйте политикой межсетевого экрана; Защищайте удалённое администрирование; Планируйте восстановление

### Модуль 10 — Безопасность облаков, контейнеров и инфраструктуры (6 ч)
- Понимать общую ответственность и облачные меры для идентификации, сетей, хранилищ и журналирования.
- Проверять инфраструктуру как код и историю изменений на предмет дрейфа конфигурации.
- Понимать концепции безопасности образов контейнеров, среды выполнения, секретов и оркестрации.
- Создавать практический чек-лист усиления защиты облака и восстановления.

**Уроки**
1. **Общая ответственность и облачная идентификация** — Разделять меры поставщика и решения клиента о конфигурации и доступе. (30 мин; matching)
2. **Облачные сети и хранилища** — Проверять экспозицию, шифрование, резервирование и требования владельца данных. (35 мин; config-review)
3. **Ревью инфраструктуры как кода** — Проверять предлагаемые изменения доступа, сетей и экспозиции данных. (35 мин; code-review)
4. **Безопасность образов и среды контейнеров** — Понимать базовые образы, обновления, привилегии и границы среды выполнения. (35 мин; checklist)
5. **Оркестрация и управление секретами** — Проверять идентификацию рабочих нагрузок, границы пространств имён и владельцев секретов. (35 мин; case-study)
6. **Готовность к облачным инцидентам** — Определять журналы, владельцев резервных копий, источники доказательств и восстановление. (35 мин; mission)

**Лабораторная работа:** Аудит синтетической облачной и контейнерной среды. Изучите экспорт конфигурации вымышленного облака, политику хранилища, карту ролей и инвентарь контейнеров. Облачный аккаунт и реальный кластер не требуются.

**Результаты, которые нужно сдать**
- Матрица общей ответственности
- Находки по конфигурации облака
- План защиты контейнеров и восстановления

**Справочное руководство:** Руководство по безопасности облака и контейнеров — Понимайте общую ответственность; Защищайте облачные идентификаторы и данные; Усиливайте защиту контейнеров и оркестрации; Проверяйте изменения инфраструктуры

### Модуль 11 — Журналирование, SIEM и разработка правил обнаружения (7 ч)
- Понимать источники телеметрии конечных устройств, идентификации, сети, приложений и облака.
- Нормализовать поля событий и сопоставлять время, сохраняя исходные доказательства.
- Создавать правила обнаружения с целью, источником данных, обоснованием порогов и анализом ложных срабатываний.
- Разбирать оповещения с учётом контекста, критичности, уверенности и бизнес-ущерба.

**Уроки**
1. **Источники телеметрии и схемы событий** — Выбирать источники для ответа на конкретный вопрос безопасности. (30 мин; matching)
2. **Время, идентичность и нормализация** — Нормализовать время и поля, не теряя контекст источника. (35 мин; data-cleaning)
3. **Корреляция и базовые профили** — Связывать события и отличать ожидаемую рабочую активность. (35 мин; analysis)
4. **Логика обнаружения и качество оповещений** — Определять источник события, группировку, окно времени, порог и исключения. (35 мин; debug)
5. **Первичный разбор, критичность и эскалация** — Составлять краткое решение первичного разбора на основе доказательств. (35 мин; scenario)
6. **Настройка обнаружения и метрики** — Улучшать качество сигнала и измерять покрытие, ложные срабатывания и время реагирования. (35 мин; mission)

**Лабораторная работа:** Расследование набора синтетических оповещений. Используйте синтетические события аутентификации, конечных устройств и приложений с вымышленными пользователями и зарезервированными адресами. Задание посвящено защитному анализу предоставленных журналов.

**Результаты, которые нужно сдать**
- Нормализованная хронология событий
- Гипотеза обнаружения и тест-кейсы
- Записка первичного разбора и предложение по настройке

**Справочное руководство:** Практическое руководство по мониторингу SOC и обнаружению — Знайте источники телеметрии; Стройте обоснованную хронологию; Создавайте полезные правила обнаружения; Проводите первичный разбор последовательно

### Модуль 12 — Реагирование на инциденты и цифровая криминалистика (7 ч)
- Использовать повторяемый цикл: подготовка, обнаружение, анализ, сдерживание, устранение, восстановление и выводы.
- Сохранять доказательства с временными метками, происхождением, контролем доступа и записями цепочки хранения.
- Строить хронологию по синтетическим записям конечных устройств, идентификации и приложений.
- Координировать владельцев бизнеса, технических специалистов, контакты по правовым вопросам и коммуникации.

**Уроки**
1. **Роли и подготовка к инцидентам** — Определять руководителя инцидента, технических владельцев, бизнес-ответственных и контакты эскалации. (30 мин; role-play)
2. **Работа с доказательствами и их сохранение** — Фиксировать происхождение, время, целостность, доступ и решения об обращении с данными. (35 мин; checklist)
3. **Восстановление хронологии** — Сопоставлять синтетические записи, указывая допущения и пробелы. (35 мин; analysis)
4. **Решения о сдерживании и устранении** — Сравнивать варианты по ущербу, обратимости и сохранению доказательств. (35 мин; scenario)
5. **Восстановление и проверка** — Определять критерии чистого состояния, мониторинг и согласование владельца сервиса. (35 мин; mission)
6. **Разбор инцидента и выводы** — Преобразовывать итоги инцидента в закреплённые и измеримые улучшения. (30 мин; workshop)

**Лабораторная работа:** Настольное расследование инцидента по синтетическим доказательствам. Вымышленная организация сообщает о необычной активности учётной записи и сбое сервиса. Используйте предоставленный набор событий и карточки ролей. Это симуляция принятия решений; реальные устройства не используются.

**Результаты, которые нужно сдать**
- Хронология инцидента и реестр доказательств
- Журнал решений о сдерживании и восстановлении
- Реестр действий после инцидента

**Справочное руководство:** Руководство по реагированию и доказательствам — Готовьтесь до оповещения; Сохраняйте доказательства; Сдерживайте с учётом контекста; Восстанавливайтесь и извлекайте уроки

### Модуль 13 — Моделирование угроз, киберразведка и поверхность атаки (5 ч)
- Использовать структурированное моделирование угроз для выявления активов, границ доверия, угроз и мер.
- Различать источники киберразведки, уверенность, применимость и срок актуальности.
- Использовать поведенческие матрицы как общий язык для оценки защиты, а не как инструкции.
- Преобразовывать аналитические сведения об угрозах в решения по архитектуре, журналированию и приоритетам.

**Уроки**
1. **Активы, границы доверия и поверхность атаки** — Составлять карту интерфейсов и потоков данных, влияющих на риск. (30 мин; diagram)
2. **Моделирование угроз по категориям STRIDE** — Рассматривать подмену, изменение, отказ от действий, раскрытие, отказ в обслуживании и повышение привилегий как вопросы проектирования. (35 мин; workshop)
3. **Качество данных киберразведки** — Оценивать источник, дату, уверенность, применимость и ограничения обращения с данными. (30 мин; analysis)
4. **Матрицы поведения для защитников** — Соотносить наблюдаемое поведение с защитной телеметрией и мерами на высоком уровне. (30 мин; matching)
5. **Проверка изменений поверхности атаки** — Определять, как изменения продукта или поставщика создают новую экспозицию. (30 мин; case-study)
6. **План улучшений с учётом угроз** — Расставлять приоритеты мер и определять доказательства улучшения покрытия. (35 мин; mission)

**Лабораторная работа:** Моделирование угроз вымышленного личного кабинета. Изучите схему вымышленного сервиса, классификацию данных и бизнес-роли. Используйте категории угроз для обсуждения рисков проектирования и защиты; эксплуатация не проводится.

**Результаты, которые нужно сдать**
- Модель угроз и схема потоков данных
- Соответствие угроз и мер защиты
- Приоритетный план улучшений

**Справочное руководство:** Руководство по моделированию угроз и киберразведке — Моделируйте систему; Оценивайте разведданные критически; Используйте матрицы поведения для защиты; Расставляйте приоритеты мер

### Модуль 14 — Управление безопасностью, риски, соответствие требованиям и приватность (5 ч)
- Преобразовывать бизнес-обязательства в политики, стандарты, процедуры и измеримые меры.
- Понимать принятие риска, оценку поставщиков, доказательства, аудит и управление исключениями.
- Составлять карту потоков персональных данных, целей, сроков хранения, доступа и удаления.
- Сообщать о пробелах соответствия, не путая контрольный список с реальной безопасностью.

**Уроки**
1. **Документы управления и ответственность** — Различать политику, стандарт, процедуру и владельцев доказательств. (25 мин; matching)
2. **Обработка и принятие риска** — Документировать решения о снижении, избегании, передаче или принятии риска и согласования. (30 мин; scenario)
3. **Приватность и жизненный цикл данных** — Составлять карту целей, сбора, использования, передачи, хранения и удаления. (35 мин; data-map)
4. **Оценка поставщиков и третьих сторон** — Проверять доступ к данным, ответственность, уведомление об инциденте и условия выхода. (30 мин; case-study)
5. **Аудиторские доказательства и тестирование мер** — Выбирать доказательства работы меры, а не только наличия документа. (30 мин; audit)
6. **Исключения из политики и постоянный пересмотр** — Назначать владельца, компенсирующую меру, срок исключения и повторное согласование. (30 мин; mission)

**Лабораторная работа:** Создание реестра рисков, приватности и мер защиты. Используйте вымышленный сервис с синтетическими данными клиентов, зависимостями поставщиков и требованиями политики. Задание — документационная и управленческая практика, а не юридическая консультация.

**Результаты, которые нужно сдать**
- Реестр рисков и мер
- Карта потоков персональных данных
- Проверка поставщика и исключений из политики

**Справочное руководство:** Руководство по управлению, рискам, соответствию и приватности — Преобразуйте обязательства в меры; Прозрачно обрабатывайте риски; Соблюдайте приватность и жизненный цикл данных; Оценивайте поставщиков и доказательства

### Модуль 15 — Операционная безопасность, автоматизация и профессиональная коммуникация (4 ч)
- Выполнять повторяемые процессы безопасности для заявок, эскалаций, доказательств и изменений.
- Понимать, где помогает простая автоматизация, а где обязательно согласование человеком.
- Писать понятные находки, регламенты и статусные сообщения для технической и нетехнической аудитории.
- Готовить портфолио, демонстрирующее мышление, документацию и ответственную практику.

**Уроки**
1. **Заявки безопасности и этапы работы** — Создавать заявку с границами, владельцем, доказательствами, приоритетом и следующим действием. (25 мин; workflow)
2. **Границы автоматизации и согласования** — Отделять безопасные повторяемые действия от важных операций, требующих согласования. (25 мин; scenario)
3. **Регламенты и передача смены** — Описывать шаги, предварительные условия, проверку, эскалацию и откат. (25 мин; writing)
4. **Метрики и мышление уровня сервиса** — Выбирать метрики качества, состояния очереди и результатов реагирования. (25 мин; analysis)
5. **Коммуникация находок и неопределённости** — Адаптировать одни доказательства для технических владельцев и руководителей. (25 мин; writing)
6. **Портфолио и подготовка к собеседованию** — Представлять учебные лабораторные, решения, компромиссы и выводы. (30 мин; workshop)

**Лабораторная работа:** Преобразование синтетического оповещения в полную рабочую задачу. Используйте вымышленное оповещение и доказательства для создания заявки, фрагмента регламента, записки эскалации и сводки для руководства. Реальные уведомления и интеграции не используются.

**Результаты, которые нужно сдать**
- Заявка безопасности и запись первичного разбора
- Регламент и записка эскалации
- Сводка инцидента для портфолио

**Справочное руководство:** Руководство по операционной безопасности и коммуникации — Делайте работу прослеживаемой; Автоматизируйте с ограничениями; Пишите полезные регламенты; Общайтесь точно

### Модуль 16 — Итоговый проект: комплексная оценка безопасности и реагирование (8 ч)
- Объединять доказательства по активам, архитектуре, идентификации, приложениям, облаку и мониторингу в одном сценарии.
- Приоритизировать находки и различать подтверждённые проблемы, предположения и отсутствующие доказательства.
- Готовить резюме для руководства, технический отчёт, план исправлений и регламент реагирования.
- Представлять обоснованный вывод с границами, методами, ограничениями и последующей проверкой.

**Уроки**
1. **Брифинг итогового проекта и границы** — Понимать вымышленную организацию, цели, ограничения и набор доказательств. (30 мин; briefing)
2. **Оценка активов и архитектуры** — Составлять карту системы и определять владельцев и критичные зависимости. (40 мин; analysis)
3. **Проверка идентификации, приложения и облака** — Объединять доказательства конфигурации и доступа в обоснованные находки. (40 мин; case-study)
4. **Сценарий обнаружения и инцидента** — Строить хронологию по синтетической телеметрии и рекомендовать решения по реагированию. (45 мин; incident-mission)
5. **Приоритизация рисков и план исправлений** — Ранжировать проблемы по ущербу, экспозиции, доказательствам и реализуемости. (40 мин; workshop)
6. **Подготовка отчёта и взаимная проверка** — Составлять понятные находки, оговорки и рекомендации руководству. (45 мин; writing)

**Лабораторная работа:** Комплексная оценка вымышленного сервиса Northstar. Итоговое задание объединяет вымышленную архитектуру, реестр активов, матрицу доступа, фрагменты ревью кода, облачную конфигурацию, синтетические журналы и хронологию инцидента. Все доказательства созданы для курса. Цель — профессиональная защитная оценка, а не компрометация системы.

**Результаты, которые нужно сдать**
- Границы и реестр доказательств
- Приоритетные технические находки и план обработки
- Резюме для руководства, технический отчёт и план презентации

**Справочное руководство:** Руководство по выполнению и оценке итогового проекта — Начинайте с границ и доказательств; Связывайте находки из разных областей; Расставляйте приоритеты и планируйте исправления; Представляйте и защищайте результат

## Итоговый проект

Модуль 16 — итоговый проект по комплексной защитной оценке вымышленной организации. Учащийся анализирует предоставленные схемы архитектуры, реестр активов, матрицу доступа, заметки по приложениям и облаку, а также синтетические журналы. Результаты: описание границ и реестр доказательств, приоритетные находки, план исправлений, записка об инциденте и резюме для руководства вместе с техническим отчётом.

Проверка модуля считается пройденной, когда на все вопросы дан правильный ответ. При ошибке показывается пояснение и доступна повторная попытка. Прогресс хранится только в рамках текущего сеанса страницы; лабораторные материалы не оцениваются автоматически.

Практикуйте только на данных курса, собственных изолированных средах или системах с явным письменным разрешением. Не проверяйте сторонние системы без согласованных границ и разрешения.
