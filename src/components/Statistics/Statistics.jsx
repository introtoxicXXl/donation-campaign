import { VictoryPie } from "victory";
import { getItem } from "../../utilitis/localStorage";


const Statistics = () => {
    const youDonate = getItem()
    const allDonate = 12;
    const yourDonate = (youDonate.length / allDonate) * 100;
    return (
        <div className="w-3/5 mx-auto">
            <div className="w-full">
                <VictoryPie
                    labels={({ datum }) => `${datum.y.toFixed(2)}%`}
                    data={[
                        { x: "All Donate", y: 100 },
                        { x: "Your Donate", y: yourDonate },
                    ]}
                    colorScale={["tomato", "orange"]}
                ></VictoryPie>
                <div className="flex justify-around my-6">
                    <p className="">All Donation <span className="w-2 h-1 rounded bg-[tomato] text-transparent">fgfuyhgjb</span></p>
                    <p className="">Your Donation <span className="w-2 h-1 rounded bg-[orange] text-transparent">fgfuyhgjb</span></p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;