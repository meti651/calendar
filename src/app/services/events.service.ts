import data from "../../resource.json";
import { Event } from "../models/Event";

const getEvents: () => Promise<Event | Object> = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(data);
      resolve(data.events);
    }, 10);
  });

export const eventServices = {
  getEvents,
};
