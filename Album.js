/*-------------------------------------------------ALBUM---------------------------------------------------------------------*/
function GetSelectedAlbum(SelectValue) {
	let tablecontents = "";
	for (p of album) {
		if (p.album_name == SelectValue) {
			tablecontents = "<table border=1 align=center cellpadding=5px>";
			tablecontents += "<tr>";
			tablecontents += "<th>" + "Album_name" + "</th>";
			tablecontents += "<th>" + "Titles Information" + "</th>";
			tablecontents += "<th>" + "Artists Information" + "</th>";
			tablecontents += "<th>" + "Genres Information" + "</th>";
			tablecontents += "<th>" + "Year" + "</th>";
			tablecontents += "<th>" + "Language" + "</th>";
			tablecontents += "</tr>";
			tablecontents += "<tr>";
			tablecontents += "<td>" + p.album_name + "</td>";
			tablecontents += "<td>" + titleinfor(p.title[0]) + "</td>";
			tablecontents += "<td>" + artistinfor(p.artist[0]) + "</td>";
			tablecontents += "<td>" + genreinfor(p.genre[0]) + "</td>";
			tablecontents += "<td>" + p.year + "</td>";
			tablecontents += "<td>" + p.language + "</td>";
			tablecontents += "</tr>";
			tablecontents += "</table>";
		}
	}
	document.getElementById("result").innerHTML = tablecontents;
}

/*-------------------------------------------------TITLE---------------------------------------------------------------------*/


function GetSelectedTitle(SelectValue) {
	let tablecontents = "";
	for (k of title) {
		if (k.title_name == SelectValue) {
			tablecontents = "<table border=1 align=center cellpadding=5px>";
			tablecontents += "<tr>";
			tablecontents += "<th>" + "Title_name" + "</th>";
			tablecontents += "<th>" + "Album Information" + "</th>";
			tablecontents += "<th>" + "Artist Information" + "</th>";
			tablecontents += "<th>" + "Genre Information" + "</th>";
			tablecontents += "</tr>";
			tablecontents += "<tr>";
			tablecontents += "<td>" + k.title_name + "</td>";
			tablecontents += "<td>" + albuminfor(k.album[0]) + "</td>";
			tablecontents += "<td>" + artistinfor1(k.artist[0]) + "</td>";
			tablecontents += "<td>" + genreinfor1(k.genre[0]) + "</td>";
			tablecontents += "</tr>";
			tablecontents += "</table>";
		}
	}
	document.getElementById("result").innerHTML = tablecontents;
}

/*-------------------------------------------------ARTIST---------------------------------------------------------------------*/

function GetSelectedArtist(SelectValue) {
	let tablecontents = "";
	for (l of artist) {
		if (l.artist_name == SelectValue) {
			tablecontents = "<table border=1 align=center cellpadding=5px>";
			tablecontents += "<tr>";
			tablecontents += "<th>" + "Artist_name" + "</th>";
			tablecontents += "<th>" + "Album Information" + "</th>";
			tablecontents += "<th>" + "Genre Information" + "</th>";
			tablecontents += "<th>" + "Title Information" + "</th>";
			tablecontents += "<th>" + "Profession" + "</th>";
			tablecontents += "</tr>";
			tablecontents += "<tr>";
			tablecontents += "<td>" + l.artist_name + "</td>";
			tablecontents += "<td>" + albuminfor(l.album[0]) + "</td>";
			tablecontents += "<td>" + genreinfor(l.genre[0]) + "</td>";
			tablecontents += "<td>" + titleinfor1(l.title[0]) + "</td>";
			tablecontents += "<td>" + l.profession + "</td>";
			tablecontents += "</tr>";
			tablecontents += "</table>";
		}
	}
	document.getElementById("result").innerHTML = tablecontents;
}


/*-------------------------------------------------GENRE---------------------------------------------------------------------*/


