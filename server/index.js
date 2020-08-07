const si = require('systeminformation');
let machineData = {}
const express = require('express');
const app = express();
app.set('port', process.env.port || 3000) 



app.listen(app.get('port'), server =>{
    console.info(`Server listen on port ${app.get('port')}`);
})
async function getCPUAndGPUData() {
    try {
        const cpuData = await si.cpu();
        const memData = await si.mem();
        const diskData = await si.diskLayout();

        machineData['cpu'] = {};
        machineData['gpu'] = {};
        machineData.cpu['manufacturer'] = cpuData.manufacturer;
        machineData.cpu['brand'] = cpuData.brand;
        machineData.cpu['speed'] = cpuData.speed + ' GHz';
        machineData.cpu['cores'] = cpuData.cores;
        machineData.cpu['physicalCores'] = cpuData.physicalCores;
        machineData.cpu['ram'] = memData.total;
        console.log(diskData);
        const gpuData = (await si.graphics()).controllers;
        machineData.gpu['model'] = [];
        machineData.cpu['storage'] = [];
        for(const disk of diskData){
            machineData.cpu['storage'].push(disk)
        }
        for (const gpu of gpuData) {
            machineData.gpu['model'].push(gpu);
        }
        app.get('/machine', (req, res, next) =>{
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.send(machineData);
        })
    } catch (e) {
        console.log(e)
    }
}
getCPUAndGPUData();
