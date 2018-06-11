/**
 * school-graph4node
 * https://github.com/shakkirptb/school-graph4node
 */
var fs = require('fs');
var Graph = require("graph4node");

//read from file or db 
//order of data is important*
var rawNodeData = JSON.parse(fs.readFileSync('./lib/node-data.json', 'utf8'));

//Graph
var schoolGraph = new Graph(rawNodeData);

/**
 * query1:
 * find all students from economics course who scored more than 70
 * */
var query1 = schoolGraph.execute({
    select: "*",
    from: ["student", "economics"],
    where: {
        marks: {
            $gt: 70
        }
    }
});
console.log("query (all students from economics course who scored more than 70):\n", Graph.getShallow(query1));

/**
 * query2:
 * find all students who scored between 60 and 70 (inclusive)
 * */
var query2 = schoolGraph.execute({
    select: "*",
    from: ["student"],
    where: {
        marks: {
        	$ge: 60,
            $le: 70
        }
    }
});
console.log("query (all students who scored between 60 and 70):\n", Graph.getShallow(query2));

/** 
 * query3:
 * sum of marks in engineering
 * */
var query3 = schoolGraph.execute({
	select: {$sum:"marks"},
	from: ["student","engineering"],
});
console.log("sum of marks in engineering:\n", Graph.getShallow(query3));

/** 
 * query4:
 * count of students in engineering
 * */
var query4 = schoolGraph.execute({
	select: "$count",
	from: ["student","engineering"],
});
console.log("count of students in engineering:\n", Graph.getShallow(query4));





