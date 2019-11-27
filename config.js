/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "cs",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_bar"
		},
		{
		  	module: "MMM-NowPlayingOnSpotify",
		  	position: "bottom",
		
		  	config: {
		   	clientID: "79f8748912ec41e2925accec0b2350a7",
		    	clientSecret: "b7f2e18d814748e48a27192dd749c8fc",
		    	accessToken: "BQAj4xEE3jKY6gGxBnhx74jNjPaslx3mh35GI-4-IucL7A8t78lE2KbnhDTgQf8t487VEPtW_reIZ7OWM8nz_JAencUGD2Bc_uwt7CbAX9pXCzGZ0jVE2RU575Aq7zWLQ8WVaPTYYbmPcElFcZxyaIS-lDpoddM-NNRmf2aM_UOvqA",
		    	refreshToken: "AQCE69pCWqljQ9IUbVLEVsyMkTuYh-RKF-I4xhZPkeq_bKdOEunBB9qXHLXfnWkPDpz2K3CRD9tH6f9E3PyKhueHbK6KTIX7tmMtBU3tK9EXEvCApJcoauA8rD_-a43bexw"
		  }
		},
		{
			module: "calendar",
			header: "České svátky",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendar.sk/icalendar/create-vcard-multiple.php?fName=cz"					}
				]
			}
		},
		{
			module: "calendar",
			header: "Jmeniny",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://webmail.zcu.cz/kalendare/cz-names.ics"					}
				]
			}
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Opava",
				locationID: "3068927",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "ea3c319925ddd9717093ffa74acdb006"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Předpověď počasí",
			config: {
				location: "Opava",
				locationID: "3068927",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "ea3c319925ddd9717093ffa74acdb006"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "Zprávy",
						url: "https://servis.idnes.cz/rss.aspx?c=zpravodaj"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
