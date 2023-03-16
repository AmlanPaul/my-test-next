import Head from "next/head";
import { useRouter } from "next/router";
import EventList from "../../components/event-list";
import EventSearch from "../../components/event-search";
import { Fragment } from "react";
import { useEffect, useState } from "react";

function AllEvents() {
  const router = useRouter();
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
        <EventList iteams={data} />
      </div>
    </Fragment>
  );
}

export default AllEvents;
