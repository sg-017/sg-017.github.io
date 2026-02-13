(function () {
  function startTyping() {
    var target = document.querySelector("[data-typing-text]");
    if (!target) {
      return;
    }

    var fullText = target.getAttribute("data-text") || "";
    var index = 0;
    var speedMs = 85;

    target.textContent = "";

    var timer = setInterval(function () {
      target.textContent += fullText.charAt(index);
      index += 1;

      if (index >= fullText.length) {
        clearInterval(timer);
        revealAvatar();
      }
    }, speedMs);
  }

  function revealAvatar() {
    var wrap = document.querySelector(".avatar-wrap");
    if (wrap) {
      wrap.classList.add("show");
    }
  }

  function startAvatarAnimation() {
    var avatar = document.querySelector("#pixel-avatar");
    if (!avatar) {
      return;
    }

    var framesAttr = avatar.getAttribute("data-avatar-frames") || "";
    var frames = framesAttr
      .split(",")
      .map(function (item) { return item.trim(); })
      .filter(Boolean);

    if (frames.length < 2) {
      return;
    }

    var index = 0;
    setInterval(function () {
      index = (index + 1) % frames.length;
      avatar.src = frames[index];
    }, 360);
  }

  document.addEventListener("DOMContentLoaded", function () {
    startTyping();
    startAvatarAnimation();
  });
})();
