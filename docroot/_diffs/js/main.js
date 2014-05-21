AUI().ready(
	'aui-carousel',
	function(A) {
		var mainCarousel = A.one("#main-carousel");

		if (mainCarousel) {
			new A.Carousel(
				{
					contentBox: mainCarousel,
					height: '100%',
					width: '100%'
				}
			).render();
		}
	}
);