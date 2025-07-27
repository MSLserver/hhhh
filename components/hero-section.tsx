import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function HeroSection() {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic05.jpg-3wsAgOCPNzHgAaZReNLYueVU8iyPnF.jpeg"
        alt="Modern Minecraft server build with wooden canopy"
        fill
        className="object-cover brightness-75"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
      <div className="container relative flex h-full flex-col items-center justify-center text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
          欢迎来到我们的世界
        </h1>
        <p className="mb-8 max-w-[600px] text-lg text-white/90 md:text-xl">
          探索无限可能，打造属于你的传奇
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" className="bg-primary text-primary-foreground">
            立即加入
          </Button>
          <Button size="lg" variant="outline" className="text-white">
            了解更多
          </Button>
        </div>
      </div>
    </section>
  )
}

