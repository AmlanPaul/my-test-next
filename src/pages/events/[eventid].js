import { useRouter } from "next/router";
import { getEventById } from "../../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import { Fragment } from "react";
import Head from "next/head";
import { useEffect, useState } from "react";

function EventDetailsPage() {
  const routes = useRouter();
  const eventId = routes.query.eventid;
  const [isLoading,setIsLoading] = useState(true);
  const [data,setData] = useState([]);

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

  function getEventById(id) {
    return data.find((event) => event.id === id);
  }

  const event = getEventById(eventId);
  if(isLoading) {
    return <> Loading... !</>;
  }
  if (!event && !isLoading) {
    return <> No event Found !</>;
  }
  return (
    <Fragment>
      <Head>
        <title>Event Details - {event.title} </title>
        <meta name="description" content='`All deatlis for ${event.title}`' />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailsPage;
