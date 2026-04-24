import * as React from "react";
import { Link } from "gatsby";
import renderHighlightedText from "../brand-text";
import deckHeroBackground from "../../images/deck-hero-background.jpg";
import deckBenchShovel from "../../images/gallery/deck-bench-shovel.jpg";
import deckWithRailingHouse from "../../images/gallery/deck-with-railing-house.jpg";
import fenceBackyard from "../../images/gallery/fence-backyard.jpg";
import gardenFenceTrees from "../../images/gallery/garden-fence-trees.jpeg";
import horizontalWoodFence from "../../images/gallery/horizontal-wood-fence.jpg";
import modernBackyardDeck from "../../images/gallery/modern-backyard-deck.jpg";
import morningGardenFence from "../../images/gallery/morning-garden-fence.jpeg";
import newBackyardDeckConstruction from "../../images/gallery/new-backyard-deck-construction.jpg";
import pergolaDeckConstruction from "../../images/gallery/pergola-deck-construction.jpg";
import sunnyWoodFence from "../../images/gallery/sunny-wood-fence.jpg";
import sunsetHomeDeck from "../../images/gallery/sunset-home-deck.jpeg";
import sunsetWoodFence from "../../images/gallery/sunset-wood-fence.jpg";
import woodenDeckSteps from "../../images/gallery/wooden-deck-steps.jpg";

const galleryImages = [
  {
    src: fenceBackyard,
    alt: "Wood privacy fence installation in a backyard",
    caption: "Cedar privacy fence built for a shaded backyard retreat",
  },
  {
    src: deckBenchShovel,
    alt: "Completed wooden deck project with railing",
    caption: "Custom wood deck with handcrafted railing details",
  },
  {
    src: modernBackyardDeck,
    alt: "Modern backyard deck project in a garden",
    caption: "Modern backyard deck with garden privacy",
  },
  {
    src: deckWithRailingHouse,
    alt: "Residential deck with wood railing",
    caption: "Residential deck installation with clean wood railing",
  },
  {
    src: woodenDeckSteps,
    alt: "Wooden deck steps and staircase project",
    caption: "Wide deck staircase built for everyday outdoor access",
  },
  {
    src: sunsetWoodFence,
    alt: "Long wood privacy fence at sunset",
    caption: "Long privacy fence designed for open property lines",
  },
  {
    src: gardenFenceTrees,
    alt: "Wood fence lining backyard garden with small trees",
    caption: "Backyard garden fence with durable wood paneling",
  },
  {
    src: pergolaDeckConstruction,
    alt: "Backyard pergola and deck under construction",
    caption: "Pergola and deck build prepared for outdoor entertaining",
  },
  {
    src: newBackyardDeckConstruction,
    alt: "New wooden deck being constructed behind a house",
    caption: "New backyard deck construction with fresh framing",
  },
  {
    src: morningGardenFence,
    alt: "Residential fence enclosing garden with young trees",
    caption: "Residential fence and garden enclosure project",
  },
  {
    src: horizontalWoodFence,
    alt: "Horizontal wooden fence protecting modern backyard garden",
    caption: "Horizontal wood fence with modern backyard landscaping",
  },
  {
    src: sunsetHomeDeck,
    alt: "Completed backyard deck project at sunset",
    caption: "Composite-style deck installation with sunset views",
  },
  {
    src: sunnyWoodFence,
    alt: "Sunny residential wood fence installation",
    caption: "Sunny wood fence installation for a family yard",
  },
  {
    src: deckHeroBackground,
    alt: "Wooden plank deck flooring project",
    caption: "Finished deck flooring with clean plank lines",
  },
];

type GalleryImage = (typeof galleryImages)[number];

type BuilderGalleryProps = {
  images: GalleryImage[];
  onOpenImage: (index: number) => void;
};

const BuilderGallery = React.memo(
  ({ images, onOpenImage }: BuilderGalleryProps) => (
    <section
      className="builder-gallery"
      aria-labelledby="builder-gallery-title">
      <div className="builder-gallery__intro">
        <h2 id="builder-gallery-title">
          {renderHighlightedText("Fence and Deck Builder Gallery")}
        </h2>
        <p>
          {renderHighlightedText(
            "Explore our fence and deck projects — expertly built for Everett-area and Northwest homes. From privacy fences to custom decks, each project is built to endure weather, time, and everyday use.",
          )}
        </p>
      </div>

      <div className="builder-gallery__grid">
        {images.map((image, index) => (
          <figure className="builder-gallery__item" key={image.alt}>
            <button
              type="button"
              className="builder-gallery__button"
              onClick={() => onOpenImage(index)}
              aria-label={`Open preview: ${image.alt}`}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </button>
          </figure>
        ))}
      </div>
    </section>
  ),
);

BuilderGallery.displayName = "BuilderGallery";

