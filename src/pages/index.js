import { getFeaturedEvents } from "../../dummy-data";
import EventList from "../components/event-list";
import Head from "next/head";

export default function Home() {
  const featureEvents = getFeaturedEvents();
  return (
    <>
      <Head>
        <title>Home -Featured Events </title>
        <meta
          name="description"
          content="All the featured events for home page - Next Js"
        />
      </Head>
      <EventList iteams={featureEvents} />
    </>
  );
}
