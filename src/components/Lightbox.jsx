import { useCallback, useEffect, useRef, useState } from "react";

// Galleria a schermo intero su <dialog> nativo: Esc chiude, frecce per scorrere, swipe su mobile
export default function Lightbox({ images, title, index, onClose }) {
  const dialog = useRef(null);
  const touchX = useRef(null);
  const [current, setCurrent] = useState(index ?? 0);
  const open = index !== null && index !== undefined;

  useEffect(() => {
    if (!open) return;
    setCurrent(index);
    const el = dialog.current;
    if (el && !el.open) el.showModal();
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open, index]);

  const close = useCallback(() => {
    dialog.current?.close();
  }, []);

  const go = useCallback(
    (dir) => setCurrent((c) => (c + dir + images.length) % images.length),
    [images.length]
  );

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") go(1);
    if (e.key === "ArrowLeft") go(-1);
  };

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    touchX.current = null;
  };

  if (!open) return null;

  const img = images[current];
  const next = images[(current + 1) % images.length];

  return (
    <dialog
      ref={dialog}
      className="lightbox"
      aria-label={`Galleria: ${title}`}
      onClose={onClose}
      onKeyDown={onKeyDown}
      onClick={(e) => e.target === dialog.current && close()}
    >
      <div className="lightbox__bar">
        <p className="lightbox__title">
          {title}
          <span>
            {current + 1} di {images.length}
          </span>
        </p>
        <button type="button" className="lightbox__close" onClick={close} autoFocus>
          Chiudi
        </button>
      </div>

      <figure
        className="lightbox__stage"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <img
          key={img.src}
          src={img.src}
          alt={`${title}, foto ${current + 1} di ${images.length}`}
        />
        {/* Precarica la foto successiva */}
        <link rel="preload" as="image" href={next.src} />
      </figure>

      {images.length > 1 && (
        <>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            onClick={() => go(-1)}
            aria-label="Foto precedente"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
          </button>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            onClick={() => go(1)}
            aria-label="Foto successiva"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </>
      )}

      <ol className="lightbox__thumbs">
        {images.map((im, i) => (
          <li key={im.id}>
            <button
              type="button"
              aria-label={`Vai alla foto ${i + 1}`}
              aria-current={i === current}
              onClick={() => setCurrent(i)}
            >
              <img src={im.thumb} alt="" loading="lazy" />
            </button>
          </li>
        ))}
      </ol>
    </dialog>
  );
}
