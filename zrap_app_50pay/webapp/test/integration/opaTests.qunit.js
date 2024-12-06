sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zrapapp50pay/test/integration/FirstJourney',
		'zrapapp50pay/test/integration/pages/TravelList',
		'zrapapp50pay/test/integration/pages/TravelObjectPage'
    ],
    function(JourneyRunner, opaJourney, TravelList, TravelObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zrapapp50pay') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTravelList: TravelList,
					onTheTravelObjectPage: TravelObjectPage
                }
            },
            opaJourney.run
        );
    }
);