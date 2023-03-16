import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import EventList from "../../components/event-list";
import Head from "next/head";
import ResultsTitle from "../../components/results-title";
import { Fragment } from "react";
import Button from "../../components/UI/button";
import ErrorAlert from "../../components/error-alert";

function EventFilterPage() {
  const routes = useRouter();
  const filterData = routes.query.slug;
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
  if (isLoading) {
    return <> <p className="center"> Loading ...</p></>
  }

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
  
  function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredEvents = data.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
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
