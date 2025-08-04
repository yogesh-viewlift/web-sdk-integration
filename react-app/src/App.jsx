import React, { useEffect, useState } from "react"
import Cookies from "js-cookie"
import VLPlayerCore from "@viewlift/player/esm/index"
import "@viewlift/player/esm/bundle.css"
import VLAuthentication from "@viewlift/web-authentication"
import "@viewlift/web-authentication/dist/assets/style.css"
import { playerConfig, tveAuthConfig } from "./utils/config"
import "./styles/style.scss"

const VlPlayer = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [hardwallError, setHardwallError] = useState(null)
  console.log("tveAuthConfig: ", tveAuthConfig)

  const { StandaloneAuthentication } = VLAuthentication()

  const initiateVideoPlayer = async () => {
    setIsLoading(true)
    console.log("playerConfig: ", playerConfig)
    VLPlayerCore()
      .init(playerConfig)
      .then(async (e) => {
        console.log("Player initialized successfully", e)
      })
      .catch(async (e) => {
        console.error("Player Initialization Error:", e);

        const errData = e?.response?.response?.data || {};
        const errCode = errData.errorCode;
        let errorMsg = e?.msg || errData.errorMessage || "An error occurred while initializing the player.";

        if (errCode === "TVE_SUBSCRIPTION_NOT_FOUND") {
          errorMsg = "To view this content, please authenticate with your TV provider.";
          setIsAuthenticated(false);
        } else if (errCode === "VIDEO_NOT_EXISTS") {
          errorMsg = "Sorry, the video you’re looking for is unavailable.";
        }
        setHardwallError(errorMsg);
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  // Check authentication status on mount (post-redirect refresh)
  useEffect(() => {
    const token = Cookies.get("token")
    if (token) {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  // Initialize player when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      initiateVideoPlayer()
    }
  }, [isAuthenticated])

  return (
    <div className="vl-player-container">
      {isLoading && <div className="vl-player-spinner"></div>}
      {error && <div className="vl-player-error-message">Error: {error}</div>}

      <div className="vl-player-content">
        {/* video player */}
        {isAuthenticated && <video id="my-player" className="video-js" style={{ width: "100%", height: "100%" }}></video>}

        {/* Security Wall */}
        {(!isAuthenticated || hardwallError) && (
          <div className="vl-player-security-wall">
            <div className="vl-player-security-wall-message">
              <p>{hardwallError || "To view this content, please authenticate with your TV provider."}</p>

              {!isAuthenticated && (
                <div className="vl-player-tve-button">
                  <StandaloneAuthentication config={tveAuthConfig} />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default VlPlayer
