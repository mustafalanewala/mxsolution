/**
 * Full-bleed cinematic band — the film plays edge to edge and floor to
 * ceiling, with no player chrome and no pointer interaction, so it reads
 * as a scene in the page rather than as a video widget.
 *
 * Drop the file at `public/film.mp4` (and optionally a first-frame
 * `public/film-poster.jpg`). Until it exists the ink ground shows
 * through, so the band still holds its place in the layout.
 */
export function VideoBand() {
  return (
    <section
      aria-label="Mx Solution film"
      className="relative h-svh w-full overflow-hidden bg-foreground"
    >
      <video
        className="pointer-events-none absolute inset-0 size-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/film-poster.jpg"
        // Belt and braces: some mobile browsers add their own chrome
        // unless the element explicitly opts out.
        disablePictureInPicture
        controlsList="nodownload noplaybackrate noremoteplayback"
        tabIndex={-1}
      >
        <source src="/film.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
