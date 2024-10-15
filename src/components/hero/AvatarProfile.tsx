import avatar_profile from '@/assets/avatar-profile.webp';

const AvatarProfile = () => {
  return (
    <figure className="rounded-full overflow-hidden sm:h-[22em] sm:w-[22em] h-[15em] w-[15em] z-40">
      <img src={avatar_profile} loading='lazy' alt="avatar-profile-image" className="size-full object-cover animate-[image-filter_1s_ease-out_forwards]" />
    </figure>
  );
};

export default AvatarProfile;
