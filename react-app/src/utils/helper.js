import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie'

export function setTveToken(tokenData) {
  try {

    if (!tokenData.authorizationToken) {
      console.error('Invalid Token Data');
      return false;
    }

    Cookies.set('vlTveToken', JSON.stringify({
      authorizationToken: tokenData.authorizationToken,
      refreshToken: tokenData.refreshToken
    }), {
      expires: 7, 
      path: '/',
      secure: true,
      sameSite: 'Strict'
    });

    return true;
  } catch (error) {
    console.error('Error saving tokens to cookie:', error);
    return false;
  }
}

export function getToken() {
  try {
    console.log("inside token")
    const tveToken = Cookies.get('vlTveToken');
    if (tveToken) {
      const parsedTveToken = JSON.parse(tveToken);
      if (parsedTveToken?.authorizationToken) return parsedTveToken.authorizationToken;
    }

    const token = Cookies.get('token');
    if (token) {
      const parsedToken = JSON.parse(token);
      if (parsedToken?.authorizationToken) return parsedToken.authorizationToken;
    }

    // TODO: Add fetch Anonymous token logic
    return null;
  } catch (error) {
    console.error('Error fetching tokens from cookies:', error);
    return null;
  }
}

function decodeToken(token) {
  const authToken = jwtDecode(token);
  const tokenExp = authToken?.exp
  const date = new Date(tokenExp * 1000);
  return date
}

export function setToken(tokenData) {
  if (!tokenData?.authorizationToken) console.error('Invalid request to update token')
  const tokenExpiryTime = decodeToken(tokenData?.authorizationToken)
  const updatedTokenData = {
    expiration: tokenExpiryTime?.getTime(),
    authorizationToken: tokenData?.authorizationToken,
    refreshToken: tokenData?.refreshToken,
    duration: tokenExpiryTime?.getTime() - new Date().getTime(),
  }
  Cookies.set('asdkToken', JSON.stringify(updatedTokenData),{ expires: 365})
  return updatedTokenData
}