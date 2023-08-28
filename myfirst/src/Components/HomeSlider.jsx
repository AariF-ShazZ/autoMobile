import { Box } from '@chakra-ui/react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const HomeSlider = () => {
  const sliderStyle = {
    height: '400px',
    borderRadius: '20px'
  };
   const images = ["https://wallpaperaccess.com/full/2043565.jpg","https://wallpaperaccess.com/full/4207452.jpg","https://wallpaperset.com/w/full/4/9/c/186657.jpg","https://wallpaperaccess.com/full/1597755.jpg"]
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
