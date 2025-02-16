const globalState = {
  isHome: true,
};

class ProjectInfo {
  constructor(title, thumbnail, link, knobValues) {
    this.title = title;
    this.thumbnail = thumbnail;
    this.link = link;
    this.knobValues = knobValues;
  }
}

const globalProjectInfo = [
  new ProjectInfo(
    "Bud Music",
    "/assets/projects/budMusic/product-3-01.webp",
    "/projects/budMusic",
    [0.8, 0.8, 0.2, 0.0]
  ),
  new ProjectInfo(
    "Youtube",
    "/assets/projects/youtubeCherry/liveOak/FinalComps/5.webp",
    "/projects/youtube",
    [0.6, 0.8, 0.6, 0.1]
  ),
];
