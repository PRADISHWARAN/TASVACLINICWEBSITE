import { useState } from "react";
import { ArrowLeft, Images, X } from "lucide-react";
import g1 from "@/assets/Reception.JPG";
import g2 from "@/assets/DSC_9806.JPG";
import g3 from "@/assets/DSC_9800.JPG";
import g4 from "@/assets/Eqp.JPG";
import g5 from "@/assets/Pic1.JPG";
import g6 from "@/assets/Pic2.JPG";
import g7 from "@/assets/Pic3.JPG";
import main from "@/assets/Main.JPG";
import main2 from "@/assets/Main2.JPG";

type GalleryPhoto = {
  src: string;
  alt: string;
};

type GalleryCategory = {
  id: string;
  title: string;
  description: string;
  cover: string;
  photos: GalleryPhoto[];
};

const categories: GalleryCategory[] = [
  {
    id: "reception",
    title: "Reception",
    description: "Arrival area, waiting lounge and clinic entry views.",
    cover: g1,
    photos: [
      { src: g1, alt: "Tasvaa Clinic reception lounge" },
      { src: main2, alt: "Tasvaa Clinic welcoming interior" },
      { src: main, alt: "Tasvaa Clinic entrance space" },
    ],
  },
  {
    id: "machines",
    title: "Machines",
    description: "Equipment and technology used for skin and hair care.",
    cover: g4,
    photos: [
      { src: g4, alt: "Tasvaa Clinic treatment equipment" },
      { src: g6, alt: "Tasvaa Clinic machine detail" },
    ],
  },
  {
    id: "treatment-rooms",
    title: "Treatment Rooms",
    description: "Procedure rooms designed for comfort and clinical care.",
    cover: g2,
    photos: [
      { src: g2, alt: "Tasvaa Clinic treatment room interior" },
      { src: g5, alt: "Tasvaa Clinic treatment room" },
      { src: g3, alt: "Tasvaa Clinic consultation space" },
    ],
  },
  {
    id: "restroom",
    title: "Restroom",
    description: "Clinic corridor and restroom access area.",
    cover: g7,
    photos: [
      { src: g7, alt: "Tasvaa Clinic restroom corridor" },
    ],
  },
];

export function Gallery() {
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);
  const activeCategory = categories.find((category) => category.id === activeCategoryId);

  return (
    <section id="gallery" className="py-14 lg:py-28 relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="section-label text-gold-shimmer">The Space</span>
          <h2 className="mt-3 font-display text-3xl text-coffee sm:text-4xl lg:text-5xl">
            Step inside Tasvaa.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Browse each area of the clinic, then open any photo for a closer view.
          </p>
        </div>

        {!activeCategory ? (
          <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategoryId(category.id)}
                className="group relative h-[260px] overflow-hidden rounded-2xl lg:rounded-3xl text-left shadow-card"
              >
                <img
                  src={category.cover}
                  alt={category.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee/75 via-coffee/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-[10px] uppercase tracking-widest text-primary-foreground/80 backdrop-blur">
                    <Images className="h-3.5 w-3.5" />
                    {category.photos.length} photos
                  </div>
                  <h3 className="font-display text-2xl text-primary-foreground">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                    {category.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="mt-10 sm:mt-14">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategoryId(null);
                    setActivePhoto(null);
                  }}
                  className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-coffee/75 hover:text-coffee"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to gallery
                </button>
                <h3 className="mt-3 font-display text-3xl text-coffee sm:text-4xl">
                  {activeCategory.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {activeCategory.description}
                </p>
              </div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Tap a photo to view
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {activeCategory.photos.map((photo, index) => (
                <button
                  key={`${activeCategory.id}-${index}`}
                  type="button"
                  onClick={() => setActivePhoto(photo)}
                  className="group relative h-[230px] overflow-hidden rounded-2xl lg:rounded-3xl text-left shadow-card sm:h-[280px]"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee/55 via-transparent to-transparent opacity-80" />
                  <p className="absolute bottom-0 left-0 right-0 px-5 py-4 text-xs font-medium uppercase tracking-widest text-primary-foreground/90">
                    {photo.alt}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-coffee/90 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.alt}
          onClick={() => setActivePhoto(null)}
        >
          <button
            type="button"
            onClick={() => setActivePhoto(null)}
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
            aria-label="Close photo"
          >
            <X className="h-5 w-5" />
          </button>
          <figure
            className="max-h-[88vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={activePhoto.src}
              alt={activePhoto.alt}
              className="max-h-[82vh] w-full rounded-2xl object-contain shadow-luxe"
            />
            <figcaption className="mt-3 text-center text-xs uppercase tracking-widest text-primary-foreground/70">
              {activePhoto.alt}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
