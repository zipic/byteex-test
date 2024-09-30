import './style.scss';

export const Banner = () => {
    return (
        <div className='banner'>
            <h2 className='banner-title'>Our total green impact</h2>
            <div className='content'>
                <div className='content-one'>
                    <img src="./icons/co2.png" alt="co2" />
                    <p className='weight'>3,927 kg</p>
                    <p className='saved'>of CO2 saved</p>
                </div>
                <div className='content-two'>
                    <img src="./icons/h2o.png" alt="h2o" />
                    <p className='weight'>2,546,167 days</p>
                    <p className='saved'>of drinking water saved</p>
                </div>
                <div className='content-three'>
                    <img src="./icons/thunder.png" alt="thunder" />
                    <p className='weight'>7,321 kWh</p>
                    <p className='saved'>of energy saved</p>
                </div>
            </div>
        </div>
    )
}

export default Banner;