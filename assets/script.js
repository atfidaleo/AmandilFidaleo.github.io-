/* ============================================
   Amandil Fidaleo — Portfolio
   ============================================ */

// ---------- Project data ----------
const PROJECTS = [
  {
    title: "Anabion — Culture Transformation",
    type: "Consulting Project",
    tag: "Culture & Change",
    desc: "Led a cross-functional team of 11 to redesign the organizational culture framework for a Qatar-based company scaling to 1,000+ employees. Conducted stakeholder interviews across 15% of the organization to translate strategic priorities into a values and behavioral framework applied across talent acquisition, performance management, and onboarding, then developed a phased global rollout strategy aligning leadership, communication, and training to drive adoption across a distributed, multicultural workforce.",
    links: [
      { label: "Culture Audit & Proposal", type: "canva", url: "https://canva.link/8o9o9umvxje4ksa" },
      { label: "Implementation & Rollout", type: "canva", url: "https://canva.link/x4rqge0ordgzli6" },
    ],
  },
  {
    title: "NovaChem — AI in HR Automation Transformation",
    type: "Course Project",
    tag: "AI in HR",
    desc: "Designed a complete Human-AI operating model for a fictional 8,500-employee specialty chemicals manufacturer. Combined a live five-agent AI system built in Python on Anthropic's Claude API with role redesign, talent strategy, and a dedicated culture layer for the trust-building AI adoption requires. Mapped EU AI Act compliance at the article level with a three-layer human override design.",
    links: [{ label: "View Presentation", type: "canva", url: "https://canva.link/3e62ey6yaoxn0dw" }],
  },
  {
    title: "Division X — Managers' Talent Management Mindsets",
    type: "Course Project",
    tag: "Talent Management",
    desc: "Diagnostic study of how managers in a major entertainment company's R&D and technology division enact talent management, using in-depth interviews across directors, middle management, and HR, analyzed through the More-Better-Now framework. Identified systemic risks including over-reliance on individual manager judgment and weak succession planning, with recommendations to strengthen HR capability and build joint pipeline planning.",
    links: [{ label: "Full Report", type: "pdf", url: "assets/pdfs/managers-mindsets-division-x.pdf" }],
  },
  {
    title: "PrimeWorld — Talent Audit",
    type: "Course Project",
    tag: "Talent Management",
    desc: "Comprehensive talent audit of a Philippine real estate developer using interviews with the CEO, HR Manager, Business Development Lead, and Engineering Head, a 42-employee survey, and the More Better Now (MBN) framework. Identified a CEO-centric talent system as the root cause of critical succession-planning gaps and developed an 18-month roadmap toward distributed talent governance.",
    links: [
      { label: "View Presentation", type: "canva", url: "https://canva.link/3vqrjcbabbdkv91" },
      { label: "Full Report", type: "pdf", url: "assets/pdfs/primeworld-audit.pdf" },
    ],
  },
  {
    title: "Terra Energy — Learning & Development Plan",
    type: "Course Project",
    tag: "Learning & Development",
    desc: "Annual L&D plan for a fictional renewable energy engineering company facing 24% technician turnover and geographic expansion across Europe. Applied a six-step L&D design framework to build four initiatives, deep-diving into an 8-week Field Technician Integration programme on a 70-20-10 model, evaluated with Kirkpatrick and a projected 3.3x ROI.",
    links: [{ label: "View Presentation", type: "canva", url: "https://canva.link/n3yz4h6bpfjwvb4" }],
  },
  {
    title: "TerraNova — Talent Acquisition Strategy",
    type: "Course Project",
    tag: "Talent Acquisition",
    desc: "End-to-end talent acquisition strategy for a fictional global food company filling a senior leadership role in Mumbai. Built a competency framework, a diversity-led sourcing strategy targeting a zero-female-representation gap, a structured six-stage selection process with gender diversity requirements at each stage, and a KPI dashboard tracking the full hiring lifecycle.",
    links: [{ label: "View Presentation", type: "canva", url: "https://canva.link/vdopi45067azeva" }],
  },
  {
    title: "Innovex — Retaliation & Employee Relations Resolution",
    type: "Course Project",
    tag: "Employee Relations",
    desc: "Managed an employee relations crisis after a confirmed conflict-of-interest case triggered retaliation against whistleblowers across 12,250 employees. Mapped the timeline, assessed legal, reputational, and talent risk, and recommended an immediate protection and communication plan alongside a 12-month reform roadmap with a dedicated Whistleblower Support Officer.",
    links: [{ label: "View Presentation", type: "canva", url: "https://canva.link/16irrvvfcpuswlw" }],
  },
  {
    title: "Bank Co. — Global Well-Being Strategy",
    type: "Course Project",
    tag: "Well-Being",
    desc: "Global Health & Well-being strategy for a fictional 150,000-employee banking group, anchored in the IE Holistic Human Development framework (Body Vitality, Mind Focus, Soul Purpose). Built a 3-year roadmap, global governance model, communication cascade, technology strategy, and a KPI/ROI framework benchmarked against programs like Sanofi's All Well initiative.",
    links: [{ label: "View Presentation", type: "canva", url: "https://canva.link/u2yxwhgbwj995wl" }],
  },
  {
    title: "ICMBio — Zero-Budget Well-Being Program",
    type: "Course Project",
    tag: "Well-Being",
    desc: "Zero-budget wellbeing program for a Brazilian federal biodiversity agency protecting over 170 million hectares across remote, high-risk territory. Built the Bem-Estar Program around three no-cost initiatives: a university-backed tele-triage network, a daily radio check-in mindfulness protocol, and a peer support buddy network trained in Psychological First Aid.",
    links: [{ label: "View Presentation", type: "canva", url: "https://canva.link/eu5tpqzkp1pdx3k" }],
  },
  {
    title: "DigiDelta — Organizational Network Analysis",
    type: "Course Project",
    tag: "People Analytics",
    desc: "Organizational Network Analysis for a B2B technology company operating across 60+ countries. Integrated 66 employee surveys, 12 managerial interviews, and dependency mapping across 78 nodes, applying graph-theory metrics to diagnose collaboration bottlenecks and flight-risk concentration, delivering a 12-month phased implementation roadmap.",
    links: [{ label: "View Presentation", type: "canva", url: "https://canva.link/4gmqf41dh5f3enh" }],
  },
  {
    title: "TechSolutions — Predictive Attrition Modeling",
    type: "Course Project",
    tag: "People Analytics",
    desc: "People analytics engagement diagnosing employee attrition across 1,470 employees and 35 variables. Applied Pearson correlation analysis and a Random Forest model (AUC 0.73) to identify overtime, income, tenure, and stock options as primary attrition drivers, delivering three recommendations on workload governance and compensation.",
    links: [
      { label: "View Presentation", type: "canva", url: "https://canva.link/3v496n37a7rnmjg" },
      { label: "Full Report", type: "pdf", url: "assets/pdfs/techsolutions-report.pdf" },
    ],
  },
  {
    title: "Restaurant People Project",
    type: "Course Project",
    tag: "People Analytics",
    desc: "People analytics consulting engagement for a fictional quick-service restaurant chain, integrating nine data sources including psychometric assessments and sociometric badges across 280 stores. Applied unsupervised machine learning and regression modeling to identify the human drivers of speed of service, satisfaction, and revenue growth.",
    links: [
      { label: "View Presentation", type: "canva", url: "https://canva.link/dipytckidcj44fx" },
      { label: "Executive Summary", type: "pdf", url: "assets/pdfs/restaurant-people-exec-summary.pdf" },
    ],
  },
  {
    title: "TechNova — Retention Transformation Strategy",
    type: "Course Project",
    tag: "People Analytics",
    desc: "Retention analysis for a fictional B2B SaaS company facing 25.2% attrition. Tested HR data against exit interview themes and found manager effectiveness and career visibility, not pay, were the strongest predictors of attrition. Recommended a $5.5M investment in a Career Path Framework and Manager Effectiveness Program projected to generate $9.8–14.2M in annual value.",
    links: [
      { label: "Presentation", type: "canva", url: "https://canva.link/nartlzzw6bod33v" },
      { label: "Full Deck", type: "canva", url: "https://canva.link/p3xloufzp5sfxrf" },
    ],
  },
  {
    title: "Starbucks — Strategy Under CEO Brian Niccol",
    type: "Course Project",
    tag: "Business Strategy",
    desc: "Analyzed Starbucks's strategic turnaround under CEO Brian Niccol through Porter's Five Forces, the Value Stick, the Strategy Diamond, and the Resource-Based View. Developed an HR strategy recommendation for the CHRO role focused on talent development, performance alignment, and culture rebuilding to translate business strategy into daily organizational behavior.",
    links: [{ label: "Full Report", type: "pdf", url: "assets/pdfs/starbucks-strategy.pdf" }],
  },
  {
    title: "Salary Policy Management",
    type: "Course Project",
    tag: "Total Rewards",
    desc: "Data-driven audit of a retail company's compensation system, identifying structural inequities where pay was driven by seniority rather than job size or performance. Redesigned the full reward architecture: reward philosophy, market-aligned salary bands, variable pay restructuring, and a phased multi-year implementation plan to restore equity and competitiveness.",
    links: [{ label: "Full Report", type: "pdf", url: "assets/pdfs/salary-policy-management.pdf" }],
  },
  {
    title: "McDonald's — L&D Strategy Exploration",
    type: "Course Project",
    tag: "Learning & Development",
    desc: "Mapped McDonald's end-to-end Learning and Development strategy: the BEST capability framework, a 70/20/10 learning architecture across digital, on-the-job, and residential delivery, a six-tier training progression, and a closed-loop talent integration system — sustaining operational excellence at 43,000 restaurants and 2M+ employees.",
    links: [
      { label: "View Presentation", type: "canva", url: "https://canva.link/kd4uwptm372fxbd" },
      { label: "Full Report", type: "pdf", url: "assets/pdfs/mcdonalds-ld-report.pdf" },
    ],
  },
  {
    title: "Argento — Global Mobility Redesign",
    type: "Course Project",
    tag: "HR Operations",
    desc: "Global Mobility operating model redesign for a fictional multinational with 105 international assignees across 7 countries. Diagnosed six structural root causes behind missed tax deadlines and double payroll payments, redesigning the assignment process with a future-state Oracle HCM / ServiceNow architecture and a €160k–€365k annual savings case.",
    links: [{ label: "View Presentation", type: "canva", url: "https://canva.link/rt8ce6z9nixy8tn" }],
  },
  {
    title: "Workday — Digital Business Analysis",
    type: "Course Project",
    tag: "Business Strategy",
    desc: "Strategic analysis of Workday's transformation from a system of record to an AI-powered workforce platform. Ran a SWOT and market-landscape mapping against SAP SuccessFactors and Oracle HCM Cloud, proposing a repositioning as a 'Daily Workforce Superapp' with a three-horizon roadmap and financial projections through FY28.",
    links: [{ label: "View Presentation", type: "canva", url: "https://canva.link/h31zywqyujpopnw" }],
  },
  {
    title: "Siemens Energy — Assessment Center Design",
    type: "Course Project",
    tag: "Psychometrics",
    desc: "Full assessment center for a Learning and Development Manager role, applying psychometric principles of validity, reliability, and standardization. Derived a six-competency framework and four assessment exercises, alongside Behaviorally Anchored Rating Scales built through SME incident collection to eliminate subjective interpretation.",
    links: [{ label: "View Presentation", type: "canva", url: "https://canva.link/0zicblbkb25l3nd" }],
  },
  {
    title: "Nexara Healthcare — Corporate Coaching Proposal",
    type: "Course Project",
    tag: "Coaching & Leadership",
    desc: "Corporate coaching proposal for a fictional 200-employee healthcare company where leaders spent only 15% of their time on people management. Structured an 8-session 'Grow to Lead' program using the GROW model and ICF competencies across four employee segments, with success indicators and a phased rollout plan.",
    links: [{ label: "View Presentation", type: "canva", url: "https://canva.link/wmzk55jaotf33fi" }],
  },
  {
    title: "JLABS — Culture of Engagement & Innovation",
    type: "Course Project",
    tag: "Culture & Change",
    desc: "Case study on Johnson & Johnson's JLABS model, examining how removing bureaucratic constraints accelerates innovation. Applied organizational culture and innovation frameworks to show how decentralized, incubator-style environments enable faster ideation and execution than traditional corporate structures.",
    links: [{ label: "View Presentation", type: "canva", url: "https://canva.link/v8yi4galoutclrg" }],
  },
  {
    title: "Aligning Talent Management with Strategic Goals",
    type: "Course Project",
    tag: "Talent Management",
    desc: "Analyzed the talent management practices of a global entertainment company's R&D and technology division through primary interviews with managers and an HR Business Partner, applying Hackman & Oldham's Job Characteristics Model and Baron & Kreps' fit theory to identify hiring, motivation, and retention gaps.",
    links: [{ label: "Full Report", type: "pdf", url: "assets/pdfs/hr-fundamentals.pdf" }],
  },
  {
    title: "SpaceX — New Leadership Effectiveness Analysis",
    type: "Course Project",
    tag: "Coaching & Leadership",
    desc: "Analyzed Elon Musk's leadership at SpaceX through transformational, charismatic, and ethical leadership lenses, burnout, and psychological safety. Identified a paradox between exceptional performance and structural sustainability risk, proposing a 9-Box Talent Model to build succession pipelines and reduce founder dependency.",
    links: [
      { label: "View Presentation", type: "canva", url: "https://canva.link/xskml1b9mm78pyz" },
      { label: "Full Report", type: "pdf", url: "assets/pdfs/spacex-nle-report.pdf" },
    ],
  },
];

