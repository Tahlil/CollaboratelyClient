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
        machineData.cpu['Manufacturer'] = cpuData.manufacturer;
        machineData.cpu['Brand'] = cpuData.brand;
        machineData.cpu['Speed'] = cpuData.speed + ' GHz';
        machineData.cpu['Cores'] = cpuData.cores;
        machineData.cpu['Physical Cores'] = cpuData.physicalCores;
        machineData.cpu['RAM'] = (memData.total/1000000000).toFixed(2) + " GB";
        console.log(diskData);
        const gpuData = (await si.graphics()).controllers;
       
        machineData.cpu['storage'], allStorageData = "", "";
        for(const disk of diskData){
            allStorageData += disk.type + ", " + disk.name;
        }
        machineData.cpu['Storage'] = allStorageData;
        for (const gpu of gpuData) {
            machineData.gpu[gpu.model] = (gpu.vram/1000).toFixed(2) + " GB";
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
