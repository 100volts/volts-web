import {
  elMeterDashDataStore,
  elMetersNames,initLoading,
} from "@/components/datastore/ElectricStore";
import { useStore } from "@nanostores/react";
import CreateNewElectricMeter from "./CreateNewElectricMeter";
import SideNav from "@/components/renderer/workplace/electric/Element-nav";
import Loading from "@/components/renderer/workplace/init/InitLoading";

const ElmeterDataComponent = () => {
  const data = useStore(elMeterDashDataStore);
  const data1 = [
    {
      date: "2024-01-01",
      steps: 2000,
    },
    {
      date: "2024-01-02",
      steps: 2100,
    },
    {
      date: "2024-01-03",
      steps: 2200,
    },
    {
      date: "2024-01-04",
      steps: 1300,
    },
    {
      date: "2024-01-05",
      steps: 1400,
    },
    {
      date: "2024-01-06",
      steps: 2500,
    },
    {
      date: "2024-01-07",
      steps: 1600,
    },
  ];

  const progress = useStore(initLoading);
  if (initLoading.get() < 100) {
    return (
      <>
        <Loading progress={progress} />
      </>
    );
  }
  return (
    <>
        <CreateNewElectricMeter />
        <SideNav cardData={data} />
    </>
  );
};

///Display all leaded elmeters
/*
        {Object.entries(data).map(([key, elmeter], index) => (
          <>
            <ElectricMeter elmeter={elmeter} index={index} />
          </>
        ))}
*/

export default ElmeterDataComponent;
