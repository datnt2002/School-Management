export const server = "https://localhost:7069/";
// export const server = "https://fgwprojectcms.com/";

export const apiCategory = `${server}api/category`;

export const apiComment = `${server}api/comment`;
export const apiDepartment = `${server}api/department`;

//api authentication
export const apiLogin = `${server}api/auth/Login`;
export const apiAccount = `${server}api/auth`;
export const apiProfile = `${server}api/auth/profile`;
export const apiCreateAccount = `${server}api/auth/CreateAccount`;
export const apiEditAccount = `${server}api/auth/update`;
export const apiEditPassword = `${server}api/auth/ChangePassword`;
export const apiForgotPassword = `${server}api/auth/resetpassword`;

//apiEvent
export const apiEvent = `${server}api/event`;
export const apiEventInDate = `${server}api/event/EnventInDate`;

//apiIdea
export const apiIdea = `${server}api/idea`;
export const apiIdeaDownload = `${server}api/idea/download`;
export const apiIdeaSort = `${server}api/idea/sort`;
export const apiIdeaByEvent = `${server}api/idea/ByEvent`;
export const apiIdeaByDepartment = `${server}api/idea/byDepartment`;
export const apiIdeaByCategory = `${server}api/idea/byCategory`;
export const apiIdeaByDetail = `${server}api/idea/byDetail`;
export const apiIdeaByUser = `${server}api/idea/byUser`;
export const apiCountIdeaByUser = `${server}api/idea/countByUser`;

//apiInteraction
export const apiInteract = `${server}api/interactions`;
// export const apiInteractEdit = `${server}api/interactions/Edit`;

//apiDownload
export const apiDownloadAllFiles = `${server}api/auth/Download/Idea`;
export const apiDownloadCSV = `${server}api/auth/Download/csv`;
export const apiExportCSV = `${server}api/auth/DownloadCSV`;

//apiDashboard
export const apiCount = `${server}api/dashboard/Count`;
export const apiTrending = `${server}api/dashboard/IdeaPopular`;
export const apiIdeaPerCate = `${server}api/dashboard/IdeaPerCate`;
export const apiIdeaPerYear = `${server}api/dashboard/IdeaPerYear`;
export const apiIdeaContributor = `${server}api/dashboard/contributor`;
