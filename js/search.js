exports.BFS = function(arg){
	//breadth first search 幅優先探索
	// args = {
	//  graph : Graph object,
	//	initial : vertex id as str,
	//	terminal : vertex id as str
	//};
	this.graph = arg.graph;
	this.initial = arg.initial;
	this.terminal = arg.terminal;

	this.search = function(){
		var gr = this.graph;
		var initial = this.initial;
		var terminal = this.terminal;
		var history = [];
		var cue = [initial];//root node
		var next, nexts;
		var from;
		var result = {
			reachable : false,
			path : {}
		};
		result.path[initial] = [];

		do {
			from = cue.shift();
			history.push(from);

			if (from === terminal) {
				result.reachable = true;
				break;
			} else {
				nexts = gr.outboundVertices(from);
				for (var i = nexts.length - 1; i >= 0; i--) {
					next = nexts[i];
					if (history.indexOf(next)) {
						cue.push(next);
						//console.log(from,result.path[from]);
						result.path[next] = result.path[from].concat([from]);
						console.log(result.path);
					};
				};
			};	
		} while (cue.length > 0);
		return result;
	};
};