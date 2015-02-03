/**
 * Copyright (c) 2000-present Liferay, Inc. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

package com.liferay.chromatheme.util;

import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import com.liferay.portal.model.ResourceConstants;
import com.liferay.portal.service.ResourceLocalServiceUtil;
import com.liferay.portal.service.ResourcePermissionLocalServiceUtil;

/**
 * @author Daniel Reuther
 */
public class DefaultResourcesHelperImpl implements DefaultResourcesHelper {
	public static final String DL_RESOURCE_NAME =
		"com.liferay.portlet.documentlibrary";

	public void addDLDefaultResources(long companyId, long groupId) {	
		try {
			int count =
				ResourcePermissionLocalServiceUtil.getResourcePermissionsCount(
					companyId, DL_RESOURCE_NAME,
					ResourceConstants.SCOPE_INDIVIDUAL,
					String.valueOf(groupId));

			if (count == 0) {
				ResourceLocalServiceUtil.addResources(
					companyId, groupId, 0, DL_RESOURCE_NAME,
						groupId, false, true, true);
			}
		}
		catch (Exception e) {
			if (_log.isInfoEnabled()) {
				_log.info(e, e);
			}
		}
	}
	
	private static Log _log = LogFactoryUtil.getLog(DefaultResourcesHelperImpl.class);
}
