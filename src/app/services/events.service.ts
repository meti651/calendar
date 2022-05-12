import data from "../../resource.json";

const getEvents: () => Promise<Object> = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(data);
      resolve(data.events);
    }, 10);
  });

export const eventServices = {
  getEvents,
};
