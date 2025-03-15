const ws = new WebSocket('ws://localhost:3000');

ws.onopen = () => {
    console.log('Connected to WebSocket server');
};

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    // Update heatmap with the received data
    updateHeatmap(data);
};

ws.onclose = () => {
    console.log('Disconnected from WebSocket server');
};

function updateHeatmap(data) {
    // Implement the logic to update heatmap
    console.log('Received data:', data);
    // Example: Display the data in the console
    // In a real application, you would use a library like heatmap.js to display the heatmap
}
