document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('akanForm');
    const result = document.getElementById('result');
    const error = document.getElementById('error');
    const akanNameElement = document.getElementById('akanName');

     const AKAN_NAMES = {
        male: {
            0: 'Kwasi',    // Sunday
            1: 'Kwadwo',   // Monday
            2: 'Kwabena',  // Tuesday
            3: 'Kwaku',    // Wednesday
            4: 'Yaw',      // Thursday
            5: 'Kofi',     // Friday
            6: 'Kwame'     // Saturday
        },
}