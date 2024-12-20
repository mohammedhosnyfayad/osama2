let scroll = document.querySelector(".scroll");
let par = document.querySelector(".par");
let scrollELE = document.querySelector(".scroll");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 220) {
    par.style.transform = "scale(1)";
  } else {
    par.style.transform = "scale(0)";
  }
});
scrollELE.onclick = function () {
  window.scrollTo({ top: 520, behavior: "smooth" });
};

// let btn = document.querySelector(".btn button");
// console.log(btn);

// let sec = document.querySelector(".sec");
// let st = true;
// btn.onclick = function () {
//   if (st === true) {
//     sec.style.display = "block";
//     st = false;
//     btn.textContent = "show less";
//   } else {
//     sec.style.display = "none";
//     btn.textContent = "show more";

//     st = true;
//     window.scrollTo({ top: 5832, behavior: "smooth" });
//   }
// };

let nav = document.querySelector(".nav");
let navul = document.querySelector(".nav ul");
let i = document.querySelector(".fa-bars");
let closebar = document.querySelector(".fa-xmark");
let stat1 = true;

// إضافة الـ Events مرة واحدة
i.addEventListener("click", function () {
  if (window.matchMedia("(max-width: 768px)").matches) {
    // تحقق إذا كانت الشاشة موبايل
    navul.style.transform = "translateY(0)";
    navul.style.borderBottomLeftRadius = "400px";
    i.style.display = "none";
    closebar.style.display = "block";
    document.body.classList.add("no-scroll"); // يضيف كلاس لمنع التمرير
  }
});

closebar.addEventListener("click", function () {
  if (window.matchMedia("(max-width: 768px)").matches) {
    // تحقق إذا كانت الشاشة موبايل
    navul.style.transform = "translateY(-1500px)";
    navul.style.borderBottomLeftRadius = "none";
    closebar.style.display = "none";
    i.style.display = "block";
    document.body.classList.remove("no-scroll"); // يزيل كلاس لتمكين التمرير
  }
});

// إعادة القيم الافتراضية عند تغيير حجم الشاشة
window.addEventListener("resize", function () {
  if (!window.matchMedia("(max-width: 768px)").matches) {
    // في الشاشات الكبيرة
    navul.style.transform = "translateY(0)";
    navul.style.borderBottomLeftRadius = "none";
    i.style.display = "none";
    closebar.style.display = "none";
    document.body.classList.remove("no-scroll");
  }
});
