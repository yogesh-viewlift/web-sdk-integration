import Cookies from 'js-cookie';
// import { setToken } from "../../helpers";

if (process.env.NODE_ENV !== 'production') {
  if (!process.env.REACT_APP_X_API_KEY) console.warn('REACT_APP_X_API_KEY is not set');
  if (!process.env.REACT_APP_SITE_NAME) console.warn('REACT_APP_SITE_NAME is not set');
  if (!process.env.REACT_APP_API_BASE_URL) console.warn('REACT_APP_API_BASE_URL is not set');
}

const playerConfig = {
  videoId: "",
  playerId: "my-player",
  apiBaseUrl: (typeof process !== 'undefined' && process.env.REACT_APP_API_BASE_URL) || "",
  token: Cookies.get('token') || '',
  skin: "VL_ONE",
  mute: true,
  autoplay: true,
};

export const getPlayerConfig = (videoId) => {
  const urlParams = new URLSearchParams(window.location.search);
  const paramVideoId = urlParams.get('videoID');
  const finalVideoId = paramVideoId || videoId;

  if (!finalVideoId) return playerConfig;

  return {
    ...playerConfig,
    videoId: finalVideoId
  }
}

export const tveAuthConfig = {
  apiConfig: {
    xApikey: (typeof process !== 'undefined' && process.env.REACT_APP_X_API_KEY) || "",
    siteName: (typeof process !== 'undefined' && process.env.REACT_APP_SITE_NAME) || "",
    domain: (typeof process !== 'undefined' && process.env.REACT_APP_DOMAIN) || "",
    apiBaseUrl: (typeof process !== 'undefined' && process.env.REACT_APP_API_BASE_URL) || "",
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
    loginCtaBgColor: "#1c1c1c",
    loginCtaTextColor: "#ffffff",
    loginCtaBgColor: "#cac3c3",
    loginCtaTextColor: "#0f0d0d",
    loginCtaWidth: "100%",
    loginCtaBorderRadius: "4px",
  },
  debugConfig: {
    tveRedirectUrl: "https://spinco.staging.web.viewlift.com/tve-login",
    tveRedirectAuthQueryParam: "sessionAuthStatus",
    tveClientDomain: "spinco.staging.web.viewlift.com",
  },
}
