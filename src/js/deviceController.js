const roomConfig = {
    name: "Room A",
    tempSetPoint: 70,
    tempMax:75,
    tempMin:65,
    humiditySetPoint: 40,
    humidityMax:45,
    humidityMin:35,
    CO2SetPoint: 3000,
    CO2Max:2800,
    CO2Min:3200,
    pressureSetPont: 1114,
    pressureMax:1180,
    pressureMin:1070,
    stage: "veg",
    dateStarted: 0,
    CloneTime: 0,
    VegTime: 0,
    FlowerTime: 0,
}




const generateNewDevice = (UID, name) => {

    //create a new room with default settings 
    //run a firebase transaction where we check for rooms with the same name under that user. 
    //then we add the new device object with the default settings.
    //We take the doc ID add to the device config
    // returns the deviceID

    return new Promise((resolve, reject) => {


    })
}



const commisionNewDevices = async (owner, nameList) => {
    if(nameList.length > 0){
        let DeviceNameList = [];
        nameList.forEach(async (item) => {
            let deviceID = await generateNewDevice(owner, item);
            DeviceNameList.push(deviceID);
        });
    }else{
        return await generateNewDevice(owner, nameList);
    }
}
