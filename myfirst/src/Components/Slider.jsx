import AwesomeSlider from 'react-awesome-slider';
// import AwsSliderStyles from 'react-awesome-slider/src/styles.scss';
import 'react-awesome-slider/dist/styles.css';
const Slider = () => {
    return (
        <>
            <AwesomeSlider>
                <div data-src="https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <div data-src="https://morent-website.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbody-car.739762a7.png&w=3840&q=75" />
                <div data-src="https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg" />
            </AwesomeSlider>
        </>
    )
}
export default Slider
