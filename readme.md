# WeatherSensor_Node

A Node.js application for managing weather sensor data, devices, and related APIs.

## Project Structure

```
node/
	index.js                # Main entry point
	package.json            # Project dependencies and scripts
	databases/
		model.js              # Database models
	routes/
		data.js               # Data API routes
		device.js             # Device API routes
		sensor.js             # Sensor API routes
readme.md                 # Project documentation
```

## Features

- RESTful API for weather sensor data
- Device and sensor management
- Database integration via models

## Getting Started

1. **Install dependencies:**
	 ```powershell
	 cd node
	 npm install
	 ```

2. **Run the server:**
	 ```powershell
	 node index.js
	 ```

## API Endpoints

- `/data` – Weather data operations
- `/device` – Device management
- `/sensor` – Sensor management

## How to Use the API

You can interact with the API using tools like Postman, curl, or any HTTP client. Below are example requests for each endpoint:

### 1. Get Weather Data
```powershell
curl http://localhost:3000/data
```

### 2. Add New Device
```powershell
curl -X POST http://localhost:3000/device \
	-H "Content-Type: application/json" \
	-d '{"name": "Device1", "location": "Lab"}'
```

### 3. Get All Sensors
```powershell
curl http://localhost:3000/sensor
```

### 4. Add New Sensor
```powershell
curl -X POST http://localhost:3000/sensor \
	-H "Content-Type: application/json" \
	-d '{"type": "Temperature", "deviceId": "1"}'
```

Replace the example data with your actual values as needed.

## Requirements

- Node.js
- npm

## License

MIT
