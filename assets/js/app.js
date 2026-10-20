// Before/after sliders: the range input moves the clip line on the "before" screenshot
document.querySelectorAll(".ba").forEach((ba) => {
  const range = ba.querySelector(".ba-range");
  const set = () => ba.style.setProperty("--pos", range.value + "%");
  range.addEventListener("input", set);
  set();
});

// Fetch the lower screenshots once the page has loaded, so the sliders are ready when you scroll to them
addEventListener("load", () => document.querySelectorAll('img[loading="lazy"]').forEach((img) => (img.loading = "eager")));

// Contact popup: every "Get started" button opens it, and so does a link to /dojo/#contact
const dialog = document.getElementById("contact");
if (dialog && dialog.showModal) {
  const open = (e) => {
    if (e) e.preventDefault();
    if (!dialog.open) dialog.showModal();
    const first = dialog.querySelector("input:not([type=hidden]):not(.hp)");
    if (first) first.focus();
  };
  document.querySelectorAll("[data-contact]").forEach((a) => a.addEventListener("click", open));
  dialog.querySelectorAll("[data-close]").forEach((b) => b.addEventListener("click", () => dialog.close()));
  // click on the dark backdrop closes it
  dialog.addEventListener("click", (e) => { if (e.target === dialog) dialog.close(); });
  dialog.addEventListener("close", () => {
    if (location.hash === "#contact") { try { history.replaceState(null, "", location.pathname + location.search); } catch {} }
  });
  if (location.hash === "#contact") open();
}

// The form posts to Formspree in the background and shows a thank-you in place
const form = document.getElementById("dojo-form");
if (form) {
  const status = form.querySelector(".form-status");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const tpl = form.dataset.subject;
    if (tpl) data.set("_subject", tpl.replace(/\{(\w+)\}/g, (_, k) => (data.get(k) || "").toString().trim()));
    const btn = form.querySelector('button[type="submit"]');
    const label = btn.textContent;
    btn.disabled = true;
    btn.textContent = "Sending…";
    status.classList.remove("error");
    status.textContent = "";
    try {
      const res = await fetch(form.action, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!res.ok) {
        const out = await res.json().catch(() => ({}));
        throw new Error((out.errors || []).map((x) => x.message).join(" ") || "The message didn't go through.");
      }
      const done = document.createElement("p");
      done.className = "form-done";
      done.setAttribute("role", "status");
      done.textContent = form.dataset.done;
      form.replaceWith(done);
    } catch (err) {
      status.classList.add("error");
      status.textContent = `${err.message} Please try again, or email gordonjaychan1@gmail.com.`;
      btn.disabled = false;
      btn.textContent = label;
    }
  });
}
