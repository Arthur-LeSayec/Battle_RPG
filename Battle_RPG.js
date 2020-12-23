var valeur_vie_1 = 100;
var valeur_mana_1 = 100 ;
var valeur_atk_1 =25;
var valeur_def_1 =15 ;

var infobulle_1 = document.getElementById("infobulle1");
var vie_monstre_1 = document.getElementById("monstre_1");

var infobulle_2 = document.getElementById("infobulle2");
var vie_monstre_2 = document.getElementById("monstre_2");

var infobulle_3 = document.getElementById("infobulle3");
var vie_monstre_3 = document.getElementById("monstre_3");



vie_monstre_1.onmouseover= function(){
		infobulle_1.style.opacity="1";
		vie_monstre_1.onmouseout= function(){
			infobulle_1.style.opacity="0";
		}
}	
vie_monstre_2.onmouseover= function(){
		infobulle_2.style.opacity="1";
		vie_monstre_2.onmouseout= function(){
			infobulle_2.style.opacity="0";
		}
}	
vie_monstre_3.onmouseover= function(){
		infobulle_3.style.opacity="1";
		vie_monstre_3.onmouseout= function(){
			infobulle_3.style.opacity="0";
		}
}	