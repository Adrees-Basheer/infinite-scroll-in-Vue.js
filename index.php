<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Daily News</title>
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	
	<h1>One Source for all of your news</h1>
	<div id="news-app">
		<div class="container">
			<div class="all-news-container">
				<div class="news" v-for='news in all_news'>
					<div class="news_title"> {{ news.title }} </div>
					<article class="news_description">
						<p> {{ news.description }} </p>
					</article>
				</div> 
			</div>
		</div>
		<div class="loading" v-if="loading"><img src="icon/loading.gif" alt="loading"> Loding .... </div>
	</div>
		

	<script src="https://unpkg.com/vue@2.4.2"></script>
	<script src="https://cdn.jsdelivr.net/npm/vue-resource@1.3.4"></script>
	<script src='js/script.js'></script>
</body>
</html>