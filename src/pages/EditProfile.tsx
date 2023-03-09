import { Form, Formik } from "formik";
import styled from "styled-components";
import Head from "../components/Head";
import {
    MeDocument,
    MeQuery,
    useEditProfileMutation,
    useMeQuery,
    User,
} from "../generated/graphql";
import profilePicture from "../images/profile-picture.svg";
import profileBanner from "../images/profile-banner.svg";
import { toErrorMap } from "../utils/toErrorMap";
import {
    ImageButtonContainer,
    Button,
    PageBlock,
    SmallButton,
    Status,
} from "../styles/global";
import AddImage from "../components/icons/AddImage";
import InputField from "../components/input/InputField";
import { useRef, useState } from "react";
import axios from "axios";
import ModalLoading from "../components/utils/modal/ModalLoading";
import Close from "../components/icons/Close";

const EditProfileContainer = styled.div`
    display: block;
`;

const BannerImageContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    background-color: #151414;
    width: 100%;
    height: 240px;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        height: 240px;
        opacity: 0.6;
        object-fit: cover;
        object-position: center;
    }
`;

const EditProfileInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-top: 12px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 32px;
`;

const EditProfileImageContainer = styled.div`
    display: flex;
    gap: 12px;
    justify-content: space-between;
`;

const EditProfileImageInnerContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #151414;
    width: 128px;
    height: 128px;
    border-radius: 9999px;
    margin-top: -76px;

    img {
        width: 120px;
        height: 120px;
        border-radius: 9999px;
        opacity: 0.6;
        object-fit: cover;
        object-position: center;
    }
`;

const EditProfileFormContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const EditButton = styled(Button)`
    background-color: #039BE5;
    color: #ffffff;
`;

const UploadProfileImageButton = styled.div`
    display: flex;
    position: absolute;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    z-index: 1000;

    input[type="file"] {
        position: absolute;
        width: 40px;
        height: 40px;
        visibility: hidden;
    }
`;

const RemoveImage = styled(SmallButton)`
    color: #ffffff;
    border: 2px solid #ffffff;
`;

const BannerImageButtonsContainer = styled.div`
    display: flex;
    position: absolute;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    gap: 24px;
    z-index: 1000;
`;

const UploadBannerImageButton = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    z-index: 1000;

    input[type="file"] {
        position: absolute;
        width: 40px;
        height: 40px;
        visibility: hidden;
    }
`;

