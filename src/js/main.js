import $ from 'jquery';
import _ from 'lodash';
import {client_id} from './credentials';
import {baseURL, musicSearch} from './sc';

$(".searchButton").on('click', function (e) {
	e.preventDefault();
	var input = $(".searchInput").val();
	var musicData = musicSearch(input);
	$(".grid").html("");
	musicData.then(function(musicData){
		musicData.forEach(function(object){
			if (object.artwork_url === null) {
				object.artwork_url = "http://placehold.it/100x100?text=No+Image+Found";
			};
			$(".grid").append(`
				<div class="trackContainer">
					<div class="trackArtworkDiv">
						<a id=${object.id} href="#" class="imgLink"><img class="artwork" src="${object.artwork_url}"></a>
					</div>
					<div class="songTitle">${object.title}
					</div>
					<div class="userName"><a class="userNameLink" href="${object.user.uri}">${object.user.username}</a>
					</div>`);
		});
		$(".imgLink").on('click', function(e){
			e.preventDefault();
			var songID = e.currentTarget.id;
			$(".audioDiv").html(`
				 <audio class="audioTag" src="${baseURL}/tracks/${e.currentTarget.id}/stream?client_id=${client_id}" controls autoplay>
		        </audio>`);
			var songTitleArray = [];
			var musicSourceArray = [];
			musicData.forEach(function(object){
				if (object.id == songID){
					songTitleArray.push(object.title);
				};
			});
			musicData.forEach(function(object){
				if (object.id == songID){
					musicSourceArray.push(object.permalink_url)
				};
			});
			$(".audioDiv").append(`<div class="scLinkDiv">
				<a class="scLink" href="${musicSourceArray[0]}"><img class="scLinkBigImg" src="./images/BigBlackSCLogo.png"></a>
				</div>
				<div class="nowPlaying">Now Playing: ${songTitleArray[0]}
				</div>
				<div class="scLinkDiv2">
					<a class="scLink2" href="${musicSourceArray[0]}"><img class="scLinkImg" src="./images/blackSCLogo.png"></a>
				</div>`);
		});
	});
});