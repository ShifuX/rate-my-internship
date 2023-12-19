"use client";

const DownTest = ({ company }: any) => {
  function download() {
    const buf = company?.reviews[0].pdf;
    if (!buf) return;
    const blobUrl = window.URL.createObjectURL(new Blob([Buffer.from(buf)]));
    const fileName = "offer-letter";
    const aTag = document.createElement("a");
    aTag.href = blobUrl;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }

  return (
    <div>
      <button onClick={download}>Download PDF</button>
    </div>
  );
};

export default DownTest;
