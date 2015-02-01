AUI().ready(
	'aui-carousel', 'liferay-hudcrumbs', 'liferay-navigation-interaction', 'event-outside', 'aui-sortable-layout', 'aui-toggler',
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
			A.all('#navigation .nav-item-dockbartoggle > a').each(function(btnDockbarToggle) {
				new A.Toggler(
					{
						content: dockbar,
						header: btnDockbarToggle,
						expanded: false
					}
				);
			});
		}

		var banner = A.one('.color-scheme-dashboard #banner');
		var btnNavigation = A.one('#navigation .nav-item-sitenavigationtoggle > a');

		if (banner) {
			var btnNavigationDockbar = A.one('#_145_navSiteNavigationNavbarBtn');

			if (!btnNavigationDockbar) {
				btnNavigationDockbar = btnNavigation;
			}
			else {
				btnNavigation.hide();
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

		var siteSearch = A.one('#sitesearch');

		if (siteSearch) {
			var btnSearch = siteSearch.one('a');

			var searchForm = siteSearch.one('.site-search-form');
			var searchField = searchForm.one('.site-search-field');

			btnSearch.on(
				'click',
				function(event) {
					event.preventDefault();

					if (searchForm.getStyle('width') == '0px') {
						siteSearch.removeClass('site-search-collapsed');
						searchField.focus();

						return;
					}
					else {
						if (searchField.get('value') == '') {
							siteSearch.addClass('site-search-collapsed');

							return;
						}
					}

					searchForm.submit();
				}
			);
		}
	}
);