function loadHtml2Canvas(callback) {
  const script = document.createElement('script');
  script.src = "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js";
  script.onload = callback;
  document.head.appendChild(script);
}

function downloadDialogue(idDiv) {
  loadHtml2Canvas(() => {
    html2canvas(document.getElementById(idDiv), {
      scale: 2,
      // useCORS: true,
      backgroundColor: null
    }).then(canvas => {
      const link = document.createElement("a");
      link.download = "omori-dialogue.png";
      link.href = canvas.toDataURL("image/png");
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  });
}