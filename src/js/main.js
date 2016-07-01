import $ from 'jquery';
import _ from 'lodash';
import {client_id} from './credentials';
import {baseURL, musicSearch} from './sc';

$(".searchButton").on('click', function (e) {
	e.preventDefault();
	var input = $(".searchInput").val();
	var musicData = musicSearch(input);

	musicData.then(function(musicData){
		musicData.forEach(function(object){
			$(".grid").append(`
				<div class="trackContainer">
					<div class="trackArtworkDiv">
						<img class="artwork" src="${object.artwork_url}">
					</div>
					<div class="songTitle">${object.title}
					</div>
					<div class="bandName">${object.user.username}
				</div>`);
		});
	});
});