function GetSelectedGenre(SelectValue) {
	let tablecontents = "";
	for (o of genre) {
		if (o.genre_name == SelectValue) {
			tablecontents = "<table border=1 align=center cellpadding=5px>";
			tablecontents += "<tr>";
			tablecontents += "<th>" + "Genre_name" + "</th>";
			tablecontents += "<th>" + "Album Information" + "</th>";
			tablecontents += "<th>" + "Artist Informatione" + "</th>";
			tablecontents += "<th>" + "Title Informatione" + "</th>";
			tablecontents += "</tr>";
			tablecontents += "<tr>";
			tablecontents += "<td>" + o.genre_name + "</td>";
			tablecontents += "<td>" + albuminfor(o.album[0]) + "</td>";
			tablecontents += "<td>" + artistinfor(o.artist[0]) + "</td>";
			tablecontents += "<td>" + titleinfor2(o.title[0]) + "</td>";
			tablecontents += "</tr>";
			tablecontents += "</table>";
		}
	}
	document.getElementById("result").innerHTML = tablecontents;
}


/*-------------------------------------------list-------------------------------------------------------- */

function GetAlbumsLists(SelectValue) {
	let tablecontents = "";
	if (SelectValue == "Album List") {

		tablecontents = "<table border=1 align=center cellpadding=5px>";
		tablecontents += "<tr>";
		tablecontents += "<th>" + "Album_name" + "</th>";
		tablecontents += "<th>" + "Title Information" + "</th>";
		tablecontents += "<th>" + "Artist Information" + "</th>";
		tablecontents += "<th>" + "Genre Information" + "</th>";
		tablecontents += "<th>" + "Year" + "</th>";
		tablecontents += "<th>" + "Language" + "</th>";
		tablecontents += "</tr>";

		for (a of album) {
			tablecontents += "<tr>";
			tablecontents += "<td>" + a.album_name + "</td>";
			tablecontents += "<td>" + titleinfor(a.title[0]) + "</td>";
			tablecontents += "<td>" + artistinfor(a.artist[0]) + "</td>";
			tablecontents += "<td>" + genreinfor(a.genre[0]) + "</td>";
			tablecontents += "<td>" + a.year + "</td>";
			tablecontents += "<td>" + a.language + "</td>";
			tablecontents += "</tr>";
		}

		tablecontents += "</table>";
		document.getElementById("result").innerHTML = tablecontents;
	}
	else if (SelectValue == "Title List") {
		tablecontents = "<table border=1 align=center cellpadding=5px>";
		tablecontents += "<tr>";
		tablecontents += "<th>" + "Title_name" + "</th>";
		tablecontents += "<th>" + "Album Information" + "</th>";
		tablecontents += "<th>" + "Artist Information" + "</th>";
		tablecontents += "<th>" + "Genre Information" + "</th>";
		tablecontents += "</tr>";
		for (j1 of title) {
			tablecontents += "<tr>";
			tablecontents += "<td>" + j1.title_name + "</td>";
			tablecontents += "<td>" + albuminfor(j1.album[0]) + "</td>";
			tablecontents += "<td>" + artistinfor1(j1.artist[0]) + "</td>";
			tablecontents += "<td>" + genreinfor1(j1.genre[0]) + "</td>";
			tablecontents += "</tr>";
		}
		tablecontents += "</table>";
		document.getElementById("result").innerHTML = tablecontents;
	}
	else if (SelectValue == "Artist List") {
		tablecontents = "<table border=1 align=center cellpadding=5px>";
		tablecontents += "<tr>";
		tablecontents += "<th>" + "Artist_name" + "</th>";
		tablecontents += "<th>" + "Album Information" + "</th>";
		tablecontents += "<th>" + "Genre Information" + "</th>";
		tablecontents += "<th>" + "Title Information" + "</th>";
		tablecontents += "<th>" + "Profession" + "</th>";
		tablecontents += "</tr>";
		for (a1 of artist) {
			tablecontents += "<tr>";
			tablecontents += "<td>" + a1.artist_name + "</td>";
			tablecontents += "<td>" + albuminfor(a1.album[0]) + "</td>";
			tablecontents += "<td>" + genreinfor(a1.genre[0]) + "</td>";
			tablecontents += "<td>" + titleinfor1(a1.title[0]) + "</td>";
			tablecontents += "<td>" + i.profession + "</td>";
			tablecontents += "</tr>";
		}
		tablecontents += "</table>";
		document.getElementById("result").innerHTML = tablecontents;
	}
	else if (SelectValue == "Genre List") {
		tablecontents = "<table border=1 align=center cellpadding=5px>";
		tablecontents += "<tr>";
		tablecontents += "<th>" + "Genre_name" + "</th>";
		tablecontents += "<th>" + "Album Information" + "</th>";
		tablecontents += "<th>" + "Artist Informatione" + "</th>";
		tablecontents += "<th>" + "Title Informatione" + "</th>";
		tablecontents += "</tr>";
		for (g2 of genre) {
			tablecontents += "<tr>";
			tablecontents += "<td>" + g2.genre_name + "</td>";
			tablecontents += "<td>" + albuminfor(g2.album[0]) + "</td>";
			tablecontents += "<td>" + artistinfor1(g2.artist[0]) + "</td>";
			tablecontents += "<td>" + titleinfor2(g2.title[0]) + "</td>";
			tablecontents += "</tr>";
		}
		tablecontents += "</table>";
		document.getElementById("result").innerHTML = tablecontents;
	}
}


