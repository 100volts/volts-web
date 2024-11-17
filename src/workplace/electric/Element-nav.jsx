import {
  Card,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import {Search} from "lucide-react"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { useState, useEffect } from "react";
import DisplayMeter from "@/components/renderer/workplace/electric/ElectricMeter";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

export default function ElementNav({ cardData }) {
  const [dataState, setDataState] = useState(" ");
  async function onSubmit(values) {
    if (cardData) {
      setDataState(
        cardData.filter((datag) => datag.name === values.target.innerText)[0]
      );
    }
  }
  const handleDataChange = async (event) => {
    event.preventDefault();
    form.handleSubmit(onSubmit)(event.target.key);
  };

  useEffect(() => {
    if (cardData) {
      setDataState(cardData[0]);
    }
  }, []);

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = cardData
    ? cardData.filter((data) =>
        data.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];
  return (
    <>
    <ResizablePanelGroup direction="horizontal" > 
      <div className="flex flex-row max-h-[700px] m-1">
      <ResizablePanel defaultSize={10} 
          minSize={15}
          maxSize={45}
      >
        <div className="h-screen max-h-[700px] flex flex-col">
        {cardData ? (
          <>
            <Separator />
            <form className="m-1">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search"
                  className="pl-8"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
            </form>
            <Separator className="m-1" />
            <ScrollArea className="h-screen max-h-[700px]">
              {filteredData.length > 0 ? (
                filteredData.map((data, index) => (
                  <Card key={index} onClick={onSubmit}
                  className={cn(
                    "m-1 cursor-pointer transition-colors",
                    dataState.name === data.name && "bg-muted"
                  )}
                  >
                    <CardHeader>{data.name}</CardHeader>
                    <CardDescription>{/* Add description here if needed */}</CardDescription>
                  </Card>
                ))
              ) : (
                <p className="m-2 text-muted-foreground">No results found</p>
              )}
            </ScrollArea>
          </>
        ) : (
          <p>No data</p>
        )}
        </div>
        </ResizablePanel>
        <ResizableHandle  withHandle/>
        <ResizablePanel defaultSize={90}
                    minSize={15}
                    maxSize={95}
        >
          <Separator />
        <div className="flex max-h-[700px] ">
          {cardData ? <DisplayMeter elmeter={dataState} index={1} /> : <></>}
        </div>
        </ResizablePanel>
        <Separator orientation="horisontal"/>
      </div>
      </ResizablePanelGroup>
      <Separator/>
    </>
  );
}
