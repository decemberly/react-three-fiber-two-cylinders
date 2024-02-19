import Panel from "./Panel";

const NUMBER_OF_PANELS = 300;

export default function PanelGroup() {

    const getAllPanels = () => {
        let content = [];

        for (let i = 0; i < NUMBER_OF_PANELS; i++) {

            content.push(<Panel key={i} />);
        }

        return content;
    };

    return (<>{getAllPanels()}</>);
}