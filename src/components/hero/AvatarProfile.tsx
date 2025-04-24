import avatar_profile from '@/assets/avatar-profile.webp';

const AvatarProfile = () => {
  return (
    <figure className="rounded-full overflow-hidden lg:size-[22em] z-10 lg:block hidden">
      <img
        src={avatar_profile}
        loading="lazy"
        alt="avatar-profile-image"
        className="size-full object-cover animate-[image-filter_600ms_ease-out_forwards]"
      />
    </figure>
  );
};

export default AvatarProfile;
