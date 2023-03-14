import classes from "../styles/event-item.module.css";
import Button from "../components/UI/button";
import DateIcon from "../components/icons/date-icon";
import LocationIcon from "../components/icons/address-icon";
import ArrowRightIcon from "../components/icons/arrow-right-icon";

function EventIteam(props) {
  const { title, date, address, imageUrl, id } = props;
  const formatedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formFamttedAddress = address.replace(", ", "\n");
  const exproleLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={"/" + imageUrl} alt={title} />
      <div className={classes.content}>
        <div>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{formatedDate}</time>
          </div>
          <div className={classes.address}>
            <LocationIcon />
            <address>{formFamttedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exproleLink}>
            <span>Explore Event</span>
            <span className={classes.icon} >
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventIteam;
