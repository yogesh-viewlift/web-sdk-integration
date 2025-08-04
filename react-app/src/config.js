import { getMacros } from "./utils/macro";
import { setTveToken, getToken } from "./utils/helper";


export const playerConfig = {
  videoId: "1dd3155a-ff6d-463e-9b75-d21225eb9150",       // TVE Plan
  // videoId: "1269deb1-8f41-4ade-8af0-800e69728e2d",    // Free
  playerId: "my-player",
  apiBaseUrl: (typeof process !== 'undefined' && process.env.REACT_APP_API_BASE_URL) || "https://spinco.staging.api.viewlift.com/v3",
  token: getToken() || '',
  skin: "VL_ONE",
  mute: true,
  autoplay: true,
  customData: {
    macros: getMacros(),
  }
};

export const tveAuthConfig = {
  apiConfig: {
    xApikey: (typeof process !== 'undefined' && process.env.REACT_APP_X_API_KEY) || "BkSBbok02k6RYUlCLRzI23wac0euoSfC3FP7uW2S",
    siteName: (typeof process !== 'undefined' && process.env.REACT_APP_SITE_NAME) || "spinco.staging.web.viewlift.com",
    domain: (typeof process !== 'undefined' && process.env.REACT_APP_DOMAIN) || "spinco",
    apiBaseUrl: (typeof process !== 'undefined' && process.env.REACT_APP_API_BASE_URL) || "https://spinco.staging.api.viewlift.com",
  },
  mediaInfo: {
    tveBannerUrl: "https://spinco.staging.asset.viewlift.com/images/2025/05/26/placeholder3x4-1748260656583.png?impolicy=resize&w=1920&h=1080",
    tveBannerAltDescription: "Provider logo",
  },
  authSetting: {
    isTveAuth: true,
    isTveOnly: window?.app_data?.appcmsMain?.monetizationConfig?.tveLoginOnly || true,
    tveSuccessRedirectCb: (tokenData) => setTveToken(tokenData),
  },
  styleInfo: {
    loginCtaBgColor: "#9f9a9a",
    loginCtaTextColor: "#0f0d0d",
    loginCtaBorderRadius: "4px",
  },
  debugConfig: {
    tveRedirectUrl: "https://spinco.staging.web.viewlift.com/tve-login",
    tveRedirectAuthQueryParam: "sessionAuthStatus",
    tveClientDomain: "spinco.staging.web.viewlift.com",
  },
}