type GalleryLightboxProps = {
  activeIndex: number;
  imageLoaded: boolean;
  images: GalleryImage[];
  onClose: () => void;
  onImageLoad: () => void;
  onNext: () => void;
  onPrevious: () => void;
  onSelectImage: (index: number) => void;
};

const GalleryLightbox = React.memo(
  ({
    activeIndex,
    imageLoaded,
    images,
    onClose,
    onImageLoad,
    onNext,
    onPrevious,
    onSelectImage,
  }: GalleryLightboxProps) => {
    const touchStartX = React.useRef<number | null>(null);
    const activeImage = images[activeIndex];

    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
      touchStartX.current = event.touches[0]?.clientX ?? null;
    };

    const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
      if (touchStartX.current === null) {
        return;
      }

      const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX.current;
      const swipeDistance = touchEndX - touchStartX.current;

      if (Math.abs(swipeDistance) > 48) {
        if (swipeDistance > 0) {
          onPrevious();
        } else {
          onNext();
        }
      }

      touchStartX.current = null;
    };

    return (
      <div
        className="gallery-lightbox"
        role="dialog"
        aria-modal="true"
        aria-label="Project gallery image preview">
        <button
          type="button"
          className="gallery-lightbox__backdrop"
          aria-label="Close image preview"
          onClick={onClose}
        />
        <button
          type="button"
          className="gallery-lightbox__close"
          onClick={onClose}
          aria-label="Close image preview"
          data-tooltip="Close">
          ×
        </button>
        <div
          className="gallery-lightbox__content"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}>
          <div className="gallery-lightbox__image-stage">
            <div className="gallery-lightbox__count">
              {activeIndex + 1} / {images.length}
            </div>
            <button
              type="button"
              className="gallery-lightbox__nav gallery-lightbox__nav--prev"
              onClick={onPrevious}
              aria-label="Show previous image">
              ‹
            </button>
            <div className="gallery-lightbox__image-wrap">
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className={imageLoaded ? "gallery-lightbox__image--loaded" : ""}
                onLoad={onImageLoad}
              />
            </div>
            <button
              type="button"
              className="gallery-lightbox__nav gallery-lightbox__nav--next"
              onClick={onNext}
              aria-label="Show next image">
              ›
            </button>
          </div>
          <div className="gallery-lightbox__meta">
            <p>{activeImage.caption}</p>
            <Link to="/contact#contact-form" className="gallery-lightbox__cta">
              Like this project? Get a free estimate
            </Link>
          </div>
          <div
            className="gallery-lightbox__thumbs"
            aria-label="Gallery thumbnails">
            {images.map((image, index) => (
              <button
                type="button"
                key={image.alt}
                className={`gallery-lightbox__thumb${index === activeIndex ? " gallery-lightbox__thumb--active" : ""}`}
                onClick={() => onSelectImage(index)}
                aria-label={`Show image ${index + 1}: ${image.caption}`}>
                <img src={image.src} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  },
);

GalleryLightbox.displayName = "GalleryLightbox";

const GallerySection = () => {
  const [activeGalleryIndex, setActiveGalleryIndex] = React.useState<
    number | null
  >(null);
  const [isLightboxImageLoaded, setIsLightboxImageLoaded] =
    React.useState(false);

  const handleOpenGalleryImage = React.useCallback((index: number) => {
    setActiveGalleryIndex(index);
  }, []);

  const handleCloseGallery = React.useCallback(() => {
    setActiveGalleryIndex(null);
  }, []);

  const handleGalleryPrevious = React.useCallback(() => {
    setActiveGalleryIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex;
      }

      return (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    });
  }, []);

  const handleGalleryNext = React.useCallback(() => {
    setActiveGalleryIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex;
      }

      return (currentIndex + 1) % galleryImages.length;
    });
  }, []);

  const handleLightboxImageLoad = React.useCallback(() => {
    setIsLightboxImageLoaded(true);
  }, []);

  React.useEffect(() => {
    if (activeGalleryIndex === null) {
      return undefined;
    }

    setIsLightboxImageLoaded(false);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCloseGallery();
      }

      if (event.key === "ArrowLeft") {
        handleGalleryPrevious();
      }

      if (event.key === "ArrowRight") {
        handleGalleryNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    activeGalleryIndex,
    handleCloseGallery,
    handleGalleryNext,
    handleGalleryPrevious,
  ]);

  return (
    <>
      <BuilderGallery
        images={galleryImages}
        onOpenImage={handleOpenGalleryImage}
      />

      {activeGalleryIndex !== null ? (
        <GalleryLightbox
          activeIndex={activeGalleryIndex}
          imageLoaded={isLightboxImageLoaded}
          images={galleryImages}
          onClose={handleCloseGallery}
          onImageLoad={handleLightboxImageLoad}
          onNext={handleGalleryNext}
          onPrevious={handleGalleryPrevious}
          onSelectImage={handleOpenGalleryImage}
        />
      ) : null}
    </>
  );
};

export default GallerySection;
