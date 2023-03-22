import Button from "@/components/UI/button";
import Head from "next/head";
import classes from "../../styles/addevent.module.css";

function addEvent(props) {
  return (
    <>
      <Head>
        <title>Add Event </title>
        <meta name="description" content="Add an event - Next Js" />
      </Head>
      <main>
        <div class={classes.formcontainer}>
          <h2>Add a new Event</h2>
          <form>
            <div>
              <div>
                <label htmlFor="event-title" class={classes.label}>
                  Event Title
                </label>
              </div>
              <input
                type="text"
                id="event-title"
                placeholder="Title"
                required="required"
              />
            </div>
            <div>
              <div>
                <label htmlFor="event-date" class={classes.label}>
                  Event Date
                </label>
              </div>
              <input type="date" id="event-date" required="required" />
            </div>
            <div>
              <div>
                <label htmlFor="event-location" class={classes.label}>
                  Event Location
                </label>
              </div>
              <input
                type="text"
                id="event-location"
                placeholder="Location"
                required="required"
              />
            </div>
            <div>
              <div>
                <label htmlFor="event-desc" class={classes.label}>
                  Event Description
                </label>
              </div>
              <input
                type="text"
                id="event-desc"
                placeholder="Description"
                required="required"
              />
            </div>
            <div>
              <div>
                <label htmlFor="event-featured" class={classes.label}>
                   Event Image
                </label>
              </div>
              <select
                id="event-featured"
                class={classes.select_box}
                required="required"
              >
                <option value="default.png">Default</option>
                <option value="default1.png">Event Type 1</option>
              </select>
            </div>
            <div>
              <div>
                <label htmlFor="event-featured" class={classes.label}>
                  Featured Event
                </label>
              </div>
              <select
                id="event-featured"
                class={classes.select_box}
                required="required"
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
            <div>
              <Button type="submit"> Submit</Button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default addEvent;
