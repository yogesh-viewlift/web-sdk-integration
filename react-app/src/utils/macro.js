// Default Macros Handled Internally by Video Player (Template)
const playerDefaultMacroList = {
  'VIEWLIFT_WIDTH': '', // Window width (to be set dynamically)
  'VIEWLIFT_HEIGHT': '', // Window height (to be set dynamically)
  'VIEWLIFT_SIZE': '', // Size in WxH format (computed later)
  'VIEWLIFT_DOMAIN': '', // Current domain name
  'VIEWLIFT_URL': '', // Full current page URL
  'VIEWLIFT_ENCODED_URL': '', // URL-encoded version of current URL
  'VIEWLIFT_DOUBLE_ENCODED_URL': '', // Double URL-encoded current URL
  'VIEWLIFT_CACHEBUSTER': '', // Random large number to bust cache
  'VIEWLIFT_TIMESTAMP': '', // UNIX timestamp in seconds
  'VIEWLIFT_TIMESTAMP_MS': '', // UNIX timestamp in milliseconds
  'VIEWLIFT_IP': '', // IP address placeholder
  'VIEWLIFT_USER_AGENT': '', // Double-encoded user agent string
  'VIEWLIFT_DNT': '', // Do-Not-Track flag from browser
  'VIEWLIFT_DESCRIPTION': '', // Video description
  'VIEWLIFT_DURATION': '', // Video duration in seconds
  'VIEWLIFT_MIN_DURATION': '', // Static minimum duration
  'VIEWLIFT_MAX_DURATION': '', // Max duration same as runtime
  'VIEWLIFT_AUTOPLAY': '', // Autoplay flag (1 = true)
  'VIEWLIFT_MUTE': '', // Mute flag (1 = muted)
  'VIEWLIFT_DEVICE_ID': '', // Device ID from localStorage or placeholder
  'VIEWLIFT_DEVICETYPE': '', // Device type (e.g., WEB_BROWSER)
  'VIEWLIFT_IDTYPE': '', // Identifier type (e.g., dpid)
  'VIEWLIFT_KEYWORDS': '', // Video tags/keywords
  'VIEWLIFT_MEDIA_ID': '', // Unique Media/Video ID
  'VIEWLIFT_ENCODED_VIDEO_TITLE': '', // Encoded video title
  'VIEWLIFT_VIDEO_ID': '', // Redundant key for video ID
  'VIEWLIFT_VIDEO_URL': '', // URL to the video page
  'VIEWLIFT_CONSENT': '', // Consent cookie (GDPR/CCPA)
  'VIEWLIFT_COPPA': '', // COPPA compliance flag
  'VIEWLIFT_GDPR': '', // GDPR compliance flag
  'VIEWLIFT_CONTENT_DURATION_MS': '', // Video duration in milliseconds
  'VIEWLIFT_CONTENT_DURATION': '', // Video duration in seconds
  'VIEWLIFT_CONTENT_ID': '', // Content ID (same as video ID)
  'VIEWLIFT_CONTENT_TITLE': '', // Title of the content
  'VIEWLIFT_CONTENT_SERIES_TITLE': '', // Series title (if applicable)
  'VIEWLIFT_CONTENT_GENRE': '', // Primary genre/category of content
  'VIEWLIFT_USER': '', // User ID from sessionStorage or placeholder
  'VIEWLIFT_EPISODE_NUMBER': '', // Episode number (if applicable)
  'VIEWLIFT_SEASON_NUMBER': '', // Season number (if applicable)
  'VIEWLIFT_CONTENT_TAGS': '', // Content tags/keywords
  'VIEWLIFT_GPP_SID': '', // GPP SID (Privacy)
  'VIEWLIFT_GPP': '', // GPP String (Privacy)
}

// Custom Macros from Other Sources (Dynamic/User-Specific)
const customMacroList = {
  'VIEWLIFT_PROF': '', // Placeholder for profile ID
  'VIEWLIFT_CSID': '', // Placeholder for content session ID
  'VIEWLIFT_CAID': '', // Placeholder for campaign ID
  'VIEWLIFT_SLAU': '', // Placeholder for SLAU (Custom metric)
  'VIEWLIFT_MODEL_FREQUENCY': '', // Ad model frequency (monetisation interval)
  'VIEWLIFT_DEVICE_CONECTION': '', // Device connection type (4g, 3g, etc.)
  'VIEWLIFT_USER_COUNTRY': '', // User's country (Geo-detected)
  'VIEWLIFT_USER_STATE': '', // User's state/region (Geo-detected)
  'VIEWLIFT_DEVICE_CATEGORY': '', // Device category (mobile/desktop)
  'VIEWLIFT_TVE_PROVIDER': '', // Hashed TVE provider string or 'none'
}

// Merge Default & Custom Macros into Single Map
const macroMap = {
  ...playerDefaultMacroList,
  ...customMacroList,
}

/**
 * Get Macros based on requested keys.
 * @param {Array<string>} requestedKeys - List of macro keys to fetch.
 * @returns {Object} Filtered macro map (empty object if no valid keys found).
 */
const getMacros = (requestedKeys = []) => {
  const filteredMacros = {}
  if (Array.isArray(requestedKeys) && requestedKeys.length > 0) {
    requestedKeys.forEach((key) => {
      if (macroMap.hasOwnProperty(key)) {
        filteredMacros[key] = macroMap[key]
      }
    })
  }
  return filteredMacros
}

// Usage Example:
// const selectedMacros = getMacros(['VIEWLIFT_WIDTH', 'VIEWLIFT_USER', 'VIEWLIFT_DEVICE_CATEGORY']);
