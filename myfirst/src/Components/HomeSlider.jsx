import { Box } from '@chakra-ui/react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const HomeSlider = () => {
  const sliderStyle = {
    height: '400px',
    borderRadius: '20px'
  };
   const images = ["https://media.istockphoto.com/id/932120954/photo/red-sports-car-silhouette-on-black-background.jpg?s=170667a&w=0&k=20&c=IIL23kQAU1peYk4fvbzOiTwaKYdKY3I1rgP600p3J-0=","https://cutewallpaper.org/22/ps4-4k-hd-retro-car-wallpapers/186528748.jpg","https://mir-s3-cdn-cf.behance.net/projects/404/dd762d171852189.Y3JvcCwxMzgwLDEwODAsMCww.jpg"]
  return (
    <Box backgroundColor={""}>
      <AwesomeSlider style={sliderStyle} backgroundColor={""}>
        {
            images.map((ele,i) => <Box key={i} h={"100px"}  backgroundColor={"#f6f7f9"} data-src={ele}/>)
        }
      </AwesomeSlider>
    </Box>
  );
};

export default HomeSlider;
