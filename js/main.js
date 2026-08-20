/* ============================================================
   朔州市实验中学校 2405班 · 班级官网 交互脚本
   ============================================================ */

(function () {
  "use strict";

  /* ---------- 导航栏滚动效果 ---------- */
  var navbar = document.getElementById("navbar");
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");

  function onScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- 移动端菜单开关 ---------- */
  navToggle.addEventListener("click", function () {
    navLinks.classList.toggle("open");
  });

  /* 点击导航链接后自动收起移动端菜单 */
  navLinks.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("open");
    }
  });

  /* ---------- 高亮当前区域导航 ---------- */
  var sections = document.querySelectorAll("section[id]");
  var menuAnchors = navLinks.querySelectorAll('a[href^="#"]');

  function setActive() {
    var pos = window.scrollY + 120;
    var currentId = "";
    sections.forEach(function (sec) {
      if (pos >= sec.offsetTop) {
        currentId = sec.id;
      }
    });
    menuAnchors.forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("href") === "#" + currentId);
    });
  }
  window.addEventListener("scroll", setActive, { passive: true });
  setActive();

  /* ---------- 滚动显现动画 ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("visible");
    });
  }
})();
