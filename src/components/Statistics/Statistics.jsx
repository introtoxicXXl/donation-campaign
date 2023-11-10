import { VictoryPie } from "victory";
import { getItem } from "../../utilitis/localStorage";


const Statistics = () => {
    const youDonate = getItem()
    const allDonate = 12;
    const yourDonate = (youDonate.length / allDonate) * 100;
    return (
        <div className="w-full">
            <div className="w-3/5 mx-auto">
                <VictoryPie
                    labels={({ datum }) => `${datum.y.toFixed(2)}%`}
                    data={[
                        { x: "All Donate", y: 100 },
                        { x: "Your Donate", y: yourDonate },
                    ]}
                    colorScale={["tomato", "orange"]}
                ></VictoryPie>
            </div>
                <div className="flex justify-evenly my-6">
                    <p className="text-sm">All Donation <span className="w-2 h-1 rounded bg-[tomato] text-transparent">fgfuyhgjb</span></p>
                    <p className="text-sm">Your Donation <span className="w-2 h-1 rounded bg-[orange] text-transparent">fgfuyhgjb</span></p>
                </div>
        </div>
    );
};

export default Statistics;