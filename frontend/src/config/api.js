// API Configuration
export const API_BASE_URL = "";
// API Endpoints
export const API_ENDPOINTS = {
  // User endpoints
  USER_LOGIN: "/api/user/login",
  USER_REGISTER: "/api/user",
  USER_SEARCH: "/api/user",
  
  // Chat endpoints
  CHAT_CREATE: "/api/chat",
  CHAT_GET_ALL: "/api/chat",
  CHAT_GROUP_CREATE: "/api/chat/group",
  CHAT_GROUP_UPDATE: "/api/chat/rename",
  CHAT_GROUP_ADD_USER: "/api/chat/groupadd",
  CHAT_GROUP_REMOVE_USER: "/api/chat/groupremove",
  
  // Message endpoints
  MESSAGE_SEND: "/api/message",
  MESSAGE_GET: "/api/message",
};

// Socket configuration
export const SOCKET_ENDPOINT = API_BASE_URL  ;

// Cloudinary configuration
export const CLOUDINARY_CONFIG = {
  UPLOAD_URL: "https://api.cloudinary.com/v1_1/dbpt6np2b/image/upload",
  UPLOAD_PRESET: "mychat",
  CLOUD_NAME: "dbpt6np2b"
};

// Helper function to get full API URL
export const getApiUrl = (endpoint) => {
  return `${API_BASE_URL}${endpoint}`;
};

// Helper function to get socket URL
export const getSocketUrl = () => {
  return SOCKET_ENDPOINT;
};
