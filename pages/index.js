import React, { useState } from "react";
import ReactDOM from "react-dom";
//Next.JS
import Head from 'next/head'
import InfoPanel from '../components/info-panel';

function Home({ info_data }) {

  return (<>
    <main>
      <InfoPanel docData={info_data} />
    </main>
  </>
  );

}

export default Home;


// Get props at build time for SSG
export async function getStaticProps() {
  const info_data = {

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
            {
                "desc": "Description Text 2",
                "id": "02",
                "subtitle": "subtitle 2",
                "title": "Title 2"
            },
            {
              "desc": "Description Text 3",
              "id": "03",
              "subtitle": "subtitle 3",
              "title": "Title 3"
          }            
        ],

        // The index of the starting section.
        selected: 0,

    },

    // The style and type to show this component in.
    style: 0, type: 0,

};

  return {
    props: {
      "info_data": info_data,
    },
    revalidate: 120, // In seconds
  }
}
