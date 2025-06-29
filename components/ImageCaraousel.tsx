"use client"

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"

type Props = {
  images: string[]
}

export default function ImageCarousel({ images }: Props) {
  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      stopOnFocusIn: true,

    })
  )


  const [embla, setEmbla] = React.useState<any>()
  const [currentSlide, setCurrentSlide] = React.useState(0)

  React.useEffect(() => {
    if (!embla) return

    const updateCurrent = () => {
      setCurrentSlide(embla.selectedScrollSnap())
    }

    embla.on("select", updateCurrent)
    updateCurrent() // run once on mount

    return () => {
      embla.off("select", updateCurrent)
    }
  }, [embla])

  return (
    <div className="w-full max-w-4xl mx-auto py-10">
      <Carousel
        plugins={[plugin.current]}
        setApi={setEmbla}
        className="group relative w-full"
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index} className="flex justify-center items-center">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        {
            currentSlide > 0 && (
              <CarouselPrevious className="group-hover:opacity-100 opacity-0 transition-opacity duration-300 absolute left-4 bg-neutral-300 text-black"  />
            )
        }
        {
            currentSlide < images.length - 1 && (
              <CarouselNext className="group-hover:opacity-100 opacity-0 transition-opacity duration-300 absolute right-4 bg-neutral-300 text-black"  />
            )
        }
        

        {/* Slide Indicator */}
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-sm text-white  px-4 py-1 rounded-full shadow-lg backdrop-blur">
           {currentSlide + 1} of {images.length}
        </div>
      </Carousel>
    </div>
  )
}
