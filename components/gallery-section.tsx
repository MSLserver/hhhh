import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic02.jpg-MzgwY21ZfftXgOStHLltdwIgQWUSW9.jpeg",
    alt: "精美的室内装饰"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic07.jpg-E9pSoCdewKJ7UPFtJNorgciJOhyV45.jpeg",
    alt: "传统风格建筑"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic24.png-6UhVvFZUiYgEb4ezkIVNERoXhKcBMz.png",
    alt: "未来科技风格"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic25.png-V8MA2AaNiPKJeX2HZx1P7PGVmPGutw.png",
    alt: "特色建筑内饰"
  }
]

export function GallerySection() {
  return (
    <section className="container py-24">
      <h2 className="mb-12 text-center text-3xl font-bold">精彩展示</h2>
      <Carousel className="mx-auto max-w-5xl">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="p-0">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}

