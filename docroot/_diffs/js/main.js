AUI().ready(
	'aui-carousel', 'liferay-hudcrumbs', 'liferay-navigation-interaction', 'aui-sortable-layout', 'aui-toggler',
	function(A) {
		var navigation = A.one('#navigation');

		if (navigation) {
			navigation.plug(Liferay.NavigationInteraction);
		}

		var siteBreadcrumbs = A.one('#breadcrumbs');

		if (siteBreadcrumbs) {
			siteBreadcrumbs.plug(A.Hudcrumbs);
		}

		var dockbar = A.one(".dashboard .dockbar");

		if (dockbar) {
			new A.Toggler(
				{
					content: dockbar,
					header: '#dockbarToggleBtn',
					expanded: false
				}
			);
		}

		var btnNavigation = A.one('#navSiteNavigationNavbarBtn');

		var navigation = A.one(Liferay.Data.NAV_SELECTOR);

		if (btnNavigation && navigation) {
			btnNavigation.on(
				'click',
				function(event) {
					btnNavigation.toggleClass('open');
					navigation.toggleClass('open');
				}
			);
		}

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