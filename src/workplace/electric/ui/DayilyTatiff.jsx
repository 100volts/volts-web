import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";

export default function DayilyTatiff({ elmeterProp }) {
  return (
    <>
      <Table >
        <TableCaption>Fifteen Minute Load.</TableCaption>
        {elmeterProp.daily_tariff_data &&
        elmeterProp.daily_tariff_data.length > 0 ? (
          <>
            <TableBody >
              <TableRow >
                <TableHead>Time:</TableHead>
                {elmeterProp.daily_tariff_data.map((traff, index) => {
                  const date = new Date(traff.timeStamp);
                  const dayOfMonth = date.getDate();
                  const hours = date.getHours();
                  const minets = date.getMinutes();
                  return (
                      <TableHead key={index}>
                        {hours}:{minets}
                      </TableHead>
                  );
                })}
              </TableRow>
              <TableRow > 
                <TableCell ></TableCell>
                {elmeterProp.daily_tariff_data.map((traff, index) => (
                    <TableCell key={index}>{traff.totPower}</TableCell>
                ))}
              </TableRow>
            </TableBody>
          </>
        ) : (
          <>
            <TableRow  className="text-center">No new reads for doday</TableRow>
          </>
        )}
      </Table>
    </>
  );
}
