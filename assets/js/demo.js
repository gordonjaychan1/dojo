// Members-only demo. The passwords are printed on the page, so a plain check is fine here.
// A real school's site locks each group's pages with real encryption instead (see the AABBA belt tests).
const passwords = { blue: "bluebelt", team: "compete", staff: "sensei" };
// messages in the current language (i18n.js sets window.t); English if that file didn't load
const tr = (key, en) => (window.t ? window.t(key, en) : en);

const gate = document.getElementById("gate");
const group = document.getElementById("group");
const pw = document.getElementById("pw");
const msg = document.getElementById("msg");
const frame = document.getElementById("ds");

const showPanel = (id) => {
  gate.hidden = !!id;
  document.querySelectorAll(".ds-panel").forEach((p) => (p.hidden = p.id !== "panel-" + id));
  if (id) {
    const panel = document.getElementById("panel-" + id);
    panel.querySelector("h2").setAttribute("tabindex", "-1");
    panel.querySelector("h2").focus({ preventScroll: true });
  }
  if (frame.getBoundingClientRect().top < 0) frame.scrollIntoView({ block: "start" });
};

gate.addEventListener("submit", (e) => {
  e.preventDefault();
  const entered = pw.value.trim().toLowerCase();
  if (entered === passwords[group.value]) {
    msg.textContent = "";
    msg.classList.remove("error");
    pw.value = "";
    showPanel(group.value);
  } else {
    msg.textContent = entered ? tr("demo.msgWrong", "That password doesn't match this group. Try again!") : tr("demo.msgEmpty", "Enter the password for your group.");
    msg.classList.add("error");
    gate.classList.remove("shake");
    void gate.offsetWidth;
    gate.classList.add("shake");
    pw.focus();
  }
});

// lock again and go back to the password screen
document.querySelectorAll("[data-lock]").forEach((b) => b.addEventListener("click", () => {
  showPanel(null);
  pw.focus({ preventScroll: true });
}));

// the hint buttons above the frame fill in the group and password, ready to open
document.querySelectorAll(".pw").forEach((b) => b.addEventListener("click", () => {
  showPanel(null);
  group.value = b.dataset.group;
  pw.value = b.dataset.pw;
  msg.textContent = tr("demo.msgReady", "Press Open to see this group's page.");
  msg.classList.remove("error");
  gate.querySelector(".ds-btn").focus({ preventScroll: true });
  frame.scrollIntoView({ block: "nearest", behavior: "smooth" });
}));

// the technique video is a stand-in: say what goes there on a real site
document.querySelectorAll("[data-video]").forEach((v) => v.addEventListener("click", () => {
  const note = v.querySelector(".ds-video-note");
  note.hidden = !note.hidden;
}));
