import * as Yup from "yup";

import { Formik, Form, Field } from "formik";

import { api } from "../../services/api";
import { Container } from "./styles";

export const Newsletter = () => {
  const schema = Yup.object().shape({
    name: Yup.string()
      .min(4, "Preencha com seu nome completo ")
      .required("preencha o campo"),
    email: Yup.string()
      .email("Preencha com um e-mail válido")
      .required("preencha o campo"),
  });

  return (
    <>
      <Container>
        <div>
          <h3>Participe de nossas news com promoções e novidades!</h3>
          <Formik
            initialValues={{
              name: "",
              email: "",
            }}
            validationSchema={schema}
            onSubmit={(values) => {
              api.post("newsletter", values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div>
                  <Field
                    name="name"
                    placeholder="Digite seu nome"
                    className={` ${errors.name && touched.name ? "error" : ""}`}
                  />
                  {errors.name && touched.name ? <p>{errors.name}</p> : null}
                </div>
                {/* type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)} */}
                {/* /> */}
                <div>
                  <Field
                    name="email"
                    placeholder="Digite seu nome"
                    className={` ${
                      errors.email && touched.email ? "error" : ""
                    }`}
                  />
                  {errors.email && touched.email ? <p>{errors.email}</p> : null}
                </div>
                <button type="submit">Eu quero!</button>
              </Form>
            )}
          </Formik>
        </div>
      </Container>
    </>
  );
};
