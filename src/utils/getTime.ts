interface Response {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  seconds: number;
  milliSeconds: number;
  dateTime: string;
  date: string;
  time: string;
  timeZone: string;
  dayOfWeek: string;
  dstActive: boolean;
}

export const getTime = async (timezone: string): Promise<Response> => {
  const res = await fetch(
    `https://timeapi.io/api/Time/current/zone?timeZone=${timezone}`,
    {
      next: { tags: ["time"] },
    }
  );

  return res.json();
};
