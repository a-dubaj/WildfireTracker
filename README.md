# Online Fire Tracker

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Important](#important)

## General info
Online Fire tracker is an app for tracking wildfires around the world. This application uses NASA API for geolocation purposes.

## Technologies
Project is created with:
* Node.js
* React
* THE NASA API

## Setup
To run a project, install it locally using npm:

```
cd ../wildfiretracker
npm install (or simplter and shorter npm i)
npm start
```

## Important

This project uses a [NASA API]("https://api.nasa.gov/") for grabbing data coordinates and display on the map. A key is needed for correct work of the  application. To correct setup create `.env` file in main directory of the procject. In this file add as fallows:


`REACT_APP_API_KEY= ...
`

This line is a key that call the API for coordinates.