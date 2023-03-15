import { useRouter } from "next/router";
import { getFilteredEvents } from "../../../dummy-data";
import EventList from "../../components/event-list";
import Head from "next/head";
import ResultsTitle from "../../components/results-title";
import { Fragment } from "react";
import Button from "../../components/UI/button";
import ErrorAlert from "../../components/error-alert";

function EventFilterPage() {
  const routes = useRouter();
  const filterData = routes.query.slug;

  if (!filterData) {
    return (
      <Fragment>
        <Head>
          <title>Filtered Events </title>
          <meta name="description" content="Filtered events - Next Js" />
        </Head>
        <p className="center">Loading ...</p>
      </Fragment>
    );
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numMonth < 1 ||
    numMonth > 12 ||
    numYear < 2020 ||
    numYear > 2023
  ) {
    return (
      <Fragment>
        <Head>
          <title>Filtered Events </title>
          <meta name="description" content="Filtered events - Next Js" />
        </Head>
        <div className="center">
          <ErrorAlert><p className="center">Invalid filter inputs , Please check !!!</p></ErrorAlert>
          <Button link="/events">All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  const date = new Date(numYear, numMonth - 1);

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <Head>
          <title>Filtered Events </title>
          <meta name="description" content="Filtered events - Next Js" />
        </Head>
        <ResultsTitle date={date} />
        <p className="center">No events found with the matching filter !</p>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Filtered Events </title>
        <meta name="description" content="Filtered events - Next Js" />
      </Head>
      <ResultsTitle date={date} />
      <EventList iteams={filteredEvents} />
    </>
  );
}

export default EventFilterPage;
