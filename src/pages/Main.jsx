import Banner from "../components/Banner";
import EditDescription from "../components/EditDescription";
import HelpDesk from "../components/HelpDesk";

const Main = () => {
  return (
    <div className="bg-slate-50 flex flex-col justify-center items-center">
      <Banner />
      <EditDescription />
      <HelpDesk />
    </div>
  );
};
export default Main;
