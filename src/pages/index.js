import { getFeaturedEvents } from '../../dummy-data';
import EventList from '../components/event-list';

export default function Home() {
  const featureEvents = getFeaturedEvents();
  return (
    <>
        <EventList iteams={featureEvents}/>
    </>
  )
}
