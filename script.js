/* ===== EDIT YOUR CONTENT HERE =====
   Replace placeholder text with your real work. For a report, put the PDF in
   assets/ and set file: "assets/your-report.pdf". Leave file as "" if none. */
const projects = [
  { title: "Crime Scene Investigation Case Study", desc: "[PLACEHOLDER] Case study on scene documentation and evidence handling.", methods: "Methods: [PLACEHOLDER]", file: "" },
  { title: "Fingerprint and Dermatoglyphics Study", desc: "[PLACEHOLDER] Study of fingerprint patterns and dermatoglyphics.", methods: "Methods: [PLACEHOLDER]", file: "" },
  { title: "Biological Evidence Examination", desc: "[PLACEHOLDER] Overview of biological evidence types and examination principles.", methods: "Methods: [PLACEHOLDER]", file: "" },
  { title: "Forensic Case Analysis", desc: "[PLACEHOLDER] Analysis of a published forensic case.", methods: "Methods: [PLACEHOLDER]", file: "" }
];
const achievements = [
  /* Example: "Workshop on Fingerprint Analysis, Organiser, Month Year" */
];
/* ===== END EDITABLE CONTENT ===== */

const $ = id => document.getElementById(id);

// Project cards
$("project-grid").innerHTML = projects.map((p, i) =>
  `<article class="card"><h3>${p.title}</h3><p>${p.desc}</p>
   <button data-i="${i}">View details &rarr;</button></article>`).join("");

// Achievements
$("ach-list").innerHTML = achievements.length
  ? achievements.map(a => `<li>${a}</li>`).join("")
  : "<li><em>[PLACEHOLDER] No entries yet.</em></li>";

// Project modal
const modal = $("modal");
$("project-grid").addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  const p = projects[b.dataset.i];
  $("m-title").textContent = p.title;
  $("m-body").textContent = p.desc;
  $("m-meth").textContent = p.methods;
  $("m-link").innerHTML = p.file ? `<a class="btn" href="${p.file}" download>Download report</a>` : "<em>Report: [PLACEHOLDER]</em>";
  modal.hidden = false; $("close").focus();
});
const closeModal = () => modal.hidden = true;
$("close").onclick = closeModal;
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

// Mobile menu
const menu = $("menu"), burger = $("burger");
burger.onclick = () => burger.setAttribute("aria-expanded", menu.classList.toggle("open"));
menu.addEventListener("click", e => { if (e.target.tagName === "A") { menu.classList.remove("open"); burger.setAttribute("aria-expanded", false); } });

// Scroll reveal and footer year
const io = new IntersectionObserver(es => es.forEach(x => x.isIntersecting && x.target.classList.add("in")), { threshold: .1 });
document.querySelectorAll("section:not(.hero)").forEach(s => { s.classList.add("reveal"); io.observe(s); });
$("yr").textContent = new Date().getFullYear();
