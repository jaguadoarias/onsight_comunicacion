import { useState, type FormEvent, type ChangeEvent } from "react";
import { AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaCheck,
  FaPaperPlane,
  FaPhone,
} from "react-icons/fa";
import {
  fadeUpVariants,
  slideInLeftVariants,
  slideInRightVariants,
} from "../../styles/animations";
import {
  ContactSection,
  Container,
  SectionHeader,
  SectionLabel,
  SectionTitle,
  SectionSubtitle,
  ContactGrid,
  InfoCard,
  InfoTitle,
  InfoText,
  InfoItem,
  InfoIcon,
  InfoDetail,
  Form,
  FormCard,
  FormRow,
  FormGroup,
  Label,
  Input,
  Textarea,
  ErrorMsg,
  SubmitBtn,
  SuccessPanel,
} from "./Contact.styles";

interface FormFields {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormFields, string>>;

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string;

export default function Contact() {
  const { t } = useTranslation();
  const [fields, setFields] = useState<FormFields>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const validate = (f: FormFields): FormErrors => {
    const errs: FormErrors = {};
    if (!f.name || f.name.trim().length < 2) {
      errs.name = t("contact.nameRequired");
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) {
      errs.email = t("contact.emailInvalid");
    }
    if (!f.message || f.message.trim().length < 20) {
      errs.message = t("contact.messageMinLength");
    }
    return errs;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFields((f) => ({ ...f, [name]: value }));
    if (errors[name as keyof FormFields]) {
      setErrors((err) => ({ ...err, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(fields);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setServerError("");

    try {
      if (FORMSPREE_ENDPOINT && FORMSPREE_ENDPOINT.startsWith("https://")) {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(fields),
        });
        if (!res.ok) throw new Error("Error al enviar el formulario");
      } else {
        // Fallback: open mail client
        const subject = encodeURIComponent(
          `Contacto desde web: ${fields.name}`,
        );
        const body = encodeURIComponent(
          `Nombre: ${fields.name}\nEmail: ${fields.email}\nTeléfono: ${fields.phone}\nServicio: ${fields.service}\n\n${fields.message}`,
        );
        window.location.href = `mailto:info@onsightcomunicacion.com?subject=${subject}&body=${body}`;
      }
      setSuccess(true);
    } catch {
      setServerError(t("contact.serverError"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactSection id="contacto">
      <Container>
        <SectionHeader>
          <SectionLabel>{t("contact.label")}</SectionLabel>
          <SectionTitle
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}>
            {t("contact.title")}
          </SectionTitle>
          <SectionSubtitle
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}>
            {t("contact.subtitle")}
          </SectionSubtitle>
        </SectionHeader>

        <ContactGrid>
          <InfoCard
            variants={slideInLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}>
            <InfoTitle>{t("contact.infoTitle")}</InfoTitle>
            <InfoText>{t("contact.infoText")}</InfoText>

            <InfoItem>
              <InfoIcon>
                <FaMapMarkerAlt />
              </InfoIcon>
              <InfoDetail>{t("contact.location")}</InfoDetail>
            </InfoItem>

            <InfoItem>
              <InfoIcon>
                <FaEnvelope />
              </InfoIcon>
              <InfoDetail>
                <a href="mailto:onsightcomunicacion@gmail.com">
                  onsightcomunicacion@gmail.com
                </a>
              </InfoDetail>
            </InfoItem>

            <InfoItem>
              <InfoIcon>
                <FaPhone />
              </InfoIcon>
              <InfoDetail>
                <a href="tel:+699 43 44 71">699 43 44 71</a>
              </InfoDetail>
            </InfoItem>
          </InfoCard>

          <FormCard
            variants={slideInRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}>
            <AnimatePresence mode="wait">
              {success ? (
                <SuccessPanel
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}>
                  <div className="check">
                    <FaCheck />
                  </div>
                  <h3>{t("contact.successTitle")}</h3>
                  <p>{t("contact.successText")}</p>
                </SuccessPanel>
              ) : (
                <Form key="form" onSubmit={handleSubmit} noValidate>
                  <FormRow>
                    <FormGroup>
                      <Label htmlFor="name">{t("contact.nameLabel")}</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder={t("contact.namePlaceholder")}
                        value={fields.name}
                        onChange={handleChange}
                        $error={!!errors.name}
                        autoComplete="name"
                      />
                      {errors.name && <ErrorMsg>{errors.name}</ErrorMsg>}
                    </FormGroup>

                    <FormGroup>
                      <Label htmlFor="email">{t("contact.emailLabel")}</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder={t("contact.emailPlaceholder")}
                        value={fields.email}
                        onChange={handleChange}
                        $error={!!errors.email}
                        autoComplete="email"
                      />
                      {errors.email && <ErrorMsg>{errors.email}</ErrorMsg>}
                    </FormGroup>
                  </FormRow>

                  <FormGroup>
                    <Label htmlFor="message">{t("contact.messageLabel")}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={t("contact.messagePlaceholder")}
                      value={fields.message}
                      onChange={handleChange}
                      $error={!!errors.message}
                    />
                    {errors.message && <ErrorMsg>{errors.message}</ErrorMsg>}
                  </FormGroup>

                  {serverError && (
                    <ErrorMsg
                      style={{ display: "block", marginBottom: "1rem" }}>
                      {serverError}
                    </ErrorMsg>
                  )}

                  <SubmitBtn
                    type="submit"
                    $loading={loading}
                    disabled={loading}
                    style={{
                      color: "var(--gold, #fff)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                    }}>
                    <FaPaperPlane size={14} />
                    {loading ? t("contact.submitting") : t("contact.submit")}
                  </SubmitBtn>
                </Form>
              )}
            </AnimatePresence>
          </FormCard>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
}
