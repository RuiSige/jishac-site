/* Jishac 共通パーツ：header.html / sidebar.html / footer.html */
(async function () {
  const parts = [
    ["site-header-slot", "header.html"],
    ["site-sidebar-slot", "sidebar.html"],
    ["site-footer-slot", "footer.html"]
  ];
  await Promise.all(parts.map(async ([slotId, file]) => {
    const slot = document.getElementById(slotId);
    if (!slot) return;
    try {
      const response = await fetch(file, { cache: "no-cache" });
      if (!response.ok) throw new Error(`${file}: HTTP ${response.status}`);
      slot.outerHTML = await response.text();
    } catch (error) {
      console.error("共通パーツの読み込みに失敗しました:", error);
      slot.textContent = "メニューを読み込めませんでした。ページを再読み込みしてください。";
    }
  }));
  const year = document.getElementById("copyright-year");
  if (year) year.textContent = new Date().getFullYear();
  const page = location.pathname.split("/").pop() || "index.html";
  const activeLinks = document.querySelectorAll(".side-nav a, .top-nav a");
  for (const link of activeLinks) {
    const target = link.getAttribute("href");
    if (target === page || (page === "index.html" && target === "./")) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  }
})();
