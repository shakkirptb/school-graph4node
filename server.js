/**
 * school-graph4node
 * https://github.com/shakkirptb/school-graph4node
 */
var fs = require('fs');
var Graph = require("graph4node");

//read from file or db 
//*order of data is important
var rawNodeData = JSON.parse(fs.readFileSync('./lib/node-data.json', 'utf8'));

//Graph
var schoolGraph = new Graph(rawNodeData);

/**
 * query1:
 * find all students from physics course who scored more than 70
 * */
var query1 = schoolGraph.execute({
    select: "*",
    from: ["student", "physics"],
    where: {
        marks: {
            $gt: 70
        }
    }
});
console.log("query-result-1", query1.getShallow());

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
console.log("query-result-2", query2.getShallow());
