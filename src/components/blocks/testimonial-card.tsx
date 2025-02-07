import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  content: string
  author: {
    name: string
    title?: string
    avatar?: string
  }
  rating?: number
}

export function TestimonialCard({
  content,
  author,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        {rating && (
          <div className="flex gap-0.5 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating
                    ? "text-yellow-500 fill-yellow-500"
                    : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
        )}
        <blockquote className="text-lg mb-6">{content}</blockquote>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>
              {author.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold">{author.name}</div>
            {author.title && (
              <div className="text-sm text-muted-foreground">{author.title}</div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}