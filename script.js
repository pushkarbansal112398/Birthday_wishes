const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

revealItems.forEach((item) => observer.observe(item));

const wishButton = document.getElementById("wishButton");
const littleNote = document.getElementById("littleNote");

const wishes = [
  "May the wish in your heart find its way to you. ♡",
  "More laughter, more love, and beautiful new beginnings. ✨",
  "You deserve all the little things that make life lovely. 🌷",
  "May this year be gentle with you and generous with joy. ♡",
];

wishButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * wishes.length);

  littleNote.textContent = wishes[randomIndex];
  wishButton.textContent = "One more wish? ✨";

  burstConfetti();
});

function burstConfetti() {
  const symbols = ["♡", "✿", "✧", "·"];

  for (let i = 0; i < 24; i++) {
    const particle = document.createElement("span");

    particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    particle.style.position = "fixed";
    particle.style.left = `${45 + Math.random() * 10}%`;
    particle.style.top = `${58 + Math.random() * 8}%`;
    particle.style.zIndex = "20";
    particle.style.pointerEvents = "none";

    particle.style.color = ["#b78c91", "#b59a66", "#e8c9c7"][i % 3];

    particle.style.fontSize = `${12 + Math.random() * 15}px`;
    particle.style.transition =
      "transform 1.2s ease-out, opacity 1.2s ease-out";

    document.body.appendChild(particle);

    requestAnimationFrame(() => {
      particle.style.transform =
        `translate(${(Math.random() - 0.5) * 240}px, ` +
        `${-80 - Math.random() * 180}px) ` +
        `rotate(${Math.random() * 360}deg)`;

      particle.style.opacity = "0";
    });

    setTimeout(() => particle.remove(), 1300);
  }
}
