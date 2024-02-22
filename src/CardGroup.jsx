import Card from "./Card";

export default function CardGroup({ number, cardScale, radius, width, wheel }) {

    const getAllCards = () => {
        let content = [];

        for (let i = 0; i < number; i++) {

            content.push(<Card key={i} cardScale={cardScale} radius={radius} width={width} wheel={wheel} index={i} />);
        }
        return content;
    };

    return (<>{getAllCards()}</>);
}