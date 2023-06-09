import EventList from "../components/event-list";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading,setIsLoading] = useState(true);
  const [data,setData] = useState([]);

  function getFeaturedEvents(DUMMY_EVENTS) {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }

  useEffect(() =>{
    fetch(
      "https://nextjsevent-project-default-rtdb.firebaseio.com/events.json"
    ).then(res =>{
      return res.json();
    }).then((data) =>{
      setIsLoading(false);

      const events =[];
      for (const key in data) {
        const event = {
          ...data[key]
        }

        events.push(event);
      }
      setData(events);
    })
  }, [] )
  if (isLoading) {
    return <> <p className="center"> Loading ...</p></>
  }
  
  const featuredEvents = getFeaturedEvents(data);
  return (
    <>
      <Head>
        <title>Home -Featured Events </title>
        <meta
          name="description"
          content="All the featured events for home page - Next Js"
        />
      </Head>
      <div id="result" data-testid="result">
        <p className="center">Featured Events</p>
        </div>
      <EventList iteams={featuredEvents} />
    </>
  );
}
