@echo off
echo Testing MongoDB connection... > mongo-test-output.txt
cd %~dp0
node -e "const mongoose = require('mongoose'); mongoose.connect('mongodb+srv://trae:4MgZnYqgA1nAhykY@cluster0.kbbdski.mongodb.net/japanese_skill_boost?retryWrites=true&w=majority').then(() => { console.log('Successfully connected to MongoDB!'); mongoose.connection.close(); }).catch(err => { console.error('MongoDB connection error:', err); });" >> mongo-test-output.txt 2>&1
echo Test completed. Check mongo-test-output.txt for results. >> mongo-test-output.txt