function EditProfile() {
    const { data, loading, error } = useMeQuery({ fetchPolicy: "network-only" });
    const [editProfile] = useEditProfileMutation();
    const [selectedProfilePicture, setSelectedProfilePicture] =
        useState<File | null>(null);
    const [selectedProfileBanner, setSelectedProfileBanner] =
        useState<File | null>(null);

    const uploadProfilePictureRef = useRef<HTMLInputElement>(null);
    const uploadProfileBannerRef = useRef<HTMLInputElement>(null);
    const profilePictureRef = useRef<HTMLImageElement>(null);
    const profileBannerRef = useRef<HTMLImageElement>(null);
    const [deleteProfilePicture, setDeleteProfilePicture] =
        useState<boolean>(false);
    const [deleteProfileBanner, setDeleteProfileBanner] =
        useState<boolean>(false);

    const [isProfilePictureUploaded, setIsProfilePictureUploaded] =
        useState<boolean>(false);
    const [isProfileBannerUploaded, setIsProfileBannerUploaded] =
        useState<boolean>(false);

    return (
        <>
            <Head
                title="Edit your profile | Square"
                description="Edit your profile on Square."
            />
            <EditProfileContainer>
                {(loading && !data) || error ? (
                    <ModalLoading />
                ) : (
                    <>
                        <BannerImageContainer>
                            <BannerImageButtonsContainer>
                                <UploadBannerImageButton
                                    role="button"
                                    title="Upload your profile banner"
                                    aria-label="Upload your profile banner"
                                    onClick={() => {
                                        if (uploadProfileBannerRef.current) {
                                            uploadProfileBannerRef.current.click();
                                        }
                                    }}
                                >
                                    <input
                                        type="file"
                                        name="profile-banner"
                                        ref={uploadProfileBannerRef}
                                        onChange={(event) => {
                                            let localProfileBanner = null;
                                            localProfileBanner =
                                                event.target.files![0];
                                            setSelectedProfileBanner(
                                                localProfileBanner
                                            );
                                            setDeleteProfileBanner(false);
                                            setIsProfileBannerUploaded(true);
                                            if (
                                                profileBannerRef &&
                                                profileBannerRef.current
                                            ) {
                                                profileBannerRef.current.src =
                                                    URL.createObjectURL(
                                                        localProfileBanner
                                                    );
                                            }
                                        }}
                                        accept="image/png , image/jpeg, image/webp"
                                    />
                                    <ImageButtonContainer>
                                        <AddImage />
                                    </ImageButtonContainer>
                                </UploadBannerImageButton>
                                {selectedProfileBanner ||
                                (data?.me?.profile?.profileBanner !== "" &&
                                    data?.me?.profile?.profileBanner !==
                                        null) ? (
                                    <PageBlock>
                                        <ImageButtonContainer
                                            role="button"
                                            title="Remove image"
                                            aria-label="Remove image"
                                            onClick={() => {
                                                if (
                                                    uploadProfileBannerRef &&
                                                    uploadProfileBannerRef.current
                                                ) {
                                                    uploadProfileBannerRef.current.value =
                                                        "";
                                                }
                                                if (
                                                    profileBannerRef &&
                                                    profileBannerRef.current
                                                ) {
                                                    profileBannerRef.current.src =
                                                        profileBanner;
                                                }
                                                setSelectedProfileBanner(null);
                                                setDeleteProfileBanner(true);
                                                setIsProfileBannerUploaded(
                                                    false
                                                );
                                            }}
                                        >
                                            <Close type="small" />
                                        </ImageButtonContainer>
                                    </PageBlock>
                                ) : null}
                            </BannerImageButtonsContainer>
                            <img
                                src={
                                    data?.me?.profile?.profileBanner !== "" &&
                                    data?.me?.profile?.profileBanner !== null
                                        ? data?.me?.profile?.profileBanner
                                        : profileBanner
                                }
                                ref={profileBannerRef}
                                title={`${data?.me?.firstName} ${data?.me?.lastName}'s profile banner.`}
                                alt={`${data?.me?.firstName} ${data?.me?.lastName}`}
                            />
                        </BannerImageContainer>
                        <EditProfileInnerContainer>
                            <EditProfileImageContainer>
                                <EditProfileImageInnerContainer>
                                    <UploadProfileImageButton
                                        role="button"
                                        title="Upload your profile picture"
                                        aria-label="Upload your profile picture"
                                        onClick={() => {
                                            if (
                                                uploadProfilePictureRef.current
                                            ) {
                                                uploadProfilePictureRef.current.click();
                                            }
                                        }}
                                    >
                                        <input
                                            type="file"
                                            name="profile-picture"
                                            ref={uploadProfilePictureRef}
                                            onChange={(event) => {
                                                let localProfilePicture = null;
                                                localProfilePicture =
                                                    event.target.files![0];
                                                setSelectedProfilePicture(
                                                    localProfilePicture
                                                );
                                                setDeleteProfilePicture(false);
                                                setIsProfilePictureUploaded(
                                                    true
                                                );
                                                if (
                                                    profilePictureRef &&
                                                    profilePictureRef.current
                                                ) {
                                                    profilePictureRef.current.src =
                                                        URL.createObjectURL(
                                                            localProfilePicture
                                                        );
                                                }
                                            }}
                                            accept="image/png , image/jpeg, image/webp"
                                        />
                                        <ImageButtonContainer>
                                            <AddImage />
                                        </ImageButtonContainer>
                                    </UploadProfileImageButton>
                                    <img
                                        src={
                                            data?.me?.profile
                                                ?.profilePicture !== "" &&
                                            data?.me?.profile
                                                ?.profilePicture !== null
                                                ? data?.me?.profile
                                                      ?.profilePicture
                                                : profilePicture
                                        }
                                        ref={profilePictureRef}
                                        title={`${data?.me?.firstName} ${data?.me?.lastName}'s profile picture.`}
                                        alt={`${data?.me?.firstName} ${data?.me?.lastName}`}
                                    />
                                </EditProfileImageInnerContainer>
                                {selectedProfilePicture !== null ||
                                (data?.me?.profile?.profilePicture !== "" &&
                                    data?.me?.profile?.profilePicture !==
                                        null) ? (
                                    <PageBlock>
                                        <RemoveImage
                                            role="button"
                                            title="Remove image"
                                            aria-label="Remove image"
                                            onClick={() => {
                                                if (
                                                    uploadProfilePictureRef &&
                                                    uploadProfilePictureRef.current
                                                ) {
                                                    uploadProfilePictureRef.current.value =
                                                        "";
                                                }
                                                if (
                                                    profilePictureRef &&
                                                    profilePictureRef.current
                                                ) {
                                                    profilePictureRef.current.src =
                                                        profilePicture;
                                                }
                                                setSelectedProfilePicture(null);
                                                setDeleteProfilePicture(true);
                                                setIsProfilePictureUploaded(
                                                    false
                                                );
                                            }}
                                        >
                                            Remove image
                                        </RemoveImage>
                                    </PageBlock>
                                ) : null}
                            </EditProfileImageContainer>
                            <Formik
                                initialValues={{
                                    website: data?.me?.profile?.website || "",
                                    bio: data?.me?.profile?.bio || "",
                                    profileBanner:
                                        data?.me?.profile?.profileBanner || "",
                                    profilePicture:
                                        data?.me?.profile?.profilePicture || "",
                                    lastName: data?.me?.lastName || "",
                                    firstName: data?.me?.firstName || "",
                                }}
                                onSubmit={async (
                                    values,
                                    { setErrors, setStatus }
                                ) => {
                                    let profilePictureName = "";
                                    let existingProfilePictureName = "";
                                    let profilePictureDirectory = "";

                                    if (data && data.me && data.me.profile?.profilePicture !== "") {
                                        existingProfilePictureName = data.me.profile?.profilePicture?.replace(`https://cdn.projectsquare.online/${process.env.REACT_APP_ENV === "development" ? "local-users" : "users"}/${data.me.id}/`, "")!;
                                    }

                                    if (selectedProfilePicture !== null) {
                                        profilePictureName = `profile-picture-${new Date().getTime()}.jpeg`;

                                        if (existingProfilePictureName !== "") {
                                            await axios.delete(
                                                `${process.env.REACT_APP_STORAGE_LINK}/${
                                                    process
                                                        .env
                                                        .REACT_APP_ENV ===
                                                    "development"
                                                        ? "local-users"
                                                        : "users"
                                                }/${
                                                    data
                                                        ?.me
                                                        ?.id
                                                }/${existingProfilePictureName}`
                                            );
                                        }

                                        profilePictureDirectory =
                                            process
                                                .env
                                                .REACT_APP_ENV ===
                                            "development"
                                                ? `local-users/${data?.me?.id}`
                                                : `users/${data?.me?.id}`;

                                        let profilePictureKey = `${profilePictureDirectory}/${profilePictureName}`;
                                        
                                        const {
                                            url: profilePictureUrl,
                                        } = await fetch(
                                            `${process.env.REACT_APP_SERVER_ORIGIN}/presigned-url`,
                                            {
                                                method: "POST",
                                                headers:
                                                    {
                                                        Accept: "application/json",
                                                        "Content-Type":
                                                            "application/json",
                                                    },
                                                body: JSON.stringify(
                                                    {
                                                        key: profilePictureKey,
                                                    }
                                                ),
                                            }
                                        ).then(
                                            (res) =>
                                                res.json()
                                        );

                                        setStatus("Uploading the profile picture...");

                                        const profilePictureConfig = {
                                            onUploadProgress: function(progressEvent: any) {
                                                var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                                                setStatus(`Uploading the profile picture: ${percentCompleted}%.`);
                                            },
                                            headers: {
                                                "Content-Type": "multipart/form-data",
                                            },
                                        };
                        
                                        await axios.put(profilePictureUrl, selectedProfilePicture, profilePictureConfig)
                                            .then(() => {
                                                setStatus("Your profile picture was uploaded successfully.");
                                            }).catch((error) => {
                                                setStatus(`An error occurred while uploading your profile picture. Error code: ${error.code}.`);
                                            });
                                    } else if (
                                        data?.me?.profile?.profilePicture !==
                                            "" &&
                                        data?.me?.profile
                                            ?.profilePicture !== null &&
                                        deleteProfilePicture
                                    ) {
                                        await axios.delete(
                                            `${process.env.REACT_APP_STORAGE_LINK}/${
                                                process
                                                    .env
                                                    .REACT_APP_ENV ===
                                                "development"
                                                    ? "local-users"
                                                    : "users"
                                            }/${
                                                data
                                                    ?.me
                                                    ?.id
                                            }/${existingProfilePictureName}`
                                        );
                                    } else {
                                        profilePictureName = existingProfilePictureName;
                                    }

                                    let profileBannerName = "";
                                    let existingProfileBannerName = "";
                                    let profileBannerDirectory = "";

                                    if (data && data.me && data.me.profile?.profileBanner !== "") {
                                        existingProfileBannerName = data.me.profile?.profileBanner?.replace(`https://cdn.projectsquare.online/${process.env.REACT_APP_ENV === "development" ? "local-users" : "users"}/${data.me.id}/`, "")!;
                                    }

                                    if (selectedProfileBanner !== null) {
                                        profileBannerName = `profile-banner-${new Date().getTime()}.jpeg`;

                                        if (existingProfileBannerName !== "") {
                                            await axios.delete(
                                                `${process.env.REACT_APP_STORAGE_LINK}/${
                                                    process
                                                        .env
                                                        .REACT_APP_ENV ===
                                                    "development"
                                                        ? "local-users"
                                                        : "users"
                                                }/${
                                                    data
                                                        ?.me
                                                        ?.id
                                                }/${existingProfileBannerName}`
                                            );
                                        } 

                                        profileBannerDirectory =
                                            process
                                                .env
                                                .REACT_APP_ENV ===
                                            "development"
                                                ? `local-users/${data?.me?.id}`
                                                : `users/${data?.me?.id}`;

                                        let profileBannerKey = `${profileBannerDirectory}/${profileBannerName}`;
                                        
                                        const {
                                            url: profileBannerUrl,
                                        } = await fetch(
                                            `${process.env.REACT_APP_SERVER_ORIGIN}/presigned-url`,
                                            {
                                                method: "POST",
                                                headers:
                                                    {
                                                        Accept: "application/json",
                                                        "Content-Type":
                                                            "application/json",
                                                    },
                                                body: JSON.stringify(
                                                    {
                                                        key: profileBannerKey,
                                                    }
                                                ),
                                            }
                                        ).then(
                                            (res) =>
                                                res.json()
                                        );

                                        setStatus("Uploading the profile banner...");

                                        const profileBannerConfig = {
                                            onUploadProgress: function(progressEvent: any) {
                                                var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                                                setStatus(`Uploading the profile banner: ${percentCompleted}%.`);
                                            },
                                            headers: {
                                                "Content-Type": "multipart/form-data",
                                            },
                                        };
                        
                                        await axios.put(profileBannerUrl, selectedProfileBanner, profileBannerConfig)
                                            .then(() => {
                                                setStatus("Your profile banner was uploaded successfully.");
                                            }).catch((error) => {
                                                setStatus(`An error occurred while uploading your profile banner. Error code: ${error.code}.`);
                                            });
                                    } else if (
                                        data?.me?.profile?.profileBanner !==
                                            "" &&
                                        data?.me?.profile?.profileBanner !==
                                            null &&
                                        deleteProfileBanner
                                    ) {
                                        await axios.delete(
                                            `${process.env.REACT_APP_STORAGE_LINK}/${
                                                process
                                                    .env
                                                    .REACT_APP_ENV ===
                                                "development"
                                                    ? "local-users"
                                                    : "users"
                                            }/${
                                                data
                                                    ?.me
                                                    ?.id
                                            }/${existingProfileBannerName}`
                                        );
                                    } else {
                                        profileBannerName = existingProfileBannerName;
                                    }

                                    setSelectedProfilePicture(null);
                                    setSelectedProfileBanner(null);

                                    const response = await editProfile({
                                        variables: {
                                            website: values.website,
                                            bio: values.bio,
                                            profileBanner:
                                                (!isProfileBannerUploaded &&
                                                    !deleteProfileBanner &&
                                                    data?.me?.profile
                                                        ?.profileBanner !==
                                                        "") ||
                                                isProfileBannerUploaded
                                                    ? `https://cdn.projectsquare.online/${process.env.REACT_APP_ENV === "development" ? "local-users" : "users"}/${data?.me?.id}/${profileBannerName}`
                                                    : "",
                                            profilePicture:
                                                (!isProfilePictureUploaded &&
                                                    !deleteProfilePicture &&
                                                    data?.me?.profile
                                                        ?.profilePicture !==
                                                        "") ||
                                                isProfilePictureUploaded
                                                    ? `https://cdn.projectsquare.online/${process.env.REACT_APP_ENV === "development" ? "local-users" : "users"}/${data?.me?.id}/${profilePictureName}`
                                                    : "",
                                            lastName: values.lastName,
                                            firstName: values.firstName,
                                        },
                                        update: (store, { data }) => {
                                            if (data) {
                                                store.writeQuery<MeQuery>({
                                                    query: MeDocument,
                                                    data: {
                                                        me: data.editProfile
                                                            ?.user as User,
                                                    },
                                                });
                                            }
                                        },
                                    });

                                    if (
                                        response.data?.editProfile?.user &&
                                        response.data.editProfile.errors
                                            ?.length === 0
                                    ) {
                                        setStatus(
                                            response.data.editProfile.status
                                        );
                                    } else {
                                        if (
                                            response.data?.editProfile?.status
                                        ) {
                                            setStatus(
                                                response.data.editProfile.status
                                            );
                                        } else {
                                            setStatus(null);
                                            setErrors(
                                                toErrorMap(
                                                    response.data?.editProfile
                                                        .errors!
                                                )
                                            );
                                        }
                                    }
                                }}
                            >
                                {({ errors, status, values }) => (
                                    <Form>
                                        {status ? (
                                            <Status>{status}</Status>
                                        ) : null}
                                        <EditProfileFormContent>
                                            <InputField
                                                field="firstName"
                                                type="text"
                                                placeholder="First name"
                                                value={values.firstName}
                                                errors={errors}
                                            />
                                            <InputField
                                                field="lastName"
                                                type="text"
                                                placeholder="Last name"
                                                value={values.lastName}
                                                errors={errors}
                                            />
                                            <InputField
                                                field="bio"
                                                type="textarea"
                                                placeholder="Bio"
                                                value={values.bio}
                                                errors={errors}
                                            />
                                            <InputField
                                                field="website"
                                                type="text"
                                                placeholder="Website"
                                                value={values.website}
                                                errors={errors}
                                            />
                                            <PageBlock>
                                                <EditButton
                                                    type="submit"
                                                    title="Save changes"
                                                    role="button"
                                                    aria-label="Save changes"
                                                >
                                                    Save
                                                </EditButton>
                                            </PageBlock>
                                        </EditProfileFormContent>
                                    </Form>
                                )}
                            </Formik>
                        </EditProfileInnerContainer>
                    </>
                )}
            </EditProfileContainer>
        </>
    );
}

export default EditProfile;
