"use strict";

app.controller( 'homeCtrl', function( $scope, config ){
	
	$scope.data = {
		home:'Clase Virtual Presencial Online',
		clases:[ 
			{
				title: "Tecnologias Emergentes",
				img: config.imgPath + "vr1.jpeg",
				desc: "Creamos Tecnologias Emergentes!",
				link: "/class?id=1"
			},
			{
				title: "Tecnologias Emergentes",
				img: config.imgPath + "vr1.jpeg",
				desc: "Creamos Tecnologias Emergentes!",
				link: "/class?id=2"
			},
			{
				title: "Tecnologias Emergentes",
				img: config.imgPath + "vr1.jpeg",
				desc: "Creamos Tecnologias Emergentes!",
				link: "/class?id=3"
			},
			{
				title: "Tecnologias Emergentes",
				img: config.imgPath + "vr1.jpeg",
				desc: "Creamos Tecnologias Emergentes!",
				link: "/class?id=4"
			}
		]
	}
} );