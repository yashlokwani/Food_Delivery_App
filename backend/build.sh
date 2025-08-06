#!/bin/bash
# Install dependencies
npm install

# Seed the database (run once after deployment)
npm run seed
