import Card from "./Card";

const NUMBER_OF_PANELS = 100;

export default function CardGroup({ radius, width, wheel }) {

    const getAllCards = () => {
        let content = [];

        for (let i = 0; i < NUMBER_OF_PANELS; i++) {

            content.push(<Card key={i} radius={radius} width={width} wheel={wheel} />);
        }

        return content;
    };

    return (<>{getAllCards()}</>);
}