// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

// Highlight active nav link (by filename)
(function markActiveNav() {
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav a").forEach((a) => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href.endsWith(path)) {
      a.style.fontWeight = "800";
      a.style.textDecoration = "none";
    }
  });
})();
// ===== Clients: Testimonials slider (2 cards per slide) =====
(function testimonialsSlider(){
  const grid = document.getElementById("testimonialGrid");
  const prev = document.getElementById("prevTest");
  const next = document.getElementById("nextTest");

  if (!grid || !prev || !next) return;

  const slides = [
    [
      {
        text:
          "As someone working in the service industry, I needed a virtual assistant who could handle a variety of tasks, including billing, collections, and scheduling. VAM provided me with exactly that. My assistant quickly took over these responsibilities, ensuring all tasks were handled efficiently and on time. This has allowed me to focus on providing better service to my clients, and my overall business operations have improved significantly. The team at VAM truly understands my needs and delivers exceptional service.",
        name: "Moishe F",
        role: "Service Provider",
        stars: 5
      },
      {
        text:
          "Working in a fast-paced sales environment, I needed a virtual assistant who could handle a variety of tasks with precision and speed. VAM provided me with exactly that. My assistant helped with scheduling, email management, and lead generation, all of which have significantly boosted my productivity. The communication and training process was seamless, and I couldn't be happier with the service.",
        name: "James L.",
        role: "Sales Executive",
        stars: 5
      }
    ],
    [
      {
        text:
          "Before working with VAM, I would often miss important time-sensitive tasks like lease renewals and the start of legal cases. Since bringing on a virtual assistant, everything happens like clockwork. My VA keeps me on track with all deadlines, and the process is now much more efficient, ultimately increasing our bottom line. I couldn't be happier with the level of service and attention to detail that VAM provides.",
        name: "Joel L",
        role: "Property Manager",
        stars: 5
      },
      {
        text:
          "I had previously worked with another VA agency but struggled to get the tailored support I needed. With VAM, everything changed. They not only helped me find the right virtual assistant, but they also managed and trained the assistant specifically for my business needs. Since then, I've been able to focus on closing more deals and increasing my income. My back office operations are running smoothly now, and I can focus on managing my properties instead of getting bogged down in administrative tasks. The team truly listens and adapts to what works best for me!",
        name: "Mark K.",
        role: "Property Owner and Manager",
        stars: 5
      }
    ]
  ];

  let index = 0;

  function starString(n){
    return "★".repeat(n);
  }

  function render(){
    const pair = slides[index];
    grid.innerHTML = pair.map(item => `
      <article class="test-card">
        <div class="quote-mark">“</div>
        <p class="test-text">"${item.text}"</p>
        <div class="stars">${starString(item.stars)}</div>
        <div class="test-footer">
          <p class="test-name">${item.name}</p>
          <p class="test-role">${item.role}</p>
        </div>
      </article>
    `).join("");
  }

  prev.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    render();
  });

  next.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    render();
  });

  render();
})();
