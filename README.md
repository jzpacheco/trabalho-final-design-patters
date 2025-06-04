# Design Patterns Final Project

This project is the final assignment for the Design Patterns course in the 6th semester of Software Engineering at Unisatc. It demonstrates the implementation of various design patterns in TypeScript, focusing on logistics and notification systems.

## Project Overview

The project implements the following design patterns:
- **Factory Pattern**: Used in the logistics system for different shipping methods
- **Observer Pattern**: Implemented in the notification system to handle multiple notification channels

## Features

- Logistics system with different shipping strategies
- Notification system with multiple observers (Customer Dashboard and Slack)
- TypeScript implementation showcasing clean code and design patterns

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/jzpacheco/trabalho-final-design-patters.git
cd trabalho-final-design-patters
```

2. Install dependencies:
```bash
npm install
```

## Running the Project

To run the project in development mode:

```bash
npm run dev
```

This will execute the main application which demonstrates:
- Different shipping strategies in action
- Multiple notification observers receiving updates

## Project Structure

```
src/
  ├── modules/
  │   ├── logistics/     # Strategy Pattern implementation
  │   └── notifications/ # Observer Pattern implementation
  └── main.ts           # Application entry point
```

## License

This project is licensed under the ISC License.
