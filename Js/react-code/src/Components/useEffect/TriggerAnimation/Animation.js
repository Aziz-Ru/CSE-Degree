export class FadeInAnimation {
  constructor(node) {
    this.node = node;
  }
  start(duration) {
    this.duration = duration;
    if (this.duration == 0) {
      this.Onprogress(1);
    } else {
      this.Onprogress(0);
      this.startTime = performance.now();
      this.frameID = requestAnimationFrame(() => this.onFrame());
    }
  }
  onFrame() {
    const timePassed = performance.now() - this.startTime;
    const progress = Math.min(timePassed / this.duration, 1);
    this.Onprogress(progress);
    if (progress < 1) {
      this.frameId = requestAnimationFrame(() => this.onFrame());
    }
  }
  Onprogress(progress) {
    this.node.style.opacity = progress;
  }
  stop() {
    cancelAnimationFrame(this.frameID);
    this.duration = 0;
    this.frameID = null;
    this.startTime = null;
  }
}
