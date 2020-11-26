import React from "react";
import { SliderBox } from "react-native-image-slider-box";

// const images = [
//     {
//         image: 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
//         desc: 'Silent Waters in the mountains in midst of Himilayas',
//     },
//     {
//         image: 'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
//         desc:
//             'Red fort in India New Delhi is a magnificient masterpeiece of humans',
//     },
// ]

class App extends React.Component {
    constructor(props) {
        super(props);
        state = {
            images: [
                "https://www.mh-distillery.com/wp-content/uploads/2019/12/its-here-website-banner-desktop.jpg",
                "https://beveragedynamics.com/wp-content/uploads/2018/02/Family_of_Brands.jpg",
                "https://images.tcdn.com.br/img/img_prod/676334/1546263298_black-label.jpg",
                require('../../imagens/bannerhei.png'),// Local image
                "data:image/jpeg;base64,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",
                // Network image
            ]
        };
    }
    render() {
        return (

            <SliderBox
                containerStyle={{ backgroundColor: '#fff' }}
                images={state.images}
                sliderBoxHeight={200}
                onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                dotColor="#2196F3"
                inactiveDotColor="#90A4AE"
                paginationBoxVerticalPadding={0}
                autoplay
                circleLoop
                resizeMethod={'resize'}
                resizeMode={'cover'}
                paginationBoxStyle={{
                    position: "absolute",
                    bottom: 0,
                    padding: 0,
                    alignItems: "center",
                    alignSelf: "center",
                    justifyContent: "center",
                    paddingVertical: 0,

                }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: -10,
                    padding: 0,
                    margin: 0,
                    backgroundColor: "rgba(128, 128, 128, 0.92)"
                }}
                ImageComponentStyle={{ backgroundColor: '#fff', borderRadius: 15, width: '95%', marginTop: 0, }}
                imageLoadingColor="#2196F3"
            />
        );
    }
}

export default App;