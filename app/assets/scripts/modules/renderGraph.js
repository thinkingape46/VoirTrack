class RenderGraph {

    constructor() {
        this.graph()
    }

    graph() {
        const graph = document.getElementById('graph');
        const graphCtx = graph.getContext('2d');
        
        graphCtx.fillStyle = 'rgba(50, 200, 50, 0.5)';
        graphCtx.fillRect(0, 0, 100, 100);
        
        graphCtx.fillStyle = 'rgba(200, 50, 50, 0.5)';
        graphCtx.fillRect(20, 20, 100, 100);
        
        graphCtx.fillStyle = 'rgba(50, 50, 200, 0.5)';
        graphCtx.fillRect(40, 40, 100, 100);
    }
}

export default RenderGraph;

