import { Customer } from "../models/customer";
import request from "./api";

const apiCustomers = {
  list: () => request.get<Customer[]>("/Seguimiento"),
  add: (data: Customer) => request.post("/Seguimiento", data),
  edit: (data: Customer) => request.put(`/Seguimiento/${data.seguimientoId}`, data),
  delete: (id: number) => request.delete(`/Seguimiento/${id}`),
  detail: (id: string) => request.get<Customer>(`/Seguimiento/${id}`),
};

export default apiCustomers;
