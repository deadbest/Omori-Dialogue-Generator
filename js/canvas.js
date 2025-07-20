const normalFont = new FontFace("OMORI_MAIN", "url(./css/fonts/OMORI_GAME.ttf)");
const disturbedFont = new FontFace("OMORI_DISTURBED", "url(./css/fonts/OMORI_GAME2.ttf)");
// const disturbedFont = new FontFace("OMORI_MAIN", "url(./css/fonts/OMORI_GAME.ttf)");
document.fonts.add(normalFont);
document.fonts.add(disturbedFont);
console.log("Fonts loaded");

function loadHtml2Canvas(callback) {
  const script = document.createElement('script');
  script.src = "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js";
  script.onload = callback;
  document.head.appendChild(script);
}

function downloadDialogue(idDiv) {
  loadHtml2Canvas(() => {
    html2canvas(document.getElementById(idDiv), {
      scale: 3,
      useCORS: true,
      backgroundColor: null
    }).then(canvas => {
      // Convert canvas to image
      const link = document.createElement("a");
      link.download = "omori-dialogue.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  });
}