const languageStrings = {
  'ru': {
    common: {
      warning: 'Warning',
      buttons: {
        ok: 'OK',
        cancel: 'Cancel',
        add: 'Add',
        reset: 'Reset',
        delete: 'Delete',
        locations: 'My locations',
        settings: 'Settings',
        searchLocations: 'Search Locations',
        weather: 'Weather',
        addUserLocation: ['Find me', 'Searching...'],
      },
    },
    datetime: {
      hourShort: 'h',
      minShort: 'min',
      now: 'Now',
      today: 'Today',
      tomorrow: 'Tomorrow',
      morning: 'Morning',
      afternoon: 'Afternoon',
      evening: 'Evening',
      night: 'Night',
      sunrise: 'Sunrise',
      sunset: 'Sunset',
      daylight: 'Daylight',
      moon: 'Moon Phase',
    },
    weather: {
      feelslike: 'Feels like',
      tempmax: 'max',
      tempmin: 'min',
      precipitation: 'Precipprob',
      precipprob: 'Precipprob',
      pressure: 'Pressure',
      wind: 'Wind',
      windgust: 'Wind gust',
      humidity: 'Humidity',
      skylights: 'Sky Lights',
      units: {
        pressure: ['mmHg', 'hPa'],
        wind: ['m/s', 'km/h'],
        winddir: ['NE', 'NW', 'SW', 'SE', 'E', 'N', 'W', 'S'],
      },
      moonphase: {
        new: 'New Moon',
        waxingcrescent: 'Waxing Crescent',
        firstquarter: 'First Quarter',
        waxinggibbous: 'Waxing Gibbous',
        fullmoon: 'Full Moon',
        waninggibbous: 'Waning Gibbous',
        lastquarter: 'Last Quarter',
        waningcrescent: 'Waning Crescent',
      },
      uvindex: {
        label: 'UV index',
        0: 'Low',
        3: 'Moderate',
        6: 'High',
        8: 'Very high',
        11: 'Extreme',
      },
    },
    slides: {
      header: {
        details: ['Details', 'Hide'],
      },
      headers: {
        tenDaysForecast: '10-day forecast (Details)',
        monthlyForecast: '15-day forecast',
      },
    },
    locations: {
      header: 'My Locations',
      searchPlaceholder: 'Find new location',
      edit: ['Edit', 'Done'],
      restoreName: 'Restore original name',
    },
    settings: {
      header: 'Settings',
      temperature: 'Degrees',
      wind: {
        label: 'Wind',
      },
      pressure: {
        label: 'Pressure',
      },
      lang: {
        label: 'Language',
        switchOff: 'ENG',
        switchOn: 'ENG',
      },
      theme: {
        label: 'Theme',
        themes: ['Light', 'Dark', 'System'],
      },
      details: 'Show Details',
      about: {
        header: 'About App',
        text: "<p>Be aware of all the weather conditions and their changes, wherever you are! Get real-time information about temperature, humidity, barometric pressure and other factors that affect the weather, and make plans with the confidence that the wrong weather won't ruin them. </p> <p> Our application is easy to use, with an intuitive interface and easy access to various features, such as listing your favorite locations, choosing units of measurement, themes, 10-day and monthly forecasts. </p> <p> We always welcome feedback and are ready to improve our application in the future, so we look forward to your feedback! </p>",
        links: [
          'Send review',
          '',
          'Donations',
        ],
      },
      clearLocations: 'Clear List of Locations',
      reset: 'Reset Settings',
    },
    modal: {
      clearLocations: {
        text: 'Are you sure you want to delete all the locations you added?',
      },
      resetSettings: {
        text: 'Are you sure you want to reset all app settings?',
      },
      renameLocation: {
        label: 'Rename Location',
      },
      legend: {
        header: 'Abbreviations',
        items: [
          'Feels Like',
          'Wind gust and direction',
          'Pressure',
          'Humidity',
        ],
      },
    },
    errors: {
      timeout: 'The request to get user location timed out.',
      network:
        // "<b class='text-sm'>Can't connect to the server.</b> <br>Please check internet connection",
        'No internet connection',
    },
    placeholders: {
      main: {
        header: 'There’s no bad weather, only bad clothes ;)',
        text: 'See the weather around the world and save your favorite locations.',
      },
      locations: {
        header: 'Add your locations',
        text: 'Use the search bar to find and then add the location you need.',
      },
      nothingFound: {
        header: 'Nothing found',
        text: 'Try searching again.',
      },
      addUserLocation: {
        header: 'Add your current location?',
        text: "Let us determine your location so you don't waste time looking for it by yourself.",
      },
      phoneRotate: {
        text: 'Please rotate your phone in portrait mode',
      },
      locationName: {
        text: 'Enter location name',
      },
    },
    toasts: {
      newLocation: 'Added new location',
      renameLocation: 'Location renamed to',
      resetSettings: 'All settings reset',
      clearLocations: 'All locations deleted',
    },
  },
  'en-US': {
    common: {
      warning: 'Warning',
      buttons: {
        ok: 'OK',
        cancel: 'Cancel',
        add: 'Add',
        reset: 'Reset',
        delete: 'Delete',
        locations: 'My locations',
        settings: 'Settings',
        searchLocations: 'Search Locations',
        weather: 'Weather',
        addUserLocation: ['Find me', 'Searching...'],
      },
    },
    datetime: {
      hourShort: 'h',
      minShort: 'min',
      now: 'Now',
      today: 'Today',
      tomorrow: 'Tomorrow',
      morning: 'Morning',
      afternoon: 'Afternoon',
      evening: 'Evening',
      night: 'Night',
      sunrise: 'Sunrise',
      sunset: 'Sunset',
      daylight: 'Daylight',
      moon: 'Moon Phase',
    },
    weather: {
      feelslike: 'Feels like',
      tempmax: 'max',
      tempmin: 'min',
      precipitation: 'Precipprob',
      precipprob: 'Precipprob',
      pressure: 'Pressure',
      wind: 'Wind',
      windgust: 'Wind gust',
      humidity: 'Humidity',
      skylights: 'Sky Lights',
      units: {
        pressure: ['mmHg', 'hPa'],
        wind: ['m/s', 'km/h'],
        winddir: ['NE', 'NW', 'SW', 'SE', 'E', 'N', 'W', 'S'],
      },
      moonphase: {
        new: 'New Moon',
        waxingcrescent: 'Waxing Crescent',
        firstquarter: 'First Quarter',
        waxinggibbous: 'Waxing Gibbous',
        fullmoon: 'Full Moon',
        waninggibbous: 'Waning Gibbous',
        lastquarter: 'Last Quarter',
        waningcrescent: 'Waning Crescent',
      },
      uvindex: {
        label: 'UV index',
        0: 'Low',
        3: 'Moderate',
        6: 'High',
        8: 'Very high',
        11: 'Extreme',
      },
    },
    slides: {
      header: {
        details: ['Details', 'Hide'],
      },
      headers: {
        tenDaysForecast: '10-day forecast (Details)',
        monthlyForecast: '15-day forecast',
      },
    },
    locations: {
      header: 'My Locations',
      searchPlaceholder: 'Find new location',
      edit: ['Edit', 'Done'],
      restoreName: 'Restore original name',
    },
    settings: {
      header: 'Settings',
      temperature: 'Degrees',
      wind: {
        label: 'Wind',
      },
      pressure: {
        label: 'Pressure',
      },
      lang: {
        label: 'Language',
        switchOff: 'ENG',
        switchOn: 'ENG',
      },
      theme: {
        label: 'Theme',
        themes: ['Light', 'Dark', 'System'],
      },
      details: 'Show Details',
      about: {
        header: 'About App',
        text: "<p>Be aware of all the weather conditions and their changes, wherever you are! Get real-time information about temperature, humidity, barometric pressure and other factors that affect the weather, and make plans with the confidence that the wrong weather won't ruin them. </p> <p> Our application is easy to use, with an intuitive interface and easy access to various features, such as listing your favorite locations, choosing units of measurement, themes, 10-day and monthly forecasts. </p> <p> We always welcome feedback and are ready to improve our application in the future, so we look forward to your feedback! </p>",
        links: [
          'Send review',
          '',
          'Donations',
        ],
      },
      clearLocations: 'Clear List of Locations',
      reset: 'Reset Settings',
    },
    modal: {
      clearLocations: {
        text: 'Are you sure you want to delete all the locations you added?',
      },
      resetSettings: {
        text: 'Are you sure you want to reset all app settings?',
      },
      renameLocation: {
        label: 'Rename Location',
      },
      legend: {
        header: 'Abbreviations',
        items: [
          'Feels Like',
          'Wind gust and direction',
          'Pressure',
          'Humidity',
        ],
      },
    },
    errors: {
      timeout: 'The request to get user location timed out.',
      network:
        // "<b class='text-sm'>Can't connect to the server.</b> <br>Please check internet connection",
        'No internet connection',
    },
    placeholders: {
      main: {
        header: 'There’s no bad weather, only bad clothes ;)',
        text: 'See the weather around the world and save your favorite locations.',
      },
      locations: {
        header: 'Add your locations',
        text: 'Use the search bar to find and then add the location you need.',
      },
      nothingFound: {
        header: 'Nothing found',
        text: 'Try searching again.',
      },
      addUserLocation: {
        header: 'Add your current location?',
        text: "Let us determine your location so you don't waste time looking for it by yourself.",
      },
      phoneRotate: {
        text: 'Please rotate your phone in portrait mode',
      },
      locationName: {
        text: 'Enter location name',
      },
    },
    toasts: {
      newLocation: 'Added new location',
      renameLocation: 'Location renamed to',
      resetSettings: 'All settings reset',
      clearLocations: 'All locations deleted',
    },
  },
};
