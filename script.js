(function () {
  var C = window.CONTENT;
  var $ = function (s) { return document.querySelector(s); };
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function safeUrl(u) { return /^(https?:|mailto:|#|assets\/)/.test(u) ? u : ""; }

  // Simple bindings
  document.querySelectorAll("[data-bind]").forEach(function (n) {
    var v = C[n.dataset.bind];
    if (Array.isArray(v)) v.forEach(function (line) { n.appendChild(el("span", "ln", line)); });
    else n.textContent = v;
  });
  C.badges.forEach(function (b) {
    $("#badges").appendChild(el("li", "badge" + (b.primary ? " primary" : "") + (b.placeholder ? " todo-badge" : ""), b.text));
  });
  document.querySelectorAll("[data-bind-href]").forEach(function (n) { n.href = safeUrl(C[n.dataset.bindHref]); });
  document.querySelectorAll("[data-bind-mail]").forEach(function (n) {
    var v = C[n.dataset.bindMail];
    n.textContent = v;
    if (/@/.test(v) && v.charAt(0) !== "[") n.href = "mailto:" + v;
    else n.parentNode.style.display = "none"; // no real address yet: hide the contact line
  });

  // Twins vs dreams
  var v = $("#versus");
  ["twins", "dreams"].forEach(function (k) {
    var d = C.twinsDreams[k];
    var box = el("div", "side " + k);
    box.appendChild(el("p", "kind", d.kind));
    box.appendChild(el("h3", null, d.name));
    box.appendChild(el("p", "line", d.line));
    [["+", d.pros, "mk"], ["", d.cons, "mk minus"]].forEach(function (r) {
      var p = el("p", "pc");
      var mk = el("span", r[2], r[0]);
      mk.setAttribute("aria-hidden", "true");
      p.appendChild(mk);
      p.appendChild(document.createTextNode(r[1]));
      box.appendChild(p);
    });
    v.appendChild(box);
  });
  $("#shared").textContent = C.twinsDreams.shared;

  // Topics: one column per group, one card per topic
  $("#topics-intro").textContent = C.topicsIntro;
  C.topics.forEach(function (g) {
    var col = el("div", "tgroup " + g.group.toLowerCase());
    var h = el("h3", "thead");
    h.appendChild(el("span", "mark"));
    h.appendChild(document.createTextNode(g.group));
    col.appendChild(h);
    g.items.forEach(function (it) {
      var card = el("article", "topic-card");
      card.appendChild(el("h4", "topic-title", it.title));
      card.appendChild(el("p", "topic-text", it.text));
      var q = el("div", "open");
      q.appendChild(el("p", "open-label", "Open question"));
      q.appendChild(el("p", "open-text", it.question));
      card.appendChild(q);
      col.appendChild(card);
    });
    $("#topics-list").appendChild(col);
  });

  // People cards
  $("#speakers-note").textContent = C.speakersNote;
  function people(list, target) {
    list.forEach(function (p) {
      var isPh = /placeholder/.test(p.photo || "");
      var card = el("article", "card" + (isPh ? " is-placeholder" : ""));
      var frame = el("div", "photo");
      var img = el("img");
      img.src = p.photo || "assets/placeholder-person.svg";
      img.alt = (isPh ? "Placeholder portrait for " : "Portrait of ") + p.name;
      img.loading = "lazy";
      img.width = 136; img.height = 136;
      frame.appendChild(img);
      card.appendChild(frame);
      var name = el("h3");
      var link = safeUrl(p.url || "");
      if (link) { var a = el("a", null, p.name); a.href = link; name.appendChild(a); }
      else name.textContent = p.name;
      card.appendChild(name);
      card.appendChild(el("p", null, p.affiliation));
      $(target).appendChild(card);
    });
  }
  if (C.speakers.length) people(C.speakers, "#speakers-grid");
  else {
    $("#speakers-grid").style.display = "none";
    $("#speakers-note").insertAdjacentElement("afterend", el("p", "empty", C.speakersEmpty));
  }
  people(C.organizers.slice(0, 8), "#organizers-grid");

  // Schedule
  $("#schedule-note").textContent = C.scheduleNote;
  C.schedule.forEach(function (r) {
    var li = el("li", "slot slot-" + r.type + (r.highlight ? " hl" : "") + (r.newColumn ? " newcol" : ""));
    var when = el("div", "when");
    when.appendChild(el("span", "start", r.start));
    when.appendChild(el("span", "end", r.end));
    li.appendChild(when);
    var what = el("div", "what");
    what.appendChild(el("p", "kind", r.kind));
    what.appendChild(el("h3", "slot-title", r.title));
    if (r.who) what.appendChild(el("p", "who", r.who));
    li.appendChild(what);
    $("#schedule-body").appendChild(li);
  });

  // CFP
  $("#cfp-intro").textContent = C.cfp.intro;
  C.cfpTopics.forEach(function (t) { $("#cfp-topics").appendChild(el("li", "chip", t)); });
  $("#cfp-topics-note").textContent = C.cfpTopicsNote;
  C.cfp.tracks.forEach(function (t) {
    var li = el("li");
    li.appendChild(el("strong", null, t.name));
    li.appendChild(el("span", null, t.detail));
    $("#cfp-tracks").appendChild(li);
  });
  C.cfp.dates.forEach(function (d) {
    var tr = el("tr");
    tr.appendChild(el("th", null, d.label)).scope = "row";
    tr.appendChild(el("td", null, d.value));
    $("#cfp-dates").appendChild(tr);
  });
  var sb = $("#cfp-submit");
  sb.textContent = C.cfp.submitLabel;
  if (safeUrl(C.cfp.submitUrl)) sb.href = C.cfp.submitUrl;
  else { sb.classList.add("btn-todo"); sb.textContent += " (link coming soon)"; sb.setAttribute("aria-disabled", "true"); }

  // Previous editions
  C.previous.forEach(function (p) {
    var li = el("li");
    var a = el("a", null, p.name + ", " + p.venue);
    a.href = safeUrl(p.url);
    li.appendChild(a);
    $("#prev-list").appendChild(li);
  });

  // Sponsors
  if (!C.sponsors.length) $("#sponsors").style.display = "none";
  C.sponsors.forEach(function (s) {
    var li = el("li", s.logo ? "" : "sponsor-ph");
    if (s.logo) {
      var img = el("img"); img.src = s.logo; img.alt = s.name; img.height = 32;
      var wrapEl = safeUrl(s.url || "") ? el("a") : li;
      if (wrapEl !== li) { wrapEl.href = s.url; li.appendChild(wrapEl); }
      wrapEl.appendChild(img);
    } else li.textContent = s.name;
    $("#sponsors").appendChild(li);
  });

  // Highlight the nav link of the section in view
  var links = {};
  document.querySelectorAll("#menu a").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting || !links[e.target.id]) return;
        Object.keys(links).forEach(function (k) { links[k].removeAttribute("aria-current"); });
        links[e.target.id].setAttribute("aria-current", "true");
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    Object.keys(links).forEach(function (id) { var t = document.getElementById(id); if (t) io.observe(t); });
  }

  // Mobile menu
  var btn = $(".menu-btn"), menu = $("#menu");
  btn.addEventListener("click", function () {
    var open = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
  });
  menu.addEventListener("click", function (e) {
    if (e.target.tagName === "A") { menu.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }
  });

  // Twins <-> Dreams blend. --mix: 0 = twins crisp, dreams soft. 1 = swapped.
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  var hero = $("#hero"), h1 = hero.querySelector("h1");
  var scrollMix = 0, pointerMix = 0, current = 0, raf = null;
  function apply() {
    var target = Math.max(scrollMix, pointerMix);
    current += (target - current) * 0.12;
    hero.style.setProperty("--mix", current.toFixed(3));
    raf = Math.abs(target - current) > 0.002 ? requestAnimationFrame(apply) : null;
  }
  function kick() { if (!raf && !reduce.matches) raf = requestAnimationFrame(apply); }
  window.addEventListener("scroll", function () {
    scrollMix = Math.min(1, Math.max(0, window.scrollY / (hero.offsetHeight * 0.7)));
    kick();
  }, { passive: true });
  h1.addEventListener("pointerenter", function () { pointerMix = 1; kick(); });
  h1.addEventListener("pointerleave", function () { pointerMix = 0; kick(); });
})();
