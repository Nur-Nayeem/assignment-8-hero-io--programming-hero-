import { toast } from "react-toastify";
export const getAppsFromLocalStorage = () => {
  try {
    const apps = localStorage.getItem("installed");
    return apps ? JSON.parse(apps) : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const storeInstalledApp = (app) => {
  const apps = getAppsFromLocalStorage();
  const isAlreadyAdded = apps.some((p) => p.id === app.id);
  if (isAlreadyAdded) return toast.error("Already Installed");
  app["isInstalled"] = true;
  const updateApps = [...apps, app];
  localStorage.setItem("installed", JSON.stringify(updateApps));
  toast.success("Installed App Succenfully");
};

export const removeAppFromStorage = (id) => {
  const apps = getAppsFromLocalStorage();
  const filteredApps = apps.filter((app) => app.id !== id);
  localStorage.setItem("installed", JSON.stringify(filteredApps));
  toast.success("Unstalled App Succenfully");
};
