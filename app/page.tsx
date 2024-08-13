import pawPattern from "@/public/paw_pattern.svg";
import GetData from "./getData";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TextList from "@/components/content/preTags";

export default async function Home() {

  function formatDate(date: any) {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  function splitText(text: string){
    return text.split(/(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?|\!)\s/gm).reduce((resultArray, item, index) => { 

      const chunkIndex = Math.floor(index/2);
    
      if(!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [];
      }
    
      resultArray[chunkIndex].push(item);
    
      return resultArray;
    }, []).map(chunk => chunk.reduce((a:string, b:string) => a + " " + b));
  };

  const today = new Date();
  const formattedDate = formatDate(today);

  const todaysPicture = GetData(formattedDate);

  const splitedText: string[] = splitText(todaysPicture.description);

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
                  Daily Cat Picture of {formattedDate}
                </p>
              </CardTitle>
            </CardHeader>
          </Card>
        </div>
        <div className="w-full px-[10%] h-[80%] flex items-center flex-col gap-8 justify-center z-10">
          <img src={todaysPicture.pictureUrl} alt={todaysPicture.alt} className="h-[80%] object-cover shadow-lg" />
        </div>
      </div>
      <div className="bg-zinc-200 w-full h-100% px-[10%] py-16 flex flex-col gap-5">
        <Card>
          <CardHeader>
            <CardTitle>
              <p className="text-4xl">{todaysPicture.title}</p>
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <div className="flex flex-col gap-6">
                <TextList array={splitedText}></TextList>
              </div>
            </CardTitle>
          </CardHeader>
        </Card>
        <div className="flex justify-between pt-16 gap-5 flex-wrap">
          <Card className="basis-96 grow">
            <CardHeader>
              <CardTitle>
                <p className="text-2xl whitespace-pre-line">FAQ</p>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Can I see pictures from other days?</AccordionTrigger>
                  <AccordionContent>
                    Nope, not as of now. Unless you own a time machine. :D 
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How can I post my own cat picture?</AccordionTrigger>
                  <AccordionContent>
                    As of now there is no ability to do that, but I am working on it.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>How are cat pictures picked?</AccordionTrigger>
                  <AccordionContent>
                    I have a folder with cat pictures I collected over the years. Usually I pick the ones that spark my interest the most or I have something interesting to say about them.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
          <Card className="basis-96 grow">
            <CardHeader>
              <CardTitle>
                <p className="text-2xl whitespace-pre-line">Post your own cat image</p>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl whitespace-pre-line">Currently not available</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
