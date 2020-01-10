import * as Yup from "yup";

export const schema = Yup.object().shape({
  content: Yup.string()
    .min(4, "O conteudo do Post deve conter no minimo 20 caracters")
    .required("O conteudo do Post e Obrigatorio"),
  title: Yup.string()
    .min(4, "O titulo do Post deve conter no minimo 4 caracters")
    .required("O titulo do Post e obrigatorio")
});
