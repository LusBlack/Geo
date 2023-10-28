const app = {
    geolocation: (good, bad) => { 
        try{
            let pos = {
                latitude:0, longitude:0
            }
            pos.latitude = (Math.random() * 360) - 180;
            pos.longitude = (Math.random() * 100) - 90;
            if(Math.round(Math.random())===1) {
                throw new Error("my simulated geolocation failure")
            } else {
                good.call(app.geolocation, pos);
            }
            } catch(err) {
            bad.call(app.geolocation,err);
            }
        }
    }


let success = (position) => {
    console.log('You are "at" position (${position.latitude}, ${position.longitude})')
}
let fail = (err) => {
    console.warn("something bad happened", err.message)
}

app.geolocation(success, fail);