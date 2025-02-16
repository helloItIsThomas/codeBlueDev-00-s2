export function splitType() {
  // const text = new SplitType("#split-type", { types: "words, chars" });
  const text = new SplitType("#purposeStatement", { types: "words, chars" });
  text.lines.forEach((line) => {
    const charsInLine = line.querySelectorAll(".char");
    gsap.from(charsInLine, {
      opacity: 0,
      y: 100,
      ease: "power1.inOut",
      stagger: {
        amount: 0.1,
        from: "center",
        grid: [text.lines.length, charsInLine.length],
      },
    });
  });
}