/*-----------------------------------------------END----------------------------------------------------- */
function titleinfor(x) {
	let h = [];
	let hai = '';
	for (i = 0; i < title.length; i++) {
		h[i] = title[i].title_id;
	}
	let t = h.findIndex(r => r == x);
	for (j = t; j < t + 3; j++) {	
		hai += title[j].title_name+"<br><br>";
	}
	return hai;
}
function artistinfor(x) {
	let h = [];
	let hai = '';
	for (i = 0; i < artist.length; i++) {
		h[i] = artist[i].artist_id;
	}
	let t = h.findIndex(r => r == x);
	for (j = t; j < t + 2; j++) {	
		hai += "Artist Name :  "+artist[j].artist_name+"<br>"+"Profession :  "+artist[j].profession+"<br><br>";
	}
	return hai;
}
function genreinfor(x) {
	let h = [];
	let hai = '';
	for (i = 0; i < genre.length; i++) {
		h[i] = genre[i].genre_id;
	}
	let t = h.findIndex(r => r == x);
	for (j = t; j < t + 2; j++) {	
		hai += genre[j].genre_name+"<br><br>";
	}
	return hai;
}
function albuminfor(x) {
	let h = [];
	let hai = '';
	for (i = 0; i < album.length; i++) {
		h[i] = album[i].album_id;
	}
	let t = h.findIndex(r => r == x);
	for (j = t; j < t + 1; j++) {	
		hai += "Album Name :  "+album[j].album_name+"<br>"+"Album Year :  "+album[j].year+"<br>"+"Album Language  :"+album[j].language+"<br><br>";
	}
	return hai;
}
function artistinfor1(x) {
	let h = [];
	let hai = '';
	for (i = 0; i < artist.length; i++) {
		h[i] = artist[i].artist_id;
	}
	let t = h.findIndex(r => r == x);
	for (j = t; j < t + 1; j++) {	
		hai += "Artist Name :  "+artist[j].artist_name+"<br>"+"Profession :  "+artist[j].profession+"<br><br>";
	}
	return hai;
}
function genreinfor1(x) {
	let h = [];
	let hai = '';
	for (i = 0; i < genre.length; i++) {
		h[i] = genre[i].genre_id;
	}
	let t = h.findIndex(r => r == x);
	for (j = t; j < t + 1; j++) {	
		hai += genre[j].genre_name+"<br><br>";
	}
	return hai;
}
function titleinfor1(x) {
	let h = [];
	let hai = '';
	for (i = 0; i < title.length; i++) {
		h[i] = title[i].title_id;
	}
	let t = h.findIndex(r => r == x);
	for (j = t; j < t + 2; j++) {	
		hai += title[j].title_name+"<br><br>";
	}
	return hai;
}
function titleinfor2(x) {
	let h = [];
	let hai = '';
	for (i = 0; i < title.length; i++) {
		h[i] = title[i].title_id;
	}
	let t = h.findIndex(r => r == x);
	for (j = t; j < t + 1; j++) {	
		hai += title[j].title_name+"<br><br>";
	}
	return hai;
}