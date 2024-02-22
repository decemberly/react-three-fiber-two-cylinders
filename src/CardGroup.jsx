import Card from "./Card";

const NUMBER_OF_PANELS = 100;

export default function CardGroup({ cardScale, radius, width, wheel }) {

    const getAllCards = () => {
        let content = [];

        for (let i = 0; i < NUMBER_OF_PANELS; i++) {

            content.push(<Card key={i} cardScale={cardScale} radius={radius} width={width} wheel={wheel} index={i} />);
        }
        return content;
    };

    return (<>{getAllCards()}</>);
}