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
        female: {
            0: 'Akosua',   // Sunday
            1: 'Adwoa',    // Monday
            2: 'Abenaa',   // Tuesday
            3: 'Akua',     // Wednesday
            4: 'Yaa',      // Thursday
            5: 'Afua',     // Friday
            6: 'Ama'       // Saturday
        }
    };
        function calculateAkanName(day, month, year, gender) {
        // Extract century and year digits
        const CC = Math.floor(year / 100);
        const YY = year % 100;
        
        // Calculate day of week using the formula
        // Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
        const dayOfWeek = Math.floor(
            (((CC / 4) - 2 * CC - 1) +
            ((5 * YY / 4)) +
            ((26 * (month + 1) / 10)) +
            day) % 7
        );

        // Ensure we get a positive number between 0-6
        const normalizedDay = ((dayOfWeek % 7) + 7) % 7;

        // Return the corresponding Akan name based on gender and day of week
        return AKAN_NAMES[gender][normalizedDay];
    }
