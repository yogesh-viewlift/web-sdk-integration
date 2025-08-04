import Cookies from 'js-cookie';
import { getMacros } from "./utils/macro";
// import { setToken } from "../../helpers";

if (process.env.NODE_ENV !== 'production') {
  if (!process.env.REACT_APP_X_API_KEY) console.warn('REACT_APP_X_API_KEY is not set');
  if (!process.env.REACT_APP_SITE_NAME) console.warn('REACT_APP_SITE_NAME is not set');
  if (!process.env.REACT_APP_API_BASE_URL) console.warn('REACT_APP_API_BASE_URL is not set');
}

export const playerConfig = {
  videoId: "b536b3a7-134d-4af9-81aa-9b333743ec36",
  playerId: "my-player",
  apiBaseUrl: (typeof process !== 'undefined' && process.env.REACT_APP_API_BASE_URL) || "https://spinco.staging.api.viewlift.com/v3",
  token: Cookies.get('token') || '',
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
    tveSuccessRedirectCb: (tokenData) => {
      setToken(tokenData)
    }
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
