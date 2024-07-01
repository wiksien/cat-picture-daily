import pawPattern from "@/public/paw_pattern.svg";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex w-full h-dvh flex-col items-center">
      <div className="bg-radial-background flex flex-col items-center w-full min-h-[80%]">
        <div className="bg-viniette-background absolute w-full h-[80%] z-10 shadow-xl"></div>
          <div
            className="w-full h-[80%] absolute animate-pan-infinite opacity-15"
            style={{
              backgroundImage: `url(${pawPattern.src})`,
              backgroundSize: "10%",
            }}
          ></div>
        <div className="w-full px-[10%] flex justify-center pt-12 z-10">
        <Card>
          <CardHeader>
            <CardTitle>
              <p className="text-4xl font-semibold">
                Daily Cat Picture of May 12 2024
              </p>
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
        <div className="w-full px-[10%] h-[80%] flex items-center flex-col gap-8 justify-center z-10">
          <img src="/miazaki.jpg" className="h-[80%] object-cover"/>
        </div>
      </div>
      <div className="bg-zinc-200 w-full h-100% px-[10%] py-16 flex flex-col gap-4">
        <Card>
          <CardHeader>
            <CardTitle>
              <p className="text-4xl">Despair of Creation</p>
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <div className="flex flex-col gap-6">
                <pre className="text-2xl whitespace-pre-line">
                  Hayao Miyazaki looks completely tired and devoid of any will
                  to exist in this realm. Just like me when I am struggling to
                  finish this website.
                </pre>

                <pre className="text-2xl whitespace-pre-line">
                  It seems truly that the road to great creation is paved with
                  great suffering. We must learn to take ourselves through the
                  process in full emotional presence through up and downs.
                </pre>

                <pre className="text-2xl whitespace-pre-line">
                  Not shy away from the pain of creation, but gracefully take it
                  in, just like Miyazaki with his smug ciggy in his mouth.
                </pre>
              </div>
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
    </main>
  );
}
