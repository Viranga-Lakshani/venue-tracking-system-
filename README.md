# Real-time Venue Tracking System

This project is a real-time venue tracking system that uses WebSocket and Node.js to display live heatmaps and dashboards of crowd density. It helps reduce overcrowding and ensures users and staff stay informed.

## Features

- Real-time crowd density tracking
- Dynamic heatmaps
- Live dashboards

## Getting Started

### Prerequisites

- Node.js installed on your machine

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/venue-tracking-system.git
   cd venue-tracking-system
   ```

2. Install the server dependencies:
   ```bash
   cd server
   npm install
   ```

### Running the Application

1. Start the server:
   ```bash
   npm start
   ```

2. Open your web browser and navigate to `http://localhost:3000` to see the live venue tracking system.

### How It Works

- The server uses Node.js and WebSocket to handle real-time connections.
- The client-side code displays a dynamic heatmap and live dashboard using the data received from the server.

### License

This project is licensed under the MIT License.
