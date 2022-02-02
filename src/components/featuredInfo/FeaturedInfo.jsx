import "./featuredInfo.css";
import { WatchLater } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">New To Do list</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">IBM meeting</span>
          <span className="featuredMoneyRate">
           12:00 PM <WatchLater  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">This meeting has end</span>
      </div>
      <div className="featuredItem" style={{backgroundColor:"brown"}}>
        <span className="featuredTitle">Discussion</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">With IBM</span>
          <span className="featuredMoneyRate">
            111:00 PM <WatchLater className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Create a React Project</span>
      </div>
      <div className="featuredItem" style={{backgroundColor:"green"}}>
        <span className="featuredTitle">Completed Task</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">1200</span>
          <span className="featuredMoneyRate">
            <WatchLater className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Completed buy the users</span>
      </div>
    </div>
  );
}
