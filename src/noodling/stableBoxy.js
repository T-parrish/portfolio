import React from 'react';
import Box from '../components/Box';

const num_boxes = 50;

export class Boxy extends React.Component {
    constructor(props){
        super(props);
        const boxes = Array(num_boxes).fill().map(this.getRandomColor, this);
        this.state = {boxes};
        
        setInterval(() => {
            const boxes = this.state.boxes.slice();
            const randIdx = Math.floor(Math.random() * boxes.length);
            boxes[randIdx] = this.getRandomColor();
            let opacity = Math.random();
            this.setState({boxes});
        }, 500);
    }

    getRandomColor() {
        let colorIndex = Math.floor(Math.random()* this.props.allColors.length);
        return this.props.allColors[colorIndex];
    }


    render() {
        const boxes = this.state.boxes.map((color, idx) => (
            <Box 
                key={idx}
                color={color}
            />
        ));

        return(
            <div className="boxy__container">
                {boxes}
            </div>
        );
    }
}

Boxy.defaultProps = {
    allColors: [
        '#119bc9', '#0ec1fd', '#1bcbeb', '#179bb3',
        '#2f89f0', '#2266b4', '#5755c2', '#5f5e9e',
        '#35348f', '#82469e', '#7921a1', '#a12d98'
    ]
}