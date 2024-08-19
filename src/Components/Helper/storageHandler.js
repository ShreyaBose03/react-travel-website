const setLocalData = (data) => {
    localStorage.setItem("client", JSON.stringify(data));
}

const getLocalData = () => {
    const data = localStorage.getItem("client");
    return JSON.parse(data);
}

const removeLocalData = (item) => {
    localStorage.removeItem(item);
}


export default {
    setLocalData,
    getLocalData,
    removeLocalData
}