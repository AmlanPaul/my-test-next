import EventIteam from "../components/event-iteam";
import classes from "../styles/event-list.module.css";
function EventList(props) {
  const { iteams } = props;
  return (
    <>
      <ul className={classes.list}>
        {iteams.map((event) => (
          <EventIteam
            key={event.id}
            id={event.id}
            title={event.title}
            address={event.location}
            date={event.date}
            imageUrl={event.image}
          />
        ))}
      </ul>
    </>
  );
}

export default EventList;
