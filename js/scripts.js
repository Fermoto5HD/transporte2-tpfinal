var chart01 = document.getElementById("chart01");
var chart02 = document.getElementById("fig18");
var chart03 = document.getElementById("fig19");
var chart04 = document.getElementById("fig20");

Chart.defaults.global.defaultFontColor = '#FFF';

var c01 = new Chart(chart01, {
	type: 'horizontalBar',
	data: {
		labels: ["Centro", "Cuyo", "NEA", "NOA"],
		datasets: [{
			label: 'Porcentaje representado',
			data: [12.4, 11.6, 11.6, 16],
			backgroundColor: 'rgba(0, 200, 255, 0.5)',
			borderColor: 'rgba(255, 255, 255, 0.75)',
			fontColor: '#FFF', 
			borderWidth: 1
		}]
	},
	options: {
		legend: {display: false}, 
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero:true
				}
			}]
		}
	}
});

var c02 = new Chart(chart02, {
	type: 'horizontalBar',
	data: {
		labels: ["Excesivo tiempo de tránsito", "Falta de capacitación adecuada de los recursos humanos", "Falta de presencia de operadores logísticos en la región", "Falta de alternativas de transporte (especialmente en tiempos de cosecha)", "Infraestructura en general", "Altos costos de los servicios relacionados con la logística"],
		datasets: [{
			label: 'Porcentaje representado',
			data: [10, 20, 20, 30, 40, 80],
			backgroundColor: 'rgba(0, 200, 255, 0.5)',
			borderColor: 'rgba(255, 255, 255, 0.75)',
			fontColor: '#FFF', 
			borderWidth: 1
		}]
	},
	options: {
		legend: {display: false}, 
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero:true
				}
			}]
		}
	}
});

var c03 = new Chart(chart03, {
	type: 'horizontalBar',
	data: {
		labels: ["Robos, Inseguridad", "Excesivo tiempo de tránsito a destino", "Problemas de oferta de servicios de transporte durante épocas de cosecha", "Limitada oferta de servicios de transporte", "Deficencias en la infraestructura vial", "Altos costos de los servicios de transporte carretero en el NOA"],
		datasets: [{
			label: 'Porcentaje representado',
			data: [10, 10, 35, 45, 45, 80],
			backgroundColor: 'rgba(0, 200, 255, 0.5)',
			borderColor: 'rgba(255, 255, 255, 0.75)',
			fontColor: '#FFF', 
			borderWidth: 1
		}]
	},
	options: {
		legend: {display: false}, 
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero:true
				}
			}]
		}
	}
});

var c04 = new Chart(chart04, {
	type: 'horizontalBar',
	data: {
		labels: ["Costo", "Elevados tiempos de transporte comparados con el camión", "Falta de flexibilidad contra el transporte carretero", "Deficencias en la organización y gestión de los operadores ferroviarios", "Deficencias en la infraestructura ferroviaria"],
		datasets: [{
			label: 'Porcentaje representado',
			data: [0, 50, 60, 60, 90],
			backgroundColor: 'rgba(0, 200, 255, 0.5)',
			borderColor: 'rgba(255, 255, 255, 0.75)',
			fontColor: '#FFF', 
			borderWidth: 1
		}]
	},
	options: {
		legend: {display: false}, 
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero:true
				}
			}]
		}
	}
});