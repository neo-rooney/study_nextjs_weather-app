import HomeButton from "@/components/HomeButton";
import { getForecast } from "@/utils/getForecast";

export function generateMetadata({ params }: Props) {
  return {
    title: `날씨 앱2 - ${params.location}`,
    description: "날씨를 알려드립니다.",
  };
}

type Props = {
  params: {
    location: string;
  };
};

export default async function Detail({ params }: Props) {
  const name = params.location === "seoul" ? "서울" : "";
  const res = await getForecast(params.location);
  return (
    <>
      <h1>{name}의 3일 예보</h1>
      <ul>
        {res.forecast.forecastday.map((day) => (
          <li key={day.date}>
            {day.date} /{day.day.avgtemp_c}
          </li>
        ))}
      </ul>
      <HomeButton />
    </>
  );
}
