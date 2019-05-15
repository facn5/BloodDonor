import React from "react";
import './styles';

export default class Card extends React.Component {
    state = {
        data: {
            stationName: "Rambam",
            location: "Haifa",
            bloodType: "A+",
            status: "Critical"
        },
        display: false
    };

    displayMap = () => {
        this.setState((prevState) => {
            return { display: !prevState.display }
        }, console.log(this.state.display))
    }

    render() {
        const {
            stationName,
            bloodType,
            location,
            status
        } = this.state.data;

        return (
            <div className="container" >
                <div className="subContainer">
                    <p>{stationName},<span>{location}</span></p>
                    <p>
                        <img className="imgDim" src="https://img.icons8.com/pastel-glyph/64/000000/--bloodbag.png" />
                        {bloodType}
                    </p>
                    <p>{status}</p>
                </div>
                <div className="subContainer">
                    <img className="imgDim" src="https://img.icons8.com/small/64/000000/share.png" />
                </div>
                <div className="subContainer">
                    <button onClick={this.displayMap}>
                        <img className="imgDim" src="https://img.icons8.com/ios/64/000000/place-marker.png" />
                    </button>
                </div>
            </div>
        );
    }
}

