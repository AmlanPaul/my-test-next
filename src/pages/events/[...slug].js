import { useRouter } from "next/router";

function EventFilterPage() {
  const routes = useRouter();
  console.log(routes.query);
  return (
    <>
      <div>This is Event Filter Page</div>
    </>
  );
}

export default EventFilterPage;
