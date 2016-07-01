import $ from 'jquery';
import _ from 'lodash';
import {client_id} from './credentials';
import {baseURL, musicSearch} from './sc';

$(".searchButton").on('click', function (e) {
	e.preventDefault();
	var input = $(".searchInput").val();
	var musicData = musicSearch(input);
	console.log(musicData);
	musicData.then(function(musicData){
		musicData.forEach(function(object){
			$(".grid").append(`
				<div class="trackContainer">
					<div class="trackArtworkDiv">
						<a id=${object.id} href="#" class="imgLink"><img class="artwork" src="${object.artwork_url}"></a>
					</div>
					<div class="songTitle">${object.title}
					</div>
					<div class="bandName">${object.user.username}
				</div>`);
		});
			$(".imgLink").on('click', function(e){
				e.preventDefault();
				$(".audioDiv").html(`
					 <audio class="audioTag" src="${baseURL}/tracks/${e.currentTarget.id}/stream?client_id=${client_id}" controls autoplay>
			        </audio>`);
			});
	});
});

