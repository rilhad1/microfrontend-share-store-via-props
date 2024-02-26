export const setHostTitle = (title: string) => {
  return { type: "SET_TITLE", payload: title };
};

export const setHostSubTitle = (subTitle: string) => {
  return { type: "SET_SUB_TITLE", payload: subTitle };
};

export const setHostDefaultHandler = () => {
  return { type: "SET_DEFAULT" };
};
