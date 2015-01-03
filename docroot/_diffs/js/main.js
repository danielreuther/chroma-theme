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

		var dockbar = A.one('.color-scheme-default .dockbar');

		if (dockbar) {
			new A.Toggler(
				{
					content: dockbar,
					header: '#navigation .nav-item-dockbartoggle > a',
					expanded: false
				}
			);
		}

		
		var banner = A.one('.dashboard #banner');
		var btnNavigation = A.one('#navigation .nav-item-sitenavigationtoggle > a');

		if (banner) {
			var btnNavigationDockbar = A.one('#_145_navSiteNavigationNavbarBtn');

			if (!btnNavigationDockbar) {
				btnNavigationDockbar = btnNavigation;
			}

			new A.Toggler(
				{
					content: banner,
					header: btnNavigationDockbar,
					expanded: false
				}
			);
		}
		else {
			var navigation = A.one(Liferay.Data.NAV_SELECTOR);

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