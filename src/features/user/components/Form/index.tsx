import { ChangeEvent, FC, FormEvent, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import Button from "@common/components/Button";
import ImageUpload from "@common/components/ImageUpload";
import Input from "@common/components/Input";
import StyledForm from "@features/user/components/Form/styled";
import { OnSubmit, UserFormType, UserType } from "@features/user/userTypes";

type FormProps = {
    onSubmit?: OnSubmit;
    userItem?: UserType;
};

const Form: FC<FormProps> = ({ onSubmit = () => undefined, userItem }) => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState<UserFormType>({
        name: "",
        photo: "",
        email: "",
        location: "",
    });

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }, []);

    const handleSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            const userData = {
                ...formData,
                id: userItem?.id ?? 0,
                photo: userItem?.photo ?? "",
                disabled: userItem?.disabled || false,
                registeredDate: new Date().toISOString(),
                lastActiveDate: new Date().toISOString(),
            };

            onSubmit(userData, userItem?.id);
        },
        [formData, onSubmit, userItem?.disabled, userItem?.id, userItem?.photo],
    );

    useEffect(() => {
        if (userItem) {
            setFormData({
                name: userItem?.name,
                photo: userItem?.photo,
                email: userItem?.email,
                location: userItem?.location,
            });
        }
    }, [userItem]);

    return (
        <StyledForm className="BS-form mt-26 pv-52 ph-54">
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("userName")}
                    sizeType="small"
                />
                <ImageUpload initialImage={formData.photo} className="mt-16" />
                <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("email")}
                    sizeType="small"
                    className="mt-16"
                />
                <Input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder={t("location")}
                    sizeType="small"
                    className="mt-16"
                />
                <Button type="submit" size="small" className="mt-28" isFullWidth>
                    {t("save")}
                </Button>
            </form>
        </StyledForm>
    );
};

export default Form;
