import EventsList from "./EventsList";

const UpcomingEvents = () => {
  return (
    <div className="container mx-auto px-10 py-2">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Upcoming Events</h1>
      <EventsList />
    </div>
  );
};

export default UpcomingEvents;
