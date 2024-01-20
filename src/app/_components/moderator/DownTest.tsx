"use client";

interface PDFI {
  pdf: Buffer;
  ReviewedAction: (id: string, companyId: string) => void;
  DeleteAction: (id: string) => void;
  id: string;
  companyId: string;
}

const DownTest = ({
  pdf,
  ReviewedAction,
  DeleteAction,
  id,
  companyId,
}: PDFI) => {
  function download() {
    const buf = pdf;
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
      <button
        className="bg-blue-200 rounded-3xl w-32 h-10 p-2 hover:bg-blue-400"
        onClick={download}
      >
        Download PDF
      </button>
      <button
        className="bg-blue-200 rounded-3xl w-32 h-10 p-2 hover:bg-blue-400"
        onClick={() => ReviewedAction(id, companyId)}
      >
        Reviewed
      </button>
      <button
        className="bg-blue-200 rounded-3xl w-32 h-10 p-2 hover:bg-blue-400"
        onClick={() => DeleteAction(id)}
      >
        Delete PDF
      </button>
    </div>
  );
};

export default DownTest;
