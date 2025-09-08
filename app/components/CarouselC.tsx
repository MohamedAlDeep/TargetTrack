import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Car } from "lucide-react"

const features = [
    {
        title: 'Cloud Access',
        desciption: 'You can share your goals with other users and get them to supervise them all on the cloud'
    },
    {
        title: 'Shared Statistics',
        desciption: 'A summary of your activity can be shared with others'
    }
]

export function CarouselC(){
    return (
        <Carousel 
           opts={{
                align: "start",
            }}
            className="w-full max-w-sm"
        >
        <CarouselContent>
            {
                features.map((obj, index) => (
                    <CarouselItem key={index} className="">
                        <Card className="w-70 h-40">
                            <CardContent >
                                <h1 className="text-2xl text-left">{obj.title}</h1>
                                <p className="text-left">{obj.desciption}</p>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))
            }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
    )
}