const CATEGORIES = ["All", "Culture & Change", "AI in HR", "Talent Management", "Learning & Development",
  "Talent Acquisition", "Employee Relations", "Well-Being", "People Analytics",
  "Business Strategy", "Total Rewards", "HR Operations", "Psychometrics", "Coaching & Leadership"];

// ---------- Icons ----------
const ICON_CANVA = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>';
const ICON_PDF = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>';
const ICON_MAIL = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v16H4z" stroke="none"/><path d="M22 6c0-1.1-.9-2-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V6Zm-2 0-8 5-8-5"/></svg>';

// ---------- Render projects ----------
function renderProjects(filter) {
  const grid = document.getElementById("project-grid");
  const empty = document.getElementById("empty-state");
  grid.innerHTML = "";
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.tag === filter);

  if (filtered.length === 0) {
    empty.style.display = "block";
  } else {
    empty.style.display = "none";
  }

  filtered.forEach((p) => {
    const card = document.createElement("div");
    card.className = "project-card reveal";
    const linksHtml = p.links
      .map((l) => {
        if (l.type === "pending") {
          return `<a class="project-link disabled" href="mailto:atfidaleo@gmail.com?subject=Report request: ${encodeURIComponent(p.title)}" title="Report available on request">${ICON_MAIL} ${l.label} — on request</a>`;
        }
        const icon = l.type === "pdf" ? ICON_PDF : ICON_CANVA;
        return `<a class="project-link" href="${l.url}" target="_blank" rel="noopener">${icon} ${l.label}</a>`;
      })
      .join("");

    card.innerHTML = `
      <div class="project-tags">
        <span class="tag">${p.tag}</span>
        <span class="tag tag-alt">${p.type}</span>
      </div>
      <div class="project-title">${p.title}</div>
      <p class="project-desc">${p.desc}</p>
      <div class="project-links">${linksHtml}</div>
    `;
    grid.appendChild(card);
  });

  requestAnimationFrame(observeReveals);
}

function renderFilters() {
  const bar = document.getElementById("filter-bar");
  bar.innerHTML = CATEGORIES.map(
    (c, i) => `<button class="filter-btn${i === 0 ? " active" : ""}" data-cat="${c}">${c}</button>`
  ).join("");

  bar.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      bar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.dataset.cat);
    });
  });
}

// ---------- Nav scroll state ----------
function initNavScroll() {
  const nav = document.getElementById("site-nav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 12);
  });
}

// ---------- Mobile menu ----------
function initMobileNav() {
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  toggle.addEventListener("click", () => {
    links.classList.toggle("mobile-open");
  });
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => links.classList.remove("mobile-open"))
  );
}

// ---------- Active section highlighting ----------
function initActiveSection() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((l) => l.classList.remove("active"));
          const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
          if (active) active.classList.add("active");
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => obs.observe(s));
}

// ---------- Scroll reveal ----------
let revealObserver;
function observeReveals() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
  }
  document.querySelectorAll(".reveal:not(.in-view)").forEach((el) => revealObserver.observe(el));
}

// ---------- Init ----------
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  renderFilters();
  renderProjects("All");
  initNavScroll();
  initMobileNav();
  initActiveSection();
  observeReveals();
});
