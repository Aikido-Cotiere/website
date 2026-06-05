import { defineRegleNuxtPlugin } from "@regle/nuxt/setup";
import { defineRegleConfig } from "@regle/core";
import { date, email, required, withMessage } from "@regle/rules";

export default defineRegleNuxtPlugin(() => {
  return defineRegleConfig({
    rules: () => {
      return {
        required: withMessage(required, "Le champs est obligatoire"),
        date: withMessage(date, "Merci de rensigner une date"),
        email: withMessage(email, "L'email est invalide"),
      };
    },
  });
});
