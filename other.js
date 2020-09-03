let faq = document.getElementById("faq");
let faqList = document.getElementById("faq-list");
let credit = document.getElementById("credit");
let creditList = document.getElementById("credit-list");

faq.addEventListener("click", () => faqList.classList.toggle("hide"));
credit.addEventListener("click", () => creditList.classList.toggle("hide"));