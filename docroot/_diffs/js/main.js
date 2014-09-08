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

		var dockbar = A.one('.default .dockbar');

		if (dockbar) {
			new A.Toggler(
				{
					content: dockbar,
					header: '#navigation .nav-item-dockbartoggle > a',
					expanded: false
				}
			);
		}

		var navigation = A.one(Liferay.Data.NAV_SELECTOR);
		var btnNavigation = A.one('#_145_navSiteNavigationNavbarBtn');
			
		if (!btnNavigation) {
			btnNavigation = A.one('#navigation .nav-item-sitenavigationtoggle > a');
		}

		var banner = A.one('.dashboard #banner');

		if (banner) {
			new A.Toggler(
				{
					content: banner,
					header: btnNavigation,
					expanded: false
				}
			);
		}
		else {
			btnNavigation.on(
				'click',
				function(event) {
					btnNavigation.toggleClass('open');
					navigation.toggleClass('open');
				}
			);
		}
	}
);