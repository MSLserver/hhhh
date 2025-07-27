import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Map, Shield, Sparkles } from 'lucide-react'

export function FeaturesSection() {
  return (
    <section className="container py-24">
      <h2 className="mb-12 text-center text-3xl font-bold">服务器特色</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <Users className="h-12 w-12 text-primary" />
            <CardTitle>友好社区</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              加入我们充满活力的玩家社区，结交新朋友
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Map className="h-12 w-12 text-primary" />
            <CardTitle>精美建筑</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              探索独特的建筑风格，感受不一样的视觉体验
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Shield className="h-12 w-12 text-primary" />
            <CardTitle>稳定运行</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              采用高性能服务器，确保流畅的游戏体验
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Sparkles className="h-12 w-12 text-primary" />
            <CardTitle>特色玩法</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              独特的游戏模式和玩法，带来全新的游戏体验
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

