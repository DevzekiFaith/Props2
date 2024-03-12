import { useEffect } from "react";
import { Tooltip, initTWE } from "tw-elements";
import Players from "./Conponent/Players";
import PlayerSpot from "./PlayerSpot";
import Header from "./Conponent/Header/Header";

const App = () => {
  useEffect(() => {
    initTWE({ Tooltip });
  }, []);

  return (
    <div className="">
      <Header />
      <div className="grid xl:grid-cols-4 md:grid-cols-2">
        {PlayerSpot.map((item) => (
          <Players
            key={item.id}
            imageUrl={item.imageUrl}
            name={item.name}
            team={item.team}
            jerseyNumber={item.jerseyNumber}
            Age={item.age}
            nationality={item.nationality}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
