import { useState } from 'react';

// 10K pageviews / $8 per month
// 50K pageviews / $12 per month
// 100K pageviews / $16 per month
// 500k pageviews / $24 per month
// 1M pageviews / $36 per month
var ranges = [{ pageviews: "10K", price: 8.00 }, { pageviews: "50K", price: 12.00 }, { pageviews: "100K", price: 16.00 }, { pageviews: "500K", price: 24.00 }, { pageviews: "1M", price: 36.00 }];
var sliderBackgroundPoint = [0, 25, 50, 75, 100]; //fill corresponding to fill point

function ContainerPageviews() {
    //states
    const [currentRange, setCurrentRange] = useState(2);
    const [checked, setChecked] = useState(false);
    //derived
    var pageviews = ranges[currentRange].pageviews;
    var price = checked ? ranges[currentRange].price * 0.75 : ranges[currentRange].price;
    //slider background
    const myStyle = { background: `linear-gradient(to right, #a5f3eb 0%, #a5f3eb ${sliderBackgroundPoint[currentRange]}%, #eaeefb ${sliderBackgroundPoint[currentRange]}%, #eaeefb 100%)` }; //responsible for coloring the slider background
    const handleChange = (event) => {
        setCurrentRange(event.target.value);

    }
    return (
        <div className="container__pageviews">
            <div className="pageviews__grid">
                <p className="pageviews">{pageviews} PAGEVIEWS</p>
                <p className="price"><span>${(Math.round(price * 100) / 100).toFixed(2)}</span> / month</p>
                <input type="range" min="0" max="4" value={currentRange} className="slider" onChange={handleChange} style={myStyle} title="pageviews and price slider"></input>
            </div>
            <div className="billing">
                <span>Monthly <span>billing</span></span>
                <label className="switch">
                    <input type="checkbox" defaultChecked={checked} onChange={() => setChecked(!checked)} />
                    <span className="toggle round"></span>
                </label>
                <span>Yearly <span>billing</span></span>
                <span className="discount discount-desktop">25% discount</span>
                <span className="discount discount-mobile">-25%</span>
            </div>
        </div>
    );
}

export default ContainerPageviews;
