import * as Progress from '@radix-ui/react-progress';
import { Loader } from 'lucide-react';

export default function InitLoading({progress}){
    return (
      <LoaderCircle/>
      );
}

const LoaderCircle = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Loader className="animate-spin text-blue-500 h-12 w-12" />
    </div>
  );
};
/*
        <Progress.Root
          value={progress}
          className="relative overflow-hidden bg-gray-200 w-64 h-4 rounded"
        >
          
          <Progress.Indicator
            className="bg-blue-500 h-full"
            style={{ width: `${progress}%` }}
          />
        </Progress.Root>
*/
