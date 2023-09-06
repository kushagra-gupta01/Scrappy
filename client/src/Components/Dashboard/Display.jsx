import "../../App.css";
import Donate from "./Donate";
import Profile from "./Profile";
import Stats from "./Stats";
import CreateEvent from "./CreateEventBtn";
import EventsTab from "./EventsTab";
import FullEvent from "./FullEvent";
import Footer from "./Footer";


function Display() {

  return (
    <div>
      <Profile />
      <div class="flex flex-col md:flex-row md:justify-center m-4 mt-14">
        <div class="my-2 md:my-0 md:pr-2">
          <Stats />
        </div>
        <div class="hidden md:block lg:hidden pl-2">
          <FullEvent />
        </div>
        <div class="flex my-2 md:my-0  lg:pr-2 md:pl-2 flex-col md:hidden lg:block">
          <CreateEvent />
          <div class="hidden lg:py-4 lg:block">
            <Donate />
          </div>
          <div class="hidden md:mt-4 md:block lg:py-4 lg:hidden">
            <EventsTab />
          </div>
        </div>
        <div class="mt-2 lg:my-0 md:hidden lg:pl-2 lg:block">
          <EventsTab />
        </div>
      </div>
      <div class="lg:hidden m-4">
        <Donate />
      </div>
      <div class="hidden md:block">
        <Footer />
      </div>
    </div>
  );
}

export default Display;

