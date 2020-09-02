class VideoPlayer {
  constructor() {
    this.player = document.querySelector(".player");
    this.video = this.player.querySelector(".viewer");
    this.progress = document.querySelector(".progress");
    this.progressBar = this.progress.querySelector(".progress__filled");
    this.toggle = this.player.querySelector(".toggle");
    this.skipButtons = this.player.querySelectorAll("[data-skip]");
    this.ranges = this.player.querySelectorAll(".player__slider");
    this.mouseDown = false;
  }

  init() {
    // start plugin
    this.events();
  }

  events() {
    this.video.addEventListener("click", (e) => this.togglePlay());
    this.video.addEventListener("timeupdate", (e) => this.handleProgress());
    this.toggle.addEventListener("click", (e) => this.togglePlay());
  }

  togglePlay() {
    // play/pause videoplayer
    const method = this.video.paused ? "play" : "pause";
    this.toggle.textContent = this.video.paused ? "❚ ❚" : "➤";
    this.video[method]();
  }

  handleProgress() {
    const percent = (this.video.currentTime / this.video.duration) * 100;
    this.progressBar.style.flexBasis = `${percent}%`;
  }
}

const video = new VideoPlayer();
video.init();
