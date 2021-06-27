/**
 * This component is the 1, 2, 3 list, with further details on the selected
 * item being presented to the left of the list.
 */

// Imports pertaining to react.
import React, { useState, useEffect } from "react";

// Imports pertaining to next.
import Image from "next/image";

// Imports pertaining to styling.

const InfoPanel = ({ docData }) => {

    // _defaultData.
    const _defaultData = {

        // The data.
        data: {

            // The background of the entire component.
            bg: { bgImage: "", colorFrom: "#001510", colorTo: "#00be8e", gradientDir: "to bottom" },

            // The sections.
            sections: [
                {
                    "desc": "Description Text",
                    "id": "01",
                    "subtitle": "Our algorithms are ...",
                    "title": "Smart Matching Algorithms"
                },
            ],

            // The index of the starting section.
            selected: 0,

        },

        // The style and type to show this component in.
        style: 0, type: 0,

    };

    // useState.
    const [stateData, setStateData] = useState(_defaultData);
    const [selectedItem, setSelectedItem] = useState(0);

    // useEffect.
    useEffect(() => {
        if ("data" in  docData) setStateData(docData);
        //if (docData?.data?.selected !== void 0) setSelectedItem(docData.data.selected);
    }, [docData]);

    // The info panel component.
    return (
        <div >
            <div>
                <div>
                    <div>
                        <h1 >{stateData.data.sections[selectedItem].title}</h1>
                        <p>{stateData.data.sections[selectedItem].desc}</p>
                    </div>
                    <div>
                        <div>
                            <div style={{ top: `${100 * selectedItem / stateData.data.sections.length}%` }}></div>
                        </div>
                        <div>
                            {
                                stateData.data.sections.map(function (item, i) {
                                    return (
                                        <div key={item.id} onClick={() => {
                                            setSelectedItem(i);
                                        }}>
                                            <h1>{item.id}</h1>
                                            <div>
                                                <p>{item.title}</p>
                                                <p>{item.subtitle}</p>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Export the InfoPanel.
export default InfoPanel;
