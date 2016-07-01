import {client_id} from "./credentials";
import $ from 'jQuery';
import _ from 'lodash';

var baseURL = `https://api.soundcloud.com`;

function musicSearch(input){
	return $.ajax({
		url: `${baseURL}/tracks?q=${input}&client_id=${client_id}`
	});
};

export {baseURL, musicSearch};