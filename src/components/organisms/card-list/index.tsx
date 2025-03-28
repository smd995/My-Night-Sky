import clsx from "clsx";
import { Card } from "../../molcules/card";
import { useEffect, useState } from "react";
import { nasaApi } from "../../../effects/nasaApi/nasaApi.effect";

interface Props {
  className?: string;
}

interface CardData {
  title: string;
  date: string;
  explanation: string;
  url: string;
}

export const CardList = (props: Props) => {
  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => {
    const api = nasaApi();
    const fetchData = async () => {
      const data = await api.findOne();
      setCards([{ ...data, url: data.url }]);
    };

    fetchData();
  }, []);

  return (
    <div
      className={clsx(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 py-10",
        props.className
      )}
    >
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          date={card.date}
          explanation={card.explanation}
          imageUrl={card.url}
        />
      ))}
    </div>
  );
};
