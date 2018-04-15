import React from "react";
import { render } from "react-dom";
import Block from "./components/Block";

const App = () => {
  const blocks = [
    {
      type: "variable",
      name: "bucket_ids",
      value: [590, 591, 592]
    },
    {
      type: "variable",
      value: "20180416-cyber-co"
    },
    {
      type: "function",
      fn: "get_buckets",
      input: [
        {
          name: "bucket_ids",
          description: "Array of bucket ids"
        }
      ],
      output: [
        {
          name: "buckets",
          description: "Array of buckets"
        }
      ]
    },
    {
      type: "function",
      fn: "extract_deal_ids",
      input: [
        {
          name: "buckets",
          description: "Array of buckets"
        }
      ],
      output: [
        {
          name: "deal_ids",
          description: "Array of deal ids"
        }
      ]
    }
  ];

  const blockComponents = blocks.map(block => {
    return <Block block={block} />;
  });

  return <div>{blockComponents}</div>;
};

render(<App />, document.getElementById("root"));
