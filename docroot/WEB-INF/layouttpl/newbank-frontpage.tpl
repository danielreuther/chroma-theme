#set ($images_folder=$request.getAttribute("LIFERAY_SHARED_THEME_DISPLAY").getPathThemeImages())


<div class="newbank-frontpage" id="main-content" role="main">
	<div id="wrapper-main-carousel" class="row-fluid">
		<div id="main-carousel">
			<div class="carousel-item" style="background-image: url($images_folder/main-carousel/teegardin-5913014568.jpg);">
				<span>
					<h2>Get the highest interest.</h2>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis eu felis non ullamcorper. Sed a arcu ac nisl congue. 
				</span>
			</div>
			<div class="carousel-item" style="background-image: url($images_folder/main-carousel/teegardin-6093690339.jpg);">
				<span>
					<h2>Securely Bank Online.</h2>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis eu felis non ullamcorper. Sed a arcu ac nisl congue. 
				</span>
			</div>
			<div class="carousel-item" style="background-image: url($images_folder/main-carousel/teegardin-6093701123.jpg);">
				<span>
					<h2>Best Customer Service.</h2>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis eu felis non ullamcorper. Sed a arcu ac nisl congue. 
				</span>
			</div>
			<div class="carousel-item" style="background-image: url($images_folder/main-carousel/teegardin-5737585884.jpg);">
				<span>
					<h2>New!</h2>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis eu felis non ullamcorper. Sed a arcu ac nisl congue. 
				</span>
			</div>
		</div>
	</div>

	<div class="portlet-layout row-fluid">
		<div class="portlet-column portlet-column-first span4" id="column-1">
			$processor.processColumn("column-1", "portlet-column-content portlet-column-content-first")
		</div>

		<div class="portlet-column portlet-column span4" id="column-2">
			$processor.processColumn("column-2", "portlet-column-content portlet-column-content")
		</div>

		<div class="portlet-column portlet-column-last span4" id="column-3">
			$processor.processColumn("column-3", "portlet-column-content portlet-column-content-last")
		</div>
	</div>

	<div class="portlet-layout row-fluid">
		<div class="portlet-column portlet-column-only span12" id="column-4">
			$processor.processColumn("column-4", "portlet-column-content portlet-column-content-only")
		</div>
	</div>
</div>