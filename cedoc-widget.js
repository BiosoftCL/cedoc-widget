function generateTemplate(title, subtitle, placeholder) {
	return `
		<div id="cedoc-widget-header">
			<span id="cedoc-widget-header-title">${title}</span>
			<p id="cedoc-widget-header-title-subtitle">${subtitle}</p>
		</div>
		<div id="cedoc-widget-body">
			<div id="cedoc-widget-body-search">
				<input id="cedoc-widget-body-search-input" type="text" placeholder="${placeholder}">
				<div id="cedoc-widget-body-btn-search">
					<button>Buscar</button>
				</div>
			</div>
		</div>
	`;
}	

const CedocWidgetClass = {
	init: function(config){
	    this.url = config.url;
	    this.instance = typeof config.instance !== 'undefined' ? config.instance : '';
	    this.title = typeof config.title !== 'undefined' ? config.title : 'Búsqueda en Centro Documental';
	    this.subtitle = typeof config.subtitle !== 'undefined' ? config.subtitle : 'Encuentra recursos geoespaciales ingresando un texto de búsqueda.';
	    this.placeholder = typeof config.placeholder !== 'undefined' ? config.placeholder : 'Educación, Accidentes...';
		this.createTemplate()
	},
	createTemplate: function(){
		const nodoWidget = document.getElementById('cedoc-widget');
		nodoWidget.innerHTML = generateTemplate(this.title, this.subtitle, this.placeholder);
		document.getElementById('cedoc-widget-body-btn-search').addEventListener('click', function () {
			cedocWidget.search();
		});
	},
	search: function(){
		const value = document.getElementById('cedoc-widget-body-search-input').value
		let route = '';
		if (this.instance != '') {
			route = this.url + '/catalog/' + this.instance + '?q=' + value;
		} else {
			route = this.url + '/catalog?q=' + value;
		}
	    window.open(route);
	}
};

const cedocWidget = Object.create(CedocWidgetClass);