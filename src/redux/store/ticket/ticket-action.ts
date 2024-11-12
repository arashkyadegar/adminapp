import { apiCallBegan } from "../api";

export const submitAddTicketAction = (ticket: any) =>
  apiCallBegan({
    url: "/tickets/",
    onSuccess: "ticketForm/ticketFormCleared",
    onError: "ticketForm/ticketFormLoadingStoped",
    onStart: "ticketForm/ticketFormRequested",
    // credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ticket),
  });

export const getTicketAction = (id: any) =>
  apiCallBegan({
    url: "/tickets/" + id,
    onSuccess: "ticketForm/ticketFormFetched",
    onError: "ticketForm/ticketFormLoadingStoped",
    onStart: "ticketForm/ticketFormRequested",
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

export const getTicketsAction = (page: number = 1) =>
  apiCallBegan({
    url: `/tickets?page=${page}`,
    onSuccess: "tickets/ticketsFetched",
    onError: "tickets/ticketsLoadingStoped",
    onStart: "tickets/ticketsRequested",
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });


export const searchTicketsAction = (name: string, page: number = 1) =>
  apiCallBegan({
    url: `/tickets/search?name=${name}&page=${page}`,
    onSuccess: "tickets/ticketsFetched",
    onError: "tickets/ticketsLoadingStoped",
    onStart: "tickets/ticketsRequested",
    method: "GET",
    // credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    //body: JSON.stringify(ticket),
  });


