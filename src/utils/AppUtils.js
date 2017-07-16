class AppUtils  {
    constructor() {
    }
    
    tapVibrate() {
        navigator.vibrate(50);
    }
}

const utils = new AppUtils();

export default utils;