import Head from "next/head";
import { useRouter } from "next/router";
import { getAllEvents } from "../../../dummy-data";
import EventList from "../../components/event-list";
import EventSearch from "../../components/event-search";
import { Fragment } from "react";

function AllEvents() {
  const router = useRouter();
  const allEvents = getAllEvents();

  function findEventHandeler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <Fragment>
      <Head>
        <title>All Events </title>
        <meta name="description" content="All the events - Next Js" />
      </Head>
      <div>
        <EventSearch onSearch={findEventHandeler}/>
        <EventList iteams={allEvents} />
      </div>
    </Fragment>
  );
}

export default AllEvents;
