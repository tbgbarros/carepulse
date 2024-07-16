import { z } from "zod";

export const UserFormValidation = z.object({
    username: z.string()
        .min(2, "Usuario deve conter oa menos quatro caracteres.")
        .max(50, "Usuario deve conter oa menos quatro caracteres."),
    email: z.string()
        .email("Email invalido."),
    phone: z.string().refine((phone) => /^\+\d{10,15}$/.test(phone), 'Telefone invalido!')
})
