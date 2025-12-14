import { useMemo, useState } from "react";

import Universe from "./Universe";
import Reviews from "./Reviews";
import Episodes from "./episodes/Episodes";

const Tab = ({ detail }) => {
  const [selected, setSelected] = useState(null);

  const TABS = useMemo(() => {
    let result = {};

    //Episodes tab only for series
    if (detail.number_of_episodes) {
      result.Episdoes = <Episodes detail={detail} />;
    }

    // Universe Tabs only if collection exists
    if (detail.belongs_to_collection) {
      result.Universe = <Universe detail={detail} />;
    }

    // Reviews always available
    result.Reviews = <Reviews detail={detail} />;
    return result;
  }, [detail]);

  const activeTab = selected ?? Object.keys(TABS)[0];

  return (
    <div className=" px-[75px] pt-[30px]">
      <nav className=" flex gap-6 items-center">
        {Object.keys(TABS).map((item, index) => (
          <div
            onClick={() => setSelected(item)}
            className={` font-semibold text-[16px] leading-6  tracking-[0.5%] cursor-pointer ${
              item === activeTab ? "text-white" : "opacity-40"
            } `}
            key={index}
          >
            {item}
          </div>
        ))}
      </nav>
      <div>{TABS[activeTab]}</div>
    </div>
  );
};

export default Tab;
