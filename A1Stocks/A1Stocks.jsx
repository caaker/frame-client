import React, { useEffect }   from 'react';
import { useSelector }        from 'react-redux';
// import * as d3                from 'd3';

export default () => {
  console.log('DEBUG: L3 : F1-Page-Stocks ');
  console.log(d3);

  function makeSVG() {

    // Sample data
    const data = [
      { x: 0, y: 5 },
      { x: 1, y: 9 },
      { x: 2, y: 7 },
      { x: 3, y: 5 },
      { x: 4, y: 3 },
      { x: 5, y: 2 },
      { x: 6, y: 4 },
      { x: 7, y: 4 },
      { x: 8, y: 2 },
      { x: 9, y: 3 }
    ];

    // Set the dimensions and margins of the graph and correlate to svg element below
    const margin = { top: 10, right: 30, bottom: 30, left: 60 };
    const width = 400 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    // Append an SVG element to the body of the page and set its dimensions

    const svg = d3.create('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');


    // Define the x and y scales
    const x = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.x)])
      .range([0, width]);
    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.y)])
      .range([height, 0]);


    // Define the line
    const line = d3.line()
      .x(d => x(d.x))
      .y(d => y(d.y));


    // Add the x and y axes to the SVG
    svg.append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x));
    svg.append('g')
      .call(d3.axisLeft(y));


    // Add the line path to the SVG
    svg.append('path')
      .datum(data)
      .attr('class', 'line')
      .attr('d', line);

    console.log(svg);
    return svg;

  }

  return (
    <div id = "page_generic">
      {/*{makeSVG()}*/}
    </div>
  );

};
