import Image from "next/image";
import { CarouselC } from "./components/CarouselC";

export default function Home() {
  return (
    <div>
     <div className="text-center">
       <h1 className="text-8xl">TargetTrack</h1>
       <p className="mt-3 font-light font-sans">Your best solution for sharing your goals with other, track them and have supervision on them.</p>
     </div>
     <div className="text-center mt-40">
        <h1 className="text-4xl">Our Features</h1>
        <div className="flex justify-center mt-9">
          <CarouselC />
        </div>
     </div>
    </div>
  );
}
