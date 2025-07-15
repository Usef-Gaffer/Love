const messages = [
    "Seninle gurur duyuyorum ❤️",
    "Tüm hayallerin gerçek olsun 🌟",
    "Seninle bir ömür geçirmek istiyorum 💑",
    "Seni çok seviyorum ❤️",
  ];
  
  function enterSite() {
    const entry = document.getElementById("entry-screen");
    const card = document.getElementById("card");
  
    // ابدأ بالـ fade out
    entry.classList.remove("fade-in");
    entry.classList.add("fade-out");
  
    setTimeout(() => {
      entry.classList.add("hidden");
      entry.classList.remove("fade-out");
  
      // اظهر الكارت بـ fade in
      card.classList.remove("hidden");
      card.classList.add("fade-in");
    }, 800); // خليه نفس مدة الأنميشن
  
    document.getElementById("bg-music").play();
  }
  
  function goBack() {
    const card = document.getElementById("card");
    const entry = document.getElementById("entry-screen");
  
    card.classList.remove("fade-in");
    card.classList.add("fade-out");
  
    setTimeout(() => {
      card.classList.add("hidden");
      card.classList.remove("fade-out");
  
      entry.classList.remove("hidden");
      entry.classList.add("fade-in");
    }, 800);
  
    document.getElementById("bg-music").pause();
  }
  
  function showMessages() {
    const container = document.getElementById("messages");
    container.innerHTML = "";
    messages.forEach(msg => {
      const p = document.createElement("p");
      p.textContent = msg;
      container.appendChild(p);
    });
    container.classList.remove("hidden");
    container.classList.add("fade-in");
  }
  
  function toggleMusic() {
    const music = document.getElementById("bg-music");
    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
  }
  