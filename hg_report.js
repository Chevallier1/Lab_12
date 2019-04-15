"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Nicolas Catlin
   Date: 04/15/2019
   
   Filename: hg_report.js
	
*/
// Declaration of gameReport variable storing article HTML
var gameReport = '<h1>' + itemTitle + '</h1><h2>By: ' + itemManufacturer + '</h2>' +
				'<img src="hg_' + itemID + '.png" alt="' + itemID + ' id="gameImg" />' +
				'<table>' +
				'<tr><th>Product ID</th><td>' + itemID + '</td></tr>' +
				'<tr><th>List Price</th><td>' + itemPrice + '</td></tr>' +
				'<tr><th>Platform</th><td>' + itemPlatform + '</td></tr>' +
				'<tr><th>ESRB Rating</th><td>' + itemESRB + '</td></tr>' +
				'<tr><th>Condition</th><td>' + itemCondition + '</td></tr>' +
				'<tr><th>Release</th><td>' + itemRelease + '</td></tr>' +
				'</table>' +
				itemSummary;
				
// Calling the data in gameReport into article
document.getElementsByTagName('article')[0].innerHTML = gameReport;
// initial value of ratingsSum
var ratingsSum = 0;
// establishing length of array as ratingsCount
var ratingsCount = ratings.length;
// for loop to calculate the avg rating
for (var i = 0; i < ratings.length; i++) {ratingsSum += ratings[i];}
var ratingsAvg = ratingsSum / ratingsCount;
// html append to ratingReport for avg rating
var ratingReport = '<h1>Customer Reviews</h1>' +
				   '<h2>' + ratingsAvg + ' out of 5 stars (' + ratingsCount + ' reviews)</h2>';
				   
// html append to ratingReport for the rest of review data
for (var i = 0; i < 3; i++) {
	ratingReport += '<div class="review">' +
			  '<h1>' + ratingTitles[i] + '</h1>' +
			  '<table>' +
			  '<tr><th>By</th><td>' + ratingAuthors[i] + '</td></tr>' +
			  '<tr><th>Review Date</th><td>' + ratingDates[i] + '</td></tr>' +
			  '<tr><th>Rating</th><td>';
			  // nested for loop to add stars for visual rating
		for (var j = 0; j < ratings[i]; j++) {
			ratingReport += '<img src="hg_star.png" />';
		}
		// final append to add summary of review
	ratingReport += '</td></tr></table>' +
					ratingSummaries[i] +
					'</div>';
}

// calling ratingReport to aside element for reviews
document.getElementsByTagName('aside')[0].innerHTML = ratingReport;