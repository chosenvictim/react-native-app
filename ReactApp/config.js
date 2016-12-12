/**
 * Global App Config
 */
'use strict';

import Dimensions from 'Dimensions';
var window = Dimensions.get('window');

exports.title = 'GlobalConfig';

export default {
	// App Details
	appName: 'Sportshero',

	// Window Dimensions
	windowHeight: window.height,
	windowWidth: window.width,

	// Grid
	windowWidthHalf: window.width * 0.5,
	windowWidthYhird: window.width * 0.333,
	windowWidthYwoThirds: window.width * 0.666,
	windowWidthQuarter: window.width * 0.25,
	windowWidthThreeQuarters: window.width * 0.75,

	// General Element Dimensions
	navbarHeight: 64,
	statusBarHeight: 22,

	// Fonts
	baseFont: "Avenir",
	baseFontSize: 14,

	// Colors
	primaryColor: "#4099FF",
	secondaryColor: "#FFE229",
	textColor: "#555",
	borderColor: "#E7E7E7",
}
