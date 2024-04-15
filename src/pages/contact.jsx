import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import { Formik } from 'formik';
import appData from "@data/app.json";

const Contact = () => {
  return (
    <Layouts
      rightPanelBackground={"/img/person/bg-2.jpg"}
      rightPanelImg={"/img/person/7.png"}
    >
        <PageBanner pageTitle={"!Pongámonos en contacto!"} align={"center"} />
      
        {/* info */}
        <div>
            <ul className="mil-puplication-details mil-up mil-mb-90">
                <li>
                    <span className="mil-upper mil-accent">Escríbeme: </span>&nbsp;&nbsp;
                    <span className="mil-upper mil-dark">bastian_hidalgo@outlook.com</span>
                </li>
            </ul>
        </div>

        <div className="mil-section-title mil-up">
            <div className="mil-divider" />
            <h3>Conversemos!</h3>
        </div>

        {/* contact */}
        <div id="contact" className="mil-p-90-60">
        <Formik
            initialValues = {{ email: '', name: '', message: '' }}
            validate = { values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit = {( values, { setSubmitting } ) => {
                const form = document.getElementById("contactForm");
                const status = document.getElementById("contactFormStatus");
                const data = new FormData();

                data.append('name', values.name);
                data.append('email', values.email);
                data.append('message', values.message);

                fetch(form.action, {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                }).then(response => {
                    if (response.ok) {
                        status.innerHTML = "Thanks for your submission!";
                        form.reset()
                    } else {
                        response.json().then(data => {
                            if (Object.hasOwn(data, 'errors')) {
                                status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                            } else {
                                status.innerHTML = "Oops! There was a problem submitting your form"
                            }
                        })
                    }
                }).catch(error => {
                    status.innerHTML = "Oops! There was a problem submitting your form"
                });

                setSubmitting(false);
            }}
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
            <form onSubmit={handleSubmit} id="contactForm" action={appData.settings.formspreeURL} className="row align-items-center">
                <div className="col-lg-6 mil-up">
                    <input 
                      type="text" 
                      placeholder="Cual es tu nombre"
                      name="name" 
                      required="required" 
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name} 
                    />
                </div>
                <div className="col-lg-6 mil-up">
                    <input 
                      type="email" 
                      placeholder="Tu Email"
                      name="email"
                      required="required"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email} 
                    />
                </div>
                <div className="col-lg-12 mil-up">
                    <textarea 
                      placeholder="Cuéntame un poco de tu proyecto"
                      name="message" 
                      required="required"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message} 
                    />
                </div>
                <div className="col-lg-8">
                    <p className="mil-up mil-mb-30"><span className="mil-accent">*</span> Prometemos no divulgar su información personal a terceros.</p>
                </div>
                <div className="col-lg-4">
                    <div className="mil-adaptive-right mil-up mil-mb-30">
                        <button type="submit" className="mil-btn mil-sm-btn">
                            <span>Enviar mensaje</span>
                        </button>
                    </div>
                </div>
                <div className="form-status" id="contactFormStatus" />
            </form>
            )}
            </Formik>
        </div>
        {/* contact end */}
    
    </Layouts>
  );
};
export default Contact;
