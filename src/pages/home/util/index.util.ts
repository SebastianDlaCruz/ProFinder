import { z } from "zod";

export const typeOfService = [
  'técnicos',
  'servicios',
  'educativo',
  'artística',
  'liberales'
];

export interface serviceModel {
  type: string,
  service: string
}

export const services = [
  {
    type: 'técnicos',
    service: 'mecánico'
  },
  {
    type: 'técnicos',
    service: 'electricista'
  },
  {
    type: 'servicios',
    service: 'carpintero'
  },
  {
    type: 'servicios',
    service: 'barbería/estilista'
  },
  {
    type: 'servicios',
    service: 'albañil'
  },
  {
    type: 'servicios',
    service: 'plomero'
  },
  {
    type: 'educativo',
    service: 'cursos'
  },
  {
    type: 'artística',
    service: 'diseño y pintura'
  },
  {
    type: 'liberales',
    service: 'otros'
  },
];




export const schemaPost = z.object({
  post: z.string().nonempty("campo requerido"),
  typeService: z.string().nonempty("campo requerido"),
  services: z.string().nonempty("campo requerido"),
  publicationType: z.string().nonempty("campo requerido")
}).partial();


export type schemaPostType = z.infer<typeof schemaPost>;
