var news_app = new Vue({
	el : '#news-app',
	data : {
		sources : [],
		all_news : [],
		source_name : 'abc-news-au',
		loading : false	
	},
	methods: {
	  get_news : function(){
		  	console.log(this.source_name);
		  	this.$http.get('https://newsapi.org/v1/articles', 
		  		{params : {source:this.source_name , apiKey:'3c3b4283992943af9aacf7523add010d'}})
			.then(response => {
				var news = response.data.articles;
				this.loading = false;
				for(var i = 0; i < news.length ; i++){
					this.all_news.push(news[i]);
				}
		});
	},
	Scroll : function(){
		var news_app = document.getElementById('news-app');
		var contentHeight = news_app.offsetHeight;
		var yOffset = window.pageYOffset; 
		var y = yOffset + window.innerHeight;
		if( y >= contentHeight && this.loading === false){
				this.loading = true;
				total_news_sources = this.sources.length - 1;
				random_number = Math.floor((Math.random() * total_news_sources) + 1);
				this.source_name = this.sources[random_number].id;
				this.get_news();
			}else{
				console.log('loading or not available')
				console.log(this.loading)
			}
		
		console.log(contentHeight + " | " + y);

	}
  },
  created : function(){
  	this.get_news();
  	this.$http.get('https://newsapi.org/v1/sources')
		.then(response => {
			var news_sources = response.data;
			news_sources = news_sources.sources;
			// console.log(news_sources);
			for(var i = 0; i < news_sources.length ; i++){
				this.sources.push(news_sources[i]);
  				window.addEventListener('scroll', this.Scroll);
			}
			
	});
  }
})