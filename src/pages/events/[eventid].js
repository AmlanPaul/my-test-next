import { useRouter } from "next/router";
import { getEventById } from "../../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import { Fragment } from "react";
import Head from "next/head";

function EventDetailsPage() {
  const routes = useRouter();
  const eventId = routes.query.eventid;

  const event = getEventById(eventId);
  if (!event) {
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
